<template>
	<scroll class="suggest"
	  ref="suggest"
	  :data="result"
	  :pullup="pullup"
	  :beforeScroll="beforeScroll"
	  @scrollToEnd="searchMore"
      @beforeScroll="listScroll"
	>
		<ul class="suggest-list">
			<li class="suggest-item"
			  v-for="item in result"
			  @click="selectItem(item)"
			>
				<div class="icon">
					<i :class="getIconCls(item)"></i>
				</div>
				<div class="name">
					<p class="text" v-html="getDisplayName(item)"></p>
				</div>
			</li>
			<loading v-show='hasMore' title=""></loading>
		</ul>
		<div class="no-result-wrapper">
		
	    </div>
	</scroll>
	
</template>

<script>
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import Singer from 'common/js/singer'
    import { search } from 'api/search'
	import { ERR_OK } from 'api/config'
	import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
	import { mapMutations, mapActions } from 'vuex'
	
	const TYPE_SINGER = 'singer'
    const perpage = 20

	export default{
		name: 'Suggest',
		props: {
			showSinger: {
				type: Boolean,
				default: true
			},
			query: {
				type: String,
				default: ''
			}
		},
		data(){
			return{
				page: 1,
				pullup: true,
				beforeScroll: true,
				hasMore: true,
				result: []
			}
		},
		components:{
			Scroll,
			Loading
		},
		methods: {
			selectItem(item){
				if(item.type === TYPE_SINGER){
					const singer = new Singer({
						id: item.singermid,
						name: item.singername
					})
					this.$router.push({
						path: `/search/${singer.id}`
					})
					this.setSinger(singer)
				}
			},
			refresh() {
		        this.$refs.suggest.refresh()
		    },
			search(){
				this.page = 1
				this.hasMore = true
				search(this.query, this.page, this.showSinger, perpage).then((res)=>{
					if(res.code === ERR_OK){
						this._genResult(res.data).then((result)=>{
							this.result = result
						})
						this._checkMore(res.data)
					}
				})
			},
			searchMore(){
				if(!this.hasMore){
					return
				}
				this.page ++
				search(this.query, this.page, this.showSinger, perpage).then((res)=>{
					if(res.code === ERR_OK){
						this._genResult(res.data).then((result)=>{
							this.result = this.result.concat(result)
						})
						this._checkMore(res.data)
					}
				}) 

			},
			_checkMore(data){
				const song = data.song
				if(!song.list.length || (song.curnum + (song.curpage - 1) * perpage) >= song.totalnum){
					this.hasMore = false
				}
			},
			listScroll(){
				this.$emit('listScroll')
			},
			_normalizeSongs(list) {
		        let ret = []
		        list.forEach((musicData) => {
		            if (isValidMusic(musicData)) {
		                ret.push(createSong(musicData))
		            }
		        })
		        return ret
		    },
			_genResult(data){
				let ret = []
				if(data.zhida && data.zhida.singerid && this.page === 1){
					ret.push({...data.zhida, ...{type: TYPE_SINGER}})
				}
				return processSongsUrl(this._normalizeSongs(data.song.list)).then((songs) => {
			        ret = ret.concat(songs)
			        return ret
		        })

			},
			getIconCls(item){
				if(item.type === TYPE_SINGER){
					return 'icon-mine'
				}else{
					return 'icon-music'
				}
			},
			getDisplayName(item){
				if(item.type === TYPE_SINGER){
					return item.singername
				}else{
					return `${item.name}-${item.singer}`
				}
			},
			...mapMutations({
		        setSinger: 'SET_SINGER'
		    }),
			
		},
		watch: {
			query(newQuery){
				if(!newQuery){
					return
				}
				this.search(newQuery)
			}
		}

	}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>