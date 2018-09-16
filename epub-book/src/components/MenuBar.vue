<template>
	<div class="menu-bar">
		<transition name='slide-up'>
			<div class="menu-wrapper" :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}" v-show='ifTitleAndMenuShow'>
				<div class="icon-wrapper">
					<i class="icon iconfont icon-mulu" @click="showSetting(3)"></i>
				</div>
				<div class="icon-wrapper">
					<i class="icon iconfont icon-progress_icon" @click="showSetting(2)"></i>
				</div>
				<div class="icon-wrapper">
					<i class="icon iconfont icon-liangdu" @click="showSetting(1)"></i>
				</div>
				<div class="icon-wrapper">
					<i class="icon iconfont icon-ziti" @click='showSetting(0)'></i>
				</div>
			</div>
	    </transition>
	    <transition name='slide-up'>
	    	<div class="setting-wrapper" v-show="ifSettingShow">
		    	<div class="setting-font-size"
		    	v-if="showTag === 0"
		    	>
		    		<div class="preview" :style="{fontSize:fontSizeList[0].fontSize + 'px',left:lineWidth/2 + 'px'}">A</div>
		    		<div class="select">
		    			<div class="select-wrapper"
			    		v-for="(item,index) in fontSizeList" 
			    		:key='index'
			    		@click="setFontSize(item.fontSize)"
			    		>
			    			<div class="line" ref="line"></div>
			    			<div class="point-wrapper">
			    				<div class="point"
			    				v-show="defaultFontSize === item.fontSize"
			    				>
			    					<div class="small-point">
			    					</div>
			    				</div>
			    			</div>
			    			<div class="line"></div>
			    		</div>
		    		</div>
		    		<div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length - 1].fontSize + 'px',left:-lineWidth/2 + 'px'}">A</div>
		    	</div>
		    	<div class="setting-theme"
		    	v-else-if="showTag === 1"
		    	>
		    		<div class="setting-theme-item"
		    		v-for="(item, index) in themeList"
		    		:key="index"
		    		@click="setTheme(index)"
		    		>
		    			<div class="preview" :style="{background: item.style.body.background}"
		    			:class="{'border':item.style.body.background === '#fff'}"
		    			></div>
		    			<div class="text"
		    			:class="{'selected': index === defaultTheme}"
		    			>{{item.name}}</div>
		    		</div>
		    	</div>
		    	<div class="setting-progress"
		    	v-else-if="showTag === 2" 
		    	>
		    		<div class="progress-wrapper">
		    			<input class="progress" type="range"
		    			max="100"
		    			min="0"
		    			step="1"
		    			@change="onProgressChange($event.target.value)"
		    			@input="onProgressInput($event.target.value)"
		    			:value="progress"
		    			:disabled="!bookAvailable"
		    			ref="progress"
		    			>
		    		</div>
		    		<div class="text-wrapper">
		    			<span>{{bookAvailable ? progress + "%" : "加载中....."}}</span>
		    		</div>
		    	</div>
		    </div>
	    </transition>
	    <ContentView
	    :ifShowContent="ifShowContent"
	    v-show="ifShowContent"
	    :navigation="navigation"
	    :bookAvailable="bookAvailable"
	    @jumpTo="jumpTo"
	    ></ContentView>
	    <transition name='fade'>
	    	<div class="content-mask"
	    	v-show="ifShowContent"
	    	@click="hideContent"
	    	></div>
	    </transition>
	</div>
</template>

<script>
    import ContentView from "@/components/Content"
	export default{
		components:{
			ContentView
		},
		props:{
			ifTitleAndMenuShow: {
				type: Boolean,
				default: false
			},
			fontSizeList: Array,
			defaultFontSize: Number,
			themeList: Array,
			defaultTheme: Number,
			bookAvailable:{
				type: Boolean,
				default: false
			},
			navigation: Object
		},
		data(){
			return{
				ifSettingShow: true,
				lineWidth:0,
				showTag:0,
				progress:0,
				ifShowContent: false

			}
		},
		methods:{
			hideContent(){
				this.ifShowContent = false
			},
			jumpTo(target){
				this.$emit('jumpTo',target)
			},
			setTheme(index){
				this.$emit('setTheme',index)
			},
			setFontSize(fontSize){
				this.$emit('setFontSize',fontSize)
			},
			showSetting(tag){
				
				this.showTag = tag	
				if(this.showTag === 3){
					this.ifSettingShow = false
					this.ifShowContent = true
				}else{
					this.ifSettingShow = true
				}
			},
			hideSetting(){
				this.ifSettingShow = false
			},
			//拖动进度条时触发事件
			onProgressInput(progress){
				this.progress = progress
				this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
			},
			//进度条松开后触发事件，根据进度条的数值跳转到指定位置
			onProgressChange(progress){
				this.$emit('onProgressChange',progress)
			}

		},
		mounted(){
			this.ifSettingShow = false			
			this.lineWidth = this.$refs.line[0].getBoundingClientRect().width
		}
	}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.menu-bar{
	.menu-wrapper{
		position: absolute;
		bottom:0;
		left: 0;
		width: 100%;
		height: px2rem(48);
		z-index: 101;
		background-color: #fff;
		display: flex;
		box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0,.15);
		&.hide-box-shadow{
			box-shadow: none;
		}
		.icon-wrapper{
			flex: 1;
			@include center;
			.icon-progress_icon{
				font-size: px2rem(16)
			}
			.icon-liangdu{
				font-size: px2rem(26)
			}
		}
    }
	.setting-wrapper{
		position: absolute;
		left: 0;
		bottom: px2rem(48);
		z-index: 101;
		width: 100%;
		height: px2rem(60);
		background-color: #fff;
		box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0,.15);
		.setting-font-size{
			display: flex;
			height: 100%;
			.preview{
				flex: 0 0 px2rem(40);
				position: relative;
				left: 0;
				@include center;
			}
			.select{
				flex: 1;
				@include center;
				.select-wrapper{
					cursor: pointer;
					flex: 1;
					@include center;
					&:first-child{
						.line{
							&:first-child{
								border-top: none;
							}
						}
					}
					&:last-child{
						.line{
							&:last-child{
								border-top: none;
							}
						}
					}
					.line{
						flex: 1;
						height: 0;
						border-top: px2rem(1) solid #ccc;
					}
					.point-wrapper{
						position: relative;
						flex: 0 0 0;
						width: 0;
						height: px2rem(7);
						border-left: px2rem(1) solid #ccc;
						.point{
							position: absolute;
							top: px2rem(-8);
							left: px2rem(-10);
							width: px2rem(20);
							height: px2rem(20);
							border-radius: 50%;
							background-color: #eee;
							border: px2rem(1) solid #ccc;
							box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0,.15);
							@include center;
							.small-point{
								width: px2rem(4);
							    height: px2rem(4);
							    background: #000;
							    border-radius: 50%;
							}
						}
					}
				}
		    }
		}
		.setting-theme{
			height: 100%;
			display: flex;
			.setting-theme-item{
				cursor: pointer;
				flex: 1;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				padding: px2rem(5);
				.preview{
					flex: 1;
					box-sizing: border-box;
					&.border{
						border: px2rem(1) solid #ccc;
					}
				}
				.text{
					flex: 0 0 px2rem(20);
					font-size: px2rem(14);
					color: #999;
					@include center;
					&.selected{
						color: #333;
					}
				}
			}
		}
		.setting-progress{
			position: relative;
			width: 100%;
			height: 100%;
			.progress-wrapper{
				width: 100%;
			    height: 100%;
			    @include center;
			    padding: 0 px2rem(30);
			    box-sizing: border-box;
				.progress{
					width: 100%;
					-webkit-appearance: none;
					height: px2rem(2);
					background: -webkit-linear-gradient(#999,#999) no-repeat, #ddd;
					background-size: 0 100%;
					&:focus{
						outline: none;
					}
					&::-webkit-slider-thumb{
						-webkit-appearance: none;
						height: px2rem(20);
						width: px2rem(20);
						border-radius: 50%;
						background: #fff;
						box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
						border: px2rem(1) solid #ddd;
					}
				}
			}
			.text-wrapper{
				position: absolute;
				left: 0;
				bottom: px2rem(5);
				width: 100%;
				color: #333;
				font-size: px2rem(12);
				text-align: center;
			}
		}
	}
	.content-mask{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 101;
		display: flex;
		background: rgba(51, 51, 51, .8);
	}
}

</style>