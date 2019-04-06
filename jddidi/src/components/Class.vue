<template>
	<div class="panelbox">
		<cube-scroll ref="left-panel" class="left-panel">
			<ul>
				<li
				  v-for="(item, index) in tabslabel"
				  :key="index"
				  :class="{active: currentIndex == index}"
				  @click="selectClass(index)"
				>
					{{item.label}}
				</li>
			</ul>
		</cube-scroll>
		<cube-scroll ref="right-panel" class="right-panel">
			<ul>
				<li
				  v-for="(item, index) in tags"
				  :key="index"
				>
					<img :src="item.image" class="panel-img">
					<p>{{item.label}}<i class="cubeic-add" @click="addToCart($event,item)"></i></p>
				</li>
			</ul>
		</cube-scroll>
		<div class="ball-wrap">
			<transition
				@before-enter="beforeEnter"
				@enter="enter"
				@afterEnter="afterEnter"
			>
				<div class="ball" v-show="ball.show">
					<div class="inner">
						<i class="cubeic-add"></i>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				ball: {
					show: false,
					el: ''
				},
				currentIndex: 0,
				tabslabel:[
	                {
	                    label:'热门推荐',
	                    active:true
	                },
	                {
	                    label:'手机数码',
	                    active:false
	                },
	                {
	                    label:'家用电器',
	                    active:false
	                },
	                {
	                    label:'家用空调',
	                    active:false
	                },
	                {
	                    label:'电脑产品',
	                    active:false
	                },
	                {
	                    label:'计生情趣',
	                    active:false
	                },
	                {
	                    label:'美妆护肤',
	                    active:false
	                },
	                {
	                    label:'口红',
	                    active:false
	                },
	                {
	                    label:'手袋',
	                    active:false
	                },
	                {
	                    label:'金银财宝',
	                    active:false
	                },
	                {
	                    label:'手机数码',
	                    active:false
	                },
	                {
	                    label:'手机数码',
	                    active:false
	                },
	                {
	                    label:'金银财宝',
	                    active:false
	                },
	                {
	                    label:'手机数码',
	                    active:false
	                },
	                {
	                    label:'手机数码',
	                    active:false
	                },
                ] ,
                tags: []
			}
		},
		methods: {
			selectClass(index){
				this.currentIndex = index
				this.getClassify(index)
			},
			async getClassify(index){
				const result = await this.$http.get('/api/classify', { params: { type: index } })
				this.tags = result.data
			},
			addToCart(e,item){
				if(this.$store.state.token){
					this.$store.commit('SET_CART', item)
				    this.ball.el = e.target
				    this.ball.show = true
				}else{
					this.$router.push({ path:'/login', query: {redirect: this.$route.path} })
				}
				
			},
			beforeEnter(el){
				
				const dom = this.ball.el
				const rect = dom.getBoundingClientRect()
				const x = rect.left - window.innerWidth * 0.7
				const y = -(window.innerHeight - rect.top)
				console.log(`${x}-${y}`)
				console.log(el)
				el.style.display = ''
				el.style.transform = `translate3d(0, ${y}px, 0)`
				const inner = el.querySelector('.inner')
				inner.style.transform = `translate3d(${x}px, 0, 0)`
				
			},
			enter(el, done){
				document.body.offsetHeight //触发重绘
				el.style.transform = `translate3d(0, 0, 0)`
				const inner = el.querySelector('.inner')
				inner.style.transform = `translate3d(0, 0, 0)`
				el.addEventListener('transitionend', done)

			},
			afterEnter(el){
				console.log('1')
				this.ball.show = false
				el.style.display = 'none'

			}
		},
		created(){
			this.getClassify(0)
		}
	}
</script>

<style scoped>
	.ball-wrap .ball{
		position: fixed;
		left: 68%;
		bottom: 10px;
		z-index: 30;
		color: red;
		transition: all 1s cubic-bezier(0.49,-0.29,0.75,0.41);
	}
	.inner{
		width: 16px;
		height: 16px;
		transition: all 1s linear;	
	}
	.panelbox{
		position: absolute;
		top: 30px;
		bottom: 54px;
		display: flex;
	}
	.left-panel{
		width: 30%;
	}
	.left-panel li{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #ccc;
		color: #333;
		background-color: #f8f8f8;
		font-size: 14px;
	}
	.left-panel li:last-child{
		border: none;
	}
	li.active{
		background-color: #fff;
		color: #e93b3d;
	}
	.right-panel{
		width: 70%;

	}
	.right-panel ul{
		display: flex;
		flex-wrap: wrap;
	}
	.right-panel ul li{
		width: 50%;
		font-size: 15px;
	}
	.panel-img{
		width: 80px;
		height: 80px;
	}
	i{
		font-size: 20px;
		vertical-align: middle;
	}
</style>
