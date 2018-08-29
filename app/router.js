'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/captcha', controller.captcha.index);
  router.get('/sendSms', controller.captcha.smsCaptcha);
  router.post('/login', controller.login.index);
  router.post('/sign', controller.sign.create);
  router.post('/okex', controller.okex.index);
  router.post('/payInfo', controller.pay.index);
  router.get('/orderForm', controller.pay.getOrderForm);
  router.get('/checkAddr', controller.pay.checkAddr);
  router.post('/authAddr', controller.pay.authAddr);
  router.get('/getAddress', controller.miner.index);
  router.post('/addInfo', controller.miner.create);
  // router.get('/captcha', controller.login.captcha);
};
