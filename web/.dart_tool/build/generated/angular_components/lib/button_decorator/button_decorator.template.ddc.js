define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/has_tab_index.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, modules, directive_change_detector, button_decorator, angular, focus, has_disabled, has_tab_index, events) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled.interfaces__has_disabled$46template;
  const mixins__has_tab_index$46template = has_tab_index.mixins__has_tab_index$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const button_decorator__button_decorator$46template = Object.create(dart.library);
  const _expr_0 = dart.privateName(button_decorator__button_decorator$46template, "_expr_0");
  const _expr_1 = dart.privateName(button_decorator__button_decorator$46template, "_expr_1");
  const _expr_2 = dart.privateName(button_decorator__button_decorator$46template, "_expr_2");
  const _expr_3 = dart.privateName(button_decorator__button_decorator$46template, "_expr_3");
  button_decorator__button_decorator$46template.ButtonDirectiveNgCd = class ButtonDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(el, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(el, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(el, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(el, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[instance$] = instance;
    button_decorator__button_decorator$46template.ButtonDirectiveNgCd.__proto__.new.call(this);
  }).prototype = button_decorator__button_decorator$46template.ButtonDirectiveNgCd.prototype;
  dart.addTypeTests(button_decorator__button_decorator$46template.ButtonDirectiveNgCd);
  const instance$ = Symbol("ButtonDirectiveNgCd.instance");
  dart.setMethodSignature(button_decorator__button_decorator$46template.ButtonDirectiveNgCd, () => ({
    __proto__: dart.getMethods(button_decorator__button_decorator$46template.ButtonDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(button_decorator__button_decorator$46template.ButtonDirectiveNgCd, "package:angular_components/button_decorator/button_decorator.template.dart");
  dart.setFieldSignature(button_decorator__button_decorator$46template.ButtonDirectiveNgCd, () => ({
    __proto__: dart.getFields(button_decorator__button_decorator$46template.ButtonDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(button_decorator__button_decorator.ButtonDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(button_decorator__button_decorator$46template, {
    /*button_decorator__button_decorator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  button_decorator__button_decorator$46template.initReflector = function() {
    if (dart.test(button_decorator__button_decorator$46template._visited)) {
      return;
    }
    button_decorator__button_decorator$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    mixins__has_tab_index$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator.template.ddc", {
    "package:angular_components/button_decorator/button_decorator.template.dart": button_decorator__button_decorator$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAmBgC;;;;;;sBAMP,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,SAAS;AACnC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,QAAQ,yCAAe,CAAC,EAAE,EAAE,YAAY,SAAS;AACjD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,SAAS;AACnC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,QAAQ,yCAAe,CAAC,EAAE,EAAE,QAAQ,SAAS;AAC7C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,YAAY;AACtC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,QAAQ,yCAAe,CAAC,EAAE,EAAE,iBAAiB,SAAS;AACtD,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,SAAS;AACnC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,QAAQ,mDAAyB,CAAC,EAAE,EAAE,eAAe,SAAS;AAC9D,qBAAO,GAAG,SAAS;;IAEvB;;oFAtBoB,QAAa;IAJ7B,aAAO;IACP,aAAO;IACP,aAAO;IACN,aAAO;IACa,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;;;;;;;MAyBhC,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,uDAAa;EACrB","file":"button_decorator.template.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator$46template: button_decorator__button_decorator$46template
  };
});

//# sourceMappingURL=button_decorator.template.ddc.js.map
