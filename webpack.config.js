const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "development", // mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
