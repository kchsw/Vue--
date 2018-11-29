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
	import MusicList from 'components/music-list/music-list'
	import { getSongList } from 'api/recommend'
	import { ERR_OK } from 'api/config'
	import { mapGetters } from 'vuex'
	import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'

	export default{
		name: 'Disc',
		data(){
			return{
				songs: []
			}
		},
		computed:{
			...mapGetters([
				'disc'
			]),
			title(){
				return this.disc.dissname
			},
			bgImage(){
				return this.disc.imgurl
			}
		},
		components:{
			MusicList	
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