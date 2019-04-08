<template>
  <div id="app">
  	<jd-header/>
    <router-view/>
    <navbar/>
  </div>
</template>

<script>
import Navbar from './public/navbar'
import jdHeader from "./public/header"
export default {
  name: 'app',
  components: {
  	jdHeader,
  	Navbar
  }
}
</script>

<style>
body{
	background-color: #f5f5f5;
}
#app{
	margin-bottom: 100px;
	margin-top: 100px;
}
</style>