<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I am kchsw'
    }
  },
  //组件守卫
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next(vm => {
      console.log(vm)
    });
    // next();是开关一定要写，不然不跳转
    //进来时组件还没有喧嚷，无法访问到this
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    const leave = confirm('确定离开？？')
    if(leave) next()
    else next(false) //传入false不离开
  },
//url参数发生改变，组件被复用时
  beforeRouteUpdate(to, from, next){
    console.log(to.name, from.name)
  },
  watch: {
    //监听路由的变化
    '$route'(to){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
