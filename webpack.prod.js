// entry -> output
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
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
  plugins: [new miniCssExtractPlugin({ filename: "style.css" })],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    historyApiFallback: true,
  },
};

//loader
