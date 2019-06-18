define(['dart_sdk', 'packages/angular_components/material_stepper/material_stepper.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_stepper/material_stepper', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_stepper/material_step', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/laminate/portal/portal', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/material_stepper/common.template', 'packages/angular_components/material_stepper/material_step.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/events/events.template'], function(dart_sdk, material_stepper$46scss$46css, modules, change_detection, material_stepper, angular_2, scroll_host_interface, text_binding, button_decorator, button_decorator$, material_step, interpolate, material_icon, material_icon$, portal, material_yes_no_buttons, material_yes_no_buttons$, has_disabled, angular, portal$, common, material_step$, async_action, properties, angular_2$, events) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_stepper__material_stepper$46scss$46css$46shim = material_stepper$46scss$46css.material_stepper__material_stepper$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_stepper__material_stepper = material_stepper.material_stepper__material_stepper;
  const utils__angular__scroll_host__angular_2 = angular_2.utils__angular__scroll_host__angular_2;
  const src__utils__angular__scroll_host__scroll_host_interface = scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_stepper__material_step = material_step.material_stepper__material_step;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons$46template;
  const material_yes_no_buttons__material_yes_no_buttons = material_yes_no_buttons$.material_yes_no_buttons__material_yes_no_buttons;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const laminate__portal__portal$46template = portal$.laminate__portal__portal$46template;
  const material_stepper__common$46template = common.material_stepper__common$46template;
  const material_stepper__material_step$46template = material_step$.material_stepper__material_step$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__angular__scroll_host__angular_2$46template = angular_2$.utils__angular__scroll_host__angular_2$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const material_stepper__material_stepper$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $length = dartx.length;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let VoidToStickyElementDirective = () => (VoidToStickyElementDirective = dart.constFn(dart.fnType(utils__angular__scroll_host__angular_2.StickyElementDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialStepperComponent = () => (AppViewOfMaterialStepperComponent = dart.constFn(src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent)))();
  let AppViewAndintToAppViewOfMaterialStepperComponent = () => (AppViewAndintToAppViewOfMaterialStepperComponent = dart.constFn(dart.fnType(AppViewOfMaterialStepperComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialStepperComponent = () => (ComponentFactoryOfMaterialStepperComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_stepper__material_stepper.MaterialStepperComponent)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let JSArrayOfStepDirective = () => (JSArrayOfStepDirective = dart.constFn(_interceptors.JSArray$(material_stepper__material_step.StepDirective)))();
  let ComponentRefOfMaterialStepperComponent = () => (ComponentRefOfMaterialStepperComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent)))();
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template.styles$MaterialStepperComponent*/get styles$MaterialStepperComponent() {
      return [material_stepper__material_stepper$46scss$46css$46shim.styles];
    }
  });
  const _StickyElementDirective_1_5 = dart.privateName(material_stepper__material_stepper$46template, "_StickyElementDirective_1_5");
  const _appEl_3 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_3");
  const _NgFor_3_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgFor_3_9");
  const _appEl_6 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_6_9");
  const _appEl_10 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_10_9");
  const _expr_0 = dart.privateName(material_stepper__material_stepper$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_stepper__material_stepper$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_stepper__material_stepper$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_stepper__material_stepper$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_stepper__material_stepper$46template, "_expr_4");
  const _el_8 = dart.privateName(material_stepper__material_stepper$46template, "_el_8");
  const _el_1 = dart.privateName(material_stepper__material_stepper$46template, "_el_1");
  material_stepper__material_stepper$46template.ViewMaterialStepperComponent0 = class ViewMaterialStepperComponent0 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_stepper/material_stepper.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "stepper stepper-body mixin");
      this.addShimC(this[_el_1]);
      this[_StickyElementDirective_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__scroll_host__angular_2.StickyElementDirective, dart.wrapType(utils__angular__scroll_host__angular_2.StickyElementDirective), dart.fn(() => new utils__angular__scroll_host__angular_2.StickyElementDirective.new(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.parentView.injectorGet(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex)), this[_el_1]), VoidToStickyElementDirective())) : new utils__angular__scroll_host__angular_2.StickyElementDirective.new(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost._check(this.parentView.injectorGet(dart.wrapType(src__utils__angular__scroll_host__scroll_host_interface.ScrollHost), this.viewData.parentIndex)), this[_el_1]);
      let _text_2 = src__runtime__dom_helpers.appendText(this[_el_1], "\n  ");
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = src__runtime__dom_helpers.appendText(this[_el_1], "\n");
      let _text_5 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent12, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_8] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(this[_el_8]);
      let _text_9 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent15, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _text_11 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      _ctx.stepperNativeElement = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_afterStepperElement = this[_el_8];
      let currVal_2 = local_afterStepperElement;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_StickyElementDirective_1_5].endElement = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.stickyHeader;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_StickyElementDirective_1_5].sticky = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.steps;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_3_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone) && dart.notNull(_ctx.steps[$length]) > 0;
      this[_NgIf_10_9].ngIf = _ctx.announceCurrentStep;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_StickyElementDirective_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_StickyElementDirective_1_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._componentStyles;
      if (styles == null) {
        material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._componentStyles = styles = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_stepper__material_stepper$46template.styles$MaterialStepperComponent, material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.new = function(parentView, parentIndex) {
    this[_StickyElementDirective_1_5] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_8] = null;
    this[_el_1] = null;
    material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-stepper"));
    this.updateChildClassNonHtml(this.rootEl, material_stepper__material_stepper.MaterialStepperComponent.hostClass);
  }).prototype = material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0);
  dart.setMethodSignature(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.__proto__),
    [_StickyElementDirective_1_5]: dart.fieldType(utils__angular__scroll_host__angular_2.StickyElementDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_8]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0, {
    /*material_stepper__material_stepper$46template.ViewMaterialStepperComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template._MaterialStepperComponentNgFactory*/get _MaterialStepperComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialStepperComponent()).new("material-stepper", dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponentHost0, AppViewAndintToAppViewOfMaterialStepperComponent())));
    }
  });
  dart.copyProperties(material_stepper__material_stepper$46template, {
    get MaterialStepperComponentNgFactory() {
      return material_stepper__material_stepper$46template._MaterialStepperComponentNgFactory;
    }
  });
  const _textBinding_5 = dart.privateName(material_stepper__material_stepper$46template, "_textBinding_5");
  const _textBinding_15 = dart.privateName(material_stepper__material_stepper$46template, "_textBinding_15");
  const _textBinding_20 = dart.privateName(material_stepper__material_stepper$46template, "_textBinding_20");
  const _ButtonDirective_0_5 = dart.privateName(material_stepper__material_stepper$46template, "_ButtonDirective_0_5");
  const _appEl_7 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_7_9");
  const _appEl_22 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_22");
  const _NgIf_22_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_22_9");
  const _appEl_26 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_26");
  const _NgIf_26_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_26_9");
  const _appEl_28 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_28");
  const _NgIf_28_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_28_9");
  const _expr_5 = dart.privateName(material_stepper__material_stepper$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_stepper__material_stepper$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_stepper__material_stepper$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_stepper__material_stepper$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_stepper__material_stepper$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_stepper__material_stepper$46template, "_expr_10");
  const _expr_12 = dart.privateName(material_stepper__material_stepper$46template, "_expr_12");
  const _expr_13 = dart.privateName(material_stepper__material_stepper$46template, "_expr_13");
  const _expr_14 = dart.privateName(material_stepper__material_stepper$46template, "_expr_14");
  const _expr_15 = dart.privateName(material_stepper__material_stepper$46template, "_expr_15");
  const _expr_16 = dart.privateName(material_stepper__material_stepper$46template, "_expr_16");
  const _expr_17 = dart.privateName(material_stepper__material_stepper$46template, "_expr_17");
  const _expr_18 = dart.privateName(material_stepper__material_stepper$46template, "_expr_18");
  const _el_0 = dart.privateName(material_stepper__material_stepper$46template, "_el_0");
  const _el_3 = dart.privateName(material_stepper__material_stepper$46template, "_el_3");
  const _el_11 = dart.privateName(material_stepper__material_stepper$46template, "_el_11");
  const _el_13 = dart.privateName(material_stepper__material_stepper$46template, "_el_13");
  const _el_18 = dart.privateName(material_stepper__material_stepper$46template, "_el_18");
  const _handle_trigger_0_0 = dart.privateName(material_stepper__material_stepper$46template, "_handle_trigger_0_0");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent1 = class _ViewMaterialStepperComponent1 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      src__runtime__dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "stepper-step");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0], null));
      let _text_1 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      let _text_2 = src__runtime__dom_helpers.appendText(this[_el_0], "\n        ");
      this[_el_3] = src__runtime__dom_helpers.appendSpan(doc, this[_el_0]);
      this.updateChildClass(html.HtmlElement._check(this[_el_3]), "stepper-step-index");
      this.addShimE(this[_el_3]);
      let _text_4 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      this[_el_3][$append](this[_textBinding_5].element);
      let _text_6 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(this[_el_3]);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 3, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = src__runtime__dom_helpers.appendText(this[_el_3], "\n        ");
      let _text_9 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      let _text_10 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_11] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_11], "stepper-step-header");
      this.addShimC(this[_el_11]);
      let _text_12 = src__runtime__dom_helpers.appendText(this[_el_11], "\n      ");
      this[_el_13] = src__runtime__dom_helpers.appendSpan(doc, this[_el_11]);
      this.updateChildClass(html.HtmlElement._check(this[_el_13]), "stepper-step-name");
      this.addShimE(this[_el_13]);
      let _text_14 = src__runtime__dom_helpers.appendText(this[_el_13], "\n        ");
      this[_el_13][$append](this[_textBinding_15].element);
      let _text_16 = src__runtime__dom_helpers.appendText(this[_el_13], "\n      ");
      let _text_17 = src__runtime__dom_helpers.appendText(this[_el_11], "\n      ");
      this[_el_18] = src__runtime__dom_helpers.appendDiv(doc, this[_el_11]);
      this.updateChildClass(this[_el_18], "stepper-step-optional");
      this.addShimC(this[_el_18]);
      let _text_19 = src__runtime__dom_helpers.appendText(this[_el_18], "\n        ");
      this[_el_18][$append](this[_textBinding_20].element);
      let _text_21 = src__runtime__dom_helpers.appendText(this[_el_18], "\n          ");
      let _anchor_22 = src__runtime__dom_helpers.appendAnchor(this[_el_18]);
      this[_appEl_22] = new src__core__linker__view_container.ViewContainer.new(22, 18, this, _anchor_22);
      let _TemplateRef_22_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_22], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_22_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_22], _TemplateRef_22_8);
      let _text_23 = src__runtime__dom_helpers.appendText(this[_el_18], "\n      ");
      let _text_24 = src__runtime__dom_helpers.appendText(this[_el_11], "\n    ");
      let _text_25 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_26 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_26] = new src__core__linker__view_container.ViewContainer.new(26, 0, this, _anchor_26);
      let _TemplateRef_26_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_26], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_26_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_26], _TemplateRef_26_8);
      let _text_27 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_28 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_28] = new src__core__linker__view_container.ViewContainer.new(28, 0, this, _anchor_28);
      let _TemplateRef_28_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_28], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_28_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_28], _TemplateRef_28_8);
      let _text_29 = src__runtime__dom_helpers.appendText(this[_el_0], "\n  ");
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && dart.notNull(nodeIndex) <= 29) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.locals[$_get]("$implicit"));
      let currVal_6 = local_step.isNotSelectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgIf_7_9].ngIf = local_step.complete;
      this[_NgIf_22_9].ngIf = local_step.isSelectable;
      this[_NgIf_26_9].ngIf = !dart.test(local_step.isLast);
      this[_NgIf_28_9].ngIf = dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone);
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_22].detectChangesInNestedViews();
      this[_appEl_26].detectChangesInNestedViews();
      this[_appEl_28].detectChangesInNestedViews();
      let currVal_0 = _ctx.stepAriaLabel(local_step);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "size", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_step.isSelectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "can-select", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__runtime__interpolate.interpolate0(local_step.active);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "active", core.String._check(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__runtime__interpolate.interpolate0(local_step.isSelectable);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.setAttribute(this[_el_0], "selectable", core.String._check(currVal_5));
        this[_expr_5] = currVal_5;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_7 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "orientation", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_step.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "active", currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_step.complete;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_3], "complete", currVal_9 == null ? null : dart.toString(currVal_9));
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = local_step.isSelectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_3]), "can-select", currVal_10);
        this[_expr_10] = currVal_10;
      }
      this[_textBinding_5].updateText(core.String._check(src__runtime__interpolate.interpolate0(dart.test(local_step.complete) ? "" : dart.notNull(local_step.index) + 1)));
      let currVal_12 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_11], "orientation", currVal_12);
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_11], "size", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = local_step.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_13], "active", currVal_14 == null ? null : dart.toString(currVal_14));
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = local_step.complete;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_13], "complete", currVal_15 == null ? null : dart.toString(currVal_15));
        this[_expr_15] = currVal_15;
      }
      this[_textBinding_15].updateText(src__runtime__interpolate.interpolateString0(local_step.name));
      let currVal_16 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_18], "orientation", currVal_16);
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = local_step.isOptional;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_18], "optional", currVal_17 == null ? null : dart.toString(currVal_17));
        this[_expr_17] = currVal_17;
      }
      let currVal_18 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_18], "size", currVal_18);
        this[_expr_18] = currVal_18;
      }
      this[_textBinding_20].updateText(core.String._check(src__runtime__interpolate.interpolate0(dart.test(local_step.isOptional) ? material_stepper__material_stepper.MaterialStepperComponent.optionalMsg : "")));
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
      this[_appEl_22].destroyNestedViews();
      this[_appEl_26].destroyNestedViews();
      this[_appEl_28].destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.jumpStep(local_step.index);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_5] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_15] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_20] = new src__runtime__text_binding.TextBinding.new();
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_22] = null;
    this[_NgIf_22_9] = null;
    this[_appEl_26] = null;
    this[_NgIf_26_9] = null;
    this[_appEl_28] = null;
    this[_NgIf_28_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_18] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_el_18] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    [_textBinding_5]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_15]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_20]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_22]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_22_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_26]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_26_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_28]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_28_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.DivElement),
    [_el_13]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.DivElement)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent1 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent1.new(parentView, parentIndex);
  };
  const _compView_2 = dart.privateName(material_stepper__material_stepper$46template, "_compView_2");
  const _MaterialIconComponent_2_5 = dart.privateName(material_stepper__material_stepper$46template, "_MaterialIconComponent_2_5");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent2 = class _ViewMaterialStepperComponent2 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.addShimE(_el_0);
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n            ");
      this[_compView_2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      src__runtime__dom_helpers.setAttribute(_el_2, "icon", "check");
      this.addShimC(_el_2);
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialIconComponent_2_5]);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, "\n          ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "check";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.__proto__),
    [_compView_2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent2 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent2.new(parentView, parentIndex);
  };
  const _el_2 = dart.privateName(material_stepper__material_stepper$46template, "_el_2");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent3 = class _ViewMaterialStepperComponent3 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.addShimE(_el_0);
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n            ");
      this[_compView_2] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      _el_0[$append](this[_el_2]);
      this.updateChildClassNonHtml(this[_el_2], "edit-icon");
      src__runtime__dom_helpers.setAttribute(this[_el_2], "icon", "mode_edit");
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_2]));
      this[_compView_2].create0(this[_MaterialIconComponent_2_5]);
      let _text_4 = src__runtime__dom_helpers.appendText(_el_0, "\n          ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "mode_edit";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_2], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_2] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.__proto__),
    [_compView_2]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(html.Element)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent3 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent3.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent4 = class _ViewMaterialStepperComponent4 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "step-line");
      this.addShimC(this[_el_0]);
      let _text_1 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent4 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent4.new(parentView, parentIndex);
  };
  const _appEl_2 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_2_9");
  const _appEl_4 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_4");
  const _NgIf_4_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_4_9");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent5 = class _ViewMaterialStepperComponent5 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "stepper-content");
      this.addShimC(this[_el_0]);
      let _text_1 = src__runtime__dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent6, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = src__runtime__dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent9, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = src__runtime__dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent11, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'stopPropagationOfEnterAndSpace')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_2_9].ngIf = local_step.active;
      this[_NgIf_4_9].ngIf = !dart.test(local_step.active) && local_step.summaryDirective != null;
      this[_NgIf_6_9].ngIf = local_step.shouldShowSummary;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent5 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent5.new(parentView, parentIndex);
  };
  const _appEl_1 = dart.privateName(material_stepper__material_stepper$46template, "_appEl_1");
  const _PortalHostDirective_1_9 = dart.privateName(material_stepper__material_stepper$46template, "_PortalHostDirective_1_9");
  const _NgIf_3_9 = dart.privateName(material_stepper__material_stepper$46template, "_NgIf_3_9");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent6 = class _ViewMaterialStepperComponent6 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let _text_0 = src__runtime__dom_helpers.createText("\n        ");
      let _anchor_1 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent7, AppViewAndintToAppViewOfvoid()));
      this[_PortalHostDirective_1_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_1], this[_appEl_1]);
      let _text_2 = src__runtime__dom_helpers.createText("\n        ");
      let _anchor_3 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent8, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = src__runtime__dom_helpers.createText("\n      ");
      this.init(JSArrayOfObject().of([_text_0, this[_appEl_1], _text_2, this[_appEl_3], _text_4]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.steps[$_get](local_step.index);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_1_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_3_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_PortalHostDirective_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_1_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent6 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent6.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent7 = class _ViewMaterialStepperComponent7 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init0();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent7 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent7.new(parentView, parentIndex);
  };
  const _MaterialYesNoButtonsComponent_2_5 = dart.privateName(material_stepper__material_stepper$46template, "_MaterialYesNoButtonsComponent_2_5");
  const _handle_yes_2_0 = dart.privateName(material_stepper__material_stepper$46template, "_handle_yes_2_0");
  const _handle_no_2_1 = dart.privateName(material_stepper__material_stepper$46template, "_handle_no_2_1");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent8 = class _ViewMaterialStepperComponent8 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "button-container");
      this.addShimE(_el_0);
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n          ");
      this[_compView_2] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.updateChildClassNonHtml(_el_2, "stepper-yes-no-buttons");
      src__runtime__dom_helpers.setAttribute(_el_2, "raised", "");
      src__runtime__dom_helpers.setAttribute(_el_2, "yesHighlighted", "");
      this.addShimC(_el_2);
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_2].create0(this[_MaterialYesNoButtonsComponent_2_5]);
      let _text_4 = src__runtime__dom_helpers.appendText(_el_0, "\n        ");
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_no_2_1)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(material_stepper__material_stepper.MaterialStepperComponent.continueMsg == null)) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper__material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
    [_handle_yes_2_0]($event) {
      let _ctx = this.ctx;
      _ctx.stepForward(html.Event._check($event), _ctx.activeStep);
    }
    [_handle_no_2_1]($event) {
      let _ctx = this.ctx;
      _ctx.stepBackward(html.Event._check($event), _ctx.activeStep);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    [_compView_2]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent8 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent8.new(parentView, parentIndex);
  };
  const _PortalHostDirective_2_9 = dart.privateName(material_stepper__material_stepper$46template, "_PortalHostDirective_2_9");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent9 = class _ViewMaterialStepperComponent9 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "step-summary-directive");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n        ");
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent10, AppViewAndintToAppViewOfvoid()));
      this[_PortalHostDirective_2_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, "\n      ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = local_step.summaryDirective;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_2_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_expr_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_2_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent9 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent9.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent10 = class _ViewMaterialStepperComponent10 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init0();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent10 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent10.new(parentView, parentIndex);
  };
  const _textBinding_2 = dart.privateName(material_stepper__material_stepper$46template, "_textBinding_2");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent11 = class _ViewMaterialStepperComponent11 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "stepper-step-summary");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n        ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, "\n      ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_step = src__runtime__optimizations.unsafeCast(material_stepper__material_step.StepDirective, this.parentView.parentView.locals[$_get]("$implicit"));
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(local_step.completeSummary));
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent11 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent11.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent12 = class _ViewMaterialStepperComponent12 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "stepper-content mixin");
      this.addShimC(this[_el_0]);
      let _text_1 = src__runtime__dom_helpers.appendText(this[_el_0], "\n  ");
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent13, AppViewAndintToAppViewOfvoid()));
      this[_PortalHostDirective_2_9] = new laminate__portal__portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = src__runtime__dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent14, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = src__runtime__dom_helpers.appendText(this[_el_0], "\n");
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.activeStep;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_PortalHostDirective_2_9].portal = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_PortalHostDirective_2_9]: dart.fieldType(laminate__portal__portal.PortalHostDirective),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent12 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent12.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent13 = class _ViewMaterialStepperComponent13 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this.init0();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.new = function(parentView, parentIndex) {
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent13 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent13.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent14 = class _ViewMaterialStepperComponent14 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "button-container");
      this.addShimE(_el_0);
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n      ");
      this[_compView_2] = new material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      src__runtime__dom_helpers.setAttribute(_el_2, "raised", "");
      src__runtime__dom_helpers.setAttribute(_el_2, "yesHighlighted", "");
      this.addShimC(_el_2);
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_2].create0(this[_MaterialYesNoButtonsComponent_2_5]);
      let _text_4 = src__runtime__dom_helpers.appendText(_el_0, "\n    ");
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_no_2_1)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (!(material_stepper__material_stepper.MaterialStepperComponent.continueMsg == null)) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper__material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
    [_handle_yes_2_0]($event) {
      let _ctx = this.ctx;
      _ctx.stepForward(html.Event._check($event), _ctx.activeStep);
    }
    [_handle_no_2_1]($event) {
      let _ctx = this.ctx;
      _ctx.stepBackward(html.Event._check($event), _ctx.activeStep);
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    [_compView_2]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(material_yes_no_buttons__material_yes_no_buttons.MaterialYesNoButtonsComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent14 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent14.new(parentView, parentIndex);
  };
  material_stepper__material_stepper$46template._ViewMaterialStepperComponent15 = class _ViewMaterialStepperComponent15 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      src__runtime__dom_helpers.setAttribute(_el_0, "aria-live", "assertive");
      this.updateChildClass(html.HtmlElement._check(_el_0), "visible-to-screen-reader-only");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "\n  ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, "\n");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(_ctx.stepAriaAnnounce));
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponent15);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent15, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), [])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponent15, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponent15 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponent15.new(parentView, parentIndex);
  };
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template.styles$MaterialStepperComponentHost*/get styles$MaterialStepperComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_stepper__material_stepper$46template, "_compView_0");
  const _MaterialStepperComponent_0_5 = dart.privateName(material_stepper__material_stepper$46template, "_MaterialStepperComponent_0_5");
  material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0 = class _ViewMaterialStepperComponentHost0 extends src__core__linker__app_view.AppView$(material_stepper__material_stepper.MaterialStepperComponent) {
    build() {
      this[_compView_0] = new material_stepper__material_stepper$46template.ViewMaterialStepperComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStepperComponent_0_5] = new material_stepper__material_stepper.MaterialStepperComponent.new();
      this[_MaterialStepperComponent_0_5].stepsQuery = JSArrayOfStepDirective().of([]);
      this[_compView_0].create(this[_MaterialStepperComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialStepperComponent()).new(0, this, this.rootEl, this[_MaterialStepperComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_stepper__material_stepper.MaterialStepperComponent) && 0 === nodeIndex) {
        return this[_MaterialStepperComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStepperComponent_0_5] = null;
    material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.prototype;
  dart.addTypeTests(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0);
  dart.setMethodSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getMethods(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_stepper__material_stepper.MaterialStepperComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getFields(material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_stepper__material_stepper$46template.ViewMaterialStepperComponent0),
    [_MaterialStepperComponent_0_5]: dart.fieldType(material_stepper__material_stepper.MaterialStepperComponent)
  }));
  material_stepper__material_stepper$46template.viewFactory_MaterialStepperComponentHost0 = function(parentView, parentIndex) {
    return new material_stepper__material_stepper$46template._ViewMaterialStepperComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_stepper__material_stepper$46template, {
    /*material_stepper__material_stepper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_stepper__material_stepper$46template.initReflector = function() {
    if (dart.test(material_stepper__material_stepper$46template._visited)) {
      return;
    }
    material_stepper__material_stepper$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_stepper__material_stepper.MaterialStepperComponent), material_stepper__material_stepper$46template.MaterialStepperComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_stepper__common$46template.initReflector();
    material_stepper__material_step$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    model__action__async_action$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__angular__scroll_host__angular_2$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_stepper/material_stepper.template.ddc", {
    "package:angular_components/material_stepper/material_stepper.template.dart": material_stepper__material_stepper$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_stepper.template.dart"],"names":[],"mappings":"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","file":"material_stepper.template.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_stepper$46template: material_stepper__material_stepper$46template
  };
});

//# sourceMappingURL=material_stepper.template.ddc.js.map
