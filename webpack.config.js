const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
  mode: "production",

  entry: {
    "iconix": "./src/index.js",
    "iconix.min": "./src/index.js",
  },
  output: {
    library: "IconIx",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {

        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                minimize: false,
                outputStyle: "expanded",
              },
            }
          }

        ],
      },
    ],
  },
  optimization: {

    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/
      }),
      new CssMinimizerPlugin({
        test: /\.min\.css$/
      }),
    ],

  },
};
