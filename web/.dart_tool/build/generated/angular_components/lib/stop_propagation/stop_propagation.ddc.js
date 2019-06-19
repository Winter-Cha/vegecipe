define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, events, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const stop_propagation__stop_propagation = Object.create(dart.library);
  const $onClick = dartx.onClick;
  const $onKeyPress = dartx.onKeyPress;
  const _clickSubscription = dart.privateName(stop_propagation__stop_propagation, "_clickSubscription");
  const _keyPressSubscription = dart.privateName(stop_propagation__stop_propagation, "_keyPressSubscription");
  const _handleClick = dart.privateName(stop_propagation__stop_propagation, "_handleClick");
  const _handleKeyPress = dart.privateName(stop_propagation__stop_propagation, "_handleKeyPress");
  stop_propagation__stop_propagation.StopPropagationDirective = class StopPropagationDirective extends core.Object {
    ngOnDestroy() {
      let t = this[_clickSubscription];
      t == null ? null : t.cancel();
      let t$ = this[_keyPressSubscription];
      t$ == null ? null : t$.cancel();
    }
    [_handleClick](e) {
      e.stopPropagation();
    }
    [_handleKeyPress](e) {
      if (e.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(e))) {
        e.stopPropagation();
      }
    }
  };
  (stop_propagation__stop_propagation.StopPropagationDirective.new = function(e) {
    this[_clickSubscription] = null;
    this[_keyPressSubscription] = null;
    this[_clickSubscription] = e[$onClick].listen(dart.bind(this, _handleClick));
    this[_keyPressSubscription] = e[$onKeyPress].listen(dart.bind(this, _handleKeyPress));
  }).prototype = stop_propagation__stop_propagation.StopPropagationDirective.prototype;
  dart.addTypeTests(stop_propagation__stop_propagation.StopPropagationDirective);
  stop_propagation__stop_propagation.StopPropagationDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(stop_propagation__stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getMethods(stop_propagation__stop_propagation.StopPropagationDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_handleClick]: dart.fnType(dart.void, [html.MouseEvent]),
    [_handleKeyPress]: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setFieldSignature(stop_propagation__stop_propagation.StopPropagationDirective, () => ({
    __proto__: dart.getFields(stop_propagation__stop_propagation.StopPropagationDirective.__proto__),
    [_clickSubscription]: dart.fieldType(async.StreamSubscription),
    [_keyPressSubscription]: dart.fieldType(async.StreamSubscription)
  }));
  dart.trackLibraries("packages/angular_components/stop_propagation/stop_propagation.ddc", {
    "package:angular_components/stop_propagation/stop_propagation.dart": stop_propagation__stop_propagation
  }, '{"version":3,"sourceRoot":"","sources":["stop_propagation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AA4BI,sCAAkB;;AAClB,0CAAqB;;IACvB;mBAEkB,CAAY;AAC5B,OAAC,gBAAgB;IACnB;sBAEqB,CAAe;AAClC,UAAI,CAAC,QAAQ,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,CAAC,IAAG;AAC/C,SAAC,gBAAgB;;IAErB;;8EAnByB,CAAS;IAFf,wBAAkB;IAAE,2BAAqB;AAG1D,4BAAkB,GAAG,CAAC,UAAQ,OAAO,CAAC,6BAAY;AAClD,+BAAqB,GAAG,CAAC,aAAW,OAAO,CAAC,gCAAe;EAC7D","file":"stop_propagation.ddc.js"}');
  // Exports:
  return {
    stop_propagation__stop_propagation: stop_propagation__stop_propagation
  };
});

//# sourceMappingURL=stop_propagation.ddc.js.map