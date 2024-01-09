/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.fi.upm.es'],
    unoptimized: true,
  },
  output: "export",
  distDir: 'dist'
};

module.exports = nextConfig;