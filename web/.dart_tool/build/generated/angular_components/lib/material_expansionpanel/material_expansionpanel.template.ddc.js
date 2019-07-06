define(['dart_sdk', 'packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/id/id', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/utils/angular/id/id.template', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/runtime/queries', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_expansionpanel$46scss$46css, text_binding, modules, change_detection, material_yes_no_buttons, button_decorator, button_decorator$, keyboard_only_focus_indicator, dom_service, id, id_generator, id$, deferred_content, deferred_content_aware, queries, interpolate, material_expansionpanel, material_icon, material_icon$, material_yes_no_buttons$, has_disabled, focus, focus_interface, angular, deferred_content$, deferred_content_aware$, focus$, keyboard_only_focus_indicator$, has_disabled$, async_action, observable, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_expansionpanel__material_expansionpanel$46scss$46css$46shim = material_expansionpanel$46scss$46css.material_expansionpanel__material_expansionpanel$46scss$46css$46shim;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
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
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__angular__id__id = id.utils__angular__id__id;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const utils__angular__id__id$46template = id$.utils__angular__id__id$46template;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__runtime__queries = queries.src__runtime__queries;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons$.material_yes_no_buttons__material_yes_no_buttons$46template;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus = focus.focus__focus;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_expansionpanel__material_expansionpanel$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let VoidToAutoIdDirective = () => (VoidToAutoIdDirective = dart.constFn(dart.fnType(utils__angular__id__id.AutoIdDirective, [])))();
  let VoidToDeferredContentDirective = () => (VoidToDeferredContentDirective = dart.constFn(dart.fnType(content__deferred_content.DeferredContentDirective, [])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let ListOfHtmlElement = () => (ListOfHtmlElement = dart.constFn(core.List$(html.HtmlElement)))();
  let _ViewMaterialExpansionPanel5ToListOfHtmlElement = () => (_ViewMaterialExpansionPanel5ToListOfHtmlElement = dart.constFn(dart.fnType(ListOfHtmlElement(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5])))();
  let _ViewMaterialExpansionPanel4ToListOfHtmlElement = () => (_ViewMaterialExpansionPanel4ToListOfHtmlElement = dart.constFn(dart.fnType(ListOfHtmlElement(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4])))();
  let JSArrayOfButtonDirective = () => (JSArrayOfButtonDirective = dart.constFn(_interceptors.JSArray$(button_decorator__button_decorator.ButtonDirective)))();
  let ListOfButtonDirective = () => (ListOfButtonDirective = dart.constFn(core.List$(button_decorator__button_decorator.ButtonDirective)))();
  let _ViewMaterialExpansionPanel6ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel6ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6])))();
  let _ViewMaterialExpansionPanel7ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel7ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7])))();
  let JSArrayOfListOfButtonDirective = () => (JSArrayOfListOfButtonDirective = dart.constFn(_interceptors.JSArray$(ListOfButtonDirective())))();
  let _ViewMaterialExpansionPanel5ToListOfButtonDirective = () => (_ViewMaterialExpansionPanel5ToListOfButtonDirective = dart.constFn(dart.fnType(ListOfButtonDirective(), [material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5])))();
  let AppViewOfMaterialExpansionPanel = () => (AppViewOfMaterialExpansionPanel = dart.constFn(src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let AppViewAndintToAppViewOfMaterialExpansionPanel = () => (AppViewAndintToAppViewOfMaterialExpansionPanel = dart.constFn(dart.fnType(AppViewOfMaterialExpansionPanel(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialExpansionPanel = () => (ComponentFactoryOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToMaterialExpansionPanel = () => (VoidToMaterialExpansionPanel = dart.constFn(dart.fnType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, [])))();
  let ComponentRefOfMaterialExpansionPanel = () => (ComponentRefOfMaterialExpansionPanel = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel*/get styles$MaterialExpansionPanel() {
      return [material_expansionpanel__material_expansionpanel$46scss$46css$46shim.styles];
    }
  });
  const _query_action_1_4_isDirty = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_query_action_1_4_isDirty");
  const _query_mainContent_1_2_isDirty = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_query_mainContent_1_2_isDirty");
  const _query_contentWrapper_1_5_isDirty = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_query_contentWrapper_1_5_isDirty");
  const _query_expandCollapseButton_1_6_isDirty = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_query_expandCollapseButton_1_6_isDirty");
  const _textBinding_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_textBinding_6");
  const _KeyUpBoundaryDirective_0_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_KeyUpBoundaryDirective_0_5");
  const _ButtonDirective_2_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_ButtonDirective_2_5");
  const _KeyboardOnlyFocusIndicatorDirective_2_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_2_6");
  const _appEl_3 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_3_9");
  const _appEl_7 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_7_9");
  const _AutoIdDirective_8_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_AutoIdDirective_8_5");
  const _appEl_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_9");
  const _NgIf_9_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_9_9");
  const _appEl_10 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_10_9");
  const _AutoIdDirective_11_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_AutoIdDirective_11_5");
  const _appEl_12 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_12");
  const _DeferredContentDirective_12_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_DeferredContentDirective_12_9");
  const _expr_0 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_9");
  const _expr_14 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_expr_14");
  const _el_0 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_el_0");
  const _el_1 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_el_1");
  const _el_2 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_el_2");
  const _el_8 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_el_8");
  const _el_11 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_el_11");
  const _handle_click_2_1 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_handle_click_2_1");
  let const$;
  const _ButtonDirective_0_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_ButtonDirective_0_5");
  const _appEl_2 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_2");
  const _appEl_4 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_4");
  material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0 = class ViewMaterialExpansionPanel0 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "panel themeable");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "keyupBoundary", "");
      this.addShimC(this[_el_0]);
      this[_KeyUpBoundaryDirective_0_5] = new material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective.new(this[_el_0]);
      this[_el_1] = src__runtime__dom_helpers.appendElement(doc, this[_el_0], "header");
      src__runtime__dom_helpers.setAttribute(this[_el_1], "role", "presentation");
      this.addShimE(this[_el_1]);
      this[_el_2] = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
      src__runtime__dom_helpers.setAttribute(this[_el_2], "buttonDecorator", "");
      this.updateChildClass(this[_el_2], "header");
      src__runtime__dom_helpers.setAttribute(this[_el_2], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_2]);
      this[_ButtonDirective_2_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_2], null));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(_el_4, "panel-name");
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _el_5 = src__runtime__dom_helpers.appendElement(doc, _el_4, "p");
      this.updateChildClass(html.HtmlElement._check(_el_5), "primary-text");
      this.addShimE(_el_5);
      _el_5[$append](this[_textBinding_6].element);
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(_el_4);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_el_8] = src__runtime__dom_helpers.appendDiv(doc, this[_el_2]);
      src__runtime__dom_helpers.setAttribute(this[_el_8], "autoId", "");
      this.updateChildClass(this[_el_8], "panel-description");
      this.addShimC(this[_el_8]);
      this[_AutoIdDirective_8_5] = new utils__angular__id__id$46template.AutoIdDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__id__id.AutoIdDirective, dart.wrapType(utils__angular__id__id.AutoIdDirective), dart.fn(() => new utils__angular__id__id.AutoIdDirective.new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), null), VoidToAutoIdDirective())) : new utils__angular__id__id.AutoIdDirective.new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), null));
      this.project(this[_el_8], 1);
      let _anchor_9 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 2, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 1, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_11] = src__runtime__dom_helpers.appendElement(doc, this[_el_0], "main");
      src__runtime__dom_helpers.setAttribute(this[_el_11], "autoId", "");
      src__runtime__dom_helpers.setAttribute(this[_el_11], "role", "presentation");
      this.addShimE(this[_el_11]);
      this[_AutoIdDirective_11_5] = new utils__angular__id__id$46template.AutoIdDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__id__id.AutoIdDirective, dart.wrapType(utils__angular__id__id.AutoIdDirective), dart.fn(() => new utils__angular__id__id.AutoIdDirective.new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), null), VoidToAutoIdDirective())) : new utils__angular__id__id.AutoIdDirective.new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), null));
      let _anchor_12 = src__runtime__dom_helpers.appendAnchor(this[_el_11]);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 11, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5, AppViewAndintToAppViewOfvoid()));
      this[_DeferredContentDirective_12_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(content__deferred_content.DeferredContentDirective, dart.wrapType(content__deferred_content.DeferredContentDirective), dart.fn(() => new content__deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, content__deferred_content_aware.DeferredContentAware._check(this.parentView.injectorGet(dart.wrapType(content__deferred_content_aware.DeferredContentAware), this.viewData.parentIndex))), VoidToDeferredContentDirective())) : new content__deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, content__deferred_content_aware.DeferredContentAware._check(this.parentView.injectorGet(dart.wrapType(content__deferred_content_aware.DeferredContentAware), this.viewData.parentIndex)));
      this[_el_2][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_2_1)));
      this[_el_2][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_2_5].instance, 'handleKeyPress')));
      this[_el_2][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'keydown')));
      this[_el_2][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'resetOutline')));
      this[_el_2][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onMouseInteraction')));
      this[_el_2][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_2_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'handleHeaderClick')));
      _ctx.mainPanel = html.HtmlElement._check(this[_el_11]);
      _ctx.headerPanel = html.HtmlElement._check(this[_el_1]);
      _ctx.headerContent = this[_el_2];
      this.init(const$ || (const$ = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'keydown')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 12) {
        if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
          return this[_ButtonDirective_2_5].instance;
        }
        if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective)) {
          return this[_KeyUpBoundaryDirective_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_panelDescription = this[_AutoIdDirective_8_5].instance;
      let local_mainId = this[_AutoIdDirective_11_5].instance;
      let currVal_9 = dart.test(_ctx.disabled) || dart.test(_ctx.headerHidden);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_ButtonDirective_2_5].instance.disabled = currVal_9;
        this[_expr_9] = currVal_9;
      }
      this[_NgIf_3_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_7_9].ngIf = _ctx.secondaryText != null;
      this[_NgIf_9_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_10_9].ngIf = !dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.headerHidden);
      if (firstCheck) {
        this[_DeferredContentDirective_12_9].preserveDimensions = true;
        if (!(_ctx.forceContentWhenClosed == null)) {
          this[_DeferredContentDirective_12_9].deferredContentForceContent = _ctx.forceContentWhenClosed;
        }
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_mainContent_1_2_isDirty])) {
          _ctx.mainContent = src__runtime__queries.firstOrNull(html.HtmlElement, this[_appEl_12].mapNestedViews(html.HtmlElement, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => JSArrayOfHtmlElement().of([nestedView[_el_0]]), _ViewMaterialExpansionPanel5ToListOfHtmlElement())));
          this[_query_mainContent_1_2_isDirty] = false;
        }
        if (dart.test(this[_query_action_1_4_isDirty])) {
          _ctx.actionContent = src__runtime__queries.firstOrNull(html.HtmlElement, this[_appEl_10].mapNestedViews(html.HtmlElement, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, dart.fn(nestedView => JSArrayOfHtmlElement().of([nestedView[_el_0]]), _ViewMaterialExpansionPanel4ToListOfHtmlElement())));
          this[_query_action_1_4_isDirty] = false;
        }
        if (dart.test(this[_query_contentWrapper_1_5_isDirty])) {
          _ctx.contentWrapper = src__runtime__queries.firstOrNull(html.HtmlElement, this[_appEl_12].mapNestedViews(html.HtmlElement, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => JSArrayOfHtmlElement().of([nestedView[_el_1]]), _ViewMaterialExpansionPanel5ToListOfHtmlElement())));
          this[_query_contentWrapper_1_5_isDirty] = false;
        }
        if (dart.test(this[_query_expandCollapseButton_1_6_isDirty])) {
          _ctx.expandCollapse = src__runtime__queries.firstOrNull(button_decorator__button_decorator.ButtonDirective, src__runtime__queries.flattenNodes(button_decorator__button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([JSArrayOfButtonDirective().of([this[_ButtonDirective_2_5].instance]), this[_appEl_12].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, dart.fn(nestedView => src__runtime__queries.flattenNodes(button_decorator__button_decorator.ButtonDirective, JSArrayOfListOfButtonDirective().of([nestedView[_appEl_2].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel6ToListOfButtonDirective())), nestedView[_appEl_4].mapNestedViews(button_decorator__button_decorator.ButtonDirective, material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, dart.fn(nestedView => JSArrayOfButtonDirective().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel7ToListOfButtonDirective()))])), _ViewMaterialExpansionPanel5ToListOfButtonDirective()))])));
          this[_query_expandCollapseButton_1_6_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "open", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.anotherExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "background", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.headerHidden;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_1]), "hidden", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = !dart.test(_ctx.isExpanded);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_2], "closed", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "aria-expanded", currVal_4 == null ? null : dart.toString(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disableHeaderExpansion;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_2], "disable-header-expansion", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.headerMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "aria-label", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = local_panelDescription.id;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "aria-describedby", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_mainId.id;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "aria-controls", currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      this[_ButtonDirective_2_5].detectHostChanges(this, this[_el_2]);
      this[_textBinding_6].updateText(src__runtime__interpolate.interpolateString0(_ctx.name));
      this[_AutoIdDirective_8_5].detectHostChanges(this, this[_el_8]);
      let currVal_14 = !dart.test(_ctx.isExpanded);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_11]), "hidden", currVal_14);
        this[_expr_14] = currVal_14;
      }
      this[_AutoIdDirective_11_5].detectHostChanges(this, this[_el_11]);
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_12].destroyNestedViews();
      this[_DeferredContentDirective_12_9].ngOnDestroy();
    }
    [_handle_click_2_1]($event) {
      this[_ButtonDirective_2_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6].onMouseInteraction();
    }
    initComponentStyles() {
      let styles = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles;
      if (styles == null) {
        material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = styles = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanel, material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new = function(parentView, parentIndex) {
    this[_query_action_1_4_isDirty] = true;
    this[_query_mainContent_1_2_isDirty] = true;
    this[_query_contentWrapper_1_5_isDirty] = true;
    this[_query_expandCollapseButton_1_6_isDirty] = true;
    this[_textBinding_6] = new src__runtime__text_binding.TextBinding.new();
    this[_KeyUpBoundaryDirective_0_5] = null;
    this[_ButtonDirective_2_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_2_6] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_AutoIdDirective_8_5] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_AutoIdDirective_11_5] = null;
    this[_appEl_12] = null;
    this[_DeferredContentDirective_12_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_14] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_8] = null;
    this[_el_11] = null;
    material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-expansionpanel"));
  }).prototype = material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_click_2_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    [_query_action_1_4_isDirty]: dart.fieldType(core.bool),
    [_query_mainContent_1_2_isDirty]: dart.fieldType(core.bool),
    [_query_contentWrapper_1_5_isDirty]: dart.fieldType(core.bool),
    [_query_expandCollapseButton_1_6_isDirty]: dart.fieldType(core.bool),
    [_textBinding_6]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_KeyUpBoundaryDirective_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.KeyUpBoundaryDirective),
    [_ButtonDirective_2_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_2_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_AutoIdDirective_8_5]: dart.fieldType(utils__angular__id__id$46template.AutoIdDirectiveNgCd),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_AutoIdDirective_11_5]: dart.fieldType(utils__angular__id__id$46template.AutoIdDirectiveNgCd),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_12_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_8]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, {
    /*material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelNgFactory*/get _MaterialExpansionPanelNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialExpansionPanel()).new("material-expansionpanel", dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, AppViewAndintToAppViewOfMaterialExpansionPanel())));
    }
  });
  dart.copyProperties(material_expansionpanel__material_expansionpanel$46template, {
    get MaterialExpansionPanelNgFactory() {
      return material_expansionpanel__material_expansionpanel$46template._MaterialExpansionPanelNgFactory;
    }
  });
  const _compView_0 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_compView_0");
  const _MaterialIconComponent_0_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_MaterialIconComponent_0_5");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1 = class _ViewMaterialExpansionPanel1 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleExpandIconClick')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel1.new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_textBinding_1");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2 = class _ViewMaterialExpansionPanel2 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(html.HtmlElement._check(_el_0), "secondary-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.secondaryText));
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel2.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3 = class _ViewMaterialExpansionPanel3 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleExpandIconClick')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel3.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4 = class _ViewMaterialExpansionPanel4 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "action");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 2);
      this.init1(this[_el_0]);
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_action_1_4_isDirty] = true;
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel4.new(parentView, parentIndex);
  };
  const _NgIf_2_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_2_9");
  const _NgIf_4_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_4_9");
  const _appEl_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_5_9");
  const _appEl_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_NgIf_6_9");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5 = class _ViewMaterialExpansionPanel5 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "content-wrapper");
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 3);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_4_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_5_9].ngIf = !dart.test(_ctx.showSaveCancel);
      this[_NgIf_6_9].ngIf = _ctx.showSaveCancel;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.hideExpandedHeader;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "hidden-header", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_mainContent_1_2_isDirty] = true;
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView)[_query_contentWrapper_1_5_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel5.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_MaterialIconComponent_0_6");
  const _KeyboardOnlyFocusIndicatorDirective_0_7 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_0_7");
  const _handle_click_0_1 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_handle_click_0_1");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6 = class _ViewMaterialExpansionPanel6 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'collapse')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_mainId = src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView.parentView)[_AutoIdDirective_11_5].instance;
      changed = false;
      let currVal_3 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_0_6].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-expanded", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_mainId.id;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-controls", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.closePanelMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_click_0_1]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel6.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7 = class _ViewMaterialExpansionPanel7 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'collapse')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_2 = _ctx.expandIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_0_6].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-expanded", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closePanelMsg;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_click_0_1]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel7.new(parentView, parentIndex);
  };
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8 = class _ViewMaterialExpansionPanel8 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "toolbelt");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.project(_el_0, 4);
      this.init1(_el_0);
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.new = function(parentView, parentIndex) {
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), [])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel8.new(parentView, parentIndex);
  };
  const _MaterialYesNoButtonsComponent_0_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_MaterialYesNoButtonsComponent_0_5");
  const _EnterAcceptsDirective_0_6 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_EnterAcceptsDirective_0_6");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9 = class _ViewMaterialExpansionPanel9 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "action-buttons");
      src__runtime__dom_helpers.setAttribute(_el_0, "reverse", "");
      this.addShimC(_el_0);
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_EnterAcceptsDirective_0_6] = new material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective.new(this[_MaterialYesNoButtonsComponent_0_5], _el_0, src__runtime__optimizations.unsafeCast(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0, this.parentView.parentView)[_KeyUpBoundaryDirective_0_5]);
      this[_compView_0].create0(this[_MaterialYesNoButtonsComponent_0_5]);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_0_5].yes.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'doSave')));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_0_5].no.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'doCancel')));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialYesNoButtonsComponent_0_5];
        }
        if (token === dart.wrapType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective)) {
          return this[_EnterAcceptsDirective_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.saveText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.cancelText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_0_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.saveDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesDisabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.cancelDisplayed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialYesNoButtonsComponent_0_5].noDisplayed = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeSaveCancelAction;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_0_5].pending = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_5 = _ctx.enterAccepts;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_EnterAcceptsDirective_0_6].enterAccepts = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_EnterAcceptsDirective_0_6].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    this[_EnterAcceptsDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    [_compView_0]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_EnterAcceptsDirective_0_6]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.EnterAcceptsDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanel9.new(parentView, parentIndex);
  };
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template.styles$MaterialExpansionPanelHost*/get styles$MaterialExpansionPanelHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialExpansionPanel_0_5 = dart.privateName(material_expansionpanel__material_expansionpanel$46template, "_MaterialExpansionPanel_0_5");
  material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0 = class _ViewMaterialExpansionPanelHost0 extends src__core__linker__app_view.AppView$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) {
    build() {
      this[_compView_0] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialExpansionPanel_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), dart.fn(() => new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_0], utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, null), VoidToMaterialExpansionPanel())) : new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_0], utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialExpansionPanel_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialExpansionPanel()).new(0, this, this.rootEl, this[_MaterialExpansionPanel_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus.FocusableItem) || token === dart.wrapType(focus__focus_interface.Focusable)) && 0 === nodeIndex) {
        return this[_MaterialExpansionPanel_0_5];
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
        this[_MaterialExpansionPanel_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialExpansionPanel_0_5].ngOnDestroy();
    }
  };
  (material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialExpansionPanel_0_5] = null;
    material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart");
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    [_compView_0]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_0_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)
  }));
  material_expansionpanel__material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0 = function(parentView, parentIndex) {
    return new material_expansionpanel__material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_expansionpanel__material_expansionpanel$46template, {
    /*material_expansionpanel__material_expansionpanel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_expansionpanel__material_expansionpanel$46template.initReflector = function() {
    if (dart.test(material_expansionpanel__material_expansionpanel$46template._visited)) {
      return;
    }
    material_expansionpanel__material_expansionpanel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), material_expansionpanel__material_expansionpanel$46template.MaterialExpansionPanelNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    model__action__async_action$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__angular__id__id$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.template.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart": material_expansionpanel__material_expansionpanel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.template.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.template.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel$46template: material_expansionpanel__material_expansionpanel$46template
  };
});

//# sourceMappingURL=material_expansionpanel.template.ddc.js.map
