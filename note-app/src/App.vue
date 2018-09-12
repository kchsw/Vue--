<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Toolbar from './components/Toolbar'
import NotesList from './components/NotesList'
import Editor from './components/Editor'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Toolbar,
    NotesList,
    Editor
  }
}
</script>

<style>
html,body,#app{
  padding: 0;
  margin: 0;
  height: 100%;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow:hidden;
  /*text-align: center;
  color: #2c3e50;*/
 /* margin-top: 60px;*/
}
#app:before{
  content: '';
  display: block;
  clear: both;
}
</style>
