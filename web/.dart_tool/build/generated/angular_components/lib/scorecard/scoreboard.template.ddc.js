define(['dart_sdk', 'packages/angular_components/scorecard/scoreboard.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/scorecard/scorecard', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/palette.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard_bar.template'], function(dart_sdk, scoreboard$46scss$46css, modules, change_detection, scorecard_bar, dom_service, scoreboard, material_button, dark_theme, material_button$, material_icon, material_icon$, button_decorator, has_disabled, scorecard, angular, selection_model, angular_2, palette, disposer, scorecard$, scorecard_bar$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scorecard__scoreboard$46scss$46css$46shim = scoreboard$46scss$46css.scorecard__scoreboard$46scss$46css$46shim;
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
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const scorecard__scorecard_bar = scorecard_bar.scorecard__scorecard_bar;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const scorecard__scoreboard = scoreboard.scorecard__scoreboard;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const scorecard__scorecard = scorecard.scorecard__scorecard;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const utils__color__palette$46template = palette.utils__color__palette$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const scorecard__scorecard$46template = scorecard$.scorecard__scorecard$46template;
  const scorecard__scorecard_bar$46template = scorecard_bar$.scorecard__scorecard_bar$46template;
  const scorecard__scoreboard$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let VoidToScorecardBarDirective = () => (VoidToScorecardBarDirective = dart.constFn(dart.fnType(scorecard__scorecard_bar.ScorecardBarDirective, [])))();
  let AppViewOfScoreboardComponent = () => (AppViewOfScoreboardComponent = dart.constFn(src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent)))();
  let AppViewAndintToAppViewOfScoreboardComponent = () => (AppViewAndintToAppViewOfScoreboardComponent = dart.constFn(dart.fnType(AppViewOfScoreboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScoreboardComponent = () => (ComponentFactoryOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(scorecard__scoreboard.ScoreboardComponent)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToScoreboardComponent = () => (VoidToScoreboardComponent = dart.constFn(dart.fnType(scorecard__scoreboard.ScoreboardComponent, [])))();
  let JSArrayOfScorecardComponent = () => (JSArrayOfScorecardComponent = dart.constFn(_interceptors.JSArray$(scorecard__scorecard.ScorecardComponent)))();
  let ComponentRefOfScoreboardComponent = () => (ComponentRefOfScoreboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent)))();
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return [scorecard__scoreboard$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(scorecard__scoreboard$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(scorecard__scoreboard$46template, "_NgIf_1_9");
  const _ScorecardBarDirective_2_5 = dart.privateName(scorecard__scoreboard$46template, "_ScorecardBarDirective_2_5");
  const _appEl_3 = dart.privateName(scorecard__scoreboard$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(scorecard__scoreboard$46template, "_NgIf_3_9");
  const _expr_0 = dart.privateName(scorecard__scoreboard$46template, "_expr_0");
  const _expr_1 = dart.privateName(scorecard__scoreboard$46template, "_expr_1");
  const _expr_3 = dart.privateName(scorecard__scoreboard$46template, "_expr_3");
  const _el_0 = dart.privateName(scorecard__scoreboard$46template, "_el_0");
  let const$;
  let const$0;
  scorecard__scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scoreboard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "acx-scoreboard");
      this.addShimC(this[_el_0]);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "scorecard-bar");
      src__runtime__dom_helpers.setAttribute(_el_2, "scorecardBar", "");
      this.addShimC(_el_2);
      this[_ScorecardBarDirective_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scorecard_bar.ScorecardBarDirective, dart.wrapType(scorecard__scorecard_bar.ScorecardBarDirective), dart.fn(() => new scorecard__scorecard_bar.ScorecardBarDirective.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), _el_2, core.bool._check(this.parentView.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex))), VoidToScorecardBarDirective())) : new scorecard__scorecard_bar.ScorecardBarDirective.new(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), _el_2, core.bool._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex)));
      this.project(_el_2, 0);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      _ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_3 = _ctx.isVertical;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-horizontal", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = scorecard__scoreboard$46template.ViewScoreboardComponent0._componentStyles;
      if (styles == null) {
        scorecard__scoreboard$46template.ViewScoreboardComponent0._componentStyles = styles = scorecard__scoreboard$46template.ViewScoreboardComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(scorecard__scoreboard$46template.styles$ScoreboardComponent, scorecard__scoreboard$46template.ViewScoreboardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (scorecard__scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("acx-scoreboard"));
  }).prototype = scorecard__scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template.ViewScoreboardComponent0);
  dart.setMethodSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scorecard__scoreboard$46template.ViewScoreboardComponent0, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scorecard__scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_ScorecardBarDirective_2_5]: dart.fieldType(scorecard__scorecard_bar.ScorecardBarDirective),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(scorecard__scoreboard$46template.ViewScoreboardComponent0, {
    /*scorecard__scoreboard$46template.ViewScoreboardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template._ScoreboardComponentNgFactory*/get _ScoreboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScoreboardComponent()).new("acx-scoreboard", dart.fn(scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0, AppViewAndintToAppViewOfScoreboardComponent())));
    }
  });
  dart.copyProperties(scorecard__scoreboard$46template, {
    get ScoreboardComponentNgFactory() {
      return scorecard__scoreboard$46template._ScoreboardComponentNgFactory;
    }
  });
  const _compView_0 = dart.privateName(scorecard__scoreboard$46template, "_compView_0");
  const _AcxDarkTheme_0_5 = dart.privateName(scorecard__scoreboard$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(scorecard__scoreboard$46template, "_MaterialButtonComponent_0_6");
  const _compView_1 = dart.privateName(scorecard__scoreboard$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(scorecard__scoreboard$46template, "_MaterialIconComponent_1_5");
  const _expr_2 = dart.privateName(scorecard__scoreboard$46template, "_expr_2");
  const _el_1 = dart.privateName(scorecard__scoreboard$46template, "_el_1");
  let const$1;
  let const$2;
  scorecard__scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-back-button");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfElement().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'scrollBack')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (!(scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarBack == null)) {
          src__runtime__dom_helpers.updateAttribute(this[_el_1], "aria-label", scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarBack);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(scorecard__scoreboard$46template._ViewScoreboardComponent1, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent1 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  let const$3;
  let const$4;
  scorecard__scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-forward-button");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGetOptional(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfElement().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(_ctx, 'scrollForward')));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (!(scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarForward == null)) {
          src__runtime__dom_helpers.updateAttribute(this[_el_1], "aria-label", scorecard__scoreboard.ScoreboardComponent.scrollScorecardBarForward);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(scorecard__scoreboard$46template._ViewScoreboardComponent2, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponent2 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ScoreboardComponent_0_5 = dart.privateName(scorecard__scoreboard$46template, "_ScoreboardComponent_0_5");
  scorecard__scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends src__core__linker__app_view.AppView$(scorecard__scoreboard.ScoreboardComponent) {
    build() {
      this[_compView_0] = new scorecard__scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoreboardComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(scorecard__scoreboard.ScoreboardComponent, dart.wrapType(scorecard__scoreboard.ScoreboardComponent), dart.fn(() => new scorecard__scoreboard.ScoreboardComponent.new(null, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0]), VoidToScoreboardComponent())) : new scorecard__scoreboard.ScoreboardComponent.new(null, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0]);
      this[_ScoreboardComponent_0_5].scoreCards = JSArrayOfScorecardComponent().of([]);
      this[_compView_0].create(this[_ScoreboardComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfScoreboardComponent()).new(0, this, this.rootEl, this[_ScoreboardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScoreboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_ScoreboardComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScoreboardComponent_0_5] = null;
    scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = scorecard__scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scorecard__scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setMethodSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getMethods(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(scorecard__scoreboard.ScoreboardComponent), [])
  }));
  dart.setLibraryUri(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, "package:angular_components/scorecard/scoreboard.template.dart");
  dart.setFieldSignature(scorecard__scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard__scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(scorecard__scoreboard$46template.ViewScoreboardComponent0),
    [_ScoreboardComponent_0_5]: dart.fieldType(scorecard__scoreboard.ScoreboardComponent)
  }));
  scorecard__scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function(parentView, parentIndex) {
    return new scorecard__scoreboard$46template._ViewScoreboardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(scorecard__scoreboard$46template, {
    /*scorecard__scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  scorecard__scoreboard$46template.initReflector = function() {
    if (dart.test(scorecard__scoreboard$46template._visited)) {
      return;
    }
    scorecard__scoreboard$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(scorecard__scoreboard.ScoreboardComponent), scorecard__scoreboard$46template.ScoreboardComponentNgFactory);
    angular$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__color__palette$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    scorecard__scorecard$46template.initReflector();
    scorecard__scorecard_bar$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template.ddc", {
    "package:angular_components/scorecard/scoreboard.template.dart": scorecard__scoreboard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":"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","file":"scoreboard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scorecard__scoreboard$46template
  };
});

//# sourceMappingURL=scoreboard.template.ddc.js.map
