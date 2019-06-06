define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__exception__exceptions = Object.create(dart.library);
  src__exception__exceptions.IndexOutOfBoundsException = class IndexOutOfBoundsException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message == null ? "IndexOutOfBoundsException" : "IndexOutOfBoundsException: " + dart.str(this.message);
    }
  };
  (src__exception__exceptions.IndexOutOfBoundsException.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
  }).prototype = src__exception__exceptions.IndexOutOfBoundsException.prototype;
  dart.addTypeTests(src__exception__exceptions.IndexOutOfBoundsException);
  const message$ = Symbol("IndexOutOfBoundsException.message");
  src__exception__exceptions.IndexOutOfBoundsException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__exception__exceptions.IndexOutOfBoundsException, () => ({
    __proto__: dart.getFields(src__exception__exceptions.IndexOutOfBoundsException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__exception__exceptions.IndexOutOfBoundsException, ['toString']);
  src__exception__exceptions.NoSuchElementException = class NoSuchElementException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message == null ? "NoSuchElementException" : "NoSuchElementException: " + dart.str(this.message);
    }
  };
  (src__exception__exceptions.NoSuchElementException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
  }).prototype = src__exception__exceptions.NoSuchElementException.prototype;
  dart.addTypeTests(src__exception__exceptions.NoSuchElementException);
  const message$0 = Symbol("NoSuchElementException.message");
  src__exception__exceptions.NoSuchElementException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__exception__exceptions.NoSuchElementException, () => ({
    __proto__: dart.getFields(src__exception__exceptions.NoSuchElementException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__exception__exceptions.NoSuchElementException, ['toString']);
  dart.trackLibraries("packages/kt_dart/src/exception/exceptions.ddc", {
    "package:kt_dart/src/exception/exceptions.dart": src__exception__exceptions
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.dart"],"names":[],"mappings":";;;;;;;IAGe;;;;;;;YAGQ,aAAO,IAAI,OAC1B,8BACA,yCAA6B,YAAO;IAAC;;uEAPhB,OAAY;4BAAP;kBAAO,GAAP,OAAO;EAAE;;;;;;;;;;IAa5B;;;;;;;YAGQ,aAAO,IAAI,OAC1B,2BACA,sCAA0B,YAAO;IAAC;;oEAPhB,OAAY;4BAAP;mBAAO,GAAP,OAAO;EAAE","file":"exceptions.ddc.js"}');
  // Exports:
  return {
    src__exception__exceptions: src__exception__exceptions
  };
});

//# sourceMappingURL=exceptions.ddc.js.map
