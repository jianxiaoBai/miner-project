'use strict';

const Service = require('egg').Service;
const Web3 = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

class CaptchaService extends Service {
  async getAccount () {
    return await this.app.mysql.select('assets', {
      where: {
        mobile: this.ctx.encode.mobile
      },
      columns: ['address', 'sum', 'useable', 'freeze', 'coin'],
    })
  }
  async getBalance () {
    const result = await this.getAccount();
    for (let i = 0; i < result.length; i++) {
      const item = result[i];
      if(item.coin === 1) {
        // ETH
        const balance = await web3.eth.getBalance(item.address);
        await this.update(web3.utils.fromWei(balance), 1);
      } else {
        // BTC
      }
    }
    return await this.getAccount();
  }
  async update (balance, coin) {
    return await this.app.mysql.update('assets', {
      sum: balance,
      useable: balance
    }, {
      where: {
        mobile: this.ctx.encode.mobile,
        coin
      }
    })
  }
}

module.exports = CaptchaService;