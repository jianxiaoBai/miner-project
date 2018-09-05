'use strict';
const Controller = require('egg').Controller;

class PayController extends Controller {
  async index () {
    const { ctx } = this;
    const payInfoRule = {
      buyNum: 'string'
    };
    ctx.validate(payInfoRule, ctx.request.body);
    const orderForm = await this.service.pay.insert(ctx.request.body);

    ctx.body = {
      code: 0,
      message: '成功',
      data: {
        orderForm
      }
    }
  }
  async getOrderForm () {
    const { ctx } = this;
    const payInfoRule = {
      orderForm: 'string'
    };
    ctx.validate(payInfoRule, ctx.query);
    const { order_form, pay_btc, sum } = (await this.service.pay.select(ctx.query))[0];
    ctx.body = {
      code: 0,
      message: '成功',
      data: {
        order_form,
        pay_btc,
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
  async buyRequest () {
    const { ctx } = this;
    const buyRule = {
      order_form: 'string',
      action: 'string',
    };

    ctx.validate(buyRule, ctx.request.body);
    const result = await this.service.pay.updateBuy(ctx.request.body);
    this.ctx.body = {
      code: 0,
      message: '操作成功',
      data: result
    }
  }
  async sellRequest () {
    const { ctx } = this;
    const actionRule = {
      address: 'string',
      number: 'string',
    };

    ctx.validate(actionRule, ctx.request.body);
    // debugger
    const result = await this.service.pay.insertSell(ctx.request.body);
    ctx.body = {
      code: 0,
      message: '操作成功',
      data: result
    }
  }
}

module.exports = PayController;
