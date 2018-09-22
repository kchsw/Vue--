<template>
	<div>
		<router-link class="header-abs"
		  tag="div" 
		  to="/" 
		  v-show="showAbs"
		  >
			<i class="icon iconfont icon-fanhui"></i>
		</router-link>
		<div class="header-fixed" 
		  v-show="!showAbs"
		  :style="opacityStyle"
		>
			景点详情
			<router-link to="/">
				<div class="header-fixed-back">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default{
	name: 'DetailHeader',
	data(){
		return{
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods:{
		handleScroll(){
			const top = document.documentElement.scrollTop
			if(top > 60){
				let opacity = top /140
				opacity > 1? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			}else{
				this.showAbs = true
			}
		}
	},
	mounted(){
		window.addEventListener('scroll',this.handleScroll)
	},
	unmounted(){
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.header-abs{
	position: absolute;
	left: .2rem;
	top: .2rem;
	width: .8rem;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	border-radius: .4rem;
	background: rgba(0, 0, 0, .8);
	.icon-fanhui{
		color: #fff;
		font-size: .4rem;
	}
}
.header-fixed{
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	height: .86rem;
	line-height: .86rem;
	text-align: center;
	color: #fff;
	background: $bgColor;
	.header-fixed-back{
		position: absolute;
		left: 0;
		top: 0;
		width: .64rem;
		text-align: center;
		color: #fff;
		.icon-fanhui{
			font-size: .4rem;
		}
	}
}
</style>