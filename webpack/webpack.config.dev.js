const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const serve = require('./modules/webpack.plugins.serve');
const utils = require('./modules/webpack.plugins.utils');
const settings = require('./settings');

const devConfig = (env = { NODE_ENV: 'development' }) => {
  return {
    mode: env.NODE_ENV,
    performance: {
      hints: false
    },
    devServer: serve.devServer({
      open: false,
      host: settings.server.host,
      port: settings.server.port
    }),
    plugins: [
      // utils.banner(),
      serve.browserSync(),
      serve.HMR()
    ]
  };
};

module.exports = (env) => merge(commonConfig(env), devConfig(env));
