var staticCacheName = 'restaurant-reviews-v3';

let urlToCache = [
    '/',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',

];

self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(staticCacheName).then(function(cache){
			cache.addAll(urlToCache);
		})	
	);
});

self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			if(response) return response;
			return fetch(e.request);
		})
	);
});

self.addEventListener('activate', function(e){
	e.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(
				cacheNames.filter(function(cacheName){
				return cacheName.startsWith('restaurant-') && cacheName != staticCacheName
			}).map(function(cacheName){
				return caches.delete(cacheName);
				})
			);

		})
	);
});
