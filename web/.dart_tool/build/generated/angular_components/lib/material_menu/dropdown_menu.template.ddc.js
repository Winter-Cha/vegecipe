define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, modules, change_detection, dropdown_button, dropdown_button$, popup_hierarchy, dom_popup_source, reference, material_menu, material_menu$, focus_interface, menu_popup_wrapper, has_disabled, dropdown_menu, angular, focus, has_disabled$, menu_popup_wrapper$, material_popup, focusable_mixin, keyboard_handler_mixin, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const material_menu__menu_popup$46template = material_menu.material_menu__menu_popup$46template;
  const material_menu__menu_popup = material_menu$.material_menu__menu_popup;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_menu__menu_popup_wrapper = menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_menu__dropdown_menu = dropdown_menu.material_menu__dropdown_menu;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_menu__menu_popup_wrapper$46template = menu_popup_wrapper$.material_menu__menu_popup_wrapper$46template;
  const material_popup__material_popup$46template = material_popup.material_popup__material_popup$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_menu__dropdown_menu$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $addEventListener = dartx.addEventListener;
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfDropdownMenuComponent = () => (AppViewOfDropdownMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  let AppViewAndintToAppViewOfDropdownMenuComponent = () => (AppViewAndintToAppViewOfDropdownMenuComponent = dart.constFn(dart.fnType(AppViewOfDropdownMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDropdownMenuComponent = () => (ComponentFactoryOfDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  let ComponentRefOfDropdownMenuComponent = () => (ComponentRefOfDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__dropdown_menu.DropdownMenuComponent)))();
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template.styles$DropdownMenuComponent*/get styles$DropdownMenuComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_1 = dart.privateName(material_menu__dropdown_menu$46template, "_compView_1");
  const _DropdownButtonComponent_1_5 = dart.privateName(material_menu__dropdown_menu$46template, "_DropdownButtonComponent_1_5");
  const _PopupSourceDirective_1_7 = dart.privateName(material_menu__dropdown_menu$46template, "_PopupSourceDirective_1_7");
  const _compView_5 = dart.privateName(material_menu__dropdown_menu$46template, "_compView_5");
  const _MenuPopupComponent_5_5 = dart.privateName(material_menu__dropdown_menu$46template, "_MenuPopupComponent_5_5");
  const _PopupSourceDirective_5_6 = dart.privateName(material_menu__dropdown_menu$46template, "_PopupSourceDirective_5_6");
  const _expr_0 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_menu__dropdown_menu$46template, "_expr_8");
  const _handle_expandActionChange_5_0 = dart.privateName(material_menu__dropdown_menu$46template, "_handle_expandActionChange_5_0");
  let const$;
  material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0 = class ViewDropdownMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__dropdown_menu.DropdownMenuComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/dropdown_menu.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      parentRenderNode[$append](_el_1);
      src__runtime__dom_helpers.setAttribute(_el_1, "popupSource", "");
      this[_DropdownButtonComponent_1_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_1_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_1, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), this[_DropdownButtonComponent_1_5], null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_1, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), this[_DropdownButtonComponent_1_5], null);
      let _text_2 = src__runtime__dom_helpers.createText("\n  ");
      let _text_3 = src__runtime__dom_helpers.createText("\n");
      this[_compView_1].create(this[_DropdownButtonComponent_1_5], JSArrayOfObject().of([(() => {
          let _ = [_text_2];
          _[$addAll](core.Iterable._check(this.projectedNodes[$_get](0)));
          _[$addAll]([_text_3]);
          return _;
        })()]));
      let _text_4 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_5] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      parentRenderNode[$append](_el_5);
      this[_MenuPopupComponent_5_5] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_5_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_5, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_5, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null);
      let _text_6 = src__runtime__dom_helpers.createText("\n  ");
      let _text_7 = src__runtime__dom_helpers.createText("\n");
      this[_compView_5].create(this[_MenuPopupComponent_5_5], JSArrayOfObject().of([(() => {
          let _ = [_text_6];
          _[$addAll](core.Iterable._check(this.projectedNodes[$_get](1)));
          _[$addAll]([_text_7]);
          return _;
        })()]));
      let _text_8 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      _el_1[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_DropdownButtonComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'handlePopupTriggerAction')));
      let subscription_1 = this[_MenuPopupComponent_5_5].expandActionChange.listen(this.eventHandler1(material_menu__menu_popup_wrapper.ExpandAction, material_menu__menu_popup_wrapper.ExpandAction, dart.bind(this, _handle_expandActionChange_5_0)));
      _ctx.dropdownButton = this[_DropdownButtonComponent_1_5];
      _ctx.menuPopup = this[_MenuPopupComponent_5_5];
      this.init(const$ || (const$ = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_DropdownButtonComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = this[_PopupSourceDirective_1_7];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DropdownButtonComponent_1_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_1_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.buttonAriaDescribedBy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_1_5].ariaDescribedBy = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_1_5].tabbable = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_1_5].ngOnInit();
      }
      changed = false;
      let currVal_4 = _ctx.menu;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MenuPopupComponent_5_5].menu = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MenuPopupComponent_5_5].preferredPositions = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.expandAction;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MenuPopupComponent_5_5].expandAction = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.width;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MenuPopupComponent_5_5].width = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_toggle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MenuPopupComponent_5_5].popupSource = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_1_7].ngAfterViewInit();
          this[_PopupSourceDirective_5_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_PopupSourceDirective_1_7].ngOnDestroy();
      this[_PopupSourceDirective_5_6].ngOnDestroy();
    }
    [_handle_expandActionChange_5_0]($event) {
      let _ctx = this.ctx;
      _ctx.expandAction = material_menu__menu_popup_wrapper.ExpandAction._check($event);
    }
    initComponentStyles() {
      let styles = material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles;
      if (styles == null) {
        material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = styles = material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(material_menu__dropdown_menu$46template.styles$DropdownMenuComponent, material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DropdownButtonComponent_1_5] = null;
    this[_PopupSourceDirective_1_7] = null;
    this[_compView_5] = null;
    this[_MenuPopupComponent_5_5] = null;
    this[_PopupSourceDirective_5_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dropdown-menu"));
  }).prototype = material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.prototype;
  dart.addTypeTests(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.setMethodSignature(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__dropdown_menu.DropdownMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_expandActionChange_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, "package:angular_components/material_menu/dropdown_menu.template.dart");
  dart.setFieldSignature(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_1_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_PopupSourceDirective_1_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_compView_5]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_5_5]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_5_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0, {
    /*material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template._DropdownMenuComponentNgFactory*/get _DropdownMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDropdownMenuComponent()).new("dropdown-menu", dart.fn(material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, AppViewAndintToAppViewOfDropdownMenuComponent())));
    }
  });
  dart.copyProperties(material_menu__dropdown_menu$46template, {
    get DropdownMenuComponentNgFactory() {
      return material_menu__dropdown_menu$46template._DropdownMenuComponentNgFactory;
    }
  });
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template.styles$DropdownMenuComponentHost*/get styles$DropdownMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_menu__dropdown_menu$46template, "_compView_0");
  const _DropdownMenuComponent_0_5 = dart.privateName(material_menu__dropdown_menu$46template, "_DropdownMenuComponent_0_5");
  material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0 = class _ViewDropdownMenuComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__dropdown_menu.DropdownMenuComponent) {
    build() {
      this[_compView_0] = new material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownMenuComponent_0_5] = new material_menu__dropdown_menu.DropdownMenuComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_DropdownMenuComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDropdownMenuComponent()).new(0, this, this.rootEl, this[_DropdownMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_DropdownMenuComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DropdownMenuComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_DropdownMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownMenuComponent_0_5] = null;
    material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.setMethodSignature(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__dropdown_menu.DropdownMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0, "package:angular_components/material_menu/dropdown_menu.template.dart");
  dart.setFieldSignature(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__dropdown_menu$46template.ViewDropdownMenuComponent0),
    [_DropdownMenuComponent_0_5]: dart.fieldType(material_menu__dropdown_menu.DropdownMenuComponent)
  }));
  material_menu__dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__dropdown_menu$46template._ViewDropdownMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__dropdown_menu$46template, {
    /*material_menu__dropdown_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__dropdown_menu$46template.initReflector = function() {
    if (dart.test(material_menu__dropdown_menu$46template._visited)) {
      return;
    }
    material_menu__dropdown_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__dropdown_menu.DropdownMenuComponent), material_menu__dropdown_menu$46template.DropdownMenuComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_menu__menu_popup$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.template.ddc", {
    "package:angular_components/material_menu/dropdown_menu.template.dart": material_menu__dropdown_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.template.dart"],"names":[],"mappings":"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","file":"dropdown_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu$46template: material_menu__dropdown_menu$46template
  };
});

//# sourceMappingURL=dropdown_menu.template.ddc.js.map
