<template lang="html">
    <div>
    	<home-slider></home-slider>
    	<novice></novice>
    	<borrow></borrow>
    	<money></money>
    	<products></products>
    	<life></life>
    	<jd-footer></jd-footer>
    </div>
</template>

<script>
import jdHeader from "../public/header"
import jdFooter from "../public/footer"
import HomeSlider from "./homeSlider"
import Novice from "./novice"
import Borrow from "./borrow"
import Money from "./money"
import Products from "./products"
import Life from "./Life"

export default {
	components: {
		jdHeader,
		HomeSlider,
		Novice,
		Borrow,
		Money,
		Products,
		Life,
		jdFooter
	}
}
</script>

<style lang="scss" module>
  
</style>
