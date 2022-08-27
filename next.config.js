/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i1.wp.com',
      'assets.promediateknologi.com',
      'assets-pergikuliner.com',
    ],
  },
};

module.exports = nextConfig;
