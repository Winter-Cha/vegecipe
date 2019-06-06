define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__runtime__text_binding = Object.create(dart.library);
  const $text = dartx.text;
  const _currentValue = dart.privateName(src__runtime__text_binding, "_currentValue");
  src__runtime__text_binding.TextBinding = class TextBinding extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      super.element = value;
    }
    updateText(newValue) {
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_currentValue], newValue))) {
        this.element[$text] = newValue;
        this[_currentValue] = newValue;
      }
    }
  };
  (src__runtime__text_binding.TextBinding.new = function() {
    this[_currentValue] = "";
    this[element] = html.Text.new("");
  }).prototype = src__runtime__text_binding.TextBinding.prototype;
  dart.addTypeTests(src__runtime__text_binding.TextBinding);
  const element = Symbol("TextBinding.element");
  dart.setMethodSignature(src__runtime__text_binding.TextBinding, () => ({
    __proto__: dart.getMethods(src__runtime__text_binding.TextBinding.__proto__),
    updateText: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__runtime__text_binding.TextBinding, () => ({
    __proto__: dart.getFields(src__runtime__text_binding.TextBinding.__proto__),
    [_currentValue]: dart.fieldType(core.String),
    element: dart.finalFieldType(html.Text)
  }));
  dart.trackLibraries("packages/angular/src/runtime/text_binding.ddc", {
    "package:angular/src/runtime/text_binding.dart": src__runtime__text_binding
  }, '{"version":3,"sourceRoot":"","sources":["text_binding.dart"],"names":[],"mappings":";;;;;;;;;;;IAaa;;;;;;eAUK,QAAe;AAC7B,oBAAI,8CAAY,CAAC,mBAAa,EAAE,QAAQ,IAAG;AACzC,oBAAO,OAAK,GAAG,QAAQ;AACvB,2BAAa,GAAG,QAAQ;;IAE5B;;;IAhBO,mBAAa,GAAG;IACZ,aAAO,GAAG,aAAI,CAAC;EAOb","file":"text_binding.ddc.js"}');
  // Exports:
  return {
    src__runtime__text_binding: src__runtime__text_binding
  };
});

//# sourceMappingURL=text_binding.ddc.js.map
