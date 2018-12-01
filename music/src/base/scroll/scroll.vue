<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	const DIRECTION_H = 'horizontal'
    const DIRECTION_V = 'vertical'

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
			},
			listenScroll:{
				type: Boolean,
				default: false
			},
			pullup:{
				type: Boolean,
				default: false
			},
			refreshDelay: {
				type: Number,
				default: 20
			},
			beforeScroll:{
				type: Boolean,
				default: false
			},
			direction:{
				type: String,
				default: DIRECTION_V
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
					click: this.click,
					eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
				})
				if(this.listenScroll){
					this.scroll.on('scroll',(pos)=>{
						this.$emit('scroll',pos)
					})
				}
				if(this.pullup){
					this.scroll.on('scrollEnd', ()=>{
						//快滚到底了  maxScrollY 、scroll.y 是负值
						if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
							this.$emit('scrollToEnd')
						}
					})
				}
				if(this.beforeScroll){
					this.scroll.on('beforeScrollStart', ()=>{						
						this.$emit('beforeScroll')
					})
				}
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			},
			scrollTo(){
				this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
			},
			scrollToElement(){
				this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
			},
			disable(){
				this.scroll && this.scroll.disable()
			},
			enable(){
				this.scroll && this.scroll.enable()
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