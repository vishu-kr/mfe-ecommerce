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
        react: { singleton: true , requiredVersion:false},
        "react-dom": { singleton: true , requiredVersion:false},
        "react-redux": { singleton: true, requiredVersion:false },
        "@reduxjs/toolkit": { singleton: true, requiredVersion:false }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
