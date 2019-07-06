define(['dart_sdk', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/comparison_option', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template'], function(dart_sdk, calendar, comparison, comparison_option, range, date, observable, sequential, disposer, modules, change_detection, material_toggle, material_toggle$, interpolate, has_disabled, comparison_range_editor, text_binding, material_select_item, material_select_item$, material_dropdown_base, activation_handler, selection_container, has_renderer, comparison_option$, scroll_host_interface, angular, date_range_input, material_list, material_list_item, material_dropdown_select, angular_2) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__comparison$46template = comparison.material_datepicker__comparison$46template;
  const material_datepicker__comparison_option$46template = comparison_option.material_datepicker__comparison_option$46template;
  const material_datepicker__range$46template = range.material_datepicker__range$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
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
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const material_toggle__material_toggle = material_toggle$.material_toggle__material_toggle;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__material_datepicker__comparison_range_editor = comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_datepicker__comparison_option = comparison_option$.material_datepicker__comparison_option;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const angular$46template = angular.angular$46template;
  const material_datepicker__date_range_input$46template = date_range_input.material_datepicker__date_range_input$46template;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const material_select__material_dropdown_select$46template = material_dropdown_select.material_select__material_dropdown_select$46template;
  const utils__angular__scroll_host__angular_2$46template = angular_2.utils__angular__scroll_host__angular_2$46template;
  const src__material_datepicker__date_range_editor_model$46template = Object.create(dart.library);
  const src__material_datepicker__comparison_range_editor$46scss$46css$46shim = Object.create(dart.library);
  const src__material_datepicker__comparison_range_editor$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfComparisonRangeEditorComponent = () => (AppViewOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let AppViewAndintToAppViewOfComparisonRangeEditorComponent = () => (AppViewAndintToAppViewOfComparisonRangeEditorComponent = dart.constFn(dart.fnType(AppViewOfComparisonRangeEditorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfComparisonRangeEditorComponent = () => (ComponentFactoryOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select__material_select_item.MaterialSelectItemComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let VoidToComparisonRangeEditorComponent = () => (VoidToComparisonRangeEditorComponent = dart.constFn(dart.fnType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, [])))();
  let ComponentRefOfComparisonRangeEditorComponent = () => (ComponentRefOfComparisonRangeEditorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)))();
  dart.defineLazy(src__material_datepicker__date_range_editor_model$46template, {
    /*src__material_datepicker__date_range_editor_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__date_range_editor_model$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__date_range_editor_model$46template._visited)) {
      return;
    }
    src__material_datepicker__date_range_editor_model$46template._visited = true;
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__comparison$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46scss$46css$46shim, {
    /*src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;flex-direction:column}.comparison-toggle-section._ngcontent-%ID%{display:flex;justify-content:space-between;align-items:center;flex-grow:1;height:32px;padding:0 16px}.comparison-toggle._ngcontent-%ID%{display:inline-flex;width:100%}.comparison-option-dropdown._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:0 8px;position:relative}material-select-item._ngcontent-%ID%{font-size:inherit}.fake-popup._ngcontent-%ID%{background-color:#fff;left:0;position:absolute;top:0;z-index:1}"];
    }
  });
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent*/get styles$ComparisonRangeEditorComponent() {
      return [src__material_datepicker__comparison_range_editor$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_compView_1");
  const _MaterialToggleComponent_1_5 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_MaterialToggleComponent_1_5");
  const _appEl_2 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_expr_0");
  const _expr_2 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_expr_2");
  let const$;
  const _handle_checkedChange_1_0 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_handle_checkedChange_1_0");
  let const$0;
  src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0 = class ViewComparisonRangeEditorComponent0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "comparison-toggle-section");
      this.addShimC(_el_0);
      this[_compView_1] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, src__runtime__interpolate.interpolateString2("", "comparison-toggle", " ", material_toggle__material_toggle.MaterialToggleComponent.hostClass, ""));
      this.addShimC(_el_1);
      this[_MaterialToggleComponent_1_5] = new material_toggle__material_toggle.MaterialToggleComponent.new(this[_compView_1], null);
      this[_compView_1].create(this[_MaterialToggleComponent_1_5], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic))]));
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let subscription_0 = this[_MaterialToggleComponent_1_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_1_0)));
      this.init(const$0 || (const$0 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialToggleComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg == null)) {
          this[_MaterialToggleComponent_1_5].label = src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.comparisonHeaderMsg;
          changed = true;
        }
      }
      let currVal_0 = !dart.test(_ctx.model.comparisonSupported);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialToggleComponent_1_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_2 = _ctx.comparisonEnabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialToggleComponent_1_5].checked = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = _ctx.model.comparisonEnabled;
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_1].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialToggleComponent_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    [_handle_checkedChange_1_0]($event) {
      let _ctx = this.ctx;
      _ctx.comparisonEnabled = core.bool._check($event);
    }
    initComponentStyles() {
      let styles = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles;
      if (styles == null) {
        src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = styles = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponent, src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialToggleComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("comparison-range-editor"));
  }).prototype = src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_checkedChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_1_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0, {
    /*src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory*/get _ComparisonRangeEditorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfComparisonRangeEditorComponent()).new("comparison-range-editor", dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0, AppViewAndintToAppViewOfComparisonRangeEditorComponent())));
    }
  });
  dart.copyProperties(src__material_datepicker__comparison_range_editor$46template, {
    get ComparisonRangeEditorComponentNgFactory() {
      return src__material_datepicker__comparison_range_editor$46template._ComparisonRangeEditorComponentNgFactory;
    }
  });
  const _appEl_1 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_NgFor_1_9");
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1 = class _ViewComparisonRangeEditorComponent1 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model.validComparisonOptions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), [])
  }));
  dart.setLibraryUri(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent1 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent1.new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_textBinding_1");
  const _compView_0 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_compView_0");
  const _MaterialSelectItemComponent_0_5 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_MaterialSelectItemComponent_0_5");
  const _handle_trigger_0_0 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_handle_trigger_0_0");
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2 = class _ViewComparisonRangeEditorComponent2 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(_el_0, mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], JSArrayOfObject().of([JSArrayOfText().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_option = src__runtime__optimizations.unsafeCast(material_datepicker__comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = "false";
      }
      let currVal_0 = dart.equals(_ctx.model.comparisonOption, local_option);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.comparisonOptionMsg(local_option)));
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_option = src__runtime__optimizations.unsafeCast(material_datepicker__comparison_option.ComparisonOption, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.model.comparisonOption = local_option;
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponent2 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template.styles$ComparisonRangeEditorComponentHost*/get styles$ComparisonRangeEditorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ComparisonRangeEditorComponent_0_5 = dart.privateName(src__material_datepicker__comparison_range_editor$46template, "_ComparisonRangeEditorComponent_0_5");
  src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0 = class _ViewComparisonRangeEditorComponentHost0 extends src__core__linker__app_view.AppView$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent) {
    build() {
      this[_compView_0] = new src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ComparisonRangeEditorComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent, dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), dart.fn(() => new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.injectorGetOptional(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex))), VoidToComparisonRangeEditorComponent())) : new src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.injectorGetOptional(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ComparisonRangeEditorComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfComparisonRangeEditorComponent()).new(0, this, this.rootEl, this[_ComparisonRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ComparisonRangeEditorComponent_0_5] = null;
    src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.prototype;
  dart.addTypeTests(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0);
  dart.setMethodSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), [])
  }));
  dart.setLibraryUri(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart");
  dart.setFieldSignature(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_datepicker__comparison_range_editor$46template.ViewComparisonRangeEditorComponent0),
    [_ComparisonRangeEditorComponent_0_5]: dart.fieldType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent)
  }));
  src__material_datepicker__comparison_range_editor$46template.viewFactory_ComparisonRangeEditorComponentHost0 = function(parentView, parentIndex) {
    return new src__material_datepicker__comparison_range_editor$46template._ViewComparisonRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_datepicker__comparison_range_editor$46template, {
    /*src__material_datepicker__comparison_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_datepicker__comparison_range_editor$46template.initReflector = function() {
    if (dart.test(src__material_datepicker__comparison_range_editor$46template._visited)) {
      return;
    }
    src__material_datepicker__comparison_range_editor$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_datepicker__comparison_range_editor.ComparisonRangeEditorComponent), src__material_datepicker__comparison_range_editor$46template.ComparisonRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    material_datepicker__comparison_option$46template.initReflector();
    material_datepicker__date_range_input$46template.initReflector();
    material_datepicker__range$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_list__material_list_item$46template.initReflector();
    material_select__material_dropdown_select$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_toggle__material_toggle$46template.initReflector();
    model__date__date$46template.initReflector();
    src__material_datepicker__date_range_editor_model$46template.initReflector();
    utils__angular__scroll_host__angular_2$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.ddc", {
    "package:angular_components/src/material_datepicker/date_range_editor_model.template.dart": src__material_datepicker__date_range_editor_model$46template,
    "package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart": src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    "package:angular_components/src/material_datepicker/comparison_range_editor.template.dart": src__material_datepicker__comparison_range_editor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor_model.template.dart","comparison_range_editor.scss.css.shim.dart","comparison_range_editor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAeI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kDAAa;EACrB;;MC9BoB,4EAAM;YAAG,EAAC;;;;MCkDV,kGAAqC;YAAG,EAAS,4EAAM;;;;;;;;;;;;;;AAevE,YAAQ,WAAS,qCAAS,IAAG,sFAAsF;IACrH;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,uBAAW,OAAG,4EAAoC,CAAC,MAAM;AACzD,UAAM,QAAQ,iBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,kCAA4B,CAAC,KAAK,EAAE,AAAS,4CAAkB,CAAC,IAAI,qBAAqB,KAAK,wDAA+B,UAAU,EAAE;AACzI,mBAAQ,CAAC,KAAK;AACd,wCAA4B,OAAG,4DAA+B,CAAC,iBAAW,EAAE;AAC5E,uBAAW,OAAO,CAAC,kCAA4B,EAAE,sBAAC;AAClD,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,iJAA2C;AAChG,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,UAAM,iBAAiB,kCAA4B,UAAU,OAAO,CAAC,kBAAa,uBAAC,0CAAyB;AAC5G,eAAI,CAAC,wDAAU,wCAAC,cAAc;IAChC;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,mDAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,mCAA4B;;AAErC,YAAO,eAAc;IACvB;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,gFAAsC,oBAAoB,IAAE,OAAO;AAChF,4CAA4B,MAAM,GAAG,gFAAsC,oBAAoB;AAC/F,iBAAO,GAAG;;;AAGd,UAAW,YAAa,WAAC,IAAI,MAAM,oBAAoB;AACvD,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,SAAS,GAAG,SAAS;AACjD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,kBAAkB;AACxC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,QAAQ,GAAG,SAAS;AAChD,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,qBAAS,KAAK,GAAG,IAAI,MAAM,kBAAkB;AAC7C,oBAAQ,2BAA2B;AACnC,uBAAW,cAAc;AACzB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,YAAI,UAAU,EAAE;AACd,4CAA4B,gBAAgB;;;IAGlD;;AAIE,oBAAQ,mBAAmB;AAC3B,uBAAW,qBAAqB;IAClC;gCAE+B,MAAM;AACnC,UAAM,OAAO,QAAG;AAChB,UAAI,kBAAkB,oBAAG,MAAM;IACjC;;AAIE,UAAI,SAAS,iHAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,iHAAgB,GAAI,MAAM,GAAI,iHAAgB,GAAG,6DAA8B,CAAC,kGAAqC,EAAE,mHAAkB;;AAE5I,0BAAe,GAAG,MAAM;IAC1B;;mHA9FoC,UAA2B,EAAE,WAAe;IAP3C,iBAAW;IAChB,kCAA4B;IAC9C,cAAQ;IACjB,eAAS;IACT,aAAO;IACP,aAAO;AAEwE,8HAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;MAJ+B,iHAAgB;;;;;;MAkGc,qGAAwC;YAAG,gBAAM,wDAAgB,CAAC,2BAA2B,+KAA+C;;;;;AAEzM,YAAO,sGAAwC;IACjD;;;;;;AAWI,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,mBAAQ,yBAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,iJAA2C;AAChG,sBAAU,OAAG,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AACtD,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM,uBAAuB;AACnD,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;IACrC;;AAIE,oBAAQ,mBAAmB;IAC7B;;oHAhCqC,UAA2B,EAAE,WAAe;IAHnE,cAAQ;IACP,gBAAU;IACrB,aAAO;AAC0E,+HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,4BAAmB;EACrB;;;;;;;;;;;;;sHAiCwD,UAA2B,EAAE,WAAe;AACpG,eAAO,qGAAoC,CAAC,UAAU,EAAE,WAAW;EACrE;;;;;;;AAYI,uBAAW,OAAG,qFAAyC,CAAC,MAAM;AAC9D,UAAM,QAAQ,iBAAW,OAAO;AAChC,MAAS,sCAAY,CAAC,KAAK,EAAE,mBAAmB;AAChD,mBAAQ,CAAC,KAAK;AACd,4CAAgC,GAAI,UAAS,qCAAS,IAChD,AAAS,iCAAiB,oEAAU,gFAA2B,EAAE,kBACxD,qEAAoC,CAAC,KAAK,uDAAE,eAAU,WAAW,oBAAoB,CAAU,4DAAc,EAAE,eAAU,SAAS,YAAY,iEAAG,eAAU,WAAW,oBAAoB,CAAU,oEAAiB,EAAE,eAAU,SAAS,YAAY,IAAG,iBAAW,EAAE,mDAE/Q,qEAAoC,CAAC,KAAK,uDAAE,eAAU,WAAW,oBAAoB,CAAU,4DAAc,EAAE,eAAU,SAAS,YAAY,iEAAG,eAAU,WAAW,oBAAoB,CAAU,oEAAiB,EAAE,eAAU,SAAS,YAAY,IAAG,iBAAW,EAAE;AAC5Q,uBAAW,OAAO,CAAC,sCAAgC,EAAE,sBACnD,oBAAC,oBAAc,QAAQ;AAEzB,UAAM,iBAAiB,sCAAgC,QAAQ,OAAO,CAAC,kBAAa,6BAAC,oCAAmB;AACxG,eAAI,CAAC,sBAAC,KAAK,IAAG,wCAAC,cAAc;IAC/B;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAO,AAAU,KAAK,KAAW,kEAAa,IAAK,AAAU,KAAK,KAAW,mDAAW,IAAM,AAAU,KAAK,KAAW,kDAAW,KAAiB,aAAV,SAAS,KAAI,GAAK;AAC1J,cAAO,uCAAgC;;AAEzC,YAAO,eAAc;IACvB;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,eAAe,AAAS,sCAAU,0DAA4B,WAAM,QAAC;AAC3E,UAAI,UAAU,EAAE;AACd,QAAC,sCAAgC,gBAAgB,GAAG;;AAEtD,UAAM,wBAAa,IAAI,MAAM,iBAAiB,EAAI,YAAY;AAC9D,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,8CAAgC,SAAS,GAAG,SAAS;AACrD,qBAAO,GAAG,SAAS;;AAErB,uBAAW,kBAAkB,CAAC,UAAU;AACxC,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,oBAAoB,CAAC,YAAY;AAC3F,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;AAChC,4CAAgC,YAAY;IAC9C;0BAEyB,MAAM;AAC7B,UAAM,eAAe,AAAS,sCAAU,0DAA4B,WAAM,QAAC;AAC3E,UAAM,OAAO,QAAG;AAChB,UAAI,MAAM,iBAAiB,GAAG,YAAY;IAC5C;;oHAzDqC,UAA2B,EAAE,WAAe;IAJtD,oBAAc,OAAG,0CAAoB;IACtB,iBAAW;IAChB,sCAAgC;IACjE,aAAO;AAC0E,+HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,4BAAmB;EACrB;;;;;;;;;;;;;;;;sHA0DwD,UAA2B,EAAE,WAAe;AACpG,eAAO,qGAAoC,CAAC,UAAU,EAAE,WAAW;EACrE;;MAEoB,sGAAyC;YAAG;;;;;;AAQ5D,uBAAW,OAAG,oGAAmC,CAAC,MAAM;AACxD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+CAAmC,GAAI,UAAS,qCAAS,IACnD,AAAS,iCAAiB,mFAAS,+FAA8B,EAAE,kBAC1D,oFAAsC,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAQ,YAAY,8EAAG,wBAAwB,CAAU,iFAAU,EAAE,aAAQ,YAAY,oDAE3K,oFAAsC,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAQ,YAAY,8EAAG,wBAAwB,CAAU,iFAAU,EAAE,aAAQ,YAAY;AACxK,uBAAW,OAAO,CAAC,yCAAmC,EAAE,mBAAc;AACtE,gBAAK,CAAC,WAAM;AACZ,iBAAO,oDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,yCAAmC;IAC1E;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;wHAvByC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yCAAmC;AACe,mIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;0HA0BrF,UAA2B,EAAE,WAAe;AAC1I,eAAO,yGAAwC,CAAC,UAAU,EAAE,WAAW;EACzE;;MAEI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAO,oCAAiB,CAAC,+FAA8B,EAAE,oGAAuC;AAChG,IAAM,gCAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,0CAAa;AACnB,IAAO,0EAAa;AACpB,IAAO,+DAAa;EACtB","file":"comparison_range_editor.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_datepicker__date_range_editor_model$46template: src__material_datepicker__date_range_editor_model$46template,
    src__material_datepicker__comparison_range_editor$46scss$46css$46shim: src__material_datepicker__comparison_range_editor$46scss$46css$46shim,
    src__material_datepicker__comparison_range_editor$46template: src__material_datepicker__comparison_range_editor$46template
  };
});

//# sourceMappingURL=comparison_range_editor.scss.css.shim.ddc.js.map
