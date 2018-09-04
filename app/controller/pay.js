'use strict';
const Controller = require('egg').Controller;

class PayController extends Controller {
  async index () {
    const { ctx } = this;
    const payInfoRule = {
      buyNum: 'string'
    };
    ctx.validate(payInfoRule, ctx.request.body);
    const result = await this.service.pay.insert(ctx.request.body);
    ctx.body = {
      code: 0,
      message: '成功',
      data: result
    }
  }
  async getOrderForm () {
    const { ctx } = this;
    const payInfoRule = {
      orderForm: 'string'
    };
    ctx.validate(payInfoRule, ctx.query);
    const { order_form, pay_eth, sum } = (await this.service.pay.select(ctx.query))[0];
    ctx.body = {
      code: 0,
      message: '成功',
      data: {
        order_form,
        pay_eth,
        sum
      }
    }
  }
  async checkAddr () {
    const { ctx } = this;
    const checkRule = {
      payAddress: 'string',
      orderForm: 'string'
    };
    ctx.validate(checkRule, ctx.query);

    const { affectedRows } = await this.service.pay.check(ctx.query);

    ctx.body = {
      code: 0,
      message: '操作成功',
      data: {
        affectedRows
      }
    }
  }
  async authAddr () {
    const { ctx } = this;
    const authRule = {
      authAddress: 'string',
    };

    ctx.validate(authRule, ctx.request.body);
    const result = await this.service.pay.bindAddr(ctx.request.body);
    this.ctx.body = {
      code: 0,
      message: '操作成功',
      data: result
    }
  }
}

module.exports = PayController;
