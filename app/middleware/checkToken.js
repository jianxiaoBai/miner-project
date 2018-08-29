'use strict';
const jwt = require('jwt-simple');
module.exports = (options, app) => {
  return async function(ctx, next) {
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJtb2JpbGUiOiIxNTEwMTY2MTM4MCIsImNyZWF0ZVRpbWUiOjE1MzQ5MjI3NzMwNTZ9.800NC-TyfVrOYv1gYjooM0gHpgQK-6Ik1uzttxhKdDk
    const whitePaths = [ '/login', '/', '/sign', '/sendSms', '/captcha', '/getAddress', '/addInfo'];
    if (!whitePaths.includes(ctx.URL.pathname)) {
      if (!ctx.request.header.token) {
        ctx.throw(401, '请传入token');
      }
      try {
        const encode = jwt.decode(ctx.request.header.token, app.config.secret);
        // token 有效期5天
        const expired = 24 * 5;
        if((+new Date() - encode.createTime) / 3600000  <= expired) {
          ctx.encode = encode;
        } else {
          ctx.throw(401, 'token过期');
        }
      } catch (error) {
        ctx.throw(401, 'token解析错误');
      }
    }
    await next();
  };
};
