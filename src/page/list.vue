<template>
	<div>
		<!--<img src="static/image/p05.jpg" alt="刘亦菲">-->
		<el-breadcrumb separator-class="el-icon-arrow-right">		  
		  <el-breadcrumb-item :to="{ path: '/dept' }">部门管理</el-breadcrumb-item>
		  <el-breadcrumb-item>部门列表</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table
	      :data="list"
	      :stripe="true"
	      :border="true"
	      v-loading="loading"
	      size="mini"
	      style="width: 100%;margin-top: 20px;">
	      <el-table-column
	        prop="create_at"
	        label="日期"
	        width="250">
	      </el-table-column>
	      <el-table-column
	        prop="author.loginname"
	        label="姓名"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="title"
	        :show-overflow-tooltip="true"
	        label="标题">
	      </el-table-column>
	      <el-table-column
	        prop="id"
	        label="ID">
	      </el-table-column>
	      <el-table-column
	        fixed="right"
      		label="操作"
      		width="100">
      		<template slot-scope="scope">
	        <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
	        <el-button @click="del()" type="text" size="small">删除</el-button>
	      </template>
	      </el-table-column>
	    </el-table>
		<!--<ul>
			<li v-for='(i,key) in list'>				
				<router-link :to="'/detail/id='+ i.id" >
				{{key+1}}. {{i.title}}
				</router-link>
			</li>
		</ul>-->
	</div>
</template>

<script>
	import Header from '../components/header'
	import Footer from '../components/footer'
	export default {
		components:{
			Header, Footer
		},
		data(){
			return {
				list:[],
				loading: true
			}
		},
		created(){
			this.getData()			
		},
		methods:{
			getData(){
				this.$api.get('topics', null, r => {
					this.list = r.data;
					this.loading = false;
				})
			},
			handleClick(row) {
        		console.log(row);
        		this.$router.push({path:"/detail/id=" +row});
      		},
      		del(){
      			this.$confirm('此操作将永久删除, 是否继续?', '提示', {
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
      		}
		}
	}
</script>

<style>
	
</style>