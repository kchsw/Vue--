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
      name: 'HelloWorld',
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
    	component: Error
    }
  ]
})
