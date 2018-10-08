'use strict';
/* eslint-disable no-debugger */
const Controller = require('egg').Controller;

class InviteController extends Controller {
  async index() {
    const result = {};
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
  async auth() {
    const result = await this.service.invite.authservice(this.ctx.query);
    this.ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    };
  }
}

module.exports = InviteController;
