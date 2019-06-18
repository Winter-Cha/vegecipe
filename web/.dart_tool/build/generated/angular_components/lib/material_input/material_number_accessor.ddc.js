define(['dart_sdk', 'packages/angular_components/material_input/material_number_validators', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/intl/intl', 'packages/angular_components/utils/angular/properties/properties', 'packages/fixnum/fixnum', 'packages/angular_forms/src/directives', 'packages/quiver/strings'], function(dart_sdk, material_number_validators, material_input, material_input_default_value_accessor, intl, properties, fixnum, directives, strings) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_input__material_number_validators = material_number_validators.material_input__material_number_validators;
  const material_input__material_input = material_input.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const intl$ = intl.intl;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const fixnum$ = fixnum.fixnum;
  const src__model = directives.src__model;
  const src__directives__validators = directives.src__directives__validators;
  const strings$ = strings.strings;
  const material_input__material_number_accessor = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $toString = dartx.toString;
  const $contains = dartx.contains;
  const $toInt = dartx.toInt;
  let FocusEventToNull = () => (FocusEventToNull = dart.constFn(dart.fnType(core.Null, [html.FocusEvent])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  dart.defineLazy(material_input__material_number_accessor, {
    /*material_input__material_number_accessor.materialNumberInputDirectives*/get materialNumberInputDirectives() {
      return dart.constList([dart.wrapType(material_input__material_number_accessor.CheckIntegerValidator), dart.wrapType(material_input__material_number_validators.LowerBoundValidator), dart.wrapType(material_input__material_input.MaterialInputComponent), dart.wrapType(material_input__material_number_accessor.MaterialInt64ValueAccessor), dart.wrapType(material_input__material_number_accessor.MaterialNumberValueAccessor), dart.wrapType(material_input__material_number_accessor.MaterialNumberValidator), dart.wrapType(material_input__material_number_validators.PositiveNumValidator), dart.wrapType(material_input__material_number_validators.CheckNonNegativeValidator), dart.wrapType(material_input__material_number_validators.UpperBoundValidator)], core.Type);
    }
  });
  const _numberFormat = dart.privateName(material_input__material_number_accessor, "_numberFormat");
  const _updateStream = dart.privateName(material_input__material_number_accessor, "_updateStream");
  const _is_BaseMaterialNumberValueAccessor_default = Symbol('_is_BaseMaterialNumberValueAccessor_default');
  material_input__material_number_accessor.BaseMaterialNumberValueAccessor$ = dart.generic(T => {
    const writeValue = Symbol("writeValue");
    class BaseMaterialNumberValueAccessor extends material_input__material_input_default_value_accessor.BaseMaterialInputValueAccessor$(T) {
      writeValue(newValue) {
        T._check(newValue);
        if (newValue == null) super.writeValue(null);
        if (!dart.equals(this.parseNumber(this.input.inputText), newValue)) {
          super.writeValue(newValue);
        }
      }
      registerOnChange(callback) {
        this.disposer.addStreamSubscription(dart.dynamic, this[_updateStream].listen(dart.fn(_ => {
          if (this.input == null) return;
          let rawValue = this.input.inputText;
          let value = this.parseNumber(rawValue);
          callback(value, {rawValue: rawValue});
        }, dynamicToNull())));
      }
      formatValue(value) {
        T._check(value);
        if (value == null) return "";
        let l = this[_numberFormat] == null ? null : this[_numberFormat].format(value);
        return l != null ? l : super.formatValue(value);
      }
      [writeValue](newValue) {
        return super.writeValue(newValue);
      }
    }
    (BaseMaterialNumberValueAccessor.new = function(input, control, changeUpdate, keypressUpdate, blurFormat, numberFormat) {
      if (numberFormat === void 0) numberFormat = null;
      this[_updateStream] = null;
      this[_numberFormat] = numberFormat;
      BaseMaterialNumberValueAccessor.__proto__.new.call(this, input, control);
      input.type = "text";
      if (!!(dart.test(changeUpdate) && dart.test(keypressUpdate))) dart.assertFailed("Cannot update both on keypress and change.");
      if (dart.test(changeUpdate)) {
        this[_updateStream] = input.onChange;
      } else if (dart.test(keypressUpdate)) {
        this[_updateStream] = input.onKeypress;
      } else {
        this[_updateStream] = input.onBlur;
      }
      if (dart.test(blurFormat)) {
        this.disposer.addStreamSubscription(html.FocusEvent, input.onBlur.listen(dart.fn(_ => {
          if (input == null) return;
          let parsedNumber = this.parseNumber(input.inputText);
          if (parsedNumber != null) {
            this[writeValue](parsedNumber);
          }
        }, FocusEventToNull())));
      }
    }).prototype = BaseMaterialNumberValueAccessor.prototype;
    dart.addTypeTests(BaseMaterialNumberValueAccessor);
    BaseMaterialNumberValueAccessor.prototype[_is_BaseMaterialNumberValueAccessor_default] = true;
    dart.setMethodSignature(BaseMaterialNumberValueAccessor, () => ({
      __proto__: dart.getMethods(BaseMaterialNumberValueAccessor.__proto__),
      writeValue: dart.fnType(dart.void, [core.Object]),
      registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [T], {rawValue: core.String})]),
      formatValue: dart.fnType(core.String, [core.Object])
    }));
    dart.setFieldSignature(BaseMaterialNumberValueAccessor, () => ({
      __proto__: dart.getFields(BaseMaterialNumberValueAccessor.__proto__),
      [_numberFormat]: dart.finalFieldType(intl$.NumberFormat),
      [_updateStream]: dart.fieldType(async.Stream)
    }));
    return BaseMaterialNumberValueAccessor;
  });
  material_input__material_number_accessor.BaseMaterialNumberValueAccessor = material_input__material_number_accessor.BaseMaterialNumberValueAccessor$();
  dart.addTypeTests(material_input__material_number_accessor.BaseMaterialNumberValueAccessor, _is_BaseMaterialNumberValueAccessor_default);
  const _checkValues = dart.privateName(material_input__material_number_accessor, "_checkValues");
  material_input__material_number_accessor.MaterialInt64ValueAccessor = class MaterialInt64ValueAccessor extends material_input__material_number_accessor.BaseMaterialNumberValueAccessor$(fixnum$.Int64) {
    [_checkValues](numberFormat, blurFormat) {
      if (numberFormat != null) {
        core.print("Warning: numberFormat only works with num and will overflow " + "if the number is larger than a native int, even when using " + "material-input[type=int64].");
        return blurFormat;
      }
      return true;
    }
    parseNumber(input) {
      if (input == null || input[$isEmpty]) {
        return null;
      }
      try {
        if (this[_numberFormat] != null) {
          input = dart.toString(this[_numberFormat].parse(input));
        }
        return fixnum$.Int64.parseInt(input);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (material_input__material_number_accessor.MaterialInt64ValueAccessor.new = function(input, control, changeUpdateAttr, keypressUpdateAttr, checkInteger, blurFormat, numberFormat) {
    material_input__material_number_accessor.MaterialInt64ValueAccessor.__proto__.new.call(this, material_input__material_input.MaterialInputComponent._check(input), control, utils__angular__properties__properties.attributeToBool(changeUpdateAttr, {defaultValue: false}), utils__angular__properties__properties.attributeToBool(keypressUpdateAttr, {defaultValue: false}), utils__angular__properties__properties.attributeToBool(blurFormat, {defaultValue: false}), numberFormat);
    if (!dart.test(this[_checkValues](numberFormat, utils__angular__properties__properties.attributeToBool(blurFormat, {defaultValue: false})))) dart.assertFailed("You must supply a NumberFormat if using blurFormat");
  }).prototype = material_input__material_number_accessor.MaterialInt64ValueAccessor.prototype;
  dart.addTypeTests(material_input__material_number_accessor.MaterialInt64ValueAccessor);
  dart.setMethodSignature(material_input__material_number_accessor.MaterialInt64ValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.MaterialInt64ValueAccessor.__proto__),
    [_checkValues]: dart.fnType(core.bool, [intl$.NumberFormat, core.bool]),
    parseNumber: dart.fnType(fixnum$.Int64, [core.String])
  }));
  const _checkInteger = dart.privateName(material_input__material_number_accessor, "_checkInteger");
  material_input__material_number_accessor.MaterialNumberValueAccessor = class MaterialNumberValueAccessor extends material_input__material_number_accessor.BaseMaterialNumberValueAccessor$(core.num) {
    parseNumber(input) {
      if (input == null || input === "NaN") return null;
      try {
        if (dart.test(this[_checkInteger]) && input[$contains](this[_numberFormat].symbols.DECIMAL_SEP)) {
          return null;
        }
        let value = this[_numberFormat].parse(input);
        return dart.test(this[_checkInteger]) ? value[$toInt]() : value;
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return null;
        } else
          throw e;
      }
    }
  };
  (material_input__material_number_accessor.MaterialNumberValueAccessor.new = function(input, control, changeUpdateAttr, keypressUpdateAttr, checkInteger, blurFormat, numberFormat) {
    this[_checkInteger] = utils__angular__properties__properties.attributeToBool(checkInteger, {defaultValue: false});
    material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__.new.call(this, material_input__material_input.MaterialInputComponent._check(input), control, utils__angular__properties__properties.attributeToBool(changeUpdateAttr, {defaultValue: false}), utils__angular__properties__properties.attributeToBool(keypressUpdateAttr, {defaultValue: false}), utils__angular__properties__properties.attributeToBool(blurFormat, {defaultValue: false}), (() => {
      let l = numberFormat;
      return l != null ? l : new intl$.NumberFormat.decimalPattern();
    })());
  }).prototype = material_input__material_number_accessor.MaterialNumberValueAccessor.prototype;
  dart.addTypeTests(material_input__material_number_accessor.MaterialNumberValueAccessor);
  dart.setMethodSignature(material_input__material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__),
    parseNumber: dart.fnType(core.num, [core.String])
  }));
  dart.setFieldSignature(material_input__material_number_accessor.MaterialNumberValueAccessor, () => ({
    __proto__: dart.getFields(material_input__material_number_accessor.MaterialNumberValueAccessor.__proto__),
    [_checkInteger]: dart.finalFieldType(core.bool)
  }));
  material_input__material_number_accessor.MaterialNumberValidator = class MaterialNumberValidator extends core.Object {
    validate(control) {
      if (!src__model.Control.is(control)) dart.assertFailed();
      if (control.value == null && !dart.test(strings$.isEmpty(src__model.Control.as(control).rawValue))) {
        return new (IdentityMapOfString$dynamic()).from(["material-input-number-error", material_input__material_number_accessor.MaterialNumberValidator.inputIsNotNumberMsg()]);
      }
      return null;
    }
    static inputIsNotNumberMsg() {
      return intl$.Intl.message("Enter a number", {desc: "Error message when input is not a number.", meaning: "Error message when input is not a number."});
    }
  };
  (material_input__material_number_accessor.MaterialNumberValidator.new = function() {
  }).prototype = material_input__material_number_accessor.MaterialNumberValidator.prototype;
  dart.addTypeTests(material_input__material_number_accessor.MaterialNumberValidator);
  material_input__material_number_accessor.MaterialNumberValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_accessor.MaterialNumberValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.MaterialNumberValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  material_input__material_number_accessor.CheckIntegerValidator = class CheckIntegerValidator extends core.Object {
    validate(abstractControl) {
      if (!src__model.Control.is(abstractControl)) dart.assertFailed("Can only be used with a Control");
      let control = src__model.Control.as(abstractControl);
      if (control.value == null && !dart.test(strings$.isBlank(control.rawValue))) {
        return new (IdentityMapOfString$dynamic()).from(["check-integer", material_input__material_number_accessor.CheckIntegerValidator.numberIsNotIntegerMsg()]);
      }
      return null;
    }
    static numberIsNotIntegerMsg() {
      return intl$.Intl.message("Enter a whole number", {desc: "Error message when input number is not an integer.", meaning: "Error message when input number is not an integer."});
    }
  };
  (material_input__material_number_accessor.CheckIntegerValidator.new = function() {
  }).prototype = material_input__material_number_accessor.CheckIntegerValidator.prototype;
  dart.addTypeTests(material_input__material_number_accessor.CheckIntegerValidator);
  material_input__material_number_accessor.CheckIntegerValidator[dart.implements] = () => [src__directives__validators.Validator];
  dart.setMethodSignature(material_input__material_number_accessor.CheckIntegerValidator, () => ({
    __proto__: dart.getMethods(material_input__material_number_accessor.CheckIntegerValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [src__model.AbstractControl])
  }));
  material_input__material_number_accessor.decimalNumberFormat = function() {
    return new intl$.NumberFormat.decimalPattern();
  };
  material_input__material_number_accessor.DecimalNumberFormatDirective = class DecimalNumberFormatDirective extends core.Object {};
  (material_input__material_number_accessor.DecimalNumberFormatDirective.new = function() {
  }).prototype = material_input__material_number_accessor.DecimalNumberFormatDirective.prototype;
  dart.addTypeTests(material_input__material_number_accessor.DecimalNumberFormatDirective);
  dart.trackLibraries("packages/angular_components/material_input/material_number_accessor.ddc", {
    "package:angular_components/material_input/material_number_accessor.dart": material_input__material_number_accessor
  }, '{"version":3,"sourceRoot":"","sources":["material_number_accessor.dart"],"names":[],"mappings":"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","file":"material_number_accessor.ddc.js"}');
  // Exports:
  return {
    material_input__material_number_accessor: material_input__material_number_accessor
  };
});

//# sourceMappingURL=material_number_accessor.ddc.js.map
