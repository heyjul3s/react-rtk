const path = require('path');
const settings = require('../settings');

const baseOptions = {
  bail: true,
  devtool: 'inline-source-map',
  entry: {
    app: settings.paths.app
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/api': path.resolve(__dirname, '../../src/api/'),
      '@/components': path.resolve(__dirname, '../../src/components/'),
      '@/hooks': path.resolve(__dirname, '../../src/hooks/'),
      '@/pages': path.resolve(__dirname, '../../src/pages/'),
      '@/reducers': path.resolve(__dirname, '../../src/reducers/'),
      '@/theme': path.resolve(__dirname, '../../src/theme/'),
      '@/utils': path.resolve(__dirname, '../../src/utils/')
    }
  },
  output: {
    path: settings.paths.build,
    chunkFilename: '[name].[fullhash:8].js',
    filename: '[name].[fullhash:8].js',
    clean: true
  },
  externals: {},
  stats: 'errors-only'
};

exports.config = (options = {}) => ({
  ...baseOptions,
  ...options
});
