'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const result = await this.ctx.curl('https://www.okex.com/v2/futures/market/indexTickerAll.do', {
      dataType: 'json',
      timeout: 100000,
    });
    console.log(result);

    this.ctx.body = {
      code: 0,
      message: '成功',
      data: null
    };
  }
}

module.exports = HomeController;
