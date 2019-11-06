<template>
  <div class="comment">
    <el-row>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    {{ comments }}
    <el-table :data="comments" style="width:100%">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="orderId" label="订单编号" width="280" align="center" />
      <el-table-column prop="commentTime" label="评论时间" width="280" align="center" />
      <el-table-column prop="content" label="评论内容" align="center" />
    </el-table>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('comment', ['comments'])
  },
  created() {
    this.findAllComments()
  },
  methods: {
    ...mapMutations('comment', ['refreshComments']),
    ...mapActions('comment', ['findAllComments'])
  }
}
</script>
<style>

</style>
