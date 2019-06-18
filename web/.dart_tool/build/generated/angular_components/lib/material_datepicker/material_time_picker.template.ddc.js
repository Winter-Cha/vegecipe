define(['dart_sdk', 'packages/angular_components/material_datepicker/material_time_picker.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/quiver/time', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_time_picker$46scss$46css, modules, change_detection, material_dropdown_select, material_dropdown_select$, id_generator, popup_hierarchy, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, base_material_input, reference, focus_interface, has_disabled, active_item, material_dropdown_base, has_renderer, deferred_content_aware, selection_container, activation_handler, material_time_picker, time, angular, has_disabled$, module, keyboard_handler_mixin, select, selection_model, string_selection_options, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_time_picker$46scss$46css$46shim = material_time_picker$46scss$46css.material_datepicker__material_time_picker$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_dropdown_select = material_dropdown_select.material_select__material_dropdown_select;
  const material_select__material_dropdown_select$46template = material_dropdown_select$.material_select__material_dropdown_select$46template;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const material_datepicker__material_time_picker = material_time_picker.material_datepicker__material_time_picker;
  const time$ = time.time;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__string_selection_options$46template = string_selection_options.model__selection__string_selection_options$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_datepicker__material_time_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let ViewMaterialDropdownSelectComponent0OfDateTime = () => (ViewMaterialDropdownSelectComponent0OfDateTime = dart.constFn(material_select__material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(core.DateTime)))();
  let MaterialDropdownSelectComponentOfDateTime = () => (MaterialDropdownSelectComponentOfDateTime = dart.constFn(material_select__material_dropdown_select.MaterialDropdownSelectComponent$(core.DateTime)))();
  let VoidToMaterialDropdownSelectComponentOfDateTime = () => (VoidToMaterialDropdownSelectComponentOfDateTime = dart.constFn(dart.fnType(MaterialDropdownSelectComponentOfDateTime(), [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfMaterialTimePickerComponent = () => (AppViewOfMaterialTimePickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  let AppViewAndintToAppViewOfMaterialTimePickerComponent = () => (AppViewAndintToAppViewOfMaterialTimePickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialTimePickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTimePickerComponent = () => (ComponentFactoryOfMaterialTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  let VoidToMaterialTimePickerComponent = () => (VoidToMaterialTimePickerComponent = dart.constFn(dart.fnType(material_datepicker__material_time_picker.MaterialTimePickerComponent, [])))();
  let ComponentRefOfMaterialTimePickerComponent = () => (ComponentRefOfMaterialTimePickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_time_picker.MaterialTimePickerComponent)))();
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponent*/get styles$MaterialTimePickerComponent() {
      return [material_datepicker__material_time_picker$46scss$46css$46shim.styles];
    }
  });
  const _compView_0 = dart.privateName(material_datepicker__material_time_picker$46template, "_compView_0");
  const _MaterialDropdownSelectComponent_0_5 = dart.privateName(material_datepicker__material_time_picker$46template, "_MaterialDropdownSelectComponent_0_5");
  const __ActiveItemModel_0_13 = dart.privateName(material_datepicker__material_time_picker$46template, "__ActiveItemModel_0_13");
  const _compView_3 = dart.privateName(material_datepicker__material_time_picker$46template, "_compView_3");
  const _DeferredValidator_3_5 = dart.privateName(material_datepicker__material_time_picker$46template, "_DeferredValidator_3_5");
  const _NgValidators_3_6 = dart.privateName(material_datepicker__material_time_picker$46template, "_NgValidators_3_6");
  const _NgModel_3_7 = dart.privateName(material_datepicker__material_time_picker$46template, "_NgModel_3_7");
  const _MaterialInputComponent_3_9 = dart.privateName(material_datepicker__material_time_picker$46template, "_MaterialInputComponent_3_9");
  const _MaterialInputDefaultValueAccessor_3_11 = dart.privateName(material_datepicker__material_time_picker$46template, "_MaterialInputDefaultValueAccessor_3_11");
  const _expr_0 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_2");
  const _expr_5 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_6");
  const _expr_8 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_8");
  const _expr_11 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_12");
  const _expr_14 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_14");
  const _expr_15 = dart.privateName(material_datepicker__material_time_picker$46template, "_expr_15");
  const _ActiveItemModel_0_13 = dart.privateName(material_datepicker__material_time_picker$46template, "_ActiveItemModel_0_13");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  const _handle_visibleChange_0_0 = dart.privateName(material_datepicker__material_time_picker$46template, "_handle_visibleChange_0_0");
  const _handle_ngModelChange_3_2 = dart.privateName(material_datepicker__material_time_picker$46template, "_handle_ngModelChange_3_2");
  let const$8;
  let const$9;
  material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0 = class ViewMaterialTimePickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_time_picker.MaterialTimePickerComponent) {
    get [_ActiveItemModel_0_13]() {
      if (this[__ActiveItemModel_0_13] == null) {
        this[__ActiveItemModel_0_13] = material_select__material_dropdown_select.fromDropdown(this[_MaterialDropdownSelectComponent_0_5]);
      }
      return this[__ActiveItemModel_0_13];
    }
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_time_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfDateTime()).new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDropdownSelectComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialDropdownSelectComponentOfDateTime(), dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent), dart.fn(() => new (MaterialDropdownSelectComponentOfDateTime()).new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex)), null, null, this[_compView_0], _el_0), VoidToMaterialDropdownSelectComponentOfDateTime())) : new (MaterialDropdownSelectComponentOfDateTime()).new(utils__id_generator__id_generator.IdGenerator._check(this.parentView.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex)), null, null, this[_compView_0], _el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      src__runtime__dom_helpers.setAttribute(_el_1, "header", "");
      this.addShimC(html.HtmlElement._check(_el_1));
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "time-input-box");
      this.addShimC(_el_2);
      this[_compView_3] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      _el_2[$append](_el_3);
      src__runtime__dom_helpers.setAttribute(_el_3, "type", "text");
      this.addShimC(_el_3);
      this[_DeferredValidator_3_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_3_6] = [this[_DeferredValidator_3_5]];
      this[_NgModel_3_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_3_6], null);
      this[_MaterialInputComponent_3_9] = new material_input__material_input.MaterialInputComponent.new("text", null, null, this[_NgModel_3_7], this[_compView_3], this[_DeferredValidator_3_5]);
      this[_MaterialInputDefaultValueAccessor_3_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_9], this[_NgModel_3_7]);
      this[_compView_3].create(this[_MaterialInputComponent_3_9], JSArrayOfObject().of([const$1 || (const$1 = dart.constList([], dart.dynamic)), const$2 || (const$2 = dart.constList([], dart.dynamic))]));
      this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], JSArrayOfObject().of([const$3 || (const$3 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([_el_1]), const$4 || (const$4 = dart.constList([], dart.dynamic)), const$5 || (const$5 = dart.constList([], dart.dynamic)), const$6 || (const$6 = dart.constList([], dart.dynamic)), const$7 || (const$7 = dart.constList([], dart.dynamic))]));
      let subscription_0 = this[_MaterialDropdownSelectComponent_0_5].visibleStream.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_0_0)));
      _el_1[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyPress')));
      _el_1[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onInputBoxKeyDown')));
      let subscription_1 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_3_2)));
      let subscription_2 = this[_MaterialInputComponent_3_9].onKeypress.listen(this.eventHandler1(core.String, core.String, dart.bind(_ctx, 'onTextChange')));
      let subscription_3 = this[_MaterialInputComponent_3_9].onBlur.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'onBlur')));
      this.init(const$8 || (const$8 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (3 === nodeIndex) {
          if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
            return this[_DeferredValidator_3_5];
          }
          if (token === (const$9 || (const$9 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
            return this[_NgValidators_3_6];
          }
          if (token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) {
            return this[_NgModel_3_7];
          }
          if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
            return this[_MaterialInputComponent_3_9];
          }
        }
        if (token === dart.wrapType(model__a11y__active_item.ActiveItemModel) && 0 === nodeIndex) {
          return this[_ActiveItemModel_0_13];
        }
        if (token === dart.wrapType(material_select__material_dropdown_select.MaterialDropdownSelectComponent) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider) || token === dart.wrapType(material_select__activation_handler.ActivationHandler)) {
          return this[_MaterialDropdownSelectComponent_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialDropdownSelectComponent_0_5].popupMatchInputWidth = false;
        changed = true;
        this[_MaterialDropdownSelectComponent_0_5].slide = "y";
        changed = true;
        if (!(dart.bind(_ctx, 'renderTime') === null)) {
          this[_MaterialDropdownSelectComponent_0_5].itemRenderer = dart.bind(_ctx, 'renderTime');
          changed = true;
        }
      }
      let currVal_0 = _ctx.dropdownText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialDropdownSelectComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialDropdownSelectComponent_0_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.selectedTime;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialDropdownSelectComponent_0_5].selectionInput = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_5 = _ctx.popupVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialDropdownSelectComponent_0_5].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.error;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialDropdownSelectComponent_0_5].error = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.timeOptions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialDropdownSelectComponent_0_5].optionsInput = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_MaterialDropdownSelectComponent_0_5].ngAfterChanges();
      }
      changed = false;
      this[_NgModel_3_7].model = _ctx.timeInputText;
      this[_NgModel_3_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_3_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        if (!(material_datepicker__material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg == null)) {
          this[_MaterialInputComponent_3_9].label = material_datepicker__material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
        if (!(material_datepicker__material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg == null)) {
          this[_MaterialInputComponent_3_9].requiredErrorMsg = material_datepicker__material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
      }
      let currVal_11 = _ctx.displayErrorPanel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialInputComponent_3_9].displayBottomPanel = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.inputError;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialInputComponent_3_9].error = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_MaterialInputComponent_3_9].disabled = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.required;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_MaterialInputComponent_3_9].required = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_3_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_3_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_11].ngOnDestroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = core.bool._check($event);
    }
    [_handle_ngModelChange_3_2]($event) {
      let _ctx = this.ctx;
      _ctx.timeInputText = core.String._check($event);
    }
    initComponentStyles() {
      let styles = material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = styles = material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponent, material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    this[__ActiveItemModel_0_13] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_NgValidators_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_MaterialInputComponent_3_9] = null;
    this[_MaterialInputDefaultValueAccessor_3_11] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-time-picker"));
  }).prototype = material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.setMethodSignature(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_time_picker.MaterialTimePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_3_2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_ActiveItemModel_0_13]: model__a11y__active_item.ActiveItemModel
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(ViewMaterialDropdownSelectComponent0OfDateTime()),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(MaterialDropdownSelectComponentOfDateTime()),
    [__ActiveItemModel_0_13]: dart.fieldType(model__a11y__active_item.ActiveItemModel),
    [_compView_3]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_3_6]: dart.fieldType(core.List),
    [_NgModel_3_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_3_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_3_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.String),
    [_expr_14]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0, {
    /*material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template._MaterialTimePickerComponentNgFactory*/get _MaterialTimePickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTimePickerComponent()).new("material-time-picker", dart.fn(material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, AppViewAndintToAppViewOfMaterialTimePickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_time_picker$46template, {
    get MaterialTimePickerComponentNgFactory() {
      return material_datepicker__material_time_picker$46template._MaterialTimePickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template.styles$MaterialTimePickerComponentHost*/get styles$MaterialTimePickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTimePickerComponent_0_5 = dart.privateName(material_datepicker__material_time_picker$46template, "_MaterialTimePickerComponent_0_5");
  let const$10;
  let const$11;
  material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0 = class _ViewMaterialTimePickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_time_picker.MaterialTimePickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTimePickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_time_picker.MaterialTimePickerComponent, dart.wrapType(material_datepicker__material_time_picker.MaterialTimePickerComponent), dart.fn(() => new material_datepicker__material_time_picker.MaterialTimePickerComponent.new(time$.Clock._check(this.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex))), VoidToMaterialTimePickerComponent())) : new material_datepicker__material_time_picker.MaterialTimePickerComponent.new(time$.Clock._check(this.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTimePickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTimePickerComponent()).new(0, this, this.rootEl, this[_MaterialTimePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialTimePickerComponent_0_5];
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
        this[_MaterialTimePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialTimePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTimePickerComponent_0_5] = null;
    material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_time_picker.MaterialTimePickerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_time_picker$46template.ViewMaterialTimePickerComponent0),
    [_MaterialTimePickerComponent_0_5]: dart.fieldType(material_datepicker__material_time_picker.MaterialTimePickerComponent)
  }));
  material_datepicker__material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_time_picker$46template, {
    /*material_datepicker__material_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_time_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_time_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_time_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_time_picker.MaterialTimePickerComponent), material_datepicker__material_time_picker$46template.MaterialTimePickerComponentNgFactory);
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__string_selection_options$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_time_picker.template.dart": material_datepicker__material_time_picker$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker$46template: material_datepicker__material_time_picker$46template
  };
});

//# sourceMappingURL=material_time_picker.template.ddc.js.map
