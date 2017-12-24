var cacheKey = 'canvas_tetris'

var cacheList = [
    '/tetris',
    '/tetris/index.html',
    '/tetris/dist/tetris.min.js'
]

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheKey)
            .then(cache => cache.addAll(cacheList))
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        if (response != null) {
          return response
        }
        return fetch(e.request.url)
      })
    )
})

