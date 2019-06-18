define(['dart_sdk', 'packages/angular_components/material_tab/tab_button.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular_components/material_tab/tab_mixin.template'], function(dart_sdk, tab_button$46scss$46css, text_binding, modules, change_detection, material_ripple, material_ripple$, interpolate, tab_button, angular, material_button_base, tab_mixin) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__tab_button$46scss$46css$46shim = tab_button$46scss$46css.material_tab__tab_button$46scss$46css$46shim;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_tab__tab_button = tab_button.material_tab__tab_button;
  const angular$46template = angular.angular$46template;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const material_tab__tab_mixin$46template = tab_mixin.material_tab__tab_mixin$46template;
  const material_tab__tab_button$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfTabButtonComponent = () => (AppViewOfTabButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__tab_button.TabButtonComponent)))();
  let AppViewAndintToAppViewOfTabButtonComponent = () => (AppViewAndintToAppViewOfTabButtonComponent = dart.constFn(dart.fnType(AppViewOfTabButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfTabButtonComponent = () => (ComponentFactoryOfTabButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__tab_button.TabButtonComponent)))();
  let ComponentRefOfTabButtonComponent = () => (ComponentRefOfTabButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__tab_button.TabButtonComponent)))();
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template.styles$TabButtonComponent*/get styles$TabButtonComponent() {
      return [material_tab__tab_button$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_1 = dart.privateName(material_tab__tab_button$46template, "_textBinding_1");
  const _compView_2 = dart.privateName(material_tab__tab_button$46template, "_compView_2");
  const _MaterialRippleComponent_2_5 = dart.privateName(material_tab__tab_button$46template, "_MaterialRippleComponent_2_5");
  const _expr_0 = dart.privateName(material_tab__tab_button$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_tab__tab_button$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_tab__tab_button$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_tab__tab_button$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_tab__tab_button$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_tab__tab_button$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_tab__tab_button$46template, "_expr_6");
  material_tab__tab_button$46template.ViewTabButtonComponent0 = class ViewTabButtonComponent0 extends src__core__linker__app_view.AppView$(material_tab__tab_button.TabButtonComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/tab_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content");
      this.addShimC(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this[_compView_2] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialRippleComponent_2_5]);
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.label));
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.hostClassFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "focus", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostClassActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "active", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "disabled", currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
    initComponentStyles() {
      let styles = material_tab__tab_button$46template.ViewTabButtonComponent0._componentStyles;
      if (styles == null) {
        material_tab__tab_button$46template.ViewTabButtonComponent0._componentStyles = styles = material_tab__tab_button$46template.ViewTabButtonComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_tab__tab_button$46template.styles$TabButtonComponent, material_tab__tab_button$46template.ViewTabButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab__tab_button$46template.ViewTabButtonComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("tab-button"));
  }).prototype = material_tab__tab_button$46template.ViewTabButtonComponent0.prototype;
  dart.addTypeTests(material_tab__tab_button$46template.ViewTabButtonComponent0);
  dart.setMethodSignature(material_tab__tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getMethods(material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__tab_button.TabButtonComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getFields(material_tab__tab_button$46template.ViewTabButtonComponent0.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__tab_button$46template.ViewTabButtonComponent0, {
    /*material_tab__tab_button$46template.ViewTabButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template._TabButtonComponentNgFactory*/get _TabButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTabButtonComponent()).new("tab-button", dart.fn(material_tab__tab_button$46template.viewFactory_TabButtonComponentHost0, AppViewAndintToAppViewOfTabButtonComponent())));
    }
  });
  dart.copyProperties(material_tab__tab_button$46template, {
    get TabButtonComponentNgFactory() {
      return material_tab__tab_button$46template._TabButtonComponentNgFactory;
    }
  });
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template.styles$TabButtonComponentHost*/get styles$TabButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_tab__tab_button$46template, "_compView_0");
  const _TabButtonComponent_0_5 = dart.privateName(material_tab__tab_button$46template, "_TabButtonComponent_0_5");
  material_tab__tab_button$46template._ViewTabButtonComponentHost0 = class _ViewTabButtonComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__tab_button.TabButtonComponent) {
    build() {
      this[_compView_0] = new material_tab__tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TabButtonComponent_0_5] = new material_tab__tab_button.TabButtonComponent.new(this.rootEl);
      this[_compView_0].create(this[_TabButtonComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfTabButtonComponent()).new(0, this, this.rootEl, this[_TabButtonComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab__tab_button$46template._ViewTabButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TabButtonComponent_0_5] = null;
    material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__tab_button$46template._ViewTabButtonComponentHost0.prototype;
  dart.addTypeTests(material_tab__tab_button$46template._ViewTabButtonComponentHost0);
  dart.setMethodSignature(material_tab__tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__tab_button.TabButtonComponent), [])
  }));
  dart.setFieldSignature(material_tab__tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__tab_button$46template.ViewTabButtonComponent0),
    [_TabButtonComponent_0_5]: dart.fieldType(material_tab__tab_button.TabButtonComponent)
  }));
  material_tab__tab_button$46template.viewFactory_TabButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__tab_button$46template._ViewTabButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__tab_button$46template, {
    /*material_tab__tab_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__tab_button$46template.initReflector = function() {
    if (dart.test(material_tab__tab_button$46template._visited)) {
      return;
    }
    material_tab__tab_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__tab_button.TabButtonComponent), material_tab__tab_button$46template.TabButtonComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button_base$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    material_tab__tab_mixin$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.template.ddc", {
    "package:angular_components/material_tab/tab_button.template.dart": material_tab__tab_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.template.dart"],"names":[],"mappings":"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","file":"tab_button.template.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button$46template: material_tab__tab_button$46template
  };
});

//# sourceMappingURL=tab_button.template.ddc.js.map
