<template lang="html">
    <div>
    	<raise-slider></raise-slider>
    	<daily/> 
    	<in/>
    	<more/>
    	<jd-footer></jd-footer>
    </div>
</template>

<script>
import jdFooter from "../public/footer"
import RaiseSlider from "./raiseSlider"
import Daily from "./daily"
import In from "./in"
import More from "./more"

// import Welfare from "./welfare"

export default {
	data(){
		return {
		}
	},
	components: {
		jdFooter,
		RaiseSlider,
		Daily,
		In,
		More
		// Welfare
	}
}
</script>

<style lang="scss" module>
  
</style>