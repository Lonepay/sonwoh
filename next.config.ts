import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js re-creates AGENTS.md on every `next dev` unless this is off.
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
