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
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [].concat(
    ["a", "b"].map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
};
