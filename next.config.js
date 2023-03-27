/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)?', // Matches all pages
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(),fullscreen=self',
          },
          {
            key: 'Content-Security-Policy',
            value: `object-src 'none'; frame-ancestors 'none'`, //The object-src directive is set to 'none' to prevent plugins from being loaded.
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    apiURL: process.env.apiURL,
  },
};

module.exports = nextConfig;
