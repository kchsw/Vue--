<template>
	<transition name='slide-down'>
			<div class="title-wrapper" v-show='ifTitleAndMenuShow'>
				<div class="left">
					<i class="icon iconfont icon-Group"></i>
				</div>
				<div class="right">
					<div class="icon-wrapper">
						<i class="icon iconfont icon-ionc--"></i>
					</div>
					<div class="icon-wrapper">
						<i class="icon iconfont icon-cart"></i>
					</div>
					<div class="icon-wrapper">
						<i class="icon iconfont icon-moreread"></i>
					</div>
				</div>
			</div>
    </transition>
</template>

<script>
	export default{
		props:{
			ifTitleAndMenuShow: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.title-wrapper{
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: px2rem(48);
		z-index: 101;
		background-color: #fff;
		display: flex;
		box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0,.15);
		.left{
			flex: 0 0 px2rem(60);
			@include center;
		}
		.right{
			flex: 1;
			display: flex;
			justify-content: flex-end;			
			.icon-wrapper{
				flex: 0 0 px2rem(40);
				@include center;
			}
		}
	}
</style>