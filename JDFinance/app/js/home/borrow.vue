<template>
	<panel title="急速借贷" class="panel">
		<section class="content">
			<router-link :to="{ name: 'home' }">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
			</router-link>
		</section>	
	</panel>
</template>

<script>
	import Panel from "../core/panel"
	export default{
		components: {
			Panel
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.panel{
		.content{
			padding-bottom: 40px;
			img{
				display: block;
				width: 100%;
			}
		}
	}
</style>