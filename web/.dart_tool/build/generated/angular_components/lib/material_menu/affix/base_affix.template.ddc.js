define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/model/ui/has_renderer.template'], function(dart_sdk, angular, has_disabled, menu_item_affix, has_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled.interfaces__has_disabled$46template;
  const model__menu__menu_item_affix$46template = menu_item_affix.model__menu__menu_item_affix$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const material_menu__affix__base_affix$46template = Object.create(dart.library);
  dart.defineLazy(material_menu__affix__base_affix$46template, {
    /*material_menu__affix__base_affix$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__affix__base_affix$46template.initReflector = function() {
    if (dart.test(material_menu__affix__base_affix$46template._visited)) {
      return;
    }
    material_menu__affix__base_affix$46template._visited = true;
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    model__menu__menu_item_affix$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/affix/base_affix.template.ddc", {
    "package:angular_components/material_menu/affix/base_affix.template.dart": material_menu__affix__base_affix$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_affix.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAWI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,gDAAa;EACrB","file":"base_affix.template.ddc.js"}');
  // Exports:
  return {
    material_menu__affix__base_affix$46template: material_menu__affix__base_affix$46template
  };
});

//# sourceMappingURL=base_affix.template.ddc.js.map
