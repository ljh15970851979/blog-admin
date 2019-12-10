/* eslint-disable */
import axios from 'axios'

let BASE_URL = process.env.VUE_APP_API;
// axios.defaults.baseURL = BASE_URL;
axios.defaults.baseURL = '/api/api/v1/';

// axios.defaults.withCredentials = true;

axios.defaults.timeout = 30000;

// // 验证 方法 'Basic ' + Base64.encode('Username:' + token + 'Password:')
// axios.defaults.headers.common['Authorization'] = token;


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const post = (apiURL, params, resolve, reject) => {
	// 设置token的验证
	let token = localStorage.getItem("User_token") ? localStorage.getItem("User_token") : '';

	axios({
		method: 'POST',
		url: apiURL,
		data: params,
		auth: {
			username: token,
			password: ''
		}
	})
		.then(({data = response.data}) => {


			let resolve_data = data
			if (resolve_data.errorCode === 30) {
				// token 过期
				window.$router.push({path: '/login'})
			}

			resolve(resolve_data);
			console.info("%c%s", "color:#347dfd;", "请求参数: ", params);
			console.log("%c%s", "color:#5cb85c;", "响应成功：返回的DATA--->" + '接口：' + apiURL, data);
		})
		.catch(function (error) {

			if (reject) {
				reject(error);
			} else {
				console.log(error);

				console.log("%c%s", "color:#d9534f;", "响应错误------接口：", apiURL);
			}
		});
};

const from = (apiURL, params, resolve, reject) => {
	// console.log(apiURL,data)
	// console.log('11111')
	// 设置token的验证
	let token = localStorage.getItem("User_token") ? localStorage.getItem("User_token") : '';

	axios({
		method: 'POST',
		url: apiURL,
		data: params,
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		auth: {
			username: token,
			password: ''
		}
	})
		.then(({data = response.data}) => {


			let resolve_data = data
			if (resolve_data.errorCode === 30) {
				// token 过期
				window.$router.push({path: '/login'})
			}

			resolve(resolve_data);
			console.info("%c%s", "color:#347dfd;", "请求参数: ", params);
			console.log("%c%s", "color:#5cb85c;", "响应成功：返回的DATA--->" + '接口：' + apiURL, data);
		})
		.catch(function (error) {

			if (reject) {
				reject(error);
			} else {
				console.log(error);

				console.log("%c%s", "color:#d9534f;", "响应错误------接口：", apiURL);
			}
		});
};

export default {
	post,
	from
};
