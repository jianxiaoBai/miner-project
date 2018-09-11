'use strict';
const Controller = require('egg').Controller;
const signRule = {
  // mobile: 'string',
  code: 'string',
  password: 'string'
};
class SignUpController extends Controller {
  async create() {

    const { ctx, service } = this;
    const { body } = ctx.request;

    ctx.validate(signRule, body);

    await service.sign.insert(body);
    ctx.body = {
      code: 0,
      message: '注册成功',
      data: null
    }
  }
  async forget() {
    const { ctx, service } = this;
    const { body } = ctx.request;

    ctx.validate(signRule, body);

    const result = await service.sign.update(body);
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: result,
    };
  }
}

module.exports = SignUpController;
