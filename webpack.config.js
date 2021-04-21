const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    a: "./src/a.js",
    b: "./src/b.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./a.html",
      filename: "a.html",
      chunks: ["a"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./b.html",
      filename: "b.html",
      chunks: ["b"],
    }),
  ],
};
