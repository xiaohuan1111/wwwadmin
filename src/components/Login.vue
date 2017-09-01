<template>
	<div id="login">
		<div class="wrap">
			<h3>登录</h3>
			<el-form class="formBox" label-position="right" :rules="rules" label-width="80px" :model="formLogin" ref="formLogin">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="formLogin.userName"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="passWord">
					<el-input v-model="formLogin.passWord"></el-input>
				</el-form-item>
				<el-checkbox v-model="rememberPwd">记住密码</el-checkbox>
			</el-form>
			<el-button class="loginBtn" type="primary" :loading="formLoading" @click="fnLogin('formLogin')">登录</el-button>
		</div>
	</div>
</template>
<script>
	import { requestLogin } from '@/api/api'
	export default {
		data(){
			return{
				formLogin:{
					userName:'',
					passWord:''
				},
				rules:{
					userName: [
					{
						required: true,
						message: '请输入用户名！',
						trigger: 'blur'
					}
					],
					passWord: [
					{
						required: true,
						message: '请输入密码！',
						trigger: 'blur'
					}
					]
				},
				rememberPwd: true,
				formLoading: false,
			}
		},
		methods: {
			fnLogin(formName){
				this.$refs[formName].validate((valid) => {
					if(valid){
						var loginParams = { userName: this.formLogin.userName, passWord: this.formLogin.passWord}
						requestLogin(loginParams).then(data => {
							if(data.code === 500){
								this.$message({
									type: 'error',
									message: data.msg
								})
							}
							if(data.code === 200){
								this.$message({
									type: 'success',
									message: data.msg
								});
								sessionStorage.setItem('user',JSON.stringify(data.user));
								this.$router.push({path: '/dashboard'});
							}
						})
						
					}
				})
				
			}
		}
	}
</script>
<style lang="scss">
	#login{
		display: flex;
		height:100vh;
		justify-content: center;
		align-items: center;
		background: url("../assets/images/login.jpg") center center;
		
		.wrap{
			margin-top:-160px;
			width: 420px;
			background-color:#fff;
			padding:20px;
			box-shadow: 0 0 6px rgba(0,0,0,.2);
			h3{
				margin:20px 0 30px 0;
				font-size: 16px;
				font-weight: 600;
				text-align: center;
			}
			.formBox{
				margin-bottom:40px;
			}
		}
		.loginBtn{
			width: 100%;
		}
	}
	
</style>