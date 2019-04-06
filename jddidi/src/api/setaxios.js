import axios from 'axios'
import router from '../router'
import store from '../store'

//全局拦截 请求时让header带上token

export default function setAxios(){

	//请求拦截
	axios.interceptors.request.use(
		config => {
			if(store.state.token){
				config.headers.token = store.state.token
			}
			return config
		}
	)

	axios.interceptors.response.use(
		response => {
			if(response.status == 200){
				const data = response.data
				if(data.code == -1){
					//登陆过期
					store.commit('SET_TOKEN', '')
					sessionStorage.removeItem('TOKEN')
					router.replace({ path: '/login' })
				}
				return data
			}
			return response
		}
	)


}
