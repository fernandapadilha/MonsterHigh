const CACHE_NAME = 'monster-high-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/script.js',
  '/assets/images/logo-caveira.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
      .then(response => response || fetch(event.request))
    );
});