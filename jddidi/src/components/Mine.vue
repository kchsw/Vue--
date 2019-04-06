<template>
	<div>
		<img src="http://imgs.aixifan.com/block_1554431598103-rz4NCLWE86?imageView2/1/w/508/h/260/q/100" alt="">
		<ul>
			<li class="mineitem"
			  v-for="item in mineArry"
			  :key="item.label"
			  @click="selectItem(item)"
			>
				<span class="minetitle">{{item.label}}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				mineArry: [
					{label: '商品收藏'},
                	{label: '我的足迹'},
                	{label: '店铺收藏'},
                	{label: '我的订单'},
                	{label: '退出', type: 'exit'}
				]
			}
		},
		methods: {
			selectItem(item){
				if(item.type === 'exit'){
					this.$store.commit('SET_TOKEN', '')
					sessionStorage.removeItem('TOKEN')
					this.$router.push({path: '/login'})
				}
			}
		}
	}
</script>

<style scoped>
	.mineitem{
		font-size: 14px;
		text-align: left;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #eee;
		padding-left: 10px;
	}
	.minetitle{
		display: inline-block;
		width: 90%;
	}
	img{
		width: 100%;
	}
</style>
