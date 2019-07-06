define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const collection = dart_sdk.collection;
  const indexed_db = dart_sdk.indexed_db;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__js_facade__promise = Object.create(dart.library);
  const src__js_adapter = Object.create(dart.library);
  const src__js_facade__isomorphic_fetch = Object.create(dart.library);
  const src__js_facade__service_worker_api = Object.create(dart.library);
  const src__service_worker_api = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $addEventListener = dartx.addEventListener;
  const $dispatchEvent = dartx.dispatchEvent;
  const $removeEventListener = dartx.removeEventListener;
  const $on = dartx.on;
  const $_get = dartx._get;
  const $cast = dartx.cast;
  const $preventDefault = dartx.preventDefault;
  const $stopImmediatePropagation = dartx.stopImmediatePropagation;
  const $stopPropagation = dartx.stopPropagation;
  const $composedPath = dartx.composedPath;
  const $target = dartx.target;
  const $timeStamp = dartx.timeStamp;
  const $type = dartx.type;
  const $bubbles = dartx.bubbles;
  const $cancelable = dartx.cancelable;
  const $currentTarget = dartx.currentTarget;
  const $defaultPrevented = dartx.defaultPrevented;
  const $eventPhase = dartx.eventPhase;
  const $isTrusted = dartx.isTrusted;
  const $matchingTarget = dartx.matchingTarget;
  const $path = dartx.path;
  const $composed = dartx.composed;
  const $postMessage = dartx.postMessage;
  const $terminate = dartx.terminate;
  const $onError = dartx.onError;
  const $onMessage = dartx.onMessage;
  const $forEach = dartx.forEach;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicToExtendableEvent = () => (dynamicToExtendableEvent = dart.constFn(dart.fnType(src__service_worker_api.ExtendableEvent, [dart.dynamic])))();
  let dynamicToFetchEvent = () => (dynamicToFetchEvent = dart.constFn(dart.fnType(src__service_worker_api.FetchEvent, [dart.dynamic])))();
  let dynamicToInstallEvent = () => (dynamicToInstallEvent = dart.constFn(dart.fnType(src__service_worker_api.InstallEvent, [dart.dynamic])))();
  let dynamicToExtendableMessageEvent = () => (dynamicToExtendableMessageEvent = dart.constFn(dart.fnType(src__service_worker_api.ExtendableMessageEvent, [dart.dynamic])))();
  let dynamicToNotificationEvent = () => (dynamicToNotificationEvent = dart.constFn(dart.fnType(src__service_worker_api.NotificationEvent, [dart.dynamic])))();
  let dynamicToPushEvent = () => (dynamicToPushEvent = dart.constFn(dart.fnType(src__service_worker_api.PushEvent, [dart.dynamic])))();
  let dynamicToResponse = () => (dynamicToResponse = dart.constFn(dart.fnType(src__service_worker_api.Response, [dart.dynamic])))();
  let StreamOfExtendableEvent = () => (StreamOfExtendableEvent = dart.constFn(async.Stream$(src__service_worker_api.ExtendableEvent)))();
  let StreamOfFetchEvent = () => (StreamOfFetchEvent = dart.constFn(async.Stream$(src__service_worker_api.FetchEvent)))();
  let StreamOfInstallEvent = () => (StreamOfInstallEvent = dart.constFn(async.Stream$(src__service_worker_api.InstallEvent)))();
  let StreamOfExtendableMessageEvent = () => (StreamOfExtendableMessageEvent = dart.constFn(async.Stream$(src__service_worker_api.ExtendableMessageEvent)))();
  let StreamOfNotificationEvent = () => (StreamOfNotificationEvent = dart.constFn(async.Stream$(src__service_worker_api.NotificationEvent)))();
  let StreamOfPushEvent = () => (StreamOfPushEvent = dart.constFn(async.Stream$(src__service_worker_api.PushEvent)))();
  let dynamicToServiceWorkerRegistration = () => (dynamicToServiceWorkerRegistration = dart.constFn(dart.fnType(src__service_worker_api.ServiceWorkerRegistration, [dart.dynamic])))();
  let dynamicToEvent = () => (dynamicToEvent = dart.constFn(dart.fnType(html.Event, [dart.dynamic])))();
  let dynamicToErrorEvent = () => (dynamicToErrorEvent = dart.constFn(dart.fnType(html.ErrorEvent, [dart.dynamic])))();
  let dynamicToMessageEvent = () => (dynamicToMessageEvent = dart.constFn(dart.fnType(html.MessageEvent, [dart.dynamic])))();
  let IterableOfServiceWorkerRegistration = () => (IterableOfServiceWorkerRegistration = dart.constFn(core.Iterable$(src__service_worker_api.ServiceWorkerRegistration)))();
  let ListOfServiceWorkerRegistration = () => (ListOfServiceWorkerRegistration = dart.constFn(core.List$(src__service_worker_api.ServiceWorkerRegistration)))();
  let ListToListOfServiceWorkerRegistration = () => (ListToListOfServiceWorkerRegistration = dart.constFn(dart.fnType(ListOfServiceWorkerRegistration(), [core.List])))();
  let StreamOfEvent = () => (StreamOfEvent = dart.constFn(async.Stream$(html.Event)))();
  let StreamOfErrorEvent = () => (StreamOfErrorEvent = dart.constFn(async.Stream$(html.ErrorEvent)))();
  let StreamOfMessageEvent = () => (StreamOfMessageEvent = dart.constFn(async.Stream$(html.MessageEvent)))();
  let dynamicToCache = () => (dynamicToCache = dart.constFn(dart.fnType(src__service_worker_api.Cache, [dart.dynamic])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListToListOfString = () => (ListToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.List])))();
  let IterableOfResponse = () => (IterableOfResponse = dart.constFn(core.Iterable$(src__service_worker_api.Response)))();
  let ListOfResponse = () => (ListOfResponse = dart.constFn(core.List$(src__service_worker_api.Response)))();
  let ListToListOfResponse = () => (ListToListOfResponse = dart.constFn(dart.fnType(ListOfResponse(), [core.List])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicToRequest = () => (dynamicToRequest = dart.constFn(dart.fnType(src__service_worker_api.Request, [dart.dynamic])))();
  let IterableOfRequest = () => (IterableOfRequest = dart.constFn(core.Iterable$(src__service_worker_api.Request)))();
  let ListOfRequest = () => (ListOfRequest = dart.constFn(core.List$(src__service_worker_api.Request)))();
  let ListToListOfRequest = () => (ListToListOfRequest = dart.constFn(dart.fnType(ListOfRequest(), [core.List])))();
  let dynamicToServiceWorkerClient = () => (dynamicToServiceWorkerClient = dart.constFn(dart.fnType(src__service_worker_api.ServiceWorkerClient, [dart.dynamic])))();
  let IterableOfServiceWorkerClient = () => (IterableOfServiceWorkerClient = dart.constFn(core.Iterable$(src__service_worker_api.ServiceWorkerClient)))();
  let ListOfServiceWorkerClient = () => (ListOfServiceWorkerClient = dart.constFn(core.List$(src__service_worker_api.ServiceWorkerClient)))();
  let ListToListOfServiceWorkerClient = () => (ListToListOfServiceWorkerClient = dart.constFn(dart.fnType(ListOfServiceWorkerClient(), [core.List])))();
  let dynamicToWindowClient = () => (dynamicToWindowClient = dart.constFn(dart.fnType(src__service_worker_api.WindowClient, [dart.dynamic])))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  let dynamicToPushSubscription = () => (dynamicToPushSubscription = dart.constFn(dart.fnType(src__service_worker_api.PushSubscription, [dart.dynamic])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfEventTarget = () => (ListOfEventTarget = dart.constFn(core.List$(html.EventTarget)))();
  let ResponseTodynamic = () => (ResponseTodynamic = dart.constFn(dart.fnType(dart.dynamic, [src__service_worker_api.Response])))();
  let ListOfMessagePort = () => (ListOfMessagePort = dart.constFn(core.List$(html.MessagePort)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  src__js_adapter.callbackToStream = function(J, T, object, name, unwrapValue) {
    let controller = async.StreamController$(T).broadcast({sync: true});
    js_util.setProperty(object, name, js.allowInterop(dart.fnType(core.Null, [J]), dart.fn(event => {
      controller.add(unwrapValue(event));
    }, dart.fnType(core.Null, [J]))));
    return controller.stream;
  };
  src__js_adapter.promiseToFuture = function(J, T, promise, unwrapValue) {
    if (unwrapValue === void 0) unwrapValue = null;
    let completer = async.Completer$(T).new();
    promise.then(js.allowInterop(dart.fnType(dart.void, [J]), dart.fn(value => {
      let unwrapped = null;
      if (unwrapValue == null) {
        unwrapped = T.as(value);
      } else if (value != null) {
        unwrapped = unwrapValue(value);
      }
      completer.complete(unwrapped);
    }, dart.fnType(core.Null, [J]))), js.allowInterop(dynamicTovoid(), dart.fn(error => {
      completer.completeError(error);
    }, dynamicToNull())));
    return completer.future;
  };
  src__js_adapter.futureToPromise = function(T, J, future, wrapValue) {
    if (wrapValue === void 0) wrapValue = null;
    return new dart.global.Promise(js.allowInterop(dart.fnType(dart.void, [dart.fnType(dart.void, [J]), dynamicTovoid()]), dart.fn((resolveFn, rejectFn) => {
      FutureOfNull()._check(future.then(core.Null, dart.fn(value => {
        let wrapped = null;
        if (wrapValue != null) {
          wrapped = wrapValue(value);
        } else if (value != null) {
          wrapped = value;
        }
        resolveFn(J.as(wrapped));
      }, dart.fnType(core.Null, [T])))).catchError(dart.fn(error => {
        rejectFn(error);
      }, dynamicToNull()));
    }, dart.fnType(core.Null, [dart.fnType(dart.void, [J]), dynamicTovoid()]))));
  };
  src__js_adapter.iteratorToIterable = function(T, iteratorGetter) {
    return new (src__js_adapter._Iterable$(T)).new(iteratorGetter);
  };
  const _object = dart.privateName(src__js_adapter, "_object");
  const _current = dart.privateName(src__js_adapter, "_current");
  const _is__Iterator_default = Symbol('_is__Iterator_default');
  src__js_adapter._Iterator$ = dart.generic(R => {
    let IteratorOfR = () => (IteratorOfR = dart.constFn(core.Iterator$(R)))();
    class _Iterator extends core.Object {
      get current() {
        return this[_current];
      }
      moveNext() {
        let m = js_util.callMethod(this[_object], "next", []);
        let hasValue = dart.equals(js_util.getProperty(m, "done"), false);
        this[_current] = hasValue ? R.as(js_util.getProperty(m, "value")) : null;
        return hasValue;
      }
    }
    (_Iterator.new = function(object) {
      this[_current] = null;
      this[_object] = object;
    }).prototype = _Iterator.prototype;
    dart.addTypeTests(_Iterator);
    _Iterator.prototype[_is__Iterator_default] = true;
    _Iterator[dart.implements] = () => [IteratorOfR()];
    dart.setMethodSignature(_Iterator, () => ({
      __proto__: dart.getMethods(_Iterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_Iterator, () => ({
      __proto__: dart.getGetters(_Iterator.__proto__),
      current: R
    }));
    dart.setLibraryUri(_Iterator, "package:service_worker/src/js_adapter.dart");
    dart.setFieldSignature(_Iterator, () => ({
      __proto__: dart.getFields(_Iterator.__proto__),
      [_object]: dart.finalFieldType(dart.dynamic),
      [_current]: dart.fieldType(R)
    }));
    return _Iterator;
  });
  src__js_adapter._Iterator = src__js_adapter._Iterator$();
  dart.addTypeTests(src__js_adapter._Iterator, _is__Iterator_default);
  const _getter = dart.privateName(src__js_adapter, "_getter");
  const _is__Iterable_default = Symbol('_is__Iterable_default');
  src__js_adapter._Iterable$ = dart.generic(R => {
    let _IteratorOfR = () => (_IteratorOfR = dart.constFn(src__js_adapter._Iterator$(R)))();
    class _Iterable extends collection.IterableMixin$(R) {
      get iterator() {
        return new (_IteratorOfR()).new(dart.dcall(this[_getter], []));
      }
    }
    (_Iterable.new = function(getter) {
      this[_getter] = getter;
    }).prototype = _Iterable.prototype;
    dart.addTypeTests(_Iterable);
    _Iterable.prototype[_is__Iterable_default] = true;
    dart.setGetterSignature(_Iterable, () => ({
      __proto__: dart.getGetters(_Iterable.__proto__),
      iterator: core.Iterator$(R),
      [$iterator]: core.Iterator$(R)
    }));
    dart.setLibraryUri(_Iterable, "package:service_worker/src/js_adapter.dart");
    dart.setFieldSignature(_Iterable, () => ({
      __proto__: dart.getFields(_Iterable.__proto__),
      [_getter]: dart.finalFieldType(core.Function)
    }));
    dart.defineExtensionAccessors(_Iterable, ['iterator']);
    return _Iterable;
  });
  src__js_adapter._Iterable = src__js_adapter._Iterable$();
  dart.addTypeTests(src__js_adapter._Iterable, _is__Iterable_default);
  const _delegate = dart.privateName(src__service_worker_api, "_delegate");
  const _caches = dart.privateName(src__service_worker_api, "_caches");
  const _clients = dart.privateName(src__service_worker_api, "_clients");
  const _registration = dart.privateName(src__service_worker_api, "_registration");
  const _onActivate = dart.privateName(src__service_worker_api, "_onActivate");
  const _onFetch = dart.privateName(src__service_worker_api, "_onFetch");
  const _onInstall = dart.privateName(src__service_worker_api, "_onInstall");
  const _onMessage = dart.privateName(src__service_worker_api, "_onMessage");
  const _onNotificationClick = dart.privateName(src__service_worker_api, "_onNotificationClick");
  const _onPush = dart.privateName(src__service_worker_api, "_onPush");
  const _onPushSubscriptionChange = dart.privateName(src__service_worker_api, "_onPushSubscriptionChange");
  const _location = dart.privateName(src__service_worker_api, "_location");
  src__service_worker_api.ServiceWorkerGlobalScope = class ServiceWorkerGlobalScope extends core.Object {
    get caches() {
      let t = this[_caches];
      return t == null ? this[_caches] = new src__service_worker_api.CacheStorage.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "caches")) : t;
    }
    get clients() {
      let t = this[_clients];
      return t == null ? this[_clients] = new src__service_worker_api.ServiceWorkerClients.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "clients")) : t;
    }
    get registration() {
      let l = this[_registration];
      return l != null ? l : new src__service_worker_api.ServiceWorkerRegistration.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "registration"));
    }
    get onActivate() {
      let t = this[_onActivate];
      return t == null ? this[_onActivate] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.ExtendableEvent, this[_delegate], "onactivate", dart.fn(j => new src__service_worker_api.ExtendableEvent.__(j), dynamicToExtendableEvent())) : t;
    }
    get onFetch() {
      let t = this[_onFetch];
      return t == null ? this[_onFetch] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.FetchEvent, this[_delegate], "onfetch", dart.fn(j => new src__service_worker_api.FetchEvent.__(j), dynamicToFetchEvent())) : t;
    }
    get onInstall() {
      let t = this[_onInstall];
      return t == null ? this[_onInstall] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.InstallEvent, this[_delegate], "oninstall", dart.fn(j => new src__service_worker_api.InstallEvent.__(j), dynamicToInstallEvent())) : t;
    }
    get onMessage() {
      let t = this[_onMessage];
      return t == null ? this[_onMessage] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.ExtendableMessageEvent, this[_delegate], "onmessage", dart.fn(j => new src__service_worker_api.ExtendableMessageEvent.__(j), dynamicToExtendableMessageEvent())) : t;
    }
    get onNotificationClick() {
      let t = this[_onNotificationClick];
      return t == null ? this[_onNotificationClick] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.NotificationEvent, this[_delegate], "onnotificationclick", dart.fn(j => new src__service_worker_api.NotificationEvent.__(j), dynamicToNotificationEvent())) : t;
    }
    get onPush() {
      let t = this[_onPush];
      return t == null ? this[_onPush] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.PushEvent, this[_delegate], "onpush", dart.fn(j => new src__service_worker_api.PushEvent.__(j), dynamicToPushEvent())) : t;
    }
    get onPushSubscriptionChange() {
      let t = this[_onPushSubscriptionChange];
      return t == null ? this[_onPushSubscriptionChange] = src__js_adapter.callbackToStream(dart.dynamic, src__service_worker_api.PushEvent, this[_delegate], "onpushsubscriptionchange", dart.fn(j => new src__service_worker_api.PushEvent.__(j), dynamicToPushEvent())) : t;
    }
    skipWaiting() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "skipWaiting", []));
    }
    addEventListener(K, type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "addEventListener", [type, js.allowInterop(dart.fnType(dart.dynamic, [K]), listener), useCapture]);
    }
    fetch(request, requestInit) {
      if (requestInit === void 0) requestInit = null;
      let args = [src__service_worker_api._wrapRequest(request)];
      if (requestInit != null) {
        args[$add](requestInit);
      }
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.Response, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "fetch", args), dart.fn(j => new src__service_worker_api.Response.__(j), dynamicToResponse()));
    }
    get indexedDB() {
      return src__service_worker_api._getProperty(indexed_db.IdbFactory, this[_delegate], "indexedDB");
    }
    get location() {
      let t = this[_location];
      return t == null ? this[_location] = new src__service_worker_api.WorkerLocation.new(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "location")) : t;
    }
  };
  (src__service_worker_api.ServiceWorkerGlobalScope.__ = function(delegate) {
    this[_caches] = null;
    this[_clients] = null;
    this[_registration] = null;
    this[_onActivate] = null;
    this[_onFetch] = null;
    this[_onInstall] = null;
    this[_onMessage] = null;
    this[_onNotificationClick] = null;
    this[_onPush] = null;
    this[_onPushSubscriptionChange] = null;
    this[_location] = null;
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorkerGlobalScope.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorkerGlobalScope);
  dart.setMethodSignature(src__service_worker_api.ServiceWorkerGlobalScope, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorkerGlobalScope.__proto__),
    skipWaiting: dart.fnType(async.Future$(core.Null), []),
    addEventListener: dart.gFnType(K => [dart.void, [core.String, dart.fnType(dart.dynamic, [K])], [core.bool]]),
    fetch: dart.fnType(async.Future$(src__service_worker_api.Response), [dart.dynamic], [dart.anonymousJSType("RequestInit")])
  }));
  dart.setGetterSignature(src__service_worker_api.ServiceWorkerGlobalScope, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ServiceWorkerGlobalScope.__proto__),
    caches: src__service_worker_api.CacheStorage,
    clients: src__service_worker_api.ServiceWorkerClients,
    registration: src__service_worker_api.ServiceWorkerRegistration,
    onActivate: async.Stream$(src__service_worker_api.ExtendableEvent),
    onFetch: async.Stream$(src__service_worker_api.FetchEvent),
    onInstall: async.Stream$(src__service_worker_api.InstallEvent),
    onMessage: async.Stream$(src__service_worker_api.ExtendableMessageEvent),
    onNotificationClick: async.Stream$(src__service_worker_api.NotificationEvent),
    onPush: async.Stream$(src__service_worker_api.PushEvent),
    onPushSubscriptionChange: async.Stream$(src__service_worker_api.PushEvent),
    indexedDB: indexed_db.IdbFactory,
    location: src__service_worker_api.WorkerLocation
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorkerGlobalScope, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorkerGlobalScope, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorkerGlobalScope.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic),
    [_caches]: dart.fieldType(src__service_worker_api.CacheStorage),
    [_clients]: dart.fieldType(src__service_worker_api.ServiceWorkerClients),
    [_registration]: dart.fieldType(src__service_worker_api.ServiceWorkerRegistration),
    [_onActivate]: dart.fieldType(StreamOfExtendableEvent()),
    [_onFetch]: dart.fieldType(StreamOfFetchEvent()),
    [_onInstall]: dart.fieldType(StreamOfInstallEvent()),
    [_onMessage]: dart.fieldType(StreamOfExtendableMessageEvent()),
    [_onNotificationClick]: dart.fieldType(StreamOfNotificationEvent()),
    [_onPush]: dart.fieldType(StreamOfPushEvent()),
    [_onPushSubscriptionChange]: dart.fieldType(StreamOfPushEvent()),
    [_location]: dart.fieldType(src__service_worker_api.WorkerLocation)
  }));
  dart.defineLazy(src__service_worker_api.ServiceWorkerGlobalScope, {
    /*src__service_worker_api.ServiceWorkerGlobalScope.globalScope*/get globalScope() {
      return new src__service_worker_api.ServiceWorkerGlobalScope.__(dart.global.self);
    },
    /*src__service_worker_api.ServiceWorkerGlobalScope.self*/get self() {
      return src__service_worker_api.ServiceWorkerGlobalScope.globalScope;
    }
  });
  const _onControllerChange = dart.privateName(src__service_worker_api, "_onControllerChange");
  const _onError = dart.privateName(src__service_worker_api, "_onError");
  src__service_worker_api.ServiceWorkerContainer = class ServiceWorkerContainer extends core.Object {
    get controller() {
      return src__service_worker_api.ServiceWorker._fromDelegate(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "controller"));
    }
    get ready() {
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.ServiceWorkerRegistration, src__service_worker_api._getProperty(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "ready"), dart.fn(j => new src__service_worker_api.ServiceWorkerRegistration.__(j), dynamicToServiceWorkerRegistration()));
    }
    get onControllerChange() {
      let t = this[_onControllerChange];
      return t == null ? this[_onControllerChange] = src__js_adapter.callbackToStream(dart.dynamic, html.Event, this[_delegate], "oncontrollerchange", dart.fn(j => html.Event.as(j), dynamicToEvent())) : t;
    }
    get onError() {
      let t = this[_onError];
      return t == null ? this[_onError] = src__js_adapter.callbackToStream(dart.dynamic, html.ErrorEvent, this[_delegate], "onerror", dart.fn(j => html.ErrorEvent.as(j), dynamicToErrorEvent())) : t;
    }
    get onMessage() {
      let t = this[_onMessage];
      return t == null ? this[_onMessage] = src__js_adapter.callbackToStream(dart.dynamic, html.MessageEvent, this[_delegate], "onmessage", dart.fn(j => html.MessageEvent.as(j), dynamicToMessageEvent())) : t;
    }
    register(scriptURL, options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.ServiceWorkerRegistration, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "register", [scriptURL, options]), dart.fn(j => new src__service_worker_api.ServiceWorkerRegistration.__(j), dynamicToServiceWorkerRegistration()));
    }
    getRegistration(scope) {
      if (scope === void 0) scope = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.ServiceWorkerRegistration, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "getRegistration", [scope]), dart.fn(j => new src__service_worker_api.ServiceWorkerRegistration.__(j), dynamicToServiceWorkerRegistration()));
    }
    getRegistrations() {
      return src__js_adapter.promiseToFuture(core.List, ListOfServiceWorkerRegistration(), src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "getRegistrations", []), dart.fn(list => IterableOfServiceWorkerRegistration()._check(list[$map](src__service_worker_api.ServiceWorkerRegistration, dart.fn(j => new src__service_worker_api.ServiceWorkerRegistration.__(j), dynamicToServiceWorkerRegistration())))[$toList](), ListToListOfServiceWorkerRegistration()));
    }
    addEventListener(K, type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "addEventListener", [type, js.allowInterop(dart.fnType(dart.dynamic, [K]), listener), useCapture]);
    }
  };
  (src__service_worker_api.ServiceWorkerContainer.__ = function(delegate) {
    this[_onControllerChange] = null;
    this[_onError] = null;
    this[_onMessage] = null;
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorkerContainer.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorkerContainer);
  dart.setMethodSignature(src__service_worker_api.ServiceWorkerContainer, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorkerContainer.__proto__),
    register: dart.fnType(async.Future$(src__service_worker_api.ServiceWorkerRegistration), [core.String], [dart.anonymousJSType("ServiceWorkerRegisterOptions")]),
    getRegistration: dart.fnType(async.Future$(src__service_worker_api.ServiceWorkerRegistration), [], [core.String]),
    getRegistrations: dart.fnType(async.Future$(core.List$(src__service_worker_api.ServiceWorkerRegistration)), []),
    addEventListener: dart.gFnType(K => [dart.void, [core.String, dart.fnType(dart.dynamic, [K])], [core.bool]])
  }));
  dart.setGetterSignature(src__service_worker_api.ServiceWorkerContainer, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ServiceWorkerContainer.__proto__),
    controller: src__service_worker_api.ServiceWorker,
    ready: async.Future$(src__service_worker_api.ServiceWorkerRegistration),
    onControllerChange: async.Stream$(html.Event),
    onError: async.Stream$(html.ErrorEvent),
    onMessage: async.Stream$(html.MessageEvent)
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorkerContainer, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorkerContainer, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorkerContainer.__proto__),
    [_onControllerChange]: dart.fieldType(StreamOfEvent()),
    [_onError]: dart.fieldType(StreamOfErrorEvent()),
    [_onMessage]: dart.fieldType(StreamOfMessageEvent()),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineLazy(src__service_worker_api.ServiceWorkerContainer, {
    /*src__service_worker_api.ServiceWorkerContainer.navigatorContainer*/get navigatorContainer() {
      return dart.global.window.navigator.serviceWorker == null ? null : new src__service_worker_api.ServiceWorkerContainer.__(dart.global.window.navigator.serviceWorker);
    }
  });
  src__service_worker_api.CacheStorage = class CacheStorage extends core.Object {
    match(request, options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.Response, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "match", [src__service_worker_api._wrapRequest(request), options]), dart.fn(j => new src__service_worker_api.Response.__(j), dynamicToResponse()));
    }
    has(cacheName) {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.bool, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "has", [cacheName]));
    }
    open(cacheName) {
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.Cache, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "open", [cacheName]), dart.fn(j => new src__service_worker_api.Cache.__(j), dynamicToCache()));
    }
    delete(cacheName) {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.bool, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "delete", [cacheName]));
    }
    keys() {
      return src__js_adapter.promiseToFuture(core.List, ListOfString(), src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "keys", []), dart.fn(list => ListOfString().from(list), ListToListOfString()));
    }
  };
  (src__service_worker_api.CacheStorage.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.CacheStorage.prototype;
  dart.addTypeTests(src__service_worker_api.CacheStorage);
  dart.setMethodSignature(src__service_worker_api.CacheStorage, () => ({
    __proto__: dart.getMethods(src__service_worker_api.CacheStorage.__proto__),
    match: dart.fnType(async.Future$(src__service_worker_api.Response), [dart.dynamic], [dart.anonymousJSType("CacheOptions")]),
    has: dart.fnType(async.Future$(core.bool), [core.String]),
    open: dart.fnType(async.Future$(src__service_worker_api.Cache), [core.String]),
    delete: dart.fnType(async.Future$(core.bool), [core.String]),
    keys: dart.fnType(async.Future$(core.List$(core.String)), [])
  }));
  dart.setLibraryUri(src__service_worker_api.CacheStorage, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.CacheStorage, () => ({
    __proto__: dart.getFields(src__service_worker_api.CacheStorage.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.Cache = class Cache extends core.Object {
    match(request, options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.Response, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "match", [src__service_worker_api._wrapRequest(request), options]), dart.fn(j => new src__service_worker_api.Response.__(j), dynamicToResponse()));
    }
    matchAll(request, options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(core.List, ListOfResponse(), src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "matchAll", [src__service_worker_api._wrapRequest(request), options]), dart.fn(list => {
        let t = IterableOfResponse()._check(list == null ? null : list[$map](src__service_worker_api.Response, dart.lazyFn(item => new src__service_worker_api.Response.__(item), dynamicToResponse)));
        return t == null ? null : t[$toList]();
      }, ListToListOfResponse()));
    }
    add(request) {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "add", [src__service_worker_api._wrapRequest(request)]));
    }
    addAll(requests) {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "addAll", [requests[$map](dart.dynamic, dart.fn(src__service_worker_api._wrapRequest, dynamicTodynamic()))[$toList]()]));
    }
    put(request, response) {
      let unwrapped = src__service_worker_api.Request.is(request) ? request[_delegate] : request;
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "put", [unwrapped, response[_delegate]]));
    }
    delete(request, options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, core.bool, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "delete", [src__service_worker_api._wrapRequest(request), options]));
    }
    keys(request, options) {
      if (request === void 0) request = null;
      if (options === void 0) options = null;
      let params = [];
      if (request != null) {
        params[$add](src__service_worker_api._wrapRequest(request));
        if (options != null) {
          params[$add](options);
        }
      }
      return src__js_adapter.promiseToFuture(core.List, ListOfRequest(), src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "keys", params), dart.fn(list => {
        let t = IterableOfRequest()._check(list == null ? null : list[$map](src__service_worker_api.Request, dart.lazyFn(item => new src__service_worker_api.Request.__(item), dynamicToRequest)));
        return t == null ? null : t[$toList]();
      }, ListToListOfRequest()));
    }
  };
  (src__service_worker_api.Cache.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.Cache.prototype;
  dart.addTypeTests(src__service_worker_api.Cache);
  dart.setMethodSignature(src__service_worker_api.Cache, () => ({
    __proto__: dart.getMethods(src__service_worker_api.Cache.__proto__),
    match: dart.fnType(async.Future$(src__service_worker_api.Response), [dart.dynamic], [dart.anonymousJSType("CacheOptions")]),
    matchAll: dart.fnType(async.Future$(core.List$(src__service_worker_api.Response)), [dart.dynamic], [dart.anonymousJSType("CacheOptions")]),
    add: dart.fnType(async.Future$(core.Null), [dart.dynamic]),
    addAll: dart.fnType(async.Future$(core.Null), [core.List]),
    put: dart.fnType(async.Future$(core.Null), [dart.dynamic, src__service_worker_api.Response]),
    delete: dart.fnType(async.Future$(core.bool), [dart.dynamic], [dart.anonymousJSType("CacheOptions")]),
    keys: dart.fnType(async.Future$(core.List$(src__service_worker_api.Request)), [], [src__service_worker_api.Request, dart.anonymousJSType("CacheOptions")])
  }));
  dart.setLibraryUri(src__service_worker_api.Cache, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.Cache, () => ({
    __proto__: dart.getFields(src__service_worker_api.Cache.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.ServiceWorkerClients = class ServiceWorkerClients extends core.Object {
    _get(clientId) {
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.ServiceWorkerClient, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "get", [clientId]), dart.fn(j => new src__service_worker_api.ServiceWorkerClient.__(j), dynamicToServiceWorkerClient()));
    }
    matchAll(options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(core.List, ListOfServiceWorkerClient(), src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "matchAll", [options]), dart.fn(list => {
        let t = IterableOfServiceWorkerClient()._check(list == null ? null : list[$map](src__service_worker_api.ServiceWorkerClient, dart.lazyFn(j => new src__service_worker_api.ServiceWorkerClient.__(j), dynamicToServiceWorkerClient)));
        return t == null ? null : t[$toList]();
      }, ListToListOfServiceWorkerClient()));
    }
    openWindow(url) {
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.WindowClient, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "openWindow", [url]), dart.fn(j => new src__service_worker_api.WindowClient.__(j), dynamicToWindowClient()));
    }
    claim() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "claim", []));
    }
  };
  (src__service_worker_api.ServiceWorkerClients.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorkerClients.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorkerClients);
  dart.setMethodSignature(src__service_worker_api.ServiceWorkerClients, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorkerClients.__proto__),
    _get: dart.fnType(async.Future$(src__service_worker_api.ServiceWorkerClient), [core.String]),
    matchAll: dart.fnType(async.Future$(core.List$(src__service_worker_api.ServiceWorkerClient)), [], [dart.anonymousJSType("ServiceWorkerClientsMatchOptions")]),
    openWindow: dart.fnType(async.Future$(src__service_worker_api.WindowClient), [core.String]),
    claim: dart.fnType(async.Future$(core.Null), [])
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorkerClients, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorkerClients, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorkerClients.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.ServiceWorkerClient = class ServiceWorkerClient extends core.Object {
    postMessage(message, transfer) {
      if (transfer === void 0) transfer = null;
      let args = [message];
      if (transfer != null) args[$add](transfer);
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "postMessage", args);
    }
    get frameType() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "frameType");
    }
    get id() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "id");
    }
    get url() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "url");
    }
  };
  (src__service_worker_api.ServiceWorkerClient.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorkerClient.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorkerClient);
  dart.setMethodSignature(src__service_worker_api.ServiceWorkerClient, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorkerClient.__proto__),
    postMessage: dart.fnType(dart.void, [dart.dynamic], [core.List])
  }));
  dart.setGetterSignature(src__service_worker_api.ServiceWorkerClient, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ServiceWorkerClient.__proto__),
    frameType: core.String,
    id: core.String,
    url: core.String
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorkerClient, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorkerClient, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorkerClient.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.WindowClient = class WindowClient extends src__service_worker_api.ServiceWorkerClient {
    focus() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.Null, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "focus", []));
    }
    get focused() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "focused");
    }
    get visibilityState() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "visibilityState");
    }
  };
  (src__service_worker_api.WindowClient.__ = function(delegate) {
    src__service_worker_api.WindowClient.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.WindowClient.prototype;
  dart.addTypeTests(src__service_worker_api.WindowClient);
  dart.setMethodSignature(src__service_worker_api.WindowClient, () => ({
    __proto__: dart.getMethods(src__service_worker_api.WindowClient.__proto__),
    focus: dart.fnType(async.Future$(core.Null), [])
  }));
  dart.setGetterSignature(src__service_worker_api.WindowClient, () => ({
    __proto__: dart.getGetters(src__service_worker_api.WindowClient.__proto__),
    focused: core.bool,
    visibilityState: core.String
  }));
  dart.setLibraryUri(src__service_worker_api.WindowClient, "package:service_worker/src/service_worker_api.dart");
  const _pushManager = dart.privateName(src__service_worker_api, "_pushManager");
  const _onUpdateFound = dart.privateName(src__service_worker_api, "_onUpdateFound");
  src__service_worker_api.ServiceWorkerRegistration = class ServiceWorkerRegistration extends core.Object {
    get jsObject() {
      return this[_delegate];
    }
    get scope() {
      return src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "scope");
    }
    get installing() {
      return src__service_worker_api.ServiceWorker._fromDelegate(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "installing"));
    }
    get waiting() {
      return src__service_worker_api.ServiceWorker._fromDelegate(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "waiting"));
    }
    get active() {
      return src__service_worker_api.ServiceWorker._fromDelegate(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "active"));
    }
    get pushManager() {
      let t = this[_pushManager];
      return t == null ? this[_pushManager] = new src__service_worker_api.PushManager.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "pushManager")) : t;
    }
    get onUpdateFound() {
      let t = this[_onUpdateFound];
      return t == null ? this[_onUpdateFound] = src__js_adapter.callbackToStream(dart.dynamic, dart.dynamic, this[_delegate], "onupdatefound", dart.fn(j => null, dynamicToNull())) : t;
    }
    update() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "update", []);
    }
    unregister() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.bool, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "unregister", []));
    }
    addEventListener(type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "addEventListener", [type, js.allowInterop(EventTodynamic(), listener), useCapture]);
    }
    dispatchEvent(event) {
      return src__service_worker_api._callMethod(core.bool, this[_delegate], "dispatchEvent", [event]);
    }
    get on() {
      return src__service_worker_api._getProperty(html.Events, this[_delegate], "on");
    }
    removeEventListener(type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      return dart.throw(new core.UnimplementedError.new());
    }
    showNotification(title, options) {
      if (options === void 0) options = null;
      let args = [title];
      if (options != null) args[$add](options);
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.NotificationEvent, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "showNotification", args), dart.fn(j => new src__service_worker_api.NotificationEvent.__(j), dynamicToNotificationEvent()));
    }
  };
  (src__service_worker_api.ServiceWorkerRegistration.__ = function(delegate) {
    this[_pushManager] = null;
    this[_onUpdateFound] = null;
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorkerRegistration.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorkerRegistration);
  src__service_worker_api.ServiceWorkerRegistration[dart.implements] = () => [html.EventTarget];
  dart.setMethodSignature(src__service_worker_api.ServiceWorkerRegistration, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorkerRegistration.__proto__),
    update: dart.fnType(dart.void, []),
    unregister: dart.fnType(async.Future$(core.bool), []),
    addEventListener: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    [$addEventListener]: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    dispatchEvent: dart.fnType(core.bool, [html.Event]),
    [$dispatchEvent]: dart.fnType(core.bool, [html.Event]),
    removeEventListener: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    [$removeEventListener]: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    showNotification: dart.fnType(async.Future$(src__service_worker_api.NotificationEvent), [core.String], [dart.anonymousJSType("ShowNotificationOptions")])
  }));
  dart.setGetterSignature(src__service_worker_api.ServiceWorkerRegistration, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ServiceWorkerRegistration.__proto__),
    jsObject: dart.dynamic,
    scope: dart.dynamic,
    installing: src__service_worker_api.ServiceWorker,
    waiting: src__service_worker_api.ServiceWorker,
    active: src__service_worker_api.ServiceWorker,
    pushManager: src__service_worker_api.PushManager,
    onUpdateFound: async.Stream,
    on: html.Events,
    [$on]: html.Events
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorkerRegistration, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorkerRegistration, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorkerRegistration.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic),
    [_pushManager]: dart.fieldType(src__service_worker_api.PushManager),
    [_onUpdateFound]: dart.fieldType(async.Stream)
  }));
  dart.defineExtensionMethods(src__service_worker_api.ServiceWorkerRegistration, ['addEventListener', 'dispatchEvent', 'removeEventListener']);
  dart.defineExtensionAccessors(src__service_worker_api.ServiceWorkerRegistration, ['on']);
  src__service_worker_api.PushManager = class PushManager extends core.Object {
    subscribe(options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.PushSubscription, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "subscribe", [options]), dart.fn(j => new src__service_worker_api.PushSubscription.__(j), dynamicToPushSubscription()));
    }
    getSubscription() {
      return src__js_adapter.promiseToFuture(dart.dynamic, src__service_worker_api.PushSubscription, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "getSubscription", []), dart.fn(j => new src__service_worker_api.PushSubscription.__(j), dynamicToPushSubscription()));
    }
    hasPermission() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.String, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "hasPermission", []));
    }
    permissionState(options) {
      if (options === void 0) options = null;
      return src__js_adapter.promiseToFuture(dart.dynamic, core.String, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "permissionState", [options]));
    }
  };
  (src__service_worker_api.PushManager.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.PushManager.prototype;
  dart.addTypeTests(src__service_worker_api.PushManager);
  dart.setMethodSignature(src__service_worker_api.PushManager, () => ({
    __proto__: dart.getMethods(src__service_worker_api.PushManager.__proto__),
    subscribe: dart.fnType(async.Future$(src__service_worker_api.PushSubscription), [], [dart.anonymousJSType("PushSubscriptionOptions")]),
    getSubscription: dart.fnType(async.Future$(src__service_worker_api.PushSubscription), []),
    hasPermission: dart.fnType(async.Future$(core.String), []),
    permissionState: dart.fnType(async.Future$(core.String), [], [dart.anonymousJSType("PushSubscriptionOptions")])
  }));
  dart.setLibraryUri(src__service_worker_api.PushManager, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.PushManager, () => ({
    __proto__: dart.getFields(src__service_worker_api.PushManager.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.PushSubscription = class PushSubscription extends core.Object {
    get endpoint() {
      return src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "endpoint");
    }
    getKey(name) {
      return src__service_worker_api._callMethod(typed_data.ByteBuffer, this[_delegate], "getKey", [name]);
    }
    getKeysAsString() {
      let map = core.Map._check(convert.json.decode(dart.global.JSON.stringify(this[_delegate])));
      let keys = map[$_get]("keys");
      if (core.Map.is(keys)) {
        return MapOfString$String()._check(keys[$cast](core.String, core.String));
      }
      return new (IdentityMapOfString$String()).new();
    }
    unsubscribe() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.bool, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "unsubscribe", []));
    }
  };
  (src__service_worker_api.PushSubscription.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.PushSubscription.prototype;
  dart.addTypeTests(src__service_worker_api.PushSubscription);
  dart.setMethodSignature(src__service_worker_api.PushSubscription, () => ({
    __proto__: dart.getMethods(src__service_worker_api.PushSubscription.__proto__),
    getKey: dart.fnType(typed_data.ByteBuffer, [core.String]),
    getKeysAsString: dart.fnType(core.Map$(core.String, core.String), []),
    unsubscribe: dart.fnType(async.Future$(core.bool), [])
  }));
  dart.setGetterSignature(src__service_worker_api.PushSubscription, () => ({
    __proto__: dart.getGetters(src__service_worker_api.PushSubscription.__proto__),
    endpoint: dart.dynamic
  }));
  dart.setLibraryUri(src__service_worker_api.PushSubscription, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.PushSubscription, () => ({
    __proto__: dart.getFields(src__service_worker_api.PushSubscription.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.PushSubscriptionKeys = class PushSubscriptionKeys extends core.Object {};
  (src__service_worker_api.PushSubscriptionKeys.new = function() {
  }).prototype = src__service_worker_api.PushSubscriptionKeys.prototype;
  dart.addTypeTests(src__service_worker_api.PushSubscriptionKeys);
  dart.setLibraryUri(src__service_worker_api.PushSubscriptionKeys, "package:service_worker/src/service_worker_api.dart");
  dart.defineLazy(src__service_worker_api.PushSubscriptionKeys, {
    /*src__service_worker_api.PushSubscriptionKeys.auth*/get auth() {
      return "auth";
    },
    /*src__service_worker_api.PushSubscriptionKeys.p256dh*/get p256dh() {
      return "p256dh";
    }
  });
  src__service_worker_api.ExtendableEvent = class ExtendableEvent extends core.Object {
    waitUntil(future) {
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "waitUntil", [src__js_adapter.futureToPromise(dart.dynamic, dart.dynamic, future)]);
    }
    get target() {
      return src__service_worker_api._getProperty(html.EventTarget, this[_delegate], "target");
    }
    get timeStamp() {
      return src__service_worker_api._getProperty(core.double, this[_delegate], "timeStamp");
    }
    get type() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "type");
    }
    get bubbles() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "bubbles");
    }
    get cancelable() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "cancelable");
    }
    get currentTarget() {
      return src__service_worker_api._getProperty(html.EventTarget, this[_delegate], "currentTarget");
    }
    get defaultPrevented() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "defaultPrevented");
    }
    get eventPhase() {
      return src__service_worker_api._getProperty(core.int, this[_delegate], "eventPhase");
    }
    get isTrusted() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "isTrusted");
    }
    get matchingTarget() {
      return src__service_worker_api._getProperty(html.Element, this[_delegate], "matchingTarget");
    }
    get path() {
      return src__service_worker_api._getProperty(ListOfEventTarget(), this[_delegate], "path");
    }
    preventDefault() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "preventDefault", []);
    }
    stopImmediatePropagation() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "stopImmediatePropagation", []);
    }
    stopPropagation() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "stopPropagation", []);
    }
    get composed() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "composed");
    }
    composedPath() {
      return ListOfEventTarget()._check(core.List.as(src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "composedPath", []))[$cast](html.EventTarget));
    }
  };
  (src__service_worker_api.ExtendableEvent.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ExtendableEvent.prototype;
  dart.addTypeTests(src__service_worker_api.ExtendableEvent);
  src__service_worker_api.ExtendableEvent[dart.implements] = () => [html.Event];
  dart.setMethodSignature(src__service_worker_api.ExtendableEvent, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ExtendableEvent.__proto__),
    waitUntil: dart.fnType(dart.void, [async.Future]),
    preventDefault: dart.fnType(dart.void, []),
    [$preventDefault]: dart.fnType(dart.void, []),
    stopImmediatePropagation: dart.fnType(dart.void, []),
    [$stopImmediatePropagation]: dart.fnType(dart.void, []),
    stopPropagation: dart.fnType(dart.void, []),
    [$stopPropagation]: dart.fnType(dart.void, []),
    composedPath: dart.fnType(core.List$(html.EventTarget), []),
    [$composedPath]: dart.fnType(core.List$(html.EventTarget), [])
  }));
  dart.setGetterSignature(src__service_worker_api.ExtendableEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ExtendableEvent.__proto__),
    target: html.EventTarget,
    [$target]: html.EventTarget,
    timeStamp: core.double,
    [$timeStamp]: core.double,
    type: core.String,
    [$type]: core.String,
    bubbles: core.bool,
    [$bubbles]: core.bool,
    cancelable: core.bool,
    [$cancelable]: core.bool,
    currentTarget: html.EventTarget,
    [$currentTarget]: html.EventTarget,
    defaultPrevented: core.bool,
    [$defaultPrevented]: core.bool,
    eventPhase: core.int,
    [$eventPhase]: core.int,
    isTrusted: core.bool,
    [$isTrusted]: core.bool,
    matchingTarget: html.Element,
    [$matchingTarget]: html.Element,
    path: core.List$(html.EventTarget),
    [$path]: core.List$(html.EventTarget),
    composed: core.bool,
    [$composed]: core.bool
  }));
  dart.setLibraryUri(src__service_worker_api.ExtendableEvent, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ExtendableEvent, () => ({
    __proto__: dart.getFields(src__service_worker_api.ExtendableEvent.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__service_worker_api.ExtendableEvent, ['preventDefault', 'stopImmediatePropagation', 'stopPropagation', 'composedPath']);
  dart.defineExtensionAccessors(src__service_worker_api.ExtendableEvent, [
    'target',
    'timeStamp',
    'type',
    'bubbles',
    'cancelable',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'matchingTarget',
    'path',
    'composed'
  ]);
  const _request = dart.privateName(src__service_worker_api, "_request");
  const _client = dart.privateName(src__service_worker_api, "_client");
  src__service_worker_api.FetchEvent = class FetchEvent extends core.Object {
    get isReload() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "isReload");
    }
    get request() {
      let t = this[_request];
      return t == null ? this[_request] = new src__service_worker_api.Request.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "request")) : t;
    }
    get client() {
      let t = this[_client];
      return t == null ? this[_client] = new src__service_worker_api.ServiceWorkerClient.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "client")) : t;
    }
    get clientId() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "clientId");
    }
    respondWith(response) {
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "respondWith", [src__js_adapter.futureToPromise(src__service_worker_api.Response, dart.dynamic, response, dart.fn(r => r[_delegate], ResponseTodynamic()))]);
    }
    get target() {
      return src__service_worker_api._getProperty(html.EventTarget, this[_delegate], "target");
    }
    get timeStamp() {
      return src__service_worker_api._getProperty(core.double, this[_delegate], "timeStamp");
    }
    get type() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "type");
    }
    get bubbles() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "bubbles");
    }
    get cancelable() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "cancelable");
    }
    get currentTarget() {
      return src__service_worker_api._getProperty(html.EventTarget, this[_delegate], "currentTarget");
    }
    get defaultPrevented() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "defaultPrevented");
    }
    get eventPhase() {
      return src__service_worker_api._getProperty(core.int, this[_delegate], "eventPhase");
    }
    get isTrusted() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "isTrusted");
    }
    get matchingTarget() {
      return src__service_worker_api._getProperty(html.Element, this[_delegate], "matchingTarget");
    }
    get path() {
      return src__service_worker_api._getProperty(ListOfEventTarget(), this[_delegate], "path");
    }
    preventDefault() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "preventDefault", []);
    }
    stopImmediatePropagation() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "stopImmediatePropagation", []);
    }
    stopPropagation() {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "stopPropagation", []);
    }
    get composed() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "composed");
    }
    composedPath() {
      return ListOfEventTarget()._check(core.List.as(src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "composedPath", []))[$cast](html.EventTarget));
    }
  };
  (src__service_worker_api.FetchEvent.__ = function(delegate) {
    this[_request] = null;
    this[_client] = null;
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.FetchEvent.prototype;
  dart.addTypeTests(src__service_worker_api.FetchEvent);
  src__service_worker_api.FetchEvent[dart.implements] = () => [html.Event];
  dart.setMethodSignature(src__service_worker_api.FetchEvent, () => ({
    __proto__: dart.getMethods(src__service_worker_api.FetchEvent.__proto__),
    respondWith: dart.fnType(dart.void, [async.Future$(src__service_worker_api.Response)]),
    preventDefault: dart.fnType(dart.void, []),
    [$preventDefault]: dart.fnType(dart.void, []),
    stopImmediatePropagation: dart.fnType(dart.void, []),
    [$stopImmediatePropagation]: dart.fnType(dart.void, []),
    stopPropagation: dart.fnType(dart.void, []),
    [$stopPropagation]: dart.fnType(dart.void, []),
    composedPath: dart.fnType(core.List$(html.EventTarget), []),
    [$composedPath]: dart.fnType(core.List$(html.EventTarget), [])
  }));
  dart.setGetterSignature(src__service_worker_api.FetchEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.FetchEvent.__proto__),
    isReload: core.bool,
    request: src__service_worker_api.Request,
    client: src__service_worker_api.ServiceWorkerClient,
    clientId: core.String,
    target: html.EventTarget,
    [$target]: html.EventTarget,
    timeStamp: core.double,
    [$timeStamp]: core.double,
    type: core.String,
    [$type]: core.String,
    bubbles: core.bool,
    [$bubbles]: core.bool,
    cancelable: core.bool,
    [$cancelable]: core.bool,
    currentTarget: html.EventTarget,
    [$currentTarget]: html.EventTarget,
    defaultPrevented: core.bool,
    [$defaultPrevented]: core.bool,
    eventPhase: core.int,
    [$eventPhase]: core.int,
    isTrusted: core.bool,
    [$isTrusted]: core.bool,
    matchingTarget: html.Element,
    [$matchingTarget]: html.Element,
    path: core.List$(html.EventTarget),
    [$path]: core.List$(html.EventTarget),
    composed: core.bool,
    [$composed]: core.bool
  }));
  dart.setLibraryUri(src__service_worker_api.FetchEvent, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.FetchEvent, () => ({
    __proto__: dart.getFields(src__service_worker_api.FetchEvent.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic),
    [_request]: dart.fieldType(src__service_worker_api.Request),
    [_client]: dart.fieldType(src__service_worker_api.ServiceWorkerClient)
  }));
  dart.defineExtensionMethods(src__service_worker_api.FetchEvent, ['preventDefault', 'stopImmediatePropagation', 'stopPropagation', 'composedPath']);
  dart.defineExtensionAccessors(src__service_worker_api.FetchEvent, [
    'target',
    'timeStamp',
    'type',
    'bubbles',
    'cancelable',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'matchingTarget',
    'path',
    'composed'
  ]);
  const _activeWorker = dart.privateName(src__service_worker_api, "_activeWorker");
  src__service_worker_api.InstallEvent = class InstallEvent extends src__service_worker_api.ExtendableEvent {
    get activeWorker() {
      let t = this[_activeWorker];
      return t == null ? this[_activeWorker] = src__service_worker_api.ServiceWorker._fromDelegate(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "activeWorker")) : t;
    }
  };
  (src__service_worker_api.InstallEvent.__ = function(delegate) {
    this[_activeWorker] = null;
    src__service_worker_api.InstallEvent.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.InstallEvent.prototype;
  dart.addTypeTests(src__service_worker_api.InstallEvent);
  dart.setGetterSignature(src__service_worker_api.InstallEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.InstallEvent.__proto__),
    activeWorker: src__service_worker_api.ServiceWorker
  }));
  dart.setLibraryUri(src__service_worker_api.InstallEvent, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.InstallEvent, () => ({
    __proto__: dart.getFields(src__service_worker_api.InstallEvent.__proto__),
    [_activeWorker]: dart.fieldType(src__service_worker_api.ServiceWorker)
  }));
  const _onStateChange = dart.privateName(src__service_worker_api, "_onStateChange");
  src__service_worker_api.ServiceWorker = class ServiceWorker extends core.Object {
    static _fromDelegate(delegate) {
      if (delegate == null) return null;
      return new src__service_worker_api.ServiceWorker.__(delegate);
    }
    get scriptURL() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "scriptURL");
    }
    get state() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "state");
    }
    get id() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "id");
    }
    get onStateChange() {
      let t = this[_onStateChange];
      return t == null ? this[_onStateChange] = src__js_adapter.callbackToStream(dart.dynamic, html.Event, this[_delegate], "onstatechange", dart.fn(j => html.Event.as(j), dynamicToEvent())) : t;
    }
    addEventListener(type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "addEventListener", [type, js.allowInterop(EventTodynamic(), listener), useCapture]);
    }
    dispatchEvent(event) {
      return src__service_worker_api._callMethod(core.bool, this[_delegate], "dispatchEvent", [event]);
    }
    get on() {
      return src__service_worker_api._getProperty(html.Events, this[_delegate], "on");
    }
    get onError() {
      let t = this[_onError];
      return t == null ? this[_onError] = src__js_adapter.callbackToStream(dart.dynamic, html.ErrorEvent, this[_delegate], "onerror", dart.fn(j => html.ErrorEvent.as(j), dynamicToErrorEvent())) : t;
    }
    get onMessage() {
      let t = this[_onMessage];
      return t == null ? this[_onMessage] = src__js_adapter.callbackToStream(dart.dynamic, html.MessageEvent, this[_delegate], "onmessage", dart.fn(j => html.MessageEvent.as(j), dynamicToMessageEvent())) : t;
    }
    postMessage(message, transfer) {
      if (transfer === void 0) transfer = null;
      let args = [message];
      if (transfer != null) args[$add](transfer);
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "postMessage", args);
    }
    removeEventListener(type, listener, useCapture) {
      if (useCapture === void 0) useCapture = null;
      return dart.throw(new core.UnimplementedError.new());
    }
    terminate() {
      src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "terminate", []);
    }
  };
  (src__service_worker_api.ServiceWorker.__ = function(delegate) {
    this[_onStateChange] = null;
    this[_onError] = null;
    this[_onMessage] = null;
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.ServiceWorker.prototype;
  dart.addTypeTests(src__service_worker_api.ServiceWorker);
  src__service_worker_api.ServiceWorker[dart.implements] = () => [html.Worker];
  dart.setMethodSignature(src__service_worker_api.ServiceWorker, () => ({
    __proto__: dart.getMethods(src__service_worker_api.ServiceWorker.__proto__),
    addEventListener: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    [$addEventListener]: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    dispatchEvent: dart.fnType(core.bool, [html.Event]),
    [$dispatchEvent]: dart.fnType(core.bool, [html.Event]),
    postMessage: dart.fnType(dart.void, [dart.dynamic], [core.List]),
    [$postMessage]: dart.fnType(dart.void, [dart.dynamic], [core.List]),
    removeEventListener: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    [$removeEventListener]: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [html.Event])], [core.bool]),
    terminate: dart.fnType(dart.void, []),
    [$terminate]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__service_worker_api.ServiceWorker, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ServiceWorker.__proto__),
    scriptURL: core.String,
    state: core.String,
    id: core.String,
    onStateChange: async.Stream$(html.Event),
    on: html.Events,
    [$on]: html.Events,
    onError: async.Stream$(html.ErrorEvent),
    [$onError]: async.Stream$(html.ErrorEvent),
    onMessage: async.Stream$(html.MessageEvent),
    [$onMessage]: async.Stream$(html.MessageEvent)
  }));
  dart.setLibraryUri(src__service_worker_api.ServiceWorker, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.ServiceWorker, () => ({
    __proto__: dart.getFields(src__service_worker_api.ServiceWorker.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic),
    [_onStateChange]: dart.fieldType(StreamOfEvent()),
    [_onError]: dart.fieldType(StreamOfErrorEvent()),
    [_onMessage]: dart.fieldType(StreamOfMessageEvent())
  }));
  dart.defineExtensionMethods(src__service_worker_api.ServiceWorker, [
    'addEventListener',
    'dispatchEvent',
    'postMessage',
    'removeEventListener',
    'terminate'
  ]);
  dart.defineExtensionAccessors(src__service_worker_api.ServiceWorker, ['on', 'onError', 'onMessage']);
  src__service_worker_api.ExtendableMessageEvent = class ExtendableMessageEvent extends src__service_worker_api.ExtendableEvent {
    get data() {
      return src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "data");
    }
    get origin() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "origin");
    }
    get lastEventId() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "lastEventId");
    }
    get source() {
      return new src__service_worker_api.ServiceWorkerClient.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "source"));
    }
    get ports() {
      return src__service_worker_api._getProperty(ListOfMessagePort(), this[_delegate], "ports");
    }
  };
  (src__service_worker_api.ExtendableMessageEvent.__ = function(delegate) {
    src__service_worker_api.ExtendableMessageEvent.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.ExtendableMessageEvent.prototype;
  dart.addTypeTests(src__service_worker_api.ExtendableMessageEvent);
  dart.setGetterSignature(src__service_worker_api.ExtendableMessageEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.ExtendableMessageEvent.__proto__),
    data: dart.dynamic,
    origin: core.String,
    lastEventId: core.String,
    source: src__service_worker_api.ServiceWorkerClient,
    ports: core.List$(html.MessagePort)
  }));
  dart.setLibraryUri(src__service_worker_api.ExtendableMessageEvent, "package:service_worker/src/service_worker_api.dart");
  src__service_worker_api.NotificationEvent = class NotificationEvent extends src__service_worker_api.ExtendableEvent {
    get notification() {
      return src__service_worker_api._getProperty(dart.anonymousJSType("Notification"), this[_delegate], "notification");
    }
    get action() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "action");
    }
  };
  (src__service_worker_api.NotificationEvent.__ = function(delegate) {
    src__service_worker_api.NotificationEvent.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.NotificationEvent.prototype;
  dart.addTypeTests(src__service_worker_api.NotificationEvent);
  dart.setGetterSignature(src__service_worker_api.NotificationEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.NotificationEvent.__proto__),
    notification: dart.anonymousJSType("Notification"),
    action: core.String
  }));
  dart.setLibraryUri(src__service_worker_api.NotificationEvent, "package:service_worker/src/service_worker_api.dart");
  src__service_worker_api.PushEvent = class PushEvent extends src__service_worker_api.ExtendableEvent {
    get data() {
      return new src__service_worker_api.PushMessageData.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "data"));
    }
  };
  (src__service_worker_api.PushEvent.__ = function(delegate) {
    src__service_worker_api.PushEvent.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.PushEvent.prototype;
  dart.addTypeTests(src__service_worker_api.PushEvent);
  dart.setGetterSignature(src__service_worker_api.PushEvent, () => ({
    __proto__: dart.getGetters(src__service_worker_api.PushEvent.__proto__),
    data: src__service_worker_api.PushMessageData
  }));
  dart.setLibraryUri(src__service_worker_api.PushEvent, "package:service_worker/src/service_worker_api.dart");
  src__service_worker_api.PushMessageData = class PushMessageData extends core.Object {
    arrayBuffer() {
      return src__service_worker_api._callMethod(typed_data.ByteBuffer, this[_delegate], "arrayBuffer", []);
    }
    blob() {
      return src__service_worker_api._callMethod(html.Blob, this[_delegate], "blob", []);
    }
    json(T) {
      return src__service_worker_api._callMethod(T, this[_delegate], "json", []);
    }
    text() {
      return src__service_worker_api._callMethod(core.String, this[_delegate], "text", []);
    }
  };
  (src__service_worker_api.PushMessageData.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.PushMessageData.prototype;
  dart.addTypeTests(src__service_worker_api.PushMessageData);
  dart.setMethodSignature(src__service_worker_api.PushMessageData, () => ({
    __proto__: dart.getMethods(src__service_worker_api.PushMessageData.__proto__),
    arrayBuffer: dart.fnType(typed_data.ByteBuffer, []),
    blob: dart.fnType(html.Blob, []),
    json: dart.gFnType(T => [T, []]),
    text: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__service_worker_api.PushMessageData, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.PushMessageData, () => ({
    __proto__: dart.getFields(src__service_worker_api.PushMessageData.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.Body = class Body extends core.Object {
    get bodyUsed() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "bodyUsed");
    }
    arrayBuffer() {
      return src__js_adapter.promiseToFuture(dart.dynamic, typed_data.ByteBuffer, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "arrayBuffer", []));
    }
    blob() {
      return src__js_adapter.promiseToFuture(dart.dynamic, html.Blob, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "blob", []));
    }
    formData() {
      return src__js_adapter.promiseToFuture(dart.dynamic, html.FormData, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "formData", []));
    }
    json(T) {
      return src__js_adapter.promiseToFuture(dart.dynamic, T, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "json", []));
    }
    text() {
      return src__js_adapter.promiseToFuture(dart.dynamic, core.String, src__service_worker_api._callMethod(dart.lazyJSType(() => dart.global.Promise, "Promise"), this[_delegate], "text", []));
    }
  };
  (src__service_worker_api.Body.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.Body.prototype;
  dart.addTypeTests(src__service_worker_api.Body);
  dart.setMethodSignature(src__service_worker_api.Body, () => ({
    __proto__: dart.getMethods(src__service_worker_api.Body.__proto__),
    arrayBuffer: dart.fnType(async.Future$(typed_data.ByteBuffer), []),
    blob: dart.fnType(async.Future$(html.Blob), []),
    formData: dart.fnType(async.Future$(html.FormData), []),
    json: dart.gFnType(T => [async.Future$(T), []]),
    text: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setGetterSignature(src__service_worker_api.Body, () => ({
    __proto__: dart.getGetters(src__service_worker_api.Body.__proto__),
    bodyUsed: core.bool
  }));
  dart.setLibraryUri(src__service_worker_api.Body, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.Body, () => ({
    __proto__: dart.getFields(src__service_worker_api.Body.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  const _headers = dart.privateName(src__service_worker_api, "_headers");
  src__service_worker_api.Request = class Request extends src__service_worker_api.Body {
    get method() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "method");
    }
    get url() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "url");
    }
    get headers() {
      let t = this[_headers];
      return t == null ? this[_headers] = new src__service_worker_api.Headers.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "headers")) : t;
    }
    get type() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "type");
    }
    get destination() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "destination");
    }
    get referrer() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "referrer");
    }
    get referrerPolicy() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "referrerPolicy");
    }
    get mode() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "mode");
    }
    get credentials() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "credentials");
    }
    get cache() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "cache");
    }
    get redirect() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "redirect");
    }
    get integrity() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "integrity");
    }
    clone() {
      return new src__service_worker_api.Request.__(src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "clone", []));
    }
    cloneWith(opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(src__service_worker_api.Request, (function* cloneWith() {
        return new src__service_worker_api.Request.__(new dart.global.Request(this.clone()[_delegate], {headers: this.headers.clone({headers: headers})[_delegate]}));
      }).bind(this));
    }
  };
  (src__service_worker_api.Request.__ = function(delegate) {
    this[_headers] = null;
    src__service_worker_api.Request.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.Request.prototype;
  dart.addTypeTests(src__service_worker_api.Request);
  dart.setMethodSignature(src__service_worker_api.Request, () => ({
    __proto__: dart.getMethods(src__service_worker_api.Request.__proto__),
    clone: dart.fnType(src__service_worker_api.Request, []),
    cloneWith: dart.fnType(async.Future$(src__service_worker_api.Request), [], {headers: core.Map$(core.String, core.String)})
  }));
  dart.setGetterSignature(src__service_worker_api.Request, () => ({
    __proto__: dart.getGetters(src__service_worker_api.Request.__proto__),
    method: core.String,
    url: core.String,
    headers: src__service_worker_api.Headers,
    type: core.String,
    destination: core.String,
    referrer: core.String,
    referrerPolicy: core.String,
    mode: core.String,
    credentials: core.String,
    cache: core.String,
    redirect: core.String,
    integrity: core.String
  }));
  dart.setLibraryUri(src__service_worker_api.Request, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.Request, () => ({
    __proto__: dart.getFields(src__service_worker_api.Request.__proto__),
    [_headers]: dart.fieldType(src__service_worker_api.Headers)
  }));
  src__service_worker_api.Response = class Response extends src__service_worker_api.Body {
    static redirect(url, status) {
      if (status === void 0) status = null;
      return new src__service_worker_api.Response.__(dart.global.Response.redirect(url, status));
    }
    static error() {
      return new src__service_worker_api.Response.__(dart.global.Response.error());
    }
    get type() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "type");
    }
    get url() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "url");
    }
    get redirected() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "redirected");
    }
    get status() {
      return src__service_worker_api._getProperty(core.int, this[_delegate], "status");
    }
    get statusText() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "statusText");
    }
    get ok() {
      return src__service_worker_api._getProperty(core.bool, this[_delegate], "ok");
    }
    get headers() {
      let t = this[_headers];
      return t == null ? this[_headers] = new src__service_worker_api.Headers.__(src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "headers")) : t;
    }
    get body() {
      return src__service_worker_api._getProperty(dart.dynamic, this[_delegate], "body");
    }
    clone() {
      return new src__service_worker_api.Response.__(src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "clone", []));
    }
    cloneWith(opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(src__service_worker_api.Response, (function* cloneWith() {
        let buffer = (yield this.clone().arrayBuffer());
        return new src__service_worker_api.Response.__(new dart.global.Response(buffer, {status: this.status, statusText: this.statusText, headers: this.headers.clone({headers: headers})[_delegate]}));
      }).bind(this));
    }
  };
  (src__service_worker_api.Response.__ = function(delegate) {
    this[_headers] = null;
    src__service_worker_api.Response.__proto__.__.call(this, delegate);
  }).prototype = src__service_worker_api.Response.prototype;
  dart.addTypeTests(src__service_worker_api.Response);
  dart.setMethodSignature(src__service_worker_api.Response, () => ({
    __proto__: dart.getMethods(src__service_worker_api.Response.__proto__),
    clone: dart.fnType(src__service_worker_api.Response, []),
    cloneWith: dart.fnType(async.Future$(src__service_worker_api.Response), [], {headers: core.Map$(core.String, core.String)})
  }));
  dart.setGetterSignature(src__service_worker_api.Response, () => ({
    __proto__: dart.getGetters(src__service_worker_api.Response.__proto__),
    type: core.String,
    url: core.String,
    redirected: core.bool,
    status: core.int,
    statusText: core.String,
    ok: core.bool,
    headers: src__service_worker_api.Headers,
    body: dart.dynamic
  }));
  dart.setLibraryUri(src__service_worker_api.Response, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.Response, () => ({
    __proto__: dart.getFields(src__service_worker_api.Response.__proto__),
    [_headers]: dart.fieldType(src__service_worker_api.Headers)
  }));
  src__service_worker_api.Headers = class Headers extends core.Object {
    append(name, value) {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "append", [name, value]);
    }
    delete(name) {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "delete", [name]);
    }
    _get(name) {
      return src__service_worker_api._callMethod(core.String, this[_delegate], "get", [name]);
    }
    _set(name, value) {
      return src__service_worker_api._callMethod(dart.void, this[_delegate], "set", [name, value]);
    }
    getAll(name) {
      return ListOfString()._check(core.List.as(src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "getAll", [name]))[$cast](core.String));
    }
    has(name) {
      return src__service_worker_api._callMethod(core.bool, this[_delegate], "has", [name]);
    }
    keys() {
      return src__js_adapter.iteratorToIterable(core.String, dart.fn(() => src__service_worker_api._callMethod(dart.dynamic, this[_delegate], "keys", []), VoidTodynamic()));
    }
    clone(opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let h = new src__service_worker_api.Headers.__(new dart.global.Headers());
      for (let key of this.keys()) {
        h._set(key, this._get(key));
      }
      headers == null ? null : headers[$forEach](dart.bind(h, 'append'));
      return h;
    }
  };
  (src__service_worker_api.Headers.__ = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.Headers.prototype;
  dart.addTypeTests(src__service_worker_api.Headers);
  dart.setMethodSignature(src__service_worker_api.Headers, () => ({
    __proto__: dart.getMethods(src__service_worker_api.Headers.__proto__),
    append: dart.fnType(dart.void, [core.String, core.String]),
    delete: dart.fnType(dart.void, [core.String]),
    _get: dart.fnType(core.String, [core.String]),
    _set: dart.fnType(dart.void, [core.String, core.String]),
    getAll: dart.fnType(core.List$(core.String), [core.String]),
    has: dart.fnType(core.bool, [core.String]),
    keys: dart.fnType(core.Iterable$(core.String), []),
    clone: dart.fnType(src__service_worker_api.Headers, [], {headers: core.Map$(core.String, core.String)})
  }));
  dart.setLibraryUri(src__service_worker_api.Headers, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.Headers, () => ({
    __proto__: dart.getFields(src__service_worker_api.Headers.__proto__),
    [_delegate]: dart.finalFieldType(dart.dynamic)
  }));
  src__service_worker_api.WorkerLocation = class WorkerLocation extends core.Object {
    get href() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "href");
    }
    get protocol() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "protocol");
    }
    get host() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "host");
    }
    get hostname() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "hostname");
    }
    get origin() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "origin");
    }
    get port() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "port");
    }
    get pathname() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "pathname");
    }
    get search() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "search");
    }
    get hash() {
      return src__service_worker_api._getProperty(core.String, this[_delegate], "hash");
    }
    toString() {
      return this.href;
    }
  };
  (src__service_worker_api.WorkerLocation.new = function(delegate) {
    this[_delegate] = delegate;
  }).prototype = src__service_worker_api.WorkerLocation.prototype;
  dart.addTypeTests(src__service_worker_api.WorkerLocation);
  dart.setGetterSignature(src__service_worker_api.WorkerLocation, () => ({
    __proto__: dart.getGetters(src__service_worker_api.WorkerLocation.__proto__),
    href: core.String,
    protocol: core.String,
    host: core.String,
    hostname: core.String,
    origin: core.String,
    port: core.String,
    pathname: core.String,
    search: core.String,
    hash: core.String
  }));
  dart.setLibraryUri(src__service_worker_api.WorkerLocation, "package:service_worker/src/service_worker_api.dart");
  dart.setFieldSignature(src__service_worker_api.WorkerLocation, () => ({
    __proto__: dart.getFields(src__service_worker_api.WorkerLocation.__proto__),
    [_delegate]: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__service_worker_api.WorkerLocation, ['toString']);
  src__service_worker_api._callMethod = function(T, object, method, args) {
    return T.as(js_util.callMethod(object, method, args));
  };
  src__service_worker_api._getProperty = function(T, object, name) {
    return T.as(js_util.getProperty(object, name));
  };
  src__service_worker_api._wrapRequest = function(request) {
    if (request == null) return null;
    if (typeof request == 'string') return request;
    return src__service_worker_api.Request.as(request)[_delegate];
  };
  dart.trackLibraries("packages/service_worker/src/js_adapter.ddc", {
    "package:service_worker/src/js_facade/promise.dart": src__js_facade__promise,
    "package:service_worker/src/js_adapter.dart": src__js_adapter,
    "package:service_worker/src/js_facade/isomorphic_fetch.dart": src__js_facade__isomorphic_fetch,
    "package:service_worker/src/js_facade/service_worker_api.dart": src__js_facade__service_worker_api,
    "package:service_worker/src/service_worker_api.dart": src__service_worker_api
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_adapter.dart","service_worker_api.dart"],"names":[],"mappings":"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","file":"js_adapter.ddc.js"}');
  // Exports:
  return {
    src__js_facade__promise: src__js_facade__promise,
    src__js_adapter: src__js_adapter,
    src__js_facade__isomorphic_fetch: src__js_facade__isomorphic_fetch,
    src__js_facade__service_worker_api: src__js_facade__service_worker_api,
    src__service_worker_api: src__service_worker_api
  };
});

//# sourceMappingURL=js_adapter.ddc.js.map
