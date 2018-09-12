<template>
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      msg: 'Error: 404 此页面不存在!'
    }
  }
}
</script>