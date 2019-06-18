define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular_components/model/ui/has_renderer.template'], function(dart_sdk, modules, change_detection, dynamic_component, angular, has_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const dynamic_component__dynamic_component = dynamic_component.dynamic_component__dynamic_component;
  const angular$46template = angular.angular$46template;
  const model__ui__has_renderer$46template = has_renderer.model__ui__has_renderer$46template;
  const dynamic_component__dynamic_component$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfDynamicComponent = () => (AppViewOfDynamicComponent = dart.constFn(src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent)))();
  let AppViewAndintToAppViewOfDynamicComponent = () => (AppViewAndintToAppViewOfDynamicComponent = dart.constFn(dart.fnType(AppViewOfDynamicComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDynamicComponent = () => (ComponentFactoryOfDynamicComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(dynamic_component__dynamic_component.DynamicComponent)))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component__dynamic_component.DynamicComponent, [])))();
  let ComponentRefOfDynamicComponent = () => (ComponentRefOfDynamicComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent)))();
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template.styles$DynamicComponent*/get styles$DynamicComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = dart.privateName(dynamic_component__dynamic_component$46template, "_appEl_0");
  const _TemplateRef_0_8 = dart.privateName(dynamic_component__dynamic_component$46template, "_TemplateRef_0_8");
  dynamic_component__dynamic_component$46template.ViewDynamicComponent0 = class ViewDynamicComponent0 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/dynamic_component/dynamic_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(dynamic_component__dynamic_component$46template.viewFactory_DynamicComponent1, AppViewAndintToAppViewOfvoid()));
      _ctx.viewContainerRef = this[_appEl_0];
      this.init0();
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = dynamic_component__dynamic_component$46template.ViewDynamicComponent0._componentStyles;
      if (styles == null) {
        dynamic_component__dynamic_component$46template.ViewDynamicComponent0._componentStyles = styles = dynamic_component__dynamic_component$46template.ViewDynamicComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(dynamic_component__dynamic_component$46template.styles$DynamicComponent, dynamic_component__dynamic_component$46template.ViewDynamicComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("dynamic-component"));
  }).prototype = dynamic_component__dynamic_component$46template.ViewDynamicComponent0.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template.ViewDynamicComponent0);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getFields(dynamic_component__dynamic_component$46template.ViewDynamicComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_0_8]: dart.fieldType(src__core__linker__template_ref.TemplateRef)
  }));
  dart.defineLazy(dynamic_component__dynamic_component$46template.ViewDynamicComponent0, {
    /*dynamic_component__dynamic_component$46template.ViewDynamicComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template._DynamicComponentNgFactory*/get _DynamicComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDynamicComponent()).new("dynamic-component", dart.fn(dynamic_component__dynamic_component$46template.viewFactory_DynamicComponentHost0, AppViewAndintToAppViewOfDynamicComponent())));
    }
  });
  dart.copyProperties(dynamic_component__dynamic_component$46template, {
    get DynamicComponentNgFactory() {
      return dynamic_component__dynamic_component$46template._DynamicComponentNgFactory;
    }
  });
  dynamic_component__dynamic_component$46template._ViewDynamicComponent1 = class _ViewDynamicComponent1 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    build() {
      this.init0();
    }
  };
  (dynamic_component__dynamic_component$46template._ViewDynamicComponent1.new = function(parentView, parentIndex) {
    dynamic_component__dynamic_component$46template._ViewDynamicComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = dynamic_component__dynamic_component$46template._ViewDynamicComponent1.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template._ViewDynamicComponent1);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponent1, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template._ViewDynamicComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), [])
  }));
  dynamic_component__dynamic_component$46template.viewFactory_DynamicComponent1 = function(parentView, parentIndex) {
    return new dynamic_component__dynamic_component$46template._ViewDynamicComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template.styles$DynamicComponentHost*/get styles$DynamicComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(dynamic_component__dynamic_component$46template, "_compView_0");
  const _DynamicComponent_0_8 = dart.privateName(dynamic_component__dynamic_component$46template, "_DynamicComponent_0_8");
  dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0 = class _ViewDynamicComponentHost0 extends src__core__linker__app_view.AppView$(dynamic_component__dynamic_component.DynamicComponent) {
    build() {
      this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_DynamicComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0]);
      return new (ComponentRefOfDynamicComponent()).new(0, this, this.rootEl, this[_DynamicComponent_0_8]);
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.prototype;
  dart.addTypeTests(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0);
  dart.setMethodSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getMethods(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(dynamic_component__dynamic_component.DynamicComponent), [])
  }));
  dart.setFieldSignature(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getFields(dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent)
  }));
  dynamic_component__dynamic_component$46template.viewFactory_DynamicComponentHost0 = function(parentView, parentIndex) {
    return new dynamic_component__dynamic_component$46template._ViewDynamicComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(dynamic_component__dynamic_component$46template, {
    /*dynamic_component__dynamic_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dynamic_component__dynamic_component$46template.initReflector = function() {
    if (dart.test(dynamic_component__dynamic_component$46template._visited)) {
      return;
    }
    dynamic_component__dynamic_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dynamic_component__dynamic_component$46template.DynamicComponentNgFactory);
    angular$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component.template.ddc", {
    "package:angular_components/dynamic_component/dynamic_component.template.dart": dynamic_component__dynamic_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuBoB,uEAAuB;YAAG;;;;;;;AAW1C,YAAQ,WAAQ,qCAAS,IAAG,0EAA0E;IACxG;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,4BAAgB,OAAG,+CAAW,CAAC,cAAQ,EAAE,sHAA6B;AACtE,UAAI,iBAAiB,GAAG,cAAQ;AAChC,gBAAK;IACP;;AAIE,oBAAQ,2BAA2B;IACrC;;AAIE,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,sFAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,sFAAgB,GAAI,MAAM,GAAI,sFAAgB,GAAG,+DAAgC,CAAC,uEAAuB,EAAE,wFAAkB;;AAEhI,0BAAe,GAAG,MAAM;IAC1B;;wFArCsB,UAA2B,EAAE,WAAe;IAHpD,cAAQ;IACV,sBAAgB;AAE0C,mGAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,sFAAgB;;;;;;MAyCA,0EAA0B;YAAG,gBAAM,0CAAgB,CAAC,qBAAqB,sIAAiC;;;;;AAEzJ,YAAO,2EAA0B;IACnC;;;;AAQI,gBAAK;IACP;;yFANuB,UAA2B,EAAE,WAAe;AAAI,oGAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClK,4BAAmB;EACrB;;;;;;2FAO0C,UAA2B,EAAE,WAAe;AACtF,eAAO,0EAAsB,CAAC,UAAU,EAAE,WAAW;EACvD;;MAEoB,2EAA2B;YAAG;;;;;;;AAS9C,uBAAW,OAAG,yEAAqB,CAAC,MAAM;AAC1C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,WAAM;AAC9C,iCAAqB,GAAI,UAAQ,qCAAS,IACpC,AAAS,iCAAiB,wDAAS,oEAAgB,EAAE,kBAC5C,yDAAwB,wEAAC,gBAAgB,CAAU,8EAAmB,EAAE,aAAQ,YAAY,IAAG,iBAAW,EAAE,cAAQ,oCAE7H,yDAAwB,wEAAC,gBAAgB,CAAU,8EAAmB,EAAE,aAAQ,YAAY,IAAG,iBAAW,EAAE,cAAQ;AAC1H,uBAAW,OAAO,CAAC,2BAAqB,EAAE,mBAAc;AACxD,gBAAK,CAAC,cAAQ;AACd,iBAAO,sCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,2BAAqB;IAC5D;;AAIE,oBAAQ,2BAA2B;AACnC,uBAAW,cAAc;IAC3B;;AAIE,oBAAQ,mBAAmB;AAC3B,uBAAW,qBAAqB;AAChC,iCAAqB,YAAY;IACnC;;6FA3B2B,UAA2B,EAAE,WAAe;IAHjD,iBAAW;IACnB,cAAQ;IACG,2BAAqB;AAC6B,wGAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;+FA8BnG,UAA2B,EAAE,WAAe;AAC9G,eAAO,8EAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAO,oCAAiB,CAAC,oEAAgB,EAAE,yEAAyB;AACpE,IAAM,gCAAa;AACnB,IAAM,gDAAa;EACrB","file":"dynamic_component.template.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component$46template: dynamic_component__dynamic_component$46template
  };
});

//# sourceMappingURL=dynamic_component.template.ddc.js.map
