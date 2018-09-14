# mine-official

## Build Setup

``` bash
# 安装依赖
$ npm install # Or yarn install

# 运行在本地
$ npm run dev

# 构建后部署
$ npm run build
$ npm start

# 静态化项目
$ npm run generate
```

[Nuxt.js docs](https://github.com/nuxt/nuxt.js).

```
├── README.md              => 文档
├── api                    => 接口配置
│   ├── http.js            => 封装 axios
│   └── index.js           => 接口参数定义
├── assets                 => 静态资源
│   ├── img                => 图片
│   └── stylus             => 通用样式
│       ├── animation.styl => 动画
│       ├── base.styl      => 常用样式组合
│       ├── index.styl     => 导出
│       ├── mixin.styl     => 样式方法
│       └── reset.styl     => 样式重置
├── auto_deploy.sh         => 自动化shell
├── components             => 通用组件
├── config                 => 配置
│   └── index.js           => 环境配置
├── layouts                => 网页布局
│   └── default.vue        => 入口
├── locales                => 全球化配置文件
│   ├── en.json            => 英文
│   └── zh.json            => 中文
├── middleware             => 中间件
├── nuxt.config.js         => 全局 `nuxt` 配置文件
├── pages                  => 具体页面
│   ├── _lang              => 语言切换时的变量
│   ├── center
│   │   │   ├── index.vue  => 个人中心首页
│   │   │   ├── order.vue  => 订单
│   │   │   ├── power.vue  => 算力
│   │   │   ├── safety.vue => 安全
│   │   │   ├── sell.vue   => 提现
│   │   ├── center.vue     => 个人中心父级组件
│   │   ├── forget.vue     => 忘记密码
│   │   ├── index.vue      => 首页
│   │   ├── login.vue      => 登录
│   │   ├── pay.vue        => 支付
│   │   ├── product.vue    => 产品
│   │   └── register.vue   => 注册
│   ├── center             => ~~
│   │   ├── index.vue      => ~~
│   │   ├── order.vue      => ~~
│   │   ├── power.vue      => ~~
│   │   ├── safety.vue     => ~~
│   │   ├── sell.vue       => ~~
│   │   └── trust.vue      => ~~
│   ├── center.vue         => ~~
│   ├── forget.vue         => ~~
│   ├── index.vue          => ~~
│   ├── login.vue          => ~~
│   ├── pay.vue            => ~~
│   ├── product.vue        => ~~
│   └── register.vue       => ~~
├── plugins                => 插件
├── static                 => 静态资源
│   ├── favicon.ico        => 网站ico
│   └── qrcode.min.js      => 二维码生成库
├── store                  => vuex
├── util                   => 工具库
└── webhook.js             => 自动化部署脚本
```



```
data-.*?=""
\[data-.*?\]
https://blockchain.info/q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj
pm2 start npm --name "miner-off" -- run start

```