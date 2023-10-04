<<<<<<< HEAD
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./js/dashboard_main.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
=======
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
<<<<<<< HEAD
        test: /\.(gif|png|jp?g|svg)$/i,
=======
        test: /\.(gif|png|jpe?g|svg)$/i,
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
<<<<<<< HEAD
              bypassOnDebug: true,
              disable: true,
=======
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
>>>>>>> f4345cad4844b5374f7b6a715bbabb5b2d0e84fd
            },
          },
        ],
      },
    ],
  },
};
