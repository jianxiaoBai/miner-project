'use strict';

const Service = require('egg').Service;

class InviteService extends Service {
    async authservice({inviteCode, orderForm}) {
        let code = {
            code: inviteCode,
            isUsed: false
        };
        let result = await this.app.mysql.select('invite_t2', {
            where: code,
        });
        let codeData = result[0];
        let flag = false;
        if (codeData) {
            let now = new Date();
            now.setDate(now.getDate() - 30)
            if (now < codeData.created) {
                console.log("有效");
                flag = true;
            }
        }
        var order = null;
        if (flag) {
            order = (await this.app.mysql.select('buy_record', {
                where: {
                    order_form: orderForm
                }
            }))[0];
            if (order) {
                if (order.shop_id === 2 && order.buy_num >= 1.0 && order.invite_code === null) {
                    let price = order.sum / order.buy_num;
                    //只有t2可以使用优惠码
                    order.invite_code = inviteCode;
                    order.sum = (order.sum - (price * (19 / 20))).toFixed(2);
                    order.pay_btc = order.sum / order.rate;
                    await this.app.mysql.update('buy_record', order, {
                        where: {
                            order_form: orderForm
                        }
                    });
                    code.isUsed = true;
                    let result = await this.app.mysql.update('invite_t2', code, {
                        where: {code: code.code},
                    });
                }
            }
        }

        return order;
    }
}

module.exports = InviteService;
