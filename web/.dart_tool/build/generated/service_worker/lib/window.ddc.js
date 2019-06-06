define(['dart_sdk', 'packages/service_worker/src/js_adapter'], function(dart_sdk, js_adapter) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__service_worker_api = js_adapter.src__service_worker_api;
  const window = Object.create(dart.library);
  dart.copyProperties(window, {
    get _self() {
      return src__service_worker_api.ServiceWorkerContainer.navigatorContainer;
    }
  });
  dart.copyProperties(window, {
    get serviceWorker() {
      return window._self;
    }
  });
  dart.copyProperties(window, {
    get isSupported() {
      return window._self != null;
    }
  });
  dart.copyProperties(window, {
    get isNotSupported() {
      return !dart.test(window.isSupported);
    }
  });
  dart.copyProperties(window, {
    get controller() {
      return window._self.controller;
    }
  });
  dart.copyProperties(window, {
    get ready() {
      return window._self.ready;
    }
  });
  dart.copyProperties(window, {
    get onControllerChange() {
      return window._self.onControllerChange;
    }
  });
  dart.copyProperties(window, {
    get onError() {
      return window._self.onError;
    }
  });
  dart.copyProperties(window, {
    get onMessage() {
      return window._self.onMessage;
    }
  });
  window.register = function(scriptURL, options) {
    if (options === void 0) options = null;
    return window._self.register(scriptURL, options);
  };
  window.getRegistration = function(scope) {
    if (scope === void 0) scope = null;
    return window._self.getRegistration(scope);
  };
  window.getRegistrations = function() {
    return window._self.getRegistrations();
  };
  window.addEventListener = function(K, type, listener, useCapture) {
    if (useCapture === void 0) useCapture = null;
    return window._self.addEventListener(K, type, listener, useCapture);
  };
  dart.trackLibraries("packages/service_worker/window.ddc", {
    "package:service_worker/window.dart": window
  }, '{"version":3,"sourceRoot":"","sources":["window.dart"],"names":[],"mappings":";;;;;;;;;YAqBoC,+CAAsB,mBAAmB;;;;;YAKjC,aAAK;;;;;YAGzB,aAAK,IAAI;IAAI;;;;YAGV,YAAC,kBAAW;;;;;YAMP,aAAK,WAAW;;;;;YAKD,aAAK,MAAM;;;;;YAKlB,aAAK,mBAAmB;;;;;YAI9B,aAAK,QAAQ;;;;;YAKT,aAAK,UAAU;;;6BAOV,SAAgB,EAClD,OAAoC;4BAAP;UAClC,aAAK,SAAS,CAAC,SAAS,EAAE,OAAO;EAAC;oCAOa,KAAY;0BAAL;UACtD,aAAK,gBAAgB,CAAC,KAAK;EAAC;;UAM5B,aAAK,iBAAiB;EAAE;wCAGH,IAAW,EAAE,QAAiB,EAAG,UAAe;+BAAV;UAC3D,aAAK,iBAAiB,IAAC,IAAI,EAAE,QAAQ,EAAE,UAAU;EAAC","file":"window.ddc.js"}');
  // Exports:
  return {
    window: window
  };
});

//# sourceMappingURL=window.ddc.js.map
