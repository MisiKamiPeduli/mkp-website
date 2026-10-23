import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Support both local preview URLs without blocking client scripts or HMR.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
