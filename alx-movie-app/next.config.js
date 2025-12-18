/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add other Next.js config options here
};

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  // you can also add other next-pwa options here
});

module.exports = withPWA(nextConfig);
