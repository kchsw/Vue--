<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide
		      v-for="item of swiperList"
		      :key='item.id'
		    >
		    	<img :src="item.imgUrl" class="swiper-img">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
	
</template>

<script>
export default{
	name: 'HomeSwiper',
	props:{
		swiperList: Array
	},
	data(){
		return{
			swiperOption:{
				pagination: '.swiper-pagination',
				loop: true
			},
		}
	},
	computed: {
		showSwiper(){
			return this.swiperList.length
		}
	}
}	
</script>
<style>
.swiper-pagination-bullet-active{
	background: #fff;
}
</style>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
/*.wrapper >>> .swiper-pagination-bullet-active{
	background: #fff;
}
*/
.wrapper{
	overflow: hidden;
	width: 100%;
	height: 0;
	padding-bottom: 32.67%;
	.swiper-img{
		width: 100%;
	}
}
	
</style>