'use strict';
const Service = require('egg').Service;

class GetAddrService extends Service {
  async get () {
    return await this.app.mysql.query(`
      SELECT bind_address, buy_count
      FROM user
      WHERE
        bind_address IS NOT NULL
      AND
        buy_count > 0
    `);
  }
  async insert ({
    mobile = 'mobile',
    bind_address = 'bind_address',
    power = 'power',
    status = 'status',
    output = 'output',
    deplete = 'deplete',
    manage = 'manage',
    fact = 'fact' ,
    run_time  = 'run_time'
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
      run_time ,
      create_time: +new Date(),
    });
  }
}

module.exports = GetAddrService;
