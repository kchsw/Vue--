<template>
	<div>
		<h2>{{msg}}</h2><hr>
		<h3>{{$store.state.count}} - {{count}}</h3>
		<p>
			<!-- <button @click='$store.commit("add",10)'>+</button>
			<button @click='$store.commit("reduce")'>-</button> -->
			<button @click='add(10)'>+</button>
			<button @click='reduce'>-</button>
			<button @click='addAction(10)'>+</button>
			<button @click='reduceAction'>-</button>
		</p>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default {
		data(){
			return {
				msg: 'Hello Vuex'
			}
		},
		methods:{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction'])
		},
		computed:{
			//mapState(['count'])返回一个对象
			...mapState(['count']),
			// num(){
			// 	return this.$store.getters.count
			// }
			...mapGetters(['num'])
		}
		,
		// computed:mapState({
		// 	count:state=>state.count
		// }),
		// computed:{
		// 	count(){
		// 		return this.$store.state.count
		// 	}
		// },
		store
	}
	console.log(mapState(['count']))
</script>