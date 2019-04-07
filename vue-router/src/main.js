// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const HAS_LOGINED = true
const setTitle = (title) => window.title = 'title' || 'admin'
//全局守卫
router.beforeEach((to, from, next) => {
	to.meta && to.meta.title && setTitle(title)
	if(to.name !== 'login'){
		if(HAS_LOGINED){
			next()
		}else{
			next({ name: 'login' })
		}
	}else{
		if(HAS_LOGINED){
			next({ name: 'home' })
		}else{
			next()
		}
	}
})

router.afterEach((to, from) => {
	//HAS_LOADING = false
})