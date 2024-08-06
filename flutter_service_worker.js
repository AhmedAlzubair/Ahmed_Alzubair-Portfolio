'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c328e7349dd1a369612e001980a77960",
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
".git/index": "a90cec550c5e8ee73e75b57b3f112ec5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fae924ea7dd00b4313b35506c35b898f",
".git/logs/refs/heads/main": "1ed79f50ebacebdd69cbab56cce694af",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/08/81787ec4f7c972f1f1ac8b3fe29457a127d479": "70e2c4bba5135fe7da52f088ecd737c5",
".git/objects/0a/1df82ace718f459eb719f74bf201b4b65dace6": "6b8ccafa35a8807712a4ca7931dee061",
".git/objects/0d/3292ff9016532e822b71754910dd53327eb9f2": "e9d703388b38ab39869cdcd136f6978d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/f03cd2151ed36682408413d7511839c214e5f9": "a3bf94c51ed25839234fbfab60f3aa5a",
".git/objects/1a/a236ccb3a294c3b428f6722337a9cc4cd87d92": "c83ce452a75378835aad03d2ba4319fc",
".git/objects/1a/b158eeca89601e267585a47e44cc2fc55e203a": "a7d58eb3c0bf41bab0394aca081f03a7",
".git/objects/1d/0bee93bedfa7c6dc5c7009dea66b307176f3f6": "973a623c2084951fb5238d73feeae532",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/44c9f9a436469306fc7d3edc939179b6c40226": "27bd2dd521b73085dd3e8f0a942ea6f3",
".git/objects/2b/88ded56e91af8e1cc780449122e2eebfe325f1": "dc4044fd769eb08e57a2ef1f129f48e8",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2c/c37859d978674b15359d02e018c73dc46079fa": "932e56931f545462ffa1e38a8d646b1f",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/3a/da4f487b2683919816f6061398f31511551478": "ade4cc284ba479c4fea5a6a6beaafda1",
".git/objects/41/e023d58bbaa3aacf98feaf10c52b1fc1b34a22": "043ff925a0711f7257e88ac880f7e909",
".git/objects/44/4a8e73701ed073f8ae6b7d7fc314ff6c7e583b": "91305055dedee1fe9720427f91b5e50b",
".git/objects/45/c10674cc739db71676e2ca1f67d8c09462c980": "8958efce29d7a0648f66c39054bcd7f0",
".git/objects/49/25e23675878525531d24914810a70ff0f16a14": "b962d0e274e564b2efb7c193bc80008c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/09fd57c3b2f5d08c9913ab8fe62deacd6b8a21": "b4cd78761b111a8a0caa227dcf88935e",
".git/objects/50/0e28cef5a04c0a91aea2ba0c03edfc6a000c8d": "1ec2a78fb6e6bc5b8c8282e5585a5b9f",
".git/objects/51/7bd26a04acbff1951d77a238fafcecf7287739": "896aa0482084cceb7f16d959cf43bd6b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/2b2929482da21760726b66aaf1ea7db2b3a46a": "2017241e809e920df526f6bbf0cbc247",
".git/objects/5f/ab1f1a7b994da7cd8c1460a010950e81374b6c": "dfb52f310c6b16d4b10de524b3aef80b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/67/621ea999948f806d9452b3a5aa8048a25ffe18": "60038a1edad3d7d924db76b9b795f02b",
".git/objects/6b/851bd65b5d6005fadcf9a165c309868da39b06": "25419414a2fd734f95f5197e497d6851",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/65118b7e26167d8dea64adb08c717e3003be2d": "c988e8d24341b9bd8fb05ef673cf44ca",
".git/objects/76/f9b1536168d806afd230f23b3f8aaff861fcc7": "4fea4845ed29583ef28c33944e874804",
".git/objects/77/341bc324c48f21216558aef0ddc9565bbb6625": "61c8f9638cf0038b3296b895d0776fe5",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/530e4ba5399b8df8e18ade417d39b8df388f4d": "a6b5c61a51ab7599bf66bf9e401d7de0",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/e9910017ca0ed897969eef3917ae37f3d4467c": "56a76940f3e61312779c0a6f6b97c4a5",
".git/objects/9a/ca8d656d0a8d2335ed62275dd3009560ae56fa": "9970d2ed311ef6fca3c5785d8857e518",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/945088076f751cc96301ecf8fc5675b0e94315": "4f2fd9291c21b0f42d4580993d464bf6",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b0/f9ad18fb807286bfd462bbeac3be02b56c9c9d": "ce11ef14d9b49799065a96f60c2f34f5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/fff22a8df9cd917893214d6c8d9521246f9bbf": "15f0b4ba5eb1a78ede448c107520c3ee",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bd/6674dc7125f080afeea3ba32efb45df6649c8c": "df3266f767cef0bb72b9fd0c70f538e3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c0/82b36cc19598b1dc196e40dbc4b9cb71ff9434": "80a498f530cf49050d75af0e128a8e99",
".git/objects/c1/1795b876401787d380c49b52d78480e08424a5": "c53a11bc604e9420496e36b4688adbe9",
".git/objects/c2/a36f0495b1010aae14b7ebf34b4fe7c28efeaa": "ae6bebc3ccc29092e7157a7f1d3c882d",
".git/objects/c4/16272a67cdcc33e0ca069d22e4ab9120011341": "69bce8f2b38bf60603cec079ce516ba6",
".git/objects/c6/4416051d6210b8b7d47ec56a1595498bdd717a": "3ead4988a485fb0229701f8b0e163b92",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4275177d94d944f82b8d1d1d7b055b475f95b6": "1039438af51092c1e8b446c55c7c80f6",
".git/objects/d9/7cd86f3935d1680ca33337e1c3514aee008263": "071621c38ba5715b387ce82cfe3a3363",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e9/5222fd57be617f12ae4b63b486b5ec66bb793b": "84b24ef7a9bd135b1154fa9f1017c94b",
".git/objects/e9/9d28c03682f398939bbfa0e81a73bb3b96498c": "89a6ec43d2d419a87cf8a800e7164991",
".git/objects/ea/90acfd2507b247e2a8d164d3b421422f525e46": "2208ba77d0164ee38bc5a918a3652b02",
".git/objects/ec/55edf38cb5e91bdd824f9dd36c9d92371f6c53": "e07d66a4acc0aa3b22e92c58f75b47b1",
".git/objects/ec/c5449c07deee31e718dfbc75f561806ac67a0d": "0fd0889558d15029572882047657a238",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/623a49f3b1ca6419ab9056ee5bd66a0093e152": "c8503de1c8981a0a3c9bc37c028bc8f1",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "58566349c5ea989e440f86f1565a1cc3",
"assets/AssetManifest.bin": "5bc3e8904e804ca76ea6385ef1f6ace8",
"assets/AssetManifest.bin.json": "61e077c037eb3f117bc05698bef654d9",
"assets/AssetManifest.json": "c0d801e5397b97e1b1c0dba8849d5368",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf": "332f82b1a8c1189bfe44102a3fe4dbab",
"assets/assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf": "b1fa8227521c931b34a1e7e14fe6d6ec",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/java-logo.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/icons/java.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/icons/java.svg": "3228948e6e6ab2cdf4927f175abc7327",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/python.png": "54e813c8852fee51993e9b70621c52ab",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/prof.jpg": "5ae2fda1f7e6010de458a5a893828357",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "17bd5ace91236c97115f87c98a2150a3",
"assets/fonts/MaterialIcons-Regular.otf": "39dacba078c7847b61b9031be48d1628",
"assets/NOTICES": "1dfe57e24f0f88e76a97ea007f19afcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/flutter_launcher_icons_lego/assets/lego/flutter_launcher_icons_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/flutter_launcher_icons_lego/assets/lego/flutter_launcher_icons_lego/android.png": "b0e72c4ef0061350db79ed9faab48994",
"assets/packages/flutter_launcher_icons_lego/assets/lego/flutter_launcher_icons_lego/ios.png": "2eb4759fef6a423374bb7895dc43cf4b",
"assets/packages/flutter_launcher_icons_lego/assets/lego/flutter_launcher_icons_lego/web.png": "6a706102320b6a33158469d6b51e8ec7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "93ac6a7c709f81898f3e6bea4d70c854",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "893ee16c6118bdc740dd45983148e02f",
"icons/Icon-192.png": "9c6101a61689df0ea5259ca6baa17a86",
"icons/Icon-512.png": "fb70badc6fd4b9ac4968c39a5e1eb82a",
"icons/Icon-maskable-192.png": "9c6101a61689df0ea5259ca6baa17a86",
"icons/Icon-maskable-512.png": "fb70badc6fd4b9ac4968c39a5e1eb82a",
"index.html": "52792f354db3da25b344fa45d30dee8b",
"/": "52792f354db3da25b344fa45d30dee8b",
"main.dart.js": "0b1152373b14e70b17f8772d3df1d712",
"manifest.json": "9e74531baf2b021d2d1fbc787a266ee1",
"version.json": "5787fb551bdf53fb280519d9cb19fac7"};
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
