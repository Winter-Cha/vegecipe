define(['dart_sdk', 'packages/angular_components/material_icon/material_icon.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, material_icon$46scss$46css, text_binding, modules, change_detection, interpolate, material_icon, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_icon__material_icon$46scss$46css$46shim = material_icon$46scss$46css.material_icon__material_icon$46scss$46css$46shim;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_icon__material_icon = material_icon.material_icon__material_icon;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const material_icon__material_icon$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let AppViewOfMaterialIconComponent = () => (AppViewOfMaterialIconComponent = dart.constFn(src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent)))();
  let AppViewAndintToAppViewOfMaterialIconComponent = () => (AppViewAndintToAppViewOfMaterialIconComponent = dart.constFn(dart.fnType(AppViewOfMaterialIconComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialIconComponent = () => (ComponentFactoryOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_icon__material_icon.MaterialIconComponent)))();
  let ComponentRefOfMaterialIconComponent = () => (ComponentRefOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent)))();
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponent*/get styles$MaterialIconComponent() {
      return [material_icon__material_icon$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_2 = dart.privateName(material_icon__material_icon$46template, "_textBinding_2");
  material_icon__material_icon$46template.ViewMaterialIconComponent0 = class ViewMaterialIconComponent0 extends src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_icon/material_icon.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "i");
      src__runtime__dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClass(html.HtmlElement._check(_el_1), "material-icon-i material-icons");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(_ctx.iconName));
    }
    initComponentStyles() {
      let styles = material_icon__material_icon$46template.ViewMaterialIconComponent0._componentStyles;
      if (styles == null) {
        material_icon__material_icon$46template.ViewMaterialIconComponent0._componentStyles = styles = material_icon__material_icon$46template.ViewMaterialIconComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_icon__material_icon$46template.styles$MaterialIconComponent, material_icon__material_icon$46template.ViewMaterialIconComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_icon__material_icon$46template.ViewMaterialIconComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-icon"));
  }).prototype = material_icon__material_icon$46template.ViewMaterialIconComponent0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template.ViewMaterialIconComponent0);
  dart.setMethodSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_icon__material_icon$46template.ViewMaterialIconComponent0, "package:angular_components/material_icon/material_icon.template.dart");
  dart.setFieldSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  dart.defineLazy(material_icon__material_icon$46template.ViewMaterialIconComponent0, {
    /*material_icon__material_icon$46template.ViewMaterialIconComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template._MaterialIconComponentNgFactory*/get _MaterialIconComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialIconComponent()).new("material-icon", dart.fn(material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0, AppViewAndintToAppViewOfMaterialIconComponent())));
    }
  });
  dart.copyProperties(material_icon__material_icon$46template, {
    get MaterialIconComponentNgFactory() {
      return material_icon__material_icon$46template._MaterialIconComponentNgFactory;
    }
  });
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponentHost*/get styles$MaterialIconComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_icon__material_icon$46template, "_compView_0");
  const _MaterialIconComponent_0_5 = dart.privateName(material_icon__material_icon$46template, "_MaterialIconComponent_0_5");
  material_icon__material_icon$46template._ViewMaterialIconComponentHost0 = class _ViewMaterialIconComponentHost0 extends src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialIconComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialIconComponent()).new(0, this, this.rootEl, this[_MaterialIconComponent_0_5]);
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
    }
  };
  (material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_icon__material_icon$46template._ViewMaterialIconComponentHost0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template._ViewMaterialIconComponentHost0);
  dart.setMethodSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent), [])
  }));
  dart.setLibraryUri(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, "package:angular_components/material_icon/material_icon.template.dart");
  dart.setFieldSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0 = function(parentView, parentIndex) {
    return new material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_icon__material_icon$46template.initReflector = function() {
    if (dart.test(material_icon__material_icon$46template._visited)) {
      return;
    }
    material_icon__material_icon$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_icon__material_icon.MaterialIconComponent), material_icon__material_icon$46template.MaterialIconComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.template.ddc", {
    "package:angular_components/material_icon/material_icon.template.dart": material_icon__material_icon$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsBoB,oEAA4B;YAAG,EAAS,uDAAM;;;;;;AAU9D,YAAQ,WAAQ,qCAAS,IAAG,kEAAkE;IAChG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,UAAU,AAAS,oCAAU,CAAC,gBAAgB,EAAE;AACtD,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AAC5D,MAAS,sCAAY,CAAC,KAAK,EAAE,eAAe;AAC5C,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS;IACrE;;AAIE,UAAI,SAAS,mFAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,mFAAgB,GAAI,MAAM,GAAI,mFAAgB,GAAG,6DAA8B,CAAC,oEAA4B,EAAE,qFAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;qFAnC2B,UAA2B,EAAE,WAAe;IAF7C,oBAAc,OAAG,0CAAmB;AAEa,gGAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACrK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,mFAAgB;;;;;;MAuCK,uEAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,wIAAsC;;;;;AAEpK,YAAO,wEAA+B;IACxC;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,OAAG,sEAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,OAAG,sDAA6B,CAAC,WAAM;AACjE,uBAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;0FAvBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;4FA0B9F,UAA2B,EAAE,WAAe;AACxH,eAAO,2EAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"material_icon.template.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon$46template: material_icon__material_icon$46template
  };
});

//# sourceMappingURL=material_icon.template.ddc.js.map
