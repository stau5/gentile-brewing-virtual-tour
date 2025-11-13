import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/virtualtour",
        destination: "/virtualtour/index.htm",
      },
      {
        source: "/virtualtour/",
        destination: "/virtualtour/index.htm",
      },
    ];
  },
};

export default nextConfig;
