<template>
  <div>
    <div class="x-tabs">
      <div class="x-tabs__header">
        <ul class="x-tabs__nav">
          <li class="x-tabs__item active">手机登录</li>
        </ul>
      </div>
      <div class="x-tabs__content">
        <div class="tabs-pane">
          <form class="login-form" _lpchecked="1">
            <div class="input-group">
              <div class="el-input el-input-group el-input-group--prepend" aria-required="true" aria-invalid="true">
                <input type="text" autocomplete="off" placeholder="手机号码" name="phone" v-model="phone" class="el-input__inner">
              </div>
            </div>
            <template v-if="isCodeLogin">
              <div class="input-group">
                <div class="el-input captcha-input el-input-group el-input-group--prepend" aria-required="true"
                  aria-invalid="true">
                  <input type="text" autocomplete="off" placeholder="请输入图形验证码" name="phone" v-model="captchaCode" class="el-input__inner">
                </div>
                <div class="captcha-img" @click="initCaptcha">
                  <span v-html="captchaImg"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="code-input el-input el-input--suffix" aria-required="true" aria-invalid="true">
                  <input type="text" autocomplete="off" placeholder="请输入验证码" name="code" v-model="code" class="el-input__inner">
                  <span class="el-input__suffix">
                    <span class="el-input__suffix-inner">
                      <button type="button" @click="onSendCode" class="el-button text-secondary el-button--text">
                        <span>
                          发送验证码
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="input-group">
                <div class="code-input el-input el-input--suffix" aria-required="true" aria-invalid="true">
                  <input type="password" autocomplete="off" placeholder="请输入密码" name="code" v-model="password" class="el-input__inner">
                </div>
              </div>
            </template>
            <button @click="onSubmit" type="button" class="el-button btn-login el-button--primary ">
              <span>
                登录
              </span>
            </button>
            <div class="extra el-row">
              <div class="text-left el-col el-col-12" @click="toggleLogin">
                <span class="text-secondary pointer"> {{ isCodeLogin ? '使用密码登录' : '验证码登录'}}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    apiCaptcha,
    apiSendSms,
    apiLogin,
    aaa
  } from '~/api';
  import {
    setStore
  } from '~/util';
  export default {
    async mounted() {
      this.initCaptcha()
    },
    methods: {
      async initCaptcha() {
        const {
          data
        } = await apiCaptcha();
        this.captchaImg = data
      },
      toggleLogin() {
        this.isCodeLogin = !this.isCodeLogin
        this.code = null;
        this.password = null;
      },
      onSubmit() {
        try {
          this.checkPhone()
          apiLogin({
            mobile: this.phone,
            code: this.code,
            password: this.password,
            isCodeLogin: this.isCodeLogin
          }).then(res => {
            this.$message({
              message: '登录成功, 2秒后跳转',
              type: 'success'
            });
            setStore('token', res.data.token);
            setTimeout(() => {
              location.href = '/'
            }, 2000);
          })
        } catch (error) {
          this.$message({
            message: error.message,
            type: 'warning'
          });
        }
      },
      checkPhone() {
        const _phoneReg = new RegExp(this.phoneReg);
        if (!_phoneReg.test(this.phone)) {
          throw new Error('手机号不合法')
        }
      },
      async onSendCode() {
        try {
          this.checkPhone()
          if (!this.captchaCode) {
            return this.$message({
              message: '发送失败',
              type: 'error'
            });
          }
          await apiSendSms({
            mobile: this.phone,
            captcha: this.captchaCode
          })
          this.$message('验证码已发送');
        } catch (error) {
          this.$message({
            message: error.message,
            type: 'warning'
          });
        }
      }
    },
    data() {
      return {
        isCodeLogin: true,
        phone: null,
        captchaCode: null,
        captchaImg: '',
        code: null,
        password: '',
        phoneReg: '^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$'
      };
    },
  };

</script>

<style lang="stylus" scoped>
  .captcha-img {
    position absolute top -12px right 0
  }

  .captcha-input {
    width 60%
  }

  #wy_captcha {
    width: 100%;
    height: 40px;
  }

  .wrapper {
    width: 100%;
    height: 40px;
  }

  .x-tabs {
    background-color: #fff;
    padding: 40px 530px;
    height: 515px;
  }

  .x-tabs__header {
    margin-bottom: 30px;
  }

  .x-tabs__nav {
    text-align: center;
    font-size: 0;
  }

  .x-tabs__item {
    position: relative;
    display: inline-block;
    font-size: 20px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    color: #3C3C3F;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: top;
  }

  .x-tabs__item.active {
    color: #303137;
    font-weight: bold;
  }

  .x-tabs__item+.x-tabs__item:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: 5px;
    width: 2px;
    height: 20px;
    background-color: #3c3c3f;
  }

  .input-group {
    margin-bottom: 30px;
    position: relative;
  }

  .btn-login {
    display: block;
    width: 100%;
    height: 44px;
    font-size: 16px;
    margin-top: 50px;

    span {
      color white
    }
  }

  .extra {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #969699;
  }

  .text-secondary {
    color: #a99067;
  }

  .pointer {
    cursor: pointer;
  }

  a {
    background-color: transparent;
  }

  img {
    border-style: none;
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button {
    text-transform: none;
  }

  button,
  [type="button"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring {
    outline: 1px dotted ButtonText;
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
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }

  ::-ms-clear,
  ::-ms-reveal {
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

  .el-icon-arrow-up:before {
    content: "\E605";
  }

</style>
