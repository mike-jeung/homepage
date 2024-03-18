const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
  },
};
/*
  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
      rules: {[
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      ]},
      {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    }
  
  };
*/
