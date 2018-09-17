'use strict';

const Service = require('egg').Service;
class ShopsService extends Service {
  async getAll() {
    return await this.app.mysql.select('shops');
  }
  async getDetail({ id }) {
    return (await this.app.mysql.select('shops', {
      where: {
        id,
      },
    }))[0];
  }
}

module.exports = ShopsService;
