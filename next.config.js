/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/etsiinf-webpage-redesigned' : '';

module.exports = {
  basePath: isProd ? '/etsiinf-webpage-redesigned' : '',
  assetPrefix: assetPrefix,
  images: {
    domains: ['www.fi.upm.es'],
  },
};