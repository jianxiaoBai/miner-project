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
      // https://blockchain.info/q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj
      if(item.coin === 1) {
        // BTC
        const { data } = await this.ctx.curl(`https://blockchain.info/q/addressbalance/${item.address}`)
        await this.update(data.toString(), 1);
      } else if(item.coin === 2) {
        // ETH
        const balance = await web3.eth.getBalance(item.address);
        await this.update(web3.utils.fromWei(balance), 2);
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