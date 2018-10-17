'use strict';

const Service = require('egg').Service;
const SMSClient = require('@alicloud/sms-sdk');
class CaptchaService extends Service {
  async insert({
    mobile,
    smsCode,
    status
  }) {
    return await this.app.mysql.insert('sms_log', {
      mobile,
      code: smsCode,
      create_time: +new Date(),
      status,
    });
  }
  async update({
    mobile,
    status,
    smsCode
  }) {
    return await this.app.mysql.update('sms_log', {
      update_time: +new Date(),
      code: smsCode,
      status,
    }, {
      where: {
        mobile
      },
    });
  }
  async select(mobile) {
    return await this.app.mysql.select('sms_log', {
      where: {
        mobile
      },
    });
  }
  async sendSms(code, phone) {
    const {
      ctx,
      app,
    } = this;
    const {
      account,
      password,
      sendAddress,
    } = app.config.chuanglan;
    const msg = `【哈希宝】您的验证码 ${code}，该验证码5分钟内有效，请勿泄漏于他人！`;
    const post_data = {
      account,
      password,
      msg,
      phone,
      report: 'false'
    };
    const content = JSON.stringify(post_data);
    const result = await ctx.curl(sendAddress, {
      port: 80,
      method: 'POST',
      content,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      contentType: 'json',
      dataType: 'json',
    });
    return result.data.code;
  }
 /*  阿里云短信发送方式
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
    const {
      Code
    } = await smsClient.sendSMS({
      PhoneNumbers: mobile, // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为00+国际区号+号码，如“0085200000000”
      SignName, // 必填:短信签名-可在短信控制台中找到
      TemplateCode, // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
      TemplateParam: `{"code":"${code}"}`, // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    });
    return Code;
  } */
}

module.exports = CaptchaService;