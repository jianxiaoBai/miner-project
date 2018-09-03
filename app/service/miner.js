'use strict';
const Service = require('egg').Service;

class GetAddrService extends Service {
  async get () {
    return await this.app.mysql.query(`
      SELECT
        bind_address, mobile, buy_count
      FROM
        user
      WHERE
        bind_address IS NOT NULL
      AND
        buy_count > 0
    `);
  }
  async insert ({
    mobile = '1758712562',
    bind_address = 'k21hg3j12g3j',
    power = '12M',
    status = '2',
    output = '34',
    deplete = '12Mbs',
    manage = '12',
    fact = '88' ,
    run_time  = '24h',
    sum_output = '1232'
  }) {
    return await this.app.mysql.insert('miner', {
      mobile,
      bind_address,
      power,
      status,
      output,
      deplete,
      manage,
      fact,
      run_time,
      sum_output,
      create_time: +new Date(),
    });
  }
  async getPower () {
    return await this.app.mysql.select('miner', {
      where: {
        mobile: this.ctx.encode.mobile
      },
      columns: ['id', 'bind_address', 'create_time', 'power', 'status', 'output', 'deplete', 'manage', 'fact', 'run_time']
      // orders: [['create_time','desc']]
    })
  }
}

module.exports = GetAddrService;
