const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.defineEnv = (options) => new webpack.DefinePlugin(options);

exports.banner = (options = {}) =>
  new webpack.BannerPlugin({
    banner: new GitRevisionPlugin().version(),
    ...options
  });

exports.caseSensitivePaths = () => new CaseSensitivePathsPlugin();

exports.analyseBundle = () =>
  process.env.ANALYSE_BUNDLE ? new BundleAnalyzerPlugin() : () => {};
