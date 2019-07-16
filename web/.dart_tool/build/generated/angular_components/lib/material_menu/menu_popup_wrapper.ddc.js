define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/accepts_width', 'packages/angular_components/model/menu/menu'], function(dart_sdk, observable, properties, accepts_width, menu) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__observable__observable = observable.model__observable__observable;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const model__menu__menu = menu.model__menu__menu;
  const material_menu__menu_popup_wrapper = Object.create(dart.library);
  let ObservableReferenceOfExpandAction = () => (ObservableReferenceOfExpandAction = dart.constFn(model__observable__observable.ObservableReference$(material_menu__menu_popup_wrapper.ExpandAction)))();
  let ExpandActionTobool = () => (ExpandActionTobool = dart.constFn(dart.fnType(core.bool, [material_menu__menu_popup_wrapper.ExpandAction])))();
  let StreamOfbool = () => (StreamOfbool = dart.constFn(async.Stream$(core.bool)))();
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  const _focusIndexOnExpand = dart.privateName(material_menu__menu_popup_wrapper, "_focusIndexOnExpand");
  material_menu__menu_popup_wrapper.ExpandAction = class ExpandAction extends core.Object {
    get activateFirstItemOnExpand() {
      return this[_focusIndexOnExpand] === 0;
    }
    get activateLastItemOnExpand() {
      return this[_focusIndexOnExpand] === -1;
    }
  };
  (material_menu__menu_popup_wrapper.ExpandAction.withFirstItemFocused = function() {
    this[_focusIndexOnExpand] = 0;
  }).prototype = material_menu__menu_popup_wrapper.ExpandAction.prototype;
  (material_menu__menu_popup_wrapper.ExpandAction.withLastItemFocused = function() {
    this[_focusIndexOnExpand] = -1;
  }).prototype = material_menu__menu_popup_wrapper.ExpandAction.prototype;
  (material_menu__menu_popup_wrapper.ExpandAction.withNoFocus = function() {
    this[_focusIndexOnExpand] = null;
  }).prototype = material_menu__menu_popup_wrapper.ExpandAction.prototype;
  dart.addTypeTests(material_menu__menu_popup_wrapper.ExpandAction);
  dart.setGetterSignature(material_menu__menu_popup_wrapper.ExpandAction, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup_wrapper.ExpandAction.__proto__),
    activateFirstItemOnExpand: core.bool,
    activateLastItemOnExpand: core.bool
  }));
  dart.setLibraryUri(material_menu__menu_popup_wrapper.ExpandAction, "package:angular_components/material_menu/menu_popup_wrapper.dart");
  dart.setFieldSignature(material_menu__menu_popup_wrapper.ExpandAction, () => ({
    __proto__: dart.getFields(material_menu__menu_popup_wrapper.ExpandAction.__proto__),
    [_focusIndexOnExpand]: dart.finalFieldType(core.int)
  }));
  const _expandAction = dart.privateName(material_menu__menu_popup_wrapper, "_expandAction");
  const _width = dart.privateName(material_menu__menu_popup_wrapper, "_width");
  let const$;
  material_menu__menu_popup_wrapper.MenuPopupWrapper = class MenuPopupWrapper extends core.Object {
    get menu() {
      return this[menu$];
    }
    set menu(value) {
      this[menu$] = value;
    }
    set isExpanded(value) {
      if (core.identical(this.isExpanded, value)) return;
      if (dart.test(utils__angular__properties__properties.getBool(value))) {
        let t = this.expandAction;
        t == null ? this.expandAction = const$ || (const$ = dart.const(new material_menu__menu_popup_wrapper.ExpandAction.withNoFocus())) : t;
      } else {
        this.expandAction = null;
      }
    }
    set expandAction(value) {
      if (dart.equals(this[_expandAction].value, value)) return;
      this[_expandAction].value = value;
    }
    get isExpanded() {
      return this.expandAction != null;
    }
    get expandAction() {
      return this[_expandAction].value;
    }
    get activateFirstItemOnExpand() {
      let t = this.expandAction;
      let l = t == null ? null : t.activateFirstItemOnExpand;
      return l != null ? l : false;
    }
    get activateLastItemOnExpand() {
      let t = this.expandAction;
      let l = t == null ? null : t.activateLastItemOnExpand;
      return l != null ? l : false;
    }
    get isExpandedChange() {
      return StreamOfbool()._check(this[_expandAction].stream.map(core.bool, dart.fn(_ => this.isExpanded, ExpandActionTobool())));
    }
    get expandActionChange() {
      return this[_expandAction].stream;
    }
    get width() {
      let t = this.menu;
      let l = t == null ? null : t.width;
      return l != null ? l : this[_width];
    }
    set width(val) {
      this[_width] = utils__angular__properties__properties.getInt(val, {defaultValue: 0});
      if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/material_menu/menu_popup_wrapper.dart", 104, 12, "_width >= 0 && _width <= 5");
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
  };
  (material_menu__menu_popup_wrapper.MenuPopupWrapper.new = function() {
    this[_expandAction] = new (ObservableReferenceOfExpandAction()).new(null);
    this[menu$] = null;
    this[_width] = 0;
    this[preferredPositions] = null;
  }).prototype = material_menu__menu_popup_wrapper.MenuPopupWrapper.prototype;
  dart.addTypeTests(material_menu__menu_popup_wrapper.MenuPopupWrapper);
  const menu$ = Symbol("MenuPopupWrapper.menu");
  const preferredPositions = Symbol("MenuPopupWrapper.preferredPositions");
  material_menu__menu_popup_wrapper.MenuPopupWrapper[dart.implements] = () => [model__ui__accepts_width.AcceptsWidth];
  dart.setGetterSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: core.bool,
    expandAction: material_menu__menu_popup_wrapper.ExpandAction,
    activateFirstItemOnExpand: core.bool,
    activateLastItemOnExpand: core.bool,
    isExpandedChange: async.Stream$(core.bool),
    expandActionChange: async.Stream$(material_menu__menu_popup_wrapper.ExpandAction),
    width: core.int
  }));
  dart.setSetterSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getSetters(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    isExpanded: dart.dynamic,
    expandAction: material_menu__menu_popup_wrapper.ExpandAction,
    width: dart.dynamic
  }));
  dart.setLibraryUri(material_menu__menu_popup_wrapper.MenuPopupWrapper, "package:angular_components/material_menu/menu_popup_wrapper.dart");
  dart.setFieldSignature(material_menu__menu_popup_wrapper.MenuPopupWrapper, () => ({
    __proto__: dart.getFields(material_menu__menu_popup_wrapper.MenuPopupWrapper.__proto__),
    [_expandAction]: dart.finalFieldType(ObservableReferenceOfExpandAction()),
    menu: dart.fieldType(model__menu__menu.MenuModel),
    [_width]: dart.fieldType(core.int),
    preferredPositions: dart.fieldType(core.Iterable)
  }));
  const _onTriggerAction = dart.privateName(material_menu__menu_popup_wrapper, "_onTriggerAction");
  let const$0;
  const _trigger = dart.privateName(material_menu__menu_popup_wrapper, "_trigger");
  let const$1;
  let const$2;
  let const$3;
  material_menu__menu_popup_wrapper.MenuPopupTrigger = class MenuPopupTrigger extends core.Object {
    get closeMenuOnClick() {
      return this[closeMenuOnClick];
    }
    set closeMenuOnClick(value) {
      this[closeMenuOnClick] = value;
    }
    get onTrigger() {
      return this[_onTriggerAction].stream;
    }
    handlePopupTriggerAction(event) {
      if (html.KeyboardEvent.is(event)) {
        this[_trigger](const$0 || (const$0 = dart.const(new material_menu__menu_popup_wrapper.ExpandAction.withFirstItemFocused())));
      } else {
        this[_trigger](const$1 || (const$1 = dart.const(new material_menu__menu_popup_wrapper.ExpandAction.withNoFocus())));
      }
    }
    handleUpKey(event) {
      this[_trigger](const$2 || (const$2 = dart.const(new material_menu__menu_popup_wrapper.ExpandAction.withLastItemFocused())));
      event.preventDefault();
    }
    handleDownKey(event) {
      this[_trigger](const$3 || (const$3 = dart.const(new material_menu__menu_popup_wrapper.ExpandAction.withFirstItemFocused())));
      event.preventDefault();
    }
    [_trigger](action) {
      if (dart.test(this.closeMenuOnClick) && dart.test(this.isExpanded)) {
        this.expandAction = null;
      } else {
        this.expandAction = action;
      }
      this[_onTriggerAction].add(null);
    }
  };
  (material_menu__menu_popup_wrapper.MenuPopupTrigger.new = function() {
    this[_onTriggerAction] = StreamControllerOfvoid().new();
    this[closeMenuOnClick] = false;
  }).prototype = material_menu__menu_popup_wrapper.MenuPopupTrigger.prototype;
  dart.addTypeTests(material_menu__menu_popup_wrapper.MenuPopupTrigger);
  const closeMenuOnClick = Symbol("MenuPopupTrigger.closeMenuOnClick");
  dart.setMethodSignature(material_menu__menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup_wrapper.MenuPopupTrigger.__proto__),
    handlePopupTriggerAction: dart.fnType(dart.void, [html.UIEvent]),
    handleUpKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleDownKey: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_trigger]: dart.fnType(dart.void, [material_menu__menu_popup_wrapper.ExpandAction])
  }));
  dart.setGetterSignature(material_menu__menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup_wrapper.MenuPopupTrigger.__proto__),
    onTrigger: async.Stream$(dart.void)
  }));
  dart.setLibraryUri(material_menu__menu_popup_wrapper.MenuPopupTrigger, "package:angular_components/material_menu/menu_popup_wrapper.dart");
  dart.setFieldSignature(material_menu__menu_popup_wrapper.MenuPopupTrigger, () => ({
    __proto__: dart.getFields(material_menu__menu_popup_wrapper.MenuPopupTrigger.__proto__),
    [_onTriggerAction]: dart.finalFieldType(StreamControllerOfvoid()),
    closeMenuOnClick: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_popup_wrapper.ddc", {
    "package:angular_components/material_menu/menu_popup_wrapper.dart": material_menu__menu_popup_wrapper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup_wrapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YA0BwC,0BAAmB,KAAI;IAAC;;YACzB,0BAAmB,KAAI,CAAC;IAAC;;;IAPlB,yBAAmB,GAAG;EAAC;;IAExB,yBAAmB,GAAG,CAAC;EAAC;;IAEhC,yBAAmB,GAAG;EAAI;;;;;;;;;;;;;;;;IAYnD;;;;;;mBAQK,KAAK;AAClB,yBAAI,eAAU,EAAI,KAAK,GAAE;AAEzB,oBAAI,8CAAO,CAAC,KAAK,IAAG;AAClB,iCAAY;wCAAK,mCAAM,0DAAwB;aAC1C;AACL,yBAAY,GAAG;;IAEnB;qBAQiB,KAAkB;AACjC,sBAAI,mBAAa,MAAM,EAAI,KAAK,GAAE;AAElC,yBAAa,MAAM,GAAG,KAAK;IAC7B;;YAGuB,kBAAY,IAAI;IAAI;;YAEV,oBAAa,MAAM;;;cAKhD,iBAAY;;6BAA+B;IAAK;;cAKhD,iBAAY;;6BAA8B;IAAK;;mCAK/C,mBAAa,OAAO,IAAI,YAAC,QAAC,CAAC,IAAK,eAAU;IAAC;;YAMA,oBAAa,OAAO;;;cAMlD,SAAI;;6BAAW,YAAM;;cAK5B,GAAG;AACX,kBAAM,GAAG,6CAAM,CAAC,GAAG,iBAAgB;AACnC,YAAc,AAAK,aAAZ,YAAM,KAAI,KAAY,aAAP,YAAM,KAAI;IAClC;IAQS;;;;;;;;IAhFH,mBAAa,OAAG,yCAAiC,CAAC;IAI9C,WAAI;IAsEV,YAAM,GAAG;IAMJ,wBAAkB;EAC7B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBO;;;;;;;YAIyB,uBAAgB,OAAO;;6BASvB,KAAa;AACzC,gCAAI,KAAK,GAAmB;AAC1B,sBAAQ,CAAC,qCAAM,mEAAiC;aAC3C;AACL,sBAAQ,CAAC,qCAAM,0DAAwB;;IAE3C;gBAIiB,KAAmB;AAClC,oBAAQ,CAAC,qCAAM,kEAAgC;AAE/C,WAAK,eAAe;IACtB;kBAImB,KAAmB;AACpC,oBAAQ,CAAC,qCAAM,mEAAiC;AAEhD,WAAK,eAAe;IACtB;eAEc,MAAmB;AAC/B,oBAAI,qBAAgB,eAAI,eAAU,GAAE;AAClC,yBAAY,GAAG;aACV;AACL,yBAAY,GAAG,MAAM;;AAEvB,4BAAgB,IAAI,CAAC;IACvB;;;IApDM,sBAAgB,GAAG,4BAAsB;IAQ1C,sBAAgB,GAAG;EA6C1B","file":"menu_popup_wrapper.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup_wrapper: material_menu__menu_popup_wrapper
  };
});

//# sourceMappingURL=menu_popup_wrapper.ddc.js.map
