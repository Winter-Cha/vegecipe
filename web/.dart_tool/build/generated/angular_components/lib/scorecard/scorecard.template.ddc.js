define(['dart_sdk', 'packages/angular_components/scorecard/scorecard.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/scorecard/scorecard', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/color/color.template', 'packages/angular_components/utils/color/palette.template'], function(dart_sdk, scorecard$46scss$46css, text_binding, modules, change_detection, scorecard, interpolate, material_ripple, material_ripple$, material_icon, material_icon$, dom_service, angular, keyboard_only_focus_indicator, dom_service$, events, color, palette) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scorecard$46scss$46css$46shim = scorecard$46scss$46css.scorecard__scorecard$46scss$46css$46shim;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = angular.angular$46template;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__color__color$46template = color.utils__color__color$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const scorecard__scorecard$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfScorecardComponent = () => (AppViewOfScorecardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent)))();
  let AppViewAndintToAppViewOfScorecardComponent = () => (AppViewAndintToAppViewOfScorecardComponent = dart.constFn(dart.fnType(AppViewOfScorecardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScorecardComponent = () => (ComponentFactoryOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scorecard.ScorecardComponent)))();
  let VoidToScorecardComponent = () => (VoidToScorecardComponent = dart.constFn(dart.fnType(scorecard__scorecard.ScorecardComponent, [])))();
  let ComponentRefOfScorecardComponent = () => (ComponentRefOfScorecardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent)))();
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponent*/get styles$ScorecardComponent() {
      return [scorecard__scorecard$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_2 = dart.privateName(scorecard__scorecard$46template, "_textBinding_2");
  const _textBinding_4 = dart.privateName(scorecard__scorecard$46template, "_textBinding_4");
  const _appEl_0 = dart.privateName(scorecard__scorecard$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(scorecard__scorecard$46template, "_NgIf_0_9");
  const _appEl_5 = dart.privateName(scorecard__scorecard$46template, "_appEl_5");
  const _NgIf_5_9 = dart.privateName(scorecard__scorecard$46template, "_NgIf_5_9");
  const _appEl_7 = dart.privateName(scorecard__scorecard$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(scorecard__scorecard$46template, "_NgIf_7_9");
  const _appEl_9 = dart.privateName(scorecard__scorecard$46template, "_appEl_9");
  const _NgIf_9_9 = dart.privateName(scorecard__scorecard$46template, "_NgIf_9_9");
  const _expr_1 = dart.privateName(scorecard__scorecard$46template, "_expr_1");
  const _expr_5 = dart.privateName(scorecard__scorecard$46template, "_expr_5");
  const _expr_6 = dart.privateName(scorecard__scorecard$46template, "_expr_6");
  const _expr_7 = dart.privateName(scorecard__scorecard$46template, "_expr_7");
  const _expr_8 = dart.privateName(scorecard__scorecard$46template, "_expr_8");
  const _expr_9 = dart.privateName(scorecard__scorecard$46template, "_expr_9");
  const _expr_10 = dart.privateName(scorecard__scorecard$46template, "_expr_10");
  const _expr_11 = dart.privateName(scorecard__scorecard$46template, "_expr_11");
  const _expr_12 = dart.privateName(scorecard__scorecard$46template, "_expr_12");
  const _el_3 = dart.privateName(scorecard__scorecard$46template, "_el_3");
  scorecard__scorecard$46template.ViewScorecardComponent0 = class ViewScorecardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scorecard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "label-name");
      this.addShimC(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      this.project(_el_1, 0);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "label-value");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this.project(this[_el_3], 1);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_9 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 3);
      this.init0();
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'keydown')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(_ctx, 'onMouseInteraction')));
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeypress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.selectable;
      this[_NgIf_5_9].ngIf = _ctx.suggestionBefore != null;
      this[_NgIf_7_9].ngIf = _ctx.description != null;
      this[_NgIf_9_9].ngIf = _ctx.suggestionAfter != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(_ctx.label));
      let currVal_1 = _ctx.tooltip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_3], "title", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_4].updateText(src__runtime__interpolate.interpolateString0(_ctx.value));
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_5 = _ctx.isChangePositive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-change-positive", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isChangeNegative;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-change-negative", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.selectable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "selectable", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.hostTabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_8 == null ? null : dart.toString(currVal_8));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.hostRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.backgroundStyle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this.rootEl.style[$setProperty]("background", currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.extraBig;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "extra-big", currVal_11);
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "selected", currVal_12);
        this[_expr_12] = currVal_12;
      }
    }
    initComponentStyles() {
      let styles = scorecard__scorecard$46template.ViewScorecardComponent0._componentStyles;
      if (styles == null) {
        scorecard__scorecard$46template.ViewScorecardComponent0._componentStyles = styles = scorecard__scorecard$46template.ViewScorecardComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(scorecard__scorecard$46template.styles$ScorecardComponent, scorecard__scorecard$46template.ViewScorecardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (scorecard__scorecard$46template.ViewScorecardComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_expr_1] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_el_3] = null;
    scorecard__scorecard$46template.ViewScorecardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("acx-scorecard"));
    this.updateChildClassNonHtml(this.rootEl, scorecard__scorecard.ScorecardComponent.hostClass);
  }).prototype = scorecard__scorecard$46template.ViewScorecardComponent0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template.ViewScorecardComponent0);
  dart.setMethodSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template.ViewScorecardComponent0, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template.ViewScorecardComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(scorecard__scorecard$46template.ViewScorecardComponent0, {
    /*scorecard__scorecard$46template.ViewScorecardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template._ScorecardComponentNgFactory*/get _ScorecardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScorecardComponent()).new("acx-scorecard", dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0, AppViewAndintToAppViewOfScorecardComponent())));
    }
  });
  dart.copyProperties(scorecard__scorecard$46template, {
    get ScorecardComponentNgFactory() {
      return scorecard__scorecard$46template._ScorecardComponentNgFactory;
    }
  });
  const _compView_0 = dart.privateName(scorecard__scorecard$46template, "_compView_0");
  const _MaterialRippleComponent_0_5 = dart.privateName(scorecard__scorecard$46template, "_MaterialRippleComponent_0_5");
  scorecard__scorecard$46template._ViewScorecardComponent1 = class _ViewScorecardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent1.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent1);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponent1, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent1.new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(scorecard__scorecard$46template, "_textBinding_1");
  scorecard__scorecard$46template._ViewScorecardComponent2 = class _ViewScorecardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "suggestion before");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.suggestionBefore));
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    scorecard__scorecard$46template._ViewScorecardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent2.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent2);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponent2, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent2.new(parentView, parentIndex);
  };
  const _textBinding_3 = dart.privateName(scorecard__scorecard$46template, "_textBinding_3");
  const _appEl_1 = dart.privateName(scorecard__scorecard$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(scorecard__scorecard$46template, "_NgIf_1_9");
  scorecard__scorecard$46template._ViewScorecardComponent3 = class _ViewScorecardComponent3 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "description");
      this.addShimE(_el_0);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(scorecard__scorecard$46template.viewFactory_ScorecardComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = src__runtime__dom_helpers.appendText(_el_0, " ");
      _el_0[$append](this[_textBinding_3].element);
      let _text_4 = src__runtime__dom_helpers.appendText(_el_0, "  ");
      this.project(_el_0, 2);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.changeGlyph) && _ctx.description !== "" && !dart.test(_ctx.isChangeNeutral);
      this[_appEl_1].detectChangesInNestedViews();
      this[_textBinding_3].updateText(src__runtime__interpolate.interpolateString0(_ctx.description));
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    scorecard__scorecard$46template._ViewScorecardComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent3.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent3);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponent3, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent3.__proto__),
    [_textBinding_3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent3 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent3.new(parentView, parentIndex);
  };
  const _MaterialIconComponent_0_5 = dart.privateName(scorecard__scorecard$46template, "_MaterialIconComponent_0_5");
  const _expr_0 = dart.privateName(scorecard__scorecard$46template, "_expr_0");
  scorecard__scorecard$46template._ViewScorecardComponent4 = class _ViewScorecardComponent4 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "change-glyph");
      src__runtime__dom_helpers.setAttribute(_el_0, "size", "small");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.changeGlyphIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent4.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    scorecard__scorecard$46template._ViewScorecardComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent4.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent4);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponent4, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent4.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent4 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent4.new(parentView, parentIndex);
  };
  scorecard__scorecard$46template._ViewScorecardComponent5 = class _ViewScorecardComponent5 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(_el_0), "suggestion after");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.suggestionAfter));
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    scorecard__scorecard$46template._ViewScorecardComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponent5.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponent5);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponent5, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponent5 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template.styles$ScorecardComponentHost*/get styles$ScorecardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScorecardComponent_0_5 = dart.privateName(scorecard__scorecard$46template, "_ScorecardComponent_0_5");
  scorecard__scorecard$46template._ViewScorecardComponentHost0 = class _ViewScorecardComponentHost0 extends src__core__linker__app_view.AppView$(scorecard__scorecard.ScorecardComponent) {
    build() {
      this[_compView_0] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScorecardComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard.ScorecardComponent, dart.wrapType(scorecard__scorecard.ScorecardComponent), dart.fn(() => new scorecard__scorecard.ScorecardComponent.new(this[_compView_0], this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToScorecardComponent())) : new scorecard__scorecard.ScorecardComponent.new(this[_compView_0], this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ScorecardComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfScorecardComponent()).new(0, this, this.rootEl, this[_ScorecardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (scorecard__scorecard$46template._ViewScorecardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScorecardComponent_0_5] = null;
    scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scorecard$46template._ViewScorecardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scorecard$46template._ViewScorecardComponentHost0);
  dart.setMethodSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scorecard.ScorecardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scorecard$46template._ViewScorecardComponentHost0, "package:angular_components/scorecard/scorecard.template.dart");
  dart.setFieldSignature(scorecard__scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scorecard$46template._ViewScorecardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_0_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent)
  }));
  scorecard__scorecard$46template.viewFactory_ScorecardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scorecard$46template._ViewScorecardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scorecard$46template, {
    /*scorecard__scorecard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scorecard$46template.initReflector = function() {
    if (dart.test(scorecard__scorecard$46template._visited)) {
      return;
    }
    scorecard__scorecard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scorecard.ScorecardComponent), scorecard__scorecard$46template.ScorecardComponentNgFactory);
    angular$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__color__color$46template.initReflector();
    utils__color__palette$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.template.ddc", {
    "package:angular_components/scorecard/scorecard.template.dart": scorecard__scorecard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.template.dart"],"names":[],"mappings":"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","file":"scorecard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard$46template: scorecard__scorecard$46template
  };
});

//# sourceMappingURL=scorecard.template.ddc.js.map
