<template>
  <div id="app">
    <sell-header :seller="seller"></sell-header>
    <div class="tab border-bottom">
    	<router-link class="tab-item"
    	  tag="div"
    	  to="/goods"
    	>商品</router-link>
    	<router-link class="tab-item"
    	  tag="div"
    	  to="/ratings"
    	>评论</router-link>
    	<router-link class="tab-item"
    	  tag="div"
    	  to="/seller"
    	>商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import SellHeader from "@/components/Header/SellHeader"
export default {
  name: 'App',
  data() {
  	return {
  		seller: {}
  	}
  },
  components: {
  	SellHeader
  },
  methods: {
  	getSellData(){
			axios.get('/api/data.json')
			.then(this.getSellDataSuss)
		},
		getSellDataSuss(res){
			if(res.status === 200){
				const data = res.data
				this.seller = data.seller
				console.log(this.seller)
			}
		}
  },
  mounted(){
  	this.getSellData()
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
#app >>> .border-bottom{
	border-color: rgba(7, 17, 27, 0.1);
}
#app{
	.tab{
		display: flex;
		.tab-item{
			width: 100%;
			height: 40px;
			line-height: 40px;
			flex: 1;
			font-size: 14px;
			color: rgb(77, 85, 93);
			text-align: center;
			&.active{
				color: rgb(240, 20, 20);
			}
		}
	}
}
</style>