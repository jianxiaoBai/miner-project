'use strict';
/* eslint-disable no-debugger */
const Controller = require('egg').Controller;

class AssetController extends Controller {
  async index() {
    const result = await this.service.asset.getBalance();
    this.ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
}

module.exports = AssetController;
