<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <button @click='goBack'>后退</button>
    <button @click='goHead'>前进</button>
    <button @click='goHome'>返回首页</button>
    <router-view name='Left'></router-view>
    <router-view name='Right'></router-view>
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
    <div>
      <router-link to='/'>首页</router-link> |
      <router-link to='/params/001/Have a nice day!'>Params</router-link> |
      <router-link to='/hi'>Hi</router-link> |
      <router-link :to="{name:'HI/hi1',params:{username:'kchsw',id:'001'}}">Hi页面1</router-link> | <!-- 点击 <router-link :to="..."> 等同于调用 router.push(...)。 -->
      <router-link to='/hi/hi2'>Hi页面2</router-link> |
      <router-link to='/goHome'>redirect重定向</router-link> |
      <router-link to='/error'>错误页面</router-link> 
    </div>
    <p>{{ $route.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      routerTransition: ''
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goHead(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/')
    }，
    watch: {
    //监听路由的变化
    '$route'(to){
      //to.query && to.query.routerTransition && this.routerTransition = to.query.routerTransition
      //动态改变transition动画
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
