define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const meta = Object.create(dart.library);
  meta.castCallback1ForDirective = function(T, A, callback) {
    return dart.fn(element => callback(A.as(element)), dart.fnType(T, [dart.dynamic]));
  };
  dart.trackLibraries("packages/angular/meta.ddc", {
    "package:angular/meta.dart": meta
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;kDA+CE,QAAsB;AAEtB,UAAO,SAAC,OAAO,IAAK,QAAQ,MAAC,OAAO;EACtC","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
});

//# sourceMappingURL=meta.ddc.js.map
