define(['dart_sdk', 'packages/angular_components/glyph/glyph.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, glyph$46scss$46css, text_binding, modules, change_detection, interpolate, glyph, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const glyph__glyph$46scss$46css$46shim = glyph$46scss$46css.glyph__glyph$46scss$46css$46shim;
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
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const glyph__glyph = glyph.glyph__glyph;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const glyph__glyph$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let AppViewOfGlyphComponent = () => (AppViewOfGlyphComponent = dart.constFn(src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent)))();
  let AppViewAndintToAppViewOfGlyphComponent = () => (AppViewAndintToAppViewOfGlyphComponent = dart.constFn(dart.fnType(AppViewOfGlyphComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfGlyphComponent = () => (ComponentFactoryOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(glyph__glyph.GlyphComponent)))();
  let ComponentRefOfGlyphComponent = () => (ComponentRefOfGlyphComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent)))();
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponent*/get styles$GlyphComponent() {
      return [glyph__glyph$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_2 = dart.privateName(glyph__glyph$46template, "_textBinding_2");
  const _expr_0 = dart.privateName(glyph__glyph$46template, "_expr_0");
  const _el_1 = dart.privateName(glyph__glyph$46template, "_el_1");
  glyph__glyph$46template.ViewGlyphComponent0 = class ViewGlyphComponent0 extends src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/glyph/glyph.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "i");
      src__runtime__dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClass(html.HtmlElement._check(this[_el_1]), "glyph-i");
      this.addShimE(this[_el_1]);
      this[_el_1][$append](this[_textBinding_2].element);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.useMaterialIconsExtended;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_1]), "material-icons", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(_ctx.iconName));
    }
    initComponentStyles() {
      let styles = glyph__glyph$46template.ViewGlyphComponent0._componentStyles;
      if (styles == null) {
        glyph__glyph$46template.ViewGlyphComponent0._componentStyles = styles = glyph__glyph$46template.ViewGlyphComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(glyph__glyph$46template.styles$GlyphComponent, glyph__glyph$46template.ViewGlyphComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (glyph__glyph$46template.ViewGlyphComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_1] = null;
    glyph__glyph$46template.ViewGlyphComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("glyph"));
  }).prototype = glyph__glyph$46template.ViewGlyphComponent0.prototype;
  dart.addTypeTests(glyph__glyph$46template.ViewGlyphComponent0);
  dart.setMethodSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(glyph__glyph$46template.ViewGlyphComponent0, "package:angular_components/glyph/glyph.template.dart");
  dart.setFieldSignature(glyph__glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template.ViewGlyphComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_expr_0]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(glyph__glyph$46template.ViewGlyphComponent0, {
    /*glyph__glyph$46template.ViewGlyphComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template._GlyphComponentNgFactory*/get _GlyphComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGlyphComponent()).new("glyph", dart.fn(glyph__glyph$46template.viewFactory_GlyphComponentHost0, AppViewAndintToAppViewOfGlyphComponent())));
    }
  });
  dart.copyProperties(glyph__glyph$46template, {
    get GlyphComponentNgFactory() {
      return glyph__glyph$46template._GlyphComponentNgFactory;
    }
  });
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template.styles$GlyphComponentHost*/get styles$GlyphComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(glyph__glyph$46template, "_compView_0");
  const _GlyphComponent_0_5 = dart.privateName(glyph__glyph$46template, "_GlyphComponent_0_5");
  glyph__glyph$46template._ViewGlyphComponentHost0 = class _ViewGlyphComponentHost0 extends src__core__linker__app_view.AppView$(glyph__glyph.GlyphComponent) {
    build() {
      this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(this.rootEl);
      this[_compView_0].create(this[_GlyphComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfGlyphComponent()).new(0, this, this.rootEl, this[_GlyphComponent_0_5]);
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
  (glyph__glyph$46template._ViewGlyphComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    glyph__glyph$46template._ViewGlyphComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = glyph__glyph$46template._ViewGlyphComponentHost0.prototype;
  dart.addTypeTests(glyph__glyph$46template._ViewGlyphComponentHost0);
  dart.setMethodSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getMethods(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(glyph__glyph.GlyphComponent), [])
  }));
  dart.setLibraryUri(glyph__glyph$46template._ViewGlyphComponentHost0, "package:angular_components/glyph/glyph.template.dart");
  dart.setFieldSignature(glyph__glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getFields(glyph__glyph$46template._ViewGlyphComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
    [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
  }));
  glyph__glyph$46template.viewFactory_GlyphComponentHost0 = function(parentView, parentIndex) {
    return new glyph__glyph$46template._ViewGlyphComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(glyph__glyph$46template, {
    /*glyph__glyph$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  glyph__glyph$46template.initReflector = function() {
    if (dart.test(glyph__glyph$46template._visited)) {
      return;
    }
    glyph__glyph$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(glyph__glyph.GlyphComponent), glyph__glyph$46template.GlyphComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/glyph/glyph.template.ddc", {
    "package:angular_components/glyph/glyph.template.dart": glyph__glyph$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["glyph.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuBoB,6CAAqB;YAAG,EAAS,uCAAM;;;;;;;;AAYvD,YAAQ,WAAQ,qCAAS,IAAG,kDAAkD;IAChF;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,UAAU,AAAS,oCAAU,CAAC,gBAAgB,EAAE;AACtD,UAAM,MAAc,aAAQ;AAC5B,iBAAK,GAAG,AAAS,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AACtD,MAAS,sCAAY,CAAC,WAAK,EAAE,eAAe;AAC5C,2BAAqB,yBAAC,WAAK,GAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,iBAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,yBAAyB;AAC/C,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,yBAAC,WAAK,GAAE,kBAAkB,SAAS;AAC9D,qBAAO,GAAG,SAAS;;AAErB,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS;IACrE;;AAIE,UAAI,SAAS,4DAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,4DAAgB,GAAI,MAAM,GAAI,4DAAgB,GAAG,6DAA8B,CAAC,6CAAqB,EAAE,8DAAkB;;AAE5H,0BAAe,GAAG,MAAM;IAC1B;;8DAxCoB,UAA2B,EAAE,WAAe;IAJtC,oBAAc,OAAG,0CAAmB;IACzD,aAAO;IACI,WAAK;AAE+C,yEAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC9J,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;MAJ+B,4DAAgB;;;;;;MA4CF,gDAAwB;YAAG,gBAAM,wCAAgB,CAAC,SAAS,0GAA+B;;;;;AAEvI,YAAO,iDAAwB;IACjC;;;MAEoB,iDAAyB;YAAG;;;;;;;AAQ5C,uBAAW,OAAG,+CAAmB,CAAC,MAAM;AACxC,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+BAAmB,OAAG,+BAAsB,CAAC,WAAM;AACnD,uBAAW,OAAO,CAAC,yBAAmB,EAAE,mBAAc;AACtD,gBAAK,CAAC,WAAM;AACZ,iBAAO,oCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,yBAAmB;IAC1D;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;mEAvByB,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yBAAmB;AAC+B,8EAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;qEA0BrG,UAA2B,EAAE,WAAe;AAC1G,eAAO,oDAAwB,CAAC,UAAU,EAAE,WAAW;EACzD;;MAEI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAc,EAAE,+CAAuB;AAChE,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"glyph.template.ddc.js"}');
  // Exports:
  return {
    glyph__glyph$46template: glyph__glyph$46template
  };
});

//# sourceMappingURL=glyph.template.ddc.js.map
