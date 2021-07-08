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
    "revision": "085e9d14e9c85346e99c1112bffe39f2"
  },
  {
    "url": "api/index.html",
    "revision": "43db68daa3d4621a22977a39f955caaf"
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
    "url": "assets/js/11.282bdcbf.js",
    "revision": "53ea09e8a14f15bbc5231b5c6abb65b3"
  },
  {
    "url": "assets/js/12.f03e36e6.js",
    "revision": "eea7db1d5d78abecbf3d53a216b09098"
  },
  {
    "url": "assets/js/13.287572ca.js",
    "revision": "0d71a40b9450d359da4cb6225d949500"
  },
  {
    "url": "assets/js/14.16a33eaf.js",
    "revision": "4d7600ac59dc3f532a5153c2c88f055f"
  },
  {
    "url": "assets/js/15.907c20dd.js",
    "revision": "6dbb92f6e75606860fddd06132e0c2e1"
  },
  {
    "url": "assets/js/16.6bef594c.js",
    "revision": "58a2068c4fceb3c5c3cde943ee30956d"
  },
  {
    "url": "assets/js/17.5a714976.js",
    "revision": "8312c3a51426d4e48451a7f0a22f43fb"
  },
  {
    "url": "assets/js/18.5a5b47fa.js",
    "revision": "2be046f512bb37d2a9accc1ae1443958"
  },
  {
    "url": "assets/js/19.9cec789e.js",
    "revision": "88e25fa693c29361f67557e325031d89"
  },
  {
    "url": "assets/js/20.37704456.js",
    "revision": "fa9c771023d448a9c091ca2df2337f3f"
  },
  {
    "url": "assets/js/21.897a017c.js",
    "revision": "835a27002a6ce5c21a5b725fe566ddc3"
  },
  {
    "url": "assets/js/22.3898cac9.js",
    "revision": "1aad4cc0155cc42edaa0043227d2670e"
  },
  {
    "url": "assets/js/23.8f16fa3c.js",
    "revision": "62dc915bc469d4492e300757f65a8bd3"
  },
  {
    "url": "assets/js/24.94ec82a0.js",
    "revision": "13e709e55ac46b4944cd4a96ab0394f4"
  },
  {
    "url": "assets/js/25.04aca7ea.js",
    "revision": "b15121e55d83855706df3a0bd965bd74"
  },
  {
    "url": "assets/js/26.75c69125.js",
    "revision": "e98151a0eaa757425901adbb3f694ae0"
  },
  {
    "url": "assets/js/27.850e634b.js",
    "revision": "1a41498cc06693e2223a49033393ad50"
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
    "url": "assets/js/app.e30fbba4.js",
    "revision": "5e2f02c6e87d8dde47e116d9d4278d3e"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "en/api/index.html",
    "revision": "18e35fd5d60c8df62a26553f0dcd99f5"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "ada3a2ac11e5092f96bef3e46fa609cd"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "34dc53b75980ad29661d32a7de1be555"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "3ddf4d20a512097c3e445a24f04c7fb2"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "465eb4092af3bd32fbe60d449d37c7ab"
  },
  {
    "url": "en/guide/essentials/operate.html",
    "revision": "97779ec1acde8328649fa7a46a7d999c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "498dff6adb0e6c20bfd0dc7f4ea71431"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "0261ceb7b4a483df2dc5337da45cd5f2"
  },
  {
    "url": "en/index.html",
    "revision": "292e655df0d7c77a65f60db7a7fd7ffc"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "c9716d8be8b21235ef7bb48edc32d0fe"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "dafc952d0c490709ca4231c10bd70890"
  },
  {
    "url": "guide/changelog.html",
    "revision": "f81de0f4bd61b051de7789ee2e0e7878"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "25613690509a92adcfea8c07eb6653e1"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "70496598950ec654212972aea30a4546"
  },
  {
    "url": "guide/index.html",
    "revision": "46e931f922cc39d489a5dea6866c79a3"
  },
  {
    "url": "guide/installation.html",
    "revision": "db7e208cb4706e12680e0b1cd8a2af08"
  },
  {
    "url": "index.html",
    "revision": "4ed5dd4bdf3e5b079c4f9d5fdb8a385e"
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
