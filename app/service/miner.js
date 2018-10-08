'use strict';
const Service = require('egg').Service;

class GetAddrService extends Service {
  async get () {
    return await this.app.mysql.query(`
      SELECT
        bind_address, mobile, mail, buy_count
      FROM
        user
      WHERE
        bind_address IS NOT NULL
      AND
        buy_count > 0
    `);
  }
  async insert (d) {
    return await this.app.mysql.insert('miner', {
      mobile: d.mobile,
      mail: d.mail,
      bind_address: d.bind_address,
      power: d.power,
      status: d.status,
      output: d.output,
      deplete: d.deplete,
      manage: d.manage,
      fact: d.fact,
      run_time: d.run_time,
      sum_output: d.sum_output,
      create_time: +new Date(),
    });
  }
  async getPower () {
    return await this.app.mysql.select('miner', {
      where: {
        ...this.ctx.userAccout
      },
      orders: [['create_time','desc']]
    })
  }
}

module.exports = GetAddrService;
