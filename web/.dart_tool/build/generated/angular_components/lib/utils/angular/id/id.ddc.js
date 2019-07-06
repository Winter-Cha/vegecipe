define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator'], function(dart_sdk, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const utils__angular__id__id = Object.create(dart.library);
  utils__angular__id__id.AutoIdDirective = class AutoIdDirective extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
  };
  (utils__angular__id__id.AutoIdDirective.new = function(idGenerator, existingId) {
    this[id] = existingId != null ? existingId : (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
  }).prototype = utils__angular__id__id.AutoIdDirective.prototype;
  dart.addTypeTests(utils__angular__id__id.AutoIdDirective);
  const id = Symbol("AutoIdDirective.id");
  dart.setLibraryUri(utils__angular__id__id.AutoIdDirective, "package:angular_components/utils/angular/id/id.dart");
  dart.setFieldSignature(utils__angular__id__id.AutoIdDirective, () => ({
    __proto__: dart.getFields(utils__angular__id__id.AutoIdDirective.__proto__),
    id: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/id/id.ddc", {
    "package:angular_components/utils/angular/id/id.dart": utils__angular__id__id
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["id.dart"],"names":[],"mappings":";;;;;;;;IAoBe;;;;;;;yDAGT,WAAmC,EAAE,UAAkC;IACrE,QAAE,GAAG,UAAU,WAAV,UAAU,GACV,CAAC,WAAW,WAAX,WAAW,OAAI,gEAA8B,UAAU;EAAG","file":"id.ddc.js"}');
  // Exports:
  return {
    utils__angular__id__id: utils__angular__id__id
  };
});

//# sourceMappingURL=id.ddc.js.map
