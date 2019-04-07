//axios 二次封装
import axios from 'axios'
cosnt BASE_URL = process.env.NODE_ENV === 'production' 
?	'http://production.com' 
:   'http://localhost: 8080'

class HttpRequest {
	constructor (baseUrl = baseURL) {
	    this.baseUrl = baseUrl
	    this.queue = {}
	}
	getInsideConfig () {
	    const config = {
			baseURL: this.baseUrl,
			headers: {
			    //
			}
		}
	    return config
	}
	distroy (url) {
	    delete this.queue[url]
	    if (!Object.keys(this.queue).length) {
	      // Spin.hide()
	    }
	}
	interceptors (instance, url) {
	    instance.interceptors.request.use(config => {
	        // 添加全局的loading...
	        if (!Object.keys(this.queue).length) {
	        // Spin.show()
	        }
	        this.queue[url] = true
	        return config
	    }, error => {
	        return Promise.reject(error)
	    })
	    instance.interceptors.response.use(res => {
	        this.distroy(url) 
	        const { data, status } = res
	        return { data, status }
	    }, error => {
	        this.distroy(url) 
	        return Promise.reject(error)
	    })
	}
	request (options) {
	    const instance = axios.create()
	    options = Object.assign(this.getInsideConfig(), options)
	    this.interceptors(instance, options.url)
	    return instance(options)
	}
}