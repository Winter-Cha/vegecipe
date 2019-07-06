define(['dart_sdk', 'packages/service_worker/window', 'packages/service_worker/src/js_adapter'], function(dart_sdk, window, js_adapter) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const window$ = window.window;
  const src__service_worker_api = js_adapter.src__service_worker_api;
  const client = Object.create(dart.library);
  const $endsWith = dartx.endsWith;
  const $toString = dartx.toString;
  let VoidToServiceWorkerRegistration = () => (VoidToServiceWorkerRegistration = dart.constFn(dart.fnType(src__service_worker_api.ServiceWorkerRegistration, [])))();
  let FutureOfServiceWorkerRegistration = () => (FutureOfServiceWorkerRegistration = dart.constFn(async.Future$(src__service_worker_api.ServiceWorkerRegistration)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  client.Client = class Client extends core.Object {
    static new(opts) {
      let scriptUrl = opts && 'scriptUrl' in opts ? opts.scriptUrl : "./pwa.dart.js";
      return new client._Client.new(scriptUrl);
    }
  };
  (client.Client[dart.mixinNew] = function() {
  }).prototype = client.Client.prototype;
  dart.addTypeTests(client.Client);
  dart.setLibraryUri(client.Client, "package:pwa/client.dart");
  client.PushPermission = class PushPermission extends core.Object {
    get isPrompt() {
      return this.status === client.PushPermissionStatus.prompt;
    }
    get isDenied() {
      return this.status === client.PushPermissionStatus.denied;
    }
    get isGranted() {
      return this.status === client.PushPermissionStatus.granted;
    }
    get isSubscribed() {
      return this.status === client.PushPermissionStatus.subscribed;
    }
    get isEnabled() {
      return dart.test(this.isGranted) || dart.test(this.isSubscribed);
    }
  };
  (client.PushPermission.new = function() {
  }).prototype = client.PushPermission.prototype;
  dart.addTypeTests(client.PushPermission);
  dart.setGetterSignature(client.PushPermission, () => ({
    __proto__: dart.getGetters(client.PushPermission.__proto__),
    isPrompt: core.bool,
    isDenied: core.bool,
    isGranted: core.bool,
    isSubscribed: core.bool,
    isEnabled: core.bool
  }));
  dart.setLibraryUri(client.PushPermission, "package:pwa/client.dart");
  client.PushPermissionStatus = class PushPermissionStatus extends core.Object {
    toString() {
      return {
        0: "PushPermissionStatus.prompt",
        1: "PushPermissionStatus.granted",
        2: "PushPermissionStatus.subscribed",
        3: "PushPermissionStatus.denied"
      }[this.index];
    }
  };
  (client.PushPermissionStatus.new = function(x) {
    this.index = x;
  }).prototype = client.PushPermissionStatus.prototype;
  dart.addTypeTests(client.PushPermissionStatus);
  dart.setLibraryUri(client.PushPermissionStatus, "package:pwa/client.dart");
  dart.setFieldSignature(client.PushPermissionStatus, () => ({
    __proto__: dart.getFields(client.PushPermissionStatus.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(client.PushPermissionStatus, ['toString']);
  client.PushPermissionStatus.prompt = dart.const(new client.PushPermissionStatus.new(0));
  client.PushPermissionStatus.granted = dart.const(new client.PushPermissionStatus.new(1));
  client.PushPermissionStatus.subscribed = dart.const(new client.PushPermissionStatus.new(2));
  client.PushPermissionStatus.denied = dart.const(new client.PushPermissionStatus.new(3));
  client.PushPermissionStatus.values = dart.constList([client.PushPermissionStatus.prompt, client.PushPermissionStatus.granted, client.PushPermissionStatus.subscribed, client.PushPermissionStatus.denied], client.PushPermissionStatus);
  const _registration = dart.privateName(client, "_registration");
  const _unregisterOldGPwa = dart.privateName(client, "_unregisterOldGPwa");
  const _triggerRegister = dart.privateName(client, "_triggerRegister");
  let const$;
  client._Client = class _Client extends core.Object {
    get isSupported() {
      return window$.isSupported;
    }
    getPushPermission(opts) {
      let subscribeIfNeeded = opts && 'subscribeIfNeeded' in opts ? opts.subscribeIfNeeded : false;
      return async.async(client.PushPermission, (function* getPushPermission() {
        let reg = (yield this[_registration]);
        let permStatus = client.PushPermissionStatus.denied;
        let subscription = null;
        let subscriptionOptions = {userVisibleOnly: true};
        let status = (yield reg.pushManager.permissionState(subscriptionOptions));
        if (status === "prompt" || status === "default") {
          permStatus = client.PushPermissionStatus.prompt;
        } else if (status === "denied") {
          permStatus = client.PushPermissionStatus.denied;
        } else if (status === "granted") {
          subscription = (yield reg.pushManager.getSubscription());
          permStatus = subscription == null ? client.PushPermissionStatus.granted : client.PushPermissionStatus.subscribed;
        }
        if (dart.test(subscribeIfNeeded) && subscription == null && (permStatus === client.PushPermissionStatus.prompt || permStatus === client.PushPermissionStatus.granted)) {
          try {
            yield reg.pushManager.subscribe(subscriptionOptions);
          } catch (e) {
            let _ = dart.getThrown(e);
          }
          return this.getPushPermission({subscribeIfNeeded: false});
        }
        return new client._PushPermission.new(permStatus, subscription);
      }).bind(this));
    }
    [_triggerRegister](url) {
      return async.async(src__service_worker_api.ServiceWorkerRegistration, function* _triggerRegister() {
        let reg = (yield window$.register(url));
        return yield window$.ready.timeout(const$ || (const$ = dart.const(new core.Duration.new({seconds: 2}))), {onTimeout: dart.fn(() => reg, VoidToServiceWorkerRegistration())});
      });
    }
    [_unregisterOldGPwa]() {
      return async.async(dart.dynamic, function* _unregisterOldGPwa() {
        let registrations = (yield window$.getRegistrations());
        if (registrations == null) return;
        for (let reg of registrations) {
          let worker = reg.active;
          if (worker != null && worker.scriptURL[$endsWith]("/pwa.dart.g.js")) {
            yield reg.unregister();
          }
        }
      });
    }
  };
  (client._Client.new = function(scriptUrl) {
    this[_registration] = null;
    if (dart.test(this.isSupported)) {
      try {
        this[_unregisterOldGPwa]();
      } catch (e) {
        let _ = dart.getThrown(e);
      }
      this[_registration] = this[_triggerRegister](scriptUrl);
    }
  }).prototype = client._Client.prototype;
  dart.addTypeTests(client._Client);
  client._Client[dart.implements] = () => [client.Client];
  dart.setMethodSignature(client._Client, () => ({
    __proto__: dart.getMethods(client._Client.__proto__),
    getPushPermission: dart.fnType(async.Future$(client.PushPermission), [], {subscribeIfNeeded: core.bool}),
    [_triggerRegister]: dart.fnType(async.Future$(src__service_worker_api.ServiceWorkerRegistration), [core.String]),
    [_unregisterOldGPwa]: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(client._Client, () => ({
    __proto__: dart.getGetters(client._Client.__proto__),
    isSupported: core.bool
  }));
  dart.setLibraryUri(client._Client, "package:pwa/client.dart");
  dart.setFieldSignature(client._Client, () => ({
    __proto__: dart.getFields(client._Client.__proto__),
    [_registration]: dart.fieldType(FutureOfServiceWorkerRegistration())
  }));
  const _status = dart.privateName(client, "_status");
  const _subscription = dart.privateName(client, "_subscription");
  client._PushPermission = class _PushPermission extends client.PushPermission {
    get status() {
      return this[_status];
    }
    get endpointUrl() {
      return this[_subscription] == null ? null : (() => {
        let t = this[_subscription].endpoint;
        return t == null ? null : dart.toString(t);
      })();
    }
    get clientKeys() {
      return this[_subscription] == null ? new (IdentityMapOfString$String()).new() : this[_subscription].getKeysAsString();
    }
    unsubscribe() {
      return async.async(dart.dynamic, (function* unsubscribe() {
        if (this[_subscription] == null) return;
        yield this[_subscription].unsubscribe();
        this[_subscription] = null;
        this[_status] = client.PushPermissionStatus.granted;
      }).bind(this));
    }
  };
  (client._PushPermission.new = function(status, subscription) {
    this[_status] = status;
    this[_subscription] = subscription;
  }).prototype = client._PushPermission.prototype;
  dart.addTypeTests(client._PushPermission);
  dart.setMethodSignature(client._PushPermission, () => ({
    __proto__: dart.getMethods(client._PushPermission.__proto__),
    unsubscribe: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(client._PushPermission, () => ({
    __proto__: dart.getGetters(client._PushPermission.__proto__),
    status: client.PushPermissionStatus,
    endpointUrl: core.String,
    clientKeys: core.Map$(core.String, core.String)
  }));
  dart.setLibraryUri(client._PushPermission, "package:pwa/client.dart");
  dart.setFieldSignature(client._PushPermission, () => ({
    __proto__: dart.getFields(client._PushPermission.__proto__),
    [_status]: dart.fieldType(client.PushPermissionStatus),
    [_subscription]: dart.fieldType(src__service_worker_api.PushSubscription)
  }));
  dart.trackLibraries("packages/pwa/client.ddc", {
    "package:pwa/client.dart": client
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;UAQyB,2DAAW;AAAkB,YAAG,KAAI,kBAAO,CAAC,SAAS;IAAC;;;;;;;;YAmBxD,YAAM,KAAI,2BAAoB,OAAO;;;YAGrC,YAAM,KAAI,2BAAoB,OAAO;;;YAGpC,YAAM,KAAI,2BAAoB,QAAQ;;;YAGnC,YAAM,KAAI,2BAAoB,WAAW;;;YAGlC,WAAV,cAAS,eAAI,iBAAY;;;;EAajD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA8B6B,oBAAW;;;UAI5B,mFAAmB;AAAQ;AACnC,YAAI,OAAM,MAAM,mBAAa;AAC7B,YAAqB,aAAa,2BAAoB,OAAO;AAC7D,YAAoB;AAEpB,YAAI,sBACA,kBAAgD;AACpD,YAAO,UAAS,MAAM,GAAG,YAAY,gBAAgB,CAAC,mBAAmB;AACzE,YAAI,MAAM,KAAI,YAAY,MAAM,KAAI,WAAW;AAC7C,oBAAU,GAAG,2BAAoB,OAAO;cACnC,KAAI,MAAM,KAAI,UAAU;AAC7B,oBAAU,GAAG,2BAAoB,OAAO;cACnC,KAAI,MAAM,KAAI,WAAW;AAC9B,sBAAY,IAAG,MAAM,GAAG,YAAY,gBAAgB;AACpD,oBAAU,GAAG,YAAY,IAAI,OACvB,2BAAoB,QAAQ,GAC5B,2BAAoB,WAAW;;AAGvC,sBAAI,iBAAiB,KACjB,YAAY,IAAI,SACf,UAAU,KAAI,2BAAoB,OAAO,IACtC,UAAU,KAAI,2BAAoB,QAAQ,GAAG;AACnD,cAAI;AACF,kBAAM,GAAG,YAAY,UAAU,CAAC,mBAAmB;;gBAC5C;AAAG;AACZ,gBAAO,uBAAiB,qBAAoB;;AAG9C,cAAO,KAAI,0BAAe,CAAC,UAAU,EAAE,YAAY;MACrD;;uBAEsD,GAAU;AAAE;AAChE,YAAI,OAAM,MAAM,AAAG,gBAAQ,CAAC,GAAG;AAK/B,cAAO,OAAM,AAAG,aAAK,QACT,CAAC,mCAAM,iBAAQ,WAAU,mBAAe,cAAM,GAAG;MAC/D;;;AAE4B;AAC1B,YAAmC,iBAC/B,MAAM,AAAG,wBAAgB;AAC7B,YAAI,aAAa,IAAI,MAAM;AAC3B,iBAAS,MAAO,cAAa,EAAE;AAC7B,cAAiB,SAAS,GAAG,OAAO;AACpC,cAAI,MAAM,IAAI,QAAQ,MAAM,UAAU,WAAS,CAAC,mBAAmB;AACjE,kBAAM,GAAG,WAAW;;;MAG1B;;;iCAlEQ,SAAgB;IAFa,mBAAa;AAGhD,kBAAI,gBAAW,GAAE;AACf,UAAI;AACF,gCAAkB;;YACX;AAAG;AACZ,yBAAa,GAAG,sBAAgB,CAAC,SAAS;;EAE9C;;;;;;;;;;;;;;;;;;;;;;YAqEmC,cAAO;;;YAItC,oBAAa,IAAI,OAAO;gBAAO,mBAAa,SAAS;;;IAAY;;YAIjE,oBAAa,IAAI,OAAO,2CAAK,mBAAa,gBAAgB;IAAE;;AAG3C;AACnB,YAAI,mBAAa,IAAI,MAAM;AAC3B,cAAM,mBAAa,YAAY;AAC/B,2BAAa,GAAG;AAChB,qBAAO,GAAG,2BAAoB,QAAQ;MACxC;;;;IAnBqB,aAAO;IAAO,mBAAa;EAAC","file":"client.ddc.js"}');
  // Exports:
  return {
    client: client
  };
});

//# sourceMappingURL=client.ddc.js.map
