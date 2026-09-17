import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")], // ここでルートを設定
  },
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
