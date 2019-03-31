import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import Index from './views/index'
import Red from './views/red'
import Blue from './views/blue'
import Yellow from './views/yellow'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        
        // {
        //     path: '/red',
        //     name: 'Red',
        //     component: Red
        // }

    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
//     //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     // }
    ]
})

export const routerList = [
    {
        path: '/index', redirect: 'index/red', name: 'index', component: Index, hidden: false,
        children: [
            {path: 'red', name: 'red', component: Red},
            {path: 'blue', name: 'blue', component: Blue, meta: {role: 'B'}},
            {path: 'yellow', name: 'yellow', component: Yellow, meta: {role: 'C'}},
        ]
    }
]
