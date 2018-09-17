'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
const SMSClient = require('@alicloud/sms-sdk');
const nodemailer = require('nodemailer');
const { getAothCode } = require('../utils');

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

  async sendSms(code, mobile) {
    const {
      accessKeyId,
      secretAccessKey,
      SignName,
      TemplateCode,
    } = this.app.config.aliSMS;

    const smsClient = new SMSClient({
      accessKeyId,
      secretAccessKey,
    });
    const { Code } = await smsClient.sendSMS({
      PhoneNumbers: mobile, // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为00+国际区号+号码，如“0085200000000”
      SignName, // 必填:短信签名-可在短信控制台中找到
      TemplateCode, // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
      TemplateParam: `{"code":"${code}"}`, // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    });
    return Code;
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
      status = await this.sendSms(smsCode, mobile);
    } else if (loginType === '2') {
      // debugger;
      status = await this.sendMail(smsCode, mail);
    } else {
      this.ctx.throw(402, '不识别');
    }
    ctx.session.captcha = null;

    const { insertId } = await service.captcha[ result.length ? 'update' : 'insert' ]({
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
  async sendMail(code, to) {
    // debugger
    const { user, pass, name } = this.app.config.mail;
    const transporter = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user,
        pass,
      },
    });
    const option = {
      from: `${name} <${user}>`,
      to,
      subject: '短信验证',
      // 发送text或者html格式
      // text: 'Hello world', // text 格式
      html: `
        <h3>亲爱的算立方用户，您好！<h3>
        您的${name}验证码是：<b>${code}</b>
        <p>此邮件由系统自动发出，5分钟内有效，请勿直接回复。</p>
        <p>感谢你的访问，祝你使用愉快!</p>
      `,
    };
    return await this.sendTrans(transporter, option);
  }

  async sendTrans(transporter, option) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(option, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info.response);
      });
    });
  }
}

module.exports = CaptchaController;
