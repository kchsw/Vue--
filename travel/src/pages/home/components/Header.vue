<template>
	<div class="header">
		<div class="header-left">
			<i class="icon iconfont icon-fanhui"></i>
		</div>
		<div class="header-input">
			<i class="icon iconfont icon-sousuo"></i>
			输入城市/景点/游玩主题
	    </div>
	    <router-link to="/city">
	    	<div class="header-right">{{this.city}}
				<i class="icon iconfont icon-jiantou-xiangxia"></i>
			</div>
	    </router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'HomeHeader',
	computed:{
		...mapState(['city'])
	}
}
</script>


<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.header{
	display: flex;
	line-height: .86rem;
	background: $bgColor;
	color: #fff;
	.header-left{
		flex: 0 0 .64rem;
		text-align: center;
		.icon-fanhui{
			font-size: .4rem;
		}
	}
	.header-input{
		flex: 1;
		height: .64rem;
		line-height: .64rem;
		margin-top: .12rem;
		margin-left: .2rem;
		padding-left: .2rem;
		background: #fff;
		border-radius: .1rem ;
		color: #ccc;
	}
	.header-right{
		min-width: 1.04rem;
		flex: 0 0 1.24rem;
		text-align: center;
		color: #fff;
		padding: 0px 0.1rem; 
		.icon-jiantou-xiangxia{
			font-size: .24rem;
		}
	}
}
</style>