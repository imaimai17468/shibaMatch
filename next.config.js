/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // https://cdn.shibe.online/shibes/dba6f4e199d09b95d0fea7d2497b319afe3c0ef5.jpg
        protocol: 'https',
        hostname: 'cdn.shibe.online',
        port: '',
        pathname: '/shibes/*',
      },
    ],
  },
}

module.exports = nextConfig
