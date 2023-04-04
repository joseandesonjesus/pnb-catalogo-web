import axios from 'axios'

let api = axios.create({
	baseUrl: 'http://159.89.136.103:5003',
})

api.interceptors.request.use(
	config => {
		let obj = {}
		let objLoc = []
		obj = Object.assign({}, config)
		delete obj.adapter
		delete obj.baseURL
		delete obj.headers
		delete obj.maxBodyLength
		delete obj.maxContentLength
		delete obj.timeout
		delete obj.transformRequest
		delete obj.transformResponse
		delete obj.validateStatus
		delete obj.xsrfCookieName
		delete obj.xsrfHeaderName
		delete obj.transitional
		// Do something before request is sent
		return config
	},
	error => {
		// Do something with request error
		return Promise.reject(error)
	},
)

api.interceptors.response.use(
	response => {
		// Do something with response data
		return response
	},
	error => {
		// Do something with response error
		return Promise.reject(error)
	},
)

export default api
