<template>
	<div>
		
		<div class="register-box">
			<cube-form
		  :model="model"
		  :schema="schema"
		  @submit="submitHandler"
		>
		</cube-form>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			model: {
				username: '',
				password: ''
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
						label: '注册',
					}

				]
			}
		}
	},
	methods: {
		submitHandler(e){
			e.preventDefault()
			// this.$http.get('/api/regsiter', {
			// 	params: this.model
			// }).then(res =>{
			// 	console.log(res.data)
			// })
			this.$http.post('/api/regsiter', this.model).then(res =>{
				console.log(res)
				alert(res.message)
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
