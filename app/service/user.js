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
  async record (obj) {
    return await this.app.mysql.select('buy_record', {
      where: {
        mobile: this.ctx.encode.mobile,
        ...obj
      },
      orders: [['create_time','desc']],
    });
  }
  async delete (order) {
    return await this.app.mysql.query(`
      DELETE FROM buy_record
      WHERE
        order_form= ?
      AND
        mobile= ?
    `, [order, this.ctx.encode.mobile]);
  }
  async cancel (id) {
    debugger
    return await this.app.mysql.update('buy_record', {
      is_cash: '3',
      update_time: +new Date()
    }, {
      where: {
        id,
        mobile: this.ctx.encode.mobile
      }
    })
  }
}

module.exports = UserService;