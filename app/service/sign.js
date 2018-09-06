'use strict';

const Service = require('egg').Service;
const Web3 = require('web3');
class SignService extends Service {
  async insert ({ mobile, code, password }) {
    const { ctx, app } = this;

    const expired                 = 60 * 5;
    // const web3                    = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));
    // const { address, privateKey } = web3.eth.accounts.create();
    const result                  = (await app.mysql.select('sms_log', {
      where: { mobile },
      columns: [ 'code', 'update_time', 'create_time' ],
    }))[0];

    debugger;
    // if(((+new Date)  - (result.update_time || result.create_time)) / 1000 >= expired) {
    //   ctx.throw(403, '手机验证码过期')
    // }


    if(!(result.code === code)) {
      ctx.throw(403, '验证码错误')
    }

    // get to bind BTC address
    const bindItem = (await app.mysql.select('btc_address', {
      where: {
        is_bind: 0
      }
    }))[0];

    const conn = await app.mysql.beginTransaction();

    try {

      // bind user info to BTC address
      await conn.insert('assets', {
        mobile,
        address: bindItem.address,
        coin: 1,
        create_time: +new Date()
      });

      // update status for address
      await conn.query(`
        UPDATE
          btc_address
        SET
          is_bind = 1
        WHERE
          is_bind = 0
        AND
          address = ?
      `, [ bindItem.address ]);

      // insert base info to user
      await conn.insert('user', {
        mobile,
        password,
        create_time: +new Date()
      });
      await conn.commit();
    } catch (err) {
      await conn.rollback();
      throw err;
    }
    return { success: true }
  }
}

module.exports = SignService;