define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__application_tokens = Object.create(dart.library);
  const src__core__change_detection__component_state = Object.create(dart.library);
  const src__core__change_detection = Object.create(dart.library);
  const src__core__zone = Object.create(dart.library);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__application_tokens, {
    /*src__core__application_tokens.APP_ID*/get APP_ID() {
      return dart.const(new (OpaqueTokenOfString()).new("APP_ID"));
    }
  });
  const _onStateChanged = dart.privateName(src__core__change_detection__component_state, "_onStateChanged");
  src__core__change_detection__component_state.ComponentState = class ComponentState extends core.Object {
    setState(scheduleChangeDetectionAfter) {
      scheduleChangeDetectionAfter();
      this.deliverStateChanges();
    }
    deliverStateChanges() {
      let onStateChanged = this[_onStateChanged];
      if (onStateChanged != null) {
        onStateChanged();
      }
    }
  };
  (src__core__change_detection__component_state.ComponentState.new = function() {
    this[_onStateChanged] = null;
  }).prototype = src__core__change_detection__component_state.ComponentState.prototype;
  dart.addTypeTests(src__core__change_detection__component_state.ComponentState);
  dart.setMethodSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getMethods(src__core__change_detection__component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__core__change_detection__component_state.ComponentState, "package:angular/src/core/change_detection/component_state.dart");
  dart.setFieldSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getFields(src__core__change_detection__component_state.ComponentState.__proto__),
    [_onStateChanged]: dart.fieldType(VoidTovoid())
  }));
  src__core__change_detection__component_state.internalSetStateChanged = function(component, onStateChanged) {
    component[_onStateChanged] = onStateChanged;
  };
  dart.trackLibraries("packages/angular/src/core/application_tokens.ddc", {
    "package:angular/src/core/application_tokens.dart": src__core__application_tokens,
    "package:angular/src/core/change_detection/component_state.dart": src__core__change_detection__component_state,
    "package:angular/src/core/change_detection.dart": src__core__change_detection,
    "package:angular/src/core/zone.dart": src__core__zone
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.dart","change_detection/component_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAeM,oCAAM;4BAAG,2BAAmB,CAAC;;;;;aCkCnB,4BAA4C;AACxD,kCAA4B;AAC5B,8BAAmB;IACrB;;AAUE,UAAM,iBAAiB,qBAAe;AACtC,UAAI,cAAc,IAAI,MAAM;AAC1B,sBAAc;;IAElB;;;IA3CgB,qBAAe;EA4CjC;;;;;;;;;;;;kFAKE,SAAwB,EACxB,cAA8B;AAE9B,aAAS,iBAAgB,GAAG,cAAc;EAC5C","file":"application_tokens.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens: src__core__application_tokens,
    src__core__change_detection__component_state: src__core__change_detection__component_state,
    src__core__change_detection: src__core__change_detection,
    src__core__zone: src__core__zone
  };
});

//# sourceMappingURL=application_tokens.ddc.js.map
