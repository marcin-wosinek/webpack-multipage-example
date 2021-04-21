const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  pages = ["a", "b", "c", "d", "e"];

module.exports = {
  entry: pages.reduce(
    (value, page) => Object.assign(value, { [page]: `./src/${page}.js` }),
    {}
  ),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        inject: true,
        template: `./${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      })
  ),
};
