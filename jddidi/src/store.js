import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	token: sessionStorage.getItem('TOKEN'),
	cartArry: JSON.parse(localStorage.getItem('CARTARRAY')) || []
}

const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_CART: (state, item) => {
		let goods = state.cartArry.find(v => v.label === item.label)
		if(goods){
			goods.count += 1
		}else{
			Vue.set(item, "count", 1)
			state.cartArry.push(item)
		}
	},
	SET_ADDCOUNT: (state, item) => {
		let goods = state.cartArry.find(v => v.label === item.label)
		goods.count++
	},
	SET_REDUCECOUNT: (state, item) => {
		let index = state.cartArry.findIndex(v => v.label === item.label)
		if(state.cartArry[index].count > 1){
			state.cartArry[index].count --
		}else{
			if(window.confirm('确定从购物车移除商品吗？')){
	            state.cartArry.splice(index,1)
	        }
		}
	},
	SET_CLEARCART: (state) => {
		state.cartArry = []
	}
}

const getters = {
	countSum: state => {
		let sum = 0
		state.cartArry.forEach(v => {
			sum += v.count
		})
		return sum
	}
}

const actions = {
	
}

let store =  new Vuex.Store({
	state,
    mutations,
	getters,
	actions
})

//监听每次调用mutations的时候,都会进这个方法，本地持久化处理
store.subscribe((mutations, state)=>{
  localStorage.setItem('CARTARRAY',JSON.stringify(state.cartArry))
})
export default store