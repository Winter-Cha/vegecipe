define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/focus/focus', 'packages/angular_components/mixins/has_tab_index', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, events, focus, has_tab_index, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const focus__focus = focus.focus__focus;
  const mixins__has_tab_index = has_tab_index.mixins__has_tab_index;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const button_decorator__button_decorator = Object.create(dart.library);
  let StreamControllerOfUIEvent = () => (StreamControllerOfUIEvent = dart.constFn(async.StreamController$(html.UIEvent)))();
  const _nonTabbableIndex = dart.privateName(button_decorator__button_decorator, "_nonTabbableIndex");
  const _shouldHandleSpaceKey = dart.privateName(button_decorator__button_decorator, "_shouldHandleSpaceKey");
  const _trigger = dart.privateName(button_decorator__button_decorator, "_trigger");
  const _hostTabIndex = dart.privateName(button_decorator__button_decorator, "_hostTabIndex");
  const RootFocusable_HasTabIndex$ = class RootFocusable_HasTabIndex extends focus__focus.RootFocusable {};
  (RootFocusable_HasTabIndex$.new = function(_root) {
    mixins__has_tab_index.HasTabIndex.new.call(this);
    RootFocusable_HasTabIndex$.__proto__.new.call(this, _root);
  }).prototype = RootFocusable_HasTabIndex$.prototype;
  dart.applyMixin(RootFocusable_HasTabIndex$, mixins__has_tab_index.HasTabIndex);
  button_decorator__button_decorator.ButtonDirective = class ButtonDirective extends RootFocusable_HasTabIndex$ {
    get trigger() {
      return this[_trigger].stream;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      this[role$] = value;
    }
    get ariaRole() {
      return this.role;
    }
    get disabledStr() {
      return dart.str(this.disabled);
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get hostTabIndex() {
      return dart.test(this.tabbable) && !dart.test(this.disabled) ? this[_hostTabIndex] : this[_nonTabbableIndex];
    }
    set tabindex(value) {
      this[_hostTabIndex] = value;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_trigger].add(mouseEvent);
    }
    handleKeyPress(keyboardEvent) {
      if (dart.test(this.disabled)) return;
      if (dart.test(utils__browser__events__events.isSpaceKey(keyboardEvent)) && !dart.test(this[_shouldHandleSpaceKey])) return;
      let keyCode = keyboardEvent.keyCode;
      if (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(keyboardEvent))) {
        this[_trigger].add(keyboardEvent);
        keyboardEvent.preventDefault();
      }
    }
  };
  (button_decorator__button_decorator.ButtonDirective.new = function(element, role, opts) {
    let addTabIndexWhenNonTabbable = opts && 'addTabIndexWhenNonTabbable' in opts ? opts.addTabIndexWhenNonTabbable : false;
    let handleSpacePresses = opts && 'handleSpacePresses' in opts ? opts.handleSpacePresses : true;
    this[_trigger] = StreamControllerOfUIEvent().broadcast({sync: true});
    this[_hostTabIndex] = "0";
    this[disabled] = false;
    this[tabbable] = true;
    this[role$] = role != null ? role : "button";
    this[_nonTabbableIndex] = dart.test(addTabIndexWhenNonTabbable) ? "-1" : null;
    this[_shouldHandleSpaceKey] = handleSpacePresses != null ? handleSpacePresses : true;
    button_decorator__button_decorator.ButtonDirective.__proto__.new.call(this, element);
  }).prototype = button_decorator__button_decorator.ButtonDirective.prototype;
  dart.addTypeTests(button_decorator__button_decorator.ButtonDirective);
  const role$ = Symbol("ButtonDirective.role");
  const disabled = Symbol("ButtonDirective.disabled");
  const tabbable = Symbol("ButtonDirective.tabbable");
  button_decorator__button_decorator.ButtonDirective[dart.implements] = () => [interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getMethods(button_decorator__button_decorator.ButtonDirective.__proto__),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getGetters(button_decorator__button_decorator.ButtonDirective.__proto__),
    trigger: async.Stream$(html.UIEvent),
    ariaRole: core.String,
    disabledStr: core.String
  }));
  dart.setSetterSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getSetters(button_decorator__button_decorator.ButtonDirective.__proto__),
    tabindex: core.String
  }));
  dart.setFieldSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getFields(button_decorator__button_decorator.ButtonDirective.__proto__),
    [_trigger]: dart.finalFieldType(StreamControllerOfUIEvent()),
    [_hostTabIndex]: dart.fieldType(core.String),
    [_nonTabbableIndex]: dart.finalFieldType(core.String),
    [_shouldHandleSpaceKey]: dart.fieldType(core.bool),
    role: dart.fieldType(core.String),
    disabled: dart.fieldType(core.bool),
    tabbable: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator.ddc", {
    "package:angular_components/button_decorator/button_decorator.dart": button_decorator__button_decorator
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;YA+BiC,eAAQ,OAAO;;IAmBvC;;;;;;;YAGgB,UAAI;;;YAID,UAAE,aAAQ;IAAC;IAKhC;;;;;;IAIA;;;;;;;uBAGD,aAAQ,gBAAK,aAAQ,IAAG,mBAAa,GAAG,uBAAiB;;iBAMhD,KAAY;AACvB,yBAAa,GAAG,KAAK;IACvB;gBAIiB,UAAqB;AACpC,oBAAI,aAAQ,GAAE;AACd,oBAAQ,IAAI,CAAC,UAAU;IACzB;mBAIoB,aAA2B;AAC7C,oBAAI,aAAQ,GAAE;AACd,oBAAI,yCAAU,CAAC,aAAa,iBAAM,2BAAqB,GAAE;AACzD,UAAI,UAAU,aAAa,QAAQ;AACnC,UAAI,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,aAAa,IAAG;AACzD,sBAAQ,IAAI,CAAC,aAAa;AAE1B,qBAAa,eAAe;;IAEhC;;qEA1DgB,OAAe,EAAE,IAA8B;QACrD,8GAA6B;QAAY,sFAAqB;IAPlE,cAAQ,GAAG,qCAAmC,QAAO;IAEpD,mBAAa,GAAG;IA2BlB,cAAQ,GAAG;IAIX,cAAQ,GAAG;IAzBL,WAAI,GAAI,IAAI,WAAJ,IAAI,GAAI;IAGrB,uBAAiB,aAAG,0BAA0B,IAAG,OAAO;IACxD,2BAAqB,GAAG,kBAAkB,WAAlB,kBAAkB,GAAI;AAC9C,gFAAM,OAAO;EAAC","file":"button_decorator.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator: button_decorator__button_decorator
  };
});

//# sourceMappingURL=button_decorator.ddc.js.map
