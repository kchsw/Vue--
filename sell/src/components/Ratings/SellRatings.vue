<template>
	<div class="ratings" ref="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<sell-star
						  :size="36"
						  :score="seller.serviceScore"
						></sell-star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评分</span>
						<sell-star
						  :size="36"
						  :score="seller.foodScore"
						></sell-star>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<split></split>
			<rating-select
			  :selectType="selectType"
			  :onlyContent="onlyContent"
			  :ratings="ratings"
			  @select="selectRating"
			  @toggle="toggleContent"	
			></rating-select>
			<div class="rating-wrapper">
				<ul>
					<li class="rating-item" 
					  v-for="rating of ratings"
					  v-show="needShow(rating.rateType,rating.text)" 
					>
						<div class="avatar">
							<img :src="rating.avatar" width="28" height="28">
						</div>
						<div class="content">
							<h1 class="name">{{rating.username}}</h1>
							<div class="star-wrapper">
								<sell-star
								  :size="24"
								  :score="rating.score"
								></sell-star>
								<span class="delivery" v-show="rating.deliveryTime">
									{{rating.deliveryTime}}分钟送达
								</span>
							</div>
							<p class="text">{{rating.text}}</p>
							<div class="recommend" v-show="rating.recommend && rating.recommend.length">
								<i class="icon iconfont" :class="{'icon-thumbup':rating.rateType===0,'icon-thumb-down':rating.rateType===1}"></i>
								<span class="item" v-for="item of rating.recommend">{{item}}</span>
							</div>
							<div class="time">{{rating.rateTime | formatDate}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import Split from '@/components/Split/Split'
import RatingSelect from '@/components/RatingSelect/RatingSelect'
import SellStar from '@/components/Star/Star'
import axios from 'axios'
import {formatDate} from '@/common/js/date';

const ERR_OK = 200;
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default{
	name: 'SellRatings',
	data(){
		return{
			ratings:[],
			selectType: ALL,
			onlyContent: true,
		}
	},
	props:{
		seller: Object
	},
	components:{
		Split,
		RatingSelect,
		SellStar
	},
	methods:{
		getRatingsData(){
			axios.get('/api/data.json')
			.then(this.getRatingsDataSuss)
		},
		getRatingsDataSuss(res){
			if(res.status === ERR_OK){
				const data = res.data;
				this.ratings = data.ratings;
				this.$nextTick(() => {
					this.scroll = new Bscroll(this.$refs.ratings, {
		              click: true
		            });
		        })
			}
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
	mounted(){
		this.getRatingsData();
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
.ratings{
	position: absolute;
	top: 174px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	.ratings-content{
		.overview{
			display: flex;
			padding: 18px 0;
			.overview-left{
				flex: 0 0 137px;
				padding: 6px 0;
				width: 137px;
				border-right: 1px solid rgba(7, 17, 27, .1);
				text-align: center;
				@media only screen and (max-width: 320px){
					flex: 0 0 120px;
					width: 120px;
				}
				.score{
					font-size: 23px;
					line-height: 28px;
					color: rgb(255, 153, 0);
					margin-bottom: 6px;
				}
				.title{
					font-size: 12px;
					line-height: 12px;
					color: rgb(7, 17, 27);
					margin-bottom: 8px;
				}
				.rank{
					font-size: 10px;
					line-height: 10px;
					color: rgb(147, 153, 159);
				}
			}
			.overview-right{
				flex: 1;
				padding: 6px 0 6px 24px;
				@media only screen and (max-width: 320px){
					padding: 6px 0 6px 6px;
				}
				.score-wrapper{
					margin-bottom: 8px;
					font-size: 0;
					.title{
						font-size: 12px;
						color: rgb(7, 17, 27);
						line-height: 18px;
					}
					.star{
						display: inline-block;
						vertical-align: top;
						margin: 0 12px;
					}
					.score{
						font-size: 12px;
						color: rgb(255, 153, 0);
						line-height: 18px;
					}
				}
				.delivery-wrapper{
					line-height: 18px;
					font-size: 12px;
					.title{
						color: rgb(7, 17, 27);
					}
					.delivery{
						color: rgb(147, 153, 159);
						margin-left: 12px;
					}
				}
			}
		}
		.rating-wrapper{
			padding: 0 18px;
			.rating-item{
				display: flex;
				padding: 18px 0;
				border-bottom: 1px solid rgba(7, 17, 27, .1);
				.avatar{
					flex: 0 0 28px;
					width: 28px;
					margin-right: 12px;
					img{
						border-radius: 50%;
					}
				}	
				.content{
					flex: 1;
					position: relative;
					.name{
						font-size: 10px;
						line-height: 12px;
						color: rgb(7, 17, 27);
					}
					.star-wrapper{
						font-size: 0;
						margin: 4px 0 6px 0;
						.star{
							display: inline-block;
						}
						.delivery{
							vertical-align: top;
							font-size: 10px;
							font-weight: 200;
							color: rgb(147, 153, 159);
							line-height: 12px;
							margin-left: 6px;
						}
					}
					.text{
						font-size: 12px;
						color: rgb(7, 17, 27);
						line-height: 18px;
					}
					.recommend{
						margin-top: 8px;
						line-height: 16px;
						font-size: 0;
						.icon-thumbup{
							font-size: 12px;
							color: rgb(0, 160, 220);
							margin: 0 8px 4px 0;
						}
						.icon-thumb-down{
							font-size: 12px;
							color: rgb(183, 187, 191);
						}
						.item{
							font-size: 9px;
							color: rgb(147, 153, 159);
							padding: 0 6px;
							border: 1px solid rgba(7, 17, 27, .1);
							margin: 0 8px 4px 0;
							background: #fff;
						}
					}
					.time{
						position: absolute;
						top: 0;
						right: 18px;
						font-size: 10px;
						font-weight: 200;
						line-height: 12px;
						color: rgb(147, 153, 159);
					}
				}
			}
		}
	}
}
</style>