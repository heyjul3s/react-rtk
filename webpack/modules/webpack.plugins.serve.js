const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const settings = require('../settings');

exports.devServer = ({ host, port } = {}) => ({
  historyApiFallback: true,
  host,
  port,
  open: false,
  client: {
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

exports.HMR = () => new webpack.HotModuleReplacementPlugin();

exports.browserSync = () =>
  new BrowserSyncPlugin(
    {
      host: settings.server.host,
      port: settings.server.port,
      proxy: settings.server.proxy,
      open: false
    },
    {
      reload: false
    }
  );
