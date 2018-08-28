'use strict';

const Service = require('egg').Service;
const jwt = require('jwt-simple');
class LoginServer extends Service {
  async select({ mobile, isCodeLogin, code = null, password = null }) {
    const { ctx, app } = this;
    const expired = 60 * 5;
    const result = (await app.mysql.select(JSON.parse(isCodeLogin) ? 'sms_log' : 'user' , {
      where: { mobile }
    }))[0];

    if(!result) {
      ctx.throw(403, '该手机号不存在');
    }

    if(JSON.parse(isCodeLogin)) {
      if(result.code) {
        if(((+new Date)  - result.update_time) / 1000 >= expired) {
          this.ctx.throw(403, '手机验证码过期')
        }
        if(code !== result.code) {
          ctx.throw(403, '验证码错误');
        }
      }
    } else {
      if (result.password) {
        if(password !== result.password) {
          ctx.throw(403, '密码错误');
        }
      }
    }

    const token = jwt.encode({
      mobile: mobile,
      createTime: +new Date()
    }, app.config.secret);

    return token;
  }
}

module.exports = LoginServer;