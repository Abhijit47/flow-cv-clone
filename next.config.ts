import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
};

export default nextConfig;
