<template>
	<div>
		<div class="goods"
		  v-for="(item, index) in cartArry"
		  :key="index"
		>
			{{item.label}}
			<div class="goodsright">
				<i class="cubeic-remove" @click="removeCount(item)"></i>
				<span>{{item.count}}</span>
				<i class="cubeic-add" @click="addCount(item)"></i>
			</div>
		</div>
		<div class="goodsbtn">

			<cube-button class="btn">下单</cube-button>
			<cube-button class="btn" @click="clearCart">清空</cube-button>
		</div>
	</div>
</template>

<script>
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		data(){
			return {
			}
		},
		computed: {
			...mapState(["cartArry"])
		},
		methods: {
			removeCount(item){
				this.$store.commit('SET_REDUCECOUNT',item)
			},
			addCount(item){
				this.$store.commit('SET_ADDCOUNT',item)
			},
			clearCart(){
				this.$store.commit('SET_CLEARCART')
			}
		}
	}
</script>

<style scoped>
	.goods{
		padding: 5px;
		text-align: left;
		font-size: 24px;
	}
	.goodsright{
		float: right;
	}
	.goodsright i{
		font-size: 20px;
	}
	.btn{
		width: 25%;
		float: right;
		margin-left: 5px;
	}
</style>
