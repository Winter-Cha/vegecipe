define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/angular_components/material_datepicker/proto/date.pb'], function(dart_sdk, protobuf, date) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf$ = protobuf.protobuf;
  const material_datepicker__proto__date$46pb = date.material_datepicker__proto__date$46pb;
  const material_datepicker__proto__date_range$46pb = Object.create(dart.library);
  const $_get = dartx._get;
  let GeneratedMessageTovoid = () => (GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf$.GeneratedMessage])))();
  let PbListOfDatepickerDateRange = () => (PbListOfDatepickerDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DatepickerDateRange)))();
  let VoidToDateRange = () => (VoidToDateRange = dart.constFn(dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let PbListOfDateRange = () => (PbListOfDateRange = dart.constFn(protobuf$.PbList$(material_datepicker__proto__date_range$46pb.DateRange)))();
  let VoidToDate = () => (VoidToDate = dart.constFn(dart.fnType(material_datepicker__proto__date$46pb.Date, [])))();
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset = class DatepickerDateRange_RelativePreset extends core.Object {
    toString() {
      return {
        0: "DatepickerDateRange_RelativePreset.daysAgo",
        1: "DatepickerDateRange_RelativePreset.weeksAgo",
        2: "DatepickerDateRange_RelativePreset.monthsAgo",
        3: "DatepickerDateRange_RelativePreset.yearsAgo",
        4: "DatepickerDateRange_RelativePreset.lastNDays",
        5: "DatepickerDateRange_RelativePreset.allTimeRange",
        6: "DatepickerDateRange_RelativePreset.broadcastMonthsAgo",
        7: "DatepickerDateRange_RelativePreset.lastNDaysToToday",
        8: "DatepickerDateRange_RelativePreset.quartersAgo",
        9: "DatepickerDateRange_RelativePreset.nextNDaysFromToday",
        10: "DatepickerDateRange_RelativePreset.notSet"
      }[this.index];
    }
  };
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new = function(x) {
    this.index = x;
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset);
  dart.setLibraryUri(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset, "package:angular_components/material_datepicker/proto/date_range.pb.dart");
  dart.setFieldSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset, () => ({
    __proto__: dart.getFields(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset, ['toString']);
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.daysAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(0));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.weeksAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(1));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.monthsAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(2));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.yearsAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(3));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDays = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(4));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.allTimeRange = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(5));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.broadcastMonthsAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(6));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDaysToToday = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(7));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.quartersAgo = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(8));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.nextNDaysFromToday = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(9));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.notSet = dart.const(new material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.new(10));
  material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.values = dart.constList([material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.daysAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.weeksAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.monthsAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.yearsAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDays, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.allTimeRange, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.broadcastMonthsAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDaysToToday, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.quartersAgo, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.nextNDaysFromToday, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.notSet], material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset);
  material_datepicker__proto__date_range$46pb.DatepickerDateRange = class DatepickerDateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    copyWith(updates) {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._check(super.copyWith(dart.fn(message => updates(material_datepicker__proto__date_range$46pb.DatepickerDateRange.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DatepickerDateRange.new();
    }
    createEmptyInstance() {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange.create();
    }
    static createRepeated() {
      return new (PbListOfDatepickerDateRange()).new();
    }
    static getDefault() {
      let t = material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance;
      return t == null ? material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance = (() => {
        let _ = material_datepicker__proto__date_range$46pb.DatepickerDateRange.create();
        _.freeze();
        return _;
      })() : t;
    }
    whichRelativePreset() {
      return material_datepicker__proto__date_range$46pb.DatepickerDateRange._DatepickerDateRange_RelativePresetByTag[$_get](this.$_whichOneof(0));
    }
    clearRelativePreset() {
      return this.clearField(this.$_whichOneof(0));
    }
    get dateRange() {
      return this.$_getN(material_datepicker__proto__date_range$46pb.DateRange, 0);
    }
    set dateRange(v) {
      this.setField(1, v);
    }
    hasDateRange() {
      return this.$_has(0);
    }
    clearDateRange() {
      return this.clearField(1);
    }
    get daysAgo() {
      return this.$_get(core.int, 1, 0);
    }
    set daysAgo(v) {
      this.$_setSignedInt32(1, v);
    }
    hasDaysAgo() {
      return this.$_has(1);
    }
    clearDaysAgo() {
      return this.clearField(2);
    }
    get weeksAgo() {
      return this.$_get(core.int, 2, 0);
    }
    set weeksAgo(v) {
      this.$_setSignedInt32(2, v);
    }
    hasWeeksAgo() {
      return this.$_has(2);
    }
    clearWeeksAgo() {
      return this.clearField(3);
    }
    get monthsAgo() {
      return this.$_get(core.int, 3, 0);
    }
    set monthsAgo(v) {
      this.$_setSignedInt32(3, v);
    }
    hasMonthsAgo() {
      return this.$_has(3);
    }
    clearMonthsAgo() {
      return this.clearField(4);
    }
    get yearsAgo() {
      return this.$_get(core.int, 4, 0);
    }
    set yearsAgo(v) {
      this.$_setSignedInt32(4, v);
    }
    hasYearsAgo() {
      return this.$_has(4);
    }
    clearYearsAgo() {
      return this.clearField(5);
    }
    get lastNDays() {
      return this.$_get(core.int, 5, 0);
    }
    set lastNDays(v) {
      this.$_setSignedInt32(5, v);
    }
    hasLastNDays() {
      return this.$_has(5);
    }
    clearLastNDays() {
      return this.clearField(6);
    }
    get allTimeRange() {
      return this.$_get(core.bool, 6, false);
    }
    set allTimeRange(v) {
      this.$_setBool(6, v);
    }
    hasAllTimeRange() {
      return this.$_has(6);
    }
    clearAllTimeRange() {
      return this.clearField(7);
    }
    get broadcastMonthsAgo() {
      return this.$_get(core.int, 7, 0);
    }
    set broadcastMonthsAgo(v) {
      this.$_setSignedInt32(7, v);
    }
    hasBroadcastMonthsAgo() {
      return this.$_has(7);
    }
    clearBroadcastMonthsAgo() {
      return this.clearField(8);
    }
    get lastNDaysToToday() {
      return this.$_get(core.int, 8, 0);
    }
    set lastNDaysToToday(v) {
      this.$_setSignedInt32(8, v);
    }
    hasLastNDaysToToday() {
      return this.$_has(8);
    }
    clearLastNDaysToToday() {
      return this.clearField(9);
    }
    get quartersAgo() {
      return this.$_get(core.int, 9, 0);
    }
    set quartersAgo(v) {
      this.$_setSignedInt32(9, v);
    }
    hasQuartersAgo() {
      return this.$_has(9);
    }
    clearQuartersAgo() {
      return this.clearField(10);
    }
    get startWeekday() {
      return this.$_get(core.int, 10, 0);
    }
    set startWeekday(v) {
      this.$_setSignedInt32(10, v);
    }
    hasStartWeekday() {
      return this.$_has(10);
    }
    clearStartWeekday() {
      return this.clearField(11);
    }
    get nextNDaysFromToday() {
      return this.$_get(core.int, 11, 0);
    }
    set nextNDaysFromToday(v) {
      this.$_setSignedInt32(11, v);
    }
    hasNextNDaysFromToday() {
      return this.$_has(11);
    }
    clearNextNDaysFromToday() {
      return this.clearField(12);
    }
  };
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DatepickerDateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DatepickerDateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DatepickerDateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    copyWith: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, [dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DatepickerDateRange])]),
    createEmptyInstance: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange, []),
    whichRelativePreset: dart.fnType(material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset, []),
    clearRelativePreset: dart.fnType(dart.void, []),
    hasDateRange: dart.fnType(core.bool, []),
    clearDateRange: dart.fnType(dart.void, []),
    hasDaysAgo: dart.fnType(core.bool, []),
    clearDaysAgo: dart.fnType(dart.void, []),
    hasWeeksAgo: dart.fnType(core.bool, []),
    clearWeeksAgo: dart.fnType(dart.void, []),
    hasMonthsAgo: dart.fnType(core.bool, []),
    clearMonthsAgo: dart.fnType(dart.void, []),
    hasYearsAgo: dart.fnType(core.bool, []),
    clearYearsAgo: dart.fnType(dart.void, []),
    hasLastNDays: dart.fnType(core.bool, []),
    clearLastNDays: dart.fnType(dart.void, []),
    hasAllTimeRange: dart.fnType(core.bool, []),
    clearAllTimeRange: dart.fnType(dart.void, []),
    hasBroadcastMonthsAgo: dart.fnType(core.bool, []),
    clearBroadcastMonthsAgo: dart.fnType(dart.void, []),
    hasLastNDaysToToday: dart.fnType(core.bool, []),
    clearLastNDaysToToday: dart.fnType(dart.void, []),
    hasQuartersAgo: dart.fnType(core.bool, []),
    clearQuartersAgo: dart.fnType(dart.void, []),
    hasStartWeekday: dart.fnType(core.bool, []),
    clearStartWeekday: dart.fnType(dart.void, []),
    hasNextNDaysFromToday: dart.fnType(core.bool, []),
    clearNextNDaysFromToday: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    info_: protobuf$.BuilderInfo,
    dateRange: material_datepicker__proto__date_range$46pb.DateRange,
    daysAgo: core.int,
    weeksAgo: core.int,
    monthsAgo: core.int,
    yearsAgo: core.int,
    lastNDays: core.int,
    allTimeRange: core.bool,
    broadcastMonthsAgo: core.int,
    lastNDaysToToday: core.int,
    quartersAgo: core.int,
    startWeekday: core.int,
    nextNDaysFromToday: core.int
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DatepickerDateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DatepickerDateRange.__proto__),
    dateRange: material_datepicker__proto__date_range$46pb.DateRange,
    daysAgo: core.int,
    weeksAgo: core.int,
    monthsAgo: core.int,
    yearsAgo: core.int,
    lastNDays: core.int,
    allTimeRange: core.bool,
    broadcastMonthsAgo: core.int,
    lastNDaysToToday: core.int,
    quartersAgo: core.int,
    startWeekday: core.int,
    nextNDaysFromToday: core.int
  }));
  dart.setLibraryUri(material_datepicker__proto__date_range$46pb.DatepickerDateRange, "package:angular_components/material_datepicker/proto/date_range.pb.dart");
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DatepickerDateRange, {
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._DatepickerDateRange_RelativePresetByTag*/get _DatepickerDateRange_RelativePresetByTag() {
      return dart.constMap(core.int, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset, [2, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.daysAgo, 3, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.weeksAgo, 4, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.monthsAgo, 5, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.yearsAgo, 6, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDays, 7, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.allTimeRange, 8, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.broadcastMonthsAgo, 9, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.lastNDaysToToday, 10, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.quartersAgo, 12, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.nextNDaysFromToday, 0, material_datepicker__proto__date_range$46pb.DatepickerDateRange_RelativePreset.notSet]);
    },
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new("DatepickerDateRange", {package: dart.const(new protobuf$.PackageName.new("angular_components.lib.material_datepicker.proto"))});
      _.a(material_datepicker__proto__date_range$46pb.DateRange, 1, "dateRange", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date_range$46pb.DateRange.getDefault, VoidToDateRange()), dart.fn(material_datepicker__proto__date_range$46pb.DateRange.create, VoidToDateRange()));
      _.a(core.int, 2, "daysAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 3, "weeksAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 4, "monthsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 5, "yearsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 6, "lastNDays", protobuf$.PbFieldType.O3);
      _.aOB(7, "allTimeRange");
      _.a(core.int, 8, "broadcastMonthsAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 9, "lastNDaysToToday", protobuf$.PbFieldType.O3);
      _.a(core.int, 10, "quartersAgo", protobuf$.PbFieldType.O3);
      _.a(core.int, 11, "startWeekday", protobuf$.PbFieldType.O3);
      _.a(core.int, 12, "nextNDaysFromToday", protobuf$.PbFieldType.O3);
      _.oo(0, JSArrayOfint().of([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DatepickerDateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  material_datepicker__proto__date_range$46pb.DateRange = class DateRange extends protobuf$.GeneratedMessage {
    clone() {
      let _ = new material_datepicker__proto__date_range$46pb.DateRange.new();
      _.mergeFromMessage(this);
      return _;
    }
    copyWith(updates) {
      return material_datepicker__proto__date_range$46pb.DateRange._check(super.copyWith(dart.fn(message => updates(material_datepicker__proto__date_range$46pb.DateRange.as(message)), GeneratedMessageTovoid())));
    }
    get info_() {
      return material_datepicker__proto__date_range$46pb.DateRange._i;
    }
    static create() {
      return new material_datepicker__proto__date_range$46pb.DateRange.new();
    }
    createEmptyInstance() {
      return material_datepicker__proto__date_range$46pb.DateRange.create();
    }
    static createRepeated() {
      return new (PbListOfDateRange()).new();
    }
    static getDefault() {
      let t = material_datepicker__proto__date_range$46pb.DateRange._defaultInstance;
      return t == null ? material_datepicker__proto__date_range$46pb.DateRange._defaultInstance = (() => {
        let _ = material_datepicker__proto__date_range$46pb.DateRange.create();
        _.freeze();
        return _;
      })() : t;
    }
    get start() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 0);
    }
    set start(v) {
      this.setField(1, v);
    }
    hasStart() {
      return this.$_has(0);
    }
    clearStart() {
      return this.clearField(1);
    }
    get end() {
      return this.$_getN(material_datepicker__proto__date$46pb.Date, 1);
    }
    set end(v) {
      this.setField(2, v);
    }
    hasEnd() {
      return this.$_has(1);
    }
    clearEnd() {
      return this.clearField(2);
    }
  };
  (material_datepicker__proto__date_range$46pb.DateRange.new = function() {
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.new.call(this);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromBuffer = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromBuffer.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  (material_datepicker__proto__date_range$46pb.DateRange.fromJson = function(i, r) {
    if (r === void 0) r = protobuf$.ExtensionRegistry.EMPTY;
    material_datepicker__proto__date_range$46pb.DateRange.__proto__.fromJson.call(this, i, r);
  }).prototype = material_datepicker__proto__date_range$46pb.DateRange.prototype;
  dart.addTypeTests(material_datepicker__proto__date_range$46pb.DateRange);
  dart.setMethodSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getMethods(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    clone: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    copyWith: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, [dart.fnType(dart.void, [material_datepicker__proto__date_range$46pb.DateRange])]),
    createEmptyInstance: dart.fnType(material_datepicker__proto__date_range$46pb.DateRange, []),
    hasStart: dart.fnType(core.bool, []),
    clearStart: dart.fnType(dart.void, []),
    hasEnd: dart.fnType(core.bool, []),
    clearEnd: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getGetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    info_: protobuf$.BuilderInfo,
    start: material_datepicker__proto__date$46pb.Date,
    end: material_datepicker__proto__date$46pb.Date
  }));
  dart.setSetterSignature(material_datepicker__proto__date_range$46pb.DateRange, () => ({
    __proto__: dart.getSetters(material_datepicker__proto__date_range$46pb.DateRange.__proto__),
    start: material_datepicker__proto__date$46pb.Date,
    end: material_datepicker__proto__date$46pb.Date
  }));
  dart.setLibraryUri(material_datepicker__proto__date_range$46pb.DateRange, "package:angular_components/material_datepicker/proto/date_range.pb.dart");
  dart.defineLazy(material_datepicker__proto__date_range$46pb.DateRange, {
    /*material_datepicker__proto__date_range$46pb.DateRange._i*/get _i() {
      let _ = new protobuf$.BuilderInfo.new("DateRange", {package: dart.const(new protobuf$.PackageName.new("angular_components.lib.material_datepicker.proto"))});
      _.a(material_datepicker__proto__date$46pb.Date, 1, "start", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date$46pb.Date.getDefault, VoidToDate()), dart.fn(material_datepicker__proto__date$46pb.Date.create, VoidToDate()));
      _.a(material_datepicker__proto__date$46pb.Date, 2, "end", protobuf$.PbFieldType.OM, dart.fn(material_datepicker__proto__date$46pb.Date.getDefault, VoidToDate()), dart.fn(material_datepicker__proto__date$46pb.Date.create, VoidToDate()));
      _.hasRequiredFields = false;
      return _;
    },
    /*material_datepicker__proto__date_range$46pb.DateRange._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/proto/date_range.pb.ddc", {
    "package:angular_components/material_datepicker/proto/date_range.pb.dart": material_datepicker__proto__date_range$46pb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range.pb.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAoEiC,mEAAmB;yBAAqB;;IAAK;aAC/C,OAA0C;oFACnE,cAAc,CAAC,QAAC,OAAO,IAAK,OAAO,oEAAC,OAAO;IAAyB;;YAC3C,mEAAE;;;iBACQ,mEAAmB;IAAE;;YACf,uEAAM;IAAE;;iBAEjD,mCAA+B;IAAE;;cAEjC,gFAAgB;yBAAhB,gFAAgB;gBAAK,sEAAM;;;;IAAY;;YAIvC,yGAAwC,QAAC,iBAAY,CAAC;IAAG;;YAC/B,gBAAU,CAAC,iBAAY,CAAC;IAAG;;YAE9B,YAAM,wDAAC;IAAE;kBACtB,CAAW;AACvB,mBAAQ,CAAC,GAAG,CAAC;IACf;;YAE6B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEb,WAAK,WAAC,GAAG;IAAE;gBACxB,CAAW;AACrB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE2B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEV,WAAK,WAAC,GAAG;IAAE;iBACxB,CAAW;AACtB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE4B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEV,WAAK,WAAC,GAAG;IAAE;kBACxB,CAAW;AACvB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE6B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEZ,WAAK,WAAC,GAAG;IAAE;iBACxB,CAAW;AACtB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE4B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEV,WAAK,WAAC,GAAG;IAAE;kBACxB,CAAW;AACvB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE6B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEP,WAAK,YAAC,GAAG;IAAM;qBAC7B,CAAY;AAC3B,oBAAS,CAAC,GAAG,CAAC;IAChB;;YAEgC,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEL,WAAK,WAAC,GAAG;IAAE;2BACxB,CAAW;AAChC,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAEsC,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEb,WAAK,WAAC,GAAG;IAAE;yBACxB,CAAW;AAC9B,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAEoC,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEhB,WAAK,WAAC,GAAG;IAAE;oBACxB,CAAW;AACzB,2BAAgB,CAAC,GAAG,CAAC;IACvB;;YAE+B,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAG;;YAEX,WAAK,WAAC,IAAI;IAAE;qBACzB,CAAW;AAC1B,2BAAgB,CAAC,IAAI,CAAC;IACxB;;YAEgC,WAAK,CAAC;IAAG;;YACb,gBAAU,CAAC;IAAG;;YAEN,WAAK,WAAC,IAAI;IAAE;2BACzB,CAAW;AAChC,2BAAgB,CAAC,IAAI,CAAC;IACxB;;YAEsC,WAAK,CAAC;IAAG;;YACb,gBAAU,CAAC;IAAG;;;AArHxB;EAAO;yFACA,CAAuB,EACjD,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,oGAAiB,CAAC,EAAE,CAAC;EAAC;uFACC,CAAc,EACtC,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,kGAAe,CAAC,EAAE,CAAC;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtCtB,wGAAwC;YAAG,0GAC7C,GAAG,8EAAkC,QAAQ,EAC7C,GAAG,8EAAkC,SAAS,EAC9C,GAAG,8EAAkC,UAAU,EAC/C,GAAG,8EAAkC,SAAS,EAC9C,GAAG,8EAAkC,UAAU,EAC/C,GAAG,8EAAkC,aAAa,EAClD,GAAG,8EAAkC,mBAAmB,EACxD,GAAG,8EAAkC,iBAAiB,EACtD,IAAI,8EAAkC,YAAY,EAClD,IAAI,8EAAkC,mBAAmB,EACzD,GAAG,8EAAkC,OAAO;;MAEjB,kEAAE;kBAAG,yBAAe,CAAC,iCACrC,eAAM,yBAAe,CAC1B;iEACS,GAAG,aAAa,qBAAe,GAAG,UAAE,qDAAS,WAAW,8BACnE,qDAAS,OAAO;oBACL,GAAG,WAAW,qBAAe,GAAG;oBAChC,GAAG,YAAY,qBAAe,GAAG;oBACjC,GAAG,aAAa,qBAAe,GAAG;oBAClC,GAAG,YAAY,qBAAe,GAAG;oBACjC,GAAG,aAAa,qBAAe,GAAG;YAC3C,GAAG;oBACM,GAAG,sBAAsB,qBAAe,GAAG;oBAC3C,GAAG,oBAAoB,qBAAe,GAAG;oBACzC,IAAI,eAAe,qBAAe,GAAG;oBACrC,IAAI,gBAAgB,qBAAe,GAAG;oBACtC,IAAI,sBAAsB,qBAAe,GAAG;WACtD,GAAG,mBAAC,GAAG,GAAG,GAAG,GAAG,GAAG,GAAG,GAAG,GAAG,IAAI;4BACf;;;MAmBG,gFAAgB;;;;;;;kBAwHtB,yDAAS;yBAAqB;;IAAK;aACrC,OAAgC;0EAC/C,cAAc,CAAC,QAAC,OAAO,IAAK,OAAO,0DAAC,OAAO;IAAe;;YACjC,yDAAE;;;iBACF,yDAAS;IAAE;;YACL,6DAAM;IAAE;;iBACM,yBAAqB;IAAE;;cACvC,sEAAgB;yBAAhB,sEAAgB;gBAAK,4DAAM;;;;IAAY;;YAGnD,YAAM,6CAAC;IAAE;cACpB,CAAS;AACjB,mBAAQ,CAAC,GAAG,CAAC;IACf;;YAEyB,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;YAEf,YAAM,6CAAC;IAAE;YACpB,CAAS;AACf,mBAAQ,CAAC,GAAG,CAAC;IACf;;YAEuB,WAAK,CAAC;IAAE;;YACZ,gBAAU,CAAC;IAAE;;;AA/BlB;EAAO;+EACA,CAAuB,EACvC,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,0FAAiB,CAAC,EAAE,CAAC;EAAC;6EACT,CAAc,EAC5B,CAAqD;sBAA/B,IAAI,2BAAqB,MAAM;AACpD,wFAAe,CAAC,EAAE,CAAC;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;MAfG,wDAAE;kBAAG,yBAAe,CAAC,uBACrC,eAAM,yBAAe,CAC1B;sDAEF,GAAG,SAAS,qBAAe,GAAG,UAAE,0CAAO,WAAW,yBAAE,0CAAO,OAAO;sDAElE,GAAG,OAAO,qBAAe,GAAG,UAAE,0CAAO,WAAW,yBAAE,0CAAO,OAAO;4BAC9C;;;MAiBP,sEAAgB","file":"date_range.pb.ddc.js"}');
  // Exports:
  return {
    material_datepicker__proto__date_range$46pb: material_datepicker__proto__date_range$46pb
  };
});

//# sourceMappingURL=date_range.pb.ddc.js.map
