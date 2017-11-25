// polyfill for Cache API
importScripts('/js/polyfills/cache-polyfill.js');

// remove comment below
let cacheName = 'gdg-umuahia';
let urlsToCache = [
    '/',
    '/css/style.css',
    '/img/gdg-logo.png',

    'https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',

    // speaker images
    "https://pbs.twimg.com/profile_images/913804665103507458/iL_rwXY4_400x400.jpg",
    "https://pbs.twimg.com/profile_images/929647992847720454/Qrn28Fu3_400x400.jpg",
    "https://pbs.twimg.com/profile_images/931071399833333760/e7vzcmGj_400x400.jpg",
    "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/20525306_1926624817626299_7052616052694016757_n.jpg?_nc_eui2=v1%3AAeFcY5BpwBAoVrETTLD-UjTGGNpS6MOksDvm6SdixonTHrOkef2OlP15wf5stXeCzpwr4wiEo8SRQ1wnI6oFO7TUO7e_V6QPA3OJSEGTNt02FA&oh=9e90632e9854e7a29bc89390d0c16085&oe=5AD27F95",
    "/img/3.jpg",
    "/img/4.jpg",
]


// TODO: 3 cache site dependencies/assets
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    )
})
// TODO: 2 intercept request
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    )
})