define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__queries = Object.create(dart.library);
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  src__runtime__queries.flattenNodes = function(T, nodes) {
    let result = _interceptors.JSArray$(T).of([]);
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i++) {
      result[$addAll](nodes[$_get](i));
    }
    return result;
  };
  src__runtime__queries.firstOrNull = function(T, items) {
    return dart.test(items[$isNotEmpty]) ? items[$first] : null;
  };
  dart.trackLibraries("packages/angular/src/runtime/queries.ddc", {
    "package:angular/src/runtime/queries.dart": src__runtime__queries
  }, '{"version":3,"sourceRoot":"","sources":["queries.dart"],"names":[],"mappings":";;;;;;;;;;;;mDAGwB,KAAmB;AACzC,QAAM,SAAS;AACf,aAAS,IAAI,GAAG,IAAI,KAAK,SAAO,EAAE,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,IAAI;AAC5C,YAAM,SAAO,CAAC,KAAK,QAAC,CAAC;;AAEvB,UAAO,OAAM;EACf;kDAGiB,KAAa;qBAAK,KAAK,aAAW,IAAG,KAAK,QAAM,GAAG;EAAI","file":"queries.ddc.js"}');
  // Exports:
  return {
    src__runtime__queries: src__runtime__queries
  };
});

//# sourceMappingURL=queries.ddc.js.map
