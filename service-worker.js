/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4f2cd3195bedb371482cab0149d03be"
  },
  {
    "url": "api/index.html",
    "revision": "edd15b5e5be27123057e2fce506388db"
  },
  {
    "url": "assets/css/0.styles.d2e72dc9.css",
    "revision": "cbfc7072f3254cacb0f976dc2a1baf5c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a706ae45.js",
    "revision": "6efcb7806a32e0fe2e230f5bad2c2779"
  },
  {
    "url": "assets/js/11.39436c5e.js",
    "revision": "4fbef2081383ae658e3cab99c3a9be9f"
  },
  {
    "url": "assets/js/12.f03e36e6.js",
    "revision": "eea7db1d5d78abecbf3d53a216b09098"
  },
  {
    "url": "assets/js/13.b44d5df3.js",
    "revision": "c711173bd5e33559c0a5d11ca42f99e2"
  },
  {
    "url": "assets/js/14.b35c33ca.js",
    "revision": "2c121588fcb40449388d28d1e3ce6d9a"
  },
  {
    "url": "assets/js/15.914e2596.js",
    "revision": "4c666d350279e61ef10927ffa436ae4e"
  },
  {
    "url": "assets/js/16.9939a392.js",
    "revision": "64be085d2b424702f111cd2c8462f672"
  },
  {
    "url": "assets/js/17.93100dc1.js",
    "revision": "44da9866c8bf7bd7f37f7f86bcc5ecb9"
  },
  {
    "url": "assets/js/18.9415c47f.js",
    "revision": "0be8a2edb113945542f94263e7236271"
  },
  {
    "url": "assets/js/19.47dfc61f.js",
    "revision": "7b17079878b0daae1c9ea0c2e09a1efd"
  },
  {
    "url": "assets/js/20.73418a85.js",
    "revision": "5add9d526ce4a895ba6b1309735aadc6"
  },
  {
    "url": "assets/js/21.ca8edce9.js",
    "revision": "07053de3b97249d3ba287670be6add0f"
  },
  {
    "url": "assets/js/22.b6355663.js",
    "revision": "a61a2bb41c3a0c55e89baa908b8cf5b5"
  },
  {
    "url": "assets/js/23.8f16fa3c.js",
    "revision": "62dc915bc469d4492e300757f65a8bd3"
  },
  {
    "url": "assets/js/24.dff13d9d.js",
    "revision": "a6b4e899f256df178f01177e81083fea"
  },
  {
    "url": "assets/js/25.eb2601ea.js",
    "revision": "30b093d3309e08b2c61480fc30deed22"
  },
  {
    "url": "assets/js/26.75c69125.js",
    "revision": "e98151a0eaa757425901adbb3f694ae0"
  },
  {
    "url": "assets/js/27.e78d26f9.js",
    "revision": "93f368d9d176b915e4d1bd731533c4b5"
  },
  {
    "url": "assets/js/28.4ddb12f3.js",
    "revision": "fd105a6e35771b5e1ce7875b6cda6a37"
  },
  {
    "url": "assets/js/29.4d57fc07.js",
    "revision": "3967db194123f4e54f77744e9379bd4f"
  },
  {
    "url": "assets/js/3.9cce3945.js",
    "revision": "fae87739500c78190c60f9a4b4585868"
  },
  {
    "url": "assets/js/4.60a0a64c.js",
    "revision": "457c0cc768239e18cb20f707ed498f3a"
  },
  {
    "url": "assets/js/5.fec5ce24.js",
    "revision": "4bd44d85f299cda89bdafefc241ea400"
  },
  {
    "url": "assets/js/6.5e2254d3.js",
    "revision": "1539d07edb8b42425f68b77ef46243a4"
  },
  {
    "url": "assets/js/7.78c568d3.js",
    "revision": "fc81e96d7a8cbad52001a3fede90779a"
  },
  {
    "url": "assets/js/8.a2abf122.js",
    "revision": "07c6ac14ee46842a33267bed3a37c91e"
  },
  {
    "url": "assets/js/9.8bbf6e77.js",
    "revision": "cc3d881689ccb3ad8d575539a4d11114"
  },
  {
    "url": "assets/js/app.b9641fe0.js",
    "revision": "fa42e3b35d0380802462fef2b71b97c6"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "en/api/index.html",
    "revision": "146b4d71c4984f9dc59d72fd3c408082"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "679a6b04995bfcc4874bcf77c0616515"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "051625d0da1d6a1c99a494c51ac26e57"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "e44e7d7756ae104f92f1fb39f19a01fb"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "cb20fc418f69117dd2817728b23d8678"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "05920eb2cd48df68bc10f8d04eec3114"
  },
  {
    "url": "en/guide/index.html",
    "revision": "aa90a4828448f9346586b2a00652d8aa"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "b1106ab13a5a465ea814e5de988b7e4e"
  },
  {
    "url": "en/index.html",
    "revision": "a1d10f7707b676c0493c9fc91e8e777f"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "d08df8d0f1ddab44c9048cb29495e9cd"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "1209a948cb1e395e422e199683870fdc"
  },
  {
    "url": "guide/changelog.html",
    "revision": "156b33df9ec4862cd7670be3b352e114"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "8cb3c3312bc6f9e077776a59002496b7"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "2262fef3bb7f52eb19031f08ee137357"
  },
  {
    "url": "guide/index.html",
    "revision": "b72b4412a26ca7a452501d0debeec094"
  },
  {
    "url": "guide/installation.html",
    "revision": "1477c36e75ce38d1f17485e93804b26d"
  },
  {
    "url": "index.html",
    "revision": "fa49e699a22c35bb2f2985aad70ee3f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
