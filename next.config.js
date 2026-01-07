/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/infixen_energy.com',
  assetPrefix: '/infixen_energy.com/',
}

module.exports = nextConfig
