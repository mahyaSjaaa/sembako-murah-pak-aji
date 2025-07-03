import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: "default-src 'self'; script-src 'self'; object-src 'none';",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "geolocation=(), microphone=(), camera=()",
      },
    ];

    return [
      {
        source: "/(.*)", // semua route
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
