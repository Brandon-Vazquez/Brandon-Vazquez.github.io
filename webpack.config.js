const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/main.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: isProduction ? './' : '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/assets',
            to: 'assets'
          }
        ]
      })
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: 3000,
      open: true
    }
  };
}; 