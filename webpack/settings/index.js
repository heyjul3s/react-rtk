const dirPaths = require('./dirPaths');
const html = require('./html');
const PWAmanifest = require('./PWAmanifest');
const server = require('./server');
const banner = require('./banner');

module.exports = {
  paths: { ...dirPaths },
  server: { ...server },
  HTML: { ...html },
  ...PWAmanifest,
  banner
};
