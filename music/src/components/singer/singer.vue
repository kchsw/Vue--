<template>
	<div class="singer">
		
	</div>
</template>

<script>
    import { getSingerList } from 'api/singer'
    import { ERR_OK } from 'api/config'

	export default{
		name: 'Singer',
		data(){
			return{
				singers: []
			}
		},
		created(){
			this._getSingerList()
		},
		methods:{
			_getSingerList(){
				getSingerList().then((res)=>{
					if(res.code === ERR_OK){
						this.singers = res.data.list
					}
				})
			}
		}
	}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

</style>