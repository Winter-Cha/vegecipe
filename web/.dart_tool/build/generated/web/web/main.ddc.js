define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/core/core', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/redux/redux', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/web/app_component.template', 'packages/http/src/base_client', 'packages/key_value_store_web/key_value_store_web', 'packages/firebase/firebase', 'packages/pwa/client', 'packages/web/app_component', 'packages/angular/src/bootstrap/modules', 'packages/intl/intl_browser', 'packages/intl/date_symbol_data_local', 'packages/intl/intl'], function(dart_sdk, change_detection, core, router_outlet_directive, redux, angular, angular_router, app_component, base_client, key_value_store_web, firebase, client, app_component$, modules, intl_browser, date_symbol_data_local, intl) {
  'use strict';
  const core$ = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__i18n__messages = core.src__i18n__messages;
  const src__redux__store = core.src__redux__store;
  const src__i18n__inkino_messages_all = core.src__i18n__inkino_messages_all;
  const src__networking__finnkino_api = core.src__networking__finnkino_api;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__store = redux.src__store;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$46template = app_component.app_component$46template;
  const src__client = base_client.src__client;
  const key_value_store_web$ = key_value_store_web.key_value_store_web;
  const src__top_level = firebase.src__top_level;
  const client$ = client.client;
  const app_component$0 = app_component$.app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const intl_browser$ = intl_browser.intl_browser;
  const date_symbol_data_local$ = date_symbol_data_local.date_symbol_data_local;
  const intl$ = intl.intl;
  const main$46template = Object.create(dart.library);
  const main = Object.create(dart.library);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core$.String)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.rootInjector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$rootInjector.__(parent);
  };
  const _field0 = dart.privateName(main$46template, "_field0");
  const _field1 = dart.privateName(main$46template, "_field1");
  const _field2 = dart.privateName(main$46template, "_field2");
  const _field3 = dart.privateName(main$46template, "_field3");
  const _field4 = dart.privateName(main$46template, "_field4");
  const _field5 = dart.privateName(main$46template, "_field5");
  const _getMessages$0 = dart.privateName(main$46template, "_getMessages$0");
  const _getdynamic$1 = dart.privateName(main$46template, "_getdynamic$1");
  const _getRouterImpl$2 = dart.privateName(main$46template, "_getRouterImpl$2");
  const _getLocation$3 = dart.privateName(main$46template, "_getLocation$3");
  const _getBrowserPlatformLocation$4 = dart.privateName(main$46template, "_getBrowserPlatformLocation$4");
  let const$;
  const _getHashLocationStrategy$5 = dart.privateName(main$46template, "_getHashLocationStrategy$5");
  const _getInjector$6 = dart.privateName(main$46template, "_getInjector$6");
  main$46template._Injector$rootInjector = class _Injector$rootInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getMessages$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new src__i18n__messages.Messages.new() : t;
    }
    [_getdynamic$1]() {
      let t = this[_field1];
      return t == null ? this[_field1] = main.storeFactory() : t;
    }
    [_getRouterImpl$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__router__router_impl.RouterImpl.new(src__location__location.Location._check(this.get(dart.wrapType(src__location__location.Location))), src__router_hook.RouterHook._check(this.provideUntyped(dart.wrapType(src__router_hook.RouterHook), null))) : t;
    }
    [_getLocation$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__location__location.Location.new(src__location__location_strategy.LocationStrategy._check(this.get(dart.wrapType(src__location__location_strategy.LocationStrategy)))) : t;
    }
    [_getBrowserPlatformLocation$4]() {
      let t = this[_field4];
      return t == null ? this[_field4] = new src__location__browser_platform_location.BrowserPlatformLocation.new() : t;
    }
    [_getHashLocationStrategy$5]() {
      let t = this[_field5];
      return t == null ? this[_field5] = new src__location__hash_location_strategy.HashLocationStrategy.new(src__location__platform_location.PlatformLocation._check(this.get(dart.wrapType(src__location__platform_location.PlatformLocation))), core$.String._check(this.provideUntyped(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new("appBaseHref"))), null))) : t;
    }
    [_getInjector$6]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__i18n__messages.Messages)) {
        return this[_getMessages$0]();
      }
      if (token === dart.wrapType(src__store.Store)) {
        return this[_getdynamic$1]();
      }
      if (token === dart.wrapType(src__router__router.Router)) {
        return this[_getRouterImpl$2]();
      }
      if (token === dart.wrapType(src__location__location.Location)) {
        return this[_getLocation$3]();
      }
      if (token === dart.wrapType(src__location__platform_location.PlatformLocation)) {
        return this[_getBrowserPlatformLocation$4]();
      }
      if (token === dart.wrapType(src__location__location_strategy.LocationStrategy)) {
        return this[_getHashLocationStrategy$5]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$6]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$rootInjector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field4] = null;
    this[_field5] = null;
    main$46template._Injector$rootInjector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$rootInjector.prototype;
  dart.addTypeTests(main$46template._Injector$rootInjector);
  dart.setMethodSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$rootInjector.__proto__),
    [_getMessages$0]: dart.fnType(src__i18n__messages.Messages, []),
    [_getdynamic$1]: dart.fnType(dart.dynamic, []),
    [_getRouterImpl$2]: dart.fnType(src__router__router_impl.RouterImpl, []),
    [_getLocation$3]: dart.fnType(src__location__location.Location, []),
    [_getBrowserPlatformLocation$4]: dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, []),
    [_getHashLocationStrategy$5]: dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, []),
    [_getInjector$6]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core$.Object, [core$.Object], [core$.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getFields(main$46template._Injector$rootInjector.__proto__),
    [_field0]: dart.fieldType(src__i18n__messages.Messages),
    [_field1]: dart.fieldType(dart.dynamic),
    [_field2]: dart.fieldType(src__router__router_impl.RouterImpl),
    [_field3]: dart.fieldType(src__location__location.Location),
    [_field4]: dart.fieldType(src__location__browser_platform_location.BrowserPlatformLocation),
    [_field5]: dart.fieldType(src__location__hash_location_strategy.HashLocationStrategy)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    app_component$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main._store*/get _store() {
      return src__redux__store.createStore(src__client.Client.new(), new key_value_store_web$.WebKeyValueStore.new(html.window.localStorage), src__top_level.firestore());
    }
  });
  main.storeFactory = function() {
    return main._store;
  };
  dart.defineLazy(main, {
    /*main.rootInjector*/get rootInjector() {
      return dart.fn(main$46template.rootInjector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    return async.async(dart.dynamic, function* main$() {
      client$.Client.new();
      yield main._initializeFirebase();
      yield main._initializeTranslations();
      src__bootstrap__run.runApp(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory, {createInjector: main.rootInjector});
    });
  };
  main._initializeFirebase = function() {
    return async.async(dart.dynamic, function* _initializeFirebase() {
      src__top_level.initializeApp({apiKey: "AIzaSyCvMl1leOFg95dzmjb_LJPZQdKklbc71LU", authDomain: "vegecipeapp.firebaseapp.com", databaseURL: "https://vegecipeapp.firebaseio.com", projectId: "vegecipeapp", storageBucket: "vegecipeapp.appspot.com", messagingSenderId: "432274912386"});
    });
  };
  main._initializeTranslations = function() {
    return async.async(dart.dynamic, function* _initializeTranslations() {
      let locale = (yield intl_browser$.findSystemLocale());
      let initializationSuccessful = (yield src__i18n__inkino_messages_all.initializeMessages(locale));
      yield date_symbol_data_local$.initializeDateFormatting(locale);
      if (!dart.test(initializationSuccessful)) {
        locale = "en";
        yield src__i18n__inkino_messages_all.initializeMessages(locale);
        yield date_symbol_data_local$.initializeDateFormatting(locale);
      }
      src__networking__finnkino_api.FinnkinoApi.useFinnish = locale === "fi";
      intl$.Intl.defaultLocale = locale;
    });
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAyBoC,MAAmB;2BAAN;eAAY,yCAAwB,CAAC,MAAM;EAAC;;;;;;;;;;;;;;;;;cAiB1D,aAAO;6CAAK,gCAAY;IAAE;;cAChC,aAAO;yCAAK,AAAI,iBAAY;IAAE;;cACpB,aAAO;6CAAK,uCAAc,yCAAC,QAAQ,CAAK,+CAAQ,uCAAG,mBAAc,CAAK,0CAAU,EAAE;IAAM;;cAC5F,aAAO;6CAAK,oCAAY,0DAAC,QAAQ,CAAM,gEAAgB;IAAE;;cAC3B,aAAO;6CAAK,oEAA2B;IAAE;;cAC/C,aAAO;6CAAK,8DAAwB,0DAAC,QAAQ,CAAM,gEAAgB,wBAAG,mBAAc,CAAC,mCAAM,2BAAwB,CAAC,kBAAgB;IAAM;;YAClK;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAa,2CAAe;AAC9E,UAAI,AAAU,KAAK,KAAM,2CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,+BAAK,EAAG;AAChC,cAAO,oBAAa;;AAEtB,UAAI,AAAU,KAAK,KAAO,yCAAM,EAAG;AACjC,cAAO,uBAAgB;;AAEzB,UAAI,AAAU,KAAK,KAAM,+CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,oCAA6B;;AAEtC,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,iCAA0B;;AAEnC,UAAI,AAAU,KAAK,KAAM,mDAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;wDA7C0B,MAAmB;2BAAN;IAE1B,aAAO;IAEZ,aAAO;IAEA,aAAO;IAET,aAAO;IAEQ,aAAO;IAEV,aAAO;AAZkB,gIAAM,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;MAgD7D,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;EACrB;;MCrEsB,WAAM;YAAG,8BAAW,CACxC,sBAAM,QACN,yCAAgB,CAAC,WAAM,aAAa,GACpC,AAAG,wBAAS;;;;UAEoB,YAAM;;;MAOlB,iBAAY;YAAQ,+DAAqB;;;;AAEnD;AACV,wBAAU;AACV,YAAM,wBAAmB;AACzB,YAAM,4BAAuB;AAE7B,gCAAM,+BAAI,8CAAqB,mBAAkB,iBAAY;IAC/D;;;AAG2B;AACzB,MAAG,4BAAa,UACN,uDACI,4CACC,iDACF,8BACI,8CACI;IAEvB;;;AAE+B;AAC7B,UAAI,UAAS,MAAM,8BAAgB;AACnC,UAAM,4BAA2B,MAAM,iDAAkB,CAAC,MAAM;AAChE,YAAM,gDAAwB,CAAC,MAAM;AAErC,qBAAK,wBAAwB,GAAE;AAE7B,cAAM,GAAG;AACT,cAAM,iDAAkB,CAAC,MAAM;AAC/B,cAAM,gDAAwB,CAAC,MAAM;;AAGvC,MAAY,oDAAU,GAAG,MAAM,KAAI;AACnC,MAAK,wBAAa,GAAG,MAAM;IAC7B","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
