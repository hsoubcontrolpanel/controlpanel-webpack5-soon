const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:  {
      'main': './src/index.js',
    },
  
    output: {
      path: path.join(__dirname, "/dist"),
      filename: '[name].js',
    }, 

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 8087,
        writeToDisk: true,
        overlay :true
    },
    

    module: {
        rules: [
    
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              }
            ]
          },

          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader, 
              'css-loader', 
              'postcss-loader',
              'sass-loader'
            ]
          },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({ 
          filename: "index.html",
          template: "./src/index.html",
          chunks: ['main']
        }),

        new MiniCssExtractPlugin({filename: "assets/css/styles.css"}),
        new OptimizeCSSAssetsPlugin({}),
    ]
    
}  