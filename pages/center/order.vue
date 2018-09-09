<template>
  <el-table :data="orderList" style="width: 100%">
    <el-table-column label="订单号" width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.order_form }}</span>
      </template>
    </el-table-column>
    <el-table-column label="商品" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ shopJSON[scope.row.shop_id] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="订单状态" width="120">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>下单时间: {{ getTime(+scope.row.create_time) }}</p>
          <div slot="reference" class="name-wrapper">
            <template v-if="+new Date() - scope.row.create_time > 3600000">
              <el-tag size="medium">已失效</el-tag>
            </template>
            <template v-else>
              <el-tag size="medium">{{ buyJOSN[scope.row.is_buy] }}</el-tag>
            </template>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="支付BTC/矿机个数" width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pay_btc }} / {{scope.row.buy_num}}</span>
      </template>
    </el-table-column>
    <el-table-column label="下单时BTC币价" width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.rate }} $</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <template v-if="scope.row.is_buy">
            <el-button size="mini">-</el-button>
          </template>
          <template v-else-if="+new Date() - scope.row.create_time > 300000">
            <el-button size="mini">订单作废</el-button>
          </template>
          <template v-else>
            <el-button size="mini" @click="goBuy(scope.row.order_form)">前往支付</el-button>
          </template>
          <template v-if="!scope.row.is_buy">
            <el-button size="mini" type="danger" @click="dialogVisible = true">删除订单</el-button>
            <el-dialog title="删除未完成订单" :visible.sync="dialogVisible" width="30%">
              <span>确认删除</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onDelOrder(scope.row.order_form)">确 定</el-button>
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
        shopJSON: {
          '1': 'GMiner T1',
          '2': 'GMiner T2',
        },
        buyJOSN: {
          '0': '未购买',
          '1': '交易确认中',
          '2': '购买成功'
        }
      }
    },
    methods: {
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
        this.$router.push({
          path: '/pay',
          query: {
            orderForm: order
          }
        });
      },
      onJumpEth(tx) {
        window.open(`https://etherscan.io/tx/${tx}`)
      },
      onDelOrder(order) {
        apiDelOrder({
          orderForm: order
        }).then(res => {
          this.dialogVisible = false
          this.init()
        })
      }
    }
  }

</script>
