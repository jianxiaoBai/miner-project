<template>
  <div class="power-container">
    <div class="page">
      <h2 class="header">我的收益</h2>
      <ul class="tabs">
        <li class="active">
          TRUE算力产出记录
        </li>
      </ul>
      <!-- <div class="clearfix box-detail">
        <div class="left detail-left">
          <div class="left">
            <p>可用算力</p>
            <strong>0T</strong>
          </div>
          <div class="left">
            <p>待交割</p>
            <strong>0T</strong>
          </div>
        </div>
        <div class="clearfix right detail-right">
          <div class="left detail-data">
            <div class="left">
              <p>产出(BTC)</p>
              <span>0</span>
              <p class="top">管理(BTC)</p>
              <span>0</span>
            </div>
            <div class="left">
              <p>耗电</p>
              <span class="red">0BTC</span>
              <span class="block red">0.00CNY</span>
              <p>实际(BTC)</p>
              <span class="real">0</span>
            </div>
          </div>
          <div class="left detail-income">
            <p>收益估算 </p>
            <strong>¥ 0.00</strong>
            <span>*收益计算参考当日8点火币网价格</span>
            <span class="get-cash">去账户提现 &gt;</span>
          </div>
        </div>
      </div> -->
      <h3 class="output">
        算力产出
        <span>
          <div role="tooltip" id="el-popover-2429" aria-hidden="true" class="el-popover el-popper compute-contract el-popover--plain"
            tabindex="0" style="display: none;">
            当该连续10天产出（根据选择的付费方式计算），不足以抵扣电费、管理费时，或不可抗力包括不限于地震、台风、水灾、火灾等自然原因和战争、动乱、政府禁令等社会原因，云算力合约暂停。在法律允许范围内最终解释权归算立方所有。</div>
        </span>
      </h3>
      <div class="t-output x-table">
        <section class="ps-container t-content ps ps--active-x">
          <table style="text-align: center;">
            <thead>
              <tr>
                <td class="col-id">算力ID</td>
                <td class="col-power">算力(T)</td>
                <td class="col-status">当前状态</td>
                <td class="col-output">产出币量</td>
                <!-- <td class="col-energy">耗电费用</td> -->
                <!-- <td class="col-manage">管理费用</td> -->
                <td class="col-actual">实际币量</td>
                <td class="col-start">开始运行</td>
                <td class="col-running">运行时长</td>
              </tr>
            </thead>
            <tbody>
              <template v-if="powerList.length">
                <tr v-for="(item, index) in powerList" :key="index">
                  <td>{{item.id}}</td>
                  <td>{{item.power}}</td>
                  <td>{{item.status}}</td>
                  <td>{{item.output}}</td>
                  <!-- <td>{{item.deplete}}</td> -->
                  <!-- <td>{{item.manage}}</td> -->
                  <td>{{item.fact}}</td>
                  <td>{{getTime(+item.create_time)}}</td>
                  <td>{{item.run_time}}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="8" class="nodata">暂无数据</td>
                </tr>
              </template>
            </tbody>
          </table>
          <div class="ps__rail-x" style="width: 970px; left: 0px; bottom: 0px;">
            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 891px;"></div>
          </div>
          <div class="ps__rail-y" style="top: 0px; right: 0px;">
            <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import { apiPower } from '~/api';
  import { getTime } from '~/util';
  export default {
    data () {
      return {
        powerList: []
      }
    },
    methods: {
      getTime
    },
    mounted () {
      apiPower().then(({ data }) => {
        this.powerList = data
      })
    }
  }

</script>

<style lang="stylus">
  .power-container {
    /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
    .page-component__content {
      width: 1030px;
      height: 100%;
      background-color: #fff;
    }
    .page {
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
    h3 {
      margin 30px 0 10px 30px !important
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
      width: 80px;
    }
    td.col-power {
      width: 72px;
    }
    td.col-status {
      width: 60px;
    }
    td.col-output {
      width: 108px;
    }
    td.col-energy {
      width: 100px;
    }
    td.col-manage {
      width: 100px;
    }
    td.col-actual {
      width: 100px;
    }
    td.col-start {
      width: 100px;
    }
    td.col-running {
      width 100px
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
      width: 950px;
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
    .el-tooltip:focus:not(.focusing),
    .el-tooltip:focus:hover {
      outline-width: 0;
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
    h2 {
      font-size: 22px;
      line-height: 30px;
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
    .el-tooltip:focus:not(.focusing),
    .el-tooltip:focus:hover {
      outline-width: 0;
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
  }

</style>
