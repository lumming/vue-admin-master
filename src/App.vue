<template>
  <div id="app">
  	<bar></bar>
  	<el-container>
		  <el-header>
		  	<el-row>
				  <el-col :span="22">vue+vue-router+vuex+axios+element-ui+webpack.</el-col>
				  <el-col :span="2">
				  	<el-dropdown trigger="click">
						  <span class="el-dropdown-link">
						  admin-test<i class="el-icon-caret-bottom el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item class="clearfix">
						      评论
						      <el-badge class="mark" :value="122" :max="99"></el-badge>
						    </el-dropdown-item>
						    <el-dropdown-item class="clearfix">
						      回复
						      <el-badge class="mark" :value="13" :max="99"></el-badge>
						    </el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
				  </el-col>
				</el-row>	  	
		  </el-header>
		  <el-container>
		    <el-aside width="200px">
		    	<el-menu
			      default-active="dept"
			      :router="true">			      
			      <el-menu-item index="dept">
			        <i class="el-icon-menu"></i>
			        <span slot="title">部门管理</span>
			      </el-menu-item>
			      <el-menu-item index="order">
			        <i class="el-icon-goods"></i>
			        <span slot="title">订单管理</span>
			      </el-menu-item>
			      <el-menu-item index="user">
			        <i class="el-icon-document"></i>
			        <span slot="title">人员管理</span>
			      </el-menu-item>
			      <el-menu-item index="set">
			        <i class="el-icon-setting"></i>
			        <span slot="title">基础设置</span>
			      </el-menu-item>
			    </el-menu>
		    </el-aside>
		    <el-main>
		    	<transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
					  <router-view></router-view>
					</transition>
		    </el-main>
		  </el-container>
		</el-container>
    <!--<img src="./assets/logo.png">-->    
  </div>
</template>

<script>
import Bar from './components/bar'
export default {
  name: 'App',
  components: { Bar },
}
</script>
<style lang="scss">
	@import "./style/style";
	.el-header, .el-footer {
    background-color: #2BAEE9;
    color: #fff;
    line-height: 60px;
    font-size: 18px;
  }
  
  .el-aside {
    background-color: #f1f1f1;
    color: #333;
    text-align: center;
  }
  
  .el-main {

  }
  .el-dropdown{
  	color: #fff;
  	line-height: 57px;
  }
</style>
