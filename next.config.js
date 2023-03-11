/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.datocms-assets.com',
          },
        ],
      },
      
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
