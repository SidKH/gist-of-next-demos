import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
