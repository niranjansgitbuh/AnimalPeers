/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Allow production builds to succeed even if ESLint errors are present
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to succeed even if TypeScript errors are present
    ignoreBuildErrors: true,
  },
  images: {
    // Disable next/image optimisations in the browser-only “next-lite” runtime
    unoptimized: true,
  },
}

module.exports = nextConfig
