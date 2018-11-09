<template>
	<div class="ratingselect">
		<div class="rating-type">
			<span class="block positive"
			  @click="select(2,$event)"
			  :class="{'active':selectType===2}"
			>{{desc.all}}<span class="count">{{ratings.length}}</span></span>
			<span class="block positive"
			  @click="select(0,$event)"
			  :class="{'active':selectType===0}"
			>{{desc.positive}}<span class="count">{{positives.length}}</span></span>
			<span class="block negative"
			  @click="select(1,$event)"
			  :class="{'active':selectType===1}"
			>{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
		</div>
		<div class="switch"
		  :class="{'on':onlyContent}"
		  @click="toggleContent"
		>
			<i class="icon iconfont icon-checkcircle"></i>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default{
	name: 'RatingSelect',
	props:{
		ratings:{
			type: Array,
			default(){
				return [];
			}
		},
		selectType:{
			type: Number,
			default: ALL
		},
		onlyContent:{
			type: Boolean,
			default: false
		},
		desc:{
			type: Object,
			default(){
				return{
					all:"全部",
					positive:"满意",
					negative:"不满意"
				}
			}
		}

	},
	methods:{
		toggleContent(event){
			if (!event._constructed) {
	          return;
	        }
			this.$emit('toggle');
		},
		select(type,event){
			if (!event._constructed) {
	          return;
	        }
	        this.$emit('select',type);
		}
	},
	computed:{
		positives(){
		 	return this.ratings.filter((rating)=>{
		 		return rating.rateType === 0
		 	})
		},
		negatives(){
			return this.ratings.filter((rating)=>{
		 		return rating.rateType === 1
		 	})
		}
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';

.ratingselect{
	.rating-type{
		padding: 18px 0;
		margin: 0 18px;
		border-bottom: 1px solid rgba(7, 17, 27, .1);
		font-size: 0;
		.block{
			display: inline-block;
			font-size: 12px;
			color: rgb(77, 85, 93);
			line-height: 16px;
			padding: 8px 12px;
			margin-right: 8px;
			border-radius: 2px;
			&.active{
				color: #fff;
			}
			.count{
				font-size: 8px;
				margin-left: 2px;
			}
			&.positive{
				background: rgba(0, 160, 220, .2);
				&.active{
					background: rgb(0, 160, 220);
				}
			}
			&.negative{
				background: rgba(77, 85, 93, .2);
				&.active{
					background: rgb(77, 85, 93);
				}
			}
		}
	}
	.switch{
		padding: 12px 18px;
		border-bottom: 1px solid rgba(7, 17, 27, .1);
		font-size: 0;
		line-height: 24px;
		color: rgb(147, 153, 159);
		&.on{
			.icon-checkcircle{
				color: #00c850;
			}
		}
		.icon-checkcircle{
			display: inline-block;
			margin-right: 4px;
			font-size: 24px;		
			vertical-align: top;
		}
		.text{
			display: inline-block;
			font-size: 12px;
		}
	}
}
</style>