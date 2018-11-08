<template>
	<div>
		<div class="goods">
			<div class="menu-wrapper" ref="menu">
				<ul>
					<li class="menu-item" 
					v-for="(item,index) of goods" 
					:key="index"
					:class="{'current':currentIndex===index}"
					@click="selectMenu(index,$event)"
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
					<li class="food-list" ref="foodList"
					  v-for="(item,index) of goods" 
					  :key="index"
					>
						<h1 class="title">{{item.name}}</h1>
						<ul>
							<li class="food-item border-bottom"
							  v-for="(food,index) of item.foods" 
					          :key="index"
					          @click="selectFood(food,$event)"
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
									<div class="carcontrol-wrapper">
										<car-control
										  :food="food"
										  @add="addFood"
										></car-control>
									</div>
								</div>
							</li>
						</ul>					
					</li>
				</ul>
			</div>
			<shop-cart
			  :deliveryPrice="seller.deliveryPrice"
			  :minPrice="seller.minPrice"
			  :selectFoods="selectFoods"
			  ref="shopcart"
			>
			</shop-cart>
		</div>
		<food
		  :food="selectedFood"
		  ref="food"
		></food>
	</div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import ShopCart from '@/components/ShopCart/ShopCart'
import CarControl from '@/components/CarControl/CarControl'
import Food from '@/components/Food/Food'


const ERR_OK = 200;
export default{
	name: 'SellGoods',
	data() {
		return {
			goods: [],
			listHeight: [],
			scrollY: 0,
			selectedFood:{}
		}
	},
	props:{
		seller: Object
	},
	components: {
		ShopCart,
		CarControl,
		Food 
	},
	computed: {
		currentIndex(){
			for (let i = 0; i < this.listHeight.length; i++) {
	          let height1 = this.listHeight[i];
	          let height2 = this.listHeight[i + 1];
	          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
	            return i;
	          }
	        }
	        return 0;
		},
		selectFoods(){
			let foods = []
			this.goods.forEach((good)=>{
				good.foods.forEach((food)=>{
					if(food.count){
						foods.push(food)
					}
				})
			})
			return foods;
		}
	},
	methods: {
  	    getGoodsData(){
			axios.get('/api/data.json')
			.then(this.getGoodsDataSuss)
		},
		getGoodsDataSuss(res){
			if(res.status === ERR_OK){
				const data = res.data
				this.goods = data.goods
				console.log(this.goods)
				this.$nextTick(() => {
		            this.calculateHeight()
		            this.initScroll()
		        })
			}
		},
		calculateHeight(){
			let foodList = this.$refs.foodList
			// console.log(foodList[0].clientHeight)
			let height = 0;
			this.listHeight.push(height)
			for (let i = 0; i < foodList.length; i++){
				let item = foodList[i]
				height += item.clientHeight;
				this.listHeight.push(height);
			}
		},
		initScroll(){
			this.menuScroll = new Bscroll(this.$refs.menu,{
				click: true
			})
		    this.foodsScroll = new Bscroll(this.$refs.foods,{
		    	click: true,
		    	probeType: 3
		    })
		    this.foodsScroll.on('scroll',(pos) => {
		    	// console.log(Math.abs(Math.round(pos.y)))
		    	this.scrollY = Math.abs(Math.round(pos.y))
		    })
		},
		selectMenu(index,event){
			if(!event._constructed){
				return
			}
			let foodList = this.$refs.foodList
			let el = foodList[index]
			this.foodsScroll.scrollToElement(el,300)
		},
		addFood(target){
			this._drop(target);
		},
		_drop(target){
			this.$nextTick(()=>{
				this.$refs.shopcart.drop(target)
			})
		},
		selectFood(food,enent){
			if(!event._constructed){
				return
			}
			this.selectedFood = food;
			this.$refs.food.show();
		}
    },
	mounted(){
	    this.getGoodsData()
	    // this.menuScroll = new Bscroll(this.$refs.menu)
	    // this.foodsScroll = new Bscroll(this.$refs.foods,{
	    // 	probeType: 3
	    // })
	    // this.foodsScroll.on('scroll',(pos) => {
	    // 	// console.log(Math.abs(Math.round(pos.y)))
	    // 	this.scrollY = Math.abs(Math.round(pos.y))
	    // 	console.log(this.scrollY)
	    // })
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
			&.current{
				position: relative;
				z-index: 10;
				margin-top: -1px;
				background: #fff;
				font-weight: 700;
			}
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
				position: relative;
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
				.carcontrol-wrapper{
					position: absolute;
					right: 0;
					bottom: -7px;
				}
			}
		}
	}
}
</style>

