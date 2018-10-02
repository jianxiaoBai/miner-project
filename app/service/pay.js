'use strict';

const Service = require('egg').Service;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
const {
  getLocalTime
} = require('../utils');
class SignService extends Service {
  async insert({
    buyNum,
    shopId
  }) {
    // 矿机定价 1000 $
    // if(Number(buyNum) < 1) {
    //   this.ctx.throw(403, '购买数量不能为0');
    // }
    // debugger;
    const {
      price
    } = await this.service.shops.getDetail({
      id: shopId
    })
    const {
      data: {
        data
      }
    } = await this.ctx.curl('http://ok.truescan.net/', {
      dataType: 'json',
      timeout: 10000,
    });
    // const { open, usdCnyRate } = data.find(x => x.coinName === 'ETH');
    const {
      low
    } = data.find(x => x.coinName === 'BTC');
    // 订单号 = 当前时间 + 随机字符串
    const orderForm = 'b' + getLocalTime() + Math.random().toString(36).substr(8);
    const sum = price * buyNum;
    const payBTC = sum / low;

    await this.app.mysql.insert('buy_record', {
      ...this.ctx.userAccout,
      order_form: orderForm,
      create_time: +new Date(),
      buy_num: buyNum,
      pay_btc: payBTC,
      sum,
      action: 1,
      rate: low,
      shop_id: shopId
    });
    return orderForm;
  }
  async select({
    orderForm
  }) {
    return await this.app.mysql.select('buy_record', {
      where: {
        order_form: orderForm
      }
    });
  }
  /* async check ({ payAddress, orderForm }) {
    const { data: { result } } = await this.ctx.curl(`http://api.etherscan.io/api?module=account&action=txlist&address=${payAddress}`, {
      timeout: 10000,
      dataType: 'json'
    });

    const findList = result.filter(x => {
      return x.value !== '0' && x.from === payAddress.toLowerCase() && x.to === this.app.config.toAddr;
    });

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
  } */
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
  async updateBuy({
    order_form,
    is_buy
  }) {
    const {
      create_time,
      pay_btc
    } = (await this.select({
      orderForm: order_form
    }))[0];
    const {
      useable
    } = (await this.service.asset.getAccount())[0];
    if (+new Date() - create_time > 300000) {
      this.ctx.throw(405, '订单已失效');
    }
    if (useable < pay_btc) {
      this.ctx.throw(405, '余额不足, 请先充值');
    }
    // 发生购买请求时进行通知
    await this.service.captcha.sendSms('111111', '18600163853');
    await this.app.mysql.update('buy_record', {
      is_buy,
      update_time: +new Date(),
    }, {
      where: {
        order_form
      }
    });

    return await this.syncUserTable();
  }
  async syncUserTable() {
    await this.syncAssetTable();
    return await this.app.mysql.query(`
      UPDATE user,
        (
          SELECT
            mobile, mail, sum(buy_num) AS sum
          FROM
            buy_record
          WHERE
            is_buy > 0
          GROUP BY
            mobile, mail
        ) AS a
      SET
        user.buy_count = a.sum
      WHERE
        user.mobile = a.mobile
      OR
        user.mail = a.mail
    `);
  }
  async syncAssetTable() {
    // debugger;
    const key = Object.keys(this.ctx.userAccout)[0];
    const value = Object.values(this.ctx.userAccout)[0];
    return await this.app.mysql.query(`
      UPDATE assets AS a,
        (
          SELECT
            ${key}, IFNULL(sum( pay_btc ), 0) AS payBtc
          FROM
            buy_record
          WHERE
            is_buy = '1'
          AND
            ${key} = ?
          GROUP BY
            ${key}
        ) AS b
      SET
        a.freeze = b.payBtc,
        a.useable = a.sum - b.payBtc
      WHERE
        a.${key} = b.${key}
    `, [value]);
  }
  async bindAddr({
    authAddress
  }) {
    const {
      ctx,
      app
    } = this;
    const result = await app.mysql.select('auth', {
      where: {
        address: authAddress
      }
    })
    if (result.length) {
      return await app.mysql.update('user', {
        bind_address: authAddress
      }, {
        where: {
          ...this.ctx.userAccout
        }
      })
    } else {
      ctx.throw(406, '地址认证失败');
    }
  }
  async insertSell({
    address,
    number
  }) {
    return await this.app.mysql.insert('buy_record', {
      ...this.ctx.userAccout,
      create_time: +new Date(),
      cash_address: address,
      cash_number: number,
      action: 2,
      is_cash: 1
    });
  }
}

module.exports = SignService;