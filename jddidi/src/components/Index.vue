<template>
	<div class="index">
		<div id="banner">
			<cube-slide ref="baner-slide" :data="items" >
			     <cube-slide-item v-for="(item,index) in items" :key="index">
				    <a :href="item.url">
				        <img class="banner-img" :src="item.image">
				    </a>
			    </cube-slide-item>
			</cube-slide>
			<cube-slide ref="class-slide" class="class-slide" :data="lists" :autoPlay="false" :showDots="false">
			     <cube-slide-item v-for="(list,index) in lists" :key="index">
				    <ul class="class-ul">
				    	<li class="class-item" v-for="(item, index) in list" :key="index">
				    		<a :href="item.url" class="class-href">
						        <img class="class-img" :src="item.image">
						        <p class="class-desc">{{item.label}}</p>
						    </a>
				    	</li>
				    </ul>
			    </cube-slide-item>
			</cube-slide>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				items: [],
		        lists: []
			}
		},
		async created(){
			try{
				const bannerdata = await this.$http.get('/api/banner')
				this.items = bannerdata.items
				const classdata = await this.$http.get('/api/class')
				this.lists = classdata.lists
			}catch(err){

			}
		}

	}
</script>

<style scoped>
/*.index{
	height: 100%;
	margin-bottom: 54px;
}*/
.banner-img{
	width: 100%;
}
.class-slide{
	padding-top: 20px;
}
.class-ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.class-item{
	width: 20%;
	padding: 0 10px;
	box-sizing: border-box;
}
.class-img{
	width: 100%;
	border-radius: 50%;
	margin-bottom: 5px;
}
.class-desc{
	font-size: 16px;
	color: #666;
}

</style>