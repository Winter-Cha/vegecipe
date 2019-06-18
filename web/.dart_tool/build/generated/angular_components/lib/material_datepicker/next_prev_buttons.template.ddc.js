define(['dart_sdk', 'packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular/angular.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, next_prev_buttons$46scss$46css, modules, change_detection, material_icon, material_icon$, interpolate, next_prev_buttons, angular, sequential, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__next_prev_buttons$46scss$46css$46shim = next_prev_buttons$46scss$46css.material_datepicker__next_prev_buttons$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_datepicker__next_prev_buttons = next_prev_buttons.material_datepicker__next_prev_buttons;
  const angular$46template = angular.angular$46template;
  const src__material_datepicker__sequential$46template = sequential.src__material_datepicker__sequential$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_datepicker__next_prev_buttons$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfNextPrevComponent = () => (AppViewOfNextPrevComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  let AppViewAndintToAppViewOfNextPrevComponent = () => (AppViewAndintToAppViewOfNextPrevComponent = dart.constFn(dart.fnType(AppViewOfNextPrevComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfNextPrevComponent = () => (ComponentFactoryOfNextPrevComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  let ComponentRefOfNextPrevComponent = () => (ComponentRefOfNextPrevComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__next_prev_buttons.NextPrevComponent)))();
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template.styles$NextPrevComponent*/get styles$NextPrevComponent() {
      return [material_datepicker__next_prev_buttons$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_MaterialIconComponent_1_5");
  const _compView_4 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_compView_4");
  const _MaterialIconComponent_4_5 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_MaterialIconComponent_4_5");
  const _expr_0 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_3");
  const _expr_5 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_expr_8");
  const _el_0 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_el_0");
  const _el_1 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_el_1");
  const _el_3 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_el_3");
  const _el_4 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_el_4");
  material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0 = class ViewNextPrevComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__next_prev_buttons.NextPrevComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.ButtonElement._check(src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_0], "prev");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      src__runtime__dom_helpers.setAttribute(this[_el_1], "icon", "navigate_before");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _text_2 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_3] = html.ButtonElement._check(src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_3], "next");
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      src__runtime__dom_helpers.setAttribute(this[_el_4], "icon", "navigate_next");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_4]));
      this[_compView_4].create0(this[_MaterialIconComponent_4_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'prev')));
      this[_el_3][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'next')));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'stopPropagation')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'stopPropagation')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "navigate_before";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "navigate_next";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isPrevDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__runtime__interpolate.interpolate0(_ctx.isPrevDisabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-disabled", core.String._check(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__runtime__interpolate.interpolate0(dart.test(_ctx.isPrevDisabled) ? 0 - 1 : 0);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "tabindex", core.String._check(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.prevLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = _ctx.isNextDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_3], "disabled", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = src__runtime__interpolate.interpolate0(_ctx.isNextDisabled);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.setAttribute(this[_el_3], "aria-disabled", core.String._check(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = src__runtime__interpolate.interpolate0(dart.test(_ctx.isNextDisabled) ? 0 - 1 : 0);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.setAttribute(this[_el_3], "tabindex", core.String._check(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.nextLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_4], "aria-label", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
    }
    initComponentStyles() {
      let styles = material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = styles = material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__next_prev_buttons$46template.styles$NextPrevComponent, material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("next-prev-buttons"));
  }).prototype = material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.prototype;
  dart.addTypeTests(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.setMethodSignature(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__next_prev_buttons.NextPrevComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_4]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.ButtonElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.ButtonElement),
    [_el_4]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0, {
    /*material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template._NextPrevComponentNgFactory*/get _NextPrevComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfNextPrevComponent()).new("next-prev-buttons", dart.fn(material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, AppViewAndintToAppViewOfNextPrevComponent())));
    }
  });
  dart.copyProperties(material_datepicker__next_prev_buttons$46template, {
    get NextPrevComponentNgFactory() {
      return material_datepicker__next_prev_buttons$46template._NextPrevComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template.styles$NextPrevComponentHost*/get styles$NextPrevComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_compView_0");
  const _NextPrevComponent_0_5 = dart.privateName(material_datepicker__next_prev_buttons$46template, "_NextPrevComponent_0_5");
  material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0 = class _ViewNextPrevComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__next_prev_buttons.NextPrevComponent) {
    build() {
      this[_compView_0] = new material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_NextPrevComponent_0_5] = new material_datepicker__next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_NextPrevComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfNextPrevComponent()).new(0, this, this.rootEl, this[_NextPrevComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.setMethodSignature(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__next_prev_buttons.NextPrevComponent), [])
  }));
  dart.setFieldSignature(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__next_prev_buttons$46template.ViewNextPrevComponent0),
    [_NextPrevComponent_0_5]: dart.fieldType(material_datepicker__next_prev_buttons.NextPrevComponent)
  }));
  material_datepicker__next_prev_buttons$46template.viewFactory_NextPrevComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__next_prev_buttons$46template._ViewNextPrevComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__next_prev_buttons$46template, {
    /*material_datepicker__next_prev_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__next_prev_buttons$46template.initReflector = function() {
    if (dart.test(material_datepicker__next_prev_buttons$46template._visited)) {
      return;
    }
    material_datepicker__next_prev_buttons$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__next_prev_buttons.NextPrevComponent), material_datepicker__next_prev_buttons$46template.NextPrevComponentNgFactory);
    angular$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    src__material_datepicker__sequential$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.template.ddc", {
    "package:angular_components/material_datepicker/next_prev_buttons.template.dart": material_datepicker__next_prev_buttons$46template
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.template.dart"],"names":[],"mappings":"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","file":"next_prev_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons$46template: material_datepicker__next_prev_buttons$46template
  };
});

//# sourceMappingURL=next_prev_buttons.template.ddc.js.map
