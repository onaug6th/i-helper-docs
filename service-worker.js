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
    "revision": "6e7330cb6e34f7d629f5833269206221"
  },
  {
    "url": "api/index.html",
    "revision": "dab286ef2c1cd7ccbb99fa8a57f455ff"
  },
  {
    "url": "assets/css/0.styles.69f3d701.css",
    "revision": "b1b696bca90978116173d63c246170bb"
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
    "url": "assets/js/10.32a5ad0e.js",
    "revision": "9c5ac960976c689196c6f2f47ca57224"
  },
  {
    "url": "assets/js/11.b14b32fd.js",
    "revision": "50cac600f637d28e59099deb1e62fa4e"
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
    "url": "assets/js/14.7250d252.js",
    "revision": "0c5b9754077ddb669026505ec2e90ae2"
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
    "url": "assets/js/5.15e72516.js",
    "revision": "8165a965c4663860adeff52a34d3fa0a"
  },
  {
    "url": "assets/js/6.5698b173.js",
    "revision": "9c95772cb1496aa4f77e43062991a26f"
  },
  {
    "url": "assets/js/7.36d1dcb5.js",
    "revision": "8c5a43302a5f6acea980b6805d765c01"
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
    "url": "assets/js/app.88083844.js",
    "revision": "38f589f3da7ddd61e3c6921687bf952c"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "en/api/index.html",
    "revision": "2f38cbfea2a2e0f74b26bb28af76cd6d"
  },
  {
    "url": "en/guide/advanced/new-plugin.html",
    "revision": "c45caacd2f0dc3ddb9010fdc89b25ed2"
  },
  {
    "url": "en/guide/advanced/plugin-config.html",
    "revision": "aaf1befddda0e9a0f3efa21d5745634b"
  },
  {
    "url": "en/guide/changelog.html",
    "revision": "400f2d9781b03960084f82f3da342570"
  },
  {
    "url": "en/guide/essentials/index.html",
    "revision": "711cb8b0fb0363de3efa72880ee76da1"
  },
  {
    "url": "en/guide/index.html",
    "revision": "411e541c37f31eeee94b058b730cb12a"
  },
  {
    "url": "en/guide/installation.html",
    "revision": "e08c34f513ff36cc23546e0967feaeb2"
  },
  {
    "url": "en/index.html",
    "revision": "2a523b4f1cc441d2f87fadf784d23062"
  },
  {
    "url": "guide/advanced/new-plugin.html",
    "revision": "cf00d93cfb91a82a25e733b16cfe4e33"
  },
  {
    "url": "guide/advanced/plugin-config.html",
    "revision": "a58279a63ce788e4baa9d55e55075fd4"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ca987510c9d1c8fbbe19a62704f9c042"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "010f3a580b85d0a8c707588d0f0a817b"
  },
  {
    "url": "guide/index.html",
    "revision": "225f70ddb36eb52b4580ce4d2e5b9411"
  },
  {
    "url": "guide/installation.html",
    "revision": "07e058bf8abe9f7c153cb7ddbee65283"
  },
  {
    "url": "index.html",
    "revision": "45d3149e86ac5d2617f6f42bdaebf73b"
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
