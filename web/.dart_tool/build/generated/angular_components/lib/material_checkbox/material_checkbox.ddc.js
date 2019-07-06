define(['dart_sdk', 'packages/angular_components/model/ui/icon', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/utils/browser/events/events', 'packages/angular_forms/src/directives', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, icon, id_generator, events, directives, has_disabled, focus_interface, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const material_checkbox__material_checkbox = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  const $target = dartx.target;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let boolTodynamic = () => (boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))();
  let ControlValueAccessorOfbool = () => (ControlValueAccessorOfbool = dart.constFn(src__directives__control_value_accessor.ControlValueAccessor$(core.bool)))();
  dart.defineLazy(material_checkbox__material_checkbox, {
    /*material_checkbox__material_checkbox.uncheckedIcon*/get uncheckedIcon() {
      return dart.const(new model__ui__icon.Icon.new("check_box_outline_blank"));
    },
    /*material_checkbox__material_checkbox.checkedIcon*/get checkedIcon() {
      return dart.const(new model__ui__icon.Icon.new("check_box"));
    },
    /*material_checkbox__material_checkbox.indeterminateIcon*/get indeterminateIcon() {
      return dart.const(new model__ui__icon.Icon.new("indeterminate_check_box"));
    },
    /*material_checkbox__material_checkbox.uncheckedAriaState*/get uncheckedAriaState() {
      return "false";
    },
    /*material_checkbox__material_checkbox.checkedAriaState*/get checkedAriaState() {
      return "true";
    },
    /*material_checkbox__material_checkbox.indeterminateAriaState*/get indeterminateAriaState() {
      return "mixed";
    }
  });
  const _root = dart.privateName(material_checkbox__material_checkbox, "_root");
  const _changeDetector = dart.privateName(material_checkbox__material_checkbox, "_changeDetector");
  const _defaultTabIndex = dart.privateName(material_checkbox__material_checkbox, "_defaultTabIndex");
  const _onTouched = dart.privateName(material_checkbox__material_checkbox, "_onTouched");
  const _onChecked = dart.privateName(material_checkbox__material_checkbox, "_onChecked");
  const _onIndeterminate = dart.privateName(material_checkbox__material_checkbox, "_onIndeterminate");
  const _onChange = dart.privateName(material_checkbox__material_checkbox, "_onChange");
  const _checked = dart.privateName(material_checkbox__material_checkbox, "_checked");
  const _focused = dart.privateName(material_checkbox__material_checkbox, "_focused");
  const _isKeyboardEvent = dart.privateName(material_checkbox__material_checkbox, "_isKeyboardEvent");
  const _checkedStr = dart.privateName(material_checkbox__material_checkbox, "_checkedStr");
  const _indeterminate = dart.privateName(material_checkbox__material_checkbox, "_indeterminate");
  const _icon = dart.privateName(material_checkbox__material_checkbox, "_icon");
  const _syncAriaChecked = dart.privateName(material_checkbox__material_checkbox, "_syncAriaChecked");
  const _setStates = dart.privateName(material_checkbox__material_checkbox, "_setStates");
  material_checkbox__material_checkbox.MaterialCheckboxComponent = class MaterialCheckboxComponent extends core.Object {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    writeValue(isChecked) {
      core.bool._check(isChecked);
      if (isChecked == null) return;
      this[_setStates]({checked: isChecked, emitEvent: false});
    }
    registerOnChange(callback) {
      this.onChecked.listen(dart.fn(checked => callback(checked), boolTodynamic()));
    }
    registerOnTouched(callback) {
      this[_onTouched] = callback;
    }
    get onChecked() {
      return this[_onChecked].stream;
    }
    get onIndeterminate() {
      return this[_onIndeterminate].stream;
    }
    get onChange() {
      return this[_onChange].stream;
    }
    get indeterminateToChecked() {
      return this[indeterminateToChecked];
    }
    set indeterminateToChecked(value) {
      this[indeterminateToChecked] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabIndex() {
      return dart.test(this.disabled) ? "-1" : this[_defaultTabIndex];
    }
    set checked(newValue) {
      if (this[_checked] == newValue) return;
      this[_setStates]({checked: newValue});
    }
    get checked() {
      return this[_checked];
    }
    get readOnly() {
      return this[readOnly];
    }
    set readOnly(value) {
      this[readOnly] = value;
    }
    get showFocus() {
      return dart.test(this[_focused]) && dart.test(this[_isKeyboardEvent]);
    }
    get checkedStr() {
      return this[_checkedStr];
    }
    set indeterminate(newValue) {
      if (this[_indeterminate] == newValue) return;
      this[_setStates]({indeterminate: newValue});
    }
    get indeterminate() {
      return this[_indeterminate];
    }
    [_setStates](opts) {
      let checked = opts && 'checked' in opts ? opts.checked : false;
      let indeterminate = opts && 'indeterminate' in opts ? opts.indeterminate : false;
      let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : true;
      if (!(!dart.test(checked) || !dart.test(indeterminate))) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/material_checkbox/material_checkbox.dart", 192, 12, "!checked || !indeterminate");
      let prevChecked = this[_checked];
      let prevIndeterminate = this[_indeterminate];
      let prevState = this[_checkedStr];
      this[_checked] = checked;
      this[_indeterminate] = indeterminate;
      this[_checkedStr] = dart.test(indeterminate) ? "mixed" : dart.test(this[_checked]) ? "true" : "false";
      this[_icon] = dart.test(this[_indeterminate]) ? material_checkbox__material_checkbox.indeterminateIcon : dart.test(this[_checked]) ? material_checkbox__material_checkbox.checkedIcon : material_checkbox__material_checkbox.uncheckedIcon;
      if (dart.test(emitEvent) && this[_checked] != prevChecked) {
        this[_onChecked].add(this[_checked]);
      }
      if (dart.test(emitEvent) && this[_indeterminate] != prevIndeterminate) {
        this[_onIndeterminate].add(this[_indeterminate]);
      }
      if (this[_checkedStr] != prevState) {
        this[_syncAriaChecked]();
        this[_onChange].add(this[_checkedStr]);
      }
    }
    [_syncAriaChecked]() {
      if (this[_root] == null) return;
      this[_root][$attributes][$_set]("aria-checked", this[_checkedStr]);
      this[_changeDetector] == null ? null : this[_changeDetector].markForCheck();
    }
    get icon() {
      return this[_icon];
    }
    get themeColor() {
      return this[themeColor];
    }
    set themeColor(value) {
      this[themeColor] = value;
    }
    get rippleColor() {
      return dart.test(this.checked) ? this.themeColor : "";
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get contentId() {
      return this[contentId];
    }
    set contentId(value) {
      super.contentId = value;
    }
    toggleChecked() {
      if (dart.test(this.disabled) || dart.test(this.readOnly)) return;
      if (!dart.test(this.indeterminate) && !dart.test(this.checked)) {
        this[_setStates]({checked: true});
      } else if (dart.test(this.checked)) {
        this[_setStates]();
      } else {
        if (!dart.test(this.indeterminate)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/material_checkbox/material_checkbox.dart", 272, 14, "indeterminate");
        this[_setStates]({checked: this.indeterminateToChecked});
      }
    }
    focus() {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = true;
      this[_root].focus();
    }
    handleKeyUp(event) {
      if (!dart.equals(event[$target], this[_root])) return;
      this[_isKeyboardEvent] = true;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_isKeyboardEvent] = false;
      this.toggleChecked();
    }
    handleMouseDown(mouseEvent) {
      if (dart.test(this.readOnly)) {
        mouseEvent.preventDefault();
      }
    }
    handleKeyPress(event) {
      if (dart.test(this.disabled)) return;
      if (!dart.equals(event[$target], this[_root])) return;
      if (dart.test(utils__browser__events__events.isSpaceKey(event))) {
        event.preventDefault();
        this[_isKeyboardEvent] = true;
        this.toggleChecked();
      }
    }
    handleFocus(_) {
      this[_focused] = true;
    }
    handleBlur(event) {
      this[_focused] = false;
      let t = this[_onTouched];
      t == null ? null : dart.dsend(t, 'call', []);
    }
    onDisabledChanged(isDisabled) {
      this.disabled = isDisabled;
      this[_changeDetector] == null ? null : this[_changeDetector].markForCheck();
    }
    get focusDelegate() {
      return this[focusDelegate];
    }
    set focusDelegate(value) {
      this[focusDelegate] = value;
    }
    ngOnDestroy() {}
  };
  (material_checkbox__material_checkbox.MaterialCheckboxComponent.new = function(root, changeDetector, cd, hostTabIndex, role) {
    this[_onTouched] = null;
    this[_onChecked] = StreamControllerOfbool().broadcast();
    this[_onIndeterminate] = StreamControllerOfbool().broadcast();
    this[_onChange] = StreamControllerOfString().broadcast();
    this[indeterminateToChecked] = false;
    this[disabled] = false;
    this[_checked] = false;
    this[readOnly] = false;
    this[_focused] = false;
    this[_isKeyboardEvent] = false;
    this[_checkedStr] = "false";
    this[_indeterminate] = false;
    this[_icon] = material_checkbox__material_checkbox.uncheckedIcon;
    this[themeColor] = null;
    this[label] = null;
    this[contentId] = new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[focusDelegate] = null;
    this[_root] = root;
    this[_changeDetector] = changeDetector;
    this[_defaultTabIndex] = (() => {
      let l = hostTabIndex == null ? null : hostTabIndex[$isNotEmpty];
      return l != null ? l : false;
    })() ? hostTabIndex : "0";
    this[role$] = role != null ? role : "checkbox";
    if (cd != null) {
      cd.valueAccessor = this;
    }
    this[_syncAriaChecked]();
  }).prototype = material_checkbox__material_checkbox.MaterialCheckboxComponent.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox.MaterialCheckboxComponent);
  const role$ = Symbol("MaterialCheckboxComponent.role");
  const indeterminateToChecked = Symbol("MaterialCheckboxComponent.indeterminateToChecked");
  const disabled = Symbol("MaterialCheckboxComponent.disabled");
  const readOnly = Symbol("MaterialCheckboxComponent.readOnly");
  const themeColor = Symbol("MaterialCheckboxComponent.themeColor");
  const label = Symbol("MaterialCheckboxComponent.label");
  const contentId = Symbol("MaterialCheckboxComponent.contentId");
  const focusDelegate = Symbol("MaterialCheckboxComponent.focusDelegate");
  material_checkbox__material_checkbox.MaterialCheckboxComponent[dart.implements] = () => [ControlValueAccessorOfbool(), interfaces__has_disabled.HasDisabled, focus__focus_interface.Focusable, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    writeValue: dart.fnType(dart.void, [core.Object]),
    registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [core.bool], {rawValue: core.String})]),
    registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    [_setStates]: dart.fnType(dart.void, [], {checked: core.bool, indeterminate: core.bool, emitEvent: core.bool}),
    [_syncAriaChecked]: dart.fnType(dart.void, []),
    toggleChecked: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    handleKeyUp: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleMouseDown: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent]),
    handleFocus: dart.fnType(dart.void, [dart.dynamic]),
    handleBlur: dart.fnType(dart.void, [html.Event]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getGetters(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    onChecked: async.Stream$(core.bool),
    onIndeterminate: async.Stream$(core.bool),
    onChange: async.Stream$(core.String),
    tabIndex: core.String,
    checked: core.bool,
    showFocus: core.bool,
    checkedStr: core.String,
    indeterminate: core.bool,
    icon: model__ui__icon.Icon,
    rippleColor: core.String
  }));
  dart.setSetterSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getSetters(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    checked: core.bool,
    indeterminate: core.bool
  }));
  dart.setLibraryUri(material_checkbox__material_checkbox.MaterialCheckboxComponent, "package:angular_components/material_checkbox/material_checkbox.dart");
  dart.setFieldSignature(material_checkbox__material_checkbox.MaterialCheckboxComponent, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox.MaterialCheckboxComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_root]: dart.finalFieldType(html.HtmlElement),
    [_defaultTabIndex]: dart.finalFieldType(core.String),
    role: dart.finalFieldType(core.String),
    [_onTouched]: dart.fieldType(core.Function),
    [_onChecked]: dart.finalFieldType(StreamControllerOfbool()),
    [_onIndeterminate]: dart.finalFieldType(StreamControllerOfbool()),
    [_onChange]: dart.finalFieldType(StreamControllerOfString()),
    indeterminateToChecked: dart.fieldType(core.bool),
    disabled: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(core.bool),
    readOnly: dart.fieldType(core.bool),
    [_focused]: dart.fieldType(core.bool),
    [_isKeyboardEvent]: dart.fieldType(core.bool),
    [_checkedStr]: dart.fieldType(core.String),
    [_indeterminate]: dart.fieldType(core.bool),
    [_icon]: dart.fieldType(model__ui__icon.Icon),
    themeColor: dart.fieldType(core.String),
    label: dart.fieldType(core.String),
    contentId: dart.finalFieldType(core.String),
    focusDelegate: dart.fieldType(async.Future)
  }));
  dart.defineLazy(material_checkbox__material_checkbox.MaterialCheckboxComponent, {
    /*material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass*/get hostClass() {
      return "themeable";
    }
  });
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.ddc", {
    "package:angular_components/material_checkbox/material_checkbox.dart": material_checkbox__material_checkbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.dart"],"names":[],"mappings":"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","file":"material_checkbox.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox: material_checkbox__material_checkbox
  };
});

//# sourceMappingURL=material_checkbox.ddc.js.map
