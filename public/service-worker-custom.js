self.addEventListener("install", function(event) {
    // event gets fired after service worker installation
    console.log("service worker is installing \u{1F631} ... ");
    // Do not wait for other service worker to unregister
    self.skipWaiting();
    // wait until previos service worker is uninstalled
    event.waitUntil(
        caches.open("static-v1").then(cache => cache.add("/favicon.ico"))
    );
});

self.addEventListener("activate", function() {
    console.log("service worker activating ...");
});
