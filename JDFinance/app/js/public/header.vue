<template lang="html">
    <div class="header">
    	<span class="left">
    		<em>注册</em>&nbsp;|&nbsp;<em>登陆</em>
    	</span>
    	<btn class="btnDowload">APP下载</btn>
    </div>
</template>

<script>
import btn from "../core/btn"
export default {
	
	components: {
		btn
	},
	data(){
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.header{
		color: #666;
		height: 100px;
		line-height: 100px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		font-size: 32px;
		background: #fff url(https://m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
		background-size: auto 50%;
		box-sizing: border-box;
		border-bottom: 1px solid #e5e5e5;
		z-index: 100;
		.left{
			font-size: 28px;
			height: 30px;
			line-height: 30px;
			margin: 17px 0 0 18px;
		}
		.btnDowload{
			float: right;
			font-size: 24px;
			border-width: 0;
			height: 56px;
			line-height: 56px;
			min-width: 120px;
			padding: 0;
			border-radius: 4px;
			margin: 28px 24px 0 0;
		}
	}
</style>
