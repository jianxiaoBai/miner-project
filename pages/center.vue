<template>
  <div class="center-page">
    <div class="page">
      <div class="page-top">
        <div class="page-component">
          <div aria-label="Breadcrumb" role="navigation" class="el-breadcrumb x-breadcrumb">
            <span class="el-breadcrumb__item">
                    <span role="link" class="el-breadcrumb__inner is-link">
                      个人中心
                    </span>
            <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
            </span>
            <span class="el-breadcrumb__item" aria-current="page">
                    <span role="link" class="el-breadcrumb__inner">我的账户</span>
            <i class=" el-breadcrumb__separator el-icon-arrow-right"></i>
            </span>
          </div>
          <div class="page-container">
            <div class="page-container__inner">
              <div class="page-component__nav">
                <h2 class="nav-title">个人中心</h2>
                <nuxt-link to="/center" class="nav-link">我的账户</nuxt-link>
                <!-- <nuxt-link to="/center/order" class="nav-link">我的订单</nuxt-link> -->
                <!-- <nuxt-link to="/center/trust" class="nav-link">我的托管</nuxt-link> -->
                <nuxt-link to="/center/power" class="nav-link">我的矿机</nuxt-link>
                <nuxt-link to="/center/safety" class="nav-link">安全中心</nuxt-link>
              </div>
              <div class="page-component__content">
                <div class="page">
                  <nuxt-child />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { aaa } from '~/api';
  // export default {
  //   mounted () {
  //      aaa().then(x => {
  //       console.log(x);

  //     })
  //   }
  // }
</script>

<style lang="stylus" scpoed>
  /*! CSS Used from: https://at.alicdn.com/t/font_593980_4ft7bv0qsdk21emi.css */
  .center-page {
    background #F6F6F6

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-help:before {
    content: "\e674";
  }

  /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */

  .features {
    background-color: #fff;
    text-align: center;
    padding: 50px 120px;
  }

  img {
    height: 45px;
    width: auto;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .page-top {
    min-height: 500px;
    padding-bottom: 20px;
  }

  .page-component {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding-top: 36px;
  }

  .x-breadcrumb {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 36px;
    z-index: 2;
  }

  .page-container {
    position: relative;
    height: 100%;
    margin-top: -36px;
    padding-top: 36px;
  }

  .page-container__inner {
    position: relative;
    padding-left: 170px;
  }

  .page-component__nav {
    position: absolute;
    left: 0;
    width: 160px;
    height: 100%;
    min-height: 430px;
    background-color: #fff;
    padding: 20px;
  }

  .page-component__content {
    width: 1030px;
    height: 100%;
    background-color: #fff;
  }

  .nav-title {
    font-size: 18px;
    line-height: 44px;
    color: #333;
  }

  .nav-link {
    display: block;
    font-size: 14px;
    color: #666;
    line-height: 36px;
    padding-left: 5px;
  }

  .nav-link.active ,
  .nuxt-link-exact-active {
    color: #303137;
    font-weight: bold;
    border-left: 2px solid #303137;
    line-height: 14px;
    margin: 7px 0;
    padding-left: 3px;
  }

  .ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }

  .ps__rail-x {
    display: none;
    opacity: 0;
    transition: background-color .2s linear, opacity .2s linear;
    -webkit-transition: background-color .2s linear, opacity .2s linear;
    height: 15px;
    bottom: 0px;
    position: absolute;
  }

  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color .2s linear, opacity .2s linear;
    -webkit-transition: background-color .2s linear, opacity .2s linear;
    width: 15px;
    right: 0;
    position: absolute;
  }

  .ps--active-x>.ps__rail-x {
    display: block;
    background-color: transparent;
  }

  .ps:hover>.ps__rail-x,
  .ps:hover>.ps__rail-y {
    opacity: 0.6;
  }

  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus {
    background-color: #eee;
    opacity: 0.9;
  }

  .ps__thumb-x {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color .2s linear, height .2s ease-in-out;
    -webkit-transition: background-color .2s linear, height .2s ease-in-out;
    height: 6px;
    bottom: 2px;
    position: absolute;
  }

  .ps__thumb-y {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color .2s linear, width .2s ease-in-out;
    -webkit-transition: background-color .2s linear, width .2s ease-in-out;
    width: 6px;
    right: 2px;
    position: absolute;
  }

  .ps__rail-x:hover>.ps__thumb-x,
  .ps__rail-x:focus>.ps__thumb-x {
    background-color: #999;
    height: 11px;
  }

  .ps__rail-y:hover>.ps__thumb-y,
  .ps__rail-y:focus>.ps__thumb-y {
    background-color: #999;
    width: 11px;
  }

  @media screen and (-ms-high-contrast: active),
  (-ms-high-contrast: none) {
    .ps {
      overflow: auto !important;
    }
  }

  .ps-container {
    position: relative;
  }

  .page {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .header {
    font-size: 24px;
    color: #333;
    line-height: 24px;
    font-weight: bold;
    padding: 20px 30px;
  }

  .tabs {
    width: 100%;
    height: 43px;
    line-height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }

  .tabs li {
    float: left;
    font-size: 16px;
    color: #969699;
    margin: 0 30px;
    cursor: pointer;
  }

  .tabs li.active {
    color: #303137;
    border-bottom: 3px solid #303137;
    font-weight: bold;
  }

  .output .icon-help {
    color: #969699;
    font-weight: normal;
    vertical-align: 0;
  }

  .box-detail {
    padding: 30px;
    font-size: 14px;
  }

  .detail-left {
    width: 330px;
    height: 189px;
    background: #fafafa;
    padding: 36px 30px;
  }

  .detail-left .left {
    width: 130px;
  }

  .detail-left .left p {
    color: #606166;
    margin-bottom: 17px;
  }

  .detail-left .left strong {
    font-size: 24px;
    color: #303137;
  }

  .detail-left span {
    display: block;
    margin-top: 105px;
    color: #4d87ea;
    letter-spacing: 0.53px;
    cursor: pointer;
  }

  .detail-right {
    width: 620px;
    height: 189px;
    background: #fafafa;
    padding: 30px 0 30px 30px;
    color: #999;
  }

  .detail-right .detail-data {
    width: 268px;
    height: 100%;
  }

  .detail-right .detail-data .left {
    width: 133px;
    line-height: 26px;
  }

  .detail-right .detail-data .left span {
    color: #000019;
  }

  .detail-right .detail-data .left .top {
    margin-top: 28px;
  }

  .detail-right .detail-data .left .real {
    font-weight: bold;
  }

  .detail-right .detail-income {
    border-left: 1px solid #ddd;
    width: 319px;
    height: 100%;
    padding-left: 30px;
    position: relative;
  }

  .detail-right .detail-income strong {
    display: block;
    margin-top: 17px;
    font-size: 24px;
    color: #303137;
    letter-spacing: -0.3px;
  }

  .detail-right .detail-income span {
    display: block;
    margin-top: 12px;
    font-size: 12px;
  }

  .detail-right .detail-income .get-cash {
    position: absolute;
    left: 30px;
    bottom: 0;
    font-size: 14px;
    color: #606166;
    letter-spacing: 0.53px;
    cursor: pointer;
  }

  .block {
    display: block;
  }

  .red {
    color: #f95453 !important;
  }

  h3 {
    margin: 30px 0 10px 30px;
    font-size: 16px;
    color: #303137;
  }

  .nodata {
    height: 60px;
    text-align: center;
    color: #969699;
  }

  table {
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 14px;
  }

  tr {
    min-height: 50px;
  }

  thead tr {
    background: #fafafa;
  }

  thead td {
    color: #5e5f64;
  }

  tr:nth-child(n) td {
    background-color: #fff;
  }

  td {
    border: 1px solid #f5f5f7;
    padding: 16px 10px;
    word-wrap: break-word;
    word-break: normal;
    color: #606166;
    line-height: 20px;
  }

  td.col-id {
    width: 146px;
  }

  td.col-power {
    width: 72px;
  }

  td.col-status {
    width: 97px;
  }

  td.col-output {
    width: 128px;
  }

  td.col-energy {
    width: 150px;
    text-align: right;
  }

  td.col-manage {
    width: 148px;
  }

  td.col-actual {
    width: 124px;
  }

  td.col-start {
    width: 97px;
  }

  .icon-help {
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 15px;
    margin-left: 3px;
    vertical-align: -1px;
  }

  .t-output {
    width: 970px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  .t-content table {
    width: 1056px;
  }

  a {
    background-color: transparent;
  }

  strong {
    font-weight: bolder;
  }

  img {
    border-style: none;
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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2,
  h3,
  p {
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

  h3 {
    font-size: 18px;
    line-height: 24px;
  }


  .el-icon-arrow-right:before {
    content: "\E604";
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

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-popover {
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    padding: 12px;
    z-index: 2000;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .el-popover--plain {
    padding: 18px 20px;
  }

  .el-popover__reference:focus:not(.focusing),
  .el-popover__reference:focus:hover {
    outline-width: 0;
  }

  .el-popover:focus:active,
  .el-popover:focus {
    outline-width: 0;
  }

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }

  .el-breadcrumb::before,
  .el-breadcrumb::after {
    display: table;
    content: "";
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

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-row {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-row::before,
  .el-row::after {
    display: table;
    content: "";
  }

  .el-row::after {
    clear: both;
  }

  [class*="el-col-"] {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-col-6 {
    width: 25%;
  }

  .el-popper {
    padding: 10px;
    font-size: 12px;
    line-height: 15px;
    min-width: 100px;
    color: #999;
  }

  .el-popper.compute-contract {
    width: 321px;
    padding: 14px;
    color: #303137;
  }

  .el-dialog__title {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    color: #303137;
  }

  .el-dialog.risk .el-dialog__header {
    padding-top: 40px;
    padding-left: 40px;
  }

  .el-dialog.risk .el-dialog__headerbtn {
    right: 40px;
    top: 30px;
    font-size: 20px;
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

  .left {
    float: left;
  }

  .right {
    float: right;
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

  .ps>.ps__rail-x {
    height: 8px;
    z-index: 10;
  }

  .ps>.ps__rail-x>.ps__thumb-x {
    bottom: 0;
    height: 8px;
  }

  .ps>.ps__rail-x:active>.ps__thumb-x,
  .ps>.ps__rail-x:hover>.ps__thumb-x {
    height: 8px;
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

  h2,
  h3,
  p {
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

  h3 {
    font-size: 18px;
    line-height: 24px;
  }


  .el-icon-arrow-right:before {
    content: "\E604";
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

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-popover {
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    padding: 12px;
    z-index: 2000;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .el-popover--plain {
    padding: 18px 20px;
  }

  .el-popover__reference:focus:not(.focusing),
  .el-popover__reference:focus:hover {
    outline-width: 0;
  }

  .el-popover:focus:active,
  .el-popover:focus {
    outline-width: 0;
  }

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }

  .el-breadcrumb::before,
  .el-breadcrumb::after {
    display: table;
    content: "";
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

  .el-tooltip:focus:not(.focusing),
  .el-tooltip:focus:hover {
    outline-width: 0;
  }

  .el-row {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-row::before,
  .el-row::after {
    display: table;
    content: "";
  }

  .el-row::after {
    clear: both;
  }

  [class*="el-col-"] {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .el-col-6 {
    width: 25%;
  }

  .el-popper {
    padding: 10px;
    font-size: 12px;
    line-height: 15px;
    min-width: 100px;
    color: #999;
  }

  .el-popper.compute-contract {
    width: 321px;
    padding: 14px;
    color: #303137;
  }

  .el-dialog__title {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    color: #303137;
  }

  .el-dialog.risk .el-dialog__header {
    padding-top: 40px;
    padding-left: 40px;
  }

  .el-dialog.risk .el-dialog__headerbtn {
    right: 40px;
    top: 30px;
    font-size: 20px;
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

  .left {
    float: left;
  }

  .right {
    float: right;
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

  .ps>.ps__rail-x {
    height: 8px;
    z-index: 10;
  }

  .ps>.ps__rail-x>.ps__thumb-x {
    bottom: 0;
    height: 8px;
  }

  .ps>.ps__rail-x:active>.ps__thumb-x,
  .ps>.ps__rail-x:hover>.ps__thumb-x {
    height: 8px;
  }

  /*! CSS Used from: Embedded */

  * {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
  }

}
</style>
