const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/nombre-del-repositorio' : '';

module.exports = {
  basePath: isProd ? '/nombre-del-repositorio' : '',
  assetPrefix: assetPrefix,
  images: {
    domains: ['www.fi.upm.es'],
  },
};
