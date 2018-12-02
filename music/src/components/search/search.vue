<template>
	<div class="search">
		<div class="search-box-wrapper">
			<search-box
			  ref="searchBox"
			  @query="onQuertChange"
			></search-box>
		</div>
		<div class="shortcut-wrapper"
		  ref="shortcutWrapper"
		  v-show="!query"
		>
		    <scroll class="shortcut"
		      ref="shortcut"
		    >
		        <div>
		        	<div class="hot-key">
		        		<h1 class="title">热门搜索</h1>
		        		<ul>
		        			<li class="item"
		        			  v-for="item in hotKey"
		        			  @click="addQuery(item.k)"
		        			>
		        				<span>{{item.k}}</span>
		        			</li>
		        		</ul>
		        	</div>
		        	<div class="search-history">
		        		<h1 class="title">
		        			<span class="text">搜索历史</span>
		        			<span class="clear">
		        				<i class="icon-clear"></i>
		        			</span>
		        		</h1>
		        	</div>
		        </div>	
		    </scroll>
		</div>
		<div class="search-result"
		  ref="searchResult"
		  v-show="query"
		>
			<Suggest 
			  :query="query"
			  ref="suggest"
			  @listScroll="bulrInput"
			  @select="saveSearch"
			></Suggest>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
    import SearchBox from 'base/search-box/search-box'
    import Scroll from 'base/scroll/scroll'
    import Suggest from 'components/suggest/suggest'
    import { getHotKey } from 'api/search'
    import { ERR_OK } from 'api/config'
    import { playlistMixin } from 'common/js/mixin'
    import { mapActions } from 'vuex'

	export default{
		mixins: [playlistMixin],
		name: 'Search',
		data(){
			return{
				hotKey: [],
				query: '',
				refreshDelay: 120
			}
		},
		components:{
			SearchBox,
			Scroll,
			Suggest
		},
		methods:{
			handlePlaylist(playlist) {
				const bottom = playlist.length > 0 ? '60px' : ''
				this.$refs.searchResult.style.bottom = bottom
				this.$refs.suggest.refresh()

				this.$refs.shortcutWrapper.style.bottom = bottom
				this.$refs.shortcut.refresh()

			},
			_getHotKey(){
				getHotKey().then((res)=>{
					if(res.code === ERR_OK){
						this.hotKey = res.data.hotkey.slice(0, 10)
					}
				})
			},
			addQuery(item){
				console.log('11')
				this.$refs.searchBox.setQuery(item)
			},
			
			onQuertChange(query){
				this.query = query.trim()
			},
			bulrInput(){
				this.$refs.searchBox.bulr()
			},
			saveSearch(){

			},
			...mapActions([
		        'saveSearchHistory',
		        'deleteSearchHistory',
		        'clearSearchHistory'
		    ])
		},
		created(){
			this._getHotKey()
		}
	}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';

.search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>