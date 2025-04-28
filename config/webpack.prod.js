const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "auto",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("../package.json").version),
    }),
    new ModuleFederationPlugin({
      name: "qecg_core",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/bootstrap.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
  ],
});
