'use strict';
const Controller = require('egg').Controller;
const nodemailer = require('nodemailer');
class CaptchaController extends Controller {
  async sendMail (code, to) {
    debugger
    const { user, pass } = this.app.config.mail;
    let transporter      = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user,
        pass
      }
    });
    let option = {
      from: 'Galois <839780963@qq.com>',
      to,
      subject: '短信验证',
      // 发送text或者html格式
      // text: 'Hello world', // text 格式
      html: `
        <h3>亲爱的哈希宝用户，您好！<h3>
        您的哈希宝验证码是：<b>${code}</b>
        <p>此邮件由系统自动发出，30分钟内有效，请勿直接回复。</p>
        <p>感谢你的访问，祝你使用愉快!</p>
      `
    };
    return await this.sendTrans(transporter, option);
  }

  async sendTrans (transporter, option) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(option, (err, info) => {
        if (err) {
          reject(err);
        }
        console.log(info,' info');

        resolve(info.messageId);
      });
    })
  }
}

module.exports = CaptchaController;
