<template>
	<div class="split border-bottom border-top"></div>
</template>

<script>
export default{
	name: 'Split'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.split{
	width: 100%;
	height: 16px;
	border-bottom: 1px solid rgba(7, 17, 27, .1);
	border-top: 1px solid rgba(7, 17, 27, .1);
	background: #f3f5f7;
}
</style>