const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/store.js",
  mode: "development",
  devServer: {
    port: 3003
  },
  output: {
    publicPath: "auto"
  },
  resolve: {
    extensions: [".js", ".jsx"]
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
      name: "shared",
      remotes: {
        shared: "shared@http://localhost:3003/remoteEntry.js"
      },
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/store",
        "./cartSlice": "./src/features/cart/cartSlice"
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-redux": { singleton: true, requiredVersion: false },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: false }
      }
    })
  ]
};
