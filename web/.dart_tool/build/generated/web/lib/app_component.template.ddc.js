define(['dart_sdk', 'packages/web/app_component.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/web/src/app_bar/app_bar_component', 'packages/core/core', 'packages/redux/redux', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/web/app_component', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular/src/runtime/text_binding', 'packages/angular_router/src/constants', 'packages/angular/src/runtime/interpolate'], function(dart_sdk, app_component$46css, modules, change_detection, app_bar_component, core, redux, router_outlet_directive, app_component, angular, angular_router, text_binding, constants, interpolate) {
  'use strict';
  const core$ = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__app_bar__app_bar_component = app_bar_component.src__app_bar__app_bar_component;
  const src__routes = app_bar_component.src__routes;
  const src__common__theater_selector__theater_dropdown_controller$46template = app_bar_component.src__common__theater_selector__theater_dropdown_controller$46template;
  const src__routes$46template = app_bar_component.src__routes$46template;
  const src__app_bar__nav_bar__nav_bar_component = app_bar_component.src__app_bar__nav_bar__nav_bar_component;
  const src__app_bar__search_bar__search_bar_component = app_bar_component.src__app_bar__search_bar__search_bar_component;
  const src__i18n__messages = core.src__i18n__messages;
  const src__redux__app__app_state = core.src__redux__app__app_state;
  const src__store = redux.src__store;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__location__location = router_outlet_directive.src__location__location;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__directives__router_link_directive$46template = angular_router.src__directives__router_link_directive$46template;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const src__directives__router_link_active_directive = constants.src__directives__router_link_active_directive;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const app_component$46template = Object.create(dart.library);
  const src__app_bar__nav_bar__nav_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__nav_bar__nav_bar_component$46template = Object.create(dart.library);
  const src__app_bar__scroll_utils$46template = Object.create(dart.library);
  const src__app_bar__search_bar__search_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__search_bar__search_bar_component$46template = Object.create(dart.library);
  const src__app_bar__app_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__app_bar_component$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(src__store.Store$(src__redux__app__app_state.AppState)))();
  let VoidToAppBarComponent = () => (VoidToAppBarComponent = dart.constFn(dart.fnType(src__app_bar__app_bar_component.AppBarComponent, [])))();
  let VoidToRouterOutlet = () => (VoidToRouterOutlet = dart.constFn(dart.fnType(src__directives__router_outlet_directive.RouterOutlet, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core$.int])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidToAppComponent = () => (VoidToAppComponent = dart.constFn(dart.fnType(app_component$.AppComponent, [])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let VoidToRouterLink = () => (VoidToRouterLink = dart.constFn(dart.fnType(src__directives__router_link_directive.RouterLink, [])))();
  let VoidToRouterLinkActive = () => (VoidToRouterLinkActive = dart.constFn(dart.fnType(src__directives__router_link_active_directive.RouterLinkActive, [])))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let AppViewOfNavBarComponent = () => (AppViewOfNavBarComponent = dart.constFn(src__core__linker__app_view.AppView$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent)))();
  let AppViewAndintToAppViewOfNavBarComponent = () => (AppViewAndintToAppViewOfNavBarComponent = dart.constFn(dart.fnType(AppViewOfNavBarComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfNavBarComponent = () => (ComponentFactoryOfNavBarComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent)))();
  let VoidToNavBarComponent = () => (VoidToNavBarComponent = dart.constFn(dart.fnType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent, [])))();
  let ComponentRefOfNavBarComponent = () => (ComponentRefOfNavBarComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent)))();
  let AppViewOfSearchBarComponent = () => (AppViewOfSearchBarComponent = dart.constFn(src__core__linker__app_view.AppView$(src__app_bar__search_bar__search_bar_component.SearchBarComponent)))();
  let AppViewAndintToAppViewOfSearchBarComponent = () => (AppViewAndintToAppViewOfSearchBarComponent = dart.constFn(dart.fnType(AppViewOfSearchBarComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfSearchBarComponent = () => (ComponentFactoryOfSearchBarComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__app_bar__search_bar__search_bar_component.SearchBarComponent)))();
  let VoidToSearchBarComponent = () => (VoidToSearchBarComponent = dart.constFn(dart.fnType(src__app_bar__search_bar__search_bar_component.SearchBarComponent, [])))();
  let ComponentRefOfSearchBarComponent = () => (ComponentRefOfSearchBarComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__app_bar__search_bar__search_bar_component.SearchBarComponent)))();
  let AppViewOfAppBarComponent = () => (AppViewOfAppBarComponent = dart.constFn(src__core__linker__app_view.AppView$(src__app_bar__app_bar_component.AppBarComponent)))();
  let AppViewAndintToAppViewOfAppBarComponent = () => (AppViewAndintToAppViewOfAppBarComponent = dart.constFn(dart.fnType(AppViewOfAppBarComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppBarComponent = () => (ComponentFactoryOfAppBarComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__app_bar__app_bar_component.AppBarComponent)))();
  let ComponentRefOfAppBarComponent = () => (ComponentRefOfAppBarComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__app_bar__app_bar_component.AppBarComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _compView_0 = dart.privateName(app_component$46template, "_compView_0");
  const _AppBarComponent_0_5 = dart.privateName(app_component$46template, "_AppBarComponent_0_5");
  const _appEl_2 = dart.privateName(app_component$46template, "_appEl_2");
  const _RouterOutlet_2_8 = dart.privateName(app_component$46template, "_RouterOutlet_2_8");
  const _appEl_4 = dart.privateName(app_component$46template, "_appEl_4");
  const _TemplateRef_4_8 = dart.privateName(app_component$46template, "_TemplateRef_4_8");
  const _expr_0 = dart.privateName(app_component$46template, "_expr_0");
  const _expr_1 = dart.privateName(app_component$46template, "_expr_1");
  const _expr_2 = dart.privateName(app_component$46template, "_expr_2");
  const _expr_4 = dart.privateName(app_component$46template, "_expr_4");
  const _el_1 = dart.privateName(app_component$46template, "_el_1");
  const _el_3 = dart.privateName(app_component$46template, "_el_3");
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/app_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__app_bar__app_bar_component$46template.ViewAppBarComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_AppBarComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__app_bar_component.AppBarComponent, dart.wrapType(src__app_bar__app_bar_component.AppBarComponent), dart.fn(() => new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToAppBarComponent())) : new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0].create0(this[_AppBarComponent_0_5]);
      let doc = html.document;
      this[_el_1] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "main");
      this.updateChildClass(html.HtmlElement._check(this[_el_1]), "content");
      this.addShimE(this[_el_1]);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, this[_el_1], "router-outlet");
      this.addShimE(_el_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _el_2);
      this[_RouterOutlet_2_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_outlet_directive.RouterOutlet, dart.wrapType(src__directives__router_outlet_directive.RouterOutlet), dart.fn(() => new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGetOptional(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex)), this[_appEl_2], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGetOptional(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex))), VoidToRouterOutlet())) : new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGetOptional(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex)), this[_appEl_2], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGetOptional(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex)));
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(this[_el_3], "theater-container");
      this.addShimC(this[_el_3]);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(this[_el_3]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, _anchor_4);
      this[_TemplateRef_4_8] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfvoid()));
      let subscription_0 = this[_AppBarComponent_0_5].theaterButtonClicked.listen(this.eventHandler0(dart.dynamic, dart.bind(_ctx, 'toggleTheaterDropdown')));
      _ctx.theaterContainer = this[_appEl_4];
      this.init(const$ || (const$ = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.theaterDropdownVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_AppBarComponent_0_5].theaterDropdownVisible = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.theaterDropdownActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_AppBarComponent_0_5].theaterDropdownActive = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppBarComponent_0_5].ngOnInit();
      }
      if (firstCheck) {
        if (!(src__routes.Routes.all == null)) {
          this[_RouterOutlet_2_8].routes = src__routes.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_2_8].ngOnInit();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_2 = _ctx.theaterDropdownVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_1]), "scrolling-blocked", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_4 = _ctx.theaterDropdownActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_3], "visible", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_AppBarComponent_0_5].ngOnDestroy();
      this[_RouterOutlet_2_8].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = app_component$46template.ViewAppComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppBarComponent_0_5] = null;
    this[_appEl_2] = null;
    this[_RouterOutlet_2_8] = null;
    this[_appEl_4] = null;
    this[_TemplateRef_4_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_0]: dart.fieldType(src__app_bar__app_bar_component$46template.ViewAppBarComponent0),
    [_AppBarComponent_0_5]: dart.fieldType(src__app_bar__app_bar_component.AppBarComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_2_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_4_8]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_expr_0]: dart.fieldType(core$.bool),
    [_expr_1]: dart.fieldType(core$.bool),
    [_expr_2]: dart.fieldType(core$.bool),
    [_expr_4]: dart.fieldType(core$.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this.init0();
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), [])
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = dart.privateName(app_component$46template, "_appEl_0");
  const _AppComponent_0_8 = dart.privateName(app_component$46template, "_AppComponent_0_8");
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_AppComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(app_component$.AppComponent, dart.wrapType(app_component$.AppComponent), dart.fn(() => new app_component$.AppComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_0]), VoidToAppComponent())) : new app_component$.AppComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_0]);
      this[_compView_0].create(this[_AppComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0]);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_8]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppComponent_0_8].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_AppComponent_0_8].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_AppComponent_0_8] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_AppComponent_0_8]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__app_bar__app_bar_component$46template.initReflector();
    src__common__theater_selector__theater_dropdown_controller$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46css$46shim, {
    /*src__app_bar__nav_bar__nav_bar_component$46css$46shim.styles*/get styles() {
      return ["nav._ngcontent-%ID%{position:fixed;box-shadow:0 -2px 12px rgba(0,0,0,0.5);bottom:0;left:0;display:flex;justify-content:space-around;background:rgba(0,0,0,0.8);width:100%;height:68px;opacity:1;transition:opacity 350ms ease,bottom 350ms ease}nav.hidden._ngcontent-%ID%{opacity:0;bottom:-60px}nav._ngcontent-%ID% a._ngcontent-%ID%{padding:10px 16px 2px 16px;text-decoration:none;text-align:center;user-select:none}nav._ngcontent-%ID% a._ngcontent-%ID% .icon._ngcontent-%ID%{width:28px;height:28px;opacity:0.6;transition:opacity 0.15s linear}nav._ngcontent-%ID% a._ngcontent-%ID% span._ngcontent-%ID%{display:flex;align-items:center;color:rgba(255,255,255,0.6);padding:0 2px 5px 2px;font-size:14px;transition:border-bottom-width 0.15s linear,padding-bottom 0.15s linear,color 0.15s linear}nav._ngcontent-%ID% a.active-route._ngcontent-%ID%{color:#fff;padding-bottom:0}nav._ngcontent-%ID% a.active-route._ngcontent-%ID% .icon._ngcontent-%ID%{opacity:1}nav._ngcontent-%ID% a.active-route._ngcontent-%ID% span._ngcontent-%ID%{padding-bottom:0;color:white}@media ONLY screen AND (min-width:768px){nav._ngcontent-%ID%{margin-left:40px;height:60px;position:unset;box-shadow:none;justify-content:unset;background:unset;width:unset}nav._ngcontent-%ID% a._ngcontent-%ID%{padding-bottom:0}nav._ngcontent-%ID% a._ngcontent-%ID% span._ngcontent-%ID%{height:100%;font-size:16px;border-bottom:0 solid #fdbd2c}nav._ngcontent-%ID% .icon._ngcontent-%ID%{display:none}nav._ngcontent-%ID% .active-route._ngcontent-%ID% span._ngcontent-%ID%{border-bottom-width:5px}}"];
    }
  });
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46template, {
    /*src__app_bar__nav_bar__nav_bar_component$46template.styles$NavBarComponent*/get styles$NavBarComponent() {
      return [src__app_bar__nav_bar__nav_bar_component$46css$46shim.styles];
    }
  });
  const _textBinding_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_textBinding_5");
  const _textBinding_11 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_textBinding_11");
  const _RouterLink_1_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_1_5");
  const _RouterLinkActive_1_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_1_6");
  const _RouterLink_7_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_7_5");
  const _RouterLinkActive_7_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_7_6");
  const _expr_0$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_0");
  const _expr_1$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_1");
  const _expr_3 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_3");
  const _el_0 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_0");
  const _el_1$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_1");
  const _el_7 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_7");
  src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0 = class ViewNavBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/nav_bar/nav_bar_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "nav");
      this.addShimE(this[_el_0]);
      this[_el_1$] = html.AnchorElement._check(src__runtime__dom_helpers.appendElement(doc, this[_el_0], "a"));
      src__runtime__dom_helpers.setAttribute(this[_el_1$], "routerLinkActive", "active-route");
      this.addShimC(this[_el_1$]);
      this[_RouterLink_1_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_1$]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_1$]));
      this[_RouterLinkActive_1_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_1$], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_1$], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, this[_el_1$], "img");
      src__runtime__dom_helpers.setAttribute(_el_2, "alt", "Vegan Book");
      this.updateChildClass(html.HtmlElement._check(_el_2), "icon");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/now-in-theaters.svg");
      this.addShimE(_el_2);
      let _text_3 = src__runtime__dom_helpers.appendText(this[_el_1$], " ");
      let _el_4 = src__runtime__dom_helpers.appendSpan(doc, this[_el_1$]);
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5].element);
      this[_RouterLinkActive_1_6].links = JSArrayOfRouterLink().of([this[_RouterLink_1_5].instance]);
      let _text_6 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
      this[_el_7] = html.AnchorElement._check(src__runtime__dom_helpers.appendElement(doc, this[_el_0], "a"));
      src__runtime__dom_helpers.setAttribute(this[_el_7], "routerLinkActive", "active-route");
      this.addShimC(this[_el_7]);
      this[_RouterLink_7_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_7]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_7]));
      this[_RouterLinkActive_7_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_7], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_7], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _el_8 = src__runtime__dom_helpers.appendElement(doc, this[_el_7], "img");
      src__runtime__dom_helpers.setAttribute(_el_8, "alt", "Vegan News");
      this.updateChildClass(html.HtmlElement._check(_el_8), "icon");
      src__runtime__dom_helpers.setAttribute(_el_8, "src", "images/now-in-theaters.svg");
      this.addShimE(_el_8);
      let _text_9 = src__runtime__dom_helpers.appendText(this[_el_7], " ");
      let _el_10 = src__runtime__dom_helpers.appendSpan(doc, this[_el_7]);
      this.addShimE(_el_10);
      _el_10[$append](this[_textBinding_11].element);
      this[_RouterLinkActive_7_6].links = JSArrayOfRouterLink().of([this[_RouterLink_7_5].instance]);
      let _text_12 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
      this[_el_1$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_1_5].instance, 'onClick')));
      this[_el_7][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_7_5].instance, 'onClick')));
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_1 = src__routes.RoutePaths.vegeBook.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_RouterLink_1_5].instance.routerLink = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      if (firstCheck) {
        this[_RouterLinkActive_1_6].routerLinkActive = "active-route";
      }
      let currVal_3 = src__routes.RoutePaths.vegeNews.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_RouterLink_7_5].instance.routerLink = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (firstCheck) {
        this[_RouterLinkActive_7_6].routerLinkActive = "active-route";
      }
      let currVal_0 = _ctx.theaterDropdownActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "hidden", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_RouterLink_1_5].detectHostChanges(this, this[_el_1$]);
      this[_textBinding_5].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.vegeBook));
      this[_RouterLink_7_5].detectHostChanges(this, this[_el_7]);
      this[_textBinding_11].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.vegeNews));
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_1_6].ngAfterViewInit();
          this[_RouterLinkActive_7_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_RouterLink_1_5].instance.ngOnDestroy();
      this[_RouterLinkActive_1_6].ngOnDestroy();
      this[_RouterLink_7_5].instance.ngOnDestroy();
      this[_RouterLinkActive_7_6].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0._componentStyles;
      if (styles == null) {
        src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0._componentStyles = styles = src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__app_bar__nav_bar__nav_bar_component$46template.styles$NavBarComponent, src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_5] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_11] = new src__runtime__text_binding.TextBinding.new();
    this[_RouterLink_1_5] = null;
    this[_RouterLinkActive_1_6] = null;
    this[_RouterLink_7_5] = null;
    this[_RouterLinkActive_7_6] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    this[_el_1$] = null;
    this[_el_7] = null;
    src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("nav-bar"));
  }).prototype = src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0);
  dart.setMethodSignature(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.__proto__),
    [_textBinding_5]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_11]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_RouterLink_1_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_1_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_RouterLink_7_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_7_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_expr_0$]: dart.fieldType(core$.bool),
    [_expr_1$]: dart.fieldType(core$.String),
    [_expr_3]: dart.fieldType(core$.String),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1$]: dart.fieldType(html.AnchorElement),
    [_el_7]: dart.fieldType(html.AnchorElement)
  }));
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0, {
    /*src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46template, {
    /*src__app_bar__nav_bar__nav_bar_component$46template._NavBarComponentNgFactory*/get _NavBarComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfNavBarComponent()).new("nav-bar", dart.fn(src__app_bar__nav_bar__nav_bar_component$46template.viewFactory_NavBarComponentHost0, AppViewAndintToAppViewOfNavBarComponent())));
    }
  });
  dart.copyProperties(src__app_bar__nav_bar__nav_bar_component$46template, {
    get NavBarComponentNgFactory() {
      return src__app_bar__nav_bar__nav_bar_component$46template._NavBarComponentNgFactory;
    }
  });
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46template, {
    /*src__app_bar__nav_bar__nav_bar_component$46template.styles$NavBarComponentHost*/get styles$NavBarComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_compView_0");
  const _NavBarComponent_0_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_NavBarComponent_0_5");
  src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0 = class _ViewNavBarComponentHost0 extends src__core__linker__app_view.AppView$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent) {
    build() {
      this[_compView_0$] = new src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_NavBarComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__nav_bar__nav_bar_component.NavBarComponent, dart.wrapType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), dart.fn(() => new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToNavBarComponent())) : new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$].create(this[_NavBarComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfNavBarComponent()).new(0, this, this.rootEl, this[_NavBarComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_NavBarComponent_0_5] = null;
    src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.prototype;
  dart.addTypeTests(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0);
  dart.setMethodSignature(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0, () => ({
    __proto__: dart.getMethods(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), [])
  }));
  dart.setFieldSignature(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0, () => ({
    __proto__: dart.getFields(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0),
    [_NavBarComponent_0_5]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent)
  }));
  src__app_bar__nav_bar__nav_bar_component$46template.viewFactory_NavBarComponentHost0 = function(parentView, parentIndex) {
    return new src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__app_bar__nav_bar__nav_bar_component$46template, {
    /*src__app_bar__nav_bar__nav_bar_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__app_bar__nav_bar__nav_bar_component$46template.initReflector = function() {
    if (dart.test(src__app_bar__nav_bar__nav_bar_component$46template._visited)) {
      return;
    }
    src__app_bar__nav_bar__nav_bar_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), src__app_bar__nav_bar__nav_bar_component$46template.NavBarComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__routes$46template.initReflector();
  };
  src__app_bar__scroll_utils$46template.initReflector = function() {
  };
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46css$46shim, {
    /*src__app_bar__search_bar__search_bar_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{display:flex;background:#f4f7f4}._nghost-%ID%[expanded]{position:fixed;left:0;right:0}@media ONLY screen AND (min-width:768px){._nghost-%ID%[expanded]{position:unset}}.back._ngcontent-%ID%{display:none}.back.visible._ngcontent-%ID%{display:block;padding-left:16px;cursor:pointer}@media ONLY screen AND (min-width:768px){.back.visible._ngcontent-%ID%{display:none}}input._ngcontent-%ID%{display:none;background:transparent;width:100%;color:#020202;font-size:16px;padding:8px}input._ngcontent-%ID%,input:focus._ngcontent-%ID%{background-color:transparent;border:none;outline:none}input._ngcontent-%ID%::placeholder{color:rgba(255,255,255,0.5)}input.visible._ngcontent-%ID%{display:block}.buttons._ngcontent-%ID%{position:relative;width:56px;height:56px}@media ONLY screen AND (min-width:768px){.buttons._ngcontent-%ID%{width:60px;height:60px}}.buttons._ngcontent-%ID% img._ngcontent-%ID%{position:absolute;opacity:0;right:0;transform:scale(0.2)}.buttons._ngcontent-%ID% img.visible._ngcontent-%ID%{opacity:1;transform:scale(1)}"];
    }
  });
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46template, {
    /*src__app_bar__search_bar__search_bar_component$46template.styles$SearchBarComponent*/get styles$SearchBarComponent() {
      return [src__app_bar__search_bar__search_bar_component$46css$46shim.styles];
    }
  });
  const _expr_0$0 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_0");
  const _expr_1$0 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_1");
  const _expr_2$ = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_2");
  const _expr_3$ = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_3");
  const _expr_4$ = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_4");
  const _expr_5 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_expr_5");
  const _el_0$ = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_0");
  const _el_2 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_2");
  const _el_4 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_4");
  const _el_6 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_6");
  const _handle_input_2_0 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_handle_input_2_0");
  src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0 = class ViewSearchBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__search_bar__search_bar_component.SearchBarComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/search_bar/search_bar_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_0$], "alt", "Stop searching movies");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$]), "back");
      src__runtime__dom_helpers.setAttribute(this[_el_0$], "src", "images/back.svg");
      this.addShimE(this[_el_0$]);
      let _text_1 = src__runtime__dom_helpers.appendText(parentRenderNode, " ");
      this[_el_2] = html.InputElement._check(src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "input"));
      src__runtime__dom_helpers.setAttribute(this[_el_2], "type", "text");
      this.addShimC(this[_el_2]);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_3, "buttons");
      this.addShimC(_el_3);
      this[_el_4] = src__runtime__dom_helpers.appendElement(doc, _el_3, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_4], "alt", "Search for movies");
      this.updateChildClass(html.HtmlElement._check(this[_el_4]), "app-bar-button search");
      src__runtime__dom_helpers.setAttribute(this[_el_4], "src", "images/search.svg");
      this.addShimE(this[_el_4]);
      let _text_5 = src__runtime__dom_helpers.appendText(_el_3, " ");
      this[_el_6] = src__runtime__dom_helpers.appendElement(doc, _el_3, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_6], "alt", "Stop searching movies");
      this.updateChildClass(html.HtmlElement._check(this[_el_6]), "app-bar-button close");
      src__runtime__dom_helpers.setAttribute(this[_el_6], "src", "images/close.svg");
      this.addShimE(this[_el_6]);
      this[_el_0$][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggleSearch')));
      this[_el_2][$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_2_0)));
      _el_3[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggleSearch')));
      _ctx.searchField = this[_el_2];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.searchOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$]), "visible", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.messages.searchHint;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_2], "placeholder", currVal_1);
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.searchOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_2], "visible", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = !dart.test(_ctx.searchOpen);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_4]), "visible", currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.searchOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_6]), "visible", currVal_4);
        this[_expr_4$] = currVal_4;
      }
    }
    [_handle_input_2_0]($event) {
      let local_searchField = this[_el_2];
      let _ctx = this.ctx;
      _ctx.updateSearchQuery(local_searchField.value);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_5 = _ctx.hostExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "expanded", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
    initComponentStyles() {
      let styles = src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0._componentStyles;
      if (styles == null) {
        src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0._componentStyles = styles = src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__app_bar__search_bar__search_bar_component$46template.styles$SearchBarComponent, src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5] = null;
    this[_el_0$] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("search-bar"));
  }).prototype = src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0);
  dart.setMethodSignature(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__search_bar__search_bar_component.SearchBarComponent), []),
    [_handle_input_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core$.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__),
    [_expr_0$0]: dart.fieldType(core$.bool),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(core$.bool),
    [_expr_3$]: dart.fieldType(core$.bool),
    [_expr_4$]: dart.fieldType(core$.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.InputElement),
    [_el_4]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, {
    /*src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46template, {
    /*src__app_bar__search_bar__search_bar_component$46template._SearchBarComponentNgFactory*/get _SearchBarComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSearchBarComponent()).new("search-bar", dart.fn(src__app_bar__search_bar__search_bar_component$46template.viewFactory_SearchBarComponentHost0, AppViewAndintToAppViewOfSearchBarComponent())));
    }
  });
  dart.copyProperties(src__app_bar__search_bar__search_bar_component$46template, {
    get SearchBarComponentNgFactory() {
      return src__app_bar__search_bar__search_bar_component$46template._SearchBarComponentNgFactory;
    }
  });
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46template, {
    /*src__app_bar__search_bar__search_bar_component$46template.styles$SearchBarComponentHost*/get styles$SearchBarComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$0 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_compView_0");
  const _SearchBarComponent_0_5 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_SearchBarComponent_0_5");
  src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0 = class _ViewSearchBarComponentHost0 extends src__core__linker__app_view.AppView$(src__app_bar__search_bar__search_bar_component.SearchBarComponent) {
    build() {
      this[_compView_0$0] = new src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_SearchBarComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__search_bar__search_bar_component.SearchBarComponent, dart.wrapType(src__app_bar__search_bar__search_bar_component.SearchBarComponent), dart.fn(() => new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSearchBarComponent())) : new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_0$0].create(this[_SearchBarComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfSearchBarComponent()).new(0, this, this.rootEl, this[_SearchBarComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_SearchBarComponent_0_5] = null;
    src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.prototype;
  dart.addTypeTests(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0);
  dart.setMethodSignature(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0, () => ({
    __proto__: dart.getMethods(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__search_bar__search_bar_component.SearchBarComponent), [])
  }));
  dart.setFieldSignature(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0, () => ({
    __proto__: dart.getFields(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0),
    [_SearchBarComponent_0_5]: dart.fieldType(src__app_bar__search_bar__search_bar_component.SearchBarComponent)
  }));
  src__app_bar__search_bar__search_bar_component$46template.viewFactory_SearchBarComponentHost0 = function(parentView, parentIndex) {
    return new src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__app_bar__search_bar__search_bar_component$46template, {
    /*src__app_bar__search_bar__search_bar_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__app_bar__search_bar__search_bar_component$46template.initReflector = function() {
    if (dart.test(src__app_bar__search_bar__search_bar_component$46template._visited)) {
      return;
    }
    src__app_bar__search_bar__search_bar_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__app_bar__search_bar__search_bar_component.SearchBarComponent), src__app_bar__search_bar__search_bar_component$46template.SearchBarComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__app_bar__app_bar_component$46css$46shim, {
    /*src__app_bar__app_bar_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}header._ngcontent-%ID%{background:#363636;box-shadow:0 10px 60px rgba(0,0,0,0.4);width:100%;height:56px;position:fixed;top:0;opacity:1;z-index:3000;transition:opacity 350ms ease,top 350ms ease}header.hidden._ngcontent-%ID%{top:-56px;opacity:0}.wrapper._ngcontent-%ID%{display:flex;justify-content:space-between;align-content:center;width:100%;padding-left:20px}.left._ngcontent-%ID%{display:flex}.right._ngcontent-%ID%{display:flex}.logo._ngcontent-%ID%{position:relative;display:flex;color:white;align-items:center;text-decoration:none;user-select:none;cursor:pointer}.logo._ngcontent-%ID% img._ngcontent-%ID%{width:28px;height:28px;margin-top:2px}.logo._ngcontent-%ID% h1._ngcontent-%ID%{font-size:20px;font-weight:500;color:#FEFEFE}.logo._ngcontent-%ID% .mobile-logo-focus-trap._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0}.name-and-selected-theater._ngcontent-%ID%{display:flex;flex-direction:column;margin-left:6px}.theater-name._ngcontent-%ID%{font-size:12px;opacity:0.7;white-space:nowrap;text-overflow:ellipsis}@media ONLY screen AND (min-width:768px){header._ngcontent-%ID%{height:60px}header.hidden._ngcontent-%ID%{top:-60px}.theater-name._ngcontent-%ID%{display:none}.name-and-selected-theater._ngcontent-%ID%{margin-left:10px}.logo._ngcontent-%ID% img._ngcontent-%ID%{width:32px;height:32px}.logo._ngcontent-%ID% h1._ngcontent-%ID%{font-size:30px}.mobile-logo-focus-trap._ngcontent-%ID%{display:none}.app-bar-button.select-theater._ngcontent-%ID%{display:none}}@media ONLY screen AND (min-width:1024px){.wrapper._ngcontent-%ID%{width:70%;min-width:850px;margin:0 auto;padding:0}}"];
    }
  });
  dart.defineLazy(src__app_bar__app_bar_component$46template, {
    /*src__app_bar__app_bar_component$46template.styles$AppBarComponent*/get styles$AppBarComponent() {
      return [src__app_bar__app_bar_component$46css$46shim.styles];
    }
  });
  const _textBinding_7 = dart.privateName(src__app_bar__app_bar_component$46template, "_textBinding_7");
  const _RouterLink_3_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_RouterLink_3_5");
  const _compView_9 = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_9");
  const _NavBarComponent_9_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_NavBarComponent_9_5");
  const _compView_11 = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_11");
  const _SearchBarComponent_11_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_SearchBarComponent_11_5");
  const _expr_0$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_0");
  const _expr_1$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_1");
  const _expr_2$0 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_2");
  const _expr_3$0 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_3");
  const _el_0$0 = dart.privateName(src__app_bar__app_bar_component$46template, "_el_0");
  const _el_3$ = dart.privateName(src__app_bar__app_bar_component$46template, "_el_3");
  src__app_bar__app_bar_component$46template.ViewAppBarComponent0 = class ViewAppBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__app_bar_component.AppBarComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/app_bar_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$0] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$0]), "header");
      this.addShimE(this[_el_0$0]);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$0]);
      this.updateChildClass(_el_1, "wrapper");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "left");
      this.addShimC(_el_2);
      this[_el_3$] = src__runtime__dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(this[_el_3$], "logo");
      this.addShimC(this[_el_3$]);
      this[_RouterLink_3_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_3$]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_3$]));
      let _el_4 = src__runtime__dom_helpers.appendElement(doc, this[_el_3$], "img");
      src__runtime__dom_helpers.setAttribute(_el_4, "alt", "The InKino logo.");
      src__runtime__dom_helpers.setAttribute(_el_4, "src", "images/logo.png");
      this.addShimE(_el_4);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3$]);
      this.updateChildClass(_el_5, "name-and-selected-theater");
      this.addShimC(_el_5);
      let _el_6 = src__runtime__dom_helpers.appendElement(doc, _el_5, "h1");
      this.addShimE(_el_6);
      _el_6[$append](this[_textBinding_7].element);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3$]);
      this.updateChildClass(_el_8, "mobile-logo-focus-trap");
      this.addShimC(_el_8);
      this[_compView_9] = new src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootEl;
      _el_2[$append](_el_9);
      this.addShimC(_el_9);
      this[_NavBarComponent_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__nav_bar__nav_bar_component.NavBarComponent, dart.wrapType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), dart.fn(() => new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToNavBarComponent())) : new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_9].create0(this[_NavBarComponent_9_5]);
      let _el_10 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_10, "right");
      this.addShimC(_el_10);
      this[_compView_11] = new src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootEl;
      _el_10[$append](_el_11);
      this.addShimC(_el_11);
      this[_SearchBarComponent_11_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__search_bar__search_bar_component.SearchBarComponent, dart.wrapType(src__app_bar__search_bar__search_bar_component.SearchBarComponent), dart.fn(() => new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSearchBarComponent())) : new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_11].create0(this[_SearchBarComponent_11_5]);
      this[_el_3$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_2 = src__routes.RoutePaths.vegeBook.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_RouterLink_3_5].instance.routerLink = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.theaterDropdownActive;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_NavBarComponent_9_5].theaterDropdownActive = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      let currVal_0 = _ctx.theaterDropdownVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "scrolling-blocked", currVal_0);
        this[_expr_0$1] = currVal_0;
      }
      let currVal_1 = _ctx.hide;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$0]), "hidden", currVal_1);
        this[_expr_1$1] = currVal_1;
      }
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3$]);
      this[_textBinding_7].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.appName));
      this[_compView_11].detectHostChanges(firstCheck);
      this[_compView_9].detectChanges();
      this[_compView_11].detectChanges();
    }
    destroyInternal() {
      this[_compView_9].destroyInternalState();
      this[_compView_11].destroyInternalState();
      this[_RouterLink_3_5].instance.ngOnDestroy();
    }
    initComponentStyles() {
      let styles = src__app_bar__app_bar_component$46template.ViewAppBarComponent0._componentStyles;
      if (styles == null) {
        src__app_bar__app_bar_component$46template.ViewAppBarComponent0._componentStyles = styles = src__app_bar__app_bar_component$46template.ViewAppBarComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__app_bar__app_bar_component$46template.styles$AppBarComponent, src__app_bar__app_bar_component$46template.ViewAppBarComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__app_bar__app_bar_component$46template.ViewAppBarComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_7] = new src__runtime__text_binding.TextBinding.new();
    this[_RouterLink_3_5] = null;
    this[_compView_9] = null;
    this[_NavBarComponent_9_5] = null;
    this[_compView_11] = null;
    this[_SearchBarComponent_11_5] = null;
    this[_expr_0$1] = null;
    this[_expr_1$1] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_el_0$0] = null;
    this[_el_3$] = null;
    src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("app-bar"));
  }).prototype = src__app_bar__app_bar_component$46template.ViewAppBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__app_bar_component$46template.ViewAppBarComponent0);
  dart.setMethodSignature(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__app_bar_component.AppBarComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__),
    [_textBinding_7]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_RouterLink_3_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_compView_9]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0),
    [_NavBarComponent_9_5]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent),
    [_compView_11]: dart.fieldType(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0),
    [_SearchBarComponent_11_5]: dart.fieldType(src__app_bar__search_bar__search_bar_component.SearchBarComponent),
    [_expr_0$1]: dart.fieldType(core$.bool),
    [_expr_1$1]: dart.fieldType(core$.bool),
    [_expr_2$0]: dart.fieldType(core$.String),
    [_expr_3$0]: dart.fieldType(core$.bool),
    [_el_0$0]: dart.fieldType(html.Element),
    [_el_3$]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, {
    /*src__app_bar__app_bar_component$46template.ViewAppBarComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__app_bar__app_bar_component$46template, {
    /*src__app_bar__app_bar_component$46template._AppBarComponentNgFactory*/get _AppBarComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppBarComponent()).new("app-bar", dart.fn(src__app_bar__app_bar_component$46template.viewFactory_AppBarComponentHost0, AppViewAndintToAppViewOfAppBarComponent())));
    }
  });
  dart.copyProperties(src__app_bar__app_bar_component$46template, {
    get AppBarComponentNgFactory() {
      return src__app_bar__app_bar_component$46template._AppBarComponentNgFactory;
    }
  });
  dart.defineLazy(src__app_bar__app_bar_component$46template, {
    /*src__app_bar__app_bar_component$46template.styles$AppBarComponentHost*/get styles$AppBarComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_0");
  const _AppBarComponent_0_5$ = dart.privateName(src__app_bar__app_bar_component$46template, "_AppBarComponent_0_5");
  src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0 = class _ViewAppBarComponentHost0 extends src__core__linker__app_view.AppView$(src__app_bar__app_bar_component.AppBarComponent) {
    build() {
      this[_compView_0$1] = new src__app_bar__app_bar_component$46template.ViewAppBarComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_AppBarComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__app_bar_component.AppBarComponent, dart.wrapType(src__app_bar__app_bar_component.AppBarComponent), dart.fn(() => new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToAppBarComponent())) : new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0$1].create(this[_AppBarComponent_0_5$], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfAppBarComponent()).new(0, this, this.rootEl, this[_AppBarComponent_0_5$]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppBarComponent_0_5$].ngOnInit();
      }
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
      this[_AppBarComponent_0_5$].ngOnDestroy();
    }
  };
  (src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_AppBarComponent_0_5$] = null;
    src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.prototype;
  dart.addTypeTests(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0);
  dart.setMethodSignature(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0, () => ({
    __proto__: dart.getMethods(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__app_bar_component.AppBarComponent), [])
  }));
  dart.setFieldSignature(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0, () => ({
    __proto__: dart.getFields(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__app_bar__app_bar_component$46template.ViewAppBarComponent0),
    [_AppBarComponent_0_5$]: dart.fieldType(src__app_bar__app_bar_component.AppBarComponent)
  }));
  src__app_bar__app_bar_component$46template.viewFactory_AppBarComponentHost0 = function(parentView, parentIndex) {
    return new src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__app_bar__app_bar_component$46template, {
    /*src__app_bar__app_bar_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__app_bar__app_bar_component$46template.initReflector = function() {
    if (dart.test(src__app_bar__app_bar_component$46template._visited)) {
      return;
    }
    src__app_bar__app_bar_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__app_bar__app_bar_component.AppBarComponent), src__app_bar__app_bar_component$46template.AppBarComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__app_bar__nav_bar__nav_bar_component$46template.initReflector();
    src__app_bar__scroll_utils$46template.initReflector();
    src__app_bar__search_bar__search_bar_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/web/app_component.template.ddc", {
    "package:web/app_component.template.dart": app_component$46template,
    "package:web/src/app_bar/nav_bar/nav_bar_component.css.shim.dart": src__app_bar__nav_bar__nav_bar_component$46css$46shim,
    "package:web/src/app_bar/nav_bar/nav_bar_component.template.dart": src__app_bar__nav_bar__nav_bar_component$46template,
    "package:web/src/app_bar/scroll_utils.template.dart": src__app_bar__scroll_utils$46template,
    "package:web/src/app_bar/search_bar/search_bar_component.css.shim.dart": src__app_bar__search_bar__search_bar_component$46css$46shim,
    "package:web/src/app_bar/search_bar/search_bar_component.template.dart": src__app_bar__search_bar__search_bar_component$46template,
    "package:web/src/app_bar/app_bar_component.css.shim.dart": src__app_bar__app_bar_component$46css$46shim,
    "package:web/src/app_bar/app_bar_component.template.dart": src__app_bar__app_bar_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/app_bar/nav_bar/nav_bar_component.css.shim.dart","src/app_bar/nav_bar/nav_bar_component.template.dart","src/app_bar/scroll_utils.template.dart","src/app_bar/search_bar/search_bar_component.css.shim.dart","src/app_bar/search_bar/search_bar_component.template.dart","src/app_bar/app_bar_component.css.shim.dart","src/app_bar/app_bar_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__app_bar__nav_bar__nav_bar_component$46css$46shim: src__app_bar__nav_bar__nav_bar_component$46css$46shim,
    src__app_bar__nav_bar__nav_bar_component$46template: src__app_bar__nav_bar__nav_bar_component$46template,
    src__app_bar__scroll_utils$46template: src__app_bar__scroll_utils$46template,
    src__app_bar__search_bar__search_bar_component$46css$46shim: src__app_bar__search_bar__search_bar_component$46css$46shim,
    src__app_bar__search_bar__search_bar_component$46template: src__app_bar__search_bar__search_bar_component$46template,
    src__app_bar__app_bar_component$46css$46shim: src__app_bar__app_bar_component$46css$46shim,
    src__app_bar__app_bar_component$46template: src__app_bar__app_bar_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
