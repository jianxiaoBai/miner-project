<template>
  <div class="product-container">
    <div class="home-head">
      <div class="home-banner">
      </div>
      <div class="home-introduce">
        <div>矿机云算力托管费用包括电费、运费、安装费、管理费等，收费为69美元/台/月</div>
        <div>首批购买用户暂免首月托管费</div>
      </div>
    </div>
    <section class="minerList">
      <ul class="miner-category clearfix">
        <li class="active">矿机运算力托管
        </li>
      </ul>
      <ul class="miner-product-list clearfix">
        <li v-for="(item, index) in shopList" :key="index">
          <svg width="85.5" height="30" xmlns="http://www.w3.org/2000/svg" class="product-label" v-if="item.is_new">
              <path fill="#4D87EA" d="M0 0h85.5l-30 30H0z"></path>
              <text x="10" y="20" fill="#fff" font-size="14">新上架</text>
            </svg>
          <!-- <div class="product-img">
            <img src="" alt="miner">
          </div> -->
          <div class="product-detail-container">
            <p class="procuct-name">
              <span>{{ item.name }}</span>
              <span>TRUE矿机</span>
            </p>
            <p class="product-detail">{{ item.detail }}</p>
            <!-- <p class="product-delivery">发货时间：2018-08-10</p> -->
            <p class="product-discount"></p>
            <div class="product-count clearfix">
              <!-- <div class="left">
                <p class="sale-price">
                  <span>{{ item.price }}$</span>
                </p>
                <p class="original-cost">
                  <span>矿机售价</span>
                </p>
              </div> -->
              <!-- <nuxt-link type="button" class="el-button right el-button--primary" to="/cart"> -->
              <nuxt-link type="button" class="el-button right el-button--primary" :to="`/product?shop=${item.id}`">
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
<script>
import { apiShopList } from '~/api'
export default {
   data () {
    return {
      shopList: []
    }
  },
  mounted () {
    apiShopList().then(({ data }) => {
      this.shopList = data;
    })
  }
}
</script>

<style lang="stylus" scpoed>
.home-head {
  background white
  // height 500px
  width 100%
  padding 60px
  .home-banner {
    background-image url('~/assets/img/banner.jpg')
    background-repeat no-repeat
    background-size 100% 100%
    width 70%
    height 500px
    margin 0 auto
  }
  .home-introduce {
    margin 20px auto
    width 70%
    background-color #FAFAFA
    // background-color red
    text-align center
    border-radius 50px
    padding 10px
    div {
      font-weight bold
      line-height 30px
    }
  }
}

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
    cursor: default;
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
    display: flex;
    justify-content: center;
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
}
</style>
