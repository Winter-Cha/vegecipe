define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__proxies = Object.create(dart.library);
  dart.defineLazy(src__runtime__proxies, {
    /*src__runtime__proxies.emptyListLiteral*/get emptyListLiteral() {
      return dart.constList([], core.Null);
    },
    /*src__runtime__proxies.emptyMapLiteral*/get emptyMapLiteral() {
      return dart.constMap(core.Null, core.Null, []);
    }
  });
  src__runtime__proxies.pureProxy1 = function(T, S0, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    return dart.fn(p0 => {
      if (first || !core.identical(v0, p0)) {
        first = false;
        v0 = p0;
        result = fn(p0);
      }
      return result;
    }, dart.fnType(T, [S0]));
  };
  src__runtime__proxies.pureProxy2 = function(T, S0, S1, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    return dart.fn((p0, p1) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1)) {
        first = false;
        v0 = p0;
        v1 = p1;
        result = fn(p0, p1);
      }
      return result;
    }, dart.fnType(T, [S0, S1]));
  };
  src__runtime__proxies.pureProxy3 = function(T, S0, S1, S2, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    return dart.fn((p0, p1, p2) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        result = fn(p0, p1, p2);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2]));
  };
  src__runtime__proxies.pureProxy4 = function(T, S0, S1, S2, S3, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    return dart.fn((p0, p1, p2, p3) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        result = fn(p0, p1, p2, p3);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3]));
  };
  src__runtime__proxies.pureProxy5 = function(T, S0, S1, S2, S3, S4, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    return dart.fn((p0, p1, p2, p3, p4) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        result = fn(p0, p1, p2, p3, p4);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4]));
  };
  src__runtime__proxies.pureProxy6 = function(T, S0, S1, S2, S3, S4, S5, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        result = fn(p0, p1, p2, p3, p4, p5);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5]));
  };
  src__runtime__proxies.pureProxy7 = function(T, S0, S1, S2, S3, S4, S5, S6, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        result = fn(p0, p1, p2, p3, p4, p5, p6);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6]));
  };
  src__runtime__proxies.pureProxy8 = function(T, S0, S1, S2, S3, S4, S5, S6, S7, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7]));
  };
  src__runtime__proxies.pureProxy9 = function(T, S0, S1, S2, S3, S4, S5, S6, S7, S8, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    let v8 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7) || !core.identical(v8, p8)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7, S8]));
  };
  src__runtime__proxies.pureProxy10 = function(T, S0, S1, S2, S3, S4, S5, S6, S7, S8, S9, fn) {
    let result = null;
    let first = true;
    let v0 = null;
    let v1 = null;
    let v2 = null;
    let v3 = null;
    let v4 = null;
    let v5 = null;
    let v6 = null;
    let v7 = null;
    let v8 = null;
    let v9 = null;
    return dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) => {
      if (first || !core.identical(v0, p0) || !core.identical(v1, p1) || !core.identical(v2, p2) || !core.identical(v3, p3) || !core.identical(v4, p4) || !core.identical(v5, p5) || !core.identical(v6, p6) || !core.identical(v7, p7) || !core.identical(v8, p8) || !core.identical(v9, p9)) {
        first = false;
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        v9 = p9;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
      }
      return result;
    }, dart.fnType(T, [S0, S1, S2, S3, S4, S5, S6, S7, S8, S9]));
  };
  dart.trackLibraries("packages/angular/src/runtime/proxies.ddc", {
    "package:angular/src/runtime/proxies.dart": src__runtime__proxies
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxies.dart"],"names":[],"mappings":"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","file":"proxies.ddc.js"}');
  // Exports:
  return {
    src__runtime__proxies: src__runtime__proxies
  };
});

//# sourceMappingURL=proxies.ddc.js.map
