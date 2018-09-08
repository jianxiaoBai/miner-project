'use strict';

const Service = require('egg').Service;
const Web3    = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
const { getLocalTime } = require('../utils');
class SignService extends Service {
  async insert ({ buyNum, shopId }) {
    // 矿机定价 1000 $
    // if(Number(buyNum) < 1) {
    //   this.ctx.throw(403, '购买数量不能为0');
    // }
    const { price } = await this.service.shops.getDetail({ id: shopId })
    const { mobile } = this.ctx.encode;
    const { data: { data } } = await this.ctx.curl('http://ok.truescan.net/', {
        dataType: 'json',
        timeout: 10000,
      });
    // const { open, usdCnyRate } = data.find(x => x.coinName === 'ETH');
    const { open, usdCnyRate } = data.find(x => x.coinName === 'BTC');
    // 订单号 = 当前时间 + 手机号码后四位
    const orderForm = 'b' + getLocalTime() + mobile.slice('7');
    const sum = price * buyNum;
    const payBTC = sum / open;

    await this.app.mysql.insert('buy_record', {
      mobile,
      order_form: orderForm,
      create_time: +new Date(),
      buy_num: buyNum,
      pay_btc: payBTC,
      sum,
      action: 1,
      shop_id: shopId
    });
    return orderForm;
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
      buy_num / create_time / id / is_success / mobile / order_form / pay_address / pay_btc / sum / tx / update_time
    */
    const { pay_btc } = (await this.select({ orderForm }))[0];
    let _result ;
    for (let i = 0; i < findList.length; i++) {
      const item = findList[i];
      if(`${pay_btc}` === web3.utils.fromWei(item.value)) {
        try {
          _result = await this.update({
            tx: item.hash,
            orderForm,
            pay_address: payAddress
          })
          // sync update the table
          await this.app.mysql.query(`
            UPDATE user, (
                SELECT mobile, sum(buy_record.buy_num) AS sumBuy
                FROM buy_record
                WHERE
                  is_success='1'
                GROUP BY
                  mobile
              ) AS br
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
  /* async update({ tx, orderForm, pay_address }) {
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
  } */
  async updateBuy({ order_form, is_buy }) {
    // debugger;
    const { create_time } = (await this.select({ orderForm: order_form }))[0];
    if(+new Date() - create_time > 300000) {
      this.ctx.throw(405, '订单已失效');
    }

    await this.app.mysql.update('buy_record', {
      is_buy,
      update_time: +new Date(),
    }, {
      where: {
        order_form
       }
    });

    /* return await this.service.asset.update({
      useable: myAccount.sum - pay_btc,
      freeze: pay_btc
    }); */
    return await this.syncAssetTable();
  }
  async syncAssetTable () {
    return await this.app.mysql.query(`
      UPDATE assets AS a,
        (
          SELECT
            mobile, IFNULL(sum( pay_btc ), 0) AS payBtc
          FROM
            buy_record
          WHERE
            is_buy = '1'
          AND
          mobile = ?
        ) AS b
      SET
        a.freeze = b.payBtc,
        a.useable = a.sum - b.payBtc
      WHERE
        a.mobile = b.mobile
    `, [ this.ctx.encode.mobile ]);
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
  async insertSell ({ address, number }) {
    return await this.app.mysql.insert('buy_record', {
      mobile: this.ctx.encode.mobile,
      create_time: +new Date(),
      cash_address: address,
      cash_number: number,
      action: 2,
      is_cash: 1
    });
  }
}

module.exports = SignService;