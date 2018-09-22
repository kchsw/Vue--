<template>
	<transition name="fade">
		<slot></slot> 
	</transition>
</template>

<script>
export default{
	name: 'FadeAnimation'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';

</style>