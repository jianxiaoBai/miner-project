'use strict';
/* eslint-disable no-debugger */
const Controller = require('egg').Controller;

class ShopsController extends Controller {
  async index () {
    const result = await this.service.shops.getAll()
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
  async detail () {
    const result = await this.service.shops.getDetail(this.ctx.query)
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
}

module.exports = ShopsController;
