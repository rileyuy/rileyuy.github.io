/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: { unoptimized: true },
  // Disable React strict mode to avoid double rendering in development
  reactStrictMode: false,
  // Explicitly set the app directory
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
