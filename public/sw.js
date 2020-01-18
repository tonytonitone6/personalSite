
workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://use.fontawesome.com/releases/v5.4.2/css/all.css'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cdn-cache'
  })
)

self.addEventListener('install', () => {
  console.log('install')
})

self.addEventListener('activate', () => {
  console.log('activate')
})

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.open('font-cache').then(function(cache) {
//       return cache.match(event.request).then(function (response) {
//         return response || fetch(event.request).then(function(response) {
//           cache.put(event.request, response.clone());
//           return response;
//         });
//       });
//     })
//   );
// });