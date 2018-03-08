<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/user' }">基础设置</el-breadcrumb-item>
		  <el-breadcrumb-item>设置选项</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
		<el-steps :active="active" finish-status="success">
		  <el-step title="步骤 1"></el-step>
		  <el-step title="步骤 2"></el-step>
		  <el-step title="步骤 3"></el-step>
		</el-steps>
		
		<el-button style="margin-top: 12px;" @click="next" size="medium">下一步</el-button>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				active: 0
			}
		},
		methods: {
	      	next() {
	        	if (this.active++ > 2) this.active = 0;
	      	}
   		}
	}
</script>

<style>
</style>