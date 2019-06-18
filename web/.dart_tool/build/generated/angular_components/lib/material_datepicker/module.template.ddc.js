define(['dart_sdk', 'packages/angular_components/material_datepicker/model.template', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/model/date/time_zone_aware_clock.template'], function(dart_sdk, model, angular, module, time_zone_aware_clock) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__model$46template = model.material_datepicker__model$46template;
  const angular$46template = angular.angular$46template;
  const laminate__popup__module$46template = module.laminate__popup__module$46template;
  const model__date__time_zone_aware_clock$46template = time_zone_aware_clock.model__date__time_zone_aware_clock$46template;
  const material_datepicker__module$46template = Object.create(dart.library);
  dart.defineLazy(material_datepicker__module$46template, {
    /*material_datepicker__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__module$46template.initReflector = function() {
    if (dart.test(material_datepicker__module$46template._visited)) {
      return;
    }
    material_datepicker__module$46template._visited = true;
    material_datepicker__model$46template.initReflector();
    angular$46template.initReflector();
    laminate__popup__module$46template.initReflector();
    model__date__time_zone_aware_clock$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/module.template.ddc", {
    "package:angular_components/material_datepicker/module.template.dart": material_datepicker__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,2DAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__module$46template: material_datepicker__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
