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
      }
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
    	path: '/params/:newsId(\\d+)/:newsTitle',
    	name: 'Params',
    	component: Params,
    	beforeEnter:(to,from,next)=>{
    		console.log(to);
    		console.log(to);
    		next();
    		// next(false);不跳转
    		// next({path:'/'});跳转根目录
    	}
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
