/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gz',
  assetPrefix: '/gz/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
