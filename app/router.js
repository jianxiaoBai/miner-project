'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/', controller.home.index);
  router.get('/api/captcha', controller.captcha.index);
  router.get('/api/sendSms', controller.captcha.smsCaptcha);
  router.post('/api/login', controller.login.index);
  router.post('/api/sign', controller.sign.create);
  router.post('/api/okex', controller.okex.index);

  router.post('/api/payInfo', controller.pay.index);
  router.get('/api/orderForm', controller.pay.getOrderForm);
  router.get('/api/checkAddr', controller.pay.checkAddr);
  router.post('/api/authAddr', controller.pay.authAddr);
  router.post('/api/buy', controller.pay.buyRequest);
  router.post('/api/sell', controller.pay.sellRequest);

  router.get('/api/getAddress', controller.miner.index);
  router.post('/api/addInfo', controller.miner.create);
  router.get('/api/power', controller.miner.power);

  router.get('/api/user', controller.user.index);
  router.get('/api/record', controller.user.record);
  router.del('/api/order', controller.user.delOrder);
  router.post('/api/cancelSell', controller.user.cancelSell);
  router.get('/api/asset', controller.asset.index);
};
