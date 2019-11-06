import request from '@/utils/request'
import { post, post_array } from '@/utils/request'
export default {
  namespaced: true,
  state: {
    comments: []
  },
  getters: {

  },
  mutations: {
    // 更新数据
    refreshComments(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    // 查询数据
    async findAllComments({ commit }) {
      const response = await request.get('/comment/findAll')
      commit('refreshComments', response.data)
    }
  }
}
