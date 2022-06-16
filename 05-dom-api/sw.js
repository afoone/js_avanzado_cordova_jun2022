const cacheFiles = ['./index.html', './src/index.js']

// con esto funcionaría offlice
self.addEventListener('install', e => {
  e.waitUntil(caches.open('main').then(c => c.addAll(cacheFiles)))
})

self.addEventListener(
  'fetch',
  e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)))
)
