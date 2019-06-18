define(['dart_sdk', 'packages/angular_components/material_datepicker/date_range_input.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/material_input', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/material_datepicker/date_input', 'packages/quiver/time', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/model/date/date', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, date_range_input$46scss$46css, modules, change_detection, material_input, material_input$, interpolate, deferred_validator, date_input, time, material_input_default_value_accessor, date, base_material_input, reference, focus_interface, has_disabled, date_range_input, angular, calendar, date_input$, date$, observable) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__date_range_input$46scss$46css$46shim = date_range_input$46scss$46css.material_datepicker__date_range_input$46scss$46css$46shim;
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
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__material_input = material_input$.material_input__material_input;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const material_datepicker__date_input = date_input.material_datepicker__date_input;
  const time$ = time.time;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const model__date__date = date.model__date__date;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_datepicker__date_range_input = date_range_input.material_datepicker__date_range_input;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__date_input$46template = date_input$.material_datepicker__date_input$46template;
  const model__date__date$46template = date$.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const material_datepicker__date_range_input$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let VoidToDateInputDirective = () => (VoidToDateInputDirective = dart.constFn(dart.fnType(material_datepicker__date_input.DateInputDirective, [])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfDateRangeInputComponent = () => (AppViewOfDateRangeInputComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let AppViewAndintToAppViewOfDateRangeInputComponent = () => (AppViewAndintToAppViewOfDateRangeInputComponent = dart.constFn(dart.fnType(AppViewOfDateRangeInputComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDateRangeInputComponent = () => (ComponentFactoryOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  let ComponentRefOfDateRangeInputComponent = () => (ComponentRefOfDateRangeInputComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent)))();
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponent*/get styles$DateRangeInputComponent() {
      return [material_datepicker__date_range_input$46scss$46css$46shim.styles];
    }
  });
  const _compView_0 = dart.privateName(material_datepicker__date_range_input$46template, "_compView_0");
  const _DeferredValidator_0_5 = dart.privateName(material_datepicker__date_range_input$46template, "_DeferredValidator_0_5");
  const _MaterialInputComponent_0_6 = dart.privateName(material_datepicker__date_range_input$46template, "_MaterialInputComponent_0_6");
  const _DateInputDirective_0_7 = dart.privateName(material_datepicker__date_range_input$46template, "_DateInputDirective_0_7");
  const _MaterialInputDefaultValueAccessor_0_9 = dart.privateName(material_datepicker__date_range_input$46template, "_MaterialInputDefaultValueAccessor_0_9");
  const __NgValidators_0_10 = dart.privateName(material_datepicker__date_range_input$46template, "__NgValidators_0_10");
  const _compView_3 = dart.privateName(material_datepicker__date_range_input$46template, "_compView_3");
  const _DeferredValidator_3_5 = dart.privateName(material_datepicker__date_range_input$46template, "_DeferredValidator_3_5");
  const _MaterialInputComponent_3_6 = dart.privateName(material_datepicker__date_range_input$46template, "_MaterialInputComponent_3_6");
  const _DateInputDirective_3_7 = dart.privateName(material_datepicker__date_range_input$46template, "_DateInputDirective_3_7");
  const _MaterialInputDefaultValueAccessor_3_9 = dart.privateName(material_datepicker__date_range_input$46template, "_MaterialInputDefaultValueAccessor_3_9");
  const __NgValidators_3_10 = dart.privateName(material_datepicker__date_range_input$46template, "__NgValidators_3_10");
  const _expr_0 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_0");
  const _expr_2 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_8");
  const _expr_10 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_12");
  const _expr_13 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_13");
  const _expr_14 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_14");
  const _expr_15 = dart.privateName(material_datepicker__date_range_input$46template, "_expr_15");
  const _el_0 = dart.privateName(material_datepicker__date_range_input$46template, "_el_0");
  const _el_3 = dart.privateName(material_datepicker__date_range_input$46template, "_el_3");
  const _NgValidators_0_10 = dart.privateName(material_datepicker__date_range_input$46template, "_NgValidators_0_10");
  const _NgValidators_3_10 = dart.privateName(material_datepicker__date_range_input$46template, "_NgValidators_3_10");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  const _handle_dateChange_0_1 = dart.privateName(material_datepicker__date_range_input$46template, "_handle_dateChange_0_1");
  const _handle_dateChange_3_1 = dart.privateName(material_datepicker__date_range_input$46template, "_handle_dateChange_3_1");
  let const$7;
  let const$8;
  let const$9;
  material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0 = class ViewDateRangeInputComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent) {
    get [_NgValidators_0_10]() {
      if (this[__NgValidators_0_10] == null) {
        this[__NgValidators_0_10] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_10];
    }
    get [_NgValidators_3_10]() {
      if (this[__NgValidators_3_10] == null) {
        this[__NgValidators_3_10] = [this[_DeferredValidator_3_5]];
      }
      return this[__NgValidators_3_10];
    }
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_input.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.updateChildClassNonHtml(this[_el_0], src__runtime__interpolate.interpolateString2("", "start date-input", " ", material_input__material_input.MaterialInputComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(this[_el_0], "dateParsing", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_0_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, null, this[_compView_0], this[_DeferredValidator_0_5]);
      this[_DateInputDirective_0_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__date_input.DateInputDirective, dart.wrapType(material_datepicker__date_input.DateInputDirective), dart.fn(() => new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_0_6]), VoidToDateInputDirective())) : new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_0_6]);
      this[_MaterialInputDefaultValueAccessor_0_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_6], null);
      this[_compView_0].create(this[_MaterialInputComponent_0_6], JSArrayOfObject().of([const$1 || (const$1 = dart.constList([], dart.dynamic)), const$2 || (const$2 = dart.constList([], dart.dynamic))]));
      let doc = html.document;
      let _el_1 = src__runtime__dom_helpers.appendSpan(doc, parentRenderNode);
      this.updateChildClass(_el_1, "separator");
      this.addShimE(_el_1);
      let _text_2 = src__runtime__dom_helpers.appendText(_el_1, "—");
      this[_compView_3] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this.updateChildClassNonHtml(this[_el_3], src__runtime__interpolate.interpolateString2("", "end date-input", " ", material_input__material_input.MaterialInputComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(this[_el_3], "dateParsing", "");
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_DeferredValidator_3_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_3_6] = new material_input__material_input.MaterialInputComponent.new(null, null, null, null, this[_compView_3], this[_DeferredValidator_3_5]);
      this[_DateInputDirective_3_7] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__date_input.DateInputDirective, dart.wrapType(material_datepicker__date_input.DateInputDirective), dart.fn(() => new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGetOptional(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_3_6]), VoidToDateInputDirective())) : new material_datepicker__date_input.DateInputDirective.new(time$.Clock._check(this.parentView.injectorGetOptional(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.parentView.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), this[_MaterialInputComponent_3_6]);
      this[_MaterialInputDefaultValueAccessor_3_9] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_6], null);
      this[_compView_3].create(this[_MaterialInputComponent_3_6], JSArrayOfObject().of([const$5 || (const$5 = dart.constList([], dart.dynamic)), const$6 || (const$6 = dart.constList([], dart.dynamic))]));
      let subscription_0 = this[_MaterialInputComponent_0_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'onStartFocused')));
      let subscription_1 = this[_DateInputDirective_0_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_0_1)));
      let subscription_2 = this[_MaterialInputComponent_3_6].onFocus.listen(this.eventHandler0(html.FocusEvent, dart.bind(_ctx, 'onEndFocused')));
      let subscription_3 = this[_DateInputDirective_3_7].dateChange.listen(this.eventHandler1(model__date__date.Date, model__date__date.Date, dart.bind(this, _handle_dateChange_3_1)));
      this.init(const$7 || (const$7 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_0_5];
        }
        if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialInputComponent_0_6];
        }
        if (token === (const$8 || (const$8 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
          return this[_NgValidators_0_10];
        }
      }
      if (3 === nodeIndex) {
        if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_3_5];
        }
        if (token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialInputComponent_3_6];
        }
        if (token === (const$9 || (const$9 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
          return this[_NgValidators_3_10];
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
        if (!(_ctx.startDateMsg == null)) {
          this[_MaterialInputComponent_0_6].label = _ctx.startDateMsg;
          changed = true;
        }
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialInputComponent_0_6].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.isDateInputRequired;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_0_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.startDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateInputDirective_0_7].dateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.startMaxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateInputDirective_0_7].maxDate = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateInputDirective_0_7].minDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.start;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateInputDirective_0_7].date = currVal_7;
        this[_expr_7] = currVal_7;
      }
      changed = false;
      if (firstCheck) {
        if (!(_ctx.endDateMsg == null)) {
          this[_MaterialInputComponent_3_6].label = _ctx.endDateMsg;
          changed = true;
        }
      }
      let currVal_10 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialInputComponent_3_6].disabled = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.isDateInputRequired;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialInputComponent_3_6].required = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DateInputDirective_3_7].rangeEnd = true;
      }
      let currVal_12 = _ctx.endDateFormat;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DateInputDirective_3_7].dateFormat = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_DateInputDirective_3_7].maxDate = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.endMinDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_DateInputDirective_3_7].minDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.end;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_DateInputDirective_3_7].date = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_0 = _ctx.isStartActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_8 = _ctx.isEndActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_3], "active", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_6].ngAfterViewInit();
          this[_MaterialInputComponent_3_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_0_6].ngOnDestroy();
      this[_DateInputDirective_0_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_9].ngOnDestroy();
      this[_MaterialInputComponent_3_6].ngOnDestroy();
      this[_DateInputDirective_3_7].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_9].ngOnDestroy();
    }
    [_handle_dateChange_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.start = model__date__date.Date._check($event);
    }
    [_handle_dateChange_3_1]($event) {
      let _ctx = this.ctx;
      _ctx.end = model__date__date.Date._check($event);
    }
    initComponentStyles() {
      let styles = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._componentStyles = styles = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__date_range_input$46template.styles$DateRangeInputComponent, material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialInputComponent_0_6] = null;
    this[_DateInputDirective_0_7] = null;
    this[_MaterialInputDefaultValueAccessor_0_9] = null;
    this[__NgValidators_0_10] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_MaterialInputComponent_3_6] = null;
    this[_DateInputDirective_3_7] = null;
    this[_MaterialInputDefaultValueAccessor_3_9] = null;
    this[__NgValidators_3_10] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("date-range-input"));
  }).prototype = material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_dateChange_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dateChange_3_1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_NgValidators_0_10]: core.List,
    [_NgValidators_3_10]: core.List
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_0_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_0_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_MaterialInputDefaultValueAccessor_0_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_0_10]: dart.fieldType(core.List),
    [_compView_3]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_3_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_MaterialInputComponent_3_6]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_DateInputDirective_3_7]: dart.fieldType(material_datepicker__date_input.DateInputDirective),
    [_MaterialInputDefaultValueAccessor_3_9]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [__NgValidators_3_10]: dart.fieldType(core.List),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0, {
    /*material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template._DateRangeInputComponentNgFactory*/get _DateRangeInputComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateRangeInputComponent()).new("date-range-input", dart.fn(material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0, AppViewAndintToAppViewOfDateRangeInputComponent())));
    }
  });
  dart.copyProperties(material_datepicker__date_range_input$46template, {
    get DateRangeInputComponentNgFactory() {
      return material_datepicker__date_range_input$46template._DateRangeInputComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template.styles$DateRangeInputComponentHost*/get styles$DateRangeInputComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DateRangeInputComponent_0_5 = dart.privateName(material_datepicker__date_range_input$46template, "_DateRangeInputComponent_0_5");
  material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0 = class _ViewDateRangeInputComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__date_range_input.DateRangeInputComponent) {
    build() {
      this[_compView_0] = new material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeInputComponent_0_5] = new material_datepicker__date_range_input.DateRangeInputComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_DateRangeInputComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDateRangeInputComponent()).new(0, this, this.rootEl, this[_DateRangeInputComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_DateRangeInputComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeInputComponent_0_5] = null;
    material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0);
  dart.setMethodSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__date_range_input.DateRangeInputComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__date_range_input$46template.ViewDateRangeInputComponent0),
    [_DateRangeInputComponent_0_5]: dart.fieldType(material_datepicker__date_range_input.DateRangeInputComponent)
  }));
  material_datepicker__date_range_input$46template.viewFactory_DateRangeInputComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__date_range_input$46template._ViewDateRangeInputComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__date_range_input$46template, {
    /*material_datepicker__date_range_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__date_range_input$46template.initReflector = function() {
    if (dart.test(material_datepicker__date_range_input$46template._visited)) {
      return;
    }
    material_datepicker__date_range_input$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__date_range_input.DateRangeInputComponent), material_datepicker__date_range_input$46template.DateRangeInputComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__date_input$46template.initReflector();
    material_input__material_input$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_input.template.ddc", {
    "package:angular_components/material_datepicker/date_range_input.template.dart": material_datepicker__date_range_input$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_range_input.template.dart"],"names":[],"mappings":"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","file":"date_range_input.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_input$46template: material_datepicker__date_range_input$46template
  };
});

//# sourceMappingURL=date_range_input.template.ddc.js.map
