define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/firebase_dart_ui/src/auth_ui_js', 'packages/angular/angular.template'], function(dart_sdk, modules, change_detection, auth_ui_js, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__firebase_auth_ui_component = auth_ui_js.src__firebase_auth_ui_component;
  const angular$46template = angular.angular$46template;
  const firebase_dart_ui$46template = Object.create(dart.library);
  const src__auth_ui_js$46template = Object.create(dart.library);
  const src__firebase_auth_ui_component$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $setProperty = dartx.setProperty;
  let AppViewOfFirebaseAuthUIComponent = () => (AppViewOfFirebaseAuthUIComponent = dart.constFn(src__core__linker__app_view.AppView$(src__firebase_auth_ui_component.FirebaseAuthUIComponent)))();
  let AppViewAndintToAppViewOfFirebaseAuthUIComponent = () => (AppViewAndintToAppViewOfFirebaseAuthUIComponent = dart.constFn(dart.fnType(AppViewOfFirebaseAuthUIComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFirebaseAuthUIComponent = () => (ComponentFactoryOfFirebaseAuthUIComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__firebase_auth_ui_component.FirebaseAuthUIComponent)))();
  let ComponentRefOfFirebaseAuthUIComponent = () => (ComponentRefOfFirebaseAuthUIComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__firebase_auth_ui_component.FirebaseAuthUIComponent)))();
  dart.defineLazy(firebase_dart_ui$46template, {
    /*firebase_dart_ui$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  firebase_dart_ui$46template.initReflector = function() {
    if (dart.test(firebase_dart_ui$46template._visited)) {
      return;
    }
    firebase_dart_ui$46template._visited = true;
    src__auth_ui_js$46template.initReflector();
    src__firebase_auth_ui_component$46template.initReflector();
  };
  src__auth_ui_js$46template.initReflector = function() {
  };
  dart.defineLazy(src__firebase_auth_ui_component$46template, {
    /*src__firebase_auth_ui_component$46template.styles$FirebaseAuthUIComponent*/get styles$FirebaseAuthUIComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _expr_0 = dart.privateName(src__firebase_auth_ui_component$46template, "_expr_0");
  const _el_1 = dart.privateName(src__firebase_auth_ui_component$46template, "_el_1");
  src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0 = class ViewFirebaseAuthUIComponent0 extends src__core__linker__app_view.AppView$(src__firebase_auth_ui_component.FirebaseAuthUIComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:firebase_dart_ui/lib/src/firebase_auth_ui_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      src__runtime__dom_helpers.setAttribute(this[_el_1], "id", "firebaseui-auth-container");
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.displayStyle();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_1].style[$setProperty]("display", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0._componentStyles;
      if (styles == null) {
        src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0._componentStyles = styles = src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(src__firebase_auth_ui_component$46template.styles$FirebaseAuthUIComponent, src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_el_1] = null;
    src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("firebase-auth-ui"));
  }).prototype = src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.prototype;
  dart.addTypeTests(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0);
  dart.setMethodSignature(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0, () => ({
    __proto__: dart.getMethods(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__firebase_auth_ui_component.FirebaseAuthUIComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0, "package:firebase_dart_ui/src/firebase_auth_ui_component.template.dart");
  dart.setFieldSignature(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0, () => ({
    __proto__: dart.getFields(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0, {
    /*src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__firebase_auth_ui_component$46template, {
    /*src__firebase_auth_ui_component$46template._FirebaseAuthUIComponentNgFactory*/get _FirebaseAuthUIComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFirebaseAuthUIComponent()).new("firebase-auth-ui", dart.fn(src__firebase_auth_ui_component$46template.viewFactory_FirebaseAuthUIComponentHost0, AppViewAndintToAppViewOfFirebaseAuthUIComponent())));
    }
  });
  dart.copyProperties(src__firebase_auth_ui_component$46template, {
    get FirebaseAuthUIComponentNgFactory() {
      return src__firebase_auth_ui_component$46template._FirebaseAuthUIComponentNgFactory;
    }
  });
  dart.defineLazy(src__firebase_auth_ui_component$46template, {
    /*src__firebase_auth_ui_component$46template.styles$FirebaseAuthUIComponentHost*/get styles$FirebaseAuthUIComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(src__firebase_auth_ui_component$46template, "_compView_0");
  const _FirebaseAuthUIComponent_0_5 = dart.privateName(src__firebase_auth_ui_component$46template, "_FirebaseAuthUIComponent_0_5");
  src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0 = class _ViewFirebaseAuthUIComponentHost0 extends src__core__linker__app_view.AppView$(src__firebase_auth_ui_component.FirebaseAuthUIComponent) {
    build() {
      this[_compView_0] = new src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FirebaseAuthUIComponent_0_5] = new src__firebase_auth_ui_component.FirebaseAuthUIComponent.new();
      this[_compView_0].create(this[_FirebaseAuthUIComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFirebaseAuthUIComponent()).new(0, this, this.rootEl, this[_FirebaseAuthUIComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FirebaseAuthUIComponent_0_5] = null;
    src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.prototype;
  dart.addTypeTests(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0);
  dart.setMethodSignature(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0, () => ({
    __proto__: dart.getMethods(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__firebase_auth_ui_component.FirebaseAuthUIComponent), [])
  }));
  dart.setLibraryUri(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0, "package:firebase_dart_ui/src/firebase_auth_ui_component.template.dart");
  dart.setFieldSignature(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0, () => ({
    __proto__: dart.getFields(src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0),
    [_FirebaseAuthUIComponent_0_5]: dart.fieldType(src__firebase_auth_ui_component.FirebaseAuthUIComponent)
  }));
  src__firebase_auth_ui_component$46template.viewFactory_FirebaseAuthUIComponentHost0 = function(parentView, parentIndex) {
    return new src__firebase_auth_ui_component$46template._ViewFirebaseAuthUIComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__firebase_auth_ui_component$46template, {
    /*src__firebase_auth_ui_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__firebase_auth_ui_component$46template.initReflector = function() {
    if (dart.test(src__firebase_auth_ui_component$46template._visited)) {
      return;
    }
    src__firebase_auth_ui_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__firebase_auth_ui_component.FirebaseAuthUIComponent), src__firebase_auth_ui_component$46template.FirebaseAuthUIComponentNgFactory);
    src__auth_ui_js$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/firebase_dart_ui/firebase_dart_ui.template.ddc", {
    "package:firebase_dart_ui/firebase_dart_ui.template.dart": firebase_dart_ui$46template,
    "package:firebase_dart_ui/src/auth_ui_js.template.dart": src__auth_ui_js$46template,
    "package:firebase_dart_ui/src/firebase_auth_ui_component.template.dart": src__firebase_auth_ui_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["firebase_dart_ui.template.dart","src/auth_ui_js.template.dart","src/firebase_auth_ui_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MASI,oCAAQ;YAAG;;;;;AAEb,kBAAI,oCAAQ,GAAE;AACZ;;AAEF,2CAAW;AAEX,IAAM,wCAAa;AACnB,IAAM,wDAAa;EACrB;;ECVsB;;MCYF,yEAA8B;YAAG;;;;;;;AAWjD,YAAQ,WAAQ,qCAAS,IAAG,mEAAmE;IACjG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,UAAU,AAAQ,oCAAU,CAAC,gBAAgB,EAAE;AACrD,UAAM,MAAc,aAAQ;AAC5B,iBAAK,GAAG,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AAC/C,MAAQ,sCAAY,CAAC,WAAK,EAAE,MAAM;AAClC,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,aAAa;AACnC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,mBAAK,MAAM,cAAY,CAAC,WAAW,SAAS;AAC5C,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,wFAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,wFAAgB,GAAI,MAAM,GAAI,wFAAgB,GAAG,+DAAgC,CAAC,yEAA8B,EAAE,0FAAkB;;AAEvI,0BAAe,GAAG,MAAM;IAC1B;;0FApC6B,UAA2B,EAAE,WAAe;IAHrE,aAAO;IACQ,WAAK;AAEqD,qGAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;MAJ+B,wFAAgB;;;;;;MAwCO,4EAAiC;YAAG,gBAAM,iDAAgB,CAAC,oBAAoB,+IAAwC;;;;;AAE7K,YAAO,6EAAiC;IAC1C;;;MAEoB,6EAAkC;YAAG;;;;;;;AAQrD,uBAAW,OAAG,2EAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,OAAG,2DAA+B;AAC9D,uBAAW,OAAO,CAAC,kCAA4B,EAAE,mBAAc;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;+FAnBkC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,kCAA4B;AACsB,0GAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;iGAsB5F,UAA2B,EAAE,WAAe;AAC5H,eAAO,gFAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAO,oCAAiB,CAAC,sEAAuB,EAAE,2EAAgC;AAClF,IAAM,wCAAa;AACnB,IAAM,gCAAa;EACrB","file":"firebase_dart_ui.template.ddc.js"}');
  // Exports:
  return {
    firebase_dart_ui$46template: firebase_dart_ui$46template,
    src__auth_ui_js$46template: src__auth_ui_js$46template,
    src__firebase_auth_ui_component$46template: src__firebase_auth_ui_component$46template
  };
});

//# sourceMappingURL=firebase_dart_ui.template.ddc.js.map
