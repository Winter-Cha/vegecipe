define(['dart_sdk', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_input/material_input', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, select, selection_container, has_factory, angular, selection_model, selection_options, async, disposer, modules, change_detection, material_tree_group, button_decorator, button_decorator$, keyboard_only_focus_indicator, dom_service, interpolate, material_checkbox, material_checkbox$, has_disabled, material_icon, material_icon$, dynamic_component, dynamic_component$, text_binding, material_dropdown_base, selection_options$, keyboard_only_focus_indicator$, material_dropdown_base$, material_radio, material_radio$, material_input, queries, material_input$, deferred_validator, directives, material_input_default_value_accessor, base_material_input, reference, focus_interface, material_popup, popup_hierarchy, dom_popup_source, material_popup$, overlay_ref, zindexer, alignment, box, deferred_content, deferred_content_aware, deferred_content$, focus, alignment$, has_renderer, css, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container.model__selection__selection_container$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options.model__selection__selection_options$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__material_tree__group__material_tree_group = material_tree_group.src__material_tree__group__material_tree_group;
  const src__material_tree__material_tree_root = material_tree_group.src__material_tree__material_tree_root;
  const src__material_tree__group__material_tree_group_flat = material_tree_group.src__material_tree__group__material_tree_group_flat;
  const src__material_tree__material_tree_impl = material_tree_group.src__material_tree__material_tree_impl;
  const src__material_tree__material_tree_filter = material_tree_group.src__material_tree__material_tree_filter;
  const src__material_tree__material_tree_dropdown = material_tree_group.src__material_tree__material_tree_dropdown;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__selection__selection_options = selection_options$.model__selection__selection_options;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const material_input__material_input = material_input.material_input__material_input;
  const src__runtime__queries = queries.src__runtime__queries;
  const material_input__material_input$46template = material_input$.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__math__box = box.model__math__box;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const src__material_tree__material_tree_expand_state$46template = Object.create(dart.library);
  const src__material_tree__material_tree_root$46template = Object.create(dart.library);
  const src__material_tree__material_tree_node$46template = Object.create(dart.library);
  const src__material_tree__group__material_tree_group$46scss$46css$46shim = Object.create(dart.library);
  const src__material_tree__group__material_tree_group$46template = Object.create(dart.library);
  const src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim = Object.create(dart.library);
  const src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim = Object.create(dart.library);
  const src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim = Object.create(dart.library);
  const src__material_tree__group__material_tree_group_flat$46template = Object.create(dart.library);
  const src__material_tree__material_tree_rendering_options$46template = Object.create(dart.library);
  const src__material_tree__material_tree_impl$46template = Object.create(dart.library);
  const src__material_tree__material_tree_filter$46template = Object.create(dart.library);
  const src__material_tree__material_tree_dropdown$46scss$46css$46shim = Object.create(dart.library);
  const src__material_tree__material_tree_dropdown$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $setProperty = dartx.setProperty;
  const $append = dartx.append;
  const $addAll = dartx.addAll;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewOfObject = () => (AppViewOfObject = dart.constFn(src__core__linker__app_view.AppView$(core.Object)))();
  let AppViewOfObjectAndintToAppViewOfvoid = () => (AppViewOfObjectAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [AppViewOfObject(), core.int])))();
  let AppViewAndintToAppViewOfMaterialTreeGroupComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeGroupComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeGroupComponent = () => (ComponentFactoryOfMaterialTreeGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async$.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component__dynamic_component.DynamicComponent, [])))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeGroupFlatListComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  let VoidToMaterialRadioGroupComponent = () => (VoidToMaterialRadioGroupComponent = dart.constFn(dart.fnType(material_radio__material_radio_group.MaterialRadioGroupComponent, [])))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = () => (_ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1])))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  let JSArrayOfMaterialTreeGroupComponent = () => (JSArrayOfMaterialTreeGroupComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2])))();
  let _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = () => (_ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent = dart.constFn(dart.fnType(ListOfMaterialTreeGroupComponent(), [src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1])))();
  let AppViewAndintToAppViewOfMaterialTreeComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeComponent = () => (ComponentFactoryOfMaterialTreeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_impl.MaterialTreeComponent)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialInputComponent = () => (JSArrayOfMaterialInputComponent = dart.constFn(_interceptors.JSArray$(material_input__material_input.MaterialInputComponent)))();
  let ListOfMaterialInputComponent = () => (ListOfMaterialInputComponent = dart.constFn(core.List$(material_input__material_input.MaterialInputComponent)))();
  let _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = () => (_ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent = dart.constFn(dart.fnType(ListOfMaterialInputComponent(), [src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1])))();
  let AppViewOfMaterialTreeFilterComponent = () => (AppViewOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let AppViewAndintToAppViewOfMaterialTreeFilterComponent = () => (AppViewAndintToAppViewOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(AppViewOfMaterialTreeFilterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTreeFilterComponent = () => (ComponentFactoryOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let VoidToMaterialTreeFilterComponent = () => (VoidToMaterialTreeFilterComponent = dart.constFn(dart.fnType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, [])))();
  let ComponentRefOfMaterialTreeFilterComponent = () => (ComponentRefOfMaterialTreeFilterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfMaterialTreeFilterComponent = () => (JSArrayOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let ListOfMaterialTreeFilterComponent = () => (ListOfMaterialTreeFilterComponent = dart.constFn(core.List$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)))();
  let _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3])))();
  let _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = () => (_ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent = dart.constFn(dart.fnType(ListOfMaterialTreeFilterComponent(), [src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4])))();
  let JSArrayOfListOfMaterialTreeFilterComponent = () => (JSArrayOfListOfMaterialTreeFilterComponent = dart.constFn(_interceptors.JSArray$(ListOfMaterialTreeFilterComponent())))();
  let AppViewAndintToAppViewOfMaterialTreeDropdownComponentOfT = () => (AppViewAndintToAppViewOfMaterialTreeDropdownComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialTreeDropdownComponent = () => (ComponentFactoryOfMaterialTreeDropdownComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent)))();
  src__material_tree__material_tree_expand_state$46template.initReflector = function() {
  };
  dart.defineLazy(src__material_tree__material_tree_root$46template, {
    /*src__material_tree__material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_root$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_root$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_root$46template._visited = true;
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_node$46template, {
    /*src__material_tree__material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_node$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_node$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    src__material_tree__material_tree_expand_state$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:first-of-type li:first-of-type._ngcontent-%ID% .root-border._ngcontent-%ID%{opacity:0}.material-tree-border._ngcontent-%ID%{background:#e0e0e0;display:none;height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}ul._ngcontent-%ID%{list-style:none;margin:0;padding:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;padding-right:16px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%{pointer-events:none}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}ul._ngcontent-%ID% .material-tree-item:not([separator=present]):hover._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]):focus._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]).active._ngcontent-%ID%{background:#eee}ul._ngcontent-%ID% .material-tree-item:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID%{position:relative;flex-grow:1;display:flex;align-items:center}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% > *._ngcontent-%ID%{flex-shrink:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% .tree-selection-state._ngcontent-%ID% + .material-tree-border._ngcontent-%ID%{left:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-expansion-state._ngcontent-%ID%{display:inline-flex;margin-left:auto}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-selection-state._ngcontent-%ID%{display:inline-flex;vertical-align:middle;width:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .disabled-item._ngcontent-%ID%{color:#9e9e9e}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% material-icon._ngcontent-%ID%{opacity:0.54}.view-more-link-item._ngcontent-%ID%{padding:8px 0}.view-more-link._ngcontent-%ID%{color:#4285f4;text-decoration:none}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return [src__material_tree__group__material_tree_group$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgFor_1_9");
  const _appEl_2 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupComponent0_default = Symbol('_is_ViewMaterialTreeGroupComponent0_default');
  src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let doc = html.document;
        let _el_0 = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "ul");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.visibleGroup;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_NgFor_1_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_NgIf_2_9].ngIf = _ctx.viewMoreLinkVisible;
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (!(_ctx.isMaterialTreeGroup == null)) {
            src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = styles = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponent, src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_expr_0] = null;
      ViewMaterialTreeGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group"));
      src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.hostRole);
    }).prototype = ViewMaterialTreeGroupComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupComponent0);
    ViewMaterialTreeGroupComponent0.prototype[_is_ViewMaterialTreeGroupComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialTreeGroupComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupComponent0.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupComponent0;
  });
  src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0 = src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0$();
  dart.defineLazy(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0, _is_ViewMaterialTreeGroupComponent0_default);
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentNgFactory*/get _MaterialTreeGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupComponent()).new("material-tree-group", dart.gbind(dart.fn(src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group$46template, {
    get MaterialTreeGroupComponentNgFactory() {
      return src__material_tree__group__material_tree_group$46template._MaterialTreeGroupComponentNgFactory;
    }
  });
  const _ButtonDirective_0_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_ButtonDirective_0_5");
  const _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  const _appEl_3 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_3_9");
  const _appEl_6 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_6_9");
  const _appEl_7 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_7_9");
  const _appEl_10 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_10_9");
  const _appEl_12 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_12");
  const _NgFor_12_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgFor_12_9");
  const _expr_1 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_1");
  const _expr_2 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_2");
  const _expr_3 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_3");
  const _expr_6 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_6");
  const _expr_7 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_7");
  const _expr_8 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_8");
  const _expr_12 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_12");
  const _el_0 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_el_0");
  const _el_1 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_el_1");
  const _el_2 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_el_2");
  const _el_4 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_el_4");
  const _handle_click_0_1 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_handle_click_0_1");
  const _handle_trigger_0_0 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_handle_trigger_0_0");
  const _is__ViewMaterialTreeGroupComponent1_default = Symbol('_is__ViewMaterialTreeGroupComponent1_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = doc[$createElement]("li");
        src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
        this.updateChildClass(html.HtmlElement._check(this[_el_0]), "material-tree-option");
        src__runtime__dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        this.addShimE(this[_el_0]);
        this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)));
        this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
        this.updateChildClass(this[_el_1], "material-tree-item");
        src__runtime__dom_helpers.setAttribute(this[_el_1], "role", "treeitem");
        this.addShimC(this[_el_1]);
        this[_el_2] = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
        let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this[_el_4] = src__runtime__dom_helpers.appendDiv(doc, this[_el_2]);
        this.updateChildClass(this[_el_4], "material-tree-border");
        this.addShimC(this[_el_4]);
        let _text_5 = src__runtime__dom_helpers.appendText(this[_el_2], " ");
        let _anchor_6 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 2, this, _anchor_6);
        let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        let _anchor_7 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 2, this, _anchor_7);
        let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
        let _text_8 = src__runtime__dom_helpers.appendText(this[_el_2], " ");
        let _text_9 = src__runtime__dom_helpers.appendText(this[_el_2], " ");
        let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 2, this, _anchor_10);
        let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
        let _text_11 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
        let _anchor_12 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 0, this, _anchor_12);
        let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_12_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
        this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1)));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onFocus')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
        this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 12) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_option = this.locals[$_get]("$implicit");
        this[_NgIf_3_9].ngIf = _ctx.showCheckbox(local_option);
        this[_NgIf_6_9].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_7_9].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_NgIf_10_9].ngIf = _ctx.hasChildren(T._check(local_option));
        let currVal_12 = _ctx.getChildGroups(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this[_NgFor_12_9].ngForOf = currVal_12;
          this[_expr_12] = currVal_12;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_12_9].ngDoCheck();
        }
        this[_appEl_3].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
        this[_appEl_7].detectChangesInNestedViews();
        this[_appEl_10].detectChangesInNestedViews();
        this[_appEl_12].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "selected", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "selectable", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
        let currVal_2 = _ctx.getIndent(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_2);
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = src__runtime__interpolate.interpolate0(_ctx.isSelected(T._check(local_option)));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          src__runtime__dom_helpers.setAttribute(this[_el_1], "aria-selected", core.String._check(currVal_3));
          this[_expr_3] = currVal_3;
        }
        if (firstCheck) {
          if (!(_ctx.fixedPadding == null)) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        let currVal_6 = _ctx.hasChildren(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          src__runtime__dom_helpers.updateClassBinding(this[_el_4], "is-parent", currVal_6);
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.isExpanded(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          src__runtime__dom_helpers.updateClassBinding(this[_el_4], "is-expanded", currVal_7);
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.level === 0;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          src__runtime__dom_helpers.updateClassBinding(this[_el_4], "root-border", currVal_8);
          this[_expr_8] = currVal_8;
        }
      }
      destroyInternal() {
        this[_appEl_3].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
        this[_appEl_7].destroyNestedViews();
        this[_appEl_10].destroyNestedViews();
        this[_appEl_12].destroyNestedViews();
      }
      [_handle_trigger_0_0]($event) {
        let local_option = this.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleSelectionOrExpansion(html.Event._check($event), local_option);
      }
      [_handle_click_0_1]($event) {
        this[_ButtonDirective_0_5].instance.handleClick(html.MouseEvent._check($event));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
      }
    }
    (_ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
      this[_ButtonDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_appEl_7] = null;
      this[_NgIf_7_9] = null;
      this[_appEl_10] = null;
      this[_NgIf_10_9] = null;
      this[_appEl_12] = null;
      this[_NgFor_12_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_12] = null;
      this[_el_0] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_4] = null;
      _ViewMaterialTreeGroupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent1);
    _ViewMaterialTreeGroupComponent1.prototype[_is__ViewMaterialTreeGroupComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent1.__proto__),
      [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_12_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(core.bool),
      [_expr_7]: dart.fieldType(core.bool),
      [_expr_8]: dart.fieldType(core.bool),
      [_expr_12]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element),
      [_el_1]: dart.fieldType(html.DivElement),
      [_el_2]: dart.fieldType(html.DivElement),
      [_el_4]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialTreeGroupComponent1;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1, _is__ViewMaterialTreeGroupComponent1_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent1$(T)).new(parentView, parentIndex);
  };
  const _NgIf_1_9 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_NgIf_1_9");
  const _is__ViewMaterialTreeGroupComponent2_default = Symbol('_is__ViewMaterialTreeGroupComponent2_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(html.HtmlElement._check(_el_0), "tree-selection-state");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = this.parentView.locals[$_get]("$implicit");
        this[_NgIf_1_9].ngIf = _ctx.isMultiSelect;
        this[_NgIf_2_9].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(T._check(local_option)));
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      _ViewMaterialTreeGroupComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent2);
    _ViewMaterialTreeGroupComponent2.prototype[_is__ViewMaterialTreeGroupComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent2.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialTreeGroupComponent2;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2, _is__ViewMaterialTreeGroupComponent2_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent2$(T)).new(parentView, parentIndex);
  };
  const _compView_0 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_compView_0");
  const _MaterialCheckboxComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_MaterialCheckboxComponent_0_5");
  let const$;
  const _is__ViewMaterialTreeGroupComponent3_default = Symbol('_is__ViewMaterialTreeGroupComponent3_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, src__runtime__interpolate.interpolateString2("", "tree-selection-state", " ", material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass, ""));
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0], null, null, null);
        this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic))]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = this.parentView.parentView.locals[$_get]("$implicit");
        changed = false;
        if (firstCheck) {
          this[_MaterialCheckboxComponent_0_5].readOnly = true;
          changed = true;
        }
        let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_2 = _ctx.isSelected(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      _ViewMaterialTreeGroupComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent3);
    _ViewMaterialTreeGroupComponent3.prototype[_is__ViewMaterialTreeGroupComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent3.__proto__),
      [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_2]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialTreeGroupComponent3;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3, _is__ViewMaterialTreeGroupComponent3_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent3$(T)).new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeGroupComponent4_default = Symbol('_is__ViewMaterialTreeGroupComponent4_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "tree-selection-state");
        src__runtime__dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_MaterialIconComponent_0_5].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialIconComponent_0_5] = null;
      _ViewMaterialTreeGroupComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent4);
    _ViewMaterialTreeGroupComponent4.prototype[_is__ViewMaterialTreeGroupComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent4.__proto__),
      [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
      [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
    }));
    return _ViewMaterialTreeGroupComponent4;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4, _is__ViewMaterialTreeGroupComponent4_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent4$(T)).new(parentView, parentIndex);
  };
  const _appEl_0 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_appEl_0");
  const _DynamicComponent_0_8 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialTreeGroupComponent5_default = Symbol('_is__ViewMaterialTreeGroupComponent5_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
        this[_compView_0].create0(this[_DynamicComponent_0_8]);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = this.parentView.locals[$_get]("$implicit");
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialTreeGroupComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent5);
    _ViewMaterialTreeGroupComponent5.prototype[_is__ViewMaterialTreeGroupComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent5.__proto__),
      [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupComponent5;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5, _is__ViewMaterialTreeGroupComponent5_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent5$(T)).new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupComponent6_default = Symbol('_is__ViewMaterialTreeGroupComponent6_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(this[_el_0]), "text");
        this.addShimE(this[_el_0]);
        this[_el_0][$append](this[_textBinding_1].element);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = this.parentView.locals[$_get]("$implicit");
        let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "item", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.showDisabledCheckbox(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "disabled-item", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.getOptionAsText(T._check(local_option))));
      }
    }
    (_ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_el_0] = null;
      _ViewMaterialTreeGroupComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent6);
    _ViewMaterialTreeGroupComponent6.prototype[_is__ViewMaterialTreeGroupComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent6.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupComponent6;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6, _is__ViewMaterialTreeGroupComponent6_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent6$(T)).new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_6 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_MaterialIconComponent_0_6");
  const _is__ViewMaterialTreeGroupComponent7_default = Symbol('_is__ViewMaterialTreeGroupComponent7_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
        this.updateChildClassNonHtml(this[_el_0], "tree-expansion-state");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
        this[_MaterialIconComponent_0_6] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0]));
        this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
        this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
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
        let local_option = this.parentView.locals[$_get]("$implicit");
        changed = false;
        let currVal_1 = dart.test(_ctx.isExpanded(T._check(local_option))) ? "expand_less" : "expand_more";
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialIconComponent_0_6].icon = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        let currVal_0 = _ctx.isExpanded(T._check(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "expanded", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
      [_handle_trigger_0_0]($event) {
        let local_option = this.parentView.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleExpansion(html.Event._check($event), local_option);
      }
    }
    (_ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ButtonDirective_0_5] = null;
      this[_MaterialIconComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_el_0] = null;
      _ViewMaterialTreeGroupComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent7);
    _ViewMaterialTreeGroupComponent7.prototype[_is__ViewMaterialTreeGroupComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent7.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent7.__proto__),
      [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
      [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
      [_MaterialIconComponent_0_6]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupComponent7;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7, _is__ViewMaterialTreeGroupComponent7_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent7$(T)).new(parentView, parentIndex);
  };
  const _MaterialTreeGroupComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_MaterialTreeGroupComponent_0_5");
  const _expr_4 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_4");
  const _expr_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_expr_5");
  let const$0;
  let const$1;
  const _is__ViewMaterialTreeGroupComponent8_default = Symbol('_is__ViewMaterialTreeGroupComponent8_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    class _ViewMaterialTreeGroupComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "child-tree");
        this.addShimC(_el_0);
        this[_MaterialTreeGroupComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.parentView.viewData.parentIndex)), this[_compView_0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.viewData.parentIndex)), core.int._check(this.parentView.parentView.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.parentView.parentView.viewData.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.parentView.viewData.parentIndex)), this[_compView_0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.viewData.parentIndex)), core.int._check(this.parentView.parentView.parentView.injectorGetOptional(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.parentView.parentView.viewData.parentIndex)));
        this[_compView_0].create0(this[_MaterialTreeGroupComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_subGroup = src__runtime__optimizations.unsafeCast(model__selection__selection_options.OptionGroup, this.locals[$_get]("$implicit"));
        let local_option = this.parentView.locals[$_get]("$implicit");
        let currVal_0 = _ctx.expandAll;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_subGroup;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialTreeGroupComponent_0_5].group = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = dart.notNull(_ctx.level) + 1;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialTreeGroupComponent_0_5].level = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.showCheckbox(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialTreeGroupComponent_0_5].parentHasCheckbox = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.allowParentSingleSelection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.maxInitialOptionsShown;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_5;
          this[_expr_5] = currVal_5;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeGroupComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      _ViewMaterialTreeGroupComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent8);
    _ViewMaterialTreeGroupComponent8.prototype[_is__ViewMaterialTreeGroupComponent8_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent8.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent8.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialTreeGroupComponent0OfT()),
      [_MaterialTreeGroupComponent_0_5]: dart.fieldType(MaterialTreeGroupComponentOfT()),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(core.int),
      [_expr_3]: dart.fieldType(core.bool),
      [_expr_4]: dart.fieldType(core.bool),
      [_expr_5]: dart.fieldType(core.int)
    }));
    return _ViewMaterialTreeGroupComponent8;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8, _is__ViewMaterialTreeGroupComponent8_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent8$(T)).new(parentView, parentIndex);
  };
  const _ButtonDirective_3_5 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_ButtonDirective_3_5");
  const _el_3 = dart.privateName(src__material_tree__group__material_tree_group$46template, "_el_3");
  const _is__ViewMaterialTreeGroupComponent9_default = Symbol('_is__ViewMaterialTreeGroupComponent9_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        let _ctx = this.ctx;
        let doc = html.document;
        let _el_0 = doc[$createElement]("li");
        this.addShimE(_el_0);
        this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, _el_0);
        this.updateChildClass(this[_el_1], "view-more-link-item");
        this.addShimC(this[_el_1]);
        this[_el_2] = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        this[_el_3] = html.AnchorElement._check(src__runtime__dom_helpers.appendElement(doc, this[_el_2], "a"));
        src__runtime__dom_helpers.setAttribute(this[_el_3], "buttonDecorator", "");
        this.updateChildClass(this[_el_3], "view-more-link");
        src__runtime__dom_helpers.setAttribute(this[_el_3], "href", "#");
        this.addShimC(this[_el_3]);
        this[_ButtonDirective_3_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_3], null));
        let _text_4 = src__runtime__dom_helpers.appendText(this[_el_3], src__runtime__interpolate.interpolateString0(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.viewMoreMsg));
        this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
        this[_el_3][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(_ctx, 'viewMoreOptions')));
        this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
          return this[_ButtonDirective_3_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_0);
          this[_expr_0] = currVal_0;
        }
        if (firstCheck) {
          if (!(_ctx.fixedPadding == null)) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
      }
    }
    (_ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
      this[_ButtonDirective_3_5] = null;
      this[_expr_0] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_3] = null;
      _ViewMaterialTreeGroupComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent9);
    _ViewMaterialTreeGroupComponent9.prototype[_is__ViewMaterialTreeGroupComponent9_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent9.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent9.__proto__),
      [_ButtonDirective_3_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_el_1]: dart.fieldType(html.DivElement),
      [_el_2]: dart.fieldType(html.DivElement),
      [_el_3]: dart.fieldType(html.AnchorElement)
    }));
    return _ViewMaterialTreeGroupComponent9;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9, _is__ViewMaterialTreeGroupComponent9_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponent9$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  let const$2;
  let const$3;
  const _is__ViewMaterialTreeGroupComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupComponentHost0_default');
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeGroupComponentOfT = () => (ComponentRefOfMaterialTreeGroupComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeGroupComponentOfT())))();
    class _ViewMaterialTreeGroupComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialTreeGroupComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), core.int._check(this.injectorGetOptional(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), core.int._check(this.injectorGetOptional(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex)));
        this[_compView_0].create(this[_MaterialTreeGroupComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeGroupComponent_0_5]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeGroupComponent_0_5] = null;
      _ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeGroupComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponentHost0);
    _ViewMaterialTreeGroupComponentHost0.prototype[_is__ViewMaterialTreeGroupComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialTreeGroupComponent0OfT()),
      [_MaterialTreeGroupComponent_0_5]: dart.fieldType(MaterialTreeGroupComponentOfT())
    }));
    return _ViewMaterialTreeGroupComponentHost0;
  });
  src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$();
  dart.addTypeTests(src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, _is__ViewMaterialTreeGroupComponentHost0_default);
  src__material_tree__group__material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group$46template, {
    /*src__material_tree__group__material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), src__material_tree__group__material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles*/get styles() {
      return ["div._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap}div.disabled._ngcontent-%ID%{pointer-events:none}div._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}div.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}div.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles*/get styles() {
      return ["material-radio._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;align-items:flex-start}material-radio.disabled._ngcontent-%ID%{pointer-events:none}material-radio._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-radio.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-radio.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-radio:not([separator=present]):hover._ngcontent-%ID%,material-radio:not([separator=present]):focus._ngcontent-%ID%,material-radio:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-radio:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim, {
    /*src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles*/get styles() {
      return ["material-checkbox._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer}material-checkbox.disabled._ngcontent-%ID%{pointer-events:none}material-checkbox._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-checkbox:not([separator=present]):hover._ngcontent-%ID%,material-checkbox:not([separator=present]):focus._ngcontent-%ID%,material-checkbox:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-checkbox:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  });
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return [src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_appEl_0");
  const _NgFor_0_9 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_NgFor_0_9");
  const _expr_0$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupFlatListComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatListComponent0_default');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatListComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (!(_ctx.isMaterialTreeGroup == null)) {
            src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent, src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-list"));
    }).prototype = ViewMaterialTreeGroupFlatListComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatListComponent0);
    ViewMaterialTreeGroupFlatListComponent0.prototype[_is_ViewMaterialTreeGroupFlatListComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatListComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatListComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialTreeGroupFlatListComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatListComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatListComponent0;
  });
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$();
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, _is_ViewMaterialTreeGroupFlatListComponent0_default);
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory*/get _MaterialTreeGroupFlatListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatListComponent()).new("material-tree-group-flat-list", dart.gbind(dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatListComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatListComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory;
    }
  });
  const _appEl_1$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_appEl_1");
  const _NgIf_1_9$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_NgIf_1_9");
  const _appEl_2$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_appEl_2");
  const _NgIf_2_9$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeGroupFlatListComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent1_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(html.HtmlElement._check(_el_0), "material-tree-option");
        this.addShimC(html.HtmlElement._check(_el_0));
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$].detectChangesInNestedViews();
        this[_appEl_2$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$].destroyNestedViews();
        this[_appEl_2$].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_appEl_2$] = null;
      this[_NgIf_2_9$] = null;
      _ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent1);
    _ViewMaterialTreeGroupFlatListComponent1.prototype[_is__ViewMaterialTreeGroupFlatListComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent1.__proto__),
      [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialTreeGroupFlatListComponent1;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, _is__ViewMaterialTreeGroupFlatListComponent1_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$(T)).new(parentView, parentIndex);
  };
  const _compView_0$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_compView_0");
  const _DynamicComponent_0_8$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_DynamicComponent_0_8");
  const _expr_1$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_expr_1");
  const _expr_2$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_expr_2");
  const _is__ViewMaterialTreeGroupFlatListComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent2_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]);
        this[_compView_0$].create0(this[_DynamicComponent_0_8$]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_DynamicComponent_0_8$].componentType = currVal_0;
          changed = true;
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          this[_DynamicComponent_0_8$].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_DynamicComponent_0_8$].value = currVal_2;
          changed = true;
          this[_expr_2$] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8$].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_DynamicComponent_0_8$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      _ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent2);
    _ViewMaterialTreeGroupFlatListComponent2.prototype[_is__ViewMaterialTreeGroupFlatListComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent2.__proto__),
      [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0$]: dart.fieldType(dart.dynamic),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatListComponent2;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, _is__ViewMaterialTreeGroupFlatListComponent2_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$(T)).new(parentView, parentIndex);
  };
  const _textBinding_1$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupFlatListComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent3_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatListComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(src__runtime__interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent3);
    _ViewMaterialTreeGroupFlatListComponent3.prototype[_is__ViewMaterialTreeGroupFlatListComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatListComponent3;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, _is__ViewMaterialTreeGroupFlatListComponent3_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatListComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialTreeGroupFlatListComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatListComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponentHost0_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatListComponent0OfT = () => (ViewMaterialTreeGroupFlatListComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatListComponentOfT = () => (MaterialTreeGroupFlatListComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)))();
    let VoidToMaterialTreeGroupFlatListComponentOfT = () => (VoidToMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeGroupFlatListComponentOfT = () => (ComponentRefOfMaterialTreeGroupFlatListComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeGroupFlatListComponentOfT())))();
    class _ViewMaterialTreeGroupFlatListComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatListComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatListComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$]), VoidToMaterialTreeGroupFlatListComponentOfT())) : new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$]);
        this[_compView_0$].create(this[_MaterialTreeGroupFlatListComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatListComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatListComponent_0_5]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatListComponent_0_5] = null;
      _ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeGroupFlatListComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponentHost0);
    _ViewMaterialTreeGroupFlatListComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatListComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatListComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
      [_compView_0$]: dart.fieldType(ViewMaterialTreeGroupFlatListComponent0OfT()),
      [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(MaterialTreeGroupFlatListComponentOfT())
    }));
    return _ViewMaterialTreeGroupFlatListComponentHost0;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, _is__ViewMaterialTreeGroupFlatListComponentHost0_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return [src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim.styles];
    }
  });
  const _query_MaterialRadioComponent_0_0_isDirty = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_query_MaterialRadioComponent_0_0_isDirty");
  const _MaterialRadioGroupComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialRadioGroupComponent_0_5");
  const _NgFor_1_9$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_NgFor_1_9");
  const _MaterialRadioComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialRadioComponent_0_5");
  const _is_ViewMaterialTreeGroupFlatRadioComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatRadioComponent0_default');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatRadioComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0$] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        parentRenderNode[$append](_el_0);
        this.addShimC(_el_0);
        this[_MaterialRadioGroupComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_radio__material_radio_group.MaterialRadioGroupComponent, dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), dart.fn(() => new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null), VoidToMaterialRadioGroupComponent())) : new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_1_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
        this[_compView_0$].create(this[_MaterialRadioGroupComponent_0_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$]])]));
        this.init0();
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && dart.notNull(nodeIndex) <= 1) {
          return this[_MaterialRadioGroupComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          if (!(_ctx.selectionModel == null)) {
            this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
            changed = true;
          }
        }
        if (changed) {
          this[_compView_0$].markAsCheckOnce();
        }
        let currVal_1 = _ctx.group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          this[_NgFor_1_9$].ngForOf = currVal_1;
          this[_expr_1$] = currVal_1;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9$].ngDoCheck();
        }
        this[_appEl_1$].detectChangesInNestedViews();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
            this[_MaterialRadioGroupComponent_0_5].radioComponents = this[_appEl_1$].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1ToListOfMaterialRadioComponent()));
            this[_query_MaterialRadioComponent_0_0_isDirty] = false;
          }
          if (firstCheck) {
            this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
          }
        }
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (!(_ctx.isMaterialTreeGroup == null)) {
            src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent, src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialRadioComponent_0_0_isDirty] = true;
      this[_compView_0$] = null;
      this[_MaterialRadioGroupComponent_0_5] = null;
      this[_appEl_1$] = null;
      this[_NgFor_1_9$] = null;
      this[_expr_1$] = null;
      ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-radio"));
    }).prototype = ViewMaterialTreeGroupFlatRadioComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatRadioComponent0);
    ViewMaterialTreeGroupFlatRadioComponent0.prototype[_is_ViewMaterialTreeGroupFlatRadioComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(core.bool),
      [_compView_0$]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
      [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
      [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_1$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatRadioComponent0;
  });
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$();
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, _is_ViewMaterialTreeGroupFlatRadioComponent0_default);
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory*/get _MaterialTreeGroupFlatRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatRadioComponent()).new("material-tree-group-flat-radio", dart.gbind(dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatRadioComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory;
    }
  });
  const _expr_3$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_expr_3");
  const _el_0$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_el_0");
  const _is__ViewMaterialTreeGroupFlatRadioComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent1_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$].rootEl;
        this.updateChildClassNonHtml(this[_el_0$], src__runtime__interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", material_radio__material_radio.MaterialRadioComponent.hostClass, ""));
        src__runtime__dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(html.HtmlElement._check(this[_el_0$]));
        this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$], src__runtime__optimizations.unsafeCast(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_MaterialRadioGroupComponent_0_5], null, "option");
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
        this[_compView_0$].create(this[_MaterialRadioComponent_0_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]));
        this.init1(this[_el_0$]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialRadioComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = local_option;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_MaterialRadioComponent_0_5].value = currVal_2;
          changed = true;
          this[_expr_2$] = currVal_2;
        }
        let currVal_3 = _ctx.isReadOnly;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
          this[_MaterialRadioComponent_0_5].disabled = currVal_3;
          changed = true;
          this[_expr_3$] = currVal_3;
        }
        if (changed) {
          this[_compView_0$].markAsCheckOnce();
        }
        this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$].detectChangesInNestedViews();
        this[_appEl_2$].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$] = currVal_1;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      dirtyParentQueriesInternal() {
        src__runtime__optimizations.unsafeCast(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_appEl_1$].destroyNestedViews();
        this[_appEl_2$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_MaterialRadioComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialRadioComponent_0_5] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_appEl_2$] = null;
      this[_NgIf_2_9$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      this[_expr_3$] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent1);
    _ViewMaterialTreeGroupFlatRadioComponent1.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
      [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
      [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0$]: dart.fieldType(core.bool),
      [_expr_1$]: dart.fieldType(core.bool),
      [_expr_2$]: dart.fieldType(dart.dynamic),
      [_expr_3$]: dart.fieldType(core.bool),
      [_el_0$]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent1;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, _is__ViewMaterialTreeGroupFlatRadioComponent1_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeGroupFlatRadioComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent2_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]);
        this[_compView_0$].create0(this[_DynamicComponent_0_8$]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_DynamicComponent_0_8$].componentType = currVal_0;
          changed = true;
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          this[_DynamicComponent_0_8$].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_DynamicComponent_0_8$].value = currVal_2;
          changed = true;
          this[_expr_2$] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8$].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_DynamicComponent_0_8$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      _ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent2);
    _ViewMaterialTreeGroupFlatRadioComponent2.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
      [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0$]: dart.fieldType(dart.dynamic),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent2;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, _is__ViewMaterialTreeGroupFlatRadioComponent2_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeGroupFlatRadioComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent3_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatRadioComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(src__runtime__interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent3);
    _ViewMaterialTreeGroupFlatRadioComponent3.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent3;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, _is__ViewMaterialTreeGroupFlatRadioComponent3_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatRadioComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialTreeGroupFlatRadioComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatRadioComponent0OfT = () => (ViewMaterialTreeGroupFlatRadioComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatRadioComponentOfT = () => (MaterialTreeGroupFlatRadioComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)))();
    let VoidToMaterialTreeGroupFlatRadioComponentOfT = () => (VoidToMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeGroupFlatRadioComponentOfT = () => (ComponentRefOfMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeGroupFlatRadioComponentOfT())))();
    class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatRadioComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatRadioComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentOfT())) : new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)));
        this[_compView_0$].create(this[_MaterialTreeGroupFlatRadioComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatRadioComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatRadioComponent_0_5]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
      _ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponentHost0);
    _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
      [_compView_0$]: dart.fieldType(ViewMaterialTreeGroupFlatRadioComponent0OfT()),
      [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(MaterialTreeGroupFlatRadioComponentOfT())
    }));
    return _ViewMaterialTreeGroupFlatRadioComponentHost0;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return [src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim.styles];
    }
  });
  const _is_ViewMaterialTreeGroupFlatCheckComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatCheckComponent0_default');
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$ = dart.generic(T => {
    class ViewMaterialTreeGroupFlatCheckComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (!(_ctx.isMaterialTreeGroup == null)) {
            src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = styles = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent, src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-group-flat-check"));
    }).prototype = ViewMaterialTreeGroupFlatCheckComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatCheckComponent0);
    ViewMaterialTreeGroupFlatCheckComponent0.prototype[_is_ViewMaterialTreeGroupFlatCheckComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeGroupFlatCheckComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialTreeGroupFlatCheckComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatCheckComponent0;
  });
  src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$();
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, _is_ViewMaterialTreeGroupFlatCheckComponent0_default);
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory*/get _MaterialTreeGroupFlatCheckComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeGroupFlatCheckComponent()).new("material-tree-group-flat-check", dart.gbind(dart.fn(src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, AppViewAndintToAppViewOfMaterialTreeGroupFlatCheckComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__group__material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return src__material_tree__group__material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory;
    }
  });
  const _MaterialCheckboxComponent_0_5$ = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialCheckboxComponent_0_5");
  const _handle_checkedChange_0_0 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_handle_checkedChange_0_0");
  const _is__ViewMaterialTreeGroupFlatCheckComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent1_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this[_compView_0$] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$].rootEl;
        this.updateChildClassNonHtml(this[_el_0$], src__runtime__interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass, ""));
        src__runtime__dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(html.HtmlElement._check(this[_el_0$]));
        this[_MaterialCheckboxComponent_0_5$] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_0$]), this[_compView_0$], null, null, "option");
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn((parentView, parentIndex) => src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
        this[_compView_0$].create(this[_MaterialCheckboxComponent_0_5$], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_1$], this[_appEl_2$]])]));
        let subscription_0 = this[_MaterialCheckboxComponent_0_5$].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
        this.init(JSArrayOfObject().of([this[_el_0$]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialCheckboxComponent_0_5$];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_MaterialCheckboxComponent_0_5$].disabled = currVal_2;
          changed = true;
          this[_expr_2$] = currVal_2;
        }
        let currVal_3 = _ctx.isSelected(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
          this[_MaterialCheckboxComponent_0_5$].checked = currVal_3;
          changed = true;
          this[_expr_3$] = currVal_3;
        }
        if (changed) {
          this[_compView_0$].markAsCheckOnce();
        }
        this[_NgIf_1_9$].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$].detectChangesInNestedViews();
        this[_appEl_2$].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$] = currVal_1;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$].destroyNestedViews();
        this[_appEl_2$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5$].ngOnDestroy();
      }
      [_handle_checkedChange_0_0]($event) {
        let local_option = src__runtime__optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        let _ctx = this.ctx;
        _ctx.setSelectionState(local_option, core.bool._check($event));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialCheckboxComponent_0_5$] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_appEl_2$] = null;
      this[_NgIf_2_9$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      this[_expr_3$] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent1);
    _ViewMaterialTreeGroupFlatCheckComponent1.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      [_compView_0$]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5$]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
      [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0$]: dart.fieldType(core.bool),
      [_expr_1$]: dart.fieldType(core.bool),
      [_expr_2$]: dart.fieldType(core.bool),
      [_expr_3$]: dart.fieldType(core.bool),
      [_el_0$]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent1;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, _is__ViewMaterialTreeGroupFlatCheckComponent1_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeGroupFlatCheckComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent2_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this[_compView_0$] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$]);
        this[_compView_0$].create0(this[_DynamicComponent_0_8$]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_DynamicComponent_0_8$].componentType = currVal_0;
          changed = true;
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          this[_DynamicComponent_0_8$].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_DynamicComponent_0_8$].value = currVal_2;
          changed = true;
          this[_expr_2$] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8$].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$].destroyInternalState();
        this[_DynamicComponent_0_8$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8$] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      _ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent2);
    _ViewMaterialTreeGroupFlatCheckComponent2.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
      [_compView_0$]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8$]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0$]: dart.fieldType(dart.dynamic),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent2;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, _is__ViewMaterialTreeGroupFlatCheckComponent2_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeGroupFlatCheckComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent3_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeGroupFlatCheckComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = src__runtime__optimizations.unsafeCast(T, this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(src__runtime__interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent3);
    _ViewMaterialTreeGroupFlatCheckComponent3.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent3;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, _is__ViewMaterialTreeGroupFlatCheckComponent3_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeGroupFlatCheckComponent_0_5 = dart.privateName(src__material_tree__group__material_tree_group_flat$46template, "_MaterialTreeGroupFlatCheckComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default');
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatCheckComponent0OfT = () => (ViewMaterialTreeGroupFlatCheckComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatCheckComponentOfT = () => (MaterialTreeGroupFlatCheckComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)))();
    let VoidToMaterialTreeGroupFlatCheckComponentOfT = () => (VoidToMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeGroupFlatCheckComponentOfT = () => (ComponentRefOfMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeGroupFlatCheckComponentOfT())))();
    class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatCheckComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatCheckComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentOfT())) : new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$], mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)));
        this[_compView_0$].create(this[_MaterialTreeGroupFlatCheckComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatCheckComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatCheckComponent_0_5]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
      _ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponentHost0);
    _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
      [_compView_0$]: dart.fieldType(ViewMaterialTreeGroupFlatCheckComponent0OfT()),
      [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(MaterialTreeGroupFlatCheckComponentOfT())
    }));
    return _ViewMaterialTreeGroupFlatCheckComponentHost0;
  });
  src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default);
  src__material_tree__group__material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__group__material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__group__material_tree_group_flat$46template, {
    /*src__material_tree__group__material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__group__material_tree_group_flat$46template.initReflector = function() {
    if (dart.test(src__material_tree__group__material_tree_group_flat$46template._visited)) {
      return;
    }
    src__material_tree__group__material_tree_group_flat$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), src__material_tree__group__material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    src__material_tree__material_tree_node$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_rendering_options$46template, {
    /*src__material_tree__material_tree_rendering_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_rendering_options$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_rendering_options$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_rendering_options$46template._visited = true;
    model__selection__selection_options$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_MaterialTreeGroupComponent_1_0_isDirty = dart.privateName(src__material_tree__material_tree_impl$46template, "_query_MaterialTreeGroupComponent_1_0_isDirty");
  const _appEl_0$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(src__material_tree__material_tree_impl$46template, "_NgIf_0_9");
  const _appEl_1$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_appEl_1");
  const _NgIf_1_9$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_NgIf_1_9");
  const _expr_2$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_expr_2");
  const _expr_3$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_expr_3");
  const _expr_4$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_expr_4");
  const _MaterialTreeGroupComponent_0_5$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_MaterialTreeGroupComponent_0_5");
  const _is_ViewMaterialTreeComponent0_default = Symbol('_is_ViewMaterialTreeComponent0_default');
  src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0$ = dart.generic(T => {
    class ViewMaterialTreeComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_impl.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
        this[_NgIf_1_9$0].ngIf = !dart.test(_ctx.supportsHierarchy);
        this[_appEl_0$0].detectChangesInNestedViews();
        this[_appEl_1$0].detectChangesInNestedViews();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialTreeGroupComponent_1_0_isDirty])) {
            _ctx.treeGroupNodes = this[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, dart.fn(nestedView => nestedView[_appEl_0$0].mapNestedViews(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponent().of([nestedView[_MaterialTreeGroupComponent_0_5$]]), _ViewMaterialTreeComponent2ToListOfMaterialTreeGroupComponent())), _ViewMaterialTreeComponent1ToListOfMaterialTreeGroupComponent()));
            this[_query_MaterialTreeGroupComponent_1_0_isDirty] = false;
          }
        }
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
        this[_appEl_1$0].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        let currVal_2 = _ctx.role;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", currVal_2);
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.hostMultiselectable;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-multiselectable", currVal_3);
          this[_expr_3$0] = currVal_3;
        }
        let currVal_4 = _ctx.hostReadonly;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-readonly", currVal_4);
          this[_expr_4$] = currVal_4;
        }
      }
      initComponentStyles() {
        let styles = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = styles = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponent, src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
      this[_appEl_0$0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      this[_expr_4$] = null;
      ViewMaterialTreeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree"));
    }).prototype = ViewMaterialTreeComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeComponent0);
    ViewMaterialTreeComponent0.prototype[_is_ViewMaterialTreeComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialTreeComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeComponent0.__proto__),
      [_query_MaterialTreeGroupComponent_1_0_isDirty]: dart.fieldType(core.bool),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_2$0]: dart.fieldType(dart.dynamic),
      [_expr_3$0]: dart.fieldType(dart.dynamic),
      [_expr_4$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeComponent0;
  });
  src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0 = src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0$();
  dart.defineLazy(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, _is_ViewMaterialTreeComponent0_default);
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template._MaterialTreeComponentNgFactory*/get _MaterialTreeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeComponent()).new("material-tree", dart.gbind(dart.fn(src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, AppViewAndintToAppViewOfMaterialTreeComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_impl$46template, {
    get MaterialTreeComponentNgFactory() {
      return src__material_tree__material_tree_impl$46template._MaterialTreeComponentNgFactory;
    }
  });
  const _NgFor_0_9$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_NgFor_0_9");
  const _expr_0$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_expr_0");
  const _is__ViewMaterialTreeComponent1_default = Symbol('_is__ViewMaterialTreeComponent1_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
        this.init1(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
      this[_appEl_0$0] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent1);
    _ViewMaterialTreeComponent1.prototype[_is__ViewMaterialTreeComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent1.__proto__),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent1;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1, _is__ViewMaterialTreeComponent1_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent1$(T)).new(parentView, parentIndex);
  };
  const _compView_0$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_compView_0");
  const _expr_1$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_expr_1");
  let const$4;
  let const$5;
  const _is__ViewMaterialTreeComponent2_default = Symbol('_is__ViewMaterialTreeComponent2_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2$ = dart.generic(T => {
    let ViewMaterialTreeGroupComponent0OfT = () => (ViewMaterialTreeGroupComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group$46template.ViewMaterialTreeGroupComponent0$(T)))();
    let MaterialTreeGroupComponentOfT = () => (MaterialTreeGroupComponentOfT = dart.constFn(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$(T)))();
    let VoidToMaterialTreeGroupComponentOfT = () => (VoidToMaterialTreeGroupComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent), dart.fn(() => new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), core.int._check(this.parentView.injectorGetOptional(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex))), VoidToMaterialTreeGroupComponentOfT())) : new (MaterialTreeGroupComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), core.int._check(this.parentView.injectorGetOptional(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"))), this.viewData.parentIndex)));
        this[_compView_0$0].create0(this[_MaterialTreeGroupComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let local_optionIndex = src__runtime__optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
        let currVal_0 = _ctx.shouldExpand(local_group, local_optionIndex);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_MaterialTreeGroupComponent_0_5$].expandAll = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          this[_MaterialTreeGroupComponent_0_5$].group = currVal_1;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = _ctx.allowParentSingleSelection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_MaterialTreeGroupComponent_0_5$].allowParentSingleSelection = currVal_2;
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
          this[_MaterialTreeGroupComponent_0_5$].maxInitialOptionsShown = currVal_3;
          this[_expr_3$0] = currVal_3;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0, this.parentView.parentView)[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupComponent_0_5$] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      _ViewMaterialTreeComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent2);
    _ViewMaterialTreeComponent2.prototype[_is__ViewMaterialTreeComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(ViewMaterialTreeGroupComponent0OfT()),
      [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(MaterialTreeGroupComponentOfT()),
      [_expr_0$0]: dart.fieldType(core.bool),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(core.bool),
      [_expr_3$0]: dart.fieldType(core.int)
    }));
    return _ViewMaterialTreeComponent2;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2, _is__ViewMaterialTreeComponent2_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent2$(T)).new(parentView, parentIndex);
  };
  const _appEl_2$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_appEl_2");
  const _NgIf_2_9$0 = dart.privateName(src__material_tree__material_tree_impl$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeComponent3_default = Symbol('_is__ViewMaterialTreeComponent3_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$0], _TemplateRef_0_8);
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_2$0] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this.init(JSArrayOfObject().of([this[_appEl_0$0], this[_appEl_1$0], this[_appEl_2$0]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.showFlatList;
        this[_NgIf_1_9$0].ngIf = _ctx.showFlatRadio;
        this[_NgIf_2_9$0].ngIf = _ctx.showFlatCheck;
        this[_appEl_0$0].detectChangesInNestedViews();
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0$0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      _ViewMaterialTreeComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent3);
    _ViewMaterialTreeComponent3.prototype[_is__ViewMaterialTreeComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent3.__proto__),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialTreeComponent3;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3, _is__ViewMaterialTreeComponent3_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent3$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeComponent4_default = Symbol('_is__ViewMaterialTreeComponent4_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
        this.init1(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
      this[_appEl_0$0] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent4);
    _ViewMaterialTreeComponent4.prototype[_is__ViewMaterialTreeComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent4.__proto__),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent4;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4, _is__ViewMaterialTreeComponent4_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent4$(T)).new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatListComponent_0_5$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_MaterialTreeGroupFlatListComponent_0_5");
  const _is__ViewMaterialTreeComponent5_default = Symbol('_is__ViewMaterialTreeComponent5_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatListComponent0OfT = () => (ViewMaterialTreeGroupFlatListComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatListComponentOfT = () => (MaterialTreeGroupFlatListComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$(T)))();
    let VoidToMaterialTreeGroupFlatListComponentOfT = () => (VoidToMaterialTreeGroupFlatListComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatListComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatListComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0]), VoidToMaterialTreeGroupFlatListComponentOfT())) : new (MaterialTreeGroupFlatListComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0]);
        this[_compView_0$0].create0(this[_MaterialTreeGroupFlatListComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_MaterialTreeGroupFlatListComponent_0_5$].group = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatListComponent_0_5$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent5);
    _ViewMaterialTreeComponent5.prototype[_is__ViewMaterialTreeComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent5.__proto__),
      [_compView_0$0]: dart.fieldType(ViewMaterialTreeGroupFlatListComponent0OfT()),
      [_MaterialTreeGroupFlatListComponent_0_5$]: dart.fieldType(MaterialTreeGroupFlatListComponentOfT()),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent5;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5, _is__ViewMaterialTreeComponent5_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent5$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeComponent6_default = Symbol('_is__ViewMaterialTreeComponent6_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6$ = dart.generic(T => {
    class _ViewMaterialTreeComponent6 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
        this.init1(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
      this[_appEl_0$0] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent6);
    _ViewMaterialTreeComponent6.prototype[_is__ViewMaterialTreeComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent6.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent6.__proto__),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent6;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6, _is__ViewMaterialTreeComponent6_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent6$(T)).new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatRadioComponent_0_5$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_MaterialTreeGroupFlatRadioComponent_0_5");
  const _is__ViewMaterialTreeComponent7_default = Symbol('_is__ViewMaterialTreeComponent7_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatRadioComponent0OfT = () => (ViewMaterialTreeGroupFlatRadioComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatRadioComponentOfT = () => (MaterialTreeGroupFlatRadioComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(T)))();
    let VoidToMaterialTreeGroupFlatRadioComponentOfT = () => (VoidToMaterialTreeGroupFlatRadioComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent7 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatRadioComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatRadioComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentOfT())) : new (MaterialTreeGroupFlatRadioComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)));
        this[_compView_0$0].create0(this[_MaterialTreeGroupFlatRadioComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_MaterialTreeGroupFlatRadioComponent_0_5$].group = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatRadioComponent_0_5$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent7);
    _ViewMaterialTreeComponent7.prototype[_is__ViewMaterialTreeComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent7.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent7.__proto__),
      [_compView_0$0]: dart.fieldType(ViewMaterialTreeGroupFlatRadioComponent0OfT()),
      [_MaterialTreeGroupFlatRadioComponent_0_5$]: dart.fieldType(MaterialTreeGroupFlatRadioComponentOfT()),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent7;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7, _is__ViewMaterialTreeComponent7_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent7$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialTreeComponent8_default = Symbol('_is__ViewMaterialTreeComponent8_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8$ = dart.generic(T => {
    class _ViewMaterialTreeComponent8 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
        this.init1(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0$0] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent8);
    _ViewMaterialTreeComponent8.prototype[_is__ViewMaterialTreeComponent8_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent8.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent8.__proto__),
      [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent8;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8, _is__ViewMaterialTreeComponent8_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent8$(T)).new(parentView, parentIndex);
  };
  const _MaterialTreeGroupFlatCheckComponent_0_5$ = dart.privateName(src__material_tree__material_tree_impl$46template, "_MaterialTreeGroupFlatCheckComponent_0_5");
  const _is__ViewMaterialTreeComponent9_default = Symbol('_is__ViewMaterialTreeComponent9_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9$ = dart.generic(T => {
    let ViewMaterialTreeGroupFlatCheckComponent0OfT = () => (ViewMaterialTreeGroupFlatCheckComponent0OfT = dart.constFn(src__material_tree__group__material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(T)))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let MaterialTreeGroupFlatCheckComponentOfT = () => (MaterialTreeGroupFlatCheckComponentOfT = dart.constFn(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(T)))();
    let VoidToMaterialTreeGroupFlatCheckComponentOfT = () => (VoidToMaterialTreeGroupFlatCheckComponentOfT = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentOfT(), [])))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialTreeComponent9 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatCheckComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatCheckComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentOfT(), dart.wrapType(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentOfT())) : new (MaterialTreeGroupFlatCheckComponentOfT()).new(MaterialTreeRootOfT()._check(this.parentView.injectorGet(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), this[_compView_0$0], mixins__material_dropdown_base.DropdownHandle._check(this.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)));
        this[_compView_0$0].create0(this[_MaterialTreeGroupFlatCheckComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_MaterialTreeGroupFlatCheckComponent_0_5$].group = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatCheckComponent_0_5$] = null;
      this[_expr_0$0] = null;
      _ViewMaterialTreeComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent9);
    _ViewMaterialTreeComponent9.prototype[_is__ViewMaterialTreeComponent9_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponent9.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent9.__proto__),
      [_compView_0$0]: dart.fieldType(ViewMaterialTreeGroupFlatCheckComponent0OfT()),
      [_MaterialTreeGroupFlatCheckComponent_0_5$]: dart.fieldType(MaterialTreeGroupFlatCheckComponentOfT()),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent9;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9, _is__ViewMaterialTreeComponent9_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponent9$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeComponent_0_5 = dart.privateName(src__material_tree__material_tree_impl$46template, "_MaterialTreeComponent_0_5");
  const _is__ViewMaterialTreeComponentHost0_default = Symbol('_is__ViewMaterialTreeComponentHost0_default');
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeComponent0OfT = () => (ViewMaterialTreeComponent0OfT = dart.constFn(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0$(T)))();
    let MaterialTreeComponentOfT = () => (MaterialTreeComponentOfT = dart.constFn(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)))();
    let VoidToMaterialTreeComponentOfT = () => (VoidToMaterialTreeComponentOfT = dart.constFn(dart.fnType(MaterialTreeComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeComponentOfT = () => (ComponentRefOfMaterialTreeComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeComponentOfT())))();
    class _ViewMaterialTreeComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0$0].rootEl;
        this[_MaterialTreeComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeComponentOfT(), dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), dart.fn(() => new (MaterialTreeComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), null), VoidToMaterialTreeComponentOfT())) : new (MaterialTreeComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)), null);
        this[_compView_0$0].create(this[_MaterialTreeComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
          return this[_MaterialTreeComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeComponent_0_5] = null;
      _ViewMaterialTreeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponentHost0);
    _ViewMaterialTreeComponentHost0.prototype[_is__ViewMaterialTreeComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponentHost0.__proto__),
      [_compView_0$0]: dart.fieldType(ViewMaterialTreeComponent0OfT()),
      [_MaterialTreeComponent_0_5]: dart.fieldType(MaterialTreeComponentOfT())
    }));
    return _ViewMaterialTreeComponentHost0;
  });
  src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0 = src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0$();
  dart.addTypeTests(src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0, _is__ViewMaterialTreeComponentHost0_default);
  src__material_tree__material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_impl$46template._ViewMaterialTreeComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_impl$46template, {
    /*src__material_tree__material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_impl$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_impl$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_impl$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), src__material_tree__material_tree_impl$46template.MaterialTreeComponentNgFactory);
    src__material_tree__group__material_tree_group$46template.initReflector();
    src__material_tree__group__material_tree_group_flat$46template.initReflector();
    src__material_tree__material_tree_rendering_options$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    angular$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _query_materialInput_1_0_isDirty = dart.privateName(src__material_tree__material_tree_filter$46template, "_query_materialInput_1_0_isDirty");
  const _appEl_0$1 = dart.privateName(src__material_tree__material_tree_filter$46template, "_appEl_0");
  const _NgIf_0_9$ = dart.privateName(src__material_tree__material_tree_filter$46template, "_NgIf_0_9");
  const _MaterialInputComponent_0_9 = dart.privateName(src__material_tree__material_tree_filter$46template, "_MaterialInputComponent_0_9");
  src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_filter.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$1] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$1], dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.hasFilterable;
      this[_appEl_0$1].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_materialInput_1_0_isDirty])) {
          _ctx.materialInput = src__runtime__queries.firstOrNull(material_input__material_input.MaterialInputComponent, this[_appEl_0$1].mapNestedViews(material_input__material_input.MaterialInputComponent, src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, dart.fn(nestedView => JSArrayOfMaterialInputComponent().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1ToListOfMaterialInputComponent())));
          this[_query_materialInput_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles;
      if (styles == null) {
        src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = styles = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponent, src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_query_materialInput_1_0_isDirty] = true;
    this[_appEl_0$1] = null;
    this[_NgIf_0_9$] = null;
    src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-filter"));
  }).prototype = src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_query_materialInput_1_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_0$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentNgFactory*/get _MaterialTreeFilterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeFilterComponent()).new("material-tree-filter", dart.fn(src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, AppViewAndintToAppViewOfMaterialTreeFilterComponent())));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_filter$46template, {
    get MaterialTreeFilterComponentNgFactory() {
      return src__material_tree__material_tree_filter$46template._MaterialTreeFilterComponentNgFactory;
    }
  });
  const _compView_0$1 = dart.privateName(src__material_tree__material_tree_filter$46template, "_compView_0");
  const _DeferredValidator_0_5 = dart.privateName(src__material_tree__material_tree_filter$46template, "_DeferredValidator_0_5");
  const _NgValidators_0_6 = dart.privateName(src__material_tree__material_tree_filter$46template, "_NgValidators_0_6");
  const _NgModel_0_7 = dart.privateName(src__material_tree__material_tree_filter$46template, "_NgModel_0_7");
  const _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(src__material_tree__material_tree_filter$46template, "_MaterialInputDefaultValueAccessor_0_11");
  const _expr_1$1 = dart.privateName(src__material_tree__material_tree_filter$46template, "_expr_1");
  const _expr_3$1 = dart.privateName(src__material_tree__material_tree_filter$46template, "_expr_3");
  let const$6;
  let const$7;
  const _handle_inputKeyPress_0_1 = dart.privateName(src__material_tree__material_tree_filter$46template, "_handle_inputKeyPress_0_1");
  let const$8;
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$1] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0$1].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_0, "style", "width: 100%;");
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_0_7], this[_compView_0$1], this[_DeferredValidator_0_5]);
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
      this[_compView_0$1].create(this[_MaterialInputComponent_0_9], JSArrayOfObject().of([const$6 || (const$6 = dart.constList([], dart.dynamic)), const$7 || (const$7 = dart.constList([], dart.dynamic))]));
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(this, _handle_inputKeyPress_0_1)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_0_5];
        }
        if (token === (const$8 || (const$8 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
          return this[_NgValidators_0_6];
        }
        if (token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) {
          return this[_NgModel_0_7];
        }
        if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialInputComponent_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1$1] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3$1] = currVal_3;
      }
      if (changed) {
        this[_compView_0$1].markAsCheckOnce();
      }
      this[_compView_0$1].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0, this.parentView)[_query_materialInput_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_inputKeyPress_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.inputText = core.String._check($event);
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1$1] = null;
    this[_expr_3$1] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_inputKeyPress_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_compView_0$1]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_1$1]: dart.fieldType(core.String),
    [_expr_3$1]: dart.fieldType(core.String)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeFilterComponent_0_5 = dart.privateName(src__material_tree__material_tree_filter$46template, "_MaterialTreeFilterComponent_0_5");
  src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent) {
    build() {
      this[_compView_0$1] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_MaterialTreeFilterComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex))), VoidToMaterialTreeFilterComponent())) : new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.viewData.parentIndex)));
      this[_compView_0$1].create(this[_MaterialTreeFilterComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTreeFilterComponent()).new(0, this, this.rootEl, this[_MaterialTreeFilterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_MaterialTreeFilterComponent_0_5] = null;
    src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setMethodSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), [])
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
    [_MaterialTreeFilterComponent_0_5]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent)
  }));
  src__material_tree__material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tree__material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_filter$46template, {
    /*src__material_tree__material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_filter$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_filter$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_filter$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), src__material_tree__material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__selection__select$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46scss$46css$46shim, {
    /*src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:inline-flex}.button._ngcontent-%ID%{display:flex;align-items:center;flex-grow:1;cursor:pointer;padding-right:48px;position:relative}.button.border._ngcontent-%ID%{border-bottom:1px solid rgba(0,0,0,0.12);padding-bottom:1px}.icon._ngcontent-%ID%{opacity:0.54;position:absolute;right:0;top:calc(50% - 13px)}.search-box._ngcontent-%ID%{width:100%}"];
    }
  });
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return [src__material_tree__material_tree_dropdown$46scss$46css$46shim.styles];
    }
  });
  const _query_MaterialTreeFilterComponent_1_0_isDirty = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_query_MaterialTreeFilterComponent_1_0_isDirty");
  const _KeyboardOnlyFocusIndicatorDirective_0_5 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_KeyboardOnlyFocusIndicatorDirective_0_5");
  const _PopupSourceDirective_0_6 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_PopupSourceDirective_0_6");
  const _appEl_1$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_1");
  const _NgIf_1_9$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_NgIf_1_9");
  const _appEl_2$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_2");
  const _NgIf_2_9$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_NgIf_2_9");
  const _appEl_3$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_3");
  const _NgIf_3_9$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_NgIf_3_9");
  const _compView_4 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_compView_4");
  const _appEl_4 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_4");
  const _MaterialPopupComponent_4_8 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_MaterialPopupComponent_4_8");
  const __PopupHierarchy_4_11 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "__PopupHierarchy_4_11");
  const __PopupRef_4_12 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "__PopupRef_4_12");
  const _appEl_6$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_6");
  const _NgIf_6_9$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_NgIf_6_9");
  const _appEl_7$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_appEl_7");
  const _DeferredContentDirective_7_9 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_DeferredContentDirective_7_9");
  const _expr_0$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_0");
  const _expr_6$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_6");
  const _expr_7$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_7");
  const _expr_9 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_9");
  const _el_0$0 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_el_0");
  const _el_4$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_el_4");
  const _PopupHierarchy_4_11 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_PopupHierarchy_4_11");
  const _PopupRef_4_12 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_PopupRef_4_12");
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  const _handle_focus_0_0 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_handle_focus_0_0");
  const _handle_click_0_1$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_handle_click_0_1");
  const _handle_visibleChange_4_1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_handle_visibleChange_4_1");
  let const$16;
  const _MaterialTreeFilterComponent_0_5$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_MaterialTreeFilterComponent_0_5");
  const _is_ViewMaterialTreeDropdownComponent0_default = Symbol('_is_ViewMaterialTreeDropdownComponent0_default');
  src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$ = dart.generic(T => {
    class ViewMaterialTreeDropdownComponent0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      get [_PopupHierarchy_4_11]() {
        if (this[__PopupHierarchy_4_11] == null) {
          this[__PopupHierarchy_4_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupHierarchy_4_11];
      }
      get [_PopupRef_4_12]() {
        if (this[__PopupRef_4_12] == null) {
          this[__PopupRef_4_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupRef_4_12];
      }
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart" : null;
      }
      build() {
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let doc = html.document;
        this[_el_0$0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
        this.updateChildClass(this[_el_0$0], "button");
        src__runtime__dom_helpers.setAttribute(this[_el_0$0], "keyboardOnlyFocusIndicator", "");
        src__runtime__dom_helpers.setAttribute(this[_el_0$0], "popupSource", "");
        this.addShimC(this[_el_0$0]);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0$0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0$0], utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
        this[_PopupSourceDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0$0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_el_0$0], utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGetOptional(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex)), focus__focus_interface.Focusable._check(this.parentView.injectorGetOptional(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex)), null);
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0$0]);
        this[_appEl_1$1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
        let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0$0]);
        this[_appEl_2$1] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
        let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_0$0]);
        this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
        let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
        this[_compView_4] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
        this[_el_4$] = this[_compView_4].rootEl;
        parentRenderNode[$append](this[_el_4$]);
        src__runtime__dom_helpers.setAttribute(this[_el_4$], "enforceSpaceConstraints", "");
        src__runtime__dom_helpers.setAttribute(this[_el_4$], "trackLayoutChanges", "");
        this.addShimC(html.HtmlElement._check(this[_el_4$]));
        this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, this[_el_4$]);
        this[_MaterialPopupComponent_4_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$9 || (const$9 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.parentView.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_4], this[_appEl_4], new src__core__linker__element_ref.ElementRef.new(this[_el_4$])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$12 || (const$12 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.parentView.injectorGet(const$14 || (const$14 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_4], this[_appEl_4], new src__core__linker__element_ref.ElementRef.new(this[_el_4$]));
        let _el_5 = doc[$createElement]("div");
        src__runtime__dom_helpers.setAttribute(_el_5, "header", "");
        this.addShimC(html.HtmlElement._check(_el_5));
        this.project(_el_5, 0);
        let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_5);
        this[_appEl_6$] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
        let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6$], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_6_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
        let _anchor_7 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_7$] = new src__core__linker__view_container.ViewContainer.new(7, 4, this, _anchor_7);
        let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7$], dart.fn((parentView, parentIndex) => src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_DeferredContentDirective_7_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_7$], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8]);
        this[_compView_4].create(this[_MaterialPopupComponent_4_8], JSArrayOfObject().of([JSArrayOfElement().of([_el_5]), (() => {
            let _ = [this.projectedNodes[$_get](1)];
            _[$addAll]([this[_appEl_7$]]);
            return _;
          })(), const$15 || (const$15 = dart.constList([], dart.dynamic))]));
        this[_el_0$0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_0)));
        this[_el_0$0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_1$)));
        this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'keydown')));
        this[_el_0$0][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0$0][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        let subscription_0 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_4_1)));
        let subscription_1 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'focus')));
        this.init(const$16 || (const$16 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
          if (token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) {
            return this[_MaterialPopupComponent_4_8];
          }
          if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy)) {
            return this[_PopupHierarchy_4_11];
          }
          if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef)) {
            return this[_PopupRef_4_12];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_button = this[_PopupSourceDirective_0_6];
        this[_NgIf_1_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_2_9$1].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_3_9$].ngIf = _ctx.showFilterInsideButton;
        changed = false;
        if (firstCheck) {
          this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
          changed = true;
          this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
          changed = true;
        }
        let currVal_6 = _ctx.popupPositions;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
          this[_MaterialPopupComponent_4_8].preferredPositions = currVal_6;
          changed = true;
          this[_expr_6$] = currVal_6;
        }
        let currVal_7 = local_button;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7$], currVal_7))) {
          this[_MaterialPopupComponent_4_8].source = currVal_7;
          changed = true;
          this[_expr_7$] = currVal_7;
        }
        let currVal_9 = _ctx.visible;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialPopupComponent_4_8].visible = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        if (changed) {
          this[_compView_4].markAsCheckOnce();
        }
        this[_NgIf_6_9$].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
        if (firstCheck) {
          this[_DeferredContentDirective_7_9].preserveDimensions = true;
        }
        this[_appEl_1$1].detectChangesInNestedViews();
        this[_appEl_2$1].detectChangesInNestedViews();
        this[_appEl_3$].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6$].detectChangesInNestedViews();
        this[_appEl_7$].detectChangesInNestedViews();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialTreeFilterComponent_1_0_isDirty])) {
            _ctx.materialTreeFilterComponent = src__runtime__queries.firstOrNull(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__runtime__queries.flattenNodes(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, JSArrayOfListOfMaterialTreeFilterComponent().of([this[_appEl_3$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent3ToListOfMaterialTreeFilterComponent())), this[_appEl_6$].mapNestedViews(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponent().of([nestedView[_MaterialTreeFilterComponent_0_5$]]), _ViewMaterialTreeDropdownComponent4ToListOfMaterialTreeFilterComponent()))])));
            this[_query_MaterialTreeFilterComponent_1_0_isDirty] = false;
          }
        }
        let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          src__runtime__dom_helpers.updateClassBinding(this[_el_0$0], "border", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        if (firstCheck) {
          if (!(_ctx.popupClassName == null)) {
            this[_compView_4].updateChildClassNonHtml(this[_el_4$], _ctx.popupClassName);
          }
        }
        this[_compView_4].detectHostChanges(firstCheck);
        this[_compView_4].detectChanges();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_PopupSourceDirective_0_6].ngAfterViewInit();
            this[_MaterialPopupComponent_4_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_1$1].destroyNestedViews();
        this[_appEl_2$1].destroyNestedViews();
        this[_appEl_3$].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6$].destroyNestedViews();
        this[_appEl_7$].destroyNestedViews();
        this[_compView_4].destroyInternalState();
        this[_PopupSourceDirective_0_6].ngOnDestroy();
        this[_DeferredContentDirective_7_9].ngOnDestroy();
        this[_MaterialPopupComponent_4_8].ngOnDestroy();
      }
      [_handle_focus_0_0]($event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onFocus(html.Event._check($event));
      }
      [_handle_click_0_1$]($event) {
        let _ctx = this.ctx;
        _ctx.visible = !dart.test(_ctx.visible);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onMouseInteraction();
      }
      [_handle_visibleChange_4_1]($event) {
        let _ctx = this.ctx;
        _ctx.visible = core.bool._check($event);
      }
      initComponentStyles() {
        let styles = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles;
        if (styles == null) {
          src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = styles = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent, src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_PopupSourceDirective_0_6] = null;
      this[_appEl_1$1] = null;
      this[_NgIf_1_9$1] = null;
      this[_appEl_2$1] = null;
      this[_NgIf_2_9$1] = null;
      this[_appEl_3$] = null;
      this[_NgIf_3_9$] = null;
      this[_compView_4] = null;
      this[_appEl_4] = null;
      this[_MaterialPopupComponent_4_8] = null;
      this[__PopupHierarchy_4_11] = null;
      this[__PopupRef_4_12] = null;
      this[_appEl_6$] = null;
      this[_NgIf_6_9$] = null;
      this[_appEl_7$] = null;
      this[_DeferredContentDirective_7_9] = null;
      this[_expr_0$1] = null;
      this[_expr_6$] = null;
      this[_expr_7$] = null;
      this[_expr_9] = null;
      this[_el_0$0] = null;
      this[_el_4$] = null;
      ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tree-dropdown"));
    }).prototype = ViewMaterialTreeDropdownComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeDropdownComponent0);
    ViewMaterialTreeDropdownComponent0.prototype[_is_ViewMaterialTreeDropdownComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeDropdownComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_click_0_1$]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_visibleChange_4_1]: dart.fnType(dart.void, [dart.dynamic]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialTreeDropdownComponent0.__proto__),
      [_PopupHierarchy_4_11]: dart.dynamic,
      [_PopupRef_4_12]: dart.dynamic
    }));
    dart.setFieldSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeDropdownComponent0.__proto__),
      [_query_MaterialTreeFilterComponent_1_0_isDirty]: dart.fieldType(core.bool),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
      [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
      [_appEl_1$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_compView_4]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
      [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_MaterialPopupComponent_4_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
      [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
      [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
      [_appEl_6$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_6_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_7$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DeferredContentDirective_7_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_6$]: dart.fieldType(dart.dynamic),
      [_expr_7$]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(core.bool),
      [_el_0$0]: dart.fieldType(html.DivElement),
      [_el_4$]: dart.fieldType(html.Element)
    }));
    return ViewMaterialTreeDropdownComponent0;
  });
  src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$();
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, _is_ViewMaterialTreeDropdownComponent0_default);
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory*/get _MaterialTreeDropdownComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTreeDropdownComponent()).new("material-tree-dropdown", dart.gbind(dart.fn(src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, AppViewAndintToAppViewOfMaterialTreeDropdownComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(src__material_tree__material_tree_dropdown$46template, {
    get MaterialTreeDropdownComponentNgFactory() {
      return src__material_tree__material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory;
    }
  });
  const _textBinding_1$0 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_textBinding_1");
  const _is__ViewMaterialTreeDropdownComponent1_default = Symbol('_is__ViewMaterialTreeDropdownComponent1_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent1 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "button-text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$0].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.placeholder));
      }
    }
    (_ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
      this[_textBinding_1$0] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent1);
    _ViewMaterialTreeDropdownComponent1.prototype[_is__ViewMaterialTreeDropdownComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent1.__proto__),
      [_textBinding_1$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialTreeDropdownComponent1;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, _is__ViewMaterialTreeDropdownComponent1_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$(T)).new(parentView, parentIndex);
  };
  const _compView_0$2 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_compView_0");
  const _MaterialIconComponent_0_5$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeDropdownComponent2_default = Symbol('_is__ViewMaterialTreeDropdownComponent2_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent2 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0$2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0$2].rootEl;
        this.updateChildClassNonHtml(_el_0, "icon");
        src__runtime__dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0$2].create0(this[_MaterialIconComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_MaterialIconComponent_0_5$].icon = "arrow_drop_down";
          changed = true;
        }
        if (changed) {
          this[_compView_0$2].markAsCheckOnce();
        }
        this[_compView_0$2].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$2].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$2] = null;
      this[_MaterialIconComponent_0_5$] = null;
      _ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent2);
    _ViewMaterialTreeDropdownComponent2.prototype[_is__ViewMaterialTreeDropdownComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent2.__proto__),
      [_compView_0$2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
      [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
    }));
    return _ViewMaterialTreeDropdownComponent2;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, _is__ViewMaterialTreeDropdownComponent2_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$(T)).new(parentView, parentIndex);
  };
  const _expr_1$2 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_1");
  const _handle_filter_0_0 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_handle_filter_0_0");
  const _is__ViewMaterialTreeDropdownComponent3_default = Symbol('_is__ViewMaterialTreeDropdownComponent3_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent3 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0$2].rootEl;
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex))), VoidToMaterialTreeFilterComponent())) : new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex)));
        this[_compView_0$2].create0(this[_MaterialTreeFilterComponent_0_5$]);
        let subscription_0 = this[_MaterialTreeFilterComponent_0_5$].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_filter_0_0)));
        this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.placeholder;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.filterableOptions;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
          this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_1;
          this[_expr_1$2] = currVal_1;
        }
        this[_compView_0$2].detectChanges();
      }
      dirtyParentQueriesInternal() {
        src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0$2].destroyInternalState();
      }
      [_handle_filter_0_0]($event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
      }
    }
    (_ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
      this[_compView_0$2] = null;
      this[_MaterialTreeFilterComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$2] = null;
      _ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent3);
    _ViewMaterialTreeDropdownComponent3.prototype[_is__ViewMaterialTreeDropdownComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      [_handle_filter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent3.__proto__),
      [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
      [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
      [_expr_0$1]: dart.fieldType(core.String),
      [_expr_1$2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent3;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, _is__ViewMaterialTreeDropdownComponent3_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$(T)).new(parentView, parentIndex);
  };
  const _expr_2$1 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_2");
  const _is__ViewMaterialTreeDropdownComponent4_default = Symbol('_is__ViewMaterialTreeDropdownComponent4_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent4 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0$2] = new src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0$2].rootEl;
        this.updateChildClassNonHtml(_el_0, "search-box");
        src__runtime__dom_helpers.setAttribute(_el_0, "leadingGlyph", "search");
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, dart.wrapType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent), dart.fn(() => new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex))), VoidToMaterialTreeFilterComponent())) : new src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex)));
        this[_compView_0$2].create0(this[_MaterialTreeFilterComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (firstCheck) {
          this[_MaterialTreeFilterComponent_0_5$].leadingGlyph = "search";
        }
        let currVal_1 = _ctx.placeholder;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
          this[_MaterialTreeFilterComponent_0_5$].placeholder = currVal_1;
          this[_expr_1$2] = currVal_1;
        }
        let currVal_2 = _ctx.filterableOptions;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_MaterialTreeFilterComponent_0_5$].filterable = currVal_2;
          this[_expr_2$1] = currVal_2;
        }
        this[_compView_0$2].detectChanges();
      }
      dirtyParentQueriesInternal() {
        src__runtime__optimizations.unsafeCast(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0$2].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
      this[_compView_0$2] = null;
      this[_MaterialTreeFilterComponent_0_5$] = null;
      this[_expr_1$2] = null;
      this[_expr_2$1] = null;
      _ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent4);
    _ViewMaterialTreeDropdownComponent4.prototype[_is__ViewMaterialTreeDropdownComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent4.__proto__),
      [_compView_0$2]: dart.fieldType(src__material_tree__material_tree_filter$46template.ViewMaterialTreeFilterComponent0),
      [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
      [_expr_1$2]: dart.fieldType(core.String),
      [_expr_2$1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent4;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, _is__ViewMaterialTreeDropdownComponent4_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$(T)).new(parentView, parentIndex);
  };
  const _MaterialTreeComponent_0_5$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_MaterialTreeComponent_0_5");
  const _expr_3$2 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_3");
  const _expr_4$0 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_4");
  const _expr_5$ = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_expr_5");
  const _is__ViewMaterialTreeDropdownComponent5_default = Symbol('_is__ViewMaterialTreeDropdownComponent5_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$ = dart.generic(T => {
    let ViewMaterialTreeComponent0OfT = () => (ViewMaterialTreeComponent0OfT = dart.constFn(src__material_tree__material_tree_impl$46template.ViewMaterialTreeComponent0$(T)))();
    let MaterialTreeComponentOfT = () => (MaterialTreeComponentOfT = dart.constFn(src__material_tree__material_tree_impl.MaterialTreeComponent$(T)))();
    let VoidToMaterialTreeComponentOfT = () => (VoidToMaterialTreeComponentOfT = dart.constFn(dart.fnType(MaterialTreeComponentOfT(), [])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialTreeDropdownComponent5 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0$2] = new (ViewMaterialTreeComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0$2].rootEl;
        this.addShimC(_el_0);
        this[_MaterialTreeComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeComponentOfT(), dart.wrapType(src__material_tree__material_tree_impl.MaterialTreeComponent), dart.fn(() => new (MaterialTreeComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex)), null), VoidToMaterialTreeComponentOfT())) : new (MaterialTreeComponentOfT()).new(src__material_tree__material_tree_root.MaterialTreeRoot._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot), this.parentView.viewData.parentIndex)), null);
        this[_compView_0$2].create0(this[_MaterialTreeComponent_0_5$]);
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot) && 0 === nodeIndex) {
          return this[_MaterialTreeComponent_0_5$];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.expandAll;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_MaterialTreeComponent_0_5$].expandAll = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.allowParentSingleSelection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
          this[_MaterialTreeComponent_0_5$].allowParentSingleSelection = currVal_1;
          this[_expr_1$2] = currVal_1;
        }
        let currVal_2 = _ctx.componentRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_MaterialTreeComponent_0_5$].componentRenderer = currVal_2;
          this[_expr_2$1] = currVal_2;
        }
        let currVal_3 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$2], currVal_3))) {
          this[_MaterialTreeComponent_0_5$].itemRenderer = currVal_3;
          this[_expr_3$2] = currVal_3;
        }
        let currVal_4 = _ctx.options;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
          this[_MaterialTreeComponent_0_5$].options = currVal_4;
          this[_expr_4$0] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
          this[_MaterialTreeComponent_0_5$].selection = currVal_5;
          this[_expr_5$] = currVal_5;
        }
        this[_compView_0$2].detectHostChanges(firstCheck);
        this[_compView_0$2].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$2].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$2] = null;
      this[_MaterialTreeComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$2] = null;
      this[_expr_2$1] = null;
      this[_expr_3$2] = null;
      this[_expr_4$0] = null;
      this[_expr_5$] = null;
      _ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent5);
    _ViewMaterialTreeDropdownComponent5.prototype[_is__ViewMaterialTreeDropdownComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent5.__proto__),
      [_compView_0$2]: dart.fieldType(ViewMaterialTreeComponent0OfT()),
      [_MaterialTreeComponent_0_5$]: dart.fieldType(MaterialTreeComponentOfT()),
      [_expr_0$1]: dart.fieldType(core.bool),
      [_expr_1$2]: dart.fieldType(core.bool),
      [_expr_2$1]: dart.fieldType(dart.dynamic),
      [_expr_3$2]: dart.fieldType(dart.dynamic),
      [_expr_4$0]: dart.fieldType(dart.dynamic),
      [_expr_5$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent5;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, _is__ViewMaterialTreeDropdownComponent5_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTreeDropdownComponent_0_5 = dart.privateName(src__material_tree__material_tree_dropdown$46template, "_MaterialTreeDropdownComponent_0_5");
  const _is__ViewMaterialTreeDropdownComponentHost0_default = Symbol('_is__ViewMaterialTreeDropdownComponentHost0_default');
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$ = dart.generic(T => {
    let ViewMaterialTreeDropdownComponent0OfT = () => (ViewMaterialTreeDropdownComponent0OfT = dart.constFn(src__material_tree__material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$(T)))();
    let MaterialTreeDropdownComponentOfT = () => (MaterialTreeDropdownComponentOfT = dart.constFn(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)))();
    let VoidToMaterialTreeDropdownComponentOfT = () => (VoidToMaterialTreeDropdownComponentOfT = dart.constFn(dart.fnType(MaterialTreeDropdownComponentOfT(), [])))();
    let ComponentRefOfMaterialTreeDropdownComponentOfT = () => (ComponentRefOfMaterialTreeDropdownComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialTreeDropdownComponentOfT())))();
    class _ViewMaterialTreeDropdownComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)) {
      build() {
        this[_compView_0$2] = new (ViewMaterialTreeDropdownComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0$2].rootEl;
        this[_MaterialTreeDropdownComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialTreeDropdownComponentOfT(), dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), dart.fn(() => new (MaterialTreeDropdownComponentOfT()).new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, this.rootEl), VoidToMaterialTreeDropdownComponentOfT())) : new (MaterialTreeDropdownComponentOfT()).new(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, this.rootEl);
        this[_compView_0$2].create(this[_MaterialTreeDropdownComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeDropdownComponentOfT()).new(0, this, this.rootEl, this[_MaterialTreeDropdownComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(src__material_tree__material_tree_root.MaterialTreeRoot)) && 0 === nodeIndex) {
          return this[_MaterialTreeDropdownComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialTreeDropdownComponent_0_5].ngOnInit();
        }
        this[_compView_0$2].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$2].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$2] = null;
      this[_MaterialTreeDropdownComponent_0_5] = null;
      _ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialTreeDropdownComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponentHost0);
    _ViewMaterialTreeDropdownComponentHost0.prototype[_is__ViewMaterialTreeDropdownComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponentHost0.__proto__),
      [_compView_0$2]: dart.fieldType(ViewMaterialTreeDropdownComponent0OfT()),
      [_MaterialTreeDropdownComponent_0_5]: dart.fieldType(MaterialTreeDropdownComponentOfT())
    }));
    return _ViewMaterialTreeDropdownComponentHost0;
  });
  src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$();
  dart.addTypeTests(src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, _is__ViewMaterialTreeDropdownComponentHost0_default);
  src__material_tree__material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function(T, parentView, parentIndex) {
    return new (src__material_tree__material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tree__material_tree_dropdown$46template, {
    /*src__material_tree__material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tree__material_tree_dropdown$46template.initReflector = function() {
    if (dart.test(src__material_tree__material_tree_dropdown$46template._visited)) {
      return;
    }
    src__material_tree__material_tree_dropdown$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent), src__material_tree__material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    src__material_tree__material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    src__material_tree__material_tree_filter$46template.initReflector();
    src__material_tree__material_tree_root$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim.ddc", {
    "package:angular_components/src/material_tree/material_tree_expand_state.template.dart": src__material_tree__material_tree_expand_state$46template,
    "package:angular_components/src/material_tree/material_tree_root.template.dart": src__material_tree__material_tree_root$46template,
    "package:angular_components/src/material_tree/material_tree_node.template.dart": src__material_tree__material_tree_node$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart": src__material_tree__group__material_tree_group$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": src__material_tree__group__material_tree_group$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart": src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": src__material_tree__group__material_tree_group_flat$46template,
    "package:angular_components/src/material_tree/material_tree_rendering_options.template.dart": src__material_tree__material_tree_rendering_options$46template,
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": src__material_tree__material_tree_impl$46template,
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": src__material_tree__material_tree_filter$46template,
    "package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart": src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": src__material_tree__material_tree_dropdown$46template
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_expand_state.template.dart","../material_tree_root.template.dart","../material_tree_node.template.dart","material_tree_group.scss.css.shim.dart","material_tree_group.template.dart","material_tree_group_flat_list.scss.css.shim.dart","material_tree_group_flat_radio.scss.css.shim.dart","material_tree_group_flat_check.scss.css.shim.dart","material_tree_group_flat.template.dart","../material_tree_rendering_options.template.dart","../material_tree_impl.template.dart","../material_tree_filter.template.dart","../material_tree_dropdown.scss.css.shim.dart","../material_tree_dropdown.template.dart"],"names":[],"mappings":"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","file":"material_tree_group.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_expand_state$46template: src__material_tree__material_tree_expand_state$46template,
    src__material_tree__material_tree_root$46template: src__material_tree__material_tree_root$46template,
    src__material_tree__material_tree_node$46template: src__material_tree__material_tree_node$46template,
    src__material_tree__group__material_tree_group$46scss$46css$46shim: src__material_tree__group__material_tree_group$46scss$46css$46shim,
    src__material_tree__group__material_tree_group$46template: src__material_tree__group__material_tree_group$46template,
    src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim: src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat$46template: src__material_tree__group__material_tree_group_flat$46template,
    src__material_tree__material_tree_rendering_options$46template: src__material_tree__material_tree_rendering_options$46template,
    src__material_tree__material_tree_impl$46template: src__material_tree__material_tree_impl$46template,
    src__material_tree__material_tree_filter$46template: src__material_tree__material_tree_filter$46template,
    src__material_tree__material_tree_dropdown$46scss$46css$46shim: src__material_tree__material_tree_dropdown$46scss$46css$46shim,
    src__material_tree__material_tree_dropdown$46template: src__material_tree__material_tree_dropdown$46template
  };
});

//# sourceMappingURL=material_tree_group.scss.css.shim.ddc.js.map
