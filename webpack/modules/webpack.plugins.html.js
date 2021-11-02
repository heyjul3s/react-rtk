const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const settings = require('../settings');

exports.PWAmanifest = (options = settings.PWAmanifestConfig) =>
  new WebpackPwaManifest(options);

exports.assetManifest = (
  options = {
    fileName: 'asset-manifest.json'
  }
) => new WebpackManifestPlugin(options);

exports.HTML = (options = settings.HTML.development) =>
  new HTMLWebpackPlugin(options);
