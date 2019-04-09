<template>
	<section class="panel">
		<section class="content">
			<div class="bgImage"/>
            <p>立即下载</p>
            <span>Copyright © 2004-2017 京东JD.com 版权所有</span>
		</section>
	</section>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	@import "../../css/element.scss";
	.panel{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 100;
		background: #fff;
		.content{
			@include flex;
			width: 100%;
			height: 100%;
        	justify-content: center;
        	align-items: center;
        	.bgImage{
        		background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        		width: 600px;
        		height: 800px;
        		background-size: 100% auto;
        		margin-top: -400px;
        	}
        	>P{
        		@include btn;
        		font-size: 32px;
        		background-color: #F1443E;
        		height: 100px;
        		line-height: 100px;
        		width: 471px;
        		background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
       			box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
       			position: fixed;
                bottom: 130px;
                padding: 0;
        	}
        	span{
		        position: fixed;
		        bottom: 16px;
		        font-size: 24px;
		        color: #eee;
		    }
		}
	}
</style>