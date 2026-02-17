const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000 },

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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",

      remotes: {
        products: "products@http://localhost:3001/remoteEntry.js",
        cart: "cart@http://localhost:3002/remoteEntry.js",
        shared: "shared@http://localhost:3003/remoteEntry.js"
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
