/* An array of url to cache */
var urlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

// static cache name 
var CACHE_NAME = 'restaurant-cache-v1';

// On install, cache resources.
self.addEventListener('install', function(event) {
    console.log('The service worker is being installed.');
    // Ask the service worker to keep installing until the returning promise resolves. 
    event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
        console.log('cacheed the files');
    }).catch(function(error) {
        console.log(error);
    }));
});

/* Activate service worker by deleting existing cache */
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('restaurant-') &&
                        cacheName != CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                    console.log('Existing cache deleted..');
                })
            )
        })
    );
});


//On fetch, use cache but update the entry with the latest contents from the server.
self.addEventListener('fetch', function(event) {
    console.log('The service worker is serving the asset.');

    /* Use respondWith() to answer immediately, 
        without waiting for the network response to reach the service worker… */
    event.respondWith(fromCache(event.request));

    // And waitUntil() to prevent the worker from being killed until the cache is updated.
    event.waitUntil(update(event.request));
});

/* Open the cache where the assets were stored and search for the requested resource. */
function fromCache(request) {
    return caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        });
}

/* Open the cache, perform a network request and storing the new response data. */
function update(request) {
    return caches.open(CACHE_NAME).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        });
    });
}