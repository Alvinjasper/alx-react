<<<<<<< HEAD
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	plugins: [
		new HTMLWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
		],
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
	},
	performance: {
		maxAssetSize: 1000000,
	},  
  module: {
	rules: [
		{
			test: /\.css$/i,
			use: ["css-loader", "style-loader"],
		},
		{
			test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
			type: 'asset/resource',
			use: [
				"file-loader",
				{
					loader: "image-webpack-loader",
					options: {
							bypassingOnDebug: true,
							disable: true,
					},
				},
			],
		},
	],
},
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  performance: {
    maxAssetSize: 1000000,
    hints: false,
    maxEntrypointSize: 1000000,
  },
  plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin() ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
};
