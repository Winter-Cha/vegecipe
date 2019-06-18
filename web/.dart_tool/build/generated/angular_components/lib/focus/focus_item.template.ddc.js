define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_item', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], function(dart_sdk, modules, directive_change_detector, focus_item, angular, focus) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus__focus_item = focus_item.focus__focus_item;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const focus__focus_item$46template = Object.create(dart.library);
  const _expr_1 = dart.privateName(focus__focus_item$46template, "_expr_1");
  focus__focus_item$46template.FocusItemDirectiveNgCd = class FocusItemDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if (!(this.instance.role == null)) {
          src__runtime__dom_helpers.updateAttribute(el, "role", this.instance.role);
        }
      }
      let currVal_1 = this.instance.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(el, "tabindex", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (focus__focus_item$46template.FocusItemDirectiveNgCd.new = function(instance) {
    this[_expr_1] = null;
    this[instance$] = instance;
    focus__focus_item$46template.FocusItemDirectiveNgCd.__proto__.new.call(this);
  }).prototype = focus__focus_item$46template.FocusItemDirectiveNgCd.prototype;
  dart.addTypeTests(focus__focus_item$46template.FocusItemDirectiveNgCd);
  const instance$ = Symbol("FocusItemDirectiveNgCd.instance");
  dart.setMethodSignature(focus__focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(focus__focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])
  }));
  dart.setFieldSignature(focus__focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus__focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(focus__focus_item.FocusItemDirective),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(focus__focus_item$46template, {
    /*focus__focus_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_item$46template.initReflector = function() {
    if (dart.test(focus__focus_item$46template._visited)) {
      return;
    }
    focus__focus_item$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/focus/focus_item.template.ddc", {
    "package:angular_components/focus/focus_item.template.dart": focus__focus_item$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAgBmC;;;;;;sBAGV,IAAqB,EAAE,EAAkB;AAC9D,UAAK,aAAc,IAAI,QAAQ,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,aAAQ,KAAK,IAAE,OAAO;AACnC,UAAQ,yCAAe,CAAC,EAAE,EAAE,QAAQ,aAAQ,KAAK;;;AAGrD,UAAM,YAAY,aAAQ,SAAS;AACnC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,QAAQ,yCAAe,CAAC,EAAE,EAAE,YAAY,SAAS;AACjD,qBAAO,GAAG,SAAS;;IAEvB;;sEAbuB,QAAa;IADhC,aAAO;IACiB,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;;;MAgBnC,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;EACrB","file":"focus_item.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_item$46template: focus__focus_item$46template
  };
});

//# sourceMappingURL=focus_item.template.ddc.js.map
