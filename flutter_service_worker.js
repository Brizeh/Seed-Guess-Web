'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f9073b1bb9e62332eb7037c7a87610d",
"assets/AssetManifest.bin.json": "7352b14e67e95fe0ba06b36f0cb7fe1b",
"assets/assets/unamed_seeds/Alfalfa.jpg": "32763c18b8477ab57c87a7f6b46ddff8",
"assets/assets/unamed_seeds/BirdsFootTrefoil.jpg": "d8ab97a373f1146619a9472fb5a38ed3",
"assets/assets/unamed_seeds/BlackCommonBean1.jpg": "863f7fa357202cf41ddb84b1d19a0010",
"assets/assets/unamed_seeds/BlackCommonBean2.jpg": "421ac3319b35a4c177a9cc4230181c53",
"assets/assets/unamed_seeds/BroadBean1.jpg": "d67b5548f72873d8c809734d61392203",
"assets/assets/unamed_seeds/BroadBean2.jpg": "d4f76c31fe8e53f9db123891575d9dde",
"assets/assets/unamed_seeds/BroadBean3.jpg": "aa6765c74b73d49f27d2995b2476da21",
"assets/assets/unamed_seeds/Chickpea.jpg": "defe57c39af2339c0fa4f7d4cc4c07fb",
"assets/assets/unamed_seeds/CommonSainfoin.jpg": "b28ba0209a8cf934caf1e35b6d7c011d",
"assets/assets/unamed_seeds/FieldPea.jpg": "52523e3c490a5d09ea3ec9309fd9e38a",
"assets/assets/unamed_seeds/GrassPea.jpg": "cb2b1c881deec47bb90105c4380e652b",
"assets/assets/unamed_seeds/Hemp.jpg": "81be16a25b046e9844affc518379b6b5",
"assets/assets/unamed_seeds/Lentil1.jpg": "08751ee34574339c6d30a49eba008a52",
"assets/assets/unamed_seeds/Lentil2.jpg": "12877322f516f26fd3e84727169afef7",
"assets/assets/unamed_seeds/Linseed1.jpg": "fa5756dec84c32d0ef38cd760b0eebbc",
"assets/assets/unamed_seeds/Linseed2.jpg": "909f7eff6db293f52277633f99cb6e0b",
"assets/assets/unamed_seeds/Narrowleaf_BlueLupin.jpg": "f31feff83eae6456d319e067734f20b3",
"assets/assets/unamed_seeds/Peanut.jpg": "a580f1a25cb279b4eacd2b51073f543a",
"assets/assets/unamed_seeds/RedClover.jpg": "7a9c89bcb9020cda5770e2882a39af29",
"assets/assets/unamed_seeds/RoundPea.jpg": "1d8b400026d0c820c74ee47c81885571",
"assets/assets/unamed_seeds/Soybean.jpg": "ac44f9793511a7757e0db2c172170743",
"assets/assets/unamed_seeds/Sugarbeet1.jpg": "15bfaabd1c7b6dd74cef18ca035923d3",
"assets/assets/unamed_seeds/Sugarbeet2.jpg": "02df429d386ac45164a62db8dbd5dc2e",
"assets/assets/unamed_seeds/SugarbeetPelleted.jpg": "823fdd272efe849e170173992d07309c",
"assets/assets/unamed_seeds/Sunflower_Confectionary.jpg": "47f4f1f69148a76580465862821de7f8",
"assets/assets/unamed_seeds/Sunflower_Oil.jpg": "6fd38165683a2fa1a63543b1d93d2acb",
"assets/assets/unamed_seeds/Tobacco.jpg": "08ced04a82f8184d640ec877bb5e6f08",
"assets/assets/unamed_seeds/WhiteClover.jpg": "469a98b84f84b10819d20e8261ec1f11",
"assets/assets/unamed_seeds/WhiteCommonBean.jpg": "6a04312e315979fb354cce3baf90c9cb",
"assets/assets/unamed_seeds/YellowLupin.jpg": "d61f0cbbf5f9b41b9053a58cfcbbefd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "a011d7787058c1849d677cf8385eab5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "dfcd0581e0a6a09a00fdf9b0134f6e86",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a20556600db0ac98e3564c4a31957d7",
"/": "6a20556600db0ac98e3564c4a31957d7",
"main.dart.js": "4dbc5cd293c1175e44a27441ec1524e5",
"manifest.json": "6d1eea4c0b963285bc78e91a6b7e0f20",
"version.json": "0af8ec6e5010113ec1e6ddf112bca088"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
