define(['dart_sdk', 'packages/angular_components/model/observable/observable', 'packages/angular_components/model/collection/labeled_list', 'packages/quiver/strings', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/ui/icon', 'packages/angular_components/model/ui/accepts_width', 'packages/quiver/core', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/observable', 'packages/built_collection/built_collection', 'packages/angular_components/model/ui/display_name', 'packages/angular_components/model/collection/combined_list', 'packages/angular_components/model/a11y/active_item'], function(dart_sdk, observable, labeled_list, strings, properties, icon, accepts_width, core, menu_item_affix, observable$, built_collection, display_name, combined_list, active_item) {
  'use strict';
  const core$ = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__observable__observable = observable.model__observable__observable;
  const model__collection__labeled_list = labeled_list.model__collection__labeled_list;
  const strings$ = strings.strings;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__ui__icon = icon.model__ui__icon;
  const model__ui__accepts_width = accepts_width.model__ui__accepts_width;
  const core$0 = core.core;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__observable_list = observable$.src__observable_list;
  const src__list = built_collection.src__list;
  const model__ui__display_name = display_name.model__ui__display_name;
  const model__collection__combined_list = combined_list.model__collection__combined_list;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const model__menu__menu = Object.create(dart.library);
  const $toString = dartx.toString;
  const $join = dartx.join;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $map = dartx.map;
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core$.bool)))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  let BuiltListOfString = () => (BuiltListOfString = dart.constFn(src__list.BuiltList$(core$.String)))();
  let MenuItemAffixToString = () => (MenuItemAffixToString = dart.constFn(dart.fnType(core$.String, [model__menu__menu_item_affix.MenuItemAffix])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core$.Iterable$(core$.String)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.Object)))();
  const _hasSeparator = dart.privateName(model__menu__menu, "_hasSeparator");
  const _isCollapsible = dart.privateName(model__menu__menu, "_isCollapsible");
  const _isExpanded = dart.privateName(model__menu__menu, "_isExpanded");
  const _is_MenuItemGroup_default = Symbol('_is_MenuItemGroup_default');
  model__menu__menu.MenuItemGroup$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core$.List$(T)))();
    class MenuItemGroup extends model__collection__labeled_list.LabeledList$(T) {
      get itemsRole() {
        return this[itemsRole];
      }
      set itemsRole(value) {
        super.itemsRole = value;
      }
      get hasSeparator() {
        return this[_hasSeparator].value;
      }
      set hasSeparator(value) {
        this[_hasSeparator].value = value;
      }
      get isCollapsible() {
        return this[_isCollapsible].value;
      }
      set isCollapsible(value) {
        this[_isCollapsible].value = value;
      }
      get onCollapsibleChange() {
        return this[_isCollapsible].stream;
      }
      get isExpanded() {
        return this[_isExpanded].value;
      }
      set isExpanded(value) {
        this[_isExpanded].value = value;
      }
      get onExpandedChange() {
        return this[_isExpanded].stream;
      }
    }
    (MenuItemGroup.new = function(items, label, hasSeparator, isCollapsible, isExpanded) {
      if (label === void 0) label = null;
      if (hasSeparator === void 0) hasSeparator = true;
      if (isCollapsible === void 0) isCollapsible = false;
      if (isExpanded === void 0) isExpanded = true;
      this[itemsRole] = "menuitem";
      this[_hasSeparator] = new (ObservableReferenceOfbool()).new(hasSeparator);
      this[_isCollapsible] = new (ObservableReferenceOfbool()).new(isCollapsible);
      this[_isExpanded] = new (ObservableReferenceOfbool()).new(isExpanded);
      MenuItemGroup.__proto__.withLabel.call(this, ListOfT().unmodifiable(items), label);
    }).prototype = MenuItemGroup.prototype;
    dart.addTypeTests(MenuItemGroup);
    MenuItemGroup.prototype[_is_MenuItemGroup_default] = true;
    const itemsRole = Symbol("MenuItemGroup.itemsRole");
    dart.setGetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getGetters(MenuItemGroup.__proto__),
      hasSeparator: core$.bool,
      isCollapsible: core$.bool,
      onCollapsibleChange: async.Stream$(core$.bool),
      isExpanded: core$.bool,
      onExpandedChange: async.Stream$(core$.bool)
    }));
    dart.setSetterSignature(MenuItemGroup, () => ({
      __proto__: dart.getSetters(MenuItemGroup.__proto__),
      hasSeparator: core$.bool,
      isCollapsible: core$.bool,
      isExpanded: core$.bool
    }));
    dart.setLibraryUri(MenuItemGroup, "package:angular_components/model/menu/menu.dart");
    dart.setFieldSignature(MenuItemGroup, () => ({
      __proto__: dart.getFields(MenuItemGroup.__proto__),
      [_isCollapsible]: dart.finalFieldType(ObservableReferenceOfbool()),
      [_isExpanded]: dart.finalFieldType(ObservableReferenceOfbool()),
      [_hasSeparator]: dart.finalFieldType(ObservableReferenceOfbool()),
      itemsRole: dart.finalFieldType(core$.String)
    }));
    return MenuItemGroup;
  });
  model__menu__menu.MenuItemGroup = model__menu__menu.MenuItemGroup$();
  dart.addTypeTests(model__menu__menu.MenuItemGroup, _is_MenuItemGroup_default);
  const _width = dart.privateName(model__menu__menu, "_width");
  const _is_MenuModel_default = Symbol('_is_MenuModel_default');
  model__menu__menu.MenuModel$ = dart.generic(T => {
    let MenuItemGroupOfT = () => (MenuItemGroupOfT = dart.constFn(model__menu__menu.MenuItemGroup$(T)))();
    let ListOfMenuItemGroupOfT = () => (ListOfMenuItemGroupOfT = dart.constFn(core$.List$(MenuItemGroupOfT())))();
    let JSArrayOfMenuItemGroupOfT = () => (JSArrayOfMenuItemGroupOfT = dart.constFn(_interceptors.JSArray$(MenuItemGroupOfT())))();
    class MenuModel extends core$.Object {
      get itemGroups() {
        return this[itemGroups$];
      }
      set itemGroups(value) {
        super.itemGroups = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get uiIcon() {
        return this.icon;
      }
      get hasIcon() {
        return this.icon != null;
      }
      get tooltipText() {
        return this[tooltipText$];
      }
      set tooltipText(value) {
        super.tooltipText = value;
      }
      get hasTooltip() {
        return strings$.isNotEmpty(this.tooltipText);
      }
      get width() {
        return this[_width];
      }
      set width(val) {
        if (val == null) {
          this[_width] = null;
        } else {
          this[_width] = utils__angular__properties__properties.getInt(val);
          if (!(dart.notNull(this[_width]) >= 0 && dart.notNull(this[_width]) <= 5)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/model/menu/menu.dart", 125, 14, "_width >= 0 && _width <= 5");
        }
      }
    }
    (MenuModel.new = function(itemGroups, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = ListOfMenuItemGroupOfT().unmodifiable(itemGroups);
      this.width = width;
    }).prototype = MenuModel.prototype;
    (MenuModel.flat = function(items, opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let tooltipText = opts && 'tooltipText' in opts ? opts.tooltipText : null;
      this[_width] = null;
      this[icon$] = icon;
      this[tooltipText$] = tooltipText;
      this[itemGroups$] = JSArrayOfMenuItemGroupOfT().of([new (MenuItemGroupOfT()).new(items)]);
      this.width = width;
    }).prototype = MenuModel.prototype;
    dart.addTypeTests(MenuModel);
    MenuModel.prototype[_is_MenuModel_default] = true;
    const itemGroups$ = Symbol("MenuModel.itemGroups");
    const icon$ = Symbol("MenuModel.icon");
    const tooltipText$ = Symbol("MenuModel.tooltipText");
    MenuModel[dart.implements] = () => [model__ui__icon.HasIcon, model__ui__accepts_width.AcceptsWidth];
    dart.setGetterSignature(MenuModel, () => ({
      __proto__: dart.getGetters(MenuModel.__proto__),
      uiIcon: model__ui__icon.Icon,
      hasIcon: core$.bool,
      hasTooltip: core$.bool,
      width: core$.int
    }));
    dart.setSetterSignature(MenuModel, () => ({
      __proto__: dart.getSetters(MenuModel.__proto__),
      width: dart.dynamic
    }));
    dart.setLibraryUri(MenuModel, "package:angular_components/model/menu/menu.dart");
    dart.setFieldSignature(MenuModel, () => ({
      __proto__: dart.getFields(MenuModel.__proto__),
      itemGroups: dart.finalFieldType(ListOfMenuItemGroupOfT()),
      icon: dart.finalFieldType(model__ui__icon.Icon),
      tooltipText: dart.finalFieldType(core$.String),
      [_width]: dart.fieldType(core$.int)
    }));
    return MenuModel;
  });
  model__menu__menu.MenuModel = model__menu__menu.MenuModel$();
  dart.addTypeTests(model__menu__menu.MenuModel, _is_MenuModel_default);
  let const$;
  const _noop = dart.privateName(model__menu__menu, "_noop");
  model__menu__menu.MenuItemMixin = class MenuItemMixin extends core$.Object {
    [_noop]() {}
    get nullAwareActionHandler() {
      return this.action != null ? this.action : dart.bind(this, _noop);
    }
    get hasIcon() {
      return this.icon != null;
    }
    get uiDisplayName() {
      return this.label;
    }
    get uiIcon() {
      return this.icon;
    }
    get hasSubMenu() {
      return this.subMenu != null;
    }
    get hasSecondaryLabel() {
      return this.secondaryLabel != null;
    }
    get showTooltip() {
      return strings$.isNotEmpty(this.tooltip);
    }
  };
  (model__menu__menu.MenuItemMixin.new = function() {
  }).prototype = model__menu__menu.MenuItemMixin.prototype;
  dart.addTypeTests(model__menu__menu.MenuItemMixin);
  model__menu__menu.MenuItemMixin[dart.implements] = () => [model__menu__menu._MenuItemBase];
  dart.setMethodSignature(model__menu__menu.MenuItemMixin, () => ({
    __proto__: dart.getMethods(model__menu__menu.MenuItemMixin.__proto__),
    [_noop]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(model__menu__menu.MenuItemMixin, () => ({
    __proto__: dart.getGetters(model__menu__menu.MenuItemMixin.__proto__),
    nullAwareActionHandler: core$.Function,
    hasIcon: core$.bool,
    uiDisplayName: core$.String,
    uiIcon: model__ui__icon.Icon,
    hasSubMenu: core$.bool,
    hasSecondaryLabel: core$.bool,
    showTooltip: core$.bool
  }));
  dart.setLibraryUri(model__menu__menu.MenuItemMixin, "package:angular_components/model/menu/menu.dart");
  const _is_MenuItem_default = Symbol('_is_MenuItem_default');
  model__menu__menu.MenuItem$ = dart.generic(T => {
    let MenuModelOfT = () => (MenuModelOfT = dart.constFn(model__menu__menu.MenuModel$(T)))();
    const Object_MenuItemMixin$ = class Object_MenuItemMixin extends core$.Object {};
    (Object_MenuItemMixin$.new = function() {
    }).prototype = Object_MenuItemMixin$.prototype;
    dart.applyMixin(Object_MenuItemMixin$, model__menu__menu.MenuItemMixin);
    class MenuItem extends Object_MenuItemMixin$ {
      get label() {
        return this[label$];
      }
      set label(value) {
        super.label = value;
      }
      get secondaryLabel() {
        return this[secondaryLabel$];
      }
      set secondaryLabel(value) {
        super.secondaryLabel = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get ariaLabel() {
        return this[ariaLabel$];
      }
      set ariaLabel(value) {
        super.ariaLabel = value;
      }
      get labelAnnotation() {
        return this[labelAnnotation$];
      }
      set labelAnnotation(value) {
        super.labelAnnotation = value;
      }
      get subMenu() {
        return this[subMenu$];
      }
      set subMenu(value) {
        super.subMenu = value;
      }
      get action() {
        return this[action$];
      }
      set action(value) {
        this[action$] = value;
      }
      get icon() {
        return this[icon$];
      }
      set icon(value) {
        super.icon = value;
      }
      get itemSuffixes() {
        return this[itemSuffixes$];
      }
      set itemSuffixes(value) {
        super.itemSuffixes = value;
      }
      get cssClasses() {
        return this[cssClasses$];
      }
      set cssClasses(value) {
        super.cssClasses = value;
      }
      get enabled() {
        return this[enabled$];
      }
      set enabled(value) {
        this[enabled$] = value;
      }
      toString() {
        return new (IdentityMapOfString$Object()).from(["label", this.label, "secondaryLabel", this.secondaryLabel, "labelAnnotation", this.labelAnnotation, "enabled", this.enabled, "icon", this.icon, "suffixes", IterableOfString()._check(this.itemSuffixes.map(core$.String, dart.fn(affix => dart.str(affix), MenuItemAffixToString())))[$join](",")])[$toString]();
      }
    }
    (MenuItem.new = function(label, opts) {
      let enabled = opts && 'enabled' in opts ? opts.enabled : true;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let action = opts && 'action' in opts ? opts.action : null;
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let labelAnnotation = opts && 'labelAnnotation' in opts ? opts.labelAnnotation : null;
      let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
      let itemSuffix = opts && 'itemSuffix' in opts ? opts.itemSuffix : null;
      let itemSuffixes = opts && 'itemSuffixes' in opts ? opts.itemSuffixes : null;
      let subMenu = opts && 'subMenu' in opts ? opts.subMenu : null;
      let secondaryLabel = opts && 'secondaryLabel' in opts ? opts.secondaryLabel : null;
      let ariaLabel = opts && 'ariaLabel' in opts ? opts.ariaLabel : null;
      this[label$] = label;
      this[enabled$] = enabled;
      this[tooltip$] = tooltip;
      this[action$] = action;
      this[icon$] = icon;
      this[labelAnnotation$] = labelAnnotation;
      this[subMenu$] = subMenu;
      this[secondaryLabel$] = secondaryLabel;
      this[itemSuffixes$] = itemSuffixes != null ? itemSuffixes : new (ObservableListOfMenuItemAffix()).from(new core$0.Optional.fromNullable(itemSuffix));
      this[cssClasses$] = BuiltListOfString().new(core$.Iterable._check(cssClasses != null ? cssClasses : const$ || (const$ = dart.constList([], dart.dynamic))));
      this[ariaLabel$] = ariaLabel != null ? ariaLabel : label;
      if (!(itemSuffix == null || itemSuffixes == null)) dart.assertFailed("Only one of itemSuffix or itemSuffixes should be provided", "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/model/menu/menu.dart", 202, 12, "itemSuffix == null || itemSuffixes == null");
    }).prototype = MenuItem.prototype;
    dart.addTypeTests(MenuItem);
    MenuItem.prototype[_is_MenuItem_default] = true;
    const label$ = Symbol("MenuItem.label");
    const secondaryLabel$ = Symbol("MenuItem.secondaryLabel");
    const tooltip$ = Symbol("MenuItem.tooltip");
    const ariaLabel$ = Symbol("MenuItem.ariaLabel");
    const labelAnnotation$ = Symbol("MenuItem.labelAnnotation");
    const subMenu$ = Symbol("MenuItem.subMenu");
    const action$ = Symbol("MenuItem.action");
    const icon$ = Symbol("MenuItem.icon");
    const itemSuffixes$ = Symbol("MenuItem.itemSuffixes");
    const cssClasses$ = Symbol("MenuItem.cssClasses");
    const enabled$ = Symbol("MenuItem.enabled");
    MenuItem[dart.implements] = () => [model__ui__display_name.HasUIDisplayName, model__ui__icon.HasIcon];
    dart.setMethodSignature(MenuItem, () => ({
      __proto__: dart.getMethods(MenuItem.__proto__),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setLibraryUri(MenuItem, "package:angular_components/model/menu/menu.dart");
    dart.setFieldSignature(MenuItem, () => ({
      __proto__: dart.getFields(MenuItem.__proto__),
      label: dart.finalFieldType(core$.String),
      secondaryLabel: dart.finalFieldType(core$.String),
      tooltip: dart.finalFieldType(core$.String),
      ariaLabel: dart.finalFieldType(core$.String),
      labelAnnotation: dart.finalFieldType(core$.String),
      subMenu: dart.finalFieldType(MenuModelOfT()),
      action: dart.fieldType(core$.Function),
      icon: dart.finalFieldType(model__ui__icon.Icon),
      itemSuffixes: dart.finalFieldType(ObservableListOfMenuItemAffix()),
      cssClasses: dart.finalFieldType(BuiltListOfString()),
      enabled: dart.fieldType(core$.bool)
    }));
    dart.defineExtensionMethods(MenuItem, ['toString']);
    return MenuItem;
  });
  model__menu__menu.MenuItem = model__menu__menu.MenuItem$();
  dart.addTypeTests(model__menu__menu.MenuItem, _is_MenuItem_default);
  model__menu__menu._MenuItemBase = class _MenuItemBase extends core$.Object {};
  (model__menu__menu._MenuItemBase.new = function() {
  }).prototype = model__menu__menu._MenuItemBase.prototype;
  dart.addTypeTests(model__menu__menu._MenuItemBase);
  dart.setLibraryUri(model__menu__menu._MenuItemBase, "package:angular_components/model/menu/menu.dart");
  model__menu__menu.NullMenuItem = class NullMenuItem extends model__menu__menu.MenuItem {
    static new() {
      dart.throw(new core$.UnsupportedError.new("Should be never instantiatied"));
    }
  };
  dart.addTypeTests(model__menu__menu.NullMenuItem);
  dart.setLibraryUri(model__menu__menu.NullMenuItem, "package:angular_components/model/menu/menu.dart");
  const _filterOutUnselectableItems = dart.privateName(model__menu__menu, "_filterOutUnselectableItems");
  const _is_ActiveMenuItemModel_default = Symbol('_is_ActiveMenuItemModel_default');
  model__menu__menu.ActiveMenuItemModel$ = dart.generic(T => {
    let MenuModelOfT = () => (MenuModelOfT = dart.constFn(model__menu__menu.MenuModel$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core$.List$(T)))();
    class ActiveMenuItemModel extends model__a11y__active_item.ActiveItemModel$(T) {
      set menu(menu) {
        MenuModelOfT()._check(menu);
        super.items = model__menu__menu.ActiveMenuItemModel._createEnabledItemGroupList(T, menu == null ? null : menu.itemGroups, this[_filterOutUnselectableItems]);
      }
      set items(_) {
        ListOfT()._check(_);
        dart.throw(new core$.UnsupportedError.new("ActiveMenuItemModel items can only be updated" + "by setting #menu"));
      }
      static _createEnabledItemGroupList(T, menuGroups, filterOutUnselectableItems) {
        if (menuGroups == null) return new (model__collection__combined_list.CombinedList$(T)).new(_interceptors.JSArray$(core$.List$(T)).of([]));
        if (!dart.test(filterOutUnselectableItems)) return new (model__collection__combined_list.CombinedList$(T)).new(menuGroups);
        return new (model__collection__combined_list.CombinedList$(T)).new(core$.Iterable$(core$.List$(T))._check(menuGroups[$map](core$.List$(T), dart.fn(group => group[$where](dart.fn(item => model__menu__menu.MenuItem.is(item) ? item.enabled : true, dart.fnType(core$.bool, [T])))[$toList](), dart.fnType(core$.List$(T), [core$.List$(T)]))))[$toList]());
      }
    }
    (ActiveMenuItemModel.new = function(idGenerator, opts) {
      let menu = opts && 'menu' in opts ? opts.menu : null;
      let filterOutUnselectableItems = opts && 'filterOutUnselectableItems' in opts ? opts.filterOutUnselectableItems : false;
      this[_filterOutUnselectableItems] = filterOutUnselectableItems;
      ActiveMenuItemModel.__proto__.new.call(this, idGenerator, {items: model__menu__menu.ActiveMenuItemModel._createEnabledItemGroupList(T, (() => {
          let t = menu;
          return t == null ? null : t.itemGroups;
        })(), filterOutUnselectableItems), loop: true});
    }).prototype = ActiveMenuItemModel.prototype;
    dart.addTypeTests(ActiveMenuItemModel);
    ActiveMenuItemModel.prototype[_is_ActiveMenuItemModel_default] = true;
    dart.setSetterSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getSetters(ActiveMenuItemModel.__proto__),
      menu: model__menu__menu.MenuModel$(T)
    }));
    dart.setLibraryUri(ActiveMenuItemModel, "package:angular_components/model/menu/menu.dart");
    dart.setFieldSignature(ActiveMenuItemModel, () => ({
      __proto__: dart.getFields(ActiveMenuItemModel.__proto__),
      [_filterOutUnselectableItems]: dart.finalFieldType(core$.bool)
    }));
    return ActiveMenuItemModel;
  });
  model__menu__menu.ActiveMenuItemModel = model__menu__menu.ActiveMenuItemModel$();
  dart.addTypeTests(model__menu__menu.ActiveMenuItemModel, _is_ActiveMenuItemModel_default);
  dart.setBaseClass(model__menu__menu.NullMenuItem, model__menu__menu.MenuItem$(model__menu__menu.NullMenuItem));
  dart.trackLibraries("packages/angular_components/model/menu/menu.ddc", {
    "package:angular_components/model/menu/menu.dart": model__menu__menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu.dart"],"names":[],"mappings":"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","file":"menu.ddc.js"}');
  // Exports:
  return {
    model__menu__menu: model__menu__menu
  };
});

//# sourceMappingURL=menu.ddc.js.map
