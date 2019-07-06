define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_list', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, modules, directive_change_detector, focus_list, angular, focus, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus__focus_list = focus_list.focus__focus_list;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const focus__focus_list$46template = Object.create(dart.library);
  focus__focus_list$46template.FocusListDirectiveNgCd = class FocusListDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
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
    }
  };
  (focus__focus_list$46template.FocusListDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    focus__focus_list$46template.FocusListDirectiveNgCd.__proto__.new.call(this);
  }).prototype = focus__focus_list$46template.FocusListDirectiveNgCd.prototype;
  dart.addTypeTests(focus__focus_list$46template.FocusListDirectiveNgCd);
  const instance$ = Symbol("FocusListDirectiveNgCd.instance");
  dart.setMethodSignature(focus__focus_list$46template.FocusListDirectiveNgCd, () => ({
    __proto__: dart.getMethods(focus__focus_list$46template.FocusListDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(focus__focus_list$46template.FocusListDirectiveNgCd, "package:angular_components/focus/focus_list.template.dart");
  dart.setFieldSignature(focus__focus_list$46template.FocusListDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus__focus_list$46template.FocusListDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(focus__focus_list.FocusListDirective)
  }));
  dart.defineLazy(focus__focus_list$46template, {
    /*focus__focus_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_list$46template.initReflector = function() {
    if (dart.test(focus__focus_list$46template._visited)) {
      return;
    }
    focus__focus_list$46template._visited = true;
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/focus/focus_list.template.ddc", {
    "package:angular_components/focus/focus_list.template.dart": focus__focus_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAgBmC;;;;;;sBAEV,IAAqB,EAAE,EAAkB;AAC9D,UAAK,aAAc,IAAI,QAAQ,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,aAAQ,KAAK,IAAE,OAAO;AACnC,UAAQ,yCAAe,CAAC,EAAE,EAAE,QAAQ,aAAQ,KAAK;;;IAGvD;;sEARuB,QAAa;IAAR,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;;;MAWnC,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,kDAAa;EACrB","file":"focus_list.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_list$46template: focus__focus_list$46template
  };
});

//# sourceMappingURL=focus_list.template.ddc.js.map
