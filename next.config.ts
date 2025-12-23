import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    // unoptimized: true, // Commented out to enable optimization
  },
};

export default nextConfig;
