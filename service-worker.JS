// service-worker.js - network-first, minimal
const CACHE = 'digitalease-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // try network first, then fallback to cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // optionally update cache for same-origin GETs
        if (event.request.method === 'GET' && new URL(event.request.url).origin === location.origin) {
          caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
