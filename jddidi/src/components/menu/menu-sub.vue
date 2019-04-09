<template>
	<div class="menu-sub">
		<div class="menu-sub-title" @click="handleClick">
			<slot name="title"></slot>
			<span class="icon" :style="{ transform: `rotateZ(${showChild ? 0: 180}deg)` }"> ^ </span>
		</div>
		<div class="menu-child" v-show="showChild">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'menu-sub',
		data(){
			return {
				showChild: false
			}
		},
		methods: {
			handleClick(){
				this.showChild = !this.showChild
			}
		}
	}
</script>

<style>
	.menu-sub{
		background-color: rgb(33, 35, 39);
	}
	.menu-sub-title{
		color: #fff;
		position: relative;
		height: 15px;
  		line-height: 15px;
	}
	.icon{
		position: absolute;
		top: 2px;
		right: 10px;
	}
	.menu-child{
		padding-left: 20px;
	}
</style>