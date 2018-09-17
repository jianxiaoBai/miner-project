'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async index() {
    const result = (await this.service.user.get())[0];
    this.ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
  async record() {
    const result = await this.service.user.record(this.ctx.query);
    this.ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
  async delOrder() {
    const { body } = this.ctx.request;
    const delRule = {
      orderForm: 'string',
    };
    this.ctx.validate(delRule, body);

    const result = await this.service.user.delete(body.orderForm);
    this.ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
  async cancelSell() {
    const { body } = this.ctx.request;
    const cancelRule = {
      id: 'string',
    };
    this.ctx.validate(cancelRule, body);

    const result = await this.service.user.cancel(body.id);
    this.ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
}

module.exports = UserController;
