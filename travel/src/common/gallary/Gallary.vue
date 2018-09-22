<template>
	<div class="container" @click="handleGallaryClick" >
		<div class="wrapper">
			<swiper :options="swiperOption" v-if="showSwiper">
			    <swiper-slide
			      v-for="item of imgs"
			      :key='item.id'
			    >
			    	<img :src="item.imgUrl" class="gallary-img">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default{
	name: 'CommonGallary',
	props:{
		imgs: Array
	},
	data(){
		return{
			swiperOption:{
				autoplay: false,
				loop: true,
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observerParents: true,
				observer: true
			},
		}
	},
	methods:{
		handleGallaryClick(){
			this.$emit('close')
		},
		
	},
	computed:{
		showSwiper(){
			return this.imgs.length
		}
	}
}
</script>
<style>
.swiper-container{
	overflow: inherit; 
}
</style>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.container >>> .swiper-container{
	overflow: inherit; 
}
.container{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #000;
	z-index: 99;
	.wrapper{
		width: 100%;
		height: 0;
		padding-bottom: 100%; 
		.gallary-img{
			width: 100%;
		}
		.swiper-pagination{
			color: #fff;
			bottom: -1rem;
		}
	}
}
</style>