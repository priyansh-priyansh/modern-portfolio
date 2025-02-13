import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
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
};

export default nextConfig;