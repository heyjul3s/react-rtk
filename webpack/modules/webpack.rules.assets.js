exports.loadImages = () => ({
  test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  type: 'asset/resource'
});

exports.loadFonts = () => ({
  test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  type: 'asset/resource'
});
