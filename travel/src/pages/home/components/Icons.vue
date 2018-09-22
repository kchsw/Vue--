<template>
	<div class="icons">
		<!-- <div class="icon">
			<div class="icon-img">
				<img class="icon-img-content" src="">
			</div>			
			<p class="icon-desc"></p>
		</div> -->
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide		      
		      v-for="(page,index) of pages"
		      :key='index'
		    >
		        <div class="icon"
		        v-for="item of page"
		        :key="item.id"
		        >
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>			
					<p class="icon-desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>		   
		</swiper>		
	</div>
</template>

<script>
export default{
	name: 'HomeIcons',
	props:{
		iconList: Array
	},
	data(){
		return{
			swiperOption:{
				autoplay: false,
				loop: true
			},
		}
	},
	computed:{
		pages(){
			const pages = []
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index/8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		},
		showSwiper(){
			return this.iconList.length
		}

	}
}
</script>

<style>
.icons .swiper-container{
	height: 0;
	padding-bottom: 50%;
}
</style>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.icons{
	margin-top: .1rem;
	/*overflow: hidden;
	width: 100%;
	height: 0;
	padding-bottom: 50%;*/
	.icon{
		position: relative;
		float: left;
		overflow: hidden;
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		.icon-img{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: .44rem;
			box-sizing: border-box;
			padding: .1rem;
			.icon-img-content{
				display: block;
				margin: 0 auto;
				height: 100%;
			}
		}
		.icon-desc{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			line-height: .44rem;
			color: $darkTextColor;
			text-align: center;
			@include ellipsis;
		}
	}

}
</style>