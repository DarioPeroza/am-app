const path = require('path');

module.exports = {
  entry: './src/app/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/public'),
  },
  module: {
    rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["css-loader"],
        },
    ],
  },
};