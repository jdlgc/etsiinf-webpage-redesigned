/** @type {import('next').NextConfig} */
const repo = 'https://jdlgc.github.io/etsiinf-webpage-redesigned'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
    images: {
        domains: ['www.fi.upm.es'],
      },
}

module.exports = nextConfig


