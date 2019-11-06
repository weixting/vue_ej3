import request from '@/utils/request'
import { post, post_array } from '@/utils/request'
import moment from 'moment'
export default {
  namespaced: true,
  state: {
    orders: [],
    DzfOrders: [],
    DpdOrders: [],
    DjdOrders: [],
    DfwOrders: [],
    DqrOrders: [],
    YwcOrders: [],
    visible: false,
    Waiters: []
  },
  getters: {

  },
  mutations: {
    // 更新所有订单
    refreshOrders(state, orders) {
      state.orders = orders
      state.orders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新待支付订单
    refreshDzfOrders(state, DzfOrders) {
      state.DzfOrders = DzfOrders
      state.DzfOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新待派单订单
    refreshDpdOrders(state, DpdOrders) {
      state.DpdOrders = DpdOrders
      state.DpdOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新待接单订单
    refreshDjdOrders(state, DjdOrders) {
      state.DjdOrders = DjdOrders
      state.DjdOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新待服务订单
    refreshDfwOrders(state, DfwOrders) {
      state.DfwOrders = DfwOrders
      state.DfwOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新待确认订单
    refreshDqrOrders(state, DqrOrders) {
      state.DqrOrders = DqrOrders
      state.DqrOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 更新已完成订单
    refreshYwcOrders(state, YwcOrders) {
      state.YwcOrders = YwcOrders
      state.YwcOrders.forEach(item => item.orderTime = moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss'))
    },
    // 弹出模态框
    showModal(state) {
	      state.visible = true
	    },
	    // 关闭模态框
	    closeModal(state) {
	      state.visible = false
	    },
	    // 更新员工信息
	    refreshWaiters(state, Waiters) {
	    	state.Waiters = Waiters
	    }
  },
  actions: {
    // 加载数据
    async findAllOrders({ commit }) {
      const response = await request.get('/order/findAll')
      commit('refreshOrders', response.data)
      commit('refreshDzfOrders', response.data.filter(item => item.status == '待支付'))
      commit('refreshDpdOrders', response.data.filter(item => item.status == '待派单'))
      commit('refreshDjdOrders', response.data.filter(item => item.status == '待接单'))
      commit('refreshDfwOrders', response.data.filter(item => item.status == '待服务'))
      commit('refreshDqrOrders', response.data.filter(item => item.status == '待确认'))
      commit('refreshYwcOrders', response.data.filter(item => item.status == '已完成'))
      return response;
    },
    // 查询所有的员工
    async findAllWaiters({ commit }) {
      const response = await request.get('/waiter/findAll');
      commit('refreshWaiters', response.data);
    },
    // 修改订单信息
    async sendOrder({dispatch},params) {
      let response = await request.get('/order/sendOrder?orderId='+params.orderId+"&waiterId="+params.waiterId);
      dispatch("findAllOrders");
      return response;
    }
  }
}
