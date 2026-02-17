const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  output: {
    publicPath: "auto"
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      remotes: {
        shared: "shared@http://localhost:3003/remoteEntry.js"
      },
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/Cart.jsx"
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
