import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SellGoods from '@/components/Goods/SellGoods'
import SellRatings from '@/components/Ratings/SellRatings'
import SellSeller from '@/components/Seller/SellSeller'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods' 
    },
    {
      path: '/goods',
      name: 'SellGoods',
      component: SellGoods,
      // alias: '/'
    },
    {
      path: '/ratings',
      name: 'SellRatings',
      component: SellRatings
    },
    {
      path: '/seller',
      name: 'SellSeller',
      component: SellSeller
    },

  ]
})
