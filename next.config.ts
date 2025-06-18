import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    domains: ["images.ctfassets.net"], // Allow Contentful images
    formats: ["image/webp", "image/avif"],
  },

  // Enable compression
  compress: true,

  // Power by header
  poweredByHeader: false,
};

export default nextConfig;
