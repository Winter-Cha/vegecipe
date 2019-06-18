define(['dart_sdk', 'packages/angular_components/material_radio/material_radio_group.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_radio/material_radio', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_radio/material_radio.scss.css.shim', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/meta.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_radio_group$46scss$46css, modules, change_detection, material_radio, angular, focus, selection_model, disposer, angular_forms, material_radio$46scss$46css, material_icon, material_icon$, material_ripple, material_ripple$, has_disabled, meta, has_disabled$, icon, events) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_radio__material_radio_group$46scss$46css$46shim = material_radio_group$46scss$46css.material_radio__material_radio_group$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_radio__material_radio_group = material_radio.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio.material_radio__material_radio;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_radio__material_radio$46scss$46css$46shim = material_radio$46scss$46css.material_radio__material_radio$46scss$46css$46shim;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const meta$46template = meta.meta$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const material_radio__material_radio_group$46template = Object.create(dart.library);
  const material_radio__material_radio$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let AppViewOfMaterialRadioGroupComponent = () => (AppViewOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioGroupComponent = () => (AppViewAndintToAppViewOfMaterialRadioGroupComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioGroupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialRadioGroupComponent = () => (ComponentFactoryOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let VoidToMaterialRadioGroupComponent = () => (VoidToMaterialRadioGroupComponent = dart.constFn(dart.fnType(material_radio__material_radio_group.MaterialRadioGroupComponent, [])))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ComponentRefOfMaterialRadioGroupComponent = () => (ComponentRefOfMaterialRadioGroupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialRadioComponent = () => (AppViewOfMaterialRadioComponent = dart.constFn(src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent)))();
  let AppViewAndintToAppViewOfMaterialRadioComponent = () => (AppViewAndintToAppViewOfMaterialRadioComponent = dart.constFn(dart.fnType(AppViewOfMaterialRadioComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialRadioComponent = () => (ComponentFactoryOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_radio__material_radio.MaterialRadioComponent)))();
  let VoidToMaterialRadioComponent = () => (VoidToMaterialRadioComponent = dart.constFn(dart.fnType(material_radio__material_radio.MaterialRadioComponent, [])))();
  let ComponentRefOfMaterialRadioComponent = () => (ComponentRefOfMaterialRadioComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent)))();
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent*/get styles$MaterialRadioGroupComponent() {
      return [material_radio__material_radio_group$46scss$46css$46shim.styles];
    }
  });
  material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0 = class ViewMaterialRadioGroupComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio_group.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init0();
    }
    initComponentStyles() {
      let styles = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles;
      if (styles == null) {
        material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = styles = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponent, material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new = function(parentView, parentIndex) {
    material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-radio-group"));
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", material_radio__material_radio_group.MaterialRadioGroupComponent.role);
    this.rootEl.tabIndex = material_radio__material_radio_group.MaterialRadioGroupComponent.tabIndex;
  }).prototype = material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.setMethodSignature(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.defineLazy(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0, {
    /*material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template._MaterialRadioGroupComponentNgFactory*/get _MaterialRadioGroupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioGroupComponent()).new("material-radio-group", dart.fn(material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, AppViewAndintToAppViewOfMaterialRadioGroupComponent())));
    }
  });
  dart.copyProperties(material_radio__material_radio_group$46template, {
    get MaterialRadioGroupComponentNgFactory() {
      return material_radio__material_radio_group$46template._MaterialRadioGroupComponentNgFactory;
    }
  });
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template.styles$MaterialRadioGroupComponentHost*/get styles$MaterialRadioGroupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_radio__material_radio_group$46template, "_compView_0");
  const _MaterialRadioGroupComponent_0_5 = dart.privateName(material_radio__material_radio_group$46template, "_MaterialRadioGroupComponent_0_5");
  material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0 = class _ViewMaterialRadioGroupComponentHost0 extends src__core__linker__app_view.AppView$(material_radio__material_radio_group.MaterialRadioGroupComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRadioGroupComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_radio__material_radio_group.MaterialRadioGroupComponent, dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), dart.fn(() => new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null), VoidToMaterialRadioGroupComponent())) : new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      this[_MaterialRadioGroupComponent_0_5].radioComponents = JSArrayOfMaterialRadioComponent().of([]);
      this[_compView_0].create(this[_MaterialRadioGroupComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialRadioGroupComponent()).new(0, this, this.rootEl, this[_MaterialRadioGroupComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 0 === nodeIndex) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.setMethodSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio_group.MaterialRadioGroupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent)
  }));
  material_radio__material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio_group$46template, {
    /*material_radio__material_radio_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio_group$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio_group$46template._visited)) {
      return;
    }
    material_radio__material_radio_group$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), material_radio__material_radio_group$46template.MaterialRadioGroupComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    material_radio__material_radio$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponent*/get styles$MaterialRadioComponent() {
      return [material_radio__material_radio$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = dart.privateName(material_radio__material_radio$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(material_radio__material_radio$46template, "_MaterialIconComponent_1_5");
  const _appEl_2 = dart.privateName(material_radio__material_radio$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_radio__material_radio$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(material_radio__material_radio$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_radio__material_radio$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_radio__material_radio$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_radio__material_radio$46template, "_expr_3");
  const _expr_5 = dart.privateName(material_radio__material_radio$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_radio__material_radio$46template, "_expr_6");
  const _expr_8 = dart.privateName(material_radio__material_radio$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_radio__material_radio$46template, "_expr_9");
  const _el_0 = dart.privateName(material_radio__material_radio$46template, "_el_0");
  material_radio__material_radio$46template.ViewMaterialRadioComponent0 = class ViewMaterialRadioComponent0 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this[_el_0][$append](_el_1);
      src__runtime__dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClassNonHtml(_el_1, "icon");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 0);
      this.init0();
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyDown')));
      _rootEl[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(_ctx, 'onBlur')));
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (!(_ctx.role == null)) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", _ctx.role);
        }
      }
      let currVal_5 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-checked", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_9 == null ? null : dart.toString(currVal_9));
        this[_expr_9] = currVal_9;
      }
    }
    initComponentStyles() {
      let styles = material_radio__material_radio$46template.ViewMaterialRadioComponent0._componentStyles;
      if (styles == null) {
        material_radio__material_radio$46template.ViewMaterialRadioComponent0._componentStyles = styles = material_radio__material_radio$46template.ViewMaterialRadioComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_radio__material_radio$46template.styles$MaterialRadioComponent, material_radio__material_radio$46template.ViewMaterialRadioComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio__material_radio$46template.ViewMaterialRadioComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-radio"));
    this.updateChildClassNonHtml(this.rootEl, material_radio__material_radio.MaterialRadioComponent.hostClass);
  }).prototype = material_radio__material_radio$46template.ViewMaterialRadioComponent0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template.ViewMaterialRadioComponent0);
  dart.setMethodSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_radio__material_radio$46template.ViewMaterialRadioComponent0, {
    /*material_radio__material_radio$46template.ViewMaterialRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template._MaterialRadioComponentNgFactory*/get _MaterialRadioComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRadioComponent()).new("material-radio", dart.fn(material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0, AppViewAndintToAppViewOfMaterialRadioComponent())));
    }
  });
  dart.copyProperties(material_radio__material_radio$46template, {
    get MaterialRadioComponentNgFactory() {
      return material_radio__material_radio$46template._MaterialRadioComponentNgFactory;
    }
  });
  const _compView_0$ = dart.privateName(material_radio__material_radio$46template, "_compView_0");
  const _MaterialRippleComponent_0_5 = dart.privateName(material_radio__material_radio$46template, "_MaterialRippleComponent_0_5");
  material_radio__material_radio$46template._ViewMaterialRadioComponent1 = class _ViewMaterialRadioComponent1 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0$] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(_el_0, "ripple");
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0$].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponent1.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponent1);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), [])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    [_compView_0$]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponent1 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template.styles$MaterialRadioComponentHost*/get styles$MaterialRadioComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialRadioComponent_0_5 = dart.privateName(material_radio__material_radio$46template, "_MaterialRadioComponent_0_5");
  material_radio__material_radio$46template._ViewMaterialRadioComponentHost0 = class _ViewMaterialRadioComponentHost0 extends src__core__linker__app_view.AppView$(material_radio__material_radio.MaterialRadioComponent) {
    build() {
      this[_compView_0$] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialRadioComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_radio__material_radio.MaterialRadioComponent, dart.wrapType(material_radio__material_radio.MaterialRadioComponent), dart.fn(() => new material_radio__material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0$], material_radio__material_radio_group.MaterialRadioGroupComponent._check(this.injectorGetOptional(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), this.viewData.parentIndex)), null, null), VoidToMaterialRadioComponent())) : new material_radio__material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0$], material_radio__material_radio_group.MaterialRadioGroupComponent._check(this.injectorGetOptional(dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent), this.viewData.parentIndex)), null, null);
      this[_compView_0$].create(this[_MaterialRadioComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialRadioComponent()).new(0, this, this.rootEl, this[_MaterialRadioComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialRadioComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialRadioComponent_0_5] = null;
    material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.prototype;
  dart.addTypeTests(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.setMethodSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_radio__material_radio.MaterialRadioComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getFields(material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent)
  }));
  material_radio__material_radio$46template.viewFactory_MaterialRadioComponentHost0 = function(parentView, parentIndex) {
    return new material_radio__material_radio$46template._ViewMaterialRadioComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_radio__material_radio$46template, {
    /*material_radio__material_radio$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_radio__material_radio$46template.initReflector = function() {
    if (dart.test(material_radio__material_radio$46template._visited)) {
      return;
    }
    material_radio__material_radio$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_radio__material_radio.MaterialRadioComponent), material_radio__material_radio$46template.MaterialRadioComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_radio__material_radio_group$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.template.ddc", {
    "package:angular_components/material_radio/material_radio_group.template.dart": material_radio__material_radio_group$46template,
    "package:angular_components/material_radio/material_radio.template.dart": material_radio__material_radio$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_radio_group.template.dart","material_radio.template.dart"],"names":[],"mappings":"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","file":"material_radio.template.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio_group$46template: material_radio__material_radio_group$46template,
    material_radio__material_radio$46template: material_radio__material_radio$46template
  };
});

//# sourceMappingURL=material_radio.template.ddc.js.map
