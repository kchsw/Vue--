<template>
	<div class="header">
		<div class="icon"></div>
		<h1 class="text"></h1>
		<router-link
		  class="mine"
		  tag="div"
		  to="/user"
		>
			<i class="icon-mine"></i>
		</router-link>
	</div>
</template>

<script>
	export default{
		name: 'Header'
	}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';

.header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    background: $color-background-h
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 126px
      height: 35px
      margin-right: 9px
      bg-image-h('logo')
      background-size: 126px 35px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-text-h

</style>