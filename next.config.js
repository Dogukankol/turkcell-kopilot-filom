/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    experimental: { appDir: true },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.dummyjson.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
