<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="header-left">
				<i class="icon iconfont icon-fanhui"></i>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name: 'CityHeader'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.header{
	position: relative;
	overflow: hidden;
	height: .86rem;
	line-height: .86rem;
	text-align: center;
	color: #fff;
	background: $bgColor;
	.header-left{
		position: absolute;
		left: 0;
		top: 0;
		width: .64rem;
		text-align: center;
		color: #fff;
		.icon-fanhui{
			font-size: .4rem;
		}
	}
}

</style>