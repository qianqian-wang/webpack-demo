const path = require("path");

module.exports = {
  mode: "development", // mode: 'production',
  entry: "./src/index.js", //默认就是src下面的index.js
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "main1.js",
    filename: "[name].[contenthash].js",
  },
};
