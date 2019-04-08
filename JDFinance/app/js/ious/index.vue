<template lang="html">
    <div>
    	<ious-slider/>
    	<welfare/>
    	<serve/>
    	<jd-footer></jd-footer>
    	
    </div>
</template>

<script>
import jdFooter from "../public/footer"
import IousSlider from "./iousSlider"
import Serve from "./serve"
import Welfare from "./welfare"

export default {
	data(){
		return {
		}
	},
	components: {
		IousSlider,
		jdFooter,
		Serve,
		Welfare
	}
}
</script>

<style lang="scss" module>
  
</style>
