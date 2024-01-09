/** @type {import('next').NextConfig} */

const repo = 'etsiinf';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['www.fi.upm.es'],
  },
}

module.exports = nextConfig
