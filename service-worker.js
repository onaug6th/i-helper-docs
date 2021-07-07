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
    "revision": "0b9ab97edfe29afc028180da55e19179"
  },
  {
    "url": "api/index.html",
    "revision": "d2d20f5c49253ede5074b76271d6437c"
  },
  {
    "url": "assets/css/0.styles.ac413c94.css",
    "revision": "45487607ee1d64ef24b3ff85365c2e6c"
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
    "url": "assets/js/23.e4562ed4.js",
    "revision": "43e1d7a57130072220b50df6a0723bec"
  },
  {
    "url": "assets/js/24.bf0e7c10.js",
    "revision": "0571abb3c80a55e52693b7a0dbdf6042"
  },
  {
    "url": "assets/js/25.f03cff9f.js",
    "revision": "e606d5155e85e2f4a5ff9862a1baef49"
  },
  {
    "url": "assets/js/26.e155c1c4.js",
    "revision": "74821af519c2b601b252cf0d16893fb6"
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
    "url": "assets/js/app.ff816ccd.js",
    "revision": "b35cbb2a963c0306dd9e9009d028242b"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "en/api/index.html",
    "revision": "d494c39d0d00ccf9d6806eb3e8182143"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "8f7e21d330d3edc3dc02ef1a3ff1a66b"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "39dc0ec7d853a70e71c1d22984f1779c"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "508756de0266466184c7995d65db8bf7"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "ef3a29bdfa63e89bfaf9349f47c8aea1"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "d078b45538ce624e4292716ed91a758b"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9b1e3ef96d8b5b2e5e491dcf39715970"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "720a3d89c90d339d7e757a0840d31446"
  },
  {
    "url": "en/index.html",
    "revision": "e92acf145a486140a344976756632f4f"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "ac646e29dc53384eea7d621aa3e48595"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "1d565c039be92781bf2bbbb138c3dc40"
  },
  {
    "url": "guide/changelog.html",
    "revision": "749b906fbfccdc6579ff651586d59137"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "4854b33d3546facef8f283f2430e77fe"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "1030a3a087326c099fbaebf840cbb5c8"
  },
  {
    "url": "guide/index.html",
    "revision": "3ce5331a1a16294089bff9329d8ae14a"
  },
  {
    "url": "guide/installation.html",
    "revision": "f23878dc681cb303ffcf57184ac46ab2"
  },
  {
    "url": "index.html",
    "revision": "02df840df4804ac6b36d220b9baf1018"
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
