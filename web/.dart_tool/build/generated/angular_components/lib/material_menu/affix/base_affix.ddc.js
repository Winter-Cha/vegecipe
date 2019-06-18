define(['dart_sdk', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, has_renderer, has_disabled, menu_item_affix, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_menu__affix__base_affix = Object.create(dart.library);
  const _is_BaseAffixComponent_default = Symbol('_is_BaseAffixComponent_default');
  material_menu__affix__base_affix.BaseAffixComponent$ = dart.generic(ModelType => {
    let RendersValueOfModelType = () => (RendersValueOfModelType = dart.constFn(model__ui__has_renderer.RendersValue$(ModelType)))();
    class BaseAffixComponent extends core.Object {}
    (BaseAffixComponent.new = function() {
    }).prototype = BaseAffixComponent.prototype;
    dart.addTypeTests(BaseAffixComponent);
    BaseAffixComponent.prototype[_is_BaseAffixComponent_default] = true;
    BaseAffixComponent[dart.implements] = () => [RendersValueOfModelType(), interfaces__has_disabled.HasDisabled];
    return BaseAffixComponent;
  });
  material_menu__affix__base_affix.BaseAffixComponent = material_menu__affix__base_affix.BaseAffixComponent$();
  dart.addTypeTests(material_menu__affix__base_affix.BaseAffixComponent, _is_BaseAffixComponent_default);
  material_menu__affix__base_affix.BaseMenuItemAffixModel = class BaseMenuItemAffixModel extends model__menu__menu_item_affix.MenuItemAffix$(src__core__linker__component_factory.ComponentFactory$(material_menu__affix__base_affix.BaseAffixComponent$(model__menu__menu_item_affix.MenuItemAffix))) {};
  (material_menu__affix__base_affix.BaseMenuItemAffixModel.new = function() {
    material_menu__affix__base_affix.BaseMenuItemAffixModel.__proto__.new.call(this);
  }).prototype = material_menu__affix__base_affix.BaseMenuItemAffixModel.prototype;
  dart.addTypeTests(material_menu__affix__base_affix.BaseMenuItemAffixModel);
  dart.trackLibraries("packages/angular_components/material_menu/affix/base_affix.ddc", {
    "package:angular_components/material_menu/affix/base_affix.dart": material_menu__affix__base_affix
  }, '{"version":3,"sourceRoot":"","sources":["base_affix.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAaA;;;;;;;;;;;EAOgC","file":"base_affix.ddc.js"}');
  // Exports:
  return {
    material_menu__affix__base_affix: material_menu__affix__base_affix
  };
});

//# sourceMappingURL=base_affix.ddc.js.map
