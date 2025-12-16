'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d26798159799dbecc350cb72784ae585",
".git/config": "494ac970b92af944a27677a663d9ced1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "75aab0f558875b033c9eb55f796500ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0fb99335b174abf41396e83240ffe2a",
".git/logs/refs/heads/main": "50c5a8ddcf1d8e67fd3e24b96e8c7797",
".git/logs/refs/remotes/origin/main": "40718b614afed1a39892e30d31b5ada1",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/cf968b292a730d028ee01da7a55ff3d2d8868b": "db817b70c4b1c21ab52011260878b807",
".git/objects/0a/0b373854d5ddbd804fcb017f57edcb16e59f12": "9ecb86a3453adc74f86e1f60d4b9f5d9",
".git/objects/11/c00f3305a78f67b5de31a74aeb669a10fac1f2": "1679815fc6ebf73b01e4ff5ff2bd368c",
".git/objects/12/a6bfa73b081fff47cc480651d9c87b46005571": "feaa50eb63b0ff89ed1d5b5951d8fca2",
".git/objects/16/c167fbfcdcaee2560ac71926c9ecc36b85b784": "23d084447e52f4c493303eba1029a7fa",
".git/objects/17/922289ec111b78fb7ebd9316f2a3f01137b77e": "d5240d455a6327213fae360339d8ba4a",
".git/objects/20/f465ee1efa5b500926fdd150c68964d6eaccd7": "ee9906aca1b5269093db1a42c3296e3d",
".git/objects/22/ce6e2b1106f0dd5b8fd2410872a211fb7bf2cf": "4101aa71d9ac2361dad793e8ee8aed5d",
".git/objects/22/ddb13e168fe914aeb60e850a5dd83ba3a06689": "a3772c910856d12cd1656d82193c9df5",
".git/objects/27/784810bd6223a384a0cbc3290dbef3d5bc843f": "d93f4cf654ac6a57e2c627c30c60c1a5",
".git/objects/2c/2af943d5dd8ae341786c089a55a38058fe90fc": "ef945ba5b03d0ca8c19a840e90b117ad",
".git/objects/32/ff419d94f040d794f60c83d0d9b75ca29fc875": "8ccd227ac9289b3bed11b8cb067a3d91",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/5e20194d56264eb2c3e84f56056e378b68abcf": "d3c8e5e128d3e97a59070392e1a8daf4",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/5684c355ae32efc0f5fc29bf48a5ec22a1cafc": "9b01bf3eb99f6899d569a8acb13efb9d",
".git/objects/42/f1a171dbc0046f351d6973e734864772b97340": "7dc92bb06b09a7e0d9f3a944207ccf12",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e06a0f7e5baafb27615db078dbc3882f8e0348": "9a15591fc8794d4686ebce2a047fc2ee",
".git/objects/4c/12d90ae21b7c52d6e939b1e8ee61376b1da128": "be22b8005d33d4f455aea246cc7e6335",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/57/15f03ed4bd06733666d196513802c488989070": "a7a0cd4a9c334ff0648dafbeef9167cc",
".git/objects/59/c1fb55bbd77f88f9758f0b2c2e2550e65e1036": "56d04c9ba9dac9df3f5555ecd85f7ccb",
".git/objects/63/1921c56ccc81db9211aded37db64c75aa39ff0": "1e164b113e52218c3ce425df14d5008d",
".git/objects/63/cb327c234b43c0d4775da9014b3736e0e70329": "5cab9dbb9238d5c68219bd77b0cd5b11",
".git/objects/66/71a7645640b8de04e7c3458380089c5c2e70bf": "dd090e551da18a8af67dd95c4c8ae56b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/704e5cb0f8a1077bae3f7db197888c3ce9e638": "36ea826a7d390b37f0476e826bbf59e4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/9db366b9bd1ab1fb6c4e4c31dec97fecf7d127": "8e89b342dfea5aaade0a120b794afd7a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/55d23d5be636602b8dcb704584d1acb31fea13": "6787b996c2fb3398c41e750598e09116",
".git/objects/93/88959b8c4cc86cb6668895b8321928baeb2995": "db96ce9136d254a5202b6600c792253f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/79cb661fd879eff1c7d2e34f3d3559470a106c": "4c3b76f246be8e4a4a76f08557d4824d",
".git/objects/97/132cb8148ca052e0cb9c93e9f61f1c9237d9ea": "7d2d1b0c41513144f7fb9ee1d1ad3606",
".git/objects/9c/21b564519726aa24be9d0c818b39011feffe2f": "8a08ed0c1b14ea74951f68da7f38d3e9",
".git/objects/9f/067452f475fa913e9f9c9a3df65d412e5a21f5": "c529e4b3102e47b6883bbb75390aea9f",
".git/objects/a4/0343d4371dc09e6558b8777797093ff53954ef": "84f6727d3d585f831bba805c40c83336",
".git/objects/a4/86fec685138b233f5263799500935137820c01": "8033f2112438fb1037fc543da6c7d4f0",
".git/objects/a6/3d19511ec804d462de4c23a961148a35354882": "bd41ccfcba60944a4016bb7726fd1d1c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/d0d3dc7a9e22a3dab0329166673f7da0b74f22": "3247621dca51c9fccf45f7f513482121",
".git/objects/ab/5989663cc6716b9b232891de47897fe18b06bf": "d6f11b918ad5402ea8d4ec6bb5021a83",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/9ccb23d9ce50262527b6a611acfb742aecfd84": "7c05a1a0fbbdb71a52efee728d313e9c",
".git/objects/b1/574b3a037c25bebbcad83ee78c3dd67f77a90b": "1a5333f013b1cb56fe7f92c30be67c0c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c1/0471c7f0cbf0702147ab31f971d185d788a471": "352edc146d2a6aa5b8c2502cfb5e1e69",
".git/objects/c4/66e2f7ea7bb78a0bc6f3a1f9efe99feb2d3a81": "88a40b01c09ad8be1d62f97cd7b5bab7",
".git/objects/c7/5045eba858472bedd518887a133d4328eec57c": "61822ba5dd40984a090431f65debfd87",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/91f98463fa4d7a2bf123f8962c0e001047cc95": "9e93ebeb582791e9661f42f7452e5cd8",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/f4807014cb3302e7bb97d2b41388c99c425699": "a5651cb5f107e46fef19f090e9f50287",
".git/objects/d1/d95bb406b2c06e4358a3c4b0591a8442f6bbb1": "bec11c3e7a41a3949c713b51c7ace67e",
".git/objects/d2/a8b4d8be82836914142a6b2fb64be840975d22": "6d39f9b8213372aa3cf2c23258576c8a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/47ed4e04f796c2072cf9a49fb041d8a246facd": "fb3846c79311dd431b596a9ac90a79b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/04b7a710b80d368c93e287eee2191d6936043f": "9c78635ac708c1dc49859ce7c14cff9e",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/17f19a9c1fbf6e2552a2485e7bb12512bdebd6": "3aa11f55a181ebb309f017ffac296830",
".git/objects/de/e50cb902ec3d86a6682ddadb0d1771edb5e123": "0c5ec514449f668054ba4333905a281c",
".git/objects/e4/16b06584fa87014fbc836ae42f89f568c62c6a": "43c516d710185457b69ee30fcd7685f1",
".git/objects/e6/0810f544a807235e9c7d189719b1ab2aa46d83": "4f228216dffcaa7310f962e5fe1b5994",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/45bf8d5f0e39ac86dafe0100cf38ae6a6a2cea": "33bd3d14ff4a7905543c0bb4ecf3ede8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f97e5c31ca5b410ac99cc748334258badb9155": "704d8cdf34020c5df309dcd1c13894ca",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8ed1541560e3d3ebfca70a2355e48725c2fc1a": "e9149e7375dc6111d1104617330da2b6",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/962bfb8b4347cbb613c0cad2ce4a420c8c4755": "92a25efa087cd91e6af227a8d2ee071c",
".git/objects/f9/1d800c48052eeec8f1a35e2ab98e8c2842e09a": "fa76772de8102bfe18a6f8c4e43d3c91",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/b0b1bff29d3df55bb1042eab8f53ef4195006a": "813cf067072984ca77bb20f7a1c6f3eb",
".git/refs/heads/main": "aa8492ea00e459f9831a6482fd76c34e",
".git/refs/remotes/origin/main": "aa8492ea00e459f9831a6482fd76c34e",
"assets/AssetManifest.bin": "5f9073b1bb9e62332eb7037c7a87610d",
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
"flutter_bootstrap.js": "f6494a5da7a8a60be510b0f6cfa99807",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "587e03d7730bf515268fd1f21b5d4ba2",
"/": "587e03d7730bf515268fd1f21b5d4ba2",
"main.dart.js": "c0eeff9194964cf01dfb6b9d85e5313b",
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
