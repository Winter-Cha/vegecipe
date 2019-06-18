define(['dart_sdk', 'packages/angular_components/material_progress/material_progress.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_progress/material_progress', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_progress$46scss$46css, modules, change_detection, interpolate, material_progress, angular, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_progress__material_progress$46scss$46css$46shim = material_progress$46scss$46css.material_progress__material_progress$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_progress__material_progress = material_progress.material_progress__material_progress;
  const angular$46template = angular.angular$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const material_progress__material_progress$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $setProperty = dartx.setProperty;
  let AppViewOfMaterialProgressComponent = () => (AppViewOfMaterialProgressComponent = dart.constFn(src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent)))();
  let AppViewAndintToAppViewOfMaterialProgressComponent = () => (AppViewAndintToAppViewOfMaterialProgressComponent = dart.constFn(dart.fnType(AppViewOfMaterialProgressComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialProgressComponent = () => (ComponentFactoryOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_progress__material_progress.MaterialProgressComponent)))();
  let ComponentRefOfMaterialProgressComponent = () => (ComponentRefOfMaterialProgressComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent)))();
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponent*/get styles$MaterialProgressComponent() {
      return [material_progress__material_progress$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = dart.privateName(material_progress__material_progress$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_progress__material_progress$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_progress__material_progress$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_progress__material_progress$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_progress__material_progress$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_progress__material_progress$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_progress__material_progress$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_progress__material_progress$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_progress__material_progress$46template, "_expr_8");
  const _el_0 = dart.privateName(material_progress__material_progress$46template, "_el_0");
  const _el_1 = dart.privateName(material_progress__material_progress$46template, "_el_1");
  const _el_2 = dart.privateName(material_progress__material_progress$46template, "_el_2");
  material_progress__material_progress$46template.ViewMaterialProgressComponent0 = class ViewMaterialProgressComponent0 extends src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_progress/material_progress.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "progress-container");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "progressbar");
      this.addShimC(this[_el_0]);
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "secondary-progress");
      this.addShimC(this[_el_1]);
      this[_el_2] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "active-progress");
      this.addShimC(this[_el_2]);
      _ctx.primary = this[_el_2];
      _ctx.secondary = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaValue;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaValueNow;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-valuenow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.indeterminate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "indeterminate", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.useFallbackAnimation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "fallback", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__runtime__interpolate.interpolate0(_ctx.min);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-valuemin", core.String._check(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__runtime__interpolate.interpolate0(_ctx.max);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "aria-valuemax", core.String._check(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.activeAndSecondaryProgressValue;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.secondaryTransform;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_el_1].style[$setProperty]("transform", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.primaryTransform;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_el_2].style[$setProperty]("transform", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    initComponentStyles() {
      let styles = material_progress__material_progress$46template.ViewMaterialProgressComponent0._componentStyles;
      if (styles == null) {
        material_progress__material_progress$46template.ViewMaterialProgressComponent0._componentStyles = styles = material_progress__material_progress$46template.ViewMaterialProgressComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_progress__material_progress$46template.styles$MaterialProgressComponent, material_progress__material_progress$46template.ViewMaterialProgressComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_progress__material_progress$46template.ViewMaterialProgressComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-progress"));
  }).prototype = material_progress__material_progress$46template.ViewMaterialProgressComponent0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template.ViewMaterialProgressComponent0);
  dart.setMethodSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_progress__material_progress$46template.ViewMaterialProgressComponent0, {
    /*material_progress__material_progress$46template.ViewMaterialProgressComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template._MaterialProgressComponentNgFactory*/get _MaterialProgressComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialProgressComponent()).new("material-progress", dart.fn(material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0, AppViewAndintToAppViewOfMaterialProgressComponent())));
    }
  });
  dart.copyProperties(material_progress__material_progress$46template, {
    get MaterialProgressComponentNgFactory() {
      return material_progress__material_progress$46template._MaterialProgressComponentNgFactory;
    }
  });
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template.styles$MaterialProgressComponentHost*/get styles$MaterialProgressComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_progress__material_progress$46template, "_compView_0");
  const _MaterialProgressComponent_0_5 = dart.privateName(material_progress__material_progress$46template, "_MaterialProgressComponent_0_5");
  material_progress__material_progress$46template._ViewMaterialProgressComponentHost0 = class _ViewMaterialProgressComponentHost0 extends src__core__linker__app_view.AppView$(material_progress__material_progress.MaterialProgressComponent) {
    build() {
      this[_compView_0] = new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialProgressComponent_0_5] = new material_progress__material_progress.MaterialProgressComponent.new(null, this[_compView_0], this.rootEl);
      this[_compView_0].create(this[_MaterialProgressComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialProgressComponent()).new(0, this, this.rootEl, this[_MaterialProgressComponent_0_5]);
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
          this[_MaterialProgressComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialProgressComponent_0_5].ngOnDestroy();
    }
  };
  (material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialProgressComponent_0_5] = null;
    material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.prototype;
  dart.addTypeTests(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.setMethodSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getMethods(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_progress__material_progress.MaterialProgressComponent), [])
  }));
  dart.setFieldSignature(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getFields(material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_progress__material_progress$46template.ViewMaterialProgressComponent0),
    [_MaterialProgressComponent_0_5]: dart.fieldType(material_progress__material_progress.MaterialProgressComponent)
  }));
  material_progress__material_progress$46template.viewFactory_MaterialProgressComponentHost0 = function(parentView, parentIndex) {
    return new material_progress__material_progress$46template._ViewMaterialProgressComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_progress__material_progress$46template, {
    /*material_progress__material_progress$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_progress__material_progress$46template.initReflector = function() {
    if (dart.test(material_progress__material_progress$46template._visited)) {
      return;
    }
    material_progress__material_progress$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_progress__material_progress.MaterialProgressComponent), material_progress__material_progress$46template.MaterialProgressComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.template.ddc", {
    "package:angular_components/material_progress/material_progress.template.dart": material_progress__material_progress$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.template.dart"],"names":[],"mappings":"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","file":"material_progress.template.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46template: material_progress__material_progress$46template
  };
});

//# sourceMappingURL=material_progress.template.ddc.js.map
