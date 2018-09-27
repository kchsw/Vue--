<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menu">
			<ul>
				<li class="menu-item" 
				v-for="(item,index) of goods" 
				:key="index"
				>
					<span class="text border-bottom">
						<span class="icon"
						  v-if="item.type>0"
						  :class="classMap[item.type]"
						></span>{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foods">
			<ul>
				<li class="food-list food-list-hook"
				  v-for="(item,index) of goods" 
				  :key="index"
				>
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li class="food-item border-bottom"
						  v-for="(food,index) of item.foods" 
				          :key="index"
						>
							<div class="icon">
								<img :src="food.icon" width="57" height="57" alt="">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now"><span class="rmb">¥</span> {{food.price}}</span><span v-show="food.oldPrice" class="old"><span class="rmb">¥</span> {{food.oldPrice}}</span>
								</div>
							</div>
						</li>
					</ul>					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
export default{
	name: 'SellGoods',
	data() {
		return {
			goods: [],
			listHeight: []
		}
	},
	methods: {
  	    getGoodsData(){
			axios.get('/api/data.json')
			.then(this.getGoodsDataSuss)
		},
		getGoodsDataSuss(res){
			if(res.status === 200){
				const data = res.data
				this.goods = data.goods
				console.log(this.goods)
			}
		}
    },
	mounted(){
	    this.getGoodsData()
	    this.menuScroll = new Bscroll(this.$refs.menu)
	    this.foodsScroll = new Bscroll(this.$refs.foods)
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	}
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.goods /deep/ .border-bottom{
	border-bottom-color: rgba(7, 17, 27, 0.1);
}
.goods{
	display: flex;
	position: absolute;
	top: 174px;
	bottom: 46px;
	width: 100%;
	overflow: hidden;
	.menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
		.menu-item{
			display: table;
			height: 54px;
			width: 56px;
			line-height: 14px;
			padding: 0 12px;
			.text{
				display: table-cell;
				width: 56px;
				vertical-align: middle;
				font-size: 12px;
				.icon{
					display: inline-block;
					vertical-align: top;
					width: 12px;
					height: 12px;
					margin-right: 2px;
					background-size: 12px 12px;
					background-repeat: no-repeat;
					&.decrease{
					    @include bg-img(decrease_3);
					}
					&.discount{
						@include bg-img(discount_3);
					}
					&.guarantee{
						@include bg-img(guarantee_3);
					}
					&.invoice{
						@include bg-img(invoice_3);
					}
					&.special{
						@include bg-img(special_3);
					}
				}
			}
		}
	}
	.foods-wrapper{
		flex: 1;
		.title{
			padding-left: 14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size: 12px;
			color: rgb(147, 153, 159);
			background: #f3f5f7;
		}
		.food-item{
			display: flex;
			margin: 18px;
			padding-bottom: 18px;
			&:last-child{
				margin-bottom: 0;
				&.border-bottom{
				    border-bottom: none;
				}
			}
			.icon{
				flex: 0 0 57px;
				margin-right: 10px;
			}
			.content{
				flex: 1;
				.name{
					margin: 2px 0 8px 0;
					height: 14px;
					line-height: 14px;
					font-size: 14px;
					color: rgb(7, 17, 27);					
				}
				.desc{
					margin-bottom: 8px;
					line-height: 12px;
					font-size: 10px;
					color: rgb(147, 153, 159);
				}
				.extra{
					line-height: 10px;
					font-size: 10px;
					color: rgb(147, 153, 159);
					.count{
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
			}
		}
	}
}
</style>

