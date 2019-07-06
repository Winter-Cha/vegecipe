define(['dart_sdk', 'packages/firebase/firebase', 'packages/firebase/src/app'], function(dart_sdk, firebase, app) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__top_level = firebase.src__top_level;
  const src__auth = app.src__auth;
  const src__auth_ui_js = Object.create(dart.library);
  const src__firebase_auth_ui_component = Object.create(dart.library);
  let UserToNull = () => (UserToNull = dart.constFn(dart.fnType(core.Null, [src__auth.User])))();
  dart.defineLazy(src__auth_ui_js, {
    /*src__auth_ui_js.GOOGLE_YOLO*/get GOOGLE_YOLO() {
      return "googleyolo";
    },
    /*src__auth_ui_js.ACCOUNT_CHOOSER*/get ACCOUNT_CHOOSER() {
      return "accountchooser.com";
    },
    /*src__auth_ui_js.NONE*/get NONE() {
      return "none";
    }
  });
  const _authUI = dart.privateName(src__firebase_auth_ui_component, "_authUI");
  const _auth = dart.privateName(src__firebase_auth_ui_component, "_auth");
  const _init = dart.privateName(src__firebase_auth_ui_component, "_init");
  const _start = dart.privateName(src__firebase_auth_ui_component, "_start");
  src__firebase_auth_ui_component.FirebaseAuthUIComponent = class FirebaseAuthUIComponent extends core.Object {
    get authenticated() {
      return this[authenticated];
    }
    set authenticated(value) {
      this[authenticated] = value;
    }
    get uiConfig() {
      return this[uiConfig];
    }
    set uiConfig(value) {
      this[uiConfig] = value;
    }
    get disableAutoSignIn() {
      return this[disableAutoSignIn];
    }
    set disableAutoSignIn(value) {
      this[disableAutoSignIn] = value;
    }
    [_init](auth) {
      let a = dart.global.firebaseui.auth.AuthUI.getInstance(auth.app.name);
      if (a != null) {
        this[_authUI] = a;
      }
      if (this[_authUI] == null) {
        this[_authUI] = new dart.global.firebaseui.auth.AuthUI(auth.jsObject);
      }
      src__top_level.auth().onAuthStateChanged.listen(dart.fn(user => {
        this.authenticated = false;
        if (user != null) {
          this.authenticated = true;
        } else {
          this[_start]();
        }
      }, UserToNull()));
    }
    [_start]() {
      if (dart.test(this.disableAutoSignIn)) this[_authUI].disableAutoSignIn();
      this[_authUI].start("#firebaseui-auth-container", this.uiConfig);
    }
    displayStyle() {
      return src__top_level.auth().currentUser == null ? "block" : "none";
    }
  };
  (src__firebase_auth_ui_component.FirebaseAuthUIComponent.new = function() {
    this[_authUI] = null;
    this[authenticated] = false;
    this[uiConfig] = null;
    this[disableAutoSignIn] = false;
    this[_auth] = null;
    this[_auth] = src__top_level.auth();
    this[_init](this[_auth]);
  }).prototype = src__firebase_auth_ui_component.FirebaseAuthUIComponent.prototype;
  dart.addTypeTests(src__firebase_auth_ui_component.FirebaseAuthUIComponent);
  const authenticated = Symbol("FirebaseAuthUIComponent.authenticated");
  const uiConfig = Symbol("FirebaseAuthUIComponent.uiConfig");
  const disableAutoSignIn = Symbol("FirebaseAuthUIComponent.disableAutoSignIn");
  dart.setMethodSignature(src__firebase_auth_ui_component.FirebaseAuthUIComponent, () => ({
    __proto__: dart.getMethods(src__firebase_auth_ui_component.FirebaseAuthUIComponent.__proto__),
    [_init]: dart.fnType(dart.void, [src__auth.Auth]),
    [_start]: dart.fnType(dart.void, []),
    displayStyle: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__firebase_auth_ui_component.FirebaseAuthUIComponent, "package:firebase_dart_ui/src/firebase_auth_ui_component.dart");
  dart.setFieldSignature(src__firebase_auth_ui_component.FirebaseAuthUIComponent, () => ({
    __proto__: dart.getFields(src__firebase_auth_ui_component.FirebaseAuthUIComponent.__proto__),
    [_authUI]: dart.fieldType(dart.lazyJSType(() => dart.global.firebaseui.auth.AuthUI, "firebaseui.auth.AuthUI")),
    authenticated: dart.fieldType(core.bool),
    uiConfig: dart.fieldType(dart.anonymousJSType("UIConfig")),
    disableAutoSignIn: dart.fieldType(core.bool),
    [_auth]: dart.fieldType(src__auth.Auth)
  }));
  dart.trackLibraries("packages/firebase_dart_ui/src/auth_ui_js.ddc", {
    "package:firebase_dart_ui/src/auth_ui_js.dart": src__auth_ui_js,
    "package:firebase_dart_ui/src/firebase_auth_ui_component.dart": src__firebase_auth_ui_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_ui_js.dart","firebase_auth_ui_component.dart"],"names":[],"mappings":";;;;;;;;;;;MAgCM,2BAAW;YAAG;;MACd,+BAAe;YAAG;;MAClB,oBAAI;YAAG;;;;;;;;ICtBN;;;;;;IAGI;;;;;;IAGJ;;;;;;YAUM,IAAY;AAGrB,UAAI,IAAI,8CAAW,CAAC,IAAI,IAAI,KAAK;AAEjC,UAAI,CAAC,IAAI,MAAM;AACb,qBAAO,GAAG,CAAC;;AAIb,UAAI,aAAO,IAAI,MAAM;AACnB,qBAAO,GAAG,IAAI,kCAAM,CAAC,IAAI,SAAS;;AAKpC,MAAG,mBAAI,qBAAqB,OAAO,CAAC,QAAC,IAAI;AAEvC,0BAAa,GAAG;AAChB,YAAI,IAAI,IAAI,MAAM;AAChB,4BAAa,GAAG;eAEX;AACL,sBAAM;;;IAGZ;;AAKE,oBAAI,sBAAiB,GAAE,aAAO,kBAAkB;AAChD,mBAAO,MAAM,CAAC,8BAA8B,aAAQ;IACtD;;AAME,YAAO,AAAG,oBAAI,cAAc,IAAI,OAAO,UAAU;IACnD;;;IAzDO,aAAO;IACT,mBAAa,GAAG;IAGZ,cAAQ;IAGZ,uBAAiB,GAAG;IAQjB,WAAK;AALX,eAAK,GAAG,AAAG,mBAAI;AAEf,eAAK,CAAC,WAAK;EACb","file":"auth_ui_js.ddc.js"}');
  // Exports:
  return {
    src__auth_ui_js: src__auth_ui_js,
    src__firebase_auth_ui_component: src__firebase_auth_ui_component
  };
});

//# sourceMappingURL=auth_ui_js.ddc.js.map
