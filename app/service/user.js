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
}

module.exports = UserService;