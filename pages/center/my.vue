<template>
  <div>
    <div class="page">
      <h2 class="page-header">我的账户</h2>
      <div class="page-content">
        <section class="c-section">
          <h4 class="c-section__title">
            账户余额
          </h4>
          <div class="c-section__content rmb clearfix">
            <div class="left">
              总额
              <strong>0.00</strong>元
            </div>
            <div class="left">
              可用
              <strong>0.00</strong>元
            </div>
            <div class="left">
              冻结
              <strong>0.00</strong>元
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>充值</span>
                </button>
              <button type="button" class="el-button el-button--default el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section>
        <!-- <section class="c-section">
          <h4 class="c-section__title">
            BTC账户
            <a href="/i/account/detail?currencyId=1" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>BTC
            </div>
            <div class="left">
              可用
              <strong>0</strong>BTC
            </div>
            <div class="left">
              冻结
              <strong>0</strong>BTC
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section> -->
        <!-- <section class="c-section">
          <h4 class="c-section__title">
            DCR账户
            <a href="/i/account/detail?currencyId=3" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>DCR
            </div>
            <div class="left">
              可用
              <strong>0</strong>DCR
            </div>
            <div class="left">
              冻结
              <strong>0</strong>DCR
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section>
        <section class="c-section">
          <h4 class="c-section__title">
            BTM账户
            <a href="/i/account/detail?currencyId=4" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>BTM
            </div>
            <div class="left">
              可用
              <strong>0</strong>BTM
            </div>
            <div class="left">
              冻结
              <strong>0</strong>BTM
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section>
        <section class="c-section">
          <h4 class="c-section__title">
            BCH账户
            <a href="/i/account/detail?currencyId=5" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>BCH
            </div>
            <div class="left">
              可用
              <strong>0</strong>BCH
            </div>
            <div class="left">
              冻结
              <strong>0</strong>BCH
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section>
        <section class="c-section">
          <h4 class="c-section__title">
            ETC账户
            <a href="/i/account/detail?currencyId=6" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>ETC
            </div>
            <div class="left">
              可用
              <strong>0</strong>ETC
            </div>
            <div class="left">
              冻结
              <strong>0</strong>ETC
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section>
        <section class="c-section">
          <h4 class="c-section__title">
            HCASH账户
            <a href="/i/account/detail?currencyId=8" class="c-text-btn">
                查看明细 &gt;
              </a>
          </h4>
          <div class="c-section__content clearfix">
            <div class="left">
              总额
              <strong>0</strong>HCASH
            </div>
            <div class="left">
              可用
              <strong>0</strong>HCASH
            </div>
            <div class="left">
              冻结
              <strong>0</strong>HCASH
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini">
                  <span>提现</span>
                </button>
            </div>
          </div>
        </section> -->
      </div>
      <div class="el-dialog__wrapper custom" style="display: none;">
        <div class="el-dialog" style="margin-top: 10vh; width: 420px;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">账户提现</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button type="button" class="el-button el-button--default">
                  <span>取 消</span>
                </button>
              <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled">
                  <span>提交申请
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="el-dialog__wrapper custom" style="display: none;">
        <div class="el-dialog" style="margin-top: 15vh; width: 420px;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">undefined提现</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled">
                  <span>
                    下一步
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="el-dialog__wrapper custom" style="display: none;">
        <div class="el-dialog" style="margin-top: 15vh; width: 420px;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">安全验证</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
          </div>
          <div class="el-dialog__footer">
            <div class="dialog-footer">
              <button type="button" class="el-button el-button--default">
                  <span>上一步</span>
                </button>
              <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled">
                  <span>
                    提交申请
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="el-dialog__wrapper custom" style="display: none;">
        <div class="el-dialog" style="margin-top: 15vh; width: 420px;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">提示</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
          </div>
          <div class="el-dialog__footer">
            <div>
              <button disabled="disabled" type="button" class="el-button el-button--primary is-disabled">
                  <span>去付款</span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="el-dialog__wrapper custom" style="display: none;">
        <div class="el-dialog" style="margin-top: 15vh; width: 420px;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">提现</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
          </div>
          <div class="el-dialog__footer">
            <div>
              <button type="button" class="el-button el-button--primary">
                  <span>知道了</span>
                </button>
            </div>
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
  /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
  .el-button--primary {
    span {
      color white
    }
  }
  .c-section {
    margin-top: 30px;
  }

  .c-section__title {
    margin-top: 30px;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
  }

  .c-text-btn {
    float: right;
    font-size: 12px;
    color: #606166;
    font-weight: normal;
  }

  .c-section__content {
    padding: 30px 20px;
    background-color: #fafafa;
    line-height: 32px;
    font-size: 14px;
    color: #606166;
  }

  .c-section__content strong {
    font-size: 18px;
    color: #303137;
    margin: 0 4px 0 10px;
  }

  .c-section__content>div {
    padding-left: 2em;
    vertical-align: top;
    height: 32px;
    width: 270px;
  }

  .c-section__content>div:first-child {
    padding-left: 0;
    width: 240px;
  }

  .c-section__content>div:first-child strong {
    color: #fd7220;
  }

  .c-section__content>div:nth-child(2) {
    border-left: 1px solid #dedee0;
  }

  .c-section__content>div:last-child {
    padding-left: 0;
    width: 100px;
  }

  .c-section__content.rmb>div:nth-child(3) {
    width: 180px;
  }

  .c-section__content.rmb>div:last-child {
    width: 200px;
  }

  .page-header {
    padding-top: 20px;
    padding-bottom: 17px;
    padding-left: 30px;
    font-size: 24px;
    color: #303137;
    border-bottom: 1px solid #f5f5f7;
  }

  .page-content {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 70px;
  }

  a {
    background-color: transparent;
  }

  strong {
    font-weight: bolder;
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
  h4 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-size: 22px;
    line-height: 30px;
  }

  h4 {
    font-size: 18px;
    line-height: 24px;
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

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
  }

  .clearfix:after {
    clear: both;
    content: '';
    display: table;
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

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }

  .clearfix {
    zoom: 1;
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
  h4 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-size: 22px;
    line-height: 30px;
  }

  h4 {
    font-size: 18px;
    line-height: 24px;
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

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
  }

  .clearfix:after {
    clear: both;
    content: '';
    display: table;
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

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }

  .clearfix {
    zoom: 1;
  }

  /*! CSS Used from: Embedded */

  * {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
  }

</style>
