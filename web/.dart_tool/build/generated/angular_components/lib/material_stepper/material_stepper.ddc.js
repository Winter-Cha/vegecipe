define(['dart_sdk', 'packages/angular_components/material_stepper/material_step', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/material_stepper/common', 'packages/angular_components/utils/browser/events/events', 'packages/intl/intl'], function(dart_sdk, material_step, properties, async_action, common, events, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_stepper__material_step = material_step.material_stepper__material_step;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const src__model__action__async_action_controller = async_action.src__model__action__async_action_controller;
  const material_stepper__common = common.material_stepper__common;
  const utils__browser__events__events = events.utils__browser__events__events;
  const intl$ = intl.intl;
  const material_stepper__material_stepper = Object.create(dart.library);
  const $clear = dartx.clear;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $_set = dartx._set;
  let JSArrayOfStepDirective = () => (JSArrayOfStepDirective = dart.constFn(_interceptors.JSArray$(material_stepper__material_step.StepDirective)))();
  let StreamControllerOfStepDirective = () => (StreamControllerOfStepDirective = dart.constFn(async.StreamController$(material_stepper__material_step.StepDirective)))();
  let LinkedMapOfStepDirective$String = () => (LinkedMapOfStepDirective$String = dart.constFn(_js_helper.LinkedMap$(material_stepper__material_step.StepDirective, core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let AsyncActionControllerOfbool = () => (AsyncActionControllerOfbool = dart.constFn(src__model__action__async_action_controller.AsyncActionController$(core.bool)))();
  let VoidToObject = () => (VoidToObject = dart.constFn(dart.fnType(core.Object, [])))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let StepDirectiveToStepDirective = () => (StepDirectiveToStepDirective = dart.constFn(dart.fnType(material_stepper__material_step.StepDirective, [material_stepper__material_step.StepDirective])))();
  let IterableOfStepDirective = () => (IterableOfStepDirective = dart.constFn(core.Iterable$(material_stepper__material_step.StepDirective)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfStepDirective = () => (ListOfStepDirective = dart.constFn(core.List$(material_stepper__material_step.StepDirective)))();
  let MapOfStepDirective$String = () => (MapOfStepDirective$String = dart.constFn(core.Map$(material_stepper__material_step.StepDirective, core.String)))();
  const _orientation = dart.privateName(material_stepper__material_stepper, "_orientation");
  const _size = dart.privateName(material_stepper__material_stepper, "_size");
  const _legalJumps = dart.privateName(material_stepper__material_stepper, "_legalJumps");
  const _stepDirectiveList = dart.privateName(material_stepper__material_stepper, "_stepDirectiveList");
  const _activeStepController = dart.privateName(material_stepper__material_stepper, "_activeStepController");
  const _stepAriaLabel = dart.privateName(material_stepper__material_stepper, "_stepAriaLabel");
  const _stickyHeader = dart.privateName(material_stepper__material_stepper, "_stickyHeader");
  const _onStepsChange = dart.privateName(material_stepper__material_stepper, "_onStepsChange");
  const _stepTo = dart.privateName(material_stepper__material_stepper, "_stepTo");
  const _recalculatePropertiesOfSteps = dart.privateName(material_stepper__material_stepper, "_recalculatePropertiesOfSteps");
  let const$;
  material_stepper__material_stepper.MaterialStepperComponent = class MaterialStepperComponent extends core.Object {
    get steps() {
      return this[steps];
    }
    set steps(value) {
      this[steps] = value;
    }
    get activeStepIndex() {
      return this[activeStepIndex];
    }
    set activeStepIndex(value) {
      this[activeStepIndex] = value;
    }
    get stepperDone() {
      return this[stepperDone];
    }
    set stepperDone(value) {
      this[stepperDone] = value;
    }
    set stepsQuery(value) {
      if (dart.equals(this[_stepDirectiveList], value)) return;
      this[_stepAriaLabel][$clear]();
      this[_stepDirectiveList] = value;
      let t = this.activeStepIndex;
      t == null ? this.activeStepIndex = 0 : t;
      async.scheduleMicrotask(dart.fn(() => {
        this[_onStepsChange](this[_stepDirectiveList]);
      }, VoidToNull()));
    }
    get stickyHeader() {
      return this[_stickyHeader];
    }
    get announceCurrentStep() {
      return this[announceCurrentStep];
    }
    set announceCurrentStep(value) {
      this[announceCurrentStep] = value;
    }
    set stickyHeader(value) {
      this[_stickyHeader] = utils__angular__properties__properties.getBool(value);
    }
    jumpStep(index) {
      if (dart.test(this.steps[$_get](index).isNotSelectable)) return FutureOfbool().value(false);
      this.stepperDone = false;
      return this[_stepTo](index);
    }
    stepForward(event, step) {
      event.preventDefault();
      event.stopPropagation();
      let ctrl = new (AsyncActionControllerOfbool()).new();
      step.requestStepContinue(ctrl.action);
      ctrl.execute(dart.fn(() => {
        this.activeStep.complete = true;
        if (dart.test(this.activeStep.isLast)) {
          this.stepperDone = true;
          return true;
        }
        return this[_stepTo](dart.notNull(this.activeStepIndex) + 1);
      }, VoidToObject()));
    }
    stepBackward(event, step) {
      event.preventDefault();
      event.stopPropagation();
      let ctrl = new (AsyncActionControllerOfbool()).new();
      step.requestStepCancel(ctrl.action);
      ctrl.execute(dart.fn(() => {
        this.activeStep.complete = false;
        return this[_stepTo](dart.notNull(this.activeStepIndex) - 1);
      }, VoidToFutureOfbool()));
    }
    get noText() {
      return this[noText];
    }
    set noText(value) {
      this[noText] = value;
    }
    set orientation(s) {
      if (!dart.test(material_stepper__common.orientations[$contains](s))) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/material_stepper/material_stepper.dart", 149, 12, "orientations.contains(s)");
      this[_orientation] = s;
    }
    set size(s) {
      if (!dart.test(material_stepper__common.sizes[$contains](s))) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/material_stepper/material_stepper.dart", 159, 12, "sizes.contains(s)");
      this[_size] = s;
    }
    get shouldInlineContent() {
      return this.orientation === "vertical" && this.size === "default";
    }
    get orientation() {
      return this[_orientation];
    }
    get size() {
      return this[_size];
    }
    get activeStep() {
      return dart.test(this.steps[$isNotEmpty]) ? this.steps[$_get](this.activeStepIndex) : null;
    }
    set legalJumps(s) {
      if (!dart.test(material_stepper__common.jumps[$contains](s))) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/angular_components/material_stepper/material_stepper.dart", 188, 12, "jumps.contains(s)");
      this[_legalJumps] = s;
      this[_recalculatePropertiesOfSteps]();
    }
    get stepperNativeElement() {
      return this[stepperNativeElement];
    }
    set stepperNativeElement(value) {
      this[stepperNativeElement] = value;
    }
    stopPropagationOfEnterAndSpace(keyboardEvent) {
      let keyCode = keyboardEvent.keyCode;
      if (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(keyboardEvent))) {
        keyboardEvent.stopPropagation();
      }
    }
    [_stepTo](index) {
      if (index == this.activeStepIndex) return FutureOfbool().value(true);
      let actionController = new (AsyncActionControllerOfbool()).new();
      this.steps[$_get](index).requestStepJump(actionController.action);
      actionController.execute(dart.fn(() => {
        this.activeStepIndex = index;
        this[_recalculatePropertiesOfSteps]();
        this[_activeStepController].add(this.activeStep);
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return actionController.action.onDone;
    }
    [_onStepsChange](stepsQuery) {
      let i = 0;
      let len = stepsQuery[$length];
      this.steps = IterableOfStepDirective()._check(stepsQuery[$map](material_stepper__material_step.StepDirective, dart.fn(s => {
        s.index = i;
        s.isLast = i === dart.notNull(len) - 1;
        i++;
        return s;
      }, StepDirectiveToStepDirective())))[$toList]();
      this[_recalculatePropertiesOfSteps]();
    }
    [_recalculatePropertiesOfSteps]() {
      let i = 0;
      for (let s of this.steps) {
        s.active = i === this.activeStepIndex;
        if (dart.test(s.active)) {
          s.complete = false;
        }
        switch (this[_legalJumps]) {
          case "all":
          {
            s.isSelectable = !dart.test(s.active);
            break;
          }
          case "none":
          {
            s.isSelectable = false;
            break;
          }
          case "backwards":
          {
            s.isSelectable = i < dart.notNull(this.activeStepIndex);
          }
        }
        i++;
      }
    }
    stepAriaLabel(step) {
      let t = this[_stepAriaLabel][$_get](step);
      return t == null ? this[_stepAriaLabel][$_set](step, material_stepper__material_stepper.MaterialStepperComponent._stepAriaAnnounce(dart.notNull(step.index) + 1, this.steps[$length], step.name)) : t;
    }
    get stepAriaAnnounce() {
      return this.activeStep == null ? "" : this.stepAriaLabel(this.activeStep);
    }
    get activeStepChanged() {
      return this[_activeStepController].stream;
    }
    static _stepAriaAnnounce(currentStepNumber, totalSteps, stepLabel) {
      return intl$.Intl.message("Step " + dart.str(currentStepNumber) + " of " + dart.str(totalSteps) + ", " + dart.str(stepLabel), {name: "_stepAriaAnnounce", args: JSArrayOfObject().of([currentStepNumber, totalSteps, stepLabel]), desc: "Message announced to visually impaired users about " + "which step of a multi step process a user is on. " + "[REL_NOTE: xilli/03-31-19]", examples: const$ || (const$ = dart.constMap(core.String, core.Object, ["currentStepNumber", 1, "totalSteps", 4, "stepLabel", "Select campaign settings"]))});
    }
  };
  (material_stepper__material_stepper.MaterialStepperComponent.new = function() {
    this[steps] = JSArrayOfStepDirective().of([]);
    this[activeStepIndex] = null;
    this[stepperDone] = false;
    this[_orientation] = "horizontal";
    this[_size] = "default";
    this[_legalJumps] = null;
    this[_stepDirectiveList] = null;
    this[_activeStepController] = StreamControllerOfStepDirective().broadcast({sync: true});
    this[_stepAriaLabel] = new (LinkedMapOfStepDirective$String()).new();
    this[_stickyHeader] = false;
    this[announceCurrentStep] = false;
    this[noText] = material_stepper__material_stepper.MaterialStepperComponent._cancelMsg;
    this[stepperNativeElement] = null;
  }).prototype = material_stepper__material_stepper.MaterialStepperComponent.prototype;
  dart.addTypeTests(material_stepper__material_stepper.MaterialStepperComponent);
  const steps = Symbol("MaterialStepperComponent.steps");
  const activeStepIndex = Symbol("MaterialStepperComponent.activeStepIndex");
  const stepperDone = Symbol("MaterialStepperComponent.stepperDone");
  const announceCurrentStep = Symbol("MaterialStepperComponent.announceCurrentStep");
  const noText = Symbol("MaterialStepperComponent.noText");
  const stepperNativeElement = Symbol("MaterialStepperComponent.stepperNativeElement");
  dart.setMethodSignature(material_stepper__material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper.MaterialStepperComponent.__proto__),
    jumpStep: dart.fnType(async.Future$(core.bool), [core.int]),
    stepForward: dart.fnType(dart.void, [html.Event, material_stepper__material_step.StepDirective]),
    stepBackward: dart.fnType(dart.void, [html.Event, material_stepper__material_step.StepDirective]),
    stopPropagationOfEnterAndSpace: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_stepTo]: dart.fnType(async.Future$(core.bool), [core.int]),
    [_onStepsChange]: dart.fnType(dart.void, [core.Iterable$(material_stepper__material_step.StepDirective)]),
    [_recalculatePropertiesOfSteps]: dart.fnType(dart.void, []),
    stepAriaLabel: dart.fnType(core.String, [material_stepper__material_step.StepDirective])
  }));
  dart.setGetterSignature(material_stepper__material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getGetters(material_stepper__material_stepper.MaterialStepperComponent.__proto__),
    stickyHeader: core.bool,
    shouldInlineContent: core.bool,
    orientation: core.String,
    size: core.String,
    activeStep: material_stepper__material_step.StepDirective,
    stepAriaAnnounce: core.String,
    activeStepChanged: async.Stream$(material_stepper__material_step.StepDirective)
  }));
  dart.setSetterSignature(material_stepper__material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getSetters(material_stepper__material_stepper.MaterialStepperComponent.__proto__),
    stepsQuery: core.List$(material_stepper__material_step.StepDirective),
    stickyHeader: dart.dynamic,
    orientation: core.String,
    size: core.String,
    legalJumps: core.String
  }));
  dart.setLibraryUri(material_stepper__material_stepper.MaterialStepperComponent, "package:angular_components/material_stepper/material_stepper.dart");
  dart.setFieldSignature(material_stepper__material_stepper.MaterialStepperComponent, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper.MaterialStepperComponent.__proto__),
    steps: dart.fieldType(ListOfStepDirective()),
    activeStepIndex: dart.fieldType(core.int),
    stepperDone: dart.fieldType(core.bool),
    [_orientation]: dart.fieldType(core.String),
    [_size]: dart.fieldType(core.String),
    [_legalJumps]: dart.fieldType(dart.dynamic),
    [_stepDirectiveList]: dart.fieldType(ListOfStepDirective()),
    [_activeStepController]: dart.finalFieldType(StreamControllerOfStepDirective()),
    [_stepAriaLabel]: dart.finalFieldType(MapOfStepDirective$String()),
    [_stickyHeader]: dart.fieldType(core.bool),
    announceCurrentStep: dart.fieldType(core.bool),
    noText: dart.fieldType(core.String),
    stepperNativeElement: dart.fieldType(html.HtmlElement)
  }));
  dart.defineLazy(material_stepper__material_stepper.MaterialStepperComponent, {
    /*material_stepper__material_stepper.MaterialStepperComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_stepper__material_stepper.MaterialStepperComponent.defaultOrientation*/get defaultOrientation() {
      return "horizontal";
    },
    /*material_stepper__material_stepper.MaterialStepperComponent.defaultSize*/get defaultSize() {
      return "default";
    },
    /*material_stepper__material_stepper.MaterialStepperComponent.optionalMsg*/get optionalMsg() {
      return intl$.Intl.message("Optional", {name: "optionalMsg", desc: "Label denoting that a step in a task flow is optional."});
    },
    /*material_stepper__material_stepper.MaterialStepperComponent.continueMsg*/get continueMsg() {
      return intl$.Intl.message("Continue", {name: "continueMsg", desc: "Button for continuing to the next step in a task flow."});
    },
    /*material_stepper__material_stepper.MaterialStepperComponent._cancelMsg*/get _cancelMsg() {
      return intl$.Intl.message("Cancel", {name: "_cancelMsg", desc: "Button for cancelling the current step in a task flow."});
    }
  });
  material_stepper__material_stepper.MaterialStepperBackButtonTextDirective = class MaterialStepperBackButtonTextDirective extends core.Object {};
  (material_stepper__material_stepper.MaterialStepperBackButtonTextDirective.new = function(stepper) {
    stepper.noText = material_stepper__material_stepper.MaterialStepperBackButtonTextDirective._msgBack;
  }).prototype = material_stepper__material_stepper.MaterialStepperBackButtonTextDirective.prototype;
  dart.addTypeTests(material_stepper__material_stepper.MaterialStepperBackButtonTextDirective);
  dart.setLibraryUri(material_stepper__material_stepper.MaterialStepperBackButtonTextDirective, "package:angular_components/material_stepper/material_stepper.dart");
  dart.defineLazy(material_stepper__material_stepper.MaterialStepperBackButtonTextDirective, {
    /*material_stepper__material_stepper.MaterialStepperBackButtonTextDirective._msgBack*/get _msgBack() {
      return intl$.Intl.message("Back", {name: "_msgBack", desc: "Text on stepper back button between steps"});
    }
  });
  dart.trackLibraries("packages/angular_components/material_stepper/material_stepper.ddc", {
    "package:angular_components/material_stepper/material_stepper.dart": material_stepper__material_stepper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stepper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsDsB;;;;;;IAEhB;;;;;;IACC;;;;;;mBAYU,KAAyB;AACtC,sBAAI,wBAAkB,EAAI,KAAK,GAAE;AACjC,0BAAc,QAAM;AACpB,8BAAkB,GAAG,KAAK;AAC1B,kCAAe;yCAAK;AACpB,6BAAiB,CAAC;AAChB,4BAAc,CAAC,wBAAkB;;IAErC;;YAGyB,oBAAa;;IAIjC;;;;;;qBAOY,KAAK;AACpB,yBAAa,GAAG,8CAAO,CAAC,KAAK;IAC/B;aAGsB,KAAS;AAC7B,oBAAI,UAAK,QAAC,KAAK,iBAAiB,GAAE,MAAO,qBAAY,CAAC;AACtD,sBAAW,GAAG;AACd,YAAO,cAAO,CAAC,KAAK;IACtB;gBAEiB,KAAW,EAAE,IAAkB;AAK9C,WAAK,eAAe;AACpB,WAAK,gBAAgB;AAErB,UAA4B,WAAO,mCAA2B;AAC9D,UAAI,oBAAoB,CAAC,IAAI,OAAO;AACpC,UAAI,QAAQ,CAAC;AACX,uBAAU,SAAS,GAAG;AACtB,sBAAI,eAAU,OAAO,GAAE;AACrB,0BAAW,GAAG;AACd,gBAAO;;AAET,cAAO,cAAO,CAAiB,aAAhB,oBAAe,IAAG;;IAErC;iBAEkB,KAAW,EAAE,IAAkB;AAK/C,WAAK,eAAe;AACpB,WAAK,gBAAgB;AAErB,UAA4B,WAAO,mCAA2B;AAC9D,UAAI,kBAAkB,CAAC,IAAI,OAAO;AAClC,UAAI,QAAQ,CAAC;AACX,uBAAU,SAAS,GAAG;AACtB,cAAO,cAAO,CAAiB,aAAhB,oBAAe,IAAG;;IAErC;IAKO;;;;;;oBAMS,CAAQ;AACtB,qBAAO,qCAAY,WAAS,CAAC,CAAC;AAC9B,wBAAY,GAAG,CAAC;IAClB;aAOS,CAAQ;AACf,qBAAO,8BAAK,WAAS,CAAC,CAAC;AACvB,iBAAK,GAAG,CAAC;IACX;;YAOI,AAAwB,iBAAb,KAAI,UAAQ,IAAI,SAAI,KAAI,SAAW;;;YAExB,mBAAY;;;YAEnB,YAAK;;;uBAKpB,UAAK,aAAW,IAAG,UAAK,QAAC,oBAAe,IAAI;IAAI;mBAUrC,CAAQ;AACrB,qBAAO,8BAAK,WAAS,CAAC,CAAC;AACvB,uBAAW,GAAG,CAAC;AACf,yCAA6B;IAC/B;IAOY;;;;;;mCAewB,aAA2B;AAC7D,UAAI,UAAU,aAAa,QAAQ;AACnC,UAAI,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,aAAa,IAAG;AACzD,qBAAa,gBAAgB;;IAEjC;cAEqB,KAAS;AAC5B,UAAI,KAAK,IAAI,oBAAe,EAAE,MAAO,qBAAY,CAAC;AAElD,UAAM,uBAAmB,mCAA2B;AACpD,gBAAK,QAAC,KAAK,iBAAiB,CAAC,gBAAgB,OAAO;AACpD,sBAAgB,QAAQ,CAAC;AACvB,4BAAe,GAAG,KAAK;AACvB,2CAA6B;AAC7B,mCAAqB,IAAI,CAAC,eAAU;AACpC,cAAO;wCACS;AAClB,YAAO,iBAAgB,OAAO,OAAO;IACvC;qBAKoB,UAAkC;AACpD,UAAI,IAAI;AACR,UAAI,MAAM,UAAU,SAAO;AAC3B,gBAAK,oCAAG,UAAU,MAAI,gDAAC,QAAC,CAAC;AACvB,SAAC,MAAM,GAAG,CAAC;AACX,SAAC,OAAO,GAAG,CAAC,KAAQ,aAAJ,GAAG,IAAG;AACtB,SAAC;AACD,cAAO,EAAC;mDACD;AACT,yCAA6B;IAC/B;;AAGE,UAAI,IAAI;AACR,eAAmB,IAAK,WAAK,EAAE;AAC7B,SAAC,OAAO,GAAG,CAAC,KAAI,oBAAe;AAE/B,sBAAI,CAAC,OAAO,GAAE;AACZ,WAAC,SAAS,GAAG;;AAGf,gBAAQ,iBAAW;cACZ,MAAG;;AACN,aAAC,aAAa,GAAG,WAAC,CAAC,OAAO;AAC1B;;cACG,OAAI;;AACP,aAAC,aAAa,GAAG;AACjB;;cACG,YAAS;;AACZ,aAAC,aAAa,GAAG,AAAE,CAAD,gBAAG,oBAAe;;;AAExC,SAAC;;IAEL;kBAEqB,IAAkB;cAAK,oBAAc,QAAC,IAAI;yBAAnB,oBAAc,QAAC,IAAI,EAC3D,6EAAiB,CAAY,aAAX,IAAI,MAAM,IAAG,GAAG,UAAK,SAAO,EAAE,IAAI,KAAK;IAAC;;YAG1D,gBAAU,IAAI,OAAO,KAAK,kBAAa,CAAC,eAAU;IAAC;;YAIR,4BAAqB,OAAO;;6BAenE,iBAAqB,EAAE,UAAc,EAAE,SAAgB;YAC3D,WAAI,QAAQ,CAAC,mBAAO,iBAAiB,sBAAK,UAAU,oBAAG,SAAS,UACtD,2BACA,sBAAC,iBAAiB,EAAE,UAAU,EAAE,SAAS,UACzC,wDACF,sDACA,wCACM,6DACR,qBAAqB,GACrB,cAAc,GACd,aAAa;IACb;;;IA3PU,WAAK,GAAG;IAExB,qBAAe;IACd,iBAAW,GAAG;IAEf,kBAAY,GAAG,YAAkB;IACjC,WAAK,GAAG,SAAW;IACnB,iBAAW;IAEK,wBAAkB;IAChC,2BAAqB,GACvB,2CAAyC,QAAO;IAC9C,oBAAc,GAAG;IAalB,mBAAa,GAAG;IAKhB,yBAAmB,GAAG;IAyDpB,YAAM,GAAG,sEAAU;IAwDd,0BAAoB;EA6GlC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhQe,qEAAS;YAAG;;MAEZ,8EAAkB;YAAG,aAAU;;MAC/B,uEAAW;YAAG,UAAW;;MAoOzB,uEAAW;YAAG,WAAI,QAAQ,CAAC,mBAC9B,qBACA;;MAEG,uEAAW;YAAG,WAAI,QAAQ,CAAC,mBAC9B,qBACA;;MAEG,sEAAU;YAAG,WAAI,QAAQ,CAAC,iBAC7B,oBACA;;;;4FAqB6B,OAAgC;AACrE,WAAO,OAAO,GAAG,kFAAQ;EAC3B;;;;MAEa,kFAAQ;YAAG,WAAI,QAAQ,CAAC,eAC3B,kBAAkB","file":"material_stepper.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_stepper: material_stepper__material_stepper
  };
});

//# sourceMappingURL=material_stepper.ddc.js.map
