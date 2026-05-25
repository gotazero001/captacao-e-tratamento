/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-captacao-e-tratamento',
  assetPrefix: '/v0-captacao-e-tratamento/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
