define(['dart_sdk', 'packages/angular_components/material_select/material_select_searchbox.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/material_input', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/material_select_searchbox', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_select_searchbox$46scss$46css, modules, change_detection, material_input, material_input$, interpolate, deferred_validator, directives, material_input_default_value_accessor, base_material_input, reference, focus_interface, has_disabled, material_select_searchbox, angular, focus_interface$, focusable_mixin, select, async, events, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select_searchbox$46scss$46css$46shim = material_select_searchbox$46scss$46css.material_select__material_select_searchbox$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__material_input = material_input$.material_input__material_input;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_select__material_select_searchbox = material_select_searchbox.material_select__material_select_searchbox;
  const angular$46template = angular.angular$46template;
  const focus__focus_interface$46template = focus_interface$.focus__focus_interface$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_select__material_select_searchbox$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async$.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfMaterialSelectSearchboxComponent = () => (AppViewOfMaterialSelectSearchboxComponent = dart.constFn(src__core__linker__app_view.AppView$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent)))();
  let AppViewAndintToAppViewOfMaterialSelectSearchboxComponent = () => (AppViewAndintToAppViewOfMaterialSelectSearchboxComponent = dart.constFn(dart.fnType(AppViewOfMaterialSelectSearchboxComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSelectSearchboxComponent = () => (ComponentFactoryOfMaterialSelectSearchboxComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent)))();
  let ComponentRefOfMaterialSelectSearchboxComponent = () => (ComponentRefOfMaterialSelectSearchboxComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent)))();
  dart.defineLazy(material_select__material_select_searchbox$46template, {
    /*material_select__material_select_searchbox$46template.styles$MaterialSelectSearchboxComponent*/get styles$MaterialSelectSearchboxComponent() {
      return [material_select__material_select_searchbox$46scss$46css$46shim.styles];
    }
  });
  const _compView_0 = dart.privateName(material_select__material_select_searchbox$46template, "_compView_0");
  const _DeferredValidator_0_5 = dart.privateName(material_select__material_select_searchbox$46template, "_DeferredValidator_0_5");
  const _NgValidators_0_6 = dart.privateName(material_select__material_select_searchbox$46template, "_NgValidators_0_6");
  const _NgModel_0_7 = dart.privateName(material_select__material_select_searchbox$46template, "_NgModel_0_7");
  const _MaterialInputComponent_0_9 = dart.privateName(material_select__material_select_searchbox$46template, "_MaterialInputComponent_0_9");
  const _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(material_select__material_select_searchbox$46template, "_MaterialInputDefaultValueAccessor_0_11");
  const _expr_1 = dart.privateName(material_select__material_select_searchbox$46template, "_expr_1");
  let const$;
  let const$0;
  const _handle_ngModelChange_0_2 = dart.privateName(material_select__material_select_searchbox$46template, "_handle_ngModelChange_0_2");
  let const$1;
  let const$2;
  material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0 = class ViewMaterialSelectSearchboxComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_searchbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.updateChildClassNonHtml(_el_0, src__runtime__interpolate.interpolateString2("", "searchbox-input", " ", material_input__material_input.MaterialInputComponent.hostClass, ""));
      src__runtime__dom_helpers.setAttribute(_el_0, "leadingGlyph", "search");
      this.addShimC(_el_0);
      this[_DeferredValidator_0_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_MaterialInputComponent_0_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_0_7], this[_compView_0], this[_DeferredValidator_0_5]);
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
      this[_compView_0].create(this[_MaterialInputComponent_0_9], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic)), const$0 || (const$0 = dart.constList([], dart.dynamic))]));
      _el_0[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'stopSpaceKeyPropagation')));
      let subscription_0 = this[_NgModel_0_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_0_2)));
      let subscription_1 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler1(html.FocusEvent, html.FocusEvent, dart.bind(_ctx, 'handleFocus')));
      _ctx.input = this[_MaterialInputComponent_0_9];
      this.init(const$1 || (const$1 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator)) {
          return this[_DeferredValidator_0_5];
        }
        if (token === (const$2 || (const$2 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators"))))) {
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
        this[_MaterialInputComponent_0_9].leadingGlyph = "search";
        changed = true;
      }
      let currVal_1 = _ctx.label;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_ngModelChange_0_2]($event) {
      let _ctx = this.ctx;
      _ctx.inputText = core.String._check($event);
    }
    initComponentStyles() {
      let styles = material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles;
      if (styles == null) {
        material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles = styles = material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_select__material_select_searchbox$46template.styles$MaterialSelectSearchboxComponent, material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1] = null;
    material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select-searchbox"));
  }).prototype = material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.prototype;
  dart.addTypeTests(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0);
  dart.setMethodSignature(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, () => ({
    __proto__: dart.getMethods(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_ngModelChange_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, "package:angular_components/material_select/material_select_searchbox.template.dart");
  dart.setFieldSignature(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, () => ({
    __proto__: dart.getFields(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_0_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_0_6]: dart.fieldType(core.List),
    [_NgModel_0_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_0_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_expr_1]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, {
    /*material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_select__material_select_searchbox$46template, {
    /*material_select__material_select_searchbox$46template._MaterialSelectSearchboxComponentNgFactory*/get _MaterialSelectSearchboxComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectSearchboxComponent()).new("material-select-searchbox", dart.fn(material_select__material_select_searchbox$46template.viewFactory_MaterialSelectSearchboxComponentHost0, AppViewAndintToAppViewOfMaterialSelectSearchboxComponent())));
    }
  });
  dart.copyProperties(material_select__material_select_searchbox$46template, {
    get MaterialSelectSearchboxComponentNgFactory() {
      return material_select__material_select_searchbox$46template._MaterialSelectSearchboxComponentNgFactory;
    }
  });
  dart.defineLazy(material_select__material_select_searchbox$46template, {
    /*material_select__material_select_searchbox$46template.styles$MaterialSelectSearchboxComponentHost*/get styles$MaterialSelectSearchboxComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectSearchboxComponent_0_5 = dart.privateName(material_select__material_select_searchbox$46template, "_MaterialSelectSearchboxComponent_0_5");
  material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0 = class _ViewMaterialSelectSearchboxComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent) {
    build() {
      this[_compView_0] = new material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSelectSearchboxComponent_0_5] = new material_select__material_select_searchbox.MaterialSelectSearchboxComponent.new();
      this[_compView_0].create(this[_MaterialSelectSearchboxComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSelectSearchboxComponent()).new(0, this, this.rootEl, this[_MaterialSelectSearchboxComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus_interface.Focusable) && 0 === nodeIndex) {
        return this[_MaterialSelectSearchboxComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectSearchboxComponent_0_5].ngOnDestroy();
    }
  };
  (material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectSearchboxComponent_0_5] = null;
    material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.prototype;
  dart.addTypeTests(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0);
  dart.setMethodSignature(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_searchbox.MaterialSelectSearchboxComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, "package:angular_components/material_select/material_select_searchbox.template.dart");
  dart.setFieldSignature(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, () => ({
    __proto__: dart.getFields(material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_select__material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0),
    [_MaterialSelectSearchboxComponent_0_5]: dart.fieldType(material_select__material_select_searchbox.MaterialSelectSearchboxComponent)
  }));
  material_select__material_select_searchbox$46template.viewFactory_MaterialSelectSearchboxComponentHost0 = function(parentView, parentIndex) {
    return new material_select__material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select_searchbox$46template, {
    /*material_select__material_select_searchbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select_searchbox$46template.initReflector = function() {
    if (dart.test(material_select__material_select_searchbox$46template._visited)) {
      return;
    }
    material_select__material_select_searchbox$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select_searchbox.MaterialSelectSearchboxComponent), material_select__material_select_searchbox$46template.MaterialSelectSearchboxComponentNgFactory);
    angular$46template.initReflector();
    focus__focus_interface$46template.initReflector();
    material_input__material_input$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__selection__select$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select_searchbox.template.ddc", {
    "package:angular_components/material_select/material_select_searchbox.template.dart": material_select__material_select_searchbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_searchbox.template.dart"],"names":[],"mappings":"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","file":"material_select_searchbox.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_searchbox$46template: material_select__material_select_searchbox$46template
  };
});

//# sourceMappingURL=material_select_searchbox.template.ddc.js.map
