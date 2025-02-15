import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" }; // Suppresses webpack warnings in dev
    return config;
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;