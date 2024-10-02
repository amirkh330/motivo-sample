// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true, // Ensures service worker is registered
  skipWaiting: true,
  disable: false,
});

module.exports = withPWA({
  // Other Next.js config options can go here
  reactStrictMode: true,
  swcMinify: true,
});
