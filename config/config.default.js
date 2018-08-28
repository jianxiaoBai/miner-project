'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534643842903_5103';

  // add your config here
  config.middleware = [];
  config.secret = 'miner2018white';
  config.toAddr = '0x753f19a08d752ab3a64789fa0b0fff41c9e3589b';
  config.sms = {
    username: 'TRUE888hy',
    password: 'ADljCe',
    sendAddress: 'http://api.zthysms.com/sendSms.do',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'miner',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true
  }
  config.middleware = [ 'checkToken', 'errorHandler'];
  return config;
};
