<template>
  <div>
    <div class="miner-product-detail">
      <div class="miner-detail-wrapper">
        <div class="el-row">
          <div class="el-col el-col-10">
            <div class="miner-image">
              <img src="~/assets/img/miner.png" alt="">
            </div>
          </div>
          <div class="el-col el-col-14">
            <div class="detail-content">
              <div class="info-header">飞行者 Miner 200</div>
              <div class="info-intro">专业GPU矿机 选托管免90天管理费</div>
              <div class="info-shop">
                <div class="act-header">
                </div>
                <div class="shop-content">
                  <div class="shop-item shop-item-price"><dt>单价:</dt>
                    <dd>
                    <span class="currentPrice">
                      <span>10.00美元/台</span>
                    </span>
                    </dd>
                  </div>
                </div>
              </div>
              <div class="deliver">
                <div class="deliver-item"><dt>发货时间</dt>
                  <dd>08月10日-08月20日</dd>
                </div>
                <div class="deliver-item num"><dt>数量</dt>
                  <dd>
                    <div class="el-input-number">
                      <span role="button" class="el-input-number__decrease" @click="onBuy(false)">
                        <i class="el-icon-minus"></i>
                      </span>
                      <span role="button" class="el-input-number__increase" @click="onBuy(true)">
                        <i class="el-icon-plus"></i>
                      </span>
                      <div class="el-input">
                        <input type="text" autocomplete="off" max="Infinity" min="1" v-model="buyNum" class="el-input__inner" role="spinbutton"
                          aria-valuemax="Infinity" aria-valuemin="1" aria-valuenow="1">
                      </div>
                    </div><span class="limit">台</span><span class="limit-num"><span>1台起购</span>
                    </span>
                  </dd>
                </div>
                <div class="deliver-item price">
                  <dt>应付</dt>
                  <dd><span>{{ buyNum * 10 }}.00美元</span></dd>
                </div>
                <div class="deliver-item pay"><dt>实付</dt>
                  <dd><span>{{ buyNum * 10 }}.00美元</span></dd>
                </div>
              </div>
              <div class="shop-pay">
                <button type="button" @click="onConfirm" class="el-button btn el-button--primary">
                  <span style="color: white">立即购买</span>
                  </button>
                </div>
            </div>
          </div>
        </div>
        <div class="robot-list">
          <div class="tabs">
            <div class="tabs-header">
              <ul class="clearfix">
                <!-- <li class="active">矿机详情</li> -->
                <li class="">矿机详情</li>
                <!-- <li class="">售后政策</li> -->
              </ul>
            </div>
            <div class="tabs-body">
              <div class="tabs-pane"><img src="~/assets/img/introduce.jpg"></div>
            </div>
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
        nowPrice: 10,
        checked: true
      }
    },
    methods: {
      onConfirm () {
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
    }

  }

</script>

<style lang="stylus" scoped>

  .miner-product-detail {
    background: #fff;
  }

  .miner-product-detail .miner-detail-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 50px;
    padding-bottom: 60px;
  }

  .miner-image {
    width: 500px;
    height: 500px;
    background: #F8F8F8;
    border: 1px solid #F5F5F7;
    position: relative;
  }

  .miner-image img,
  .image-wrapper img {
    width: 80%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .change-image {
    position: relative;
    width: 500px;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 50px;
  }

  .change-image li {
    float: left;
    margin-right: 10px;
  }

  .image-wrapper {
    position: relative;
    width: 80px;
    height: 80px;
    border: 1px solid #EDEEF0;
  }

  .image-wrapper.active {
    border: 1px solid #303030;
  }

  .pre-images,
  .next-images {
    position: absolute;
    top: 50%;
    font-size: 32px;
    color: #ccc;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .pre-images {
    left: 8px;
  }

  .next-images {
    right: 80px;
  }

  .detail-content {
    position: relative;
    margin-left: 84px;
    height: 550px;
  }

  .info-header {
    font-size: 24px;
    color: #303137;
    font-weight: bold;
  }

  .info-intro {
    font-size: 14px;
    color: #D7282D;
    margin: 10px auto 12px;
  }

  .info-shop {
    margin-bottom: 20px;
  }

  .info-shop .shop-content {
    padding: 20px 0 20px 10px;
    background: #F7F7F7;
  }

  .shop-content .shop-item {
    margin-bottom: 15px;
  }

  .shop-content .shop-item:last-child {
    margin-bottom: 0;
  }

  .shop-content .shop-item dt,
  .shop-content .shop-item dd {
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
    margin: 0;
  }

  .shop-content .shop-item dt {
    min-width: 160px;
    color: #303137;
    font-weight: bold;
  }

  .shop-item.shop-item-price {
    margin-bottom: 0;
  }

  .shop-item.shop-item-price dt {
    min-width: 72px;
    text-align: right;
  }

  .shop-item.shop-item-price .currentPrice {
    font-size: 18px;
    color: #FD7220;
  }

  .deliver-item {
    margin-bottom: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .deliver-item:last-child {
    margin: 0;
  }

  .deliver-item dt,
  .deliver-item dd {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }

  .deliver-item dt {
    min-width: 86px;
    font-size: 14px;
    color: #969699;
  }

  .deliver-item.num {
    height: 40px;
    line-height: 40px;
  }

  .deliver-item .limit {
    font-size: 18px;
    color: #303137;
    font-weight: bold;
    margin: 0 20px;
  }

  .deliver-item .limit-num {
    font-size: 14px;
    color: #969699;
  }

  .deliver-item.price dd {
    font-size: 18px;
    color: #303137;
  }

  .deliver-item.pay dd {
    font-size: 24px;
    color: #FD7220;
  }

  .shop-pay {
    margin-top: 55px;
  }

  .btn {
    width: 172px;
    height: 54px;
    border-radius: 0;
    padding: 0;
    line-height: 54px;
    font-size: 18px;
    color: #fff;
    background: #303137;
  }

  .shop-cart {
    position: absolute;
    top: 400px;
    right: 0;
  }

  .go-cart {
    width: 50px;
    height: 50px;
    background: #000;
    text-align: center;
    padding-top: 15px;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  .hash-intro {
    margin-top: 50px;
  }

  .summary-item {
    padding: 18px 0 20px;
    background: #F8F8F8;
    text-align: center;
    color: #303137;
    line-height: 70px;
  }

  .summary-item img {
    max-height: 70px;
    max-width: 65px;
    vertical-align: middle;
  }

  .summary-item .intro-text {
    font-size: 14px;
    margin: 20px 0 10px;
    line-height: 1;
  }

  .summary-item .intro-num {
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
  }

  .hash-list-tip {
    padding: 12px 0 22px;
    font-size: 12px;
    color: #969699;
  }

  .tabs-header {
    height: 60px;
    line-height: 60px;
    background: #F8F8F8;
  }

  .tabs-header ul>li {
    float: left;
    width: 132px;
    text-align: center;
    font-size: 18px;
    color: #303137;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .tabs-header ul>li.active {
    background: #303030;
    color: #fff;
    font-weight: bold;
  }

  .tabs-body {
    padding-top: 40px;
  }

  .tabs-pane {
    border: 1px solid #e3e3e3;
  }

</style>
