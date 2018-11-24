<template>
	<transition name="slide">
		
	</transition>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getSingerDetail } from 'api/singer'
    import { ERR_OK } from 'api/config'
    import { createSong } from 'common/js/song'

	export default{
		name: 'Singer-Detail',
		data(){
			return{
				songs: []
			}
		},
		components:{

	    },
	    computed:{
	    	...mapGetters([
	    		'singer'
	    	])
	    },
	    created(){
	    	this._getDetail()
	    },
	    methods:{
	    	_getDetail(){
	    		getSingerDetail(this.singer.id).then((res)=>{
	    			if(res.code === ERR_OK){
	    				console.log(res)
	    				this.songs = this._normalizeSongs(res.data.list)
	    			}
	    		})
	    	},
	    	_normalizeSongs(list){
	    		let ret = []
	    		console.log(list)
	    		list.forEach((item)=>{
	    			let { musicData } = item
	    			ret.push(createSong(musicData))
	    		})
	    		console.log(ret)
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