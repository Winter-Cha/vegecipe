define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/material_select/material_select', 'packages/quiver/time', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/managed_zone/interface.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template'], function(dart_sdk, date_range_editor$46scss$46css, modules, change_detection, material_calendar_picker, queries, material_month_picker, date_range_editor, material_select, material_select$, time, $interface, angular_2, dom_service, has_disabled, has_renderer, selection_container, scroll_host_interface, material_select_item, material_select_item$, material_dropdown_base, activation_handler, interpolate, text_binding, material_icon, button_decorator, button_decorator$, material_icon$, tooltip_controller, disposer, module, icon_tooltip, dom_popup_source, preset, material_popup, material_button, dark_theme, material_button$, popup_hierarchy, reference, focus_interface, material_popup$, overlay_ref, zindexer, alignment, box, deferred_content_aware, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, base_material_input, comparison_range_editor$46scss$46css, comparison_range_editor, date_range_input, date_range_input$, date, calendar, keyboard_only_focus_indicator, next_prev_buttons, next_prev_buttons$, material_calendar_picker$, showhide, material_month_picker$, managed_zone, date_range_editor_host, angular, focus, keyboard_only_focus_indicator$, popup, calendar$, date_range_editor_host$, module$, preset$, range, material_ripple, material_tooltip, date$, date_formatter, observable, $interface$, angular_2$, dom_service$, showhide$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_editor$46scss$46css$46shim = date_range_editor$46scss$46css.material_datepicker__date_range_editor$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const src__runtime__queries = queries.src__runtime__queries;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const material_datepicker__date_range_editor = date_range_editor.material_datepicker__date_range_editor;
  const material_select__material_select$46template = material_select.material_select__material_select$46template;
  const material_select__material_select = material_select$.material_select__material_select;
  const time$ = time.time;
  const src__utils__angular__scroll_host__gestures = $interface.src__utils__angular__scroll_host__gestures;
  const utils__angular__scroll_host__angular_2 = angular_2.utils__angular__scroll_host__angular_2;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const src__material_tooltip__tooltip = icon_tooltip.src__material_tooltip__tooltip;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_datepicker__preset = preset.material_datepicker__preset;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__math__box = box.model__math__box;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const src__material_datepicker__comparison_range_editor$46template = comparison_range_editor$46scss$46css.src__material_datepicker__comparison_range_editor$46template;
  const src__material_datepicker__date_range_editor_model$46template = comparison_range_editor$46scss$46css.src__material_datepicker__date_range_editor_model$46template;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_datepicker__date_range_input = date_range_input$.material_datepicker__date_range_input;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const material_datepicker__next_prev_buttons$46template = next_prev_buttons.material_datepicker__next_prev_buttons$46template;
  const material_datepicker__next_prev_buttons = next_prev_buttons$.material_datepicker__next_prev_buttons;
  const material_datepicker__material_calendar_picker$46template = material_calendar_picker$.material_datepicker__material_calendar_picker$46template;
  const utils__showhide__showhide = showhide.utils__showhide__showhide;
  const material_datepicker__material_month_picker$46template = material_month_picker$.material_datepicker__material_month_picker$46template;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const material_datepicker__date_range_editor_host = date_range_editor_host.material_datepicker__date_range_editor_host;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_datepicker__calendar$46template = calendar$.material_datepicker__calendar$46template;
  const material_datepicker__date_range_editor_host$46template = date_range_editor_host$.material_datepicker__date_range_editor_host$46template;
  const material_datepicker__module$46template = module$.material_datepicker__module$46template;
  const material_datepicker__preset$46template = preset$.material_datepicker__preset$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__date__date_formatter$46template = date_formatter.model__date__date_formatter$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__angular__managed_zone__interface$46template = $interface$.utils__angular__managed_zone__interface$46template;
  const utils__angular__scroll_host__angular_2$46template = angular_2$.utils__angular__scroll_host__angular_2$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__showhide__showhide$46template = showhide$.utils__showhide__showhide$46template;
  const material_datepicker__date_range_editor$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $isNotEmpty = dartx.isNotEmpty;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialCalendarPickerComponent = () => (JSArrayOfMaterialCalendarPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let ListOfMaterialCalendarPickerComponent = () => (ListOfMaterialCalendarPickerComponent = dart.constFn(core.List$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(ListOfMaterialCalendarPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let JSArrayOfMaterialMonthPickerComponent = () => (JSArrayOfMaterialMonthPickerComponent = dart.constFn(_interceptors.JSArray$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let ListOfMaterialMonthPickerComponent = () => (ListOfMaterialMonthPickerComponent = dart.constFn(core.List$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19])))();
  let _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = () => (_ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(ListOfMaterialMonthPickerComponent(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11])))();
  let AppViewOfDateRangeEditorComponent = () => (AppViewOfDateRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let AppViewAndintToAppViewOfDateRangeEditorComponent = () => (AppViewAndintToAppViewOfDateRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfDateRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDateRangeEditorComponent = () => (ComponentFactoryOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  let VoidToElementScrollHost = () => (VoidToElementScrollHost = dart.constFn(dart.fnType(utils__angular__scroll_host__angular_2.ElementScrollHost, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfSelectionItem = () => (JSArrayOfSelectionItem = dart.constFn(_interceptors.JSArray$(model__selection__selection_container.SelectionItem)))();
  let ListOfSelectionItem = () => (ListOfSelectionItem = dart.constFn(core.List$(model__selection__selection_container.SelectionItem)))();
  let _ViewDateRangeEditorComponent2ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent2ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2])))();
  let _ViewDateRangeEditorComponent3ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent3ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3])))();
  let _ViewDateRangeEditorComponent8ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent8ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8])))();
  let _ViewDateRangeEditorComponent7ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent7ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7])))();
  let JSArrayOfListOfSelectionItem = () => (JSArrayOfListOfSelectionItem = dart.constFn(_interceptors.JSArray$(ListOfSelectionItem())))();
  let _ViewDateRangeEditorComponent6ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent6ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6])))();
  let _ViewDateRangeEditorComponent9ToListOfSelectionItem = () => (_ViewDateRangeEditorComponent9ToListOfSelectionItem = dart.constFn(dart.fnType(ListOfSelectionItem(), [material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9])))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select__material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(src__material_tooltip__tooltip.MaterialTooltipDirective, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let VoidToComparisonRangeEditorComponent = () => (VoidToComparisonRangeEditorComponent = dart.constFn(dart.fnType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, [])))();
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let VoidToShowHideDirective = () => (VoidToShowHideDirective = dart.constFn(dart.fnType(utils__showhide__showhide.ShowHideDirective, [])))();
  let VoidToMaterialMonthPickerComponent = () => (VoidToMaterialMonthPickerComponent = dart.constFn(dart.fnType(material_datepicker__material_month_picker.MaterialMonthPickerComponent, [])))();
  let VoidToDateRangeEditorComponent = () => (VoidToDateRangeEditorComponent = dart.constFn(dart.fnType(material_datepicker__date_range_editor.DateRangeEditorComponent, [])))();
  let ComponentRefOfDateRangeEditorComponent = () => (ComponentRefOfDateRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent)))();
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return [material_datepicker__date_range_editor$46scss$46css$46shim.styles];
    }
  });
  const _query_MaterialCalendarPickerComponent_1_0_isDirty = dart.privateName(material_datepicker__date_range_editor$46template, "_query_MaterialCalendarPickerComponent_1_0_isDirty");
  const _query_MaterialMonthPickerComponent_1_1_isDirty = dart.privateName(material_datepicker__date_range_editor$46template, "_query_MaterialMonthPickerComponent_1_1_isDirty");
  const _appEl_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_0_9");
  const _appEl_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_1_9");
  const _expr_2 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_2");
  const _MaterialCalendarPickerComponent_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialCalendarPickerComponent_0_5");
  const _appEl_10 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_10");
  const _MaterialMonthPickerComponent_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialMonthPickerComponent_0_5");
  const _appEl_11 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_11");
  material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_editor.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = dart.test(_ctx.presets[$isNotEmpty]) && dart.test(_ctx.shouldShowPredefinedList);
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialCalendarPickerComponent_1_0_isDirty])) {
          _ctx.calendarPicker = src__runtime__queries.firstOrNull(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, this[_appEl_1].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponent().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent18ToListOfMaterialCalendarPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialCalendarPickerComponent())));
          this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_MaterialMonthPickerComponent_1_1_isDirty])) {
          _ctx.monthSelector = src__runtime__queries.firstOrNull(material_datepicker__material_month_picker.MaterialMonthPickerComponent, this[_appEl_1].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(material_datepicker__material_month_picker.MaterialMonthPickerComponent, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponent().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent19ToListOfMaterialMonthPickerComponent())), _ViewDateRangeEditorComponent11ToListOfMaterialMonthPickerComponent())));
          this[_query_MaterialMonthPickerComponent_1_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = styles = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponent, material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    this[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_2] = null;
    material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("date-range-editor"));
  }).prototype = material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_query_MaterialCalendarPickerComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_MaterialMonthPickerComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template._DateRangeEditorComponentNgFactory*/get _DateRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeEditorComponent()).new("date-range-editor", dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, AppViewAndintToAppViewOfDateRangeEditorComponent())));
    }
  });
  dart.copyProperties(material_datepicker__date_range_editor$46template, {
    get DateRangeEditorComponentNgFactory() {
      return material_datepicker__date_range_editor$46template._DateRangeEditorComponentNgFactory;
    }
  });
  const _query_SelectionItem_0_0_isDirty = dart.privateName(material_datepicker__date_range_editor$46template, "_query_SelectionItem_0_0_isDirty");
  const _compView_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_0");
  const _MaterialSelectComponent_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialSelectComponent_0_5");
  const _Clock_0_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_Clock_0_6");
  const _GestureListenerFactory_0_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_GestureListenerFactory_0_7");
  const _ElementScrollHost_0_8 = dart.privateName(material_datepicker__date_range_editor$46template, "_ElementScrollHost_0_8");
  const _appEl_2 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_2_9");
  const _appEl_4 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_4");
  const _NgFor_4_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgFor_4_9");
  const _appEl_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_5_9");
  const _appEl_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_6_9");
  const _expr_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_0");
  const _expr_4 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_4");
  const _el_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_el_0");
  let const$;
  const _MaterialSelectItemComponent_1_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialSelectItemComponent_1_5");
  const _MaterialSelectItemComponent_0_8 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialSelectItemComponent_0_8");
  const _appEl_3 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_3");
  const _MaterialSelectItemComponent_5_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialSelectItemComponent_5_5");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(this[_el_0], "acxScrollHost", "");
      this.updateChildClassNonHtml(this[_el_0], "preset-list");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialSelectComponent_0_5] = new material_select__material_select.MaterialSelectComponent.new();
      this[_Clock_0_6] = const$ || (const$ = dart.const(new time$.Clock.new()));
      this[_GestureListenerFactory_0_7] = new src__utils__angular__scroll_host__gestures.GestureListenerFactory.new(this[_Clock_0_6]);
      this[_ElementScrollHost_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__scroll_host__angular_2.ElementScrollHost, dart.wrapType(utils__angular__scroll_host__angular_2.ElementScrollHost), dart.fn(() => new utils__angular__scroll_host__angular_2.ElementScrollHost.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_GestureListenerFactory_0_7], html.HtmlElement._check(this[_el_0])), VoidToElementScrollHost())) : new utils__angular__scroll_host__angular_2.ElementScrollHost.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_GestureListenerFactory_0_7], html.HtmlElement._check(this[_el_0]));
      let _anchor_1 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      let _el_3 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_3), "group");
      src__runtime__dom_helpers.setAttribute(_el_3, "role", "listbox");
      this.addShimC(html.HtmlElement._check(_el_3));
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(_el_3);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_4_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], JSArrayOfObject().of([JSArrayOfObject().of([this[_appEl_1], this[_appEl_2], _el_3, this[_appEl_5], this[_appEl_6]])]));
      this.init1(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) {
          return this[_MaterialSelectComponent_0_5];
        }
        if (token === dart.wrapType(time$.Clock)) {
          return this[_Clock_0_6];
        }
        if (token === dart.wrapType(src__utils__angular__scroll_host__gestures.GestureListenerFactory)) {
          return this[_GestureListenerFactory_0_7];
        }
        if (token === dart.wrapType(utils__angular__scroll_host__angular_2.ElementScrollHost) || token === dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost)) {
          return this[_ElementScrollHost_0_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectComponent_0_5].width = 0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectComponent_0_5].ngOnInit();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ElementScrollHost_0_8].ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      let currVal_4 = _ctx.presets;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_4_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_4_9].ngDoCheck();
      }
      this[_NgIf_5_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_6_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_SelectionItem_0_0_isDirty])) {
          this[_MaterialSelectComponent_0_5].selectItems = src__runtime__queries.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([this[_appEl_1].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_5]]), _ViewDateRangeEditorComponent2ToListOfSelectionItem())), this[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_5]]), _ViewDateRangeEditorComponent3ToListOfSelectionItem())), this[_appEl_4].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, dart.fn(nestedView => src__runtime__queries.flattenNodes(model__selection__selection_container.SelectionItem, JSArrayOfListOfSelectionItem().of([JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_0_8]]), nestedView[_appEl_2].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, dart.fn(nestedView => nestedView[_appEl_3].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_0_8]]), _ViewDateRangeEditorComponent8ToListOfSelectionItem())), _ViewDateRangeEditorComponent7ToListOfSelectionItem()))])), _ViewDateRangeEditorComponent6ToListOfSelectionItem())), this[_appEl_5].mapNestedViews(model__selection__selection_container.SelectionItem, material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, dart.fn(nestedView => JSArrayOfSelectionItem().of([nestedView[_MaterialSelectItemComponent_1_5], nestedView[_MaterialSelectItemComponent_5_5]]), _ViewDateRangeEditorComponent9ToListOfSelectionItem()))]));
          this[_query_SelectionItem_0_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isBasic;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "basic-preset-list", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_ElementScrollHost_0_8].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_query_SelectionItem_0_0_isDirty] = true;
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    this[_Clock_0_6] = null;
    this[_GestureListenerFactory_0_7] = null;
    this[_ElementScrollHost_0_8] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgFor_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_query_SelectionItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_compView_0]: dart.fieldType(material_select__material_select$46template.ViewMaterialSelectComponent0),
    [_MaterialSelectComponent_0_5]: dart.fieldType(material_select__material_select.MaterialSelectComponent),
    [_Clock_0_6]: dart.fieldType(time$.Clock),
    [_GestureListenerFactory_0_7]: dart.fieldType(src__utils__angular__scroll_host__gestures.GestureListenerFactory),
    [_ElementScrollHost_0_8]: dart.fieldType(utils__angular__scroll_host__angular_2.ElementScrollHost),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_4_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  const _compView_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_1");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      let _text_2 = src__runtime__dom_helpers.createText(src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.clearRangeMsg));
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObject().of([JSArrayOfText().of([_text_2])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'onClearRangeClicked')));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  const _NgIf_4_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_4_9");
  const _expr_3 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_3");
  const _el_2 = dart.privateName(material_datepicker__date_range_editor$46template, "_el_2");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      src__runtime__dom_helpers.setAttribute(_el_1, "closeOnActivate", "false");
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      this[_el_2] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_2]);
      let _text_3 = src__runtime__dom_helpers.appendText(this[_el_2], src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.customRangeMsg));
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObject().of([JSArrayOfObject().of([this[_el_2], this[_appEl_5]])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'onCustomClicked')));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_2], "custom-tab-left", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_2], "custom_tab-left-selected", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_2] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_el_2]: dart.fieldType(html.DivElement)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_textBinding_1");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "custom_range_desc");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.customRangeDescription));
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_ButtonDirective_0_5");
  const _MaterialIconComponent_0_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialIconComponent_0_6");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expend-more");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "icon", "expand_more");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.init1(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_6].icon = "expand_more";
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_el_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  const _MaterialTooltipDirective_0_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialTooltipDirective_0_9");
  const __TooltipController_0_11 = dart.privateName(material_datepicker__date_range_editor$46template, "__TooltipController_0_11");
  const _expr_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_1");
  const _TooltipController_0_11 = dart.privateName(material_datepicker__date_range_editor$46template, "_TooltipController_0_11");
  const _handle_trigger_0_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_trigger_0_0");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_11]() {
      if (this[__TooltipController_0_11] == null) {
        this[__TooltipController_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.viewData.parentIndex)));
      }
      return this[__TooltipController_0_11];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip.MaterialTooltipDirective, dart.wrapType(src__material_tooltip__tooltip.MaterialTooltipDirective), dart.fn(() => new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.viewData.parentIndex)), null, null);
      let _anchor_2 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], JSArrayOfObject().of([JSArrayOfObject().of([this[_textBinding_1].element, this[_appEl_2]])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController)) {
          return this[_TooltipController_0_11];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_preset = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        if (!(material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip == null)) {
          this[_MaterialTooltipDirective_0_9].text = material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_preset.title));
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($event), local_preset.range);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_11] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_TooltipController_0_11]: dart.dynamic
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [__TooltipController_0_11]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  const _AcxDarkTheme_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialButtonComponent_0_6");
  const _PopupSourceDirective_0_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_PopupSourceDirective_0_7");
  const _MaterialIconComponent_1_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialIconComponent_1_5");
  const _compView_2 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_2");
  const _MaterialPopupComponent_2_8 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialPopupComponent_2_8");
  const __PopupHierarchy_2_11 = dart.privateName(material_datepicker__date_range_editor$46template, "__PopupHierarchy_2_11");
  const __PopupRef_2_12 = dart.privateName(material_datepicker__date_range_editor$46template, "__PopupRef_2_12");
  const _NgFor_3_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgFor_3_9");
  const _expr_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_6");
  const _PopupHierarchy_2_11 = dart.privateName(material_datepicker__date_range_editor$46template, "_PopupHierarchy_2_11");
  const _PopupRef_2_12 = dart.privateName(material_datepicker__date_range_editor$46template, "_PopupRef_2_12");
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  const _handle_click_0_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_click_0_0");
  const _handle_keypress_0_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_keypress_0_1");
  const _handle_trigger_0_2 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_trigger_0_2");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_0, "alignPositionX", "after");
      src__runtime__dom_helpers.setAttribute(_el_0, "alignPositionY", "start");
      this.updateChildClassNonHtml(_el_0, "preset-dropdown-button");
      src__runtime__dom_helpers.setAttribute(_el_0, "icon", "");
      src__runtime__dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGetOptional(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_PopupSourceDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.viewData.parentIndex)), _el_0, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.parentView.parentView.viewData.parentIndex)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.viewData.parentIndex)), _el_0, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.parentView.parentView.viewData.parentIndex)), null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_1, "icon", "arrow_drop_down");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfHtmlElement().of([_el_1])]));
      this[_compView_2] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      this.addShimC(_el_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _el_2);
      this[_MaterialPopupComponent_2_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.parentView.parentView.viewData.parentIndex)), model__math__box.Box._check(this.parentView.parentView.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(_el_2)), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.parentView.parentView.viewData.parentIndex)), model__math__box.Box._check(this.parentView.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new src__core__linker__element_ref.ElementRef.new(_el_2));
      let _anchor_3 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], JSArrayOfObject().of([const$8 || (const$8 = dart.constList([], dart.dynamic)), JSArrayOfViewContainer().of([this[_appEl_3]]), const$9 || (const$9 = dart.constList([], dart.dynamic))]));
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      _el_0[$addEventListener]("keypress", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keypress_0_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_2)));
      this.init(JSArrayOfObject().of([_el_0, this[_appEl_2]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) {
          return this[_MaterialPopupComponent_2_8];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_2_11];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef)) {
          return this[_PopupRef_2_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.parentView.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].alignX = "after";
        this[_PopupSourceDirective_0_7].alignY = "start";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        changed = true;
        if (!(0 - 4 === null)) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
          changed = true;
        }
      }
      let currVal_5 = local_menuSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_6 = local_preset.alternatives;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_2_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_keypress_0_1]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_trigger_0_2]($event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keypress_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_PopupHierarchy_2_11]: dart.dynamic,
    [_PopupRef_2_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_PopupSourceDirective_0_7]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_2]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_2_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  const __TooltipController_0_13 = dart.privateName(material_datepicker__date_range_editor$46template, "__TooltipController_0_13");
  const _TooltipController_0_13 = dart.privateName(material_datepicker__date_range_editor$46template, "_TooltipController_0_13");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, this.parentView.parentView)[_TooltipController_0_11]), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.viewData.parentIndex))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent6, this.parentView.parentView)[_TooltipController_0_11]), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.viewData.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, src__runtime__interpolate.interpolateString2("", "preset-dropdown-item", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent7, this.parentView)[_MaterialPopupComponent_2_8], material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip.MaterialTooltipDirective, dart.wrapType(src__material_tooltip__tooltip.MaterialTooltipDirective), dart.fn(() => new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirective())) : new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], html.Window._check(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController)) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_alternative = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        if (!(material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip == null)) {
          this[_MaterialTooltipDirective_0_9].text = material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_alternative.shortTitle));
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView.parentView.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_preset = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.parentView.parentView.locals[$_get]("$implicit"));
      let local_alternative = src__runtime__optimizations.unsafeCast(material_datepicker__preset.DatepickerPreset, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onAlternativePresetClicked(html.UIEvent._check($event), local_preset, local_alternative);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_13] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  const _DeferredValidator_2_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_DeferredValidator_2_5");
  const _NgValidators_2_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgValidators_2_6");
  const _NgModel_2_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgModel_2_7");
  const _MaterialInputComponent_2_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialInputComponent_2_9");
  const _MaterialInputDefaultValueAccessor_2_11 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialInputDefaultValueAccessor_2_11");
  const _compView_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_5");
  const _compView_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_6");
  const _DeferredValidator_6_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_DeferredValidator_6_5");
  const _NgValidators_6_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgValidators_6_6");
  const _NgModel_6_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgModel_6_7");
  const _MaterialInputComponent_6_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialInputComponent_6_9");
  const _MaterialInputDefaultValueAccessor_6_11 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialInputDefaultValueAccessor_6_11");
  const _expr_8 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_8");
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  const _handle_trigger_1_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_trigger_1_0");
  const _handle_click_2_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_click_2_0");
  const _handle_ngModelChange_2_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_ngModelChange_2_1");
  const _handle_trigger_5_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_trigger_5_0");
  const _handle_click_6_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_click_6_0");
  const _handle_ngModelChange_6_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_ngModelChange_6_1");
  let const$14;
  let const$15;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "days group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, src__runtime__interpolate.interpolateString2("", "days-input days-to-today", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(_el_1, "closeOnActivate", "false");
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_1, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      this[_compView_2] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      this.addShimC(_el_2);
      this[_DeferredValidator_2_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_MaterialInputComponent_2_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_2_7], this[_compView_2], this[_DeferredValidator_2_5]);
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_2_9], this[_NgModel_2_7]);
      this[_compView_2].create(this[_MaterialInputComponent_2_9], JSArrayOfObject().of([const$10 || (const$10 = dart.constList([], dart.dynamic)), const$11 || (const$11 = dart.constList([], dart.dynamic))]));
      let _el_3 = doc[$createElement]("span");
      this.addShimE(_el_3);
      let _text_4 = src__runtime__dom_helpers.appendText(_el_3, src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.daysToTodayMsg));
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_2, _el_3])]));
      this[_compView_5] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, src__runtime__interpolate.interpolateString2("", "days-input days-to-yesterday", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(_el_5, "closeOnActivate", "false");
      this.addShimC(_el_5);
      this[_MaterialSelectItemComponent_5_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_5, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_5], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_5, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_5], null);
      this[_compView_6] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.addShimC(_el_6);
      this[_DeferredValidator_6_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_MaterialInputComponent_6_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_6_7], this[_compView_6], this[_DeferredValidator_6_5]);
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_6_9], this[_NgModel_6_7]);
      this[_compView_6].create(this[_MaterialInputComponent_6_9], JSArrayOfObject().of([const$12 || (const$12 = dart.constList([], dart.dynamic)), const$13 || (const$13 = dart.constList([], dart.dynamic))]));
      let _el_7 = doc[$createElement]("span");
      this.addShimE(_el_7);
      let _text_8 = src__runtime__dom_helpers.appendText(_el_7, src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg));
      this[_compView_5].create(this[_MaterialSelectItemComponent_5_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_6, _el_7])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      _el_2[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_2_0)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_2_1)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      _el_6[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_6_0)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_6_1)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        if (2 === nodeIndex) {
          if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_2_5];
          }
          if (token === (const$14 || (const$14 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
            return this[_NgValidators_2_6];
          }
          if (token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) {
            return this[_NgModel_2_7];
          }
          if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_2_9];
          }
        }
        if (token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_1_5];
        }
      }
      if (5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (6 === nodeIndex) {
          if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_6_5];
          }
          if (token === (const$15 || (const$15 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
            return this[_NgValidators_6_6];
          }
          if (token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) {
            return this[_NgModel_6_7];
          }
          if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_6_9];
          }
        }
        if (token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) {
          return this[_MaterialSelectItemComponent_5_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      changed = false;
      this[_NgModel_2_7].model = _ctx.daysToToday;
      this[_NgModel_2_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = "false";
      }
      let currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      this[_NgModel_6_7].model = _ctx.daysToYesterday;
      this[_NgModel_6_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_8 = _ctx.maxDaysInputLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
          this[_MaterialInputComponent_6_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($event), _ctx.daysToTodayRange);
    }
    [_handle_click_2_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_2_1]($event) {
      let _ctx = this.ctx;
      _ctx.daysToToday = core.String._check($event);
    }
    [_handle_trigger_5_0]($event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(html.UIEvent._check($event), _ctx.daysToYesterdayRange);
    }
    [_handle_click_6_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_6_1]($event) {
      let _ctx = this.ctx;
      _ctx.daysToYesterday = core.String._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_8] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_2_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_6_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_compView_2]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_2_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_2_6]: dart.fieldType(core.List),
    [_NgModel_2_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_2_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_compView_5]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_compView_6]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_6_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_6_6]: dart.fieldType(core.List),
    [_NgModel_6_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_6_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.int)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  const _ComparisonRangeEditorComponent_1_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_ComparisonRangeEditorComponent_1_5");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "comparison group");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_ComparisonRangeEditorComponent_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), dart.fn(() => new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_ElementScrollHost_0_8]), VoidToComparisonRangeEditorComponent())) : new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent1, this.parentView)[_ElementScrollHost_0_8]);
      this[_compView_1].create0(this[_ComparisonRangeEditorComponent_1_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_compView_1]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  const _compView_4 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_4");
  const _DateRangeInputComponent_4_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_DateRangeInputComponent_4_5");
  const _appEl_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_7_9");
  const _appEl_8 = dart.privateName(material_datepicker__date_range_editor$46template, "_appEl_8");
  const _NgIf_8_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_8_9");
  const _NgIf_10_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_10_9");
  const _NgIf_11_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_NgIf_11_9");
  const _expr_7 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_7");
  const _expr_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_9");
  const _expr_14 = dart.privateName(material_datepicker__date_range_editor$46template, "_expr_14");
  const _el_9 = dart.privateName(material_datepicker__date_range_editor$46template, "_el_9");
  const _handle_rangeChange_4_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_rangeChange_4_1");
  const _handle_stateChange_4_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_stateChange_4_0");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "right-column");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent13, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "range-input");
      this.addShimC(_el_3);
      this[_compView_4] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "range");
      this.addShimC(_el_4);
      this[_DateRangeInputComponent_4_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_4]);
      this[_compView_4].create0(this[_DateRangeInputComponent_4_5]);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent17, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_8_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_9] = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_9], "picker-container");
      this.addShimC(this[_el_9]);
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = src__runtime__dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], dart.fn(material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_4_1)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_4_0)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      this[_NgIf_2_9].ngIf = _ctx.isBasic;
      changed = false;
      let currVal_2 = _ctx.model.rangeId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.dateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_4_5].dateFormat = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_4_5].activeDateFormat = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.range.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeInputComponent_4_5].range = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.isClearRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DateRangeInputComponent_4_5].state = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      this[_NgIf_8_9].ngIf = !dart.test(_ctx.isCalendarCreated);
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_14 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_9], "compact", currVal_14);
        this[_expr_14] = currVal_14;
      }
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handle_stateChange_4_0]($event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_4_1]($event) {
      let _ctx = this.ctx;
      _ctx.model.range.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_14] = null;
    this[_el_9] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    [_handle_stateChange_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_4]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_4_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_8_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(core.bool),
    [_el_9]: dart.fieldType(html.DivElement)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  const _compView_3 = dart.privateName(material_datepicker__date_range_editor$46template, "_compView_3");
  const _MaterialIconComponent_3_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialIconComponent_3_5");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button-decorator");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "custom-tab-right");
      this.addShimC(_el_1);
      let _text_2 = src__runtime__dom_helpers.appendText(_el_1, src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.customRangeMsg));
      this[_compView_3] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this[_el_0][$append](_el_3);
      this.updateChildClassNonHtml(_el_3, "expand-less");
      src__runtime__dom_helpers.setAttribute(_el_3, "icon", "expand_less");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create0(this[_MaterialIconComponent_3_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'disableCustomMode')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "expand_less";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_3].destroyInternalState();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_el_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_compView_3]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13 = class _ViewDateRangeEditorComponent13 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "content-separator");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.init1(_el_0);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13.new = function(parentView, parentIndex) {
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent13 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent13.new(parentView, parentIndex);
  };
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-title");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, src__runtime__interpolate.interpolateString0(material_datepicker__date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg));
      this.init1(_el_0);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  const _DateRangeInputComponent_1_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_DateRangeInputComponent_1_5");
  const _handle_rangeChange_1_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_rangeChange_1_1");
  const _handle_stateChange_1_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_stateChange_1_0");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "range-input");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "comparison inputs");
      this.addShimC(_el_1);
      this[_DateRangeInputComponent_1_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_1]);
      this[_compView_1].create0(this[_DateRangeInputComponent_1_5]);
      let subscription_0 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(model__date__date.DateRange, model__date__date.DateRange, dart.bind(this, _handle_rangeChange_1_1)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_1_0)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.model.comparisonId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DateRangeInputComponent_1_5].dateFormat = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.activeDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_1_5].activeDateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.model.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.model.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.isCustomComparisonValid);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_1_5].disabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.model.comparison.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_1_5].range = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isClearRangeSelected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeInputComponent_1_5].state = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handle_stateChange_1_0]($event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
    [_handle_rangeChange_1_1]($event) {
      let _ctx = this.ctx;
      _ctx.model.comparison.value = model__date__date.DateRange._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    [_handle_stateChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    [_compView_1]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_1_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  const _textBinding_3 = dart.privateName(material_datepicker__date_range_editor$46template, "_textBinding_3");
  const _ButtonDirective_1_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_ButtonDirective_1_5");
  const _KeyboardOnlyFocusIndicatorDirective_1_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_KeyboardOnlyFocusIndicatorDirective_1_6");
  const _MaterialIconComponent_4_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_MaterialIconComponent_4_5");
  const _NextPrevComponent_5_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_NextPrevComponent_5_5");
  const _el_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_el_1");
  const _el_4 = dart.privateName(material_datepicker__date_range_editor$46template, "_el_4");
  const _handle_click_1_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_click_1_1");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "month-selector-toolbar");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      src__runtime__dom_helpers.setAttribute(this[_el_1], "buttonDecorator", "");
      this.updateChildClass(this[_el_1], "month-selector-dropdown");
      src__runtime__dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_1], null));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      let _el_2 = src__runtime__dom_helpers.appendSpan(doc, this[_el_1]);
      this.updateChildClass(_el_2, "visible-month");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      this[_compView_4] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_1][$append](this[_el_4]);
      this.updateChildClassNonHtml(this[_el_4], "month-selector-dropdown-icon");
      src__runtime__dom_helpers.setAttribute(this[_el_4], "icon", "arrow_drop_down");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create0(this[_MaterialIconComponent_4_5]);
      this[_compView_5] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, "next-prev-range");
      this.addShimC(_el_5);
      this[_NextPrevComponent_5_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_5]);
      this[_compView_5].create0(this[_NextPrevComponent_5_5]);
      this[_el_1][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_1)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'keydown')));
      this[_el_1][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'onMonthSelectorDropdownClicked')));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.nextPrevModel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_NextPrevComponent_5_5].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      this[_textBinding_3].updateText(src__runtime__interpolate.interpolateString0(_ctx.visibleMonthName));
      let currVal_0 = _ctx.showMonthSelector;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_4], "flipped", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handle_click_1_1]($event) {
      this[_ButtonDirective_1_5].instance.handleClick(html.MouseEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].onMouseInteraction();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new src__runtime__text_binding.TextBinding.new();
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    this[_el_4] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_click_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    [_textBinding_3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_ButtonDirective_1_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_compView_4]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_5]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_5_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17 = class _ViewDateRangeEditorComponent17 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "calendar-placeholder");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.init1(_el_0);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17.new = function(parentView, parentIndex) {
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent17 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent17.new(parentView, parentIndex);
  };
  const _ShowHideDirective_0_6 = dart.privateName(material_datepicker__date_range_editor$46template, "_ShowHideDirective_0_6");
  let const$16;
  let const$17;
  const _handle_stateChange_0_1 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_stateChange_0_1");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "picker calendar");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "mode", "date-range");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), "date-range"), VoidToMaterialCalendarPickerComponent())) : new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), time$.Clock._check(this.parentView.parentView.injectorGet(dart.wrapType(time$.Clock), this.parentView.viewData.parentIndex)), "date-range");
      this[_ShowHideDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__showhide__showhide.ShowHideDirective, dart.wrapType(utils__showhide__showhide.ShowHideDirective), dart.fn(() => new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex))), VoidToShowHideDirective())) : new utils__showhide__showhide.ShowHideDirective.new(this[_el_0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialCalendarPickerComponent_0_5]);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_1)));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(_ctx, 'onVisibleMonthChange')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.model.calendar.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.movingStartMaintainsLength;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialCalendarPickerComponent_0_5].movingStartMaintainsLength = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_7 = !dart.test(_ctx.showMonthSelector);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_ShowHideDirective_0_6].visible = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      let currVal_0 = _ctx.popupHandle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "popupHandle", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  let const$18;
  let const$19;
  const _handle_stateChange_0_0 = dart.privateName(material_datepicker__date_range_editor$46template, "_handle_stateChange_0_0");
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "picker month-selector");
      src__runtime__dom_helpers.setAttribute(_el_0, "mode", "single-date");
      this.addShimC(_el_0);
      this[_MaterialMonthPickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_month_picker.MaterialMonthPickerComponent, dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent), dart.fn(() => new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), "single-date"), VoidToMaterialMonthPickerComponent())) : new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.parentView.parentView.injectorGetOptional(const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.parentView.viewData.parentIndex)), "single-date");
      this[_ShowHideDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__showhide__showhide.ShowHideDirective, dart.wrapType(utils__showhide__showhide.ShowHideDirective), dart.fn(() => new utils__showhide__showhide.ShowHideDirective.new(_el_0, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex))), VoidToShowHideDirective())) : new utils__showhide__showhide.ShowHideDirective.new(_el_0, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialMonthPickerComponent_0_5]);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(material_datepicker__calendar.CalendarState, material_datepicker__calendar.CalendarState, dart.bind(this, _handle_stateChange_0_0)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.monthSelectorState;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0, this.parentView.parentView)[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_0]($event) {
      let _ctx = this.ctx;
      _ctx.monthSelectorState = material_datepicker__calendar.CalendarState._check($event);
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_stateChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent),
    [_ShowHideDirective_0_6]: dart.fieldType(utils__showhide__showhide.ShowHideDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeEditorComponent_0_5 = dart.privateName(material_datepicker__date_range_editor$46template, "_DateRangeEditorComponent_0_5");
  let const$20;
  let const$21;
  material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_editor.DateRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeEditorComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__date_range_editor.DateRangeEditorComponent, dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent), dart.fn(() => new material_datepicker__date_range_editor.DateRangeEditorComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.viewData.parentIndex)), material_datepicker__date_range_editor_host.DateRangeEditorHost._check(this.injectorGetOptional(dart.wrapType(material_datepicker__date_range_editor_host.DateRangeEditorHost), this.viewData.parentIndex)), time$.Clock._check(this.injectorGetOptional(const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex))), VoidToDateRangeEditorComponent())) : new material_datepicker__date_range_editor.DateRangeEditorComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), src__utils__angular__managed_zone__managed_zone.ManagedZone._check(this.injectorGet(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), this.viewData.parentIndex)), material_datepicker__date_range_editor_host.DateRangeEditorHost._check(this.injectorGetOptional(dart.wrapType(material_datepicker__date_range_editor_host.DateRangeEditorHost), this.viewData.parentIndex)), time$.Clock._check(this.injectorGetOptional(const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DateRangeEditorComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDateRangeEditorComponent()).new(0, this, this.rootEl, this[_DateRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeEditorComponent_0_5] = null;
    material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_editor.DateRangeEditorComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, "package:angular_components/material_datepicker/date_range_editor.template.dart");
  dart.setFieldSignature(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_editor$46template.ViewDateRangeEditorComponent0),
    [_DateRangeEditorComponent_0_5]: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorComponent)
  }));
  material_datepicker__date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_editor$46template._ViewDateRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_editor$46template, {
    /*material_datepicker__date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_editor$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_editor$46template._visited)) {
      return;
    }
    material_datepicker__date_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_editor.DateRangeEditorComponent), material_datepicker__date_range_editor$46template.DateRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_range_editor_host$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__material_calendar_picker$46template.initReflector();
    material_datepicker__material_month_picker$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_datepicker__next_prev_buttons$46template.initReflector();
    material_datepicker__preset$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    material_select__material_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    model__date__date$46template.initReflector();
    model__date__date_formatter$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__comparison_range_editor$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    utils__angular__managed_zone__interface$46template.initReflector();
    utils__angular__scroll_host__angular_2$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__showhide__showhide$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template.ddc", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": material_datepicker__date_range_editor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":"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","file":"date_range_editor.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: material_datepicker__date_range_editor$46template
  };
});

//# sourceMappingURL=date_range_editor.template.ddc.js.map
