import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resumes',
        permanent: false,
      },
    ];
  },
  /* config options here */
  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
      // hmrRefreshes: false
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod.flowcvassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
