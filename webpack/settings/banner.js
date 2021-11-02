const PWAmanifest = require('./PWAmanifest');

const banner = [PWAmanifest.name || 'Untitled', new Date()].join(' | ');

module.exports = {
  banner
};
