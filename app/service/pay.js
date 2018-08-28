'use strict';

const Service = require('egg').Service;
const Web3    = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
const { getLocalTime } = require('../utils')
class SignService extends Service {
  async insert ({ buyNum }) {
    // 矿机定价 1000 $
    if(Number(buyNum) < 1) {
      this.ctx.throw(403, '购买数量不能为0');
    }
    const minerMoney = 1000;
    const { mobile } = this.ctx.encode;
    const { data: { data } } = await this.ctx.curl('http://ok.truescan.net/', {
        dataType: 'json',
        timeout: 10000,
      });
    const { open, usdCnyRate } = data.find(x => x.coinName === 'ETH');
    // 订单号 = 当前时间 + 手机号码后四位
    const orderForm = 'b' + getLocalTime() + mobile.slice('7');
    const sum = minerMoney * buyNum;
    const payETH = sum / open;

    await this.app.mysql.insert('buy_record', {
      mobile,
      order_form: orderForm,
      create_time: +new Date(),
      buy_num: buyNum,
      pay_eth: payETH,
      sum
    });
    return { orderForm };
  }
  async select ({ orderForm }) {
    return await this.app.mysql.select('buy_record', {
      where: {
        order_form: orderForm
      }
    });
  }
  async check ({ payAddress, orderForm }) {
    const { data: { result } } = await this.ctx.curl(`http://api.etherscan.io/api?module=account&action=txlist&address=${payAddress}`, {
      timeout: 10000,
      dataType: 'json'
    });

    const findList = result.filter(x => {
      return x.value !== '0' && x.from === payAddress.toLowerCase() && x.to === this.app.config.toAddr;
    });
    /*
      buy_num / create_time / id / is_success / mobile / order_form / pay_address / pay_eth / sum / tx / update_time
    */
    const { pay_eth } = (await this.select({ orderForm }))[0];
    let _result ;
    for (let i = 0; i < findList.length; i++) {
      const item = findList[i];
      if(`${pay_eth}` === web3.utils.fromWei(item.value)) {
        try {
          _result = await this.update({
            tx: item.hash,
            orderForm,
            pay_address: payAddress
          })
          // 同步更新表
          await this.app.mysql.query(`
            UPDATE user, (
                SELECT mobile, sum(buy_record.buy_num) as sumBuy
                FROM buy_record
                WHERE
                  is_success='1'
                GROUP BY
                  mobile
              ) as br
            SET
              user.buy_count = br.sumBuy
              user.update_time='${+new Date()}'
            WHERE
              user.mobile = br.mobile
          `);
          break;
        } catch (error) {
          this.logger.error(error);
        }
      }
    }
    if(!_result) {
      this.ctx.throw(406, '未查找到该交易');
    } else {
      return _result;
    }
  }
  async update({ tx, orderForm, pay_address }) {
    return await this.app.mysql.update('buy_record', {
      tx,
      is_success: '1',
      update_time: +new Date(),
      pay_address
    }, {
      where: {
        order_form: orderForm
       }
    });
  }
  async bindAddr ({ authAddress }) {
    const { ctx, app } = this;
    const result = await app.mysql.select('auth', {
      where: {
        address: authAddress
      }
    })
    if(result.length) {
      return await app.mysql.update('user', {
        bind_address: authAddress
      }, {
        where: {
          mobile: ctx.encode.mobile
        }
      })
    } else {
      ctx.throw(406, '地址认证失败');
    }
  }
}

module.exports = SignService;