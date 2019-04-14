<template>
	<div class="grid">
		<Row :gutter="10">
			<Col span="12">col-12</Col>
        	<Col span="12">col-12</Col>
		</Row>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.grid{
		.ivu-col{
			height: 50px;
			line-height: 50px;
			background: pink;
			background-clip: content-box;
		}
	}
</style>