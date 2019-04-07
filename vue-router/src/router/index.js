import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/params'
import Error from '@/components/Error'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',//路由命名
      components: {
      	default:HelloWorld,
      	Left:Left,
      	Right:Right
      }.
      meta: { title: 'Hello' }
      // 根目录下alias不起作用
    },{
      path: '/goHome',
      redirect:'/'
      // redirect直接改变了url的值，把url变成了真实的path路径。
    },{
    	path: '/hi',
    	name: 'HI',
    	component: Hi,
    	children:[
            // {path:'/',component:Hi},
            {path:'hi1',name: 'HI/hi1',component:Hi1},
            {path:'hi2',name: 'HI/hi2',component:Hi2}
    	]
    },{
    	path: '/params/:newsId(\\d+)/:newsTitle', //(\\d+)正则只能传数字
    	name: 'Params',
    	component: Params,
      //路由独享守卫
    	beforeEnter:(to,from,next)=>{
    		if(from.name === 'HelloWorld'){
          alert('这是从首页来的')
        }else{
          alert('这是从其他页面来的')
        }
    		next();
    		// next(false);不跳转
    		// next({path:'/'});跳转根目录
    	},
      // props: true 通过组件props传值 props: {newsId, newsTitle}
      // props: {
      //   newsId: 0
      // } 
      // props: route => ({
      //   newsId : route.query.newsId  /params?newsId=0
      // })
      //props 传参
    },{
    	path:'/goParams/:newsId(\\d+)/:newsTitle',
    	redirect:'/params/:newsId(\\d+)/:newsTitle',
    },{
    	path:'*',
      name: 'Error',
    	component: Error
    }
  ]
})
// Vue Router 的导航方法 (push、 replace、 go) 
// routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         {
//           // 当 /user/:id/profile 匹配成功，
//           // UserProfile 会被渲染在 User 的 <router-view> 中
//           path: 'profile',
//           component: UserProfile
//         },
//         {
//           // 当 /user/:id/posts 匹配成功
//           // UserPosts 会被渲染在 User 的 <router-view> 中
//           path: 'posts',
//           component: UserPosts
//         }
//       ]
//     }
//   ]
//路由跳转激活顺序
// 1.失活组件 beforeRouteLeave
// 2.全局前置守卫beforeEach
// 3.路由独享守卫 beforeEnter
// 4.激活组件 beforeRouteEnter
// 5.全局解析守卫 beforeResolve
// 6.全局后置守卫 afterEach


