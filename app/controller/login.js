'use strict';
const Controller = require('egg').Controller;
const {
  getAothCode,
  getLocalTime,
} = require('../utils');

class HomeController extends Controller {
  async index () {
    const { ctx, service } = this;

    const loginRule = {
      mobile: 'string',
      isCodeLogin: ['true', 'false']
    };
    // debugger;
    ctx.validate(loginRule, ctx.request.body);

    const token = await service.login.select(ctx.request.body);

    ctx.body = {
      code: 0,
      message: '登陆成功',
      data: {
        token
      }
    }
  }
}

module.exports = HomeController;
