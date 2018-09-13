<template>
  <div>
    <div>
      <h2 class="page-header">{{ $t(`center.index.title`) }}</h2>
      <div class="page-content">
        <section class="c-section">
          <h4 class="c-section__title">
            BTC {{ $t(`center.index.balance`) }}
          </h4>
          <div class="c-section__content rmb clearfix">
            <div class="left">
              {{ $t(`center.index.item.sum`) }}
              <strong>{{ethData.sum}}</strong>BTC
            </div>
            <div class="left">
              {{ $t(`center.index.item.usable`) }}
              <strong>{{ethData.useable}}</strong>BTC
            </div>
            <div class="left">
              {{ $t(`center.index.item.freeze`) }}
              <strong>{{ethData.freeze}}</strong>BTC
            </div>
            <div class="right text-right">
              <button type="button" class="el-button el-button--primary el-button--mini" @click="onRecharge">
                <span>{{ $t(`center.index.item.input`) }}</span>
              </button>
              <button type="button" class="el-button el-button--default el-button--mini" @click="fetchCash = true">
                <span>{{ $t(`center.index.item.output`) }}</span>
              </button>
            </div>
          </div>
        </section>
        <el-dialog :title="$t(`prompt.recharge`)" :visible.sync="recharge" width="30%" @click="recharge = false">
          <span>{{ $t(`prompt.rechargeBTC`) }}</span>
          <span slot="footer" class="dialog-footer">
            <div>
              <div id="qrcode"></div>
              <br />
              <div>{{ethData.address}}</div>
            </div>
          </span>
        </el-dialog>
        <el-dialog :title="$t(`center.index.item.output`)" :visible.sync="fetchCash" width="30%" @click="fetchCash = false">
          <el-form :model="cashForm">
            <el-form-item :label="$t(`center.sell.address`)" :label-width="formLabelWidth">
              <el-input v-model="cashForm.address" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item :label="$t(`center.sell.number`)" :label-width="formLabelWidth">
              <el-input v-model="cashForm.number" auto-complete="off"></el-input>
              <!-- <div>最多提现数量: 123</div> -->
              <span style="color: red;">* {{ $t(`prompt.expend`) }} 0.001BTC</span>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="fetchCash = false">{{ $t(`prompt.cancel`) }}</el-button>
            <el-button type="primary" @click="onFetchCash">{{ $t(`prompt.confirm`) }}</el-button>
          </div>
        </el-dialog>
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
      const { data } = await apiAsset();
      this.ethData = data.find(x => x.coin === 1);
      new QRCode(document.getElementById('qrcode'), this.ethData.address);
    },
    methods: {
      onRecharge() {
        this.recharge = true;
      },
      async onFetchCash() {
        if(this.ethData.useable === 0)  {
          this.fetchCash = !this.fetchCash;
          return this.$message({
            message: this.$i18n.messages[this.$i18n.locale].prompt.balanceLack,
            type: 'warning'
          })
        }
        const result = await apiSell(this.cashForm)
        this.fetchCash = !this.fetchCash;
        this.$message({
          message: this.$i18n.messages[this.$i18n.locale].prompt.sellRequest,
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
    width: auto;
    padding-right: 15px;
  }

  .c-section__content>div:first-child {
    padding-left: 0;
    width: auto;
  }

  .c-section__content>div:first-child strong {
    color: #fd7220;
  }

  .c-section__content>div:nth-child(2) {
    border-left: 1px solid #dedee0;
  }

  .c-section__content.rmb>div:nth-child(3) {
    width: auto;
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
