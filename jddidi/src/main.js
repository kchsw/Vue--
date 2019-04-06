import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import store from './store'
import axios from 'axios'
import setAxios from './api/setaxios'

setAxios()
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth){
		if(store.state.token){
			next()
		}else{
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	}else{
		next()
	}
})

Vue.prototype.$http = axios
new Vue({
	router,
    store,
  render: h => h(App),
}).$mount('#app')
