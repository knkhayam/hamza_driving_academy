import type { NextConfig } from "next";

/** Project Pages URL is /hamza_driving_academy — set via env in CI; leave empty for local/root hosting. */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
