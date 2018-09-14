# miner-server

## 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:8011/
```

## 部署

```bash
$ npm start
$ npm stop
```

[文档](https://eggjs.org)

```
├── README.md                         => 文档
├── app                               => 应用
│   ├── controller                    => 只用来用来解析输入, 返回输出
│   │   ├── asset.js                  => 财产
│   │   ├── captcha.js                => 图形验证码
│   │   ├── home.js                   => 测试
│   │   ├── login.js                  => 登录
│   │   ├── mail.js                   => 邮箱
│   │   ├── miner.js                  => 矿机信息读写
│   │   ├── okex.js                   => okex汇率信息获取
│   │   ├── pay.js                    => 支付
│   │   ├── shops.js                  => 商品
│   │   ├── sign.js                   => 注册
│   │   └── user.js                   => 用户
│   ├── middleware                    => 中间件
│   │   ├── checkToken.js             => token检查
│   │   └── errorHandler.js           => 错误检查
│   ├── router.js                     => 路由映射
│   ├── service                       => 用来实现对应 `controller` 具体的业务逻辑
│   │   ├── asset.js                  => 财产
│   │   ├── captcha.js                => 图形验证码
│   │   ├── login.js                  => 登录
│   │   ├── miner.js                  => 矿机信息读写
│   │   ├── pay.js                    => 支付
│   │   ├── shops.js                  => 商品
│   │   ├── sign.js                   => 注册
│   │   └── user.js                   => 用户
│   └── utils.js                      => 工具类
├── appveyor.yml                      => asdasdsa
├── auto_deploy.sh                    => 自动化部署sh
├── config                            => 配置
│   ├── config.default.js             => 默认启动时的配置
│   ├── config.prod.js                => 线上配置
│   └── plugin.js                     => 插件asdasdsa
└── webhook.js                        => 自动化部署脚本
```