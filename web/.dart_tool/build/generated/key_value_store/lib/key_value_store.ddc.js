define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const key_value_store = Object.create(dart.library);
  key_value_store.KeyValueStore = class KeyValueStore extends core.Object {};
  (key_value_store.KeyValueStore.new = function() {
  }).prototype = key_value_store.KeyValueStore.prototype;
  dart.addTypeTests(key_value_store.KeyValueStore);
  dart.trackLibraries("packages/key_value_store/key_value_store.ddc", {
    "package:key_value_store/key_value_store.dart": key_value_store
  }, '{"version":3,"sourceRoot":"","sources":["key_value_store.dart"],"names":[],"mappings":";;;;;;;;EAuBA","file":"key_value_store.ddc.js"}');
  // Exports:
  return {
    key_value_store: key_value_store
  };
});

//# sourceMappingURL=key_value_store.ddc.js.map
