'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    try {
      const { data: { data } } = await this.ctx.curl('http://ok.truescan.net/', {
        dataType: 'json',
        timeout: 10000,
      });
      this.ctx.body = {
        code: 0,
        message: '成功',
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = HomeController;
