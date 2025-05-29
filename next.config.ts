import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "fastly.picsum.photos" },
    ],
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
