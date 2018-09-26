<template>
	<div class="goods">
		<div class="menu-wrapper">
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
		<div class="foods-wrapper">
			
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name: 'SellGoods',
	data() {
		return {
			goods: []
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
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	}
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.menu-item /deep/ .border-bottom{
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
	}
}
</style>

