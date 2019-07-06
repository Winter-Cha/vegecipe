define(['dart_sdk', 'packages/angular_components/material_slider/material_slider.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template'], function(dart_sdk, material_slider$46scss$46css, modules, change_detection, interpolate, material_slider, dom_service, has_disabled, angular, has_disabled$, dom_service$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_slider__material_slider$46scss$46css$46shim = material_slider$46scss$46css.material_slider__material_slider$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_slider__material_slider = material_slider.material_slider__material_slider;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const material_slider__material_slider$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let AppViewOfMaterialSliderComponent = () => (AppViewOfMaterialSliderComponent = dart.constFn(src__core__linker__app_view.AppView$(material_slider__material_slider.MaterialSliderComponent)))();
  let AppViewAndintToAppViewOfMaterialSliderComponent = () => (AppViewAndintToAppViewOfMaterialSliderComponent = dart.constFn(dart.fnType(AppViewOfMaterialSliderComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSliderComponent = () => (ComponentFactoryOfMaterialSliderComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_slider__material_slider.MaterialSliderComponent)))();
  let VoidToMaterialSliderComponent = () => (VoidToMaterialSliderComponent = dart.constFn(dart.fnType(material_slider__material_slider.MaterialSliderComponent, [])))();
  let ComponentRefOfMaterialSliderComponent = () => (ComponentRefOfMaterialSliderComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_slider__material_slider.MaterialSliderComponent)))();
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template.styles$MaterialSliderComponent*/get styles$MaterialSliderComponent() {
      return [material_slider__material_slider$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = dart.privateName(material_slider__material_slider$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_slider__material_slider$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_slider__material_slider$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_slider__material_slider$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_slider__material_slider$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_slider__material_slider$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_slider__material_slider$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_slider__material_slider$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_slider__material_slider$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_slider__material_slider$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_slider__material_slider$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_slider__material_slider$46template, "_expr_11");
  const _el_0 = dart.privateName(material_slider__material_slider$46template, "_el_0");
  const _el_1 = dart.privateName(material_slider__material_slider$46template, "_el_1");
  const _el_3 = dart.privateName(material_slider__material_slider$46template, "_el_3");
  const _el_6 = dart.privateName(material_slider__material_slider$46template, "_el_6");
  const _el_7 = dart.privateName(material_slider__material_slider$46template, "_el_7");
  material_slider__material_slider$46template.ViewMaterialSliderComponent0 = class ViewMaterialSliderComponent0 extends src__core__linker__app_view.AppView$(material_slider__material_slider.MaterialSliderComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_slider/material_slider.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "container");
      this.addShimC(this[_el_0]);
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "track-container left-track-container");
      this.addShimC(this[_el_1]);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(_el_2, "track");
      this.addShimC(_el_2);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_3], "knob");
      src__runtime__dom_helpers.setAttribute(this[_el_3], "role", "slider");
      this.addShimC(this[_el_3]);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "knob-real");
      this.addShimC(_el_4);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_5, "knob-hover-shadow");
      this.addShimC(_el_5);
      this[_el_6] = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(this[_el_6], "knob-drag-shadow");
      this.addShimC(this[_el_6]);
      this[_el_7] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_7], "track-container right-track-container");
      this.addShimC(this[_el_7]);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, this[_el_7]);
      this.updateChildClass(_el_8, "track");
      this.addShimC(_el_8);
      this[_el_0][$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'mouseDown')));
      this[_el_0][$addEventListener]("touchstart", this.eventHandler1(html.Event, html.TouchEvent, dart.bind(_ctx, 'touchStart')));
      this[_el_3][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'knobKeyDown')));
      _ctx.container = this[_el_0];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "is-disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.progressPercent;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_el_1].style[$setProperty]("width", currVal_1 == null ? null : dart.toString(currVal_1) + "%");
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? 0 - 1 : 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "tabindex", currVal_2[$toString]());
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isRtl) ? 0 : 0 - 8;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_el_3].style[$setProperty]("margin-left", currVal_3 === null ? null : currVal_3[$toString]() + "px");
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.isRtl) ? 0 - 8 : 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_el_3].style[$setProperty]("margin-right", currVal_4 === null ? null : currVal_4[$toString]() + "px");
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.min;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "aria-valuemin", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.max;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "aria-valuemax", currVal_6 == null ? null : dart.toString(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "aria-valuenow", currVal_7 == null ? null : dart.toString(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.isDragging;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_6], "is-dragging", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = src__runtime__interpolate.interpolate1("calc(", 100 - dart.notNull(_ctx.progressPercent), "% + 8px)");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_el_7].style[$setProperty]("width", currVal_9);
        this[_expr_9] = currVal_9;
      }
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_10 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_10 == null ? null : dart.toString(currVal_10));
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
    initComponentStyles() {
      let styles = material_slider__material_slider$46template.ViewMaterialSliderComponent0._componentStyles;
      if (styles == null) {
        material_slider__material_slider$46template.ViewMaterialSliderComponent0._componentStyles = styles = material_slider__material_slider$46template.ViewMaterialSliderComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_slider__material_slider$46template.styles$MaterialSliderComponent, material_slider__material_slider$46template.ViewMaterialSliderComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_slider__material_slider$46template.ViewMaterialSliderComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-slider"));
  }).prototype = material_slider__material_slider$46template.ViewMaterialSliderComponent0.prototype;
  dart.addTypeTests(material_slider__material_slider$46template.ViewMaterialSliderComponent0);
  dart.setMethodSignature(material_slider__material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getMethods(material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_slider__material_slider.MaterialSliderComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_slider__material_slider$46template.ViewMaterialSliderComponent0, "package:angular_components/material_slider/material_slider.template.dart");
  dart.setFieldSignature(material_slider__material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getFields(material_slider__material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_slider__material_slider$46template.ViewMaterialSliderComponent0, {
    /*material_slider__material_slider$46template.ViewMaterialSliderComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template._MaterialSliderComponentNgFactory*/get _MaterialSliderComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSliderComponent()).new("material-slider", dart.fn(material_slider__material_slider$46template.viewFactory_MaterialSliderComponentHost0, AppViewAndintToAppViewOfMaterialSliderComponent())));
    }
  });
  dart.copyProperties(material_slider__material_slider$46template, {
    get MaterialSliderComponentNgFactory() {
      return material_slider__material_slider$46template._MaterialSliderComponentNgFactory;
    }
  });
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template.styles$MaterialSliderComponentHost*/get styles$MaterialSliderComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_slider__material_slider$46template, "_compView_0");
  const _MaterialSliderComponent_0_5 = dart.privateName(material_slider__material_slider$46template, "_MaterialSliderComponent_0_5");
  material_slider__material_slider$46template._ViewMaterialSliderComponentHost0 = class _ViewMaterialSliderComponentHost0 extends src__core__linker__app_view.AppView$(material_slider__material_slider.MaterialSliderComponent) {
    build() {
      this[_compView_0] = new material_slider__material_slider$46template.ViewMaterialSliderComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSliderComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_slider__material_slider.MaterialSliderComponent, dart.wrapType(material_slider__material_slider.MaterialSliderComponent), dart.fn(() => new material_slider__material_slider.MaterialSliderComponent.new(this[_compView_0], utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToMaterialSliderComponent())) : new material_slider__material_slider.MaterialSliderComponent.new(this[_compView_0], utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialSliderComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSliderComponent()).new(0, this, this.rootEl, this[_MaterialSliderComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_slider__material_slider.MaterialSliderComponent) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialSliderComponent_0_5];
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
  (material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSliderComponent_0_5] = null;
    material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.prototype;
  dart.addTypeTests(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0);
  dart.setMethodSignature(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getMethods(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_slider__material_slider.MaterialSliderComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0, "package:angular_components/material_slider/material_slider.template.dart");
  dart.setFieldSignature(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getFields(material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_slider__material_slider$46template.ViewMaterialSliderComponent0),
    [_MaterialSliderComponent_0_5]: dart.fieldType(material_slider__material_slider.MaterialSliderComponent)
  }));
  material_slider__material_slider$46template.viewFactory_MaterialSliderComponentHost0 = function(parentView, parentIndex) {
    return new material_slider__material_slider$46template._ViewMaterialSliderComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_slider__material_slider$46template, {
    /*material_slider__material_slider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_slider__material_slider$46template.initReflector = function() {
    if (dart.test(material_slider__material_slider$46template._visited)) {
      return;
    }
    material_slider__material_slider$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_slider__material_slider.MaterialSliderComponent), material_slider__material_slider$46template.MaterialSliderComponentNgFactory);
    angular$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.template.ddc", {
    "package:angular_components/material_slider/material_slider.template.dart": material_slider__material_slider$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA0BoB,0EAA8B;YAAG,EAAS,2DAAM;;;;;;;;;;;;;;;;;;;;;;AA0BhE,YAAQ,WAAQ,qCAAS,IAAG,sEAAsE;IACpG;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AAC/C,2BAAqB,CAAC,WAAK,EAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AACpC,2BAAqB,CAAC,WAAK,EAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AACpC,2BAAqB,CAAC,WAAK,EAAE;AAC7B,MAAQ,sCAAY,CAAC,WAAK,EAAE,QAAQ;AACpC,mBAAQ,CAAC,WAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AACpC,2BAAqB,CAAC,WAAK,EAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AACpC,2BAAqB,CAAC,WAAK,EAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,WAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,iBAAK,mBAAiB,CAAC,aAAa,kBAAa,wCAAC,IAAI;AACtD,iBAAK,mBAAiB,CAAC,cAAc,kBAAa,wCAAC,IAAI;AACvD,iBAAK,mBAAiB,CAAC,WAAW,kBAAa,2CAAC,IAAI;AACpD,UAAI,UAAU,GAAG,WAAK;AACtB,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,4CAAkB,CAAC,WAAK,EAAE,eAAe,SAAS;AAC1D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,gBAAgB;AACtC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,mBAAK,MAAM,cAAY,CAAC,SAAU,AAAC,SAAS,IAAI,OAAQ,OAA6B,cAArB,SAAS,IAAc;AACvF,qBAAO,GAAG,SAAS;;AAErB,UAAM,sBAAa,IAAI,SAAS,IAAI,AAAE,IAAE,IAAK;AAC7C,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,WAAK,EAAE,YAAY,SAAS,WAAU;AAC9D,qBAAO,GAAG,SAAS;;AAErB,UAAM,sBAAa,IAAI,MAAM,IAAG,IAAK,AAAE,IAAE;AACzC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,mBAAK,MAAM,cAAY,CAAC,eAAgB,AAAC,SAAS,KAAI,OAAQ,OAAQ,AAAqB,SAAZ,WAAS,KAAK;AAC7F,qBAAO,GAAG,SAAS;;AAErB,UAAM,sBAAa,IAAI,MAAM,IAAI,AAAE,IAAE,IAAK;AAC1C,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,mBAAK,MAAM,cAAY,CAAC,gBAAiB,AAAC,SAAS,KAAI,OAAQ,OAAQ,AAAqB,SAAZ,WAAS,KAAK;AAC9F,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,WAAK,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AACzD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,WAAK,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AACzD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,WAAK,EAAE,iBAAiB,SAAS,gCAAT,SAAS;AACzD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,WAAW;AACjC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,4CAAkB,CAAC,WAAK,EAAE,eAAe,SAAS;AAC1D,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,AAAS,sCAAY,CAAC,SAAU,AAAI,mBAAE,IAAI,gBAAgB,GAAG;AAC/E,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,mBAAK,MAAM,cAAY,CAAC,SAAS,SAAS;AAC1C,qBAAO,GAAG,SAAS;;IAEvB;sBAEuB,UAAe;AACpC,UAAM,OAAO,QAAG;AAChB,UAAM,aAAa,IAAI,SAAS;AAChC,oBAAI,AAAS,8CAAY,CAAC,cAAQ,EAAE,UAAU,IAAG;AAC/C,QAAQ,yCAAe,CAAC,WAAM,EAAE,iBAAiB,UAAU,gCAAV,UAAU;AAC3D,sBAAQ,GAAG,UAAU;;AAEvB,UAAM,aAAa,IAAI,SAAS;AAChC,oBAAI,AAAS,8CAAY,CAAC,cAAQ,EAAE,UAAU,IAAG;AAC/C,QAAQ,mDAAyB,CAAC,WAAM,EAAE,eAAe,UAAU;AACnE,sBAAQ,GAAG,UAAU;;IAEzB;;AAIE,UAAI,SAAS,yFAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,yFAAgB,GAAI,MAAM,GAAI,yFAAgB,GAAG,6DAA8B,CAAC,0EAA8B,EAAE,2FAAkB;;AAErI,0BAAe,GAAG,MAAM;IAC1B;;2FA7H6B,UAA2B,EAAE,WAAe;IAlBpE,aAAO;IACR,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACN,aAAO;IACR,aAAO;IACP,cAAQ;IACP,cAAQ;IACM,WAAK;IACL,WAAK;IACL,WAAK;IACL,WAAK;IACL,WAAK;AAEqD,sGAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJ+B,yFAAgB;;;;;;MAiIO,6EAAiC;YAAG,gBAAM,iDAAgB,CAAC,mBAAmB,gJAAwC;;;;;AAE5K,YAAO,8EAAiC;IAC1C;;;MAEoB,8EAAkC;YAAG;;;;;;;AAQrD,uBAAW,OAAG,4EAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,GAAI,UAAQ,qCAAS,IAC3C,AAAS,iCAAiB,2DAAS,uEAAuB,EAAE,kBACnD,4DAA+B,CAAC,iBAAW,6DAAE,gBAAgB,CAAU,kEAAU,EAAE,aAAQ,YAAY,6CAEhH,4DAA+B,CAAC,iBAAW,6DAAE,gBAAgB,CAAU,kEAAU,EAAE,aAAQ,YAAY;AAC7G,uBAAW,OAAO,CAAC,kCAA4B,EAAE,mBAAc;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,WAAM,AAAU,KAAK,KAAU,uEAAuB,IAAK,AAAU,KAAK,KAAW,mDAAW,KAAO,MAAK,SAAS,EAAI;AACvH,cAAO,mCAA4B;;AAErC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;gGArCkC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,kCAA4B;AACsB,2GAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;kGAwC5F,UAA2B,EAAE,WAAe;AAC5H,eAAO,iFAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAO,oCAAiB,CAAC,uEAAuB,EAAE,4EAAgC;AAClF,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,iEAAa;EACrB","file":"material_slider.template.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider$46template: material_slider__material_slider$46template
  };
});

//# sourceMappingURL=material_slider.template.ddc.js.map
