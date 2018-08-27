'use strict';
/* eslint-disable no-debugger */
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
const md5 = require('md5');
const {
  getAothCode,
  getLocalTime,
} = require('../utils');

class CaptchaController extends Controller {
  async index() {
    const {
      data,
      text,
    } = svgCaptcha.create();
    console.log(text);
    this.ctx.session.captcha = text;
    this.ctx.body = {
      status: 0,
      message: '图形验证成功',
      data,
    };
  }

  async sendSms(time, code, mobile) {
    const { ctx, app } = this;
    const { username, password, sendAddress } = app.config.sms;
    const result = await ctx.curl(sendAddress, {
      methods: 'GET',
      data: {
        username,
        tkey: time,
        password: md5(md5(password) + time),
        mobile,
        content: `【TRUEWK】您好，您的验证码是 ${code}`,
      },
    });
    return result.data.toString();
  }

  async smsCaptcha() {
    const {
      ctx,
      service,
    } = this;

    const {
      mobile,
      captcha,
    } = ctx.query;

    const smsRule = {
      captcha: 'string',
      mobile: 'string'
    };

    ctx.validate(smsRule, ctx.query);

    const smsCode = getAothCode();
    const smsTime = getLocalTime();
    const reg     = new RegExp(`^${captcha}$`, 'i');
    const result  = await service.captcha.select(mobile);
    const nowDate = +new Date();
    const expired = 60;

    if (result.length && (nowDate - result[0].update_time) / 1000 < expired) {
      ctx.throw(403, '一分钟内不能频繁请求');
    }

    if (!reg.test(ctx.session.captcha)) {
      ctx.throw(403, '图形验证码错误');
    }

    let status          = await this.sendSms(smsTime, smsCode, mobile);
    ctx.session.captcha = null;
    const { insertId }  = await service.captcha[ result.length ? 'update' : 'insert' ]({
      mobile,
      status,
      smsCode
    });

    ctx.body = {
      body: {
        status: status,
        message: '发送短信',
        data: insertId,
      },
    };
  }
}

module.exports = CaptchaController;
