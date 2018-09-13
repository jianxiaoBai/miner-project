<template>
  <div class="app-container">
    <div id="gn-header">
      <div class="header__inner">
        <nuxt-link class="logo" :to="$t(`root`) + '/'" />
        <div class="left text-right">
           <ul role="menubar" class="menu login el-menu--horizontal el-menu is-login">
              <nuxt-link role="menuitem" aria-haspopup="true" menu-trigger="hover" class="mine el-submenu" tabindex="0" tag="li" :to="$t(`root`) + '/'">
                <div class="el-submenu__title" style="border-bottom-color:transparent;color:;">
                  <span style="color:#FFF;border-bottom-color:transparent;">{{ $t(`header.home`) }}</span>
                </div>
              </nuxt-link>
          </ul>
        </div>
        <div class="right text-right">
          <ul role="menubar" class="menu login el-menu--horizontal el-menu is-login">
            <template v-if="isLogin">
              <!-- <li role="menuitem" tabindex="0" class="el-menu-item menu-item cart">
                <a href="/cart">
                  <img src="~/assets/img/cart.9bdd50b.svg">
                </a>
              </li> -->
              <nuxt-link role="menuitem" aria-haspopup="true" menu-trigger="hover" class="mine el-submenu" tabindex="0" tag="li" :to="`${$t(`root`)}/center`">
                <div class="el-submenu__title" style="border-bottom-color:transparent;color:;">
                  <span style="color:#FFF;border-bottom-color:transparent;">
                    <img src="~/assets/img/person.1cee58e.svg" class="icon-my-center">{{ $t(`header.center`) }}</span>
                </div>
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item login" :to="`${$t(`root`)}/login`">
                {{ $t(`header.login`) }}
              </nuxt-link>
              <nuxt-link role="menuitem" tabindex="0" class="el-menu-item menu-item register" :to="`${$t(`root`)}/register`">
                {{ $t(`header.reg`) }}
              </nuxt-link>
            </template>
            <li class="el-menu-item menu-item login">
              <el-dropdown>
                <span class="el-dropdown-link" style="color: white">
                  {{ $t(`language`)}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="changeLanguage('zh')">EN</el-dropdown-item>
                  <el-dropdown-item @click.native="changeLanguage('en')">中文</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-container">
      <transition name="fade-x">
        <nuxt/>
      </transition>
    </div>
    <div class="app-features">
      <div>
        <img src="~/assets/img/feature_superb.png" alt="">
        <p>{{ $t(`footer.list.item1`) }}</p>
      </div>
      <div>
        <img src="~/assets/img/feature_flexible_trading.png" alt="">
        <p>{{ $t(`footer.list.item2`) }}</p>
      </div>
      <div>
        <img src="~/assets/img/feature_low_risk.png" alt="">
        <p>{{ $t(`footer.list.item3`) }}</p>
      </div>
      <div>
        <img src="~/assets/img/feature_buy_use.png" alt="">
        <p>{{ $t(`footer.list.item4`) }}</p>
      </div>
    </div>
    <div class="footer">
      <span>Copyright ⓒ Galois All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
  import {
    getStore
  } from '~/util';
  export default {
    methods: {
      test () {
        alert('asas')
      },
      changeLanguage (lang) {
        // debugger
        if (this.$store.state.locale === lang) return

        const { $route: { fullPath, params }, $router } = this
        const path = fullPath.split(`/${params.lang}`).join('')

        // setStore('lang', lang)
        if (lang === 'zh') {
          const to = fullPath.replace(/^\/[^\/]+/, '');
          $router.push(to || '/')
        } else {
          $router.push(`/${lang}${path}`)
        }
      }
    },
    mounted() {
      this.isLogin = Boolean(getStore('token'))
    },
    data() {
      return {
        isLogin: null
      }
    },
    transition: {
      name: 'fade-x',
      mode: 'out-in'
    }
  };

</script>

<style lang="stylus" scpoed>
  @import '~@/assets/stylus/index.styl';
  @import '~@/assets/stylus/mixin.styl';
  .el-dropdown-selfdefine {
    color white
  }
  .footer {
    height 50px
    line-height 50px
    text-align center
    background-color #303137
    span {
      color white
    }
  }
  .app-container {
    .app-features {
      background-color: #fff;
      text-align: center;
      padding: 40px 120px;
      display flex
      justify-content space-around
      img {
        width: 65px;
        height auto
      }

      p {
        margin-top: 20px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
      }
    }

    .main-container {
      // min-height: calc(100vh - 276px);
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
      padding: 0 100px;
      margin: 0 auto;
    }

    #gn-header .logo {
      cursor: pointer;
      width: 158px;
      height: 61px;
      float: left; // background-image: url(https://hash.hc.top/_nuxt/img/logo-cn@1x.332b85e.png);
      // background-image: url(https://hash.hc.top/_nuxt/img/logo-cn@1x.332b85e.png);
      background-image: url('~/assets/img/logo-cn.png');
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

    #gn-header .menu.login .mine,
    #gn-header .menu.login .cart {
      display: none;
    }

    #gn-header .menu.login .icon-my-center {
      position: relative;
      left: -2px;
      top: -1px;
      width: 13px;
    }

    #gn-header .menu.login.is-login .mine,
    #gn-header .menu.login.is-login .cart {
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

    #gn-header .menu>.menu-item:focus,
    #gn-header .menu>.menu-item:hover {
      border-bottom: 0 !important;
      background-color: transparent;
    }

    #gn-header .menu>.menu-item:active {
      border: none;
      color: #fff;
    }

    #gn-header .menu>.menu-item.cart:focus,
    #gn-header .menu>.menu-item.cart:hover {
      background-color: transparent !important;
    }

    #gn-header .menu>.menu-item.cart img {
      display: inline-block;
      width: 15px;
      vertical-align: -3px;
    }

    #gn-header .menu-item.login,
    #gn-header .menu-item.register {
      padding-left: 10px;
      padding-right: 10px;
    }

    #gn-header .menu-item.login:focus,
    #gn-header .menu-item.login:hover,
    #gn-header .menu-item.register:focus,
    #gn-header .menu-item.register:hover {
      background-color: transparent !important;
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

    .el-menu::before,
    .el-menu::after {
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

    .el-menu--horizontal>.el-menu-item a,
    .el-menu--horizontal>.el-menu-item a:hover {
      color: inherit;
    }

    .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
      background-color: #fff;
    }

    .el-menu--horizontal>.el-submenu {
      float: left;
    }

    .el-menu--horizontal>.el-submenu:focus,
    .el-menu--horizontal>.el-submenu:hover {
      outline: none;
    }

    .el-menu--horizontal>.el-submenu:focus .el-submenu__title,
    .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
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

    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
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

    .el-menu-item:hover,
    .el-menu-item:focus {
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

    .el-submenu__title:hover,
    .el-submenu__title:focus {
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

    .el-menu--horizontal>.el-submenu:focus .el-submenu__title,
    .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
      color: #fff;
      border: 0;
      background-color: transparent;
    }

    .menu.lang .el-submenu__title {
      padding-right: 5px;
      text-align: right;
    }
  }

</style>
