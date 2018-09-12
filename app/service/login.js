'use strict';

const Service = require('egg').Service;
const jwt = require('jwt-simple');
const { aesDecrypt } = require('../utils');
class LoginServer extends Service {
  async select({ mobile, mail, isCodeLogin, code = null, password = null, loginType}) {
    const { ctx, app } = this;
    const expired = 60 * 5;
    // const result = (await app.mysql.select(JSON.parse(isCodeLogin) ? 'sms_log' : 'user' , {
    const result = (await app.mysql.select('user' , {
      where: {
        [loginType === '1' ? 'mobile' : 'mail']: loginType === '1' ? mobile : mail,
      }
    }))[0];
    // debugger;
    if(!result) {
      ctx.throw(403, `请先完成${loginType === '1' ? '手机号码': '邮箱' }注册`);
    }

    if(JSON.parse(isCodeLogin)) {
      if(result.code) {
        if(((+new Date)  - result.update_time) / 1000 >= expired) {
          this.ctx.throw(403, '验证码过期')
        }
        if(code !== result.code) {
          ctx.throw(403, '验证码错误');
        }
      }
    } else {
      if (result.password) {
        if(password !== aesDecrypt(result.password, this.app.config.aesKey)) {
          ctx.throw(403, '密码错误');
        }
      }
    }

    const token = jwt.encode({
      loginType,
      [loginType === '1' ? 'mobile' : 'mail']: loginType === '1' ? mobile : mail,
      createTime: +new Date()
    }, app.config.secret);

    return token;
  }
}

module.exports = LoginServer;