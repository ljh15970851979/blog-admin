/*
* 阿里云oss签名
 */

import axios from 'axios'
import {
	ossToken,
	ossImage
} from '@/utils/api/api'


export default {
	// 阿里云oss签名前端直传
	uploadOss: async function (file, cb, errorcb) {
		await ossToken((data) => {
			if (data.errorCode === 0) {
				// console.log(data.data)
				console.log(file)
				let ossInfo = data.data
				let type = file.file.type.split('/')
				// url名字 host + startsWith + filename url名字
				let url = ossInfo.host + '/' + ossInfo.startsWith + ossInfo.saveFileName + '.' + type[1]
				let param = new FormData() // 创建form对象
				// param.append('name', file.file.name) // 通过append向form对象添加数据
				param.append('key', ossInfo.startsWith + ossInfo.saveFileName + '.' + type[1])
				param.append('policy', ossInfo.policy)
				param.append('OSSAccessKeyId', ossInfo.OSSAccessKeyId)
				param.append('success_action_status', 200)
				param.append('signature', ossInfo.signature)
				param.append('file', file.file, ossInfo.saveFileName) // 通过append向form对象添加数据
				// console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
				let config = {
					headers: {'Content-Type': 'multipart/form-data',}
				}
				// // 添加请求头
				axios.post(ossInfo.host, param, config)
					.then(response => {
						// console.log('上传成功')
						// console.log(response, '999999')
						// console.log(url)
						cb(url)
					})
			} else {
				errorcb(data.msg)
			}

		})
	},
	// 阿里云oss服务器转发上传
	uploadFile: function (e, func_s, func_f) {
		// console.log(e.file);
		let formData = new FormData()
		formData.append('file', e.file)
		ossImage(formData,(data) => {
			if (data.errorCode === 0){
				console.log(data)
				// let url = process.env.VUE_APP_Img + data.data.url
				func_s(data.data.url);
			} else {
				func_f(data.msg);
			}
		})
	}
}
