/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config, options) {
    config.experiments = {
      resolve: {
        fallback: {
          util: require.resolve('util/')
        }
      }
    };
    return config;
  }
};

module.exports = nextConfig;
