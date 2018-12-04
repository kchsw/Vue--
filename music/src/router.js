import Vue from 'vue'
import Router from 'vue-router'
// import Rank from './components/rank/rank'
// import Recommend from './components/recommend/recommend'
// import Search from './components/search/search'
// import Singer from './components/singer/singer'
// import SingerDetail from './components/singer-detail/singer-detail'
// import Disc from './components/disc/disc'
// import TopList from 'components/top-list/top-list'
// import UserCenter from 'components/user-center/user-center'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import ('components/recommend/recommend'),
      children: [
        {
          path: ':id',
          component: () => import ('components/disc/disc')
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import ('components/singer/singer'),
      children: [
        {
          path: ':id',
          component: () => import ('components/singer-detail/singer-detail')
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import ('components/rank/rank'),
      children: [
        {
          path: ':id',
          component: () => import ('components/top-list/top-list')
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import ('components/search/search'),
      children: [
        {
          path: ':id',
          component: () => import ('components/singer-detail/singer-detail')
        }
      ]
    },
    {
      path: '/user',
      component: () => import ('components/user-center/user-center')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
