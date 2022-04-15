'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c73da3646a1ae8571ce319de7711195c",
"index.html": "c0c29f6f0cfee7d2edbbbb2364180fa3",
"/": "c0c29f6f0cfee7d2edbbbb2364180fa3",
"main.dart.js": "734190c63479083c28bc7a4c2957bab0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fa71d9a174d5f4db3c53d7c5dc7661a7",
".git/config": "43c75ba731ad1f6a39ca4a120cd65a63",
".git/objects/92/e676b2381f3f46baf388c3c11ca7be24816fcd": "34ba1e6cbcb7e8ce340003ce4371fa8d",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/3d/c38c5541c06350619676d195b0239a044c05aa": "269d78c05080a4738223f7e29b1f63cb",
".git/objects/67/4f309f219ef65ababbb17d28d9769c87152f1a": "db2ab87119854b3613f99c967da153c9",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/9d/4f6b03afcf387254880e946dfcf211d116bc61": "81b82153e71a42b0554279ebef50fb0e",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/d0/a490607849aff2757c8bd31fbef8086c8a98ea": "4155f5f8460b1bc21b0eca70f02cb62e",
".git/objects/da/94a49aa0c4936212b7a9a18e15649c615761eb": "a154c76cf1a28940b70672b05d49a856",
".git/objects/bd/95b6cb4b37d2da43b964e447a24ae210f76a11": "0dfbe89eae933bbadbdcf88537766b01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/c58dfdd4cff6c35f57bfcedaf321fd0fed8493": "cb05ddc82332b79b710c49b280ff663e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5e394565febe8d762bc299f263f11268e03aa9": "0ff780ea74401259866c1409e4dc9030",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/ee/04bf307e54d8d936c6c280b13df93bf8a70f8d": "752fef2456b77331c8fd95083b0cc2cb",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f2/a787bdf6c01552b5c00ab1bd7e3a490bed7920": "97b93c7831695a3bbf0c511ca1adbf6e",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/e3/21d32fcef69b8f19fb7457055efe671552ccb4": "5140eb0982980ce9a26e93acadb295a6",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/ca/d5f6a722e98bd2cfe7b9ebfb4ece0b292dc0e3": "30ed83e576667ca72ef479247cbc01cc",
".git/objects/ca/c91254541b10061a5fa3f01e5707ad2a4451bf": "b3320865c0abad5ea97fceecdadf91eb",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/27/4c2f67809aace0d4c38a82dad3fa25e6ea6896": "4234515e15a24926e5979d4fc1691c90",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/4c/b22e2ed576ed8195ab9435c4b776d3fcf4d853": "becb9e2998cef4701d9a5b5c43c93737",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/5c/66210d84255f852d4d6c5d40c745bf0ad4a6e1": "0ab0e68cb49805d15d9c143e1acbe325",
".git/objects/37/cd4475dbfd4c4e99fc8a3d203add6acd71c010": "b26db885b28614cde1243de8380e882d",
".git/objects/37/91ed6fb4d490ad8d70a8c79e7c8213edb81109": "64fd2ac806d67725458b15f1dc206722",
".git/objects/08/d6017f2f7b353d6e3a9940cdeb3cfec1f77cae": "7197a95a526d37985e5ad0ed63f30ade",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/99/f4bbdb61d23aad9e0c159c8f3090f5c7ab9002": "1851ba79437d62f9b14c9de24ab76bac",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/dd9fcd10eb8ceaa377c86f2b6712c0be8e62f6": "487b22437b5cf572c7a9d3f6b88f025e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/906078d55d5517c6c9fd239344dd8ec77e8d84": "590aa83a6fc4b12b4ac0596619c4c72b",
".git/objects/e7/17c651a0b26ae56a8c459066a42d1f64216c7e": "5988b30dbeb39761f66e6d8373a3fb0c",
".git/objects/ce/94b1233ae887a723ed7bfc7cc537c2159924bf": "d599c63c5a8819e682237ebe9aac01cd",
".git/objects/e0/6f3d093455396ef9173ae2cdcf297e59107fc8": "0aaa038bf86ae6d01215aebe59b5baa9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/84/8effd18100751f32b9b60b3596d1cc9ca1b073": "7b5ea2f4f2f980f664d5d9c6d543a485",
".git/objects/12/595c17ac9eeeede1e99c2fd89d9b9e2b61f7c8": "cd3f47c7befaa539e9b87583513af1d3",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/22/7b44cff239d26a8b5038d5391cb9804e810def": "a00fc33c31188ee0c99e0f5ea6f4a9c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa3bb527c7b58690251945442c496383",
".git/logs/refs/heads/main": "90174d10aa8e1012e708cdd4a8299ea4",
".git/logs/refs/remotes/origin/main": "91c298ffe2e5b75c3e37a59a781f0a6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "52c54cac03bed29889749d8c68773ca0",
".git/refs/remotes/origin/main": "52c54cac03bed29889749d8c68773ca0",
".git/index": "15e6007a388746101e6e0a3387b109f3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "e936d9ad772a6920bf261fe53e2c664b",
"assets/NOTICES": "7577bd2e993fb7f4a6c1a9b20658a440",
"assets/FontManifest.json": "325ca9392a51af4790c21b4bfcbdaf07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/user_board.png": "94991d2bafc3657e1f5cbce9667c5d4a",
"assets/assets/images/driver_board.png": "435bc411d944efbbe2386fdfa1789a6d",
"assets/assets/images/header_image1.jpg": "976b40f3dc84978cfa3fb50ba91d5cba",
"assets/assets/images/header_image3.jpg": "7bc6680a09571c297a816502d2b3637a",
"assets/assets/images/mockup1.png": "ed5ceadf4b1a22fb80b18bc6a985a863",
"assets/assets/images/mockup2.png": "5e9808e26ddb0dacf39b486d8eec41a8",
"assets/assets/images/mockup3.png": "b6b41696e8c22323925666a1f38e9413",
"assets/assets/images/logo-header.png": "7c24f4ff2cc29041869205b91119b32a",
"assets/assets/images/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/header_image.jpg": "20c5ec5ebefee9470c9e824736d1a9d9",
"assets/assets/images/user_borad_header.png": "21210a2d53eaaa0a44f0a6f326d15b77",
"assets/assets/images/vespa.jpg": "127975c7dda20e20da1b0583eedfdfc6",
"assets/assets/images/3.png": "257082063f851fb79df904c73f00ecc7",
"assets/assets/fonts/my_font.ttf": "2daad281903d63c54e67c0bba8b606cb",
"assets/assets/fonts/hakm.ttf": "1356424b9e0c2e5c6452e134d732b4a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
