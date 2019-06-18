define(['dart_sdk', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/quiver/time', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/config', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/config.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/model.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_date_range_picker$46scss$46css, modules, change_detection, material_popup, button_decorator, button_decorator$, keyboard_only_focus_indicator, dom_service, popup_hierarchy, dom_popup_source, reference, focus_interface, dropdown_button, dropdown_button$, material_popup$, overlay_ref, zindexer, alignment, box, has_disabled, deferred_content_aware, material_dropdown_base, material_date_range_picker, text_binding, interpolate, next_prev_buttons, next_prev_buttons$, focus_trap, focus_trap$, date_range_editor, date_range_editor$, managed_zone, date_range_editor_host, time, material_button, dark_theme, material_button$, config, angular, deferred_content, focus, keyboard_only_focus_indicator$, has_disabled$, alignment$, popup, comparison, comparison_option, config$, date_range_editor_host$, model, module, preset, range, date, date_formatter, observable, css, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_date_range_picker$46scss$46css$46shim = material_date_range_picker$46scss$46css.material_datepicker__material_date_range_picker$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_select__dropdown_button$46template = dropdown_button.material_select__dropdown_button$46template;
  const material_select__dropdown_button = dropdown_button$.material_select__dropdown_button;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__math__box = box.model__math__box;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_datepicker__material_date_range_picker = material_date_range_picker.material_datepicker__material_date_range_picker;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const material_datepicker__date_range_editor$46template = date_range_editor.material_datepicker__date_range_editor$46template;
  const material_datepicker__date_range_editor = date_range_editor$.material_datepicker__date_range_editor;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const material_datepicker__date_range_editor_host = date_range_editor_host.material_datepicker__date_range_editor_host;
  const time$ = time.time;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_datepicker__config = config.material_datepicker__config;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content.content__deferred_content$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__comparison_option$46template = comparison_option.material_datepicker__comparison_option$46template;
  const material_datepicker__config$46template = config$.material_datepicker__config$46template;
  const material_datepicker__date_range_editor_host$46template = date_range_editor_host$.material_datepicker__date_range_editor_host$46template;
  const material_datepicker__model$46template = model.material_datepicker__model$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_datepicker__material_date_range_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $isNotEmpty = dartx.isNotEmpty;
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfMaterialDateRangePickerComponent = () => (AppViewOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialDateRangePickerComponent = () => (AppViewAndintToAppViewOfMaterialDateRangePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialDateRangePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDateRangePickerComponent = () => (ComponentFactoryOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  let VoidToDateRangeEditorComponent = () => (VoidToDateRangeEditorComponent = dart.constFn(dart.fnType(material_datepicker__date_range_editor.DateRangeEditorComponent, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let VoidToMaterialDateRangePickerComponent = () => (VoidToMaterialDateRangePickerComponent = dart.constFn(dart.fnType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, [])))();
  let ComponentRefOfMaterialDateRangePickerComponent = () => (ComponentRefOfMaterialDateRangePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)))();
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return [material_datepicker__material_date_range_picker$46scss$46css$46shim.styles];
    }
  });
  const _ButtonDirective_0_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_ButtonDirective_0_5");
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  const _PopupSourceDirective_0_7 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_PopupSourceDirective_0_7");
  const _appEl_1 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_NgIf_1_9");
  const _compView_4 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_4");
  const _DropdownButtonComponent_4_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_DropdownButtonComponent_4_5");
  const _appEl_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_NgIf_5_9");
  const _appEl_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_NgIf_6_9");
  const _compView_7 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_7");
  const _appEl_7 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_appEl_7");
  const _MaterialPopupComponent_7_8 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_MaterialPopupComponent_7_8");
  const __PopupHierarchy_7_11 = dart.privateName(material_datepicker__material_date_range_picker$46template, "__PopupHierarchy_7_11");
  const __PopupRef_7_12 = dart.privateName(material_datepicker__material_date_range_picker$46template, "__PopupRef_7_12");
  const _appEl_8 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_appEl_8");
  const _NgIf_8_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_NgIf_8_9");
  const _expr_1 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_4");
  const _expr_10 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_11");
  const _expr_13 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_13");
  const _expr_14 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_14");
  const _el_0 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_el_0");
  const _el_7 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_el_7");
  const _PopupHierarchy_7_11 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_PopupHierarchy_7_11");
  const _PopupRef_7_12 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_PopupRef_7_12");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  const _handle_focus_0_1 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_handle_focus_0_1");
  const _handle_click_0_3 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_handle_click_0_3");
  let const$8;
  material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    get [_PopupHierarchy_7_11]() {
      if (this[__PopupHierarchy_7_11] == null) {
        this[__PopupHierarchy_7_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupHierarchy_7_11];
    }
    get [_PopupRef_7_12]() {
      if (this[__PopupRef_7_12] == null) {
        this[__PopupRef_7_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupRef_7_12];
    }
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_range_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "main-content");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "dropdown-and-comparison");
      this.addShimC(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendSpan(doc, _el_2);
      this.updateChildClass(_el_3, "main-line");
      this.addShimE(_el_3);
      this[_compView_4] = new material_select__dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "menu-lookalike primary-range");
      this.addShimC(_el_4);
      this[_DropdownButtonComponent_4_5] = new material_select__dropdown_button.DropdownButtonComponent.new();
      this[_compView_4].create(this[_DropdownButtonComponent_4_5], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic))]));
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_2);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_7] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      parentRenderNode[$append](this[_el_7]);
      src__runtime__dom_helpers.setAttribute(this[_el_7], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_MaterialPopupComponent_7_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_7], this[_appEl_7], new src__core__linker__element_ref.ElementRef.new(this[_el_7])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$3 || (const$3 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_7], this[_appEl_7], new src__core__linker__element_ref.ElementRef.new(this[_el_7]));
      let _anchor_8 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_compView_7].create(this[_MaterialPopupComponent_7_8], JSArrayOfObject().of([const$6 || (const$6 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_8]]), const$7 || (const$7 = dart.constList([], dart.dynamic))]));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler0(html.Event, dart.bind(_ctx, 'initEditor')));
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_3)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_7_8].onOpen.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_7_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'close')));
      _ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      _ctx.popup = this[_MaterialPopupComponent_7_8];
      this.init(const$8 || (const$8 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(focus__focus_interface.Focusable)) && 4 === nodeIndex) {
          return this[_DropdownButtonComponent_4_5];
        }
        if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective)) {
          return this[_ButtonDirective_0_5].instance;
        }
      }
      if (7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_7_8];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_7_11];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef)) {
          return this[_PopupRef_7_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_7];
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      if (firstCheck) {
        this[_DropdownButtonComponent_4_5].tabbable = false;
        changed = true;
      }
      let currVal_1 = _ctx.formattedRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_4_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.dropdownButtonAriaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_4_5].buttonAriaLabel = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_4_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.error;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DropdownButtonComponent_4_5].error = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_6_9].ngIf = _ctx.hasComparison;
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_7_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_10 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialPopupComponent_7_8].preferredPositions = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = local_button;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialPopupComponent_7_8].source = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      this[_NgIf_8_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_7].updateChildClassNonHtml(this[_el_7], _ctx.popupClassName);
        }
      }
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_7_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_7_8].ngOnDestroy();
    }
    [_handle_focus_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.initEditor();
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(html.Event._check($event));
    }
    [_handle_click_0_3]($event) {
      this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_13 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_14);
        this[_expr_14] = currVal_14;
      }
    }
    initComponentStyles() {
      let styles = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = styles = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponent, material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_4] = null;
    this[_DropdownButtonComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_compView_7] = null;
    this[_appEl_7] = null;
    this[_MaterialPopupComponent_7_8] = null;
    this[__PopupHierarchy_7_11] = null;
    this[__PopupRef_7_12] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_el_0] = null;
    this[_el_7] = null;
    material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-date-range-picker"));
  }).prototype = material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_3]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_7_11]: dart.dynamic,
    [_PopupRef_7_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_4]: dart.fieldType(material_select__dropdown_button$46template.ViewDropdownButtonComponent0),
    [_DropdownButtonComponent_4_5]: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_7]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_7_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_7_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_7_12]: dart.fieldType(dart.dynamic),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory*/get _MaterialDateRangePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDateRangePickerComponent()).new("material-date-range-picker", dart.fn(material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, AppViewAndintToAppViewOfMaterialDateRangePickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_date_range_picker$46template, {
    get MaterialDateRangePickerComponentNgFactory() {
      return material_datepicker__material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_textBinding_1");
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.rangeTitle));
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  const _compView_0 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_0");
  const _NextPrevComponent_0_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_NextPrevComponent_0_5");
  const _expr_0 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_0");
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "next-prev-buttons");
      this.addShimC(_el_0);
      this[_NextPrevComponent_0_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create0(this[_NextPrevComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
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
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "comparison-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.formattedComparison));
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  const _textBinding_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_textBinding_9");
  const _FocusTrapComponent_0_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_FocusTrapComponent_0_5");
  const _compView_2 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_2");
  const _DateRangeEditorComponent_2_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_DateRangeEditorComponent_2_5");
  const _compView_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_6");
  const _AcxDarkTheme_6_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_AcxDarkTheme_6_5");
  const _MaterialButtonComponent_6_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_MaterialButtonComponent_6_6");
  const _compView_8 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_compView_8");
  const _AcxDarkTheme_8_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_AcxDarkTheme_8_5");
  const _MaterialButtonComponent_8_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_MaterialButtonComponent_8_6");
  const _expr_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_9");
  const _expr_12 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_12");
  const _expr_15 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_15");
  const _expr_16 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_expr_16");
  const _el_3 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_el_3");
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  const _handle_trigger_6_0 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_handle_trigger_6_0");
  const _handle_trigger_8_0 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_handle_trigger_8_0");
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "popup-contents");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_1), "wrapper");
      this.addShimC(html.HtmlElement._check(_el_1));
      this[_compView_2] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_DateRangeEditorComponent_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__date_range_editor.DateRangeEditorComponent, dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent), dart.fn(() => new material_datepicker__date_range_editor.DateRangeEditorComponent.new(_el_2, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.parentView.viewData.parentIndex)), material_datepicker__date_range_editor_host.DateRangeEditorHost._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_datepicker__date_range_editor_host.DateRangeEditorHost), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex))), VoidToDateRangeEditorComponent())) : new material_datepicker__date_range_editor.DateRangeEditorComponent.new(_el_2, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.parentView.viewData.parentIndex)), material_datepicker__date_range_editor_host.DateRangeEditorHost._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_datepicker__date_range_editor_host.DateRangeEditorHost), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)));
      this[_compView_2].create0(this[_DateRangeEditorComponent_2_5]);
      this.project(_el_1, 0);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "apply-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "separator");
      this.addShimC(_el_4);
      let _text_5 = src__runtime__dom_helpers.appendText(_el_4, " ");
      this[_compView_6] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this[_el_3][$append](_el_6);
      this.updateChildClassNonHtml(_el_6, "cancel");
      this.addShimC(_el_6);
      this[_AcxDarkTheme_6_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_6_6] = new material_button__material_button.MaterialButtonComponent.new(_el_6, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_6_5]), this[_compView_6], null);
      let _text_7 = src__runtime__dom_helpers.createText(src__runtime__interpolate.interpolateString0(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg));
      this[_compView_6].create(this[_MaterialButtonComponent_6_6], JSArrayOfObject().of([JSArrayOfText().of([_text_7])]));
      this[_compView_8] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootEl;
      this[_el_3][$append](_el_8);
      this.updateChildClassNonHtml(_el_8, "apply");
      this.addShimC(_el_8);
      this[_AcxDarkTheme_8_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$14 || (const$14 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_8_6] = new material_button__material_button.MaterialButtonComponent.new(_el_8, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_8_5]), this[_compView_8], null);
      this[_compView_8].create(this[_MaterialButtonComponent_8_6], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_9].element])]));
      this[_compView_0].create(this[_FocusTrapComponent_0_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_1])]));
      let subscription_0 = this[_DateRangeEditorComponent_2_5].presetRangeSelected.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_6_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_6_0)));
      let subscription_2 = this[_MaterialButtonComponent_8_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_8_0)));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_6_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_6_6];
        }
      }
      if (8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_8_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_8_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.model == null)) {
          this[_DateRangeEditorComponent_2_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.movingStartMaintainsLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeEditorComponent_2_5].movingStartMaintainsLength = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.dateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeEditorComponent_2_5].dateFormat = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeEditorComponent_2_5].activeDateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.supportsClearRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeEditorComponent_2_5].supportsClearRange = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.supportsCustomRange;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeEditorComponent_2_5].supportsCustomRange = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.relativeDaysToToday;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeEditorComponent_2_5].relativeDaysToToday = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.allowHighlightUpdates;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeEditorComponent_2_5].allowHighlightUpdates = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.supportsComparison;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DateRangeEditorComponent_2_5].supportsComparison = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_DateRangeEditorComponent_2_5].compact = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.supportsDaysInputs;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_DateRangeEditorComponent_2_5].supportsDaysInputs = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.presets;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DateRangeEditorComponent_2_5].presets = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_DateRangeEditorComponent_2_5].minDate = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_DateRangeEditorComponent_2_5].maxDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.isCalendarCreated;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_DateRangeEditorComponent_2_5].isCalendarCreated = currVal_15;
        this[_expr_15] = currVal_15;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_2_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      let currVal_0 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectHostChanges(firstCheck);
      let currVal_16 = _ctx.applyBarVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_3], "visible", currVal_16);
        this[_expr_16] = currVal_16;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_8].detectHostChanges(firstCheck);
      this[_textBinding_9].updateText(src__runtime__interpolate.interpolateString0(_ctx.applyButtonMsg));
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_2_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_6_0]($event) {
      let _ctx = this.ctx;
      _ctx.cancel();
      dart.dsend($event, 'preventDefault', []);
    }
    [_handle_trigger_8_0]($event) {
      let _ctx = this.ctx;
      _ctx.apply(html.UIEvent._check($event));
      dart.dsend($event, 'preventDefault', []);
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_9] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_compView_2] = null;
    this[_DateRangeEditorComponent_2_5] = null;
    this[_compView_6] = null;
    this[_AcxDarkTheme_6_5] = null;
    this[_MaterialButtonComponent_6_6] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_expr_0] = null;
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
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_trigger_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_8_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_textBinding_9]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_compView_2]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_2_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent),
    [_compView_6]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_6_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_6_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_8]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_8_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_8_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(core.bool),
    [_expr_16]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDateRangePickerComponent_0_5 = dart.privateName(material_datepicker__material_date_range_picker$46template, "_MaterialDateRangePickerComponent_0_5");
  let const$15;
  let const$16;
  material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateRangePickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent, dart.wrapType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), dart.fn(() => new material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), material_datepicker__config.DatepickerConfig._check(this.injectorGetOptional(dart.wrapType(material_datepicker__config.DatepickerConfig), this.viewData.parentIndex)), null, src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToMaterialDateRangePickerComponent())) : new material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), material_datepicker__config.DatepickerConfig._check(this.injectorGetOptional(dart.wrapType(material_datepicker__config.DatepickerConfig), this.viewData.parentIndex)), null, src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateRangePickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDateRangePickerComponent()).new(0, this, this.rootEl, this[_MaterialDateRangePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_datepicker__date_range_editor_host.DateRangeEditorHost) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider)) && 0 === nodeIndex) {
        return this[_MaterialDateRangePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialDateRangePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialDateRangePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateRangePickerComponent_0_5] = null;
    material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0),
    [_MaterialDateRangePickerComponent_0_5]: dart.fieldType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent)
  }));
  material_datepicker__material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_date_range_picker$46template, {
    /*material_datepicker__material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_date_range_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_date_range_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_date_range_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_date_range_picker.MaterialDateRangePickerComponent), material_datepicker__material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__config$46template.initReflector();
    material_datepicker__date_range_editor$46template.initReflector();
    material_datepicker__date_range_editor_host$46template.initReflector();
    material_datepicker__model$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__dropdown_button$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_datepicker__material_date_range_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_datepicker__material_date_range_picker$46template
  };
});

//# sourceMappingURL=material_date_range_picker.template.ddc.js.map
