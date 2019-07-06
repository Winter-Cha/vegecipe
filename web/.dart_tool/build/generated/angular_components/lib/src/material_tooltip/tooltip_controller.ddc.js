define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__tooltip_controller = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let LinkedMapOfTooltip$Timer = () => (LinkedMapOfTooltip$Timer = dart.constFn(_js_helper.LinkedMap$(src__material_tooltip__tooltip_controller.Tooltip, async.Timer)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MapOfTooltip$Timer = () => (MapOfTooltip$Timer = dart.constFn(core.Map$(src__material_tooltip__tooltip_controller.Tooltip, async.Timer)))();
  src__material_tooltip__tooltip_controller.Tooltip = class Tooltip extends core.Object {};
  (src__material_tooltip__tooltip_controller.Tooltip.new = function() {
  }).prototype = src__material_tooltip__tooltip_controller.Tooltip.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller.Tooltip);
  dart.setLibraryUri(src__material_tooltip__tooltip_controller.Tooltip, "package:angular_components/src/material_tooltip/tooltip_controller.dart");
  const _activeTooltip = dart.privateName(src__material_tooltip__tooltip_controller, "_activeTooltip");
  const _closeTimerByTooltip = dart.privateName(src__material_tooltip__tooltip_controller, "_closeTimerByTooltip");
  const _cancelTooltipCloseTimer = dart.privateName(src__material_tooltip__tooltip_controller, "_cancelTooltipCloseTimer");
  src__material_tooltip__tooltip_controller.TooltipController = class TooltipController extends core.Object {
    activate(tooltip) {
      if (tooltip == null || dart.equals(tooltip, this[_activeTooltip])) return;
      let t = this[_activeTooltip];
      t == null ? null : t.deactivate();
      tooltip.activate();
      this[_activeTooltip] = tooltip;
    }
    deactivate(tooltip) {
      if (tooltip == null) return;
      let tooltipToClose = tooltip;
      let t = this[_closeTimerByTooltip][$_get](tooltipToClose);
      t == null ? null : t.cancel();
      this[_closeTimerByTooltip][$_set](tooltipToClose, async.Timer.new(src__material_tooltip__tooltip_controller.keepAliveDuration, dart.fn(() => {
        tooltipToClose.deactivate();
        if (dart.equals(tooltipToClose, this[_activeTooltip])) this[_activeTooltip] = null;
        this[_closeTimerByTooltip][$remove](tooltipToClose);
      }, VoidToNull())));
    }
    deactivateImmediately(tooltip) {
      tooltip == null ? null : tooltip.deactivate();
      if (dart.equals(tooltip, this[_activeTooltip])) this[_activeTooltip] = null;
    }
    keepOpen(tooltip) {
      if (!dart.equals(tooltip, this[_activeTooltip])) return;
      this[_cancelTooltipCloseTimer](tooltip);
    }
    [_cancelTooltipCloseTimer](tooltip) {
      let t = this[_closeTimerByTooltip][$_get](tooltip);
      t == null ? null : t.cancel();
      this[_closeTimerByTooltip][$remove](tooltip);
    }
    proxyFor(tooltip) {
      return new src__material_tooltip__tooltip_controller._ProxyTooltip.new(tooltip, this);
    }
  };
  (src__material_tooltip__tooltip_controller.TooltipController.new = function() {
    this[_activeTooltip] = null;
    this[_closeTimerByTooltip] = new (LinkedMapOfTooltip$Timer()).new();
  }).prototype = src__material_tooltip__tooltip_controller.TooltipController.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller.TooltipController);
  dart.setMethodSignature(src__material_tooltip__tooltip_controller.TooltipController, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_controller.TooltipController.__proto__),
    activate: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    deactivate: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    deactivateImmediately: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    keepOpen: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    [_cancelTooltipCloseTimer]: dart.fnType(dart.void, [src__material_tooltip__tooltip_controller.Tooltip]),
    proxyFor: dart.fnType(src__material_tooltip__tooltip_controller.Tooltip, [src__material_tooltip__tooltip_controller.Tooltip])
  }));
  dart.setLibraryUri(src__material_tooltip__tooltip_controller.TooltipController, "package:angular_components/src/material_tooltip/tooltip_controller.dart");
  dart.setFieldSignature(src__material_tooltip__tooltip_controller.TooltipController, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_controller.TooltipController.__proto__),
    [_activeTooltip]: dart.fieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_closeTimerByTooltip]: dart.fieldType(MapOfTooltip$Timer())
  }));
  dart.defineLazy(src__material_tooltip__tooltip_controller, {
    /*src__material_tooltip__tooltip_controller.keepAliveDuration*/get keepAliveDuration() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  const _tooltip = dart.privateName(src__material_tooltip__tooltip_controller, "_tooltip");
  const _controller = dart.privateName(src__material_tooltip__tooltip_controller, "_controller");
  src__material_tooltip__tooltip_controller._ProxyTooltip = class _ProxyTooltip extends core.Object {
    activate() {
      this[_controller].activate(this[_tooltip]);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      if (dart.test(immediate)) {
        this[_controller].deactivateImmediately(this[_tooltip]);
      } else {
        this[_controller].deactivate(this[_tooltip]);
      }
    }
  };
  (src__material_tooltip__tooltip_controller._ProxyTooltip.new = function(tooltip, controller) {
    this[_tooltip] = tooltip;
    this[_controller] = controller;
  }).prototype = src__material_tooltip__tooltip_controller._ProxyTooltip.prototype;
  dart.addTypeTests(src__material_tooltip__tooltip_controller._ProxyTooltip);
  src__material_tooltip__tooltip_controller._ProxyTooltip[dart.implements] = () => [src__material_tooltip__tooltip_controller.Tooltip];
  dart.setMethodSignature(src__material_tooltip__tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getMethods(src__material_tooltip__tooltip_controller._ProxyTooltip.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: core.bool})
  }));
  dart.setLibraryUri(src__material_tooltip__tooltip_controller._ProxyTooltip, "package:angular_components/src/material_tooltip/tooltip_controller.dart");
  dart.setFieldSignature(src__material_tooltip__tooltip_controller._ProxyTooltip, () => ({
    __proto__: dart.getFields(src__material_tooltip__tooltip_controller._ProxyTooltip.__proto__),
    [_tooltip]: dart.finalFieldType(src__material_tooltip__tooltip_controller.Tooltip),
    [_controller]: dart.finalFieldType(src__material_tooltip__tooltip_controller.TooltipController)
  }));
  dart.trackLibraries("packages/angular_components/src/material_tooltip/tooltip_controller.ddc", {
    "package:angular_components/src/material_tooltip/tooltip_controller.dart": src__material_tooltip__tooltip_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;EAoBA;;;;;;;aAUgB,OAAe;AAC3B,UAAI,OAAO,IAAI,oBAAQ,OAAO,EAAI,oBAAc,GAAE;AAClD,kCAAc;;AACd,MAAwB,AAAE,gBAAQ;0BAApB,GAAG,OAAO;IAC1B;eAMgB,OAAe;AAC7B,UAAI,OAAO,IAAI,MAAM;AAGrB,UAAM,iBAAiB,OAAO;AAC9B,wCAAoB,QAAC,cAAc;;AACnC,gCAAoB,QAAC,cAAc,EAAI,eAAK,CAAC,2DAAiB,EAAE;AAC9D,sBAAc,WAAW;AACzB,wBAAI,cAAc,EAAI,oBAAc,GAAE,oBAAc,GAAG;AACvD,kCAAoB,SAAO,CAAC,cAAc;;IAE9C;0BAG2B,OAAe;AACxC,aAAO,kBAAP,OAAO,WAAY;AACnB,sBAAI,OAAO,EAAI,oBAAc,GAAE,oBAAc,GAAG;IAClD;aAEc,OAAe;AAC3B,uBAAI,OAAO,EAAI,oBAAc,GAAE;AAC/B,oCAAwB,CAAC,OAAO;IAClC;+BAE8B,OAAe;AAC3C,wCAAoB,QAAC,OAAO;;AAC5B,gCAAoB,SAAO,CAAC,OAAO;IACrC;aAQiB,OAAe;iBAAK,2DAAa,CAAC,OAAO,EAAE;IAAK;;;IALzD,oBAAc;IAGlB,0BAAoB,GAAG;EAG7B;;;;;;;;;;;;;;;;;;MAEM,2DAAiB;4BAAG,iBAAQ,gBAAe;;;;;;;AAU7C,uBAAW,SAAS,CAAC,cAAQ;IAC/B;;UAGsB,2DAAY;AAChC,oBAAI,SAAS,GAAE;AACb,yBAAW,sBAAsB,CAAC,cAAQ;aACrC;AACL,yBAAW,WAAW,CAAC,cAAQ;;IAEnC;;;IAdmB,cAAQ;IAAO,iBAAW;EAAC","file":"tooltip_controller.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_controller: src__material_tooltip__tooltip_controller
  };
});

//# sourceMappingURL=tooltip_controller.ddc.js.map
