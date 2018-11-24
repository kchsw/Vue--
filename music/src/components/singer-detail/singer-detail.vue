<template>
	<transition name="slide">
		<music-list
		  :title="title"
		  :bg-image="bgImage"
		  :songs="songs"
		></music-list>
	</transition>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getSingerDetail } from 'api/singer'
    import { ERR_OK } from 'api/config'
    import { createSong } from 'common/js/song'
    import MusicList from 'components/music-list/music-list'

	export default{
		name: 'Singer-Detail',
		data(){
			return{
				songs: []
			}
		},
		components:{
			MusicList
	    },
	    computed:{
	    	...mapGetters([
	    		'singer'
	    	]),
	    	title(){
	    		return this.singer.name
	    	},
	    	bgImage(){
	    		return this.singer.avatar
	    	}
	    },
	    created(){
	    	this._getDetail()
	    },
	    methods:{
	    	_getDetail(){
	    		if(!this.singer.id){
	    			this.$router.push('/singer')
	    			return
	    		}
	    		getSingerDetail(this.singer.id).then((res)=>{
	    			if(res.code === ERR_OK){
	    				this.songs = this._normalizeSongs(res.data.list)
	    			}
	    		})
	    	},
	    	_normalizeSongs(list){
	    		let ret = []
	    		list.forEach((item)=>{
	    			let { musicData } = item
	    			ret.push(createSong(musicData))
	    		})
	    		return ret

	    	}
	    }
	}
	
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>