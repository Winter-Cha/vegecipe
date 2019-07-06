define(['dart_sdk', 'packages/key_value_store/key_value_store'], function(dart_sdk, key_value_store) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const key_value_store$ = key_value_store.key_value_store;
  const key_value_store_web = Object.create(dart.library);
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $cast = dartx.cast;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  const _storage = dart.privateName(key_value_store_web, "_storage");
  const _setValue = dart.privateName(key_value_store_web, "_setValue");
  key_value_store_web.WebKeyValueStore = class WebKeyValueStore extends core.Object {
    getKeys() {
      return SetOfString()._check(this[_storage][$keys]);
    }
    getBool(key) {
      return this[_storage][$_get](key) === "true";
    }
    getInt(key) {
      return core.int.parse(this[_storage][$_get](key));
    }
    getDouble(key) {
      return core.double.parse(this[_storage][$_get](key));
    }
    getString(key) {
      return this[_storage][$_get](key);
    }
    getStringList(key) {
      return ListOfString()._check(core.List.as(convert.json.decode(this[_storage][$_get](key)))[$cast](core.String));
    }
    setBool(key, value) {
      return this[_setValue](key, value);
    }
    setInt(key, value) {
      return this[_setValue](key, value);
    }
    setDouble(key, value) {
      return this[_setValue](key, value);
    }
    setString(key, value) {
      return this[_setValue](key, value);
    }
    setStringList(key, values) {
      return this[_setValue](key, values);
    }
    remove(key) {
      this[_storage][$remove](key);
      return FutureOfbool().value(true);
    }
    clear() {
      this[_storage][$clear]();
      return FutureOfbool().value(true);
    }
    [_setValue](key, value) {
      if (typeof value == 'string') {
        this[_storage][$_set](key, value);
      } else if (typeof value == 'boolean' || typeof value == 'number' || core.int.is(value)) {
        this[_storage][$_set](key, dart.toString(value));
      } else if (core.List.is(value)) {
        this[_storage][$_set](key, convert.json.encode(value));
      }
      return FutureOfbool().value(true);
    }
  };
  (key_value_store_web.WebKeyValueStore.new = function(storage) {
    this[_storage] = storage;
  }).prototype = key_value_store_web.WebKeyValueStore.prototype;
  dart.addTypeTests(key_value_store_web.WebKeyValueStore);
  key_value_store_web.WebKeyValueStore[dart.implements] = () => [key_value_store$.KeyValueStore];
  dart.setMethodSignature(key_value_store_web.WebKeyValueStore, () => ({
    __proto__: dart.getMethods(key_value_store_web.WebKeyValueStore.__proto__),
    getKeys: dart.fnType(core.Set$(core.String), []),
    getBool: dart.fnType(core.bool, [core.String]),
    getInt: dart.fnType(core.int, [core.String]),
    getDouble: dart.fnType(core.double, [core.String]),
    getString: dart.fnType(core.String, [core.String]),
    getStringList: dart.fnType(core.List$(core.String), [core.String]),
    setBool: dart.fnType(async.Future$(core.bool), [core.String, core.bool]),
    setInt: dart.fnType(async.Future$(core.bool), [core.String, core.int]),
    setDouble: dart.fnType(async.Future$(core.bool), [core.String, core.double]),
    setString: dart.fnType(async.Future$(core.bool), [core.String, core.String]),
    setStringList: dart.fnType(async.Future$(core.bool), [core.String, core.List$(core.String)]),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    clear: dart.fnType(async.Future$(core.bool), []),
    [_setValue]: dart.fnType(async.Future$(core.bool), [core.String, dart.dynamic])
  }));
  dart.setLibraryUri(key_value_store_web.WebKeyValueStore, "package:key_value_store_web/key_value_store_web.dart");
  dart.setFieldSignature(key_value_store_web.WebKeyValueStore, () => ({
    __proto__: dart.getFields(key_value_store_web.WebKeyValueStore.__proto__),
    [_storage]: dart.finalFieldType(html.Storage)
  }));
  dart.trackLibraries("packages/key_value_store_web/key_value_store_web.ddc", {
    "package:key_value_store_web/key_value_store_web.dart": key_value_store_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["key_value_store_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;kCAqB2B,cAAQ,OAAK;;YAGzB,GAAU;YAAK,eAAQ,QAAC,GAAG,MAAK;IAAM;WAGxC,GAAU;YAAK,SAAG,MAAM,CAAC,cAAQ,QAAC,GAAG;IAAE;cAGjC,GAAU;YAAK,YAAM,MAAM,CAAC,cAAQ,QAAC,GAAG;IAAE;cAG1C,GAAU;YAAK,eAAQ,QAAC,GAAG;IAAC;kBAGlB,GAAU;mCACjC,aAAC,YAAI,OAAO,CAAC,cAAQ,QAAC,GAAG,UAAgB;IAAU;YAGlC,GAAU,EAAE,KAAU;YAAK,gBAAS,CAAC,GAAG,EAAE,KAAK;IAAC;WAGjD,GAAU,EAAE,KAAS;YAAK,gBAAS,CAAC,GAAG,EAAE,KAAK;IAAC;cAG5C,GAAU,EAAE,KAAY;YAAK,gBAAS,CAAC,GAAG,EAAE,KAAK;IAAC;cAGlD,GAAU,EAAE,KAAY;YAAK,gBAAS,CAAC,GAAG,EAAE,KAAK;IAAC;kBAG9C,GAAU,EAAE,MAAmB;YAAK,gBAAS,CAAC,GAAG,EAAE,MAAM;IAAC;WAGjE,GAAU;AAC5B,oBAAQ,SAAO,CAAC,GAAG;AACnB,YAAO,qBAAY,CAAC;IACtB;;AAIE,oBAAQ,QAAM;AACd,YAAO,qBAAY,CAAC;IACtB;gBAEuB,GAAU,EAAE,KAAa;AAC9C,iBAAI,KAAK,cAAY;AACnB,sBAAQ,QAAC,GAAG,EAAI,KAAK;YAChB,YAAI,KAAK,wBAAY,KAAK,4BAAc,KAAK,GAAS;AAC3D,sBAAQ,QAAC,GAAG,gBAAI,KAAK;YAChB,kBAAI,KAAK,GAAU;AACxB,sBAAQ,QAAC,GAAG,EAAI,YAAI,OAAO,CAAC,KAAK;;AAGnC,YAAO,qBAAY,CAAC;IACtB;;;IA3DsB,cAAQ;EAAC","file":"key_value_store_web.ddc.js"}');
  // Exports:
  return {
    key_value_store_web: key_value_store_web
  };
});

//# sourceMappingURL=key_value_store_web.ddc.js.map
