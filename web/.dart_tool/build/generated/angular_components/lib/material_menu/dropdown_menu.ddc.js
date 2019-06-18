define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_menu/material_menu'], function(dart_sdk, disposer, focus_interface, focusable_mixin, keyboard_handler_mixin, menu_popup_wrapper, change_detection, has_disabled, dropdown_button, material_menu) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const material_menu__menu_popup_wrapper = menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const material_menu__menu_popup = material_menu.material_menu__menu_popup;
  const material_menu__dropdown_menu = Object.create(dart.library);
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  const _disposer = dart.privateName(material_menu__dropdown_menu, "_disposer");
  const _disabled = dart.privateName(material_menu__dropdown_menu, "_disabled");
  const _dropdownStyle = dart.privateName(material_menu__dropdown_menu, "_dropdownStyle");
  const _focusTarget = dart.privateName(material_menu__dropdown_menu, "_focusTarget");
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$.prototype;
  dart.applyMixin(Object_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  const Object_KeyboardHandlerMixin$ = class Object_KeyboardHandlerMixin extends Object_FocusableMixin$ {};
  (Object_KeyboardHandlerMixin$.new = function() {
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    Object_KeyboardHandlerMixin$.__proto__.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const Object_MenuPopupWrapper$ = class Object_MenuPopupWrapper extends Object_KeyboardHandlerMixin$ {};
  (Object_MenuPopupWrapper$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$, material_menu__menu_popup_wrapper.MenuPopupWrapper);
  const Object_MenuPopupTrigger$ = class Object_MenuPopupTrigger extends Object_MenuPopupWrapper$ {};
  (Object_MenuPopupTrigger$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupTrigger.new.call(this);
    Object_MenuPopupTrigger$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupTrigger$.prototype;
  dart.applyMixin(Object_MenuPopupTrigger$, material_menu__menu_popup_wrapper.MenuPopupTrigger);
  material_menu__dropdown_menu.DropdownMenuComponent = class DropdownMenuComponent extends Object_MenuPopupTrigger$ {
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
    }
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(d) {
      this[_disabled] = d;
      this.focusable = this[_focusTarget];
    }
    get buttonAriaDescribedBy() {
      return this[buttonAriaDescribedBy];
    }
    set buttonAriaDescribedBy(value) {
      this[buttonAriaDescribedBy] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get dropdownStyle() {
      return this[_dropdownStyle];
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get menuPopup() {
      return this[menuPopup];
    }
    set menuPopup(value) {
      this[menuPopup] = value;
    }
    get [_focusTarget]() {
      return focus__focus_interface.Focusable._check(dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this.menuPopup : this.dropdownButton);
    }
  };
  (material_menu__dropdown_menu.DropdownMenuComponent.new = function(_changeDetector) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[buttonText] = null;
    this[_disabled] = false;
    this[buttonAriaDescribedBy] = null;
    this[tabbable] = true;
    this[_dropdownStyle] = false;
    this[dropdownButton] = null;
    this[menuPopup] = null;
    material_menu__dropdown_menu.DropdownMenuComponent.__proto__.new.call(this);
    this[_disposer].addStreamSubscription(core.bool, this.isExpandedChange.listen(dart.fn(_ => {
      this.focusable = this[_focusTarget];
      _changeDetector.markForCheck();
    }, boolToNull())));
  }).prototype = material_menu__dropdown_menu.DropdownMenuComponent.prototype;
  dart.addTypeTests(material_menu__dropdown_menu.DropdownMenuComponent);
  const buttonText = Symbol("DropdownMenuComponent.buttonText");
  const buttonAriaDescribedBy = Symbol("DropdownMenuComponent.buttonAriaDescribedBy");
  const tabbable = Symbol("DropdownMenuComponent.tabbable");
  const dropdownButton = Symbol("DropdownMenuComponent.dropdownButton");
  const menuPopup = Symbol("DropdownMenuComponent.menuPopup");
  material_menu__dropdown_menu.DropdownMenuComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, interfaces__has_disabled.HasDisabled, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: core.bool,
    dropdownStyle: core.bool,
    [_focusTarget]: focus__focus_interface.Focusable
  }));
  dart.setSetterSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: core.bool
  }));
  dart.setFieldSignature(material_menu__dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu.DropdownMenuComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    buttonText: dart.fieldType(core.String),
    [_disabled]: dart.fieldType(core.bool),
    buttonAriaDescribedBy: dart.fieldType(core.String),
    tabbable: dart.fieldType(core.bool),
    [_dropdownStyle]: dart.fieldType(core.bool),
    dropdownButton: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    menuPopup: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.ddc", {
    "package:angular_components/material_menu/dropdown_menu.dart": material_menu__dropdown_menu
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkDI,qBAAS,QAAQ;IACnB;;AAIE,oBAAS,GAAG,kBAAY;IAC1B;IAIO;;;;;;;YAIc,gBAAS;;iBAGjB,CAAM;AACjB,qBAAS,GAAG,CAAC;AACb,oBAAS,GAAG,kBAAY;IAC1B;IAIO;;;;;;IAIF;;;;;;;YAEqB,qBAAc;;IAIhB;;;;;;IAGL;;;;;;;+DAGf,aAAQ,IAAG,iBAAQ,eAAU,IAAG,cAAS,GAAG,mBAAc;IAAC;;qEAnDzC,eAAiC;IAFjD,eAAS,OAAG,0CAAgB;IAuB3B,gBAAU;IAEZ,eAAS,GAAG;IAYV,2BAAqB;IAIvB,cAAQ,GAAG;IAGX,oBAAc,GAAG;IAGE,oBAAc;IAGnB,eAAS;;AA7C1B,mBAAS,sBAAsB,YAAC,qBAAgB,OAAO,CAAC,QAAC,CAAC;AACxD,oBAAS,GAAG,kBAAY;AACxB,qBAAe,aAAa;;EAEhC","file":"dropdown_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu: material_menu__dropdown_menu
  };
});

//# sourceMappingURL=dropdown_menu.ddc.js.map
