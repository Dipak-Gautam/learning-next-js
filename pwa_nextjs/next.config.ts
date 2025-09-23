import type { NextConfig } from "next";
// @ts-ignore
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  compiler: { removeConsole: process.env.NODE_ENV !== "development" },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})(nextConfig);
