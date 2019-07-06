define(['dart_sdk', 'packages/intl/intl', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, intl, feature_detector, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const material_progress__material_progress = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $width = dartx.width;
  const $animate = dartx.animate;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  dart.defineLazy(material_progress__material_progress, {
    /*material_progress__material_progress.ARIA_VALUENOW_ATTR*/get ARIA_VALUENOW_ATTR() {
      return "aria-valuenow";
    },
    /*material_progress__material_progress._indeterminateTiming*/get _indeterminateTiming() {
      return dart.constMap(core.String, core.double, ["duration", 2000.0, "iterations", core.double.infinity]);
    }
  });
  const _changeDetector = dart.privateName(material_progress__material_progress, "_changeDetector");
  const _element = dart.privateName(material_progress__material_progress, "_element");
  const _useFancyAnimation = dart.privateName(material_progress__material_progress, "_useFancyAnimation");
  const _indeterminate = dart.privateName(material_progress__material_progress, "_indeterminate");
  const _isInitialized = dart.privateName(material_progress__material_progress, "_isInitialized");
  const _loadingValue = dart.privateName(material_progress__material_progress, "_loadingValue");
  const _primaryIndicator = dart.privateName(material_progress__material_progress, "_primaryIndicator");
  const _primaryAnimation = dart.privateName(material_progress__material_progress, "_primaryAnimation");
  const _secondaryIndicator = dart.privateName(material_progress__material_progress, "_secondaryIndicator");
  const _secondaryAnimation = dart.privateName(material_progress__material_progress, "_secondaryAnimation");
  const _tryFancyAnimation = dart.privateName(material_progress__material_progress, "_tryFancyAnimation");
  const _activeProgressValue = dart.privateName(material_progress__material_progress, "_activeProgressValue");
  let const$;
  const _activeAndSecondaryProgressValue = dart.privateName(material_progress__material_progress, "_activeAndSecondaryProgressValue");
  let const$0;
  const _calcRatio = dart.privateName(material_progress__material_progress, "_calcRatio");
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  material_progress__material_progress.MaterialProgressComponent = class MaterialProgressComponent extends core.Object {
    get activeProgress() {
      return this[activeProgress];
    }
    set activeProgress(value) {
      this[activeProgress] = value;
    }
    get secondaryProgress() {
      return this[secondaryProgress];
    }
    set secondaryProgress(value) {
      this[secondaryProgress] = value;
    }
    get min() {
      return this[min];
    }
    set min(value) {
      this[min] = value;
    }
    get max() {
      return this[max];
    }
    set max(value) {
      this[max] = value;
    }
    set indeterminate(b) {
      this[_indeterminate] = b;
      if (dart.test(this.indeterminate)) {
        this[_tryFancyAnimation]();
      } else {
        let t = this[_primaryAnimation];
        t == null ? null : t.cancel();
        let t$ = this[_secondaryAnimation];
        t$ == null ? null : t$.cancel();
      }
    }
    get indeterminate() {
      return this[_indeterminate];
    }
    get useFallbackAnimation() {
      return dart.test(this.indeterminate) && (!dart.test(this[_useFancyAnimation]) || !dart.test(utils__browser__feature_detector__feature_detector.supportsAnimationApi));
    }
    get ariaValueNow() {
      return this.indeterminate === true ? null : dart.str(this.activeProgress);
    }
    get ariaValue() {
      return dart.test(this.indeterminate) ? this[_loadingValue] : this[_activeProgressValue](this.activeProgress);
    }
    [_activeProgressValue](activeProgress) {
      return intl$.Intl.message("active progress " + dart.str(activeProgress), {name: "MaterialProgressComponent__activeProgressValue", desc: "Label text for active progress", args: JSArrayOfObject().of([activeProgress]), examples: const$ || (const$ = dart.constMap(core.String, core.Object, ["activeProgress", 20]))});
    }
    get activeAndSecondaryProgressValue() {
      return this[_activeAndSecondaryProgressValue](this.activeProgress, this.secondaryProgress);
    }
    [_activeAndSecondaryProgressValue](activeProgress, secondaryProgress) {
      return intl$.Intl.message("active progress " + dart.str(activeProgress) + " secondary progress " + dart.str(secondaryProgress), {name: "MaterialProgressComponent__activeAndSecondaryProgressValue", desc: "Label text for active and secondary progress", args: JSArrayOfObject().of([activeProgress, secondaryProgress]), examples: const$0 || (const$0 = dart.constMap(core.String, core.Object, ["activeProgress", 5, "secondaryProgress", 25]))});
    }
    get primaryTransform() {
      return "scaleX(" + dart.str(this[_calcRatio](this.activeProgress)) + ")";
    }
    get secondaryTransform() {
      return "scaleX(" + dart.str(this[_calcRatio](this.secondaryProgress)) + ")";
    }
    [_calcRatio](value) {
      return (value[$clamp](this.min, this.max) - dart.notNull(this.min)) / (dart.notNull(this.max) - dart.notNull(this.min));
    }
    set primary(value) {
      this[_primaryIndicator] = html.DivElement._check(value);
    }
    set secondary(value) {
      this[_secondaryIndicator] = html.DivElement._check(value);
    }
    ngAfterViewInit() {
      this[_isInitialized] = true;
      if (dart.test(this.indeterminate)) this[_tryFancyAnimation]();
    }
    ngOnDestroy() {
      let t = this[_primaryAnimation];
      t == null ? null : t.cancel();
      let t$ = this[_secondaryAnimation];
      t$ == null ? null : t$.cancel();
      this[_primaryAnimation] = null;
      this[_secondaryAnimation] = null;
      this[_primaryIndicator] = null;
      this[_secondaryIndicator] = null;
    }
    [_tryFancyAnimation]() {
      if (!dart.test(this.indeterminate) || !dart.test(this[_useFancyAnimation]) || !dart.test(this[_isInitialized]) || !dart.test(utils__browser__feature_detector__feature_detector.supportsAnimationApi)) return;
      let width = this[_element].getBoundingClientRect()[$width];
      if (width === 0) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_useFancyAnimation] = false;
          this[_changeDetector].markForCheck();
        }, VoidToNull()));
        return;
      }
      let primaryKeyframes = JSArrayOfMapOfString$Object().of([const$1 || (const$1 = dart.constMap(core.String, core.String, ["transform", "translateX(0px) scaleX(0)"])), const$2 || (const$2 = dart.constMap(core.String, core.Object, ["transform", "translateX(0px) scaleX(0.5)", "offset", 0.25])), new (IdentityMapOfString$Object()).from(["transform", "translateX(" + dart.str(0.25 * dart.notNull(width)) + "px) scaleX(0.75)", "offset", 0.5]), new (IdentityMapOfString$Object()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0)", "offset", 0.75]), new (IdentityMapOfString$String()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0)"])]);
      let secondaryKeyframes = JSArrayOfMapOfString$Object().of([const$3 || (const$3 = dart.constMap(core.String, core.String, ["transform", "translateX(0px) scaleX(0)"])), const$4 || (const$4 = dart.constMap(core.String, core.Object, ["transform", "translateX(0px) scaleX(0)", "offset", 0.6])), const$5 || (const$5 = dart.constMap(core.String, core.Object, ["transform", "translateX(0px) scaleX(0.6)", "offset", 0.8])), new (IdentityMapOfString$String()).from(["transform", "translateX(" + dart.str(width) + "px) scaleX(0.1)"])]);
      this[_primaryAnimation] = this[_primaryIndicator][$animate](primaryKeyframes, material_progress__material_progress._indeterminateTiming);
      this[_secondaryAnimation] = this[_secondaryIndicator][$animate](secondaryKeyframes, material_progress__material_progress._indeterminateTiming);
    }
  };
  (material_progress__material_progress.MaterialProgressComponent.new = function(disableFancyAnimation, changeDetector, element) {
    this[activeProgress] = 0;
    this[secondaryProgress] = 0;
    this[min] = 0;
    this[max] = 100;
    this[_indeterminate] = false;
    this[_isInitialized] = false;
    this[_loadingValue] = intl$.Intl.message("loading", {desc: "Label text for loading progress"});
    this[_primaryIndicator] = null;
    this[_primaryAnimation] = null;
    this[_secondaryIndicator] = null;
    this[_secondaryAnimation] = null;
    this[_changeDetector] = changeDetector;
    this[_element] = element;
    this[_useFancyAnimation] = disableFancyAnimation == null;
  }).prototype = material_progress__material_progress.MaterialProgressComponent.prototype;
  dart.addTypeTests(material_progress__material_progress.MaterialProgressComponent);
  const activeProgress = Symbol("MaterialProgressComponent.activeProgress");
  const secondaryProgress = Symbol("MaterialProgressComponent.secondaryProgress");
  const min = Symbol("MaterialProgressComponent.min");
  const max = Symbol("MaterialProgressComponent.max");
  material_progress__material_progress.MaterialProgressComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_progress__material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getMethods(material_progress__material_progress.MaterialProgressComponent.__proto__),
    [_activeProgressValue]: dart.fnType(core.String, [core.int]),
    [_activeAndSecondaryProgressValue]: dart.fnType(core.String, [core.int, core.int]),
    [_calcRatio]: dart.fnType(core.double, [core.int]),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_tryFancyAnimation]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_progress__material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getGetters(material_progress__material_progress.MaterialProgressComponent.__proto__),
    indeterminate: core.bool,
    useFallbackAnimation: core.bool,
    ariaValueNow: core.String,
    ariaValue: core.String,
    activeAndSecondaryProgressValue: core.String,
    primaryTransform: core.String,
    secondaryTransform: core.String
  }));
  dart.setSetterSignature(material_progress__material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getSetters(material_progress__material_progress.MaterialProgressComponent.__proto__),
    indeterminate: core.bool,
    primary: html.HtmlElement,
    secondary: html.HtmlElement
  }));
  dart.setLibraryUri(material_progress__material_progress.MaterialProgressComponent, "package:angular_components/material_progress/material_progress.dart");
  dart.setFieldSignature(material_progress__material_progress.MaterialProgressComponent, () => ({
    __proto__: dart.getFields(material_progress__material_progress.MaterialProgressComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_element]: dart.finalFieldType(html.HtmlElement),
    [_useFancyAnimation]: dart.fieldType(core.bool),
    activeProgress: dart.fieldType(core.int),
    secondaryProgress: dart.fieldType(core.int),
    min: dart.fieldType(core.int),
    max: dart.fieldType(core.int),
    [_indeterminate]: dart.fieldType(core.bool),
    [_isInitialized]: dart.fieldType(core.bool),
    [_loadingValue]: dart.fieldType(core.String),
    [_primaryIndicator]: dart.fieldType(html.DivElement),
    [_primaryAnimation]: dart.fieldType(html.Animation),
    [_secondaryIndicator]: dart.fieldType(html.DivElement),
    [_secondaryAnimation]: dart.fieldType(html.Animation)
  }));
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.ddc", {
    "package:angular_components/material_progress/material_progress.dart": material_progress__material_progress
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MAWa,uDAAkB;YAAG;;MACR,yDAAoB;YAAG,0CAC/C,YAAY,QACZ,cAAc,WAAM,SAAS;;;;;;;;;;;;;;;;;;;;;;;;;IAmBzB;;;;;;IAKA;;;;;;IAMA;;;;;;IAMA;;;;;;sBAMc,CAAM;AACtB,0BAAc,GAAG,CAAC;AAElB,oBAAI,kBAAa,GAAE;AACjB,gCAAkB;aACb;AACL,uCAAiB;;AACjB,0CAAmB;;;IAEvB;;YAG0B,qBAAc;;;YAOtB,WAAd,kBAAa,iBAAM,wBAAkB,gBAAK,uEAAoB;IAAC;;YAExC,mBAAa,KAAI,OAAO,OAAO,SAAG,mBAAc;IAAE;;uBAGzE,kBAAa,IAAG,mBAAa,GAAG,0BAAoB,CAAC,mBAAc;IAAC;2BAK5C,cAAkB;YAC1C,WAAI,QAAQ,CAAC,8BAAkB,cAAc,UACnC,wDACA,wCACA,sBAAC,cAAc,cACX,6DAAO,kBAAkB;IAAI;;YAG3C,uCAAgC,CAAC,mBAAc,EAAE,sBAAiB;IAAC;uCAG/D,cAAkB,EAAE,iBAAqB;YAC7C,WAAI,QAAQ,CACR,8BAAkB,cAAc,sCAAqB,iBAAiB,UAChE,oEACA,sDACA,sBAAC,cAAc,EAAE,iBAAiB,cAC9B,+DAAO,kBAAkB,GAAG,qBAAqB;IAAI;;YAExC,sBAAU,gBAAU,CAAC,mBAAc;IAAI;;YAErC,sBAAU,gBAAU,CAAC,sBAAiB;IAAI;iBAEzD,KAAS;YAAmC,EAA7B,AAAsB,KAAjB,QAAM,CAAC,QAAG,EAAE,QAAG,iBAAI,QAAG,MAAS,aAAJ,QAAG,iBAAG,QAAG;IAAC;gBAG/D,KAAiB;AAC3B,6BAAiB,0BAAG,KAAK;IAC3B;kBAMc,KAAiB;AAC7B,+BAAmB,0BAAG,KAAK;IAC7B;;AAaE,0BAAc,GAAG;AACjB,oBAAI,kBAAa,GAAE,wBAAkB;IACvC;;AAIE,qCAAiB;;AACjB,wCAAmB;;AACnB,6BAAiB,GAAG;AACpB,+BAAmB,GAAG;AACtB,6BAAiB,GAAG;AACpB,+BAAmB,GAAG;IACxB;;AAIE,qBAAK,kBAAa,gBACb,wBAAkB,gBAClB,oBAAc,gBACd,uEAAoB,GAAE;AAE3B,UAAM,QAAQ,cAAQ,sBAAsB,UAAQ;AACpD,UAAI,KAAK,KAAI,GAAG;AAMd,+BAAiB,CAAC;AAChB,kCAAkB,GAAG;AACrB,+BAAe,aAAa;;AAE9B;;AAGF,UAAM,mBAAmB,kCACvB,+DAAO,aAAa,gCACpB,+DAAO,aAAa,+BAA+B,UAAU,SAC7D,yCACE,aAAa,yBAAc,AAAK,oBAAE,KAAK,yBACvC,UAAU,OAEZ,yCAAC,aAAa,yBAAc,KAAK,qBAAiB,UAAU,QAC5D,yCAAC,aAAa,yBAAc,KAAK;AAEnC,UAAM,qBAAqB,kCACzB,+DAAO,aAAa,gCACpB,+DAAO,aAAa,6BAA6B,UAAU,QAC3D,+DAAO,aAAa,+BAA+B,UAAU,QAC7D,yCAAC,aAAa,yBAAc,KAAK;AAEnC,6BAAiB,GACb,uBAAiB,UAAQ,CAAC,gBAAgB,EAAE,yDAAoB;AACpE,+BAAmB,GACf,yBAAmB,UAAQ,CAAC,kBAAkB,EAAE,yDAAoB;IAC1E;;iFA9DI,qBAAkE;IA9FlE,oBAAc,GAAG;IAKjB,uBAAiB,GAAG;IAMpB,SAAG,GAAG;IAMN,SAAG,GAAG;IAiBL,oBAAc,GAAG;IAIjB,oBAAc,GAAG;IAWf,mBAAa,GAChB,UAAI,QAAQ,CAAC,kBAAiB;IAgCvB,uBAAiB;IAClB,uBAAiB;IAOhB,yBAAmB;IACpB,yBAAmB;IAIpB,qBAAe;IACf,cAAQ;IACX,wBAAkB,GAAG,qBAAqB,IAAI;EAAI","file":"material_progress.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress: material_progress__material_progress
  };
});

//# sourceMappingURL=material_progress.ddc.js.map
