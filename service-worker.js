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
    "revision": "96b18bbc78b602a0859fd0147852b6b8"
  },
  {
    "url": "api/index.html",
    "revision": "f58db7b2aa22b5c7d375f1c82ff7f596"
  },
  {
    "url": "assets/css/0.styles.bdfd091a.css",
    "revision": "7cee65af9bdacde0d207a09d7502cdfe"
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
    "url": "assets/js/12.ddad41c7.js",
    "revision": "4764a4c858b4749a2c864d688c4a5fb5"
  },
  {
    "url": "assets/js/13.8e189015.js",
    "revision": "d88b236b399723ff8cc739af01067f8b"
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
    "url": "assets/js/24.c1ee56c6.js",
    "revision": "702f68b5ccdeeb4d7e79e205373dc8c2"
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
    "url": "assets/js/6.b44b40a6.js",
    "revision": "baf14400c501358afe0b98158360927e"
  },
  {
    "url": "assets/js/7.f92fbb61.js",
    "revision": "09b547d468227d74ed8a118ad4a0d5c4"
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
    "url": "assets/js/app.373f456e.js",
    "revision": "541aae48fe1b992a350241f59310e593"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "en/api/index.html",
    "revision": "73b7503b03d60596db46763b8ce10763"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "b3a74910db6dfe5effa9aeea9135d1d3"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "00c2d001a049b890df0e2c6187153ff2"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "a7063e4819c5bfcac4dc2f37349b14e5"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "6e5a8325682330ce0d1086b77a923464"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "560d7089424ba72ee4ea71731b72f291"
  },
  {
    "url": "en/guide/index.html",
    "revision": "efe4e9783bac5d245f32da25e318c070"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "101f21e06ec179a9e0cd8ea66adfd267"
  },
  {
    "url": "en/index.html",
    "revision": "3c8533751dc3b659b01d79fd2a4baa07"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "7e3bf891eb6d23e50b695b589a6def0c"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "4ea054a58798db90dcb8065d75d5eec0"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c325a4999fdf1ef060f0b3c815f092d8"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "72511914a6e4e3b13fc2a14bcac4030d"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "cb6eb2388c844763a5bc6068a4482d77"
  },
  {
    "url": "guide/index.html",
    "revision": "307ae96679eff0ae06a87771cd253e6c"
  },
  {
    "url": "guide/installation.html",
    "revision": "5b0488f0ea604e385f6895cd3df6eb2e"
  },
  {
    "url": "index.html",
    "revision": "60c9523c25ea00f84710a42726702694"
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
