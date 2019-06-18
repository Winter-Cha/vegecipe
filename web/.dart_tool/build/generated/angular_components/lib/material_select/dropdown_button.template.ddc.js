define(['dart_sdk', 'packages/angular_components/button_decorator/button_decorator.scss.css.shim', 'packages/angular_components/material_select/dropdown_button.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_select/dropdown_button', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, button_decorator$46scss$46css, dropdown_button$46scss$46css, modules, change_detection, button_decorator, button_decorator$, keyboard_only_focus_indicator, dom_service, dropdown_button, text_binding, interpolate, glyph, glyph$, has_disabled, focus_interface, angular, focus_interface$, keyboard_only_focus_indicator$, has_disabled$, button_wrapper, focusable_mixin, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const button_decorator__button_decorator$46scss$46css$46shim = button_decorator$46scss$46css.button_decorator__button_decorator$46scss$46css$46shim;
  const material_select__dropdown_button$46scss$46css$46shim = dropdown_button$46scss$46css.material_select__dropdown_button$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const angular$46template = angular.angular$46template;
  const focus__focus_interface$46template = focus_interface$.focus__focus_interface$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const mixins__button_wrapper$46template = button_wrapper.mixins__button_wrapper$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const material_select__dropdown_button$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $append = dartx.append;
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfDropdownButtonComponent = () => (AppViewOfDropdownButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent)))();
  let AppViewAndintToAppViewOfDropdownButtonComponent = () => (AppViewAndintToAppViewOfDropdownButtonComponent = dart.constFn(dart.fnType(AppViewOfDropdownButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDropdownButtonComponent = () => (ComponentFactoryOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__dropdown_button.DropdownButtonComponent)))();
  let ComponentRefOfDropdownButtonComponent = () => (ComponentRefOfDropdownButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent)))();
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponent*/get styles$DropdownButtonComponent() {
      return [button_decorator__button_decorator$46scss$46css$46shim.styles, material_select__dropdown_button$46scss$46css$46shim.styles];
    }
  });
  const _ButtonDirective_0_5 = dart.privateName(material_select__dropdown_button$46template, "_ButtonDirective_0_5");
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_select__dropdown_button$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  const _appEl_1 = dart.privateName(material_select__dropdown_button$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_select__dropdown_button$46template, "_NgIf_1_9");
  const _appEl_3 = dart.privateName(material_select__dropdown_button$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(material_select__dropdown_button$46template, "_NgIf_3_9");
  const _appEl_4 = dart.privateName(material_select__dropdown_button$46template, "_appEl_4");
  const _NgIf_4_9 = dart.privateName(material_select__dropdown_button$46template, "_NgIf_4_9");
  const _expr_1 = dart.privateName(material_select__dropdown_button$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_select__dropdown_button$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_select__dropdown_button$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_select__dropdown_button$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_select__dropdown_button$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_select__dropdown_button$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_select__dropdown_button$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_select__dropdown_button$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_select__dropdown_button$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_select__dropdown_button$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_select__dropdown_button$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_select__dropdown_button$46template, "_expr_12");
  const _el_0 = dart.privateName(material_select__dropdown_button$46template, "_el_0");
  const _handle_focus_0_0 = dart.privateName(material_select__dropdown_button$46template, "_handle_focus_0_0");
  const _handle_blur_0_1 = dart.privateName(material_select__dropdown_button$46template, "_handle_blur_0_1");
  const _handle_click_0_2 = dart.privateName(material_select__dropdown_button$46template, "_handle_click_0_2");
  material_select__dropdown_button$46template.ViewDropdownButtonComponent0 = class ViewDropdownButtonComponent0 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/dropdown_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
      this.project(this[_el_0], 0);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_0)));
      this[_el_0][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_1)));
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_2)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      _ctx.button = this[_ButtonDirective_0_5].instance;
      this.init0();
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_10 = _ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_ButtonDirective_0_5].instance.role = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tabbable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_ButtonDirective_0_5].instance.tabbable = currVal_12;
        this[_expr_12] = currVal_12;
      }
      this[_NgIf_1_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_3_9].ngIf = _ctx.buttonIcon != null;
      this[_NgIf_4_9].ngIf = _ctx.invalid;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.uuid == null)) {
          src__runtime__dom_helpers.updateAttribute(this[_el_0], "id", _ctx.uuid);
        }
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.ariaLabelledBy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.ariaDescribedBy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.showButtonBorder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "border", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.invalid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-haspopup", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.ariaOwns;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-owns", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.ariaExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-expanded", currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.ariaActiveDescendant;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-activedescendant", currVal_9);
        this[_expr_9] = currVal_9;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
    [_handle_focus_0_0]($event) {
      let _ctx = this.ctx;
      _ctx.handleFocus(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(html.Event._check($event));
    }
    [_handle_blur_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.handleBlur(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].resetOutline();
    }
    [_handle_click_0_2]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    initComponentStyles() {
      let styles = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles;
      if (styles == null) {
        material_select__dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = styles = material_select__dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_select__dropdown_button$46template.styles$DropdownButtonComponent, material_select__dropdown_button$46template.ViewDropdownButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_el_0] = null;
    material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dropdown-button"));
  }).prototype = material_select__dropdown_button$46template.ViewDropdownButtonComponent0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.setMethodSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.String),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_select__dropdown_button$46template.ViewDropdownButtonComponent0, {
    /*material_select__dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template._DropdownButtonComponentNgFactory*/get _DropdownButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDropdownButtonComponent()).new("dropdown-button", dart.fn(material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, AppViewAndintToAppViewOfDropdownButtonComponent())));
    }
  });
  dart.copyProperties(material_select__dropdown_button$46template, {
    get DropdownButtonComponentNgFactory() {
      return material_select__dropdown_button$46template._DropdownButtonComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(material_select__dropdown_button$46template, "_textBinding_1");
  material_select__dropdown_button$46template._ViewDropdownButtonComponent1 = class _ViewDropdownButtonComponent1 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "button-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent1.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent1 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = dart.privateName(material_select__dropdown_button$46template, "_compView_0");
  const _GlyphComponent_0_5 = dart.privateName(material_select__dropdown_button$46template, "_GlyphComponent_0_5");
  const _expr_0 = dart.privateName(material_select__dropdown_button$46template, "_expr_0");
  material_select__dropdown_button$46template._ViewDropdownButtonComponent2 = class _ViewDropdownButtonComponent2 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "icon");
      this.addShimC(_el_0);
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(_el_0);
      this[_compView_0].create0(this[_GlyphComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.buttonIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_GlyphComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    this[_expr_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent2.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent2 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent2.new(parentView, parentIndex);
  };
  material_select__dropdown_button$46template._ViewDropdownButtonComponent3 = class _ViewDropdownButtonComponent3 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "error-text");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "alert");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.invalid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__runtime__interpolate.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-hidden", core.String._check(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.error));
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponent3.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), [])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponent3 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template.styles$DropdownButtonComponentHost*/get styles$DropdownButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DropdownButtonComponent_0_5 = dart.privateName(material_select__dropdown_button$46template, "_DropdownButtonComponent_0_5");
  material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0 = class _ViewDropdownButtonComponentHost0 extends src__core__linker__app_view.AppView$(material_select__dropdown_button.DropdownButtonComponent) {
    build() {
      this[_compView_0] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownButtonComponent_0_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDropdownButtonComponent()).new(0, this, this.rootEl, this[_DropdownButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus_interface.Focusable)) && 0 === nodeIndex) {
        return this[_DropdownButtonComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.prototype;
  dart.addTypeTests(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.setMethodSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__dropdown_button.DropdownButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_0_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent)
  }));
  material_select__dropdown_button$46template.viewFactory_DropdownButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_select__dropdown_button$46template._ViewDropdownButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__dropdown_button$46template, {
    /*material_select__dropdown_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__dropdown_button$46template.initReflector = function() {
    if (dart.test(material_select__dropdown_button$46template._visited)) {
      return;
    }
    material_select__dropdown_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__dropdown_button.DropdownButtonComponent), material_select__dropdown_button$46template.DropdownButtonComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus_interface$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    glyph__glyph$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    mixins__button_wrapper$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.template.ddc", {
    "package:angular_components/material_select/dropdown_button.template.dart": material_select__dropdown_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.template.dart"],"names":[],"mappings":"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","file":"dropdown_button.template.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button$46template: material_select__dropdown_button$46template
  };
});

//# sourceMappingURL=dropdown_button.template.ddc.js.map
