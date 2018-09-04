'use strict';

const Service = require('egg').Service;
const Web3 = require('web3');
class SignService extends Service {
  async insert ({ mobile, code, password }) {
    // debugger
    const expired                 = 60 * 5;
    const web3                    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
    const { address, privateKey } = web3.eth.accounts.create();
    const result                  = (await this.app.mysql.select('sms_log', {
      where: { mobile },
      columns: [ 'code', 'update_time' ],
    }))[0];

    if(((+new Date)  - result.update_time) / 1000 >= expired) {
      this.ctx.throw(403, '手机验证码过期')
    }

    if(!code && result.code !== code) {
      this.ctx.throw(403, '验证码错误')
    }

    await this.app.mysql.insert('assets', {
      mobile,
      address,
      private: privateKey,
      coin: 1,
      create_time: +new Date()
    });

    return await this.app.mysql.insert('user', {
      mobile,
      password,
      create_time: +new Date()
    });
  }
}

module.exports = SignService;