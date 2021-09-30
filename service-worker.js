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
    "revision": "df128ea6c9fe967b9b1d3f0c35550841"
  },
  {
    "url": "api/index.html",
    "revision": "ff0aac492bd089b93adf8ed3cead0f99"
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
    "url": "assets/js/13.d6079ace.js",
    "revision": "ad9a08fd7ceba19b62b6f0e6f19a12dd"
  },
  {
    "url": "assets/js/14.b23c52b5.js",
    "revision": "ea6faabc739464e96fea7b45f30aae6b"
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
    "url": "assets/js/18.a795ebbb.js",
    "revision": "1d5a942ef28f1103bd85672714088b0f"
  },
  {
    "url": "assets/js/19.5f105c42.js",
    "revision": "d974c8d75fc6c1055631bac413ec08ef"
  },
  {
    "url": "assets/js/20.b16ade0c.js",
    "revision": "7688261d49d638652e3536b1c3741723"
  },
  {
    "url": "assets/js/21.0dc7af96.js",
    "revision": "dcd805b4a7d21b80708e2cc1ab98b4c1"
  },
  {
    "url": "assets/js/22.28d95f27.js",
    "revision": "253a2343e1bb99085e475132636832a5"
  },
  {
    "url": "assets/js/23.6225ef61.js",
    "revision": "cc27519dff34d00fcb9195c420e51daa"
  },
  {
    "url": "assets/js/24.b415f872.js",
    "revision": "fa0705363e0228580e3b87b19a290d77"
  },
  {
    "url": "assets/js/25.b760a364.js",
    "revision": "39c258d2a37d9e2d5e47bcb21b43d9d0"
  },
  {
    "url": "assets/js/26.d3973802.js",
    "revision": "96a95e5e191a71b22c14c7201bf9ff5c"
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
    "url": "assets/js/4.0f83cc12.js",
    "revision": "f46bc587ca531e40cf38ad0e0cad5a3f"
  },
  {
    "url": "assets/js/5.0f717342.js",
    "revision": "b2677280453a5cc498689b22597b8c89"
  },
  {
    "url": "assets/js/6.33824b53.js",
    "revision": "8bdd096fbd36916d5a2a23f44dc5b5bd"
  },
  {
    "url": "assets/js/7.f5205c40.js",
    "revision": "41c78b15c16abef69eff4731ac909749"
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
    "url": "assets/js/app.720bd643.js",
    "revision": "7be5061f81fb856630000be387584f9b"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "en/api/index.html",
    "revision": "112a9fdf615fd6a485bc0e5926a4911f"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "936b76bfdb5f02cbe5ffa2b76080e9dd"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "af31d2600293d1b07c1bfa599e31624b"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "1442e0892f95980c22e1799e89d646a9"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "33226e060c4a93d010b83f7bc054d1f4"
  },
  {
    "url": "en/guide/index.html",
    "revision": "f0cbf418e08ce17eba9d570c21e7d60b"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "a3d17da8989a215110847693ad7cdcc1"
  },
  {
    "url": "en/index.html",
    "revision": "313b3a06fa60966746332eb064cc2d6a"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "c12e4bcc8f73a89d4cef48bf859cb2e5"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "8a8db2eccba3001d1bf88eacebda9eff"
  },
  {
    "url": "guide/changelog.html",
    "revision": "6318a5d91f6ad05659a0c11e9507c742"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "032abf5d4e6b39ff3a7a36af2bb0e7c8"
  },
  {
    "url": "guide/index.html",
    "revision": "98fa0150d3a6f0a0c0c7827e1c987038"
  },
  {
    "url": "guide/installation.html",
    "revision": "224abf705b65390f30fb24836892d178"
  },
  {
    "url": "index.html",
    "revision": "23378bb4042e62f2b0ec9fbb3209872c"
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
