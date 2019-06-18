define(['dart_sdk', 'packages/angular_components/material_menu/common/menu_root.template'], function(dart_sdk, menu_root) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__common__menu_root$46template = menu_root.material_menu__common__menu_root$46template;
  const material_menu__menu_root$46template = Object.create(dart.library);
  dart.defineLazy(material_menu__menu_root$46template, {
    /*material_menu__menu_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_root$46template.initReflector = function() {
    if (dart.test(material_menu__menu_root$46template._visited)) {
      return;
    }
    material_menu__menu_root$46template._visited = true;
    material_menu__common__menu_root$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/menu_root.template.ddc", {
    "package:angular_components/material_menu/menu_root.template.dart": material_menu__menu_root$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_root.template.dart"],"names":[],"mappings":";;;;;;;;MAQI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,yDAAa;EACrB","file":"menu_root.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_root$46template: material_menu__menu_root$46template
  };
});

//# sourceMappingURL=menu_root.template.ddc.js.map
