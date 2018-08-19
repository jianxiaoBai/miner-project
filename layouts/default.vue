<template>
  <div class="app-container">
    <div id="gn-header">
      <div class="header__inner">
        <!-- <a href="/" class="logo"></a> -->
        <nuxt-link class="logo" to="/" />
        <ul role="menubar" class="menu el-menu--horizontal el-menu">
          <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item" tag="li" to="/product">矿机</nuxt-link>
          <!-- <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item"  tag="li" to="/q1">托管</nuxt-link> -->
          <!-- <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item"  tag="li" to="/pool">矿池</nuxt-link> -->
          <!-- <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item"  tag="li" to="/cloud">云算力</nuxt-link> -->
        </ul>
        <div class="right text-right">
          <ul role="menubar" class="menu login el-menu--horizontal el-menu is-login">
            <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item sign-in" to="sign-in">
              登录
            </nuxt-link>
            <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item sign-up" to="sign-up">
              注册
            </nuxt-link>
            <li role="menuitem" tabindex="0" class="el-menu-item menu-item cart">
              <a href="/cart">
                <img src="~/assets/img/cart.9bdd50b.svg">
              </a>
            </li>
            <nuxt-link role="menuitem" aria-haspopup="true" menu-trigger="hover" class="mine el-submenu" tabindex="0" tag="li" to="/center">
              <div class="el-submenu__title" style="border-bottom-color:transparent;color:;">
                <span style="color:#FFF;border-bottom-color:transparent;">
                      <img src="~/assets/img/person.1cee58e.svg" class="icon-my-center">个人中心 </span>
              </div>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-container">
      <transition name="fade-x">
        <nuxt/>
      </transition>
    </div>
    <div class="features el-row">
      <div class="el-col el-col-6">
        <img src="~/assets/img/feature_superb.8e98ef0.png" alt="">
        <p>算力卓越</p>
      </div>
      <div class="el-col el-col-6">
        <img src="~/assets/img/feature_flexible_trading.6dd96da.png" alt="">
        <p>灵活交易</p>
      </div>
      <div class="el-col el-col-6">
        <img src="~/assets/img/feature_low_risk.5ffc700.png" alt="">
        <p>超低风险</p>
      </div>
      <div class="el-col el-col-6">
        <img src="~/assets/img/feature_buy_use.987034b.png" alt="">
        <p>随买随用</p>
      </div>
    </div>
    <div class="footer">
      <div class="footer__inner el-row">
        <div class="el-col el-col-7"><img src="~/assets/img/footer-logo.60c2768.png" class="footer-logo">
          <p>沪ICP备18000657号-2 Copyright © 算立方 版权所有</p>
          <p>上海挖链科技有限公司</p>
          <p>地址：上海市徐汇区云锦路500号绿地汇中心B座12楼</p>
        </div>
        <div class="el-col el-col-3">
          <h5>挖链产品与服务</h5>
          <p><a href="/" class="link">算立方</a></p>
          <p><a href="#" target="_blank" class="link">挖链网</a></p>
          <p><a href="#" target="_blank" class="link">通证指数</a></p>
        </div>
        <div class="el-col el-col-3">
          <h5>关于算立方</h5>
          <p><a href="/about-us" class="link">算立方简介</a></p>
          <p>商务合作</p>
          <p>bd@walian.cn</p>
        </div>
        <div class="text-center el-col el-col-4">
          <h5>客服热线</h5>
          <p class="footer-service">400-865-6688</p>
          <p>周一至周五 09:00~18:00</p>
          <p>（仅收市话费）</p>
        </div>
        <div class="el-col el-col-5 el-col-offset-2">
          <div class="text-center el-row">
            <div class="el-col el-col-12">
              <h5>算立方客服微信</h5><img src="~/assets/img/wechat-services.06640be.jpg" class="download-img"></div>
            <div class="el-col el-col-12">
              <h5>算立方公众号</h5><img src="~/assets/img/qrcode.c141531.jpg" class="download-img"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    transition: {
      name: 'fade-x',
      mode: 'out-in'
    }
  }

  ;
</script>

<style lang="stylus" scpoed>
@import '~@/assets/stylus/index.styl';
@import '~@/assets/stylus/mixin.styl';
.app-container {
.features {
    background-color: #fff;
    text-align: center;
    padding: 50px 120px;
    img {
      width: 65px;
    }

    p {
      margin-top: 20px;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
    }
  }

.main-container {
  min-height: calc(100vh - 276px);
}
.menu.lang .el-submenu__title {
  padding-right: 5px;
  text-align: right;
}

.right {
  float: right;
}

.text-right {
  text-align: right;
}

#gn-header {
  background: #303137;
  width: 100%;
  height: 80px;
  padding-top: 12px;
}

#gn-header .header__inner {
  width: 1200px;
  margin: 0 auto;
}

#gn-header .logo {
  cursor: pointer;
  width: 158px;
  height: 61px;
  float: left;
  // background-image: url(https://hash.hc.top/_nuxt/img/logo-cn@1x.332b85e.png);
  // background-image: url(https://hash.hc.top/_nuxt/img/logo-cn@1x.332b85e.png);
  background-image: url('https://hash.hc.top/_nuxt/img/logo-cn@2x.378c50c.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}

#gn-header .menu {
  display: inline-block;
  border-bottom: 0;
  height: 50px;
  overflow: hidden;
  background-color: transparent;
  padding-top: 14px;
}

#gn-header .menu.login .menu-item:hover {
  color: #FFE6A1;
}

#gn-header .menu.login .mine, #gn-header .menu.login .cart {
  display: none;
}

#gn-header .menu.login .icon-my-center {
  position: relative;
  left: -2px;
  top: -1px;
  width: 13px;
}

#gn-header .menu.login.is-login .mine, #gn-header .menu.login.is-login .cart {
  display: inline-block;
}

#gn-header .menu.lang {
  margin-left: 0;
}

#gn-header .menu-item {
  height: 34px;
  line-height: 34px;
  color: #fff;
}

#gn-header .menu>.menu-item {
  border-bottom: 0;
}

#gn-header .menu>.menu-item:focus, #gn-header .menu>.menu-item:hover {
  border-bottom: 0 !important;
  background-color: transparent;
}

#gn-header .menu>.menu-item:active {
  border: none;
  color: #fff;
}

#gn-header .menu>.menu-item.cart:focus, #gn-header .menu>.menu-item.cart:hover {
  background-color: transparent !important;
}

#gn-header .menu>.menu-item.cart img {
  display: inline-block;
  width: 15px;
  vertical-align: -3px;
}

#gn-header .menu-item.sign-in, #gn-header .menu-item.sign-up {
  padding-left: 10px;
  padding-right: 10px;
}

#gn-header .menu-item.sign-in:focus, #gn-header .menu-item.sign-in:hover, #gn-header .menu-item.sign-up:focus, #gn-header .menu-item.sign-up:hover {
  background-color: transparent !important;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  #gn-header .logo {
    background-image: url('https://hash.hc.top/_nuxt/img/logo-cn@2x.378c50c.png');
  }
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

::-ms-clear, ::-ms-reveal {
  display: none;
}

::-ms-expand {
  display: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

[class*=' el-icon-'] {
  font-family: 'element-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  -webkit-font-feature-settings: normal;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-icon-arrow-down:before {
  content: '\E603';
}

.el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}

.el-menu::before, .el-menu::after {
  display: table;
  content: '';
}

.el-menu::after {
  clear: both;
}

.el-menu--horizontal {
  border-right: none;
  border-bottom: solid 1px #e6e6e6;
}

.el-menu--horizontal>.el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}

.el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
  color: inherit;
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
  background-color: #fff;
}

.el-menu--horizontal>.el-submenu {
  float: left;
}

.el-menu--horizontal>.el-submenu:focus, .el-menu--horizontal>.el-submenu:hover {
  outline: none;
}

.el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
  color: #303133;
}

.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
}

.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #fff;
}

.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
  outline: none;
  color: #303133;
}

.el-menu-item {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}

.el-menu-item * {
  vertical-align: middle;
}

.el-menu-item:hover, .el-menu-item:focus {
  outline: none;
  background-color: #eaeaeb;
}

.el-submenu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.el-submenu__title {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}

.el-submenu__title * {
  vertical-align: middle;
}

.el-submenu__title i {
  color: #909399;
}

.el-submenu__title:hover, .el-submenu__title:focus {
  outline: none;
  background-color: #eaeaeb;
}

.el-submenu__title:hover {
  background-color: #eaeaeb;
}

.el-submenu__icon-arrow {
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -7px;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  font-size: 12px;
}

.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 34px;
  line-height: 34px;
  color: #fff;
}

.el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
  color: #fff;
  border: 0;
  background-color: transparent;
}

.menu.lang .el-submenu__title {
  padding-right: 5px;
  text-align: right;
}

.right {
  float: right;
}

.text-right {
  text-align: right;
}

/* CSS Used fontfaces */
@font-face {
  font-family: 'element-icons';
  src: url('https://hash.hc.top/_nuxt/fonts/element-icons.2fad952.woff') format('woff'), url('https://hash.hc.top/_nuxt/fonts/element-icons.6f0a763.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'element-icons';
  src: url('https://hash.hc.top/_nuxt/fonts/element-icons.2fad952.woff') format('woff'), url('https://hash.hc.top/_nuxt/fonts/element-icons.6f0a763.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
.footer {
  height: 236px;
  background-color: #303137;
  padding-top: 40px;
  padding-bottom: 40px;
}

.footer .footer__inner, .footer .friend-link {
  max-width: 1200px;
  margin: 0 auto;
}

.footer .footer-logo {
  position: relative;
  top: -3px;
  width: 160px;
}

.footer img {
  vertical-align: top;
}

.footer p {
  font-size: 12px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
}

.footer p:nth-of-type(1) {
  margin-top: 8px;
}

.footer .footer-logo + p {
  margin-top: 13px;
}

.footer .link {
  font-size: 12px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
}

.footer .link:hover, .footer .link:focus {
  color: #fff;
}

.footer .footer-service {
  margin-top: 3px;
  font-size: 30px;
  color: #fff;
  line-height: 40px;
}

.footer h5 {
  color: #fff;
  font-size: 14px;
  line-height: 24px;
}

.footer .download-img {
  margin-top: 12px;
  width: 80px;
  height: 80px;
}

.footer .friend-link .link + .link:before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 10px;
  vertical-align: -1px;
  margin-left: 5px;
  margin-right: 6px;
  background-color: rgba(255, 255, 255, 0.6);
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

::-ms-clear, ::-ms-reveal {
  display: none;
}

::-ms-expand {
  display: none;
}

h5, p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

h5 {
  font-size: 16px;
  line-height: 22px;
}

.el-row {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.el-row::before, .el-row::after {
  display: table;
  content: '';
}

.el-row::after {
  clear: both;
}

[class*='el-col-'] {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.el-col-offset-2 {
  margin-left: 8.33333%;
}

.el-col-3 {
  width: 12.5%;
}

.el-col-4 {
  width: 16.66667%;
}

.el-col-5 {
  width: 20.83333%;
}

.el-col-7 {
  width: 29.16667%;
}

.el-col-12 {
  width: 50%;
}

.text-center {
  text-align: center;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*:focus {
  outline: none;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

::-ms-clear, ::-ms-reveal {
  display: none;
}

::-ms-expand {
  display: none;
}

h5, p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

h5 {
  font-size: 16px;
  line-height: 22px;
}

.el-row {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.el-row::before, .el-row::after {
  display: table;
  content: '';
}

.el-row::after {
  clear: both;
}

[class*='el-col-'] {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.el-col-offset-2 {
  margin-left: 8.33333%;
}

.el-col-3 {
  width: 12.5%;
}

.el-col-4 {
  width: 16.66667%;
}

.el-col-5 {
  width: 20.83333%;
}

.el-col-7 {
  width: 29.16667%;
}

.el-col-12 {
  width: 50%;
}

.text-center {
  text-align: center;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*:focus {
  outline: none;
}

/* CSS Used from: Embedded */
* {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
}
}
</style>
