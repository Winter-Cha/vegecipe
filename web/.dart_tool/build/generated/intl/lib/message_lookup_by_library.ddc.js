define(['dart_sdk', 'packages/intl/intl'], function(dart_sdk, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const src__intl_helpers = intl.src__intl_helpers;
  const message_lookup_by_library = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let IdentityMapOfString$MessageLookupByLibrary = () => (IdentityMapOfString$MessageLookupByLibrary = dart.constFn(_js_helper.IdentityMap$(core.String, message_lookup_by_library.MessageLookupByLibrary)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let MapOfString$MessageLookupByLibrary = () => (MapOfString$MessageLookupByLibrary = dart.constFn(core.Map$(core.String, message_lookup_by_library.MessageLookupByLibrary)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const _lastLocale = dart.privateName(message_lookup_by_library, "_lastLocale");
  const _lastLookup = dart.privateName(message_lookup_by_library, "_lastLookup");
  const _lookupMessageCatalog = dart.privateName(message_lookup_by_library, "_lookupMessageCatalog");
  message_lookup_by_library.CompositeMessageLookup = class CompositeMessageLookup extends core.Object {
    get availableMessages() {
      return this[availableMessages];
    }
    set availableMessages(value) {
      this[availableMessages] = value;
    }
    localeExists(localeName) {
      return this.availableMessages[$containsKey](localeName);
    }
    lookupMessage(message_str, locale, name, args, meaning, opts) {
      let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
      let knownLocale = locale != null ? locale : intl$.Intl.getCurrentLocale();
      let messages = knownLocale == this[_lastLocale] ? this[_lastLookup] : this[_lookupMessageCatalog](knownLocale);
      if (messages == null) {
        return core.String._check(ifAbsent == null ? message_str : ifAbsent(message_str, args));
      }
      return messages.lookupMessage(message_str, locale, name, args, meaning, {ifAbsent: ifAbsent});
    }
    [_lookupMessageCatalog](locale) {
      let verifiedLocale = intl$.Intl.verifiedLocale(locale, dart.bind(this, 'localeExists'), {onFailure: dart.fn(locale => locale, dynamicTodynamic())});
      this[_lastLocale] = locale;
      this[_lastLookup] = this.availableMessages[$_get](verifiedLocale);
      return this[_lastLookup];
    }
    addLocale(localeName, findLocale) {
      if (dart.test(this.localeExists(localeName))) return;
      let canonical = intl$.Intl.canonicalizedLocale(localeName);
      let newLocale = dart.dcall(findLocale, [canonical]);
      if (newLocale != null) {
        this.availableMessages[$_set](localeName, message_lookup_by_library.MessageLookupByLibrary._check(newLocale));
        this.availableMessages[$_set](canonical, message_lookup_by_library.MessageLookupByLibrary._check(newLocale));
        if (core.identical(this[_lastLocale], newLocale)) {
          this[_lastLocale] = null;
          this[_lastLookup] = null;
        }
      }
    }
  };
  (message_lookup_by_library.CompositeMessageLookup.new = function() {
    this[availableMessages] = new (IdentityMapOfString$MessageLookupByLibrary()).new();
    this[_lastLocale] = null;
    this[_lastLookup] = null;
  }).prototype = message_lookup_by_library.CompositeMessageLookup.prototype;
  dart.addTypeTests(message_lookup_by_library.CompositeMessageLookup);
  const availableMessages = Symbol("CompositeMessageLookup.availableMessages");
  message_lookup_by_library.CompositeMessageLookup[dart.implements] = () => [src__intl_helpers.MessageLookup];
  dart.setMethodSignature(message_lookup_by_library.CompositeMessageLookup, () => ({
    __proto__: dart.getMethods(message_lookup_by_library.CompositeMessageLookup.__proto__),
    localeExists: dart.fnType(core.bool, [dart.dynamic]),
    lookupMessage: dart.fnType(core.String, [core.String, core.String, core.String, core.List, core.String], {ifAbsent: dart.fnType(dart.dynamic, [core.String, core.List$(core.Object)])}),
    [_lookupMessageCatalog]: dart.fnType(message_lookup_by_library.MessageLookupByLibrary, [core.String]),
    addLocale: dart.fnType(dart.void, [core.String, core.Function])
  }));
  dart.setLibraryUri(message_lookup_by_library.CompositeMessageLookup, "package:intl/message_lookup_by_library.dart");
  dart.setFieldSignature(message_lookup_by_library.CompositeMessageLookup, () => ({
    __proto__: dart.getFields(message_lookup_by_library.CompositeMessageLookup.__proto__),
    availableMessages: dart.fieldType(MapOfString$MessageLookupByLibrary()),
    [_lastLocale]: dart.fieldType(core.String),
    [_lastLookup]: dart.fieldType(message_lookup_by_library.MessageLookupByLibrary)
  }));
  let const$;
  message_lookup_by_library.MessageLookupByLibrary = class MessageLookupByLibrary extends core.Object {
    lookupMessage(message_str, locale, name, args, meaning, opts) {
      let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
      let notFound = false;
      let actualName = src__intl_helpers.computeMessageName(name, message_str, meaning);
      if (actualName == null) notFound = true;
      let translation = this._get(actualName);
      notFound = notFound || translation == null;
      if (notFound) {
        return core.String._check(ifAbsent == null ? message_str : ifAbsent(message_str, args));
      } else {
        args = args != null ? args : const$ || (const$ = dart.constList([], dart.dynamic));
        return this.evaluateMessage(translation, args);
      }
    }
    evaluateMessage(translation, args) {
      return core.String._check(core.Function.apply(core.Function._check(translation), args));
    }
    _get(messageName) {
      return this.messages[$_get](messageName);
    }
    toString() {
      return this.localeName;
    }
    static simpleMessage(translatedString) {
      return dart.fn(() => translatedString, VoidTodynamic());
    }
  };
  (message_lookup_by_library.MessageLookupByLibrary.new = function() {
  }).prototype = message_lookup_by_library.MessageLookupByLibrary.prototype;
  dart.addTypeTests(message_lookup_by_library.MessageLookupByLibrary);
  dart.setMethodSignature(message_lookup_by_library.MessageLookupByLibrary, () => ({
    __proto__: dart.getMethods(message_lookup_by_library.MessageLookupByLibrary.__proto__),
    lookupMessage: dart.fnType(core.String, [core.String, core.String, core.String, core.List, core.String], {ifAbsent: dart.fnType(dart.dynamic, [core.String, core.List$(core.Object)])}),
    evaluateMessage: dart.fnType(core.String, [dart.dynamic, core.List]),
    _get: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setLibraryUri(message_lookup_by_library.MessageLookupByLibrary, "package:intl/message_lookup_by_library.dart");
  dart.defineExtensionMethods(message_lookup_by_library.MessageLookupByLibrary, ['toString']);
  dart.trackLibraries("packages/intl/message_lookup_by_library.ddc", {
    "package:intl/message_lookup_by_library.dart": message_lookup_by_library
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["message_lookup_by_library.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAqBsC;;;;;;iBAGlB,UAAU;YAAK,uBAAiB,cAAY,CAAC,UAAU;IAAC;kBAgBtE,WAAkB,EAAE,MAAa,EAAE,IAAW,EAAE,IAAS,EAAE,OAAc;UACxD;AAEnB,UAAI,cAAc,MAAM,WAAN,MAAM,GAAI,UAAI,iBAAiB;AACjD,UAAI,WAAW,AAAC,WAAW,IAAI,iBAAW,GACpC,iBAAW,GACX,2BAAqB,CAAC,WAAW;AAGvC,UAAI,QAAQ,IAAI,MAAM;AACpB,kCAAO,QAAQ,IAAI,OAAO,WAAW,GAAG,QAAQ,CAAC,WAAW,EAAE,IAAI;;AAEpE,YAAO,SAAQ,cAAc,CAAC,WAAW,EAAE,MAAM,EAAE,IAAI,EAAE,IAAI,EAAE,OAAO,aACxD,QAAQ;IACxB;4BAG6C,MAAa;AACxD,UAAI,iBAAiB,UAAI,eAAe,CAAC,MAAM,EAAE,+BAAY,cAC9C,QAAC,MAAM,IAAK,MAAM;AACjC,uBAAW,GAAG,MAAM;AACpB,uBAAW,GAAG,sBAAiB,QAAC,cAAc;AAC9C,YAAO,kBAAW;IACpB;cAKe,UAAiB,EAAE,UAAmB;AACnD,oBAAI,iBAAY,CAAC,UAAU,IAAG;AAC9B,UAAI,YAAY,UAAI,oBAAoB,CAAC,UAAU;AACnD,UAAI,uBAAY,UAAU,GAAC,SAAS;AACpC,UAAI,SAAS,IAAI,MAAM;AACrB,8BAAiB,QAAC,UAAU,0DAAI,SAAS;AACzC,8BAAiB,QAAC,SAAS,0DAAI,SAAS;AAExC,2BAAI,iBAAW,EAAI,SAAS,GAAE;AAC5B,2BAAW,GAAG;AACd,2BAAW,GAAG;;;IAGpB;;;IA5DoC,uBAAiB,GAAG;IASjD,iBAAW;IAGK,iBAAW;EAiDpC;;;;;;;;;;;;;;;;;;;;kBA2BM,WAAkB,EAAE,MAAa,EAAE,IAAW,EAAE,IAAS,EAAE,OAAc;UACxD;AACnB,UAAI,WAAW;AACf,UAAI,aAAa,oCAAkB,CAAC,IAAI,EAAE,WAAW,EAAE,OAAO;AAC9D,UAAI,UAAU,IAAI,MAAM,QAAQ,GAAG;AACnC,UAAI,cAAc,UAAK,UAAU;AACjC,cAAQ,GAAG,AAAS,QAAD,IAAK,WAAW,IAAI;AACvC,UAAI,QAAQ,EAAE;AACZ,kCAAO,QAAQ,IAAI,OAAO,WAAW,GAAG,QAAQ,CAAC,WAAW,EAAE,IAAI;aAC7D;AACL,YAAI,GAAG,IAAI,WAAJ,IAAI,GAAI;AACf,cAAO,qBAAe,CAAC,WAAW,EAAE,IAAI;;IAE5C;oBAGuB,WAAW,EAAE,IAAS;AAC3C,gCAAO,aAAQ,MAAM,sBAAC,WAAW,GAAE,IAAI;IACzC;SAGY,WAAkB;YAAK,cAAQ,QAAC,WAAW;IAAC;;YAU1C,gBAAU;;yBAIH,gBAAgB;YAAK,eAAM,gBAAgB;;;;EAClE","file":"message_lookup_by_library.ddc.js"}');
  // Exports:
  return {
    message_lookup_by_library: message_lookup_by_library
  };
});

//# sourceMappingURL=message_lookup_by_library.ddc.js.map
