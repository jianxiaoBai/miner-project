<template>
  <div>
    <div class="x-tabs">
      <div class="x-tabs__header">
        <ul class="x-tabs__nav">
          <li class="x-tabs__item active">手机注册</li>
        </ul>
      </div>
      <div class="x-tabs__content">
        <div class="tabs-pane">
          <form class="login-form" _lpchecked="1">
            <div class="input-group">
              <div class="el-input el-input-group el-input-group--prepend" aria-required="true" aria-invalid="true">
                <input type="text" autocomplete="off" placeholder="手机号码" name="phone" data-vv-scope="$phone" class="el-input__inner">
              </div>
            </div>
            <div class="input-group">
              <div class="code-input el-input el-input--suffix" aria-required="true" aria-invalid="true">
                <input type="text" autocomplete="off" placeholder="请输入验证码" name="code" data-vv-scope="$phone" class="el-input__inner">
                <span class="el-input__suffix">
                    <span class="el-input__suffix-inner">
                      <button  type="button" class="el-button text-secondary el-button--text">
                        <span>
                          发送验证码
                        </span>
                </button>
                </span>
                </span>
              </div>
            </div>
             <div class="input-group">
              <div class="code-input el-input el-input--suffix" aria-required="true" aria-invalid="true">
                <input type="password" autocomplete="off" placeholder="请输入验证码" name="code" data-vv-scope="$phone" class="el-input__inner">
              </div>
            </div>
            <div class="input-group">
              <div class="code-input el-input el-input--suffix" aria-required="true" aria-invalid="true">
                <input type="password" autocomplete="off" placeholder="请输入验证码" name="code" data-vv-scope="$phone" class="el-input__inner">
              </div>
            </div>
            <button disabled="disabled" type="button" class="el-button btn-login el-button--primary is-disabled">
                <span>
                  登录
                </span>
              </button>
            <div class="extra el-row">
              <div class="text-left el-col el-col-12">
                <span class="text-secondary pointer">使用密码登录</span>
              </div>
              <div class="text-right el-col el-col-12">
                <a href="/sign-back" class="">忘记密码?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        input2: '',
        input21: '',
        input22: '',
        input23: '',
      };
    },
  };
</script>

<style lang="stylus" scoped>

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
    padding: 40px 600px;
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

  [class*=" el-icon-"] {
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

  .el-icon-arrow-up:before {
    content: "\E605";
  }

</style>
