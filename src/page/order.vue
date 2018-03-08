<template>
  <div>
  	<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/order' }">订单管理</el-breadcrumb-item>
		  <el-breadcrumb-item>订单列表</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
		<h3>{{$store.state.a.count}}</h3>
		<el-button type="primary" size="medium" @click="$store.commit('add',10)">增加10</el-button>
		<el-button type="primary" size="medium" @click="$store.commit('reduce')">减1</el-button>
    <el-button type="primary" size="medium" @click="add(20)">增加20</el-button>
    <el-button type="primary" size="medium" @click="reduce">减1</el-button>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
    
    <!--<p>通过computed计算属性赋值：</p>
    <h3>{{count100}}</h3>-->
    
    <!--<p>通过mapState的对象赋值：</p>
    <h3>{{count}}</h3>-->
    
    <!--<p>通过mapState的数组赋值：</p>
    <h3>{{count}}</h3>-->
   
    <el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="进行中" name="first">
	    	进行中
	    </el-tab-pane>
	    <el-tab-pane label="完成签单" name="second">
	    	完成签单
	    </el-tab-pane>
	    <el-tab-pane label="无效" name="third">
	    	无效
	    </el-tab-pane>
	    <el-tab-pane label="已死" name="fourth">
	    	已死
	    </el-tab-pane>
  	</el-tabs>
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: { Header, Footer },
  data () {
    return {
      activeName: 'first'
    }
  },
	computed:{
		count100(){
			return this.$store.getters.count100;
		},
		...mapGetters(['count100']),
		...mapState(['count'])
	}, 
	methods:{
	  handleClick(tab, event) {
	    console.log(tab, event);
	  },
	  ...mapMutations(['add','reduce']),
	  ...mapActions(['addAction','reduceAction'])
	}
}
</script>
<style lang="scss">

</style>