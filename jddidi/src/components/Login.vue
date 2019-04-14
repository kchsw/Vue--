<template>
	<div>
		
		<div class="register-box">
			<cube-form
			  :model="model"
			  :schema="schema"
			  @submit="submitHandler"
			>
			</cube-form>
			<cube-button :primary="true" @click="click">拦截测试</cube-button>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			model: {
				username: '',
				password: '123456'
			},
			schema: {
				fields: [
					//用户名配置
					{
						type: 'input',
				        modelKey: 'username',
				        label: '用户名',
				        props: {
		                  	placeholder: '请输入用户名'
		                },
		                rules: {
		                	//校验规则
		                    required: true,
		                    type: 'string',
		                    max: 10,
		                    min: 4
		                },
		                trigger: blur,
		                messages: {
		                	required: '用户名不能为空',
		                	max: '用户名不能多于10个字符',
		                	min: '用户名不能少于4个字符'
		                }
					},
					//密码配置
					{
						type: 'input',
				        modelKey: 'password',
				        label: '密码',
				        props: {
		                  	placeholder: '请输入密码',
		                  	type: 'password',
		                  	eye: {
		                  		open: false
		                  	}
		                },
		                rules: {
		                	//校验规则
		                    required: true,
		                    type: 'string',
		                    max: 16,
		                    min: 6
		                },
		                trigger: blur,
		                messages: {
		                	required: '密码不能为空',
		                	max: '密码不能多于16个字符',
		                	min: '密码不能少于6个字符'
		                }
					},
					{
						type: 'submit',
						label: '登陆',
					}
				]
			}
		}
	},
	methods: {
		async submitHandler(e){
			e.preventDefault()
			try{
				const result = await this.$http.post('/api/login', this.model)
				console.log(result)
				alert(result.message)
				if(result.code == 0){
					this.$store.commit('SET_TOKEN', result.token)
					sessionStorage.setItem('TOKEN', result.token)
					//判断路由是否带参数，登陆后跳转
					if(this.$route.query.redirect){
						this.$router.replace({ path:this.$route.query.redirect})
					}else{
						this.$router.replace({ path:'/botnav'})
					}
				}else{
					
				}
			}catch(error){
			}

			// this.$http.post('/api/login', this.model).then(res =>{
			// 	console.log(res)
			// 	alert(res.message)
			// 	if(res.code == 0){
			// 		this.$store.commit('SET_TOKEN', res.token)
			// 		sessionStorage.setItem('TOKEN', res.token)
			// 	}else{
			// 	}
			// }).catch(error => {})
		},
		click(){
			this.$http.get('/api/test').then(res =>{
			}).catch(error => {})
		}
	}
}
</script>

<style scoped>
	.register-box{
		width: 300px;
		margin: auto;
	}
</style>
