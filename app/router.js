'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/captcha', controller.captcha.index);
  router.get('/sendSms', controller.captcha.smsCaptcha);
  router.post('/login', controller.login.index);
  router.post('/sign', controller.sign.create);
  // router.get('/captcha', controller.login.captcha);
};
