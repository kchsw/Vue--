<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name: 'Left',
		data () {
			return{
			    msg:'左侧路由区域'
			}
		}
	}
</script>

<style scoped>
    div{
    	width: 20%;
    	background: #ccc;
    	float: left;
    }
	h1{
		color: red;
		padding: 50px 0;
	}
</style>