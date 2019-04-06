import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login'
import Register from './components/Register'
import Index from './components/Index'
import Botnav from './components/Botnav'
import Car from './components/Car'
import Mine from './components/Mine'
import Search from './components/Search'
import Class from './components/Class'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  	{
  		path: '/',
  		redirect: '/login'
  	},
  	{
  		path: '/login',
  		name: 'login',
  		component: Login
  	},
  	{
  		path: '/register',
  		name: 'register',
  		component: Register
  	},
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // },
    {
      path: '/botnav',
      name: 'botnav',
      redirect: '/botnav/index',
      component: Botnav,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'class',
          name: 'class',
          component: Class
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'car',
          name: 'car',
          component: Car,
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine,
          meta: {
            requireAuth: true
          }
        },
      ]
    }
  ]
})
