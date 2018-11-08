<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}} / {{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count"
			  v-if="seller.supports" 
			  @click="showDetail"
			>
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon iconfont icon-keyboardarrowright"></i>
			</div>
		</div>
		<div class="bulletin-wrapper"
		  @click="showDetail"
		>
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon iconfont icon-keyboardarrowright"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%" alt="">
		</div>
		<transition name="fade">
			<div v-show="detailShow" class="detail">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<h1 class="name">
							{{seller.name}}
						</h1>
						<div class="star-wrapper">
							<sell-star
							  :size="48"
							  :score="seller.score"
							></sell-star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul v-if="seller.supports" class="supports">
							<li class="support-item"
							  v-for="(item,index) in seller.supports"
							>
								<span class="icon" :class="classMap[item.type]"></span>
								<span class="text">{{item.description}}</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{seller.bulletin}}</p>
						</div>	
					</div>
				</div>
				<div @click="showDetail" class="detail-close">
					<i class="icon iconfont icon-close2"></i>
				</div>
			</div>
	    </transition>
	</div>
</template>

<script>
import SellStar from '@/components/Star/Star'
export default{
	name: 'SellHeader',
	props: {
		seller: Object
	},
	components: {
		SellStar
	},
	data(){
		return {
			detailShow: false
		}
	},
	methods: {
		showDetail(){
			this.detailShow = !this.detailShow
		}
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.header{
	overflow: hidden;
	position: relative;
	color: #fff;
	background: rgba(7, 17,27, .5);
	.content-wrapper{
		position: relative;
		padding: 24px 12px 18px 24px;
		font-size: 0;
		.avatar{
			display: inline-block;
			vertical-align: top;
			img{
				border-radius: 2px;
			}
		}
		.content{
			display: inline-block;
			margin-left: 16px;
			.title{
				margin: 2px 0 8px;
				font-size: 0;
				.brand{
					display: inline-block;
					vertical-align: top;
					width: 30px;
					height: 18px;
					@include bg-img(brand);
					background-size: 30px 18px;
					background-repeat: no-repeat;
				}
				.name{
					margin-left: 6px;
					font-size: 16px;
					line-height: 18px;
					font-weight: bold;
				}
			}
			.description{
				margin-bottom: 10px;
				line-height: 12px;
				font-size: 12px;
			}
			.support{
				.icon{
					display: inline-block;
					vertical-align: top;
					width: 12px;
					height: 12px;
					margin-right: 4px;
					background-size: 12px 12px;
					background-repeat: no-repeat;
					&.decrease{
					    @include bg-img(decrease_1);
					}
					&.discount{
						@include bg-img(discount_1);
					}
					&.guarantee{
						@include bg-img(guarantee_1);
					}
					&.invoice{
						@include bg-img(invoice_1);
					}
					&.special{
						@include bg-img(special_1);
					}
				}
				.text{
					line-height: 12px;
					font-size: 10px;
				}				
			}			
		}
		.support-count{
			position: absolute;
			right: 12px;
			bottom: 18px;
			padding: 0 8px;
			height: 24px;
			line-height: 24px;
			border-radius: 14px;
			background: rgba(0, 0, 0, .2);
			text-align: center;
			.count{
				vertical-align: top;
				font-size: 10px;
			}
			.icon-keyboardarrowright{
				margin-left: 2px;
				line-height: 24px;
				font-size: 10px;
			}
		}
	}
	.bulletin-wrapper{
		position: relative;
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		@include ellipsis;
		background: rgba(7, 17, 27, .2);
		.bulletin-title{
			display: inline-block;
			vertical-align: top;
			width: 22px;
			height: 12px;
			margin-top: 8px;
			@include bg-img(bulletin);
			background-size: 22px 12px;
			background-repeat: no-repeat;
		}
		.bulletin-text{
			vertical-align: top;
			font-size: 10px;
			margin: 0 4px;
		}
		.icon-keyboardarrowright{
			position: absolute;
			font-size: 10px;
			right: 12px;
		}
	}
	.background{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}
	.detail{
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7, 17, 27, .8);
		.detail-wrapper{
			min-height: 100%;
			width: 100%;
			.detail-main{
				margin-top: 64px;
				padding-bottom: 64px;
				.name{
					line-height: 16px;
					text-align: center;
					font-size: 16px;
					font-weight: 700;
				}
				.star-wrapper{
					margin-top: 18px;
					padding: 2px 0;
					text-align: center;
				}
				.title{
					display: flex;
					width: 80%;
					margin: 28px auto 24px auto;
					.line{
						flex: 1;
						position: relative;
						top: -6px;
						border-bottom: 1px solid rgba(255, 255, 255, .2)
					}
					.text{
						padding: 0 12px;
						font-size: 14px;
						font-weight: 700;
					}
				}
				.supports{
					width: 80%;
					margin: 0 auto;
					.support-item{
						padding: 0 12px;
						margin-bottom: 12px;
						font-size: 0;
						&:last-child{
							margin-bottom: 0;
						}
						.icon{
							display: inline-block;
							vertical-align: top;
							width: 16px;
							height: 16px;
							margin-right: 6px;
							background-size: 16px 16px;
							background-repeat: no-repeat;
							&.decrease{
							    @include bg-img(decrease_2);
							}
							&.discount{
								@include bg-img(discount_2);
							}
							&.guarantee{
								@include bg-img(guarantee_2);
							}
							&.invoice{
								@include bg-img(invoice_2);
							}
							&.special{
								@include bg-img(special_2);
							}
				        }
				        .text{
				        	font-size: 12px;
				        	line-height: 16px;
				        	color: rgb(255, 255, 255);
				        }
					}
				}
				.bulletin{
					width: 80%;
					margin: 0 auto;
					.content{
						padding: 0 12px;
						font-size: 12px;
						line-height: 24px;						
						color: rgb(255, 255, 255);
					}
				}
			}
		}
		.detail-close{
			position: relative;
			width: 32px;
			height: 32px;
			margin: -64px auto 0 auto;
			clear: both;
			font-size: 32px;
		}
	}
}
</style>