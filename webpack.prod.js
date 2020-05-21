// entry -> output
const path = require("path");
const Dotenv = require("dotenv-webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: ["babel-loader"],
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new Dotenv(), new miniCssExtractPlugin({ filename: "style.css" })],
};

//loader
