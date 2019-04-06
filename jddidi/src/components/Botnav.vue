<template>
	<div>
	  <transition :name="transitionName">
	  	<router-view class="router"></router-view>
	  </transition>
	  <cube-tab-bar
	    v-model="selectedLabelDefault"
	    :data="tabs"
	    @click="clickHandler"
	    @change="changeHandler"
	    class="botnav">
	  </cube-tab-bar>
	  <span class="countSum" v-if="countSum">{{countSum}}</span>
	</div>
</template>

<script>
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		data() {
			return {
				transitionName: 'slide-right',
				selectedLabelDefault: '首页',
			    tabs: [{
				        label: '首页',
				        icon: 'cubeic-home'
				      }, {
				        label: '分类',
				        icon: 'cubeic-tag'
				      }, {
				        label: '搜索',
				        icon: 'cubeic-search'
				      }, {
				        label: '购物车',
				        icon: 'cubeic-mall'
				      },{
				        label: '我的',
				        icon: 'cubeic-person'
				      }
				],
				// countSum: 5
			}
		},
		methods: {
			clickHandler(label){
				switch(label){
					case "首页":
					this.$router.push({ path: '/botnav/index' })
					break
					case "分类":
					this.$router.push({ path: '/botnav/class' })
					break
					case "搜索":
					this.$router.push({ path: '/botnav/search' })
					break
					case "购物车":
					this.$router.push({ path: '/botnav/car' })
					break
					case "我的":
					this.$router.push({ path: '/botnav/mine' })
					break
				}
			},
			changeHandler(label){

			}
		},
		computed: {
			...mapGetters(["countSum"])
		},
		created(){
			this.pathLabel = {
				"/botnav/index": "首页",
				"/botnav/class": "分类",
				"/botnav/search": "搜索",
				"/botnav/car": "购物车",
				"/botnav/mine": "我的"
			}
			this.selectedLabelDefault = this.pathLabel[this.$route.path]		
		}
	}
</script>

<style scoped>
	.botnav{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 10;
	}
	.botnav /deep/ .cube-tab div{
		font-size: 16px;
	}
	.botnav /deep/ .cube-tab i{
		font-size: 20px;
	}
	.router{
		transition: all .8s ease;
		position: absolute;
		width: 100%;
	}
	.slide-left-enter,.slide-right-leave-active{
		opacity: 0;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0); /*离开后的位置*/
	}
	.slide-left-leave-active,.slide-right-enter{
		opacity: 0;
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100%, 0); /*进来前的位置*/
	}
	.countSum{
		position: fixed;
		bottom: 33px;
		right: 23%;
		font-size: 14px;
		width: 18px;
		height: 18px;
		line-height: 18px;
		color: #fff;
		border-radius: 50%;
		background-color: red;
		z-index: 20;
	}
</style>