let path = require('path');
const webpack = require('webpack')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	//部署应用包时的基本 URL
	// publicPath: '././',
	publicPath: process.env.NODE_ENV === 'production' ? '././' : '',
	chainWebpack: config => {
		//设置别名
		config.resolve.alias
			.set('@', resolve('src'));
	},
	devServer: {
		// 设置主机地址
		host: 'localhost',
		// 设置默认端口
		port: 8080,
		proxy: {
			// 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置
			'/api': {
				// 代理地址
				target: 'http://lizhch.cn:3000',
				// 如果是https接口，需要配置这个参数
				secure: false,
				ws: true,
				// 可否跨域
				changeOrigin: true,
				pathRewrite: {
					// 重写接口，去掉/api
					'^/api': ''
				}
			}
		}
	},
	//定义scss全局变量
	css: {
		loaderOptions: {
			stylus: {
				data: `@import "@/assets/css/global.styl";`
			}
		}
	},
	configureWebpack: {
		// 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
		externals: {
			'BMap': 'BMap',
			'BMap_Symbol_SHAPE_POINT': 'BMap_Symbol_SHAPE_POINT'
		},
		plugins: [
			new webpack.ProvidePlugin({
				'window.Quill': 'quill/dist/quill.js',
				'Quill': 'quill/dist/quill.js'
			})
		]
	}
}
