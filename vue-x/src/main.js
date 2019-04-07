// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bus from './bus/index'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus //挂载在实例上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//通过this.$bus.$emit('event', val)传递事件和值
//通过this.$bus.$on('event', handle)监听事件
