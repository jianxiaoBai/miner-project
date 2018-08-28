'use strict';

const Service = require('egg').Service;

class CaptchaService extends Service {
  async insert ({ mobile, smsCode, status }) {
    return await this.app.mysql.insert('sms_log', {
      mobile,
      code: smsCode,
      create_time: +new Date(),
      status,
    });
  }
  async update ({ mobile, status, smsCode }) {
    return await this.app.mysql.update('sms_log', {
      update_time: +new Date(),
      code: smsCode,
      status,
    }, {
      where: { mobile },
    });
  }
  async select (mobile) {
    return await this.app.mysql.select('sms_log', {
      where: { mobile },
    });
  }
}

module.exports = CaptchaService;