define(['dart_sdk', 'packages/angular_components/focus/focus_trap.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus_trap', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, focus_trap$46scss$46css, modules, change_detection, focus_trap, angular, focus, dom_iterator, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus_trap$46scss$46css$46shim = focus_trap$46scss$46css.focus__focus_trap$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const focus__focus_trap = focus_trap.focus__focus_trap;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__browser__dom_iterator__dom_iterator$46template = dom_iterator.utils__browser__dom_iterator__dom_iterator$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const focus__focus_trap$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfFocusTrapComponent = () => (AppViewOfFocusTrapComponent = dart.constFn(src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent)))();
  let AppViewAndintToAppViewOfFocusTrapComponent = () => (AppViewAndintToAppViewOfFocusTrapComponent = dart.constFn(dart.fnType(AppViewOfFocusTrapComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFocusTrapComponent = () => (ComponentFactoryOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(focus__focus_trap.FocusTrapComponent)))();
  let ComponentRefOfFocusTrapComponent = () => (ComponentRefOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent)))();
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponent*/get styles$FocusTrapComponent() {
      return [focus__focus_trap$46scss$46css$46shim.styles];
    }
  });
  const _FocusContentWrapper_1_5 = dart.privateName(focus__focus_trap$46template, "_FocusContentWrapper_1_5");
  focus__focus_trap$46template.ViewFocusTrapComponent0 = class ViewFocusTrapComponent0 extends src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/focus/focus_trap.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      _el_0.tabIndex = 0;
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      src__runtime__dom_helpers.setAttribute(_el_1, "focusContentWrapper", "");
      src__runtime__dom_helpers.setAttribute(_el_1, "style", "outline: none");
      _el_1.tabIndex = -1;
      this.addShimC(_el_1);
      this[_FocusContentWrapper_1_5] = new focus__focus_trap.FocusContentWrapper.new(_el_1);
      this.project(_el_1, 0);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      _el_2.tabIndex = 0;
      this.addShimC(_el_2);
      _el_0[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(_ctx, 'focusLast')));
      _el_2[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(_ctx, 'focusFirst')));
      _ctx.content = this[_FocusContentWrapper_1_5];
      this.init0();
    }
    initComponentStyles() {
      let styles = focus__focus_trap$46template.ViewFocusTrapComponent0._componentStyles;
      if (styles == null) {
        focus__focus_trap$46template.ViewFocusTrapComponent0._componentStyles = styles = focus__focus_trap$46template.ViewFocusTrapComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(focus__focus_trap$46template.styles$FocusTrapComponent, focus__focus_trap$46template.ViewFocusTrapComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (focus__focus_trap$46template.ViewFocusTrapComponent0.new = function(parentView, parentIndex) {
    this[_FocusContentWrapper_1_5] = null;
    focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("focus-trap"));
  }).prototype = focus__focus_trap$46template.ViewFocusTrapComponent0.prototype;
  dart.addTypeTests(focus__focus_trap$46template.ViewFocusTrapComponent0);
  dart.setMethodSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(focus__focus_trap$46template.ViewFocusTrapComponent0, "package:angular_components/focus/focus_trap.template.dart");
  dart.setFieldSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    [_FocusContentWrapper_1_5]: dart.fieldType(focus__focus_trap.FocusContentWrapper)
  }));
  dart.defineLazy(focus__focus_trap$46template.ViewFocusTrapComponent0, {
    /*focus__focus_trap$46template.ViewFocusTrapComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template._FocusTrapComponentNgFactory*/get _FocusTrapComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFocusTrapComponent()).new("focus-trap", dart.fn(focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0, AppViewAndintToAppViewOfFocusTrapComponent())));
    }
  });
  dart.copyProperties(focus__focus_trap$46template, {
    get FocusTrapComponentNgFactory() {
      return focus__focus_trap$46template._FocusTrapComponentNgFactory;
    }
  });
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponentHost*/get styles$FocusTrapComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(focus__focus_trap$46template, "_compView_0");
  const _FocusTrapComponent_0_5 = dart.privateName(focus__focus_trap$46template, "_FocusTrapComponent_0_5");
  focus__focus_trap$46template._ViewFocusTrapComponentHost0 = class _ViewFocusTrapComponentHost0 extends src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent) {
    build() {
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      this[_compView_0].create(this[_FocusTrapComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFocusTrapComponent()).new(0, this, this.rootEl, this[_FocusTrapComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (focus__focus_trap$46template._ViewFocusTrapComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = focus__focus_trap$46template._ViewFocusTrapComponentHost0.prototype;
  dart.addTypeTests(focus__focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.setMethodSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent), [])
  }));
  dart.setLibraryUri(focus__focus_trap$46template._ViewFocusTrapComponentHost0, "package:angular_components/focus/focus_trap.template.dart");
  dart.setFieldSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent)
  }));
  focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0 = function(parentView, parentIndex) {
    return new focus__focus_trap$46template._ViewFocusTrapComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_trap$46template.initReflector = function() {
    if (dart.test(focus__focus_trap$46template._visited)) {
      return;
    }
    focus__focus_trap$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(focus__focus_trap.FocusTrapComponent), focus__focus_trap$46template.FocusTrapComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__browser__dom_iterator__dom_iterator$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/focus/focus_trap.template.ddc", {
    "package:angular_components/focus/focus_trap.template.dart": focus__focus_trap$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsBoB,sDAAyB;YAAG,EAAS,4CAAM;;;;;;AAU3D,YAAQ,WAAQ,qCAAS,IAAG,uDAAuD;IACrF;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,WAAK,SAAS,GAAG;AACjB,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,MAAQ,sCAAY,CAAC,KAAK,EAAE,uBAAuB;AACnD,MAAQ,sCAAY,CAAC,KAAK,EAAE,SAAS;AACrC,WAAK,SAAS,GAAG,CAAC;AAClB,mBAAQ,CAAC,KAAK;AACd,oCAAwB,OAAG,yCAA2B,CAAC,KAAK;AAC5D,kBAAO,CAAC,KAAK,EAAE;AACf,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,WAAK,SAAS,GAAG;AACjB,mBAAQ,CAAC,KAAK;AACd,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,UAAI,QAAQ,GAAG,8BAAwB;AACvC,gBAAK;IACP;;AAIE,UAAI,SAAS,qEAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,qEAAgB,GAAI,MAAM,GAAI,qEAAgB,GAAG,6DAA8B,CAAC,sDAAyB,EAAE,uEAAkB;;AAEhI,0BAAe,GAAG,MAAM;IAC1B;;uEAxCwB,UAA2B,EAAE,WAAe;IAFxC,8BAAwB;AAEoB,kFAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAClK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,qEAAgB;;;;;;MA4CE,yDAA4B;YAAG,gBAAM,4CAAgB,CAAC,cAAc,uHAAmC;;;;;AAExJ,YAAO,0DAA4B;IACrC;;;MAEoB,0DAA6B;YAAG;;;;;;;AAQhD,uBAAW,OAAG,wDAAuB,CAAC,MAAM;AAC5C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,mCAAuB,OAAG,wCAA0B;AACpD,uBAAW,OAAO,CAAC,6BAAuB,EAAE,mBAAc;AAC1D,gBAAK,CAAC,WAAM;AACZ,iBAAO,wCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,6BAAuB;IAC9D;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;AAChC,mCAAuB,YAAY;IACrC;;4EApB6B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,6BAAuB;AAC2B,uFAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;8EAuBjG,UAA2B,EAAE,WAAe;AAClH,eAAO,6DAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,oCAAiB,CAAC,mDAAkB,EAAE,wDAA2B;AACxE,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,kDAAa;EACrB","file":"focus_trap.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap$46template: focus__focus_trap$46template
  };
});

//# sourceMappingURL=focus_trap.template.ddc.js.map
