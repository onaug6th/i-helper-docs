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
    "revision": "52e5eb29bfabcf57ec8ac36e59fc4097"
  },
  {
    "url": "api/index.html",
    "revision": "4b88f537e4f4c8e69754c48ebd1f2701"
  },
  {
    "url": "assets/css/0.styles.4aa7c387.css",
    "revision": "86b83528528b11d0576b0f431750929e"
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
    "url": "assets/js/6.57ae2511.js",
    "revision": "1a9b15d16f6ce45ceef8ea7ec7a412e7"
  },
  {
    "url": "assets/js/7.f92fbb61.js",
    "revision": "09b547d468227d74ed8a118ad4a0d5c4"
  },
  {
    "url": "assets/js/8.76756bbc.js",
    "revision": "85836d3d26201245c0188cda7904997d"
  },
  {
    "url": "assets/js/9.8bbf6e77.js",
    "revision": "cc3d881689ccb3ad8d575539a4d11114"
  },
  {
    "url": "assets/js/app.69cb11a8.js",
    "revision": "40eaac29c06974dc80d3a02924fd9505"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "en/api/index.html",
    "revision": "b8ab0cd30eab3e494182b1e7aecf3908"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "d66861a2179c26a15cb4fda65b46db95"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "4eb7ad8e36e691e1ba43e1f77beaabb5"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "e7a1db8d16ce7c949fe6132f3b32ee60"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "5ab33f4c65a2866f024d24f5ed75d4df"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "9e3f23ea7c9435ebf5afe05d40690b22"
  },
  {
    "url": "en/guide/index.html",
    "revision": "abf1e82541a6581afb6f659a432220f2"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "7dbdf24909372e8a951f4de669b83348"
  },
  {
    "url": "en/index.html",
    "revision": "3442cad3ae62bab11260fad2cc9321e5"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "89ac5e15e6fc505a20a1235160edb31d"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "b063058408483d1921350296fea8db6e"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d8052a6f0fdef304bcb6af23f286ab7b"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "3125b5f1181196cdf55898f2035e0e68"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "11bf2b6625a435ee2d466f9fd11f9e0b"
  },
  {
    "url": "guide/index.html",
    "revision": "d92c31851494da195d8edc1c3bb67566"
  },
  {
    "url": "guide/installation.html",
    "revision": "f8e2dd8ff52388b9529703ab0e82f62d"
  },
  {
    "url": "index.html",
    "revision": "d930d266dace2144ea4c0c1e91e80700"
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
