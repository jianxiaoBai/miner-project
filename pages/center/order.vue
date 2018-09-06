<template>
  <el-table :data="orderList" style="width: 100%">
    <el-table-column label="订单号" width="220">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.order_form }}</span>
      </template>
    </el-table-column>
    <el-table-column label="订单状态" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.is_success ? '成交' : '未成交' }}</span>
      </template>
    </el-table-column>
    <el-table-column label="下单时间" width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ getTime(+scope.row.create_time) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="支付ETH/矿机个数" width="150">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pay_btc }} / {{scope.row.buy_num}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <template v-if="scope.row.is_success">
          <el-button size="mini" type="primary" v-if="scope.row.is_success" @click="onJumpEth(scope.row.tx)">订单详情</el-button>
        </template>
        <template v-else>
          <el-button size="mini" @click="goBuy(scope.row.order_form)">前往支付</el-button>
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
        dialogVisible: false
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
