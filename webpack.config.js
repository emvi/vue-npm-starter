module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname+'/dist',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					js: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
}
