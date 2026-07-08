import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edjxhobkpxagzpkfhtre.supabase.co",
      },
    ],
  },
};

export default nextConfig;