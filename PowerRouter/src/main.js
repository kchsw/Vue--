import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { routerList } from './router';

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if(store.getters.role){ //role不存在 第一次登陆
		if(store.getters.newrouter.length){
			if(to.path=='/login' || to.path=='/'){
				next('/index')
			}else{
				next()
			}  //登陆过
		}else{
			let newRouter
			if(store.getters.role === 'A'){
				newRouter = routerList  //权限判断
			}else{
				let newChildren = routerList[0].children.filter(router => {
					if(router.meta){
						if(router.meta.role === store.getters.role){
							return true
						}else{
							return false
						}
					}else{
						return true
					}
				})
				newRouter = routerList
				newRouter[0].children = newChildren //动态路由加载
			}
			router.addRoutes(newRouter)
			store.dispatch("Roles", newRouter).then(res => {
				next({...to})
			}).catch( () => {

			})
		}
	}else{
		if(to.path=='/login'){ //如果是登录页面路径，就直接next()
	        next();
	    } else { //不然就跳转到登录；
	        next('/login')
	    }
		//直接写next('/login') 不跳转报错
	}
	
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
