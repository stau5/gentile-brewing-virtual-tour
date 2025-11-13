import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  // This must match your Webflow Cloud mount path
  basePath: "/virtualtour",
  assetPrefix: "/virtualtour",
};

export default nextConfig;