<template>
	<div class="login">
		<el-form ref="form" :model="loginForm" label-width="60px">
			<el-form-item label="用户名">
	        	<el-input v-model="loginForm.username"></el-input>
	        </el-form-item>
	        <el-form-item label="密码">
	            <el-input type="password" v-model="loginForm.pw"></el-input>
	        </el-form-item>
	        <el-form-item>
	            <el-button type="primary" @click="submitInfo(loginForm)">登录</el-button>
	        </el-form-item>
		</el-form>
	</div>
</template>

<script>
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		data() {
			return {
				loginForm: {
					username: '',
					pw: ''
				}
			}
		},
		methods: {
			...mapActions(['Logins']),
			submitInfo(info){
				this.Logins(info).then(res => {
					this.$router.push({ path: '/index' })
				}).catch(() => {

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width: 350px;
		margin: 0 auto;
		position: relative;
		top: 200px;
		border: 1px solid #ccc;
    	border-radius: 15px;
    	padding: 38px 60px 5px 25px;
    	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
</style>

