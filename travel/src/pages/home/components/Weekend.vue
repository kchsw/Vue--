<template>
	<div>
		<div class="weekend-title">
			周末去哪儿
		</div>
		<ul>
			<li class="item border-bottom"
			v-for="(item,index) of weekendList"
			:key="item.id"
			>
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" alt="" class="item-img">
				</div>
	
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeWeekend',
	props: {
		weekendList: Array
	},
	data(){
		return{
		}
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.weekend-title{
	line-height: .8rem;
	background: #eee;
	text-indent: .2rem;
}

.item{
	.item-img-wrapper{
		overflow: hidden;
		height: 0;
		padding-bottom: 37.09%;
		.item-img{
			width: 100%;
		}
	}
	.item-info{
		flex: 1;
		padding: .1rem;
		min-width: 0;
		.item-title{
			line-height: .54rem;
			font-size: .32rem;
			@include ellipsis;
		}
		.item-desc{
			line-height: .4rem;
			color: #ccc;
			@include ellipsis;
		}
		
	}
}

</style>