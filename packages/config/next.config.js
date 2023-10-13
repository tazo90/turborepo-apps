/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'lib', 'config'],
  experimental: {
    // @todo: fixme when issue will be resolved
    // https://github.com/vercel/next.js/issues/52091
    // https://github.com/vercel/next.js/issues/51969
    serverComponentsExternalPackages: ['@prisma/client', 'knex'],
  },
};

module.exports = nextConfig;
