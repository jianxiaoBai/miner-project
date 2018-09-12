'use strict';
const Controller = require('egg').Controller;
class MinerController extends Controller {
  async index() {
    const { ctx } = this;
    if(ctx.request.header.miner_token !== this.app.config.minerToken) {
      ctx.throw(403, '无权限');
    }

    const result = await this.service.miner.get();
    ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
  async create () {
    const minerRule = {
      data: {
        type: 'array',
        itemType: 'object',
        rule: {
          mobile: 'string',
          mail: 'string',
          bind_address: 'string'
        }
      }
    };
    const { ctx } = this;
    const { body } = ctx.request;
    if(ctx.request.header.miner_token !== this.app.config.minerToken) {
      ctx.throw(403, '无权限');
    }
    // console.log(ctx.request.body);
    ctx.validate(minerRule, body);

    for (let i = 0; i < body.data.length; i++) {
      const item = body.data[i];
      await this.service.miner.insert(item);
    }

    ctx.body = {
      code: 0,
      message: '成功',
      data: null,
    };
  }
  async power () {
    // debugger;
   const result = await this.service.miner.getPower();
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
}

module.exports = MinerController;
