<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :hotCities="hotCities" 
		  :cities="cities"
		  :letter="letter"
		  ></city-list>
		<city-alphabet :cities="cities"
		  @change="handleLetterChange"
		></city-alphabet>
	</div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default{
	name: 'City',
	data(){
		return{
			hotCities: [],
			cities: {},
			letter: ''
		}
	},
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	methods:{
		getCityInfo(){
			axios.get('/api/city.json')
			// axios.get('/static/mock/city.json')
			.then(this.getCityInfoSuss)
		},
		getCityInfoSuss(res){
			console.log(res)
			var res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.hotCities = data.hotCities
				this.cities = data.cities
			}
		},
		handleLetterChange(letter){
			this.letter = letter
		}
	},
	mounted(){
		this.getCityInfo()
	},
}
</script>

<style lang='scss' scoped>


</style>