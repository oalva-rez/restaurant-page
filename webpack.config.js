const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "src"),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Home",
      filename: "index.html",
      template: path.resolve(__dirname, "src/html/index.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Menu",
      filename: "menu.html",
      template: path.resolve(__dirname, "src/html/menu.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Contact",
      filename: "contact.html",
      template: path.resolve(__dirname, "src/html/contact.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Restaurant",
      filename: "restaurant.html",
      template: path.resolve(__dirname, "src/html/restaurant.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Location",
      filename: "location.html",
      template: path.resolve(__dirname, "src/html/location.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Mystic Mocha || Catering",
      filename: "catering.html",
      template: path.resolve(__dirname, "src/html/catering.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};
