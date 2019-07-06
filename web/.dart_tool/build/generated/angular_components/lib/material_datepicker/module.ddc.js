define(['dart_sdk', 'packages/quiver/time', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/laminate/popup/module', 'packages/angular_components/model/date/time_zone_aware_clock'], function(dart_sdk, time, change_detection, module, time_zone_aware_clock) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time$ = time.time;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__providers = change_detection.src__di__providers;
  const laminate__popup__module = module.laminate__popup__module;
  const model__date__time_zone_aware_clock = time_zone_aware_clock.model__date__time_zone_aware_clock;
  const material_datepicker__module = Object.create(dart.library);
  dart.defineLazy(material_datepicker__module, {
    /*material_datepicker__module.clockValue*/get clockValue() {
      return dart.const(new time$.Clock.new());
    },
    /*material_datepicker__module.datepickerClock*/get datepickerClock() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"));
    },
    /*material_datepicker__module.datepickerBindings*/get datepickerBindings() {
      return dart.constList([laminate__popup__module.popupBindings, material_datepicker__module._legacyClockBinding, dart.const(src__di__providers.ExistingProvider.forToken(material_datepicker__module.datepickerClock, dart.wrapType(time$.Clock)))], core.Object);
    },
    /*material_datepicker__module.timeZoneAwareDatepickerProviders*/get timeZoneAwareDatepickerProviders() {
      return dart.constList([material_datepicker__module._legacyClockBinding, model__date__time_zone_aware_clock.timeZoneAwareClockProviders, dart.const(src__di__providers.ExistingProvider.forToken(material_datepicker__module.datepickerClock, model__date__time_zone_aware_clock.timeZoneAwareClock))], core.Object);
    },
    /*material_datepicker__module._legacyClockBinding*/get _legacyClockBinding() {
      return dart.const(src__di__providers.Provider.new(dart.wrapType(time$.Clock), {useValue: material_datepicker__module.clockValue}));
    },
    /*material_datepicker__module.defaultDateRange*/get defaultDateRange() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("defaultDateRange"));
    },
    /*material_datepicker__module.defaultDateComparison*/get defaultDateComparison() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("defaultDateComparison"));
    }
  });
  dart.trackLibraries("packages/angular_components/material_datepicker/module.ddc", {
    "package:angular_components/material_datepicker/module.dart": material_datepicker__module
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;MAWM,sCAAU;4BAAG,eAAK;;MAElB,2CAAe;4BACjB,2CAAW,CAAC;;MAOV,8CAAkB;YAAG,iBACzB,qCAAa,EACb,+CAAmB,aACnB,4CAAyB,CAAC,2CAAe,EAAE,0BAAK;;MAc5C,4DAAgC;YAAG,iBACvC,+CAAmB,EACnB,8DAA2B,aAC3B,4CAAyB,CAAC,2CAAe,EAAE,qDAAkB;;MAMzD,+CAAmB;wBAAG,+BAAQ,CAAC,0BAAK,aAAY,sCAAU;;MAI1D,4CAAgB;4BAAG,2CAAW,CAAC;;MAK/B,iDAAqB;4BAAG,2CAAW,CAAC","file":"module.ddc.js"}');
  // Exports:
  return {
    material_datepicker__module: material_datepicker__module
  };
});

//# sourceMappingURL=module.ddc.js.map
