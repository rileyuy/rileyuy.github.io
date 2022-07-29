/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: "akamai",
    path: "/",
  },
  basePath:"/rileyuy.github.io",
  assetPrefix:"/rileyuy.github.io"
}

module.exports = nextConfig
