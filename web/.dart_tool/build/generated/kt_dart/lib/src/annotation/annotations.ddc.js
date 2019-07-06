define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__annotation__annotations = Object.create(dart.library);
  dart.defineLazy(src__annotation__annotations, {
    /*src__annotation__annotations.nullable*/get nullable() {
      return dart.const(new src__annotation__annotations._Nullable.new());
    }
  });
  src__annotation__annotations._Nullable = class _Nullable extends core.Object {};
  (src__annotation__annotations._Nullable.new = function() {
  }).prototype = src__annotation__annotations._Nullable.prototype;
  dart.addTypeTests(src__annotation__annotations._Nullable);
  dart.setLibraryUri(src__annotation__annotations._Nullable, "package:kt_dart/src/annotation/annotations.dart");
  dart.defineLazy(src__annotation__annotations, {
    /*src__annotation__annotations.nonNull*/get nonNull() {
      return dart.const(new src__annotation__annotations._NonNull.new());
    }
  });
  src__annotation__annotations._NonNull = class _NonNull extends core.Object {};
  (src__annotation__annotations._NonNull.new = function() {
  }).prototype = src__annotation__annotations._NonNull.prototype;
  dart.addTypeTests(src__annotation__annotations._NonNull);
  dart.setLibraryUri(src__annotation__annotations._NonNull, "package:kt_dart/src/annotation/annotations.dart");
  dart.defineLazy(src__annotation__annotations, {
    /*src__annotation__annotations.tooGeneric*/get tooGeneric() {
      return dart.const(new src__annotation__annotations.TooGeneric.new());
    }
  });
  src__annotation__annotations.TooGeneric = class TooGeneric extends core.Object {
    get extensionForType() {
      return this[extensionForType$];
    }
    set extensionForType(value) {
      super.extensionForType = value;
    }
  };
  (src__annotation__annotations.TooGeneric.new = function(opts) {
    let extensionForType = opts && 'extensionForType' in opts ? opts.extensionForType : null;
    this[extensionForType$] = extensionForType;
  }).prototype = src__annotation__annotations.TooGeneric.prototype;
  dart.addTypeTests(src__annotation__annotations.TooGeneric);
  const extensionForType$ = Symbol("TooGeneric.extensionForType");
  dart.setLibraryUri(src__annotation__annotations.TooGeneric, "package:kt_dart/src/annotation/annotations.dart");
  dart.setFieldSignature(src__annotation__annotations.TooGeneric, () => ({
    __proto__: dart.getFields(src__annotation__annotations.TooGeneric.__proto__),
    extensionForType: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/kt_dart/src/annotation/annotations.ddc", {
    "package:kt_dart/src/annotation/annotations.dart": src__annotation__annotations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["annotations.dart"],"names":[],"mappings":";;;;;;;MAOa,qCAAQ;YAAG,gBAAM,0CAAS;;;;;EAGpB;;;;MAUN,oCAAO;YAAG,gBAAM,yCAAQ;;;;;EAGnB;;;;MAWL,uCAAU;YAAG,gBAAM,2CAAU;;;;IAc3B;;;;;;;;QAHU;2BAAgB,GAAhB,gBAAgB;EAAE","file":"annotations.ddc.js"}');
  // Exports:
  return {
    src__annotation__annotations: src__annotation__annotations
  };
});

//# sourceMappingURL=annotations.ddc.js.map
