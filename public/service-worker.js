// public/service-worker.js
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        '/', // Add other static resources if needed
        '/index.html',
        '/favicon.ico',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
});

self.addEventListener('push', (event) => {
  const data = event.data.json();
  const { title, body } = data;
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/icon.png', // Set an icon if available
    })
  );
});
