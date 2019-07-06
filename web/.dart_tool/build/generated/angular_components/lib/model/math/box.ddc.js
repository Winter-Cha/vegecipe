define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__math__box = Object.create(dart.library);
  model__math__box.Box = class Box extends core.Object {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
  };
  (model__math__box.Box.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : 0;
    let right = opts && 'right' in opts ? opts.right : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    let left = opts && 'left' in opts ? opts.left : 0;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
  }).prototype = model__math__box.Box.prototype;
  dart.addTypeTests(model__math__box.Box);
  const top$ = Symbol("Box.top");
  const right$ = Symbol("Box.right");
  const bottom$ = Symbol("Box.bottom");
  const left$ = Symbol("Box.left");
  dart.setLibraryUri(model__math__box.Box, "package:angular_components/model/math/box.dart");
  dart.setFieldSignature(model__math__box.Box, () => ({
    __proto__: dart.getFields(model__math__box.Box.__proto__),
    top: dart.finalFieldType(core.int),
    right: dart.finalFieldType(core.int),
    bottom: dart.finalFieldType(core.int),
    left: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/angular_components/model/math/box.ddc", {
    "package:angular_components/model/math/box.dart": model__math__box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box.dart"],"names":[],"mappings":";;;;;;;IASY;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAEM,yCAAM;QAAQ,+CAAQ;QAAQ,kDAAS;QAAQ,4CAAO;IAAtD,UAAG,GAAH,GAAG;IAAW,YAAK,GAAL,KAAK;IAAW,aAAM,GAAN,MAAM;IAAW,WAAI,GAAJ,IAAI;EAAM","file":"box.ddc.js"}');
  // Exports:
  return {
    model__math__box: model__math__box
  };
});

//# sourceMappingURL=box.ddc.js.map
