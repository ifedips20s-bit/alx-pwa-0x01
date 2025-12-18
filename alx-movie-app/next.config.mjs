import withPWAInit from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
  // Silence Turbopack/Webpack conflict
  turbopack: {},
};

// Minimal PWA configuration
const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
