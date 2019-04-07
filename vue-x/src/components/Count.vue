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
		<p>
			{{$store.state.user.userName}} - {{firstLetter}} 
		</p>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	// import { createNamespaceHelpers } from "vuex"
	// cosnt { mapState } = createNamespaceHelpers('user')
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
			// ...mapState('user', { 传入模块名
			// 	userName: state => state.userName
			// })
			// num(){
			// 	return this.$store.getters.count
			// }
			...mapGetters('user', ['num', 'firstLetter']), //'user/lion' 多重模块 开启命名空间需空间命名参数,不开启模块在全局环境中都可以访问到
			value: {
				get(){
					return this.$store.state.count
				},
				set(value){
					this.add(value)
				}
			} //实现vuex的双向绑定
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
		// { code, data: { info } }
		//this.$store.registerModule('todo', {
			// state: {

			// }
		//})  注册模块
	}
	console.log(mapState(['count']))
</script>