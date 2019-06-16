define(['dart_sdk', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy'], function(dart_sdk, focus_interface, disposer, change_detection, dom_service, modal, popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const focus__focus = Object.create(dart.library);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _root = dart.privateName(focus__focus, "_root");
  focus__focus.RootFocusable = class RootFocusable extends core.Object {
    focus() {
      if (this[_root] == null) return;
      if (dart.notNull(this[_root].tabIndex) < 0) {
        this[_root].tabIndex = -1;
      }
      this[_root].focus();
    }
    dispose() {
      this[_root] = null;
    }
  };
  (focus__focus.RootFocusable.new = function(root) {
    this[_root] = root;
  }).prototype = focus__focus.RootFocusable.prototype;
  dart.addTypeTests(focus__focus.RootFocusable);
  focus__focus.RootFocusable[dart.implements] = () => [focus__focus_interface.Focusable, utils__disposer__disposer.Disposable];
  dart.setMethodSignature(focus__focus.RootFocusable, () => ({
    __proto__: dart.getMethods(focus__focus.RootFocusable.__proto__),
    focus: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus.RootFocusable, () => ({
    __proto__: dart.getFields(focus__focus.RootFocusable.__proto__),
    [_root]: dart.fieldType(html.Element)
  }));
  const _resolvedFocusable = dart.privateName(focus__focus, "_resolvedFocusable");
  focus__focus.ProjectedFocus = class ProjectedFocus extends core.Object {
    focus() {
      if (this[_resolvedFocusable] != null) {
        this[_resolvedFocusable].focus();
        return;
      }
      FutureOfNull()._check(this.focusDelegate.then(core.Null, dart.fn(delegate => {
        if (!(focus__focus_interface.Focusable.is(delegate) || html.Element.is(delegate))) dart.assertFailed();
        if (focus__focus_interface.Focusable.is(delegate)) {
          this[_resolvedFocusable] = delegate;
        } else {
          this[_resolvedFocusable] = new focus__focus.RootFocusable.new(html.Element._check(delegate));
        }
        this[_resolvedFocusable].focus();
      }, dynamicToNull())));
    }
  };
  (focus__focus.ProjectedFocus.new = function() {
    this[_resolvedFocusable] = null;
  }).prototype = focus__focus.ProjectedFocus.prototype;
  dart.addTypeTests(focus__focus.ProjectedFocus);
  focus__focus.ProjectedFocus[dart.implements] = () => [focus__focus_interface.Focusable];
  dart.setMethodSignature(focus__focus.ProjectedFocus, () => ({
    __proto__: dart.getMethods(focus__focus.ProjectedFocus.__proto__),
    focus: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus.ProjectedFocus, () => ({
    __proto__: dart.getFields(focus__focus.ProjectedFocus.__proto__),
    [_resolvedFocusable]: dart.fieldType(focus__focus_interface.Focusable)
  }));
  focus__focus.FocusableItem = class FocusableItem extends core.Object {};
  (focus__focus.FocusableItem.new = function() {
  }).prototype = focus__focus.FocusableItem.prototype;
  dart.addTypeTests(focus__focus.FocusableItem);
  focus__focus.FocusableItem[dart.implements] = () => [focus__focus_interface.Focusable];
  const _preventDefaultDelegate = dart.privateName(focus__focus, "_preventDefaultDelegate");
  focus__focus.FocusMoveEvent = class FocusMoveEvent extends core.Object {
    get focusItem() {
      return this[focusItem$];
    }
    set focusItem(value) {
      super.focusItem = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get home() {
      return this[home];
    }
    set home(value) {
      super.home = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    preventDefault() {
      if (this[_preventDefaultDelegate] != null) dart.dcall(this[_preventDefaultDelegate], []);
    }
    static fromKeyboardEvent(item, kbEvent) {
      let keyCode = kbEvent.keyCode;
      let preventDefaultFn = () => {
        kbEvent.preventDefault();
      };
      dart.fn(preventDefaultFn, VoidToNull());
      if (dart.test(focus__focus.FocusMoveEvent._isHomeKey(keyCode))) {
        return new focus__focus.FocusMoveEvent.homeKey(item, preventDefaultFn);
      }
      if (dart.test(focus__focus.FocusMoveEvent._isEndKey(keyCode))) {
        return new focus__focus.FocusMoveEvent.endKey(item, preventDefaultFn);
      }
      if (!dart.test(focus__focus.FocusMoveEvent._isNextKey(keyCode)) && !dart.test(focus__focus.FocusMoveEvent._isPrevKey(keyCode))) return null;
      let offset = dart.test(focus__focus.FocusMoveEvent._isNextKey(keyCode)) ? 1 : -1;
      return new focus__focus.FocusMoveEvent.new(item, offset, preventDefaultFn);
    }
    static _isNextKey(keyCode) {
      return keyCode === html.KeyCode.RIGHT || keyCode === html.KeyCode.DOWN;
    }
    static _isPrevKey(keyCode) {
      return keyCode === html.KeyCode.LEFT || keyCode === html.KeyCode.UP;
    }
    static _isHomeKey(keyCode) {
      return keyCode === html.KeyCode.HOME;
    }
    static _isEndKey(keyCode) {
      return keyCode === html.KeyCode.END;
    }
  };
  (focus__focus.FocusMoveEvent.new = function(focusItem, offset, preventDefaultDelegate) {
    if (preventDefaultDelegate === void 0) preventDefaultDelegate = null;
    this[focusItem$] = focusItem;
    this[offset$] = offset;
    this[_preventDefaultDelegate] = preventDefaultDelegate;
    this[home] = false;
    this[end] = false;
  }).prototype = focus__focus.FocusMoveEvent.prototype;
  (focus__focus.FocusMoveEvent.homeKey = function(focusItem, preventDefaultDelegate) {
    if (preventDefaultDelegate === void 0) preventDefaultDelegate = null;
    this[focusItem$] = focusItem;
    this[_preventDefaultDelegate] = preventDefaultDelegate;
    this[offset$] = 0;
    this[home] = true;
    this[end] = false;
  }).prototype = focus__focus.FocusMoveEvent.prototype;
  (focus__focus.FocusMoveEvent.endKey = function(focusItem, preventDefaultDelegate) {
    if (preventDefaultDelegate === void 0) preventDefaultDelegate = null;
    this[focusItem$] = focusItem;
    this[_preventDefaultDelegate] = preventDefaultDelegate;
    this[offset$] = 0;
    this[home] = false;
    this[end] = true;
  }).prototype = focus__focus.FocusMoveEvent.prototype;
  dart.addTypeTests(focus__focus.FocusMoveEvent);
  const focusItem$ = Symbol("FocusMoveEvent.focusItem");
  const offset$ = Symbol("FocusMoveEvent.offset");
  const home = Symbol("FocusMoveEvent.home");
  const end = Symbol("FocusMoveEvent.end");
  dart.setMethodSignature(focus__focus.FocusMoveEvent, () => ({
    __proto__: dart.getMethods(focus__focus.FocusMoveEvent.__proto__),
    preventDefault: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus.FocusMoveEvent, () => ({
    __proto__: dart.getFields(focus__focus.FocusMoveEvent.__proto__),
    focusItem: dart.finalFieldType(focus__focus.FocusableItem),
    offset: dart.finalFieldType(core.int),
    home: dart.finalFieldType(core.bool),
    end: dart.finalFieldType(core.bool),
    [_preventDefaultDelegate]: dart.finalFieldType(core.Function)
  }));
  const _domService = dart.privateName(focus__focus, "_domService");
  const _focusable = dart.privateName(focus__focus, "_focusable");
  const _modal = dart.privateName(focus__focus, "_modal");
  const _popupRef = dart.privateName(focus__focus, "_popupRef");
  const _disposer = dart.privateName(focus__focus, "_disposer");
  const _autoFocus = dart.privateName(focus__focus, "_autoFocus");
  const _onModalOrPopupVisibleChanged = dart.privateName(focus__focus, "_onModalOrPopupVisibleChanged");
  focus__focus.AutoFocusDirective = class AutoFocusDirective extends focus__focus.RootFocusable {
    ngOnInit() {
      if (!dart.test(this[_autoFocus])) return;
      if (this[_modal] != null || this[_popupRef] != null) {
        let isVisible = this[_popupRef] != null ? this[_popupRef].isVisible : this[_modal].resolvedOverlayRef.isVisible;
        this[_onModalOrPopupVisibleChanged](isVisible);
        let onVisibleChanged = this[_popupRef] != null ? this[_popupRef].onVisibleChanged : this[_modal].resolvedOverlayRef.onVisibleChanged;
        this[_disposer].addStreamSubscription(core.bool, onVisibleChanged.listen(dart.bind(this, _onModalOrPopupVisibleChanged)));
      } else {
        this[_domService].scheduleWrite(dart.bind(this, 'focus'));
      }
    }
    set autoFocus(value) {
      this[_autoFocus] = value;
    }
    focus() {
      if (!dart.test(this[_autoFocus])) return;
      if (this[_focusable] != null) {
        this[_focusable].focus();
      } else {
        super.focus();
      }
    }
    ngOnDestroy() {
      super.dispose();
      this[_disposer].dispose();
      this[_focusable] = null;
      this[_domService] = null;
      this[_modal] = null;
      this[_popupRef] = null;
    }
    [_onModalOrPopupVisibleChanged](isVisible) {
      if (dart.test(isVisible)) this[_domService].scheduleWrite(dart.bind(this, 'focus'));
    }
  };
  (focus__focus.AutoFocusDirective.new = function(node, domService, focusable, modal, popupRef) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_autoFocus] = null;
    this[_domService] = domService;
    this[_focusable] = focusable;
    this[_modal] = modal;
    this[_popupRef] = popupRef;
    focus__focus.AutoFocusDirective.__proto__.new.call(this, node);
  }).prototype = focus__focus.AutoFocusDirective.prototype;
  dart.addTypeTests(focus__focus.AutoFocusDirective);
  focus__focus.AutoFocusDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getMethods(focus__focus.AutoFocusDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onModalOrPopupVisibleChanged]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setSetterSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getSetters(focus__focus.AutoFocusDirective.__proto__),
    autoFocus: core.bool
  }));
  dart.setFieldSignature(focus__focus.AutoFocusDirective, () => ({
    __proto__: dart.getFields(focus__focus.AutoFocusDirective.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_autoFocus]: dart.fieldType(core.bool),
    [_focusable]: dart.fieldType(focus__focus_interface.Focusable),
    [_domService]: dart.fieldType(utils__browser__dom_service__dom_service.DomService),
    [_modal]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_popupRef]: dart.fieldType(src__laminate__popup__popup_ref.PopupRef)
  }));
  focus__focus.FocusableDirective = class FocusableDirective extends focus__focus.RootFocusable {};
  (focus__focus.FocusableDirective.new = function(node) {
    focus__focus.FocusableDirective.__proto__.new.call(this, node);
  }).prototype = focus__focus.FocusableDirective.prototype;
  dart.addTypeTests(focus__focus.FocusableDirective);
  dart.trackLibraries("packages/angular_components/focus/focus.ddc", {
    "package:angular_components/focus/focus.dart": focus__focus
  }, '{"version":3,"sourceRoot":"","sources":["focus.dart"],"names":[],"mappings":"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","file":"focus.ddc.js"}');
  // Exports:
  return {
    focus__focus: focus__focus
  };
});

//# sourceMappingURL=focus.ddc.js.map
