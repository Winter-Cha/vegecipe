define(['dart_sdk', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, tooltip_controller, change_detection, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const src__di__providers = change_detection.src__di__providers;
  const src__di__module = change_detection.src__di__module;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = Object.create(dart.library);
  let TooltipControllerAndDisposerToTooltipController = () => (TooltipControllerAndDisposerToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [src__material_tooltip__tooltip_controller.TooltipController, utils__disposer__disposer.Disposer])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  dart.defineLazy(material_tooltip__module, {
    /*material_tooltip__module.materialTooltipBindings*/get materialTooltipBindings() {
      return dart.constList([dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController)))], src__di__providers.ClassProvider);
    },
    /*material_tooltip__module.materialTooltipModule*/get materialTooltipModule() {
      return dart.const(src__di__module.Module.new({provide: material_tooltip__module.materialTooltipBindings}));
    },
    /*material_tooltip__module.tooltipControllerBinding*/get tooltipControllerBinding() {
      return dart.const(src__di__providers.FactoryProvider.new(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(material_tooltip__module.createTooltipController, TooltipControllerAndDisposerToTooltipController()), {deps: dart.constList([dart.constList([dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.const(new src__core__di__decorators.Optional.new()), dart.const(new src__core__di__decorators.SkipSelf.new())], core.Object), dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), dart.const(new src__core__di__decorators.Optional.new())], core.Object)], core.Object)}));
    },
    /*material_tooltip__module._singletonController*/get _singletonController() {
      return null;
    },
    set _singletonController(_) {}
  });
  material_tooltip__module.createTooltipController = function(controller, disposer) {
    if (controller != null) return controller;
    if (material_tooltip__module._singletonController != null) return material_tooltip__module._singletonController;
    material_tooltip__module._singletonController = new src__material_tooltip__tooltip_controller.TooltipController.new();
    disposer == null ? null : disposer.addFunction(dart.fn(() => {
      material_tooltip__module._singletonController = null;
    }, VoidToNull()));
    return material_tooltip__module._singletonController;
  };
  dart.trackLibraries("packages/angular_components/material_tooltip/module.ddc", {
    "package:angular_components/material_tooltip/module.dart": material_tooltip__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAQM,gDAAuB;YAAG,4BAAC,oCAAa,CAAC,0EAAiB;;MAE1D,8CAAqB;wBAAG,0BAAM,WAAU,gDAAuB;;MAW/D,iDAAwB;wBAAG,sCAAe,CAC9C,0EAAiB,EACjB,4GAAuB,SACjB,gBACJ,gBAAC,0EAAiB,iBAAE,sCAAQ,oBAAI,sCAAQ,oBACxC,gBAAC,iDAAQ,iBAAE,sCAAQ;;MAML,6CAAoB;;;;;8DAIlC,UAAoD,EACpD,QAA6B;AAG/B,QAAI,UAAU,IAAI,MAAM,MAAO,WAAU;AAEzC,QAAI,6CAAoB,IAAI,MAAM,MAAO,8CAAoB;AAE7D,wDAAuB,+DAAiB;AACxC,YAAQ,kBAAR,QAAQ,YAAa,CAAC;AACpB,sDAAuB;;AAEzB,UAAO,8CAAoB;EAC7B","file":"module.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module: material_tooltip__module
  };
});

//# sourceMappingURL=module.ddc.js.map
