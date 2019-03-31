import { loginByUserInfo } from '../api/login'
const actions = {
	Logins({ commit }, info){
		return new Promise((resolve, reject) => {
			let data = {}
			loginByUserInfo.map(item => {
				if(info.username === item.username && parseInt(info.pw) === item.pw){
					commit('SET_USERNAME', item.username)
					commit('SET_ROLE', item.role)
					sessionStorage.setItem('USERNAME', item.username)
					sessionStorage.setItem('ROLE', item.role)
					return data = {username: item.username, role: item.role}
				}else{
					return data
				}
			})
			resolve(data)
		}).catch(error => {
			reject(error)
		})
	},
	Roles({ commit }, newrouter){
		return new Promise((resolve, reject) => {
			commit('SET_NEWROUTER', newrouter)
			resolve(newrouter)
		}).catch(error =>{
			reject(error)
		})
	},
	Logout({ commit, state }){
		return new Promise((resolve, reject) => {
			commit('SET_USERNAME','');
            commit('SET_ROLE','');
            commit('SET_NEWROUTER',[]);
            location.reload();
            sessionStorage.removeItem('USERNAME');
            sessionStorage.removeItem('ROLE');
            resolve();
		}).catch(error => {
			reject(error)
		})
	}
}

export default actions


