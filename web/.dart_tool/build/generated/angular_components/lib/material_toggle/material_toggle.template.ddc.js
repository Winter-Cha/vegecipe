define(['dart_sdk', 'packages/angular_components/material_toggle/material_toggle.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_toggle$46scss$46css, modules, change_detection, material_toggle, interpolate, text_binding, has_disabled, angular, has_disabled$, events, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_toggle__material_toggle$46scss$46css$46shim = material_toggle$46scss$46css.material_toggle__material_toggle$46scss$46css$46shim;
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
  const src__di__reflector = change_detection.src__di__reflector;
  const material_toggle__material_toggle = material_toggle.material_toggle__material_toggle;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_toggle__material_toggle$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $append = dartx.append;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialToggleComponent = () => (AppViewOfMaterialToggleComponent = dart.constFn(src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let AppViewAndintToAppViewOfMaterialToggleComponent = () => (AppViewAndintToAppViewOfMaterialToggleComponent = dart.constFn(dart.fnType(AppViewOfMaterialToggleComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialToggleComponent = () => (ComponentFactoryOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_toggle__material_toggle.MaterialToggleComponent)))();
  let ComponentRefOfMaterialToggleComponent = () => (ComponentRefOfMaterialToggleComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent)))();
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponent*/get styles$MaterialToggleComponent() {
      return [material_toggle__material_toggle$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(material_toggle__material_toggle$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_toggle__material_toggle$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(material_toggle__material_toggle$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_toggle__material_toggle$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_toggle__material_toggle$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_toggle__material_toggle$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_toggle__material_toggle$46template, "_expr_4");
  const _expr_6 = dart.privateName(material_toggle__material_toggle$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_toggle__material_toggle$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_toggle__material_toggle$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_toggle__material_toggle$46template, "_expr_9");
  const _el_0 = dart.privateName(material_toggle__material_toggle$46template, "_el_0");
  const _el_3 = dart.privateName(material_toggle__material_toggle$46template, "_el_3");
  const _el_5 = dart.privateName(material_toggle__material_toggle$46template, "_el_5");
  const _el_6 = dart.privateName(material_toggle__material_toggle$46template, "_el_6");
  const _handle_blur_0_0 = dart.privateName(material_toggle__material_toggle$46template, "_handle_blur_0_0");
  const _handle_focus_0_1 = dart.privateName(material_toggle__material_toggle$46template, "_handle_focus_0_1");
  const _handle_mouseenter_0_2 = dart.privateName(material_toggle__material_toggle$46template, "_handle_mouseenter_0_2");
  const _handle_mouseleave_0_3 = dart.privateName(material_toggle__material_toggle$46template, "_handle_mouseleave_0_3");
  material_toggle__material_toggle$46template.ViewMaterialToggleComponent0 = class ViewMaterialToggleComponent0 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_toggle/material_toggle.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "material-toggle");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "button");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "tgl-container");
      this.addShimC(_el_2);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, _el_2);
      src__runtime__dom_helpers.setAttribute(this[_el_3], "animated", "");
      this.updateChildClass(this[_el_3], "tgl-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_4, "tgl-btn-container");
      this.addShimC(_el_4);
      this[_el_5] = src__runtime__dom_helpers.appendDiv(doc, _el_4);
      this.updateChildClass(this[_el_5], "tgl-btn-underlay");
      this.addShimC(this[_el_5]);
      this[_el_6] = src__runtime__dom_helpers.appendDiv(doc, this[_el_5]);
      src__runtime__dom_helpers.setAttribute(this[_el_6], "animated", "");
      this.updateChildClass(this[_el_6], "tgl-btn");
      this.addShimC(this[_el_6]);
      this.project(this[_el_6], 0);
      this[_el_0][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_0_0)));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseenter_0_2)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_mouseleave_0_3)));
      _ctx.toggleElement = this[_el_0];
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasLabel;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? "-1" : "0";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "tabindex", currVal_2[$toString]());
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__runtime__interpolate.interpolate0(_ctx.disabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-disabled", core.String._check(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__runtime__interpolate.interpolateString0(_ctx.ariaLabel);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-label", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = src__runtime__interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.setAttribute(this[_el_3], "elevation", core.String._check(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_5], "under-checked", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.hasFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_5], "under-focus", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = src__runtime__interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.setAttribute(this[_el_6], "elevation", core.String._check(currVal_9));
        this[_expr_9] = currVal_9;
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    [_handle_blur_0_0]($event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = false;
    }
    [_handle_focus_0_1]($event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = true;
    }
    [_handle_mouseenter_0_2]($event) {
      let _ctx = this.ctx;
      _ctx.isHovered = true;
    }
    [_handle_mouseleave_0_3]($event) {
      let _ctx = this.ctx;
      _ctx.isHovered = false;
    }
    initComponentStyles() {
      let styles = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._componentStyles;
      if (styles == null) {
        material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = styles = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_toggle__material_toggle$46template.styles$MaterialToggleComponent, material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-toggle"));
    this.updateChildClassNonHtml(this.rootEl, material_toggle__material_toggle.MaterialToggleComponent.hostClass);
  }).prototype = material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0);
  dart.setMethodSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    [_handle_blur_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseenter_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseleave_0_3]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0, {
    /*material_toggle__material_toggle$46template.ViewMaterialToggleComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template._MaterialToggleComponentNgFactory*/get _MaterialToggleComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialToggleComponent()).new("material-toggle", dart.fn(material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0, AppViewAndintToAppViewOfMaterialToggleComponent())));
    }
  });
  dart.copyProperties(material_toggle__material_toggle$46template, {
    get MaterialToggleComponentNgFactory() {
      return material_toggle__material_toggle$46template._MaterialToggleComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(material_toggle__material_toggle$46template, "_textBinding_1");
  material_toggle__material_toggle$46template._ViewMaterialToggleComponent1 = class _ViewMaterialToggleComponent1 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "tgl-lbl");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.label));
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), [])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponent1 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template.styles$MaterialToggleComponentHost*/get styles$MaterialToggleComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_toggle__material_toggle$46template, "_compView_0");
  const _MaterialToggleComponent_0_5 = dart.privateName(material_toggle__material_toggle$46template, "_MaterialToggleComponent_0_5");
  material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0 = class _ViewMaterialToggleComponentHost0 extends src__core__linker__app_view.AppView$(material_toggle__material_toggle.MaterialToggleComponent) {
    build() {
      this[_compView_0] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialToggleComponent_0_5] = new material_toggle__material_toggle.MaterialToggleComponent.new(this[_compView_0], null);
      this[_compView_0].create(this[_MaterialToggleComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialToggleComponent()).new(0, this, this.rootEl, this[_MaterialToggleComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialToggleComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialToggleComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialToggleComponent_0_5] = null;
    material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.prototype;
  dart.addTypeTests(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.setMethodSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getMethods(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_toggle__material_toggle.MaterialToggleComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getFields(material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_0_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent)
  }));
  material_toggle__material_toggle$46template.viewFactory_MaterialToggleComponentHost0 = function(parentView, parentIndex) {
    return new material_toggle__material_toggle$46template._ViewMaterialToggleComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_toggle__material_toggle$46template, {
    /*material_toggle__material_toggle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_toggle__material_toggle$46template.initReflector = function() {
    if (dart.test(material_toggle__material_toggle$46template._visited)) {
      return;
    }
    material_toggle__material_toggle$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_toggle__material_toggle.MaterialToggleComponent), material_toggle__material_toggle$46template.MaterialToggleComponentNgFactory);
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.template.ddc", {
    "package:angular_components/material_toggle/material_toggle.template.dart": material_toggle__material_toggle$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.template.dart"],"names":[],"mappings":"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","file":"material_toggle.template.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle$46template: material_toggle__material_toggle$46template
  };
});

//# sourceMappingURL=material_toggle.template.ddc.js.map
