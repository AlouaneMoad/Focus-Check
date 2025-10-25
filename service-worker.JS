const CACHE = 'digitalease-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
];

// On install: pre-cache minimal shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Network-first handler with cache fallback
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // only handle GETs
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // optionally update cache for same-origin requests
        if (url.origin === self.location.origin) {
          caches.open(CACHE).then(cache => cache.put(event.request, networkResponse.clone()));
        }
        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then(cached => {
          // fallback to cached index.html for navigation requests
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        })
      )
  );
});
