<template lang="html">
	<section>
		<swiper :options="options" :not-next-tick="options.notNextTick">
			<swiper-slide v-for="(item,index) in items" :key="index">
				<router-link :to="{name: item.href}">
					<img :src="item.src" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	components: {
		swiper,
    	swiperSlide
	},
	props: {
		options: {
			type: Object,
			default(){
				return{
					autoplay: true,
					loop: true,
					pagination: {
	                    el: ".swiper-pagination",
	                },
	                notNextTick: false,
				}
			}
		},
		items: {
			type: Array,
			default: []
		}
	}	
}
</script>

<style lang="css">
 @import "~swiper/dist/css/swiper.css";
</style>
	