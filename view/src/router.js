import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Grid from './components/Grid.vue'
import Table from './components/Table'
import Form from './components/Form'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'grid',
          name: 'grid',
          component: Grid
        },{
          path: 'table',
          name: 'table',
          component: Table
        },{
          path: 'form',
          name: 'form',
          component: Form
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
