/**
 * Two modes:
 * - Normal (`npm run dev` / `npm run build`): full Next.js server, incl. the /api/enquiry email route.
 * - GitHub Pages demo (`npm run build:pages`): static export under a base path, no server routes.
 */
const isPages = process.env.PAGES_BUILD === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      reactStrictMode: true,
      images: { unoptimized: true },
    }
  : {
      poweredByHeader: false,
      reactStrictMode: true,
      images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [360, 430, 640, 768, 1024, 1280, 1440, 1920],
      },
      async headers() {
        return [
          {
            source: "/(.*)",
            headers: [
              { key: "X-Content-Type-Options", value: "nosniff" },
              { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
              { key: "X-Frame-Options", value: "SAMEORIGIN" },
              { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
            ],
          },
        ];
      },
    };

export default nextConfig;
