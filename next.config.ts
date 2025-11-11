import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: 'annotation',
  },
  devIndicators: false,
};

export default nextConfig;
