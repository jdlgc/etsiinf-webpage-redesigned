const repo = 'etsiinf-webpage-redesigned';
const assetPrefix = '/${repo}/';
const basePath = '/${repo}';

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['www.fi.upm.es'],
    unoptimized: true,
  },
  output: "export"
};