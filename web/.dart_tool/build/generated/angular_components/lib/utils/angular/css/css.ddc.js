define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__css__css = Object.create(dart.library);
  const $startsWith = dartx.startsWith;
  utils__angular__css__css.constructEncapsulatedCss = function(className, classes) {
    let result = className != null ? className : "";
    for (let i of classes) {
      if (i[$startsWith]("_ngcontent")) {
        result = result + (" " + dart.str(i));
      }
    }
    return result;
  };
  dart.trackLibraries("packages/angular_components/utils/angular/css/css.ddc", {
    "package:angular_components/utils/angular/css/css.dart": utils__angular__css__css
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["css.dart"],"names":[],"mappings":";;;;;;;+DAyBgC,SAAgB,EAAE,OAAmB;AACnE,QAAI,SAAS,SAAS,WAAT,SAAS,GAAI;AAC1B,aAAW,IAAK,QAAO,EAAE;AAEvB,UAAI,CAAC,aAAW,CAAC,eAAe;cAAM,GA7B1C,AA6BoC,MAAM,IAAI,eAAG,CAAC;;;AAEhD,UAAO,OAAM;EACf","file":"css.ddc.js"}');
  // Exports:
  return {
    utils__angular__css__css: utils__angular__css__css
  };
});

//# sourceMappingURL=css.ddc.js.map
