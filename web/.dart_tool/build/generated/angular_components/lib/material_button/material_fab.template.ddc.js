define(['dart_sdk', 'packages/angular_components/material_button/material_fab.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template'], function(dart_sdk, material_fab$46scss$46css, modules, change_detection, material_fab, material_ripple, material_ripple$, material_button_base, angular, meta) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_fab$46scss$46css$46shim = material_fab$46scss$46css.material_button__material_fab$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_button__material_fab = material_fab.material_button__material_fab;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const material_button__material_fab$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfMaterialFabComponent = () => (AppViewOfMaterialFabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent)))();
  let AppViewAndintToAppViewOfMaterialFabComponent = () => (AppViewAndintToAppViewOfMaterialFabComponent = dart.constFn(dart.fnType(AppViewOfMaterialFabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialFabComponent = () => (ComponentFactoryOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_fab.MaterialFabComponent)))();
  let ComponentRefOfMaterialFabComponent = () => (ComponentRefOfMaterialFabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent)))();
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponent*/get styles$MaterialFabComponent() {
      return [material_button__material_fab$46scss$46css$46shim.styles];
    }
  });
  const _compView_2 = dart.privateName(material_button__material_fab$46template, "_compView_2");
  const _MaterialRippleComponent_2_5 = dart.privateName(material_button__material_fab$46template, "_MaterialRippleComponent_2_5");
  const _expr_0 = dart.privateName(material_button__material_fab$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_button__material_fab$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_button__material_fab$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_button__material_fab$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_button__material_fab$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_button__material_fab$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_button__material_fab$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_button__material_fab$46template, "_expr_7");
  material_button__material_fab$46template.ViewMaterialFabComponent0 = class ViewMaterialFabComponent0 extends src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_fab.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      this.project(_el_1, 0);
      this[_compView_2] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialRippleComponent_2_5]);
      _el_2[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _el_2[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
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
      let currVal_4 = _ctx.hostDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostRaised;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "raised", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostClassIsFocused;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-focused", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hostClassIsPressed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-pressed", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    initComponentStyles() {
      let styles = material_button__material_fab$46template.ViewMaterialFabComponent0._componentStyles;
      if (styles == null) {
        material_button__material_fab$46template.ViewMaterialFabComponent0._componentStyles = styles = material_button__material_fab$46template.ViewMaterialFabComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_button__material_fab$46template.styles$MaterialFabComponent, material_button__material_fab$46template.ViewMaterialFabComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_button__material_fab$46template.ViewMaterialFabComponent0.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-fab"));
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "animated", material_button__material_fab.MaterialFabComponent.hostAnimated);
  }).prototype = material_button__material_fab$46template.ViewMaterialFabComponent0.prototype;
  dart.addTypeTests(material_button__material_fab$46template.ViewMaterialFabComponent0);
  dart.setMethodSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_button__material_fab$46template.ViewMaterialFabComponent0, "package:angular_components/material_button/material_fab.template.dart");
  dart.setFieldSignature(material_button__material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template.ViewMaterialFabComponent0.__proto__),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_button__material_fab$46template.ViewMaterialFabComponent0, {
    /*material_button__material_fab$46template.ViewMaterialFabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template._MaterialFabComponentNgFactory*/get _MaterialFabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialFabComponent()).new("material-fab", dart.fn(material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0, AppViewAndintToAppViewOfMaterialFabComponent())));
    }
  });
  dart.copyProperties(material_button__material_fab$46template, {
    get MaterialFabComponentNgFactory() {
      return material_button__material_fab$46template._MaterialFabComponentNgFactory;
    }
  });
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template.styles$MaterialFabComponentHost*/get styles$MaterialFabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_button__material_fab$46template, "_compView_0");
  const _MaterialFabComponent_0_5 = dart.privateName(material_button__material_fab$46template, "_MaterialFabComponent_0_5");
  material_button__material_fab$46template._ViewMaterialFabComponentHost0 = class _ViewMaterialFabComponentHost0 extends src__core__linker__app_view.AppView$(material_button__material_fab.MaterialFabComponent) {
    build() {
      this[_compView_0] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabComponent_0_5] = new material_button__material_fab.MaterialFabComponent.new(this.rootEl, this[_compView_0]);
      this[_compView_0].create(this[_MaterialFabComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialFabComponent()).new(0, this, this.rootEl, this[_MaterialFabComponent_0_5]);
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
  (material_button__material_fab$46template._ViewMaterialFabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabComponent_0_5] = null;
    material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_fab$46template._ViewMaterialFabComponentHost0.prototype;
  dart.addTypeTests(material_button__material_fab$46template._ViewMaterialFabComponentHost0);
  dart.setMethodSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_fab.MaterialFabComponent), [])
  }));
  dart.setLibraryUri(material_button__material_fab$46template._ViewMaterialFabComponentHost0, "package:angular_components/material_button/material_fab.template.dart");
  dart.setFieldSignature(material_button__material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_0_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent)
  }));
  material_button__material_fab$46template.viewFactory_MaterialFabComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_fab$46template._ViewMaterialFabComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_fab$46template, {
    /*material_button__material_fab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_fab$46template.initReflector = function() {
    if (dart.test(material_button__material_fab$46template._visited)) {
      return;
    }
    material_button__material_fab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_fab.MaterialFabComponent), material_button__material_fab$46template.MaterialFabComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_button/material_fab.template.ddc", {
    "package:angular_components/material_button/material_fab.template.dart": material_button__material_fab$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.template.dart"],"names":[],"mappings":"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","file":"material_fab.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab$46template: material_button__material_fab$46template
  };
});

//# sourceMappingURL=material_fab.template.ddc.js.map
