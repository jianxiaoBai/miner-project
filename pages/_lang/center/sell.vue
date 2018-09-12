<template>
  <el-table :data="sellList" style="width: 100%">
     <el-table-column :label="$t(`center.sell.address`)" width="220">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.cash_address }}</span>
      </template>
    </el-table-column>
     <el-table-column :label="$t(`center.sell.number`)" width="150">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.cash_number }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.sell.status`)" width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ cashStatus[scope.row.is_cash] }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.sell.time`)" width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ getTime(+scope.row.create_time) }}</span>
      </template>
    </el-table-column>
    <el-table-column :label="$t(`center.sell.handle`)">
      <template slot-scope="scope">
         <template v-if="scope.row.is_cash === 1">
            <el-button size="mini" type="danger" @click="sellDialogVisible = true">取消提现</el-button>
          </template>
          <template v-else-if="scope.row.is_cash === 2">
            <el-button size="mini" type="success">提现成功</el-button>
          </template>
          <template v-else-if="scope.row.is_cash === 3">
            <el-button size="mini" type="default">已取消</el-button>
          </template>
          <el-dialog title="取消未完成提现" :visible.sync="sellDialogVisible" width="30%">
            <span>确认取消</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="sellDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="onCancelSell(scope.row.id)">确 定</el-button>
            </span>
          </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {
    apiRecord,
    apiCancelSell
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
        sellList: [],
        sellDialogVisible: false,
        cashStatus: {
          '0': '未提现',
          '1': '提现中',
          '2': '提现成功',
          '3': '已取消'
        }
      }
    },
    methods: {
      init() {
        apiRecord({
          action: '2'
        }).then(({
          data
        }) => {
          this.sellList = data;
        })
      },
      getTime,

      onJumpEth(tx) {
        window.open(`https://etherscan.io/tx/${tx}`)
      },
      onCancelSell(id) {
        apiCancelSell({
          id: id
        }).then(res => {
          this.sellDialogVisible = false
          this.init()
        })
      }
    }
  }

</script>
