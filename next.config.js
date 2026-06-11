/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['achsotec.cl'],
    unoptimized: true
  }
}

module.exports = nextConfig
