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
	},
	addData(state){
		Vue.set(state, 'version', (1.2))
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

const saveInLocal = store => {  //store初始化时执行
	console.log('store初始化了')
	if (localStorage.STORE) store.replaceState(JSON.parse(localStorage.STORE))
	store.subscribe((mutations, state) => {
		localStorage.setItem('STORE',JSON.stringify(state))
		console.log('提交mutations了')
	})
}

//process.env.NODE_ENV === 'production'
const plugins = [ saveInLocal ]

const user = {
	state: {
		userName: 'Lion'
	},
	// mutations,
	getters: {
		firstLetter: state => {
			return state.userName.substr(0, 1)
		}
	},
	actions: {
		updata({ commit, state, rootState,dispatch }){
			//rootState.count
			//dispatch('xxx')
		},
		xxx(){

		}
	},
	namespaced: true
}
export default new Vuex.Store({
	state,
    mutations,
	getters,
	actions,
	modules:{
		user
	},
	plugins,
	strict: process.env.NODE_ENV === 'production'
})