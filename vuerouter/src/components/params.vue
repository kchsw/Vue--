
<template>
	<div>
		<h1>通过Url传递参数</h1>
		<h2>{{msg}}</h2>
		<p>newsId:{{ $route.params.newsId }}</p>
		<p>newsTitle:{{ $route.params.newsTitle }}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'params page'
			}
		}
	}
</script>

