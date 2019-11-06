importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'css-cache',
    })
  );
  

  workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      // Use a custom cache name.
      cacheName: 'image-cache',
    })
  );


  workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao|Sunshiney&display=swap'),
    new workbox.strategies.NetworkFirst({
      fetchOptions: {
        credentials: 'include',
      },
    })
  );


workbox.precaching.precacheAndRoute([]);