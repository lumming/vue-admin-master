<template>
  <div>
  	<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/dept' }">部门管理</el-breadcrumb-item>
		  <el-breadcrumb-item>部门详情</el-breadcrumb-item>
		</el-breadcrumb>
    <h2 class="title" v-text="dat.title"></h2>
    <p>作者：admin　　发表于：{{dat.create_at}}</p>
    <hr>
    <article v-html="dat.content" style="width: 100%;"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies">
        <p>评论者：admin　　评论于：{{i.create_at}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  components: { Header, Footer },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}
</script>
<style lang="scss">
	.title{text-align: center;margin: 10px auto;}
	article img{display: inline-block;width: 100%;}
</style>