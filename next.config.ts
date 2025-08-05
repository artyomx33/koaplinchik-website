import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image optimisation settings
   * - formats: enable modern formats (WebP & AVIF)
   * - dangerouslyAllowSVG: allow SVG logo to be served unoptimised
   *   (safe because we also set a strict CSP)
   */
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
