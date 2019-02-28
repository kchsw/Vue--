<template>
	<div class="recommend" ref="recommend">
		<scroll class="recommend-content" :data="discList" ref="scroll">
            <div>
    			<div class="slider-wrapper" v-if="recommends.length">
    				<div class="slider-content">
    					<slider ref="slider">
    						<div v-for="item in recommends">
    							<a :href="item.linkUrl">
    								<img :src="item.picUrl" @load="loadImage">
    							</a>
    						</div>
    					</slider>
    				</div>
    			</div>
    			<div class="recommend-list">
    				<h1 class="list-title">热门歌单推荐</h1>
    				<ul>
    					<li class="item" 
                          v-for="item in discList"
                          @click="selectdisc(item)"
                        >   
                            <div class="content">
                                <div class="icon">
                                    <img v-lazy="item.imgurl" width="60" height="60">
                                </div>
                                <div class="text">
                                    <h2 class="name" v-html="item.creator.name"></h2>
                                    <p class="desc" v-html="item.dissname"></p>
                                </div>
                            </div>
                            
                        </li>
    				</ul>
    			</div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <loading/>
            </div>
		</scroll>
        <router-view></router-view>
	</div>
</template>

<script>  
    import Slider from 'base/slider/slider'
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import { getRecommend,getDiscList } from 'api/recommend'
    import { ERR_OK } from 'api/config'
    import { playlistMixin } from 'common/js/mixin'
    import { mapMutations } from 'vuex'


	export default{
        mixins: [playlistMixin],
		name: 'Recommend',
		data(){
			return{
				recommends:[],
                discList: []
			}
		},
		components:{
			Slider,
            Scroll,
            Loading
		},
		created(){
			this._getRecommend()
            this._getDiscList()
		},
		methods:{
            handlePlaylist(playlist){
                const bottom = playlist.length > 0 ? '60px' : 0
                this.$refs.recommend.style.bottom = bottom
                this.$refs.scroll.refresh()
            },
			_getRecommend(){
				getRecommend().then((res)=>{
					if(res.code === ERR_OK){
						this.recommends = res.data.slider
					}
				})
			},
            _getDiscList(){
                getDiscList().then((res)=>{
                    if(res.code === ERR_OK){
                        this.discList = res.data.list
                    }
                })
            },
            loadImage(){
                if(!this.checkloaded){
                    this.checkloaded = true
                    setTimeout(()=>{
                        this.$refs.scroll.refresh()
                    },20)
                }
            },
            selectdisc(item){
                this.$router.push({
                    path: `/recommend/${item.dissid}`
                })
                this.setDisc(item)
            },
            ...mapMutations({
                setDisc: 'SET_DISC'
            })
		}
	}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .content
            display: flex
            width: 100%
            background: $color-list-background 
            .icon
              flex: 0 0 60px
              width: 60px
              padding-right: 20px
            .text
              display: flex
              flex-direction: column
              justify-content: center
              flex: 1
              line-height: 20px
              overflow: hidden
              font-size: $font-size-medium
              .name
                margin-bottom: 10px
                color: $color-text
              .desc
                color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>