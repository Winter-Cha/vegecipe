define(['dart_sdk', 'packages/angular_components/material_spinner/material_spinner.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/angular.template'], function(dart_sdk, material_spinner$46scss$46css, modules, change_detection, material_spinner, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_spinner__material_spinner$46scss$46css$46shim = material_spinner$46scss$46css.material_spinner__material_spinner$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_spinner__material_spinner = material_spinner.material_spinner__material_spinner;
  const angular$46template = angular.angular$46template;
  const material_spinner__material_spinner$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfMaterialSpinnerComponent = () => (AppViewOfMaterialSpinnerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let AppViewAndintToAppViewOfMaterialSpinnerComponent = () => (AppViewAndintToAppViewOfMaterialSpinnerComponent = dart.constFn(dart.fnType(AppViewOfMaterialSpinnerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialSpinnerComponent = () => (ComponentFactoryOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  let ComponentRefOfMaterialSpinnerComponent = () => (ComponentRefOfMaterialSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent)))();
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent*/get styles$MaterialSpinnerComponent() {
      return [material_spinner__material_spinner$46scss$46css$46shim.styles];
    }
  });
  material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0 = class ViewMaterialSpinnerComponent0 extends src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_spinner/material_spinner.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "spinner");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "circle left");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "circle right");
      this.addShimC(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "circle gap");
      this.addShimC(_el_3);
      this.init0();
    }
    initComponentStyles() {
      let styles = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles;
      if (styles == null) {
        material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = styles = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_spinner__material_spinner$46template.styles$MaterialSpinnerComponent, material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new = function(parentView, parentIndex) {
    material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-spinner"));
  }).prototype = material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.setMethodSignature(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.defineLazy(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0, {
    /*material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template._MaterialSpinnerComponentNgFactory*/get _MaterialSpinnerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSpinnerComponent()).new("material-spinner", dart.fn(material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, AppViewAndintToAppViewOfMaterialSpinnerComponent())));
    }
  });
  dart.copyProperties(material_spinner__material_spinner$46template, {
    get MaterialSpinnerComponentNgFactory() {
      return material_spinner__material_spinner$46template._MaterialSpinnerComponentNgFactory;
    }
  });
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template.styles$MaterialSpinnerComponentHost*/get styles$MaterialSpinnerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_spinner__material_spinner$46template, "_compView_0");
  const _MaterialSpinnerComponent_0_5 = dart.privateName(material_spinner__material_spinner$46template, "_MaterialSpinnerComponent_0_5");
  material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0 = class _ViewMaterialSpinnerComponentHost0 extends src__core__linker__app_view.AppView$(material_spinner__material_spinner.MaterialSpinnerComponent) {
    build() {
      this[_compView_0] = new material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSpinnerComponent_0_5] = new material_spinner__material_spinner.MaterialSpinnerComponent.new();
      this[_compView_0].create(this[_MaterialSpinnerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSpinnerComponent()).new(0, this, this.rootEl, this[_MaterialSpinnerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSpinnerComponent_0_5] = null;
    material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.prototype;
  dart.addTypeTests(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.setMethodSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getMethods(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_spinner__material_spinner.MaterialSpinnerComponent), [])
  }));
  dart.setFieldSignature(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getFields(material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_spinner__material_spinner$46template.ViewMaterialSpinnerComponent0),
    [_MaterialSpinnerComponent_0_5]: dart.fieldType(material_spinner__material_spinner.MaterialSpinnerComponent)
  }));
  material_spinner__material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0 = function(parentView, parentIndex) {
    return new material_spinner__material_spinner$46template._ViewMaterialSpinnerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_spinner__material_spinner$46template, {
    /*material_spinner__material_spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_spinner__material_spinner$46template.initReflector = function() {
    if (dart.test(material_spinner__material_spinner$46template._visited)) {
      return;
    }
    material_spinner__material_spinner$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_spinner__material_spinner.MaterialSpinnerComponent), material_spinner__material_spinner$46template.MaterialSpinnerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_spinner/material_spinner.template.ddc", {
    "package:angular_components/material_spinner/material_spinner.template.dart": material_spinner__material_spinner$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_spinner.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MAmBoB,6EAA+B;YAAG,EAAS,6DAAM;;;;;AASjE,YAAQ,WAAQ,qCAAS,IAAG,wEAAwE;IACtG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,gBAAK;IACP;;AAIE,UAAI,SAAS,4FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,4FAAgB,GAAI,MAAM,GAAI,4FAAgB,GAAG,6DAA8B,CAAC,6EAA+B,EAAE,8FAAkB;;AAEtI,0BAAe,GAAG,MAAM;IAC1B;;8FAnC8B,UAA2B,EAAE,WAAe;AAAI,yGAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACxK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;MAJ+B,4FAAgB;;;;;;MAuCQ,gFAAkC;YAAG,gBAAM,kDAAgB,CAAC,oBAAoB,oJAAyC;;;;;AAEhL,YAAO,iFAAkC;IAC3C;;;MAEoB,iFAAmC;YAAG;;;;;;;AAQtD,uBAAW,OAAG,+EAA6B,CAAC,MAAM;AAClD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,yCAA6B,OAAG,+DAAgC;AAChE,uBAAW,OAAO,CAAC,mCAA6B,EAAE,mBAAc;AAChE,gBAAK,CAAC,WAAM;AACZ,iBAAO,8CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IACpE;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;mGAnBmC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,mCAA6B;AACqB,8GAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;qGAsB3F,UAA2B,EAAE,WAAe;AAC9H,eAAO,oFAAkC,CAAC,UAAU,EAAE,WAAW;EACnE;;MAEI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,oCAAiB,CAAC,0EAAwB,EAAE,+EAAiC;AACpF,IAAM,gCAAa;EACrB","file":"material_spinner.template.ddc.js"}');
  // Exports:
  return {
    material_spinner__material_spinner$46template: material_spinner__material_spinner$46template
  };
});

//# sourceMappingURL=material_spinner.template.ddc.js.map
