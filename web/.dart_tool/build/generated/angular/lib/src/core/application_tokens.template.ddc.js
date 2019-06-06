define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di$46template = change_detection.src__core__di$46template;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__change_detection__differs__default_iterable_differ$46template = change_detection.src__core__change_detection__differs__default_iterable_differ$46template;
  const src__core__zone__ng_zone$46template = change_detection.src__core__zone__ng_zone$46template;
  const src__core__application_tokens$46template = Object.create(dart.library);
  const src__core__change_detection__component_state$46template = Object.create(dart.library);
  const src__core__change_detection$46template = Object.create(dart.library);
  const src__core__zone$46template = Object.create(dart.library);
  dart.defineLazy(src__core__application_tokens$46template, {
    /*src__core__application_tokens$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__application_tokens$46template.initReflector = function() {
    if (dart.test(src__core__application_tokens$46template._visited)) {
      return;
    }
    src__core__application_tokens$46template._visited = true;
    src__core__di$46template.initReflector();
  };
  src__core__change_detection__component_state$46template.initReflector = function() {
  };
  dart.defineLazy(src__core__change_detection$46template, {
    /*src__core__change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection$46template.initReflector = function() {
    if (dart.test(src__core__change_detection$46template._visited)) {
      return;
    }
    src__core__change_detection$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__change_detection__component_state$46template.initReflector();
    src__core__change_detection__differs__default_iterable_differ$46template.initReflector();
  };
  dart.defineLazy(src__core__zone$46template, {
    /*src__core__zone$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__zone$46template.initReflector = function() {
    if (dart.test(src__core__zone$46template._visited)) {
      return;
    }
    src__core__zone$46template._visited = true;
    src__core__zone__ng_zone$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/application_tokens.template.ddc", {
    "package:angular/src/core/application_tokens.template.dart": src__core__application_tokens$46template,
    "package:angular/src/core/change_detection/component_state.template.dart": src__core__change_detection__component_state$46template,
    "package:angular/src/core/change_detection.template.dart": src__core__change_detection$46template,
    "package:angular/src/core/zone.template.dart": src__core__zone$46template
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.template.dart","change_detection/component_state.template.dart","change_detection.template.dart","zone.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAQI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,sCAAa;EACrB;;ECRsB;;MCElB,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,qEAAa;AACnB,IAAM,sFAAa;EACrB;;MCZI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,iDAAa;EACrB","file":"application_tokens.template.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens$46template: src__core__application_tokens$46template,
    src__core__change_detection__component_state$46template: src__core__change_detection__component_state$46template,
    src__core__change_detection$46template: src__core__change_detection$46template,
    src__core__zone$46template: src__core__zone$46template
  };
});

//# sourceMappingURL=application_tokens.template.ddc.js.map
