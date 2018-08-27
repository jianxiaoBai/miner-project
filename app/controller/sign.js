'use strict';
const Controller = require('egg').Controller;

class SignUpController extends Controller {
  async create() {

    const { ctx, service } = this;
    const { body } = ctx.request;
    const signRule = {
      mobile: 'string',
      code: 'string',
      password: 'string'
    };

    ctx.validate(signRule, body);

    await service.sign.insert(body);
    ctx.body = {
      code: 0,
      message: '注册成功',
      data: null
    }
  }
}

module.exports = SignUpController;
