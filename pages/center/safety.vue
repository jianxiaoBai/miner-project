<template>
  <div class="safety-container">
    <div class="page">
      <h2 class="page-header">&#23433;&#20840;&#20013;&#24515;</h2>
      <div class="page-content">
        <div class="c-tile-list">
          <div class="c-tile-list__item">
            <div class="item-thumbnail">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M11.647 8.69v2.178L18 14.914V18H0v-3.086l6.353-3.941V8.691a3.536 3.536 0 0 1-1.059-2.52V3.6C5.294 1.612 6.954 0 9 0c2.047 0 3.706 1.612 3.706 3.6v2.571c0 .981-.404 1.87-1.059 2.52z"
                    fill="#A5A5A5" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div class="item-inner account">
              <h3>&#25105;&#30340;&#36134;&#25143;</h3>
              <p>
                <span>&#32465;&#23450;&#25163;&#26426;: 151****1380</span>
              </p>
              <p>
                <span>&#32465;&#23450;&#37038;&#31665;: &#26410;&#32465;&#23450;</span>
                <button type="button" class="el-button right el-button--default el-button--mini">
                    <span>&#21435;&#32465;&#23450;
                    </span>
                  </button>
              </p>
            </div>
          </div>
          <div class="c-tile-list__item">
            <div class="item-thumbnail">
              <i class="el-icon-warning"></i>
            </div>
            <div class="item-inner">
              <h3>我的密码</h3>
              <p>用于保护帐号信息和登录安全。</p>
            </div>
            <button type="button" class="el-button right el-button--default el-button--mini">
                <span>
                  设置密码
                </span>
              </button>
          </div>
            <div class="c-tile-list__item">
            <div class="item-thumbnail">
              <i class="el-icon-warning"></i>
            </div>
            <div class="item-inner">
              <h3>ETH提现地址</h3>
              <p>用于ETH帐户提现</p>
            </div>
            <button type="button" class="el-button right el-button--default el-button--mini">
                <span>
                  未设置
                </span>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scpoed>
  .safety-container {
    /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
    .page-header {
      font-size: 24px;
      line-height: 24px;
      padding: 20px 30px;
      border-bottom: 1px solid #F5F5F7;
      color: #303137;
    }
    .page-content {
      padding: 30px;
    }
    .c-tile-list {
      background: #FDFDFD;
      border: 1px solid #EDEEF0;
      padding: 0 30px;
    }
    .c-tile-list__item {
      position: relative;
      padding-top: 30px;
      padding-bottom: 20px;
      padding-left: 35px;
      border-bottom: 1px solid #EDEEF0;
    }
    .c-tile-list__item:last-child {
      border-bottom: 0;
    }
    .c-tile-list__item .item-thumbnail {
      position: absolute;
      margin-top: -1px;
      left: 0;
      font-size: 18px;
    }
    .c-tile-list__item .item-thumbnail .el-icon-success {
      color: #67BE2F;
    }
    .c-tile-list__item .item-thumbnail .el-icon-warning {
      color: #FFB764;
    }
    .c-tile-list__item .item-inner {
      display: inline-block;
      p {
        text-align left
      }
    }
    .c-tile-list__item .item-inner.account {
      display: block;
    }
    .c-tile-list__item .item-inner.account p {
      line-height: 32px;
      color: #303137;
    }
    .c-tile-list__item .item-inner.account button {
      margin-top: 0;
    }
    .c-tile-list__item .item-inner h3 {
      font-size: 16px;
      color: #303137;
      letter-spacing: 0.89px;
      line-height: 16px;
      position: relative;
      margin-bottom: 12px;
    }
    .c-tile-list__item .item-inner p {
      font-size: 14px;
      color: #999;
      letter-spacing: 0.35px;
      line-height: 19px;
    }
    .c-tile-list__item button {
      margin-top: 7px;
    }
    .dialog-title strong {
      font-size: 18px;
      color: #303133;
      margin-right: 15px;
      font-weight: normal;
    }
    .dialog-title small {
      font-size: 12px;
      color: #999;
    }
    strong {
      font-weight: bolder;
    }
    small {
      font-size: 80%;
    }
    button {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button {
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
    h2,
    h3,
    p {
      margin: 0;
    }
    h2 {
      font-size: 22px;
      line-height: 30px;
    }
    h3 {
      font-size: 18px;
      line-height: 24px;
    }

    .el-icon-success:before {
      content: "\E62D";
    }
    .el-icon-warning:before {
      content: "\E62E";
    }
    .el-icon-close:before {
      content: "\E60F";
    }
    .el-dialog {
      position: relative;
      margin: 0 auto 50px;
      background: #fff;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .el-dialog__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
      margin: 0;
    }
    .el-dialog__header {
      padding: 20px;
      padding-bottom: 10px;
    }
    .el-dialog__headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: #909399;
    }
    .el-dialog__headerbtn:focus .el-dialog__close,
    .el-dialog__headerbtn:hover .el-dialog__close {
      color: #303137;
    }
    .el-dialog__title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .el-dialog__footer {
      padding: 20px;
      padding-top: 10px;
      text-align: right;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--default:hover,
    .el-button--default:focus {
      background-color: #FAFAFA;
      border-color: #dcdfe6;
      color: #606166;
    }
    .el-button--default:active {
      background-color: #F5F5F7;
      border-color: #dcdfe6;
      color: #606166;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background-color: #4E4F57;
      border-color: #4E4F57;
      color: #fff;
    }
    .el-button--primary:active {
      background-color: #1A1B1E;
      border-color: #1A1B1E;
      color: #fff;
    }
    .el-button--text {
      color: #4D87EA;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      background-color: transparent;
      border-color: transparent;
      color: #699CF5;
    }
    .el-button--text:active {
      background-color: transparent;
      border-color: transparent;
      color: #4375CC;
    }
    .el-button {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 14px;
      line-height: 18px;
      min-width: 96px;
      font-weight: normal;
      border-radius: 0;
    }
    .el-button--mini {
      padding: 6px 15px;
      min-width: 86px;
    }
    .el-dialog__title {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      color: #303137;
    }
    .custom .el-dialog__footer {
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
    .el-dialog__footer .el-button {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .right {
      float: right;
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
    h2,
    h3,
    p {
      margin: 0;
    }
    h2 {
      font-size: 22px;
      line-height: 30px;
    }
    h3 {
      font-size: 18px;
      line-height: 24px;
    }
    .el-icon-success:before {
      content: "\E62D";
    }
    .el-icon-warning:before {
      content: "\E62E";
    }
    .el-icon-close:before {
      content: "\E60F";
    }
    .el-dialog {
      position: relative;
      margin: 0 auto 50px;
      background: #fff;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .el-dialog__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
      margin: 0;
    }
    .el-dialog__header {
      padding: 20px;
      padding-bottom: 10px;
    }
    .el-dialog__headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: #909399;
    }
    .el-dialog__headerbtn:focus .el-dialog__close,
    .el-dialog__headerbtn:hover .el-dialog__close {
      color: #303137;
    }
    .el-dialog__title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .el-dialog__footer {
      padding: 20px;
      padding-top: 10px;
      text-align: right;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      color: #606166;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button+.el-button {
      margin-left: 10px;
    }
    .el-button:hover,
    .el-button:focus {
      color: #303137;
      border-color: #c1c1c3;
      background-color: #eaeaeb;
    }
    .el-button:active {
      color: #2b2c32;
      border-color: #2b2c32;
      outline: none;
    }
    .el-button::-moz-focus-inner {
      border: 0;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .el-button--primary {
      color: #fff;
      background-color: #303137;
      border-color: #303137;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background: #595a5f;
      border-color: #595a5f;
      color: #fff;
    }
    .el-button--primary:active {
      background: #2b2c32;
      border-color: #2b2c32;
      color: #fff;
      outline: none;
    }
    .el-button--primary.is-disabled,
    .el-button--primary.is-disabled:hover,
    .el-button--primary.is-disabled:focus,
    .el-button--primary.is-disabled:active {
      color: #fff;
      background-color: #98989b;
      border-color: #98989b;
    }
    .el-button--mini {
      padding: 7px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    .el-button--text {
      border-color: transparent;
      color: #303137;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      color: #595a5f;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--text:active {
      color: #2b2c32;
      border-color: transparent;
      background-color: transparent;
    }
    .el-button--default:hover,
    .el-button--default:focus {
      background-color: #FAFAFA;
      border-color: #dcdfe6;
      color: #606166;
    }
    .el-button--default:active {
      background-color: #F5F5F7;
      border-color: #dcdfe6;
      color: #606166;
    }
    .el-button--primary:hover,
    .el-button--primary:focus {
      background-color: #4E4F57;
      border-color: #4E4F57;
      color: #fff;
    }
    .el-button--primary:active {
      background-color: #1A1B1E;
      border-color: #1A1B1E;
      color: #fff;
    }
    .el-button--text {
      color: #4D87EA;
    }
    .el-button--text:hover,
    .el-button--text:focus {
      background-color: transparent;
      border-color: transparent;
      color: #699CF5;
    }
    .el-button--text:active {
      background-color: transparent;
      border-color: transparent;
      color: #4375CC;
    }
    .el-button {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 14px;
      line-height: 18px;
      min-width: 96px;
      font-weight: normal;
      border-radius: 0;
    }
    .el-button--mini {
      padding: 6px 15px;
      min-width: 86px;
    }
    .el-dialog__title {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      color: #303137;
    }
    .custom .el-dialog__footer {
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
    .el-dialog__footer .el-button {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .right {
      float: right;
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
    /*! CSS Used from: Embedded */
    * {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
    }
  }

</style>
