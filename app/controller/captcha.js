'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
const {
  getAothCode
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
  async smsCaptcha() {
    const {
      ctx,
      service,
    } = this;

    const {
      mobile,
      mail,
      captcha,
      loginType,
    } = ctx.query;

    const smsRule = {
      captcha: 'string',
      // mobile: 'string'
    };

    ctx.validate(smsRule, ctx.query);

    const smsCode = getAothCode();
    const reg = new RegExp(`^${captcha}$`, 'i');
    const result = await service.captcha.select(mobile || mail);
    const nowDate = +new Date();
    const expired = 60;
    // debugger;
    if (result.length && (nowDate - result[0].update_time) / 1000 < expired) {
      ctx.throw(403, '一分钟内不能频繁请求');
    }

    if (!reg.test(ctx.session.captcha)) {
      ctx.throw(403, '图形验证码错误');
    }
    ctx.session.captcha = +new Date();
    let status;
    if (loginType === '1') {
      status = await this.service.captcha.sendSms(smsCode, mobile);
    } else if (loginType === '2') {
      // debugger;
      status = await this.service.mail.sendMail(smsCode, mail);
    } else {
      this.ctx.throw(402, '不识别');
    }
    ctx.session.captcha = null;

    const {
      insertId
    } = await service.captcha[result.length ? 'update' : 'insert']({
      mobile: loginType === '1' ? mobile : mail,
      status,
      smsCode,
    });

    ctx.body = {
      body: {
        status,
        message: '发送短信',
        data: insertId,
      },
    };
  }
}

module.exports = CaptchaController;