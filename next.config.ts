import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack never walks up past the project folder.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
