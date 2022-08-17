/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config) {
    config.resolve.fallback = {
      util: require.resolve('util/')
    };
    return config;
  }
};

module.exports = nextConfig;
