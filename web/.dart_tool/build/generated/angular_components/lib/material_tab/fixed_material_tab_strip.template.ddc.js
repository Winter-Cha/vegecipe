define(['dart_sdk', 'packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus', 'packages/angular_components/material_tab/tab_button.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/material_tab/tab_change_event.template'], function(dart_sdk, fixed_material_tab_strip$46scss$46css, modules, change_detection, fixed_material_tab_strip, focus_list, focus_list$, focus, tab_button, focus_item, focus_item$, tab_button$, angular, rtl_annotation, tab_change_event) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__fixed_material_tab_strip$46scss$46css$46shim = fixed_material_tab_strip$46scss$46css.material_tab__fixed_material_tab_strip$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const focus__focus_list = focus_list.focus__focus_list;
  const focus__focus_list$46template = focus_list$.focus__focus_list$46template;
  const focus__focus = focus.focus__focus;
  const material_tab__tab_button$46template = tab_button.material_tab__tab_button$46template;
  const focus__focus_item = focus_item.focus__focus_item;
  const focus__focus_item$46template = focus_item$.focus__focus_item$46template;
  const material_tab__tab_button = tab_button$.material_tab__tab_button;
  const angular$46template = angular.angular$46template;
  const annotations__rtl_annotation$46template = rtl_annotation.annotations__rtl_annotation$46template;
  const material_tab__tab_change_event$46template = tab_change_event.material_tab__tab_change_event$46template;
  const material_tab__fixed_material_tab_strip$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $setProperty = dartx.setProperty;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let VoidToFocusListDirective = () => (VoidToFocusListDirective = dart.constFn(dart.fnType(focus__focus_list.FocusListDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus__focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus__focus.FocusableItem)))();
  let _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = () => (_ViewFixedMaterialTabStripComponent1ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1])))();
  let AppViewOfFixedMaterialTabStripComponent = () => (AppViewOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let AppViewAndintToAppViewOfFixedMaterialTabStripComponent = () => (AppViewAndintToAppViewOfFixedMaterialTabStripComponent = dart.constFn(dart.fnType(AppViewOfFixedMaterialTabStripComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFixedMaterialTabStripComponent = () => (ComponentFactoryOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let VoidToFixedMaterialTabStripComponent = () => (VoidToFixedMaterialTabStripComponent = dart.constFn(dart.fnType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, [])))();
  let ComponentRefOfFixedMaterialTabStripComponent = () => (ComponentRefOfFixedMaterialTabStripComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent*/get styles$FixedMaterialTabStripComponent() {
      return [material_tab__fixed_material_tab_strip$46scss$46css$46shim.styles];
    }
  });
  const _query_FocusableItem_0_0_isDirty = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_query_FocusableItem_0_0_isDirty");
  const _FocusListDirective_0_5 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_FocusListDirective_0_5");
  const _appEl_2 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_appEl_2");
  const _NgFor_2_9 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_NgFor_2_9");
  const _expr_0 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_expr_1");
  const _el_0 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_el_0");
  const _el_1 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_el_1");
  const _FocusItemDirective_0_5 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_FocusItemDirective_0_5");
  material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0 = class ViewFixedMaterialTabStripComponent0 extends src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "navi-bar");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "focusList", "");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "tablist");
      this.addShimC(this[_el_0]);
      this[_FocusListDirective_0_5] = new focus__focus_list$46template.FocusListDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus_list.FocusListDirective, dart.wrapType(focus__focus_list.FocusListDirective), dart.fn(() => new focus__focus_list.FocusListDirective.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), "tablist"), VoidToFocusListDirective())) : new focus__focus_list.FocusListDirective.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), "tablist"));
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "tab-indicator");
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.tabLabels;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = this[_appEl_2].mapNestedViews(focus__focus.FocusableItem, material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewFixedMaterialTabStripComponent1ToListOfFocusableItem()));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
      }
      this[_FocusListDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_0 = _ctx.tabIndicatorTransform;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_1].style[$setProperty]("transform", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles;
      if (styles == null) {
        material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = styles = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent, material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_FocusListDirective_0_5] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tab-strip"));
    this.updateChildClassNonHtml(this.rootEl, material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.hostClass);
  }).prototype = material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
    [_FocusListDirective_0_5]: dart.fieldType(focus__focus_list$46template.FocusListDirectiveNgCd),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, {
    /*material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory*/get _FixedMaterialTabStripComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFixedMaterialTabStripComponent()).new("material-tab-strip", dart.fn(material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, AppViewAndintToAppViewOfFixedMaterialTabStripComponent())));
    }
  });
  dart.copyProperties(material_tab__fixed_material_tab_strip$46template, {
    get FixedMaterialTabStripComponentNgFactory() {
      return material_tab__fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory;
    }
  });
  const _compView_0 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_compView_0");
  const _TabButtonComponent_0_6 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_TabButtonComponent_0_6");
  const _expr_3 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_expr_4");
  const _handle_trigger_0_0 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_handle_trigger_0_0");
  material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1 = class _ViewFixedMaterialTabStripComponent1 extends src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      this[_compView_0] = new material_tab__tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "tab-button");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "tab");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_FocusItemDirective_0_5] = new focus__focus_item$46template.FocusItemDirectiveNgCd.new(new focus__focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), "tab"));
      this[_TabButtonComponent_0_6] = new material_tab__tab_button.TabButtonComponent.new(this[_el_0]);
      this[_compView_0].create0(this[_TabButtonComponent_0_6]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
      let subscription_0 = this[_TabButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([this[_el_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(focus__focus.FocusableItem) && 0 === nodeIndex) {
        return this[_FocusItemDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_idx = src__runtime__optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
      let local_tabLabel = src__runtime__optimizations.unsafeCast(core.String, this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_TabButtonComponent_0_6].role = "tab";
        changed = true;
      }
      let currVal_3 = local_tabLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_TabButtonComponent_0_6].label = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeTabIndex == local_idx;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_TabButtonComponent_0_6].isActive = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.tabId(local_idx);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeStr(local_idx);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-selected", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_trigger_0_0]($event) {
      let local_idx = src__runtime__optimizations.unsafeCast(core.int, this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.switchTo(local_idx);
    }
  };
  (material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusItemDirective_0_5] = null;
    this[_TabButtonComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_tab__tab_button$46template.ViewTabButtonComponent0),
    [_FocusItemDirective_0_5]: dart.fieldType(focus__focus_item$46template.FocusItemDirectiveNgCd),
    [_TabButtonComponent_0_6]: dart.fieldType(material_tab__tab_button.TabButtonComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1 = function(parentView, parentIndex) {
    return new material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponentHost*/get styles$FixedMaterialTabStripComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _FixedMaterialTabStripComponent_0_5 = dart.privateName(material_tab__fixed_material_tab_strip$46template, "_FixedMaterialTabStripComponent_0_5");
  let const$;
  let const$0;
  material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0 = class _ViewFixedMaterialTabStripComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent) {
    build() {
      this[_compView_0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), dart.fn(() => new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex))), VoidToFixedMaterialTabStripComponent())) : new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFixedMaterialTabStripComponent()).new(0, this, this.rootEl, this[_FixedMaterialTabStripComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.prototype;
  dart.addTypeTests(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.setMethodSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), [])
  }));
  dart.setFieldSignature(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent)
  }));
  material_tab__fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__fixed_material_tab_strip$46template, {
    /*material_tab__fixed_material_tab_strip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__fixed_material_tab_strip$46template.initReflector = function() {
    if (dart.test(material_tab__fixed_material_tab_strip$46template._visited)) {
      return;
    }
    material_tab__fixed_material_tab_strip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), material_tab__fixed_material_tab_strip$46template.FixedMaterialTabStripComponentNgFactory);
    angular$46template.initReflector();
    annotations__rtl_annotation$46template.initReflector();
    focus__focus_item$46template.initReflector();
    focus__focus_list$46template.initReflector();
    material_tab__tab_button$46template.initReflector();
    material_tab__tab_change_event$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.template.ddc", {
    "package:angular_components/material_tab/fixed_material_tab_strip.template.dart": material_tab__fixed_material_tab_strip$46template
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.template.dart"],"names":[],"mappings":"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","file":"fixed_material_tab_strip.template.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip$46template: material_tab__fixed_material_tab_strip$46template
  };
});

//# sourceMappingURL=fixed_material_tab_strip.template.ddc.js.map
