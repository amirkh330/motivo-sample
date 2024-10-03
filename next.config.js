// import withPWAInit from "@ducanh2912/next-pwa";
const withPWAInit = require("@ducanh2912/next-pwa");  // Use require instead of import
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

module.exports = withPWA({
  // Your other Next.js configurations here
});
