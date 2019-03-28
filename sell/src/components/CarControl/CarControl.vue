<template>
	<div class="carcontrol">
		<transition name="move">
			<div class="cart-decrease"
			  v-show="food.count>0"
			  @click.stop.prevent="decreaseCart"
			>
				<i class="inner icon iconfont icon-remove-circle-o"></i>
			</div>
		</transition>
		<div class="cart-count"
		  v-show="food.count>0"
		>{{food.count}}</div>
		<div class="cart-add"
		  @click.stop.prevent="addCart"
		>
			<i class="icon iconfont icon-add-circle"></i>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default{
	name: 'CarControl',
	data(){
		return{

		}
	},
	props:{
		food:{
			type: Object
		}
	},
	methods:{
		addCart(event){
			if(!event._constructed){
				return
			}
			if(!this.food.count){
				Vue.set(this.food, 'count', 1) //全句注册
				// this.$set(this.food, 'count', 1) //局部注册
			}else{
				this.food.count++;
			}
			this.$emit('add', event.target)
		},
		decreaseCart(event){
			if(!event._constructed){
				return
			}
			if(this.food.count){
				this.food.count--;
			}
		}
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.carcontrol{
	font-size: 0;
	.cart-decrease{
		display: inline-block;
		padding: 6px;
		.inner{
			display: inline-block;
			font-size: 24px;
		    line-height: 24px;
		    color: rgb(0, 160, 220);		
		}
		&.move-enter-active,&.move-leave-active{
			transition: all .4s linear;
			.inner{
				transition: all .4s linear;
			}
		}
		&.move-enter,&.move-leave-to{
			opacity: 0;
			transform: translate3d(24px, 0, 0);
            .inner{
				transform: rotate(180deg);
			}
		}
		&.move-enter-to,&.move-leave{
			opacity: 1;
			transform: translate3d(0, 0, 0);			
            .inner{
				transform: rotate(0);
			}
		}			
	}
	.cart-count{
		display: inline-block;
		font-size: 10px;
		line-height: 24px;
		color: rgb(147, 153, 159);
		width: 12px;
		text-align: center;
		vertical-align: top;
		padding-top: 6px
	}
	.cart-add{
		display: inline-block;
		padding: 6px;
		font-size: 24px;
		line-height: 24px;
		color: rgb(0, 160, 220);
	}
}
</style>