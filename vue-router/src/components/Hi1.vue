<template>
  <div class="hello">
    <p>{{msg}}</p>
    {{ $route.params.username }}-{{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi, I am Hi1 page'
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