'use strict';

const Service = require('egg').Service;
const Web3 = require('web3');
const web3    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

class CaptchaService extends Service {
  async getAccount () {
    return await this.app.mysql.select('assets', {
      where: {
        ...this.ctx.userAccout
      },
      columns: ['address', 'sum', 'useable', 'freeze', 'coin'],
    })
  }
  async getBalance () {
    const result = await this.getAccount();
    for (let i = 0; i < result.length; i++) {
      const item = result[i];
      // https://blockchain.info/q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj
      let sumValue = 0;
      if(item.coin === 1) {
        // BTC
        const { data } = await this.ctx.curl(`https://blockchain.info/q/addressbalance/${item.address}`)
        sumValue = data.toString() / 100000000;
      } else if(item.coin === 2) {
        // ETH
        const balance = await web3.eth.getBalance(item.address);
        sumValue = web3.utils.fromWei(balance);
      }
      await this.update({
        sum: sumValue,
        useable: sumValue
      }, item.coin);
    }
    return await this.getAccount();
  }
  async update (item, coin = 1) {
    await this.app.mysql.update('assets', {
      ...item
    }, {
      where: {
        ...this.ctx.userAccout,
        coin
      }
    })
    return await this.service.pay.syncAssetTable();
  }
}

module.exports = CaptchaService;