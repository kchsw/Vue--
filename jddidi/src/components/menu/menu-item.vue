<template>
	<div class="menu-item"><slot></slot></div>
</template>

<script>
	export default {
		name: 'menu-item'
	}
</script>

<style>
	.menu-item{
		background: rgb(90, 92, 104);
  		color: #fff;
  		height: 15px;
  		line-height: 15px;
	}
</style>