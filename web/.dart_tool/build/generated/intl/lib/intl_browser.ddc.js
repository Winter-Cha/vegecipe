define(['dart_sdk', 'packages/intl/intl'], function(dart_sdk, intl) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const intl_browser = Object.create(dart.library);
  const $language = dartx.language;
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  intl_browser.findSystemLocale = function() {
    intl$.Intl.systemLocale = intl$.Intl.canonicalizedLocale(html.window.navigator[$language]);
    return FutureOfString().value(intl$.Intl.systemLocale);
  };
  dart.trackLibraries("packages/intl/intl_browser.ddc", {
    "package:intl/intl_browser.dart": intl_browser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["intl_browser.dart"],"names":[],"mappings":";;;;;;;;;;;;AAwBE,IAAK,uBAAY,GAAG,UAAI,oBAAoB,CAAC,WAAM,UAAU,WAAS;AACtE,UAAO,AAAI,uBAAY,CAAC,UAAI,aAAa;EAC3C","file":"intl_browser.ddc.js"}');
  // Exports:
  return {
    intl_browser: intl_browser
  };
});

//# sourceMappingURL=intl_browser.ddc.js.map
