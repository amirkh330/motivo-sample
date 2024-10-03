const withPWA = require('@ducanh2912/next-pwa')({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

module.exports = withPWA({
  // Your Next.js config
});
