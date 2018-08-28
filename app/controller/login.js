'use strict';
/* eslint-disable no-debugger */
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
const md5 = require('md5');
const jwt = require('jwt-simple');
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
    debugger;
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
