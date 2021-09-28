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
    "revision": "7c032102b353a9f529fe35d86ce52512"
  },
  {
    "url": "api/index.html",
    "revision": "061c8138675152209f0c50f3f38f95a3"
  },
  {
    "url": "assets/css/0.styles.61226bc0.css",
    "revision": "4fe13230ff139055e9ce78fd16136909"
  },
  {
    "url": "assets/img/1.ad4ba7b5.png",
    "revision": "ad4ba7b55ddef8d5fc143fa56a275f48"
  },
  {
    "url": "assets/img/1.b6ff8fcc.png",
    "revision": "b6ff8fcc69c5182ad5f3ec0377815c0c"
  },
  {
    "url": "assets/img/1.bc931ddb.png",
    "revision": "bc931ddb0578b1e22bc11201ada196c4"
  },
  {
    "url": "assets/img/2-1.37926435.png",
    "revision": "37926435aa9c9e9147ddfc334c5040e9"
  },
  {
    "url": "assets/img/2.1611e0ef.png",
    "revision": "1611e0ef5b24896e2bedeb9ce1a5a18a"
  },
  {
    "url": "assets/img/2.180799fa.png",
    "revision": "180799fa20e170156bd5899e89ef200d"
  },
  {
    "url": "assets/img/3-1.91fb13ee.png",
    "revision": "91fb13eeabfd941b3d9d1226944bdfa8"
  },
  {
    "url": "assets/img/3-2.ca4e9116.png",
    "revision": "ca4e911643f48dc5a4c5c15bd462a063"
  },
  {
    "url": "assets/img/3.ac9c8afb.png",
    "revision": "ac9c8afbcf13282b78e51e76d099d71e"
  },
  {
    "url": "assets/img/3.f0d54440.png",
    "revision": "f0d544400303b25f93fe2f96353e3a83"
  },
  {
    "url": "assets/img/4.c1e167fa.png",
    "revision": "c1e167fa9c49c96ad26660d63e60aac6"
  },
  {
    "url": "assets/img/5.1c2dc0da.png",
    "revision": "1c2dc0daac6f0de6f7499b1e9879530c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c460f805.js",
    "revision": "22164bab8c41e176db77cddf10ecc5b7"
  },
  {
    "url": "assets/js/11.db716319.js",
    "revision": "19994f08a2e3a009ef7addf6d51772e7"
  },
  {
    "url": "assets/js/12.90a0ed37.js",
    "revision": "83ce7fcbba48056e1cceac4103a3c2af"
  },
  {
    "url": "assets/js/13.adebc1f3.js",
    "revision": "a1f3ef0c9a1478408c914fe513b0b849"
  },
  {
    "url": "assets/js/14.0328d34e.js",
    "revision": "2695ab60ef10b5bc23babcd2ec54296e"
  },
  {
    "url": "assets/js/15.807e75e9.js",
    "revision": "f0cafa4c4a059833e8b45d6e4e2b3392"
  },
  {
    "url": "assets/js/16.1f7c55c8.js",
    "revision": "f3b85a07da70ff254338294a94443873"
  },
  {
    "url": "assets/js/17.92ad70fe.js",
    "revision": "0361c1fef6092deb6f023a47be493462"
  },
  {
    "url": "assets/js/18.97bf1d2b.js",
    "revision": "e4ea1738b8bfb456e5ef8e8bf676ce36"
  },
  {
    "url": "assets/js/19.b5bd17b9.js",
    "revision": "a01f0663470a1c96b6a18b7a62c0092e"
  },
  {
    "url": "assets/js/20.6cd2afd3.js",
    "revision": "995125c3a4d9f1cfea9ac3f8eac8f7bf"
  },
  {
    "url": "assets/js/21.edd70977.js",
    "revision": "70c941ddb1906b09579bbec07e763473"
  },
  {
    "url": "assets/js/22.d96f3f8e.js",
    "revision": "79e9d952b463aaa50890d3d5fb18fa65"
  },
  {
    "url": "assets/js/23.7875e637.js",
    "revision": "0801a1df8609483987e57712d8cb8dba"
  },
  {
    "url": "assets/js/24.d69df97e.js",
    "revision": "6c5f745a669aab24153ec7783d44bfc6"
  },
  {
    "url": "assets/js/25.ca60d27f.js",
    "revision": "b656b690d5446c96e453bc6477a1de68"
  },
  {
    "url": "assets/js/26.3e77d9a1.js",
    "revision": "3ebf6c49de08c8bc104023b9eca6a81b"
  },
  {
    "url": "assets/js/27.4a608610.js",
    "revision": "23e8800b94d579dec793846e866fc50b"
  },
  {
    "url": "assets/js/3.74c45856.js",
    "revision": "0566b8f28ff82bae79e8417f4ac2f410"
  },
  {
    "url": "assets/js/4.0a4340b4.js",
    "revision": "3bf0f7f742837c6c0adafbf20612c151"
  },
  {
    "url": "assets/js/5.5380043f.js",
    "revision": "c794d24a534d35630c2b8a7d1074a295"
  },
  {
    "url": "assets/js/6.8d6449a0.js",
    "revision": "3b8b4413f0a074975d19d93a8a3eb414"
  },
  {
    "url": "assets/js/7.46a79157.js",
    "revision": "a7ce2b89655e55fffb99d1044c150343"
  },
  {
    "url": "assets/js/8.c58f8912.js",
    "revision": "4b9c32f3771ce4e8039be6be0c8355aa"
  },
  {
    "url": "assets/js/9.9ab499af.js",
    "revision": "d3e7d735e1820a858ec81981ad100ed4"
  },
  {
    "url": "assets/js/app.60070c97.js",
    "revision": "126326d3eca7ed7a2fe851f7a5845cd5"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "en/api/index.html",
    "revision": "3b08966553db5c9b54e34a1a20aafaf5"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "5a67c226956aebc21a1ae0c6c7e2de46"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "641075dad43abc359872902e1689686f"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "83efe3274f7e153544f60430b4462686"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "3356368291231a16422969876b99bd0c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "40dde725c385782d58dc1ca5e5c5cb8e"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "88b07c81ec0d2abf31d45e9047f7b827"
  },
  {
    "url": "en/index.html",
    "revision": "8ab67a83b1c859984c6c5e31d6cb6273"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "0ddee284288d1bf7f0d174bfaa4a0849"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "e233fc0402c1ebd49a56c518e4ef0efd"
  },
  {
    "url": "guide/changelog.html",
    "revision": "3aec33049442e7ae090542c8d327208a"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "b3f8d6c058793d11c06e88b078057be0"
  },
  {
    "url": "guide/index.html",
    "revision": "866222460a0cbc8b66c2767414dc82e9"
  },
  {
    "url": "guide/installation.html",
    "revision": "825fd2ea313aa15e54e521eda39ca087"
  },
  {
    "url": "index.html",
    "revision": "bdf1dc92b5d030f9f2dd7bb66b4236ca"
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
