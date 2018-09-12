<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: 'Hi, I am Hi2 page'
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