const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css\.ts$/,
        use: ["vanilla-extract-loader", "ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
  plugins: [
    new VanillaExtractPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
