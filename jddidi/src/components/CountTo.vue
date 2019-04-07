<template>
	<div>
		<slot name='left'></slot><span :id="eleId" :class="counterClass" ref="count"></span><slot name='right'></slot>
	</div>
</template>

<script>
	import CountUp from 'countup'
	export default{
		name: 'counter',
		data(){
			return {
				counter: {}
			}
		},
		computed: {
			eleId(){
				return `count_up_${this._uid}`
			},
			counterClass(){
				return [
					'count-to-number',
					this.className
				]
			}
		},
		props: {
			//起始值
			startVal: {
				type: Number,
				default: 0
			},
			//终值
			endVal: {
				type: Number,
				required: true
			},
			//小数点保留几位小数
			decimals: {
				type: Number,
				default: 0
			},
			//延时时间
			delay: {
				type: Number,
				default: 0
			},
			//渐变时长
			duration: {
				type: Number,
				default: 1
			},
			//是否使用变速效果
			useEasing: {
				type: Boolean,
				default: false
			},
			//是否使用变速效果
			useGrouping: {
				type: Boolean,
				default: true
			},
			//分组符号
			separator: {
				type: String,
				default: ','
			},
			//整数和小数的分割符号
			decimal: {
				type: String,
				default: '.'
			},
			className: {
				type: String,
				default: ''
			}
		},
		watch: {
			endVal(newVal, oldVal){
				this.counter.update(newVal)
			}
		},
		methods: {
			getCount(){
				return this.$refs.count.innerText
			},
			emitEndEvent(){
				setTimeout(() => {
					this.$nextTick(() => {
						this.$emit('on-animation-end', Number(this.getCount()))
					})
				}, this.duration * 1000 + 5)
			},
			reset(){
				this.counter.reset()
				this.counter.start()
			}
		},
		mounted(){
			this.$nextTick(() => {
				this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
					useEasing: this.useEasing,
					useGrouping: this.useGrouping,
					separator: this.separator,
					decimal: this.decimal
				})
				setTimeout(() => {
					this.counter.start()
				}, this.delay)
			})
		}

	}
</script>

<style>
	.count-to-number{
		color: pink;
	}
</style>