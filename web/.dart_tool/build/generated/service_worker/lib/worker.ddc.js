define(['dart_sdk', 'packages/service_worker/src/js_adapter'], function(dart_sdk, js_adapter) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__service_worker_api = js_adapter.src__service_worker_api;
  const worker = Object.create(dart.library);
  dart.defineLazy(worker, {
    /*worker._self*/get _self() {
      return src__service_worker_api.ServiceWorkerGlobalScope.globalScope;
    },
    set _self(_) {}
  });
  dart.copyProperties(worker, {
    get caches() {
      return worker._self.caches;
    }
  });
  dart.copyProperties(worker, {
    get clients() {
      return worker._self.clients;
    }
  });
  dart.copyProperties(worker, {
    get registration() {
      return worker._self.registration;
    }
  });
  dart.copyProperties(worker, {
    get onActivate() {
      return worker._self.onActivate;
    }
  });
  dart.copyProperties(worker, {
    get onFetch() {
      return worker._self.onFetch;
    }
  });
  dart.copyProperties(worker, {
    get onInstall() {
      return worker._self.onInstall;
    }
  });
  dart.copyProperties(worker, {
    get onMessage() {
      return worker._self.onMessage;
    }
  });
  dart.copyProperties(worker, {
    get onNotificationClick() {
      return worker._self.onNotificationClick;
    }
  });
  dart.copyProperties(worker, {
    get onPush() {
      return worker._self.onPush;
    }
  });
  dart.copyProperties(worker, {
    get onPushSubscriptionChange() {
      return worker._self.onPushSubscriptionChange;
    }
  });
  worker.skipWaiting = function() {
    return worker._self.skipWaiting();
  };
  worker.addEventListener = function(K, type, listener, useCapture) {
    if (useCapture === void 0) useCapture = null;
    return worker._self.addEventListener(K, type, listener, useCapture);
  };
  worker.fetch = function(request, requestInit) {
    if (requestInit === void 0) requestInit = null;
    return worker._self.fetch(request, requestInit);
  };
  dart.copyProperties(worker, {
    get indexedDB() {
      return worker._self.indexedDB;
    }
  });
  dart.copyProperties(worker, {
    get location() {
      return worker._self.location;
    }
  });
  dart.trackLibraries("packages/service_worker/worker.ddc", {
    "package:service_worker/worker.dart": worker
  }, '{"version":3,"sourceRoot":"","sources":["worker.dart"],"names":[],"mappings":";;;;;;;;MASyB,YAAK;YAAG,iDAAwB,YAAY;;;;;;YAG1C,aAAK,OAAO;;;;;YAGH,aAAK,QAAQ;;;;;YAIH,aAAK,aAAa;;;;;YAKtB,aAAK,WAAW;;;;;YAIxB,aAAK,QAAQ;;;;;YAKT,aAAK,UAAU;;;;;YAYL,aAAK,UAAU;;;;;YAIV,aAAK,oBAAoB;;;;;YAI9C,aAAK,OAAO;;;;;YAMxC,aAAK,yBAAyB;;;;UAIJ,aAAK,YAAY;EAAE;wCAGxB,IAAW,EAAE,QAAiB,EAAG,UAAe;+BAAV;UAC3D,aAAK,iBAAiB,IAAC,IAAI,EAAE,QAAQ,EAAE,UAAU;EAAC;0BAG/B,OAAkC,EAChD,WAAuB;gCAAX;UACjB,aAAK,MAAM,CAAC,OAAO,EAAE,WAAW;EAAC;;;YAGT,aAAK,UAAU;;;;;YAGZ,aAAK,SAAS","file":"worker.ddc.js"}');
  // Exports:
  return {
    worker: worker
  };
});

//# sourceMappingURL=worker.ddc.js.map
