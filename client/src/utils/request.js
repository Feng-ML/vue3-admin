import axios from 'axios'
// import qs from 'qs'
// import Vue from 'vue'

const service = axios.create({
	baseURL: process.env.VUE_APP_REQUEST_URL, // api 的 base_url
	timeout: 15000,
})
// const vm = new Vue()

// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 拦截请求头
service.interceptors.request.use(
	config => {
		// const userInfo = lenUtils.getStorage('YunUserInfo', 'localStorage')
		// if (userInfo) {
		// 	const { access_token } = userInfo
		// 	config.headers['Blade-Auth'] = "bearer " + access_token
		// }
		// config.headers['Authorization'] = process.env.VUE_APP_AUTHORIZATION
		// if (config.method === 'POST' || config.method === 'DELETE') {
		// 	config.data = qs.stringify(config.data)
		// }
		return config
	},
	error => {
		Promise.reject(error)
	},
)
// 拦截实体
service.interceptors.response.use(
	response => {
		if (response.data.code === 400) {

		}
		return response.data

	},
	error => {
		if (error.response.status === 400) {

		} else if (error.response.status === 401 || error.response.data.code === 401) {

		} else {

		}

		return Promise.reject(error)
	},
)

export default service
