const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

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
        products: "products@https://products-theta-drab.vercel.app/remoteEntry.js",
        cart: "cart@https://https://cart-zeta-three.vercel.app/remoteEntry.js",
        shared: "shared@https://shared-alpha-virid.vercel.app/remoteEntry.js"
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
