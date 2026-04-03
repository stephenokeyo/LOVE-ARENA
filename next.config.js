/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias['next-auth/react'] = require.resolve('next-auth/react')
    return config
  }
}

module.exports = nextConfig