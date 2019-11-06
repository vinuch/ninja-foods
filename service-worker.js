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


workbox.precaching.precacheAndRoute([
  {
    "url": "css/materialize.min.css",
    "revision": "ec1df3ba49973dcb9ff212f052d39483"
  },
  {
    "url": "css/styles.css",
    "revision": "47568cac1298729ca83d5c7736026f8e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "4909a0a1cec39763acde1b11c9275d2a"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "b823f7e541fc68e8ffbfe00b52df8068"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d83895e7b98020f0f06d4b514645f08f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "22fc326f3987b60be9ab170b99525d30"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "33c653bf3520161f1a3b896208eb7a76"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "8cff125f77127bb9ea2ac4802b8d4763"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "5383f713d70638487a1c35be24a27b82"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "c878591d3f7cb2aaa72a157cfd6cbdc8"
  },
  {
    "url": "img/dish.jpg",
    "revision": "4d4a36fc88b67d98f2ee42273057a1d4"
  },
  {
    "url": "img/icon-ninja-15.jpg",
    "revision": "fe05ad4d5e17b226b12bce9518828b61"
  },
  {
    "url": "img/lagos.jpg",
    "revision": "17f415de5a72c3e19e24e991738b6176"
  },
  {
    "url": "img/man.jpeg",
    "revision": "4db325ecae2d8d3e767f732a86e5e1c4"
  },
  {
    "url": "img/meme2.jpg",
    "revision": "cbc759921a4a5540903b6257be7f1c8b"
  },
  {
    "url": "img/Screenshot from 2019-10-28 00-30-07.png",
    "revision": "ac69df7ed1db0ca7a71c08542c8769c6"
  },
  {
    "url": "index.html",
    "revision": "17d9420952e87776d574e37cbf37e7bd"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "5dcfc8944ed380b2215dc28b3f13835f"
  },
  {
    "url": "js/ui.js",
    "revision": "cd549ea12627271698c3e7677b31f7d4"
  },
  {
    "url": "manifest.json",
    "revision": "b111dd26cae74452ebecbf497177cc21"
  },
  {
    "url": "package-lock.json",
    "revision": "5c3865c23722f49247096d24c5de0e2a"
  },
  {
    "url": "package.json",
    "revision": "c10bd1e31e605dc1adcb51d2f88c783e"
  },
  {
    "url": "pages/about.html",
    "revision": "b9a32597b164e515ad2d0b9c2d6367f9"
  },
  {
    "url": "pages/contact.html",
    "revision": "b849568ca441b137daeead6c62ff85e6"
  },
  {
    "url": "src-sw.js",
    "revision": "67e61fc4d15f7b29033ba5cf204a1f88"
  },
  {
    "url": "workbox-config.js",
    "revision": "40e19d20ad3e35f8e92b8d2265b6cbde"
  }
]);