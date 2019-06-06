define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$ = Object.create(dart.library);
  dart.trackLibraries("packages/angular/core.ddc", {
    "package:angular/core.dart": core$
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"core.ddc.js"}');
  // Exports:
  return {
    core: core$
  };
});

//# sourceMappingURL=core.ddc.js.map
