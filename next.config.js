/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  /* Hide "X-Powered-By: Next.js" in production */
  poweredByHeader: false,

  /* Security headers – applied to every route */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          /* HSTS – tell browsers to always use HTTPS (1 year, include subdomains) */
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          /* CSP – restrictive default; inline styles allowed for React */
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' ${
              process.env.NODE_ENV === "development" ? "'unsafe-inline' 'unsafe-eval'" : ""
            }; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';`.replace(/\s{2,}/g, ' '),
          },
          /* Prevent click-jacking */
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          /* Stop MIME-type sniffing */
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          /* Referrer policy – send origin only on cross-origin */
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          /* Permissions policy – disable dangerous browser APIs */
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          /* XSS protection (legacy header, still useful for older browsers) */
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          /* Cross-Origin policies */
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
