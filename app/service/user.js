'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async get () {
    return await this.app.mysql.select('user', {
      where: {
        ...this.ctx.userAccout
      },
      columns: ['mobile', 'mail', 'bind_address']
    });
  }
  async record (obj) {
    return await this.app.mysql.select('buy_record', {
      where: {
        ...this.ctx.userAccout,
        ...obj
      },
      orders: [['create_time','desc']],
    });
  }
  async delete (order) {
    return await this.app.mysql.delete('buy_record', {
      order_form: order,
      ...this.ctx.userAccout
    });
  }
  async cancel (id) {
    return await this.app.mysql.update('buy_record', {
      is_cash: '3',
      update_time: +new Date()
    }, {
      where: {
        id,
        ...this.ctx.userAccout
      }
    })
  }
}

module.exports = UserService;