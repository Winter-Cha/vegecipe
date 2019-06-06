define(['dart_sdk', 'packages/pwa/worker', 'packages/core/core', 'packages/service_worker/src/js_adapter'], function(dart_sdk, worker, core, js_adapter) {
  'use strict';
  const core$ = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const worker$ = worker.worker;
  const src__networking__finnkino_api = core.src__networking__finnkino_api;
  const src__service_worker_api = js_adapter.src__service_worker_api;
  const pwa = Object.create(dart.library);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core$.String)))();
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__service_worker_api.Response)))();
  let RequestToFutureOfResponse = () => (RequestToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__service_worker_api.Request])))();
  let const$;
  pwa.main = function() {
    let cache = new worker$.DynamicCache.new("inkino-cache", {maxAge: const$ || (const$ = dart.const(new core$.Duration.new({days: 1})))});
    let _ = new worker$.Worker.new();
    _.offlineUrls = JSArrayOfString().of(["./", "./main.dart.js", "./main.dart.js_1.part.js", "./main.dart.js_2.part.js", "./main.dart.js_3.part.js", "./main.dart.js_4.part.js", "./main.dart.js_5.part.js", "./main.dart.js_6.part.js", "./images/arrow_drop_down.svg", "./images/back.svg", "./images/background-image.jpg", "./images/close.svg", "./images/coming-soon.svg", "./images/fallback-icon.svg", "./images/favicon.png", "./images/info.svg", "./images/logo.png", "./images/now-in-theaters.svg", "./images/place.svg", "./images/profile.svg", "./images/search.svg", "./images/showtimes.svg", "./images/theaters.svg", "./manifest.json"]);
    _.router.registerGetUrl(src__networking__finnkino_api.FinnkinoApi.enBaseUrl, dart.fn(request => cache.cacheFirst(request), RequestToFutureOfResponse()));
    _.router.registerGetUrl(src__networking__finnkino_api.FinnkinoApi.fiBaseUrl, dart.fn(request => cache.cacheFirst(request), RequestToFutureOfResponse()));
    _.run({version: "6"});
  };
  dart.trackLibraries("web/pwa.ddc", {
    "pwa.dart": pwa
  }, '{"version":3,"sourceRoot":"","sources":["pwa.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAIE,QAAM,YAAQ,wBAAY,CAAC,yBAAwB,mCAAM,kBAAQ,QAAO;AAExE,kCAAM;oBACY,sBACd,MACA,kBACA,4BACA,4BACA,4BACA,4BACA,4BACA,4BACA,gCACA,qBACA,iCACA,sBACA,4BACA,8BACA,wBACA,qBACA,qBACA,gCACA,sBACA,wBACA,uBACA,0BACA,yBACA;4BAGE,yCAAW,UAAU,EAAE,QAAC,OAAO,IAAK,KAAK,WAAW,CAAC,OAAO;4BAE5D,yCAAW,UAAU,EAAE,QAAC,OAAO,IAAK,KAAK,WAAW,CAAC,OAAO;oBACjD;EACnB","file":"pwa.ddc.js"}');
  // Exports:
  return {
    pwa: pwa
  };
});

//# sourceMappingURL=pwa.ddc.js.map
