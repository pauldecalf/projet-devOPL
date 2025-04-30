import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true
    },
    level: 'info'
  }
};

export default nextConfig;
