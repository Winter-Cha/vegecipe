define(['dart_sdk', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/observable', 'packages/angular_components/material_menu/affix/base_affix', 'packages/angular/src/bootstrap/modules', 'packages/quiver/core', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, menu_item_affix, observable, base_affix, modules, core, has_disabled, change_detection) {
  'use strict';
  const core$ = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__records = observable.src__records;
  const src__observable_list = observable.src__observable_list;
  const material_menu__affix__base_affix = base_affix.material_menu__affix__base_affix;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const core$0 = core.core;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const material_menu__menu_item_affix_list = Object.create(dart.library);
  const $expand = dartx.expand;
  const $clear = dartx.clear;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $removeRange = dartx.removeRange;
  const $reversed = dartx.reversed;
  const $toList = dartx.toList;
  const $whereType = dartx.whereType;
  const $insert = dartx.insert;
  const $map = dartx.map;
  const $addAll = dartx.addAll;
  const $classes = dartx.classes;
  let JSArrayOf_AffixRef = () => (JSArrayOf_AffixRef = dart.constFn(_interceptors.JSArray$(material_menu__menu_item_affix_list._AffixRef)))();
  let ListChangeRecordOfMenuItemAffix = () => (ListChangeRecordOfMenuItemAffix = dart.constFn(src__records.ListChangeRecord$(model__menu__menu_item_affix.MenuItemAffix)))();
  let ListOfListChangeRecordOfMenuItemAffix = () => (ListOfListChangeRecordOfMenuItemAffix = dart.constFn(core$.List$(ListChangeRecordOfMenuItemAffix())))();
  let ListOfListChangeRecordOfMenuItemAffixToNull = () => (ListOfListChangeRecordOfMenuItemAffixToNull = dart.constFn(dart.fnType(core$.Null, [ListOfListChangeRecordOfMenuItemAffix()])))();
  let IterableOfBaseMenuItemAffixModel = () => (IterableOfBaseMenuItemAffixModel = dart.constFn(core$.Iterable$(material_menu__affix__base_affix.BaseMenuItemAffixModel)))();
  let BaseAffixComponentOfMenuItemAffix = () => (BaseAffixComponentOfMenuItemAffix = dart.constFn(material_menu__affix__base_affix.BaseAffixComponent$(model__menu__menu_item_affix.MenuItemAffix)))();
  let ComponentRefOfBaseAffixComponentOfMenuItemAffix = () => (ComponentRefOfBaseAffixComponentOfMenuItemAffix = dart.constFn(src__core__linker__component_factory.ComponentRef$(BaseAffixComponentOfMenuItemAffix())))();
  let OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix = () => (OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix = dart.constFn(core$0.Optional$(ComponentRefOfBaseAffixComponentOfMenuItemAffix())))();
  let _AffixRefToOptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix = () => (_AffixRefToOptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix = dart.constFn(dart.fnType(OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix(), [material_menu__menu_item_affix_list._AffixRef])))();
  let IterableOfComponentRefOfBaseAffixComponentOfMenuItemAffix = () => (IterableOfComponentRefOfBaseAffixComponentOfMenuItemAffix = dart.constFn(core$.Iterable$(ComponentRefOfBaseAffixComponentOfMenuItemAffix())))();
  let BaseMenuItemAffixModelTo_AffixRef = () => (BaseMenuItemAffixModelTo_AffixRef = dart.constFn(dart.fnType(material_menu__menu_item_affix_list._AffixRef, [material_menu__affix__base_affix.BaseMenuItemAffixModel])))();
  let IterableOf_AffixRef = () => (IterableOf_AffixRef = dart.constFn(core$.Iterable$(material_menu__menu_item_affix_list._AffixRef)))();
  let ListOf_AffixRef = () => (ListOf_AffixRef = dart.constFn(core$.List$(material_menu__menu_item_affix_list._AffixRef)))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  const _cdRef = dart.privateName(material_menu__menu_item_affix_list, "_cdRef");
  const _itemChangeStreamSub = dart.privateName(material_menu__menu_item_affix_list, "_itemChangeStreamSub");
  const _affixComponentRefs = dart.privateName(material_menu__menu_item_affix_list, "_affixComponentRefs");
  const _items = dart.privateName(material_menu__menu_item_affix_list, "_items");
  const _disabled = dart.privateName(material_menu__menu_item_affix_list, "_disabled");
  const _updateItemProperties = dart.privateName(material_menu__menu_item_affix_list, "_updateItemProperties");
  const _updateVisibleItems = dart.privateName(material_menu__menu_item_affix_list, "_updateVisibleItems");
  const _initializeItems = dart.privateName(material_menu__menu_item_affix_list, "_initializeItems");
  const _clearChildren = dart.privateName(material_menu__menu_item_affix_list, "_clearChildren");
  const _createComponentRef = dart.privateName(material_menu__menu_item_affix_list, "_createComponentRef");
  material_menu__menu_item_affix_list.MenuItemAffixListComponent = class MenuItemAffixListComponent extends core$.Object {
    get viewRef() {
      return this[viewRef];
    }
    set viewRef(value) {
      this[viewRef] = value;
    }
    set disabled(disabled) {
      this[_disabled] = disabled;
      this[_updateItemProperties]();
    }
    get disabled() {
      return this[_disabled];
    }
    set items(items) {
      let t = this[_itemChangeStreamSub];
      t == null ? null : t.cancel();
      let t$ = items == null ? null : items.listChanges;
      this[_itemChangeStreamSub] = t$ == null ? null : t$.listen(dart.fn(change => {
        this[_updateVisibleItems](change);
        this[_cdRef].markForCheck();
      }, ListOfListChangeRecordOfMenuItemAffixToNull()));
      this[_initializeItems](IterableOfBaseMenuItemAffixModel()._check(items.whereType(material_menu__affix__base_affix.BaseMenuItemAffixModel)));
    }
    get hasAffixes() {
      let t = this[_items];
      let l = t == null ? null : t.isNotEmpty;
      return l != null ? l : false;
    }
    ngOnDestroy() {
      this[_clearChildren]();
      let t = this[_itemChangeStreamSub];
      t == null ? null : t.cancel();
    }
    [_clearChildren]() {
      this.viewRef.clear();
      let iter = IterableOfComponentRefOfBaseAffixComponentOfMenuItemAffix()._check(this[_affixComponentRefs][$expand](ComponentRefOfBaseAffixComponentOfMenuItemAffix(), dart.fn(ref => ref.componentRef, _AffixRefToOptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix())));
      for (let ref of iter) {
        ref.destroy();
      }
      this[_affixComponentRefs][$clear]();
    }
    [_updateVisibleItems](changes) {
      for (let change of changes) {
        let start = change.index;
        if (dart.test(change.removed[$isNotEmpty])) {
          let end = dart.notNull(start) + dart.notNull(change.removed[$length]);
          let removed = this[_affixComponentRefs][$sublist](start, end);
          for (let toRemove of removed) {
            if (dart.test(toRemove.componentRef.isPresent)) {
              toRemove.componentRef.value.destroy();
            }
          }
          this[_affixComponentRefs][$removeRange](start, end);
        }
        if (dart.notNull(change.addedCount) > 0) {
          let allAdded = IterableOfBaseMenuItemAffixModel()._check(change.added[$whereType](material_menu__affix__base_affix.BaseMenuItemAffixModel))[$toList]()[$reversed];
          for (let toAdd of allAdded) {
            this[_affixComponentRefs][$insert](start, this[_createComponentRef](toAdd, {index: start}));
          }
        }
      }
    }
    [_initializeItems](items) {
      this[_clearChildren]();
      this[_affixComponentRefs][$addAll](IterableOf_AffixRef()._check(items[$map](material_menu__menu_item_affix_list._AffixRef, dart.fn(affix => this[_createComponentRef](affix), BaseMenuItemAffixModelTo_AffixRef()))));
    }
    [_updateItemProperties]() {
      for (let ref of this[_affixComponentRefs]) {
        if (dart.test(ref.componentRef.isPresent)) {
          ref.componentRef.value.instance.disabled = this.disabled;
        }
      }
    }
    [_createComponentRef](affix, opts) {
      let index = opts && 'index' in opts ? opts.index : -1;
      if (!dart.test(affix.isVisible)) return new material_menu__menu_item_affix_list._AffixRef.hidden(affix);
      return new material_menu__menu_item_affix_list._AffixRef.new(affix, (() => {
        let _ = this.viewRef.createComponent(BaseAffixComponentOfMenuItemAffix(), affix.componentFactory, index);
        _.location[$classes].add("affix");
        _.instance.value = affix;
        _.instance.disabled = this.disabled;
        return _;
      })());
    }
  };
  (material_menu__menu_item_affix_list.MenuItemAffixListComponent.new = function(cdRef) {
    this[_itemChangeStreamSub] = null;
    this[_affixComponentRefs] = JSArrayOf_AffixRef().of([]);
    this[_items] = null;
    this[viewRef] = null;
    this[_disabled] = false;
    this[_cdRef] = cdRef;
  }).prototype = material_menu__menu_item_affix_list.MenuItemAffixListComponent.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list.MenuItemAffixListComponent);
  const viewRef = Symbol("MenuItemAffixListComponent.viewRef");
  material_menu__menu_item_affix_list.MenuItemAffixListComponent[dart.implements] = () => [interfaces__has_disabled.HasDisabled, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_clearChildren]: dart.fnType(dart.void, []),
    [_updateVisibleItems]: dart.fnType(dart.void, [core$.Iterable$(src__records.ListChangeRecord$(model__menu__menu_item_affix.MenuItemAffix))]),
    [_initializeItems]: dart.fnType(dart.void, [core$.Iterable$(material_menu__affix__base_affix.BaseMenuItemAffixModel)]),
    [_updateItemProperties]: dart.fnType(dart.void, []),
    [_createComponentRef]: dart.fnType(material_menu__menu_item_affix_list._AffixRef, [material_menu__affix__base_affix.BaseMenuItemAffixModel], {index: core$.int})
  }));
  dart.setGetterSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    disabled: core$.bool,
    hasAffixes: core$.bool
  }));
  dart.setSetterSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    disabled: core$.bool,
    items: src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list.MenuItemAffixListComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list.MenuItemAffixListComponent.__proto__),
    [_cdRef]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_itemChangeStreamSub]: dart.fieldType(async.StreamSubscription),
    [_affixComponentRefs]: dart.finalFieldType(ListOf_AffixRef()),
    [_items]: dart.fieldType(ObservableListOfMenuItemAffix()),
    viewRef: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_disabled]: dart.fieldType(core$.bool)
  }));
  material_menu__menu_item_affix_list._AffixRef = class _AffixRef extends core$.Object {};
  (material_menu__menu_item_affix_list._AffixRef.new = function(affix, componentRef) {
    this.affix = affix;
    this.componentRef = new (OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix()).of(componentRef);
  }).prototype = material_menu__menu_item_affix_list._AffixRef.prototype;
  (material_menu__menu_item_affix_list._AffixRef.hidden = function(affix) {
    this.affix = affix;
    this.componentRef = new (OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix()).absent();
  }).prototype = material_menu__menu_item_affix_list._AffixRef.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list._AffixRef);
  dart.setFieldSignature(material_menu__menu_item_affix_list._AffixRef, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list._AffixRef.__proto__),
    affix: dart.finalFieldType(material_menu__affix__base_affix.BaseMenuItemAffixModel),
    componentRef: dart.finalFieldType(OptionalOfComponentRefOfBaseAffixComponentOfMenuItemAffix())
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.ddc", {
    "package:angular_components/material_menu/menu_item_affix_list.dart": material_menu__menu_item_affix_list
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4CmB;;;;;;iBAOJ,QAAa;AACxB,qBAAS,GAAG,QAAQ;AAEpB,iCAAqB;IACvB;;YAEqB,gBAAS;;cAIpB,KAAmC;AAC3C,wCAAoB;;AAEpB,eAAuB,KAAK,kBAAL,KAAK,YAAa;gCAArB,iCAA8B,QAAC,MAAM;AACvD,iCAAmB,CAAC,MAAM;AAC1B,oBAAM,aAAa;;AAGrB,4BAAgB,2CAAC,KAAK,UAAU;IAClC;;cAEuB,YAAM;;6BAAgB;IAAK;;AAIhD,0BAAc;AACd,wCAAoB;;IACtB;;AAGE,kBAAO,MAAM;AACb,oFAAkB,yBAAmB,SAAO,oDAAC,QAAC,GAAG,IAAK,GAAG,aAAa;eAA3D,aAA8D;AACvE,WAAG,QAAQ;;AAEb,+BAAmB,QAAM;IAC3B;0BAEyB,OAAiD;AAExE,eAAW,SAAU,QAAO,EAAE;AAC5B,YAAM,QAAQ,MAAM,MAAM;AAE1B,sBAAI,MAAM,QAAQ,aAAW,GAAE;AAC7B,cAAM,MAAY,aAAN,KAAK,iBAAG,MAAM,QAAQ,SAAO;AACzC,cAAM,UAAU,yBAAmB,UAAQ,CAAC,KAAK,EAAE,GAAG;AAEtD,mBAAW,WAAY,QAAO,EAAE;AAC9B,0BAAI,QAAQ,aAAa,UAAU,GAAE;AACnC,sBAAQ,aAAa,MAAM,QAAQ;;;AAIvC,mCAAmB,cAAY,CAAC,KAAK,EAAE,GAAG;;AAG5C,YAAsB,aAAlB,MAAM,WAAW,IAAG,GAAG;AACzB,cAAM,qDACF,MAAM,MAAM,YAAU,mEAAiC,aAAW;AACtE,mBAAW,QAAS,SAAQ,EAAE;AAC5B,qCAAmB,SAAO,CACtB,KAAK,EAAE,yBAAmB,CAAC,KAAK,UAAS,KAAK;;;;IAI1D;uBAEsB,KAAsC;AAC1D,0BAAc;AACd,MACE,AAAE,kCAAM,8BAAC,KAAK,MAAI,gDAAC,QAAC,KAAK,IAAK,yBAAmB,CAAC,KAAK;IAC3D;;AAGE,eAAW,MAAO,0BAAmB,EAAE;AACrC,sBAAI,GAAG,aAAa,UAAU,GAAE;AAC9B,aAAG,aAAa,MAAM,SAAS,SAAS,GAAG,aAAQ;;;IAGzD;0BAE8B,KAA4B;UACjD,+CAAQ,CAAC;AAChB,qBAAK,KAAK,UAAU,GAAE,WAAO,oDAAgB,CAAC,KAAK;AAEnD,iBAAO,iDAAS,CACZ,KAAK;gBACL,YAAO,gBAAgB,sCAAC,KAAK,iBAAiB,EAAE,KAAK;iCAC5B;2BACJ,KAAK;8BACF,aAAQ;;;IACtC;;;IAzGmB,0BAAoB;IAEjC,yBAAmB,GAAG;IAEE,YAAM;IAInB,aAAO;IAEnB,eAAS,GAAG;IAEe,YAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gEAoG7B,KAAU,EAAE,YAA6C;IAApD,UAAK,GAAL,KAAK;IACd,iBAAY,OAAG,gEAAc,CAAC,YAAY;EAAC;mEAChC,KAAU;IAAL,UAAK,GAAL,KAAK;IAAI,iBAAY,OAAG,oEAAkB;EAAE","file":"menu_item_affix_list.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list: material_menu__menu_item_affix_list
  };
});

//# sourceMappingURL=menu_item_affix_list.ddc.js.map
