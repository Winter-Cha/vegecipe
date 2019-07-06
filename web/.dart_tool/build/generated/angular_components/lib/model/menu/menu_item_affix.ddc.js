define(['dart_sdk', 'packages/angular_components/model/ui/icon'], function(dart_sdk, icon) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const model__menu__menu_item_affix = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _is_MenuItemAffix_default = Symbol('_is_MenuItemAffix_default');
  model__menu__menu_item_affix.MenuItemAffix$ = dart.generic(FactoryType => {
    class MenuItemAffix extends core.Object {
      get isVisibleOnHover() {
        return this.visibility === model__menu__menu_item_affix.IconVisibility.hover;
      }
      get isVisible() {
        return this.visibility !== model__menu__menu_item_affix.IconVisibility.hidden;
      }
    }
    (MenuItemAffix.new = function() {
    }).prototype = MenuItemAffix.prototype;
    dart.addTypeTests(MenuItemAffix);
    MenuItemAffix.prototype[_is_MenuItemAffix_default] = true;
    dart.setGetterSignature(MenuItemAffix, () => ({
      __proto__: dart.getGetters(MenuItemAffix.__proto__),
      isVisibleOnHover: core.bool,
      isVisible: core.bool
    }));
    dart.setLibraryUri(MenuItemAffix, "package:angular_components/model/menu/menu_item_affix.dart");
    return MenuItemAffix;
  });
  model__menu__menu_item_affix.MenuItemAffix = model__menu__menu_item_affix.MenuItemAffix$();
  dart.addTypeTests(model__menu__menu_item_affix.MenuItemAffix, _is_MenuItemAffix_default);
  model__menu__menu_item_affix.IconWithAction = class IconWithAction extends model__ui__icon.Icon {
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get ariaLabel() {
      return this[ariaLabel$];
    }
    set ariaLabel(value) {
      super.ariaLabel = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get shouldCloseMenuOnTrigger() {
      return this[shouldCloseMenuOnTrigger$];
    }
    set shouldCloseMenuOnTrigger(value) {
      super.shouldCloseMenuOnTrigger = value;
    }
  };
  (model__menu__menu_item_affix.IconWithAction.new = function(name, action, ariaLabel, keyCode, opts) {
    let shouldCloseMenuOnTrigger = opts && 'shouldCloseMenuOnTrigger' in opts ? opts.shouldCloseMenuOnTrigger : false;
    this[action$] = action;
    this[ariaLabel$] = ariaLabel;
    this[keyCode$] = keyCode;
    this[shouldCloseMenuOnTrigger$] = shouldCloseMenuOnTrigger;
    model__menu__menu_item_affix.IconWithAction.__proto__.new.call(this, name);
  }).prototype = model__menu__menu_item_affix.IconWithAction.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.IconWithAction);
  const action$ = Symbol("IconWithAction.action");
  const ariaLabel$ = Symbol("IconWithAction.ariaLabel");
  const keyCode$ = Symbol("IconWithAction.keyCode");
  const shouldCloseMenuOnTrigger$ = Symbol("IconWithAction.shouldCloseMenuOnTrigger");
  dart.setLibraryUri(model__menu__menu_item_affix.IconWithAction, "package:angular_components/model/menu/menu_item_affix.dart");
  dart.setFieldSignature(model__menu__menu_item_affix.IconWithAction, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.IconWithAction.__proto__),
    action: dart.finalFieldType(VoidTovoid()),
    ariaLabel: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    shouldCloseMenuOnTrigger: dart.finalFieldType(core.bool)
  }));
  model__menu__menu_item_affix.IconVisibility = class IconVisibility extends core.Object {
    toString() {
      return {
        0: "IconVisibility.hidden",
        1: "IconVisibility.hover",
        2: "IconVisibility.visible"
      }[this.index];
    }
  };
  (model__menu__menu_item_affix.IconVisibility.new = function(x) {
    this.index = x;
  }).prototype = model__menu__menu_item_affix.IconVisibility.prototype;
  dart.addTypeTests(model__menu__menu_item_affix.IconVisibility);
  dart.setLibraryUri(model__menu__menu_item_affix.IconVisibility, "package:angular_components/model/menu/menu_item_affix.dart");
  dart.setFieldSignature(model__menu__menu_item_affix.IconVisibility, () => ({
    __proto__: dart.getFields(model__menu__menu_item_affix.IconVisibility.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(model__menu__menu_item_affix.IconVisibility, ['toString']);
  model__menu__menu_item_affix.IconVisibility.hidden = dart.const(new model__menu__menu_item_affix.IconVisibility.new(0));
  model__menu__menu_item_affix.IconVisibility.hover = dart.const(new model__menu__menu_item_affix.IconVisibility.new(1));
  model__menu__menu_item_affix.IconVisibility.visible = dart.const(new model__menu__menu_item_affix.IconVisibility.new(2));
  model__menu__menu_item_affix.IconVisibility.values = dart.constList([model__menu__menu_item_affix.IconVisibility.hidden, model__menu__menu_item_affix.IconVisibility.hover, model__menu__menu_item_affix.IconVisibility.visible], model__menu__menu_item_affix.IconVisibility);
  dart.trackLibraries("packages/angular_components/model/menu/menu_item_affix.ddc", {
    "package:angular_components/model/menu/menu_item_affix.dart": model__menu__menu_item_affix
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix.dart"],"names":[],"mappings":";;;;;;;;;;;;cAe+B,gBAAU,KAAI,2CAAc,MAAM;;;cACzC,gBAAU,KAAI,2CAAc,OAAO;;;;IALpC;;;;;;;;;;;;;;IA0BJ;;;;;;IACJ;;;;;;IACH;;;;;;IAGC;;;;;;;8DAEI,IAAW,EAAE,MAAW,EAAE,SAAc,EAAE,OAAY;QAC3D,wGAA2B;IADJ,aAAM,GAAN,MAAM;IAAO,gBAAS,GAAT,SAAS;IAAO,cAAO,GAAP,OAAO;IAC3D,+BAAwB,GAAxB,wBAAwB;AAC5B,yEAAM,IAAI;EAAC","file":"menu_item_affix.ddc.js"}');
  // Exports:
  return {
    model__menu__menu_item_affix: model__menu__menu_item_affix
  };
});

//# sourceMappingURL=menu_item_affix.ddc.js.map
