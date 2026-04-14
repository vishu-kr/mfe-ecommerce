const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const dotenv = require("dotenv");

const env = process.env.NODE_ENV === "production"
  ? dotenv.config({ path: ".env.production" }).parsed
  : dotenv.config({ path: ".env.development" }).parsed;
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true
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
        products: `products@${env.PRODUCTS_URL}/remoteEntry.js`,
        cart: `cart@${env.CART_URL}/remoteEntry.js`,
        shared: `shared@${env.SHARED_URL}/remoteEntry.js`,
        auth: `auth@${env.AUTH_URL}/remoteEntry.js`
      },

      shared: {
        react: { singleton: true , requiredVersion: false},
        "react-dom": { singleton: true , requiredVersion: false},
        "react-redux": { singleton: true , requiredVersion: false},
        "@reduxjs/toolkit": { singleton: true , requiredVersion: false}
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
