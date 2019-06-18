define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/base_material_input'], function(dart_sdk, disposer, directives, change_detection, base_material_input) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_input__material_input_default_value_accessor = Object.create(dart.library);
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FocusEventToNull = () => (FocusEventToNull = dart.constFn(dart.fnType(core.Null, [html.FocusEvent])))();
  const _cd = dart.privateName(material_input__material_input_default_value_accessor, "_cd");
  const _is_BaseMaterialInputValueAccessor_default = Symbol('_is_BaseMaterialInputValueAccessor_default');
  material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$ = dart.generic(T => {
    let ControlValueAccessorOfT = () => (ControlValueAccessorOfT = dart.constFn(src__directives__control_value_accessor.ControlValueAccessor$(T)))();
    class BaseMaterialInputValueAccessor extends core.Object {
      get disposer() {
        return this[disposer];
      }
      set disposer(value) {
        super.disposer = value;
      }
      get input() {
        return this[input$];
      }
      set input(value) {
        super.input = value;
      }
      writeValue(newValue) {
        T._check(newValue);
        this.input.inputText = this.formatValue(newValue);
      }
      formatValue(value) {
        T._check(value);
        return dart.str(value != null ? value : "");
      }
      registerOnTouched(callback) {
        let sub = null;
        sub = this.input.onBlur.listen(dart.fn(_ => {
          dart.dsend(sub, 'cancel', []);
          callback();
        }, FocusEventToNull()));
        this.disposer.addStreamSubscription(dart.dynamic, async.StreamSubscription._check(sub));
      }
      ngOnDestroy() {
        this.disposer.dispose();
      }
      onDisabledChanged(isDisabled) {
        this.input.disabled = isDisabled;
      }
    }
    (BaseMaterialInputValueAccessor.new = function(input, cd) {
      this[disposer] = new utils__disposer__disposer.Disposer.oneShot();
      this[input$] = input;
      this[_cd] = cd;
      this[_cd] == null ? null : this[_cd].valueAccessor = this;
      this.disposer.addFunction(dart.fn(() => {
        this[_cd] == null ? null : this[_cd].valueAccessor = null;
      }, VoidToNull()));
    }).prototype = BaseMaterialInputValueAccessor.prototype;
    dart.addTypeTests(BaseMaterialInputValueAccessor);
    BaseMaterialInputValueAccessor.prototype[_is_BaseMaterialInputValueAccessor_default] = true;
    const disposer = Symbol("BaseMaterialInputValueAccessor.disposer");
    const input$ = Symbol("BaseMaterialInputValueAccessor.input");
    BaseMaterialInputValueAccessor[dart.implements] = () => [ControlValueAccessorOfT(), src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(BaseMaterialInputValueAccessor, () => ({
      __proto__: dart.getMethods(BaseMaterialInputValueAccessor.__proto__),
      writeValue: dart.fnType(dart.void, [core.Object]),
      formatValue: dart.fnType(core.String, [core.Object]),
      registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
      ngOnDestroy: dart.fnType(dart.void, []),
      onDisabledChanged: dart.fnType(dart.void, [core.bool])
    }));
    dart.setFieldSignature(BaseMaterialInputValueAccessor, () => ({
      __proto__: dart.getFields(BaseMaterialInputValueAccessor.__proto__),
      disposer: dart.finalFieldType(utils__disposer__disposer.Disposer),
      input: dart.finalFieldType(material_input__base_material_input.BaseMaterialInput),
      [_cd]: dart.finalFieldType(src__directives__ng_control.NgControl)
    }));
    return BaseMaterialInputValueAccessor;
  });
  material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor = material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$();
  dart.addTypeTests(material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor, _is_BaseMaterialInputValueAccessor_default);
  material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor = class MaterialInputDefaultValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$(core.String) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(core.String, this.input.onKeypress.listen(dart.fn(value => {
        callback(value);
      }, StringToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor);
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [core.String], {rawValue: core.String})])
  }));
  material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor = class MaterialInputBlurValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$(core.String) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(html.FocusEvent, this.input.onBlur.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, FocusEventToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor);
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputBlurValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [core.String], {rawValue: core.String})])
  }));
  material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor = class MaterialInputChangeValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$(core.String) {
    registerOnChange(callback) {
      this.disposer.addStreamSubscription(core.String, this.input.onChange.listen(dart.fn(_ => {
        if (this.input != null) callback(this.input.inputText);
      }, StringToNull())));
    }
  };
  (material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.new = function(input, control) {
    material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__.new.call(this, input, control);
  }).prototype = material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.prototype;
  dart.addTypeTests(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor);
  dart.setMethodSignature(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_input_default_value_accessor.MaterialInputChangeValueAccessor.__proto__),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [core.String], {rawValue: core.String})])
  }));
  dart.trackLibraries("packages/angular_components/material_input/material_input_default_value_accessor.ddc", {
    "package:angular_components/material_input/material_input_default_value_accessor.dart": material_input__material_input_default_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_input_default_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MA+EQ;;;;;;MAEkB;;;;;;iBAeR,QAAU;iBAAR;AAChB,kBAAK,UAAU,GAAG,gBAAW,CAAC,QAAQ;MACxC;kBAMmB,KAAO;iBAAL;cAAU,UAAG,KAAK,WAAL,KAAK,GAAI;MAAI;wBAGxB,QAAQ;AAC7B,YAAI;AACJ,WAAG,GAAG,UAAK,OAAO,OAAO,CAAC,QAAC,CAAC;AAC1B,wBAAG;AACH,kBAAQ;;AAEV,qBAAQ,sBAAsB,+CAAC,GAAG;MACpC;;AAIE,qBAAQ,QAAQ;MAClB;wBAGuB,UAAe;AACpC,kBAAK,SAAS,GAAG,UAAU;MAC7B;;mDAxC+B,KAAU;MALnC,cAAQ,OAAG,0CAAgB;MAKG,YAAK,GAAL,KAAK;MAA2B,SAAG;AAGrE,eAAG,kBAAH,SAAG,cAAe,GAAG;AACrB,mBAAQ,YAAY,CAAC;AAGnB,iBAAG,kBAAH,SAAG,cAAe,GAAG;;IAEzB;;;;;;;;;;;;;;;;;;;;;;;;;qBAhEsB,QAAQ;AAC5B,mBAAQ,sBAAsB,cAAC,UAAK,WAAW,OAAO,CAAC,QAAC,KAAK;AAC3D,gBAAQ,CAAC,KAAK;;IAElB;;0GARI,KAAuB,EAAE,OAAqC;AAC5D,qHAAM,KAAK,EAAE,OAAO;EAAC;;;;;;;qBAsBL,QAAQ;AAC5B,mBAAQ,sBAAsB,kBAAC,UAAK,OAAO,OAAO,CAAC,QAAC,CAAC;AACnD,YAAI,UAAK,IAAI,MAAM,QAAQ,CAAC,UAAK,UAAU;;IAE/C;;uGARI,KAAuB,EAAE,OAAqC;AAC5D,kHAAM,KAAK,EAAE,OAAO;EAAC;;;;;;;qBAsBL,QAAQ;AAC5B,mBAAQ,sBAAsB,cAAC,UAAK,SAAS,OAAO,CAAC,QAAC,CAAC;AACrD,YAAI,UAAK,IAAI,MAAM,QAAQ,CAAC,UAAK,UAAU;;IAE/C;;yGARI,KAAuB,EAAE,OAAqC;AAC5D,oHAAM,KAAK,EAAE,OAAO;EAAC","file":"material_input_default_value_accessor.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_default_value_accessor: material_input__material_input_default_value_accessor
  };
});

//# sourceMappingURL=material_input_default_value_accessor.ddc.js.map
