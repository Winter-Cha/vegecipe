define(['dart_sdk', 'packages/service_worker/src/js_adapter', 'packages/service_worker/worker'], function(dart_sdk, js_adapter, worker) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__service_worker_api = js_adapter.src__service_worker_api;
  const worker$ = worker.worker;
  const worker$0 = Object.create(dart.library);
  const $length = dartx.length;
  const $endsWith = dartx.endsWith;
  const $substring = dartx.substring;
  const $startsWith = dartx.startsWith;
  const $replaceAll = dartx.replaceAll;
  const $add = dartx.add;
  const $sort = dartx.sort;
  const $removeLast = dartx.removeLast;
  const $toLowerCase = dartx.toLowerCase;
  const $matchAsPrefix = dartx.matchAsPrefix;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let PushContextToFutureOr = () => (PushContextToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [worker$0.PushContext])))();
  let InstallEventToNull = () => (InstallEventToNull = dart.constFn(dart.fnType(core.Null, [src__service_worker_api.InstallEvent])))();
  let ExtendableEventToNull = () => (ExtendableEventToNull = dart.constFn(dart.fnType(core.Null, [src__service_worker_api.ExtendableEvent])))();
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__service_worker_api.Response)))();
  let RequestToFutureOfResponse = () => (RequestToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__service_worker_api.Request])))();
  let JSArrayOfRequestToFutureOfResponse = () => (JSArrayOfRequestToFutureOfResponse = dart.constFn(_interceptors.JSArray$(RequestToFutureOfResponse())))();
  let FetchEventToNull = () => (FetchEventToNull = dart.constFn(dart.fnType(core.Null, [src__service_worker_api.FetchEvent])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let PushEventToNull = () => (PushEventToNull = dart.constFn(dart.fnType(core.Null, [src__service_worker_api.PushEvent])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ResponseToResponse = () => (ResponseToResponse = dart.constFn(dart.fnType(src__service_worker_api.Response, [src__service_worker_api.Response])))();
  let JSArrayOf_RequestResponse = () => (JSArrayOf_RequestResponse = dart.constFn(_interceptors.JSArray$(worker$0._RequestResponse)))();
  let _RequestResponseAnd_RequestResponseToint = () => (_RequestResponseAnd_RequestResponseToint = dart.constFn(dart.fnType(core.int, [worker$0._RequestResponse, worker$0._RequestResponse])))();
  let dynamic__ToFutureOfResponse = () => (dynamic__ToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [dart.dynamic], [dart.anonymousJSType("RequestInit")])))();
  let CompleterOfResponse = () => (CompleterOfResponse = dart.constFn(async.Completer$(src__service_worker_api.Response)))();
  let ResponseTovoid = () => (ResponseTovoid = dart.constFn(dart.fnType(dart.void, [src__service_worker_api.Response])))();
  let JSArrayOf_RouteRule = () => (JSArrayOf_RouteRule = dart.constFn(_interceptors.JSArray$(worker$0._RouteRule)))();
  let RequestTobool = () => (RequestTobool = dart.constFn(dart.fnType(core.bool, [src__service_worker_api.Request])))();
  let ListOf_RouteRule = () => (ListOf_RouteRule = dart.constFn(core.List$(worker$0._RouteRule)))();
  worker$0.Worker = class Worker extends core.Object {
    get router() {
      return this[router];
    }
    set router(value) {
      super.router = value;
    }
    get offlineUrls() {
      return this[offlineUrls];
    }
    set offlineUrls(value) {
      this[offlineUrls] = value;
    }
    get cacheCommonWebFonts() {
      return this[cacheCommonWebFonts];
    }
    set cacheCommonWebFonts(value) {
      this[cacheCommonWebFonts] = value;
    }
    get skipWaiting() {
      return this[skipWaiting];
    }
    set skipWaiting(value) {
      this[skipWaiting] = value;
    }
    get onInstall() {
      return this[onInstall];
    }
    set onInstall(value) {
      this[onInstall] = value;
    }
    get onActivate() {
      return this[onActivate];
    }
    set onActivate(value) {
      this[onActivate] = value;
    }
    get pushHandler() {
      return this[pushHandler];
    }
    set pushHandler(value) {
      this[pushHandler] = value;
    }
    run(opts) {
      let version = opts && 'version' in opts ? opts.version : null;
      if (version == null) {
        core.print("Consider using version when calling Worker.run().");
      } else {
        core.print("Running PWA, version: " + dart.str(version));
      }
      worker$0._run(this);
    }
  };
  (worker$0.Worker.new = function() {
    this[router] = new worker$0.FetchRouter.new();
    this[offlineUrls] = null;
    this[cacheCommonWebFonts] = true;
    this[skipWaiting] = true;
    this[onInstall] = null;
    this[onActivate] = null;
    this[pushHandler] = null;
  }).prototype = worker$0.Worker.prototype;
  dart.addTypeTests(worker$0.Worker);
  const router = Symbol("Worker.router");
  const offlineUrls = Symbol("Worker.offlineUrls");
  const cacheCommonWebFonts = Symbol("Worker.cacheCommonWebFonts");
  const skipWaiting = Symbol("Worker.skipWaiting");
  const onInstall = Symbol("Worker.onInstall");
  const onActivate = Symbol("Worker.onActivate");
  const pushHandler = Symbol("Worker.pushHandler");
  dart.setMethodSignature(worker$0.Worker, () => ({
    __proto__: dart.getMethods(worker$0.Worker.__proto__),
    run: dart.fnType(dart.void, [], {version: core.String})
  }));
  dart.setLibraryUri(worker$0.Worker, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0.Worker, () => ({
    __proto__: dart.getFields(worker$0.Worker.__proto__),
    router: dart.finalFieldType(worker$0.FetchRouter),
    offlineUrls: dart.fieldType(ListOfString()),
    cacheCommonWebFonts: dart.fieldType(core.bool),
    skipWaiting: dart.fieldType(core.bool),
    onInstall: dart.fieldType(VoidToFuture()),
    onActivate: dart.fieldType(VoidToFuture()),
    pushHandler: dart.fieldType(PushContextToFutureOr())
  }));
  dart.defineLazy(worker$0, {
    /*worker$0._isRunning*/get _isRunning() {
      return false;
    },
    set _isRunning(_) {}
  });
  let const$;
  worker$0._run = function(worker) {
    if (dart.test(worker$0._isRunning)) {
      dart.throw(core.Exception.new("PWA must be initalized only once."));
    }
    worker$0._isRunning = true;
    let offline = worker.offlineUrls == null ? null : new worker$0.BlockCache.new("offline");
    let commonWebFonts = null;
    if (dart.test(worker.cacheCommonWebFonts)) {
      commonWebFonts = new worker$0.DynamicCache.new("common-webfonts", {maxAge: const$ || (const$ = dart.const(new core.Duration.new({days: 365}))), maxEntries: 256});
      for (let prefix of worker$0._commonWebFontPrefixes) {
        worker.router.registerGetUrl(prefix, dart.bind(commonWebFonts, 'networkFirst'));
      }
    }
    function installCallback() {
      return async.async(dart.dynamic, function* installCallback() {
        if (offline != null) {
          try {
            yield offline.precache(worker.offlineUrls);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            core.print("Precache of " + dart.str(worker.offlineUrls[$length]) + (" offline URLs failed: " + dart.str(e) + "\n" + dart.str(st)));
          }
        }
        if (worker.onInstall != null) {
          try {
            yield worker.onInstall();
          } catch (e$0) {
            let e = dart.getThrown(e$0);
            let st = dart.stackTrace(e$0);
            core.print("onInstall() failed: " + dart.str(e) + "\n" + dart.str(st));
          }
        }
      });
    }
    dart.fn(installCallback, VoidToFuture());
    worker$.onInstall.listen(dart.fn(event => {
      event.waitUntil(installCallback());
    }, InstallEventToNull()));
    function activateCallback() {
      return async.async(dart.dynamic, function* activateCallback() {
        if (worker.onActivate != null) {
          try {
            yield worker.onActivate();
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            core.print("onActivate() failed: " + dart.str(e) + "\n" + dart.str(st));
          }
        }
      });
    }
    dart.fn(activateCallback, VoidToFuture());
    worker$.onActivate.listen(dart.fn(event => {
      event.waitUntil(activateCallback());
    }, ExtendableEventToNull()));
    worker$.onFetch.listen(dart.fn(event => {
      let handler = worker.router.match(event.request);
      let t = handler;
      t == null ? handler = worker$0.defaultRequestHandler : t;
      if (offline != null) {
        handler = worker$0.joinHandlers(JSArrayOfRequestToFutureOfResponse().of([handler, dart.bind(offline, 'cacheFirst')]));
      }
      event.respondWith(handler(event.request));
    }, FetchEventToNull()));
    if (dart.test(worker.skipWaiting)) {
      worker$.skipWaiting();
    }
    if (worker.pushHandler != null) {
      worker$.onPush.listen(dart.fn(event => {
        let f = async.Future._check(worker.pushHandler(new worker$0._PushContext.new()));
        if (f != null) {
          event.waitUntil(f.then(dart.dynamic, dart.fn(_ => null, dynamicToNull()), {onError: dart.fn(_ => null, dynamicToNull())}));
        }
      }, PushEventToNull()));
    }
  };
  dart.defineLazy(worker$0, {
    /*worker$0._commonWebFontPrefixes*/get _commonWebFontPrefixes() {
      return JSArrayOfString().of(["https://fonts.google.com/", "https://fonts.googleapis.com/", "https://fonts.gstatic.com/"]);
    }
  });
  worker$0.FetchStrategy = class FetchStrategy extends core.Object {
    networkOnly(request) {
      return worker$.fetch(request);
    }
    cacheFirst(request) {
      return worker$0.joinHandlers(JSArrayOfRequestToFutureOfResponse().of([dart.bind(this, 'cacheOnly'), dart.bind(this, 'networkOnly')]))(request);
    }
    networkFirst(request) {
      return worker$0.joinHandlers(JSArrayOfRequestToFutureOfResponse().of([dart.bind(this, 'networkOnly'), dart.bind(this, 'cacheOnly')]))(request);
    }
    fastest(request) {
      return worker$0.raceHandlers(JSArrayOfRequestToFutureOfResponse().of([dart.bind(this, 'cacheOnly'), dart.bind(this, 'networkOnly')]))(request);
    }
  };
  (worker$0.FetchStrategy.new = function() {
  }).prototype = worker$0.FetchStrategy.prototype;
  dart.addTypeTests(worker$0.FetchStrategy);
  dart.setMethodSignature(worker$0.FetchStrategy, () => ({
    __proto__: dart.getMethods(worker$0.FetchStrategy.__proto__),
    networkOnly: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]),
    cacheFirst: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]),
    networkFirst: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]),
    fastest: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request])
  }));
  dart.setLibraryUri(worker$0.FetchStrategy, "package:pwa/worker.dart");
  dart.defineLazy(worker$0, {
    /*worker$0._defaultCachePrefixValue*/get _defaultCachePrefixValue() {
      return null;
    },
    set _defaultCachePrefixValue(_) {}
  });
  dart.copyProperties(worker$0, {
    get _defaultCachePrefix() {
      if (worker$0._defaultCachePrefixValue == null) {
        let name = worker$.location.pathname;
        if (name[$endsWith](".js")) name = name[$substring](0, name.length - 3);
        if (name[$endsWith](".dart")) name = name[$substring](0, name.length - 5);
        if (name[$endsWith](".g")) name = name[$substring](0, name.length - 2);
        if (name[$startsWith]("/")) name = name[$substring](1);
        name = name[$replaceAll]("-", "--")[$replaceAll]("/", "-");
        worker$0._defaultCachePrefixValue = name;
      }
      return worker$0._defaultCachePrefixValue;
    }
  });
  const _cachePrefix = dart.privateName(worker$0, "_cachePrefix");
  const _initializeFuture = dart.privateName(worker$0, "_initializeFuture");
  const _initialized = dart.privateName(worker$0, "_initialized");
  const _cacheName = dart.privateName(worker$0, "_cacheName");
  const _cache = dart.privateName(worker$0, "_cache");
  const _init = dart.privateName(worker$0, "_init");
  const _openCache = dart.privateName(worker$0, "_openCache");
  worker$0.BlockCache = class BlockCache extends worker$0.FetchStrategy {
    cacheOnly(request) {
      return async.async(src__service_worker_api.Response, (function* cacheOnly() {
        let cache = (yield this[_openCache]());
        if (cache == null) return null;
        return cache.match(request);
      }).bind(this));
    }
    precache(urls) {
      return async.async(dart.dynamic, (function* precache() {
        if (!dart.test(this[_initialized])) {
          yield this[_initializeFuture];
        }
        let cacheName = dart.str(this[_cachePrefix]) + dart.str(new core.DateTime.now().millisecondsSinceEpoch);
        let cache = (yield worker$.caches.open(cacheName));
        yield cache.addAll(urls);
        let oldCacheName = this[_cacheName];
        this[_cache] = null;
        this[_cacheName] = cacheName;
        if (oldCacheName != null) {
          yield worker$.caches.delete(oldCacheName);
        }
      }).bind(this));
    }
    [_init]() {
      return async.async(dart.dynamic, (function* _init() {
        let cacheNames = (yield worker$.caches.keys());
        let obsolete = JSArrayOfString().of([]);
        let lastTimestamp = 0;
        for (let cacheName of cacheNames) {
          if (cacheName[$startsWith](this[_cachePrefix])) {
            let ts = cacheName[$substring](this[_cachePrefix].length);
            try {
              let tsvalue = core.int.parse(ts);
              if (dart.notNull(lastTimestamp) < dart.notNull(tsvalue)) {
                lastTimestamp = tsvalue;
                if (this[_cacheName] != null) {
                  obsolete[$add](this[_cacheName]);
                }
                this[_cacheName] = cacheName;
              } else {
                obsolete[$add](cacheName);
              }
            } catch (e$) {
              let e = dart.getThrown(e$);
              obsolete[$add](cacheName);
            }
          }
        }
        for (let cacheName of obsolete) {
          yield worker$.caches.delete(cacheName);
        }
        this[_initialized] = true;
      }).bind(this));
    }
    [_openCache]() {
      return async.async(src__service_worker_api.Cache, (function* _openCache() {
        if (!dart.test(this[_initialized])) {
          yield this[_initializeFuture];
        }
        if (this[_cacheName] == null) return null;
        let t = this[_cache];
        t == null ? this[_cache] = (yield worker$.caches.open(this[_cacheName])) : t;
        return this[_cache];
      }).bind(this));
    }
  };
  (worker$0.BlockCache.new = function(name, opts) {
    let prefix = opts && 'prefix' in opts ? opts.prefix : null;
    this[_cachePrefix] = null;
    this[_initializeFuture] = null;
    this[_initialized] = false;
    this[_cacheName] = null;
    this[_cache] = null;
    let t = prefix;
    t == null ? prefix = worker$0._defaultCachePrefix : t;
    this[_cachePrefix] = dart.str(prefix) + "-block-" + dart.str(name) + "-";
    this[_initializeFuture] = this[_init]();
  }).prototype = worker$0.BlockCache.prototype;
  dart.addTypeTests(worker$0.BlockCache);
  dart.setMethodSignature(worker$0.BlockCache, () => ({
    __proto__: dart.getMethods(worker$0.BlockCache.__proto__),
    cacheOnly: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]),
    precache: dart.fnType(async.Future, [core.List$(core.String)]),
    [_init]: dart.fnType(async.Future, []),
    [_openCache]: dart.fnType(async.Future$(src__service_worker_api.Cache), [])
  }));
  dart.setLibraryUri(worker$0.BlockCache, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0.BlockCache, () => ({
    __proto__: dart.getFields(worker$0.BlockCache.__proto__),
    [_cachePrefix]: dart.fieldType(core.String),
    [_initializeFuture]: dart.fieldType(async.Future),
    [_initialized]: dart.fieldType(core.bool),
    [_cacheName]: dart.fieldType(core.String),
    [_cache]: dart.fieldType(src__service_worker_api.Cache)
  }));
  let const$0;
  const _maxAge = dart.privateName(worker$0, "_maxAge");
  const _maxEntries = dart.privateName(worker$0, "_maxEntries");
  const _networkHandler = dart.privateName(worker$0, "_networkHandler");
  const _getAge = dart.privateName(worker$0, "_getAge");
  const _add = dart.privateName(worker$0, "_add");
  const _getDateHeaderValue = dart.privateName(worker$0, "_getDateHeaderValue");
  const _removeOldAndExcessEntries = dart.privateName(worker$0, "_removeOldAndExcessEntries");
  worker$0.DynamicCache = class DynamicCache extends worker$0.FetchStrategy {
    cacheOnly(request) {
      return async.async(src__service_worker_api.Response, (function* cacheOnly() {
        let cache = (yield this[_openCache]());
        let response = (yield cache.match(request.clone()));
        if (response != null && this[_maxAge] != null) {
          let age = this[_getAge](response == null ? null : response.headers);
          if (age != null && dart.test(age['>'](this[_maxAge]))) {
            cache.delete(request.url);
            return null;
          }
        }
        return response;
      }).bind(this));
    }
    networkOnly(request) {
      let f = this[_networkHandler](request.clone());
      f = FutureOfResponse()._check(f.then(src__service_worker_api.Response, dart.fn(response => {
        if (dart.test(worker$0.isValidResponse(response))) {
          this[_add](request, response.clone());
        }
        return response;
      }, ResponseToResponse())));
      return f;
    }
    [_openCache]() {
      return worker$.caches.open(this[_cacheName]);
    }
    [_getAge](headers) {
      let dt = this[_getDateHeaderValue](headers);
      if (dt == null) return null;
      let diff = new core.DateTime.now().difference(dt);
      return diff;
    }
    [_getDateHeaderValue](headers) {
      if (headers == null) return null;
      let dateHeader = headers._get("date");
      if (dateHeader == null) return null;
      try {
        return core.DateTime.parse(dateHeader);
      } catch (e$) {
        let e = dart.getThrown(e$);
      }
      return null;
    }
    [_add](request, response) {
      return async.async(dart.dynamic, (function* _add() {
        let cache = (yield this[_openCache]());
        yield cache.put(request, response);
        yield this[_removeOldAndExcessEntries]();
      }).bind(this));
    }
    [_removeOldAndExcessEntries]() {
      return async.async(dart.dynamic, (function* _removeOldAndExcessEntries() {
        let cache = (yield this[_openCache]());
        if (this[_maxAge] != null || this[_maxEntries] != null) {
          let keys = (yield cache.keys());
          let entries = JSArrayOf_RequestResponse().of([]);
          for (let rq of keys) {
            let rs = (yield cache.match(rq));
            let age = this[_getAge](rs == null ? null : rs.headers);
            if (age != null && dart.test(age['>'](this[_maxAge]))) {
              yield cache.delete(rq);
            } else {
              entries[$add](new worker$0._RequestResponse.new(rq, rs, age));
            }
          }
          if (dart.notNull(entries[$length]) > dart.notNull(this[_maxEntries])) {
            entries[$sort](dart.fn((a, b) => {
              if (a.age == null) return 1;
              if (b.age == null) return -1;
              return a.age.compareTo(b.age);
            }, _RequestResponseAnd_RequestResponseToint()));
            while (dart.notNull(entries[$length]) > dart.notNull(this[_maxEntries])) {
              yield cache.delete(entries[$removeLast]().request);
            }
          }
        }
      }).bind(this));
    }
  };
  (worker$0.DynamicCache.new = function(name, opts) {
    let maxAge = opts && 'maxAge' in opts ? opts.maxAge : const$0 || (const$0 = dart.const(new core.Duration.new({days: 7})));
    let maxEntries = opts && 'maxEntries' in opts ? opts.maxEntries : 20;
    let skipDiskCache = opts && 'skipDiskCache' in opts ? opts.skipDiskCache : false;
    let prefix = opts && 'prefix' in opts ? opts.prefix : null;
    this[_networkHandler] = null;
    this[_cacheName] = null;
    this[_maxAge] = maxAge;
    this[_maxEntries] = maxEntries;
    let t = prefix;
    t == null ? prefix = worker$0._defaultCachePrefix : t;
    this[_cacheName] = dart.str(prefix) + "-dyn-" + dart.str(name);
    this[_networkHandler] = dart.test(skipDiskCache) ? dart.fn(worker$0.noCacheNetworkRequestHandler, RequestToFutureOfResponse()) : worker$0.defaultRequestHandler;
  }).prototype = worker$0.DynamicCache.prototype;
  dart.addTypeTests(worker$0.DynamicCache);
  dart.setMethodSignature(worker$0.DynamicCache, () => ({
    __proto__: dart.getMethods(worker$0.DynamicCache.__proto__),
    cacheOnly: dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]),
    [_openCache]: dart.fnType(async.Future$(src__service_worker_api.Cache), []),
    [_getAge]: dart.fnType(core.Duration, [src__service_worker_api.Headers]),
    [_getDateHeaderValue]: dart.fnType(core.DateTime, [src__service_worker_api.Headers]),
    [_add]: dart.fnType(async.Future, [src__service_worker_api.Request, src__service_worker_api.Response]),
    [_removeOldAndExcessEntries]: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(worker$0.DynamicCache, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0.DynamicCache, () => ({
    __proto__: dart.getFields(worker$0.DynamicCache.__proto__),
    [_maxAge]: dart.finalFieldType(core.Duration),
    [_maxEntries]: dart.finalFieldType(core.int),
    [_networkHandler]: dart.fieldType(RequestToFutureOfResponse()),
    [_cacheName]: dart.fieldType(core.String)
  }));
  worker$0._RequestResponse = class _RequestResponse extends core.Object {};
  (worker$0._RequestResponse.new = function(request, response, age) {
    this.request = request;
    this.response = response;
    this.age = age;
  }).prototype = worker$0._RequestResponse.prototype;
  dart.addTypeTests(worker$0._RequestResponse);
  dart.setLibraryUri(worker$0._RequestResponse, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0._RequestResponse, () => ({
    __proto__: dart.getFields(worker$0._RequestResponse.__proto__),
    request: dart.finalFieldType(src__service_worker_api.Request),
    response: dart.finalFieldType(src__service_worker_api.Response),
    age: dart.finalFieldType(core.Duration)
  }));
  dart.defineLazy(worker$0, {
    /*worker$0.defaultRequestHandler*/get defaultRequestHandler() {
      return dart.fn(worker$.fetch, dynamic__ToFutureOfResponse());
    }
  });
  worker$0.noCacheNetworkRequestHandler = function(request) {
    return worker$.fetch(request, {cache: "no-store"});
  };
  worker$0.isValidResponse = function(response) {
    if (response == null) return false;
    if (response.type === "error") return false;
    return true;
  };
  worker$0.joinHandlers = function(handlers) {
    return dart.fn(request => async.async(src__service_worker_api.Response, function*() {
      for (let handler of handlers) {
        try {
          let response = (yield handler(request.clone()));
          if (dart.test(worker$0.isValidResponse(response))) return response;
        } catch (e) {
          let _ = dart.getThrown(e);
        }
      }
      return src__service_worker_api.Response.error();
    }), RequestToFutureOfResponse());
  };
  worker$0.raceHandlers = function(handlers) {
    return dart.fn(request => {
      let completer = CompleterOfResponse().new();
      let remaining = handlers[$length];
      function complete(response) {
        remaining = dart.notNull(remaining) - 1;
        if (dart.test(completer.isCompleted)) return;
        if (dart.test(worker$0.isValidResponse(response))) {
          completer.complete(response);
          return;
        }
        if (remaining === 0) {
          completer.complete(src__service_worker_api.Response.error());
        }
      }
      dart.fn(complete, ResponseTovoid());
      for (let handler of handlers) {
        handler(request.clone()).then(dart.void, complete, {onError: dart.fn(e => {
            complete(null);
          }, dynamicToNull())});
      }
      return completer.future;
    }, RequestToFutureOfResponse());
  };
  worker$0.Notification = class Notification extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get dir() {
      return this[dir$];
    }
    set dir(value) {
      super.dir = value;
    }
    get lang() {
      return this[lang$];
    }
    set lang(value) {
      super.lang = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    get tag() {
      return this[tag$];
    }
    set tag(value) {
      super.tag = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
  };
  (worker$0.Notification.new = function(title, opts) {
    let dir = opts && 'dir' in opts ? opts.dir : null;
    let lang = opts && 'lang' in opts ? opts.lang : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let tag = opts && 'tag' in opts ? opts.tag : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    this[title$] = title;
    this[dir$] = dir;
    this[lang$] = lang;
    this[body$] = body;
    this[tag$] = tag;
    this[icon$] = icon;
  }).prototype = worker$0.Notification.prototype;
  dart.addTypeTests(worker$0.Notification);
  const title$ = Symbol("Notification.title");
  const dir$ = Symbol("Notification.dir");
  const lang$ = Symbol("Notification.lang");
  const body$ = Symbol("Notification.body");
  const tag$ = Symbol("Notification.tag");
  const icon$ = Symbol("Notification.icon");
  dart.setLibraryUri(worker$0.Notification, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0.Notification, () => ({
    __proto__: dart.getFields(worker$0.Notification.__proto__),
    title: dart.finalFieldType(core.String),
    dir: dart.finalFieldType(core.String),
    lang: dart.finalFieldType(core.String),
    body: dart.finalFieldType(core.String),
    tag: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(core.String)
  }));
  worker$0.PushContext = class PushContext extends core.Object {};
  (worker$0.PushContext.new = function() {
  }).prototype = worker$0.PushContext.prototype;
  dart.addTypeTests(worker$0.PushContext);
  dart.setLibraryUri(worker$0.PushContext, "package:pwa/worker.dart");
  worker$0._PushContext = class _PushContext extends worker$0.PushContext {
    showNotification(notification) {
      return async.async(dart.dynamic, function* showNotification() {
        let options = {};
        if (notification.dir != null) options.dir = notification.dir;
        if (notification.lang != null) options.lang = notification.lang;
        if (notification.body != null) options.body = notification.body;
        if (notification.tag != null) options.tag = notification.tag;
        if (notification.icon != null) options.icon = notification.icon;
        yield worker$.registration.showNotification(notification.title, options);
      });
    }
  };
  (worker$0._PushContext.new = function() {
  }).prototype = worker$0._PushContext.prototype;
  dart.addTypeTests(worker$0._PushContext);
  dart.setMethodSignature(worker$0._PushContext, () => ({
    __proto__: dart.getMethods(worker$0._PushContext.__proto__),
    showNotification: dart.fnType(async.Future, [worker$0.Notification])
  }));
  dart.setLibraryUri(worker$0._PushContext, "package:pwa/worker.dart");
  const _rules = dart.privateName(worker$0, "_rules");
  worker$0.FetchRouter = class FetchRouter extends core.Object {
    registerMatcher(matcher, handler) {
      this[_rules][$add](new worker$0._RouteRule.new(matcher, handler));
    }
    registerUrl(method, url, handler) {
      let methodLowerCase = method[$toLowerCase]();
      let methodMatched = methodLowerCase !== "any";
      function matcher(request) {
        let requestMethod = request.method[$toLowerCase]();
        if (methodMatched && requestMethod !== methodLowerCase) return false;
        return url[$matchAsPrefix](request.url) != null;
      }
      dart.fn(matcher, RequestTobool());
      this.registerMatcher(matcher, handler);
    }
    registerGetUrl(url, handler) {
      return this.registerUrl("get", url, handler);
    }
    registerPostUrl(url, handler) {
      return this.registerUrl("post", url, handler);
    }
    match(request) {
      for (let rule of this[_rules]) {
        if (dart.test(rule.matcher(request))) {
          return rule.handler;
        }
      }
      return null;
    }
  };
  (worker$0.FetchRouter.new = function() {
    this[_rules] = JSArrayOf_RouteRule().of([]);
  }).prototype = worker$0.FetchRouter.prototype;
  dart.addTypeTests(worker$0.FetchRouter);
  dart.setMethodSignature(worker$0.FetchRouter, () => ({
    __proto__: dart.getMethods(worker$0.FetchRouter.__proto__),
    registerMatcher: dart.fnType(dart.void, [dart.fnType(core.bool, [src__service_worker_api.Request]), dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request])]),
    registerUrl: dart.fnType(dart.void, [core.String, core.Pattern, dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request])]),
    registerGetUrl: dart.fnType(dart.void, [core.Pattern, dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request])]),
    registerPostUrl: dart.fnType(dart.void, [core.Pattern, dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request])]),
    match: dart.fnType(dart.fnType(async.Future$(src__service_worker_api.Response), [src__service_worker_api.Request]), [src__service_worker_api.Request])
  }));
  dart.setLibraryUri(worker$0.FetchRouter, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0.FetchRouter, () => ({
    __proto__: dart.getFields(worker$0.FetchRouter.__proto__),
    [_rules]: dart.fieldType(ListOf_RouteRule())
  }));
  worker$0._RouteRule = class _RouteRule extends core.Object {};
  (worker$0._RouteRule.new = function(matcher, handler) {
    this.matcher = matcher;
    this.handler = handler;
  }).prototype = worker$0._RouteRule.prototype;
  dart.addTypeTests(worker$0._RouteRule);
  dart.setLibraryUri(worker$0._RouteRule, "package:pwa/worker.dart");
  dart.setFieldSignature(worker$0._RouteRule, () => ({
    __proto__: dart.getFields(worker$0._RouteRule.__proto__),
    matcher: dart.finalFieldType(RequestTobool()),
    handler: dart.finalFieldType(RequestToFutureOfResponse())
  }));
  dart.trackLibraries("packages/pwa/worker.ddc", {
    "package:pwa/worker.dart": worker$0
  }, {
    "package:pwa/worker.dart": ["src/cache.dart", "src/handler.dart", "src/push.dart", "src/router.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["worker.dart","src/cache.dart","src/handler.dart","src/push.dart","src/router.dart"],"names":[],"mappings":"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","file":"worker.ddc.js"}');
  // Exports:
  return {
    worker: worker$0
  };
});

//# sourceMappingURL=worker.ddc.js.map
