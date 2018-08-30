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
  router.get('/power', controller.miner.power);
  router.get('/user', controller.user.index);
  router.get('/record', controller.user.record);
  router.del('/order', controller.user.delOrder);
  // router.get('/captcha', controller.login.captcha);
};
