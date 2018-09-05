<template>
  <div>
    <div>
      <h2 class="page-header">我的账户</h2>
      <div class="page-content">
        <section class="c-section">
          <h4 class="c-section__title">
            ETH余额
          </h4>
          <div class="c-section__content rmb clearfix">
            <div class="left">
              总额
              <strong>{{ethData.sum}}</strong>ETH
            </div>
            <div class="left">
              可用
              <strong>{{ethData.useable}}</strong>ETH
            </div>
            <div class="left">
              冻结
              <strong>{{ethData.freeze}}</strong>ETH
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini" @click="onRecharge">
                <span>充值</span>
              </button>
              <button type="button" class="el-button el-button--default el-button--mini" @click="fetchCash = true">
                <span>提现</span>
              </button>
            </div>
          </div>
        </section>
        <el-dialog title="充值" :visible.sync="recharge" width="30%" @click="recharge = false">
          <span>充值到ETH地址</span>
          <span slot="footer" class="dialog-footer">
            <div>
              <div id="qrcode"></div>
              <br />
              <div>{{ethData.address}}</div>
            </div>
          </span>
        </el-dialog>
        <el-dialog title="提现" :visible.sync="fetchCash" width="30%" @click="fetchCash = false">
          <el-form :model="cashForm">
            <el-form-item label="提现地址" :label-width="formLabelWidth">
              <el-input v-model="cashForm.address" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="提现数量" :label-width="formLabelWidth">
              <el-input v-model="cashForm.number" auto-complete="off"></el-input>
              <!-- <div>最多提现数量: 123</div> -->
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="fetchCash = false">取 消</el-button>
            <el-button type="primary" @click="onFetchCash">确 定</el-button>
          </div>
        </el-dialog>

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
        </section>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {
    apiAsset,
    apiSell
  } from '~/api'
  export default {
    head: {
      script: [{
          src: 'https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js'
        },
        {
          src: '/qrcode.min.js'
        },
      ]
    },
    data() {
      return {
        recharge: false,
        fetchCash: false,
        ethData: {},
        btcData: {},
        cashForm: {
          address: '',
          number: ''
        },
        formLabelWidth: '120px'
      }
    },
    async mounted() {
      const {
        data
      } = await apiAsset();
      this.ethData = data.find(x => x.coin === 1);
      new QRCode(document.getElementById('qrcode'), this.ethData.address);
    },
    methods: {
      onRecharge() {
        this.recharge = true;
      },
      async onFetchCash() {
        const result = await apiSell(this.cashForm)
        this.fetchCash = !this.fetchCash;
        this.$message({
          message: '提现申请已提交',
          type: 'success'
        })
      }
    }
  }

</script>

<style lang="stylus" scpoed>
  .el-dialog__footer {
    text-align center
  }
  #qrcode {
    width 150px margin-left 70px
  }

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
    width: 280px;
  }

  .c-section__content>div:first-child {
    padding-left: 0;
    width: 260px;
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

</style>
