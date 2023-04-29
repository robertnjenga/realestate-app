/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['ssl.cdn-redfin.com', 'my.matterport.com', 'redfin.com']
  }
}
