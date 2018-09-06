<template>
  <div class="product-container">
    <section class="minerList">
      <ul class="miner-category clearfix">
        <li class="active">TRUE矿机
        </li>
      </ul>
      <ul class="miner-product-list clearfix">
        <li>
          <svg width="85.5" height="30" xmlns="http://www.w3.org/2000/svg" class="product-label">
              <path fill="#4D87EA" d="M0 0h85.5l-30 30H0z"></path>
              <text x="10" y="20" fill="#fff" font-size="14">新上架</text>
            </svg>
          <!-- <div class="product-img">
            <img src="" alt="miner">
          </div> -->
          <div class="product-detail-container">
            <p class="procuct-name">
              <span>飞行者 Miner 200</span>
              <span>TRUE矿机</span>
            </p>
            <p class="product-detail">专业GPU矿机 选托管免90天管理费</p>
            <!-- <p class="product-delivery">发货时间：2018-08-10</p> -->
            <p class="product-discount"></p>
            <div class="product-count clearfix">
              <div class="left">
                <p class="sale-price">
                  <span>$10.00</span>
                </p>
                <p class="original-cost">
                  <span>矿机售价</span>
                </p>
              </div>
              <!-- <nuxt-link type="button" class="el-button right el-button--primary" to="/cart"> -->
              <nuxt-link type="button" class="el-button right el-button--primary" to="/product">
                  <span>
                    立即购买
                  </span>
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="stylus" scpoed>
.product-container {
    background: #fafafa;
    width: 100%;

  /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
  .el-button span {
    color white
  }
  .features {
    background-color: #fff;
    text-align: center;
    padding: 50px 120px;
  }

  img {
    width: 65px;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .banner img {
    width: 100%;
    display: block;
  }

  .pointer {
    cursor: pointer;
  }



  .minerList {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }

  .miner-category li {
    float: left;
    color: #969699;
    font-size: 20px;
    margin-right: 40px;
    cursor: pointer;
    -webkit-transition: color ease .3s;
    transition: color ease .3s;
  }

  .miner-category li.active {
    color: #303137;
    border-bottom: 3px solid #303137;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .miner-product-list {
    margin-top: 30px;
  }

  .miner-product-list li {
    width: 570px;
    overflow: auto;
    position: relative;
    margin-right: 60px;
    background: #fff;
    float: left;
    margin-bottom: 60px;
    cursor: pointer;
    -webkit-transition: all .2s;
    transition: all .2s;
  }

  .miner-product-list li:nth-child(2n) {
    margin-right: 0;
  }

  .miner-product-list li:hover,
  .miner-product-list li:focus {
    -webkit-box-shadow: 0 0 10px 0px #ccc;
    box-shadow: 0 0 10px 0px #ccc;
  }

  .product-label {
    position: absolute;
    top: 0;
    left: 0;
  }

  .product-img {
    text-align: center;
  }

  .product-img img {
    display: none;
    width: 570px;
    height: 200px;
    // height: 397px;
    vertical-align: middle;
  }

  .procuct-name {
    margin-top: 25px;
    line-height: 31px;
  }

  .procuct-name span:first-child {
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    margin-right: 35px;
    vertical-align: middle;
  }

  .procuct-name span:last-child {
    font-size: 14px;
    color: #151515;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    padding: 5px 10px;
    vertical-align: middle;
  }

  .product-detail-container {
    padding: 30px 40px 38px;
  }

  .product-detail {
    margin: 10px 0 15px;
  }

  .product-detail,
  .product-delivery {
    margin-bottom: 10px;
    font-size: 14px;
    color: #999;
  }

  .product-discount {
    min-height: 20px;
    font-size: 14px;
    color: #303137;
    font-weight: bold;
  }

  .product-count {
    margin-top: 30px;
  }

  .product-count .left .sale-price {
    font-size: 24px;
    color: #FD7220;
  }

  .product-count .left .original-cost {
    font-size: 14px;
    color: #999999;
  }

  .product-count .left .decoration {
    text-decoration: line-through;
  }

  .product-count button {
    margin-top: 5px;
    min-width: 164px;
  }

  .product-count button.is-disabled {
    cursor: pointer;
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

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }

  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }

  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }

  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height, -webkit-transform;
    transition-property: height, -webkit-transform;
    -o-transition-property: transform, height;
    transition-property: transform, height;
    transition-property: transform, height, -webkit-transform;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
  }

  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }

  .swiper-pagination-bullet {
    background: #fff;
    display: inline-block;
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    width: 30px;
    height: 12px;
    border-radius: 6px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
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

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .text-center {
    text-align: center;
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

  .swiper-pagination-bullet {
    opacity: .6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
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

  .swiper-pagination-bullet {
    background: #fff;
    display: inline-block;
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    width: 30px;
    height: 12px;
    border-radius: 6px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
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

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .text-center {
    text-align: center;
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

  .swiper-pagination-bullet {
    opacity: .6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  /*! CSS Used from: Embedded */

  * {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
  }
}
</style>
