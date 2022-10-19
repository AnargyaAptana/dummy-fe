/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: process.env.APP_NAME,
  },
}

module.exports = nextConfig
