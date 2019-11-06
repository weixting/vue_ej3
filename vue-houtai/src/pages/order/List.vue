<template>
  <div class="order">
    <!-- 导航 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 所有订单 -->
      <el-tab-pane label="所有订单" name="first">
        <el-table :data="orders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论"  align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
          <el-table-column label="操作" align="center">
            <template v-slot="slot">
              <a href="" @click.prevent="PaiDanHandler(slot.row.id)">详情</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 待支付 -->
      <el-tab-pane label="待支付" name="second">
        <el-table :data="DzfOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论"  align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
        </el-table>
      </el-tab-pane>
      <!-- 待派单 -->
      {{ Waiters }}
      <el-tab-pane label="待派单" name="fourth">
        <el-table :data="DpdOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论" align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
          <el-table-column label="操作" align="center">
            <template v-slot="slot">
              <a href="" @click.prevent="PaiDanHandler(slot.row.id)">派单</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 待接单 -->
      <el-tab-pane label="待接单" name="fifth">
        <el-table :data="DjdOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论" align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
          <el-table-column label="操作" align="center">取消</el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 待服务 -->
      <el-tab-pane label="待服务" name="sixth">
        <el-table :data="DfwOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论" align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
        </el-table>
      </el-tab-pane>
      <!-- 待确认 -->
      <el-tab-pane label="待确认" name="seventh">
        <el-table :data="DqrOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <!-- <el-table-column prop="waiterId" label="员工编号" align="center"></el-table-column> -->
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论"  align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
          <el-table-column label="操作" align="center">确认</el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 已完成 -->
      <el-tab-pane label="已完成" name="eighth">
        <el-table :data="YwcOrders" style="width:100%">
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="customerId" label="顾客编号" align="center" />
          <el-table-column prop="waiterId" label="员工编号" align="center" />
          <el-table-column prop="addressId" label="地址编号" align="center" />
          <el-table-column prop="total" label="订单总价" align="center" />
          <el-table-column prop="orderTime" label="下单时间" align="center" />
          <!-- <el-table-column prop="remark" label="评论"  align="center"></el-table-column> -->
          <el-table-column prop="status" label="状态" align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- /导航 -->
    <!-- 派单模态框 -->
    <el-dialog title="派单" :visible="visible" width="25%">
      {{ params }}
      <el-form :model="params">
        <el-form-item label="员工名称" label-width="100px">
          <el-select v-model="params.waiterId" placeholder="请选择员工">
            <el-option v-for="item in Waiters" :label="item.realname" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <!-- <el-radio-group v-model="order">
			    <el-radio v-for="item in Waiters" :label="item.id" size="medium">{{item.realname}}</el-radio>
			</el-radio-group> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="submitHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import moment from 'moment'
export default {
  data() {
    return {
      params: {
        waiterId: 0,
        orderId: 0
      }
    }
  },
  computed: {
    ...mapState('order', ['orders', 'DzfOrders', 'DpdOrders', 'DjdOrders', 'DfwOrders', 'DqrOrders', 'YwcOrders', 'visible', 'Waiters'])
  },
  created() {
    this.findAllOrders()
    this.findAllWaiters()
  },
  methods: {
    ...mapMutations('order', ['showModal', 'closeModal']),
    ...mapActions('order', ['findAllOrders', 'findAllWaiters', 'sendOrder']),
    // 派单
    PaiDanHandler(id) {
      this.params.orderId = id;
      // 弹出模态框
      this.showModal();
    },
    submitHandler() {
      console.log(this.params)
      // 修改订单
      this.sendOrder(this.params)
      .then((response) => {
        // 关闭模态框
        this.closeModal();
      })
    }
  }
}
</script>
<style>

</style>
