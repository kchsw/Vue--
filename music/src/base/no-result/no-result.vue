<template>
	<div class="no-result">
	    <div class="no-result-icon"></div>
	    <p class="no-result-text">{{title}}</p>
	</div>
</template>

<script>
	export default{
		name: 'NoResult',
		props: {
			title: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.no-result
    text-align: center
    .no-result-icon
      width: 120px
      height: 79px
      margin: 0 auto
      bg-image-n('no-result')
      background-size: 120px 79px
    .no-result-text
      margin-top: 30px
      font-size: $font-size-medium
      color: $color-text-d
</style>