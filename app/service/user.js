'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async get () {
    return await this.app.mysql.select('user', {
      where: {
        mobile: this.ctx.encode.mobile
      },
      columns: ['mobile', 'bind_address']
    });
  }
  async record () {
    return await this.app.mysql.select('buy_record', {
      where: {
        mobile: this.ctx.encode.mobile
      }
    });
  }
  async delete (order) {
    return await this.app.mysql.query(`
      DELETE FROM buy_record
      WHERE
        order_form= ?
      AND
        mobile= ?
      AND
        is_success=0
    `, [order, this.ctx.encode.mobile]);
  }
}

module.exports = UserService;