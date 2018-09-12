import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count:1  //状态对象共享值
}

const mutations = {
	add(state,n){
		state.count+=n
	},
	reduce(state){
		state.count--
	}
}

const getters = {
	num(state){
		return state.count += 10
	}//状态计算过滤操作
}

//Actions异步状态
const actions = {
	addAction(context){
		context.commit('add',10)
		setTimeout(()=>{context.commit('reduce')},3000)
	},
	reduceAction({commit}){
		commit('reduce')
	}
}

// const moduleA = {
// 	state,
// 	mutations,
// 	getters,
// 	actions
// }
export default new Vuex.Store({
	state,
    mutations,
	getters,
	actions
	// modules:{
	// 	a:moduleA 
	// }
})