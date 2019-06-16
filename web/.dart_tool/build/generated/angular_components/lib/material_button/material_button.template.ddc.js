define(['dart_sdk', 'packages/angular_components/material_button/material_button.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/theme/dark_theme.template'], function(dart_sdk, material_button$46scss$46css, modules, change_detection, material_button, material_ripple, material_ripple$, dark_theme, button_decorator, has_disabled, material_button_base, angular, meta, button_decorator$, has_disabled$, dark_theme$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button$46scss$46css$46shim = material_button$46scss$46css.material_button__material_button$46scss$46css$46shim;
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
  const material_button__material_button = material_button.material_button__material_button;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const theme__dark_theme$46template = dark_theme$.theme__dark_theme$46template;
  const material_button__material_button$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfMaterialButtonComponent = () => (AppViewOfMaterialButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent)))();
  let AppViewAndintToAppViewOfMaterialButtonComponent = () => (AppViewAndintToAppViewOfMaterialButtonComponent = dart.constFn(dart.fnType(AppViewOfMaterialButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialButtonComponent = () => (ComponentFactoryOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_button.MaterialButtonComponent)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let ComponentRefOfMaterialButtonComponent = () => (ComponentRefOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent)))();
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponent*/get styles$MaterialButtonComponent() {
      return [material_button__material_button$46scss$46css$46shim.styles];
    }
  });
  const _compView_2 = dart.privateName(material_button__material_button$46template, "_compView_2");
  const _MaterialRippleComponent_2_5 = dart.privateName(material_button__material_button$46template, "_MaterialRippleComponent_2_5");
  const _expr_0 = dart.privateName(material_button__material_button$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_button__material_button$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_button__material_button$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_button__material_button$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_button__material_button$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_button__material_button$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_button__material_button$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_button__material_button$46template, "_expr_7");
  material_button__material_button$46template.ViewMaterialButtonComponent0 = class ViewMaterialButtonComponent0 extends src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_button.dart" : null;
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
      let currVal_7 = _ctx.hostElevation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "elevation", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    initComponentStyles() {
      let styles = material_button__material_button$46template.ViewMaterialButtonComponent0._componentStyles;
      if (styles == null) {
        material_button__material_button$46template.ViewMaterialButtonComponent0._componentStyles = styles = material_button__material_button$46template.ViewMaterialButtonComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_button__material_button$46template.styles$MaterialButtonComponent, material_button__material_button$46template.ViewMaterialButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_button__material_button$46template.ViewMaterialButtonComponent0.new = function(parentView, parentIndex) {
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
    material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-button"));
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "animated", material_button__material_button.MaterialButtonComponent.hostAnimated);
  }).prototype = material_button__material_button$46template.ViewMaterialButtonComponent0.prototype;
  dart.addTypeTests(material_button__material_button$46template.ViewMaterialButtonComponent0);
  dart.setMethodSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_button__material_button$46template.ViewMaterialButtonComponent0, {
    /*material_button__material_button$46template.ViewMaterialButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template._MaterialButtonComponentNgFactory*/get _MaterialButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialButtonComponent()).new("material-button", dart.fn(material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0, AppViewAndintToAppViewOfMaterialButtonComponent())));
    }
  });
  dart.copyProperties(material_button__material_button$46template, {
    get MaterialButtonComponentNgFactory() {
      return material_button__material_button$46template._MaterialButtonComponentNgFactory;
    }
  });
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponentHost*/get styles$MaterialButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_button__material_button$46template, "_compView_0");
  const _AcxDarkTheme_0_5 = dart.privateName(material_button__material_button$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(material_button__material_button$46template, "_MaterialButtonComponent_0_6");
  let const$;
  let const$0;
  material_button__material_button$46template._ViewMaterialButtonComponentHost0 = class _ViewMaterialButtonComponentHost0 extends src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(this.rootEl, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialButtonComponent()).new(0, this, this.rootEl, this[_MaterialButtonComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
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
  (material_button__material_button$46template._ViewMaterialButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_button$46template._ViewMaterialButtonComponentHost0.prototype;
  dart.addTypeTests(material_button__material_button$46template._ViewMaterialButtonComponentHost0);
  dart.setMethodSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent)
  }));
  material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_button$46template._ViewMaterialButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_button$46template.initReflector = function() {
    if (dart.test(material_button__material_button$46template._visited)) {
      return;
    }
    material_button__material_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_button.MaterialButtonComponent), material_button__material_button$46template.MaterialButtonComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    theme__dark_theme$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_button/material_button.template.ddc", {
    "package:angular_components/material_button/material_button.template.dart": material_button__material_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_button.template.dart"],"names":[],"mappings":"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","file":"material_button.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_button$46template: material_button__material_button$46template
  };
});

//# sourceMappingURL=material_button.template.ddc.js.map
