<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name: 'Right',
		data () {
			return{
				msg:'右侧路由区域'
			}
		}
	}
</script>

<style scoped>
    div{
    	width: 20%;
    	background: #ec8a8a;
    	float: right;
    }
	h1{
		color: #fff;
		padding: 50px 0;
	}
</style>