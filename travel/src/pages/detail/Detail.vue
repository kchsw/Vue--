<template>
	<div>
		<detail-banner 
		  :sightName="sightName"
		  :bannerImg="bannerImg"
		  :gallaryImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="categoryList"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default{
	name: 'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data(){
		return{
			sightName: '',
			bannerImg: '',
			gallaryImgs: [],
			categoryList: []
		}
	},
	methods:{
		getDetailInfo(){
			axios.get('/api/detail.json?id=' + this.$route.params.id)
			axios.get('/api/detail.json',{
				params: {
					id: this.$route.params.id
				}
			}).then(this.getDetailInfoSuss)
			// axios.get('/static/mock/detail.json',{
			// 	params: {
			// 		id: this.$route.params.id
			// 	}
			// }).then(this.getDetailInfoSuss)
		},
		getDetailInfoSuss(res){
			var res = res.data
			console.log(res)
			if(res.ret && res.data){
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.categoryList = data.categoryList

			}
		}
	},
	mounted(){
		this.getDetailInfo()
	},
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.content{
	height: 50rem;
}
</style>