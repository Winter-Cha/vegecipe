define(['dart_sdk', 'packages/protobuf/protobuf'], function(dart_sdk, protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf$ = protobuf.protobuf;
  const material_datepicker__proto__date$46pb = Object.create(dart.library);
  let GeneratedMessageTovoid = () => (GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf$.GeneratedMessage])))();
  let PbListOfDate = () => (PbListOfDate = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date$46pb.Date)))();
  material_datepicker__proto__date$46pb.Date = class Date extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date$46pb.Date.new();
      _.mergeFromMessage(this);
      return _;
    }
    copyWith(updates) {
      return material_datepicker__proto__date$46pb.Date._check(super.copyWith(dart.fn(message => updates(material_datepicker__proto__date$46pb.Date.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return material_datepicker__proto__date$46pb.Date._i;
    }
    static create() {
      return new material_datepicker__proto__date$46pb.Date.new();
    }
    createEmptyInstance() {
      return material_datepicker__proto__date$46pb.Date.create();
    }
    static createRepeated() {
      return new (PbListOfDate()).new();
    }
    static getDefault() {
      let t = material_datepicker__proto__date$46pb.Date._defaultInstance;
      return t == null ? material_datepicker__proto__date$46pb.Date._defaultInstance = (() => {
        let _ = material_datepicker__proto__date$46pb.Date.create();
        _.freeze();
        return _;
      })() : t;
    }
    get year() {
      return this.$_get(core.int, 0, 0);
    }
    set year(v) {
      this.$_setSignedInt32(0, v);
    }
    hasYear() {
      return this.$_has(0);
    }
    clearYear() {
      return this.clearField(1);
    }
    get month() {
      return this.$_get(core.int, 1, 0);
    }
    set month(v) {
      this.$_setSignedInt32(1, v);
    }
    hasMonth() {
      return this.$_has(1);
    }
    clearMonth() {
      return this.clearField(2);
    }
    get day() {
      return this.$_get(core.int, 2, 0);
    }
    set day(v) {
      this.$_setSignedInt32(2, v);
    }
    hasDay() {
      return this.$_has(2);
    }
    clearDay() {
      return this.clearField(3);
    }
  };
  (material_datepicker__proto__date$46pb.Date.new = function() {
    material_datepicker__proto__date$46pb.Date.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  (material_datepicker__proto__date$46pb.Date.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date$46pb.Date.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  (material_datepicker__proto__date$46pb.Date.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date$46pb.Date.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date$46pb.Date.prototype;
  dart.addTypeTests(material_datepicker__proto__date$46pb.Date);
  dart.setMethodSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date$46pb.Date.__proto__),
    clone: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    copyWith: dart.fnType(material_datepicker__proto__date$46pb.Date, [dart.fnType(dart.void, [material_datepicker__proto__date$46pb.Date])]),
    createEmptyInstance: dart.fnType(material_datepicker__proto__date$46pb.Date, []),
    hasYear: dart.fnType(core.bool, []),
    clearYear: dart.fnType(dart.void, []),
    hasMonth: dart.fnType(core.bool, []),
    clearMonth: dart.fnType(dart.void, []),
    hasDay: dart.fnType(core.bool, []),
    clearDay: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date$46pb.Date.__proto__),
    info_: protobuf$.BuilderInfo,
    year: core.int,
    month: core.int,
    day: core.int
  }));
  dart.setSetterSignature(material_datepicker__proto__date$46pb.Date, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date$46pb.Date.__proto__),
    year: core.int,
    month: core.int,
    day: core.int
  }));
  dart.defineLazy(material_datepicker__proto__date$46pb.Date, {
    /*material_datepicker__proto__date$46pb.Date._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new("Date", {package: dart.const(new protobuf$.PackageName.new("angular_components.lib.material_datepicker.proto"))});
      _.a(core.int, 1, "year", protobuf$.PbFieldType.O3);
      _.a(core.int, 2, "month", protobuf$.PbFieldType.O3);
      _.a(core.int, 3, "day", protobuf$.PbFieldType.O3);
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date$46pb.Date._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date.pb.ddc", {
    "package:angular_components/material_datepicker/proto/date.pb.dart": material_datepicker__proto__date$46pb
  }, '{"version":3,"sourceRoot":"","sources":["date.pb.dart"],"names":[],"mappings":";;;;;;;;;;;kBA2BkB,8CAAI;yBAAqB;;IAAK;aAChC,OAA2B;+DACrC,cAAc,CAAC,QAAC,OAAO,IAAK,OAAO,+CAAC,OAAO;IAAU;;YAC5B,8CAAE;;;iBACP,8CAAI;IAAE;;YACA,kDAAM;IAAE;;iBACM,oBAAgB;IAAE;;cAClC,2DAAgB;yBAAhB,2DAAgB;gBAAK,iDAAM;;;;IAAY;;YAG7C,WAAK,WAAC,GAAG;IAAE;aACxB,CAAW;AAClB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAEwB,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEV,WAAK,WAAC,GAAG;IAAE;cACxB,CAAW;AACnB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAEyB,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEb,WAAK,WAAC,GAAG;IAAE;YACxB,CAAW;AACjB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAEuB,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;;AAvCvB;EAAO;oEACA,CAAuB,EAClC,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,+EAAiB,CAAC,EAAE,CAAC;EAAC;kEACd,CAAc,EACvB,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,6EAAe,CAAC,EAAE,CAAC;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAdG,6CAAE;kBAAG,yBAAe,CAAC,kBACrC,eAAM,yBAAe,CAC1B;oBACS,GAAG,QAAQ,qBAAe,GAAG;oBAC7B,GAAG,SAAS,qBAAe,GAAG;oBAC9B,GAAG,OAAO,qBAAe,GAAG;4BACrB;;;MAiBZ,2DAAgB","file":"date.pb.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date$46pb: material_datepicker__proto__date$46pb
  };
});

//# sourceMappingURL=date.pb.ddc.js.map
