import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    devtoolSegmentExplorer: true,
  },
};

export default nextConfig;
