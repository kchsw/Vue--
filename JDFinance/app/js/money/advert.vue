<template>
	<panel class="panel">
		<section class="content">
			<img :src="img" alt="">
		</section>
	</panel>
</template>

<script>
	import Panel from "../core/panel"
	export default {
		components: {
			Panel
		},
		props: {
			img: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../css/element.scss";
	.panel /deep/ h4{
		display: none;
	}
	.content{
        img{
        	width: 100%;
        	// height: 230px;
        	display: block;
        }
    }
</style>