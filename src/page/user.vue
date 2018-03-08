<template>
  <div>
  	<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/user' }">人员管理</el-breadcrumb-item>
		  <el-breadcrumb-item>人员列表</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
   	<el-button type="primary" size="medium" icon="el-icon-circle-plus-outline" @click="$store.state.b.show = true">增加人员</el-button>
  	<el-dialog title="人员添加" :visible.sync="$store.state.b.show" width="40%">
		  <el-form :model="form" :rules="rules" ref="form">
		    <el-form-item label="人员姓名" :label-width="formLabelWidth" prop="name">
		      <el-input v-model="form.name" auto-complete="off" clearable></el-input>
		    </el-form-item>
		    <el-form-item label="出生日期" :label-width="formLabelWidth" prop="date">
		        <el-date-picker type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
		    </el-form-item>   
		    <el-form-item label="性别" :label-width="formLabelWidth" prop="region">
		      <el-select v-model="form.region" placeholder="请选择性别">
		        <el-option label="男" value="男"></el-option>
		        <el-option label="女" value="女"></el-option>
		      </el-select>
		    </el-form-item>
		    <el-form-item label="爱好" :label-width="formLabelWidth" prop="type">
			    <el-checkbox-group v-model="form.type">
			      <el-checkbox label="上网" name="type"></el-checkbox>
			      <el-checkbox label="篮球" name="type"></el-checkbox>
			      <el-checkbox label="看书" name="type"></el-checkbox>
			      <el-checkbox label="烹饪" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="$store.state.b.show  = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm('form')">确 定</el-button>
		  </div>
		</el-dialog>
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  components: { Header, Footer },
  data () {
    return {
      form: {
	      name: '',
	      region: '',
	      type:[],
	      date:''
	    },
	    rules:{
	    	name:[
          { required: true, message: '请输入人员姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        type: [
          { type: 'array',required: true, message: '请至少选择一个爱好', trigger: 'change' }
        ],
        date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
	    },
	    formLabelWidth:"120px"
    }
  },
  methods: {
		 submitForm(formName) {
		    this.$refs[formName].validate((valid) => {
		      if (valid) {
		      	console.log(this.form);	 
//		      	this.$refs[formName].resetFields();
		      	this.$store.state.b.show = false;
				 		this.$message({
				 			message: '恭喜您，人员添加成功',
			        type: 'success',
			        showClose: true,
				 		}); 
		      }
		    });
		 }
  }
}
</script>
<style lang="scss">

</style>