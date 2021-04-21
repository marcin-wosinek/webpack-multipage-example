const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  pages = ["a", "b", "c", "d", "e"];

module.exports = pages.map((page) => {
  return {
    entry: {
      [page]: `./src/${page}.js`,
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
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: `./${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      }),
    ],
  };
});
