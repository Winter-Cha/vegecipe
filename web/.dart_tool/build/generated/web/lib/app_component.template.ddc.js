define(['dart_sdk', 'packages/web/app_component.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/web/src/app_bar/app_bar_component', 'packages/core/core', 'packages/redux/redux', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/web/app_component', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular/src/runtime/text_binding', 'packages/angular_router/src/constants', 'packages/angular/src/runtime/interpolate', 'packages/firebase_dart_ui/firebase_dart_ui.template', 'packages/firebase_dart_ui/src/auth_ui_js', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_dialog/material_dialog.template', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/focus/focus', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/model/math/box', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/material_icon/material_icon.template'], function(dart_sdk, app_component$46css, modules, change_detection, app_bar_component, core, redux, router_outlet_directive, app_component, angular, angular_router, text_binding, constants, interpolate, firebase_dart_ui, auth_ui_js, modal, modal$, overlay_ref, dom_service, material_dialog, material_dialog$, material_button, focus, popup_hierarchy, dark_theme, material_button$, button_decorator, has_disabled, deferred_content_aware, module, disposer, angular_2, imperative_view, dom_ruler, managed_zone, angular_2$, module$, box, zindexer, focus$, module$0, material_icon) {
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
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__app_bar__app_bar_component = app_bar_component.src__app_bar__app_bar_component;
  const src__routes = app_bar_component.src__routes;
  const src__common__theater_selector__theater_dropdown_controller$46template = app_bar_component.src__common__theater_selector__theater_dropdown_controller$46template;
  const src__routes$46template = app_bar_component.src__routes$46template;
  const src__app_bar__nav_bar__nav_bar_component = app_bar_component.src__app_bar__nav_bar__nav_bar_component;
  const src__app_bar__search_bar__search_bar_component = app_bar_component.src__app_bar__search_bar__search_bar_component;
  const src__common__signin_page__signin_page_component = app_bar_component.src__common__signin_page__signin_page_component;
  const src__app_bar__signin_bar__signin_bar_component = app_bar_component.src__app_bar__signin_bar__signin_bar_component;
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
  const src__firebase_auth_ui_component$46template = firebase_dart_ui.src__firebase_auth_ui_component$46template;
  const firebase_dart_ui$46template = firebase_dart_ui.firebase_dart_ui$46template;
  const src__firebase_auth_ui_component = auth_ui_js.src__firebase_auth_ui_component;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__components__modal__modal = modal$.laminate__components__modal__modal;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_dialog__material_dialog$46template = material_dialog.material_dialog__material_dialog$46template;
  const material_dialog__material_dialog = material_dialog$.material_dialog__material_dialog;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const focus__focus = focus.focus__focus;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const model__math__box = box.model__math__box;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const focus__focus$46template = focus$.focus__focus$46template;
  const laminate__overlay__module$46template = module$0.laminate__overlay__module$46template;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const app_component$46template = Object.create(dart.library);
  const src__app_bar__nav_bar__nav_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__nav_bar__nav_bar_component$46template = Object.create(dart.library);
  const src__app_bar__scroll_utils$46template = Object.create(dart.library);
  const src__app_bar__search_bar__search_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__search_bar__search_bar_component$46template = Object.create(dart.library);
  const src__common__signin_page__signin_page_component$46css$46shim = Object.create(dart.library);
  const src__common__signin_page__signin_page_component$46template = Object.create(dart.library);
  const src__app_bar__signin_bar__signin_bar_component$46css$46shim = Object.create(dart.library);
  const src__app_bar__signin_bar__signin_bar_component$46template = Object.create(dart.library);
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
  let AppViewOfSignInPageComponent = () => (AppViewOfSignInPageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__signin_page__signin_page_component.SignInPageComponent)))();
  let AppViewAndintToAppViewOfSignInPageComponent = () => (AppViewAndintToAppViewOfSignInPageComponent = dart.constFn(dart.fnType(AppViewOfSignInPageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfSignInPageComponent = () => (ComponentFactoryOfSignInPageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__signin_page__signin_page_component.SignInPageComponent)))();
  let VoidToSignInPageComponent = () => (VoidToSignInPageComponent = dart.constFn(dart.fnType(src__common__signin_page__signin_page_component.SignInPageComponent, [])))();
  let ComponentRefOfSignInPageComponent = () => (ComponentRefOfSignInPageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__signin_page__signin_page_component.SignInPageComponent)))();
  let VoidToModalComponent = () => (VoidToModalComponent = dart.constFn(dart.fnType(laminate__components__modal__modal.ModalComponent, [])))();
  let VoidToMaterialDialogComponent = () => (VoidToMaterialDialogComponent = dart.constFn(dart.fnType(material_dialog__material_dialog.MaterialDialogComponent, [])))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core$.Object)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let AppViewOfSignInBarComponent = () => (AppViewOfSignInBarComponent = dart.constFn(src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent)))();
  let AppViewAndintToAppViewOfSignInBarComponent = () => (AppViewAndintToAppViewOfSignInBarComponent = dart.constFn(dart.fnType(AppViewOfSignInBarComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfSignInBarComponent = () => (ComponentFactoryOfSignInBarComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent)))();
  let VoidToDomService = () => (VoidToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [])))();
  let VoidToAcxImperativeViewUtils = () => (VoidToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [])))();
  let VoidToAngular2ManagedZone = () => (VoidToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core$.String, [])))();
  let VoidToHtmlElement = () => (VoidToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [])))();
  let VoidToOverlayService = () => (VoidToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [])))();
  let VoidToSignInBarComponent = () => (VoidToSignInBarComponent = dart.constFn(dart.fnType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent, [])))();
  let ComponentRefOfSignInBarComponent = () => (ComponentRefOfSignInBarComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent)))();
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
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, "package:web/app_component.template.dart");
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
  dart.setLibraryUri(app_component$46template._ViewAppComponent1, "package:web/app_component.template.dart");
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
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, "package:web/app_component.template.dart");
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
  const _textBinding_17 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_textBinding_17");
  const _textBinding_23 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_textBinding_23");
  const _RouterLink_1_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_1_5");
  const _RouterLinkActive_1_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_1_6");
  const _RouterLink_7_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_7_5");
  const _RouterLinkActive_7_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_7_6");
  const _RouterLink_13_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_13_5");
  const _RouterLinkActive_13_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_13_6");
  const _RouterLink_19_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLink_19_5");
  const _RouterLinkActive_19_6 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_RouterLinkActive_19_6");
  const _expr_0$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_0");
  const _expr_1$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_1");
  const _expr_3 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_3");
  const _expr_5 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_5");
  const _expr_7 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_expr_7");
  const _el_0 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_0");
  const _el_1$ = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_1");
  const _el_7 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_7");
  const _el_13 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_13");
  const _el_19 = dart.privateName(src__app_bar__nav_bar__nav_bar_component$46template, "_el_19");
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
      this[_el_13] = html.AnchorElement._check(src__runtime__dom_helpers.appendElement(doc, this[_el_0], "a"));
      src__runtime__dom_helpers.setAttribute(this[_el_13], "routerLinkActive", "active-route");
      this.addShimC(this[_el_13]);
      this[_RouterLink_13_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_13]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_13]));
      this[_RouterLinkActive_13_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_13], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_13], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _el_14 = src__runtime__dom_helpers.appendElement(doc, this[_el_13], "img");
      src__runtime__dom_helpers.setAttribute(_el_14, "alt", "Now in theaters");
      this.updateChildClass(html.HtmlElement._check(_el_14), "icon");
      src__runtime__dom_helpers.setAttribute(_el_14, "src", "images/now-in-theaters.svg");
      this.addShimE(_el_14);
      let _text_15 = src__runtime__dom_helpers.appendText(this[_el_13], " ");
      let _el_16 = src__runtime__dom_helpers.appendSpan(doc, this[_el_13]);
      this.addShimE(_el_16);
      _el_16[$append](this[_textBinding_17].element);
      this[_RouterLinkActive_13_6].links = JSArrayOfRouterLink().of([this[_RouterLink_13_5].instance]);
      let _text_18 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
      this[_el_19] = html.AnchorElement._check(src__runtime__dom_helpers.appendElement(doc, this[_el_0], "a"));
      src__runtime__dom_helpers.setAttribute(this[_el_19], "routerLinkActive", "active-route");
      this.addShimC(this[_el_19]);
      this[_RouterLink_19_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_directive.RouterLink, dart.wrapType(src__directives__router_link_directive.RouterLink), dart.fn(() => new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_19]), VoidToRouterLink())) : new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_19]));
      this[_RouterLinkActive_19_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_link_active_directive.RouterLinkActive, dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive), dart.fn(() => new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_19], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToRouterLinkActive())) : new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_19], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _el_20 = src__runtime__dom_helpers.appendElement(doc, this[_el_19], "img");
      src__runtime__dom_helpers.setAttribute(_el_20, "alt", "Showtimes");
      this.updateChildClass(html.HtmlElement._check(_el_20), "icon");
      src__runtime__dom_helpers.setAttribute(_el_20, "src", "images/showtimes.svg");
      this.addShimE(_el_20);
      let _text_21 = src__runtime__dom_helpers.appendText(this[_el_19], " ");
      let _el_22 = src__runtime__dom_helpers.appendSpan(doc, this[_el_19]);
      this.addShimE(_el_22);
      _el_22[$append](this[_textBinding_23].element);
      this[_RouterLinkActive_19_6].links = JSArrayOfRouterLink().of([this[_RouterLink_19_5].instance]);
      let _text_24 = src__runtime__dom_helpers.appendText(this[_el_0], " ");
      this[_el_1$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_1_5].instance, 'onClick')));
      this[_el_7][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_7_5].instance, 'onClick')));
      this[_el_13][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_13_5].instance, 'onClick')));
      this[_el_19][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_19_5].instance, 'onClick')));
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
      let currVal_5 = src__routes.RoutePaths.nowInTheaters.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_RouterLink_13_5].instance.routerLink = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (firstCheck) {
        this[_RouterLinkActive_13_6].routerLinkActive = "active-route";
      }
      let currVal_7 = src__routes.RoutePaths.showtimes.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_RouterLink_19_5].instance.routerLink = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (firstCheck) {
        this[_RouterLinkActive_19_6].routerLinkActive = "active-route";
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
      this[_RouterLink_13_5].detectHostChanges(this, this[_el_13]);
      this[_textBinding_17].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.nowInTheaters));
      this[_RouterLink_19_5].detectHostChanges(this, this[_el_19]);
      this[_textBinding_23].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.showtimes));
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_1_6].ngAfterViewInit();
          this[_RouterLinkActive_7_6].ngAfterViewInit();
          this[_RouterLinkActive_13_6].ngAfterViewInit();
          this[_RouterLinkActive_19_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_RouterLink_1_5].instance.ngOnDestroy();
      this[_RouterLinkActive_1_6].ngOnDestroy();
      this[_RouterLink_7_5].instance.ngOnDestroy();
      this[_RouterLinkActive_7_6].ngOnDestroy();
      this[_RouterLink_13_5].instance.ngOnDestroy();
      this[_RouterLinkActive_13_6].ngOnDestroy();
      this[_RouterLink_19_5].instance.ngOnDestroy();
      this[_RouterLinkActive_19_6].ngOnDestroy();
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
    this[_textBinding_17] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_23] = new src__runtime__text_binding.TextBinding.new();
    this[_RouterLink_1_5] = null;
    this[_RouterLinkActive_1_6] = null;
    this[_RouterLink_7_5] = null;
    this[_RouterLinkActive_7_6] = null;
    this[_RouterLink_13_5] = null;
    this[_RouterLinkActive_13_6] = null;
    this[_RouterLink_19_5] = null;
    this[_RouterLinkActive_19_6] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    this[_el_1$] = null;
    this[_el_7] = null;
    this[_el_13] = null;
    this[_el_19] = null;
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
  dart.setLibraryUri(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0, "package:web/src/app_bar/nav_bar/nav_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.__proto__),
    [_textBinding_5]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_11]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_17]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_23]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_RouterLink_1_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_1_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_RouterLink_7_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_7_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_RouterLink_13_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_13_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_RouterLink_19_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_19_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_expr_0$]: dart.fieldType(core$.bool),
    [_expr_1$]: dart.fieldType(core$.String),
    [_expr_3]: dart.fieldType(core$.String),
    [_expr_5]: dart.fieldType(core$.String),
    [_expr_7]: dart.fieldType(core$.String),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1$]: dart.fieldType(html.AnchorElement),
    [_el_7]: dart.fieldType(html.AnchorElement),
    [_el_13]: dart.fieldType(html.AnchorElement),
    [_el_19]: dart.fieldType(html.AnchorElement)
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
  dart.setLibraryUri(src__app_bar__nav_bar__nav_bar_component$46template._ViewNavBarComponentHost0, "package:web/src/app_bar/nav_bar/nav_bar_component.template.dart");
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
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{display:flex;background:#f4f7f4}._nghost-%ID%[expanded]{position:fixed;left:0;right:0;z-index:1}@media ONLY screen AND (min-width:768px){._nghost-%ID%[expanded]{position:unset}}.back._ngcontent-%ID%{display:none}.back.visible._ngcontent-%ID%{display:block;padding-left:16px;cursor:pointer}@media ONLY screen AND (min-width:768px){.back.visible._ngcontent-%ID%{display:none}}input._ngcontent-%ID%{display:none;background:transparent;width:100%;color:#020202;font-size:16px;padding:8px}input._ngcontent-%ID%,input:focus._ngcontent-%ID%{background-color:transparent;border:none;outline:none}input._ngcontent-%ID%::placeholder{color:rgba(255,255,255,0.5)}input.visible._ngcontent-%ID%{display:block}.buttons._ngcontent-%ID%{position:relative;width:56px;height:56px}@media ONLY screen AND (min-width:768px){.buttons._ngcontent-%ID%{width:56px;height:56px}}.buttons._ngcontent-%ID% img._ngcontent-%ID%{position:absolute;opacity:0;right:0;transform:scale(0.2)}.buttons._ngcontent-%ID% img.visible._ngcontent-%ID%{opacity:1;transform:scale(1)}"];
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
  const _el_0$ = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_0");
  const _el_2 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_2");
  const _el_4 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_el_4");
  const _handle_input_0_0 = dart.privateName(src__app_bar__search_bar__search_bar_component$46template, "_handle_input_0_0");
  src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0 = class ViewSearchBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__search_bar__search_bar_component.SearchBarComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/search_bar/search_bar_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = html.InputElement._check(src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "input"));
      src__runtime__dom_helpers.setAttribute(this[_el_0$], "type", "text");
      this.addShimC(this[_el_0$]);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "buttons");
      this.addShimC(_el_1);
      this[_el_2] = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_2], "alt", "Search for movies");
      this.updateChildClass(html.HtmlElement._check(this[_el_2]), "app-bar-button search");
      src__runtime__dom_helpers.setAttribute(this[_el_2], "src", "images/search.svg");
      this.addShimE(this[_el_2]);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_1, " ");
      this[_el_4] = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_4], "alt", "Stop searching movies");
      this.updateChildClass(html.HtmlElement._check(this[_el_4]), "app-bar-button close");
      src__runtime__dom_helpers.setAttribute(this[_el_4], "src", "images/close.svg");
      this.addShimE(this[_el_4]);
      this[_el_0$][$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_0_0)));
      _el_1[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggleSearch')));
      _ctx.searchField = this[_el_0$];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.messages.searchHint;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$], "placeholder", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.searchOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$], "visible", currVal_1);
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = !dart.test(_ctx.searchOpen);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_2]), "visible", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.searchOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_4]), "visible", currVal_3);
        this[_expr_3$] = currVal_3;
      }
    }
    [_handle_input_0_0]($event) {
      let local_searchField = this[_el_0$];
      let _ctx = this.ctx;
      _ctx.updateSearchQuery(local_searchField.value);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_4 = _ctx.hostExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "expanded", currVal_4);
        this[_expr_4$] = currVal_4;
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
    this[_el_0$] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("search-bar"));
  }).prototype = src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0);
  dart.setMethodSignature(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__search_bar__search_bar_component.SearchBarComponent), []),
    [_handle_input_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core$.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, "package:web/src/app_bar/search_bar/search_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.__proto__),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(core$.bool),
    [_expr_2$]: dart.fieldType(core$.bool),
    [_expr_3$]: dart.fieldType(core$.bool),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.InputElement),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element)
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
  dart.setLibraryUri(src__app_bar__search_bar__search_bar_component$46template._ViewSearchBarComponentHost0, "package:web/src/app_bar/search_bar/search_bar_component.template.dart");
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
  dart.defineLazy(src__common__signin_page__signin_page_component$46css$46shim, {
    /*src__common__signin_page__signin_page_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{display:flex;background:#f4f7f4}._nghost-%ID%[expanded]{position:fixed;left:0;right:0}@media ONLY screen AND (min-width:768px){._nghost-%ID%[expanded]{position:unset}}.back._ngcontent-%ID%{display:none}.back.visible._ngcontent-%ID%{display:block;padding-left:16px;cursor:pointer}@media ONLY screen AND (min-width:768px){.back.visible._ngcontent-%ID%{display:none}}input._ngcontent-%ID%{display:none;background:transparent;width:100%;color:#020202;font-size:16px;padding:8px}input._ngcontent-%ID%,input:focus._ngcontent-%ID%{background-color:transparent;border:none;outline:none}input._ngcontent-%ID%::placeholder{color:rgba(255,255,255,0.5)}input.visible._ngcontent-%ID%{display:block}.buttons._ngcontent-%ID%{position:relative;width:56px;height:56px}@media ONLY screen AND (min-width:768px){.buttons._ngcontent-%ID%{width:60px;height:60px}}.buttons._ngcontent-%ID% img._ngcontent-%ID%{position:absolute;opacity:0;right:0;transform:scale(0.2)}.buttons._ngcontent-%ID% img.visible._ngcontent-%ID%{opacity:1;transform:scale(1)}"];
    }
  });
  dart.defineLazy(src__common__signin_page__signin_page_component$46template, {
    /*src__common__signin_page__signin_page_component$46template.styles$SignInPageComponent*/get styles$SignInPageComponent() {
      return [src__common__signin_page__signin_page_component$46css$46shim.styles];
    }
  });
  const _compView_0$1 = dart.privateName(src__common__signin_page__signin_page_component$46template, "_compView_0");
  const _FirebaseAuthUIComponent_0_5 = dart.privateName(src__common__signin_page__signin_page_component$46template, "_FirebaseAuthUIComponent_0_5");
  const _expr_0$1 = dart.privateName(src__common__signin_page__signin_page_component$46template, "_expr_0");
  src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0 = class ViewSignInPageComponent0 extends src__core__linker__app_view.AppView$(src__common__signin_page__signin_page_component.SignInPageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/signin_page/signin_page_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$1] = new src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0.new(this, 0);
      let _el_0 = this[_compView_0$1].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FirebaseAuthUIComponent_0_5] = new src__firebase_auth_ui_component.FirebaseAuthUIComponent.new();
      this[_compView_0$1].create0(this[_FirebaseAuthUIComponent_0_5]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_FirebaseAuthUIComponent_0_5].disableAutoSignIn = true;
      }
      let currVal_0 = _ctx.getUIConfig();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_FirebaseAuthUIComponent_0_5].uiConfig = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
    initComponentStyles() {
      let styles = src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0._componentStyles;
      if (styles == null) {
        src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0._componentStyles = styles = src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__signin_page__signin_page_component$46template.styles$SignInPageComponent, src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_FirebaseAuthUIComponent_0_5] = null;
    this[_expr_0$1] = null;
    src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("signin-page"));
  }).prototype = src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.prototype;
  dart.addTypeTests(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0);
  dart.setMethodSignature(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0, () => ({
    __proto__: dart.getMethods(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__signin_page__signin_page_component.SignInPageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0, "package:web/src/common/signin_page/signin_page_component.template.dart");
  dart.setFieldSignature(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0, () => ({
    __proto__: dart.getFields(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.__proto__),
    [_compView_0$1]: dart.fieldType(src__firebase_auth_ui_component$46template.ViewFirebaseAuthUIComponent0),
    [_FirebaseAuthUIComponent_0_5]: dart.fieldType(src__firebase_auth_ui_component.FirebaseAuthUIComponent),
    [_expr_0$1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0, {
    /*src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__signin_page__signin_page_component$46template, {
    /*src__common__signin_page__signin_page_component$46template._SignInPageComponentNgFactory*/get _SignInPageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSignInPageComponent()).new("signin-page", dart.fn(src__common__signin_page__signin_page_component$46template.viewFactory_SignInPageComponentHost0, AppViewAndintToAppViewOfSignInPageComponent())));
    }
  });
  dart.copyProperties(src__common__signin_page__signin_page_component$46template, {
    get SignInPageComponentNgFactory() {
      return src__common__signin_page__signin_page_component$46template._SignInPageComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__signin_page__signin_page_component$46template, {
    /*src__common__signin_page__signin_page_component$46template.styles$SignInPageComponentHost*/get styles$SignInPageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _SignInPageComponent_0_5 = dart.privateName(src__common__signin_page__signin_page_component$46template, "_SignInPageComponent_0_5");
  src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0 = class _ViewSignInPageComponentHost0 extends src__core__linker__app_view.AppView$(src__common__signin_page__signin_page_component.SignInPageComponent) {
    build() {
      this[_compView_0$1] = new src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_SignInPageComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__signin_page__signin_page_component.SignInPageComponent, dart.wrapType(src__common__signin_page__signin_page_component.SignInPageComponent), dart.fn(() => new src__common__signin_page__signin_page_component.SignInPageComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSignInPageComponent())) : new src__common__signin_page__signin_page_component.SignInPageComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_0$1].create(this[_SignInPageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfSignInPageComponent()).new(0, this, this.rootEl, this[_SignInPageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_SignInPageComponent_0_5] = null;
    src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.prototype;
  dart.addTypeTests(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0);
  dart.setMethodSignature(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__signin_page__signin_page_component.SignInPageComponent), [])
  }));
  dart.setLibraryUri(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0, "package:web/src/common/signin_page/signin_page_component.template.dart");
  dart.setFieldSignature(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0, () => ({
    __proto__: dart.getFields(src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0),
    [_SignInPageComponent_0_5]: dart.fieldType(src__common__signin_page__signin_page_component.SignInPageComponent)
  }));
  src__common__signin_page__signin_page_component$46template.viewFactory_SignInPageComponentHost0 = function(parentView, parentIndex) {
    return new src__common__signin_page__signin_page_component$46template._ViewSignInPageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__signin_page__signin_page_component$46template, {
    /*src__common__signin_page__signin_page_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__signin_page__signin_page_component$46template.initReflector = function() {
    if (dart.test(src__common__signin_page__signin_page_component$46template._visited)) {
      return;
    }
    src__common__signin_page__signin_page_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__signin_page__signin_page_component.SignInPageComponent), src__common__signin_page__signin_page_component$46template.SignInPageComponentNgFactory);
    angular$46template.initReflector();
    firebase_dart_ui$46template.initReflector();
  };
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46css$46shim, {
    /*src__app_bar__signin_bar__signin_bar_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{font-family:Roboto,\"Helvetica Neue\",Arial,Helvetica,sans-serif}._nghost-%ID%  material-button.red[raised]:not([disabled]){background-color:#db4437}._nghost-%ID%  material-button.red[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-button.red:not([raised]):not([disabled]):not([icon]){color:#db4437}._nghost-%ID%  material-button.blue[raised]:not([disabled]){background-color:#4285f4}._nghost-%ID%  material-button.blue[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-button.blue:not([raised]):not([disabled]):not([icon]){color:#4285f4}._nghost-%ID%  material-button.green[raised]:not([disabled]){background-color:#0f9d58}._nghost-%ID%  material-button.green[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-button.green:not([raised]):not([disabled]):not([icon]){color:#0f9d58}._nghost-%ID%  material-fab.red[raised]:not([disabled]){background-color:#db4437}._nghost-%ID%  material-fab.red[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-fab.red:not([raised]):not([disabled]):not([icon]){color:#db4437}._nghost-%ID%  material-fab.blue[raised]:not([disabled]){background-color:#4285f4}._nghost-%ID%  material-fab.blue[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-fab.blue:not([raised]):not([disabled]):not([icon]){color:#4285f4}._nghost-%ID%  material-fab.green[raised]:not([disabled]){background-color:#0f9d58}._nghost-%ID%  material-fab.green[raised]:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  material-fab.green:not([raised]):not([disabled]):not([icon]){color:#0f9d58}._nghost-%ID%  material-button.blue-icon[icon]:not([disabled]){color:#4285f4}._nghost-%ID%  material-button.blue-icon[icon]:not([disabled]) > .content > material-icon,._nghost-%ID%  material-button.blue-icon[icon]:not([disabled]) > .content > glyph{color:#4285f4}._nghost-%ID%  material-button.raised-color-example[animated]{transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1)}._nghost-%ID%  material-button.raised-color-example[elevation=\"1\"]{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example[elevation=\"2\"]{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example[elevation=\"3\"]{box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example[elevation=\"4\"]{box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example[elevation=\"5\"]{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example[elevation=\"6\"]{box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}._nghost-%ID%  material-button.raised-color-example.acx-theme-dark{background-color:#4285f4}._nghost-%ID%  material-button.raised-color-example[disabled]{background:rgba(0,0,0,0.12);box-shadow:none}._nghost-%ID%  material-button.raised-color-example[disabled].acx-theme-dark{background:rgba(255,255,255,0.12)}._nghost-%ID%  material-button.raised-color-example:not([disabled]){background-color:#4285f4}._nghost-%ID%  material-button.raised-color-example:not([disabled]):not([icon]){color:#fff}._nghost-%ID%  .raised-example[animated]{transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1)}._nghost-%ID%  .raised-example[elevation=\"1\"]{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example[elevation=\"2\"]{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example[elevation=\"3\"]{box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example[elevation=\"4\"]{box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example[elevation=\"5\"]{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example[elevation=\"6\"]{box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}._nghost-%ID%  .raised-example.acx-theme-dark{background-color:#4285f4}._nghost-%ID%  .raised-example[disabled]{background:rgba(0,0,0,0.12);box-shadow:none}._nghost-%ID%  .raised-example[disabled].acx-theme-dark{background:rgba(255,255,255,0.12)}._nghost-%ID%  .raised-example:not([disabled]){background-color:transparent}._nghost-%ID%  .dense-example:not([icon]){height:32px;font-size:13px}material-button._ngcontent-%ID%,material-fab._ngcontent-%ID%{font-size:11px}material-button.no-mixin-red._ngcontent-%ID%,material-fab.no-mixin-red._ngcontent-%ID%{background-color:#db4437;color:#fff}[card]._ngcontent-%ID%{display:inline-flex;flex:1;flex-direction:column;border-radius:3px;margin-top:8px;padding:16px}.dark-theme._ngcontent-%ID%{color:#fff;background:#424242}[flex]._ngcontent-%ID%{justify-content:space-between}h2._ngcontent-%ID%{color:#222;font-family:Roboto,\"Helvetica Neue\",Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:40px;margin:20px}.signin-button-group._ngcontent-%ID%{width:90px;padding-top:10px;padding-left:5px;padding-right:2px}@media ONLY screen AND (min-width:768px){.signin-button-group._ngcontent-%ID%{padding-top:10px;padding-left:5px;padding-right:2px}}.signin-user-info._ngcontent-%ID%{color:aquamarine}.signin-user-photo._ngcontent-%ID%{width:40px;height:40px}.signin-out._ngcontent-%ID%{width:30px;height:30px}"];
    }
  });
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46template, {
    /*src__app_bar__signin_bar__signin_bar_component$46template.styles$SignInBarComponent*/get styles$SignInBarComponent() {
      return [src__app_bar__signin_bar__signin_bar_component$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_NgIf_1_9");
  const _appEl_2$ = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_NgIf_2_9");
  const _appEl_7 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_appEl_7");
  const _NgIf_7_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_NgIf_7_9");
  const _compView_8 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_compView_8");
  const _ModalComponent_8_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_ModalComponent_8_5");
  const _compView_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_compView_9");
  const _MaterialDialogComponent_9_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_MaterialDialogComponent_9_5");
  const _compView_12 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_compView_12");
  const _SignInPageComponent_12_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_SignInPageComponent_12_5");
  const _compView_14 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_compView_14");
  const _AutoFocusDirective_14_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_AutoFocusDirective_14_5");
  const _AcxDarkTheme_14_6 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_AcxDarkTheme_14_6");
  const _MaterialButtonComponent_14_7 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_MaterialButtonComponent_14_7");
  const _expr_3$0 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_expr_3");
  let const$0;
  let const$1;
  const _handle_visibleChange_8_0 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_handle_visibleChange_8_0");
  const _handle_trigger_14_0 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_handle_trigger_14_0");
  let const$2;
  src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0 = class ViewSignInBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/signin_bar/signin_bar_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "signin-button-group");
      this.addShimC(_el_0);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _text_4 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _text_5 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _text_6 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_8] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootEl;
      parentRenderNode[$append](_el_8);
      this.addShimC(_el_8);
      this[_ModalComponent_8_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_8, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_8, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex)));
      this[_compView_9] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootEl;
      this.updateChildClassNonHtml(_el_9, "basic-dialog");
      this.addShimC(_el_9);
      this[_MaterialDialogComponent_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_9, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_9], this[_ModalComponent_8_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_9, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_9], this[_ModalComponent_8_5]);
      let _el_10 = doc[$createElement]("h1");
      src__runtime__dom_helpers.setAttribute(_el_10, "header", "");
      this.addShimE(_el_10);
      let _text_11 = src__runtime__dom_helpers.appendText(_el_10, "Sign in");
      this[_compView_12] = new src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0.new(this, 12);
      let _el_12 = this[_compView_12].rootEl;
      this.addShimC(_el_12);
      this[_SignInPageComponent_12_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__signin_page__signin_page_component.SignInPageComponent, dart.wrapType(src__common__signin_page__signin_page_component.SignInPageComponent), dart.fn(() => new src__common__signin_page__signin_page_component.SignInPageComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSignInPageComponent())) : new src__common__signin_page__signin_page_component.SignInPageComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_12].create0(this[_SignInPageComponent_12_5]);
      let _el_13 = doc[$createElement]("div");
      src__runtime__dom_helpers.setAttribute(_el_13, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_13));
      this[_compView_14] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 14);
      let _el_14 = this[_compView_14].rootEl;
      _el_13[$append](_el_14);
      src__runtime__dom_helpers.setAttribute(_el_14, "autoFocus", "");
      src__runtime__dom_helpers.setAttribute(_el_14, "clear-size", "");
      this.addShimC(_el_14);
      this[_AutoFocusDirective_14_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(_el_14, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, this[_ModalComponent_8_5], src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex))), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(_el_14, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, this[_ModalComponent_8_5], src__laminate__popup__popup_ref.PopupRef._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.viewData.parentIndex)));
      this[_AcxDarkTheme_14_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGetOptional(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex)));
      this[_MaterialButtonComponent_14_7] = new material_button__material_button.MaterialButtonComponent.new(_el_14, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_14_6]), this[_compView_14], null);
      let _text_15 = src__runtime__dom_helpers.createText("Close");
      this[_compView_14].create(this[_MaterialButtonComponent_14_7], JSArrayOfObject().of([JSArrayOfText().of([_text_15])]));
      this[_compView_9].create(this[_MaterialDialogComponent_9_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_10]), JSArrayOfHtmlElement().of([_el_12]), JSArrayOfElement().of([_el_13])]));
      this[_compView_8].create(this[_ModalComponent_8_5], JSArrayOfObject().of([JSArrayOfHtmlElement().of([_el_9])]));
      let subscription_0 = this[_ModalComponent_8_5].onVisibleChanged.listen(this.eventHandler1(core$.bool, core$.bool, dart.bind(this, _handle_visibleChange_8_0)));
      let subscription_1 = this[_MaterialButtonComponent_14_7].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_14_0)));
      this.init(const$2 || (const$2 = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 15) {
        if (14 <= dart.notNull(nodeIndex)) {
          if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme)) {
            return this[_AcxDarkTheme_14_6];
          }
          if (token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) {
            return this[_MaterialButtonComponent_14_7];
          }
        }
        if (token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) {
          return this[_ModalComponent_8_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.isAuthenticated());
      this[_NgIf_2_9].ngIf = _ctx.isAuthenticated();
      this[_NgIf_7_9].ngIf = _ctx.isAuthenticated();
      changed = false;
      let currVal_3 = _ctx.showSignInDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_ModalComponent_8_5].visible = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_14_5].autoFocus = true;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_14_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_14].markAsCheckOnce();
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_9_5].ngAfterContentChecked();
      }
      this[_compView_8].detectHostChanges(firstCheck);
      this[_compView_9].detectHostChanges(firstCheck);
      this[_compView_14].detectHostChanges(firstCheck);
      this[_compView_8].detectChanges();
      this[_compView_9].detectChanges();
      this[_compView_12].detectChanges();
      this[_compView_14].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ModalComponent_8_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_compView_8].destroyInternalState();
      this[_compView_9].destroyInternalState();
      this[_compView_12].destroyInternalState();
      this[_compView_14].destroyInternalState();
      this[_AutoFocusDirective_14_5].ngOnDestroy();
      this[_MaterialDialogComponent_9_5].ngOnDestroy();
      this[_ModalComponent_8_5].ngOnDestroy();
    }
    [_handle_visibleChange_8_0]($event) {
      let _ctx = this.ctx;
      _ctx.showSignInDialog = core$.bool._check($event);
    }
    [_handle_trigger_14_0]($event) {
      let _ctx = this.ctx;
      _ctx.showSignInDialog = false;
    }
    initComponentStyles() {
      let styles = src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0._componentStyles;
      if (styles == null) {
        src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0._componentStyles = styles = src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__app_bar__signin_bar__signin_bar_component$46template.styles$SignInBarComponent, src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_compView_8] = null;
    this[_ModalComponent_8_5] = null;
    this[_compView_9] = null;
    this[_MaterialDialogComponent_9_5] = null;
    this[_compView_12] = null;
    this[_SignInPageComponent_12_5] = null;
    this[_compView_14] = null;
    this[_AutoFocusDirective_14_5] = null;
    this[_AcxDarkTheme_14_6] = null;
    this[_MaterialButtonComponent_14_7] = null;
    this[_expr_3$0] = null;
    src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("signin-bar"));
  }).prototype = src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0);
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    [_handle_visibleChange_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_14_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0, "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_8]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_8_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_9]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_MaterialDialogComponent_9_5]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_12]: dart.fieldType(src__common__signin_page__signin_page_component$46template.ViewSignInPageComponent0),
    [_SignInPageComponent_12_5]: dart.fieldType(src__common__signin_page__signin_page_component.SignInPageComponent),
    [_compView_14]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AutoFocusDirective_14_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_AcxDarkTheme_14_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_14_7]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_3$0]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0, {
    /*src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46template, {
    /*src__app_bar__signin_bar__signin_bar_component$46template._SignInBarComponentNgFactory*/get _SignInBarComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSignInBarComponent()).new("signin-bar", dart.fn(src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponentHost0, AppViewAndintToAppViewOfSignInBarComponent())));
    }
  });
  dart.copyProperties(src__app_bar__signin_bar__signin_bar_component$46template, {
    get SignInBarComponentNgFactory() {
      return src__app_bar__signin_bar__signin_bar_component$46template._SignInBarComponentNgFactory;
    }
  });
  const _compView_0$2 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_compView_0");
  const _AcxDarkTheme_0_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_AcxDarkTheme_0_5");
  const _MaterialButtonComponent_0_6 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_MaterialButtonComponent_0_6");
  const _expr_0$2 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_expr_0");
  let const$3;
  let const$4;
  const _handle_trigger_0_0 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_handle_trigger_0_0");
  src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1 = class _ViewSignInBarComponent1 extends src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$2] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0$2].rootEl;
      this.updateChildClassNonHtml(_el_0, "green");
      src__runtime__dom_helpers.setAttribute(_el_0, "raised", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGetOptional(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGetOptional(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0$2], null);
      let _text_1 = src__runtime__dom_helpers.createText("Sign in");
      this[_compView_0$2].create(this[_MaterialButtonComponent_0_6], JSArrayOfObject().of([JSArrayOfText().of([_text_1])]));
      _el_0[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'getSigninPage')));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
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
      if (firstCheck) {
        this[_MaterialButtonComponent_0_6].raised = true;
        changed = true;
      }
      let currVal_0 = _ctx.showSignInDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$2], currVal_0))) {
        this[_MaterialButtonComponent_0_6].disabled = currVal_0;
        changed = true;
        this[_expr_0$2] = currVal_0;
      }
      if (changed) {
        this[_compView_0$2].markAsCheckOnce();
      }
      this[_compView_0$2].detectHostChanges(firstCheck);
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
    [_handle_trigger_0_0]($event) {
      let _ctx = this.ctx;
      _ctx.showSignInDialog = true;
    }
  };
  (src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_expr_0$2] = null;
    src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1);
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1, "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1, () => ({
    __proto__: dart.getFields(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.__proto__),
    [_compView_0$2]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_0$2]: dart.fieldType(core$.bool)
  }));
  src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent1 = function(parentView, parentIndex) {
    return new src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent1.new(parentView, parentIndex);
  };
  const _el_0$0 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_el_0");
  src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2 = class _ViewSignInBarComponent2 extends src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent) {
    build() {
      let doc = html.document;
      this[_el_0$0] = doc[$createElement]("img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$0]), "signin-user-photo");
      this.addShimE(this[_el_0$0]);
      this.init1(this[_el_0$0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.userPhoto;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$2], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$0], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$2] = currVal_0;
      }
    }
  };
  (src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.new = function(parentView, parentIndex) {
    this[_expr_0$2] = null;
    this[_el_0$0] = null;
    src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2);
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), [])
  }));
  dart.setLibraryUri(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2, "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2, () => ({
    __proto__: dart.getFields(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.__proto__),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_el_0$0]: dart.fieldType(html.Element)
  }));
  src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent2 = function(parentView, parentIndex) {
    return new src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent2.new(parentView, parentIndex);
  };
  src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3 = class _ViewSignInBarComponent3 extends src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("img");
      this.updateChildClass(html.HtmlElement._check(_el_0), "signin-out");
      src__runtime__dom_helpers.setAttribute(_el_0, "src", "/images/icon/outline-exit_to_app-24px.svg");
      this.addShimE(_el_0);
      _el_0[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'logout')));
      this.init1(_el_0);
    }
  };
  (src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3.new = function(parentView, parentIndex) {
    src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3);
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), [])
  }));
  dart.setLibraryUri(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3, "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart");
  src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponent3 = function(parentView, parentIndex) {
    return new src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46template, {
    /*src__app_bar__signin_bar__signin_bar_component$46template.styles$SignInBarComponentHost*/get styles$SignInBarComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _SignInBarComponent_0_5 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_SignInBarComponent_0_5");
  const __Document_0_6 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__Document_0_6");
  const __HtmlDocument_0_7 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__HtmlDocument_0_7");
  const __Window_0_8 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__Window_0_8");
  const __DomService_0_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__DomService_0_9");
  const __AcxImperativeViewUtils_0_10 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__AcxImperativeViewUtils_0_10");
  const __DomRuler_0_11 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__DomRuler_0_11");
  const __ManagedZone_0_12 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__ManagedZone_0_12");
  const __overlayContainerName_0_13 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlayContainerName_0_13");
  const __overlayContainerParent_0_14 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlayContainerParent_0_14");
  const __overlayContainer_0_15 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlayContainer_0_15");
  const __overlaySyncDom_0_16 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlaySyncDom_0_16");
  const __overlayRepositionLoop_0_17 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlayRepositionLoop_0_17");
  const __overlayViewportBoundaries_0_18 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__overlayViewportBoundaries_0_18");
  const __OverlayStyleConfig_0_19 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__OverlayStyleConfig_0_19");
  const __ZIndexer_0_20 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__ZIndexer_0_20");
  const __OverlayDomRenderService_0_21 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__OverlayDomRenderService_0_21");
  const __OverlayService_0_22 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "__OverlayService_0_22");
  const _Document_0_6 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_Document_0_6");
  const _HtmlDocument_0_7 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_HtmlDocument_0_7");
  const _Window_0_8 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_Window_0_8");
  const _DomService_0_9 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_DomService_0_9");
  const _AcxImperativeViewUtils_0_10 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_AcxImperativeViewUtils_0_10");
  const _DomRuler_0_11 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_DomRuler_0_11");
  const _ManagedZone_0_12 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_ManagedZone_0_12");
  let const$5;
  let const$6;
  let const$7;
  const _overlayContainerName_0_13 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlayContainerName_0_13");
  let const$8;
  let const$9;
  let const$10;
  const _overlayContainerParent_0_14 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlayContainerParent_0_14");
  let const$11;
  let const$12;
  let const$13;
  const _overlayContainer_0_15 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlayContainer_0_15");
  const _overlaySyncDom_0_16 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlaySyncDom_0_16");
  const _overlayRepositionLoop_0_17 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlayRepositionLoop_0_17");
  let const$14;
  const _overlayViewportBoundaries_0_18 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_overlayViewportBoundaries_0_18");
  const _OverlayStyleConfig_0_19 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_OverlayStyleConfig_0_19");
  const _ZIndexer_0_20 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_ZIndexer_0_20");
  const _OverlayDomRenderService_0_21 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_OverlayDomRenderService_0_21");
  const _OverlayService_0_22 = dart.privateName(src__app_bar__signin_bar__signin_bar_component$46template, "_OverlayService_0_22");
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0 = class _ViewSignInBarComponentHost0 extends src__core__linker__app_view.AppView$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_HtmlDocument_0_7]() {
      if (this[__HtmlDocument_0_7] == null) {
        this[__HtmlDocument_0_7] = utils__browser__window__module.getDocument();
      }
      return this[__HtmlDocument_0_7];
    }
    get [_Window_0_8]() {
      if (this[__Window_0_8] == null) {
        this[__Window_0_8] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_8];
    }
    get [_DomService_0_9]() {
      if (this[__DomService_0_9] == null) {
        this[__DomService_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGetOptional(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_8])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGetOptional(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_8]));
      }
      return this[__DomService_0_9];
    }
    get [_AcxImperativeViewUtils_0_10]() {
      if (this[__AcxImperativeViewUtils_0_10] == null) {
        this[__AcxImperativeViewUtils_0_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__AcxImperativeViewUtils_0_10];
    }
    get [_DomRuler_0_11]() {
      if (this[__DomRuler_0_11] == null) {
        this[__DomRuler_0_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__DomRuler_0_11];
    }
    get [_ManagedZone_0_12]() {
      if (this[__ManagedZone_0_12] == null) {
        this[__ManagedZone_0_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_12];
    }
    get [_overlayContainerName_0_13]() {
      if (this[__overlayContainerName_0_13] == null) {
        this[__overlayContainerName_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGetOptional(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGetOptional(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGetOptional(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGetOptional(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGetOptional(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGetOptional(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex));
      }
      return this[__overlayContainer_0_15];
    }
    get [_overlaySyncDom_0_16]() {
      if (this[__overlaySyncDom_0_16] == null) {
        this[__overlaySyncDom_0_16] = true;
      }
      return this[__overlaySyncDom_0_16];
    }
    get [_overlayRepositionLoop_0_17]() {
      if (this[__overlayRepositionLoop_0_17] == null) {
        this[__overlayRepositionLoop_0_17] = true;
      }
      return this[__overlayRepositionLoop_0_17];
    }
    get [_overlayViewportBoundaries_0_18]() {
      if (this[__overlayViewportBoundaries_0_18] == null) {
        this[__overlayViewportBoundaries_0_18] = const$14 || (const$14 = dart.const(new model__math__box.Box.new()));
      }
      return this[__overlayViewportBoundaries_0_18];
    }
    get [_OverlayStyleConfig_0_19]() {
      if (this[__OverlayStyleConfig_0_19] == null) {
        this[__OverlayStyleConfig_0_19] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_19];
    }
    get [_ZIndexer_0_20]() {
      if (this[__ZIndexer_0_20] == null) {
        this[__ZIndexer_0_20] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_20];
    }
    get [_OverlayDomRenderService_0_21]() {
      if (this[__OverlayDomRenderService_0_21] == null) {
        this[__OverlayDomRenderService_0_21] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_19], html.HtmlElement._check(this[_overlayContainer_0_15]), core$.String._check(this[_overlayContainerName_0_13]), this[_DomRuler_0_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_10]), this[_overlaySyncDom_0_16], this[_overlayRepositionLoop_0_17], this[_ZIndexer_0_20]);
      }
      return this[__OverlayDomRenderService_0_21];
    }
    get [_OverlayService_0_22]() {
      if (this[__OverlayService_0_22] == null) {
        this[__OverlayService_0_22] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_16], this[_OverlayDomRenderService_0_21], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGetOptional(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_16], this[_OverlayDomRenderService_0_21], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGetOptional(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)));
      }
      return this[__OverlayService_0_22];
    }
    build() {
      this[_compView_0$2] = new src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_SignInBarComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent, dart.wrapType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), dart.fn(() => new src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSignInBarComponent())) : new src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_0$2].create(this[_SignInBarComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfSignInBarComponent()).new(0, this, this.rootEl, this[_SignInBarComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(html.Document)) {
          return this[_Document_0_6];
        }
        if (token === dart.wrapType(html.HtmlDocument)) {
          return this[_HtmlDocument_0_7];
        }
        if (token === dart.wrapType(html.Window)) {
          return this[_Window_0_8];
        }
        if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService)) {
          return this[_DomService_0_9];
        }
        if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils)) {
          return this[_AcxImperativeViewUtils_0_10];
        }
        if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler)) {
          return this[_DomRuler_0_11];
        }
        if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone)) {
          return this[_ManagedZone_0_12];
        }
        if (token === (const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))))) {
          return this[_overlayContainerName_0_13];
        }
        if (token === (const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))))) {
          return this[_overlayContainerParent_0_14];
        }
        if (token === (const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))))) {
          return this[_overlayContainer_0_15];
        }
        if (token === (const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom"))))) {
          return this[_overlaySyncDom_0_16];
        }
        if (token === (const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))))) {
          return this[_overlayRepositionLoop_0_17];
        }
        if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))))) {
          return this[_overlayViewportBoundaries_0_18];
        }
        if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig)) {
          return this[_OverlayStyleConfig_0_19];
        }
        if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer)) {
          return this[_ZIndexer_0_20];
        }
        if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)) {
          return this[_OverlayDomRenderService_0_21];
        }
        if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService)) {
          return this[_OverlayService_0_22];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
  };
  (src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_SignInBarComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__HtmlDocument_0_7] = null;
    this[__Window_0_8] = null;
    this[__DomService_0_9] = null;
    this[__AcxImperativeViewUtils_0_10] = null;
    this[__DomRuler_0_11] = null;
    this[__ManagedZone_0_12] = null;
    this[__overlayContainerName_0_13] = null;
    this[__overlayContainerParent_0_14] = null;
    this[__overlayContainer_0_15] = null;
    this[__overlaySyncDom_0_16] = null;
    this[__overlayRepositionLoop_0_17] = null;
    this[__overlayViewportBoundaries_0_18] = null;
    this[__OverlayStyleConfig_0_19] = null;
    this[__ZIndexer_0_20] = null;
    this[__OverlayDomRenderService_0_21] = null;
    this[__OverlayService_0_22] = null;
    src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0);
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic])
  }));
  dart.setGetterSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0, () => ({
    __proto__: dart.getGetters(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_HtmlDocument_0_7]: dart.dynamic,
    [_Window_0_8]: dart.dynamic,
    [_DomService_0_9]: dart.dynamic,
    [_AcxImperativeViewUtils_0_10]: dart.dynamic,
    [_DomRuler_0_11]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_12]: dart.dynamic,
    [_overlayContainerName_0_13]: dart.dynamic,
    [_overlayContainerParent_0_14]: dart.dynamic,
    [_overlayContainer_0_15]: dart.dynamic,
    [_overlaySyncDom_0_16]: core$.bool,
    [_overlayRepositionLoop_0_17]: core$.bool,
    [_overlayViewportBoundaries_0_18]: model__math__box.Box,
    [_OverlayStyleConfig_0_19]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_20]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_21]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_22]: dart.dynamic
  }));
  dart.setLibraryUri(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0, "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0, () => ({
    __proto__: dart.getFields(src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0),
    [_SignInBarComponent_0_5]: dart.fieldType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__HtmlDocument_0_7]: dart.fieldType(dart.dynamic),
    [__Window_0_8]: dart.fieldType(dart.dynamic),
    [__DomService_0_9]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_16]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_17]: dart.fieldType(core$.bool),
    [__overlayViewportBoundaries_0_18]: dart.fieldType(model__math__box.Box),
    [__OverlayStyleConfig_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_20]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_21]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_22]: dart.fieldType(dart.dynamic)
  }));
  src__app_bar__signin_bar__signin_bar_component$46template.viewFactory_SignInBarComponentHost0 = function(parentView, parentIndex) {
    return new src__app_bar__signin_bar__signin_bar_component$46template._ViewSignInBarComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__app_bar__signin_bar__signin_bar_component$46template, {
    /*src__app_bar__signin_bar__signin_bar_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__app_bar__signin_bar__signin_bar_component$46template.initReflector = function() {
    if (dart.test(src__app_bar__signin_bar__signin_bar_component$46template._visited)) {
      return;
    }
    src__app_bar__signin_bar__signin_bar_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), src__app_bar__signin_bar__signin_bar_component$46template.SignInBarComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_dialog__material_dialog$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    src__common__signin_page__signin_page_component$46template.initReflector();
  };
  dart.defineLazy(src__app_bar__app_bar_component$46css$46shim, {
    /*src__app_bar__app_bar_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}header._ngcontent-%ID%{background:#363636;box-shadow:0 10px 60px rgba(0,0,0,0.4);width:100%;height:56px;position:fixed;top:0;opacity:1;z-index:3000;transition:opacity 350ms ease,top 350ms ease}header.hidden._ngcontent-%ID%{top:-56px;opacity:0}.wrapper._ngcontent-%ID%{display:flex;justify-content:space-between;align-content:center;width:100%;padding-left:20px}.left._ngcontent-%ID%{display:flex}.right._ngcontent-%ID%{display:flex}.logo._ngcontent-%ID%{position:relative;display:flex;color:white;align-items:center;text-decoration:none;user-select:none;cursor:pointer}.logo._ngcontent-%ID% img._ngcontent-%ID%{width:42px;height:42px;margin-top:2px}.logo._ngcontent-%ID% h1._ngcontent-%ID%{display:none;font-size:20px;font-weight:500;color:#FEFEFE}.logo._ngcontent-%ID% .mobile-logo-focus-trap._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0}.name-and-selected-theater._ngcontent-%ID%{display:flex;flex-direction:column;margin-left:6px}.theater-name._ngcontent-%ID%{font-size:12px;opacity:0.7;white-space:nowrap;text-overflow:ellipsis}@media ONLY screen AND (min-width:768px){header._ngcontent-%ID%{height:60px}header.hidden._ngcontent-%ID%{top:-60px}.theater-name._ngcontent-%ID%{display:none}.name-and-selected-theater._ngcontent-%ID%{margin-left:10px}.logo._ngcontent-%ID% img._ngcontent-%ID%{width:32px;height:32px}.logo._ngcontent-%ID% h1._ngcontent-%ID%{display:block;font-size:30px}.mobile-logo-focus-trap._ngcontent-%ID%{display:none}.app-bar-button.select-theater._ngcontent-%ID%{display:none}}@media ONLY screen AND (min-width:1024px){.wrapper._ngcontent-%ID%{width:70%;min-width:850px;margin:0 auto;padding:0}.logo._ngcontent-%ID% img._ngcontent-%ID%{width:32px;height:32px}.logo._ngcontent-%ID% h1._ngcontent-%ID%{display:block;font-size:30px}}"];
    }
  });
  dart.defineLazy(src__app_bar__app_bar_component$46template, {
    /*src__app_bar__app_bar_component$46template.styles$AppBarComponent*/get styles$AppBarComponent() {
      return [src__app_bar__app_bar_component$46css$46shim.styles];
    }
  });
  const _textBinding_7 = dart.privateName(src__app_bar__app_bar_component$46template, "_textBinding_7");
  const _RouterLink_3_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_RouterLink_3_5");
  const _compView_9$ = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_9");
  const _NavBarComponent_9_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_NavBarComponent_9_5");
  const _compView_11 = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_11");
  const _SearchBarComponent_11_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_SearchBarComponent_11_5");
  const _compView_12$ = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_12");
  const _SignInBarComponent_12_5 = dart.privateName(src__app_bar__app_bar_component$46template, "_SignInBarComponent_12_5");
  const __Document_12_6 = dart.privateName(src__app_bar__app_bar_component$46template, "__Document_12_6");
  const __HtmlDocument_12_7 = dart.privateName(src__app_bar__app_bar_component$46template, "__HtmlDocument_12_7");
  const __Window_12_8 = dart.privateName(src__app_bar__app_bar_component$46template, "__Window_12_8");
  const __DomService_12_9 = dart.privateName(src__app_bar__app_bar_component$46template, "__DomService_12_9");
  const __AcxImperativeViewUtils_12_10 = dart.privateName(src__app_bar__app_bar_component$46template, "__AcxImperativeViewUtils_12_10");
  const __DomRuler_12_11 = dart.privateName(src__app_bar__app_bar_component$46template, "__DomRuler_12_11");
  const __ManagedZone_12_12 = dart.privateName(src__app_bar__app_bar_component$46template, "__ManagedZone_12_12");
  const __overlayContainerName_12_13 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlayContainerName_12_13");
  const __overlayContainerParent_12_14 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlayContainerParent_12_14");
  const __overlayContainer_12_15 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlayContainer_12_15");
  const __overlaySyncDom_12_16 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlaySyncDom_12_16");
  const __overlayRepositionLoop_12_17 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlayRepositionLoop_12_17");
  const __overlayViewportBoundaries_12_18 = dart.privateName(src__app_bar__app_bar_component$46template, "__overlayViewportBoundaries_12_18");
  const __OverlayStyleConfig_12_19 = dart.privateName(src__app_bar__app_bar_component$46template, "__OverlayStyleConfig_12_19");
  const __ZIndexer_12_20 = dart.privateName(src__app_bar__app_bar_component$46template, "__ZIndexer_12_20");
  const __OverlayDomRenderService_12_21 = dart.privateName(src__app_bar__app_bar_component$46template, "__OverlayDomRenderService_12_21");
  const __OverlayService_12_22 = dart.privateName(src__app_bar__app_bar_component$46template, "__OverlayService_12_22");
  const _expr_0$3 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_0");
  const _expr_1$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_1");
  const _expr_2$0 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_2");
  const _expr_3$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_expr_3");
  const _el_0$1 = dart.privateName(src__app_bar__app_bar_component$46template, "_el_0");
  const _el_3$ = dart.privateName(src__app_bar__app_bar_component$46template, "_el_3");
  const _Document_12_6 = dart.privateName(src__app_bar__app_bar_component$46template, "_Document_12_6");
  const _HtmlDocument_12_7 = dart.privateName(src__app_bar__app_bar_component$46template, "_HtmlDocument_12_7");
  const _Window_12_8 = dart.privateName(src__app_bar__app_bar_component$46template, "_Window_12_8");
  const _DomService_12_9 = dart.privateName(src__app_bar__app_bar_component$46template, "_DomService_12_9");
  const _AcxImperativeViewUtils_12_10 = dart.privateName(src__app_bar__app_bar_component$46template, "_AcxImperativeViewUtils_12_10");
  const _DomRuler_12_11 = dart.privateName(src__app_bar__app_bar_component$46template, "_DomRuler_12_11");
  const _ManagedZone_12_12 = dart.privateName(src__app_bar__app_bar_component$46template, "_ManagedZone_12_12");
  let const$21;
  let const$22;
  let const$23;
  const _overlayContainerName_12_13 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlayContainerName_12_13");
  let const$24;
  let const$25;
  let const$26;
  const _overlayContainerParent_12_14 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlayContainerParent_12_14");
  let const$27;
  let const$28;
  let const$29;
  const _overlayContainer_12_15 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlayContainer_12_15");
  const _overlaySyncDom_12_16 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlaySyncDom_12_16");
  const _overlayRepositionLoop_12_17 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlayRepositionLoop_12_17");
  let const$30;
  const _overlayViewportBoundaries_12_18 = dart.privateName(src__app_bar__app_bar_component$46template, "_overlayViewportBoundaries_12_18");
  const _OverlayStyleConfig_12_19 = dart.privateName(src__app_bar__app_bar_component$46template, "_OverlayStyleConfig_12_19");
  const _ZIndexer_12_20 = dart.privateName(src__app_bar__app_bar_component$46template, "_ZIndexer_12_20");
  const _OverlayDomRenderService_12_21 = dart.privateName(src__app_bar__app_bar_component$46template, "_OverlayDomRenderService_12_21");
  const _OverlayService_12_22 = dart.privateName(src__app_bar__app_bar_component$46template, "_OverlayService_12_22");
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  src__app_bar__app_bar_component$46template.ViewAppBarComponent0 = class ViewAppBarComponent0 extends src__core__linker__app_view.AppView$(src__app_bar__app_bar_component.AppBarComponent) {
    get [_Document_12_6]() {
      if (this[__Document_12_6] == null) {
        this[__Document_12_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_12_6];
    }
    get [_HtmlDocument_12_7]() {
      if (this[__HtmlDocument_12_7] == null) {
        this[__HtmlDocument_12_7] = utils__browser__window__module.getDocument();
      }
      return this[__HtmlDocument_12_7];
    }
    get [_Window_12_8]() {
      if (this[__Window_12_8] == null) {
        this[__Window_12_8] = utils__browser__window__module.getWindow();
      }
      return this[__Window_12_8];
    }
    get [_DomService_12_9]() {
      if (this[__DomService_12_9] == null) {
        this[__DomService_12_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGetOptional(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_12_8])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGetOptional(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGetOptional(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_12_8]));
      }
      return this[__DomService_12_9];
    }
    get [_AcxImperativeViewUtils_12_10]() {
      if (this[__AcxImperativeViewUtils_12_10] == null) {
        this[__AcxImperativeViewUtils_12_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_12_9])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_12_9]));
      }
      return this[__AcxImperativeViewUtils_12_10];
    }
    get [_DomRuler_12_11]() {
      if (this[__DomRuler_12_11] == null) {
        this[__DomRuler_12_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_12_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_12_9]));
      }
      return this[__DomRuler_12_11];
    }
    get [_ManagedZone_12_12]() {
      if (this[__ManagedZone_12_12] == null) {
        this[__ManagedZone_12_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_12_12];
    }
    get [_overlayContainerName_12_13]() {
      if (this[__overlayContainerName_12_13] == null) {
        this[__overlayContainerName_12_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGetOptional(const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGetOptional(const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex));
      }
      return this[__overlayContainerName_12_13];
    }
    get [_overlayContainerParent_12_14]() {
      if (this[__overlayContainerParent_12_14] == null) {
        this[__overlayContainerParent_12_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_12_6]), this.parentView.injectorGetOptional(const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_12_6]), this.parentView.injectorGetOptional(const$26 || (const$26 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex));
      }
      return this[__overlayContainerParent_12_14];
    }
    get [_overlayContainer_12_15]() {
      if (this[__overlayContainer_12_15] == null) {
        this[__overlayContainer_12_15] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_12_13]), html.HtmlElement._check(this[_overlayContainerParent_12_14]), this.parentView.injectorGetOptional(const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_12_13]), html.HtmlElement._check(this[_overlayContainerParent_12_14]), this.parentView.injectorGetOptional(const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex));
      }
      return this[__overlayContainer_12_15];
    }
    get [_overlaySyncDom_12_16]() {
      if (this[__overlaySyncDom_12_16] == null) {
        this[__overlaySyncDom_12_16] = true;
      }
      return this[__overlaySyncDom_12_16];
    }
    get [_overlayRepositionLoop_12_17]() {
      if (this[__overlayRepositionLoop_12_17] == null) {
        this[__overlayRepositionLoop_12_17] = true;
      }
      return this[__overlayRepositionLoop_12_17];
    }
    get [_overlayViewportBoundaries_12_18]() {
      if (this[__overlayViewportBoundaries_12_18] == null) {
        this[__overlayViewportBoundaries_12_18] = const$30 || (const$30 = dart.const(new model__math__box.Box.new()));
      }
      return this[__overlayViewportBoundaries_12_18];
    }
    get [_OverlayStyleConfig_12_19]() {
      if (this[__OverlayStyleConfig_12_19] == null) {
        this[__OverlayStyleConfig_12_19] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_12_6]));
      }
      return this[__OverlayStyleConfig_12_19];
    }
    get [_ZIndexer_12_20]() {
      if (this[__ZIndexer_12_20] == null) {
        this[__ZIndexer_12_20] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_12_20];
    }
    get [_OverlayDomRenderService_12_21]() {
      if (this[__OverlayDomRenderService_12_21] == null) {
        this[__OverlayDomRenderService_12_21] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_12_19], html.HtmlElement._check(this[_overlayContainer_12_15]), core$.String._check(this[_overlayContainerName_12_13]), this[_DomRuler_12_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_12_9]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_12_10]), this[_overlaySyncDom_12_16], this[_overlayRepositionLoop_12_17], this[_ZIndexer_12_20]);
      }
      return this[__OverlayDomRenderService_12_21];
    }
    get [_OverlayService_12_22]() {
      if (this[__OverlayService_12_22] == null) {
        this[__OverlayService_12_22] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_12_16], this[_OverlayDomRenderService_12_21], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_12_16], this[_OverlayDomRenderService_12_21], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGetOptional(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)));
      }
      return this[__OverlayService_12_22];
    }
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/app_bar/app_bar_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$1] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$1]), "header");
      this.addShimE(this[_el_0$1]);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$1]);
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
      this[_compView_9$] = new src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0.new(this, 9);
      let _el_9 = this[_compView_9$].rootEl;
      _el_2[$append](_el_9);
      this.addShimC(_el_9);
      this[_NavBarComponent_9_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__nav_bar__nav_bar_component.NavBarComponent, dart.wrapType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent), dart.fn(() => new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToNavBarComponent())) : new src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_9$].create0(this[_NavBarComponent_9_5]);
      let _el_10 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_10, "right");
      this.addShimC(_el_10);
      this[_compView_11] = new src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootEl;
      _el_10[$append](_el_11);
      this.addShimC(_el_11);
      this[_SearchBarComponent_11_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__search_bar__search_bar_component.SearchBarComponent, dart.wrapType(src__app_bar__search_bar__search_bar_component.SearchBarComponent), dart.fn(() => new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSearchBarComponent())) : new src__app_bar__search_bar__search_bar_component.SearchBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_11].create0(this[_SearchBarComponent_11_5]);
      this[_compView_12$] = new src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0.new(this, 12);
      let _el_12 = this[_compView_12$].rootEl;
      _el_10[$append](_el_12);
      this.addShimC(_el_12);
      this[_SignInBarComponent_12_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent, dart.wrapType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent), dart.fn(() => new src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToSignInBarComponent())) : new src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_12$].create0(this[_SignInBarComponent_12_5]);
      this[_el_3$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this.init0();
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (12 === nodeIndex) {
        if (token === dart.wrapType(html.Document)) {
          return this[_Document_12_6];
        }
        if (token === dart.wrapType(html.HtmlDocument)) {
          return this[_HtmlDocument_12_7];
        }
        if (token === dart.wrapType(html.Window)) {
          return this[_Window_12_8];
        }
        if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService)) {
          return this[_DomService_12_9];
        }
        if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils)) {
          return this[_AcxImperativeViewUtils_12_10];
        }
        if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler)) {
          return this[_DomRuler_12_11];
        }
        if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone)) {
          return this[_ManagedZone_12_12];
        }
        if (token === (const$31 || (const$31 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))))) {
          return this[_overlayContainerName_12_13];
        }
        if (token === (const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))))) {
          return this[_overlayContainerParent_12_14];
        }
        if (token === (const$33 || (const$33 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))))) {
          return this[_overlayContainer_12_15];
        }
        if (token === (const$34 || (const$34 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom"))))) {
          return this[_overlaySyncDom_12_16];
        }
        if (token === (const$35 || (const$35 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))))) {
          return this[_overlayRepositionLoop_12_17];
        }
        if (token === (const$36 || (const$36 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))))) {
          return this[_overlayViewportBoundaries_12_18];
        }
        if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig)) {
          return this[_OverlayStyleConfig_12_19];
        }
        if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer)) {
          return this[_ZIndexer_12_20];
        }
        if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)) {
          return this[_OverlayDomRenderService_12_21];
        }
        if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService)) {
          return this[_OverlayService_12_22];
        }
      }
      return notFoundResult;
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
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
        this[_NavBarComponent_9_5].theaterDropdownActive = currVal_3;
        this[_expr_3$1] = currVal_3;
      }
      let currVal_0 = _ctx.theaterDropdownVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$3], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$1]), "scrolling-blocked", currVal_0);
        this[_expr_0$3] = currVal_0;
      }
      let currVal_1 = _ctx.hide;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$1]), "hidden", currVal_1);
        this[_expr_1$1] = currVal_1;
      }
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3$]);
      this[_textBinding_7].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.appName));
      this[_compView_11].detectHostChanges(firstCheck);
      this[_compView_9$].detectChanges();
      this[_compView_11].detectChanges();
      this[_compView_12$].detectChanges();
    }
    destroyInternal() {
      this[_compView_9$].destroyInternalState();
      this[_compView_11].destroyInternalState();
      this[_compView_12$].destroyInternalState();
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
    this[_compView_9$] = null;
    this[_NavBarComponent_9_5] = null;
    this[_compView_11] = null;
    this[_SearchBarComponent_11_5] = null;
    this[_compView_12$] = null;
    this[_SignInBarComponent_12_5] = null;
    this[__Document_12_6] = null;
    this[__HtmlDocument_12_7] = null;
    this[__Window_12_8] = null;
    this[__DomService_12_9] = null;
    this[__AcxImperativeViewUtils_12_10] = null;
    this[__DomRuler_12_11] = null;
    this[__ManagedZone_12_12] = null;
    this[__overlayContainerName_12_13] = null;
    this[__overlayContainerParent_12_14] = null;
    this[__overlayContainer_12_15] = null;
    this[__overlaySyncDom_12_16] = null;
    this[__overlayRepositionLoop_12_17] = null;
    this[__overlayViewportBoundaries_12_18] = null;
    this[__OverlayStyleConfig_12_19] = null;
    this[__ZIndexer_12_20] = null;
    this[__OverlayDomRenderService_12_21] = null;
    this[__OverlayService_12_22] = null;
    this[_expr_0$3] = null;
    this[_expr_1$1] = null;
    this[_expr_2$0] = null;
    this[_expr_3$1] = null;
    this[_el_0$1] = null;
    this[_el_3$] = null;
    src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("app-bar"));
  }).prototype = src__app_bar__app_bar_component$46template.ViewAppBarComponent0.prototype;
  dart.addTypeTests(src__app_bar__app_bar_component$46template.ViewAppBarComponent0);
  dart.setMethodSignature(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, () => ({
    __proto__: dart.getMethods(src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__app_bar_component.AppBarComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, () => ({
    __proto__: dart.getGetters(src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__),
    [_Document_12_6]: dart.dynamic,
    [_HtmlDocument_12_7]: dart.dynamic,
    [_Window_12_8]: dart.dynamic,
    [_DomService_12_9]: dart.dynamic,
    [_AcxImperativeViewUtils_12_10]: dart.dynamic,
    [_DomRuler_12_11]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_12_12]: dart.dynamic,
    [_overlayContainerName_12_13]: dart.dynamic,
    [_overlayContainerParent_12_14]: dart.dynamic,
    [_overlayContainer_12_15]: dart.dynamic,
    [_overlaySyncDom_12_16]: core$.bool,
    [_overlayRepositionLoop_12_17]: core$.bool,
    [_overlayViewportBoundaries_12_18]: model__math__box.Box,
    [_OverlayStyleConfig_12_19]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_12_20]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_12_21]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_12_22]: dart.dynamic
  }));
  dart.setLibraryUri(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, "package:web/src/app_bar/app_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__app_bar_component$46template.ViewAppBarComponent0, () => ({
    __proto__: dart.getFields(src__app_bar__app_bar_component$46template.ViewAppBarComponent0.__proto__),
    [_textBinding_7]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_RouterLink_3_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_compView_9$]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component$46template.ViewNavBarComponent0),
    [_NavBarComponent_9_5]: dart.fieldType(src__app_bar__nav_bar__nav_bar_component.NavBarComponent),
    [_compView_11]: dart.fieldType(src__app_bar__search_bar__search_bar_component$46template.ViewSearchBarComponent0),
    [_SearchBarComponent_11_5]: dart.fieldType(src__app_bar__search_bar__search_bar_component.SearchBarComponent),
    [_compView_12$]: dart.fieldType(src__app_bar__signin_bar__signin_bar_component$46template.ViewSignInBarComponent0),
    [_SignInBarComponent_12_5]: dart.fieldType(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent),
    [__Document_12_6]: dart.fieldType(dart.dynamic),
    [__HtmlDocument_12_7]: dart.fieldType(dart.dynamic),
    [__Window_12_8]: dart.fieldType(dart.dynamic),
    [__DomService_12_9]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_12_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_12_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_12_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_12_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_12_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_12_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_12_16]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_12_17]: dart.fieldType(core$.bool),
    [__overlayViewportBoundaries_12_18]: dart.fieldType(model__math__box.Box),
    [__OverlayStyleConfig_12_19]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_12_20]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_12_21]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_12_22]: dart.fieldType(dart.dynamic),
    [_expr_0$3]: dart.fieldType(core$.bool),
    [_expr_1$1]: dart.fieldType(core$.bool),
    [_expr_2$0]: dart.fieldType(core$.String),
    [_expr_3$1]: dart.fieldType(core$.bool),
    [_el_0$1]: dart.fieldType(html.Element),
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
  const _compView_0$3 = dart.privateName(src__app_bar__app_bar_component$46template, "_compView_0");
  const _AppBarComponent_0_5$ = dart.privateName(src__app_bar__app_bar_component$46template, "_AppBarComponent_0_5");
  src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0 = class _ViewAppBarComponentHost0 extends src__core__linker__app_view.AppView$(src__app_bar__app_bar_component.AppBarComponent) {
    build() {
      this[_compView_0$3] = new src__app_bar__app_bar_component$46template.ViewAppBarComponent0.new(this, 0);
      this.rootEl = this[_compView_0$3].rootEl;
      this[_AppBarComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__app_bar__app_bar_component.AppBarComponent, dart.wrapType(src__app_bar__app_bar_component.AppBarComponent), dart.fn(() => new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToAppBarComponent())) : new src__app_bar__app_bar_component.AppBarComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)), StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0$3].create(this[_AppBarComponent_0_5$], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfAppBarComponent()).new(0, this, this.rootEl, this[_AppBarComponent_0_5$]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppBarComponent_0_5$].ngOnInit();
      }
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroyInternalState();
      this[_AppBarComponent_0_5$].ngOnDestroy();
    }
  };
  (src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$3] = null;
    this[_AppBarComponent_0_5$] = null;
    src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.prototype;
  dart.addTypeTests(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0);
  dart.setMethodSignature(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0, () => ({
    __proto__: dart.getMethods(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__app_bar__app_bar_component.AppBarComponent), [])
  }));
  dart.setLibraryUri(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0, "package:web/src/app_bar/app_bar_component.template.dart");
  dart.setFieldSignature(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0, () => ({
    __proto__: dart.getFields(src__app_bar__app_bar_component$46template._ViewAppBarComponentHost0.__proto__),
    [_compView_0$3]: dart.fieldType(src__app_bar__app_bar_component$46template.ViewAppBarComponent0),
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
    src__app_bar__signin_bar__signin_bar_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/web/app_component.template.ddc", {
    "package:web/app_component.template.dart": app_component$46template,
    "package:web/src/app_bar/nav_bar/nav_bar_component.css.shim.dart": src__app_bar__nav_bar__nav_bar_component$46css$46shim,
    "package:web/src/app_bar/nav_bar/nav_bar_component.template.dart": src__app_bar__nav_bar__nav_bar_component$46template,
    "package:web/src/app_bar/scroll_utils.template.dart": src__app_bar__scroll_utils$46template,
    "package:web/src/app_bar/search_bar/search_bar_component.css.shim.dart": src__app_bar__search_bar__search_bar_component$46css$46shim,
    "package:web/src/app_bar/search_bar/search_bar_component.template.dart": src__app_bar__search_bar__search_bar_component$46template,
    "package:web/src/common/signin_page/signin_page_component.css.shim.dart": src__common__signin_page__signin_page_component$46css$46shim,
    "package:web/src/common/signin_page/signin_page_component.template.dart": src__common__signin_page__signin_page_component$46template,
    "package:web/src/app_bar/signin_bar/signin_bar_component.css.shim.dart": src__app_bar__signin_bar__signin_bar_component$46css$46shim,
    "package:web/src/app_bar/signin_bar/signin_bar_component.template.dart": src__app_bar__signin_bar__signin_bar_component$46template,
    "package:web/src/app_bar/app_bar_component.css.shim.dart": src__app_bar__app_bar_component$46css$46shim,
    "package:web/src/app_bar/app_bar_component.template.dart": src__app_bar__app_bar_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/app_bar/nav_bar/nav_bar_component.css.shim.dart","src/app_bar/nav_bar/nav_bar_component.template.dart","src/app_bar/scroll_utils.template.dart","src/app_bar/search_bar/search_bar_component.css.shim.dart","src/app_bar/search_bar/search_bar_component.template.dart","src/common/signin_page/signin_page_component.css.shim.dart","src/common/signin_page/signin_page_component.template.dart","src/app_bar/signin_bar/signin_bar_component.css.shim.dart","src/app_bar/signin_bar/signin_bar_component.template.dart","src/app_bar/app_bar_component.css.shim.dart","src/app_bar/app_bar_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__app_bar__nav_bar__nav_bar_component$46css$46shim: src__app_bar__nav_bar__nav_bar_component$46css$46shim,
    src__app_bar__nav_bar__nav_bar_component$46template: src__app_bar__nav_bar__nav_bar_component$46template,
    src__app_bar__scroll_utils$46template: src__app_bar__scroll_utils$46template,
    src__app_bar__search_bar__search_bar_component$46css$46shim: src__app_bar__search_bar__search_bar_component$46css$46shim,
    src__app_bar__search_bar__search_bar_component$46template: src__app_bar__search_bar__search_bar_component$46template,
    src__common__signin_page__signin_page_component$46css$46shim: src__common__signin_page__signin_page_component$46css$46shim,
    src__common__signin_page__signin_page_component$46template: src__common__signin_page__signin_page_component$46template,
    src__app_bar__signin_bar__signin_bar_component$46css$46shim: src__app_bar__signin_bar__signin_bar_component$46css$46shim,
    src__app_bar__signin_bar__signin_bar_component$46template: src__app_bar__signin_bar__signin_bar_component$46template,
    src__app_bar__app_bar_component$46css$46shim: src__app_bar__app_bar_component$46css$46shim,
    src__app_bar__app_bar_component$46template: src__app_bar__app_bar_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
