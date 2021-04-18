const path = require("path");

module.exports = {
  entry: {
    a: "./src/a.js",
    b: "./src/b.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
