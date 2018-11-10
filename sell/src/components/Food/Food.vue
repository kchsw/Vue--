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
					<div class="carcontrol-wrapper">
						<car-control
						  :food="food"
						  @add="addFood"
						></car-control>
					</div>
					<transition name="fade">
						<div class="buy"
						  v-show="!food.count || food.count === 0"
						  @click.stop.prevent="addFrist"
						>加入购物车</div>
					</transition>
				</div>
				<split v-show="food.info"></split>
				<div class="info" v-show="food.info">
					<h1 class="title">商品信息</h1>
					<p class="text">{{food.info}}</p>
				</div>
				<split></split>
				<div class="rating">
					<h1 class="title">商品评价</h1>
					<rating-select
					  :desc="desc"
					  :selectType="selectType"
					  :onlyContent="onlyContent"
					  :ratings="food.ratings"
					  @select="selectRating"
					  @toggle="toggleContent"
					></rating-select>
				</div>
				<div class="rating-wrapper">
					<ul v-show="food.ratings && food.ratings.length">
						<li class="rating-item" 
						v-for="rating of food.ratings"
						v-show="needShow(rating.rateType,rating.text)"
						>
							<div class="user">
								<span class="name">{{rating.username}}</span>
								<img class="avatar" :src="rating.avatar" width="12" height="12">
							</div>
							<div class="time">{{rating.rateTime | formatDate}}</div>
							<p class="text">
								<i class="icon iconfont" :class="{'icon-thumbup':rating.rateType===0,'icon-thumb-down':rating.rateType===1}"></i>{{rating.text}}
							</p>
						</li>
					</ul>
					<div class="no-rating" v-show="!food.ratings || !food.ratings.length">
						暂无评价
					</div>
				</div>								
			</div>
		</div>
	</transition>
</template>

<script>
import Bscroll from 'better-scroll'
import CarControl from '@/components/CarControl/CarControl'
import Split from '@/components/Split/Split'
import RatingSelect from '@/components/RatingSelect/RatingSelect'
import {formatDate} from '@/common/js/date'
import Vue from 'vue'

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;


export default{
	name: 'Food',
	data(){
		return{
			showFlag:false,
			selectType: ALL,
			onlyContent: true,
			desc:{
					all:"全部",
					positive:"推荐",
					negative:"吐槽"
				}
		}
	},
	props:{
		food:{
			type:Object
		}
	},
	components:{
		CarControl,
		Split,
		RatingSelect
	},
	methods:{
		show(){
			this.showFlag = true;
			this.selectType = ALL;
			this.onlyContent = true;
			this.$nextTick(()=>{
				if(!this.scroll){
					this.scroll = new Bscroll(this.$refs.food,{
						click:true
					});
				}else{
					this.scroll.refresh();
				}
			})
		},
		hide(){
			this.showFlag = false;
		},
		addFrist(event){
			if(!event._constructed){
				return
			}
			Vue.set(this.food, 'count', 1);
			this.$emit('add',event.target);
		},
		addFood(target){
			this.$emit("add",target)
		},
		selectRating(type){
			this.selectType = type;
			this.$nextTick(()=>{
				this.scroll.refresh();
			})
		},
		toggleContent(){
			this.onlyContent = !this.onlyContent;
			this.$nextTick(()=>{
				this.scroll.refresh();
			})
		},
		needShow(type,text){
			if(this.onlyContent && !text){
				return false
			}
			if(this.selectType === ALL){
				return true
			}else{
				return this.selectType === type
			}
		}
	},
	filters:{
		formatDate(time){
			let date = new Date(time);
			return formatDate(date,'yyyy-MM-dd hh:mm');
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
		.content{
			position: relative;
			padding: 18px;
			.title{
				line-height: 14px;
				margin-bottom: 8px;
				font-size: 14px;
				font-weight: 700;
				color: rgb(7, 17, 27);
			}
			.detail{
				margin-bottom: 18px;
				font-size: 0;
				color: rgb(147, 153, 159);
				line-height: 10px;
				height: 10px;
				.sell-count,.rating{
					display: inline-block;
					font-size: 10px;
					margin-right: 12px;
				}
			}
			.price{
				.now{
					font-size: 14px;
					color: rgb(240, 20, 20);
					margin-right: 8px;
				}
				.old{
					font-size: 10px;
					text-decoration: line-through;
					color: rgb(147, 153, 159);
				}
				.now, .old{
					line-height: 24px;
					font-weight: 700;
					.rmb{
						font-size: 10px;
						font-weight: normal;
					}
				}					
			}
			.carcontrol-wrapper{
				position: absolute;
				right: 12px;
				bottom: 12px;
			}
			.buy{
				position: absolute;
				right: 18px;
				bottom: 18px;
				z-index: 10;
				height: 24px;
				line-height: 24px;
				padding: 0 12px;
				box-sizing: border-box;
				font-size: 10px;
				border-radius: 12px;
				color: #fff;
				background: rgb(0, 160, 220);
			}
		}
		.info{
			padding: 18px;
			.title{
				line-height: 14px;
				margin-bottom: 6px;
				font-size: 14px;
				color: rgb(7, 17, 27)
			}
			.text{
				font-size: 12px;
				font-weight: 200px;
				line-height: 24px;
				color: rgb(77, 85, 93);
				padding: 0 6px;
			}
		}
		.rating{
			padding-top: 18px;
			.title{
				line-height: 14px;
				margin-left: 18px;
				font-size: 14px;
				color: rgb(7, 17, 27)
			}
		}
		.rating-wrapper{
			padding: 0 18px;
			.rating-item{
				position: relative;
				padding: 16px 0;
				border-bottom: 1px solid rgba(7, 17, 27, .1);
				.user{
					position: absolute;
					right: 0;
					top: 16px;
					font-size: 0;
					line-height: 12px;
					.name{
						display: inline-block;
						font-size: 20px;
						color: rgb(147, 153, 159);						
						margin-right: 6px;
						vertical-align: top;
					}
					.avatar{
						display: inline-block;
						border-radius: 50%
					}
				}
				.time{
					margin-bottom: 6px;
					font-size: 10px;
					line-height: 12px;
					color: rgb(147, 153, 159);
				}
				.text{
					font-size: 12px;
					color: rgb(7, 17, 27);
					line-height: 16px;
					.icon{
						font-size: 12px;
						line-height: 16px;
						vertical-align: top;
						margin-right: 4px;
						&.icon-thumbup{
							color: rgb(0, 160, 220);
						}
						&.icon-thumb-down{
							color: rgb(147, 153, 159);
						}
					}
				}
			}
			.no-rating{
				padding: 16px 0;
				font-size: 12px;
				color: rgb(147, 153, 159);
			}
		}
	}
}
</style>