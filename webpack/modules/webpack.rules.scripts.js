exports.loadScripts = () => ({
  test: /\.([jt]sx?)?$/,
  use: 'swc-loader',
  exclude: /node_modules/
});
