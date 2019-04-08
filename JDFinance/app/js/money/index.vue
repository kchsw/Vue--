<template lang="html">
    <div>
    	<money-slider/>
    	<advert :img="advertImgs[0]"></advert>
    	<money></money>
    	<advert :img="advertImgs[1]"></advert>
    	<finance></finance>
    	<advert :img="advertImgs[2]"></advert>
    	<jd-footer></jd-footer>
    	
    </div>
</template>

<script>
import jdFooter from "../public/footer"
import MoneySlider from "./moneySlider"
import Advert from "./advert"
import Money from "./money"
import Finance from "./finance"
// import Life from "./Life"

export default {
	data(){
		return {
			advertImgs: [
				'//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270',
				"//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240",
				"//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"
			]
		}
	},
	components: {
		MoneySlider,
		jdFooter,
		Advert,
		Money,
		Finance
	}
}
</script>

<style lang="scss" module>
  
</style>
