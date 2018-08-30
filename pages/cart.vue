<template>
  <div class="cart">
    <div data-v-457cfe48="" class="container">
      <div data-v-457cfe48="" class="cart-container">
        <div data-v-457cfe48="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadcrumb">
          <span class="el-breadcrumb__item">
            <span role="link" class="el-breadcrumb__inner is-link">
              首页
            </span>
            <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
          </span>
          <span class="el-breadcrumb__item">
            <span role="link" class="el-breadcrumb__inner is-link">
              飞行者 Miner 200
            </span>
            <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
          </span>
          <span class="el-breadcrumb__item" aria-current="page">
            <span role="link" class="el-breadcrumb__inner">购物车</span>
            <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
          </span>
        </div>
        <div data-v-457cfe48="" class="el-table tb-cart row-hover-disabled el-table--fit el-table--enable-row-hover el-table--enable-row-transition">
          <div class="hidden-columns">
            <div data-v-457cfe48=""></div>
            <div data-v-457cfe48=""></div>
            <div data-v-457cfe48=""></div>
            <div data-v-457cfe48=""></div>
            <div data-v-457cfe48=""></div>
            <div data-v-457cfe48=""></div>
          </div>
          <div class="el-table__header-wrapper">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1200px;">
              <colgroup>
                <col name="el-table_6_column_22" width="48">
                <col name="el-table_6_column_23" width="350">
                <col name="el-table_6_column_24" width="202">
                <col name="el-table_6_column_25" width="200">
                <col name="el-table_6_column_26" width="200">
                <col name="el-table_6_column_27" width="200">
                <col name="gutter" width="0">
              </colgroup>
              <thead class="has-gutter">
                <tr class="tb-title">
                  <th colspan="1" rowspan="1" class="el-table_6_column_22   el-table-column--selection  is-leaf">
                    <div class="cell">
                        <el-checkbox v-model="checked"></el-checkbox>
                    </div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_6_column_23     is-leaf">
                    <div class="cell">商品信息</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_6_column_25     is-leaf">
                    <div class="cell">数量</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_6_column_26  is-right   is-leaf">
                    <div class="cell">小计</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_6_column_27  is-center   is-leaf">
                    <div class="cell">操作</div>
                  </th>
                  <th class="gutter" style="width: 0px; display: none;"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="el-table__body-wrapper is-scrolling-none">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1200px;">
              <colgroup>
                <col name="el-table_6_column_22" width="48">
                <col name="el-table_6_column_23" width="350">
                <col name="el-table_6_column_24" width="202">
                <col name="el-table_6_column_25" width="200">
                <col name="el-table_6_column_26" width="200">
                <col name="el-table_6_column_27" width="200">
              </colgroup>
              <tbody>
                <tr class="el-table__row">
                  <td rowspan="1" colspan="1" class="el-table_6_column_22  el-table-column--selection">
                    <div class="cell">
                        <el-checkbox v-model="checked"></el-checkbox>
                    </div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_6_column_23  ">
                    <div class="cell">
                      <div data-v-457cfe48="" class="product-info">
                        <div data-v-457cfe48="" class="product-desc">
                          <p data-v-457cfe48="">飞行者 Miner 200</p>
                          <p data-v-457cfe48="">专业GPU以太坊矿机 选托管免90天管理费</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_6_column_24  ">
                    <div class="cell">
                      <div data-v-457cfe48="" class="num-box">
                        <span data-v-457cfe48="" @click="onBuy(false)">-</span>
                        <input data-v-457cfe48=""  v-model="buyNum" type="number" title="" min="1">
                        <span data-v-457cfe48="" @click="onBuy(true)">+</span>
                      </div>
                    </div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_6_column_25 is-right ">
                    <div class="cell">
                      <p data-v-457cfe48="">{{ nowPrice * buyNum }}.00美元</p>
                    </div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_6_column_26 is-center ">
                    <div class="cell">
                      <p data-v-457cfe48="">
                        <i data-v-457cfe48="" class="el-icon-delete remove"></i>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="el-table__column-resize-proxy" style="display: none;"></div>
        </div>
        <div data-v-457cfe48="" class="summary">
          <label data-v-457cfe48="" role="checkbox" class="el-checkbox is-checked" aria-checked="true">
            <div class="cell">
                <el-checkbox v-model="checked">全选</el-checkbox>
            </div>
          </label>
          <button data-v-457cfe48="" type="button" class="el-button submit el-button--primary" @click="onConfirm">
            <span style="color: white">确认购买</span>
          </button>
          <div data-v-457cfe48="" class="summary-content">
            <span data-v-457cfe48="">已选择商品
              <em data-v-457cfe48="">{{ checked ? buyNum : 0 }}</em>件</span>
            <span data-v-457cfe48="">商品总金额：
              <em data-v-457cfe48="">{{ checked ? nowPrice * buyNum : 0 }}.00美元</em>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    apiOkex,
    apiPayInfo
  } from '~/api'

  export default {
    data () {
      return {
        buyNum: 1,
        nowPrice: 1000,
        checked: true
      }
    },
    methods: {
      onConfirm () {
        if(!this.checked) {
          return this.$message({
            message: '请选择产品',
            type: 'warning'
          });
        }
        apiPayInfo({
          buyNum: this.buyNum
        }).then(({ data: { orderForm } }) => {
          this.$router.push({
            path: 'pay',
            query: {
              orderForm
            }
          })
        })
      },
      onBuy (isBuy) {
        if(this.buyNum === 1 && !isBuy) return
        this.buyNum = isBuy ? this.buyNum += 1 : this.buyNum -= 1
      }
    },
    mounted() {

    }
  }

</script>

<style lang="stylus">
  /* CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
.cart {
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

  .tb-cart[data-v-457cfe48] {
    background: #fff;
  }

  .container[data-v-457cfe48] {
    height: 100%;
    background-color: #f6f6f6;
  }

  .cart-container[data-v-457cfe48] {
    max-width: 996px;
    margin: 0 auto 60px;
    min-height: calc(100vh - 522px);
  }

  .breadcrumb[data-v-457cfe48] {
    line-height: 36px;
    background-color: #f6f6f6;
  }

  .product-info[data-v-457cfe48] {
    // padding-left: 120px;
    text-align center
    position: relative;
    min-height: 100px;
  }

  .product-img[data-v-457cfe48] {
    position: absolute;
    border: 1px solid #EDEEF0;
    height: 100px;
    width: 100px;
    line-height: 98px;
    font-size: 0;
    left: 0;
    text-align: center;
  }

  .product-img img[data-v-457cfe48] {
    max-width: 100%;
    max-height: 80%;
    vertical-align: middle;
    display: inline-block;
  }

  .product-desc[data-v-457cfe48] {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 14px;
    color: #999;
  }

  .product-desc p[data-v-457cfe48]:first-child {
    font-weight: bold;
    margin-bottom: 10px;
    color: #303030;
  }

  .send-time[data-v-457cfe48] {
    text-align: center;
    float: left;
  }

  .num-box[data-v-457cfe48] {
    position: relative;
    display: inline-block;
    margin-right: 1em;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 40px;
    border: 1px solid #efefef;
  }

  .num-box span[data-v-457cfe48] {
    position: absolute;
    font-size: 24px;
    color: #969699;
    top: 0;
    text-align: center;
    width: 40px;
    background-color: #efefef;
    cursor: pointer;
  }

  .num-box span[data-v-457cfe48]:first-child {
    left: 0;
  }

  .num-box span[data-v-457cfe48]:last-child {
    right: 0;
  }

  .num-box input[data-v-457cfe48] {
    width: 80px;
    height: 40px;
    line-height: 40px;
    border: none;
    padding: 0;
    vertical-align: top;
    text-align: center;
  }

  .remove[data-v-457cfe48] {
    font-size: 18px;
    cursor: pointer;
  }

  .summary[data-v-457cfe48] {
    margin-top: 20px;
    line-height: 60px;
    background-color: #fff;
    margin-bottom: 80px;
    padding-left: 1em;
    overflow: hidden;
  }

  .summary-content[data-v-457cfe48] {
    float: right;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 14px;
  }

  .summary-content em[data-v-457cfe48] {
    font-style: normal;
    color: #fc5f02;
    margin-left: 3px;
    margin-right: 3px;
  }

  .summary-content span[data-v-457cfe48]:last-child {
    margin-left: 2em;
  }

  .submit[data-v-457cfe48] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: right;
    height: 100%;
    padding: 0 3em;
    border-radius: 0;
    line-height: 60px;
    border: 0;
    font-size: 18px;
  }

  .el-icon-arrow-right:before {
    content: '\E604';
  }

  .el-icon-delete:before {
    content: '\E612';
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }

  .el-table {
    position: relative;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
  }

  .el-table--fit {
    border-right: 0;
    border-bottom: 0;
  }

  .el-table--fit th.gutter {
    border-right-width: 1px;
  }

  .el-table thead {
    color: #909399;
    font-weight: 500;
  }

  .el-table th,
  .el-table td {
    padding: 12px 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
  }

  .el-table th.is-center,
  .el-table td.is-center {
    text-align: center;
  }

  .el-table th.is-right,
  .el-table td.is-right {
    text-align: right;
  }

  .el-table th.gutter {
    width: 15px;
    border-right-width: 0;
    border-bottom-width: 0;
    padding: 0;
  }

  .el-table tr {
    background-color: #fff;
  }

  .el-table tr input[type='checkbox'] {
    margin: 0;
  }

  .el-table th.is-leaf,
  .el-table td {
    border-bottom: 1px solid #ebeef5;
  }

  .el-table th {
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    background-color: #fff;
  }

  .el-table th div {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .el-table th>.cell {
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-table td div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .el-table::before {
    content: '';
    position: absolute;
    background-color: #ebeef5;
    z-index: 1;
  }

  .el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
  }

  .el-table__header-wrapper,
  .el-table__body-wrapper {
    width: 100%;
  }

  .el-table__header,
  .el-table__body {
    table-layout: fixed;
    border-collapse: separate;
  }

  .el-table__header-wrapper {
    overflow: hidden;
  }

  .el-table__body-wrapper {
    overflow: hidden;
    position: relative;
  }

  .el-table .hidden-columns {
    visibility: hidden;
    position: absolute;
    z-index: -1;
  }

  .el-table__column-resize-proxy {
    position: absolute;
    left: 200px;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1px solid #ebeef5;
    z-index: 10;
  }

  .el-table--enable-row-transition .el-table__body td {
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }

  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #f5f7fa;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }

  .el-table-column--selection .cell {
    padding-left: 14px;
    padding-right: 14px;
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

  .el-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }

  .el-breadcrumb::before,
  .el-breadcrumb::after {
    display: table;
    content: '';
  }

  .el-breadcrumb::after {
    clear: both;
  }

  .el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: bold;
    color: #c0c4cc;
  }

  .el-breadcrumb__separator[class*=icon] {
    margin: 0 6px;
    font-weight: normal;
  }

  .el-breadcrumb__item {
    float: left;
  }

  .el-breadcrumb__inner {
    color: #606266;
  }

  .el-breadcrumb__inner.is-link {
    font-weight: bold;
    text-decoration: none;
    -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #303133;
  }

  .el-breadcrumb__inner.is-link:hover {
    color: #303137;
    cursor: pointer;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: normal;
    color: #606266;
    cursor: text;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__separator {
    display: none;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-table {
    width: 100%;
  }

  .el-table .cell {
    line-height: 19px;
  }

  .el-table .el-table__header,
  .el-table .el-table__body {
    width: 100% !important;
  }

  .el-table th {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #f5f5f7;
    font-size: 14px;
    color: #999;
    font-weight: normal;
  }

  .tb-cart th {
    background-color: #fff;
  }

  .tb-cart:before {
    background-color: transparent;
  }

  .row-hover-disabled .el-table__body tr:hover>td {
    background-color: transparent;
  }

  .el-breadcrumb__item {
    font-size: 12px;
  }

  .el-breadcrumb__item .el-breadcrumb__inner {
    color: #303137;
  }

  .el-breadcrumb__item .el-breadcrumb__inner.is-link {
    color: #969699;
    font-weight: normal;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #303137;
  }

  .el-icon-arrow-right:before {
    content: '\E604';
  }

  .el-icon-delete:before {
    content: '\E612';
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }

  .el-table {
    position: relative;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
  }

  .el-table--fit {
    border-right: 0;
    border-bottom: 0;
  }

  .el-table--fit th.gutter {
    border-right-width: 1px;
  }

  .el-table thead {
    color: #909399;
    font-weight: 500;
  }

  .el-table th,
  .el-table td {
    padding: 12px 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
  }

  .el-table th.is-center,
  .el-table td.is-center {
    text-align: center;
  }

  .el-table th.is-right,
  .el-table td.is-right {
    text-align: right;
  }

  .el-table th.gutter {
    width: 15px;
    border-right-width: 0;
    border-bottom-width: 0;
    padding: 0;
  }

  .el-table tr {
    background-color: #fff;
  }

  .el-table tr input[type='checkbox'] {
    margin: 0;
  }

  .el-table th.is-leaf,
  .el-table td {
    border-bottom: 1px solid #ebeef5;
  }

  .el-table th {
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    background-color: #fff;
  }

  .el-table th div {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .el-table th>.cell {
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-table td div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .el-table::before {
    content: '';
    position: absolute;
    background-color: #ebeef5;
    z-index: 1;
  }

  .el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
  }

  .el-table__header-wrapper,
  .el-table__body-wrapper {
    width: 100%;
  }

  .el-table__header,
  .el-table__body {
    table-layout: fixed;
    border-collapse: separate;
  }

  .el-table__header-wrapper {
    overflow: hidden;
  }

  .el-table__body-wrapper {
    overflow: hidden;
    position: relative;
  }

  .el-table .hidden-columns {
    visibility: hidden;
    position: absolute;
    z-index: -1;
  }

  .el-table__column-resize-proxy {
    position: absolute;
    left: 200px;
    top: 0;
    bottom: 0;
    width: 0;
    border-left: 1px solid #ebeef5;
    z-index: 10;
  }

  .el-table--enable-row-transition .el-table__body td {
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }

  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #f5f7fa;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }

  .el-table-column--selection .cell {
    padding-left: 14px;
    padding-right: 14px;
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

  .el-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }

  .el-breadcrumb::before,
  .el-breadcrumb::after {
    display: table;
    content: '';
  }

  .el-breadcrumb::after {
    clear: both;
  }

  .el-breadcrumb__separator {
    margin: 0 9px;
    font-weight: bold;
    color: #c0c4cc;
  }

  .el-breadcrumb__separator[class*=icon] {
    margin: 0 6px;
    font-weight: normal;
  }

  .el-breadcrumb__item {
    float: left;
  }

  .el-breadcrumb__inner {
    color: #606266;
  }

  .el-breadcrumb__inner.is-link {
    font-weight: bold;
    text-decoration: none;
    -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #303133;
  }

  .el-breadcrumb__inner.is-link:hover {
    color: #303137;
    cursor: pointer;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: normal;
    color: #606266;
    cursor: text;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__separator {
    display: none;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #303137;
    border-color: #303137;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #303137;
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

  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
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

  .el-table {
    width: 100%;
  }

  .el-table .cell {
    line-height: 19px;
  }

  .el-table .el-table__header,
  .el-table .el-table__body {
    width: 100% !important;
  }

  .el-table th {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #f5f5f7;
    font-size: 14px;
    color: #999;
    font-weight: normal;
  }

  .tb-cart th {
    background-color: #fff;
  }

  .tb-cart:before {
    background-color: transparent;
  }

  .row-hover-disabled .el-table__body tr:hover>td {
    background-color: transparent;
  }

  .el-breadcrumb__item {
    font-size: 12px;
  }

  .el-breadcrumb__item .el-breadcrumb__inner {
    color: #303137;
  }

  .el-breadcrumb__item .el-breadcrumb__inner.is-link {
    color: #969699;
    font-weight: normal;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #303137;
  }
}
</style>
