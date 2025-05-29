import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "picsum.photos" }],
    minimumCacheTTL: 86400, // 1 day
  },
};

export default nextConfig;
