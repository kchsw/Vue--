<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
  <leftNav></leftNav>
  <div class="main">
    <router-view/>
  </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;

}
.main{
  height: 100%;
  margin-left: 7%;
}
/*#app:before{
    content:'';
    display: block;
    clear: both;
  }*/
</style>
