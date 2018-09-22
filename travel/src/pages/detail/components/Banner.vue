<template>
	<div>
		<div class="banner" @click='handleBannerClick'>
			<img :src="bannerImg" class="banner-img">
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<i class="icon iconfont icon-tupian"></i>
				    {{this.gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
			  :imgs="gallaryImgs"
			  v-show="showGallary"
			  @close="handleGallaryClose"
			></common-gallary>
		</fade-animation>
	</div>	
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default{
	name: 'Detail',
	props:{
		sightName: String,
		bannerImg: String,
		gallaryImgs: Array
	},
	data(){
		return{
			showGallary: false,
			imgs:["http://img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_600x330_5166ceee.jpg",
				"http://img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_600x330_5166ceee.jpg"]
		}
	},
	components:{
		CommonGallary,
		FadeAnimation
	},
	methods:{
		handleBannerClick(){
			this.showGallary = true
		},
		handleGallaryClose(){
			this.showGallary = false
		}
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.banner{
	position: relative;
	overflow: hidden;
	height: 0;
	padding-bottom: 55%;
	.banner-img{
		width: 100%;
	}
	.banner-info{
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		line-height: .6rem;
		color: #fff;
	    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
		@include ellipsis;
		.banner-title{
			flex: 1;
			font-size: .32rem;
		    padding: 0 .2rem;
		}
		.banner-number{
			margin-top: .14rem;
			padding: 0 .32rem;
			height: .32rem;
			line-height: .4rem;
			border-radius: .2rem;
			background: rgba(0, 0, 0, .3);
			font-size: .24rem; 
			.icon-tupian{
				font-size: .24rem;
			}
		}
	}
}
</style>