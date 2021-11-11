const assets = require('./modules/webpack.rules.assets');
const scripts = require('./modules/webpack.rules.scripts');
const utils = require('./modules/webpack.plugins.utils');
const options = require('./modules/webpack.options');
const web = require('./modules/webpack.plugins.html');
const settings = require('./settings');

module.exports = (env) => {
  return {
    ...options.config(),
    module: {
      rules: [
        assets.loadFonts({
          options: {
            name: '[name].[hash:4].[ext]'
          }
        }),
        assets.loadImages({
          options: {
            limit: 8000,
            name: 'static/images/[name].[hash:4].[ext]'
          }
        }),
        scripts.loadScripts()
      ]
    },
    plugins: [
      utils.defineEnv({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
          API: '"https://jsonplaceholder.typicode.com"'
        }
      }),
      web.HTML(settings.HTML[env.NODE_ENV]),
      web.assetManifest(),
      web.PWAmanifest(),
      utils.caseSensitivePaths(),
      utils.analyseBundle()
    ]
  };
};
