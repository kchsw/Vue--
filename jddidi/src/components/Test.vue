<template>
	<div>
		<count-to :endVal="endVal" ref="count">
			<span slot="left">时间:</span>
			<span slot="right">秒</span>
		</count-to>
		<button @click="countReset">重置</button>
	</div>
</template>

<script>
	import CountTo from './CountTo'
	export default{
		data(){
			return {
				endVal: 1000
			}
		},
		components: {
			CountTo
		},
		methods: {
			countReset(){
				this.$refs.count.reset()
			}
		}
	}
</script>

<style>
	
</style>