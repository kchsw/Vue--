<template>
	<div class="split-pane-wrapper" ref="outer">
		<div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
			<slot name="left"></slot>
		</div>
		<div class="pane-trigger-con" :style="{ width: `${this.triggerWidth}px`,  left: triggerLeft}" @mousedown="handleMouseDown"></div>
		<div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }">
			<slot name="right"></slot>
		</div>
	</div>
</template>	

<script>
	export default {
		name: 'splitpane',
		data() {
			return {
				canMove: false,
				initOffset: 0
			}
		},
		props: {
			value: {
				type: Number,
				default: 0.5
			},
			triggerWidth: {
				type: Number,
				default: 4
			},
			min: {
				type: Number,
				default: 0.1
			},
			max: {
				type: Number,
				default: 0.9
			},

		},
		computed: {
			leftOffsetPercent(){
				return `${this.value * 100}%`
			},
			triggerLeft(){
				return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
			}
		},
		methods: {
			handleMouseDown(event){
				document.addEventListener('mousemove', this.handleMouseMove)
				document.addEventListener('mouseup', this.handleMouseUp)
				this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
				this.canMove = true
			},
			handleMouseMove(event){
				if(!this.canMove) return
				const outerRect = this.$refs.outer.getBoundingClientRect()
				// let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
				let offsetPercent = Math.max(this.min, Math.min(this.max, (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width))
				this.$emit('update:value', offsetPercent)
			},
			handleMouseUp(){
				this.canMove = false
				document.removeEventListener('mousemove', this.handleMouseMove)
				document.removeEventListener('mouseup', this.handleMouseUp)
			}
		}
	}
</script>

<style>
	.split-pane-wrapper{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.pane{
		position: absolute;
		height: 100%;
		top: 0;
	}
	.pane-left{
		/*width: 30%;*/
		background: palevioletred;
	}
	.pane-right{
		top: 0;
		bottom: 0;
		/*left: 30%;*/
		right: 0;
		background: paleturquoise;
	}
	.pane-trigger-con{
		height: 100%;
		background-color: red;
		position: absolute;
		top: 0;
		z-index: 10;
		user-select: none;
		cursor: col-resize;
	}

</style>
