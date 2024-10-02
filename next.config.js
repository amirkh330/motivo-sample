// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,    // Ensures service worker is registered
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    // Other Next.js config options can go here
  });
  