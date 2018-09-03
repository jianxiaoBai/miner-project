<template>
  <div data-v-32f2f1fc="" class="pay">
    <div data-v-32f2f1fc="" class="page-container">
      <div data-v-32f2f1fc="" class="order-info el-row">
        <div data-v-32f2f1fc="" class="el-col el-col-16">
          <p data-v-32f2f1fc="" class="">订单提交成功，请尽快付款，订单号：{{ $route.query.orderForm }}</p>
          <p data-v-32f2f1fc="" class="order-tips">订单已提交成功，请在当天23:00点钱内完成付款，否则订单将会失效</p>
          <p data-v-32f2f1fc="" style="margin-top: 10px; color: red;">确认付款成功并且认证地址后, 每天凌晨0点会进行挖矿打入认证地址</p>
        </div>
        <div data-v-32f2f1fc="" class="text-right el-col el-col-8">应付总金额
          <em data-v-32f2f1fc="" class="money">{{ data.sum }}.00</em>美元</div>
      </div>
      <div data-v-32f2f1fc="" class="pay-methods">
        <ul data-v-32f2f1fc="" class="pay-methods-list">
          <li data-v-32f2f1fc="" class="active">
            <label data-v-32f2f1fc="" role="checkbox" aria-checked="true" aria-disabled="true" class="el-checkbox is-disabled is-checked">
              <span aria-checked="mixed" class="el-checkbox__input is-disabled is-checked">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="true" disabled="disabled" true-value="3" class="el-checkbox__original">
              </span>
            </label>
            <!-- <img data-v-32f2f1fc="" src="/_nuxt/img/alipay.00f8247.png" alt=""> -->
            <span data-v-32f2f1fc="" class="name">ETH 支付</span>
            <span data-v-32f2f1fc="" class="recommend">推荐</span>
          </li>
        </ul>
        <div>
          <div>
            <span>收款数量:&nbsp;</span>
            <span style="color: red; font-size: 18px;">
              <strong>{{ data.pay_eth }}</strong>
            </span>
          </div>
          <div>
            <span>收款地址:&nbsp;</span>
            <span>0x2e9e11ea7435395837223fec1052a0e5787bbe73</span>
          </div>
          <div style="width: 200px">
            <span>收款二维码:</span>
            <img src="~/assets/img/moneyQR.png" alt="">
          </div>
        </div>
        <div>
          <div>
            <el-input style="width: 40%" v-model="payAddress" placeholder="请输入付款地址, 用来确认是否已付款"></el-input>
          </div>
          <div data-v-32f2f1fc="" class="pay-info">
            <div data-v-32f2f1fc="">
              <el-button type="primary" @click="onPay">已付款成功</el-button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <el-input style="width: 40%" :disabled="isBuy" v-model="authAddress" placeholder="绑定认证地址后24小时内开启挖矿"></el-input>
          </div>
          <div data-v-32f2f1fc="" class="pay-info">
             <el-button type="primary" :disabled="isBuy" @click="onDig">绑定挖矿地址</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    apiOrderForm,
    apiCheckAddr,
    apiAuthAddr
  } from '~/api'

  export default {
    mounted() {
      const {
        orderForm
      } = this.$route.query;
      apiOrderForm({
        orderForm
      }).then((res) => {
        this.data = res.data;
      })
    },
    data() {
      return {
        payAddress: null,
        authAddress: null,
        data: {},
        isBuy: true
      }
    },
    methods: {
      onDig () {
        if(this.isBuy) {
           return this.$message({
            message: '请先付款',
            type: 'warning'
          })
        }
        if (!this.authAddress) return
        if (this.authAddress.length !== 42) {
          return this.$message({
            message: '地址长度不够',
            type: 'warning'
          })
        }
        apiAuthAddr({
          authAddress: this.authAddress
        }).then(x => {
          this.$message({
            message: '绑定成功',
            type: 'success'
          })
        })
      },
      onPay() {
        if (!this.payAddress) return
        if (this.payAddress.length !== 42) {
          return this.$message({
            message: '地址长度不够',
            type: 'warning'
          })
        }

        apiCheckAddr({
          payAddress: this.payAddress,
          orderForm: this.data.order_form
        }).then((result) => {
          this.$message({
            message: '购买成功',
            type: 'success'
          })
          this.isBuy = false;
        })
      }
    }
  }

</script>

<style lang="stylus">
.pay {
  .features[data-v-36a43c6d] {
    background-color: #fff;
    text-align: center;
    padding: 50px 120px;
  }

  img[data-v-36a43c6d] {
    height: 45px;
    width: auto;
  }

  p[data-v-36a43c6d] {
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .page[data-v-32f2f1fc] {
    background-color: #f6f6f6;
  }

  .page-container[data-v-32f2f1fc] {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .order-info[data-v-32f2f1fc] {
    margin-top: 20px;
    background-color: #fff;
    padding: 30px 60px;
    font-size: 18px;
    color: #303030;
  }

  .order-info .order-tips[data-v-32f2f1fc] {
    margin-top: 10px;
    font-size: 14px;
    color: #FDAA24;
  }

  .order-info .money[data-v-32f2f1fc] {
    font-size: 30px;
    font-weight: bold;
    color: #fd7220;
    font-style: normal;
    margin-left: 0.2em;
    margin-right: 0.2em;
  }

  .pay-methods[data-v-32f2f1fc] {
    line-height: 56px;
  }

  .recommend[data-v-32f2f1fc] {
    display: inline-block;
    vertical-align: top;
    background: #fd7220;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    padding: 5px 6px;
    margin-left: 10px;
  }

  .pay-info[data-v-32f2f1fc] {
    margin-top: 20px;
  }

  .pay-online[data-v-32f2f1fc] {
    padding: 10px 60px 200px;
  }

  .dialog-content[data-v-32f2f1fc] {
    position: relative;
    padding-left: 55px;
  }

  .dialog-content img[data-v-32f2f1fc] {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
  }

  .dialog-content h5[data-v-32f2f1fc],
  .dialog-content p[data-v-32f2f1fc] {
    font-size: 14px;
    font-weight: normal;
    line-height: 15px;
  }

  .dialog-content h5[data-v-32f2f1fc] {
    margin-bottom: 10px;
  }

  .dialog-content p[data-v-32f2f1fc] {
    color: #999;
  }

  .pay-methods[data-v-32f2f1fc] {
    margin-top: 30px;
    padding: 30px 60px;
    background-color: #fff;
  }

  .pay-methods-list li[data-v-32f2f1fc] {
    height: 66px;
    padding: 20px;
    line-height: 26px;
    border-top: 1px solid #EDEEF0;
    cursor: pointer;
  }

  .pay-methods-list li[data-v-32f2f1fc]:last-child {
    border-bottom: 1px solid #EDEEF0;
  }

  .pay-methods-list li.active[data-v-32f2f1fc] {
    background: rgba(65, 133, 245, 0.05);
    border: 2px solid #4185F5;
    padding: 18px 18px 19px;
  }

  .pay-methods-list li:hover span.name[data-v-32f2f1fc] {
    color: #606166;
  }

  .pay-methods-list li.disabled[data-v-32f2f1fc],
  .pay-methods-list li.disabled .name[data-v-32f2f1fc] {
    color: rgba(48, 49, 55, 0.3);
  }

  .pay-methods-list li.disabled img[data-v-32f2f1fc] {
    opacity: 0.4;
  }

  .pay-methods-list img[data-v-32f2f1fc] {
    height: 100%;
  }

  .pay-methods-list .name[data-v-32f2f1fc] {
    display: inline-block;
    margin-left: 1em;
    margin-right: 6px;
    min-width: 7em;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #303137;
    vertical-align: top;
  }

  .pay-methods-list .recommend[data-v-32f2f1fc] {
    margin-right: 4em;
  }

  .pay-methods-list .txt[data-v-32f2f1fc] {
    display: inline-block;
    vertical-align: top;
    margin-right: 4em;
    font-size: 14px;
  }

  .btn-add[data-v-32f2f1fc] {
    margin-top: -3px;
    padding: 0 15px;
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    border: 1px dashed #cccdcf;
    color: #4D87EA;
    cursor: pointer;
  }

  .subhead[data-v-32f2f1fc] {
    font-size: 14px;
    color: #969699;
    font-weight: normal;
    margin-left: 2em;
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

  .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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
    span {
      color white
    }
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  // .el-button--primary.is-disabled,
  // .el-button--primary.is-disabled:hover,
  // .el-button--primary.is-disabled:focus,
  // .el-button--primary.is-disabled:active {
  //   color: #fff;
  //   background-color: #98989b;
  //   border-color: #98989b;
  // }

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }


  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .el-row {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-row::before,
  .el-row::after {
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

  .el-col-6 {
    width: 25%;
  }

  .el-col-8 {
    width: 33.33333%;
  }

  .el-col-16 {
    width: 66.66667%;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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


  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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

  .pay-methods-list .el-checkbox {
    vertical-align: top;
    margin-right: 1em;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner {
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner:after {
    height: 9px;
    left: 6px;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner:hover {
    border-color: #4185F5;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #fff;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #4185F5;
    border-color: #4185F5;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner {
    cursor: pointer;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner:after {
    cursor: pointer;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #fff;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
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

  .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .el-row {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-row::before,
  .el-row::after {
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

  .el-col-6 {
    width: 25%;
  }

  .el-col-8 {
    width: 33.33333%;
  }

  .el-col-16 {
    width: 66.66667%;
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
    -webkit-transition: 0.1s;
    transition: 0.1s;
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

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner::after {
    cursor: not-allowed;
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #f2f6fc;
    border-color: #dcdfe6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #c0c4cc;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  .el-checkbox__inner:hover {
    border-color: #303137;
  }

  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
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

  .pay-methods-list .el-checkbox {
    vertical-align: top;
    margin-right: 1em;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner {
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner:after {
    height: 9px;
    left: 6px;
  }

  .pay-methods-list .el-checkbox .el-checkbox__inner:hover {
    border-color: #4185F5;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #fff;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #4185F5;
    border-color: #4185F5;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner {
    cursor: pointer;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled .el-checkbox__inner:after {
    cursor: pointer;
  }

  .pay-methods-list .el-checkbox .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #fff;
  }
}
</style>
