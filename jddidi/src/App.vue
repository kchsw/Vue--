<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="header">
      <router-link to="/login">登陆</router-link> |
      <router-link to="/register">注册</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
  /*margin-top: 100px;*/
}
#header{
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
}
</style>
