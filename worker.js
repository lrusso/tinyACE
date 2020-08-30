const filesToCache = [
	"tinyACE.css",
	"tinyACE.htm",
	"tinyACE.js",
	"tinyACE.json",
	"tinyACE.png",
	"tinyACEFavIcon_16x16.png",
	"tinyACEFavIcon_192x192.png",
	"tinyACEFavIcon_512x512.png",
	"tinyACEShare.png"
];

const staticCacheName = "tinyace-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});