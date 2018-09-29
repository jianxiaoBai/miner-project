'use strict';
const Service = require('egg').Service;
const nodemailer = require('nodemailer');
class MailService extends Service {
  async sendMail(code, to) {
    const {
      user,
      pass
    } = this.app.config.mail;
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
      from: 'Galois <839780963@qq.com>',
      to,
      subject: '邮件验证 && email verification',
      // 发送text或者html格式
      // text: 'Hello world', // text 格式
      html: `
        <h3>亲爱的哈希宝用户，您好！<h3>
        您的哈希宝验证码是：<b>${code}</b>
        <p>此邮件由系统自动发出，30分钟内有效，请勿直接回复。</p>
        <p>感谢你的访问，祝你使用愉快!</p>

        <h3>Hi, dear ihashpower user！<h3>
        Your verification code is：<b>${code}</b>
        <p>This email is sent automatically, code valid in 30 minuets, please do not reply.</p >
        <p>Thank you and have a nice day!</p >
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
        console.log(info, ' info');

        resolve(info.messageId);
      });
    });
  }
}

module.exports = MailService;