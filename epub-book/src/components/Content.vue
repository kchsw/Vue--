<template>
	<transition name='slide-right'>
		<div class="content">
			<div class="content-wrapper" v-if="bookAvailable">
				<div class="content-item" v-for="(item,index) in navigation.toc" :key="index" @click="jumpTo(item.href)">
					<span class="text">{{item.label}}</span>
				</div>
			</div>
			<div class="empty" v-else>加载中.....</div>
		</div>
	</transition>
</template>

<script>
	export default{
		props:{
			ifShowContent: Boolean,
			navigation: Object,
			bookAvailable:{
				type: Boolean,
				default: false
			},
		},
		methods:{
			jumpTo(target){
				this.$emit('jumpTo',target)
			},
		}
	}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.content{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 50%;
	height: 100%;
	z-index: 103;
	overflow: scroll;
	background: #fff;
	.content-wrapper{

		.content-item{
			@include center;
			cursor: pointer;
			height: px2rem(40);
			border-bottom: px2rem(1) solid #ccc;
			padding-left: px2rem(30);
			.text{
				flex: 1;
				font-size: px2rem(12);
				
			}
		}
	}
	.empty{
		width: 100%;
	    height: 100%;
	    font-size: px2rem(14);
	    @include center;
	}
}
</style>