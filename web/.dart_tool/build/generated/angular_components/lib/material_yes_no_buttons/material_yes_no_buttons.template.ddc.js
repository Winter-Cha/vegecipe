define(['dart_sdk', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_button/material_button', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/material_spinner/material_spinner.template', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template'], function(dart_sdk, material_yes_no_buttons$46scss$46css, modules, change_detection, material_button, queries, material_yes_no_buttons, material_spinner, material_spinner$, text_binding, material_button$, focus, dom_service, modal, popup_hierarchy, dark_theme, button_decorator, has_disabled, interpolate, angular, focus$, has_disabled$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim = material_yes_no_buttons$46scss$46css.material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim;
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
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_button__material_button = material_button.material_button__material_button;
  const src__runtime__queries = queries.src__runtime__queries;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const material_spinner__material_spinner$46template = material_spinner.material_spinner__material_spinner$46template;
  const material_spinner__material_spinner = material_spinner$.material_spinner__material_spinner;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const material_button__material_button$46template = material_button$.material_button__material_button$46template;
  const focus__focus = focus.focus__focus;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_yes_no_buttons__material_yes_no_buttons$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialButtonComponent = () => (JSArrayOfMaterialButtonComponent = dart.constFn(_interceptors.JSArray$(material_button__material_button.MaterialButtonComponent)))();
  let ListOfMaterialButtonComponent = () => (ListOfMaterialButtonComponent = dart.constFn(core.List$(material_button__material_button.MaterialButtonComponent)))();
  let _ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent = () => (_ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent = dart.constFn(dart.fnType(ListOfMaterialButtonComponent(), [material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2])))();
  let _ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent = () => (_ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent = dart.constFn(dart.fnType(ListOfMaterialButtonComponent(), [material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3])))();
  let AppViewOfMaterialYesNoButtonsComponent = () => (AppViewOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  let AppViewAndintToAppViewOfMaterialYesNoButtonsComponent = () => (AppViewAndintToAppViewOfMaterialYesNoButtonsComponent = dart.constFn(dart.fnType(AppViewOfMaterialYesNoButtonsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialYesNoButtonsComponent = () => (ComponentFactoryOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let ComponentRefOfMaterialYesNoButtonsComponent = () => (ComponentRefOfMaterialYesNoButtonsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent*/get styles$MaterialYesNoButtonsComponent() {
      return [material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim.styles];
    }
  });
  const _query_yesButton_1_0_isDirty = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_query_yesButton_1_0_isDirty");
  const _query_noButton_1_1_isDirty = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_query_noButton_1_1_isDirty");
  const _appEl_0 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_NgIf_0_9");
  const _appEl_1 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_NgIf_1_9");
  const _appEl_2 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_NgIf_2_9");
  const _MaterialButtonComponent_0_7 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_MaterialButtonComponent_0_7");
  material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0 = class ViewMaterialYesNoButtonsComponent0 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_yes_no_buttons/material_yes_no_buttons.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.pending;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.yesDisplayed);
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.noDisplayed);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_yesButton_1_0_isDirty])) {
          _ctx.yesButton = src__runtime__queries.firstOrNull(material_button__material_button.MaterialButtonComponent, this[_appEl_1].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_7]]), _ViewMaterialYesNoButtonsComponent2ToListOfMaterialButtonComponent())));
          this[_query_yesButton_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_noButton_1_1_isDirty])) {
          _ctx.noButton = src__runtime__queries.firstOrNull(material_button__material_button.MaterialButtonComponent, this[_appEl_2].mapNestedViews(material_button__material_button.MaterialButtonComponent, material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, dart.fn(nestedView => JSArrayOfMaterialButtonComponent().of([nestedView[_MaterialButtonComponent_0_7]]), _ViewMaterialYesNoButtonsComponent3ToListOfMaterialButtonComponent())));
          this[_query_noButton_1_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles;
      if (styles == null) {
        material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = styles = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent, material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new = function(parentView, parentIndex) {
    this[_query_yesButton_1_0_isDirty] = true;
    this[_query_noButton_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-yes-no-buttons"));
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    [_query_yesButton_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_noButton_1_1_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory*/get _MaterialYesNoButtonsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialYesNoButtonsComponent()).new("material-yes-no-buttons", dart.fn(material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0, AppViewAndintToAppViewOfMaterialYesNoButtonsComponent())));
    }
  });
  dart.copyProperties(material_yes_no_buttons__material_yes_no_buttons$46template, {
    get MaterialYesNoButtonsComponentNgFactory() {
      return material_yes_no_buttons__material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory;
    }
  });
  const _compView_1 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_compView_1");
  const _MaterialSpinnerComponent_1_5 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_MaterialSpinnerComponent_1_5");
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1 = class _ViewMaterialYesNoButtonsComponent1 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "btn spinner");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialSpinnerComponent_1_5] = new material_spinner__material_spinner.MaterialSpinnerComponent.new();
      this[_compView_1].create0(this[_MaterialSpinnerComponent_1_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSpinnerComponent_1_5] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), [])
  }));
  dart.setLibraryUri(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    [_compView_1]: dart.fieldType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0),
    [_MaterialSpinnerComponent_1_5]: dart.fieldType(material_spinner__material_spinner.MaterialSpinnerComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_textBinding_1");
  const _compView_0 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_compView_0");
  const _AutoFocusDirective_0_5 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_AutoFocusDirective_0_5");
  const _AcxDarkTheme_0_6 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_AcxDarkTheme_0_6");
  const _expr_0 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_expr_4");
  const _el_0 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_el_0");
  let const$;
  let const$0;
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2 = class _ViewMaterialYesNoButtonsComponent2 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-yes");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex))), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_7], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onYes')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_2 = _ctx.yesAutoFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = dart.test(_ctx.yesDisabled) || dart.test(_ctx.disabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.yesRaised) || dart.test(_ctx.raised);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.yesHighlighted;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "highlighted", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.yesAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.yesText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, this.parentView)[_query_yesButton_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AutoFocusDirective_0_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new(parentView, parentIndex);
  };
  let const$1;
  let const$2;
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3 = class _ViewMaterialYesNoButtonsComponent3 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-no");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex))), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGetOptional(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_7], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onNo')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.noAutoFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = dart.test(_ctx.noDisabled) || dart.test(_ctx.disabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.raised;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.noAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.noText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, this.parentView)[_query_noButton_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AutoFocusDirective_0_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponentHost*/get styles$MaterialYesNoButtonsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialYesNoButtonsComponent_0_5 = dart.privateName(material_yes_no_buttons__material_yes_no_buttons$46template, "_MaterialYesNoButtonsComponent_0_5");
  material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0 = class _ViewMaterialYesNoButtonsComponentHost0 extends src__core__linker__app_view.AppView$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent) {
    build() {
      this[_compView_0] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialYesNoButtonsComponent()).new(0, this, this.rootEl, this[_MaterialYesNoButtonsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialYesNoButtonsComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.prototype;
  dart.addTypeTests(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.setMethodSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart");
  dart.setFieldSignature(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent)
  }));
  material_yes_no_buttons__material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0 = function(parentView, parentIndex) {
    return new material_yes_no_buttons__material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_yes_no_buttons__material_yes_no_buttons$46template, {
    /*material_yes_no_buttons__material_yes_no_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_yes_no_buttons__material_yes_no_buttons$46template.initReflector = function() {
    if (dart.test(material_yes_no_buttons__material_yes_no_buttons$46template._visited)) {
      return;
    }
    material_yes_no_buttons__material_yes_no_buttons$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent), material_yes_no_buttons__material_yes_no_buttons$46template.MaterialYesNoButtonsComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_spinner__material_spinner$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template.ddc", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart": material_yes_no_buttons__material_yes_no_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.template.dart"],"names":[],"mappings":"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","file":"material_yes_no_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons$46template: material_yes_no_buttons__material_yes_no_buttons$46template
  };
});

//# sourceMappingURL=material_yes_no_buttons.template.ddc.js.map
