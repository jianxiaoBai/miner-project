'use strict';
/* eslint-disable no-debugger */
const Controller = require('egg').Controller;
class MinerController extends Controller {
  async index() {
    const { ctx } = this;
    const { mobile } = ctx.encode;

    if(mobile !== '15101661380') {
      ctx.throw(403, '无权限');
    }

    const result = await this.service.miner.get()
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
  async create () {
    const { ctx } = this;
    const { mobile } = ctx.encode;

    if(mobile !== '15101661380') {
      ctx.throw(403, '无权限');
    }

    const result = await this.service.miner.insert(ctx.request.body);
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
}

module.exports = MinerController;
