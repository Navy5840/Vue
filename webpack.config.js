const path = require("path") // node.js里面的基本包， 处理路径
const webpack = require("webpack")
const HTMLPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === "development"

// __dirname 表示文件相对于工程的路径
module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new VueLoaderPlugin(),
		new HTMLPlugin()
	],
	mode: "none",
	module: {
		rules: [
			{
				// 处理 vue
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				// css 的处理方式不同， 这里用 use 来声明， 处理css
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// 处理图片
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options:{
							limit: 1024*20,
							name: '[name]-aaa.[ext]'
						}
					}
				]
			}, 
			// 处理styl
			{
				test: /\.styl$/,
				use: [
					"style-loader",
					"css-loader",
					"stylus-loader"
				]
			}
		]
	}
}

// 开发环境
if(isDev){
	devSerer = {
		port: 8888,
		host: '0.0.0.0',
		overlay: {
			erros: true
		}
	}
}