/**
 * Created by Administrator on 2019/11/07
 * 上传到服务器
 */
//  图片base_url
import {uploadImage} from '@/utils/api/api'
export default {
	upload: function (e, func_s, func_f) {
		// console.log(e.file);
		let formData = new FormData()
		formData.append('file', e.file)
		uploadImage(formData,(data) => {
			if (data.errorCode === 0){
				let url = process.env.VUE_APP_Img + data.data.url
				func_s(url);
			} else {
				func_f(data.msg);
			}
		})
	}
}
