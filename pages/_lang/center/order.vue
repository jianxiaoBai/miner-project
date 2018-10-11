<template>
  <el-table :data="orderList" style="width: 100%">
    <el-table-column :label="$t(`center.order.tableHead.order`)" width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.order_form }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.order.tableHead.shop`)" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ shopJSON[scope.row.shop_id] }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.order.tableHead.status`)" width="120">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>下单时间: {{ getTime(+scope.row.create_time) }}</p>
          <div slot="reference" class="name-wrapper">
            <template v-if="+new Date() - scope.row.create_time > 7200000 && scope.row.is_buy === 0">
              <el-tag size="medium">{{ $t(`center.order.item.lose`) }}</el-tag>
            </template>
            <template v-else>
              <el-tag size="medium">{{ buyJOSN[scope.row.is_buy] }}</el-tag>
            </template>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.order.tableHead.pay`)" width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pay_btc }} / {{scope.row.buy_num}}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.order.tableHead.rate`)" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.rate }} $</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.order.tableHead.handle`)">
      <template slot-scope="scope">
        <template v-if="scope.row.is_buy">
            <el-button size="mini">-</el-button>
          </template>
          <template v-else-if="+new Date() - scope.row.create_time > 300000">
            <el-button size="mini">{{ $t(`center.order.item.backOut`) }}</el-button>
          </template>
          <template v-else>
            <el-button size="mini" @click="goBuy(scope.row.order_form)">{{ $t(`center.order.item.pay`) }}</el-button>
          </template>
          <template v-if="!scope.row.is_buy">
            <el-button size="mini" type="danger" @click="onMarkForm(scope.row.order_form)">{{ $t(`center.order.item.delete`) }}</el-button>
            <el-dialog :title="$t(`prompt.delOrder`)" :visible.sync="dialogVisible" width="30%">
              <span>{{ $t(`prompt.delConfirm`) }}</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">{{ $t(`prompt.cancel`) }}</el-button>
                <el-button type="primary" @click="onDelOrder">{{ $t(`prompt.confirm`) }}</el-button>
              </span>
            </el-dialog>
          </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {
    apiRecord,
    apiDelOrder
  } from '~/api'
  import {
    getTime
  } from '~/util'

  export default {
    mounted() {
      this.init()
    },
    data() {
      return {
        orderList: [],
        dialogVisible: false,
        delForm: null,
        shopJSON: {
          '1': 'GMiner T1',
          '2': 'GMiner T2',
        },
        buyJOSN: this.$i18n.messages[this.$i18n.locale].prompt.buyStatus
      }
    },
    methods: {
      onMarkForm (form) {
        this.delForm = form;
        this.dialogVisible = true;
      },
      init() {
        apiRecord({
          action: '1'
        }).then(({
          data
        }) => {
          this.orderList = data;
        })
      },
      getTime,
      goBuy(order) {
        const root = this.$store.state.locale === 'en' ? '/en' : '';
        this.$router.push({
          path: `${root}/pay`,
          query: {
            orderForm: order
          }
        });
      },
      onJumpEth(tx) {
        window.open(`https://etherscan.io/tx/${tx}`)
      },
      onDelOrder() {
        apiDelOrder({
          orderForm: this.delForm
        }).then(res => {
          this.dialogVisible = false
          this.init()
        })
      }
    }
  }

</script>
