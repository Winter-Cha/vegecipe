define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/utils/angular/id/id', 'packages/angular/angular.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, modules, directive_change_detector, id, angular, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const utils__angular__id__id = id.utils__angular__id__id;
  const angular$46template = angular.angular$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const utils__angular__id__id$46template = Object.create(dart.library);
  utils__angular__id__id$46template.AutoIdDirectiveNgCd = class AutoIdDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if (!(this.instance.id == null)) {
          src__runtime__dom_helpers.updateAttribute(el, "id", this.instance.id);
        }
      }
    }
  };
  (utils__angular__id__id$46template.AutoIdDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    utils__angular__id__id$46template.AutoIdDirectiveNgCd.__proto__.new.call(this);
  }).prototype = utils__angular__id__id$46template.AutoIdDirectiveNgCd.prototype;
  dart.addTypeTests(utils__angular__id__id$46template.AutoIdDirectiveNgCd);
  const instance$ = Symbol("AutoIdDirectiveNgCd.instance");
  dart.setMethodSignature(utils__angular__id__id$46template.AutoIdDirectiveNgCd, () => ({
    __proto__: dart.getMethods(utils__angular__id__id$46template.AutoIdDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])
  }));
  dart.setFieldSignature(utils__angular__id__id$46template.AutoIdDirectiveNgCd, () => ({
    __proto__: dart.getFields(utils__angular__id__id$46template.AutoIdDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(utils__angular__id__id.AutoIdDirective)
  }));
  dart.defineLazy(utils__angular__id__id$46template, {
    /*utils__angular__id__id$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__angular__id__id$46template.initReflector = function() {
    if (dart.test(utils__angular__id__id$46template._visited)) {
      return;
    }
    utils__angular__id__id$46template._visited = true;
    angular$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/angular/id/id.template.ddc", {
    "package:angular_components/utils/angular/id/id.template.dart": utils__angular__id__id$46template
  }, '{"version":3,"sourceRoot":"","sources":["id.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAegC;;;;;;sBAEP,IAAqB,EAAE,EAAkB;AAC9D,UAAK,aAAc,IAAI,QAAQ,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,aAAQ,GAAG,IAAE,OAAO;AACjC,UAAQ,yCAAe,CAAC,EAAE,EAAE,MAAM,aAAQ,GAAG;;;IAGnD;;wEARoB,QAAa;IAAR,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;;MAWhC,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,0DAAa;EACrB","file":"id.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__id__id$46template: utils__angular__id__id$46template
  };
});

//# sourceMappingURL=id.template.ddc.js.map
