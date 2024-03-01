const { addWebpackModuleRule, override } = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackModuleRule({
		test: /\.css$/,
		use: [
		  {
			loader: "css-loader",
			options: {
				esModule: true,
				modules: {
					exportLocalsConvention: 'asIs',
					localIdentName: "[local]--[hash:base64:5]",
				}
			},
		  },
		],
	  }))
}