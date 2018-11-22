<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'Scroll',
		props:{
			probeType:{
				type: Number,
				default: 1
			},
			click:{
				type: Boolean,
				default: false
			},
			data:{
				type: Array,
				default: null
			}
		},
		mounted(){
			setTimeout(()=>{
				this._initScroll()
			},20)
		},
		methods:{
			_initScroll(){
				if(!this.$refs.wrapper){
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper,{
					probeType: this.probeType,
					click: this.click
				})
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			}
		},
		watch:{
			data(){
				setTimeout(()=>{
					this.refresh()
				},20)
			}
		}
	}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';

</style>