<template>
	<transition name="move">
		<div class="food"
		  v-show="showFlag"
		  ref="food"
		>
			<div class="food-content">
				<div class="image-header">
					<img :src="food.image" alt="">
					<div class="back" @click="hide">
						<i class="icon iconfont icon-arrow_lift"></i>
					</div>
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail">
						<span class="sell-count">月售{{food.sellCount}}份</span>
						<span class="rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price">
						<span class="now"><span class="rmb">¥</span> {{food.price}}</span><span v-show="food.oldPrice" class="old"><span class="rmb">¥</span> {{food.oldPrice}}</span>
					</div>
				</div>
				
			</div>
		</div>
	</transition>
</template>

<script>
export default{
	name: 'Food',
	data(){
		return{
			showFlag:false
		}
	},
	props:{
		food:{
			type:Object
		}
	},
	methods:{
		show(){
			this.showFlag = true;
		},
		hide(){
			this.showFlag = false;
		}
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.food{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 48px;
	z-index: 30;
	width: 100%;
	background: #fff;
	&.move-enter-active, &.move-leave-active{
		transition: all .3s linear;
	}
	&.move-enter, &.move-leave-to{
		transform: translate3d(100%, 0, 0);
		opacity: 0;
	}
	&.move-enter-to, &.move-leave{
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
	.food-content{
		.image-header{
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 100%;
			img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
		.back{
			position: absolute;
			top: 10px;
			left: 0;
			font-size: 20px;
			color: #fff;
			.icon-arrow_lift{
				display: block;
				padding: 10px;
			}
		}
	}
}
</style>