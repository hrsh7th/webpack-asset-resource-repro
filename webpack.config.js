const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PROJECT_DIR = path.resolve(__dirname, './project')
const SRC_DIR = path.resolve(PROJECT_DIR, './src');
const DIST_DIR = path.resolve(PROJECT_DIR, './dist');

module.exports = {
  mode: 'production',
  cache: true,
  entry: {
    example: path.resolve(PROJECT_DIR, './src/example.css')
  },
  output: {
    path: path.resolve(PROJECT_DIR, './dist/css/bundle')
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
        ]
      }, {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: (pathdata) => {
            return path.join('../../img/bundle/', pathdata.module.resource.replace(SRC_DIR, ''));
          },
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
