define(['dart_sdk', 'packages/core/core', 'packages/kt_dart/collection', 'packages/angular/src/core/change_detection/change_detection', 'packages/intl/intl', 'packages/angular/src/bootstrap/modules', 'packages/angular/angular.template', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/proxies', 'packages/redux/redux', 'packages/angular_router/angular_router.template', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/firebase/firebase', 'packages/firebase/src/app'], function(dart_sdk, core, collection, change_detection, intl, modules, angular, text_binding, interpolate, proxies, redux, angular_router, router_outlet_directive, firebase, app) {
  'use strict';
  const core$ = dart_sdk.core;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__models__content_descriptor = core.src__models__content_descriptor;
  const src__models__show = core.src__models__show;
  const src__models__event = core.src__models__event;
  const src__i18n__messages = core.src__i18n__messages;
  const src__models__actor = core.src__models__actor;
  const src__models__loading_status = core.src__models__loading_status;
  const src__viewmodels__theater_list_view_model = core.src__viewmodels__theater_list_view_model;
  const src__models__theater = core.src__models__theater;
  const src__redux__app__app_state = core.src__redux__app__app_state;
  const src__models__vegebook = core.src__models__vegebook;
  const src__models__vegenews = core.src__models__vegenews;
  const src__redux__vegebook__vegebook_selectors = core.src__redux__vegebook__vegebook_selectors;
  const src__redux__vegebook__vegebook_actions = core.src__redux__vegebook__vegebook_actions;
  const src__redux__vegenews__vegenews_selectors = core.src__redux__vegenews__vegenews_selectors;
  const src__redux__vegenews__vegenews_actions = core.src__redux__vegenews__vegenews_actions;
  const src__viewmodels__showtime_page_view_model = core.src__viewmodels__showtime_page_view_model;
  const src__redux__show__show_selectors = core.src__redux__show__show_selectors;
  const src__redux__event__event_selectors = core.src__redux__event__event_selectors;
  const src__redux__show__show_actions = core.src__redux__show__show_actions;
  const src__viewmodels__vegenews_page_view_model = core.src__viewmodels__vegenews_page_view_model;
  const src__viewmodels__vegebook_page_view_model = core.src__viewmodels__vegebook_page_view_model;
  const src__viewmodels__events_page_view_model = core.src__viewmodels__events_page_view_model;
  const src__redux___common__common_actions = core.src__redux___common__common_actions;
  const src__redux__actor__actor_actions = core.src__redux__actor__actor_actions;
  const src__redux__event__event_actions = core.src__redux__event__event_actions;
  const src__redux___common__search = core.src__redux___common__search;
  const src__collection__kt_list = collection.src__collection__kt_list;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__di__errors = change_detection.src__di__errors;
  const intl$ = intl.intl;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__pipes__date_pipe = modules.src__common__pipes__date_pipe;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const angular$46template = angular.angular$46template;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const src__runtime__proxies = proxies.src__runtime__proxies;
  const src__store = redux.src__store;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__lifecycle = router_outlet_directive.src__lifecycle;
  const src__router__router_state = router_outlet_directive.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__route_path = router_outlet_directive.src__route_path;
  const src__route_definition = router_outlet_directive.src__route_definition;
  const src__top_level = firebase.src__top_level;
  const src__auth = app.src__auth;
  const src__common__content_rating__content_rating_component = Object.create(dart.library);
  const src__common__event_poster__lazy_image_component = Object.create(dart.library);
  const src__common__event_poster__event_poster_component = Object.create(dart.library);
  const src__common__showtime_item__showtime_item_component = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_image_component = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_scroller_component = Object.create(dart.library);
  const src__event_details__landscape_image__event_landscape_image_component = Object.create(dart.library);
  const src__common__content_rating__content_rating_component$46css$46shim = Object.create(dart.library);
  const src__common__content_rating__content_rating_component$46template = Object.create(dart.library);
  const src__common__event_poster__lazy_image_component$46css$46shim = Object.create(dart.library);
  const src__common__event_poster__lazy_image_component$46template = Object.create(dart.library);
  const src__common__event_poster__event_poster_component$46css$46shim = Object.create(dart.library);
  const src__common__event_poster__event_poster_component$46template = Object.create(dart.library);
  const src__common__showtime_item__showtime_item_component$46css$46shim = Object.create(dart.library);
  const src__common__showtime_item__showtime_item_component$46template = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_image_component$46css$46shim = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_image_component$46template = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_scroller_component$46css$46shim = Object.create(dart.library);
  const src__event_details__actor_scroller__actor_scroller_component$46template = Object.create(dart.library);
  const src__event_details__landscape_image__event_landscape_image_component$46css$46shim = Object.create(dart.library);
  const src__event_details__landscape_image__event_landscape_image_component$46template = Object.create(dart.library);
  const src__common__loading_view__spinner_component = Object.create(dart.library);
  const src__common__loading_view__loading_view_component = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim = Object.create(dart.library);
  const src__common__theater_selector__theater_dropdown_controller$46template = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_dropdown_menu_component = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_dropdown_menu_component$46template = Object.create(dart.library);
  const src__common__theater_selector__theater_dropdown_controller = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_component = Object.create(dart.library);
  const src__restore_scroll_position = Object.create(dart.library);
  const src__restore_scroll_position$46template = Object.create(dart.library);
  const src__common__loading_view__spinner_component$46css$46shim = Object.create(dart.library);
  const src__common__loading_view__spinner_component$46template = Object.create(dart.library);
  const src__common__loading_view__loading_view_component$46css$46shim = Object.create(dart.library);
  const src__common__loading_view__loading_view_component$46template = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_component$46css$46shim = Object.create(dart.library);
  const src__common__theater_selector__theater_selector_component$46template = Object.create(dart.library);
  const src__events__events_page_component$46css$46shim = Object.create(dart.library);
  const src__common__vegebook_poster__lazy_image_component = Object.create(dart.library);
  const src__common__vegebook_poster__vegebook_poster_component = Object.create(dart.library);
  const src__common__vegebook_poster__lazy_image_component$46css$46shim = Object.create(dart.library);
  const src__common__vegebook_poster__lazy_image_component$46template = Object.create(dart.library);
  const src__common__vegebook_poster__vegebook_poster_component$46css$46shim = Object.create(dart.library);
  const src__common__vegebook_poster__vegebook_poster_component$46template = Object.create(dart.library);
  const src__vegebook__vegebook_page_component$46css$46shim = Object.create(dart.library);
  const src__common__vegenews_poster__lazy_image_component = Object.create(dart.library);
  const src__common__vegenews_poster__vegenews_poster_component = Object.create(dart.library);
  const src__common__vegenews_poster__lazy_image_component$46css$46shim = Object.create(dart.library);
  const src__common__vegenews_poster__lazy_image_component$46template = Object.create(dart.library);
  const src__common__vegenews_poster__vegenews_poster_component$46css$46shim = Object.create(dart.library);
  const src__common__vegenews_poster__vegenews_poster_component$46template = Object.create(dart.library);
  const src__vegenews__vegenews_page_component$46css$46shim = Object.create(dart.library);
  const src__event_details__event_details_component$46css$46shim = Object.create(dart.library);
  const src__showtimes__date_selector_component = Object.create(dart.library);
  const src__showtimes__date_selector_component$46css$46shim = Object.create(dart.library);
  const src__showtimes__date_selector_component$46template = Object.create(dart.library);
  const src__showtimes__showtimes_page_component$46css$46shim = Object.create(dart.library);
  const src__vegenews_details__landscape_image__vegenews_landscape_image_component = Object.create(dart.library);
  const src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim = Object.create(dart.library);
  const src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template = Object.create(dart.library);
  const src__vegenews_details__vegenews_details_component$46css$46shim = Object.create(dart.library);
  const src__vegebook_details__landscape_image__vegebook_landscape_image_component = Object.create(dart.library);
  const src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim = Object.create(dart.library);
  const src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template = Object.create(dart.library);
  const src__vegebook_details__vegebook_details_component$46css$46shim = Object.create(dart.library);
  const src__vegebook_details__vegebook_details_component = Object.create(dart.library);
  const src__vegebook_details__vegebook_details_component$46template = Object.create(dart.library);
  const src__vegenews_details__vegenews_details_component = Object.create(dart.library);
  const src__vegenews_details__vegenews_details_component$46template = Object.create(dart.library);
  const src__showtimes__showtimes_page_component = Object.create(dart.library);
  const src__showtimes__showtimes_page_component$46template = Object.create(dart.library);
  const src__vegenews__vegenews_page_component = Object.create(dart.library);
  const src__vegenews__vegenews_page_component$46template = Object.create(dart.library);
  const src__vegebook__vegebook_page_component = Object.create(dart.library);
  const src__vegebook__vegebook_page_component$46template = Object.create(dart.library);
  const src__events__events_page_component = Object.create(dart.library);
  const src__events__events_page_component$46template = Object.create(dart.library);
  const src__routes$46template = Object.create(dart.library);
  const src__event_details__event_details_component = Object.create(dart.library);
  const src__event_details__event_details_component$46template = Object.create(dart.library);
  const src__routes = Object.create(dart.library);
  const src__app_bar__nav_bar__nav_bar_component = Object.create(dart.library);
  const src__app_bar__scroll_utils = Object.create(dart.library);
  const src__app_bar__search_bar__search_bar_component = Object.create(dart.library);
  const src__common__signin_page__signin_page_component = Object.create(dart.library);
  const src__app_bar__signin_bar__signin_bar_component = Object.create(dart.library);
  const src__app_bar__app_bar_component = Object.create(dart.library);
  const $_get = dartx._get;
  const $dataset = dartx.dataset;
  const $classes = dartx.classes;
  const $addEventListener = dartx.addEventListener;
  const $round = dartx.round;
  const $last = dartx.last;
  const $firstWhere = dartx.firstWhere;
  const $forEach = dartx.forEach;
  const $open = dartx.open;
  const $removeEventListener = dartx.removeEventListener;
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $createElementNS = dartx.createElementNS;
  const $setProperty = dartx.setProperty;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  const $scrollY = dartx.scrollY;
  const $scrollTo = dartx.scrollTo;
  const $top = dartx.top;
  let EventToTimer = () => (EventToTimer = dart.constFn(dart.fnType(async.Timer, [html.Event])))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core$.bool, [core$.int])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core$.int, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core$.String, [])))();
  let dynamicToTimer = () => (dynamicToTimer = dart.constFn(dart.fnType(async.Timer, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic])))();
  let ListAndIntersectionObserverToNull = () => (ListAndIntersectionObserverToNull = dart.constFn(dart.fnType(core$.Null, [core$.List, html.IntersectionObserver])))();
  let ListAndIntersectionObserverTovoid = () => (ListAndIntersectionObserverTovoid = dart.constFn(dart.fnType(dart.void, [core$.List, html.IntersectionObserver])))();
  let EventTobool = () => (EventTobool = dart.constFn(dart.fnType(core$.bool, [html.Event])))();
  let ListOfActor = () => (ListOfActor = dart.constFn(core$.List$(src__models__actor.Actor)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core$.int])))();
  let AppViewOfContentRatingComponent = () => (AppViewOfContentRatingComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__content_rating__content_rating_component.ContentRatingComponent)))();
  let AppViewAndintToAppViewOfContentRatingComponent = () => (AppViewAndintToAppViewOfContentRatingComponent = dart.constFn(dart.fnType(AppViewOfContentRatingComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfContentRatingComponent = () => (ComponentFactoryOfContentRatingComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__content_rating__content_rating_component.ContentRatingComponent)))();
  let ComponentRefOfContentRatingComponent = () => (ComponentRefOfContentRatingComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__content_rating__content_rating_component.ContentRatingComponent)))();
  let AppViewOfLazyImageComponent = () => (AppViewOfLazyImageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__event_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewAndintToAppViewOfLazyImageComponent = () => (AppViewAndintToAppViewOfLazyImageComponent = dart.constFn(dart.fnType(AppViewOfLazyImageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfLazyImageComponent = () => (ComponentFactoryOfLazyImageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__event_poster__lazy_image_component.LazyImageComponent)))();
  let ComponentRefOfLazyImageComponent = () => (ComponentRefOfLazyImageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewOfEventPosterComponent = () => (AppViewOfEventPosterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent)))();
  let AppViewAndintToAppViewOfEventPosterComponent = () => (AppViewAndintToAppViewOfEventPosterComponent = dart.constFn(dart.fnType(AppViewOfEventPosterComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfEventPosterComponent = () => (ComponentFactoryOfEventPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__event_poster__event_poster_component.EventPosterComponent)))();
  let VoidToEventPosterComponent = () => (VoidToEventPosterComponent = dart.constFn(dart.fnType(src__common__event_poster__event_poster_component.EventPosterComponent, [])))();
  let ComponentRefOfEventPosterComponent = () => (ComponentRefOfEventPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent)))();
  let dynamicAndStringToString = () => (dynamicAndStringToString = dart.constFn(dart.fnType(core$.String, [dart.dynamic, core$.String])))();
  let AppViewOfShowtimeItemComponent = () => (AppViewOfShowtimeItemComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent)))();
  let AppViewAndintToAppViewOfShowtimeItemComponent = () => (AppViewAndintToAppViewOfShowtimeItemComponent = dart.constFn(dart.fnType(AppViewOfShowtimeItemComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfShowtimeItemComponent = () => (ComponentFactoryOfShowtimeItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent)))();
  let VoidToShowtimeItemComponent = () => (VoidToShowtimeItemComponent = dart.constFn(dart.fnType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, [])))();
  let ComponentRefOfShowtimeItemComponent = () => (ComponentRefOfShowtimeItemComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent)))();
  let AppViewOfActorImageComponent = () => (AppViewOfActorImageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent)))();
  let AppViewAndintToAppViewOfActorImageComponent = () => (AppViewAndintToAppViewOfActorImageComponent = dart.constFn(dart.fnType(AppViewOfActorImageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfActorImageComponent = () => (ComponentFactoryOfActorImageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent)))();
  let ComponentRefOfActorImageComponent = () => (ComponentRefOfActorImageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent)))();
  let AppViewOfActorScrollerComponent = () => (AppViewOfActorScrollerComponent = dart.constFn(src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent)))();
  let AppViewAndintToAppViewOfActorScrollerComponent = () => (AppViewAndintToAppViewOfActorScrollerComponent = dart.constFn(dart.fnType(AppViewOfActorScrollerComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfActorScrollerComponent = () => (ComponentFactoryOfActorScrollerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent)))();
  let ComponentRefOfActorScrollerComponent = () => (ComponentRefOfActorScrollerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent)))();
  let AppViewOfEventLandscapeImageComponent = () => (AppViewOfEventLandscapeImageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent)))();
  let AppViewAndintToAppViewOfEventLandscapeImageComponent = () => (AppViewAndintToAppViewOfEventLandscapeImageComponent = dart.constFn(dart.fnType(AppViewOfEventLandscapeImageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfEventLandscapeImageComponent = () => (ComponentFactoryOfEventLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent)))();
  let ComponentRefOfEventLandscapeImageComponent = () => (ComponentRefOfEventLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core$.bool, [])))();
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(src__store.Store$(src__redux__app__app_state.AppState)))();
  let AppViewOfTheaterSelectorDropdownMenuComponent = () => (AppViewOfTheaterSelectorDropdownMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent)))();
  let AppViewAndintToAppViewOfTheaterSelectorDropdownMenuComponent = () => (AppViewAndintToAppViewOfTheaterSelectorDropdownMenuComponent = dart.constFn(dart.fnType(AppViewOfTheaterSelectorDropdownMenuComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfTheaterSelectorDropdownMenuComponent = () => (ComponentFactoryOfTheaterSelectorDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent)))();
  let VoidToTheaterSelectorDropdownMenuComponent = () => (VoidToTheaterSelectorDropdownMenuComponent = dart.constFn(dart.fnType(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, [])))();
  let ComponentRefOfTheaterSelectorDropdownMenuComponent = () => (ComponentRefOfTheaterSelectorDropdownMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core$.Null, [])))();
  let AppViewOfSpinnerComponent = () => (AppViewOfSpinnerComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__loading_view__spinner_component.SpinnerComponent)))();
  let AppViewAndintToAppViewOfSpinnerComponent = () => (AppViewAndintToAppViewOfSpinnerComponent = dart.constFn(dart.fnType(AppViewOfSpinnerComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfSpinnerComponent = () => (ComponentFactoryOfSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__loading_view__spinner_component.SpinnerComponent)))();
  let ComponentRefOfSpinnerComponent = () => (ComponentRefOfSpinnerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__spinner_component.SpinnerComponent)))();
  let AppViewOfLoadingViewComponent = () => (AppViewOfLoadingViewComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent)))();
  let AppViewAndintToAppViewOfLoadingViewComponent = () => (AppViewAndintToAppViewOfLoadingViewComponent = dart.constFn(dart.fnType(AppViewOfLoadingViewComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfLoadingViewComponent = () => (ComponentFactoryOfLoadingViewComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__loading_view__loading_view_component.LoadingViewComponent)))();
  let VoidToLoadingViewComponent = () => (VoidToLoadingViewComponent = dart.constFn(dart.fnType(src__common__loading_view__loading_view_component.LoadingViewComponent, [])))();
  let ComponentRefOfLoadingViewComponent = () => (ComponentRefOfLoadingViewComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent)))();
  let AppViewOfTheaterSelectorComponent = () => (AppViewOfTheaterSelectorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent)))();
  let AppViewAndintToAppViewOfTheaterSelectorComponent = () => (AppViewAndintToAppViewOfTheaterSelectorComponent = dart.constFn(dart.fnType(AppViewOfTheaterSelectorComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfTheaterSelectorComponent = () => (ComponentFactoryOfTheaterSelectorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent)))();
  let VoidToTheaterSelectorComponent = () => (VoidToTheaterSelectorComponent = dart.constFn(dart.fnType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, [])))();
  let ComponentRefOfTheaterSelectorComponent = () => (ComponentRefOfTheaterSelectorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent)))();
  let AppViewOfLazyImageComponent$ = () => (AppViewOfLazyImageComponent$ = dart.constFn(src__core__linker__app_view.AppView$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewAndintToAppViewOfLazyImageComponent$ = () => (AppViewAndintToAppViewOfLazyImageComponent$ = dart.constFn(dart.fnType(AppViewOfLazyImageComponent$(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfLazyImageComponent$ = () => (ComponentFactoryOfLazyImageComponent$ = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent)))();
  let ComponentRefOfLazyImageComponent$ = () => (ComponentRefOfLazyImageComponent$ = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewOfVegeBookPosterComponent = () => (AppViewOfVegeBookPosterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent)))();
  let AppViewAndintToAppViewOfVegeBookPosterComponent = () => (AppViewAndintToAppViewOfVegeBookPosterComponent = dart.constFn(dart.fnType(AppViewOfVegeBookPosterComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeBookPosterComponent = () => (ComponentFactoryOfVegeBookPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent)))();
  let VoidToVegeBookPosterComponent = () => (VoidToVegeBookPosterComponent = dart.constFn(dart.fnType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, [])))();
  let ComponentRefOfVegeBookPosterComponent = () => (ComponentRefOfVegeBookPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent)))();
  let AppViewOfLazyImageComponent$0 = () => (AppViewOfLazyImageComponent$0 = dart.constFn(src__core__linker__app_view.AppView$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewAndintToAppViewOfLazyImageComponent$0 = () => (AppViewAndintToAppViewOfLazyImageComponent$0 = dart.constFn(dart.fnType(AppViewOfLazyImageComponent$0(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfLazyImageComponent$0 = () => (ComponentFactoryOfLazyImageComponent$0 = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent)))();
  let ComponentRefOfLazyImageComponent$0 = () => (ComponentRefOfLazyImageComponent$0 = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent)))();
  let AppViewOfVegeNewsPosterComponent = () => (AppViewOfVegeNewsPosterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent)))();
  let AppViewAndintToAppViewOfVegeNewsPosterComponent = () => (AppViewAndintToAppViewOfVegeNewsPosterComponent = dart.constFn(dart.fnType(AppViewOfVegeNewsPosterComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeNewsPosterComponent = () => (ComponentFactoryOfVegeNewsPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent)))();
  let VoidToVegeNewsPosterComponent = () => (VoidToVegeNewsPosterComponent = dart.constFn(dart.fnType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, [])))();
  let ComponentRefOfVegeNewsPosterComponent = () => (ComponentRefOfVegeNewsPosterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent)))();
  let ListOfDateTime = () => (ListOfDateTime = dart.constFn(core$.List$(core$.DateTime)))();
  let DateTimeTodynamic = () => (DateTimeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core$.DateTime])))();
  let AppViewOfDateSelectorComponent = () => (AppViewOfDateSelectorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__showtimes__date_selector_component.DateSelectorComponent)))();
  let AppViewAndintToAppViewOfDateSelectorComponent = () => (AppViewAndintToAppViewOfDateSelectorComponent = dart.constFn(dart.fnType(AppViewOfDateSelectorComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfDateSelectorComponent = () => (ComponentFactoryOfDateSelectorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__showtimes__date_selector_component.DateSelectorComponent)))();
  let ComponentRefOfDateSelectorComponent = () => (ComponentRefOfDateSelectorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__showtimes__date_selector_component.DateSelectorComponent)))();
  let AppViewOfVegeNewsLandscapeImageComponent = () => (AppViewOfVegeNewsLandscapeImageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent)))();
  let AppViewAndintToAppViewOfVegeNewsLandscapeImageComponent = () => (AppViewAndintToAppViewOfVegeNewsLandscapeImageComponent = dart.constFn(dart.fnType(AppViewOfVegeNewsLandscapeImageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeNewsLandscapeImageComponent = () => (ComponentFactoryOfVegeNewsLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent)))();
  let ComponentRefOfVegeNewsLandscapeImageComponent = () => (ComponentRefOfVegeNewsLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent)))();
  let AppViewOfVegeBookLandscapeImageComponent = () => (AppViewOfVegeBookLandscapeImageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent)))();
  let AppViewAndintToAppViewOfVegeBookLandscapeImageComponent = () => (AppViewAndintToAppViewOfVegeBookLandscapeImageComponent = dart.constFn(dart.fnType(AppViewOfVegeBookLandscapeImageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeBookLandscapeImageComponent = () => (ComponentFactoryOfVegeBookLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent)))();
  let ComponentRefOfVegeBookLandscapeImageComponent = () => (ComponentRefOfVegeBookLandscapeImageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent)))();
  let AppStateToNull = () => (AppStateToNull = dart.constFn(dart.fnType(core$.Null, [src__redux__app__app_state.AppState])))();
  let StreamSubscriptionOfAppState = () => (StreamSubscriptionOfAppState = dart.constFn(async.StreamSubscription$(src__redux__app__app_state.AppState)))();
  let AppViewOfVegeBookDetailsComponent = () => (AppViewOfVegeBookDetailsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent)))();
  let AppViewAndintToAppViewOfVegeBookDetailsComponent = () => (AppViewAndintToAppViewOfVegeBookDetailsComponent = dart.constFn(dart.fnType(AppViewOfVegeBookDetailsComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeBookDetailsComponent = () => (ComponentFactoryOfVegeBookDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent)))();
  let VoidToVegeBookDetailsComponent = () => (VoidToVegeBookDetailsComponent = dart.constFn(dart.fnType(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent, [])))();
  let ComponentRefOfVegeBookDetailsComponent = () => (ComponentRefOfVegeBookDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent)))();
  let AppViewOfVegeNewsDetailsComponent = () => (AppViewOfVegeNewsDetailsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent)))();
  let AppViewAndintToAppViewOfVegeNewsDetailsComponent = () => (AppViewAndintToAppViewOfVegeNewsDetailsComponent = dart.constFn(dart.fnType(AppViewOfVegeNewsDetailsComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeNewsDetailsComponent = () => (ComponentFactoryOfVegeNewsDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent)))();
  let VoidToVegeNewsDetailsComponent = () => (VoidToVegeNewsDetailsComponent = dart.constFn(dart.fnType(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent, [])))();
  let ComponentRefOfVegeNewsDetailsComponent = () => (ComponentRefOfVegeNewsDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.String)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core$.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfShowtimesPageComponent = () => (AppViewOfShowtimesPageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__showtimes__showtimes_page_component.ShowtimesPageComponent)))();
  let AppViewAndintToAppViewOfShowtimesPageComponent = () => (AppViewAndintToAppViewOfShowtimesPageComponent = dart.constFn(dart.fnType(AppViewOfShowtimesPageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfShowtimesPageComponent = () => (ComponentFactoryOfShowtimesPageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__showtimes__showtimes_page_component.ShowtimesPageComponent)))();
  let VoidToShowtimesPageComponent = () => (VoidToShowtimesPageComponent = dart.constFn(dart.fnType(src__showtimes__showtimes_page_component.ShowtimesPageComponent, [])))();
  let ComponentRefOfShowtimesPageComponent = () => (ComponentRefOfShowtimesPageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__showtimes__showtimes_page_component.ShowtimesPageComponent)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewOfVegeNewsPageComponent = () => (AppViewOfVegeNewsPageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegenews__vegenews_page_component.VegeNewsPageComponent)))();
  let AppViewAndintToAppViewOfVegeNewsPageComponent = () => (AppViewAndintToAppViewOfVegeNewsPageComponent = dart.constFn(dart.fnType(AppViewOfVegeNewsPageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeNewsPageComponent = () => (ComponentFactoryOfVegeNewsPageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegenews__vegenews_page_component.VegeNewsPageComponent)))();
  let VoidToVegeNewsPageComponent = () => (VoidToVegeNewsPageComponent = dart.constFn(dart.fnType(src__vegenews__vegenews_page_component.VegeNewsPageComponent, [])))();
  let ComponentRefOfVegeNewsPageComponent = () => (ComponentRefOfVegeNewsPageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegenews__vegenews_page_component.VegeNewsPageComponent)))();
  let AppViewOfVegeBookPageComponent = () => (AppViewOfVegeBookPageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__vegebook__vegebook_page_component.VegeBookPageComponent)))();
  let AppViewAndintToAppViewOfVegeBookPageComponent = () => (AppViewAndintToAppViewOfVegeBookPageComponent = dart.constFn(dart.fnType(AppViewOfVegeBookPageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfVegeBookPageComponent = () => (ComponentFactoryOfVegeBookPageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__vegebook__vegebook_page_component.VegeBookPageComponent)))();
  let VoidToVegeBookPageComponent = () => (VoidToVegeBookPageComponent = dart.constFn(dart.fnType(src__vegebook__vegebook_page_component.VegeBookPageComponent, [])))();
  let ComponentRefOfVegeBookPageComponent = () => (ComponentRefOfVegeBookPageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__vegebook__vegebook_page_component.VegeBookPageComponent)))();
  let AppViewOfEventsPageComponent = () => (AppViewOfEventsPageComponent = dart.constFn(src__core__linker__app_view.AppView$(src__events__events_page_component.EventsPageComponent)))();
  let AppViewAndintToAppViewOfEventsPageComponent = () => (AppViewAndintToAppViewOfEventsPageComponent = dart.constFn(dart.fnType(AppViewOfEventsPageComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfEventsPageComponent = () => (ComponentFactoryOfEventsPageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__events__events_page_component.EventsPageComponent)))();
  let VoidToEventsPageComponent = () => (VoidToEventsPageComponent = dart.constFn(dart.fnType(src__events__events_page_component.EventsPageComponent, [])))();
  let ComponentRefOfEventsPageComponent = () => (ComponentRefOfEventsPageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__events__events_page_component.EventsPageComponent)))();
  let AppViewOfEventDetailsComponent = () => (AppViewOfEventDetailsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent)))();
  let AppViewAndintToAppViewOfEventDetailsComponent = () => (AppViewAndintToAppViewOfEventDetailsComponent = dart.constFn(dart.fnType(AppViewOfEventDetailsComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfEventDetailsComponent = () => (ComponentFactoryOfEventDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__event_details__event_details_component.EventDetailsComponent)))();
  let VoidToEventDetailsComponent = () => (VoidToEventDetailsComponent = dart.constFn(dart.fnType(src__event_details__event_details_component.EventDetailsComponent, [])))();
  let ComponentRefOfEventDetailsComponent = () => (ComponentRefOfEventDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent)))();
  let dynamicToComponentFactoryOfVegeNewsDetailsComponent = () => (dynamicToComponentFactoryOfVegeNewsDetailsComponent = dart.constFn(dart.fnType(ComponentFactoryOfVegeNewsDetailsComponent(), [dart.dynamic])))();
  let FutureOfComponentFactory = () => (FutureOfComponentFactory = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentFactory)))();
  let VoidToFutureOfComponentFactory = () => (VoidToFutureOfComponentFactory = dart.constFn(dart.fnType(FutureOfComponentFactory(), [])))();
  let dynamicToComponentFactoryOfVegeBookDetailsComponent = () => (dynamicToComponentFactoryOfVegeBookDetailsComponent = dart.constFn(dart.fnType(ComponentFactoryOfVegeBookDetailsComponent(), [dart.dynamic])))();
  let dynamicToComponentFactoryOfShowtimesPageComponent = () => (dynamicToComponentFactoryOfShowtimesPageComponent = dart.constFn(dart.fnType(ComponentFactoryOfShowtimesPageComponent(), [dart.dynamic])))();
  let dynamicToComponentFactoryOfEventDetailsComponent = () => (dynamicToComponentFactoryOfEventDetailsComponent = dart.constFn(dart.fnType(ComponentFactoryOfEventDetailsComponent(), [dart.dynamic])))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core$.Null, [async.Timer])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core$.String)))();
  let UserCredentialAndStringTobool = () => (UserCredentialAndStringTobool = dart.constFn(dart.fnType(core$.bool, [src__auth.UserCredential, core$.String])))();
  let ScrollDirectionToNull = () => (ScrollDirectionToNull = dart.constFn(dart.fnType(core$.Null, [src__app_bar__scroll_utils.ScrollDirection])))();
  let RouterStateToNull = () => (RouterStateToNull = dart.constFn(dart.fnType(core$.Null, [src__router__router_state.RouterState])))();
  let StreamSubscriptionOfRouterState = () => (StreamSubscriptionOfRouterState = dart.constFn(async.StreamSubscription$(src__router__router_state.RouterState)))();
  src__common__content_rating__content_rating_component.ContentRatingComponent = class ContentRatingComponent extends core$.Object {
    get show() {
      return this[show];
    }
    set show(value) {
      this[show] = value;
    }
    get event() {
      return this[event];
    }
    set event(value) {
      this[event] = value;
    }
    get ageRating() {
      let t = this.show;
      let l = t == null ? null : t.ageRating;
      return l != null ? l : (() => {
        let t = this.event;
        return t == null ? null : t.ageRating;
      })();
    }
    get ageRatingUrl() {
      let t = this.show;
      let l = t == null ? null : t.ageRatingUrl;
      return l != null ? l : (() => {
        let t = this.event;
        return t == null ? null : t.ageRatingUrl;
      })();
    }
    get contentDescriptors() {
      let t = this.show;
      let l = t == null ? null : t.contentDescriptors;
      return l != null ? l : (() => {
        let t = this.event;
        return t == null ? null : t.contentDescriptors;
      })();
    }
  };
  (src__common__content_rating__content_rating_component.ContentRatingComponent.new = function() {
    this[show] = null;
    this[event] = null;
  }).prototype = src__common__content_rating__content_rating_component.ContentRatingComponent.prototype;
  dart.addTypeTests(src__common__content_rating__content_rating_component.ContentRatingComponent);
  const show = Symbol("ContentRatingComponent.show");
  const event = Symbol("ContentRatingComponent.event");
  dart.setGetterSignature(src__common__content_rating__content_rating_component.ContentRatingComponent, () => ({
    __proto__: dart.getGetters(src__common__content_rating__content_rating_component.ContentRatingComponent.__proto__),
    ageRating: core$.String,
    ageRatingUrl: core$.String,
    contentDescriptors: src__collection__kt_list.KtList$(src__models__content_descriptor.ContentDescriptor)
  }));
  dart.setFieldSignature(src__common__content_rating__content_rating_component.ContentRatingComponent, () => ({
    __proto__: dart.getFields(src__common__content_rating__content_rating_component.ContentRatingComponent.__proto__),
    show: dart.fieldType(src__models__show.Show),
    event: dart.fieldType(src__models__event.Event)
  }));
  dart.defineLazy(src__common__event_poster__lazy_image_component, {
    /*src__common__event_poster__lazy_image_component.supportsIntersectionObserver*/get supportsIntersectionObserver() {
      return js.context.hasProperty("IntersectionObserver");
    }
  });
  const _calculateDimensionsIfNeeded = dart.privateName(src__common__event_poster__lazy_image_component, "_calculateDimensionsIfNeeded");
  let const$;
  src__common__event_poster__lazy_image_component.LazyImageComponent = class LazyImageComponent extends core$.Object {
    get root() {
      return this[root$];
    }
    set root(value) {
      super.root = value;
    }
    get src() {
      return this[src];
    }
    set src(value) {
      this[src] = value;
    }
    get alt() {
      return this[alt];
    }
    set alt(value) {
      this[alt] = value;
    }
    static _loadImage(image, opts) {
      let src = opts && 'src' in opts ? opts.src : null;
      let url = src != null ? src : image[$dataset][$_get]("src");
      image.src = src__common__event_poster__lazy_image_component.LazyImageComponent._urlWithDimensions(url);
      image[$classes].remove("lazy");
      image[$addEventListener]("load", dart.fn(_ => src__common__event_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
      image[$addEventListener]("error", dart.fn(_ => src__common__event_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
    }
    ngOnInit() {
      let image = html.ImageElement._check(this.root.querySelector("img"));
      this[_calculateDimensionsIfNeeded](image);
      if (dart.test(src__common__event_poster__lazy_image_component.supportsIntersectionObserver)) {
        src__common__event_poster__lazy_image_component.LazyImageComponent._instance.observe(image);
      } else {
        src__common__event_poster__lazy_image_component.LazyImageComponent._loadImage(image, {src: this.src});
      }
    }
    [_calculateDimensionsIfNeeded](image) {
      if (src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth == null || src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedHeight == null) {
        let clientWidth = image.clientWidth;
        if (clientWidth == null || clientWidth === 0) {
          src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth = 300;
          src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
          return;
        }
        let closestWidth = src__common__event_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$firstWhere](dart.fn(width => dart.notNull(width) >= dart.notNull(clientWidth), intTobool()), {orElse: dart.fn(() => src__common__event_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$last], VoidToint())});
        src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth = closestWidth;
        src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
      }
    }
    static _urlWithDimensions(url) {
      return dart.str(url) + "&w=" + dart.str(src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth) + "&h=" + dart.str(src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedHeight);
    }
  };
  (src__common__event_poster__lazy_image_component.LazyImageComponent.new = function(root) {
    this[src] = null;
    this[alt] = null;
    this[root$] = root;
  }).prototype = src__common__event_poster__lazy_image_component.LazyImageComponent.prototype;
  dart.addTypeTests(src__common__event_poster__lazy_image_component.LazyImageComponent);
  const root$ = Symbol("LazyImageComponent.root");
  const src = Symbol("LazyImageComponent.src");
  const alt = Symbol("LazyImageComponent.alt");
  src__common__event_poster__lazy_image_component.LazyImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__common__event_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getMethods(src__common__event_poster__lazy_image_component.LazyImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_calculateDimensionsIfNeeded]: dart.fnType(dart.void, [html.ImageElement])
  }));
  dart.setFieldSignature(src__common__event_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getFields(src__common__event_poster__lazy_image_component.LazyImageComponent.__proto__),
    root: dart.finalFieldType(html.Element),
    src: dart.fieldType(core$.String),
    alt: dart.fieldType(core$.String)
  }));
  dart.defineLazy(src__common__event_poster__lazy_image_component.LazyImageComponent, {
    /*src__common__event_poster__lazy_image_component.LazyImageComponent._ratio*/get _ratio() {
      return 2 / 3;
    },
    /*src__common__event_poster__lazy_image_component.LazyImageComponent._widthBreakpoints*/get _widthBreakpoints() {
      return dart.constList([160, 206, 300], core$.int);
    },
    /*src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedWidth*/get _adjustedWidth() {
      return null;
    },
    set _adjustedWidth(_) {},
    /*src__common__event_poster__lazy_image_component.LazyImageComponent._adjustedHeight*/get _adjustedHeight() {
      return null;
    },
    set _adjustedHeight(_) {},
    /*src__common__event_poster__lazy_image_component.LazyImageComponent.onLoad*/get onLoad() {
      return dart.fn(image => async.Timer.new(const$ || (const$ = dart.const(new core$.Duration.new({milliseconds: 50}))), dart.fn(() => dart.dput(dart.dload(image, 'style'), 'opacity', "1"), VoidToString())), dynamicToTimer());
    },
    /*src__common__event_poster__lazy_image_component.LazyImageComponent._instance*/get _instance() {
      return html.IntersectionObserver.new(js.allowInterop(ListAndIntersectionObserverTovoid(), dart.fn((entries, observer) => {
        entries[$forEach](dart.fn(entry => {
          if (dart.dtest(dart.dload(entry, 'isIntersecting')) && html.ImageElement.is(dart.dload(entry, 'target'))) {
            src__common__event_poster__lazy_image_component.LazyImageComponent._loadImage(html.ImageElement.as(dart.dload(entry, 'target')));
            observer.unobserve(html.Element._check(dart.dload(entry, 'target')));
          }
        }, dynamicToNull()));
      }, ListAndIntersectionObserverToNull())));
    }
  });
  src__common__event_poster__event_poster_component.EventPosterComponent = class EventPosterComponent extends core$.Object {
    get messages() {
      return this[messages$];
    }
    set messages(value) {
      super.messages = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      this[event$] = value;
    }
    get isComingSoon() {
      return this[isComingSoon];
    }
    set isComingSoon(value) {
      this[isComingSoon] = value;
    }
    get hasDetails() {
      return this[hasDetails];
    }
    set hasDetails(value) {
      this[hasDetails] = value;
    }
    get isTouchable() {
      return this[isTouchable];
    }
    set isTouchable(value) {
      this[isTouchable] = value;
    }
    get releaseDate() {
      return src__common__event_poster__event_poster_component.EventPosterComponent._releaseDateFormat.format(this.event.releaseDate);
    }
  };
  (src__common__event_poster__event_poster_component.EventPosterComponent.new = function(messages) {
    this[event$] = null;
    this[isComingSoon] = false;
    this[hasDetails] = true;
    this[isTouchable] = true;
    this[messages$] = messages;
  }).prototype = src__common__event_poster__event_poster_component.EventPosterComponent.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component.EventPosterComponent);
  const messages$ = Symbol("EventPosterComponent.messages");
  const event$ = Symbol("EventPosterComponent.event");
  const isComingSoon = Symbol("EventPosterComponent.isComingSoon");
  const hasDetails = Symbol("EventPosterComponent.hasDetails");
  const isTouchable = Symbol("EventPosterComponent.isTouchable");
  dart.setGetterSignature(src__common__event_poster__event_poster_component.EventPosterComponent, () => ({
    __proto__: dart.getGetters(src__common__event_poster__event_poster_component.EventPosterComponent.__proto__),
    releaseDate: core$.String
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component.EventPosterComponent, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component.EventPosterComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    event: dart.fieldType(src__models__event.Event),
    isComingSoon: dart.fieldType(core$.bool),
    hasDetails: dart.fieldType(core$.bool),
    isTouchable: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__event_poster__event_poster_component.EventPosterComponent, {
    /*src__common__event_poster__event_poster_component.EventPosterComponent._releaseDateFormat*/get _releaseDateFormat() {
      return new intl$.DateFormat.new("dd.MM.yyyy");
    }
  });
  src__common__showtime_item__showtime_item_component.ShowtimeItemComponent = class ShowtimeItemComponent extends core$.Object {
    get messages() {
      return this[messages$0];
    }
    set messages(value) {
      super.messages = value;
    }
    get show() {
      return this[show$];
    }
    set show(value) {
      this[show$] = value;
    }
    openTickets(event) {
      html.window[$open](this.show.url, "Tickets for " + dart.str(this.show.title));
      event.stopImmediatePropagation();
    }
  };
  (src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new = function(messages) {
    this[show$] = null;
    this[messages$0] = messages;
  }).prototype = src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.prototype;
  dart.addTypeTests(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent);
  const messages$0 = Symbol("ShowtimeItemComponent.messages");
  const show$ = Symbol("ShowtimeItemComponent.show");
  dart.setMethodSignature(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, () => ({
    __proto__: dart.getMethods(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.__proto__),
    openTickets: dart.fnType(dart.void, [html.Event])
  }));
  dart.setFieldSignature(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, () => ({
    __proto__: dart.getFields(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    show: dart.fieldType(src__models__show.Show)
  }));
  src__event_details__actor_scroller__actor_image_component.ActorImageComponent = class ActorImageComponent extends core$.Object {
    get src() {
      return this[src$];
    }
    set src(value) {
      this[src$] = value;
    }
    get imageElement() {
      return this[imageElement];
    }
    set imageElement(value) {
      this[imageElement] = value;
    }
    ngOnInit() {
      this.imageElement[$addEventListener]("load", dart.fn(_ => this.imageElement[$classes].add("loaded"), EventTobool()));
    }
  };
  (src__event_details__actor_scroller__actor_image_component.ActorImageComponent.new = function() {
    this[src$] = null;
    this[imageElement] = null;
  }).prototype = src__event_details__actor_scroller__actor_image_component.ActorImageComponent.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_image_component.ActorImageComponent);
  const src$ = Symbol("ActorImageComponent.src");
  const imageElement = Symbol("ActorImageComponent.imageElement");
  src__event_details__actor_scroller__actor_image_component.ActorImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__event_details__actor_scroller__actor_image_component.ActorImageComponent, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_image_component.ActorImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_image_component.ActorImageComponent, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_image_component.ActorImageComponent.__proto__),
    src: dart.fieldType(core$.String),
    imageElement: dart.fieldType(html.ImageElement)
  }));
  src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent = class ActorScrollerComponent extends core$.Object {
    get actors() {
      return this[actors];
    }
    set actors(value) {
      this[actors] = value;
    }
  };
  (src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent.new = function() {
    this[actors] = null;
  }).prototype = src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent);
  const actors = Symbol("ActorScrollerComponent.actors");
  dart.setFieldSignature(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent.__proto__),
    actors: dart.fieldType(ListOfActor())
  }));
  const _triedWithSecondLandscapeUrl = dart.privateName(src__event_details__landscape_image__event_landscape_image_component, "_triedWithSecondLandscapeUrl");
  const _onLoad = dart.privateName(src__event_details__landscape_image__event_landscape_image_component, "_onLoad");
  const _onError = dart.privateName(src__event_details__landscape_image__event_landscape_image_component, "_onError");
  const _clearListeners = dart.privateName(src__event_details__landscape_image__event_landscape_image_component, "_clearListeners");
  src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent = class EventLandscapeImageComponent extends core$.Object {
    get event() {
      return this[event$0];
    }
    set event(value) {
      this[event$0] = value;
    }
    get imageElement() {
      return this[imageElement$];
    }
    set imageElement(value) {
      this[imageElement$] = value;
    }
    ngOnInit() {
      this.imageElement[$addEventListener]("load", dart.bind(this, _onLoad));
      this.imageElement[$addEventListener]("error", dart.bind(this, _onError));
    }
    ngOnDestroy() {
      return this[_clearListeners]();
    }
    [_onLoad](_) {
      this.imageElement[$classes].add("loaded");
      this[_clearListeners]();
    }
    [_onError](_) {
      if (dart.test(this[_triedWithSecondLandscapeUrl])) {
        this[_clearListeners]();
        return;
      }
      this.imageElement.src = this.event.images.landscapeHd2;
      this[_triedWithSecondLandscapeUrl] = true;
    }
    [_clearListeners]() {
      this.imageElement[$removeEventListener]("load", dart.bind(this, _onLoad));
      this.imageElement[$removeEventListener]("error", dart.bind(this, _onError));
    }
  };
  (src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.new = function() {
    this[event$0] = null;
    this[imageElement$] = null;
    this[_triedWithSecondLandscapeUrl] = false;
  }).prototype = src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.prototype;
  dart.addTypeTests(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent);
  const event$0 = Symbol("EventLandscapeImageComponent.event");
  const imageElement$ = Symbol("EventLandscapeImageComponent.imageElement");
  src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent, () => ({
    __proto__: dart.getMethods(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onLoad]: dart.fnType(dart.void, [html.Event]),
    [_onError]: dart.fnType(dart.void, [html.Event]),
    [_clearListeners]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent, () => ({
    __proto__: dart.getFields(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.__proto__),
    event: dart.fieldType(src__models__event.Event),
    imageElement: dart.fieldType(html.ImageElement),
    [_triedWithSecondLandscapeUrl]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__content_rating__content_rating_component$46css$46shim, {
    /*src__common__content_rating__content_rating_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%[size=small] img._ngcontent-%ID%{width:20px;height:20px}._nghost-%ID%[size=medium] img._ngcontent-%ID%{width:30px;height:30px}img._ngcontent-%ID%{width:20px;height:20px;vertical-align:middle;margin-right:6px}img:last-child._ngcontent-%ID%{margin-right:0}"];
    }
  });
  dart.defineLazy(src__common__content_rating__content_rating_component$46template, {
    /*src__common__content_rating__content_rating_component$46template.styles$ContentRatingComponent*/get styles$ContentRatingComponent() {
      return [src__common__content_rating__content_rating_component$46css$46shim.styles];
    }
  });
  const _appEl_2 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_appEl_2");
  const _NgFor_2_9 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_NgFor_2_9");
  const _expr_0 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_expr_0");
  const _expr_1 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_expr_1");
  const _expr_2 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_expr_2");
  const _el_0 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_el_0");
  src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0 = class ViewContentRatingComponent0 extends src__core__linker__app_view.AppView$(src__common__content_rating__content_rating_component.ContentRatingComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/content_rating/content_rating_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0]), "content-descriptor age");
      this.addShimE(this[_el_0]);
      let _text_1 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__common__content_rating__content_rating_component$46template.viewFactory_ContentRatingComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.contentDescriptors.iter;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_NgFor_2_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.ageRatingUrl;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = "The age rating for this movie is" + dart.notNull(_ctx.ageRating);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "alt", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0._componentStyles;
      if (styles == null) {
        src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0._componentStyles = styles = src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__content_rating__content_rating_component$46template.styles$ContentRatingComponent, src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("content-rating"));
  }).prototype = src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.prototype;
  dart.addTypeTests(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0);
  dart.setMethodSignature(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0, () => ({
    __proto__: dart.getMethods(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__content_rating__content_rating_component.ContentRatingComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0, () => ({
    __proto__: dart.getFields(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0, {
    /*src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__content_rating__content_rating_component$46template, {
    /*src__common__content_rating__content_rating_component$46template._ContentRatingComponentNgFactory*/get _ContentRatingComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfContentRatingComponent()).new("content-rating", dart.fn(src__common__content_rating__content_rating_component$46template.viewFactory_ContentRatingComponentHost0, AppViewAndintToAppViewOfContentRatingComponent())));
    }
  });
  dart.copyProperties(src__common__content_rating__content_rating_component$46template, {
    get ContentRatingComponentNgFactory() {
      return src__common__content_rating__content_rating_component$46template._ContentRatingComponentNgFactory;
    }
  });
  src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1 = class _ViewContentRatingComponent1 extends src__core__linker__app_view.AppView$(src__common__content_rating__content_rating_component.ContentRatingComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0]), "content-descriptor");
      this.addShimE(this[_el_0]);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let local_cd = src__runtime__optimizations.unsafeCast(src__models__content_descriptor.ContentDescriptor, this.locals[$_get]("$implicit"));
      let currVal_0 = local_cd.name;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "alt", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_cd.imageUrl;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
  };
  (src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.prototype;
  dart.addTypeTests(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1);
  dart.setMethodSignature(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1, () => ({
    __proto__: dart.getMethods(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__content_rating__content_rating_component.ContentRatingComponent), [])
  }));
  dart.setFieldSignature(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1, () => ({
    __proto__: dart.getFields(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  src__common__content_rating__content_rating_component$46template.viewFactory_ContentRatingComponent1 = function(parentView, parentIndex) {
    return new src__common__content_rating__content_rating_component$46template._ViewContentRatingComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__content_rating__content_rating_component$46template, {
    /*src__common__content_rating__content_rating_component$46template.styles$ContentRatingComponentHost*/get styles$ContentRatingComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_compView_0");
  const _ContentRatingComponent_0_5 = dart.privateName(src__common__content_rating__content_rating_component$46template, "_ContentRatingComponent_0_5");
  src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0 = class _ViewContentRatingComponentHost0 extends src__core__linker__app_view.AppView$(src__common__content_rating__content_rating_component.ContentRatingComponent) {
    build() {
      this[_compView_0] = new src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ContentRatingComponent_0_5] = new src__common__content_rating__content_rating_component.ContentRatingComponent.new();
      this[_compView_0].create(this[_ContentRatingComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfContentRatingComponent()).new(0, this, this.rootEl, this[_ContentRatingComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ContentRatingComponent_0_5] = null;
    src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.prototype;
  dart.addTypeTests(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0);
  dart.setMethodSignature(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__content_rating__content_rating_component.ContentRatingComponent), [])
  }));
  dart.setFieldSignature(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0, () => ({
    __proto__: dart.getFields(src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0),
    [_ContentRatingComponent_0_5]: dart.fieldType(src__common__content_rating__content_rating_component.ContentRatingComponent)
  }));
  src__common__content_rating__content_rating_component$46template.viewFactory_ContentRatingComponentHost0 = function(parentView, parentIndex) {
    return new src__common__content_rating__content_rating_component$46template._ViewContentRatingComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__content_rating__content_rating_component$46template, {
    /*src__common__content_rating__content_rating_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__content_rating__content_rating_component$46template.initReflector = function() {
    if (dart.test(src__common__content_rating__content_rating_component$46template._visited)) {
      return;
    }
    src__common__content_rating__content_rating_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__content_rating__content_rating_component.ContentRatingComponent), src__common__content_rating__content_rating_component$46template.ContentRatingComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__common__event_poster__lazy_image_component$46css$46shim, {
    /*src__common__event_poster__lazy_image_component$46css$46shim.styles*/get styles() {
      return ["img._ngcontent-%ID%{max-width:100%;max-height:100%;width:100%;opacity:0;transition:opacity 750ms ease}"];
    }
  });
  dart.defineLazy(src__common__event_poster__lazy_image_component$46template, {
    /*src__common__event_poster__lazy_image_component$46template.styles$LazyImageComponent*/get styles$LazyImageComponent() {
      return [src__common__event_poster__lazy_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$ = dart.privateName(src__common__event_poster__lazy_image_component$46template, "_expr_0");
  const _expr_1$ = dart.privateName(src__common__event_poster__lazy_image_component$46template, "_expr_1");
  const _el_0$ = dart.privateName(src__common__event_poster__lazy_image_component$46template, "_el_0");
  src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0 = class ViewLazyImageComponent0 extends src__core__linker__app_view.AppView$(src__common__event_poster__lazy_image_component.LazyImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/event_poster/lazy_image_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$]), "lazy");
      this.addShimE(this[_el_0$]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.src;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0$], "data-src", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = _ctx.alt;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$], "alt", currVal_1);
        this[_expr_1$] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles;
      if (styles == null) {
        src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = styles = src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__event_poster__lazy_image_component$46template.styles$LazyImageComponent, src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("lazy-img"));
  }).prototype = src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.prototype;
  dart.addTypeTests(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0);
  dart.setMethodSignature(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getMethods(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__lazy_image_component.LazyImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getFields(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0, {
    /*src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__event_poster__lazy_image_component$46template, {
    /*src__common__event_poster__lazy_image_component$46template._LazyImageComponentNgFactory*/get _LazyImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLazyImageComponent()).new("lazy-img", dart.fn(src__common__event_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0, AppViewAndintToAppViewOfLazyImageComponent())));
    }
  });
  dart.copyProperties(src__common__event_poster__lazy_image_component$46template, {
    get LazyImageComponentNgFactory() {
      return src__common__event_poster__lazy_image_component$46template._LazyImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__event_poster__lazy_image_component$46template, {
    /*src__common__event_poster__lazy_image_component$46template.styles$LazyImageComponentHost*/get styles$LazyImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = dart.privateName(src__common__event_poster__lazy_image_component$46template, "_compView_0");
  const _LazyImageComponent_0_5 = dart.privateName(src__common__event_poster__lazy_image_component$46template, "_LazyImageComponent_0_5");
  src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0 = class _ViewLazyImageComponentHost0 extends src__core__linker__app_view.AppView$(src__common__event_poster__lazy_image_component.LazyImageComponent) {
    build() {
      this[_compView_0$] = new src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_LazyImageComponent_0_5] = new src__common__event_poster__lazy_image_component.LazyImageComponent.new(this.rootEl);
      this[_compView_0$].create(this[_LazyImageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfLazyImageComponent()).new(0, this, this.rootEl, this[_LazyImageComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_LazyImageComponent_0_5] = null;
    src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.prototype;
  dart.addTypeTests(src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0);
  dart.setMethodSignature(src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__lazy_image_component.LazyImageComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getFields(src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5]: dart.fieldType(src__common__event_poster__lazy_image_component.LazyImageComponent)
  }));
  src__common__event_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0 = function(parentView, parentIndex) {
    return new src__common__event_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__event_poster__lazy_image_component$46template, {
    /*src__common__event_poster__lazy_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__event_poster__lazy_image_component$46template.initReflector = function() {
    if (dart.test(src__common__event_poster__lazy_image_component$46template._visited)) {
      return;
    }
    src__common__event_poster__lazy_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__event_poster__lazy_image_component.LazyImageComponent), src__common__event_poster__lazy_image_component$46template.LazyImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__common__event_poster__event_poster_component$46css$46shim, {
    /*src__common__event_poster__event_poster_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{position:relative}.fallback-icon._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:-1;background:linear-gradient(#424242,#222)}.fallback-icon._ngcontent-%ID% img._ngcontent-%ID%{display:block;width:70%}.event-information._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0) 30%,black);padding:1.2em}.event-information._ngcontent-%ID% strong._ngcontent-%ID%{font-weight:500;font-size:12pt;color:white}.event-information._ngcontent-%ID% p.genres._ngcontent-%ID%{margin-top:0.2em;font-size:10pt;color:rgba(255,255,255,0.7)}.event-information._ngcontent-%ID% content-rating._ngcontent-%ID%{margin-bottom:10px}.release-date-information._ngcontent-%ID%{position:absolute;top:10px;left:0;background:rgba(0,0,0,0.8);padding:5px 20px 5px 10px}.release-date-information._ngcontent-%ID% .label._ngcontent-%ID%{color:#FFBE00;font-size:12px;font-weight:bold}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{color:#FEFEFE;font-size:16px;font-weight:300;margin-top:2px}@media ONLY screen AND (min-width:768px){.release-date-information._ngcontent-%ID%{padding:10px 40px 10px 20px}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{font-size:20px}}"];
    }
  });
  dart.defineLazy(src__common__event_poster__event_poster_component$46template, {
    /*src__common__event_poster__event_poster_component$46template.styles$EventPosterComponent*/get styles$EventPosterComponent() {
      return [src__common__event_poster__event_poster_component$46css$46shim.styles];
    }
  });
  const _appEl_2$ = dart.privateName(src__common__event_poster__event_poster_component$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_NgIf_2_9");
  const _appEl_3 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_appEl_3");
  const _NgIf_3_9 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_NgIf_3_9");
  const _appEl_4 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_appEl_4");
  const _NgIf_4_9 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_NgIf_4_9");
  const _expr_0$0 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_expr_0");
  const _el_1 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_el_1");
  src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0 = class ViewEventPosterComponent0 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/event_poster/event_poster_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "fallback-icon");
      this.addShimC(_el_0);
      this[_el_1] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_1], "src", "images/fallback-icon.svg");
      this.addShimE(this[_el_1]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.event.hasMediumPortraitImage;
      this[_NgIf_3_9].ngIf = _ctx.hasDetails;
      this[_NgIf_4_9].ngIf = _ctx.isComingSoon;
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = "Fallback image for " + dart.notNull(_ctx.event.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_1], "alt", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0._componentStyles;
      if (styles == null) {
        src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0._componentStyles = styles = src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__event_poster__event_poster_component$46template.styles$EventPosterComponent, src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0$0] = null;
    this[_el_1] = null;
    src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("event-poster"));
  }).prototype = src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.__proto__),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0, {
    /*src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__event_poster__event_poster_component$46template, {
    /*src__common__event_poster__event_poster_component$46template._EventPosterComponentNgFactory*/get _EventPosterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfEventPosterComponent()).new("event-poster", dart.fn(src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponentHost0, AppViewAndintToAppViewOfEventPosterComponent())));
    }
  });
  dart.copyProperties(src__common__event_poster__event_poster_component$46template, {
    get EventPosterComponentNgFactory() {
      return src__common__event_poster__event_poster_component$46template._EventPosterComponentNgFactory;
    }
  });
  const _compView_0$0 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_compView_0");
  const _LazyImageComponent_0_5$ = dart.privateName(src__common__event_poster__event_poster_component$46template, "_LazyImageComponent_0_5");
  const _expr_1$0 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_expr_1");
  src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1 = class _ViewEventPosterComponent1 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    build() {
      this[_compView_0$0] = new src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this.addShimC(_el_0);
      this[_LazyImageComponent_0_5$] = new src__common__event_poster__lazy_image_component.LazyImageComponent.new(_el_0);
      this[_compView_0$0].create0(this[_LazyImageComponent_0_5$]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.event.images.portraitMedium;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_LazyImageComponent_0_5$].src = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = "Poster for " + dart.notNull(_ctx.event.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        this[_LazyImageComponent_0_5$].alt = currVal_1;
        this[_expr_1$0] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5$].ngOnInit();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_LazyImageComponent_0_5$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(src__common__event_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5$]: dart.fieldType(src__common__event_poster__lazy_image_component.LazyImageComponent),
    [_expr_0$0]: dart.fieldType(core$.String),
    [_expr_1$0]: dart.fieldType(core$.String)
  }));
  src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent1 = function(parentView, parentIndex) {
    return new src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent1.new(parentView, parentIndex);
  };
  const _textBinding_4 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_textBinding_4");
  const _textBinding_6 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_textBinding_6");
  const _appEl_1 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_NgIf_1_9");
  src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2 = class _ViewEventPosterComponent2 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "event-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.addShimE(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, _el_2, "strong");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4].element);
      let _el_5 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_5), "genres");
      this.addShimE(_el_5);
      _el_5[$append](this[_textBinding_6].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.event.contentDescriptors.isNotEmpty();
      this[_appEl_1].detectChangesInNestedViews();
      this[_textBinding_4].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.title));
      this[_textBinding_6].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.genres));
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_6] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.__proto__),
    [_textBinding_4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_6]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent2 = function(parentView, parentIndex) {
    return new src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent2.new(parentView, parentIndex);
  };
  const _ContentRatingComponent_0_5$ = dart.privateName(src__common__event_poster__event_poster_component$46template, "_ContentRatingComponent_0_5");
  src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3 = class _ViewEventPosterComponent3 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    build() {
      this[_compView_0$0] = new src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      src__runtime__dom_helpers.setAttribute(_el_0, "size", "medium");
      this.addShimC(_el_0);
      this[_ContentRatingComponent_0_5$] = new src__common__content_rating__content_rating_component.ContentRatingComponent.new();
      this[_compView_0$0].create0(this[_ContentRatingComponent_0_5$]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.event;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_ContentRatingComponent_0_5$].event = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_ContentRatingComponent_0_5$] = null;
    this[_expr_0$0] = null;
    src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.__proto__),
    [_compView_0$0]: dart.fieldType(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0),
    [_ContentRatingComponent_0_5$]: dart.fieldType(src__common__content_rating__content_rating_component.ContentRatingComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent3 = function(parentView, parentIndex) {
    return new src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent3.new(parentView, parentIndex);
  };
  const _textBinding_2 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_textBinding_2");
  src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4 = class _ViewEventPosterComponent4 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "release-date-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_1), "label");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_3), "date");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.releaseDate));
      this[_textBinding_4].updateText(src__runtime__interpolate.interpolateString0(_ctx.releaseDate));
    }
  };
  (src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4] = new src__runtime__text_binding.TextBinding.new();
    src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.__proto__),
    [_textBinding_2]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponent4 = function(parentView, parentIndex) {
    return new src__common__event_poster__event_poster_component$46template._ViewEventPosterComponent4.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__event_poster__event_poster_component$46template, {
    /*src__common__event_poster__event_poster_component$46template.styles$EventPosterComponentHost*/get styles$EventPosterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _EventPosterComponent_0_5 = dart.privateName(src__common__event_poster__event_poster_component$46template, "_EventPosterComponent_0_5");
  src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0 = class _ViewEventPosterComponentHost0 extends src__core__linker__app_view.AppView$(src__common__event_poster__event_poster_component.EventPosterComponent) {
    build() {
      this[_compView_0$0] = new src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_EventPosterComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__event_poster__event_poster_component.EventPosterComponent, dart.wrapType(src__common__event_poster__event_poster_component.EventPosterComponent), dart.fn(() => new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToEventPosterComponent())) : new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$0].create(this[_EventPosterComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfEventPosterComponent()).new(0, this, this.rootEl, this[_EventPosterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_EventPosterComponent_0_5] = null;
    src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.prototype;
  dart.addTypeTests(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0);
  dart.setMethodSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__event_poster__event_poster_component.EventPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0, () => ({
    __proto__: dart.getFields(src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0),
    [_EventPosterComponent_0_5]: dart.fieldType(src__common__event_poster__event_poster_component.EventPosterComponent)
  }));
  src__common__event_poster__event_poster_component$46template.viewFactory_EventPosterComponentHost0 = function(parentView, parentIndex) {
    return new src__common__event_poster__event_poster_component$46template._ViewEventPosterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__event_poster__event_poster_component$46template, {
    /*src__common__event_poster__event_poster_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__event_poster__event_poster_component$46template.initReflector = function() {
    if (dart.test(src__common__event_poster__event_poster_component$46template._visited)) {
      return;
    }
    src__common__event_poster__event_poster_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__event_poster__event_poster_component.EventPosterComponent), src__common__event_poster__event_poster_component$46template.EventPosterComponentNgFactory);
    angular$46template.initReflector();
    src__common__content_rating__content_rating_component$46template.initReflector();
    src__common__event_poster__lazy_image_component$46template.initReflector();
  };
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46css$46shim, {
    /*src__common__showtime_item__showtime_item_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;margin-top:1px;cursor:pointer;padding:16px;color:#FEFEFE;position:relative;justify-content:space-between;align-items:stretch;background:rgba(15,23,53,0.85)}._nghost-%ID%[full-opacity]{background:#0f1735}.left._ngcontent-%ID%{display:flex;align-items:center}.show-info._ngcontent-%ID%{padding-left:12px;border-left:1px solid rgba(255,255,255,0.4)}.details._ngcontent-%ID%{margin-top:4px;color:#717DAD;font-size:14px;font-weight:500}.presentation-info._ngcontent-%ID%{margin-top:4px}.presentation-method._ngcontent-%ID%{display:inline-block;background:#1D326B;color:#FEFEFE;font-size:12px;font-weight:bold;padding:2px 10px;margin-right:8px;border-radius:10px}.show-time._ngcontent-%ID%{padding-right:12px}.show-time._ngcontent-%ID% .start._ngcontent-%ID%{text-align:center;font-size:18px;font-weight:100}.show-time._ngcontent-%ID% .end._ngcontent-%ID%{text-align:center;margin-top:4px;color:#717DAD;font-size:14px;font-weight:500}.title._ngcontent-%ID%{font-size:14px;font-weight:500}.buy-tickets-button._ngcontent-%ID%{cursor:pointer;display:flex;flex-direction:column;justify-content:center;padding:0 16px}@media ONLY screen AND (min-width:768px){._nghost-%ID%{margin-top:15px;padding:20px 30px}.show-info._ngcontent-%ID%{padding-left:25px}.details._ngcontent-%ID%{display:flex;margin-top:8px;font-size:20px;font-weight:300}.presentation-info._ngcontent-%ID%{margin-top:-1px;margin-left:12px}.presentation-method._ngcontent-%ID%{font-size:15px;font-weight:600}.show-time._ngcontent-%ID%{padding-right:25px}.show-time._ngcontent-%ID% .start._ngcontent-%ID%{font-size:30px;line-height:35px;letter-spacing:2px}.show-time._ngcontent-%ID% .end._ngcontent-%ID%{margin-top:8px;font-size:20px;font-weight:500;line-height:24px}.title._ngcontent-%ID%{font-size:30px;font-weight:100;line-height:35px;letter-spacing:2px}.buy-tickets-button._ngcontent-%ID% svg._ngcontent-%ID%{width:32px;height:32px}}"];
    }
  });
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46template, {
    /*src__common__showtime_item__showtime_item_component$46template.styles$ShowtimeItemComponent*/get styles$ShowtimeItemComponent() {
      return [src__common__showtime_item__showtime_item_component$46css$46shim.styles];
    }
  });
  const _textBinding_3 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_textBinding_3");
  const _textBinding_5 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_textBinding_5");
  const _textBinding_8 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_textBinding_8");
  const _textBinding_11 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_textBinding_11");
  const _textBinding_14 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_textBinding_14");
  const _compView_15 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_compView_15");
  const _ContentRatingComponent_15_5 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_ContentRatingComponent_15_5");
  const _expr_0$1 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_expr_0");
  const _pipe_date_0 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_pipe_date_0");
  const _pipe_date_0_0 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_pipe_date_0_0");
  const _pipe_date_0_1 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_pipe_date_0_1");
  src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0 = class ViewShowtimeItemComponent0 extends src__core__linker__app_view.AppView$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/showtime_item/showtime_item_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "left");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "show-time");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "p");
      this.updateChildClass(html.HtmlElement._check(_el_2), "start");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      let _el_4 = src__runtime__dom_helpers.appendElement(doc, _el_1, "p");
      this.updateChildClass(html.HtmlElement._check(_el_4), "end");
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5].element);
      let _el_6 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_6, "show-info");
      this.addShimC(_el_6);
      let _el_7 = src__runtime__dom_helpers.appendElement(doc, _el_6, "p");
      this.updateChildClass(html.HtmlElement._check(_el_7), "title");
      this.addShimE(_el_7);
      _el_7[$append](this[_textBinding_8].element);
      let _el_9 = src__runtime__dom_helpers.appendDiv(doc, _el_6);
      this.updateChildClass(_el_9, "details");
      this.addShimC(_el_9);
      let _el_10 = src__runtime__dom_helpers.appendElement(doc, _el_9, "p");
      this.updateChildClass(html.HtmlElement._check(_el_10), "theater-and-auditorium");
      this.addShimE(_el_10);
      _el_10[$append](this[_textBinding_11].element);
      let _el_12 = src__runtime__dom_helpers.appendElement(doc, _el_9, "p");
      this.updateChildClass(html.HtmlElement._check(_el_12), "presentation-info");
      this.addShimE(_el_12);
      let _el_13 = src__runtime__dom_helpers.appendSpan(doc, _el_12);
      this.updateChildClass(_el_13, "presentation-method");
      this.addShimE(_el_13);
      _el_13[$append](this[_textBinding_14].element);
      this[_compView_15] = new src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.new(this, 15);
      let _el_15 = this[_compView_15].rootEl;
      _el_12[$append](_el_15);
      this.addShimC(_el_15);
      this[_ContentRatingComponent_15_5] = new src__common__content_rating__content_rating_component.ContentRatingComponent.new();
      this[_compView_15].create0(this[_ContentRatingComponent_15_5]);
      let _el_16 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_16, "buy-tickets-button");
      this.addShimC(_el_16);
      let _el_17 = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      _el_16[$append](_el_17);
      src__runtime__dom_helpers.setAttribute(_el_17, "height", "24");
      src__runtime__dom_helpers.setAttribute(_el_17, "viewBox", "0 0 24 24");
      src__runtime__dom_helpers.setAttribute(_el_17, "width", "24");
      src__runtime__dom_helpers.setAttribute(_el_17, "xmlns", "http://www.w3.org/2000/svg");
      this.addShimE(_el_17);
      let _el_18 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_17[$append](_el_18);
      src__runtime__dom_helpers.setAttribute(_el_18, "d", "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z");
      src__runtime__dom_helpers.setAttribute(_el_18, "fill", "#FFAD32");
      this.addShimE(_el_18);
      let _el_19 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_17[$append](_el_19);
      src__runtime__dom_helpers.setAttribute(_el_19, "d", "M0 0h24v24H0z");
      src__runtime__dom_helpers.setAttribute(_el_19, "fill", "none");
      this.addShimE(_el_19);
      _el_16[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'openTickets')));
      this[_pipe_date_0] = new src__common__pipes__date_pipe.DatePipe.new();
      this[_pipe_date_0_0] = src__runtime__proxies.pureProxy2(core$.String, dart.dynamic, core$.String, dart.bind(this[_pipe_date_0], 'transform'));
      this[_pipe_date_0_1] = src__runtime__proxies.pureProxy2(core$.String, dart.dynamic, core$.String, dart.bind(this[_pipe_date_0], 'transform'));
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.show;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
        this[_ContentRatingComponent_15_5].show = currVal_0;
        this[_expr_0$1] = currVal_0;
      }
      this[_textBinding_3].updateText(core$.String._check(src__runtime__interpolate.interpolate0(this[_pipe_date_0_0](_ctx.show.start, "HH:mm"))));
      this[_textBinding_5].updateText(core$.String._check(src__runtime__interpolate.interpolate0(this[_pipe_date_0_1](_ctx.show.end, "HH:mm"))));
      this[_textBinding_8].updateText(src__runtime__interpolate.interpolateString0(_ctx.show.title));
      this[_textBinding_11].updateText(src__runtime__interpolate.interpolateString0(_ctx.show.theaterAndAuditorium));
      this[_textBinding_14].updateText(src__runtime__interpolate.interpolateString0(_ctx.show.presentationMethod));
      this[_compView_15].detectChanges();
    }
    destroyInternal() {
      this[_compView_15].destroyInternalState();
    }
    initComponentStyles() {
      let styles = src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0._componentStyles;
      if (styles == null) {
        src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0._componentStyles = styles = src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__showtime_item__showtime_item_component$46template.styles$ShowtimeItemComponent, src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_5] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_8] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_11] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_14] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_15] = null;
    this[_ContentRatingComponent_15_5] = null;
    this[_expr_0$1] = null;
    this[_pipe_date_0] = null;
    this[_pipe_date_0_0] = null;
    this[_pipe_date_0_1] = null;
    src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("showtime-item"));
  }).prototype = src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.prototype;
  dart.addTypeTests(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0);
  dart.setMethodSignature(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0, () => ({
    __proto__: dart.getMethods(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0, () => ({
    __proto__: dart.getFields(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.__proto__),
    [_textBinding_3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_5]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_8]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_11]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_14]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_15]: dart.fieldType(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0),
    [_ContentRatingComponent_15_5]: dart.fieldType(src__common__content_rating__content_rating_component.ContentRatingComponent),
    [_expr_0$1]: dart.fieldType(dart.dynamic),
    [_pipe_date_0]: dart.fieldType(src__common__pipes__date_pipe.DatePipe),
    [_pipe_date_0_0]: dart.fieldType(dynamicAndStringToString()),
    [_pipe_date_0_1]: dart.fieldType(dynamicAndStringToString())
  }));
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0, {
    /*src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46template, {
    /*src__common__showtime_item__showtime_item_component$46template._ShowtimeItemComponentNgFactory*/get _ShowtimeItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfShowtimeItemComponent()).new("showtime-item", dart.fn(src__common__showtime_item__showtime_item_component$46template.viewFactory_ShowtimeItemComponentHost0, AppViewAndintToAppViewOfShowtimeItemComponent())));
    }
  });
  dart.copyProperties(src__common__showtime_item__showtime_item_component$46template, {
    get ShowtimeItemComponentNgFactory() {
      return src__common__showtime_item__showtime_item_component$46template._ShowtimeItemComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46template, {
    /*src__common__showtime_item__showtime_item_component$46template.styles$ShowtimeItemComponentHost*/get styles$ShowtimeItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$1 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_compView_0");
  const _ShowtimeItemComponent_0_5 = dart.privateName(src__common__showtime_item__showtime_item_component$46template, "_ShowtimeItemComponent_0_5");
  src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0 = class _ViewShowtimeItemComponentHost0 extends src__core__linker__app_view.AppView$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent) {
    build() {
      this[_compView_0$1] = new src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_ShowtimeItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, dart.wrapType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), dart.fn(() => new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToShowtimeItemComponent())) : new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$1].create(this[_ShowtimeItemComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfShowtimeItemComponent()).new(0, this, this.rootEl, this[_ShowtimeItemComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_ShowtimeItemComponent_0_5] = null;
    src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.prototype;
  dart.addTypeTests(src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0);
  dart.setMethodSignature(src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), [])
  }));
  dart.setFieldSignature(src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0, () => ({
    __proto__: dart.getFields(src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0),
    [_ShowtimeItemComponent_0_5]: dart.fieldType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent)
  }));
  src__common__showtime_item__showtime_item_component$46template.viewFactory_ShowtimeItemComponentHost0 = function(parentView, parentIndex) {
    return new src__common__showtime_item__showtime_item_component$46template._ViewShowtimeItemComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__showtime_item__showtime_item_component$46template, {
    /*src__common__showtime_item__showtime_item_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__showtime_item__showtime_item_component$46template.initReflector = function() {
    if (dart.test(src__common__showtime_item__showtime_item_component$46template._visited)) {
      return;
    }
    src__common__showtime_item__showtime_item_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), src__common__showtime_item__showtime_item_component$46template.ShowtimeItemComponentNgFactory);
    angular$46template.initReflector();
    src__common__content_rating__content_rating_component$46template.initReflector();
  };
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46css$46shim, {
    /*src__event_details__actor_scroller__actor_image_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;background:#1C306D;border-radius:50%;width:60px;height:60px}img._ngcontent-%ID%{position:absolute;border-radius:50%;object-fit:cover}img.placeholder._ngcontent-%ID%{z-index:1;width:32px;height:32px;top:13px;left:13px}img.actual._ngcontent-%ID%{z-index:2;width:60px;height:60px;opacity:0;transition:opacity 250ms ease}img.actual.loaded._ngcontent-%ID%{opacity:1}"];
    }
  });
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46template, {
    /*src__event_details__actor_scroller__actor_image_component$46template.styles$ActorImageComponent*/get styles$ActorImageComponent() {
      return [src__event_details__actor_scroller__actor_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$2 = dart.privateName(src__event_details__actor_scroller__actor_image_component$46template, "_expr_0");
  const _el_3 = dart.privateName(src__event_details__actor_scroller__actor_image_component$46template, "_el_3");
  src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0 = class ViewActorImageComponent0 extends src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/event_details/actor_scroller/actor_image_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      this.updateChildClass(html.HtmlElement._check(_el_1), "placeholder");
      src__runtime__dom_helpers.setAttribute(_el_1, "src", "images/profile.svg");
      this.addShimE(_el_1);
      let _text_2 = src__runtime__dom_helpers.appendText(_el_0, " ");
      this[_el_3] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_3]), "actual");
      this.addShimE(this[_el_3]);
      _ctx.imageElement = html.ImageElement._check(this[_el_3]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.src;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$2], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_3], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$2] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0._componentStyles;
      if (styles == null) {
        src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0._componentStyles = styles = src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__event_details__actor_scroller__actor_image_component$46template.styles$ActorImageComponent, src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$2] = null;
    this[_el_3] = null;
    src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("actor-img"));
  }).prototype = src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0);
  dart.setMethodSignature(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.__proto__),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0, {
    /*src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46template, {
    /*src__event_details__actor_scroller__actor_image_component$46template._ActorImageComponentNgFactory*/get _ActorImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfActorImageComponent()).new("actor-img", dart.fn(src__event_details__actor_scroller__actor_image_component$46template.viewFactory_ActorImageComponentHost0, AppViewAndintToAppViewOfActorImageComponent())));
    }
  });
  dart.copyProperties(src__event_details__actor_scroller__actor_image_component$46template, {
    get ActorImageComponentNgFactory() {
      return src__event_details__actor_scroller__actor_image_component$46template._ActorImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46template, {
    /*src__event_details__actor_scroller__actor_image_component$46template.styles$ActorImageComponentHost*/get styles$ActorImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$2 = dart.privateName(src__event_details__actor_scroller__actor_image_component$46template, "_compView_0");
  const _ActorImageComponent_0_5 = dart.privateName(src__event_details__actor_scroller__actor_image_component$46template, "_ActorImageComponent_0_5");
  src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0 = class _ViewActorImageComponentHost0 extends src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent) {
    build() {
      this[_compView_0$2] = new src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_ActorImageComponent_0_5] = new src__event_details__actor_scroller__actor_image_component.ActorImageComponent.new();
      this[_compView_0$2].create(this[_ActorImageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfActorImageComponent()).new(0, this, this.rootEl, this[_ActorImageComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ActorImageComponent_0_5].ngOnInit();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
  };
  (src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_ActorImageComponent_0_5] = null;
    src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0);
  dart.setMethodSignature(src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_image_component.ActorImageComponent), [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0),
    [_ActorImageComponent_0_5]: dart.fieldType(src__event_details__actor_scroller__actor_image_component.ActorImageComponent)
  }));
  src__event_details__actor_scroller__actor_image_component$46template.viewFactory_ActorImageComponentHost0 = function(parentView, parentIndex) {
    return new src__event_details__actor_scroller__actor_image_component$46template._ViewActorImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__actor_scroller__actor_image_component$46template, {
    /*src__event_details__actor_scroller__actor_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__event_details__actor_scroller__actor_image_component$46template.initReflector = function() {
    if (dart.test(src__event_details__actor_scroller__actor_image_component$46template._visited)) {
      return;
    }
    src__event_details__actor_scroller__actor_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__event_details__actor_scroller__actor_image_component.ActorImageComponent), src__event_details__actor_scroller__actor_image_component$46template.ActorImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46css$46shim, {
    /*src__event_details__actor_scroller__actor_scroller_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;padding-left:20px}@media ONLY screen AND (min-width:1024px){._nghost-%ID%{padding-left:0}}._nghost-%ID% div._ngcontent-%ID%{margin-right:20px;max-width:60px}._nghost-%ID% div:last-child._ngcontent-%ID%{margin-right:0}._nghost-%ID% div._ngcontent-%ID% p._ngcontent-%ID%{color:#1D1D1B;font-size:12px;margin-top:10px;line-height:14px;text-align:center}"];
    }
  });
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46template, {
    /*src__event_details__actor_scroller__actor_scroller_component$46template.styles$ActorScrollerComponent*/get styles$ActorScrollerComponent() {
      return [src__event_details__actor_scroller__actor_scroller_component$46css$46shim.styles];
    }
  });
  const _appEl_0 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_appEl_0");
  const _NgFor_0_9 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_NgFor_0_9");
  const _expr_0$3 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_expr_0");
  src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0 = class ViewActorScrollerComponent0 extends src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/event_details/actor_scroller/actor_scroller_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(src__event_details__actor_scroller__actor_scroller_component$46template.viewFactory_ActorScrollerComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.actors;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$3], currVal_0))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$3] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0._componentStyles;
      if (styles == null) {
        src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0._componentStyles = styles = src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__event_details__actor_scroller__actor_scroller_component$46template.styles$ActorScrollerComponent, src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$3] = null;
    src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("actor-scroller"));
  }).prototype = src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0);
  dart.setMethodSignature(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0, {
    /*src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46template, {
    /*src__event_details__actor_scroller__actor_scroller_component$46template._ActorScrollerComponentNgFactory*/get _ActorScrollerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfActorScrollerComponent()).new("actor-scroller", dart.fn(src__event_details__actor_scroller__actor_scroller_component$46template.viewFactory_ActorScrollerComponentHost0, AppViewAndintToAppViewOfActorScrollerComponent())));
    }
  });
  dart.copyProperties(src__event_details__actor_scroller__actor_scroller_component$46template, {
    get ActorScrollerComponentNgFactory() {
      return src__event_details__actor_scroller__actor_scroller_component$46template._ActorScrollerComponentNgFactory;
    }
  });
  const _textBinding_3$ = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_textBinding_3");
  const _compView_1 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_compView_1");
  const _ActorImageComponent_1_5 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_ActorImageComponent_1_5");
  const _expr_1$1 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_expr_1");
  const _el_1$ = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_el_1");
  src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1 = class _ViewActorScrollerComponent1 extends src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1] = new src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0.new(this, 1);
      this[_el_1$] = this[_compView_1].rootEl;
      _el_0[$append](this[_el_1$]);
      this.addShimC(html.HtmlElement._check(this[_el_1$]));
      this[_ActorImageComponent_1_5] = new src__event_details__actor_scroller__actor_image_component.ActorImageComponent.new();
      this[_compView_1].create0(this[_ActorImageComponent_1_5]);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_actor = src__runtime__optimizations.unsafeCast(src__models__actor.Actor, this.locals[$_get]("$implicit"));
      let currVal_1 = local_actor.avatarUrl;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
        this[_ActorImageComponent_1_5].src = currVal_1;
        this[_expr_1$1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ActorImageComponent_1_5].ngOnInit();
      }
      let currVal_0 = "Photo for " + dart.notNull(local_actor.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$3], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_1$], "alt", currVal_0);
        this[_expr_0$3] = currVal_0;
      }
      this[_textBinding_3$].updateText(src__runtime__interpolate.interpolateString0(local_actor.name));
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_3$] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_1] = null;
    this[_ActorImageComponent_1_5] = null;
    this[_expr_0$3] = null;
    this[_expr_1$1] = null;
    this[_el_1$] = null;
    src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1);
  dart.setMethodSignature(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent), [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.__proto__),
    [_textBinding_3$]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_1]: dart.fieldType(src__event_details__actor_scroller__actor_image_component$46template.ViewActorImageComponent0),
    [_ActorImageComponent_1_5]: dart.fieldType(src__event_details__actor_scroller__actor_image_component.ActorImageComponent),
    [_expr_0$3]: dart.fieldType(dart.dynamic),
    [_expr_1$1]: dart.fieldType(core$.String),
    [_el_1$]: dart.fieldType(html.Element)
  }));
  src__event_details__actor_scroller__actor_scroller_component$46template.viewFactory_ActorScrollerComponent1 = function(parentView, parentIndex) {
    return new src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46template, {
    /*src__event_details__actor_scroller__actor_scroller_component$46template.styles$ActorScrollerComponentHost*/get styles$ActorScrollerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$3 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_compView_0");
  const _ActorScrollerComponent_0_5 = dart.privateName(src__event_details__actor_scroller__actor_scroller_component$46template, "_ActorScrollerComponent_0_5");
  src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0 = class _ViewActorScrollerComponentHost0 extends src__core__linker__app_view.AppView$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent) {
    build() {
      this[_compView_0$3] = new src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.new(this, 0);
      this.rootEl = this[_compView_0$3].rootEl;
      this[_ActorScrollerComponent_0_5] = new src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent.new();
      this[_compView_0$3].create(this[_ActorScrollerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfActorScrollerComponent()).new(0, this, this.rootEl, this[_ActorScrollerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroyInternalState();
    }
  };
  (src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$3] = null;
    this[_ActorScrollerComponent_0_5] = null;
    src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.prototype;
  dart.addTypeTests(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0);
  dart.setMethodSignature(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0, () => ({
    __proto__: dart.getMethods(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent), [])
  }));
  dart.setFieldSignature(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0, () => ({
    __proto__: dart.getFields(src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.__proto__),
    [_compView_0$3]: dart.fieldType(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0),
    [_ActorScrollerComponent_0_5]: dart.fieldType(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent)
  }));
  src__event_details__actor_scroller__actor_scroller_component$46template.viewFactory_ActorScrollerComponentHost0 = function(parentView, parentIndex) {
    return new src__event_details__actor_scroller__actor_scroller_component$46template._ViewActorScrollerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__actor_scroller__actor_scroller_component$46template, {
    /*src__event_details__actor_scroller__actor_scroller_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__event_details__actor_scroller__actor_scroller_component$46template.initReflector = function() {
    if (dart.test(src__event_details__actor_scroller__actor_scroller_component$46template._visited)) {
      return;
    }
    src__event_details__actor_scroller__actor_scroller_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent), src__event_details__actor_scroller__actor_scroller_component$46template.ActorScrollerComponentNgFactory);
    angular$46template.initReflector();
    src__event_details__actor_scroller__actor_image_component$46template.initReflector();
  };
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46css$46shim, {
    /*src__event_details__landscape_image__event_landscape_image_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;width:100%;height:225px;background:linear-gradient(to top,#222,#424242)}.placeholder._ngcontent-%ID%{position:absolute;width:100%;height:225px;display:flex;align-items:center;justify-content:center;z-index:1}.placeholder._ngcontent-%ID% img._ngcontent-%ID%{width:128px;height:128px}.actual._ngcontent-%ID%{position:absolute;object-fit:cover;z-index:2;width:100%;height:225px;opacity:0;transition:opacity 750ms ease}.actual.loaded._ngcontent-%ID%{opacity:1}@media ONLY screen AND (min-width:1024px){.container._ngcontent-%ID%,.placeholder._ngcontent-%ID%,.actual._ngcontent-%ID%{height:450px}}"];
    }
  });
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46template, {
    /*src__event_details__landscape_image__event_landscape_image_component$46template.styles$EventLandscapeImageComponent*/get styles$EventLandscapeImageComponent() {
      return [src__event_details__landscape_image__event_landscape_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$4 = dart.privateName(src__event_details__landscape_image__event_landscape_image_component$46template, "_expr_0");
  const _el_3$ = dart.privateName(src__event_details__landscape_image__event_landscape_image_component$46template, "_el_3");
  src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0 = class ViewEventLandscapeImageComponent0 extends src__core__linker__app_view.AppView$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/event_details/landscape_image/event_landscape_image_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "placeholder");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/fallback-icon.svg");
      this.addShimE(_el_2);
      this[_el_3$] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_3$]), "actual");
      this.addShimE(this[_el_3$]);
      _ctx.imageElement = html.ImageElement._check(this[_el_3$]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.event.images.landscapeHd;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$4], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_3$], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$4] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0._componentStyles;
      if (styles == null) {
        src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0._componentStyles = styles = src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__event_details__landscape_image__event_landscape_image_component$46template.styles$EventLandscapeImageComponent, src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$4] = null;
    this[_el_3$] = null;
    src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("event-landscape-image"));
  }).prototype = src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.prototype;
  dart.addTypeTests(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0);
  dart.setMethodSignature(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0, () => ({
    __proto__: dart.getMethods(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0, () => ({
    __proto__: dart.getFields(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.__proto__),
    [_expr_0$4]: dart.fieldType(dart.dynamic),
    [_el_3$]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0, {
    /*src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46template, {
    /*src__event_details__landscape_image__event_landscape_image_component$46template._EventLandscapeImageComponentNgFactory*/get _EventLandscapeImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfEventLandscapeImageComponent()).new("event-landscape-image", dart.fn(src__event_details__landscape_image__event_landscape_image_component$46template.viewFactory_EventLandscapeImageComponentHost0, AppViewAndintToAppViewOfEventLandscapeImageComponent())));
    }
  });
  dart.copyProperties(src__event_details__landscape_image__event_landscape_image_component$46template, {
    get EventLandscapeImageComponentNgFactory() {
      return src__event_details__landscape_image__event_landscape_image_component$46template._EventLandscapeImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46template, {
    /*src__event_details__landscape_image__event_landscape_image_component$46template.styles$EventLandscapeImageComponentHost*/get styles$EventLandscapeImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$4 = dart.privateName(src__event_details__landscape_image__event_landscape_image_component$46template, "_compView_0");
  const _EventLandscapeImageComponent_0_5 = dart.privateName(src__event_details__landscape_image__event_landscape_image_component$46template, "_EventLandscapeImageComponent_0_5");
  src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0 = class _ViewEventLandscapeImageComponentHost0 extends src__core__linker__app_view.AppView$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent) {
    build() {
      this[_compView_0$4] = new src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$4].rootEl;
      this[_EventLandscapeImageComponent_0_5] = new src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.new();
      this[_compView_0$4].create(this[_EventLandscapeImageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfEventLandscapeImageComponent()).new(0, this, this.rootEl, this[_EventLandscapeImageComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_EventLandscapeImageComponent_0_5].ngOnInit();
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
      this[_EventLandscapeImageComponent_0_5].ngOnDestroy();
    }
  };
  (src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_EventLandscapeImageComponent_0_5] = null;
    src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.prototype;
  dart.addTypeTests(src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0);
  dart.setMethodSignature(src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent), [])
  }));
  dart.setFieldSignature(src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0, () => ({
    __proto__: dart.getFields(src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.__proto__),
    [_compView_0$4]: dart.fieldType(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0),
    [_EventLandscapeImageComponent_0_5]: dart.fieldType(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent)
  }));
  src__event_details__landscape_image__event_landscape_image_component$46template.viewFactory_EventLandscapeImageComponentHost0 = function(parentView, parentIndex) {
    return new src__event_details__landscape_image__event_landscape_image_component$46template._ViewEventLandscapeImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__landscape_image__event_landscape_image_component$46template, {
    /*src__event_details__landscape_image__event_landscape_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__event_details__landscape_image__event_landscape_image_component$46template.initReflector = function() {
    if (dart.test(src__event_details__landscape_image__event_landscape_image_component$46template._visited)) {
      return;
    }
    src__event_details__landscape_image__event_landscape_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent), src__event_details__landscape_image__event_landscape_image_component$46template.EventLandscapeImageComponentNgFactory);
    angular$46template.initReflector();
  };
  src__common__loading_view__spinner_component.SpinnerComponent = class SpinnerComponent extends core$.Object {};
  (src__common__loading_view__spinner_component.SpinnerComponent.new = function() {
  }).prototype = src__common__loading_view__spinner_component.SpinnerComponent.prototype;
  dart.addTypeTests(src__common__loading_view__spinner_component.SpinnerComponent);
  const _status = dart.privateName(src__common__loading_view__loading_view_component, "_status");
  const _tryAgainController = dart.privateName(src__common__loading_view__loading_view_component, "_tryAgainController");
  const _clearOutInvisibleContent = dart.privateName(src__common__loading_view__loading_view_component, "_clearOutInvisibleContent");
  let const$0;
  src__common__loading_view__loading_view_component.LoadingViewComponent = class LoadingViewComponent extends core$.Object {
    get messages() {
      return this[messages$1];
    }
    set messages(value) {
      super.messages = value;
    }
    get contentEmpty() {
      return this[contentEmpty];
    }
    set contentEmpty(value) {
      this[contentEmpty] = value;
    }
    get errorTitle() {
      return this[errorTitle];
    }
    set errorTitle(value) {
      this[errorTitle] = value;
    }
    get errorMessage() {
      return this[errorMessage];
    }
    set errorMessage(value) {
      this[errorMessage] = value;
    }
    get emptyTitle() {
      return dart.test(this.contentEmpty) ? this.messages.allEmpty : null;
    }
    get emptyMessage() {
      return dart.test(this.contentEmpty) ? this.messages.noMoviesForToday : null;
    }
    get actionButtonClicked() {
      return this[_tryAgainController].stream;
    }
    set status(status) {
      this[_clearOutInvisibleContent] = false;
      this[_status] = status;
      async.Timer.new(const$0 || (const$0 = dart.const(new core$.Duration.new({milliseconds: 450}))), dart.fn(() => this[_clearOutInvisibleContent] = true, VoidTobool()));
    }
    get loadingContentVisible() {
      return this[_status] === src__models__loading_status.LoadingStatus.loading;
    }
    get loadingContentPresent() {
      return dart.test(this.loadingContentVisible) || !dart.test(this[_clearOutInvisibleContent]);
    }
    get successContentVisible() {
      return this[_status] === src__models__loading_status.LoadingStatus.success;
    }
    get successContentPresent() {
      return dart.test(this.successContentVisible) || !dart.test(this[_clearOutInvisibleContent]);
    }
    get errorContentVisible() {
      return this[_status] === src__models__loading_status.LoadingStatus.error || this[_status] !== src__models__loading_status.LoadingStatus.loading && dart.test(this.contentEmpty);
    }
    get errorContentPresent() {
      return dart.test(this.errorContentVisible) || !dart.test(this[_clearOutInvisibleContent]);
    }
    onTryAgainClicked(event) {
      event.preventDefault();
      this[_tryAgainController].add(null);
    }
    ngOnDestroy() {
      return this[_tryAgainController].close();
    }
  };
  (src__common__loading_view__loading_view_component.LoadingViewComponent.new = function(messages) {
    this[_status] = null;
    this[contentEmpty] = false;
    this[errorTitle] = null;
    this[errorMessage] = null;
    this[_tryAgainController] = async.StreamController.new();
    this[_clearOutInvisibleContent] = false;
    this[messages$1] = messages;
  }).prototype = src__common__loading_view__loading_view_component.LoadingViewComponent.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component.LoadingViewComponent);
  const messages$1 = Symbol("LoadingViewComponent.messages");
  const contentEmpty = Symbol("LoadingViewComponent.contentEmpty");
  const errorTitle = Symbol("LoadingViewComponent.errorTitle");
  const errorMessage = Symbol("LoadingViewComponent.errorMessage");
  src__common__loading_view__loading_view_component.LoadingViewComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__common__loading_view__loading_view_component.LoadingViewComponent, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component.LoadingViewComponent.__proto__),
    onTryAgainClicked: dart.fnType(dart.void, [html.Event]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__common__loading_view__loading_view_component.LoadingViewComponent, () => ({
    __proto__: dart.getGetters(src__common__loading_view__loading_view_component.LoadingViewComponent.__proto__),
    emptyTitle: core$.String,
    emptyMessage: core$.String,
    actionButtonClicked: async.Stream,
    loadingContentVisible: core$.bool,
    loadingContentPresent: core$.bool,
    successContentVisible: core$.bool,
    successContentPresent: core$.bool,
    errorContentVisible: core$.bool,
    errorContentPresent: core$.bool
  }));
  dart.setSetterSignature(src__common__loading_view__loading_view_component.LoadingViewComponent, () => ({
    __proto__: dart.getSetters(src__common__loading_view__loading_view_component.LoadingViewComponent.__proto__),
    status: src__models__loading_status.LoadingStatus
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component.LoadingViewComponent, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component.LoadingViewComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    [_status]: dart.fieldType(src__models__loading_status.LoadingStatus),
    contentEmpty: dart.fieldType(core$.bool),
    errorTitle: dart.fieldType(core$.String),
    errorMessage: dart.fieldType(core$.String),
    [_tryAgainController]: dart.finalFieldType(async.StreamController),
    [_clearOutInvisibleContent]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim.styles*/get styles() {
      return [".focus-trap._ngcontent-%ID%{display:none;z-index:2000;position:fixed;top:0;right:0;bottom:0;left:0}.focus-trap.visible._ngcontent-%ID%{display:block}.menu._ngcontent-%ID%{z-index:2001;position:relative;width:100%;opacity:0;height:0;background:transparent;overflow-y:scroll;-webkit-overflow-scrolling:touch;transition:height 250ms ease,opacity 250ms ease}.menu.opened._ngcontent-%ID%{opacity:1;height:100%}.item._ngcontent-%ID%{position:relative;cursor:pointer;padding:16px;background:transparent;font-size:16px;color:rgba(255,255,255,0.56);user-select:none}.item.selected._ngcontent-%ID%{background:rgba(0,0,0,0.54);color:white}.item:hover._ngcontent-%ID%{background:rgba(0,0,0,0.2);color:rgba(255,255,255,0.8)}"];
    }
  });
  dart.defineLazy(src__common__theater_selector__theater_dropdown_controller$46template, {
    /*src__common__theater_selector__theater_dropdown_controller$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__theater_selector__theater_dropdown_controller$46template.initReflector = function() {
    if (dart.test(src__common__theater_selector__theater_dropdown_controller$46template._visited)) {
      return;
    }
    src__common__theater_selector__theater_dropdown_controller$46template._visited = true;
    angular$46template.initReflector();
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template.initReflector();
  };
  const _store = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component, "_store");
  const _viewModel = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component, "_viewModel");
  src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent = class TheaterSelectorDropdownMenuComponent extends core$.Object {
    get controller() {
      return this[controller];
    }
    set controller(value) {
      this[controller] = value;
    }
    get background() {
      return this[background];
    }
    set background(value) {
      this[background] = value;
    }
    get [_viewModel]() {
      return src__viewmodels__theater_list_view_model.TheaterListViewModel.fromStore(this[_store]);
    }
    get selectedTheater() {
      return this[_viewModel].currentTheater;
    }
    get theaters() {
      return this[_viewModel].theaters.list;
    }
    get focusTrapVisible() {
      return this.isOpen;
    }
    get isOpen() {
      return this[isOpen];
    }
    set isOpen(value) {
      this[isOpen] = value;
    }
    onTheaterClicked(newTheater) {
      this[_viewModel].changeCurrentTheater(newTheater);
      this.controller.hideAndDestroy();
    }
    hideAndDestroy() {
      return this.controller.hideAndDestroy();
    }
  };
  (src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.new = function(store) {
    this[controller] = null;
    this[background] = null;
    this[isOpen] = false;
    this[_store] = store;
  }).prototype = src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent);
  const controller = Symbol("TheaterSelectorDropdownMenuComponent.controller");
  const background = Symbol("TheaterSelectorDropdownMenuComponent.background");
  const isOpen = Symbol("TheaterSelectorDropdownMenuComponent.isOpen");
  dart.setMethodSignature(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.__proto__),
    onTheaterClicked: dart.fnType(dart.void, [src__models__theater.Theater]),
    hideAndDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, () => ({
    __proto__: dart.getGetters(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.__proto__),
    [_viewModel]: src__viewmodels__theater_list_view_model.TheaterListViewModel,
    selectedTheater: src__models__theater.Theater,
    theaters: core$.List$(src__models__theater.Theater),
    focusTrapVisible: core$.bool
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.__proto__),
    [_store]: dart.finalFieldType(StoreOfAppState()),
    controller: dart.fieldType(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController),
    background: dart.fieldType(core$.String),
    isOpen: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46template.styles$TheaterSelectorDropdownMenuComponent*/get styles$TheaterSelectorDropdownMenuComponent() {
      return [src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim.styles];
    }
  });
  const _appEl_2$0 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_appEl_2");
  const _NgFor_2_9$ = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_NgFor_2_9");
  const _expr_0$5 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_expr_0");
  const _expr_1$2 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_expr_1");
  const _expr_2$ = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_expr_2");
  const _expr_3 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_expr_3");
  const _el_0$0 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_el_0");
  const _el_1$0 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_el_1");
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0 = class ViewTheaterSelectorDropdownMenuComponent0 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/theater_selector/theater_selector_dropdown_menu_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0$0], "focus-trap");
      this.addShimC(this[_el_0$0]);
      this[_el_1$0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1$0], "menu");
      this.addShimC(this[_el_1$0]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_1$0]);
      this[_appEl_2$0] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.viewFactory_TheaterSelectorDropdownMenuComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_2_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2$0], _TemplateRef_2_8);
      this[_el_0$0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'hideAndDestroy')));
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_3 = _ctx.theaters;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NgFor_2_9$].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9$].ngDoCheck();
      }
      this[_appEl_2$0].detectChangesInNestedViews();
      let currVal_0 = _ctx.focusTrapVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$5], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$0], "visible", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      let currVal_1 = _ctx.isOpen;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1$0], "opened", currVal_1);
        this[_expr_1$2] = currVal_1;
      }
      let currVal_2 = _ctx.background;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_el_1$0].style[$setProperty]("background", currVal_2);
        this[_expr_2$] = currVal_2;
      }
    }
    destroyInternal() {
      this[_appEl_2$0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0._componentStyles;
      if (styles == null) {
        src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0._componentStyles = styles = src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.styles$TheaterSelectorDropdownMenuComponent, src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2$0] = null;
    this[_NgFor_2_9$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_expr_2$] = null;
    this[_expr_3] = null;
    this[_el_0$0] = null;
    this[_el_1$0] = null;
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("theater-selector-dropdown-menu"));
  }).prototype = src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.__proto__),
    [_appEl_2$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$5]: dart.fieldType(core$.bool),
    [_expr_1$2]: dart.fieldType(core$.bool),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0$0]: dart.fieldType(html.DivElement),
    [_el_1$0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46template._TheaterSelectorDropdownMenuComponentNgFactory*/get _TheaterSelectorDropdownMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTheaterSelectorDropdownMenuComponent()).new("theater-selector-dropdown-menu", dart.fn(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.viewFactory_TheaterSelectorDropdownMenuComponentHost0, AppViewAndintToAppViewOfTheaterSelectorDropdownMenuComponent())));
    }
  });
  dart.copyProperties(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, {
    get TheaterSelectorDropdownMenuComponentNgFactory() {
      return src__common__theater_selector__theater_selector_dropdown_menu_component$46template._TheaterSelectorDropdownMenuComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_textBinding_1");
  const _handle_click_0_0 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_handle_click_0_0");
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1 = class _ViewTheaterSelectorDropdownMenuComponent1 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent) {
    build() {
      let doc = html.document;
      this[_el_0$0] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$0], "item");
      this.addShimC(this[_el_0$0]);
      this[_el_0$0][$append](this[_textBinding_1].element);
      this[_el_0$0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init1(this[_el_0$0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_theater = src__runtime__optimizations.unsafeCast(src__models__theater.Theater, this.locals[$_get]("$implicit"));
      let currVal_0 = dart.equals(local_theater, _ctx.selectedTheater);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$5], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$0], "selected", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_theater.name));
    }
    [_handle_click_0_0]($event) {
      let local_theater = src__runtime__optimizations.unsafeCast(src__models__theater.Theater, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onTheaterClicked(local_theater);
    }
  };
  (src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_expr_0$5] = null;
    this[_el_0$0] = null;
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent), []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_expr_0$5]: dart.fieldType(core$.bool),
    [_el_0$0]: dart.fieldType(html.DivElement)
  }));
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template.viewFactory_TheaterSelectorDropdownMenuComponent1 = function(parentView, parentIndex) {
    return new src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46template.styles$TheaterSelectorDropdownMenuComponentHost*/get styles$TheaterSelectorDropdownMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$5 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_compView_0");
  const _TheaterSelectorDropdownMenuComponent_0_5 = dart.privateName(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, "_TheaterSelectorDropdownMenuComponent_0_5");
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0 = class _ViewTheaterSelectorDropdownMenuComponentHost0 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent) {
    build() {
      this[_compView_0$5] = new src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0$5].rootEl;
      this[_TheaterSelectorDropdownMenuComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, dart.wrapType(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent), dart.fn(() => new src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex))), VoidToTheaterSelectorDropdownMenuComponent())) : new src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)));
      this[_compView_0$5].create(this[_TheaterSelectorDropdownMenuComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfTheaterSelectorDropdownMenuComponent()).new(0, this, this.rootEl, this[_TheaterSelectorDropdownMenuComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroyInternalState();
    }
  };
  (src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$5] = null;
    this[_TheaterSelectorDropdownMenuComponent_0_5] = null;
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent), [])
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.__proto__),
    [_compView_0$5]: dart.fieldType(src__common__theater_selector__theater_selector_dropdown_menu_component$46template.ViewTheaterSelectorDropdownMenuComponent0),
    [_TheaterSelectorDropdownMenuComponent_0_5]: dart.fieldType(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent)
  }));
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template.viewFactory_TheaterSelectorDropdownMenuComponentHost0 = function(parentView, parentIndex) {
    return new src__common__theater_selector__theater_selector_dropdown_menu_component$46template._ViewTheaterSelectorDropdownMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__theater_selector__theater_selector_dropdown_menu_component$46template, {
    /*src__common__theater_selector__theater_selector_dropdown_menu_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__theater_selector__theater_selector_dropdown_menu_component$46template.initReflector = function() {
    if (dart.test(src__common__theater_selector__theater_selector_dropdown_menu_component$46template._visited)) {
      return;
    }
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent), src__common__theater_selector__theater_selector_dropdown_menu_component$46template.TheaterSelectorDropdownMenuComponentNgFactory);
    angular$46template.initReflector();
    src__common__theater_selector__theater_dropdown_controller$46template.initReflector();
  };
  const _menu = dart.privateName(src__common__theater_selector__theater_dropdown_controller, "_menu");
  const _menuAnimation = dart.privateName(src__common__theater_selector__theater_dropdown_controller, "_menuAnimation");
  let const$1;
  src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController = class TheaterDropdownController extends core$.Object {
    get isDestroyed() {
      return this[_menu] == null;
    }
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
    static loadAndShow(loader, container, opts) {
      let background = opts && 'background' in opts ? opts.background : "rgba(26, 26, 26, 0.9)";
      return async.async(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController, function* loadAndShow() {
        let menu = (yield loader.loadNextToLocation(src__common__theater_selector__theater_selector_dropdown_menu_component.TheaterSelectorDropdownMenuComponent, src__common__theater_selector__theater_selector_dropdown_menu_component$46template.TheaterSelectorDropdownMenuComponentNgFactory, container));
        let controller = new src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.__(menu);
        let _ = menu.instance;
        _.controller = controller;
        _.background = background;
        controller.visible = true;
        controller[_menuAnimation]({visible: true});
        return controller;
      });
    }
    hideAndDestroy() {
      this.visible = false;
      this[_menuAnimation]({visible: false, afterAnimation: dart.fn(() => {
          this[_menu].destroy();
          this[_menu] = null;
        }, VoidToNull())});
    }
    [_menuAnimation](opts) {
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let afterAnimation = opts && 'afterAnimation' in opts ? opts.afterAnimation : null;
      async.Timer.new(const$1 || (const$1 = dart.const(new core$.Duration.new({milliseconds: 25}))), dart.fn(() => {
        let t = this[_menu];
        let l = t == null ? null : t.instance;
        return l == null ? null : dart.dput(l, 'isOpen', visible);
      }, VoidTobool()));
      if (afterAnimation != null) {
        async.Timer.new(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.animationDuration, afterAnimation);
      }
    }
  };
  (src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.__ = function(menu) {
    this[visible] = false;
    this[_menu] = menu;
  }).prototype = src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController);
  const visible = Symbol("TheaterDropdownController.visible");
  dart.setMethodSignature(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.__proto__),
    hideAndDestroy: dart.fnType(dart.void, []),
    [_menuAnimation]: dart.fnType(dart.void, [], {visible: core$.bool, afterAnimation: dart.fnType(dart.void, [])})
  }));
  dart.setGetterSignature(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController, () => ({
    __proto__: dart.getGetters(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.__proto__),
    isDestroyed: core$.bool
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.__proto__),
    [_menu]: dart.fieldType(src__core__linker__component_factory.ComponentRef),
    visible: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController, {
    /*src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.animationDuration*/get animationDuration() {
      return dart.const(new core$.Duration.new({milliseconds: 250}));
    }
  });
  const _store$ = dart.privateName(src__common__theater_selector__theater_selector_component, "_store");
  const _loader = dart.privateName(src__common__theater_selector__theater_selector_component, "_loader");
  const _menuController = dart.privateName(src__common__theater_selector__theater_selector_component, "_menuController");
  const _viewModel$ = dart.privateName(src__common__theater_selector__theater_selector_component, "_viewModel");
  src__common__theater_selector__theater_selector_component.TheaterSelectorComponent = class TheaterSelectorComponent extends core$.Object {
    get [_viewModel$]() {
      return src__viewmodels__theater_list_view_model.TheaterListViewModel.fromStore(this[_store$]);
    }
    get currentTheater() {
      return this[_viewModel$].currentTheater;
    }
    get menuContainer() {
      return this[menuContainer];
    }
    set menuContainer(value) {
      this[menuContainer] = value;
    }
    get theaterDropdownVisible() {
      return this[_menuController] != null && this[_menuController].isDestroyed === false;
    }
    toggleMenu() {
      return async.async(dart.dynamic, (function* toggleMenu() {
        if (!dart.test(this.theaterDropdownVisible)) {
          this[_menuController] = (yield src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.loadAndShow(this[_loader], this.menuContainer));
        } else {
          this.hideMenu();
        }
      }).bind(this));
    }
    hideMenu() {
      this[_menuController].hideAndDestroy();
      this[_menuController] = null;
    }
  };
  (src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new = function(store, loader) {
    this[menuContainer] = null;
    this[_menuController] = null;
    this[_store$] = store;
    this[_loader] = loader;
  }).prototype = src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent);
  const menuContainer = Symbol("TheaterSelectorComponent.menuContainer");
  dart.setMethodSignature(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.__proto__),
    toggleMenu: dart.fnType(dart.void, []),
    hideMenu: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, () => ({
    __proto__: dart.getGetters(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.__proto__),
    [_viewModel$]: src__viewmodels__theater_list_view_model.TheaterListViewModel,
    currentTheater: src__models__theater.Theater,
    theaterDropdownVisible: core$.bool
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.__proto__),
    [_store$]: dart.finalFieldType(StoreOfAppState()),
    [_loader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    menuContainer: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_menuController]: dart.fieldType(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController)
  }));
  src__restore_scroll_position.storeCurrentScrollPosition = function() {
    return html.window.sessionStorage[$_set]("scrollY", dart.toString(html.window[$scrollY]));
  };
  src__restore_scroll_position.restoreScrollPositionIfNeeded = function(previous, restoreWhenComingFrom) {
    let shouldRestoreScrollPosition = (() => {
      let t = previous == null ? null : previous.routePath;
      return t == null ? null : t.path;
    })() == restoreWhenComingFrom.path;
    if (shouldRestoreScrollPosition) {
      async.Timer.new(core$.Duration.zero, dart.fn(() => {
        html.window[$scrollTo](0, core$.int.tryParse((() => {
          let l = html.window.sessionStorage[$_get]("scrollY");
          return l != null ? l : "0";
        })()));
      }, VoidToNull()));
    } else {
      html.window[$scrollTo](0, 0);
    }
  };
  dart.defineLazy(src__restore_scroll_position$46template, {
    /*src__restore_scroll_position$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__restore_scroll_position$46template.initReflector = function() {
    if (dart.test(src__restore_scroll_position$46template._visited)) {
      return;
    }
    src__restore_scroll_position$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.defineLazy(src__common__loading_view__spinner_component$46css$46shim, {
    /*src__common__loading_view__spinner_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{display:inline-block;position:absolute;width:64px;height:64px;top:50%;left:50%;margin-top:-32px;margin-left:-32px}.container._ngcontent-%ID% div._ngcontent-%ID%{animation:lds-roller 1.2s cubic-bezier(0.5,0,0.5,1) infinite;transform-origin:32px 32px}.container._ngcontent-%ID% div._ngcontent-%ID%:after{content:\" \";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#fff;margin:-3px 0 0 -3px}.container._ngcontent-%ID% div:nth-child(1)._ngcontent-%ID%{animation-delay:-36ms}.container._ngcontent-%ID% div:nth-child(1)._ngcontent-%ID%:after{top:50px;left:50px}.container._ngcontent-%ID% div:nth-child(2)._ngcontent-%ID%{animation-delay:-72ms}.container._ngcontent-%ID% div:nth-child(2)._ngcontent-%ID%:after{top:54px;left:45px}.container._ngcontent-%ID% div:nth-child(3)._ngcontent-%ID%{animation-delay:-108ms}.container._ngcontent-%ID% div:nth-child(3)._ngcontent-%ID%:after{top:57px;left:39px}.container._ngcontent-%ID% div:nth-child(4)._ngcontent-%ID%{animation-delay:-144ms}.container._ngcontent-%ID% div:nth-child(4)._ngcontent-%ID%:after{top:58px;left:32px}.container._ngcontent-%ID% div:nth-child(5)._ngcontent-%ID%{animation-delay:-0.18s}.container._ngcontent-%ID% div:nth-child(5)._ngcontent-%ID%:after{top:57px;left:25px}.container._ngcontent-%ID% div:nth-child(6)._ngcontent-%ID%{animation-delay:-216ms}.container._ngcontent-%ID% div:nth-child(6)._ngcontent-%ID%:after{top:54px;left:19px}.container._ngcontent-%ID% div:nth-child(7)._ngcontent-%ID%{animation-delay:-252ms}.container._ngcontent-%ID% div:nth-child(7)._ngcontent-%ID%:after{top:50px;left:14px}.container._ngcontent-%ID% div:nth-child(8)._ngcontent-%ID%{animation-delay:-288ms}.container._ngcontent-%ID% div:nth-child(8)._ngcontent-%ID%:after{top:45px;left:10px}@keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"];
    }
  });
  dart.defineLazy(src__common__loading_view__spinner_component$46template, {
    /*src__common__loading_view__spinner_component$46template.styles$SpinnerComponent*/get styles$SpinnerComponent() {
      return [src__common__loading_view__spinner_component$46css$46shim.styles];
    }
  });
  src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0 = class ViewSpinnerComponent0 extends src__core__linker__app_view.AppView$(src__common__loading_view__spinner_component.SpinnerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/loading_view/spinner_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_3);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_4);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_5);
      let _el_6 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_6);
      let _el_7 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_7);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_8);
      this.init0();
    }
    initComponentStyles() {
      let styles = src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0._componentStyles;
      if (styles == null) {
        src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0._componentStyles = styles = src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__loading_view__spinner_component$46template.styles$SpinnerComponent, src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.new = function(parentView, parentIndex) {
    src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("spinner"));
  }).prototype = src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.prototype;
  dart.addTypeTests(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0);
  dart.setMethodSignature(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0, () => ({
    __proto__: dart.getMethods(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__spinner_component.SpinnerComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.defineLazy(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0, {
    /*src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__loading_view__spinner_component$46template, {
    /*src__common__loading_view__spinner_component$46template._SpinnerComponentNgFactory*/get _SpinnerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSpinnerComponent()).new("spinner", dart.fn(src__common__loading_view__spinner_component$46template.viewFactory_SpinnerComponentHost0, AppViewAndintToAppViewOfSpinnerComponent())));
    }
  });
  dart.copyProperties(src__common__loading_view__spinner_component$46template, {
    get SpinnerComponentNgFactory() {
      return src__common__loading_view__spinner_component$46template._SpinnerComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__loading_view__spinner_component$46template, {
    /*src__common__loading_view__spinner_component$46template.styles$SpinnerComponentHost*/get styles$SpinnerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$6 = dart.privateName(src__common__loading_view__spinner_component$46template, "_compView_0");
  const _SpinnerComponent_0_5 = dart.privateName(src__common__loading_view__spinner_component$46template, "_SpinnerComponent_0_5");
  src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0 = class _ViewSpinnerComponentHost0 extends src__core__linker__app_view.AppView$(src__common__loading_view__spinner_component.SpinnerComponent) {
    build() {
      this[_compView_0$6] = new src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.new(this, 0);
      this.rootEl = this[_compView_0$6].rootEl;
      this[_SpinnerComponent_0_5] = new src__common__loading_view__spinner_component.SpinnerComponent.new();
      this[_compView_0$6].create(this[_SpinnerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfSpinnerComponent()).new(0, this, this.rootEl, this[_SpinnerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$6].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$6].destroyInternalState();
    }
  };
  (src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$6] = null;
    this[_SpinnerComponent_0_5] = null;
    src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.prototype;
  dart.addTypeTests(src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0);
  dart.setMethodSignature(src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__spinner_component.SpinnerComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0, () => ({
    __proto__: dart.getFields(src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.__proto__),
    [_compView_0$6]: dart.fieldType(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0),
    [_SpinnerComponent_0_5]: dart.fieldType(src__common__loading_view__spinner_component.SpinnerComponent)
  }));
  src__common__loading_view__spinner_component$46template.viewFactory_SpinnerComponentHost0 = function(parentView, parentIndex) {
    return new src__common__loading_view__spinner_component$46template._ViewSpinnerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__loading_view__spinner_component$46template, {
    /*src__common__loading_view__spinner_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__loading_view__spinner_component$46template.initReflector = function() {
    if (dart.test(src__common__loading_view__spinner_component$46template._visited)) {
      return;
    }
    src__common__loading_view__spinner_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__loading_view__spinner_component.SpinnerComponent), src__common__loading_view__spinner_component$46template.SpinnerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__common__loading_view__loading_view_component$46css$46shim, {
    /*src__common__loading_view__loading_view_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;height:100vh}.loading-content._ngcontent-%ID%{position:absolute;width:100%;height:75%;transition:opacity 150ms ease}.loading-content.visible._ngcontent-%ID%{opacity:1}.error-content._ngcontent-%ID%{position:absolute;width:100%;height:75%;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity 450ms ease}.error-content.visible._ngcontent-%ID%{opacity:1}.success-content._ngcontent-%ID%{position:absolute;width:100%;height:100%;opacity:0;transition:opacity 450ms ease}.success-content.visible._ngcontent-%ID%{opacity:1}.icon._ngcontent-%ID%{border-radius:50px;background:rgba(255,255,255,0.12)}.icon._ngcontent-%ID% img._ngcontent-%ID%{display:block;width:96px;height:96px}.title._ngcontent-%ID%{margin-top:16px;max-width:350px;text-align:center;font-size:24px;color:white}.message._ngcontent-%ID%{margin-top:8px;max-width:250px;text-align:center;color:rgba(255,255,255,0.7)}.try-again._ngcontent-%ID%{margin-top:12px;color:white;padding:8px;text-decoration:none;font-weight:600;user-select:none}"];
    }
  });
  dart.defineLazy(src__common__loading_view__loading_view_component$46template, {
    /*src__common__loading_view__loading_view_component$46template.styles$LoadingViewComponent*/get styles$LoadingViewComponent() {
      return [src__common__loading_view__loading_view_component$46css$46shim.styles];
    }
  });
  const _appEl_1$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_appEl_1");
  const _NgIf_1_9$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_NgIf_1_9");
  const _appEl_2$1 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_appEl_2");
  const _NgIf_2_9$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_NgIf_2_9");
  const _appEl_3$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_appEl_3");
  const _NgIf_3_9$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_NgIf_3_9");
  src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0 = class ViewLoadingViewComponent0 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/loading_view/loading_view_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_2$1] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9$].ngIf = _ctx.loadingContentPresent;
      this[_NgIf_2_9$].ngIf = _ctx.successContentPresent;
      this[_NgIf_3_9$].ngIf = _ctx.errorContentPresent;
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$1].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_2$1].destroyNestedViews();
      this[_appEl_3$].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0._componentStyles;
      if (styles == null) {
        src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0._componentStyles = styles = src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__loading_view__loading_view_component$46template.styles$LoadingViewComponent, src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$1] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("loading-view"));
  }).prototype = src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.__proto__),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0, {
    /*src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__loading_view__loading_view_component$46template, {
    /*src__common__loading_view__loading_view_component$46template._LoadingViewComponentNgFactory*/get _LoadingViewComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLoadingViewComponent()).new("loading-view", dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponentHost0, AppViewAndintToAppViewOfLoadingViewComponent())));
    }
  });
  dart.copyProperties(src__common__loading_view__loading_view_component$46template, {
    get LoadingViewComponentNgFactory() {
      return src__common__loading_view__loading_view_component$46template._LoadingViewComponentNgFactory;
    }
  });
  const _compView_1$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_compView_1");
  const _SpinnerComponent_1_5 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_SpinnerComponent_1_5");
  const _expr_0$6 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_expr_0");
  const _el_0$1 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_el_0");
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1 = class _ViewLoadingViewComponent1 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      let doc = html.document;
      this[_el_0$1] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$1], "loading-content");
      this.addShimC(this[_el_0$1]);
      this[_compView_1$] = new src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootEl;
      this[_el_0$1][$append](_el_1);
      this.addShimC(_el_1);
      this[_SpinnerComponent_1_5] = new src__common__loading_view__spinner_component.SpinnerComponent.new();
      this[_compView_1$].create0(this[_SpinnerComponent_1_5]);
      this.init1(this[_el_0$1]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.loadingContentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$6], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$1], "visible", currVal_0);
        this[_expr_0$6] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_SpinnerComponent_1_5] = null;
    this[_expr_0$6] = null;
    this[_el_0$1] = null;
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.__proto__),
    [_compView_1$]: dart.fieldType(src__common__loading_view__spinner_component$46template.ViewSpinnerComponent0),
    [_SpinnerComponent_1_5]: dart.fieldType(src__common__loading_view__spinner_component.SpinnerComponent),
    [_expr_0$6]: dart.fieldType(core$.bool),
    [_el_0$1]: dart.fieldType(html.DivElement)
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent1 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent1.new(parentView, parentIndex);
  };
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2 = class _ViewLoadingViewComponent2 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      let doc = html.document;
      this[_el_0$1] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$1], "success-content");
      this.addShimC(this[_el_0$1]);
      this.project(this[_el_0$1], 0);
      this.init1(this[_el_0$1]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.successContentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$6], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$1], "visible", currVal_0);
        this[_expr_0$6] = currVal_0;
      }
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.new = function(parentView, parentIndex) {
    this[_expr_0$6] = null;
    this[_el_0$1] = null;
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.__proto__),
    [_expr_0$6]: dart.fieldType(core$.bool),
    [_el_0$1]: dart.fieldType(html.DivElement)
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent2 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent2.new(parentView, parentIndex);
  };
  const _textBinding_4$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_textBinding_4");
  const _textBinding_6$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_textBinding_6");
  const _appEl_9 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_appEl_9");
  const _NgIf_9_9 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_NgIf_9_9");
  const _appEl_10 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_NgIf_10_9");
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3 = class _ViewLoadingViewComponent3 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      let doc = html.document;
      this[_el_0$1] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$1], "error-content");
      this.addShimC(this[_el_0$1]);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$1]);
      this.updateChildClass(_el_1, "icon");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/info.svg");
      this.addShimE(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$1], "h2");
      this.updateChildClass(html.HtmlElement._check(_el_3), "title");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$].element);
      let _el_5 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$1], "p");
      this.updateChildClass(html.HtmlElement._check(_el_5), "message");
      this.addShimE(_el_5);
      _el_5[$append](this[_textBinding_6$].element);
      let _el_7 = src__runtime__dom_helpers.appendElement(doc, _el_5, "br");
      this.addShimE(_el_7);
      let _text_8 = src__runtime__dom_helpers.appendText(_el_5, " ");
      let _anchor_9 = src__runtime__dom_helpers.appendAnchor(_el_5);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 5, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_0$1]);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 0, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this.init1(this[_el_0$1]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_9_9].ngIf = !dart.test(_ctx.contentEmpty);
      this[_NgIf_10_9].ngIf = !dart.test(_ctx.contentEmpty);
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      let currVal_0 = _ctx.errorContentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$6], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$1], "visible", currVal_0);
        this[_expr_0$6] = currVal_0;
      }
      this[_textBinding_4$].updateText(core$.String._check(src__runtime__interpolate.interpolate0((() => {
        let l = _ctx.emptyTitle;
        return l != null ? l : (() => {
          let l = _ctx.errorTitle;
          return l != null ? l : _ctx.messages.oops;
        })();
      })())));
      this[_textBinding_6$].updateText(core$.String._check(src__runtime__interpolate.interpolate0((() => {
        let l = _ctx.emptyMessage;
        return l != null ? l : (() => {
          let l = _ctx.errorMessage;
          return l != null ? l : _ctx.messages.loadingMoviesError;
        })();
      })())));
    }
    destroyInternal() {
      this[_appEl_9].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_4$] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_6$] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_expr_0$6] = null;
    this[_el_0$1] = null;
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.__proto__),
    [_textBinding_4$]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_6$]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$6]: dart.fieldType(core$.bool),
    [_el_0$1]: dart.fieldType(html.DivElement)
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent3 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent3.new(parentView, parentIndex);
  };
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4 = class _ViewLoadingViewComponent4 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("small");
      this.addShimE(_el_0);
      let _text_1 = src__runtime__dom_helpers.appendText(_el_0, "(this might be caused by your ad blocker)");
      this.init1(_el_0);
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4.new = function(parentView, parentIndex) {
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent4 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent4.new(parentView, parentIndex);
  };
  const _textBinding_1$ = dart.privateName(src__common__loading_view__loading_view_component$46template, "_textBinding_1");
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5 = class _ViewLoadingViewComponent5 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("a");
      this.updateChildClass(html.HtmlElement._check(_el_0), "try-again");
      src__runtime__dom_helpers.setAttribute(_el_0, "href", "#");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1$].element);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onTryAgainClicked')));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1$].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.tryAgain));
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1$] = new src__runtime__text_binding.TextBinding.new();
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.__proto__),
    [_textBinding_1$]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponent5 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__loading_view__loading_view_component$46template, {
    /*src__common__loading_view__loading_view_component$46template.styles$LoadingViewComponentHost*/get styles$LoadingViewComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$7 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_compView_0");
  const _LoadingViewComponent_0_5 = dart.privateName(src__common__loading_view__loading_view_component$46template, "_LoadingViewComponent_0_5");
  src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0 = class _ViewLoadingViewComponentHost0 extends src__core__linker__app_view.AppView$(src__common__loading_view__loading_view_component.LoadingViewComponent) {
    build() {
      this[_compView_0$7] = new src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new(this, 0);
      this.rootEl = this[_compView_0$7].rootEl;
      this[_LoadingViewComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__loading_view__loading_view_component.LoadingViewComponent, dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), dart.fn(() => new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToLoadingViewComponent())) : new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$7].create(this[_LoadingViewComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfLoadingViewComponent()).new(0, this, this.rootEl, this[_LoadingViewComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$7].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$7].destroyInternalState();
      this[_LoadingViewComponent_0_5].ngOnDestroy();
    }
  };
  (src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$7] = null;
    this[_LoadingViewComponent_0_5] = null;
    src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.prototype;
  dart.addTypeTests(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0);
  dart.setMethodSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__loading_view__loading_view_component.LoadingViewComponent), [])
  }));
  dart.setFieldSignature(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0, () => ({
    __proto__: dart.getFields(src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.__proto__),
    [_compView_0$7]: dart.fieldType(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0),
    [_LoadingViewComponent_0_5]: dart.fieldType(src__common__loading_view__loading_view_component.LoadingViewComponent)
  }));
  src__common__loading_view__loading_view_component$46template.viewFactory_LoadingViewComponentHost0 = function(parentView, parentIndex) {
    return new src__common__loading_view__loading_view_component$46template._ViewLoadingViewComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__loading_view__loading_view_component$46template, {
    /*src__common__loading_view__loading_view_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__loading_view__loading_view_component$46template.initReflector = function() {
    if (dart.test(src__common__loading_view__loading_view_component$46template._visited)) {
      return;
    }
    src__common__loading_view__loading_view_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), src__common__loading_view__loading_view_component$46template.LoadingViewComponentNgFactory);
    angular$46template.initReflector();
    src__common__loading_view__spinner_component$46template.initReflector();
  };
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46css$46shim, {
    /*src__common__theater_selector__theater_selector_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{position:relative;z-index:2001}.button._ngcontent-%ID%{position:relative;width:100%;height:36px;display:flex;align-items:center;justify-content:space-between;border:1px solid #717DAD;border-radius:5px;padding:6px;user-select:none;cursor:pointer}.button._ngcontent-%ID% img._ngcontent-%ID%{width:24px;height:24px}.button._ngcontent-%ID% .button-text._ngcontent-%ID%{flex-grow:1;font-size:16px;padding:0 8px;color:#FEFEFE}.menu._ngcontent-%ID%{display:none;position:absolute;top:36px;width:100%;height:400px}.menu.visible._ngcontent-%ID%{display:block}@media ONLY screen AND (min-width:650px){._nghost-%ID%{min-width:250px}}"];
    }
  });
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46template, {
    /*src__common__theater_selector__theater_selector_component$46template.styles$TheaterSelectorComponent*/get styles$TheaterSelectorComponent() {
      return [src__common__theater_selector__theater_selector_component$46css$46shim.styles];
    }
  });
  const _textBinding_4$0 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_textBinding_4");
  const _appEl_8 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_appEl_8");
  const _TemplateRef_8_8 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_TemplateRef_8_8");
  const _expr_0$7 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_expr_0");
  const _el_7 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_el_7");
  src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0 = class ViewTheaterSelectorComponent0 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/theater_selector/theater_selector_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "button");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      src__runtime__dom_helpers.setAttribute(_el_1, "alt", "A map pin.");
      this.updateChildClass(html.HtmlElement._check(_el_1), "leading");
      src__runtime__dom_helpers.setAttribute(_el_1, "src", "images/place.svg");
      this.addShimE(_el_1);
      let _text_2 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _el_3 = src__runtime__dom_helpers.appendSpan(doc, _el_0);
      this.updateChildClass(_el_3, "button-text");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$0].element);
      let _text_5 = src__runtime__dom_helpers.appendText(_el_0, " ");
      let _el_6 = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      src__runtime__dom_helpers.setAttribute(_el_6, "alt", "Drop down arrow.");
      src__runtime__dom_helpers.setAttribute(_el_6, "src", "images/arrow_drop_down.svg");
      this.addShimE(_el_6);
      this[_el_7] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_7], "menu");
      this.addShimC(this[_el_7]);
      let _anchor_8 = src__runtime__dom_helpers.appendAnchor(this[_el_7]);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, 7, this, _anchor_8);
      this[_TemplateRef_8_8] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_8], dart.fn(src__common__theater_selector__theater_selector_component$46template.viewFactory_TheaterSelectorComponent1, AppViewAndintToAppViewOfvoid()));
      _el_0[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggleMenu')));
      _ctx.menuContainer = this[_appEl_8];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_appEl_8].detectChangesInNestedViews();
      this[_textBinding_4$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.currentTheater.name));
      let currVal_0 = _ctx.theaterDropdownVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$7], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_7], "visible", currVal_0);
        this[_expr_0$7] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_8].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0._componentStyles;
      if (styles == null) {
        src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0._componentStyles = styles = src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__theater_selector__theater_selector_component$46template.styles$TheaterSelectorComponent, src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4$0] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_8] = null;
    this[_TemplateRef_8_8] = null;
    this[_expr_0$7] = null;
    this[_el_7] = null;
    src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("theater-selector"));
  }).prototype = src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.__proto__),
    [_textBinding_4$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_8_8]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_expr_0$7]: dart.fieldType(core$.bool),
    [_el_7]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0, {
    /*src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46template, {
    /*src__common__theater_selector__theater_selector_component$46template._TheaterSelectorComponentNgFactory*/get _TheaterSelectorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTheaterSelectorComponent()).new("theater-selector", dart.fn(src__common__theater_selector__theater_selector_component$46template.viewFactory_TheaterSelectorComponentHost0, AppViewAndintToAppViewOfTheaterSelectorComponent())));
    }
  });
  dart.copyProperties(src__common__theater_selector__theater_selector_component$46template, {
    get TheaterSelectorComponentNgFactory() {
      return src__common__theater_selector__theater_selector_component$46template._TheaterSelectorComponentNgFactory;
    }
  });
  src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1 = class _ViewTheaterSelectorComponent1 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent) {
    build() {
      this.init0();
    }
  };
  (src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1.new = function(parentView, parentIndex) {
    src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), [])
  }));
  src__common__theater_selector__theater_selector_component$46template.viewFactory_TheaterSelectorComponent1 = function(parentView, parentIndex) {
    return new src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46template, {
    /*src__common__theater_selector__theater_selector_component$46template.styles$TheaterSelectorComponentHost*/get styles$TheaterSelectorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$8 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_compView_0");
  const _appEl_0$ = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_appEl_0");
  const _TheaterSelectorComponent_0_8 = dart.privateName(src__common__theater_selector__theater_selector_component$46template, "_TheaterSelectorComponent_0_8");
  src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0 = class _ViewTheaterSelectorComponentHost0 extends src__core__linker__app_view.AppView$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent) {
    build() {
      this[_compView_0$8] = new src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.new(this, 0);
      this.rootEl = this[_compView_0$8].rootEl;
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_TheaterSelectorComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, dart.wrapType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), dart.fn(() => new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_0$]), VoidToTheaterSelectorComponent())) : new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_0$]);
      this[_compView_0$8].create(this[_TheaterSelectorComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0$]);
      return new (ComponentRefOfTheaterSelectorComponent()).new(0, this, this.rootEl, this[_TheaterSelectorComponent_0_8]);
    }
    detectChangesInternal() {
      this[_appEl_0$].detectChangesInNestedViews();
      this[_compView_0$8].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_compView_0$8].destroyInternalState();
    }
  };
  (src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$8] = null;
    this[_appEl_0$] = null;
    this[_TheaterSelectorComponent_0_8] = null;
    src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.prototype;
  dart.addTypeTests(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0);
  dart.setMethodSignature(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), [])
  }));
  dart.setFieldSignature(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0, () => ({
    __proto__: dart.getFields(src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.__proto__),
    [_compView_0$8]: dart.fieldType(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TheaterSelectorComponent_0_8]: dart.fieldType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent)
  }));
  src__common__theater_selector__theater_selector_component$46template.viewFactory_TheaterSelectorComponentHost0 = function(parentView, parentIndex) {
    return new src__common__theater_selector__theater_selector_component$46template._ViewTheaterSelectorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__theater_selector__theater_selector_component$46template, {
    /*src__common__theater_selector__theater_selector_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__theater_selector__theater_selector_component$46template.initReflector = function() {
    if (dart.test(src__common__theater_selector__theater_selector_component$46template._visited)) {
      return;
    }
    src__common__theater_selector__theater_selector_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), src__common__theater_selector__theater_selector_component$46template.TheaterSelectorComponentNgFactory);
    angular$46template.initReflector();
    src__common__theater_selector__theater_dropdown_controller$46template.initReflector();
  };
  dart.defineLazy(src__events__events_page_component$46css$46shim, {
    /*src__events__events_page_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.grid-container._ngcontent-%ID%{display:flex;flex-flow:row wrap}event-poster._ngcontent-%ID%{width:calc(100% / 2);min-height:243px;cursor:pointer}@media ONLY screen AND (min-width:412px){event-poster._ngcontent-%ID%{min-height:312px}}@media ONLY screen AND (min-width:650px){event-poster._ngcontent-%ID%{width:calc(100% / 3);min-height:327px}}@media ONLY screen AND (min-width:768px){event-poster._ngcontent-%ID%{box-shadow:1px 1px 8px 2px rgba(0,0,0,0.32);margin-top:1.5em;margin-right:1.5em;width:calc(100% / 3 - 1em);min-height:343px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1024px){event-poster._ngcontent-%ID%{width:calc(100% / 3 - 1em);min-height:404px}.grid-container._ngcontent-%ID%{margin:0}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1800px){event-poster._ngcontent-%ID%{width:calc(100% / 4 - 1.15em);min-height:448px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:1.5em}.grid-container._ngcontent-%ID% :nth-child(4n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component, {
    /*src__common__vegebook_poster__lazy_image_component.supportsIntersectionObserver*/get supportsIntersectionObserver() {
      return js.context.hasProperty("IntersectionObserver");
    }
  });
  const _calculateDimensionsIfNeeded$ = dart.privateName(src__common__vegebook_poster__lazy_image_component, "_calculateDimensionsIfNeeded");
  let const$2;
  src__common__vegebook_poster__lazy_image_component.LazyImageComponent = class LazyImageComponent extends core$.Object {
    get root() {
      return this[root$0];
    }
    set root(value) {
      super.root = value;
    }
    get src() {
      return this[src$0];
    }
    set src(value) {
      this[src$0] = value;
    }
    get alt() {
      return this[alt$];
    }
    set alt(value) {
      this[alt$] = value;
    }
    static _loadImage(image, opts) {
      let src = opts && 'src' in opts ? opts.src : null;
      let url = src != null ? src : image[$dataset][$_get]("src");
      image.src = src__common__vegebook_poster__lazy_image_component.LazyImageComponent._urlWithDimensions(url);
      image[$classes].remove("lazy");
      image[$addEventListener]("load", dart.fn(_ => src__common__vegebook_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
      image[$addEventListener]("error", dart.fn(_ => src__common__vegebook_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
    }
    ngOnInit() {
      let image = html.ImageElement._check(this.root.querySelector("img"));
      core$.print(image.clientWidth);
      this[_calculateDimensionsIfNeeded$](image);
      if (dart.test(src__common__vegebook_poster__lazy_image_component.supportsIntersectionObserver)) {
        src__common__vegebook_poster__lazy_image_component.LazyImageComponent._instance.observe(image);
      } else {
        src__common__vegebook_poster__lazy_image_component.LazyImageComponent._loadImage(image, {src: this.src});
      }
    }
    [_calculateDimensionsIfNeeded$](image) {
      core$.print(src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth);
      if (src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth == null || src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedHeight == null) {
        let clientWidth = image.clientWidth;
        core$.print(clientWidth);
        if (clientWidth == null || clientWidth === 0 || dart.notNull(clientWidth) > 300) {
          src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth = 300;
          src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
          return;
        }
        let closestWidth = src__common__vegebook_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$firstWhere](dart.fn(width => dart.notNull(width) >= dart.notNull(clientWidth), intTobool()), {orElse: dart.fn(() => src__common__vegebook_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$last], VoidToint())});
        src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth = closestWidth;
        src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
      }
    }
    static _urlWithDimensions(url) {
      return dart.str(url) + "&w=" + dart.str(src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth) + "&h=" + dart.str(src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedHeight);
    }
  };
  (src__common__vegebook_poster__lazy_image_component.LazyImageComponent.new = function(root) {
    this[src$0] = null;
    this[alt$] = null;
    this[root$0] = root;
  }).prototype = src__common__vegebook_poster__lazy_image_component.LazyImageComponent.prototype;
  dart.addTypeTests(src__common__vegebook_poster__lazy_image_component.LazyImageComponent);
  const root$0 = Symbol("LazyImageComponent.root");
  const src$0 = Symbol("LazyImageComponent.src");
  const alt$ = Symbol("LazyImageComponent.alt");
  src__common__vegebook_poster__lazy_image_component.LazyImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__common__vegebook_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__lazy_image_component.LazyImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_calculateDimensionsIfNeeded$]: dart.fnType(dart.void, [html.ImageElement])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__lazy_image_component.LazyImageComponent.__proto__),
    root: dart.finalFieldType(html.Element),
    src: dart.fieldType(core$.String),
    alt: dart.fieldType(core$.String)
  }));
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component.LazyImageComponent, {
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent._ratio*/get _ratio() {
      return 2 / 3;
    },
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent._widthBreakpoints*/get _widthBreakpoints() {
      return dart.constList([160, 206, 300], core$.int);
    },
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedWidth*/get _adjustedWidth() {
      return null;
    },
    set _adjustedWidth(_) {},
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent._adjustedHeight*/get _adjustedHeight() {
      return null;
    },
    set _adjustedHeight(_) {},
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent.onLoad*/get onLoad() {
      return dart.fn(image => async.Timer.new(const$2 || (const$2 = dart.const(new core$.Duration.new({milliseconds: 50}))), dart.fn(() => dart.dput(dart.dload(image, 'style'), 'opacity', "1"), VoidToString())), dynamicToTimer());
    },
    /*src__common__vegebook_poster__lazy_image_component.LazyImageComponent._instance*/get _instance() {
      return html.IntersectionObserver.new(js.allowInterop(ListAndIntersectionObserverTovoid(), dart.fn((entries, observer) => {
        entries[$forEach](dart.fn(entry => {
          if (dart.dtest(dart.dload(entry, 'isIntersecting')) && html.ImageElement.is(dart.dload(entry, 'target'))) {
            src__common__vegebook_poster__lazy_image_component.LazyImageComponent._loadImage(html.ImageElement.as(dart.dload(entry, 'target')));
            observer.unobserve(html.Element._check(dart.dload(entry, 'target')));
          }
        }, dynamicToNull()));
      }, ListAndIntersectionObserverToNull())));
    }
  });
  src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent = class VegeBookPosterComponent extends core$.Object {
    get messages() {
      return this[messages$2];
    }
    set messages(value) {
      super.messages = value;
    }
    get vegeBook() {
      return this[vegeBook];
    }
    set vegeBook(value) {
      this[vegeBook] = value;
    }
    get isComingSoon() {
      return this[isComingSoon$];
    }
    set isComingSoon(value) {
      this[isComingSoon$] = value;
    }
    get hasDetails() {
      return this[hasDetails$];
    }
    set hasDetails(value) {
      this[hasDetails$] = value;
    }
    get isTouchable() {
      return this[isTouchable$];
    }
    set isTouchable(value) {
      this[isTouchable$] = value;
    }
    get reportingDate() {
      return src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent._releaseDateFormat.format(this.vegeBook.reportingDate);
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new = function(messages) {
    this[vegeBook] = null;
    this[isComingSoon$] = false;
    this[hasDetails$] = true;
    this[isTouchable$] = true;
    this[messages$2] = messages;
  }).prototype = src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent);
  const messages$2 = Symbol("VegeBookPosterComponent.messages");
  const vegeBook = Symbol("VegeBookPosterComponent.vegeBook");
  const isComingSoon$ = Symbol("VegeBookPosterComponent.isComingSoon");
  const hasDetails$ = Symbol("VegeBookPosterComponent.hasDetails");
  const isTouchable$ = Symbol("VegeBookPosterComponent.isTouchable");
  dart.setGetterSignature(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, () => ({
    __proto__: dart.getGetters(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.__proto__),
    reportingDate: core$.String
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    vegeBook: dart.fieldType(src__models__vegebook.VegeBook),
    isComingSoon: dart.fieldType(core$.bool),
    hasDetails: dart.fieldType(core$.bool),
    isTouchable: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, {
    /*src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent._releaseDateFormat*/get _releaseDateFormat() {
      return new intl$.DateFormat.new("dd.MM.yyyy");
    }
  });
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46css$46shim, {
    /*src__common__vegebook_poster__lazy_image_component$46css$46shim.styles*/get styles() {
      return ["img._ngcontent-%ID%{max-width:100%;max-height:100%;width:100%;opacity:0;transition:opacity 750ms ease}"];
    }
  });
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46template, {
    /*src__common__vegebook_poster__lazy_image_component$46template.styles$LazyImageComponent*/get styles$LazyImageComponent() {
      return [src__common__vegebook_poster__lazy_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$8 = dart.privateName(src__common__vegebook_poster__lazy_image_component$46template, "_expr_0");
  const _expr_1$3 = dart.privateName(src__common__vegebook_poster__lazy_image_component$46template, "_expr_1");
  const _el_0$2 = dart.privateName(src__common__vegebook_poster__lazy_image_component$46template, "_el_0");
  src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0 = class ViewLazyImageComponent0 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/vegebook_poster/lazy_image_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$2] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$2]), "lazy");
      this.addShimE(this[_el_0$2]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.src;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$8], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0$2], "data-src", currVal_0);
        this[_expr_0$8] = currVal_0;
      }
      let currVal_1 = _ctx.alt;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$3], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$2], "alt", currVal_1);
        this[_expr_1$3] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles;
      if (styles == null) {
        src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = styles = src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__vegebook_poster__lazy_image_component$46template.styles$LazyImageComponent, src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$8] = null;
    this[_expr_1$3] = null;
    this[_el_0$2] = null;
    src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("lazy-img"));
  }).prototype = src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.prototype;
  dart.addTypeTests(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0);
  dart.setMethodSignature(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    [_expr_0$8]: dart.fieldType(dart.dynamic),
    [_expr_1$3]: dart.fieldType(dart.dynamic),
    [_el_0$2]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0, {
    /*src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46template, {
    /*src__common__vegebook_poster__lazy_image_component$46template._LazyImageComponentNgFactory*/get _LazyImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLazyImageComponent$()).new("lazy-img", dart.fn(src__common__vegebook_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0, AppViewAndintToAppViewOfLazyImageComponent$())));
    }
  });
  dart.copyProperties(src__common__vegebook_poster__lazy_image_component$46template, {
    get LazyImageComponentNgFactory() {
      return src__common__vegebook_poster__lazy_image_component$46template._LazyImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46template, {
    /*src__common__vegebook_poster__lazy_image_component$46template.styles$LazyImageComponentHost*/get styles$LazyImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$9 = dart.privateName(src__common__vegebook_poster__lazy_image_component$46template, "_compView_0");
  const _LazyImageComponent_0_5$0 = dart.privateName(src__common__vegebook_poster__lazy_image_component$46template, "_LazyImageComponent_0_5");
  src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0 = class _ViewLazyImageComponentHost0 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent) {
    build() {
      this[_compView_0$9] = new src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$9].rootEl;
      this[_LazyImageComponent_0_5$0] = new src__common__vegebook_poster__lazy_image_component.LazyImageComponent.new(this.rootEl);
      this[_compView_0$9].create(this[_LazyImageComponent_0_5$0], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfLazyImageComponent$()).new(0, this, this.rootEl, this[_LazyImageComponent_0_5$0]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5$0].ngOnInit();
      }
      this[_compView_0$9].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$9].destroyInternalState();
    }
  };
  (src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$9] = null;
    this[_LazyImageComponent_0_5$0] = null;
    src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.prototype;
  dart.addTypeTests(src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0);
  dart.setMethodSignature(src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__lazy_image_component.LazyImageComponent), [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    [_compView_0$9]: dart.fieldType(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5$0]: dart.fieldType(src__common__vegebook_poster__lazy_image_component.LazyImageComponent)
  }));
  src__common__vegebook_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0 = function(parentView, parentIndex) {
    return new src__common__vegebook_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegebook_poster__lazy_image_component$46template, {
    /*src__common__vegebook_poster__lazy_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__vegebook_poster__lazy_image_component$46template.initReflector = function() {
    if (dart.test(src__common__vegebook_poster__lazy_image_component$46template._visited)) {
      return;
    }
    src__common__vegebook_poster__lazy_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__vegebook_poster__lazy_image_component.LazyImageComponent), src__common__vegebook_poster__lazy_image_component$46template.LazyImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46css$46shim, {
    /*src__common__vegebook_poster__vegebook_poster_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{position:relative}.fallback-icon._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:-1;background:linear-gradient(#424242,#222)}.fallback-icon._ngcontent-%ID% img._ngcontent-%ID%{display:block;width:70%}.vegebook-information._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0) 30%,black);padding:1.2em}.vegebook-information._ngcontent-%ID% strong._ngcontent-%ID%{font-weight:500;font-size:12pt;color:white}.vegebook-information._ngcontent-%ID% p.writtenBy._ngcontent-%ID%{margin-top:0.2em;font-size:10pt;color:rgba(255,255,255,0.7)}.vegebook-information._ngcontent-%ID% content-rating._ngcontent-%ID%{margin-bottom:10px}.release-date-information._ngcontent-%ID%{position:absolute;top:10px;left:0;background:rgba(0,0,0,0.8);padding:5px 20px 5px 10px}.release-date-information._ngcontent-%ID% .label._ngcontent-%ID%{color:#FFBE00;font-size:12px;font-weight:bold}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{color:#FEFEFE;font-size:16px;font-weight:300;margin-top:2px}@media ONLY screen AND (min-width:768px){.release-date-information._ngcontent-%ID%{padding:10px 40px 10px 20px}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{font-size:20px}}"];
    }
  });
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46template, {
    /*src__common__vegebook_poster__vegebook_poster_component$46template.styles$VegeBookPosterComponent*/get styles$VegeBookPosterComponent() {
      return [src__common__vegebook_poster__vegebook_poster_component$46css$46shim.styles];
    }
  });
  const _appEl_2$2 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_appEl_2");
  const _NgIf_2_9$0 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_NgIf_2_9");
  const _appEl_3$0 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_appEl_3");
  const _NgIf_3_9$0 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_NgIf_3_9");
  const _appEl_4$ = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_appEl_4");
  const _NgIf_4_9$ = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_NgIf_4_9");
  const _expr_0$9 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_expr_0");
  const _el_1$1 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_el_1");
  src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0 = class ViewVegeBookPosterComponent0 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/vegebook_poster/vegebook_poster_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "fallback-icon");
      this.addShimC(_el_0);
      this[_el_1$1] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_1$1], "src", "images/fallback-icon.svg");
      this.addShimE(this[_el_1$1]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2$2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$2], dart.fn(src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$2], _TemplateRef_2_8);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_3$0] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$0], dart.fn(src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$0], _TemplateRef_3_8);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4$] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$], dart.fn(src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9$0].ngIf = _ctx.vegeBook.hasMediumPortraitImage;
      this[_NgIf_3_9$0].ngIf = _ctx.hasDetails;
      this[_NgIf_4_9$].ngIf = _ctx.isComingSoon;
      this[_appEl_2$2].detectChangesInNestedViews();
      this[_appEl_3$0].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      let currVal_0 = "Fallback image for " + dart.notNull(_ctx.vegeBook.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$9], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_1$1], "alt", currVal_0);
        this[_expr_0$9] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2$2].destroyNestedViews();
      this[_appEl_3$0].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0._componentStyles;
      if (styles == null) {
        src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0._componentStyles = styles = src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__vegebook_poster__vegebook_poster_component$46template.styles$VegeBookPosterComponent, src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2$2] = null;
    this[_NgIf_2_9$0] = null;
    this[_appEl_3$0] = null;
    this[_NgIf_3_9$0] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$9] = null;
    this[_el_1$1] = null;
    src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegebook-poster"));
  }).prototype = src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0);
  dart.setMethodSignature(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.__proto__),
    [_appEl_2$2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$9]: dart.fieldType(dart.dynamic),
    [_el_1$1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0, {
    /*src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46template, {
    /*src__common__vegebook_poster__vegebook_poster_component$46template._VegeBookPosterComponentNgFactory*/get _VegeBookPosterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeBookPosterComponent()).new("vegebook-poster", dart.fn(src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponentHost0, AppViewAndintToAppViewOfVegeBookPosterComponent())));
    }
  });
  dart.copyProperties(src__common__vegebook_poster__vegebook_poster_component$46template, {
    get VegeBookPosterComponentNgFactory() {
      return src__common__vegebook_poster__vegebook_poster_component$46template._VegeBookPosterComponentNgFactory;
    }
  });
  const _compView_0$10 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_compView_0");
  const _LazyImageComponent_0_5$1 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_LazyImageComponent_0_5");
  const _expr_1$4 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_expr_1");
  src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1 = class _ViewVegeBookPosterComponent1 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent) {
    build() {
      this[_compView_0$10] = new src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      let _el_0 = this[_compView_0$10].rootEl;
      this.addShimC(_el_0);
      this[_LazyImageComponent_0_5$1] = new src__common__vegebook_poster__lazy_image_component.LazyImageComponent.new(_el_0);
      this[_compView_0$10].create0(this[_LazyImageComponent_0_5$1]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.vegeBook.images.portraitMedium;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$9], currVal_0))) {
        this[_LazyImageComponent_0_5$1].src = currVal_0;
        this[_expr_0$9] = currVal_0;
      }
      let currVal_1 = "Poster for " + dart.notNull(_ctx.vegeBook.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$4], currVal_1))) {
        this[_LazyImageComponent_0_5$1].alt = currVal_1;
        this[_expr_1$4] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5$1].ngOnInit();
      }
      this[_compView_0$10].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$10].destroyInternalState();
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$10] = null;
    this[_LazyImageComponent_0_5$1] = null;
    this[_expr_0$9] = null;
    this[_expr_1$4] = null;
    src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1);
  dart.setMethodSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.__proto__),
    [_compView_0$10]: dart.fieldType(src__common__vegebook_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5$1]: dart.fieldType(src__common__vegebook_poster__lazy_image_component.LazyImageComponent),
    [_expr_0$9]: dart.fieldType(core$.String),
    [_expr_1$4]: dart.fieldType(core$.String)
  }));
  src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent1 = function(parentView, parentIndex) {
    return new src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent1.new(parentView, parentIndex);
  };
  const _textBinding_3$0 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_textBinding_3");
  const _textBinding_5$ = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_textBinding_5");
  src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2 = class _ViewVegeBookPosterComponent2 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "vegebook-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.addShimE(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "strong");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$0].element);
      let _el_4 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_4), "writtenBy");
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5$].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_3$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeBook.title));
      this[_textBinding_5$].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeBook.writtenBy));
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_3$0] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_5$] = new src__runtime__text_binding.TextBinding.new();
    src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2);
  dart.setMethodSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.__proto__),
    [_textBinding_3$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_5$]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent2 = function(parentView, parentIndex) {
    return new src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent2.new(parentView, parentIndex);
  };
  const _textBinding_2$ = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_textBinding_2");
  const _textBinding_4$1 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_textBinding_4");
  src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3 = class _ViewVegeBookPosterComponent3 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "release-date-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_1), "label");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$].element);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_3), "date");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.releaseDate));
      this[_textBinding_4$1].updateText(src__runtime__interpolate.interpolateString0(_ctx.reportingDate));
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_2$] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$1] = new src__runtime__text_binding.TextBinding.new();
    src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3);
  dart.setMethodSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.__proto__),
    [_textBinding_2$]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponent3 = function(parentView, parentIndex) {
    return new src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46template, {
    /*src__common__vegebook_poster__vegebook_poster_component$46template.styles$VegeBookPosterComponentHost*/get styles$VegeBookPosterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _VegeBookPosterComponent_0_5 = dart.privateName(src__common__vegebook_poster__vegebook_poster_component$46template, "_VegeBookPosterComponent_0_5");
  src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0 = class _ViewVegeBookPosterComponentHost0 extends src__core__linker__app_view.AppView$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent) {
    build() {
      this[_compView_0$10] = new src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$10].rootEl;
      this[_VegeBookPosterComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, dart.wrapType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), dart.fn(() => new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeBookPosterComponent())) : new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$10].create(this[_VegeBookPosterComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeBookPosterComponent()).new(0, this, this.rootEl, this[_VegeBookPosterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$10].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$10].destroyInternalState();
    }
  };
  (src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$10] = null;
    this[_VegeBookPosterComponent_0_5] = null;
    src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.prototype;
  dart.addTypeTests(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0);
  dart.setMethodSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0, () => ({
    __proto__: dart.getFields(src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.__proto__),
    [_compView_0$10]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0),
    [_VegeBookPosterComponent_0_5]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent)
  }));
  src__common__vegebook_poster__vegebook_poster_component$46template.viewFactory_VegeBookPosterComponentHost0 = function(parentView, parentIndex) {
    return new src__common__vegebook_poster__vegebook_poster_component$46template._ViewVegeBookPosterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegebook_poster__vegebook_poster_component$46template, {
    /*src__common__vegebook_poster__vegebook_poster_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__vegebook_poster__vegebook_poster_component$46template.initReflector = function() {
    if (dart.test(src__common__vegebook_poster__vegebook_poster_component$46template._visited)) {
      return;
    }
    src__common__vegebook_poster__vegebook_poster_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), src__common__vegebook_poster__vegebook_poster_component$46template.VegeBookPosterComponentNgFactory);
    angular$46template.initReflector();
    src__common__vegebook_poster__lazy_image_component$46template.initReflector();
  };
  dart.defineLazy(src__vegebook__vegebook_page_component$46css$46shim, {
    /*src__vegebook__vegebook_page_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.grid-container._ngcontent-%ID%{display:flex;flex-flow:row wrap}vegebook-poster._ngcontent-%ID%{width:calc(100% / 2);min-height:243px;cursor:pointer}@media ONLY screen AND (min-width:412px){vegebook-poster._ngcontent-%ID%{min-height:312px}}@media ONLY screen AND (min-width:650px){vegebook-poster._ngcontent-%ID%{width:calc(100% / 3);min-height:327px}}@media ONLY screen AND (min-width:768px){vegebook-poster._ngcontent-%ID%{box-shadow:1px 1px 8px 2px rgba(0,0,0,0.32);margin-top:1.5em;margin-right:1.5em;width:calc(100% / 3 - 1em);min-height:343px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1024px){vegebook-poster._ngcontent-%ID%{width:calc(100% / 3 - 1em);min-height:404px}.grid-container._ngcontent-%ID%{margin:0}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1800px){vegebook-poster._ngcontent-%ID%{width:calc(100% / 4 - 1.15em);min-height:448px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:1.5em}.grid-container._ngcontent-%ID% :nth-child(4n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component, {
    /*src__common__vegenews_poster__lazy_image_component.supportsIntersectionObserver*/get supportsIntersectionObserver() {
      return js.context.hasProperty("IntersectionObserver");
    }
  });
  const _calculateDimensionsIfNeeded$0 = dart.privateName(src__common__vegenews_poster__lazy_image_component, "_calculateDimensionsIfNeeded");
  let const$3;
  src__common__vegenews_poster__lazy_image_component.LazyImageComponent = class LazyImageComponent extends core$.Object {
    get root() {
      return this[root$1];
    }
    set root(value) {
      super.root = value;
    }
    get src() {
      return this[src$1];
    }
    set src(value) {
      this[src$1] = value;
    }
    get alt() {
      return this[alt$0];
    }
    set alt(value) {
      this[alt$0] = value;
    }
    static _loadImage(image, opts) {
      let src = opts && 'src' in opts ? opts.src : null;
      let url = src != null ? src : image[$dataset][$_get]("src");
      image.src = src__common__vegenews_poster__lazy_image_component.LazyImageComponent._urlWithDimensions(url);
      image[$classes].remove("lazy");
      image[$addEventListener]("load", dart.fn(_ => src__common__vegenews_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
      image[$addEventListener]("error", dart.fn(_ => src__common__vegenews_poster__lazy_image_component.LazyImageComponent.onLoad(image), EventToTimer()));
    }
    ngOnInit() {
      let image = html.ImageElement._check(this.root.querySelector("img"));
      core$.print(image.clientWidth);
      this[_calculateDimensionsIfNeeded$0](image);
      if (dart.test(src__common__vegenews_poster__lazy_image_component.supportsIntersectionObserver)) {
        src__common__vegenews_poster__lazy_image_component.LazyImageComponent._instance.observe(image);
      } else {
        src__common__vegenews_poster__lazy_image_component.LazyImageComponent._loadImage(image, {src: this.src});
      }
    }
    [_calculateDimensionsIfNeeded$0](image) {
      core$.print(src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth);
      if (src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth == null || src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedHeight == null) {
        let clientWidth = image.clientWidth;
        core$.print(clientWidth);
        if (clientWidth == null || clientWidth === 0 || dart.notNull(clientWidth) > 300) {
          src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth = 300;
          src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
          return;
        }
        let closestWidth = src__common__vegenews_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$firstWhere](dart.fn(width => dart.notNull(width) >= dart.notNull(clientWidth), intTobool()), {orElse: dart.fn(() => src__common__vegenews_poster__lazy_image_component.LazyImageComponent._widthBreakpoints[$last], VoidToint())});
        src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth = closestWidth;
        src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedHeight = (dart.notNull(src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth) / 0.6666666666666666)[$round]();
      }
    }
    static _urlWithDimensions(url) {
      return dart.str(url) + "&w=" + dart.str(src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth) + "&h=" + dart.str(src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedHeight);
    }
  };
  (src__common__vegenews_poster__lazy_image_component.LazyImageComponent.new = function(root) {
    this[src$1] = null;
    this[alt$0] = null;
    this[root$1] = root;
  }).prototype = src__common__vegenews_poster__lazy_image_component.LazyImageComponent.prototype;
  dart.addTypeTests(src__common__vegenews_poster__lazy_image_component.LazyImageComponent);
  const root$1 = Symbol("LazyImageComponent.root");
  const src$1 = Symbol("LazyImageComponent.src");
  const alt$0 = Symbol("LazyImageComponent.alt");
  src__common__vegenews_poster__lazy_image_component.LazyImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__common__vegenews_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__lazy_image_component.LazyImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    [_calculateDimensionsIfNeeded$0]: dart.fnType(dart.void, [html.ImageElement])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__lazy_image_component.LazyImageComponent, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__lazy_image_component.LazyImageComponent.__proto__),
    root: dart.finalFieldType(html.Element),
    src: dart.fieldType(core$.String),
    alt: dart.fieldType(core$.String)
  }));
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component.LazyImageComponent, {
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent._ratio*/get _ratio() {
      return 2 / 3;
    },
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent._widthBreakpoints*/get _widthBreakpoints() {
      return dart.constList([160, 206, 300], core$.int);
    },
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedWidth*/get _adjustedWidth() {
      return null;
    },
    set _adjustedWidth(_) {},
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent._adjustedHeight*/get _adjustedHeight() {
      return null;
    },
    set _adjustedHeight(_) {},
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent.onLoad*/get onLoad() {
      return dart.fn(image => async.Timer.new(const$3 || (const$3 = dart.const(new core$.Duration.new({milliseconds: 50}))), dart.fn(() => dart.dput(dart.dload(image, 'style'), 'opacity', "1"), VoidToString())), dynamicToTimer());
    },
    /*src__common__vegenews_poster__lazy_image_component.LazyImageComponent._instance*/get _instance() {
      return html.IntersectionObserver.new(js.allowInterop(ListAndIntersectionObserverTovoid(), dart.fn((entries, observer) => {
        entries[$forEach](dart.fn(entry => {
          if (dart.dtest(dart.dload(entry, 'isIntersecting')) && html.ImageElement.is(dart.dload(entry, 'target'))) {
            src__common__vegenews_poster__lazy_image_component.LazyImageComponent._loadImage(html.ImageElement.as(dart.dload(entry, 'target')));
            observer.unobserve(html.Element._check(dart.dload(entry, 'target')));
          }
        }, dynamicToNull()));
      }, ListAndIntersectionObserverToNull())));
    }
  });
  src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent = class VegeNewsPosterComponent extends core$.Object {
    get messages() {
      return this[messages$3];
    }
    set messages(value) {
      super.messages = value;
    }
    get vegeNews() {
      return this[vegeNews];
    }
    set vegeNews(value) {
      this[vegeNews] = value;
    }
    get isComingSoon() {
      return this[isComingSoon$0];
    }
    set isComingSoon(value) {
      this[isComingSoon$0] = value;
    }
    get hasDetails() {
      return this[hasDetails$0];
    }
    set hasDetails(value) {
      this[hasDetails$0] = value;
    }
    get isTouchable() {
      return this[isTouchable$0];
    }
    set isTouchable(value) {
      this[isTouchable$0] = value;
    }
    get reportingDate() {
      return src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent._releaseDateFormat.format(this.vegeNews.reportingDate);
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new = function(messages) {
    this[vegeNews] = null;
    this[isComingSoon$0] = false;
    this[hasDetails$0] = true;
    this[isTouchable$0] = true;
    this[messages$3] = messages;
  }).prototype = src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent);
  const messages$3 = Symbol("VegeNewsPosterComponent.messages");
  const vegeNews = Symbol("VegeNewsPosterComponent.vegeNews");
  const isComingSoon$0 = Symbol("VegeNewsPosterComponent.isComingSoon");
  const hasDetails$0 = Symbol("VegeNewsPosterComponent.hasDetails");
  const isTouchable$0 = Symbol("VegeNewsPosterComponent.isTouchable");
  dart.setGetterSignature(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, () => ({
    __proto__: dart.getGetters(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.__proto__),
    reportingDate: core$.String
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    vegeNews: dart.fieldType(src__models__vegenews.VegeNews),
    isComingSoon: dart.fieldType(core$.bool),
    hasDetails: dart.fieldType(core$.bool),
    isTouchable: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, {
    /*src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent._releaseDateFormat*/get _releaseDateFormat() {
      return new intl$.DateFormat.new("dd.MM.yyyy");
    }
  });
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46css$46shim, {
    /*src__common__vegenews_poster__lazy_image_component$46css$46shim.styles*/get styles() {
      return ["img._ngcontent-%ID%{max-width:100%;max-height:100%;width:100%;opacity:0;transition:opacity 750ms ease}"];
    }
  });
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46template, {
    /*src__common__vegenews_poster__lazy_image_component$46template.styles$LazyImageComponent*/get styles$LazyImageComponent() {
      return [src__common__vegenews_poster__lazy_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$10 = dart.privateName(src__common__vegenews_poster__lazy_image_component$46template, "_expr_0");
  const _expr_1$5 = dart.privateName(src__common__vegenews_poster__lazy_image_component$46template, "_expr_1");
  const _el_0$3 = dart.privateName(src__common__vegenews_poster__lazy_image_component$46template, "_el_0");
  src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0 = class ViewLazyImageComponent0 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/vegenews_poster/lazy_image_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$3] = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_0$3]), "lazy");
      this.addShimE(this[_el_0$3]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.src;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$10], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0$3], "data-src", currVal_0);
        this[_expr_0$10] = currVal_0;
      }
      let currVal_1 = _ctx.alt;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$5], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$3], "alt", currVal_1);
        this[_expr_1$5] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles;
      if (styles == null) {
        src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = styles = src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__vegenews_poster__lazy_image_component$46template.styles$LazyImageComponent, src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$10] = null;
    this[_expr_1$5] = null;
    this[_el_0$3] = null;
    src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("lazy-img"));
  }).prototype = src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.prototype;
  dart.addTypeTests(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0);
  dart.setMethodSignature(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.__proto__),
    [_expr_0$10]: dart.fieldType(dart.dynamic),
    [_expr_1$5]: dart.fieldType(dart.dynamic),
    [_el_0$3]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0, {
    /*src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46template, {
    /*src__common__vegenews_poster__lazy_image_component$46template._LazyImageComponentNgFactory*/get _LazyImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfLazyImageComponent$0()).new("lazy-img", dart.fn(src__common__vegenews_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0, AppViewAndintToAppViewOfLazyImageComponent$0())));
    }
  });
  dart.copyProperties(src__common__vegenews_poster__lazy_image_component$46template, {
    get LazyImageComponentNgFactory() {
      return src__common__vegenews_poster__lazy_image_component$46template._LazyImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46template, {
    /*src__common__vegenews_poster__lazy_image_component$46template.styles$LazyImageComponentHost*/get styles$LazyImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$11 = dart.privateName(src__common__vegenews_poster__lazy_image_component$46template, "_compView_0");
  const _LazyImageComponent_0_5$2 = dart.privateName(src__common__vegenews_poster__lazy_image_component$46template, "_LazyImageComponent_0_5");
  src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0 = class _ViewLazyImageComponentHost0 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent) {
    build() {
      this[_compView_0$11] = new src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$11].rootEl;
      this[_LazyImageComponent_0_5$2] = new src__common__vegenews_poster__lazy_image_component.LazyImageComponent.new(this.rootEl);
      this[_compView_0$11].create(this[_LazyImageComponent_0_5$2], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfLazyImageComponent$0()).new(0, this, this.rootEl, this[_LazyImageComponent_0_5$2]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5$2].ngOnInit();
      }
      this[_compView_0$11].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$11].destroyInternalState();
    }
  };
  (src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$11] = null;
    this[_LazyImageComponent_0_5$2] = null;
    src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.prototype;
  dart.addTypeTests(src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0);
  dart.setMethodSignature(src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__lazy_image_component.LazyImageComponent), [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.__proto__),
    [_compView_0$11]: dart.fieldType(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5$2]: dart.fieldType(src__common__vegenews_poster__lazy_image_component.LazyImageComponent)
  }));
  src__common__vegenews_poster__lazy_image_component$46template.viewFactory_LazyImageComponentHost0 = function(parentView, parentIndex) {
    return new src__common__vegenews_poster__lazy_image_component$46template._ViewLazyImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegenews_poster__lazy_image_component$46template, {
    /*src__common__vegenews_poster__lazy_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__vegenews_poster__lazy_image_component$46template.initReflector = function() {
    if (dart.test(src__common__vegenews_poster__lazy_image_component$46template._visited)) {
      return;
    }
    src__common__vegenews_poster__lazy_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__vegenews_poster__lazy_image_component.LazyImageComponent), src__common__vegenews_poster__lazy_image_component$46template.LazyImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46css$46shim, {
    /*src__common__vegenews_poster__vegenews_poster_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}._nghost-%ID%{position:relative}.fallback-icon._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:-1;background:linear-gradient(#424242,#222)}.fallback-icon._ngcontent-%ID% img._ngcontent-%ID%{display:block;width:70%}.vegenews-information._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0) 30%,black);padding:1.2em}.vegenews-information._ngcontent-%ID% strong._ngcontent-%ID%{font-weight:500;font-size:12pt;color:white}.vegenews-information._ngcontent-%ID% p.writtenBy._ngcontent-%ID%{margin-top:0.2em;font-size:10pt;color:rgba(255,255,255,0.7)}.vegenews-information._ngcontent-%ID% content-rating._ngcontent-%ID%{margin-bottom:10px}.release-date-information._ngcontent-%ID%{position:absolute;top:10px;left:0;background:rgba(0,0,0,0.8);padding:5px 20px 5px 10px}.release-date-information._ngcontent-%ID% .label._ngcontent-%ID%{color:#FFBE00;font-size:12px;font-weight:bold}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{color:#FEFEFE;font-size:16px;font-weight:300;margin-top:2px}@media ONLY screen AND (min-width:768px){.release-date-information._ngcontent-%ID%{padding:10px 40px 10px 20px}.release-date-information._ngcontent-%ID% .date._ngcontent-%ID%{font-size:20px}}"];
    }
  });
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46template, {
    /*src__common__vegenews_poster__vegenews_poster_component$46template.styles$VegeNewsPosterComponent*/get styles$VegeNewsPosterComponent() {
      return [src__common__vegenews_poster__vegenews_poster_component$46css$46shim.styles];
    }
  });
  const _appEl_2$3 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_appEl_2");
  const _NgIf_2_9$1 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_NgIf_2_9");
  const _appEl_3$1 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_appEl_3");
  const _NgIf_3_9$1 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_NgIf_3_9");
  const _appEl_4$0 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_appEl_4");
  const _NgIf_4_9$0 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_NgIf_4_9");
  const _expr_0$11 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_expr_0");
  const _el_1$2 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_el_1");
  src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0 = class ViewVegeNewsPosterComponent0 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/common/vegenews_poster/vegenews_poster_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "fallback-icon");
      this.addShimC(_el_0);
      this[_el_1$2] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      src__runtime__dom_helpers.setAttribute(this[_el_1$2], "src", "images/fallback-icon.svg");
      this.addShimE(this[_el_1$2]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2$3] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$3], dart.fn(src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$3], _TemplateRef_2_8);
      let _anchor_3 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_3$1] = new src__core__linker__view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$1], dart.fn(src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_3_9$1] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$1], _TemplateRef_3_8);
      let _anchor_4 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4$0] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$0], dart.fn(src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_4_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4$0], _TemplateRef_4_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9$1].ngIf = _ctx.vegeNews.hasMediumPortraitImage;
      this[_NgIf_3_9$1].ngIf = _ctx.hasDetails;
      this[_NgIf_4_9$0].ngIf = _ctx.isComingSoon;
      this[_appEl_2$3].detectChangesInNestedViews();
      this[_appEl_3$1].detectChangesInNestedViews();
      this[_appEl_4$0].detectChangesInNestedViews();
      let currVal_0 = "Fallback image for " + dart.notNull(_ctx.vegeNews.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$11], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_1$2], "alt", currVal_0);
        this[_expr_0$11] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2$3].destroyNestedViews();
      this[_appEl_3$1].destroyNestedViews();
      this[_appEl_4$0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0._componentStyles;
      if (styles == null) {
        src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0._componentStyles = styles = src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__common__vegenews_poster__vegenews_poster_component$46template.styles$VegeNewsPosterComponent, src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2$3] = null;
    this[_NgIf_2_9$1] = null;
    this[_appEl_3$1] = null;
    this[_NgIf_3_9$1] = null;
    this[_appEl_4$0] = null;
    this[_NgIf_4_9$0] = null;
    this[_expr_0$11] = null;
    this[_el_1$2] = null;
    src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegenews-poster"));
  }).prototype = src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0);
  dart.setMethodSignature(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.__proto__),
    [_appEl_2$3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$1]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$11]: dart.fieldType(dart.dynamic),
    [_el_1$2]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0, {
    /*src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46template, {
    /*src__common__vegenews_poster__vegenews_poster_component$46template._VegeNewsPosterComponentNgFactory*/get _VegeNewsPosterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeNewsPosterComponent()).new("vegenews-poster", dart.fn(src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponentHost0, AppViewAndintToAppViewOfVegeNewsPosterComponent())));
    }
  });
  dart.copyProperties(src__common__vegenews_poster__vegenews_poster_component$46template, {
    get VegeNewsPosterComponentNgFactory() {
      return src__common__vegenews_poster__vegenews_poster_component$46template._VegeNewsPosterComponentNgFactory;
    }
  });
  const _compView_0$12 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_compView_0");
  const _LazyImageComponent_0_5$3 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_LazyImageComponent_0_5");
  const _expr_1$6 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_expr_1");
  src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1 = class _ViewVegeNewsPosterComponent1 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent) {
    build() {
      this[_compView_0$12] = new src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0.new(this, 0);
      let _el_0 = this[_compView_0$12].rootEl;
      this.addShimC(_el_0);
      this[_LazyImageComponent_0_5$3] = new src__common__vegenews_poster__lazy_image_component.LazyImageComponent.new(_el_0);
      this[_compView_0$12].create0(this[_LazyImageComponent_0_5$3]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.vegeNews.images.portraitMedium;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$11], currVal_0))) {
        this[_LazyImageComponent_0_5$3].src = currVal_0;
        this[_expr_0$11] = currVal_0;
      }
      let currVal_1 = "Poster for " + dart.notNull(_ctx.vegeNews.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$6], currVal_1))) {
        this[_LazyImageComponent_0_5$3].alt = currVal_1;
        this[_expr_1$6] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_LazyImageComponent_0_5$3].ngOnInit();
      }
      this[_compView_0$12].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$12].destroyInternalState();
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$12] = null;
    this[_LazyImageComponent_0_5$3] = null;
    this[_expr_0$11] = null;
    this[_expr_1$6] = null;
    src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1);
  dart.setMethodSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.__proto__),
    [_compView_0$12]: dart.fieldType(src__common__vegenews_poster__lazy_image_component$46template.ViewLazyImageComponent0),
    [_LazyImageComponent_0_5$3]: dart.fieldType(src__common__vegenews_poster__lazy_image_component.LazyImageComponent),
    [_expr_0$11]: dart.fieldType(core$.String),
    [_expr_1$6]: dart.fieldType(core$.String)
  }));
  src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent1 = function(parentView, parentIndex) {
    return new src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent1.new(parentView, parentIndex);
  };
  const _textBinding_3$1 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_textBinding_3");
  const _textBinding_5$0 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_textBinding_5");
  src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2 = class _ViewVegeNewsPosterComponent2 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "vegenews-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.addShimE(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "strong");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$1].element);
      let _el_4 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_4), "writtenBy");
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5$0].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_3$1].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeNews.title));
      this[_textBinding_5$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeNews.writtenBy));
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_3$1] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_5$0] = new src__runtime__text_binding.TextBinding.new();
    src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2);
  dart.setMethodSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.__proto__),
    [_textBinding_3$1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_5$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent2 = function(parentView, parentIndex) {
    return new src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent2.new(parentView, parentIndex);
  };
  const _textBinding_2$0 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_textBinding_2");
  const _textBinding_4$2 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_textBinding_4");
  src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3 = class _ViewVegeNewsPosterComponent3 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "release-date-information");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_1), "label");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$0].element);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, _el_0, "p");
      this.updateChildClass(html.HtmlElement._check(_el_3), "date");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$2].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.releaseDate));
      this[_textBinding_4$2].updateText(src__runtime__interpolate.interpolateString0(_ctx.reportingDate));
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_2$0] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$2] = new src__runtime__text_binding.TextBinding.new();
    src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3);
  dart.setMethodSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.__proto__),
    [_textBinding_2$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$2]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponent3 = function(parentView, parentIndex) {
    return new src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46template, {
    /*src__common__vegenews_poster__vegenews_poster_component$46template.styles$VegeNewsPosterComponentHost*/get styles$VegeNewsPosterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _VegeNewsPosterComponent_0_5 = dart.privateName(src__common__vegenews_poster__vegenews_poster_component$46template, "_VegeNewsPosterComponent_0_5");
  src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0 = class _ViewVegeNewsPosterComponentHost0 extends src__core__linker__app_view.AppView$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent) {
    build() {
      this[_compView_0$12] = new src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$12].rootEl;
      this[_VegeNewsPosterComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, dart.wrapType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), dart.fn(() => new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeNewsPosterComponent())) : new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$12].create(this[_VegeNewsPosterComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeNewsPosterComponent()).new(0, this, this.rootEl, this[_VegeNewsPosterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$12].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$12].destroyInternalState();
    }
  };
  (src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$12] = null;
    this[_VegeNewsPosterComponent_0_5] = null;
    src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.prototype;
  dart.addTypeTests(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0);
  dart.setMethodSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0, () => ({
    __proto__: dart.getMethods(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), [])
  }));
  dart.setFieldSignature(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0, () => ({
    __proto__: dart.getFields(src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.__proto__),
    [_compView_0$12]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0),
    [_VegeNewsPosterComponent_0_5]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent)
  }));
  src__common__vegenews_poster__vegenews_poster_component$46template.viewFactory_VegeNewsPosterComponentHost0 = function(parentView, parentIndex) {
    return new src__common__vegenews_poster__vegenews_poster_component$46template._ViewVegeNewsPosterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__common__vegenews_poster__vegenews_poster_component$46template, {
    /*src__common__vegenews_poster__vegenews_poster_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__vegenews_poster__vegenews_poster_component$46template.initReflector = function() {
    if (dart.test(src__common__vegenews_poster__vegenews_poster_component$46template._visited)) {
      return;
    }
    src__common__vegenews_poster__vegenews_poster_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), src__common__vegenews_poster__vegenews_poster_component$46template.VegeNewsPosterComponentNgFactory);
    angular$46template.initReflector();
    src__common__vegenews_poster__lazy_image_component$46template.initReflector();
  };
  dart.defineLazy(src__vegenews__vegenews_page_component$46css$46shim, {
    /*src__vegenews__vegenews_page_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.grid-container._ngcontent-%ID%{display:flex;flex-flow:row wrap}vegenews-poster._ngcontent-%ID%{width:calc(100% / 2);min-height:243px;cursor:pointer}@media ONLY screen AND (min-width:412px){vegenews-poster._ngcontent-%ID%{min-height:312px}}@media ONLY screen AND (min-width:650px){vegenews-poster._ngcontent-%ID%{width:calc(100% / 3);min-height:327px}}@media ONLY screen AND (min-width:768px){vegenews-poster._ngcontent-%ID%{box-shadow:1px 1px 8px 2px rgba(0,0,0,0.32);margin-top:1.5em;margin-right:1.5em;width:calc(100% / 3 - 1em);min-height:343px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1024px){vegenews-poster._ngcontent-%ID%{width:calc(100% / 3 - 1em);min-height:404px}.grid-container._ngcontent-%ID%{margin:0}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:0}}@media ONLY screen AND (min-width:1800px){vegenews-poster._ngcontent-%ID%{width:calc(100% / 4 - 1.15em);min-height:448px}.grid-container._ngcontent-%ID% :nth-child(3n)._ngcontent-%ID%{margin-right:1.5em}.grid-container._ngcontent-%ID% :nth-child(4n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  dart.defineLazy(src__event_details__event_details_component$46css$46shim, {
    /*src__event_details__event_details_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.container._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;bottom:unset;background:#f0f0f0;min-height:100%;max-width:100%;opacity:0;transition:opacity 500ms ease}.container.visible._ngcontent-%ID%{opacity:1}.back._ngcontent-%ID%{position:absolute;top:0;left:0;cursor:pointer;z-index:3;width:68px;height:68px;padding:20px}.event-header._ngcontent-%ID%{display:flex;flex-flow:row;align-items:flex-start;margin:-50px 20px 0 20px;position:relative;z-index:3}event-poster._ngcontent-%ID%{flex:1;min-width:125px;max-width:200px;box-shadow:0 4px 20px 2px rgba(0,0,0,0.35)}.event-information._ngcontent-%ID%{flex:2;margin:60px 0 0 15px}.event-information._ngcontent-%ID% .title._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:bold;line-height:1.3}.event-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:14px;margin-top:10px}.event-information._ngcontent-%ID% .body._ngcontent-%ID% .length._ngcontent-%ID%{margin-bottom:5px}.event-information._ngcontent-%ID% .body._ngcontent-%ID% .director._ngcontent-%ID%{margin-bottom:10px}.centered-content._ngcontent-%ID%{margin-left:20px;margin-right:20px}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin:0}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin:0 20px 8px 20px}.section._ngcontent-%ID%{margin-top:10px;padding:20px 0 15px 0}.section.top-shadow._ngcontent-%ID%{box-shadow:0px -2px 30px rgba(0,0,0,0.1)}.section.white._ngcontent-%ID%{background:white}.section.footer._ngcontent-%ID%{background:url(\"images/background-image.jpg\") no-repeat bottom fixed;background-size:cover;margin-top:0;padding-bottom:80px}.section._ngcontent-%ID% h3._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:500;margin-bottom:6px;text-transform:uppercase}.section._ngcontent-%ID% p._ngcontent-%ID%{color:#1D1D1B;font-size:14px;line-height:1.5}.footer._ngcontent-%ID%{background:linear-gradient(#1C306D,#141e56) no-repeat fixed}.footer._ngcontent-%ID% h3._ngcontent-%ID%{color:#FEFEFE}.gallery._ngcontent-%ID%{margin-top:20px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{margin-right:30px;margin-bottom:30px;width:calc(100% / 2 - 20px);min-height:90px;box-shadow:2px 2px 10px 4px rgba(0,0,0,0.35)}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:0}.synopsis._ngcontent-%ID%{white-space:pre-wrap}@media ONLY screen AND (min-width:412px){.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:124px}}@media ONLY screen AND (min-width:768px){.event-information._ngcontent-%ID%{margin-left:25px}.event-information._ngcontent-%ID% .title._ngcontent-%ID%{font-size:30px;line-height:1.5}.event-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:258px}}@media ONLY screen AND (min-width:1024px){.event-header._ngcontent-%ID%{margin:-225px auto 0 auto;width:70%}event-poster._ngcontent-%ID%{flex:unset;min-width:unset;max-width:unset;width:300px;height:450px}.event-information._ngcontent-%ID%{margin-top:240px;margin-left:30px}.centered-content._ngcontent-%ID%{width:70%;margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin-left:0;margin-right:0}.section._ngcontent-%ID%{margin-top:30px;padding:30px 0 40px 0}.section._ngcontent-%ID% h3._ngcontent-%ID%{font-size:30px}.section._ngcontent-%ID% p._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{width:calc(100% / 3 - 20px);min-height:164px}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:30px}.gallery._ngcontent-%ID% img:nth-child(3n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  src__showtimes__date_selector_component.DateSelectorComponent = class DateSelectorComponent extends core$.Object {
    get dates() {
      return this[dates];
    }
    set dates(value) {
      this[dates] = value;
    }
    get selectedDate() {
      return this[selectedDate];
    }
    set selectedDate(value) {
      this[selectedDate] = value;
    }
    get newDateSelected() {
      return this[newDateSelected];
    }
    set newDateSelected(value) {
      this[newDateSelected] = value;
    }
  };
  (src__showtimes__date_selector_component.DateSelectorComponent.new = function() {
    this[dates] = null;
    this[selectedDate] = null;
    this[newDateSelected] = null;
  }).prototype = src__showtimes__date_selector_component.DateSelectorComponent.prototype;
  dart.addTypeTests(src__showtimes__date_selector_component.DateSelectorComponent);
  const dates = Symbol("DateSelectorComponent.dates");
  const selectedDate = Symbol("DateSelectorComponent.selectedDate");
  const newDateSelected = Symbol("DateSelectorComponent.newDateSelected");
  dart.setFieldSignature(src__showtimes__date_selector_component.DateSelectorComponent, () => ({
    __proto__: dart.getFields(src__showtimes__date_selector_component.DateSelectorComponent.__proto__),
    dates: dart.fieldType(ListOfDateTime()),
    selectedDate: dart.fieldType(core$.DateTime),
    newDateSelected: dart.fieldType(DateTimeTodynamic())
  }));
  dart.defineLazy(src__showtimes__date_selector_component$46css$46shim, {
    /*src__showtimes__date_selector_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:flex;color:rgba(255,255,255,0.4);justify-content:space-around}.date-item._ngcontent-%ID%{flex:1;cursor:pointer;height:50px;position:relative;display:flex;flex-direction:column;justify-content:center;background:#0F1734;transition:background-color 0.2s ease}.date-item._ngcontent-%ID% p._ngcontent-%ID%{text-align:center}.date-item._ngcontent-%ID% .dayname._ngcontent-%ID%{color:#717DAD;font-size:12px;font-weight:500;transition:color 0.2s ease}.date-item._ngcontent-%ID% .day._ngcontent-%ID%{color:white;font-size:20px;font-weight:300;transition:color 0.2s ease,font-weight 0.2s ease}.selected._ngcontent-%ID%{background:#FBBE35}.selected._ngcontent-%ID% .dayname._ngcontent-%ID%,.selected._ngcontent-%ID% .day._ngcontent-%ID%{color:#0d1732}.selected._ngcontent-%ID% .day._ngcontent-%ID%{font-weight:500}@media ONLY screen AND (min-width:1024px){.date-item._ngcontent-%ID%{height:60px;margin-right:3px}.date-item:last-child._ngcontent-%ID%{margin-right:0}.date-item._ngcontent-%ID% .day._ngcontent-%ID%{font-size:25px}}"];
    }
  });
  dart.defineLazy(src__showtimes__date_selector_component$46template, {
    /*src__showtimes__date_selector_component$46template.styles$DateSelectorComponent*/get styles$DateSelectorComponent() {
      return [src__showtimes__date_selector_component$46css$46shim.styles];
    }
  });
  const _appEl_0$0 = dart.privateName(src__showtimes__date_selector_component$46template, "_appEl_0");
  const _NgFor_0_9$ = dart.privateName(src__showtimes__date_selector_component$46template, "_NgFor_0_9");
  const _expr_0$12 = dart.privateName(src__showtimes__date_selector_component$46template, "_expr_0");
  const _pipe_date_0$ = dart.privateName(src__showtimes__date_selector_component$46template, "_pipe_date_0");
  src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0 = class ViewDateSelectorComponent0 extends src__core__linker__app_view.AppView$(src__showtimes__date_selector_component.DateSelectorComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/showtimes/date_selector_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$0], dart.fn(src__showtimes__date_selector_component$46template.viewFactory_DateSelectorComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_0_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
      this[_pipe_date_0$] = new src__common__pipes__date_pipe.DatePipe.new();
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dates;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$12], currVal_0))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$12] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0._componentStyles;
      if (styles == null) {
        src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0._componentStyles = styles = src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__showtimes__date_selector_component$46template.styles$DateSelectorComponent, src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$12] = null;
    this[_pipe_date_0$] = null;
    src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("date-selector"));
  }).prototype = src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.prototype;
  dart.addTypeTests(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0);
  dart.setMethodSignature(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0, () => ({
    __proto__: dart.getMethods(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__date_selector_component.DateSelectorComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0, () => ({
    __proto__: dart.getFields(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.__proto__),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$12]: dart.fieldType(dart.dynamic),
    [_pipe_date_0$]: dart.fieldType(src__common__pipes__date_pipe.DatePipe)
  }));
  dart.defineLazy(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0, {
    /*src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__showtimes__date_selector_component$46template, {
    /*src__showtimes__date_selector_component$46template._DateSelectorComponentNgFactory*/get _DateSelectorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDateSelectorComponent()).new("date-selector", dart.fn(src__showtimes__date_selector_component$46template.viewFactory_DateSelectorComponentHost0, AppViewAndintToAppViewOfDateSelectorComponent())));
    }
  });
  dart.copyProperties(src__showtimes__date_selector_component$46template, {
    get DateSelectorComponentNgFactory() {
      return src__showtimes__date_selector_component$46template._DateSelectorComponentNgFactory;
    }
  });
  const _textBinding_2$1 = dart.privateName(src__showtimes__date_selector_component$46template, "_textBinding_2");
  const _textBinding_4$3 = dart.privateName(src__showtimes__date_selector_component$46template, "_textBinding_4");
  const _pipe_date_0_0$ = dart.privateName(src__showtimes__date_selector_component$46template, "_pipe_date_0_0");
  const _pipe_date_0_1$ = dart.privateName(src__showtimes__date_selector_component$46template, "_pipe_date_0_1");
  const _el_0$4 = dart.privateName(src__showtimes__date_selector_component$46template, "_el_0");
  const _handle_click_0_0$ = dart.privateName(src__showtimes__date_selector_component$46template, "_handle_click_0_0");
  src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1 = class _ViewDateSelectorComponent1 extends src__core__linker__app_view.AppView$(src__showtimes__date_selector_component.DateSelectorComponent) {
    build() {
      let doc = html.document;
      this[_el_0$4] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$4], "date-item");
      this.addShimC(this[_el_0$4]);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$4], "p");
      this.updateChildClass(html.HtmlElement._check(_el_1), "dayname");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$1].element);
      let _el_3 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$4], "p");
      this.updateChildClass(html.HtmlElement._check(_el_3), "day");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$3].element);
      this[_el_0$4][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$)));
      this[_pipe_date_0_0$] = src__runtime__proxies.pureProxy2(core$.String, dart.dynamic, core$.String, dart.bind(src__runtime__optimizations.unsafeCast(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0, this.parentView)[_pipe_date_0$], 'transform'));
      this[_pipe_date_0_1$] = src__runtime__proxies.pureProxy2(core$.String, dart.dynamic, core$.String, dart.bind(src__runtime__optimizations.unsafeCast(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0, this.parentView)[_pipe_date_0$], 'transform'));
      this.init1(this[_el_0$4]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_date = src__runtime__optimizations.unsafeCast(core$.DateTime, this.locals[$_get]("$implicit"));
      let currVal_0 = dart.equals(local_date, _ctx.selectedDate);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$12], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$4], "selected", currVal_0);
        this[_expr_0$12] = currVal_0;
      }
      this[_textBinding_2$1].updateText(core$.String._check(src__runtime__interpolate.interpolate0(this[_pipe_date_0_0$](local_date, "E"))));
      this[_textBinding_4$3].updateText(core$.String._check(src__runtime__interpolate.interpolate0(this[_pipe_date_0_1$](local_date, "d"))));
    }
    [_handle_click_0_0$]($event) {
      let local_date = src__runtime__optimizations.unsafeCast(core$.DateTime, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.newDateSelected(local_date);
    }
  };
  (src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_2$1] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$3] = new src__runtime__text_binding.TextBinding.new();
    this[_expr_0$12] = null;
    this[_pipe_date_0_0$] = null;
    this[_pipe_date_0_1$] = null;
    this[_el_0$4] = null;
    src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.prototype;
  dart.addTypeTests(src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1);
  dart.setMethodSignature(src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1, () => ({
    __proto__: dart.getMethods(src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__date_selector_component.DateSelectorComponent), []),
    [_handle_click_0_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1, () => ({
    __proto__: dart.getFields(src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.__proto__),
    [_textBinding_2$1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_expr_0$12]: dart.fieldType(core$.bool),
    [_pipe_date_0_0$]: dart.fieldType(dynamicAndStringToString()),
    [_pipe_date_0_1$]: dart.fieldType(dynamicAndStringToString()),
    [_el_0$4]: dart.fieldType(html.DivElement)
  }));
  src__showtimes__date_selector_component$46template.viewFactory_DateSelectorComponent1 = function(parentView, parentIndex) {
    return new src__showtimes__date_selector_component$46template._ViewDateSelectorComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__showtimes__date_selector_component$46template, {
    /*src__showtimes__date_selector_component$46template.styles$DateSelectorComponentHost*/get styles$DateSelectorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$13 = dart.privateName(src__showtimes__date_selector_component$46template, "_compView_0");
  const _DateSelectorComponent_0_5 = dart.privateName(src__showtimes__date_selector_component$46template, "_DateSelectorComponent_0_5");
  src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0 = class _ViewDateSelectorComponentHost0 extends src__core__linker__app_view.AppView$(src__showtimes__date_selector_component.DateSelectorComponent) {
    build() {
      this[_compView_0$13] = new src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.new(this, 0);
      this.rootEl = this[_compView_0$13].rootEl;
      this[_DateSelectorComponent_0_5] = new src__showtimes__date_selector_component.DateSelectorComponent.new();
      this[_compView_0$13].create(this[_DateSelectorComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDateSelectorComponent()).new(0, this, this.rootEl, this[_DateSelectorComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$13].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$13].destroyInternalState();
    }
  };
  (src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$13] = null;
    this[_DateSelectorComponent_0_5] = null;
    src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.prototype;
  dart.addTypeTests(src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0);
  dart.setMethodSignature(src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0, () => ({
    __proto__: dart.getMethods(src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__date_selector_component.DateSelectorComponent), [])
  }));
  dart.setFieldSignature(src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0, () => ({
    __proto__: dart.getFields(src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.__proto__),
    [_compView_0$13]: dart.fieldType(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0),
    [_DateSelectorComponent_0_5]: dart.fieldType(src__showtimes__date_selector_component.DateSelectorComponent)
  }));
  src__showtimes__date_selector_component$46template.viewFactory_DateSelectorComponentHost0 = function(parentView, parentIndex) {
    return new src__showtimes__date_selector_component$46template._ViewDateSelectorComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__showtimes__date_selector_component$46template, {
    /*src__showtimes__date_selector_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__showtimes__date_selector_component$46template.initReflector = function() {
    if (dart.test(src__showtimes__date_selector_component$46template._visited)) {
      return;
    }
    src__showtimes__date_selector_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__showtimes__date_selector_component.DateSelectorComponent), src__showtimes__date_selector_component$46template.DateSelectorComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__showtimes__showtimes_page_component$46css$46shim, {
    /*src__showtimes__showtimes_page_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.page-header._ngcontent-%ID%{display:flex}.page-header._ngcontent-%ID% theater-selector._ngcontent-%ID%{margin-left:30px}.page-title._ngcontent-%ID%{margin-bottom:30px}"];
    }
  });
  const _triedWithSecondLandscapeUrl$ = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component, "_triedWithSecondLandscapeUrl");
  const _onLoad$ = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component, "_onLoad");
  const _onError$ = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component, "_onError");
  const _clearListeners$ = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component, "_clearListeners");
  src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent = class VegeNewsLandscapeImageComponent extends core$.Object {
    get vegeNews() {
      return this[vegeNews$];
    }
    set vegeNews(value) {
      this[vegeNews$] = value;
    }
    get imageElement() {
      return this[imageElement$0];
    }
    set imageElement(value) {
      this[imageElement$0] = value;
    }
    ngOnInit() {
      this.imageElement[$addEventListener]("load", dart.bind(this, _onLoad$));
      this.imageElement[$addEventListener]("error", dart.bind(this, _onError$));
    }
    ngOnDestroy() {
      return this[_clearListeners$]();
    }
    [_onLoad$](_) {
      this.imageElement[$classes].add("loaded");
      this[_clearListeners$]();
    }
    [_onError$](_) {
      if (dart.test(this[_triedWithSecondLandscapeUrl$])) {
        this[_clearListeners$]();
        return;
      }
      this[_triedWithSecondLandscapeUrl$] = true;
    }
    [_clearListeners$]() {
      this.imageElement[$removeEventListener]("load", dart.bind(this, _onLoad$));
      this.imageElement[$removeEventListener]("error", dart.bind(this, _onError$));
    }
  };
  (src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.new = function() {
    this[vegeNews$] = null;
    this[imageElement$0] = null;
    this[_triedWithSecondLandscapeUrl$] = false;
  }).prototype = src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.prototype;
  dart.addTypeTests(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent);
  const vegeNews$ = Symbol("VegeNewsLandscapeImageComponent.vegeNews");
  const imageElement$0 = Symbol("VegeNewsLandscapeImageComponent.imageElement");
  src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent, () => ({
    __proto__: dart.getMethods(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onLoad$]: dart.fnType(dart.void, [html.Event]),
    [_onError$]: dart.fnType(dart.void, [html.Event]),
    [_clearListeners$]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent, () => ({
    __proto__: dart.getFields(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.__proto__),
    vegeNews: dart.fieldType(src__models__vegenews.VegeNews),
    imageElement: dart.fieldType(html.ImageElement),
    [_triedWithSecondLandscapeUrl$]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;width:100%;height:225px;background:linear-gradient(to top,#222,#424242)}.placeholder._ngcontent-%ID%{position:absolute;width:100%;height:225px;display:flex;align-items:center;justify-content:center;z-index:1}.placeholder._ngcontent-%ID% img._ngcontent-%ID%{width:128px;height:128px}.actual._ngcontent-%ID%{position:absolute;object-fit:cover;z-index:2;width:100%;height:225px;opacity:0;transition:opacity 750ms ease}.actual.loaded._ngcontent-%ID%{opacity:1}@media ONLY screen AND (min-width:1024px){.container._ngcontent-%ID%,.placeholder._ngcontent-%ID%,.actual._ngcontent-%ID%{height:450px}}"];
    }
  });
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.styles$VegeNewsLandscapeImageComponent*/get styles$VegeNewsLandscapeImageComponent() {
      return [src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$13 = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, "_expr_0");
  const _el_3$0 = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, "_el_3");
  src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0 = class ViewVegeNewsLandscapeImageComponent0 extends src__core__linker__app_view.AppView$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegenews_details/landscape_image/vegenews_landscape_image_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "placeholder");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/fallback-icon.svg");
      this.addShimE(_el_2);
      this[_el_3$0] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_3$0]), "actual");
      this.addShimE(this[_el_3$0]);
      _ctx.imageElement = html.ImageElement._check(this[_el_3$0]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.vegeNews.images.landscapeBig;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$13], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_3$0], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$13] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0._componentStyles;
      if (styles == null) {
        src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0._componentStyles = styles = src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.styles$VegeNewsLandscapeImageComponent, src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$13] = null;
    this[_el_3$0] = null;
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegenews-landscape-image"));
  }).prototype = src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.prototype;
  dart.addTypeTests(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0);
  dart.setMethodSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0, () => ({
    __proto__: dart.getMethods(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0, () => ({
    __proto__: dart.getFields(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.__proto__),
    [_expr_0$13]: dart.fieldType(dart.dynamic),
    [_el_3$0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._VegeNewsLandscapeImageComponentNgFactory*/get _VegeNewsLandscapeImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeNewsLandscapeImageComponent()).new("vegenews-landscape-image", dart.fn(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.viewFactory_VegeNewsLandscapeImageComponentHost0, AppViewAndintToAppViewOfVegeNewsLandscapeImageComponent())));
    }
  });
  dart.copyProperties(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, {
    get VegeNewsLandscapeImageComponentNgFactory() {
      return src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._VegeNewsLandscapeImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.styles$VegeNewsLandscapeImageComponentHost*/get styles$VegeNewsLandscapeImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$14 = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, "_compView_0");
  const _VegeNewsLandscapeImageComponent_0_5 = dart.privateName(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, "_VegeNewsLandscapeImageComponent_0_5");
  src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0 = class _ViewVegeNewsLandscapeImageComponentHost0 extends src__core__linker__app_view.AppView$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent) {
    build() {
      this[_compView_0$14] = new src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$14].rootEl;
      this[_VegeNewsLandscapeImageComponent_0_5] = new src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.new();
      this[_compView_0$14].create(this[_VegeNewsLandscapeImageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeNewsLandscapeImageComponent()).new(0, this, this.rootEl, this[_VegeNewsLandscapeImageComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeNewsLandscapeImageComponent_0_5].ngOnInit();
      }
      this[_compView_0$14].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$14].destroyInternalState();
      this[_VegeNewsLandscapeImageComponent_0_5].ngOnDestroy();
    }
  };
  (src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$14] = null;
    this[_VegeNewsLandscapeImageComponent_0_5] = null;
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.prototype;
  dart.addTypeTests(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0);
  dart.setMethodSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0, () => ({
    __proto__: dart.getFields(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.__proto__),
    [_compView_0$14]: dart.fieldType(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0),
    [_VegeNewsLandscapeImageComponent_0_5]: dart.fieldType(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent)
  }));
  src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.viewFactory_VegeNewsLandscapeImageComponentHost0 = function(parentView, parentIndex) {
    return new src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._ViewVegeNewsLandscapeImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template, {
    /*src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.initReflector = function() {
    if (dart.test(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._visited)) {
      return;
    }
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent), src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.VegeNewsLandscapeImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46css$46shim, {
    /*src__vegenews_details__vegenews_details_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.container._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;bottom:unset;background:#f0f0f0;min-height:100%;max-width:100%;opacity:0;transition:opacity 500ms ease}.container.visible._ngcontent-%ID%{opacity:1}.back._ngcontent-%ID%{position:absolute;top:0;left:0;cursor:pointer;z-index:3;width:68px;height:68px;padding:20px}.vegenews-header._ngcontent-%ID%{display:flex;flex-flow:row;align-items:flex-start;margin:-50px 20px 0 20px;position:relative;z-index:3}vegenews-poster._ngcontent-%ID%{flex:1;min-width:125px;max-width:200px;box-shadow:0 4px 20px 2px rgba(0,0,0,0.35)}.vegenews-information._ngcontent-%ID%{flex:2;margin:60px 0 0 15px}.vegenews-information._ngcontent-%ID% .title._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:bold;line-height:1.3}.vegenews-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:14px;margin-top:10px}.vegenews-information._ngcontent-%ID% .body._ngcontent-%ID% .length._ngcontent-%ID%{margin-bottom:5px}.vegenews-information._ngcontent-%ID% .body._ngcontent-%ID% .writtenBy._ngcontent-%ID%{margin-bottom:10px}.centered-content._ngcontent-%ID%{margin-left:20px;margin-right:20px}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin:0}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin:0 20px 8px 20px}.section._ngcontent-%ID%{margin-top:10px;padding:20px 0 15px 0}.section.top-shadow._ngcontent-%ID%{box-shadow:0px -2px 30px rgba(0,0,0,0.1)}.section.white._ngcontent-%ID%{background:white}.section.footer._ngcontent-%ID%{background:url(\"images/background-image.jpg\") no-repeat bottom fixed;background-size:cover;margin-top:0;padding-bottom:80px}.section._ngcontent-%ID% h3._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:500;margin-bottom:6px;text-transform:uppercase}.section._ngcontent-%ID% p._ngcontent-%ID%{color:#1D1D1B;font-size:14px;line-height:1.5}.footer._ngcontent-%ID%{background:linear-gradient(#1C306D,#141e56) no-repeat fixed}.footer._ngcontent-%ID% h3._ngcontent-%ID%{color:#FEFEFE}.gallery._ngcontent-%ID%{margin-top:20px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{margin-right:30px;margin-bottom:30px;width:calc(100% / 2 - 20px);min-height:90px;box-shadow:2px 2px 10px 4px rgba(0,0,0,0.35)}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:0}.content._ngcontent-%ID%{white-space:pre-wrap}@media ONLY screen AND (min-width:412px){.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:124px}}@media ONLY screen AND (min-width:768px){.vegenews-information._ngcontent-%ID%{margin-left:25px}.vegenews-information._ngcontent-%ID% .title._ngcontent-%ID%{font-size:30px;line-height:1.5}.vegenews-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:258px}}@media ONLY screen AND (min-width:1024px){.vegenews-header._ngcontent-%ID%{margin:-225px auto 0 auto;width:70%}vegenews-poster._ngcontent-%ID%{flex:unset;min-width:unset;max-width:unset;width:300px;height:450px}.vegenews-information._ngcontent-%ID%{margin-top:240px;margin-left:30px}.centered-content._ngcontent-%ID%{width:70%;margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin-left:0;margin-right:0}.section._ngcontent-%ID%{margin-top:30px;padding:30px 0 40px 0}.section._ngcontent-%ID% h3._ngcontent-%ID%{font-size:30px}.section._ngcontent-%ID% p._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{width:calc(100% / 3 - 20px);min-height:164px}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:30px}.gallery._ngcontent-%ID% img:nth-child(3n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  const _triedWithSecondLandscapeUrl$0 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component, "_triedWithSecondLandscapeUrl");
  const _onLoad$0 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component, "_onLoad");
  const _onError$0 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component, "_onError");
  const _clearListeners$0 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component, "_clearListeners");
  src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent = class VegeBookLandscapeImageComponent extends core$.Object {
    get vegeBook() {
      return this[vegeBook$];
    }
    set vegeBook(value) {
      this[vegeBook$] = value;
    }
    get imageElement() {
      return this[imageElement$1];
    }
    set imageElement(value) {
      this[imageElement$1] = value;
    }
    ngOnInit() {
      this.imageElement[$addEventListener]("load", dart.bind(this, _onLoad$0));
      this.imageElement[$addEventListener]("error", dart.bind(this, _onError$0));
    }
    ngOnDestroy() {
      return this[_clearListeners$0]();
    }
    [_onLoad$0](_) {
      this.imageElement[$classes].add("loaded");
      this[_clearListeners$0]();
    }
    [_onError$0](_) {
      if (dart.test(this[_triedWithSecondLandscapeUrl$0])) {
        this[_clearListeners$0]();
        return;
      }
      this[_triedWithSecondLandscapeUrl$0] = true;
    }
    [_clearListeners$0]() {
      this.imageElement[$removeEventListener]("load", dart.bind(this, _onLoad$0));
      this.imageElement[$removeEventListener]("error", dart.bind(this, _onError$0));
    }
  };
  (src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.new = function() {
    this[vegeBook$] = null;
    this[imageElement$1] = null;
    this[_triedWithSecondLandscapeUrl$0] = false;
  }).prototype = src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.prototype;
  dart.addTypeTests(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent);
  const vegeBook$ = Symbol("VegeBookLandscapeImageComponent.vegeBook");
  const imageElement$1 = Symbol("VegeBookLandscapeImageComponent.imageElement");
  src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent, () => ({
    __proto__: dart.getMethods(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_onLoad$0]: dart.fnType(dart.void, [html.Event]),
    [_onError$0]: dart.fnType(dart.void, [html.Event]),
    [_clearListeners$0]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent, () => ({
    __proto__: dart.getFields(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.__proto__),
    vegeBook: dart.fieldType(src__models__vegebook.VegeBook),
    imageElement: dart.fieldType(html.ImageElement),
    [_triedWithSecondLandscapeUrl$0]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;width:100%;height:225px;background:linear-gradient(to top,#222,#424242)}.placeholder._ngcontent-%ID%{position:absolute;width:100%;height:225px;display:flex;align-items:center;justify-content:center;z-index:1}.placeholder._ngcontent-%ID% img._ngcontent-%ID%{width:128px;height:128px}.actual._ngcontent-%ID%{position:absolute;object-fit:cover;z-index:2;width:100%;height:225px;opacity:0;transition:opacity 750ms ease}.actual.loaded._ngcontent-%ID%{opacity:1}@media ONLY screen AND (min-width:1024px){.container._ngcontent-%ID%,.placeholder._ngcontent-%ID%,.actual._ngcontent-%ID%{height:450px}}"];
    }
  });
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.styles$VegeBookLandscapeImageComponent*/get styles$VegeBookLandscapeImageComponent() {
      return [src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim.styles];
    }
  });
  const _expr_0$14 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, "_expr_0");
  const _el_3$1 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, "_el_3");
  src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0 = class ViewVegeBookLandscapeImageComponent0 extends src__core__linker__app_view.AppView$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "placeholder");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "img");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/fallback-icon.svg");
      this.addShimE(_el_2);
      this[_el_3$1] = src__runtime__dom_helpers.appendElement(doc, _el_0, "img");
      this.updateChildClass(html.HtmlElement._check(this[_el_3$1]), "actual");
      this.addShimE(this[_el_3$1]);
      _ctx.imageElement = html.ImageElement._check(this[_el_3$1]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.vegeBook.images.landscapeBig;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$14], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_3$1], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$14] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0._componentStyles;
      if (styles == null) {
        src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0._componentStyles = styles = src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.styles$VegeBookLandscapeImageComponent, src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.new = function(parentView, parentIndex) {
    this[_expr_0$14] = null;
    this[_el_3$1] = null;
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegebook-landscape-image"));
  }).prototype = src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.prototype;
  dart.addTypeTests(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0);
  dart.setMethodSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0, () => ({
    __proto__: dart.getMethods(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0, () => ({
    __proto__: dart.getFields(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.__proto__),
    [_expr_0$14]: dart.fieldType(dart.dynamic),
    [_el_3$1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._VegeBookLandscapeImageComponentNgFactory*/get _VegeBookLandscapeImageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeBookLandscapeImageComponent()).new("vegebook-landscape-image", dart.fn(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.viewFactory_VegeBookLandscapeImageComponentHost0, AppViewAndintToAppViewOfVegeBookLandscapeImageComponent())));
    }
  });
  dart.copyProperties(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, {
    get VegeBookLandscapeImageComponentNgFactory() {
      return src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._VegeBookLandscapeImageComponentNgFactory;
    }
  });
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.styles$VegeBookLandscapeImageComponentHost*/get styles$VegeBookLandscapeImageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$15 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, "_compView_0");
  const _VegeBookLandscapeImageComponent_0_5 = dart.privateName(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, "_VegeBookLandscapeImageComponent_0_5");
  src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0 = class _ViewVegeBookLandscapeImageComponentHost0 extends src__core__linker__app_view.AppView$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent) {
    build() {
      this[_compView_0$15] = new src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$15].rootEl;
      this[_VegeBookLandscapeImageComponent_0_5] = new src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.new();
      this[_compView_0$15].create(this[_VegeBookLandscapeImageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeBookLandscapeImageComponent()).new(0, this, this.rootEl, this[_VegeBookLandscapeImageComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeBookLandscapeImageComponent_0_5].ngOnInit();
      }
      this[_compView_0$15].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$15].destroyInternalState();
      this[_VegeBookLandscapeImageComponent_0_5].ngOnDestroy();
    }
  };
  (src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$15] = null;
    this[_VegeBookLandscapeImageComponent_0_5] = null;
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.prototype;
  dart.addTypeTests(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0);
  dart.setMethodSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0, () => ({
    __proto__: dart.getFields(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.__proto__),
    [_compView_0$15]: dart.fieldType(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0),
    [_VegeBookLandscapeImageComponent_0_5]: dart.fieldType(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent)
  }));
  src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.viewFactory_VegeBookLandscapeImageComponentHost0 = function(parentView, parentIndex) {
    return new src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._ViewVegeBookLandscapeImageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template, {
    /*src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.initReflector = function() {
    if (dart.test(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._visited)) {
      return;
    }
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent), src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.VegeBookLandscapeImageComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46css$46shim, {
    /*src__vegebook_details__vegebook_details_component$46css$46shim.styles*/get styles() {
      return [".app-bar-button._ngcontent-%ID%{width:56px;height:56px;padding:14px;cursor:pointer;user-select:none;transition:background-color 250ms ease,opacity 150ms ease,transform 250ms ease}.app-bar-button.active._ngcontent-%ID%{background:#152451}@media ONLY screen AND (min-width:768px){.app-bar-button._ngcontent-%ID%{width:60px;height:60px}}.scrolling-blocked._ngcontent-%ID%{position:fixed;left:0;right:0;z-index:1;overflow:hidden}.page-title._ngcontent-%ID%{display:none}@media ONLY screen AND (min-width:768px){.page-title._ngcontent-%ID%{display:flex;flex-flow:row;align-items:center;justify-content:space-between;padding-top:20px}.page-title._ngcontent-%ID% h3._ngcontent-%ID%{color:white;font-weight:600;font-size:30px;text-transform:uppercase}}@media ONLY screen AND (min-width:1024px){.content-wrapper._ngcontent-%ID%{margin:0 auto;width:70%;min-width:850px;padding:100px 0}}.container._ngcontent-%ID%{position:absolute;top:0;left:0;right:0;bottom:0;bottom:unset;background:#f0f0f0;min-height:100%;max-width:100%;opacity:0;transition:opacity 500ms ease}.container.visible._ngcontent-%ID%{opacity:1}.back._ngcontent-%ID%{position:absolute;top:0;left:0;cursor:pointer;z-index:3;width:68px;height:68px;padding:20px}.vegebook-header._ngcontent-%ID%{display:flex;flex-flow:row;align-items:flex-start;margin:-50px 20px 0 20px;position:relative;z-index:3}vegebook-poster._ngcontent-%ID%{flex:1;min-width:125px;max-width:200px;box-shadow:0 4px 20px 2px rgba(0,0,0,0.35)}.vegebook-information._ngcontent-%ID%{flex:2;margin:60px 0 0 15px}.vegebook-information._ngcontent-%ID% .title._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:bold;line-height:1.3}.vegebook-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:14px;margin-top:10px}.vegebook-information._ngcontent-%ID% .body._ngcontent-%ID% .length._ngcontent-%ID%{margin-bottom:5px}.vegebook-information._ngcontent-%ID% .body._ngcontent-%ID% .writtenBy._ngcontent-%ID%{margin-bottom:10px}.centered-content._ngcontent-%ID%{margin-left:20px;margin-right:20px}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin:0}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin:0 20px 8px 20px}.section._ngcontent-%ID%{margin-top:10px;padding:20px 0 15px 0}.section.top-shadow._ngcontent-%ID%{box-shadow:0px -2px 30px rgba(0,0,0,0.1)}.section.white._ngcontent-%ID%{background:white}.section.footer._ngcontent-%ID%{background:url(\"images/background-image.jpg\") no-repeat bottom fixed;background-size:cover;margin-top:0;padding-bottom:80px}.section._ngcontent-%ID% h3._ngcontent-%ID%{color:#1D1D1B;font-size:18px;font-weight:500;margin-bottom:6px;text-transform:uppercase}.section._ngcontent-%ID% p._ngcontent-%ID%{color:#1D1D1B;font-size:14px;line-height:1.5}.footer._ngcontent-%ID%{background:linear-gradient(#1C306D,#141e56) no-repeat fixed}.footer._ngcontent-%ID% h3._ngcontent-%ID%{color:#FEFEFE}.gallery._ngcontent-%ID%{margin-top:20px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{margin-right:30px;margin-bottom:30px;width:calc(100% / 2 - 20px);min-height:90px;box-shadow:2px 2px 10px 4px rgba(0,0,0,0.35)}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:0}.content._ngcontent-%ID%{white-space:pre-wrap}@media ONLY screen AND (min-width:412px){.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:124px}}@media ONLY screen AND (min-width:768px){.vegebook-information._ngcontent-%ID%{margin-left:25px}.vegebook-information._ngcontent-%ID% .title._ngcontent-%ID%{font-size:30px;line-height:1.5}.vegebook-information._ngcontent-%ID% .body._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{min-height:258px}}@media ONLY screen AND (min-width:1024px){.vegebook-header._ngcontent-%ID%{margin:-225px auto 0 auto;width:70%}vegebook-poster._ngcontent-%ID%{flex:unset;min-width:unset;max-width:unset;width:300px;height:450px}.vegebook-information._ngcontent-%ID%{margin-top:240px;margin-left:30px}.centered-content._ngcontent-%ID%{width:70%;margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID%{margin-left:auto;margin-right:auto}.actor-section._ngcontent-%ID% .centered-content._ngcontent-%ID% h3._ngcontent-%ID%{margin-left:0;margin-right:0}.section._ngcontent-%ID%{margin-top:30px;padding:30px 0 40px 0}.section._ngcontent-%ID% h3._ngcontent-%ID%{font-size:30px}.section._ngcontent-%ID% p._ngcontent-%ID%{font-size:16px}.gallery._ngcontent-%ID% img._ngcontent-%ID%{width:calc(100% / 3 - 20px);min-height:164px}.gallery._ngcontent-%ID% img:nth-child(2n)._ngcontent-%ID%{margin-right:30px}.gallery._ngcontent-%ID% img:nth-child(3n)._ngcontent-%ID%{margin-right:0}}"];
    }
  });
  const _store$0 = dart.privateName(src__vegebook_details__vegebook_details_component, "_store");
  const _router = dart.privateName(src__vegebook_details__vegebook_details_component, "_router");
  const _navigatedFromApp = dart.privateName(src__vegebook_details__vegebook_details_component, "_navigatedFromApp");
  const _vegeBookDetailsSubscription = dart.privateName(src__vegebook_details__vegebook_details_component, "_vegeBookDetailsSubscription");
  const _populateVegeBookDetails = dart.privateName(src__vegebook_details__vegebook_details_component, "_populateVegeBookDetails");
  const _animateContentIntoView = dart.privateName(src__vegebook_details__vegebook_details_component, "_animateContentIntoView");
  const _waitForEventDetails = dart.privateName(src__vegebook_details__vegebook_details_component, "_waitForEventDetails");
  src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent = class VegeBookDetailsComponent extends core$.Object {
    get messages() {
      return this[messages$4];
    }
    set messages(value) {
      super.messages = value;
    }
    get vegeBook() {
      return this[vegeBook$0];
    }
    set vegeBook(value) {
      this[vegeBook$0] = value;
    }
    get contentVisible() {
      return this[contentVisible];
    }
    set contentVisible(value) {
      this[contentVisible] = value;
    }
    ngOnInit() {
      html.window[$scrollTo](0, 0);
    }
    onActivate(previous, current) {
      core$.print("@@@@@@@@@" + dart.notNull(dart.toString(previous)));
      this[_navigatedFromApp] = previous != null;
      this[_populateVegeBookDetails](current.parameters[$_get]("vegeBookId"));
    }
    ngOnDestroy() {
      let t = this[_vegeBookDetailsSubscription];
      return t == null ? null : t.cancel();
    }
    [_populateVegeBookDetails](vegeBookId) {
      this.vegeBook = src__redux__vegebook__vegebook_selectors.vegeBookByIdSelector(this[_store$0].state, vegeBookId);
      if (this.vegeBook != null) {
        this[_animateContentIntoView]();
      } else {
        this[_store$0].dispatch(new src__redux__vegebook__vegebook_actions.RefreshVegeBookAction.new());
        this[_waitForEventDetails](vegeBookId);
      }
    }
    [_waitForEventDetails](vegeBookId) {
      let state = this[_store$0].state.vegeBookState;
      let isLoading = state.vegeBookStatus === src__models__loading_status.LoadingStatus.loading;
      if (!isLoading) {
        return;
      }
      this[_vegeBookDetailsSubscription] = this[_store$0].onChange.listen(dart.fn(state => {
        {
          let state = this[_store$0].state.vegeBookState;
          let hasFinishedLoading = state.vegeBookStatus !== src__models__loading_status.LoadingStatus.loading;
          if (hasFinishedLoading) {
            this[_populateVegeBookDetails](vegeBookId);
            this[_vegeBookDetailsSubscription].cancel();
            this[_vegeBookDetailsSubscription] = null;
            this[_animateContentIntoView]();
          }
        }
      }, AppStateToNull()));
    }
    [_animateContentIntoView]() {
      return async.Timer.new(core$.Duration.zero, dart.fn(() => this.contentVisible = true, VoidTobool()));
    }
    goBack() {
      if (dart.test(this[_navigatedFromApp])) {
        html.window.history.back();
        return;
      }
      this[_router].navigateByUrl(src__routes.RoutePaths.vegeBook.toUrl(), {replace: true});
    }
  };
  (src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.new = function(store, router, messages) {
    this[vegeBook$0] = null;
    this[_navigatedFromApp] = false;
    this[contentVisible] = false;
    this[_vegeBookDetailsSubscription] = null;
    this[_store$0] = store;
    this[_router] = router;
    this[messages$4] = messages;
  }).prototype = src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent);
  const messages$4 = Symbol("VegeBookDetailsComponent.messages");
  const vegeBook$0 = Symbol("VegeBookDetailsComponent.vegeBook");
  const contentVisible = Symbol("VegeBookDetailsComponent.contentVisible");
  src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__lifecycle.OnActivate, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_populateVegeBookDetails]: dart.fnType(dart.void, [core$.String]),
    [_waitForEventDetails]: dart.fnType(dart.void, [core$.String]),
    [_animateContentIntoView]: dart.fnType(dart.void, []),
    goBack: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.__proto__),
    [_store$0]: dart.finalFieldType(StoreOfAppState()),
    [_router]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    vegeBook: dart.fieldType(src__models__vegebook.VegeBook),
    [_navigatedFromApp]: dart.fieldType(core$.bool),
    contentVisible: dart.fieldType(core$.bool),
    [_vegeBookDetailsSubscription]: dart.fieldType(StreamSubscriptionOfAppState())
  }));
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46template, {
    /*src__vegebook_details__vegebook_details_component$46template.styles$VegeBookDetailsComponent*/get styles$VegeBookDetailsComponent() {
      return [src__vegebook_details__vegebook_details_component$46css$46shim.styles];
    }
  });
  const _appEl_0$1 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_NgIf_0_9");
  src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0 = class ViewVegeBookDetailsComponent0 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegebook_details/vegebook_details_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$1] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$1], dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.vegeBook != null;
      this[_appEl_0$1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0$1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0._componentStyles;
      if (styles == null) {
        src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0._componentStyles = styles = src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegebook_details__vegebook_details_component$46template.styles$VegeBookDetailsComponent, src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$1] = null;
    this[_NgIf_0_9] = null;
    src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegebook-details"));
  }).prototype = src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.__proto__),
    [_appEl_0$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0, {
    /*src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46template, {
    /*src__vegebook_details__vegebook_details_component$46template._VegeBookDetailsComponentNgFactory*/get _VegeBookDetailsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeBookDetailsComponent()).new("vegebook-details", dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponentHost0, AppViewAndintToAppViewOfVegeBookDetailsComponent())));
    }
  });
  dart.copyProperties(src__vegebook_details__vegebook_details_component$46template, {
    get VegeBookDetailsComponentNgFactory() {
      return src__vegebook_details__vegebook_details_component$46template._VegeBookDetailsComponentNgFactory;
    }
  });
  const _textBinding_7 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_textBinding_7");
  const _compView_1$0 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_compView_1");
  const _VegeBookLandscapeImageComponent_1_5 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_VegeBookLandscapeImageComponent_1_5");
  const _compView_4 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_compView_4");
  const _VegeBookPosterComponent_4_5 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_VegeBookPosterComponent_4_5");
  const _appEl_9$ = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_appEl_9");
  const _NgIf_9_9$ = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_NgIf_9_9");
  const _appEl_10$ = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_appEl_10");
  const _NgIf_10_9$ = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_NgIf_10_9");
  const _appEl_11 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_appEl_11");
  const _NgIf_11_9 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_NgIf_11_9");
  const _expr_0$15 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_expr_0");
  const _expr_1$7 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_expr_1");
  const _expr_2$0 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_expr_2");
  const _el_0$5 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_el_0");
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1 = class _ViewVegeBookDetailsComponent1 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0$5] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$5], "container");
      this.addShimC(this[_el_0$5]);
      this[_compView_1$0] = new src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0.new(this, 1);
      let _el_1 = this[_compView_1$0].rootEl;
      this[_el_0$5][$append](_el_1);
      this.addShimC(_el_1);
      this[_VegeBookLandscapeImageComponent_1_5] = new src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent.new();
      this[_compView_1$0].create0(this[_VegeBookLandscapeImageComponent_1_5]);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$5], "img");
      this.updateChildClass(html.HtmlElement._check(_el_2), "back");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/back.svg");
      this.addShimE(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$5]);
      this.updateChildClass(_el_3, "vegebook-header");
      this.addShimC(_el_3);
      this[_compView_4] = new src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.addShimC(_el_4);
      this[_VegeBookPosterComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, dart.wrapType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), dart.fn(() => new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeBookPosterComponent())) : new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_4].create0(this[_VegeBookPosterComponent_4_5]);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, _el_3);
      this.updateChildClass(_el_5, "vegebook-information");
      this.addShimC(_el_5);
      let _el_6 = src__runtime__dom_helpers.appendElement(doc, _el_5, "h2");
      this.updateChildClass(html.HtmlElement._check(_el_6), "title");
      this.addShimE(_el_6);
      _el_6[$append](this[_textBinding_7].element);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, _el_5);
      this.updateChildClass(_el_8, "body");
      this.addShimC(_el_8);
      let _anchor_9 = src__runtime__dom_helpers.appendAnchor(_el_8);
      this[_appEl_9$] = new src__core__linker__view_container.ViewContainer.new(9, 8, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9$], dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_9_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9$], _TemplateRef_9_8);
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_0$5]);
      this[_appEl_10$] = new src__core__linker__view_container.ViewContainer.new(10, 0, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10$], dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10$], _TemplateRef_10_8);
      let _anchor_11 = src__runtime__dom_helpers.appendAnchor(this[_el_0$5]);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 0, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      _el_2[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'goBack')));
      this.init1(this[_el_0$5]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.vegeBook;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$7], currVal_1))) {
        this[_VegeBookLandscapeImageComponent_1_5].vegeBook = currVal_1;
        this[_expr_1$7] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeBookLandscapeImageComponent_1_5].ngOnInit();
      }
      if (firstCheck) {
        this[_VegeBookPosterComponent_4_5].hasDetails = false;
        this[_VegeBookPosterComponent_4_5].isTouchable = false;
      }
      let currVal_2 = _ctx.vegeBook;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_VegeBookPosterComponent_4_5].vegeBook = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      this[_NgIf_9_9$].ngIf = _ctx.vegeBook.writtenBy != null;
      this[_NgIf_10_9$].ngIf = _ctx.vegeBook.hasContent;
      this[_NgIf_11_9].ngIf = _ctx.vegeBook.galleryImages.isNotEmpty();
      this[_appEl_9$].detectChangesInNestedViews();
      this[_appEl_10$].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_0 = _ctx.contentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$15], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$5], "visible", currVal_0);
        this[_expr_0$15] = currVal_0;
      }
      this[_textBinding_7].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeBook.title));
      this[_compView_1$0].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_9$].destroyNestedViews();
      this[_appEl_10$].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_compView_1$0].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_VegeBookLandscapeImageComponent_1_5].ngOnDestroy();
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_7] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_1$0] = null;
    this[_VegeBookLandscapeImageComponent_1_5] = null;
    this[_compView_4] = null;
    this[_VegeBookPosterComponent_4_5] = null;
    this[_appEl_9$] = null;
    this[_NgIf_9_9$] = null;
    this[_appEl_10$] = null;
    this[_NgIf_10_9$] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_0$15] = null;
    this[_expr_1$7] = null;
    this[_expr_2$0] = null;
    this[_el_0$5] = null;
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.__proto__),
    [_textBinding_7]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_1$0]: dart.fieldType(src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.ViewVegeBookLandscapeImageComponent0),
    [_VegeBookLandscapeImageComponent_1_5]: dart.fieldType(src__vegebook_details__landscape_image__vegebook_landscape_image_component.VegeBookLandscapeImageComponent),
    [_compView_4]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0),
    [_VegeBookPosterComponent_4_5]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent),
    [_appEl_9$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$15]: dart.fieldType(core$.bool),
    [_expr_1$7]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_el_0$5]: dart.fieldType(html.DivElement)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent1 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent1.new(parentView, parentIndex);
  };
  const _textBinding_2$2 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_textBinding_2");
  const _textBinding_4$4 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_textBinding_4");
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2 = class _ViewVegeBookDetailsComponent2 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(html.HtmlElement._check(_el_0), "writtenBy");
      this.addShimE(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "strong");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$2].element);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, ": ");
      _el_0[$append](this[_textBinding_4$4].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$2].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.writtenBy));
      this[_textBinding_4$4].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeBook.writtenBy));
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_2$2] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$4] = new src__runtime__text_binding.TextBinding.new();
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.__proto__),
    [_textBinding_2$2]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$4]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent2 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent2.new(parentView, parentIndex);
  };
  const _textBinding_3$2 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_textBinding_3");
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3 = class _ViewVegeBookDetailsComponent3 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "p");
      this.updateChildClass(html.HtmlElement._check(_el_2), "content");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$2].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_3$2].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeBook.content));
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_3$2] = new src__runtime__text_binding.TextBinding.new();
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.__proto__),
    [_textBinding_3$2]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent3 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent3.new(parentView, parentIndex);
  };
  const _appEl_5 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_appEl_5");
  const _NgFor_5_9 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_NgFor_5_9");
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4 = class _ViewVegeBookDetailsComponent4 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section footer");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$2].element);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_4, "gallery");
      this.addShimC(_el_4);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(_el_4);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.vegeBook.galleryImages.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$15], currVal_0))) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0$15] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      this[_appEl_5].detectChangesInNestedViews();
      this[_textBinding_3$2].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.gallery));
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_3$2] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0$15] = null;
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.__proto__),
    [_textBinding_3$2]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$15]: dart.fieldType(dart.dynamic)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent4 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent4.new(parentView, parentIndex);
  };
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5 = class _ViewVegeBookDetailsComponent5 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$5] = doc[$createElement]("img");
      this.addShimE(this[_el_0$5]);
      this.init1(this[_el_0$5]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_galleryImage = src__runtime__optimizations.unsafeCast(src__models__vegebook.VegeBookGalleryImage, this.locals[$_get]("$implicit"));
      let currVal_0 = local_galleryImage.location;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$15], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$5], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$15] = currVal_0;
      }
      let currVal_1 = "A still frame from the movie " + dart.notNull(_ctx.vegeBook.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$7], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$5], "alt", currVal_1);
        this[_expr_1$7] = currVal_1;
      }
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.new = function(parentView, parentIndex) {
    this[_expr_0$15] = null;
    this[_expr_1$7] = null;
    this[_el_0$5] = null;
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.__proto__),
    [_expr_0$15]: dart.fieldType(dart.dynamic),
    [_expr_1$7]: dart.fieldType(dart.dynamic),
    [_el_0$5]: dart.fieldType(html.Element)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponent5 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46template, {
    /*src__vegebook_details__vegebook_details_component$46template.styles$VegeBookDetailsComponentHost*/get styles$VegeBookDetailsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$16 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_compView_0");
  const _VegeBookDetailsComponent_0_5 = dart.privateName(src__vegebook_details__vegebook_details_component$46template, "_VegeBookDetailsComponent_0_5");
  src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0 = class _ViewVegeBookDetailsComponentHost0 extends src__core__linker__app_view.AppView$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent) {
    build() {
      this[_compView_0$16] = new src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$16].rootEl;
      this[_VegeBookDetailsComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent, dart.wrapType(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), dart.fn(() => new src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeBookDetailsComponent())) : new src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$16].create(this[_VegeBookDetailsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeBookDetailsComponent()).new(0, this, this.rootEl, this[_VegeBookDetailsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeBookDetailsComponent_0_5].ngOnInit();
      }
      this[_compView_0$16].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$16].destroyInternalState();
      this[_VegeBookDetailsComponent_0_5].ngOnDestroy();
    }
  };
  (src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$16] = null;
    this[_VegeBookDetailsComponent_0_5] = null;
    src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.prototype;
  dart.addTypeTests(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0);
  dart.setMethodSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0, () => ({
    __proto__: dart.getFields(src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.__proto__),
    [_compView_0$16]: dart.fieldType(src__vegebook_details__vegebook_details_component$46template.ViewVegeBookDetailsComponent0),
    [_VegeBookDetailsComponent_0_5]: dart.fieldType(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent)
  }));
  src__vegebook_details__vegebook_details_component$46template.viewFactory_VegeBookDetailsComponentHost0 = function(parentView, parentIndex) {
    return new src__vegebook_details__vegebook_details_component$46template._ViewVegeBookDetailsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegebook_details__vegebook_details_component$46template, {
    /*src__vegebook_details__vegebook_details_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegebook_details__vegebook_details_component$46template.initReflector = function() {
    if (dart.test(src__vegebook_details__vegebook_details_component$46template._visited)) {
      return;
    }
    src__vegebook_details__vegebook_details_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegebook_details__vegebook_details_component.VegeBookDetailsComponent), src__vegebook_details__vegebook_details_component$46template.VegeBookDetailsComponentNgFactory);
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__content_rating__content_rating_component$46template.initReflector();
    src__common__vegebook_poster__vegebook_poster_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  const _store$1 = dart.privateName(src__vegenews_details__vegenews_details_component, "_store");
  const _router$ = dart.privateName(src__vegenews_details__vegenews_details_component, "_router");
  const _navigatedFromApp$ = dart.privateName(src__vegenews_details__vegenews_details_component, "_navigatedFromApp");
  const _vegeNewsDetailsSubscription = dart.privateName(src__vegenews_details__vegenews_details_component, "_vegeNewsDetailsSubscription");
  const _populateVegeNewsDetails = dart.privateName(src__vegenews_details__vegenews_details_component, "_populateVegeNewsDetails");
  const _animateContentIntoView$ = dart.privateName(src__vegenews_details__vegenews_details_component, "_animateContentIntoView");
  const _waitForEventDetails$ = dart.privateName(src__vegenews_details__vegenews_details_component, "_waitForEventDetails");
  src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent = class VegeNewsDetailsComponent extends core$.Object {
    get messages() {
      return this[messages$5];
    }
    set messages(value) {
      super.messages = value;
    }
    get vegeNews() {
      return this[vegeNews$0];
    }
    set vegeNews(value) {
      this[vegeNews$0] = value;
    }
    get contentVisible() {
      return this[contentVisible$];
    }
    set contentVisible(value) {
      this[contentVisible$] = value;
    }
    ngOnInit() {
      html.window[$scrollTo](0, 0);
    }
    onActivate(previous, current) {
      core$.print("@@@@@@@@@" + dart.notNull(dart.toString(previous)));
      this[_navigatedFromApp$] = previous != null;
      this[_populateVegeNewsDetails](current.parameters[$_get]("vegeNewsId"));
    }
    ngOnDestroy() {
      let t = this[_vegeNewsDetailsSubscription];
      return t == null ? null : t.cancel();
    }
    [_populateVegeNewsDetails](vegeNewsId) {
      this.vegeNews = src__redux__vegenews__vegenews_selectors.vegeNewsByIdSelector(this[_store$1].state, vegeNewsId);
      if (this.vegeNews != null) {
        this[_animateContentIntoView$]();
      } else {
        this[_store$1].dispatch(new src__redux__vegenews__vegenews_actions.RefreshVegeNewsAction.new());
        this[_waitForEventDetails$](vegeNewsId);
      }
    }
    [_waitForEventDetails$](vegeNewsId) {
      let state = this[_store$1].state.vegeNewsState;
      let isLoading = state.vegeNewsStatus === src__models__loading_status.LoadingStatus.loading;
      if (!isLoading) {
        return;
      }
      this[_vegeNewsDetailsSubscription] = this[_store$1].onChange.listen(dart.fn(state => {
        {
          let state = this[_store$1].state.vegeNewsState;
          let hasFinishedLoading = state.vegeNewsStatus !== src__models__loading_status.LoadingStatus.loading;
          if (hasFinishedLoading) {
            this[_populateVegeNewsDetails](vegeNewsId);
            this[_vegeNewsDetailsSubscription].cancel();
            this[_vegeNewsDetailsSubscription] = null;
            this[_animateContentIntoView$]();
          }
        }
      }, AppStateToNull()));
    }
    [_animateContentIntoView$]() {
      return async.Timer.new(core$.Duration.zero, dart.fn(() => this.contentVisible = true, VoidTobool()));
    }
    goBack() {
      if (dart.test(this[_navigatedFromApp$])) {
        html.window.history.back();
        return;
      }
      this[_router$].navigateByUrl(src__routes.RoutePaths.vegeNews.toUrl(), {replace: true});
    }
  };
  (src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.new = function(store, router, messages) {
    this[vegeNews$0] = null;
    this[_navigatedFromApp$] = false;
    this[contentVisible$] = false;
    this[_vegeNewsDetailsSubscription] = null;
    this[_store$1] = store;
    this[_router$] = router;
    this[messages$5] = messages;
  }).prototype = src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent);
  const messages$5 = Symbol("VegeNewsDetailsComponent.messages");
  const vegeNews$0 = Symbol("VegeNewsDetailsComponent.vegeNews");
  const contentVisible$ = Symbol("VegeNewsDetailsComponent.contentVisible");
  src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__lifecycle.OnActivate, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_populateVegeNewsDetails]: dart.fnType(dart.void, [core$.String]),
    [_waitForEventDetails$]: dart.fnType(dart.void, [core$.String]),
    [_animateContentIntoView$]: dart.fnType(dart.void, []),
    goBack: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.__proto__),
    [_store$1]: dart.finalFieldType(StoreOfAppState()),
    [_router$]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    vegeNews: dart.fieldType(src__models__vegenews.VegeNews),
    [_navigatedFromApp$]: dart.fieldType(core$.bool),
    contentVisible: dart.fieldType(core$.bool),
    [_vegeNewsDetailsSubscription]: dart.fieldType(StreamSubscriptionOfAppState())
  }));
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46template, {
    /*src__vegenews_details__vegenews_details_component$46template.styles$VegeNewsDetailsComponent*/get styles$VegeNewsDetailsComponent() {
      return [src__vegenews_details__vegenews_details_component$46css$46shim.styles];
    }
  });
  const _appEl_0$2 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_appEl_0");
  const _NgIf_0_9$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_NgIf_0_9");
  src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0 = class ViewVegeNewsDetailsComponent0 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegenews_details/vegenews_details_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$2] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$2], dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$2], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.vegeNews != null;
      this[_appEl_0$2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0$2].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0._componentStyles;
      if (styles == null) {
        src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0._componentStyles = styles = src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegenews_details__vegenews_details_component$46template.styles$VegeNewsDetailsComponent, src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$2] = null;
    this[_NgIf_0_9$] = null;
    src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegenews-details"));
  }).prototype = src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.__proto__),
    [_appEl_0$2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0, {
    /*src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46template, {
    /*src__vegenews_details__vegenews_details_component$46template._VegeNewsDetailsComponentNgFactory*/get _VegeNewsDetailsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeNewsDetailsComponent()).new("vegenews-details", dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponentHost0, AppViewAndintToAppViewOfVegeNewsDetailsComponent())));
    }
  });
  dart.copyProperties(src__vegenews_details__vegenews_details_component$46template, {
    get VegeNewsDetailsComponentNgFactory() {
      return src__vegenews_details__vegenews_details_component$46template._VegeNewsDetailsComponentNgFactory;
    }
  });
  const _textBinding_7$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_textBinding_7");
  const _compView_1$1 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_compView_1");
  const _VegeNewsLandscapeImageComponent_1_5 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_VegeNewsLandscapeImageComponent_1_5");
  const _compView_4$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_compView_4");
  const _VegeNewsPosterComponent_4_5 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_VegeNewsPosterComponent_4_5");
  const _appEl_9$0 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_appEl_9");
  const _NgIf_9_9$0 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_NgIf_9_9");
  const _appEl_10$0 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_appEl_10");
  const _NgIf_10_9$0 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_NgIf_10_9");
  const _appEl_11$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_appEl_11");
  const _NgIf_11_9$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_NgIf_11_9");
  const _expr_0$16 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_expr_0");
  const _expr_1$8 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_expr_1");
  const _expr_2$1 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_expr_2");
  const _el_0$6 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_el_0");
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1 = class _ViewVegeNewsDetailsComponent1 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0$6] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$6], "container");
      this.addShimC(this[_el_0$6]);
      this[_compView_1$1] = new src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0.new(this, 1);
      let _el_1 = this[_compView_1$1].rootEl;
      this[_el_0$6][$append](_el_1);
      this.addShimC(_el_1);
      this[_VegeNewsLandscapeImageComponent_1_5] = new src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent.new();
      this[_compView_1$1].create0(this[_VegeNewsLandscapeImageComponent_1_5]);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$6], "img");
      this.updateChildClass(html.HtmlElement._check(_el_2), "back");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/back.svg");
      this.addShimE(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$6]);
      this.updateChildClass(_el_3, "vegenews-header");
      this.addShimC(_el_3);
      this[_compView_4$] = new src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.new(this, 4);
      let _el_4 = this[_compView_4$].rootEl;
      _el_3[$append](_el_4);
      this.addShimC(_el_4);
      this[_VegeNewsPosterComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, dart.wrapType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), dart.fn(() => new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeNewsPosterComponent())) : new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_4$].create0(this[_VegeNewsPosterComponent_4_5]);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, _el_3);
      this.updateChildClass(_el_5, "vegenews-information");
      this.addShimC(_el_5);
      let _el_6 = src__runtime__dom_helpers.appendElement(doc, _el_5, "h2");
      this.updateChildClass(html.HtmlElement._check(_el_6), "title");
      this.addShimE(_el_6);
      _el_6[$append](this[_textBinding_7$].element);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, _el_5);
      this.updateChildClass(_el_8, "body");
      this.addShimC(_el_8);
      let _anchor_9 = src__runtime__dom_helpers.appendAnchor(_el_8);
      this[_appEl_9$0] = new src__core__linker__view_container.ViewContainer.new(9, 8, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9$0], dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_9_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9$0], _TemplateRef_9_8);
      let _anchor_10 = src__runtime__dom_helpers.appendAnchor(this[_el_0$6]);
      this[_appEl_10$0] = new src__core__linker__view_container.ViewContainer.new(10, 0, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10$0], dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_10_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10$0], _TemplateRef_10_8);
      let _anchor_11 = src__runtime__dom_helpers.appendAnchor(this[_el_0$6]);
      this[_appEl_11$] = new src__core__linker__view_container.ViewContainer.new(11, 0, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11$], dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_11_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11$], _TemplateRef_11_8);
      _el_2[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'goBack')));
      this.init1(this[_el_0$6]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.vegeNews;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$8], currVal_1))) {
        this[_VegeNewsLandscapeImageComponent_1_5].vegeNews = currVal_1;
        this[_expr_1$8] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeNewsLandscapeImageComponent_1_5].ngOnInit();
      }
      if (firstCheck) {
        this[_VegeNewsPosterComponent_4_5].hasDetails = false;
        this[_VegeNewsPosterComponent_4_5].isTouchable = false;
      }
      let currVal_2 = _ctx.vegeNews;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
        this[_VegeNewsPosterComponent_4_5].vegeNews = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      this[_NgIf_9_9$0].ngIf = _ctx.vegeNews.writtenBy != null;
      this[_NgIf_10_9$0].ngIf = _ctx.vegeNews.hasContent;
      this[_NgIf_11_9$].ngIf = _ctx.vegeNews.galleryImages.isNotEmpty();
      this[_appEl_9$0].detectChangesInNestedViews();
      this[_appEl_10$0].detectChangesInNestedViews();
      this[_appEl_11$].detectChangesInNestedViews();
      let currVal_0 = _ctx.contentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$16], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$6], "visible", currVal_0);
        this[_expr_0$16] = currVal_0;
      }
      this[_textBinding_7$].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeNews.title));
      this[_compView_1$1].detectChanges();
      this[_compView_4$].detectChanges();
    }
    destroyInternal() {
      this[_appEl_9$0].destroyNestedViews();
      this[_appEl_10$0].destroyNestedViews();
      this[_appEl_11$].destroyNestedViews();
      this[_compView_1$1].destroyInternalState();
      this[_compView_4$].destroyInternalState();
      this[_VegeNewsLandscapeImageComponent_1_5].ngOnDestroy();
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_7$] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_1$1] = null;
    this[_VegeNewsLandscapeImageComponent_1_5] = null;
    this[_compView_4$] = null;
    this[_VegeNewsPosterComponent_4_5] = null;
    this[_appEl_9$0] = null;
    this[_NgIf_9_9$0] = null;
    this[_appEl_10$0] = null;
    this[_NgIf_10_9$0] = null;
    this[_appEl_11$] = null;
    this[_NgIf_11_9$] = null;
    this[_expr_0$16] = null;
    this[_expr_1$8] = null;
    this[_expr_2$1] = null;
    this[_el_0$6] = null;
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.__proto__),
    [_textBinding_7$]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_1$1]: dart.fieldType(src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.ViewVegeNewsLandscapeImageComponent0),
    [_VegeNewsLandscapeImageComponent_1_5]: dart.fieldType(src__vegenews_details__landscape_image__vegenews_landscape_image_component.VegeNewsLandscapeImageComponent),
    [_compView_4$]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0),
    [_VegeNewsPosterComponent_4_5]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent),
    [_appEl_9$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_10$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$16]: dart.fieldType(core$.bool),
    [_expr_1$8]: dart.fieldType(dart.dynamic),
    [_expr_2$1]: dart.fieldType(dart.dynamic),
    [_el_0$6]: dart.fieldType(html.DivElement)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent1 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent1.new(parentView, parentIndex);
  };
  const _textBinding_2$3 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_textBinding_2");
  const _textBinding_4$5 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_textBinding_4");
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2 = class _ViewVegeNewsDetailsComponent2 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(html.HtmlElement._check(_el_0), "writtenBy");
      this.addShimE(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "strong");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$3].element);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, ": ");
      _el_0[$append](this[_textBinding_4$5].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$3].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.writtenBy));
      this[_textBinding_4$5].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeNews.writtenBy));
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_2$3] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$5] = new src__runtime__text_binding.TextBinding.new();
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.__proto__),
    [_textBinding_2$3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$5]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent2 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent2.new(parentView, parentIndex);
  };
  const _textBinding_3$3 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_textBinding_3");
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3 = class _ViewVegeNewsDetailsComponent3 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "p");
      this.updateChildClass(html.HtmlElement._check(_el_2), "content");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$3].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_3$3].updateText(src__runtime__interpolate.interpolateString0(_ctx.vegeNews.content));
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_3$3] = new src__runtime__text_binding.TextBinding.new();
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.__proto__),
    [_textBinding_3$3]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent3 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent3.new(parentView, parentIndex);
  };
  const _appEl_5$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_appEl_5");
  const _NgFor_5_9$ = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_NgFor_5_9");
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4 = class _ViewVegeNewsDetailsComponent4 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section footer");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$3].element);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_4, "gallery");
      this.addShimC(_el_4);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(_el_4);
      this[_appEl_5$] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$], dart.fn(src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_5_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5$], _TemplateRef_5_8);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.vegeNews.galleryImages.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$16], currVal_0))) {
        this[_NgFor_5_9$].ngForOf = currVal_0;
        this[_expr_0$16] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9$].ngDoCheck();
      }
      this[_appEl_5$].detectChangesInNestedViews();
      this[_textBinding_3$3].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.gallery));
    }
    destroyInternal() {
      this[_appEl_5$].destroyNestedViews();
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_3$3] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_5$] = null;
    this[_NgFor_5_9$] = null;
    this[_expr_0$16] = null;
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.__proto__),
    [_textBinding_3$3]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_5$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$16]: dart.fieldType(dart.dynamic)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent4 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent4.new(parentView, parentIndex);
  };
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5 = class _ViewVegeNewsDetailsComponent5 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$6] = doc[$createElement]("img");
      this.addShimE(this[_el_0$6]);
      this.init1(this[_el_0$6]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_galleryImage = src__runtime__optimizations.unsafeCast(src__models__vegenews.VegeNewsGalleryImage, this.locals[$_get]("$implicit"));
      let currVal_0 = local_galleryImage.location;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$16], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$6], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$16] = currVal_0;
      }
      let currVal_1 = "A still frame from the movie " + dart.notNull(_ctx.vegeNews.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$8], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$6], "alt", currVal_1);
        this[_expr_1$8] = currVal_1;
      }
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.new = function(parentView, parentIndex) {
    this[_expr_0$16] = null;
    this[_expr_1$8] = null;
    this[_el_0$6] = null;
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.__proto__),
    [_expr_0$16]: dart.fieldType(dart.dynamic),
    [_expr_1$8]: dart.fieldType(dart.dynamic),
    [_el_0$6]: dart.fieldType(html.Element)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponent5 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponent5.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46template, {
    /*src__vegenews_details__vegenews_details_component$46template.styles$VegeNewsDetailsComponentHost*/get styles$VegeNewsDetailsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$17 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_compView_0");
  const _VegeNewsDetailsComponent_0_5 = dart.privateName(src__vegenews_details__vegenews_details_component$46template, "_VegeNewsDetailsComponent_0_5");
  src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0 = class _ViewVegeNewsDetailsComponentHost0 extends src__core__linker__app_view.AppView$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent) {
    build() {
      this[_compView_0$17] = new src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$17].rootEl;
      this[_VegeNewsDetailsComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent, dart.wrapType(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), dart.fn(() => new src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeNewsDetailsComponent())) : new src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$17].create(this[_VegeNewsDetailsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeNewsDetailsComponent()).new(0, this, this.rootEl, this[_VegeNewsDetailsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_VegeNewsDetailsComponent_0_5].ngOnInit();
      }
      this[_compView_0$17].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$17].destroyInternalState();
      this[_VegeNewsDetailsComponent_0_5].ngOnDestroy();
    }
  };
  (src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$17] = null;
    this[_VegeNewsDetailsComponent_0_5] = null;
    src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.prototype;
  dart.addTypeTests(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0);
  dart.setMethodSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), [])
  }));
  dart.setFieldSignature(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0, () => ({
    __proto__: dart.getFields(src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.__proto__),
    [_compView_0$17]: dart.fieldType(src__vegenews_details__vegenews_details_component$46template.ViewVegeNewsDetailsComponent0),
    [_VegeNewsDetailsComponent_0_5]: dart.fieldType(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent)
  }));
  src__vegenews_details__vegenews_details_component$46template.viewFactory_VegeNewsDetailsComponentHost0 = function(parentView, parentIndex) {
    return new src__vegenews_details__vegenews_details_component$46template._ViewVegeNewsDetailsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegenews_details__vegenews_details_component$46template, {
    /*src__vegenews_details__vegenews_details_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegenews_details__vegenews_details_component$46template.initReflector = function() {
    if (dart.test(src__vegenews_details__vegenews_details_component$46template._visited)) {
      return;
    }
    src__vegenews_details__vegenews_details_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegenews_details__vegenews_details_component.VegeNewsDetailsComponent), src__vegenews_details__vegenews_details_component$46template.VegeNewsDetailsComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__content_rating__content_rating_component$46template.initReflector();
    src__common__vegenews_poster__vegenews_poster_component$46template.initReflector();
    src__routes$46template.initReflector();
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template.initReflector();
  };
  const _store$2 = dart.privateName(src__showtimes__showtimes_page_component, "_store");
  const _router$0 = dart.privateName(src__showtimes__showtimes_page_component, "_router");
  src__showtimes__showtimes_page_component.ShowtimesPageComponent = class ShowtimesPageComponent extends core$.Object {
    get messages() {
      return this[messages$6];
    }
    set messages(value) {
      super.messages = value;
    }
    get eventFilter() {
      return this[eventFilter];
    }
    set eventFilter(value) {
      this[eventFilter] = value;
    }
    get viewModel() {
      return src__viewmodels__showtime_page_view_model.ShowtimesPageViewModel.fromStore(this[_store$2]);
    }
    get shows() {
      return this.eventFilter == null ? this.viewModel.shows : src__redux__show__show_selectors.showsForEventSelector(this.viewModel.shows, this.eventFilter);
    }
    openShowDetails(show) {
      src__restore_scroll_position.storeCurrentScrollPosition();
      let event = src__redux__event__event_selectors.eventForShowSelector(this[_store$2].state, show);
      let url = src__routes.RoutePaths.showDetails.toUrl({parameters: new (IdentityMapOfString$String()).from(["eventId", event.id, "showId", show.id])});
      this[_router$0].navigate(url);
    }
    onActivate(previous, _) {
      src__restore_scroll_position.restoreScrollPositionIfNeeded(previous, src__routes.RoutePaths.showDetails);
      this[_store$2].dispatch(new src__redux__show__show_actions.FetchShowsIfNotLoadedAction.new());
    }
  };
  (src__showtimes__showtimes_page_component.ShowtimesPageComponent.new = function(store, router, messages) {
    this[eventFilter] = null;
    this[_store$2] = store;
    this[_router$0] = router;
    this[messages$6] = messages;
  }).prototype = src__showtimes__showtimes_page_component.ShowtimesPageComponent.prototype;
  dart.addTypeTests(src__showtimes__showtimes_page_component.ShowtimesPageComponent);
  const messages$6 = Symbol("ShowtimesPageComponent.messages");
  const eventFilter = Symbol("ShowtimesPageComponent.eventFilter");
  src__showtimes__showtimes_page_component.ShowtimesPageComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__showtimes__showtimes_page_component.ShowtimesPageComponent, () => ({
    __proto__: dart.getMethods(src__showtimes__showtimes_page_component.ShowtimesPageComponent.__proto__),
    openShowDetails: dart.fnType(dart.void, [src__models__show.Show]),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setGetterSignature(src__showtimes__showtimes_page_component.ShowtimesPageComponent, () => ({
    __proto__: dart.getGetters(src__showtimes__showtimes_page_component.ShowtimesPageComponent.__proto__),
    viewModel: src__viewmodels__showtime_page_view_model.ShowtimesPageViewModel,
    shows: src__collection__kt_list.KtList$(src__models__show.Show)
  }));
  dart.setFieldSignature(src__showtimes__showtimes_page_component.ShowtimesPageComponent, () => ({
    __proto__: dart.getFields(src__showtimes__showtimes_page_component.ShowtimesPageComponent.__proto__),
    [_store$2]: dart.finalFieldType(StoreOfAppState()),
    [_router$0]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    eventFilter: dart.fieldType(src__models__event.Event)
  }));
  dart.defineLazy(src__showtimes__showtimes_page_component$46template, {
    /*src__showtimes__showtimes_page_component$46template.styles$ShowtimesPageComponent*/get styles$ShowtimesPageComponent() {
      return [src__showtimes__showtimes_page_component$46css$46shim.styles];
    }
  });
  const _textBinding_3$4 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_textBinding_3");
  const _compView_4$0 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_compView_4");
  const _appEl_4$1 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_appEl_4");
  const _TheaterSelectorComponent_4_8 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_TheaterSelectorComponent_4_8");
  const _compView_5 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_compView_5");
  const _DateSelectorComponent_5_5 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_DateSelectorComponent_5_5");
  const _compView_6 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_compView_6");
  const _LoadingViewComponent_6_5 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_LoadingViewComponent_6_5");
  const _appEl_7 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_appEl_7");
  const _NgFor_7_9 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_NgFor_7_9");
  const _expr_0$17 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_0");
  const _expr_1$9 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_1");
  const _expr_2$2 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_2");
  const _expr_3$ = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_3");
  const _expr_4 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_4");
  const _expr_5 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_expr_5");
  const _handle_actionButtonClicked_6_0 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_handle_actionButtonClicked_6_0");
  let const$4;
  src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0 = class ViewShowtimesPageComponent0 extends src__core__linker__app_view.AppView$(src__showtimes__showtimes_page_component.ShowtimesPageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/showtimes/showtimes_page_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content-wrapper");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "page-title");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$4].element);
      this[_compView_4$0] = new src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.new(this, 4);
      let _el_4 = this[_compView_4$0].rootEl;
      _el_1[$append](_el_4);
      this.addShimC(_el_4);
      this[_appEl_4$1] = new src__core__linker__view_container.ViewContainer.new(4, 1, this, _el_4);
      this[_TheaterSelectorComponent_4_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, dart.wrapType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), dart.fn(() => new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_4$1]), VoidToTheaterSelectorComponent())) : new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_4$1]);
      this[_compView_4$0].create0(this[_TheaterSelectorComponent_4_8]);
      this[_compView_5] = new src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_0[$append](_el_5);
      this.addShimC(_el_5);
      this[_DateSelectorComponent_5_5] = new src__showtimes__date_selector_component.DateSelectorComponent.new();
      this[_compView_5].create0(this[_DateSelectorComponent_5_5]);
      this[_compView_6] = new src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      _el_0[$append](_el_6);
      this.addShimC(_el_6);
      this[_LoadingViewComponent_6_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__loading_view__loading_view_component.LoadingViewComponent, dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), dart.fn(() => new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToLoadingViewComponent())) : new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      let _anchor_7 = src__runtime__dom_helpers.createAnchor();
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(src__showtimes__showtimes_page_component$46template.viewFactory_ShowtimesPageComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_7_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_6].create(this[_LoadingViewComponent_6_5], JSArrayOfObject().of([JSArrayOfViewContainer().of([this[_appEl_7]])]));
      let subscription_0 = this[_LoadingViewComponent_6_5].actionButtonClicked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_actionButtonClicked_6_0)));
      this.init(const$4 || (const$4 = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.viewModel.dates.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$17], currVal_0))) {
        this[_DateSelectorComponent_5_5].dates = currVal_0;
        this[_expr_0$17] = currVal_0;
      }
      let currVal_1 = _ctx.viewModel.selectedDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$9], currVal_1))) {
        this[_DateSelectorComponent_5_5].selectedDate = currVal_1;
        this[_expr_1$9] = currVal_1;
      }
      let currVal_2 = _ctx.viewModel.changeCurrentDate;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$2], currVal_2))) {
        this[_DateSelectorComponent_5_5].newDateSelected = currVal_2;
        this[_expr_2$2] = currVal_2;
      }
      let currVal_3 = _ctx.shows.isEmpty();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_LoadingViewComponent_6_5].contentEmpty = currVal_3;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.viewModel.status;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_LoadingViewComponent_6_5].status = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.shows.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_NgFor_7_9].ngForOf = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_7_9].ngDoCheck();
      }
      this[_appEl_4$1].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_textBinding_3$4].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.showtimes));
      this[_compView_4$0].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
    }
    destroyInternal() {
      this[_appEl_4$1].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_compView_4$0].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_LoadingViewComponent_6_5].ngOnDestroy();
    }
    [_handle_actionButtonClicked_6_0]($event) {
      let _ctx = this.ctx;
      dart.dsend(_ctx.viewModel, 'refreshShowtimes', []);
    }
    initComponentStyles() {
      let styles = src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0._componentStyles;
      if (styles == null) {
        src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0._componentStyles = styles = src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__showtimes__showtimes_page_component$46template.styles$ShowtimesPageComponent, src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_3$4] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_4$0] = null;
    this[_appEl_4$1] = null;
    this[_TheaterSelectorComponent_4_8] = null;
    this[_compView_5] = null;
    this[_DateSelectorComponent_5_5] = null;
    this[_compView_6] = null;
    this[_LoadingViewComponent_6_5] = null;
    this[_appEl_7] = null;
    this[_NgFor_7_9] = null;
    this[_expr_0$17] = null;
    this[_expr_1$9] = null;
    this[_expr_2$2] = null;
    this[_expr_3$] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("showtimes-page"));
  }).prototype = src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.prototype;
  dart.addTypeTests(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0);
  dart.setMethodSignature(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0, () => ({
    __proto__: dart.getMethods(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__showtimes_page_component.ShowtimesPageComponent), []),
    [_handle_actionButtonClicked_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0, () => ({
    __proto__: dart.getFields(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.__proto__),
    [_textBinding_3$4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_4$0]: dart.fieldType(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0),
    [_appEl_4$1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TheaterSelectorComponent_4_8]: dart.fieldType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent),
    [_compView_5]: dart.fieldType(src__showtimes__date_selector_component$46template.ViewDateSelectorComponent0),
    [_DateSelectorComponent_5_5]: dart.fieldType(src__showtimes__date_selector_component.DateSelectorComponent),
    [_compView_6]: dart.fieldType(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0),
    [_LoadingViewComponent_6_5]: dart.fieldType(src__common__loading_view__loading_view_component.LoadingViewComponent),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_7_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$17]: dart.fieldType(dart.dynamic),
    [_expr_1$9]: dart.fieldType(dart.dynamic),
    [_expr_2$2]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core$.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0, {
    /*src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__showtimes__showtimes_page_component$46template, {
    /*src__showtimes__showtimes_page_component$46template._ShowtimesPageComponentNgFactory*/get _ShowtimesPageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfShowtimesPageComponent()).new("showtimes-page", dart.fn(src__showtimes__showtimes_page_component$46template.viewFactory_ShowtimesPageComponentHost0, AppViewAndintToAppViewOfShowtimesPageComponent())));
    }
  });
  dart.copyProperties(src__showtimes__showtimes_page_component$46template, {
    get ShowtimesPageComponentNgFactory() {
      return src__showtimes__showtimes_page_component$46template._ShowtimesPageComponentNgFactory;
    }
  });
  const _compView_0$18 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_compView_0");
  const _ShowtimeItemComponent_0_5$ = dart.privateName(src__showtimes__showtimes_page_component$46template, "_ShowtimeItemComponent_0_5");
  const _handle_click_0_0$0 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_handle_click_0_0");
  src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1 = class _ViewShowtimesPageComponent1 extends src__core__linker__app_view.AppView$(src__showtimes__showtimes_page_component.ShowtimesPageComponent) {
    build() {
      this[_compView_0$18] = new src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0$18].rootEl;
      this.addShimC(_el_0);
      this[_ShowtimeItemComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, dart.wrapType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), dart.fn(() => new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex))), VoidToShowtimeItemComponent())) : new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex)));
      this[_compView_0$18].create0(this[_ShowtimeItemComponent_0_5$]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$0)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_show = src__runtime__optimizations.unsafeCast(src__models__show.Show, this.locals[$_get]("$implicit"));
      let currVal_0 = local_show;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$17], currVal_0))) {
        this[_ShowtimeItemComponent_0_5$].show = currVal_0;
        this[_expr_0$17] = currVal_0;
      }
      this[_compView_0$18].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$18].destroyInternalState();
    }
    [_handle_click_0_0$0]($event) {
      let local_show = src__runtime__optimizations.unsafeCast(src__models__show.Show, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openShowDetails(local_show);
    }
  };
  (src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$18] = null;
    this[_ShowtimeItemComponent_0_5$] = null;
    this[_expr_0$17] = null;
    src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.prototype;
  dart.addTypeTests(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1);
  dart.setMethodSignature(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1, () => ({
    __proto__: dart.getMethods(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__showtimes_page_component.ShowtimesPageComponent), []),
    [_handle_click_0_0$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1, () => ({
    __proto__: dart.getFields(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.__proto__),
    [_compView_0$18]: dart.fieldType(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0),
    [_ShowtimeItemComponent_0_5$]: dart.fieldType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent),
    [_expr_0$17]: dart.fieldType(dart.dynamic)
  }));
  src__showtimes__showtimes_page_component$46template.viewFactory_ShowtimesPageComponent1 = function(parentView, parentIndex) {
    return new src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__showtimes__showtimes_page_component$46template, {
    /*src__showtimes__showtimes_page_component$46template.styles$ShowtimesPageComponentHost*/get styles$ShowtimesPageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ShowtimesPageComponent_0_5 = dart.privateName(src__showtimes__showtimes_page_component$46template, "_ShowtimesPageComponent_0_5");
  src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0 = class _ViewShowtimesPageComponentHost0 extends src__core__linker__app_view.AppView$(src__showtimes__showtimes_page_component.ShowtimesPageComponent) {
    build() {
      this[_compView_0$18] = new src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$18].rootEl;
      this[_ShowtimesPageComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__showtimes__showtimes_page_component.ShowtimesPageComponent, dart.wrapType(src__showtimes__showtimes_page_component.ShowtimesPageComponent), dart.fn(() => new src__showtimes__showtimes_page_component.ShowtimesPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToShowtimesPageComponent())) : new src__showtimes__showtimes_page_component.ShowtimesPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$18].create(this[_ShowtimesPageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfShowtimesPageComponent()).new(0, this, this.rootEl, this[_ShowtimesPageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$18].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$18].destroyInternalState();
    }
  };
  (src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$18] = null;
    this[_ShowtimesPageComponent_0_5] = null;
    src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.prototype;
  dart.addTypeTests(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0);
  dart.setMethodSignature(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0, () => ({
    __proto__: dart.getMethods(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__showtimes__showtimes_page_component.ShowtimesPageComponent), [])
  }));
  dart.setFieldSignature(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0, () => ({
    __proto__: dart.getFields(src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.__proto__),
    [_compView_0$18]: dart.fieldType(src__showtimes__showtimes_page_component$46template.ViewShowtimesPageComponent0),
    [_ShowtimesPageComponent_0_5]: dart.fieldType(src__showtimes__showtimes_page_component.ShowtimesPageComponent)
  }));
  src__showtimes__showtimes_page_component$46template.viewFactory_ShowtimesPageComponentHost0 = function(parentView, parentIndex) {
    return new src__showtimes__showtimes_page_component$46template._ViewShowtimesPageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__showtimes__showtimes_page_component$46template, {
    /*src__showtimes__showtimes_page_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__showtimes__showtimes_page_component$46template.initReflector = function() {
    if (dart.test(src__showtimes__showtimes_page_component$46template._visited)) {
      return;
    }
    src__showtimes__showtimes_page_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__showtimes__showtimes_page_component.ShowtimesPageComponent), src__showtimes__showtimes_page_component$46template.ShowtimesPageComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__loading_view__loading_view_component$46template.initReflector();
    src__common__showtime_item__showtime_item_component$46template.initReflector();
    src__common__theater_selector__theater_selector_component$46template.initReflector();
    src__restore_scroll_position$46template.initReflector();
    src__routes$46template.initReflector();
    src__showtimes__date_selector_component$46template.initReflector();
  };
  const _store$3 = dart.privateName(src__vegenews__vegenews_page_component, "_store");
  const _router$1 = dart.privateName(src__vegenews__vegenews_page_component, "_router");
  src__vegenews__vegenews_page_component.VegeNewsPageComponent = class VegeNewsPageComponent extends core$.Object {
    get messages() {
      return this[messages$7];
    }
    set messages(value) {
      super.messages = value;
    }
    get VegeNewsTitle() {
      return this.messages.vegeNews;
    }
    get viewModel() {
      return src__viewmodels__vegenews_page_view_model.VegeNewsPageViewModel.fromStore(this[_store$3]);
    }
    onActivate(previous, current) {
      src__restore_scroll_position.restoreScrollPositionIfNeeded(previous, src__routes.RoutePaths.vegeNewsDetails);
    }
    openVegeNewsDetails(vegeNews) {
      src__restore_scroll_position.storeCurrentScrollPosition();
      let url = src__routes.RoutePaths.vegeNewsDetails.toUrl({parameters: new (IdentityMapOfString$String()).from(["vegeNewsId", vegeNews.id])});
      this[_router$1].navigate(url);
    }
  };
  (src__vegenews__vegenews_page_component.VegeNewsPageComponent.new = function(store, router, messages) {
    this[_store$3] = store;
    this[_router$1] = router;
    this[messages$7] = messages;
  }).prototype = src__vegenews__vegenews_page_component.VegeNewsPageComponent.prototype;
  dart.addTypeTests(src__vegenews__vegenews_page_component.VegeNewsPageComponent);
  const messages$7 = Symbol("VegeNewsPageComponent.messages");
  src__vegenews__vegenews_page_component.VegeNewsPageComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__vegenews__vegenews_page_component.VegeNewsPageComponent, () => ({
    __proto__: dart.getMethods(src__vegenews__vegenews_page_component.VegeNewsPageComponent.__proto__),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    openVegeNewsDetails: dart.fnType(dart.void, [src__models__vegenews.VegeNews])
  }));
  dart.setGetterSignature(src__vegenews__vegenews_page_component.VegeNewsPageComponent, () => ({
    __proto__: dart.getGetters(src__vegenews__vegenews_page_component.VegeNewsPageComponent.__proto__),
    VegeNewsTitle: core$.String,
    viewModel: src__viewmodels__vegenews_page_view_model.VegeNewsPageViewModel
  }));
  dart.setFieldSignature(src__vegenews__vegenews_page_component.VegeNewsPageComponent, () => ({
    __proto__: dart.getFields(src__vegenews__vegenews_page_component.VegeNewsPageComponent.__proto__),
    [_store$3]: dart.finalFieldType(StoreOfAppState()),
    [_router$1]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages)
  }));
  dart.defineLazy(src__vegenews__vegenews_page_component$46template, {
    /*src__vegenews__vegenews_page_component$46template.styles$VegeNewsPageComponent*/get styles$VegeNewsPageComponent() {
      return [src__vegenews__vegenews_page_component$46css$46shim.styles];
    }
  });
  const _textBinding_3$5 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_textBinding_3");
  const _compView_4$1 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_compView_4");
  const _LoadingViewComponent_4_5 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_LoadingViewComponent_4_5");
  const _appEl_6 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_appEl_6");
  const _NgFor_6_9 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_NgFor_6_9");
  const _expr_0$18 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_expr_0");
  const _expr_1$10 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_expr_1");
  const _expr_2$3 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_expr_2");
  const _expr_3$0 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_expr_3");
  const _handle_actionButtonClicked_4_0 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_handle_actionButtonClicked_4_0");
  let const$5;
  src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0 = class ViewVegeNewsPageComponent0 extends src__core__linker__app_view.AppView$(src__vegenews__vegenews_page_component.VegeNewsPageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegenews/vegenews_page_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content-wrapper");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "page-title");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$5].element);
      this[_compView_4$1] = new src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new(this, 4);
      let _el_4 = this[_compView_4$1].rootEl;
      _el_0[$append](_el_4);
      this.addShimC(_el_4);
      this[_LoadingViewComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__loading_view__loading_view_component.LoadingViewComponent, dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), dart.fn(() => new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToLoadingViewComponent())) : new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      let _el_5 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_5), "grid-container");
      this.addShimC(html.HtmlElement._check(_el_5));
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_5);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(src__vegenews__vegenews_page_component$46template.viewFactory_VegeNewsPageComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_4$1].create(this[_LoadingViewComponent_4_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_5])]));
      let subscription_0 = this[_LoadingViewComponent_4_5].actionButtonClicked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_actionButtonClicked_4_0)));
      this.init(const$5 || (const$5 = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.viewModel.vegeNews.isEmpty();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$18], currVal_0))) {
        this[_LoadingViewComponent_4_5].contentEmpty = currVal_0;
        this[_expr_0$18] = currVal_0;
      }
      let currVal_1 = _ctx.messages.errorLoadingEvents;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$10], currVal_1))) {
        this[_LoadingViewComponent_4_5].errorMessage = currVal_1;
        this[_expr_1$10] = currVal_1;
      }
      let currVal_2 = _ctx.viewModel.status;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$3], currVal_2))) {
        this[_LoadingViewComponent_4_5].status = currVal_2;
        this[_expr_2$3] = currVal_2;
      }
      let currVal_3 = _ctx.viewModel.vegeNews.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_NgFor_6_9].ngForOf = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_6_9].ngDoCheck();
      }
      this[_appEl_6].detectChangesInNestedViews();
      this[_textBinding_3$5].updateText(src__runtime__interpolate.interpolateString0(_ctx.VegeNewsTitle));
      this[_compView_4$1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_6].destroyNestedViews();
      this[_compView_4$1].destroyInternalState();
      this[_LoadingViewComponent_4_5].ngOnDestroy();
    }
    [_handle_actionButtonClicked_4_0]($event) {
      let _ctx = this.ctx;
      dart.dsend(_ctx.viewModel, 'refreshVegeNews', []);
    }
    initComponentStyles() {
      let styles = src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0._componentStyles;
      if (styles == null) {
        src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0._componentStyles = styles = src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegenews__vegenews_page_component$46template.styles$VegeNewsPageComponent, src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_3$5] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_4$1] = null;
    this[_LoadingViewComponent_4_5] = null;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_expr_0$18] = null;
    this[_expr_1$10] = null;
    this[_expr_2$3] = null;
    this[_expr_3$0] = null;
    src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegenews-page"));
  }).prototype = src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.prototype;
  dart.addTypeTests(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0);
  dart.setMethodSignature(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0, () => ({
    __proto__: dart.getMethods(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews__vegenews_page_component.VegeNewsPageComponent), []),
    [_handle_actionButtonClicked_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0, () => ({
    __proto__: dart.getFields(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.__proto__),
    [_textBinding_3$5]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_4$1]: dart.fieldType(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0),
    [_LoadingViewComponent_4_5]: dart.fieldType(src__common__loading_view__loading_view_component.LoadingViewComponent),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$18]: dart.fieldType(core$.bool),
    [_expr_1$10]: dart.fieldType(core$.String),
    [_expr_2$3]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0, {
    /*src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegenews__vegenews_page_component$46template, {
    /*src__vegenews__vegenews_page_component$46template._VegeNewsPageComponentNgFactory*/get _VegeNewsPageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeNewsPageComponent()).new("vegenews-page", dart.fn(src__vegenews__vegenews_page_component$46template.viewFactory_VegeNewsPageComponentHost0, AppViewAndintToAppViewOfVegeNewsPageComponent())));
    }
  });
  dart.copyProperties(src__vegenews__vegenews_page_component$46template, {
    get VegeNewsPageComponentNgFactory() {
      return src__vegenews__vegenews_page_component$46template._VegeNewsPageComponentNgFactory;
    }
  });
  const _compView_0$19 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_compView_0");
  const _VegeNewsPosterComponent_0_5$ = dart.privateName(src__vegenews__vegenews_page_component$46template, "_VegeNewsPosterComponent_0_5");
  const _handle_click_0_0$1 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_handle_click_0_0");
  src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1 = class _ViewVegeNewsPageComponent1 extends src__core__linker__app_view.AppView$(src__vegenews__vegenews_page_component.VegeNewsPageComponent) {
    build() {
      this[_compView_0$19] = new src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0.new(this, 0);
      let _el_0 = this[_compView_0$19].rootEl;
      this.addShimC(_el_0);
      this[_VegeNewsPosterComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent, dart.wrapType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent), dart.fn(() => new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex))), VoidToVegeNewsPosterComponent())) : new src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex)));
      this[_compView_0$19].create0(this[_VegeNewsPosterComponent_0_5$]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$1)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_vegeNews = src__runtime__optimizations.unsafeCast(src__models__vegenews.VegeNews, this.locals[$_get]("$implicit"));
      let currVal_0 = local_vegeNews;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$18], currVal_0))) {
        this[_VegeNewsPosterComponent_0_5$].vegeNews = currVal_0;
        this[_expr_0$18] = currVal_0;
      }
      this[_compView_0$19].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$19].destroyInternalState();
    }
    [_handle_click_0_0$1]($event) {
      let local_vegeNews = src__runtime__optimizations.unsafeCast(src__models__vegenews.VegeNews, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openVegeNewsDetails(local_vegeNews);
    }
  };
  (src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$19] = null;
    this[_VegeNewsPosterComponent_0_5$] = null;
    this[_expr_0$18] = null;
    src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.prototype;
  dart.addTypeTests(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1);
  dart.setMethodSignature(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1, () => ({
    __proto__: dart.getMethods(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews__vegenews_page_component.VegeNewsPageComponent), []),
    [_handle_click_0_0$1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1, () => ({
    __proto__: dart.getFields(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.__proto__),
    [_compView_0$19]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component$46template.ViewVegeNewsPosterComponent0),
    [_VegeNewsPosterComponent_0_5$]: dart.fieldType(src__common__vegenews_poster__vegenews_poster_component.VegeNewsPosterComponent),
    [_expr_0$18]: dart.fieldType(dart.dynamic)
  }));
  src__vegenews__vegenews_page_component$46template.viewFactory_VegeNewsPageComponent1 = function(parentView, parentIndex) {
    return new src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegenews__vegenews_page_component$46template, {
    /*src__vegenews__vegenews_page_component$46template.styles$VegeNewsPageComponentHost*/get styles$VegeNewsPageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _VegeNewsPageComponent_0_5 = dart.privateName(src__vegenews__vegenews_page_component$46template, "_VegeNewsPageComponent_0_5");
  src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0 = class _ViewVegeNewsPageComponentHost0 extends src__core__linker__app_view.AppView$(src__vegenews__vegenews_page_component.VegeNewsPageComponent) {
    build() {
      this[_compView_0$19] = new src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$19].rootEl;
      this[_VegeNewsPageComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__vegenews__vegenews_page_component.VegeNewsPageComponent, dart.wrapType(src__vegenews__vegenews_page_component.VegeNewsPageComponent), dart.fn(() => new src__vegenews__vegenews_page_component.VegeNewsPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeNewsPageComponent())) : new src__vegenews__vegenews_page_component.VegeNewsPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$19].create(this[_VegeNewsPageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeNewsPageComponent()).new(0, this, this.rootEl, this[_VegeNewsPageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$19].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$19].destroyInternalState();
    }
  };
  (src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$19] = null;
    this[_VegeNewsPageComponent_0_5] = null;
    src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.prototype;
  dart.addTypeTests(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0);
  dart.setMethodSignature(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegenews__vegenews_page_component.VegeNewsPageComponent), [])
  }));
  dart.setFieldSignature(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0, () => ({
    __proto__: dart.getFields(src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.__proto__),
    [_compView_0$19]: dart.fieldType(src__vegenews__vegenews_page_component$46template.ViewVegeNewsPageComponent0),
    [_VegeNewsPageComponent_0_5]: dart.fieldType(src__vegenews__vegenews_page_component.VegeNewsPageComponent)
  }));
  src__vegenews__vegenews_page_component$46template.viewFactory_VegeNewsPageComponentHost0 = function(parentView, parentIndex) {
    return new src__vegenews__vegenews_page_component$46template._ViewVegeNewsPageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegenews__vegenews_page_component$46template, {
    /*src__vegenews__vegenews_page_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegenews__vegenews_page_component$46template.initReflector = function() {
    if (dart.test(src__vegenews__vegenews_page_component$46template._visited)) {
      return;
    }
    src__vegenews__vegenews_page_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegenews__vegenews_page_component.VegeNewsPageComponent), src__vegenews__vegenews_page_component$46template.VegeNewsPageComponentNgFactory);
    src__restore_scroll_position$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__loading_view__loading_view_component$46template.initReflector();
    src__common__vegenews_poster__vegenews_poster_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  const _store$4 = dart.privateName(src__vegebook__vegebook_page_component, "_store");
  const _router$2 = dart.privateName(src__vegebook__vegebook_page_component, "_router");
  src__vegebook__vegebook_page_component.VegeBookPageComponent = class VegeBookPageComponent extends core$.Object {
    get messages() {
      return this[messages$8];
    }
    set messages(value) {
      super.messages = value;
    }
    get VegeBookTitle() {
      return this.messages.vegeBook;
    }
    get viewModel() {
      return src__viewmodels__vegebook_page_view_model.VegeBookPageViewModel.fromStore(this[_store$4]);
    }
    onActivate(previous, current) {
      src__restore_scroll_position.restoreScrollPositionIfNeeded(previous, src__routes.RoutePaths.vegeBookDetails);
    }
    openVegeBookDetails(vegeBook) {
      src__restore_scroll_position.storeCurrentScrollPosition();
      let url = src__routes.RoutePaths.vegeBookDetails.toUrl({parameters: new (IdentityMapOfString$String()).from(["vegeBookId", vegeBook.id])});
      this[_router$2].navigate(url);
    }
  };
  (src__vegebook__vegebook_page_component.VegeBookPageComponent.new = function(store, router, messages) {
    this[_store$4] = store;
    this[_router$2] = router;
    this[messages$8] = messages;
  }).prototype = src__vegebook__vegebook_page_component.VegeBookPageComponent.prototype;
  dart.addTypeTests(src__vegebook__vegebook_page_component.VegeBookPageComponent);
  const messages$8 = Symbol("VegeBookPageComponent.messages");
  src__vegebook__vegebook_page_component.VegeBookPageComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__vegebook__vegebook_page_component.VegeBookPageComponent, () => ({
    __proto__: dart.getMethods(src__vegebook__vegebook_page_component.VegeBookPageComponent.__proto__),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    openVegeBookDetails: dart.fnType(dart.void, [src__models__vegebook.VegeBook])
  }));
  dart.setGetterSignature(src__vegebook__vegebook_page_component.VegeBookPageComponent, () => ({
    __proto__: dart.getGetters(src__vegebook__vegebook_page_component.VegeBookPageComponent.__proto__),
    VegeBookTitle: core$.String,
    viewModel: src__viewmodels__vegebook_page_view_model.VegeBookPageViewModel
  }));
  dart.setFieldSignature(src__vegebook__vegebook_page_component.VegeBookPageComponent, () => ({
    __proto__: dart.getFields(src__vegebook__vegebook_page_component.VegeBookPageComponent.__proto__),
    [_store$4]: dart.finalFieldType(StoreOfAppState()),
    [_router$2]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages)
  }));
  dart.defineLazy(src__vegebook__vegebook_page_component$46template, {
    /*src__vegebook__vegebook_page_component$46template.styles$VegeBookPageComponent*/get styles$VegeBookPageComponent() {
      return [src__vegebook__vegebook_page_component$46css$46shim.styles];
    }
  });
  const _textBinding_3$6 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_textBinding_3");
  const _compView_4$2 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_compView_4");
  const _LoadingViewComponent_4_5$ = dart.privateName(src__vegebook__vegebook_page_component$46template, "_LoadingViewComponent_4_5");
  const _appEl_6$ = dart.privateName(src__vegebook__vegebook_page_component$46template, "_appEl_6");
  const _NgFor_6_9$ = dart.privateName(src__vegebook__vegebook_page_component$46template, "_NgFor_6_9");
  const _expr_0$19 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_expr_0");
  const _expr_1$11 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_expr_1");
  const _expr_2$4 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_expr_2");
  const _expr_3$1 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_expr_3");
  const _handle_actionButtonClicked_4_0$ = dart.privateName(src__vegebook__vegebook_page_component$46template, "_handle_actionButtonClicked_4_0");
  let const$6;
  src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0 = class ViewVegeBookPageComponent0 extends src__core__linker__app_view.AppView$(src__vegebook__vegebook_page_component.VegeBookPageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/vegebook/vegebook_page_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content-wrapper");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "page-title");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$6].element);
      this[_compView_4$2] = new src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new(this, 4);
      let _el_4 = this[_compView_4$2].rootEl;
      _el_0[$append](_el_4);
      this.addShimC(_el_4);
      this[_LoadingViewComponent_4_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__loading_view__loading_view_component.LoadingViewComponent, dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), dart.fn(() => new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToLoadingViewComponent())) : new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      let _el_5 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_5), "grid-container");
      this.addShimC(html.HtmlElement._check(_el_5));
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_5);
      this[_appEl_6$] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6$], dart.fn(src__vegebook__vegebook_page_component$46template.viewFactory_VegeBookPageComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_6_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6$], _TemplateRef_6_8);
      this[_compView_4$2].create(this[_LoadingViewComponent_4_5$], JSArrayOfObject().of([JSArrayOfElement().of([_el_5])]));
      let subscription_0 = this[_LoadingViewComponent_4_5$].actionButtonClicked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_actionButtonClicked_4_0$)));
      this.init(const$6 || (const$6 = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.viewModel.vegeBook.isEmpty();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$19], currVal_0))) {
        this[_LoadingViewComponent_4_5$].contentEmpty = currVal_0;
        this[_expr_0$19] = currVal_0;
      }
      let currVal_1 = _ctx.messages.errorLoadingEvents;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$11], currVal_1))) {
        this[_LoadingViewComponent_4_5$].errorMessage = currVal_1;
        this[_expr_1$11] = currVal_1;
      }
      let currVal_2 = _ctx.viewModel.status;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$4], currVal_2))) {
        this[_LoadingViewComponent_4_5$].status = currVal_2;
        this[_expr_2$4] = currVal_2;
      }
      let currVal_3 = _ctx.viewModel.vegeBook.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
        this[_NgFor_6_9$].ngForOf = currVal_3;
        this[_expr_3$1] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_6_9$].ngDoCheck();
      }
      this[_appEl_6$].detectChangesInNestedViews();
      this[_textBinding_3$6].updateText(src__runtime__interpolate.interpolateString0(_ctx.VegeBookTitle));
      this[_compView_4$2].detectChanges();
    }
    destroyInternal() {
      this[_appEl_6$].destroyNestedViews();
      this[_compView_4$2].destroyInternalState();
      this[_LoadingViewComponent_4_5$].ngOnDestroy();
    }
    [_handle_actionButtonClicked_4_0$]($event) {
      let _ctx = this.ctx;
      dart.dsend(_ctx.viewModel, 'refreshVegeBook', []);
    }
    initComponentStyles() {
      let styles = src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0._componentStyles;
      if (styles == null) {
        src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0._componentStyles = styles = src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__vegebook__vegebook_page_component$46template.styles$VegeBookPageComponent, src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_3$6] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_4$2] = null;
    this[_LoadingViewComponent_4_5$] = null;
    this[_appEl_6$] = null;
    this[_NgFor_6_9$] = null;
    this[_expr_0$19] = null;
    this[_expr_1$11] = null;
    this[_expr_2$4] = null;
    this[_expr_3$1] = null;
    src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("vegebook-page"));
  }).prototype = src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.prototype;
  dart.addTypeTests(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0);
  dart.setMethodSignature(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0, () => ({
    __proto__: dart.getMethods(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook__vegebook_page_component.VegeBookPageComponent), []),
    [_handle_actionButtonClicked_4_0$]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0, () => ({
    __proto__: dart.getFields(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.__proto__),
    [_textBinding_3$6]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_4$2]: dart.fieldType(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0),
    [_LoadingViewComponent_4_5$]: dart.fieldType(src__common__loading_view__loading_view_component.LoadingViewComponent),
    [_appEl_6$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$19]: dart.fieldType(core$.bool),
    [_expr_1$11]: dart.fieldType(core$.String),
    [_expr_2$4]: dart.fieldType(dart.dynamic),
    [_expr_3$1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0, {
    /*src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__vegebook__vegebook_page_component$46template, {
    /*src__vegebook__vegebook_page_component$46template._VegeBookPageComponentNgFactory*/get _VegeBookPageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVegeBookPageComponent()).new("vegebook-page", dart.fn(src__vegebook__vegebook_page_component$46template.viewFactory_VegeBookPageComponentHost0, AppViewAndintToAppViewOfVegeBookPageComponent())));
    }
  });
  dart.copyProperties(src__vegebook__vegebook_page_component$46template, {
    get VegeBookPageComponentNgFactory() {
      return src__vegebook__vegebook_page_component$46template._VegeBookPageComponentNgFactory;
    }
  });
  const _compView_0$20 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_compView_0");
  const _VegeBookPosterComponent_0_5$ = dart.privateName(src__vegebook__vegebook_page_component$46template, "_VegeBookPosterComponent_0_5");
  const _handle_click_0_0$2 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_handle_click_0_0");
  src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1 = class _ViewVegeBookPageComponent1 extends src__core__linker__app_view.AppView$(src__vegebook__vegebook_page_component.VegeBookPageComponent) {
    build() {
      this[_compView_0$20] = new src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0.new(this, 0);
      let _el_0 = this[_compView_0$20].rootEl;
      this.addShimC(_el_0);
      this[_VegeBookPosterComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent, dart.wrapType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent), dart.fn(() => new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex))), VoidToVegeBookPosterComponent())) : new src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex)));
      this[_compView_0$20].create0(this[_VegeBookPosterComponent_0_5$]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$2)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_vegeBook = src__runtime__optimizations.unsafeCast(src__models__vegebook.VegeBook, this.locals[$_get]("$implicit"));
      let currVal_0 = local_vegeBook;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$19], currVal_0))) {
        this[_VegeBookPosterComponent_0_5$].vegeBook = currVal_0;
        this[_expr_0$19] = currVal_0;
      }
      this[_compView_0$20].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$20].destroyInternalState();
    }
    [_handle_click_0_0$2]($event) {
      let local_vegeBook = src__runtime__optimizations.unsafeCast(src__models__vegebook.VegeBook, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openVegeBookDetails(local_vegeBook);
    }
  };
  (src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$20] = null;
    this[_VegeBookPosterComponent_0_5$] = null;
    this[_expr_0$19] = null;
    src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.prototype;
  dart.addTypeTests(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1);
  dart.setMethodSignature(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1, () => ({
    __proto__: dart.getMethods(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook__vegebook_page_component.VegeBookPageComponent), []),
    [_handle_click_0_0$2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1, () => ({
    __proto__: dart.getFields(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.__proto__),
    [_compView_0$20]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component$46template.ViewVegeBookPosterComponent0),
    [_VegeBookPosterComponent_0_5$]: dart.fieldType(src__common__vegebook_poster__vegebook_poster_component.VegeBookPosterComponent),
    [_expr_0$19]: dart.fieldType(dart.dynamic)
  }));
  src__vegebook__vegebook_page_component$46template.viewFactory_VegeBookPageComponent1 = function(parentView, parentIndex) {
    return new src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegebook__vegebook_page_component$46template, {
    /*src__vegebook__vegebook_page_component$46template.styles$VegeBookPageComponentHost*/get styles$VegeBookPageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _VegeBookPageComponent_0_5 = dart.privateName(src__vegebook__vegebook_page_component$46template, "_VegeBookPageComponent_0_5");
  src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0 = class _ViewVegeBookPageComponentHost0 extends src__core__linker__app_view.AppView$(src__vegebook__vegebook_page_component.VegeBookPageComponent) {
    build() {
      this[_compView_0$20] = new src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$20].rootEl;
      this[_VegeBookPageComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__vegebook__vegebook_page_component.VegeBookPageComponent, dart.wrapType(src__vegebook__vegebook_page_component.VegeBookPageComponent), dart.fn(() => new src__vegebook__vegebook_page_component.VegeBookPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToVegeBookPageComponent())) : new src__vegebook__vegebook_page_component.VegeBookPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$20].create(this[_VegeBookPageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfVegeBookPageComponent()).new(0, this, this.rootEl, this[_VegeBookPageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$20].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$20].destroyInternalState();
    }
  };
  (src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$20] = null;
    this[_VegeBookPageComponent_0_5] = null;
    src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.prototype;
  dart.addTypeTests(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0);
  dart.setMethodSignature(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0, () => ({
    __proto__: dart.getMethods(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__vegebook__vegebook_page_component.VegeBookPageComponent), [])
  }));
  dart.setFieldSignature(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0, () => ({
    __proto__: dart.getFields(src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.__proto__),
    [_compView_0$20]: dart.fieldType(src__vegebook__vegebook_page_component$46template.ViewVegeBookPageComponent0),
    [_VegeBookPageComponent_0_5]: dart.fieldType(src__vegebook__vegebook_page_component.VegeBookPageComponent)
  }));
  src__vegebook__vegebook_page_component$46template.viewFactory_VegeBookPageComponentHost0 = function(parentView, parentIndex) {
    return new src__vegebook__vegebook_page_component$46template._ViewVegeBookPageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__vegebook__vegebook_page_component$46template, {
    /*src__vegebook__vegebook_page_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__vegebook__vegebook_page_component$46template.initReflector = function() {
    if (dart.test(src__vegebook__vegebook_page_component$46template._visited)) {
      return;
    }
    src__vegebook__vegebook_page_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__vegebook__vegebook_page_component.VegeBookPageComponent), src__vegebook__vegebook_page_component$46template.VegeBookPageComponentNgFactory);
    src__restore_scroll_position$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__loading_view__loading_view_component$46template.initReflector();
    src__common__vegebook_poster__vegebook_poster_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  const _store$5 = dart.privateName(src__events__events_page_component, "_store");
  const _router$3 = dart.privateName(src__events__events_page_component, "_router");
  const _listType = dart.privateName(src__events__events_page_component, "_listType");
  src__events__events_page_component.EventsPageComponent = class EventsPageComponent extends core$.Object {
    get messages() {
      return this[messages$9];
    }
    set messages(value) {
      super.messages = value;
    }
    get viewModel() {
      return src__viewmodels__events_page_view_model.EventsPageViewModel.fromStore(this[_store$5], this[_listType]);
    }
    get eventTypeTitle() {
      return this[_listType] === src__models__event.EventListType.nowInTheaters ? this.messages.nowInTheaters : this.messages.comingSoon;
    }
    get isDisplayingComingSoonMovies() {
      return this[_listType] === src__models__event.EventListType.comingSoon;
    }
    onActivate(previous, current) {
      this[_listType] = src__models__event.EventListType._check(current.routePath.additionalData);
      src__restore_scroll_position.restoreScrollPositionIfNeeded(previous, src__routes.RoutePaths.eventDetails);
      if (this[_listType] === src__models__event.EventListType.comingSoon) {
        this[_store$5].dispatch(new src__redux___common__common_actions.FetchComingSoonEventsIfNotLoadedAction.new());
      }
    }
    openEventDetails(event) {
      src__restore_scroll_position.storeCurrentScrollPosition();
      let url = src__routes.RoutePaths.eventDetails.toUrl({parameters: new (IdentityMapOfString$String()).from(["eventId", event.id])});
      this[_router$3].navigate(url);
    }
  };
  (src__events__events_page_component.EventsPageComponent.new = function(store, router, messages) {
    this[_listType] = null;
    this[_store$5] = store;
    this[_router$3] = router;
    this[messages$9] = messages;
  }).prototype = src__events__events_page_component.EventsPageComponent.prototype;
  dart.addTypeTests(src__events__events_page_component.EventsPageComponent);
  const messages$9 = Symbol("EventsPageComponent.messages");
  src__events__events_page_component.EventsPageComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__events__events_page_component.EventsPageComponent, () => ({
    __proto__: dart.getMethods(src__events__events_page_component.EventsPageComponent.__proto__),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    openEventDetails: dart.fnType(dart.void, [src__models__event.Event])
  }));
  dart.setGetterSignature(src__events__events_page_component.EventsPageComponent, () => ({
    __proto__: dart.getGetters(src__events__events_page_component.EventsPageComponent.__proto__),
    viewModel: src__viewmodels__events_page_view_model.EventsPageViewModel,
    eventTypeTitle: core$.String,
    isDisplayingComingSoonMovies: core$.bool
  }));
  dart.setFieldSignature(src__events__events_page_component.EventsPageComponent, () => ({
    __proto__: dart.getFields(src__events__events_page_component.EventsPageComponent.__proto__),
    [_store$5]: dart.finalFieldType(StoreOfAppState()),
    [_router$3]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    [_listType]: dart.fieldType(src__models__event.EventListType)
  }));
  dart.defineLazy(src__events__events_page_component$46template, {
    /*src__events__events_page_component$46template.styles$EventsPageComponent*/get styles$EventsPageComponent() {
      return [src__events__events_page_component$46css$46shim.styles];
    }
  });
  const _textBinding_3$7 = dart.privateName(src__events__events_page_component$46template, "_textBinding_3");
  const _compView_4$3 = dart.privateName(src__events__events_page_component$46template, "_compView_4");
  const _appEl_4$2 = dart.privateName(src__events__events_page_component$46template, "_appEl_4");
  const _TheaterSelectorComponent_4_8$ = dart.privateName(src__events__events_page_component$46template, "_TheaterSelectorComponent_4_8");
  const _compView_5$ = dart.privateName(src__events__events_page_component$46template, "_compView_5");
  const _LoadingViewComponent_5_5 = dart.privateName(src__events__events_page_component$46template, "_LoadingViewComponent_5_5");
  const _appEl_7$ = dart.privateName(src__events__events_page_component$46template, "_appEl_7");
  const _NgFor_7_9$ = dart.privateName(src__events__events_page_component$46template, "_NgFor_7_9");
  const _expr_0$20 = dart.privateName(src__events__events_page_component$46template, "_expr_0");
  const _expr_1$12 = dart.privateName(src__events__events_page_component$46template, "_expr_1");
  const _expr_2$5 = dart.privateName(src__events__events_page_component$46template, "_expr_2");
  const _expr_3$2 = dart.privateName(src__events__events_page_component$46template, "_expr_3");
  const _handle_actionButtonClicked_5_0 = dart.privateName(src__events__events_page_component$46template, "_handle_actionButtonClicked_5_0");
  let const$7;
  src__events__events_page_component$46template.ViewEventsPageComponent0 = class ViewEventsPageComponent0 extends src__core__linker__app_view.AppView$(src__events__events_page_component.EventsPageComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/events/events_page_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content-wrapper");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "page-title");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$7].element);
      this[_compView_4$3] = new src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0.new(this, 4);
      let _el_4 = this[_compView_4$3].rootEl;
      _el_1[$append](_el_4);
      this.addShimC(_el_4);
      this[_appEl_4$2] = new src__core__linker__view_container.ViewContainer.new(4, 1, this, _el_4);
      this[_TheaterSelectorComponent_4_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent, dart.wrapType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent), dart.fn(() => new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_4$2]), VoidToTheaterSelectorComponent())) : new src__common__theater_selector__theater_selector_component.TheaterSelectorComponent.new(StoreOfAppState()._check(this.parentView.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), this[_appEl_4$2]);
      this[_compView_4$3].create0(this[_TheaterSelectorComponent_4_8$]);
      this[_compView_5$] = new src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0.new(this, 5);
      let _el_5 = this[_compView_5$].rootEl;
      _el_0[$append](_el_5);
      this.addShimC(_el_5);
      this[_LoadingViewComponent_5_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__loading_view__loading_view_component.LoadingViewComponent, dart.wrapType(src__common__loading_view__loading_view_component.LoadingViewComponent), dart.fn(() => new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToLoadingViewComponent())) : new src__common__loading_view__loading_view_component.LoadingViewComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      let _el_6 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_6), "grid-container");
      this.addShimC(html.HtmlElement._check(_el_6));
      let _anchor_7 = src__runtime__dom_helpers.appendAnchor(_el_6);
      this[_appEl_7$] = new src__core__linker__view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7$], dart.fn(src__events__events_page_component$46template.viewFactory_EventsPageComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_7_9$] = new src__common__directives__ng_for.NgFor.new(this[_appEl_7$], _TemplateRef_7_8);
      this[_compView_5$].create(this[_LoadingViewComponent_5_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_6])]));
      let subscription_0 = this[_LoadingViewComponent_5_5].actionButtonClicked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_actionButtonClicked_5_0)));
      this.init(const$7 || (const$7 = dart.constList([], core$.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.viewModel.events.isEmpty();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$20], currVal_0))) {
        this[_LoadingViewComponent_5_5].contentEmpty = currVal_0;
        this[_expr_0$20] = currVal_0;
      }
      let currVal_1 = _ctx.messages.errorLoadingEvents;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$12], currVal_1))) {
        this[_LoadingViewComponent_5_5].errorMessage = currVal_1;
        this[_expr_1$12] = currVal_1;
      }
      let currVal_2 = _ctx.viewModel.status;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$5], currVal_2))) {
        this[_LoadingViewComponent_5_5].status = currVal_2;
        this[_expr_2$5] = currVal_2;
      }
      let currVal_3 = _ctx.viewModel.events.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$2], currVal_3))) {
        this[_NgFor_7_9$].ngForOf = currVal_3;
        this[_expr_3$2] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_7_9$].ngDoCheck();
      }
      this[_appEl_4$2].detectChangesInNestedViews();
      this[_appEl_7$].detectChangesInNestedViews();
      this[_textBinding_3$7].updateText(src__runtime__interpolate.interpolateString0(_ctx.eventTypeTitle));
      this[_compView_4$3].detectChanges();
      this[_compView_5$].detectChanges();
    }
    destroyInternal() {
      this[_appEl_4$2].destroyNestedViews();
      this[_appEl_7$].destroyNestedViews();
      this[_compView_4$3].destroyInternalState();
      this[_compView_5$].destroyInternalState();
      this[_LoadingViewComponent_5_5].ngOnDestroy();
    }
    [_handle_actionButtonClicked_5_0]($event) {
      let _ctx = this.ctx;
      dart.dsend(_ctx.viewModel, 'refreshEvents', []);
    }
    initComponentStyles() {
      let styles = src__events__events_page_component$46template.ViewEventsPageComponent0._componentStyles;
      if (styles == null) {
        src__events__events_page_component$46template.ViewEventsPageComponent0._componentStyles = styles = src__events__events_page_component$46template.ViewEventsPageComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__events__events_page_component$46template.styles$EventsPageComponent, src__events__events_page_component$46template.ViewEventsPageComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__events__events_page_component$46template.ViewEventsPageComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_3$7] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_4$3] = null;
    this[_appEl_4$2] = null;
    this[_TheaterSelectorComponent_4_8$] = null;
    this[_compView_5$] = null;
    this[_LoadingViewComponent_5_5] = null;
    this[_appEl_7$] = null;
    this[_NgFor_7_9$] = null;
    this[_expr_0$20] = null;
    this[_expr_1$12] = null;
    this[_expr_2$5] = null;
    this[_expr_3$2] = null;
    src__events__events_page_component$46template.ViewEventsPageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("events-page"));
  }).prototype = src__events__events_page_component$46template.ViewEventsPageComponent0.prototype;
  dart.addTypeTests(src__events__events_page_component$46template.ViewEventsPageComponent0);
  dart.setMethodSignature(src__events__events_page_component$46template.ViewEventsPageComponent0, () => ({
    __proto__: dart.getMethods(src__events__events_page_component$46template.ViewEventsPageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__events__events_page_component.EventsPageComponent), []),
    [_handle_actionButtonClicked_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__events__events_page_component$46template.ViewEventsPageComponent0, () => ({
    __proto__: dart.getFields(src__events__events_page_component$46template.ViewEventsPageComponent0.__proto__),
    [_textBinding_3$7]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_4$3]: dart.fieldType(src__common__theater_selector__theater_selector_component$46template.ViewTheaterSelectorComponent0),
    [_appEl_4$2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TheaterSelectorComponent_4_8$]: dart.fieldType(src__common__theater_selector__theater_selector_component.TheaterSelectorComponent),
    [_compView_5$]: dart.fieldType(src__common__loading_view__loading_view_component$46template.ViewLoadingViewComponent0),
    [_LoadingViewComponent_5_5]: dart.fieldType(src__common__loading_view__loading_view_component.LoadingViewComponent),
    [_appEl_7$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_7_9$]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$20]: dart.fieldType(core$.bool),
    [_expr_1$12]: dart.fieldType(core$.String),
    [_expr_2$5]: dart.fieldType(dart.dynamic),
    [_expr_3$2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__events__events_page_component$46template.ViewEventsPageComponent0, {
    /*src__events__events_page_component$46template.ViewEventsPageComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__events__events_page_component$46template, {
    /*src__events__events_page_component$46template._EventsPageComponentNgFactory*/get _EventsPageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfEventsPageComponent()).new("events-page", dart.fn(src__events__events_page_component$46template.viewFactory_EventsPageComponentHost0, AppViewAndintToAppViewOfEventsPageComponent())));
    }
  });
  dart.copyProperties(src__events__events_page_component$46template, {
    get EventsPageComponentNgFactory() {
      return src__events__events_page_component$46template._EventsPageComponentNgFactory;
    }
  });
  const _compView_0$21 = dart.privateName(src__events__events_page_component$46template, "_compView_0");
  const _EventPosterComponent_0_5$ = dart.privateName(src__events__events_page_component$46template, "_EventPosterComponent_0_5");
  const _handle_click_0_0$3 = dart.privateName(src__events__events_page_component$46template, "_handle_click_0_0");
  src__events__events_page_component$46template._ViewEventsPageComponent1 = class _ViewEventsPageComponent1 extends src__core__linker__app_view.AppView$(src__events__events_page_component.EventsPageComponent) {
    build() {
      this[_compView_0$21] = new src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.new(this, 0);
      let _el_0 = this[_compView_0$21].rootEl;
      this.addShimC(_el_0);
      this[_EventPosterComponent_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__event_poster__event_poster_component.EventPosterComponent, dart.wrapType(src__common__event_poster__event_poster_component.EventPosterComponent), dart.fn(() => new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex))), VoidToEventPosterComponent())) : new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex)));
      this[_compView_0$21].create0(this[_EventPosterComponent_0_5$]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$3)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_event = src__runtime__optimizations.unsafeCast(src__models__event.Event, this.locals[$_get]("$implicit"));
      let currVal_0 = local_event;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$20], currVal_0))) {
        this[_EventPosterComponent_0_5$].event = currVal_0;
        this[_expr_0$20] = currVal_0;
      }
      let currVal_1 = _ctx.isDisplayingComingSoonMovies;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$12], currVal_1))) {
        this[_EventPosterComponent_0_5$].isComingSoon = currVal_1;
        this[_expr_1$12] = currVal_1;
      }
      this[_compView_0$21].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$21].destroyInternalState();
    }
    [_handle_click_0_0$3]($event) {
      let local_event = src__runtime__optimizations.unsafeCast(src__models__event.Event, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openEventDetails(local_event);
    }
  };
  (src__events__events_page_component$46template._ViewEventsPageComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$21] = null;
    this[_EventPosterComponent_0_5$] = null;
    this[_expr_0$20] = null;
    this[_expr_1$12] = null;
    src__events__events_page_component$46template._ViewEventsPageComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__events__events_page_component$46template._ViewEventsPageComponent1.prototype;
  dart.addTypeTests(src__events__events_page_component$46template._ViewEventsPageComponent1);
  dart.setMethodSignature(src__events__events_page_component$46template._ViewEventsPageComponent1, () => ({
    __proto__: dart.getMethods(src__events__events_page_component$46template._ViewEventsPageComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__events__events_page_component.EventsPageComponent), []),
    [_handle_click_0_0$3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__events__events_page_component$46template._ViewEventsPageComponent1, () => ({
    __proto__: dart.getFields(src__events__events_page_component$46template._ViewEventsPageComponent1.__proto__),
    [_compView_0$21]: dart.fieldType(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0),
    [_EventPosterComponent_0_5$]: dart.fieldType(src__common__event_poster__event_poster_component.EventPosterComponent),
    [_expr_0$20]: dart.fieldType(dart.dynamic),
    [_expr_1$12]: dart.fieldType(core$.bool)
  }));
  src__events__events_page_component$46template.viewFactory_EventsPageComponent1 = function(parentView, parentIndex) {
    return new src__events__events_page_component$46template._ViewEventsPageComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__events__events_page_component$46template, {
    /*src__events__events_page_component$46template.styles$EventsPageComponentHost*/get styles$EventsPageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _EventsPageComponent_0_5 = dart.privateName(src__events__events_page_component$46template, "_EventsPageComponent_0_5");
  src__events__events_page_component$46template._ViewEventsPageComponentHost0 = class _ViewEventsPageComponentHost0 extends src__core__linker__app_view.AppView$(src__events__events_page_component.EventsPageComponent) {
    build() {
      this[_compView_0$21] = new src__events__events_page_component$46template.ViewEventsPageComponent0.new(this, 0);
      this.rootEl = this[_compView_0$21].rootEl;
      this[_EventsPageComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__events__events_page_component.EventsPageComponent, dart.wrapType(src__events__events_page_component.EventsPageComponent), dart.fn(() => new src__events__events_page_component.EventsPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToEventsPageComponent())) : new src__events__events_page_component.EventsPageComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$21].create(this[_EventsPageComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfEventsPageComponent()).new(0, this, this.rootEl, this[_EventsPageComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$21].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$21].destroyInternalState();
    }
  };
  (src__events__events_page_component$46template._ViewEventsPageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$21] = null;
    this[_EventsPageComponent_0_5] = null;
    src__events__events_page_component$46template._ViewEventsPageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__events__events_page_component$46template._ViewEventsPageComponentHost0.prototype;
  dart.addTypeTests(src__events__events_page_component$46template._ViewEventsPageComponentHost0);
  dart.setMethodSignature(src__events__events_page_component$46template._ViewEventsPageComponentHost0, () => ({
    __proto__: dart.getMethods(src__events__events_page_component$46template._ViewEventsPageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__events__events_page_component.EventsPageComponent), [])
  }));
  dart.setFieldSignature(src__events__events_page_component$46template._ViewEventsPageComponentHost0, () => ({
    __proto__: dart.getFields(src__events__events_page_component$46template._ViewEventsPageComponentHost0.__proto__),
    [_compView_0$21]: dart.fieldType(src__events__events_page_component$46template.ViewEventsPageComponent0),
    [_EventsPageComponent_0_5]: dart.fieldType(src__events__events_page_component.EventsPageComponent)
  }));
  src__events__events_page_component$46template.viewFactory_EventsPageComponentHost0 = function(parentView, parentIndex) {
    return new src__events__events_page_component$46template._ViewEventsPageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__events__events_page_component$46template, {
    /*src__events__events_page_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__events__events_page_component$46template.initReflector = function() {
    if (dart.test(src__events__events_page_component$46template._visited)) {
      return;
    }
    src__events__events_page_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__events__events_page_component.EventsPageComponent), src__events__events_page_component$46template.EventsPageComponentNgFactory);
    src__restore_scroll_position$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__event_poster__event_poster_component$46template.initReflector();
    src__common__loading_view__loading_view_component$46template.initReflector();
    src__common__theater_selector__theater_selector_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.defineLazy(src__routes$46template, {
    /*src__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes$46template.initReflector = function() {
    if (dart.test(src__routes$46template._visited)) {
      return;
    }
    src__routes$46template._visited = true;
    angular_router$46template.initReflector();
    src__events__events_page_component$46template.initReflector();
    src__vegebook__vegebook_page_component$46template.initReflector();
    src__vegenews__vegenews_page_component$46template.initReflector();
  };
  const _store$6 = dart.privateName(src__event_details__event_details_component, "_store");
  const _router$4 = dart.privateName(src__event_details__event_details_component, "_router");
  const _navigatedFromApp$0 = dart.privateName(src__event_details__event_details_component, "_navigatedFromApp");
  const _eventDetailsSubscription = dart.privateName(src__event_details__event_details_component, "_eventDetailsSubscription");
  const _populateEventDetails = dart.privateName(src__event_details__event_details_component, "_populateEventDetails");
  const _animateContentIntoView$0 = dart.privateName(src__event_details__event_details_component, "_animateContentIntoView");
  const _waitForEventDetails$0 = dart.privateName(src__event_details__event_details_component, "_waitForEventDetails");
  src__event_details__event_details_component.EventDetailsComponent = class EventDetailsComponent extends core$.Object {
    get messages() {
      return this[messages$10];
    }
    set messages(value) {
      super.messages = value;
    }
    get event() {
      return this[event$1];
    }
    set event(value) {
      this[event$1] = value;
    }
    get show() {
      return this[show$0];
    }
    set show(value) {
      this[show$0] = value;
    }
    get contentVisible() {
      return this[contentVisible$0];
    }
    set contentVisible(value) {
      this[contentVisible$0] = value;
    }
    ngOnInit() {
      html.window[$scrollTo](0, 0);
    }
    onActivate(previous, current) {
      this[_navigatedFromApp$0] = previous != null;
      this[_populateEventDetails](current.parameters[$_get]("eventId"), current.parameters[$_get]("showId"));
    }
    ngOnDestroy() {
      let t = this[_eventDetailsSubscription];
      return t == null ? null : t.cancel();
    }
    [_populateEventDetails](eventId, showId) {
      this.event = src__redux__event__event_selectors.eventByIdSelector(this[_store$6].state, eventId);
      this.show = src__redux__show__show_selectors.showByIdSelector(this[_store$6].state, showId);
      if (this.show != null) {
        let t = this.event;
        t == null ? this.event = src__redux__event__event_selectors.eventForShowSelector(this[_store$6].state, this.show) : t;
      }
      if (this.event != null) {
        this[_store$6].dispatch(new src__redux__actor__actor_actions.FetchActorAvatarsAction.new(this.event));
        this[_animateContentIntoView$0]();
      } else {
        this[_store$6].dispatch(new src__redux__event__event_actions.RefreshEventsAction.new(src__models__event.EventListType.nowInTheaters));
        this[_store$6].dispatch(new src__redux__event__event_actions.RefreshEventsAction.new(src__models__event.EventListType.comingSoon));
        this[_waitForEventDetails$0](eventId, showId);
      }
    }
    [_waitForEventDetails$0](eventId, showId) {
      let state = this[_store$6].state.eventState;
      let isLoading = state.nowInTheatersStatus === src__models__loading_status.LoadingStatus.loading || state.comingSoonStatus === src__models__loading_status.LoadingStatus.loading;
      if (!isLoading) {
        return;
      }
      this[_eventDetailsSubscription] = this[_store$6].onChange.listen(dart.fn(state => {
        {
          let state = this[_store$6].state.eventState;
          let hasFinishedLoading = state.nowInTheatersStatus !== src__models__loading_status.LoadingStatus.loading && state.comingSoonStatus !== src__models__loading_status.LoadingStatus.loading;
          if (hasFinishedLoading) {
            this[_populateEventDetails](eventId, showId);
            this[_eventDetailsSubscription].cancel();
            this[_eventDetailsSubscription] = null;
            this[_animateContentIntoView$0]();
          }
        }
      }, AppStateToNull()));
    }
    [_animateContentIntoView$0]() {
      return async.Timer.new(core$.Duration.zero, dart.fn(() => this.contentVisible = true, VoidTobool()));
    }
    openShow() {
      return html.window[$open](this.show.url, "Tickets for " + dart.str(this.show.title));
    }
    goBack() {
      if (dart.test(this[_navigatedFromApp$0])) {
        html.window.history.back();
        return;
      }
      this[_router$4].navigateByUrl(src__routes.RoutePaths.nowInTheaters.toUrl(), {replace: true});
    }
  };
  (src__event_details__event_details_component.EventDetailsComponent.new = function(store, router, messages) {
    this[event$1] = null;
    this[show$0] = null;
    this[_navigatedFromApp$0] = false;
    this[contentVisible$0] = false;
    this[_eventDetailsSubscription] = null;
    this[_store$6] = store;
    this[_router$4] = router;
    this[messages$10] = messages;
  }).prototype = src__event_details__event_details_component.EventDetailsComponent.prototype;
  dart.addTypeTests(src__event_details__event_details_component.EventDetailsComponent);
  const messages$10 = Symbol("EventDetailsComponent.messages");
  const event$1 = Symbol("EventDetailsComponent.event");
  const show$0 = Symbol("EventDetailsComponent.show");
  const contentVisible$0 = Symbol("EventDetailsComponent.contentVisible");
  src__event_details__event_details_component.EventDetailsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__lifecycle.OnActivate, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__event_details__event_details_component.EventDetailsComponent, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component.EventDetailsComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_populateEventDetails]: dart.fnType(dart.void, [core$.String, core$.String]),
    [_waitForEventDetails$0]: dart.fnType(dart.void, [core$.String, core$.String]),
    [_animateContentIntoView$0]: dart.fnType(dart.void, []),
    openShow: dart.fnType(dart.void, []),
    goBack: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component.EventDetailsComponent, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component.EventDetailsComponent.__proto__),
    [_store$6]: dart.finalFieldType(StoreOfAppState()),
    [_router$4]: dart.finalFieldType(src__router__router.Router),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    event: dart.fieldType(src__models__event.Event),
    show: dart.fieldType(src__models__show.Show),
    [_navigatedFromApp$0]: dart.fieldType(core$.bool),
    contentVisible: dart.fieldType(core$.bool),
    [_eventDetailsSubscription]: dart.fieldType(StreamSubscriptionOfAppState())
  }));
  dart.defineLazy(src__event_details__event_details_component$46template, {
    /*src__event_details__event_details_component$46template.styles$EventDetailsComponent*/get styles$EventDetailsComponent() {
      return [src__event_details__event_details_component$46css$46shim.styles];
    }
  });
  const _appEl_0$3 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_0");
  const _NgIf_0_9$0 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_0_9");
  src__event_details__event_details_component$46template.ViewEventDetailsComponent0 = class ViewEventDetailsComponent0 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:web/lib/src/event_details/event_details_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$3] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$3], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9$0] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$3], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$0].ngIf = _ctx.event != null;
      this[_appEl_0$3].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0$3].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = src__event_details__event_details_component$46template.ViewEventDetailsComponent0._componentStyles;
      if (styles == null) {
        src__event_details__event_details_component$46template.ViewEventDetailsComponent0._componentStyles = styles = src__event_details__event_details_component$46template.ViewEventDetailsComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(src__event_details__event_details_component$46template.styles$EventDetailsComponent, src__event_details__event_details_component$46template.ViewEventDetailsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (src__event_details__event_details_component$46template.ViewEventDetailsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$3] = null;
    this[_NgIf_0_9$0] = null;
    src__event_details__event_details_component$46template.ViewEventDetailsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("event-details"));
  }).prototype = src__event_details__event_details_component$46template.ViewEventDetailsComponent0.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template.ViewEventDetailsComponent0);
  dart.setMethodSignature(src__event_details__event_details_component$46template.ViewEventDetailsComponent0, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template.ViewEventDetailsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template.ViewEventDetailsComponent0, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template.ViewEventDetailsComponent0.__proto__),
    [_appEl_0$3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9$0]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__event_details__event_details_component$46template.ViewEventDetailsComponent0, {
    /*src__event_details__event_details_component$46template.ViewEventDetailsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(src__event_details__event_details_component$46template, {
    /*src__event_details__event_details_component$46template._EventDetailsComponentNgFactory*/get _EventDetailsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfEventDetailsComponent()).new("event-details", dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponentHost0, AppViewAndintToAppViewOfEventDetailsComponent())));
    }
  });
  dart.copyProperties(src__event_details__event_details_component$46template, {
    get EventDetailsComponentNgFactory() {
      return src__event_details__event_details_component$46template._EventDetailsComponentNgFactory;
    }
  });
  const _textBinding_7$0 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_7");
  const _textBinding_10 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_10");
  const _compView_1$2 = dart.privateName(src__event_details__event_details_component$46template, "_compView_1");
  const _EventLandscapeImageComponent_1_5 = dart.privateName(src__event_details__event_details_component$46template, "_EventLandscapeImageComponent_1_5");
  const _compView_4$4 = dart.privateName(src__event_details__event_details_component$46template, "_compView_4");
  const _EventPosterComponent_4_5 = dart.privateName(src__event_details__event_details_component$46template, "_EventPosterComponent_4_5");
  const _appEl_12 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_12");
  const _NgIf_12_9 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_12_9");
  const _compView_13 = dart.privateName(src__event_details__event_details_component$46template, "_compView_13");
  const _ContentRatingComponent_13_5 = dart.privateName(src__event_details__event_details_component$46template, "_ContentRatingComponent_13_5");
  const _appEl_14 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_14");
  const _NgIf_14_9 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_14_9");
  const _appEl_15 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_15");
  const _NgIf_15_9 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_15_9");
  const _appEl_16 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_16");
  const _NgIf_16_9 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_16_9");
  const _appEl_17 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_17");
  const _NgIf_17_9 = dart.privateName(src__event_details__event_details_component$46template, "_NgIf_17_9");
  const _expr_0$21 = dart.privateName(src__event_details__event_details_component$46template, "_expr_0");
  const _expr_1$13 = dart.privateName(src__event_details__event_details_component$46template, "_expr_1");
  const _expr_2$6 = dart.privateName(src__event_details__event_details_component$46template, "_expr_2");
  const _expr_6 = dart.privateName(src__event_details__event_details_component$46template, "_expr_6");
  const _el_0$7 = dart.privateName(src__event_details__event_details_component$46template, "_el_0");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent1 = class _ViewEventDetailsComponent1 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0$7] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$7], "container");
      this.addShimC(this[_el_0$7]);
      this[_compView_1$2] = new src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0.new(this, 1);
      let _el_1 = this[_compView_1$2].rootEl;
      this[_el_0$7][$append](_el_1);
      this.addShimC(_el_1);
      this[_EventLandscapeImageComponent_1_5] = new src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent.new();
      this[_compView_1$2].create0(this[_EventLandscapeImageComponent_1_5]);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, this[_el_0$7], "img");
      this.updateChildClass(html.HtmlElement._check(_el_2), "back");
      src__runtime__dom_helpers.setAttribute(_el_2, "src", "images/back.svg");
      this.addShimE(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, this[_el_0$7]);
      this.updateChildClass(_el_3, "event-header");
      this.addShimC(_el_3);
      this[_compView_4$4] = new src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0.new(this, 4);
      let _el_4 = this[_compView_4$4].rootEl;
      _el_3[$append](_el_4);
      this.addShimC(_el_4);
      this[_EventPosterComponent_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__event_poster__event_poster_component.EventPosterComponent, dart.wrapType(src__common__event_poster__event_poster_component.EventPosterComponent), dart.fn(() => new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToEventPosterComponent())) : new src__common__event_poster__event_poster_component.EventPosterComponent.new(src__i18n__messages.Messages._check(this.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_4$4].create0(this[_EventPosterComponent_4_5]);
      let _el_5 = src__runtime__dom_helpers.appendDiv(doc, _el_3);
      this.updateChildClass(_el_5, "event-information");
      this.addShimC(_el_5);
      let _el_6 = src__runtime__dom_helpers.appendElement(doc, _el_5, "h2");
      this.updateChildClass(html.HtmlElement._check(_el_6), "title");
      this.addShimE(_el_6);
      _el_6[$append](this[_textBinding_7$0].element);
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, _el_5);
      this.updateChildClass(_el_8, "body");
      this.addShimC(_el_8);
      let _el_9 = src__runtime__dom_helpers.appendElement(doc, _el_8, "p");
      this.updateChildClass(html.HtmlElement._check(_el_9), "length");
      this.addShimE(_el_9);
      _el_9[$append](this[_textBinding_10].element);
      let _text_11 = src__runtime__dom_helpers.appendText(_el_9, " min");
      let _anchor_12 = src__runtime__dom_helpers.appendAnchor(_el_8);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 8, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_12_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_12], _TemplateRef_12_8);
      this[_compView_13] = new src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0.new(this, 13);
      let _el_13 = this[_compView_13].rootEl;
      _el_5[$append](_el_13);
      src__runtime__dom_helpers.setAttribute(_el_13, "size", "medium");
      this.addShimC(_el_13);
      this[_ContentRatingComponent_13_5] = new src__common__content_rating__content_rating_component.ContentRatingComponent.new();
      this[_compView_13].create0(this[_ContentRatingComponent_13_5]);
      let _anchor_14 = src__runtime__dom_helpers.appendAnchor(this[_el_0$7]);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 0, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent3, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_14_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _anchor_15 = src__runtime__dom_helpers.appendAnchor(this[_el_0$7]);
      this[_appEl_15] = new src__core__linker__view_container.ViewContainer.new(15, 0, this, _anchor_15);
      let _TemplateRef_15_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_15], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent4, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_15_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_15], _TemplateRef_15_8);
      let _anchor_16 = src__runtime__dom_helpers.appendAnchor(this[_el_0$7]);
      this[_appEl_16] = new src__core__linker__view_container.ViewContainer.new(16, 0, this, _anchor_16);
      let _TemplateRef_16_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_16], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent5, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_16_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _anchor_17 = src__runtime__dom_helpers.appendAnchor(this[_el_0$7]);
      this[_appEl_17] = new src__core__linker__view_container.ViewContainer.new(17, 0, this, _anchor_17);
      let _TemplateRef_17_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_17], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent6, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_17_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_17], _TemplateRef_17_8);
      _el_2[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'goBack')));
      this.init1(this[_el_0$7]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.event;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$13], currVal_1))) {
        this[_EventLandscapeImageComponent_1_5].event = currVal_1;
        this[_expr_1$13] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_EventLandscapeImageComponent_1_5].ngOnInit();
      }
      if (firstCheck) {
        this[_EventPosterComponent_4_5].hasDetails = false;
        this[_EventPosterComponent_4_5].isTouchable = false;
      }
      let currVal_2 = _ctx.event;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$6], currVal_2))) {
        this[_EventPosterComponent_4_5].event = currVal_2;
        this[_expr_2$6] = currVal_2;
      }
      this[_NgIf_12_9].ngIf = _ctx.event.director != null;
      let currVal_6 = _ctx.event;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ContentRatingComponent_13_5].event = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgIf_14_9].ngIf = _ctx.show != null;
      this[_NgIf_15_9].ngIf = _ctx.event.hasSynopsis;
      this[_NgIf_16_9].ngIf = _ctx.event.actors.isNotEmpty();
      this[_NgIf_17_9].ngIf = _ctx.event.galleryImages.isNotEmpty();
      this[_appEl_12].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_15].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_17].detectChangesInNestedViews();
      let currVal_0 = _ctx.contentVisible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$21], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0$7], "visible", currVal_0);
        this[_expr_0$21] = currVal_0;
      }
      this[_textBinding_7$0].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.title));
      this[_textBinding_10].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.lengthInMinutes));
      this[_compView_1$2].detectChanges();
      this[_compView_4$4].detectChanges();
      this[_compView_13].detectChanges();
    }
    destroyInternal() {
      this[_appEl_12].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_15].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
      this[_appEl_17].destroyNestedViews();
      this[_compView_1$2].destroyInternalState();
      this[_compView_4$4].destroyInternalState();
      this[_compView_13].destroyInternalState();
      this[_EventLandscapeImageComponent_1_5].ngOnDestroy();
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_7$0] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_10] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_1$2] = null;
    this[_EventLandscapeImageComponent_1_5] = null;
    this[_compView_4$4] = null;
    this[_EventPosterComponent_4_5] = null;
    this[_appEl_12] = null;
    this[_NgIf_12_9] = null;
    this[_compView_13] = null;
    this[_ContentRatingComponent_13_5] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_15] = null;
    this[_NgIf_15_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_17] = null;
    this[_NgIf_17_9] = null;
    this[_expr_0$21] = null;
    this[_expr_1$13] = null;
    this[_expr_2$6] = null;
    this[_expr_6] = null;
    this[_el_0$7] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent1.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent1);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent1, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent1, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent1.__proto__),
    [_textBinding_7$0]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_10]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_1$2]: dart.fieldType(src__event_details__landscape_image__event_landscape_image_component$46template.ViewEventLandscapeImageComponent0),
    [_EventLandscapeImageComponent_1_5]: dart.fieldType(src__event_details__landscape_image__event_landscape_image_component.EventLandscapeImageComponent),
    [_compView_4$4]: dart.fieldType(src__common__event_poster__event_poster_component$46template.ViewEventPosterComponent0),
    [_EventPosterComponent_4_5]: dart.fieldType(src__common__event_poster__event_poster_component.EventPosterComponent),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_12_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_13]: dart.fieldType(src__common__content_rating__content_rating_component$46template.ViewContentRatingComponent0),
    [_ContentRatingComponent_13_5]: dart.fieldType(src__common__content_rating__content_rating_component.ContentRatingComponent),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_14_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_15]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_15_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_16]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_16_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_17]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_17_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$21]: dart.fieldType(core$.bool),
    [_expr_1$13]: dart.fieldType(dart.dynamic),
    [_expr_2$6]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_el_0$7]: dart.fieldType(html.DivElement)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent1 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent1.new(parentView, parentIndex);
  };
  const _textBinding_2$4 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_2");
  const _textBinding_4$6 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_4");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent2 = class _ViewEventDetailsComponent2 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(html.HtmlElement._check(_el_0), "director");
      this.addShimE(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendElement(doc, _el_0, "strong");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$4].element);
      let _text_3 = src__runtime__dom_helpers.appendText(_el_0, ": ");
      _el_0[$append](this[_textBinding_4$6].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$4].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.director));
      this[_textBinding_4$6].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.director));
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_2$4] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_4$6] = new src__runtime__text_binding.TextBinding.new();
    src__event_details__event_details_component$46template._ViewEventDetailsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent2.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent2);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent2, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent2, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent2.__proto__),
    [_textBinding_2$4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_4$6]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent2 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent2.new(parentView, parentIndex);
  };
  const _ShowtimeItemComponent_1_5 = dart.privateName(src__event_details__event_details_component$46template, "_ShowtimeItemComponent_1_5");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent3 = class _ViewEventDetailsComponent3 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "centered-content");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1$2] = new src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1$2].rootEl;
      _el_0[$append](_el_1);
      src__runtime__dom_helpers.setAttribute(_el_1, "full-opacity", "");
      src__runtime__dom_helpers.setAttribute(_el_1, "style", "margin-top: 45px");
      this.addShimC(_el_1);
      this[_ShowtimeItemComponent_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent, dart.wrapType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent), dart.fn(() => new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex))), VoidToShowtimeItemComponent())) : new src__common__showtime_item__showtime_item_component.ShowtimeItemComponent.new(src__i18n__messages.Messages._check(this.parentView.parentView.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.parentView.viewData.parentIndex)));
      this[_compView_1$2].create0(this[_ShowtimeItemComponent_1_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.show;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$21], currVal_0))) {
        this[_ShowtimeItemComponent_1_5].show = currVal_0;
        this[_expr_0$21] = currVal_0;
      }
      this[_compView_1$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$2].destroyInternalState();
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent3.new = function(parentView, parentIndex) {
    this[_compView_1$2] = null;
    this[_ShowtimeItemComponent_1_5] = null;
    this[_expr_0$21] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent3.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent3);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent3, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent3, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent3.__proto__),
    [_compView_1$2]: dart.fieldType(src__common__showtime_item__showtime_item_component$46template.ViewShowtimeItemComponent0),
    [_ShowtimeItemComponent_1_5]: dart.fieldType(src__common__showtime_item__showtime_item_component.ShowtimeItemComponent),
    [_expr_0$21]: dart.fieldType(dart.dynamic)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent3 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent3.new(parentView, parentIndex);
  };
  const _textBinding_3$8 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_3");
  const _textBinding_5$1 = dart.privateName(src__event_details__event_details_component$46template, "_textBinding_5");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent4 = class _ViewEventDetailsComponent4 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$8].element);
      let _el_4 = src__runtime__dom_helpers.appendElement(doc, _el_1, "p");
      this.updateChildClass(html.HtmlElement._check(_el_4), "synopsis");
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5$1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_3$8].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.storyline));
      this[_textBinding_5$1].updateText(src__runtime__interpolate.interpolateString0(_ctx.event.synopsis));
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_3$8] = new src__runtime__text_binding.TextBinding.new();
    this[_textBinding_5$1] = new src__runtime__text_binding.TextBinding.new();
    src__event_details__event_details_component$46template._ViewEventDetailsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent4.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent4);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent4, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent4, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent4.__proto__),
    [_textBinding_3$8]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_textBinding_5$1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent4 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent4.new(parentView, parentIndex);
  };
  const _ActorScrollerComponent_4_5 = dart.privateName(src__event_details__event_details_component$46template, "_ActorScrollerComponent_4_5");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent5 = class _ViewEventDetailsComponent5 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section white top-shadow actor-section");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$8].element);
      this[_compView_4$4] = new src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0.new(this, 4);
      let _el_4 = this[_compView_4$4].rootEl;
      _el_1[$append](_el_4);
      this.addShimC(_el_4);
      this[_ActorScrollerComponent_4_5] = new src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent.new();
      this[_compView_4$4].create0(this[_ActorScrollerComponent_4_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.event.actors.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$21], currVal_0))) {
        this[_ActorScrollerComponent_4_5].actors = currVal_0;
        this[_expr_0$21] = currVal_0;
      }
      this[_textBinding_3$8].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.cast));
      this[_compView_4$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_4$4].destroyInternalState();
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_3$8] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_4$4] = null;
    this[_ActorScrollerComponent_4_5] = null;
    this[_expr_0$21] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent5.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent5);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent5, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent5, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent5.__proto__),
    [_textBinding_3$8]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_4$4]: dart.fieldType(src__event_details__actor_scroller__actor_scroller_component$46template.ViewActorScrollerComponent0),
    [_ActorScrollerComponent_4_5]: dart.fieldType(src__event_details__actor_scroller__actor_scroller_component.ActorScrollerComponent),
    [_expr_0$21]: dart.fieldType(dart.dynamic)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent5 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent5.new(parentView, parentIndex);
  };
  const _appEl_5$0 = dart.privateName(src__event_details__event_details_component$46template, "_appEl_5");
  const _NgFor_5_9$0 = dart.privateName(src__event_details__event_details_component$46template, "_NgFor_5_9");
  src__event_details__event_details_component$46template._ViewEventDetailsComponent6 = class _ViewEventDetailsComponent6 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "section footer");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "centered-content");
      this.addShimC(_el_1);
      let _el_2 = src__runtime__dom_helpers.appendElement(doc, _el_1, "h3");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3$8].element);
      let _el_4 = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_4, "gallery");
      this.addShimC(_el_4);
      let _anchor_5 = src__runtime__dom_helpers.appendAnchor(_el_4);
      this[_appEl_5$0] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$0], dart.fn(src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent7, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_5_9$0] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5$0], _TemplateRef_5_8);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.event.galleryImages.list;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$21], currVal_0))) {
        this[_NgFor_5_9$0].ngForOf = currVal_0;
        this[_expr_0$21] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9$0].ngDoCheck();
      }
      this[_appEl_5$0].detectChangesInNestedViews();
      this[_textBinding_3$8].updateText(src__runtime__interpolate.interpolateString0(_ctx.messages.gallery));
    }
    destroyInternal() {
      this[_appEl_5$0].destroyNestedViews();
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_3$8] = new src__runtime__text_binding.TextBinding.new();
    this[_appEl_5$0] = null;
    this[_NgFor_5_9$0] = null;
    this[_expr_0$21] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent6.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent6);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent6, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent6, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent6.__proto__),
    [_textBinding_3$8]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_appEl_5$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9$0]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$21]: dart.fieldType(dart.dynamic)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent6 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent6.new(parentView, parentIndex);
  };
  src__event_details__event_details_component$46template._ViewEventDetailsComponent7 = class _ViewEventDetailsComponent7 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$7] = doc[$createElement]("img");
      this.addShimE(this[_el_0$7]);
      this.init1(this[_el_0$7]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_galleryImage = src__runtime__optimizations.unsafeCast(src__models__event.GalleryImage, this.locals[$_get]("$implicit"));
      let currVal_0 = local_galleryImage.location;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$21], currVal_0))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$7], "src", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$21] = currVal_0;
      }
      let currVal_1 = "A still frame from the movie " + dart.notNull(_ctx.event.title);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$13], currVal_1))) {
        src__runtime__dom_helpers.setProperty(this[_el_0$7], "alt", currVal_1);
        this[_expr_1$13] = currVal_1;
      }
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponent7.new = function(parentView, parentIndex) {
    this[_expr_0$21] = null;
    this[_expr_1$13] = null;
    this[_el_0$7] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponent7.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponent7);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent7, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponent7, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponent7.__proto__),
    [_expr_0$21]: dart.fieldType(dart.dynamic),
    [_expr_1$13]: dart.fieldType(dart.dynamic),
    [_el_0$7]: dart.fieldType(html.Element)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponent7 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponent7.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__event_details_component$46template, {
    /*src__event_details__event_details_component$46template.styles$EventDetailsComponentHost*/get styles$EventDetailsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$22 = dart.privateName(src__event_details__event_details_component$46template, "_compView_0");
  const _EventDetailsComponent_0_5 = dart.privateName(src__event_details__event_details_component$46template, "_EventDetailsComponent_0_5");
  src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0 = class _ViewEventDetailsComponentHost0 extends src__core__linker__app_view.AppView$(src__event_details__event_details_component.EventDetailsComponent) {
    build() {
      this[_compView_0$22] = new src__event_details__event_details_component$46template.ViewEventDetailsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$22].rootEl;
      this[_EventDetailsComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__event_details__event_details_component.EventDetailsComponent, dart.wrapType(src__event_details__event_details_component.EventDetailsComponent), dart.fn(() => new src__event_details__event_details_component.EventDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex))), VoidToEventDetailsComponent())) : new src__event_details__event_details_component.EventDetailsComponent.new(StoreOfAppState()._check(this.injectorGet(dart.wrapType(src__store.Store), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__i18n__messages.Messages._check(this.injectorGet(dart.wrapType(src__i18n__messages.Messages), this.viewData.parentIndex)));
      this[_compView_0$22].create(this[_EventDetailsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfEventDetailsComponent()).new(0, this, this.rootEl, this[_EventDetailsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_EventDetailsComponent_0_5].ngOnInit();
      }
      this[_compView_0$22].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$22].destroyInternalState();
      this[_EventDetailsComponent_0_5].ngOnDestroy();
    }
  };
  (src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$22] = null;
    this[_EventDetailsComponent_0_5] = null;
    src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.prototype;
  dart.addTypeTests(src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0);
  dart.setMethodSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0, () => ({
    __proto__: dart.getMethods(src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__event_details__event_details_component.EventDetailsComponent), [])
  }));
  dart.setFieldSignature(src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0, () => ({
    __proto__: dart.getFields(src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.__proto__),
    [_compView_0$22]: dart.fieldType(src__event_details__event_details_component$46template.ViewEventDetailsComponent0),
    [_EventDetailsComponent_0_5]: dart.fieldType(src__event_details__event_details_component.EventDetailsComponent)
  }));
  src__event_details__event_details_component$46template.viewFactory_EventDetailsComponentHost0 = function(parentView, parentIndex) {
    return new src__event_details__event_details_component$46template._ViewEventDetailsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__event_details__event_details_component$46template, {
    /*src__event_details__event_details_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__event_details__event_details_component$46template.initReflector = function() {
    if (dart.test(src__event_details__event_details_component$46template._visited)) {
      return;
    }
    src__event_details__event_details_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__event_details__event_details_component.EventDetailsComponent), src__event_details__event_details_component$46template.EventDetailsComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__common__content_rating__content_rating_component$46template.initReflector();
    src__common__event_poster__event_poster_component$46template.initReflector();
    src__common__showtime_item__showtime_item_component$46template.initReflector();
    src__event_details__actor_scroller__actor_scroller_component$46template.initReflector();
    src__event_details__landscape_image__event_landscape_image_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  src__routes.RoutePaths = class RoutePaths extends core$.Object {};
  (src__routes.RoutePaths.new = function() {
  }).prototype = src__routes.RoutePaths.prototype;
  dart.addTypeTests(src__routes.RoutePaths);
  dart.defineLazy(src__routes.RoutePaths, {
    /*src__routes.RoutePaths.vegeNews*/get vegeNews() {
      return new src__route_path.RoutePath.new({path: "/vegenews"});
    },
    /*src__routes.RoutePaths.vegeNewsDetails*/get vegeNewsDetails() {
      return new src__route_path.RoutePath.new({path: "vegenews/:vegeNewsId"});
    },
    /*src__routes.RoutePaths.vegeBook*/get vegeBook() {
      return new src__route_path.RoutePath.new({path: "/vegebook", useAsDefault: true});
    },
    /*src__routes.RoutePaths.vegeBookDetails*/get vegeBookDetails() {
      return new src__route_path.RoutePath.new({path: "vegebook/:vegeBookId"});
    },
    /*src__routes.RoutePaths.nowInTheaters*/get nowInTheaters() {
      return new src__route_path.RoutePath.new({path: "/theaters", additionalData: src__models__event.EventListType.nowInTheaters});
    },
    /*src__routes.RoutePaths.showtimes*/get showtimes() {
      return new src__route_path.RoutePath.new({path: "showtimes"});
    },
    /*src__routes.RoutePaths.comingSoon*/get comingSoon() {
      return new src__route_path.RoutePath.new({path: "comingSoon", additionalData: src__models__event.EventListType.comingSoon});
    },
    /*src__routes.RoutePaths.eventDetails*/get eventDetails() {
      return new src__route_path.RoutePath.new({path: "event/:eventId"});
    },
    /*src__routes.RoutePaths.showDetails*/get showDetails() {
      return new src__route_path.RoutePath.new({path: "show/:eventId/:showId"});
    }
  });
  src__routes.Routes = class Routes extends core$.Object {};
  (src__routes.Routes.new = function() {
  }).prototype = src__routes.Routes.prototype;
  dart.addTypeTests(src__routes.Routes);
  dart.defineLazy(src__routes.Routes, {
    /*src__routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([src__route_definition.RouteDefinition.new({routePath: src__routes.RoutePaths.vegeNews, component: src__vegenews__vegenews_page_component$46template.VegeNewsPageComponentNgFactory}), src__route_definition.RouteDefinition.defer({routePath: src__routes.RoutePaths.vegeNewsDetails, loader: dart.fn(() => FutureOfComponentFactory()._check(dart.loadLibrary().then(src__core__linker__component_factory.ComponentFactory, dart.fn(_ => src__vegenews_details__vegenews_details_component$46template.VegeNewsDetailsComponentNgFactory, dynamicToComponentFactoryOfVegeNewsDetailsComponent()))), VoidToFutureOfComponentFactory())}), src__route_definition.RouteDefinition.new({routePath: src__routes.RoutePaths.vegeBook, useAsDefault: true, component: src__vegebook__vegebook_page_component$46template.VegeBookPageComponentNgFactory}), src__route_definition.RouteDefinition.defer({routePath: src__routes.RoutePaths.vegeBookDetails, loader: dart.fn(() => FutureOfComponentFactory()._check(dart.loadLibrary().then(src__core__linker__component_factory.ComponentFactory, dart.fn(_ => src__vegebook_details__vegebook_details_component$46template.VegeBookDetailsComponentNgFactory, dynamicToComponentFactoryOfVegeBookDetailsComponent()))), VoidToFutureOfComponentFactory())}), src__route_definition.RouteDefinition.new({routePath: src__routes.RoutePaths.nowInTheaters, component: src__events__events_page_component$46template.EventsPageComponentNgFactory}), src__route_definition.RouteDefinition.new({routePath: src__routes.RoutePaths.comingSoon, component: src__events__events_page_component$46template.EventsPageComponentNgFactory}), src__route_definition.RouteDefinition.defer({routePath: src__routes.RoutePaths.showtimes, loader: dart.fn(() => FutureOfComponentFactory()._check(dart.loadLibrary().then(src__core__linker__component_factory.ComponentFactory, dart.fn(_ => src__showtimes__showtimes_page_component$46template.ShowtimesPageComponentNgFactory, dynamicToComponentFactoryOfShowtimesPageComponent()))), VoidToFutureOfComponentFactory())}), src__route_definition.RouteDefinition.defer({routePath: src__routes.RoutePaths.eventDetails, loader: dart.fn(() => FutureOfComponentFactory()._check(dart.loadLibrary().then(src__core__linker__component_factory.ComponentFactory, dart.fn(_ => src__event_details__event_details_component$46template.EventDetailsComponentNgFactory, dynamicToComponentFactoryOfEventDetailsComponent()))), VoidToFutureOfComponentFactory())}), src__route_definition.RouteDefinition.defer({routePath: src__routes.RoutePaths.showDetails, loader: dart.fn(() => FutureOfComponentFactory()._check(dart.loadLibrary().then(src__core__linker__component_factory.ComponentFactory, dart.fn(_ => src__event_details__event_details_component$46template.EventDetailsComponentNgFactory, dynamicToComponentFactoryOfEventDetailsComponent()))), VoidToFutureOfComponentFactory())})]);
    }
  });
  src__app_bar__nav_bar__nav_bar_component.NavBarComponent = class NavBarComponent extends core$.Object {
    get messages() {
      return this[messages$11];
    }
    set messages(value) {
      super.messages = value;
    }
    get theaterDropdownActive() {
      return this[theaterDropdownActive];
    }
    set theaterDropdownActive(value) {
      this[theaterDropdownActive] = value;
    }
  };
  (src__app_bar__nav_bar__nav_bar_component.NavBarComponent.new = function(messages) {
    this[theaterDropdownActive] = false;
    this[messages$11] = messages;
  }).prototype = src__app_bar__nav_bar__nav_bar_component.NavBarComponent.prototype;
  dart.addTypeTests(src__app_bar__nav_bar__nav_bar_component.NavBarComponent);
  const messages$11 = Symbol("NavBarComponent.messages");
  const theaterDropdownActive = Symbol("NavBarComponent.theaterDropdownActive");
  dart.setFieldSignature(src__app_bar__nav_bar__nav_bar_component.NavBarComponent, () => ({
    __proto__: dart.getFields(src__app_bar__nav_bar__nav_bar_component.NavBarComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    theaterDropdownActive: dart.fieldType(core$.bool)
  }));
  src__app_bar__scroll_utils.ScrollDirection = class ScrollDirection extends core$.Object {
    toString() {
      return {
        0: "ScrollDirection.up",
        1: "ScrollDirection.down"
      }[this.index];
    }
  };
  (src__app_bar__scroll_utils.ScrollDirection.new = function(x) {
    this.index = x;
  }).prototype = src__app_bar__scroll_utils.ScrollDirection.prototype;
  dart.addTypeTests(src__app_bar__scroll_utils.ScrollDirection);
  dart.setFieldSignature(src__app_bar__scroll_utils.ScrollDirection, () => ({
    __proto__: dart.getFields(src__app_bar__scroll_utils.ScrollDirection.__proto__),
    index: dart.finalFieldType(core$.int)
  }));
  dart.defineExtensionMethods(src__app_bar__scroll_utils.ScrollDirection, ['toString']);
  src__app_bar__scroll_utils.ScrollDirection.up = dart.const(new src__app_bar__scroll_utils.ScrollDirection.new(0));
  src__app_bar__scroll_utils.ScrollDirection.down = dart.const(new src__app_bar__scroll_utils.ScrollDirection.new(1));
  src__app_bar__scroll_utils.ScrollDirection.values = dart.constList([src__app_bar__scroll_utils.ScrollDirection.up, src__app_bar__scroll_utils.ScrollDirection.down], src__app_bar__scroll_utils.ScrollDirection);
  let const$8;
  src__app_bar__scroll_utils.listenForScrollDirectionChanges = function(callback) {
    let previousTop = 0;
    return async.Timer.periodic(const$8 || (const$8 = dart.const(new core$.Duration.new({milliseconds: 250}))), dart.fn(_ => {
      let top = html.document.body.getBoundingClientRect()[$top];
      if (dart.notNull(top) > dart.notNull(previousTop) || dart.notNull(top) > -160) {
        callback(src__app_bar__scroll_utils.ScrollDirection.up);
      } else if (dart.notNull(top) < dart.notNull(previousTop)) {
        callback(src__app_bar__scroll_utils.ScrollDirection.down);
      }
      previousTop = dart.asInt(top);
    }, TimerToNull()));
  };
  let const$9;
  src__app_bar__search_bar__search_bar_component.SearchBarComponent = class SearchBarComponent extends core$.Object {
    get messages() {
      return this[messages$12];
    }
    set messages(value) {
      super.messages = value;
    }
    get store() {
      return this[store$];
    }
    set store(value) {
      super.store = value;
    }
    get hostExpanded() {
      return dart.test(this.searchOpen) ? "" : null;
    }
    get searchField() {
      return this[searchField];
    }
    set searchField(value) {
      this[searchField] = value;
    }
    get searchOpen() {
      return this[searchOpen];
    }
    set searchOpen(value) {
      this[searchOpen] = value;
    }
    toggleSearch() {
      this.searchOpen = !dart.test(this.searchOpen);
      if (dart.test(this.searchOpen)) {
        async.Timer.new(const$9 || (const$9 = dart.const(new core$.Duration.new({milliseconds: 250}))), dart.fn(() => this.searchField.focus(), VoidTovoid()));
      } else {
        this.searchField.value = "";
        this.updateSearchQuery(null);
      }
    }
    updateSearchQuery(newQuery) {
      return this.store.dispatch(new src__redux___common__search.SearchQueryChangedAction.new(newQuery));
    }
  };
  (src__app_bar__search_bar__search_bar_component.SearchBarComponent.new = function(messages, store) {
    this[searchField] = null;
    this[searchOpen] = false;
    this[messages$12] = messages;
    this[store$] = store;
  }).prototype = src__app_bar__search_bar__search_bar_component.SearchBarComponent.prototype;
  dart.addTypeTests(src__app_bar__search_bar__search_bar_component.SearchBarComponent);
  const messages$12 = Symbol("SearchBarComponent.messages");
  const store$ = Symbol("SearchBarComponent.store");
  const searchField = Symbol("SearchBarComponent.searchField");
  const searchOpen = Symbol("SearchBarComponent.searchOpen");
  dart.setMethodSignature(src__app_bar__search_bar__search_bar_component.SearchBarComponent, () => ({
    __proto__: dart.getMethods(src__app_bar__search_bar__search_bar_component.SearchBarComponent.__proto__),
    toggleSearch: dart.fnType(dart.void, []),
    updateSearchQuery: dart.fnType(dart.void, [core$.String])
  }));
  dart.setGetterSignature(src__app_bar__search_bar__search_bar_component.SearchBarComponent, () => ({
    __proto__: dart.getGetters(src__app_bar__search_bar__search_bar_component.SearchBarComponent.__proto__),
    hostExpanded: core$.String
  }));
  dart.setFieldSignature(src__app_bar__search_bar__search_bar_component.SearchBarComponent, () => ({
    __proto__: dart.getFields(src__app_bar__search_bar__search_bar_component.SearchBarComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    store: dart.finalFieldType(StoreOfAppState()),
    searchField: dart.fieldType(html.InputElement),
    searchOpen: dart.fieldType(core$.bool)
  }));
  const _uiConfig = dart.privateName(src__common__signin_page__signin_page_component, "_uiConfig");
  src__common__signin_page__signin_page_component.SignInPageComponent = class SignInPageComponent extends core$.Object {
    get messages() {
      return this[messages$13];
    }
    set messages(value) {
      super.messages = value;
    }
    get store() {
      return this[store$0];
    }
    set store(value) {
      super.store = value;
    }
    isAuthenticated() {
      return src__top_level.auth().currentUser != null;
    }
    get userEmail() {
      let t = src__top_level.auth().currentUser;
      return t == null ? null : t.email;
    }
    get displayName() {
      let t = src__top_level.auth().currentUser;
      return t == null ? null : t.displayName;
    }
    get userJson() {
      let t = src__top_level.auth().currentUser;
      return t == null ? null : t.toJson();
    }
    get providerAccessToken() {
      return this[providerAccessToken];
    }
    set providerAccessToken(value) {
      this[providerAccessToken] = value;
    }
    logout() {
      return async.async(core$.Null, (function* logout() {
        core$.print("@@@@@@@@@@@@@@@@");
        yield src__top_level.auth().signOut();
        this.providerAccessToken = "";
      }).bind(this));
    }
    signInFailure(authUiError) {
      return new dart.global.firebase.Promise(dart.fn(() => core$.print("SignIn Failure"), VoidTovoid()));
    }
    signInSuccess(authResult, redirectUrl) {
      core$.print("sign in  success. ProviderID =  " + dart.str(authResult.credential.providerId));
      core$.print("Info= " + dart.str(authResult.additionalUserInfo));
      return false;
    }
    getUIConfig() {
      if (this[_uiConfig] == null) {
        let googleOptions = {provider: src__auth.GoogleAuthProvider.PROVIDER_ID, scopes: JSArrayOfString().of(["email", "https://www.googleapis.com/auth/plus.login"]), customParameters: {prompt: "select_account"}};
        let facebookOptions = {provider: src__auth.FacebookAuthProvider.PROVIDER_ID, customParameters: {}};
        let twitterOptions = {provider: src__auth.TwitterAuthProvider.PROVIDER_ID};
        let callbacks = {uiShown: dart.fn(() => core$.print("UI shown callback"), VoidTovoid()), signInSuccessWithAuthResult: js.allowInterop(UserCredentialAndStringTobool(), dart.bind(this, 'signInSuccess')), signInFailure: dart.bind(this, 'signInFailure')};
        this[_uiConfig] = {signInSuccessUrl: "/", signInOptions: [googleOptions, facebookOptions, twitterOptions], signInFlow: "redirect", credentialHelper: "accountchooser.com", tosUrl: "/tos.html", callbacks: callbacks};
      }
      return this[_uiConfig];
    }
  };
  (src__common__signin_page__signin_page_component.SignInPageComponent.new = function(messages, store) {
    this[providerAccessToken] = "";
    this[_uiConfig] = null;
    this[messages$13] = messages;
    this[store$0] = store;
  }).prototype = src__common__signin_page__signin_page_component.SignInPageComponent.prototype;
  dart.addTypeTests(src__common__signin_page__signin_page_component.SignInPageComponent);
  const messages$13 = Symbol("SignInPageComponent.messages");
  const store$0 = Symbol("SignInPageComponent.store");
  const providerAccessToken = Symbol("SignInPageComponent.providerAccessToken");
  dart.setMethodSignature(src__common__signin_page__signin_page_component.SignInPageComponent, () => ({
    __proto__: dart.getMethods(src__common__signin_page__signin_page_component.SignInPageComponent.__proto__),
    isAuthenticated: dart.fnType(core$.bool, []),
    logout: dart.fnType(async.Future$(core$.Null), []),
    signInFailure: dart.fnType(dart.lazyJSType(() => dart.global.firebase.Promise, "firebase.Promise"), [dart.anonymousJSType("AuthUIError")]),
    signInSuccess: dart.fnType(core$.bool, [src__auth.UserCredential, core$.String]),
    getUIConfig: dart.fnType(dart.anonymousJSType("UIConfig"), [])
  }));
  dart.setGetterSignature(src__common__signin_page__signin_page_component.SignInPageComponent, () => ({
    __proto__: dart.getGetters(src__common__signin_page__signin_page_component.SignInPageComponent.__proto__),
    userEmail: core$.String,
    displayName: core$.String,
    userJson: core$.Map$(core$.String, dart.dynamic)
  }));
  dart.setFieldSignature(src__common__signin_page__signin_page_component.SignInPageComponent, () => ({
    __proto__: dart.getFields(src__common__signin_page__signin_page_component.SignInPageComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    store: dart.finalFieldType(StoreOfAppState()),
    providerAccessToken: dart.fieldType(core$.String),
    [_uiConfig]: dart.fieldType(dart.anonymousJSType("UIConfig"))
  }));
  src__app_bar__signin_bar__signin_bar_component.SignInBarComponent = class SignInBarComponent extends core$.Object {
    get messages() {
      return this[messages$14];
    }
    set messages(value) {
      super.messages = value;
    }
    get store() {
      return this[store$1];
    }
    set store(value) {
      super.store = value;
    }
    get showBasicDialog() {
      return this[showBasicDialog];
    }
    set showBasicDialog(value) {
      this[showBasicDialog] = value;
    }
    getSignInOpen() {
      return this.signInOpen;
    }
    get signInOpen() {
      return this[signInOpen];
    }
    set signInOpen(value) {
      this[signInOpen] = value;
    }
    getSigninPage() {
      this.signInOpen = true;
    }
    get providerAccessToken() {
      return this[providerAccessToken$];
    }
    set providerAccessToken(value) {
      this[providerAccessToken$] = value;
    }
    isAuthenticated() {
      return src__top_level.auth().currentUser != null;
    }
    logout() {
      return async.async(core$.Null, (function* logout() {
        core$.print("@@@@@@@@@@@@@@@@");
        yield src__top_level.auth().signOut();
        this.providerAccessToken = "";
      }).bind(this));
    }
  };
  (src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.new = function(messages, store) {
    this[showBasicDialog] = false;
    this[signInOpen] = false;
    this[providerAccessToken$] = "";
    this[messages$14] = messages;
    this[store$1] = store;
  }).prototype = src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.prototype;
  dart.addTypeTests(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent);
  const messages$14 = Symbol("SignInBarComponent.messages");
  const store$1 = Symbol("SignInBarComponent.store");
  const showBasicDialog = Symbol("SignInBarComponent.showBasicDialog");
  const signInOpen = Symbol("SignInBarComponent.signInOpen");
  const providerAccessToken$ = Symbol("SignInBarComponent.providerAccessToken");
  dart.setMethodSignature(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent, () => ({
    __proto__: dart.getMethods(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.__proto__),
    getSignInOpen: dart.fnType(core$.bool, []),
    getSigninPage: dart.fnType(dart.void, []),
    isAuthenticated: dart.fnType(core$.bool, []),
    logout: dart.fnType(async.Future$(core$.Null), [])
  }));
  dart.setFieldSignature(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent, () => ({
    __proto__: dart.getFields(src__app_bar__signin_bar__signin_bar_component.SignInBarComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    store: dart.finalFieldType(StoreOfAppState()),
    showBasicDialog: dart.fieldType(core$.bool),
    signInOpen: dart.fieldType(core$.bool),
    providerAccessToken: dart.fieldType(core$.String)
  }));
  const _store$7 = dart.privateName(src__app_bar__app_bar_component, "_store");
  const _router$5 = dart.privateName(src__app_bar__app_bar_component, "_router");
  const _routeListener = dart.privateName(src__app_bar__app_bar_component, "_routeListener");
  const _scrollTimer = dart.privateName(src__app_bar__app_bar_component, "_scrollTimer");
  const _theaterButtonClicked = dart.privateName(src__app_bar__app_bar_component, "_theaterButtonClicked");
  const _listenForRoutes = dart.privateName(src__app_bar__app_bar_component, "_listenForRoutes");
  src__app_bar__app_bar_component.AppBarComponent = class AppBarComponent extends core$.Object {
    get messages() {
      return this[messages$15];
    }
    set messages(value) {
      super.messages = value;
    }
    get theaterName() {
      return this[_store$7].state.theaterState.currentTheater.name;
    }
    get theaterDropdownVisible() {
      return this[theaterDropdownVisible];
    }
    set theaterDropdownVisible(value) {
      this[theaterDropdownVisible] = value;
    }
    get theaterDropdownActive() {
      return this[theaterDropdownActive$];
    }
    set theaterDropdownActive(value) {
      this[theaterDropdownActive$] = value;
    }
    get hide() {
      return this[hide];
    }
    set hide(value) {
      this[hide] = value;
    }
    get isEventDetailsPage() {
      return this[isEventDetailsPage];
    }
    set isEventDetailsPage(value) {
      this[isEventDetailsPage] = value;
    }
    get theaterButtonClicked() {
      return this[_theaterButtonClicked].stream;
    }
    openTheaterDropdown() {
      return this[_theaterButtonClicked].add(null);
    }
    ngOnInit() {
      this[_listenForRoutes]();
      this[_scrollTimer] = src__app_bar__scroll_utils.listenForScrollDirectionChanges(dart.fn(newDirection => {
        if (!dart.test(this.isEventDetailsPage) && !dart.test(this.theaterDropdownVisible)) {
          this.hide = newDirection === src__app_bar__scroll_utils.ScrollDirection.down;
        }
      }, ScrollDirectionToNull()));
    }
    [_listenForRoutes]() {
      this[_routeListener] = this[_router$5].onRouteActivated.listen(dart.fn(route => {
        let path = route.routePath.path;
        this.isEventDetailsPage = path == src__routes.RoutePaths.eventDetails.path || path == src__routes.RoutePaths.showDetails.path || path == src__routes.RoutePaths.vegeNewsDetails.path || path == src__routes.RoutePaths.vegeBookDetails.path;
        this.hide = this.isEventDetailsPage;
      }, RouterStateToNull()));
    }
    ngOnDestroy() {
      this[_theaterButtonClicked].close();
      this[_routeListener].cancel();
      this[_scrollTimer].cancel();
    }
  };
  (src__app_bar__app_bar_component.AppBarComponent.new = function(messages, store, router) {
    this[theaterDropdownVisible] = false;
    this[theaterDropdownActive$] = false;
    this[hide] = false;
    this[isEventDetailsPage] = false;
    this[_routeListener] = null;
    this[_scrollTimer] = null;
    this[_theaterButtonClicked] = async.StreamController.new();
    this[messages$15] = messages;
    this[_store$7] = store;
    this[_router$5] = router;
  }).prototype = src__app_bar__app_bar_component.AppBarComponent.prototype;
  dart.addTypeTests(src__app_bar__app_bar_component.AppBarComponent);
  const messages$15 = Symbol("AppBarComponent.messages");
  const theaterDropdownVisible = Symbol("AppBarComponent.theaterDropdownVisible");
  const theaterDropdownActive$ = Symbol("AppBarComponent.theaterDropdownActive");
  const hide = Symbol("AppBarComponent.hide");
  const isEventDetailsPage = Symbol("AppBarComponent.isEventDetailsPage");
  src__app_bar__app_bar_component.AppBarComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__app_bar__app_bar_component.AppBarComponent, () => ({
    __proto__: dart.getMethods(src__app_bar__app_bar_component.AppBarComponent.__proto__),
    openTheaterDropdown: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    [_listenForRoutes]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__app_bar__app_bar_component.AppBarComponent, () => ({
    __proto__: dart.getGetters(src__app_bar__app_bar_component.AppBarComponent.__proto__),
    theaterName: core$.String,
    theaterButtonClicked: async.Stream
  }));
  dart.setFieldSignature(src__app_bar__app_bar_component.AppBarComponent, () => ({
    __proto__: dart.getFields(src__app_bar__app_bar_component.AppBarComponent.__proto__),
    messages: dart.finalFieldType(src__i18n__messages.Messages),
    [_store$7]: dart.finalFieldType(StoreOfAppState()),
    [_router$5]: dart.finalFieldType(src__router__router.Router),
    theaterDropdownVisible: dart.fieldType(core$.bool),
    theaterDropdownActive: dart.fieldType(core$.bool),
    hide: dart.fieldType(core$.bool),
    isEventDetailsPage: dart.fieldType(core$.bool),
    [_routeListener]: dart.fieldType(StreamSubscriptionOfRouterState()),
    [_scrollTimer]: dart.fieldType(async.Timer),
    [_theaterButtonClicked]: dart.finalFieldType(async.StreamController)
  }));
  dart.trackLibraries("packages/web/src/app_bar/app_bar_component.ddc", {
    "package:web/src/common/content_rating/content_rating_component.dart": src__common__content_rating__content_rating_component,
    "package:web/src/common/event_poster/lazy_image_component.dart": src__common__event_poster__lazy_image_component,
    "package:web/src/common/event_poster/event_poster_component.dart": src__common__event_poster__event_poster_component,
    "package:web/src/common/showtime_item/showtime_item_component.dart": src__common__showtime_item__showtime_item_component,
    "package:web/src/event_details/actor_scroller/actor_image_component.dart": src__event_details__actor_scroller__actor_image_component,
    "package:web/src/event_details/actor_scroller/actor_scroller_component.dart": src__event_details__actor_scroller__actor_scroller_component,
    "package:web/src/event_details/landscape_image/event_landscape_image_component.dart": src__event_details__landscape_image__event_landscape_image_component,
    "package:web/src/common/content_rating/content_rating_component.css.shim.dart": src__common__content_rating__content_rating_component$46css$46shim,
    "package:web/src/common/content_rating/content_rating_component.template.dart": src__common__content_rating__content_rating_component$46template,
    "package:web/src/common/event_poster/lazy_image_component.css.shim.dart": src__common__event_poster__lazy_image_component$46css$46shim,
    "package:web/src/common/event_poster/lazy_image_component.template.dart": src__common__event_poster__lazy_image_component$46template,
    "package:web/src/common/event_poster/event_poster_component.css.shim.dart": src__common__event_poster__event_poster_component$46css$46shim,
    "package:web/src/common/event_poster/event_poster_component.template.dart": src__common__event_poster__event_poster_component$46template,
    "package:web/src/common/showtime_item/showtime_item_component.css.shim.dart": src__common__showtime_item__showtime_item_component$46css$46shim,
    "package:web/src/common/showtime_item/showtime_item_component.template.dart": src__common__showtime_item__showtime_item_component$46template,
    "package:web/src/event_details/actor_scroller/actor_image_component.css.shim.dart": src__event_details__actor_scroller__actor_image_component$46css$46shim,
    "package:web/src/event_details/actor_scroller/actor_image_component.template.dart": src__event_details__actor_scroller__actor_image_component$46template,
    "package:web/src/event_details/actor_scroller/actor_scroller_component.css.shim.dart": src__event_details__actor_scroller__actor_scroller_component$46css$46shim,
    "package:web/src/event_details/actor_scroller/actor_scroller_component.template.dart": src__event_details__actor_scroller__actor_scroller_component$46template,
    "package:web/src/event_details/landscape_image/event_landscape_image_component.css.shim.dart": src__event_details__landscape_image__event_landscape_image_component$46css$46shim,
    "package:web/src/event_details/landscape_image/event_landscape_image_component.template.dart": src__event_details__landscape_image__event_landscape_image_component$46template,
    "package:web/src/common/loading_view/spinner_component.dart": src__common__loading_view__spinner_component,
    "package:web/src/common/loading_view/loading_view_component.dart": src__common__loading_view__loading_view_component,
    "package:web/src/common/theater_selector/theater_selector_dropdown_menu_component.css.shim.dart": src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim,
    "package:web/src/common/theater_selector/theater_dropdown_controller.template.dart": src__common__theater_selector__theater_dropdown_controller$46template,
    "package:web/src/common/theater_selector/theater_selector_dropdown_menu_component.dart": src__common__theater_selector__theater_selector_dropdown_menu_component,
    "package:web/src/common/theater_selector/theater_selector_dropdown_menu_component.template.dart": src__common__theater_selector__theater_selector_dropdown_menu_component$46template,
    "package:web/src/common/theater_selector/theater_dropdown_controller.dart": src__common__theater_selector__theater_dropdown_controller,
    "package:web/src/common/theater_selector/theater_selector_component.dart": src__common__theater_selector__theater_selector_component,
    "package:web/src/restore_scroll_position.dart": src__restore_scroll_position,
    "package:web/src/restore_scroll_position.template.dart": src__restore_scroll_position$46template,
    "package:web/src/common/loading_view/spinner_component.css.shim.dart": src__common__loading_view__spinner_component$46css$46shim,
    "package:web/src/common/loading_view/spinner_component.template.dart": src__common__loading_view__spinner_component$46template,
    "package:web/src/common/loading_view/loading_view_component.css.shim.dart": src__common__loading_view__loading_view_component$46css$46shim,
    "package:web/src/common/loading_view/loading_view_component.template.dart": src__common__loading_view__loading_view_component$46template,
    "package:web/src/common/theater_selector/theater_selector_component.css.shim.dart": src__common__theater_selector__theater_selector_component$46css$46shim,
    "package:web/src/common/theater_selector/theater_selector_component.template.dart": src__common__theater_selector__theater_selector_component$46template,
    "package:web/src/events/events_page_component.css.shim.dart": src__events__events_page_component$46css$46shim,
    "package:web/src/common/vegebook_poster/lazy_image_component.dart": src__common__vegebook_poster__lazy_image_component,
    "package:web/src/common/vegebook_poster/vegebook_poster_component.dart": src__common__vegebook_poster__vegebook_poster_component,
    "package:web/src/common/vegebook_poster/lazy_image_component.css.shim.dart": src__common__vegebook_poster__lazy_image_component$46css$46shim,
    "package:web/src/common/vegebook_poster/lazy_image_component.template.dart": src__common__vegebook_poster__lazy_image_component$46template,
    "package:web/src/common/vegebook_poster/vegebook_poster_component.css.shim.dart": src__common__vegebook_poster__vegebook_poster_component$46css$46shim,
    "package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart": src__common__vegebook_poster__vegebook_poster_component$46template,
    "package:web/src/vegebook/vegebook_page_component.css.shim.dart": src__vegebook__vegebook_page_component$46css$46shim,
    "package:web/src/common/vegenews_poster/lazy_image_component.dart": src__common__vegenews_poster__lazy_image_component,
    "package:web/src/common/vegenews_poster/vegenews_poster_component.dart": src__common__vegenews_poster__vegenews_poster_component,
    "package:web/src/common/vegenews_poster/lazy_image_component.css.shim.dart": src__common__vegenews_poster__lazy_image_component$46css$46shim,
    "package:web/src/common/vegenews_poster/lazy_image_component.template.dart": src__common__vegenews_poster__lazy_image_component$46template,
    "package:web/src/common/vegenews_poster/vegenews_poster_component.css.shim.dart": src__common__vegenews_poster__vegenews_poster_component$46css$46shim,
    "package:web/src/common/vegenews_poster/vegenews_poster_component.template.dart": src__common__vegenews_poster__vegenews_poster_component$46template,
    "package:web/src/vegenews/vegenews_page_component.css.shim.dart": src__vegenews__vegenews_page_component$46css$46shim,
    "package:web/src/event_details/event_details_component.css.shim.dart": src__event_details__event_details_component$46css$46shim,
    "package:web/src/showtimes/date_selector_component.dart": src__showtimes__date_selector_component,
    "package:web/src/showtimes/date_selector_component.css.shim.dart": src__showtimes__date_selector_component$46css$46shim,
    "package:web/src/showtimes/date_selector_component.template.dart": src__showtimes__date_selector_component$46template,
    "package:web/src/showtimes/showtimes_page_component.css.shim.dart": src__showtimes__showtimes_page_component$46css$46shim,
    "package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.dart": src__vegenews_details__landscape_image__vegenews_landscape_image_component,
    "package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.css.shim.dart": src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim,
    "package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.template.dart": src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template,
    "package:web/src/vegenews_details/vegenews_details_component.css.shim.dart": src__vegenews_details__vegenews_details_component$46css$46shim,
    "package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart": src__vegebook_details__landscape_image__vegebook_landscape_image_component,
    "package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.css.shim.dart": src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim,
    "package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart": src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template,
    "package:web/src/vegebook_details/vegebook_details_component.css.shim.dart": src__vegebook_details__vegebook_details_component$46css$46shim,
    "package:web/src/vegebook_details/vegebook_details_component.dart": src__vegebook_details__vegebook_details_component,
    "package:web/src/vegebook_details/vegebook_details_component.template.dart": src__vegebook_details__vegebook_details_component$46template,
    "package:web/src/vegenews_details/vegenews_details_component.dart": src__vegenews_details__vegenews_details_component,
    "package:web/src/vegenews_details/vegenews_details_component.template.dart": src__vegenews_details__vegenews_details_component$46template,
    "package:web/src/showtimes/showtimes_page_component.dart": src__showtimes__showtimes_page_component,
    "package:web/src/showtimes/showtimes_page_component.template.dart": src__showtimes__showtimes_page_component$46template,
    "package:web/src/vegenews/vegenews_page_component.dart": src__vegenews__vegenews_page_component,
    "package:web/src/vegenews/vegenews_page_component.template.dart": src__vegenews__vegenews_page_component$46template,
    "package:web/src/vegebook/vegebook_page_component.dart": src__vegebook__vegebook_page_component,
    "package:web/src/vegebook/vegebook_page_component.template.dart": src__vegebook__vegebook_page_component$46template,
    "package:web/src/events/events_page_component.dart": src__events__events_page_component,
    "package:web/src/events/events_page_component.template.dart": src__events__events_page_component$46template,
    "package:web/src/routes.template.dart": src__routes$46template,
    "package:web/src/event_details/event_details_component.dart": src__event_details__event_details_component,
    "package:web/src/event_details/event_details_component.template.dart": src__event_details__event_details_component$46template,
    "package:web/src/routes.dart": src__routes,
    "package:web/src/app_bar/nav_bar/nav_bar_component.dart": src__app_bar__nav_bar__nav_bar_component,
    "package:web/src/app_bar/scroll_utils.dart": src__app_bar__scroll_utils,
    "package:web/src/app_bar/search_bar/search_bar_component.dart": src__app_bar__search_bar__search_bar_component,
    "package:web/src/common/signin_page/signin_page_component.dart": src__common__signin_page__signin_page_component,
    "package:web/src/app_bar/signin_bar/signin_bar_component.dart": src__app_bar__signin_bar__signin_bar_component,
    "package:web/src/app_bar/app_bar_component.dart": src__app_bar__app_bar_component
  }, '{"version":3,"sourceRoot":"","sources":["../common/content_rating/content_rating_component.dart","../common/event_poster/lazy_image_component.dart","../common/event_poster/event_poster_component.dart","../common/showtime_item/showtime_item_component.dart","../event_details/actor_scroller/actor_image_component.dart","../event_details/actor_scroller/actor_scroller_component.dart","../event_details/landscape_image/event_landscape_image_component.dart","../common/content_rating/content_rating_component.css.shim.dart","../common/content_rating/content_rating_component.template.dart","../common/event_poster/lazy_image_component.css.shim.dart","../common/event_poster/lazy_image_component.template.dart","../common/event_poster/event_poster_component.css.shim.dart","../common/event_poster/event_poster_component.template.dart","../common/showtime_item/showtime_item_component.css.shim.dart","../common/showtime_item/showtime_item_component.template.dart","../event_details/actor_scroller/actor_image_component.css.shim.dart","../event_details/actor_scroller/actor_image_component.template.dart","../event_details/actor_scroller/actor_scroller_component.css.shim.dart","../event_details/actor_scroller/actor_scroller_component.template.dart","../event_details/landscape_image/event_landscape_image_component.css.shim.dart","../event_details/landscape_image/event_landscape_image_component.template.dart","../common/loading_view/spinner_component.dart","../common/loading_view/loading_view_component.dart","../common/theater_selector/theater_selector_dropdown_menu_component.css.shim.dart","../common/theater_selector/theater_dropdown_controller.template.dart","../common/theater_selector/theater_selector_dropdown_menu_component.dart","../common/theater_selector/theater_selector_dropdown_menu_component.template.dart","../common/theater_selector/theater_dropdown_controller.dart","../common/theater_selector/theater_selector_component.dart","../restore_scroll_position.dart","../restore_scroll_position.template.dart","../common/loading_view/spinner_component.css.shim.dart","../common/loading_view/spinner_component.template.dart","../common/loading_view/loading_view_component.css.shim.dart","../common/loading_view/loading_view_component.template.dart","../common/theater_selector/theater_selector_component.css.shim.dart","../common/theater_selector/theater_selector_component.template.dart","../events/events_page_component.css.shim.dart","../common/vegebook_poster/lazy_image_component.dart","../common/vegebook_poster/vegebook_poster_component.dart","../common/vegebook_poster/lazy_image_component.css.shim.dart","../common/vegebook_poster/lazy_image_component.template.dart","../common/vegebook_poster/vegebook_poster_component.css.shim.dart","../common/vegebook_poster/vegebook_poster_component.template.dart","../vegebook/vegebook_page_component.css.shim.dart","../common/vegenews_poster/lazy_image_component.dart","../common/vegenews_poster/vegenews_poster_component.dart","../common/vegenews_poster/lazy_image_component.css.shim.dart","../common/vegenews_poster/lazy_image_component.template.dart","../common/vegenews_poster/vegenews_poster_component.css.shim.dart","../common/vegenews_poster/vegenews_poster_component.template.dart","../vegenews/vegenews_page_component.css.shim.dart","../event_details/event_details_component.css.shim.dart","../showtimes/date_selector_component.dart","../showtimes/date_selector_component.css.shim.dart","../showtimes/date_selector_component.template.dart","../showtimes/showtimes_page_component.css.shim.dart","../vegenews_details/landscape_image/vegenews_landscape_image_component.dart","../vegenews_details/landscape_image/vegenews_landscape_image_component.css.shim.dart","../vegenews_details/landscape_image/vegenews_landscape_image_component.template.dart","../vegenews_details/vegenews_details_component.css.shim.dart","../vegebook_details/landscape_image/vegebook_landscape_image_component.dart","../vegebook_details/landscape_image/vegebook_landscape_image_component.css.shim.dart","../vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart","../vegebook_details/vegebook_details_component.css.shim.dart","../vegebook_details/vegebook_details_component.dart","../vegebook_details/vegebook_details_component.template.dart","../vegenews_details/vegenews_details_component.dart","../vegenews_details/vegenews_details_component.template.dart","../showtimes/showtimes_page_component.dart","../showtimes/showtimes_page_component.template.dart","../vegenews/vegenews_page_component.dart","../vegenews/vegenews_page_component.template.dart","../vegebook/vegebook_page_component.dart","../vegebook/vegebook_page_component.template.dart","../events/events_page_component.dart","../events/events_page_component.template.dart","../routes.template.dart","../event_details/event_details_component.dart","../event_details/event_details_component.template.dart","../routes.dart","nav_bar/nav_bar_component.dart","scroll_utils.dart","search_bar/search_bar_component.dart","../common/signin_page/signin_page_component.dart","signin_bar/signin_bar_component.dart","app_bar_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYO;;;;;;IAGC;;;;;;;cAEkB,SAAI;;;gBAAe,UAAK;;;IAAW;;cAChC,SAAI;;;gBAAkB,UAAK;;;IAAc;;cAEhB,SAAI;;;gBAAwB,UAAK;;;IAAoB;;;IARpG,UAAI;IAGH,WAAK;EAMb;;;;;;;;;;;;;;;;MCfW,4EAA4B;YACnC,AAAG,WAAO,YAAY,CAAC;;;;;;IAaX;;;;;;IAGP;;;;;;IAGA;;;;;;sBAmBgB,KAAkB;UAAU;AACjD,UAAM,MAAM,GAAG,WAAH,GAAG,GAAI,KAAK,UAAQ,QAAC;AAEjC,MAAA,AACE,AAAE,KADC,IACE,GAAG,qFAAkB,CAAC,GAAG;MAC9B,AAAE,eAAO,OAAO,CAAC;MACjB,AAAE,wBAAgB,CAAC,QAAQ,QAAC,CAAC,IAAK,yEAAM,CAAC,KAAK;MAC9C,AAAE,wBAAgB,CAAC,SAAS,QAAC,CAAC,IAAK,yEAAM,CAAC,KAAK;IACnD;;AAIE,UAAmB,iCAAQ,SAAI,cAAc,CAAC;AAC9C,wCAA4B,CAAC,KAAK;AAElC,oBAAI,4EAA4B,GAAE;AAChC,oFAAS,QAAQ,CAAC,KAAK;aAClB;AAGL,qFAAU,CAAC,KAAK,QAAO,QAAG;;IAE9B;mCAGkC,KAAkB;AAClD,UAAI,iFAAc,IAAI,QAAQ,kFAAe,IAAI,MAAM;AACrD,YAAM,cAAc,KAAK,YAAY;AAErC,YAAI,WAAW,IAAI,QAAQ,WAAW,KAAI,GAAG;AAC3C,2FAAc,GAAG;AACjB,4FAAe,GAAG,CAAgB,aAAf,iFAAc,IAAG,kBAAM,SAAO;AACjD;;AAGF,YAAM,eAAe,oFAAiB,aAAW,CAC/C,QAAC,KAAK,IAAW,aAAN,KAAK,kBAAI,WAAW,0BACvB,cAAM,oFAAiB,OAAK;AAGtC,yFAAc,GAAG,YAAY;AAC7B,0FAAe,GAAG,CAAgB,aAAf,iFAAc,IAAG,kBAAM,SAAO;;IAErD;8BAEiC,GAAU;AACzC,YAAO,UAAG,GAAG,qBAAM,iFAAc,qBAAM,kFAAe;IACxD;;qFAzEmB,IAAS;IAIrB,SAAG;IAGH,SAAG;IAPc,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;;;;;MAJhB,yEAAM;YAAG,AAAE,KAAE;;MACb,oFAAiB;YAAG,iBAAC,KAAK,KAAK;;MACjC,iFAAc;;;;MAAE,kFAAe;;;;MAY7B,yEAAM;YAAG,SAAC,KAAK,IAAK,eAAK,CAChC,mCAAM,kBAAQ,gBAAe,QAC7B,mCAAM,KAAK,uBAAiB;;MAGrB,4EAAS;YAAG,8BAAoB,CAC3C,AAAG,eAAY,sCAAC,SAAC,OAAO,EAAE,QAAQ;AAChC,eAAO,UAAQ,CAAC,QAAC,KAAK;AACpB,oCAAI,KAAK,wDAAmB,KAAK,cAAyB;AACxD,yFAAU,iCAAC,KAAK;AAChB,oBAAQ,UAAU,gCAAC,KAAK;;;;;;;IClBjB;;;;;;IAGT;;;;;;IAGD;;;;;;IAGA;;;;;;IAGA;;;;;;;YAEqB,0FAAkB,OAAO,CAAC,UAAK,YAAY;IAAC;;yFAfjD,QAAa;IAI5B,YAAK;IAGN,kBAAY,GAAG;IAGf,gBAAU,GAAG;IAGb,iBAAW,GAAG;IAbO,eAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;MAFtB,yFAAkB;iBAAG,oBAAU,CAAC;;;;ICH9B;;;;;;IAGV;;;;;;gBAEY,KAAgB;AAC/B,MAAK,WAAM,OAAK,CAAC,SAAI,IAAI,EAAE,0BAAe,SAAI,MAAM;AACpD,WAAK,yBAAyB;IAChC;;4FATsB,QAAa;IAI9B,WAAI;IAJkB,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;ICH7B;;;;;;IAGM;;;;;;;AAIX,uBAAY,mBAAiB,CACzB,QAAQ,QAAC,CAAC,IAAK,iBAAY,UAAQ,IAAI,CAAC;IAC9C;;;IATO,UAAG;IAGG,kBAAY;EAO3B;;;;;;;;;;;;;;;ICTc;;;;;;;;gBAAM;EACpB;;;;;;;;;;;;ICDQ;;;;;;IAGY;;;;;;;AAMhB,uBAAY,mBAAiB,CAAC,QAAQ,wBAAO;AAC7C,uBAAY,mBAAiB,CAAC,SAAS,yBAAQ;IACjD;;YAGsB,sBAAe;IAAE;cAE1B,CAAY;AACvB,uBAAY,UAAQ,IAAI,CAAC;AACzB,2BAAe;IACjB;eAEc,CAAY;AACxB,oBAAI,kCAA4B,GAAE;AAChC,6BAAe;AACf;;AAGF,uBAAY,IAAI,GAAG,UAAK,OAAO,aAAa;AAC5C,wCAA4B,GAAG;IACjC;;AAGE,uBAAY,sBAAoB,CAAC,QAAQ,wBAAO;AAChD,uBAAY,sBAAoB,CAAC,SAAS,yBAAQ;IACpD;;;IAlCM,aAAK;IAGO,mBAAY;IAEzB,kCAA4B,GAAG;EA8BtC;;;;;;;;;;;;;;;;;;;;MC/CoB,yEAAM;YAAG,EAAC;;;;MCwBV,8FAA6B;YAAG,EAAS,yEAAM;;;;;;;;;;;AAe/D,YAAQ,WAAQ,qCAAS,IAAG,0EAA0E;IACxG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,iBAAK,GAAG,AAAS,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AACtD,2BAAqB,yBAAC,WAAK,GAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,UAAM,UAAU,AAAS,oCAAU,CAAC,gBAAgB,EAAE;AACtD,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,6IAAmC;AACxF,sBAAU,OAAG,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACrD,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,mBAAmB,KAAK;AAC9C,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;AACnC,UAAM,YAAY,IAAI,aAAa;AACnC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,WAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACxF,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAmC,kDAAE,IAAI,UAAU;AACtE,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,WAAK,EAAE,OAAO,SAAS;AAC5C,qBAAO,GAAG,SAAS;;IAEvB;;AAIE,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,6GAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,6GAAgB,GAAI,MAAM,GAAI,6GAAgB,GAAG,6DAA8B,CAAC,8FAA6B,EAAE,+GAAkB;;AAEpI,0BAAe,GAAG,MAAM;IAC1B;;+GA5D4B,UAA2B,EAAE,WAAe;IAP1D,cAAQ;IACR,gBAAU;IACpB,aAAO;IACP,aAAO;IACP,aAAO;IACK,WAAK;AAEuD,0HAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;MAJ+B,6GAAgB;;;;;;MAgEM,iGAAgC;YAAG,gBAAM,gDAAgB,CAAC,kBAAkB,mKAAuC;;;;;AAExK,YAAO,kGAAgC;IACzC;;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,yBAAC,WAAK,GAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,gBAAK,CAAC,WAAK;IACb;;AAIE,UAAM,WAAW,AAAQ,sCAAU,oDAA6B,WAAM,QAAC;AACvE,UAAM,YAAY,QAAQ,KAAK;AAC/B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,WAAK,EAAE,OAAO,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,QAAQ,SAAS;AACnC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,WAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACxF,qBAAO,GAAG,SAAS;;IAEvB;;gHAzB6B,UAA2B,EAAE,WAAe;IAHrE,aAAO;IACP,aAAO;IACK,WAAK;AACwD,2HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,4BAAmB;EACrB;;;;;;;;;;;;kHA0BgD,UAA2B,EAAE,WAAe;AAC5F,eAAO,iGAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEoB,kGAAiC;YAAG;;;;;;;AAQpD,uBAAW,OAAG,gGAA2B,CAAC,MAAM;AAChD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,uCAA2B,OAAG,gFAA8B;AAC5D,uBAAW,OAAO,CAAC,iCAA2B,EAAE,mBAAc;AAC9D,gBAAK,CAAC,WAAM;AACZ,iBAAO,4CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,iCAA2B;IAClE;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;oHAnBiC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,iCAA2B;AACuB,+HAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;sHAsB7F,UAA2B,EAAE,WAAe;AAC1H,eAAO,qGAAgC,CAAC,UAAU,EAAE,WAAW;EACjE;;MAEI,yEAAQ;YAAG;;;;;AAEb,kBAAI,yEAAQ,GAAE;AACZ;;AAEF,gFAAW;AAEX,IAAO,oCAAiB,CAAC,2FAAsB,EAAE,gGAA+B;AAChF,IAAM,gCAAa;EACrB;;MClLoB,mEAAM;YAAG,EAAC;;;;MCoBV,oFAAyB;YAAG,EAAS,mEAAM;;;;;;;;AAY3D,YAAQ,WAAQ,qCAAS,IAAG,oEAAoE;IAClG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,kBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AACrD,2BAAqB,yBAAC,YAAK,GAAE;AAC7B,mBAAQ,CAAC,YAAK;AACd,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,cAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,YAAK,EAAE,YAAY,SAAS;AACpD,sBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,cAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,YAAK,EAAE,OAAO,SAAS;AAC3C,sBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,mGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,mGAAgB,GAAI,MAAM,GAAI,mGAAgB,GAAG,6DAA8B,CAAC,oFAAyB,EAAE,qGAAkB;;AAEhI,0BAAe,GAAG,MAAM;IAC1B;;qGAzCwB,UAA2B,EAAE,WAAe;IAJhE,cAAO;IACP,cAAO;IACK,YAAK;AAEmD,gHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;MAJ+B,mGAAgB;;;;;;MA6CE,uFAA4B;YAAG,gBAAM,4CAAgB,CAAC,YAAY,qJAAmC;;;;;AAEtJ,YAAO,wFAA4B;IACrC;;;MAEoB,wFAA6B;YAAG;;;;;;;AAQhD,wBAAW,OAAG,sFAAuB,CAAC,MAAM;AAC5C,iBAAM,GAAG,kBAAW,OAAO;AAC3B,mCAAuB,OAAG,sEAA0B,CAAC,WAAM;AAC3D,wBAAW,OAAO,CAAC,6BAAuB,EAAE,mBAAc;AAC1D,gBAAK,CAAC,WAAM;AACZ,iBAAO,wCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,6BAAuB;IAC9D;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,qCAAuB,SAAS;;AAElC,wBAAW,cAAc;IAC3B;;AAIE,wBAAW,qBAAqB;IAClC;;0GAvB6B,UAA2B,EAAE,WAAe;IAFjD,kBAAW;IACR,6BAAuB;AAC2B,qHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;4GA0BjG,UAA2B,EAAE,WAAe;AAClH,eAAO,2FAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEI,mEAAQ;YAAG;;;;;AAEb,kBAAI,mEAAQ,GAAE;AACZ;;AAEF,0EAAW;AAEX,IAAO,oCAAiB,CAAC,iFAAkB,EAAE,sFAA2B;AACxE,IAAM,gCAAa;EACrB;;MCxHoB,qEAAM;YAAG,EAAC;;;;MCiCV,wFAA2B;YAAG,EAAS,qEAAM;;;;;;;;;;;;;AAiB7D,YAAQ,WAAQ,qCAAS,IAAG,sEAAsE;IACpG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,iBAAK,GAAG,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC3C,MAAS,sCAAY,CAAC,WAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,WAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,qBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,uIAAiC;AACtF,qBAAS,OAAG,uCAAI,CAAC,eAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,uIAAiC;AACtF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,uIAAiC;AACtF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,qBAAS,KAAK,GAAG,IAAI,MAAM,uBAAuB;AAClD,qBAAS,KAAK,GAAG,IAAI,WAAW;AAChC,qBAAS,KAAK,GAAG,IAAI,aAAa;AAClC,qBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,UAAM,YAAa,AAAsB,qCAAE,IAAI,MAAM,MAAM;AAC3D,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,WAAK,EAAE,OAAO,SAAS;AAC5C,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,qBAAQ,mBAAmB;AAC3B,oBAAQ,mBAAmB;AAC3B,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,uGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,uGAAgB,GAAI,MAAM,GAAI,uGAAgB,GAAG,6DAA8B,CAAC,wFAA2B,EAAE,yGAAkB;;AAElI,0BAAe,GAAG,MAAM;IAC1B;;yGAhE0B,UAA2B,EAAE,WAAe;IATxD,eAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;IACV,eAAO;IACK,WAAK;AAEqD,oHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;;;MAJ+B,uGAAgB;;;;;;MAoEI,2FAA8B;YAAG,gBAAM,8CAAgB,CAAC,gBAAgB,2JAAqC;;;;;AAEhK,YAAO,4FAA8B;IACvC;;;;;;;AAYI,yBAAW,OAAG,sFAAgC,CAAC,MAAM;AACrD,UAAM,QAAQ,mBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,oCAAuB,OAAG,sEAA2B,CAAC,KAAK;AAC3D,yBAAW,QAAQ,CAAC,8BAAuB;AAC3C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,MAAM,OAAO,eAAe;AAClD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,sCAAuB,IAAI,GAAG,SAAS;AACvC,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAc,6BAAE,IAAI,MAAM,MAAM;AACnD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,sCAAuB,IAAI,GAAG,SAAS;AACvC,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,sCAAuB,SAAS;;AAElC,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;0GApC2B,UAA2B,EAAE,WAAe;IAJtC,mBAAW;IAChB,8BAAuB;IAC5C,eAAO;IACP,eAAO;AAC6D,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;;4GAqC8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,uIAAiC;AACtF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,qBAAS,KAAK,GAAG,IAAI,MAAM,mBAAmB,WAAW;AACzD,oBAAQ,2BAA2B;AACnC,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,MAAM;AACtE,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,OAAO;IACzE;;AAIE,oBAAQ,mBAAmB;IAC7B;;0GArC2B,UAA2B,EAAE,WAAe;IAJ5C,oBAAc,OAAG,0CAAoB;IACrC,oBAAc,OAAG,0CAAoB;IAClD,cAAQ;IACjB,eAAS;AAC6D,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;;4GAsC8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;AAWI,yBAAW,OAAG,gGAAoC,CAAC,MAAM;AACzD,UAAM,QAAQ,mBAAW,OAAO;AAChC,MAAS,sCAAY,CAAC,KAAK,EAAE,QAAQ;AACrC,mBAAQ,CAAC,KAAK;AACd,wCAA2B,OAAG,gFAA+B;AAC7D,yBAAW,QAAQ,CAAC,kCAA2B;AAC/C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,0CAA2B,MAAM,GAAG,SAAS;AAC7C,uBAAO,GAAG,SAAS;;AAErB,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;0GA5B2B,UAA2B,EAAE,WAAe;IAHlC,mBAAW;IAChB,kCAA2B;IACvD,eAAO;AACgE,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;4GA6B8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,YAAY;AAC/E,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,YAAY;IACxE;;0GAzB2B,UAA2B,EAAE,WAAe;IAF5C,oBAAc,OAAG,0CAAoB;IACrC,oBAAc,OAAG,0CAAoB;AACW,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;4GA0B8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEoB,4FAA+B;YAAG;;;;;;AAQlD,yBAAW,OAAG,0FAAyB,CAAC,MAAM;AAC9C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,qCAAyB,GAAI,UAAQ,qCAAS,IACxC,AAAS,iCAAiB,yEAAS,qFAAoB,EAAE,kBAChD,0EAA4B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAE9F,0EAA4B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC3F,yBAAW,OAAO,CAAC,+BAAyB,EAAE,mBAAc;AAC5D,gBAAK,CAAC,WAAM;AACZ,iBAAO,0CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,+BAAyB;IAChE;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;8GAvB+B,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,+BAAyB;AACyB,yHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;gHA0B/F,UAA2B,EAAE,WAAe;AACtH,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;MAEI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAO,oCAAiB,CAAC,qFAAoB,EAAE,0FAA6B;AAC5E,IAAM,gCAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,wEAAa;EACrB;;MC9UoB,uEAAM;YAAG,EAAC;;;;MC8BV,2FAA4B;YAAG,EAAS,uEAAM;;;;;;;;;;;;;;;;AAoB9D,YAAQ,WAAS,qCAAS,IAAG,wEAAwE;IACvG;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,SAAS,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAClD,2BAAqB,yBAAC,MAAM,GAAE;AAC9B,mBAAQ,CAAC,MAAM;AACf,YAAM,SAAO,CAAC,qBAAe,QAAQ;AACrC,UAAM,SAAS,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAClD,2BAAqB,yBAAC,MAAM,GAAE;AAC9B,mBAAQ,CAAC,MAAM;AACf,UAAM,SAAS,AAAS,oCAAU,CAAC,GAAG,EAAE,MAAM;AAC9C,2BAAqB,CAAC,MAAM,EAAE;AAC9B,mBAAQ,CAAC,MAAM;AACf,YAAM,SAAO,CAAC,qBAAe,QAAQ;AACrC,wBAAY,OAAG,gGAAmC,CAAC,MAAM;AACzD,UAAM,SAAS,kBAAY,OAAO;AAClC,YAAM,SAAO,CAAC,MAAM;AACpB,mBAAQ,CAAC,MAAM;AACf,wCAA4B,OAAG,gFAA8B;AAC7D,wBAAY,QAAQ,CAAC,kCAA4B;AACjD,UAAM,SAAS,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACvD,2BAAqB,CAAC,MAAM,EAAE;AAC9B,mBAAQ,CAAC,MAAM;AACf,UAAM,SAAS,GAAG,kBAAgB,CAAC,8BAA8B;AACjE,YAAM,SAAO,CAAC,MAAM;AACpB,MAAS,sCAAY,CAAC,MAAM,EAAE,UAAU;AACxC,MAAS,sCAAY,CAAC,MAAM,EAAE,WAAW;AACzC,MAAS,sCAAY,CAAC,MAAM,EAAE,SAAS;AACvC,MAAS,sCAAY,CAAC,MAAM,EAAE,SAAS;AACvC,mBAAQ,CAAC,MAAM;AACf,UAAM,SAAS,GAAG,kBAAgB,CAAC,8BAA8B;AACjE,YAAM,SAAO,CAAC,MAAM;AACpB,MAAS,sCAAY,CAAC,MAAM,EAAE,KAAK;AACnC,MAAS,sCAAY,CAAC,MAAM,EAAE,QAAQ;AACtC,mBAAQ,CAAC,MAAM;AACf,UAAM,SAAS,GAAG,kBAAgB,CAAC,8BAA8B;AACjE,YAAM,SAAO,CAAC,MAAM;AACpB,MAAS,sCAAY,CAAC,MAAM,EAAE,KAAK;AACnC,MAAS,sCAAY,CAAC,MAAM,EAAE,QAAQ;AACtC,mBAAQ,CAAC,MAAM;AACf,YAAM,mBAAiB,CAAC,SAAS,kBAAa,mCAAC,IAAI;AACnD,wBAAY,OAAG,0CAAgB;AAC/B,0BAAc,GAAG,AAAS,gCAAU,qDAAC,kBAAY;AACjD,0BAAc,GAAG,AAAS,gCAAU,qDAAC,kBAAY;AACjD,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,KAAK;AAC3B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,KAAK,GAAG,SAAS;AAC7C,uBAAO,GAAG,SAAS;;AAErB,0BAAc,WAAW,qBAAC,AAAS,sCAAY,CAAC,oBAAc,CAAC,IAAI,KAAK,MAAM,EAAE;AAChF,0BAAc,WAAW,qBAAC,AAAS,sCAAY,CAAC,oBAAc,CAAC,IAAI,KAAK,IAAI,EAAE;AAC9E,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,KAAK,MAAM;AACrE,2BAAe,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,KAAK,qBAAqB;AACrF,2BAAe,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,KAAK,mBAAmB;AACnF,wBAAY,cAAc;IAC5B;;AAIE,wBAAY,qBAAqB;IACnC;;AAIE,UAAI,SAAS,0GAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,0GAAgB,GAAI,MAAM,GAAI,0GAAgB,GAAG,6DAA8B,CAAC,2FAA4B,EAAE,4GAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;4GA9G2B,UAA2B,EAAE,WAAe;IAZ7C,oBAAc,OAAG,0CAAmB;IACpC,oBAAc,OAAG,0CAAmB;IACpC,oBAAc,OAAG,0CAAmB;IACpC,qBAAe,OAAG,0CAAmB;IACrC,qBAAe,OAAG,0CAAmB;IAC3B,kBAAY;IACjB,kCAA4B;IACvD,eAAO;IACM,kBAAY;IACI,oBAAc;IACd,oBAAc;AAE4B,uHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;;;MAJ+B,0GAAgB;;;;;;MAkHK,8FAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,+JAAsC;;;;;AAEpK,YAAO,+FAA+B;IACxC;;;MAEoB,+FAAgC;YAAG;;;;;;;AAQnD,yBAAW,OAAG,6FAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,sCAA0B,GAAI,UAAS,qCAAS,IAC1C,AAAS,iCAAiB,4EAAS,wFAAqB,EAAE,kBACjD,6EAA6B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,2CAE/F,6EAA6B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC5F,yBAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;iHAvBgC,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,gCAA0B;AACwB,4HAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;mHA0B9F,UAA2B,EAAE,WAAe;AACxH,eAAO,kGAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,uEAAQ;YAAG;;;;;AAEb,kBAAI,uEAAQ,GAAE;AACZ;;AAEF,8EAAW;AAEX,IAAO,oCAAiB,CAAC,wFAAqB,EAAE,6FAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,8EAAa;EACrB;;MChNoB,6EAAM;YAAG,EAAC;;;;MCoBV,+FAA0B;YAAG,EAAS,6EAAM;;;;;;;AAW5D,YAAQ,WAAQ,qCAAS,IAAG,8EAA8E;IAC5G;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAChD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAQ,sCAAY,CAAC,KAAK,EAAE,OAAO;AACnC,mBAAQ,CAAC,KAAK;AACd,UAAM,UAAU,AAAQ,oCAAU,CAAC,KAAK,EAAE;AAC1C,iBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC1C,2BAAqB,yBAAC,WAAK,GAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,UAAI,aAAa,4BAAG,WAAK;AACzB,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,WAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACvF,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,8GAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,8GAAgB,GAAI,MAAM,GAAI,8GAAgB,GAAG,6DAA8B,CAAC,+FAA0B,EAAE,gHAAkB;;AAEjI,0BAAe,GAAG,MAAM;IAC1B;;gHA9CyB,UAA2B,EAAE,WAAe;IAHjE,eAAO;IACK,WAAK;AAEoD,2HAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACrK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,8GAAgB;;;;;;MAkDG,kGAA6B;YAAG,gBAAM,6CAAgB,CAAC,aAAa,iKAAoC;;;;;AAE1J,YAAO,mGAA6B;IACtC;;;MAEoB,mGAA8B;YAAG;;;;;;;AAQjD,yBAAW,OAAG,iGAAwB,CAAC,MAAM;AAC7C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,oCAAwB,OAAG,iFAA2B;AACtD,yBAAW,OAAO,CAAC,8BAAwB,EAAE,mBAAc;AAC3D,gBAAK,CAAC,WAAM;AACZ,iBAAO,yCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,8BAAwB;IAC/D;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,sCAAwB,SAAS;;AAEnC,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;qHAvB8B,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,8BAAwB;AAC0B,gIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;uHA0BhG,UAA2B,EAAE,WAAe;AACpH,eAAO,sGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEI,6EAAQ;YAAG;;;;;AAEb,kBAAI,6EAAQ,GAAE;AACZ;;AAEF,oFAAW;AAEX,IAAO,oCAAiB,CAAC,4FAAmB,EAAE,iGAA4B;AAC1E,IAAM,gCAAa;EACrB;;MC5HoB,gFAAM;YAAG,EAAC;;;;MC6BV,qGAA6B;YAAG,EAAS,gFAAM;;;;;;;;AAY/D,YAAQ,WAAQ,qCAAS,IAAG,iFAAiF;IAC/G;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,oJAAmC;AACxF,sBAAU,OAAG,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACrD,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,OAAO;AAC7B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,uBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;IACrC;;AAIE,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,oHAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,oHAAgB,GAAI,MAAM,GAAI,oHAAgB,GAAG,6DAA8B,CAAC,qGAA6B,EAAE,sHAAkB;;AAEpI,0BAAe,GAAG,MAAM;IAC1B;;sHA7C4B,UAA2B,EAAE,WAAe;IAJ1D,cAAQ;IACR,gBAAU;IACpB,eAAO;AAEiE,iIAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;MAJ+B,oHAAgB;;;;;;MAiDM,wGAAgC;YAAG,gBAAM,gDAAgB,CAAC,kBAAkB,0KAAuC;;;;;AAExK,YAAO,yGAAgC;IACzC;;;;;;;;;AAcI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,mBAAQ,yBAAC,KAAK;AACd,uBAAW,OAAG,iGAAiC,CAAC,MAAM;AACtD,kBAAK,GAAG,iBAAW,OAAO;AAC1B,WAAK,SAAO,CAAC,YAAK;AAClB,mBAAQ,yBAAC,YAAK;AACd,oCAAwB,OAAG,iFAA4B;AACvD,uBAAW,QAAQ,CAAC,8BAAwB;AAC5C,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,cAAc,AAAQ,sCAAU,2BAAiB,WAAM,QAAC;AAC9D,UAAM,YAAY,WAAW,UAAU;AACvC,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,sCAAwB,IAAI,GAAG,SAAS;AACxC,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,sCAAwB,SAAS;;AAEnC,UAAM,YAAa,AAAa,4BAAE,WAAW,KAAK;AAClD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,YAAK,EAAE,OAAO,SAAS;AAC5C,uBAAO,GAAG,SAAS;;AAErB,2BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,WAAW,KAAK;AACtE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;IAClC;;uHA5C6B,UAA2B,EAAE,WAAe;IAN9C,qBAAc,OAAG,0CAAoB;IAC9B,iBAAW;IAChB,8BAAwB;IACjD,eAAO;IACJ,eAAO;IACE,YAAK;AACwD,kIAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACxK,4BAAmB;EACrB;;;;;;;;;;;;;;;yHA6CgD,UAA2B,EAAE,WAAe;AAC5F,eAAO,wGAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEoB,yGAAiC;YAAG;;;;;;;AAQpD,yBAAW,OAAG,uGAA2B,CAAC,MAAM;AAChD,iBAAM,GAAG,mBAAW,OAAO;AAC3B,uCAA2B,OAAG,uFAA8B;AAC5D,yBAAW,OAAO,CAAC,iCAA2B,EAAE,mBAAc;AAC9D,gBAAK,CAAC,WAAM;AACZ,iBAAO,4CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,iCAA2B;IAClE;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;2HAnBiC,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,iCAA2B;AACuB,sIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;6HAsB7F,UAA2B,EAAE,WAAe;AAC1H,eAAO,4GAAgC,CAAC,UAAU,EAAE,WAAW;EACjE;;MAEI,gFAAQ;YAAG;;;;;AAEb,kBAAI,gFAAQ,GAAE;AACZ;;AAEF,uFAAW;AAEX,IAAO,oCAAiB,CAAC,kGAAsB,EAAE,uGAA+B;AAChF,IAAM,gCAAa;AACnB,IAAM,kFAAa;EACrB;;MC5LoB,wFAAM;YAAG,EAAC;;;;MCoBV,mHAAmC;YAAG,EAAS,wFAAM;;;;;;;AAWrE,YAAQ,WAAQ,qCAAS,IAAG,yFAAyF;IACvH;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAChD,MAAQ,sCAAY,CAAC,KAAK,EAAE,OAAO;AACnC,mBAAQ,CAAC,KAAK;AACd,kBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC1C,2BAAqB,yBAAC,YAAK,GAAE;AAC7B,mBAAQ,CAAC,YAAK;AACd,UAAI,aAAa,4BAAG,YAAK;AACzB,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM,OAAO,YAAY;AAC/C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,YAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACvF,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,kIAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,kIAAgB,GAAI,MAAM,GAAI,kIAAgB,GAAG,6DAA8B,CAAC,mHAAmC,EAAE,oIAAkB;;AAE1I,0BAAe,GAAG,MAAM;IAC1B;;oIA/CkC,UAA2B,EAAE,WAAe;IAH1E,eAAO;IACK,YAAK;AAE6D,+IAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC9K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,kIAAgB;;;;;;MAmDY,sHAAsC;YAAG,gBAAM,sDAAgB,CAAC,yBAAyB,8LAA6C;;;;;AAEjM,YAAO,uHAAsC;IAC/C;;;MAEoB,uHAAuC;YAAG;;;;;;;AAQ1D,yBAAW,OAAG,qHAAiC,CAAC,MAAM;AACtD,iBAAM,GAAG,mBAAW,OAAO;AAC3B,6CAAiC,OAAG,qGAAoC;AACxE,yBAAW,OAAO,CAAC,uCAAiC,EAAE,mBAAc;AACpE,gBAAK,CAAC,WAAM;AACZ,iBAAO,kDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,uCAAiC;IACxE;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,+CAAiC,SAAS;;AAE5C,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;AAChC,6CAAiC,YAAY;IAC/C;;yIAxBuC,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,uCAAiC;AACiB,oJAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;2IA2BvF,UAA2B,EAAE,WAAe;AACtI,eAAO,0HAAsC,CAAC,UAAU,EAAE,WAAW;EACvE;;MAEI,wFAAQ;YAAG;;;;;AAEb,kBAAI,wFAAQ,GAAE;AACZ;;AAEF,+FAAW;AAEX,IAAO,oCAAiB,CAAC,gHAA4B,EAAE,qHAAqC;AAC5F,IAAM,gCAAa;EACrB;;;ECtHwB;;;;;;;ICUP;;;;;;IAKV;;;;;;IAGE;;;;;;IAGA;;;;;;;uBAEkB,iBAAY,IAAG,aAAQ,SAAS,GAAG;IAAI;;uBACrC,iBAAY,IAAG,aAAQ,iBAAiB,GAAG;IAAI;;YAGxC,0BAAmB,OAAO;;eAIjD,MAAoB;AAC7B,qCAAyB,GAAG;AAC5B,mBAAO,GAAG,MAAM;AAEhB,qBAAK,CACH,qCAAM,kBAAQ,gBAAe,SAC7B,cAAM,+BAAyB,GAAG;IAEtC;;YAEkC,cAAO,KAAI,yCAAa,QAAQ;;;YAExC,WAAtB,0BAAqB,gBAAK,+BAAyB;;;YAErB,cAAO,KAAI,yCAAa,QAAQ;;;YAExC,WAAtB,0BAAqB,gBAAK,+BAAyB;;;YAGnD,AAA+B,cAAxB,KAAI,yCAAa,MAAM,IAC7B,aAAO,KAAI,yCAAa,QAAQ,cAAI,iBAAY;IAAC;;YAE9B,WAApB,wBAAmB,gBAAK,+BAAyB;;sBAK9B,KAAgB;AACrC,WAAK,eAAe;AACpB,+BAAmB,IAAI,CAAC;IAC1B;;YAGsB,0BAAmB,MAAM;IAAE;;yFAvD5B,QAAa;IAGpB,aAAO;IAGhB,kBAAY,GAAG;IAGb,gBAAU;IAGV,kBAAY;IAOb,yBAAmB,GAAG,0BAAgB;IA4BvC,+BAAyB,GAAG;IA/CP,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCjBjB,2FAAM;YAAG,EAAC;;;;MCS1B,8EAAQ;YAAG;;;;;AAEb,kBAAI,8EAAQ,GAAE;AACZ;;AAEF,qFAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,gGAAa;EACrB;;;;ICH4B;;;;;;IACnB;;;;;;;YAEgC,8DAAoB,UAAU,CAAC,YAAM;IAAC;;YAC9C,iBAAU,eAAe;;;YAC1B,iBAAU,SAAS,KAAK;;;YAEzB,YAAM;;IAC9B;;;;;;qBAEiB,UAAkB;AACtC,sBAAU,qBAAqB,CAAC,UAAU;AAC1C,qBAAU,eAAe;IAC3B;;YAEyB,gBAAU,eAAe;IAAE;;;IAf1B,gBAAU;IAC7B,gBAAU;IAOZ,YAAM,GAAG;IAX4B,YAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;MCiB/B,8HAA2C;YAAG,EAAS,2FAAM;;;;;;;;;;;;;AAiB7E,YAAQ,WAAQ,qCAAS,IAAG,4FAA4F;IAC1H;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AAChD,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,mBAAK,GAAG,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AAChD,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,aAAK;AAC7C,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,6KAAiD;AACtG,uBAAU,OAAG,yCAAa,CAAC,gBAAQ,EAAE,gBAAgB;AACrD,mBAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,yBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,yBAAU,UAAU;;AAEtB,sBAAQ,2BAA2B;AACnC,UAAM,YAAY,IAAI,iBAAiB;AACvC,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,OAAO;AAC7B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,UAAU,SAAS;AACtD,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,WAAW;AACjC,oBAAI,AAAS,8CAAY,CAAC,cAAO,EAAE,SAAS,IAAG;AAC7C,qBAAK,MAAM,cAAY,CAAC,cAAc,SAAS;AAC/C,sBAAO,GAAG,SAAS;;IAEvB;;AAIE,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,6IAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,6IAAgB,GAAI,MAAM,GAAI,6IAAgB,GAAG,6DAA8B,CAAC,8HAA2C,EAAE,+IAAkB;;AAElJ,0BAAe,GAAG,MAAM;IAC1B;;+IArE0C,UAA2B,EAAE,WAAe;IATxE,gBAAQ;IACR,iBAAU;IACnB,eAAO;IACP,eAAO;IACR,cAAO;IACP,aAAO;IACQ,aAAK;IACL,aAAK;AAEkE,0JAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtL,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;;;MAJ+B,6IAAgB;;;;;;MAyEoB,iIAA8C;YAAG,gBAAM,8DAAgB,CAAC,kCAAkC,iNAAqD;;;;;AAElO,YAAO,kIAA8C;IACvD;;;;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,mBAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,mBAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,kCAAiB;AAC/D,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,gBAAgB,AAAQ,sCAAU,+BAAmB,WAAM,QAAC;AAClE,UAAM,wBAAa,aAAa,EAAI,IAAI,gBAAgB;AACxD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,YAAY,SAAS;AACxD,uBAAO,GAAG,SAAS;;AAErB,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,aAAa,KAAK;IAC1E;wBAEuB,MAAM;AAC3B,UAAM,gBAAgB,AAAQ,sCAAU,+BAAmB,WAAM,QAAC;AAClE,UAAM,OAAO,QAAG;AAChB,UAAI,iBAAiB,CAAC,aAAa;IACrC;;gJA9B2C,UAA2B,EAAE,WAAe;IAH5D,oBAAc,OAAG,0CAAoB;IAC3D,eAAO;IACO,aAAK;AACmE,2JAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtL,4BAAmB;EACrB;;;;;;;;;;;;;kJA+B8D,UAA2B,EAAE,WAAe;AAC1G,eAAO,iIAA0C,CAAC,UAAU,EAAE,WAAW;EAC3E;;MAEoB,kIAA+C;YAAG;;;;;;;AAQlE,yBAAW,OAAG,gIAAyC,CAAC,MAAM;AAC9D,iBAAM,GAAG,mBAAW,OAAO;AAC3B,qDAAyC,GAAI,UAAQ,qCAAS,IACxD,AAAS,iCAAiB,+GAAS,2HAAoC,EAAE,kBAChE,gHAA4C,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,0DAE3G,gHAA4C,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY;AACxG,yBAAW,OAAO,CAAC,+CAAyC,EAAE,mBAAc;AAC5E,gBAAK,CAAC,WAAM;AACZ,iBAAO,0DAAY,CAAC,GAAG,MAAM,WAAM,EAAE,+CAAyC;IAChF;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;oJAvB+C,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,+CAAyC;AACS,+JAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;sJA0B/E,UAA2B,EAAE,WAAe;AACtJ,eAAO,qIAA8C,CAAC,UAAU,EAAE,WAAW;EAC/E;;MAEI,2FAAQ;YAAG;;;;;AAEb,kBAAI,2FAAQ,GAAE;AACZ;;AAEF,kGAAW;AAEX,IAAO,oCAAiB,CAAC,2HAAoC,EAAE,gIAA6C;AAC5G,IAAM,gCAAa;AACnB,IAAM,mFAAa;EACrB;;;;;;YC/L0B,YAAK,IAAI;IAAI;IAChC;;;;;;uBAGH,MAAsB,EACtB,SAA0B;UACnB,8DAAa;AACnB;AACD,YAAM,QAAO,MAAM,MAAM,mBAAmB,+GACjC,gIAA6C,EACtD,SAAS;AAGX,YAAM,iBAAa,uFAA2B,CAAC,IAAI;AACnD,oBAAI,SAAS;uBACI,UAAU;uBACV,UAAU;AAE3B,QAAO,AACL,AAAE,UADa,QACN,GAAG;QACZ,AAAE,0BAAc,WAAU;cAFrB,WAAU;MAGnB;;;AAGE,kBAAO,GAAG;AACV,0BAAc,WACH,uBACO;AACd,qBAAK,QAAQ;AACb,qBAAK,GAAG;;IAGd;;UAEoC;UAAc;AAChD,qBAAK,CACH,qCAAM,kBAAQ,gBAAe,QAC7B;gBAAM,WAAK;;yDAAqB,OAAO;;AAGzC,UAAI,cAAc,IAAI,MAAM;AAC1B,uBAAK,CAAC,sGAAiB,EAAE,cAAc;;IAE3C;;;IA1CK,aAAO,GAAG;IAJkB,WAAK;EAAC;;;;;;;;;;;;;;;;;;MAF1B,sGAAiB;4BAAG,kBAAQ,gBAAe;;;;;;;;;YCOjB,8DAAoB,UAAU,CAAC,aAAM;IAAC;;YAC/C,kBAAU,eAAe;;IAGtC;;;;;;;YAIb,AAAwB,sBAAT,IAAI,QAAQ,qBAAe,YAAY,KAAI;IAAK;;AAEjD;AAChB,uBAAK,2BAAsB,GAAE;AAC3B,+BAAe,IAAG,MAAM,oFAAyB,YAAY,CAC3D,aAAO,EACP,kBAAa;eAEV;AACL,uBAAQ;;MAEZ;;;AAGE,2BAAe,eAAe;AAC9B,2BAAe,GAAG;IACpB;;;IApBiB,mBAAa;IAEJ,qBAAe;IAVX,aAAM;IAAO,aAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;UCLjD,YAAM,eAAe,QAAC,yBAAa,WAAM,UAAQ;EAAW;wEAG5D,QAAoB,EAAE,qBAA+B;AACvD,QAAM;cACF,QAAQ,kBAAR,QAAQ,UAAW;;YAAU,qBAAqB,KAAK;AAE3D,QAAI,2BAA2B,EAAE;AAC/B,qBAAK,CAAC,cAAQ,KAAK,EAAE;AACnB,mBAAM,WAAS,CAAC,GAAG,SAAG,SAAS;kBAAC,WAAM,eAAe,QAAC;iCAAc;;;WAEjE;AACL,iBAAM,WAAS,CAAC,GAAG;;EAEvB;;MCZI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAM,uCAAa;EACrB;;MChBoB,gEAAM;YAAG,EAAC;;;;MCmBV,+EAAuB;YAAG,EAAS,gEAAM;;;;;AASzD,YAAQ,WAAQ,qCAAS,IAAG,iEAAiE;IAC/F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,mBAAQ,CAAC,KAAK;AACd,gBAAK;IACP;;AAIE,UAAI,SAAS,8FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,8FAAgB,GAAI,MAAM,GAAI,8FAAgB,GAAG,6DAA8B,CAAC,+EAAuB,EAAE,gGAAkB;;AAE9H,0BAAe,GAAG,MAAM;IAC1B;;gGA1CsB,UAA2B,EAAE,WAAe;AAAI,2GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAChK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;MAJ+B,8FAAgB;;;;;;MA8CA,kFAA0B;YAAG,gBAAM,0CAAgB,CAAC,WAAW,8IAAiC;;;;;AAE/I,YAAO,mFAA0B;IACnC;;;MAEoB,mFAA2B;YAAG;;;;;;;AAQ9C,yBAAW,OAAG,iFAAqB,CAAC,MAAM;AAC1C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,iCAAqB,OAAG,iEAAwB;AAChD,yBAAW,OAAO,CAAC,2BAAqB,EAAE,mBAAc;AACxD,gBAAK,CAAC,WAAM;AACZ,iBAAO,sCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,2BAAqB;IAC5D;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;qGAnB2B,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,2BAAqB;AAC6B,gHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;uGAsBnG,UAA2B,EAAE,WAAe;AAC9G,eAAO,sFAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEI,gEAAQ;YAAG;;;;;AAEb,kBAAI,gEAAQ,GAAE;AACZ;;AAEF,uEAAW;AAEX,IAAO,oCAAiB,CAAC,4EAAgB,EAAE,iFAAyB;AACpE,IAAM,gCAAa;EACrB;;MCjHoB,qEAAM;YAAG,EAAC;;;;MC8BV,wFAA2B;YAAG,EAAS,qEAAM;;;;;;;;;;;AAe7D,YAAQ,WAAQ,qCAAS,IAAG,sEAAsE;IACpG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,uIAAiC;AACtF,sBAAS,OAAG,uCAAI,CAAC,eAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,uIAAiC;AACtF,sBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,uIAAiC;AACtF,sBAAS,OAAG,uCAAI,CAAC,eAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,sBAAS,KAAK,GAAG,IAAI,sBAAsB;AAC3C,sBAAS,KAAK,GAAG,IAAI,sBAAsB;AAC3C,sBAAS,KAAK,GAAG,IAAI,oBAAoB;AACzC,qBAAQ,2BAA2B;AACnC,sBAAQ,2BAA2B;AACnC,qBAAQ,2BAA2B;IACrC;;AAIE,qBAAQ,mBAAmB;AAC3B,sBAAQ,mBAAmB;AAC3B,qBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,uGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,uGAAgB,GAAI,MAAM,GAAI,uGAAgB,GAAG,6DAA8B,CAAC,wFAA2B,EAAE,yGAAkB;;AAElI,0BAAe,GAAG,MAAM;IAC1B;;yGAxD0B,UAA2B,EAAE,WAAe;IAPxD,eAAQ;IACjB,gBAAS;IACA,gBAAQ;IACjB,gBAAS;IACA,eAAQ;IACjB,gBAAS;AAE4D,oHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;MAJ+B,uGAAgB;;;;;;MA4DI,2FAA8B;YAAG,gBAAM,8CAAgB,CAAC,gBAAgB,2JAAqC;;;;;AAEhK,YAAO,4FAA8B;IACvC;;;;;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,wBAAW,OAAG,iFAA8B,CAAC,MAAM;AACnD,UAAM,QAAQ,kBAAW,OAAO;AAChC,mBAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,iCAAqB,OAAG,iEAAyB;AACjD,wBAAW,QAAQ,CAAC,2BAAqB;AACzC,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,sBAAsB;AAC5C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,uBAAO,GAAG,SAAS;;AAErB,wBAAW,cAAc;IAC3B;;AAIE,wBAAW,qBAAqB;IAClC;;0GAhC2B,UAA2B,EAAE,WAAe;IAJxC,kBAAW;IAChB,2BAAqB;IAC1C,eAAO;IACO,aAAK;AACmD,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;;4GAiC8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,kBAAO,CAAC,aAAK,EAAE;AACf,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,sBAAsB;AAC5C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,uBAAO,GAAG,SAAS;;IAEvB;;0GArB2B,UAA2B,EAAE,WAAe;IAFlE,eAAO;IACO,aAAK;AACmD,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;4GAsB8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;;;;;;AAgBI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,aAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,uIAAiC;AACtF,qBAAS,OAAG,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC3C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,uIAAiC;AACxF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,qBAAS,KAAK,GAAI,WAAC,IAAI,aAAa;AACpC,sBAAU,KAAK,GAAI,WAAC,IAAI,aAAa;AACrC,oBAAQ,2BAA2B;AACnC,qBAAS,2BAA2B;AACpC,UAAM,YAAY,IAAI,oBAAoB;AAC1C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,uBAAO,GAAG,SAAS;;AAErB,2BAAc,WAAW,qBAAC,AAAS,sCAAY;gBAAE,IAAI,WAAW;;kBAAK,IAAI,WAAW;iCAAI,IAAI,SAAS,KAAK;;;AAC1G,2BAAc,WAAW,qBAAC,AAAS,sCAAY;gBAAE,IAAI,aAAa;;kBAAK,IAAI,aAAa;iCAAI,IAAI,SAAS,mBAAmB;;;IAC9H;;AAIE,oBAAQ,mBAAmB;AAC3B,qBAAS,mBAAmB;IAC9B;;0GAzD2B,UAA2B,EAAE,WAAe;IAR5C,qBAAc,OAAG,0CAAoB;IACrC,qBAAc,OAAG,0CAAoB;IAClD,cAAQ;IACjB,eAAS;IACA,eAAS;IAClB,gBAAU;IACV,eAAO;IACO,aAAK;AACmD,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;;;;;;4GA0D8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;AAQI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,mBAAQ,CAAC,KAAK;AACd,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,gBAAK,CAAC,KAAK;IACb;;0GAV2B,UAA2B,EAAE,WAAe;AAAI,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;4GAW8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;;;AASI,UAAM,OAAO,QAAG;AAChB,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAS,sCAAY,CAAC,KAAK,EAAE,QAAQ;AACrC,mBAAQ,yBAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,WAAK,mBAAiB,CAAC,SAAS,kBAAa,mCAAC,IAAI;AAClD,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,2BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,SAAS;IAC9E;;0GApB2B,UAA2B,EAAE,WAAe;IAD5C,qBAAc,OAAG,0CAAoB;AACW,qHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;4GAqB8C,UAA2B,EAAE,WAAe;AAC1F,eAAO,2FAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEoB,4FAA+B;YAAG;;;;;;;AAQlD,yBAAW,OAAG,0FAAyB,CAAC,MAAM;AAC9C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,qCAAyB,GAAI,UAAQ,qCAAS,IACxC,AAAS,iCAAiB,yEAAS,qFAAoB,EAAE,kBAChD,0EAA4B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAE9F,0EAA4B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC3F,yBAAW,OAAO,CAAC,+BAAyB,EAAE,mBAAc;AAC5D,gBAAK,CAAC,WAAM;AACZ,iBAAO,0CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,+BAAyB;IAChE;;AAIE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;AAChC,qCAAyB,YAAY;IACvC;;8GAxB+B,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,+BAAyB;AACyB,yHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;gHA2B/F,UAA2B,EAAE,WAAe;AACtH,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;MAEI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAO,oCAAiB,CAAC,qFAAoB,EAAE,0FAA6B;AAC5E,IAAM,gCAAa;AACnB,IAAM,qEAAa;EACrB;;MCzVoB,6EAAM;YAAG,EAAC;;;;MC2BV,oGAA+B;YAAG,EAAS,6EAAM;;;;;;;;;;AAcjE,YAAQ,WAAS,qCAAS,IAAG,8EAA8E;IAC7G;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,UAAM,QAAQ,AAAS,oCAAU,CAAC,GAAG,EAAE,KAAK;AAC5C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,iBAAK,GAAG,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AAChD,2BAAqB,CAAC,WAAK,EAAE;AAC7B,mBAAQ,CAAC,WAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,WAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,4BAAgB,OAAG,+CAAW,CAAC,cAAQ,EAAE,mJAAqC;AAC9E,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,UAAI,cAAc,GAAG,cAAQ;AAC7B,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,oBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,eAAe,KAAK;AAC9E,UAAM,YAAY,IAAI,uBAAuB;AAC7C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,WAAK,EAAE,WAAW,SAAS;AACvD,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,mHAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,mHAAgB,GAAI,MAAM,GAAI,mHAAgB,GAAG,6DAA8B,CAAC,oGAA+B,EAAE,qHAAkB;;AAEtI,0BAAe,GAAG,MAAM;IAC1B;;qHAnE8B,UAA2B,EAAE,WAAe;IANhD,sBAAc,OAAG,0CAAmB;IAChD,cAAQ;IACV,sBAAgB;IACvB,eAAO;IACO,WAAK;AAEsD,gIAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;MAJ+B,mHAAgB;;;;;;MAuEQ,uGAAkC;YAAG,gBAAM,kDAAgB,CAAC,oBAAoB,2KAAyC;;;;;AAEhL,YAAO,wGAAkC;IAC3C;;;;AAQI,gBAAK;IACP;;sHAN+B,UAA2B,EAAE,WAAe;AAAI,iIAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;wHAOkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,uGAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;MAEoB,wGAAmC;YAAG;;;;;;;;AAStD,yBAAW,OAAG,sGAA6B,CAAC,MAAM;AAClD,iBAAM,GAAG,mBAAW,OAAO;AAC3B,qBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,WAAM;AAC9C,yCAA6B,GAAI,UAAS,qCAAS,IAC7C,AAAS,iCAAiB,qFAAS,iGAAwB,EAAE,kBACpD,sFAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,eAAQ,4CAE1G,sFAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,eAAQ;AACvG,yBAAW,OAAO,CAAC,mCAA6B,EAAE,mBAAc;AAChE,gBAAK,CAAC,eAAQ;AACd,iBAAO,8CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IACpE;;AAIE,qBAAQ,2BAA2B;AACnC,yBAAW,cAAc;IAC3B;;AAIE,qBAAQ,mBAAmB;AAC3B,yBAAW,qBAAqB;IAClC;;0HA1BmC,UAA2B,EAAE,WAAe;IAHjD,mBAAW;IAC3B,eAAQ;IACW,mCAA6B;AACqB,qIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;4HA6B3F,UAA2B,EAAE,WAAe;AAC9H,eAAO,2GAAkC,CAAC,UAAU,EAAE,WAAW;EACnE;;MAEI,6EAAQ;YAAG;;;;;AAEb,kBAAI,6EAAQ,GAAE;AACZ;;AAEF,oFAAW;AAEX,IAAO,oCAAiB,CAAC,iGAAwB,EAAE,sGAAiC;AACpF,IAAM,gCAAa;AACnB,IAAM,mFAAa;EACrB;;MC9KoB,sDAAM;YAAG,EAAC;;;;MCMnB,+EAA4B;YACnC,AAAG,WAAO,YAAY,CAAC;;;;;;IAaX;;;;;;IAGP;;;;;;IAGA;;;;;;sBAmBgB,KAAkB;UAAU;AACjD,UAAM,MAAM,GAAG,WAAH,GAAG,GAAI,KAAK,UAAQ,QAAC;AAEjC,MAAA,AACE,AAAE,KADC,IACE,GAAG,wFAAkB,CAAC,GAAG;MAC9B,AAAE,eAAO,OAAO,CAAC;MACjB,AAAE,wBAAgB,CAAC,QAAQ,QAAC,CAAC,IAAK,4EAAM,CAAC,KAAK;MAC9C,AAAE,wBAAgB,CAAC,SAAS,QAAC,CAAC,IAAK,4EAAM,CAAC,KAAK;IACnD;;AAKE,UAAmB,iCAAQ,SAAI,cAAc,CAAC;AAC9C,iBAAK,CAAC,KAAK,YAAY;AACvB,yCAA4B,CAAC,KAAK;AAElC,oBAAI,+EAA4B,GAAE;AAChC,uFAAS,QAAQ,CAAC,KAAK;aAClB;AAGL,wFAAU,CAAC,KAAK,QAAO,QAAG;;IAE9B;oCAGkC,KAAkB;AAClD,iBAAK,CAAC,oFAAc;AACpB,UAAI,oFAAc,IAAI,QAAQ,qFAAe,IAAI,MAAM;AACrD,YAAM,cAAc,KAAK,YAAY;AACrC,mBAAK,CAAC,WAAW;AACjB,YAAI,WAAW,IAAI,QAAQ,WAAW,KAAI,KAAiB,aAAZ,WAAW,IAAG,KAAK;AAChE,8FAAc,GAAG;AACjB,+FAAe,GAAG,CAAgB,aAAf,oFAAc,IAAG,kBAAM,SAAO;AACjD;;AAGF,YAAM,eAAe,uFAAiB,aAAW,CAC/C,QAAC,KAAK,IAAW,aAAN,KAAK,kBAAI,WAAW,0BACvB,cAAM,uFAAiB,OAAK;AAGtC,4FAAc,GAAG,YAAY;AAC7B,6FAAe,GAAG,CAAgB,aAAf,oFAAc,IAAG,kBAAM,SAAO;;IAErD;8BAEiC,GAAU;AACzC,YAAO,UAAG,GAAG,qBAAM,oFAAc,qBAAM,qFAAe;IACxD;;wFA5EmB,IAAS;IAIrB,WAAG;IAGH,UAAG;IAPc,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;;;;;MAJhB,4EAAM;YAAG,AAAE,KAAE;;MACb,uFAAiB;YAAG,iBAAC,KAAK,KAAK;;MACjC,oFAAc;;;;MAAE,qFAAe;;;;MAY7B,4EAAM;YAAG,SAAC,KAAK,IAAK,eAAK,CAChC,qCAAM,kBAAQ,gBAAe,QAC7B,mCAAM,KAAK,uBAAiB;;MAGrB,+EAAS;YAAG,8BAAoB,CAC3C,AAAG,eAAY,sCAAC,SAAC,OAAO,EAAE,QAAQ;AAChC,eAAO,UAAQ,CAAC,QAAC,KAAK;AACpB,oCAAI,KAAK,wDAAmB,KAAK,cAAyB;AACxD,4FAAU,iCAAC,KAAK;AAChB,oBAAQ,UAAU,gCAAC,KAAK;;;;;;;ICpBjB;;;;;;IAGN;;;;;;IAGJ;;;;;;IAGA;;;;;;IAGA;;;;;;;YAEuB,mGAAkB,OAAO,CAAC,aAAQ,cAAc;IAAC;;kGAfrD,QAAa;IAI5B,cAAQ;IAGZ,mBAAY,GAAG;IAGf,iBAAU,GAAG;IAGb,kBAAW,GAAG;IAbU,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;MAFzB,kGAAkB;iBAAG,oBAAU,CAAC;;;;MChB3B,sEAAM;YAAG,EAAC;;;;MCoBV,uFAAyB;YAAG,EAAS,sEAAM;;;;;;;;AAY3D,YAAQ,WAAQ,qCAAS,IAAG,uEAAuE;IACrG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AACrD,2BAAqB,yBAAC,aAAK,GAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,aAAK,EAAE,YAAY,SAAS;AACpD,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC3C,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,sGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,sGAAgB,GAAI,MAAM,GAAI,sGAAgB,GAAG,6DAA8B,CAAC,uFAAyB,EAAE,wGAAkB;;AAEhI,0BAAe,GAAG,MAAM;IAC1B;;wGAzCwB,UAA2B,EAAE,WAAe;IAJhE,eAAO;IACP,eAAO;IACK,aAAK;AAEmD,mHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;MAJ+B,sGAAgB;;;;;;MA6CE,0FAA4B;YAAG,gBAAM,6CAAgB,CAAC,YAAY,yJAAmC;;;;;AAEtJ,YAAO,2FAA4B;IACrC;;;MAEoB,2FAA6B;YAAG;;;;;;;AAQhD,yBAAW,OAAG,yFAAuB,CAAC,MAAM;AAC5C,iBAAM,GAAG,mBAAW,OAAO;AAC3B,qCAAuB,OAAG,yEAA0B,CAAC,WAAM;AAC3D,yBAAW,OAAO,CAAC,+BAAuB,EAAE,mBAAc;AAC1D,gBAAK,CAAC,WAAM;AACZ,iBAAO,yCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,+BAAuB;IAC9D;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,uCAAuB,SAAS;;AAElC,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;6GAvB6B,UAA2B,EAAE,WAAe;IAFjD,mBAAW;IACR,+BAAuB;AAC2B,wHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;+GA0BjG,UAA2B,EAAE,WAAe;AAClH,eAAO,8FAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEI,sEAAQ;YAAG;;;;;AAEb,kBAAI,sEAAQ,GAAE;AACZ;;AAEF,6EAAW;AAEX,IAAO,oCAAiB,CAAC,oFAAkB,EAAE,yFAA2B;AACxE,IAAM,gCAAa;EACrB;;MCxHoB,2EAAM;YAAG,EAAC;;;;MC8BV,iGAA8B;YAAG,EAAS,2EAAM;;;;;;;;;;;;;AAiBhE,YAAQ,WAAQ,qCAAS,IAAG,4EAA4E;IAC1G;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,mBAAK,GAAG,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC3C,MAAS,sCAAY,CAAC,aAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,aAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,gJAAoC;AACzF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,gJAAoC;AACzF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,qBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,gJAAoC;AACzF,sBAAS,OAAG,uCAAI,CAAC,eAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,uBAAS,KAAK,GAAG,IAAI,SAAS,uBAAuB;AACrD,uBAAS,KAAK,GAAG,IAAI,WAAW;AAChC,sBAAS,KAAK,GAAG,IAAI,aAAa;AAClC,sBAAQ,2BAA2B;AACnC,sBAAQ,2BAA2B;AACnC,qBAAQ,2BAA2B;AACnC,UAAM,YAAa,AAAsB,qCAAE,IAAI,SAAS,MAAM;AAC9D,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC5C,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,sBAAQ,mBAAmB;AAC3B,sBAAQ,mBAAmB;AAC3B,qBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,gHAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,gHAAgB,GAAI,MAAM,GAAI,gHAAgB,GAAG,6DAA8B,CAAC,iGAA8B,EAAE,kHAAkB;;AAErI,0BAAe,GAAG,MAAM;IAC1B;;kHAhE6B,UAA2B,EAAE,WAAe;IAT3D,gBAAQ;IACjB,iBAAS;IACA,gBAAQ;IACjB,iBAAS;IACA,eAAQ;IACjB,gBAAS;IACV,eAAO;IACK,aAAK;AAEwD,6HAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;;;MAJ+B,gHAAgB;;;;;;MAoEO,oGAAiC;YAAG,gBAAM,iDAAgB,CAAC,mBAAmB,uKAAwC;;;;;AAE5K,YAAO,qGAAiC;IAC1C;;;;;;;AAYI,0BAAW,OAAG,yFAAgC,CAAC,MAAM;AACrD,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,qCAAuB,OAAG,yEAA2B,CAAC,KAAK;AAC3D,0BAAW,QAAQ,CAAC,+BAAuB;AAC3C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,SAAS,OAAO,eAAe;AACrD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAuB,IAAI,GAAG,SAAS;AACvC,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAc,6BAAE,IAAI,SAAS,MAAM;AACtD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAuB,IAAI,GAAG,SAAS;AACvC,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,uCAAuB,SAAS;;AAElC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;mHApC8B,UAA2B,EAAE,WAAe;IAJzC,oBAAW;IAChB,+BAAuB;IAC5C,eAAO;IACP,eAAO;AACgE,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;;;qHAqCiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,MAAM;AACzE,2BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;IAC/E;;mHA1B8B,UAA2B,EAAE,WAAe;IAF/C,sBAAc,OAAG,0CAAoB;IACrC,qBAAc,OAAG,0CAAoB;AACc,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;qHA2BiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,2BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,YAAY;AAC/E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,cAAc;IAC1E;;mHAzB8B,UAA2B,EAAE,WAAe;IAF/C,qBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACc,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;qHA0BiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEoB,qGAAkC;YAAG;;;;;;AAQrD,0BAAW,OAAG,mGAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,wCAA4B,GAAI,UAAQ,qCAAS,IAC3C,AAAS,iCAAiB,kFAAS,8FAAuB,EAAE,kBACnD,mFAA+B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,6CAEjG,mFAA+B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC9F,0BAAW,OAAO,CAAC,kCAA4B,EAAE,mBAAc;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;uHAvBkC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,kCAA4B;AACsB,kIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;yHA0B5F,UAA2B,EAAE,WAAe;AAC5H,eAAO,wGAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEI,2EAAQ;YAAG;;;;;AAEb,kBAAI,2EAAQ,GAAE;AACZ;;AAEF,kFAAW;AAEX,IAAO,oCAAiB,CAAC,8FAAuB,EAAE,mGAAgC;AAClF,IAAM,gCAAa;AACnB,IAAM,2EAAa;EACrB;;MCtRoB,0DAAM;YAAG,EAAC;;;;MCMnB,+EAA4B;YACnC,AAAG,WAAO,YAAY,CAAC;;;;;;IAaX;;;;;;IAGP;;;;;;IAGA;;;;;;sBAmBgB,KAAkB;UAAU;AACjD,UAAM,MAAM,GAAG,WAAH,GAAG,GAAI,KAAK,UAAQ,QAAC;AAEjC,MAAA,AACE,AAAE,KADC,IACE,GAAG,wFAAkB,CAAC,GAAG;MAC9B,AAAE,eAAO,OAAO,CAAC;MACjB,AAAE,wBAAgB,CAAC,QAAQ,QAAC,CAAC,IAAK,4EAAM,CAAC,KAAK;MAC9C,AAAE,wBAAgB,CAAC,SAAS,QAAC,CAAC,IAAK,4EAAM,CAAC,KAAK;IACnD;;AAKE,UAAmB,iCAAQ,SAAI,cAAc,CAAC;AAC9C,iBAAK,CAAC,KAAK,YAAY;AACvB,0CAA4B,CAAC,KAAK;AAElC,oBAAI,+EAA4B,GAAE;AAChC,uFAAS,QAAQ,CAAC,KAAK;aAClB;AAGL,wFAAU,CAAC,KAAK,QAAO,QAAG;;IAE9B;qCAGkC,KAAkB;AAClD,iBAAK,CAAC,oFAAc;AACpB,UAAI,oFAAc,IAAI,QAAQ,qFAAe,IAAI,MAAM;AACrD,YAAM,cAAc,KAAK,YAAY;AACrC,mBAAK,CAAC,WAAW;AACjB,YAAI,WAAW,IAAI,QAAQ,WAAW,KAAI,KAAiB,aAAZ,WAAW,IAAG,KAAK;AAChE,8FAAc,GAAG;AACjB,+FAAe,GAAG,CAAgB,aAAf,oFAAc,IAAG,kBAAM,SAAO;AACjD;;AAGF,YAAM,eAAe,uFAAiB,aAAW,CAC/C,QAAC,KAAK,IAAW,aAAN,KAAK,kBAAI,WAAW,0BACvB,cAAM,uFAAiB,OAAK;AAGtC,4FAAc,GAAG,YAAY;AAC7B,6FAAe,GAAG,CAAgB,aAAf,oFAAc,IAAG,kBAAM,SAAO;;IAErD;8BAEiC,GAAU;AACzC,YAAO,UAAG,GAAG,qBAAM,oFAAc,qBAAM,qFAAe;IACxD;;wFA5EmB,IAAS;IAIrB,WAAG;IAGH,WAAG;IAPc,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;;;;;MAJhB,4EAAM;YAAG,AAAE,KAAE;;MACb,uFAAiB;YAAG,iBAAC,KAAK,KAAK;;MACjC,oFAAc;;;;MAAE,qFAAe;;;;MAY7B,4EAAM;YAAG,SAAC,KAAK,IAAK,eAAK,CAChC,qCAAM,kBAAQ,gBAAe,QAC7B,mCAAM,KAAK,uBAAiB;;MAGrB,+EAAS;YAAG,8BAAoB,CAC3C,AAAG,eAAY,sCAAC,SAAC,OAAO,EAAE,QAAQ;AAChC,eAAO,UAAQ,CAAC,QAAC,KAAK;AACpB,oCAAI,KAAK,wDAAmB,KAAK,cAAyB;AACxD,4FAAU,iCAAC,KAAK;AAChB,oBAAQ,UAAU,gCAAC,KAAK;;;;;;;ICpBjB;;;;;;IAGN;;;;;;IAGJ;;;;;;IAGA;;;;;;IAGA;;;;;;;YAEuB,mGAAkB,OAAO,CAAC,aAAQ,cAAc;IAAC;;kGAfrD,QAAa;IAI5B,cAAQ;IAGZ,oBAAY,GAAG;IAGf,kBAAU,GAAG;IAGb,mBAAW,GAAG;IAbU,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;MAFzB,kGAAkB;iBAAG,oBAAU,CAAC;;;;MChB3B,sEAAM;YAAG,EAAC;;;;MCoBV,uFAAyB;YAAG,EAAS,sEAAM;;;;;;;;AAY3D,YAAQ,WAAQ,qCAAS,IAAG,uEAAuE;IACrG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,gBAAgB,EAAE;AACrD,2BAAqB,yBAAC,aAAK,GAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,yCAAe,CAAC,aAAK,EAAE,YAAY,SAAS;AACpD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,IAAI;AAC1B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC3C,uBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,sGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,sGAAgB,GAAI,MAAM,GAAI,sGAAgB,GAAG,6DAA8B,CAAC,uFAAyB,EAAE,wGAAkB;;AAEhI,0BAAe,GAAG,MAAM;IAC1B;;wGAzCwB,UAA2B,EAAE,WAAe;IAJhE,gBAAO;IACP,eAAO;IACK,aAAK;AAEmD,mHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;MAJ+B,sGAAgB;;;;;;MA6CE,0FAA4B;YAAG,gBAAM,8CAAgB,CAAC,YAAY,0JAAmC;;;;;AAEtJ,YAAO,2FAA4B;IACrC;;;MAEoB,2FAA6B;YAAG;;;;;;;AAQhD,0BAAW,OAAG,yFAAuB,CAAC,MAAM;AAC5C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,qCAAuB,OAAG,yEAA0B,CAAC,WAAM;AAC3D,0BAAW,OAAO,CAAC,+BAAuB,EAAE,mBAAc;AAC1D,gBAAK,CAAC,WAAM;AACZ,iBAAO,0CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,+BAAuB;IAC9D;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,uCAAuB,SAAS;;AAElC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;6GAvB6B,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,+BAAuB;AAC2B,wHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;+GA0BjG,UAA2B,EAAE,WAAe;AAClH,eAAO,8FAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEI,sEAAQ;YAAG;;;;;AAEb,kBAAI,sEAAQ,GAAE;AACZ;;AAEF,6EAAW;AAEX,IAAO,oCAAiB,CAAC,oFAAkB,EAAE,yFAA2B;AACxE,IAAM,gCAAa;EACrB;;MCxHoB,2EAAM;YAAG,EAAC;;;;MC8BV,iGAA8B;YAAG,EAAS,2EAAM;;;;;;;;;;;;;AAiBhE,YAAQ,WAAQ,qCAAS,IAAG,4EAA4E;IAC1G;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,mBAAK,GAAG,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC3C,MAAS,sCAAY,CAAC,aAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,aAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,gJAAoC;AACzF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,gJAAoC;AACzF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,gJAAoC;AACzF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,uBAAS,KAAK,GAAG,IAAI,SAAS,uBAAuB;AACrD,uBAAS,KAAK,GAAG,IAAI,WAAW;AAChC,uBAAS,KAAK,GAAG,IAAI,aAAa;AAClC,sBAAQ,2BAA2B;AACnC,sBAAQ,2BAA2B;AACnC,sBAAQ,2BAA2B;AACnC,UAAM,YAAa,AAAsB,qCAAE,IAAI,SAAS,MAAM;AAC9D,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC5C,wBAAO,GAAG,SAAS;;IAEvB;;AAIE,sBAAQ,mBAAmB;AAC3B,sBAAQ,mBAAmB;AAC3B,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,gHAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,gHAAgB,GAAI,MAAM,GAAI,gHAAgB,GAAG,6DAA8B,CAAC,iGAA8B,EAAE,kHAAkB;;AAErI,0BAAe,GAAG,MAAM;IAC1B;;kHAhE6B,UAA2B,EAAE,WAAe;IAT3D,gBAAQ;IACjB,iBAAS;IACA,gBAAQ;IACjB,iBAAS;IACA,gBAAQ;IACjB,iBAAS;IACV,gBAAO;IACK,aAAK;AAEwD,6HAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;;;;;MAJ+B,gHAAgB;;;;;;MAoEO,oGAAiC;YAAG,gBAAM,iDAAgB,CAAC,mBAAmB,uKAAwC;;;;;AAE5K,YAAO,qGAAiC;IAC1C;;;;;;;AAYI,0BAAW,OAAG,yFAAgC,CAAC,MAAM;AACrD,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,qCAAuB,OAAG,yEAA2B,CAAC,KAAK;AAC3D,0BAAW,QAAQ,CAAC,+BAAuB;AAC3C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,SAAS,OAAO,eAAe;AACrD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,uCAAuB,IAAI,GAAG,SAAS;AACvC,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAc,6BAAE,IAAI,SAAS,MAAM;AACtD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAuB,IAAI,GAAG,SAAS;AACvC,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,uCAAuB,SAAS;;AAElC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;mHApC8B,UAA2B,EAAE,WAAe;IAJzC,oBAAW;IAChB,+BAAuB;IAC5C,gBAAO;IACP,eAAO;AACgE,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;;;qHAqCiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,MAAM;AACzE,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;IAC/E;;mHA1B8B,UAA2B,EAAE,WAAe;IAF/C,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACc,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;qHA2BiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,YAAY;AAC/E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,cAAc;IAC1E;;mHAzB8B,UAA2B,EAAE,WAAe;IAF/C,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACc,8HAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;qHA0BiD,UAA2B,EAAE,WAAe;AAC7F,eAAO,oGAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEoB,qGAAkC;YAAG;;;;;;AAQrD,0BAAW,OAAG,mGAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,wCAA4B,GAAI,UAAQ,qCAAS,IAC3C,AAAS,iCAAiB,kFAAS,8FAAuB,EAAE,kBACnD,mFAA+B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,6CAEjG,mFAA+B,qCAAC,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC9F,0BAAW,OAAO,CAAC,kCAA4B,EAAE,mBAAc;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;uHAvBkC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,kCAA4B;AACsB,kIAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;yHA0B5F,UAA2B,EAAE,WAAe;AAC5H,eAAO,wGAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEI,2EAAQ;YAAG;;;;;AAEb,kBAAI,2EAAQ,GAAE;AACZ;;AAEF,kFAAW;AAEX,IAAO,oCAAiB,CAAC,8FAAuB,EAAE,mGAAgC;AAClF,IAAM,gCAAa;AACnB,IAAM,2EAAa;EACrB;;MCtRoB,0DAAM;YAAG,EAAC;;;;MCAV,+DAAM;YAAG,EAAC;;;;ICWb;;;;;;IAGN;;;;;;IAGU;;;;;;;;IANJ,WAAK;IAGX,kBAAY;IAGF,qBAAe;EACpC;;;;;;;;;;;;MClBoB,2DAAM;YAAG,EAAC;;;;MC4BV,+EAA4B;YAAG,EAAS,2DAAM;;;;;;;;;AAa9D,YAAQ,WAAS,qCAAS,IAAG,6DAA6D;IAC5F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,8HAAkC;AACvF,uBAAU,OAAG,yCAAa,CAAC,gBAAQ,EAAE,gBAAgB;AACrD,yBAAY,OAAG,0CAAgB;AAC/B,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,yBAAU,QAAQ,GAAG,SAAS;AAC9B,wBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,yBAAU,UAAU;;AAEtB,sBAAQ,2BAA2B;IACrC;;AAIE,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,8FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,8FAAgB,GAAI,MAAM,GAAI,8FAAgB,GAAG,6DAA8B,CAAC,+EAA4B,EAAE,gGAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;gGA9C2B,UAA2B,EAAE,WAAe;IALzD,gBAAQ;IACR,iBAAU;IACpB,gBAAO;IACM,mBAAY;AAE8C,2GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;;;MAJ+B,8FAAgB;;;;;;MAkDK,kFAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,mJAAsC;;;;;AAEpK,YAAO,mFAA+B;IACxC;;;;;;;;;;AAcI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,mBAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,mCAAiB;AAC/D,2BAAc,GAAG,AAAS,gCAAU,qDAAC,AAAS,sCAAU,gFAA6B,eAAU,gBAAc;AAC7G,2BAAc,GAAG,AAAS,gCAAU,qDAAC,AAAS,sCAAU,gFAA6B,eAAU,gBAAc;AAC7G,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,aAAa,AAAS,sCAAU,iBAAW,WAAM,QAAC;AACxD,UAAM,wBAAa,UAAU,EAAI,IAAI,aAAa;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,YAAY,SAAS;AACxD,wBAAO,GAAG,SAAS;;AAErB,4BAAc,WAAW,qBAAC,AAAS,sCAAY,CAAC,qBAAc,CAAC,UAAU,EAAE;AAC3E,4BAAc,WAAW,qBAAC,AAAS,sCAAY,CAAC,qBAAc,CAAC,UAAU,EAAE;IAC7E;yBAEuB,MAAM;AAC3B,UAAM,aAAa,AAAS,sCAAU,iBAAW,WAAM,QAAC;AACxD,UAAM,OAAO,QAAG;AAChB,UAAI,gBAAgB,CAAC,UAAU;IACjC;;iGAxC4B,UAA2B,EAAE,WAAe;IAN7C,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;IAC3D,gBAAO;IACqB,qBAAc;IACd,qBAAc;IAC5B,aAAK;AACoD,4GAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;;;;mGAyC+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,kFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;MAEoB,mFAAgC;YAAG;;;;;;;AAQnD,0BAAW,OAAG,iFAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,sCAA0B,OAAG,iEAA6B;AAC1D,0BAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;qGAnBgC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,gCAA0B;AACwB,gHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;uGAsB9F,UAA2B,EAAE,WAAe;AACxH,eAAO,sFAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,2DAAQ;YAAG;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAO,oCAAiB,CAAC,4EAAqB,EAAE,iFAA8B;AAC9E,IAAM,gCAAa;EACrB;;MCxLoB,4DAAM;YAAG,EAAC;;;;;;;;ICYnB;;;;;;IAGS;;;;;;;AAMhB,uBAAY,mBAAiB,CAAC,QAAQ,yBAAO;AAC7C,uBAAY,mBAAiB,CAAC,SAAS,0BAAQ;IACjD;;YAGsB,uBAAe;IAAE;eAE1B,CAAY;AACvB,uBAAY,UAAQ,IAAI,CAAC;AACzB,4BAAe;IACjB;gBAEc,CAAY;AACxB,oBAAI,mCAA4B,GAAE;AAChC,8BAAe;AACf;;AAIF,yCAA4B,GAAG;IACjC;;AAGE,uBAAY,sBAAoB,CAAC,QAAQ,yBAAO;AAChD,uBAAY,sBAAoB,CAAC,SAAS,0BAAQ;IACpD;;;IAlCS,eAAQ;IAGC,oBAAY;IAEzB,mCAA4B,GAAG;EA8BtC;;;;;;;;;;;;;;;;;;;;MC/CoB,8FAAM;YAAG,EAAC;;;;MCoBV,4HAAsC;YAAG,EAAS,8FAAM;;;;;;;AAWxE,YAAQ,WAAQ,qCAAS,IAAG,+FAA+F;IAC7H;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAChD,MAAQ,sCAAY,CAAC,KAAK,EAAE,OAAO;AACnC,mBAAQ,CAAC,KAAK;AACd,mBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC1C,2BAAqB,yBAAC,aAAK,GAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,UAAI,aAAa,4BAAG,aAAK;AACzB,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS,OAAO,aAAa;AACnD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,aAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACvF,wBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,2IAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,2IAAgB,GAAI,MAAM,GAAI,2IAAgB,GAAG,6DAA8B,CAAC,4HAAsC,EAAE,6IAAkB;;AAE7I,0BAAe,GAAG,MAAM;IAC1B;;6IA/CqC,UAA2B,EAAE,WAAe;IAH7E,gBAAO;IACK,aAAK;AAEgE,wJAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACjL,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,2IAAgB;;;;;;MAmDe,+HAAyC;YAAG,gBAAM,yDAAgB,CAAC,4BAA4B,0MAAgD;;;;;AAE7M,YAAO,gIAAyC;IAClD;;;MAEoB,gIAA0C;YAAG;;;;;;;AAQ7D,0BAAW,OAAG,8HAAoC,CAAC,MAAM;AACzD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,gDAAoC,OAAG,8GAAuC;AAC9E,0BAAW,OAAO,CAAC,0CAAoC,EAAE,mBAAc;AACvE,gBAAK,CAAC,WAAM;AACZ,iBAAO,qDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,0CAAoC;IAC3E;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,kDAAoC,SAAS;;AAE/C,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;AAChC,gDAAoC,YAAY;IAClD;;kJAxB0C,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,0CAAoC;AACc,6JAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;oJA2BpF,UAA2B,EAAE,WAAe;AAC5I,eAAO,mIAAyC,CAAC,UAAU,EAAE,WAAW;EAC1E;;MAEI,8FAAQ;YAAG;;;;;AAEb,kBAAI,8FAAQ,GAAE;AACZ;;AAEF,qGAAW;AAEX,IAAO,oCAAiB,CAAC,yHAA+B,EAAE,8HAAwC;AAClG,IAAM,gCAAa;EACrB;;MC9HoB,qEAAM;YAAG,EAAC;;;;;;;;ICYnB;;;;;;IAGS;;;;;;;AAMhB,uBAAY,mBAAiB,CAAC,QAAQ,0BAAO;AAC7C,uBAAY,mBAAiB,CAAC,SAAS,2BAAQ;IACjD;;YAGsB,wBAAe;IAAE;gBAE1B,CAAY;AACvB,uBAAY,UAAQ,IAAI,CAAC;AACzB,6BAAe;IACjB;iBAEc,CAAY;AACxB,oBAAI,oCAA4B,GAAE;AAChC,+BAAe;AACf;;AAIF,0CAA4B,GAAG;IACjC;;AAGE,uBAAY,sBAAoB,CAAC,QAAQ,0BAAO;AAChD,uBAAY,sBAAoB,CAAC,SAAS,2BAAQ;IACpD;;;IAlCS,eAAQ;IAGC,oBAAY;IAEzB,oCAA4B,GAAG;EA8BtC;;;;;;;;;;;;;;;;;;;;MC/CoB,8FAAM;YAAG,EAAC;;;;MCoBV,4HAAsC;YAAG,EAAS,8FAAM;;;;;;;AAWxE,YAAQ,WAAQ,qCAAS,IAAG,+FAA+F;IAC7H;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAChD,MAAQ,sCAAY,CAAC,KAAK,EAAE,OAAO;AACnC,mBAAQ,CAAC,KAAK;AACd,mBAAK,GAAG,AAAQ,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AAC1C,2BAAqB,yBAAC,aAAK,GAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,UAAI,aAAa,4BAAG,aAAK;AACzB,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS,OAAO,aAAa;AACnD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAQ,qCAAW,CAAC,aAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACvF,wBAAO,GAAG,SAAS;;IAEvB;;AAIE,UAAI,SAAS,2IAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,2IAAgB,GAAI,MAAM,GAAI,2IAAgB,GAAG,6DAA8B,CAAC,4HAAsC,EAAE,6IAAkB;;AAE7I,0BAAe,GAAG,MAAM;IAC1B;;6IA/CqC,UAA2B,EAAE,WAAe;IAH7E,gBAAO;IACK,aAAK;AAEgE,wJAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACjL,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,2IAAgB;;;;;;MAmDe,+HAAyC;YAAG,gBAAM,yDAAgB,CAAC,4BAA4B,0MAAgD;;;;;AAE7M,YAAO,gIAAyC;IAClD;;;MAEoB,gIAA0C;YAAG;;;;;;;AAQ7D,0BAAW,OAAG,8HAAoC,CAAC,MAAM;AACzD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,gDAAoC,OAAG,8GAAuC;AAC9E,0BAAW,OAAO,CAAC,0CAAoC,EAAE,mBAAc;AACvE,gBAAK,CAAC,WAAM;AACZ,iBAAO,qDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,0CAAoC;IAC3E;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,kDAAoC,SAAS;;AAE/C,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;AAChC,gDAAoC,YAAY;IAClD;;kJAxB0C,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,0CAAoC;AACc,6JAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;oJA2BpF,UAA2B,EAAE,WAAe;AAC5I,eAAO,mIAAyC,CAAC,UAAU,EAAE,WAAW;EAC1E;;MAEI,8FAAQ;YAAG;;;;;AAEb,kBAAI,8FAAQ,GAAE;AACZ;;AAEF,qGAAW;AAEX,IAAO,oCAAiB,CAAC,yHAA+B,EAAE,8HAAwC;AAClG,IAAM,gCAAa;EACrB;;MC9HoB,qEAAM;YAAG,EAAC;;;;;;;;;;;IC8Bb;;;;;;IAEN;;;;;;IAEJ;;;;;;;AAMH,MAAK,WAAM,WAAS,CAAC,GAAG;IAC1B;eAGgB,QAAoB,EAAE,OAAmB;AACvD,iBAAK,CAAC,AAAY,yCAAE,QAAQ;AAC5B,6BAAiB,GAAG,QAAQ,IAAI;AAEhC,oCAAwB,CACtB,OAAO,WAAW,QAAC;IAEvB;;cAGsB,kCAA4B;;IAAU;+BAE9B,UAAiB;AAC7C,mBAAQ,GAAG,6DAAoB,CAAC,cAAM,MAAM,EAAE,UAAU;AAExD,UAAI,aAAQ,IAAI,MAAM;AACpB,qCAAuB;aAClB;AACL,sBAAM,SAAS,KAAC,gEAAqB;AACrC,kCAAoB,CAAC,UAAU;;IAEnC;2BAS0B,UAAiB;AACzC,UAAM,QAAQ,cAAM,MAAM,cAAc;AACxC,UAAM,YAAY,KAAK,eAAe,KAAI,yCAAa,QAAQ;AAE/D,WAAK,SAAS,EAAE;AACd;;AAGF,wCAA4B,GAAG,cAAM,SAAS,OAAO,CAAC,QAAC,KAAK;;AAC1D,cAAM,QAAQ,cAAM,MAAM,cAAc;AACxC,cAAM,qBACF,KAAK,eAAe,KAAI,yCAAa,QAAQ;AAEjD,cAAI,kBAAkB,EAAE;AACtB,0CAAwB,CAAC,UAAU;AACnC,8CAA4B,OAAO;AACnC,8CAA4B,GAAG;AAE/B,yCAAuB;;;;IAG7B;;YAGI,gBAAK,CAAC,cAAQ,KAAK,EAAE,cAAM,mBAAc,GAAG;IAAK;;AAGnD,oBAAI,uBAAiB,GAAE;AACrB,QAAK,WAAM,QAAQ,KAAK;AACxB;;AAGF,mBAAO,cAAc,CACnB,sBAAU,SAAS,MAAM,cAChB;IAEb;;4GAnFoD,QAAa;IAKxD,gBAAQ;IACZ,uBAAiB,GAAG;IACpB,oBAAc,GAAG;IACO,kCAA4B;IAR3B,cAAM;IAAO,aAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;MCahD,4FAA+B;YAAG,EAAS,qEAAM;;;;;;;AAWjE,YAAQ,WAAQ,qCAAS,IAAG,uEAAuE;IACrG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,2IAAqC;AAC1F,qBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,qBAAS,KAAK,GAAI,IAAI,SAAS,IAAI;AACnC,sBAAQ,2BAA2B;IACrC;;AAIE,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,2GAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,2GAAgB,GAAI,MAAM,GAAI,2GAAgB,GAAG,6DAA8B,CAAC,4FAA+B,EAAE,6GAAkB;;AAEtI,0BAAe,GAAG,MAAM;IAC1B;;6GAtC8B,UAA2B,EAAE,WAAe;IAH5D,gBAAQ;IACjB,eAAS;AAEgE,wHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,2GAAgB;;;;;;MA0CQ,+FAAkC;YAAG,gBAAM,kDAAgB,CAAC,oBAAoB,mKAAyC;;;;;AAEhL,YAAO,gGAAkC;IAC3C;;;;;;;;;;;;;;;;;;;AAuBI,UAAM,OAAO,QAAG;AAChB,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,yBAAW,OAAG,8HAA6C,CAAC,MAAM;AAClE,UAAM,QAAQ,mBAAW,OAAO;AAChC,mBAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,gDAAoC,OAAG,8GAAwC;AAC/E,yBAAW,QAAQ,CAAC,0CAAoC;AACxD,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,aAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,uBAAW,OAAG,mGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,iBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,wCAA4B,GAAI,UAAQ,qCAAS,IAC3C,AAAS,iCAAiB,kFAAU,8FAAuB,EAAE,kBACpD,mFAAgC,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,6CAExG,mFAAgC,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AACrG,uBAAW,QAAQ,CAAC,kCAA4B;AAChD,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,oBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,2IAAqC;AAC1F,sBAAS,OAAG,uCAAI,CAAC,eAAQ,EAAE,gBAAgB;AAC3C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,sBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,gBAAS,EAAE,2IAAqC;AAC5F,uBAAU,OAAG,uCAAI,CAAC,gBAAS,EAAE,iBAAiB;AAC9C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,2IAAqC;AAC5F,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,kDAAoC,SAAS,GAAG,SAAS;AACzD,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,kDAAoC,SAAS;;AAE/C,UAAI,UAAU,EAAE;AACd,0CAA4B,WAAW,GAAG;AAC1C,0CAA4B,YAAY,GAAG;;AAE7C,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,SAAS,GAAG,SAAS;AACjD,uBAAO,GAAG,SAAS;;AAErB,sBAAS,KAAK,GAAI,IAAI,SAAS,UAAU,IAAI;AAC7C,uBAAU,KAAK,GAAG,IAAI,SAAS,WAAW;AAC1C,sBAAU,KAAK,GAAG,IAAI,SAAS,cAAc,WAAW;AACxD,qBAAQ,2BAA2B;AACnC,sBAAS,2BAA2B;AACpC,qBAAS,2BAA2B;AACpC,UAAM,YAAY,IAAI,eAAe;AACrC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,wBAAO,GAAG,SAAS;;AAErB,0BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,MAAM;AACzE,yBAAW,cAAc;AACzB,uBAAW,cAAc;IAC3B;;AAIE,qBAAQ,mBAAmB;AAC3B,sBAAS,mBAAmB;AAC5B,qBAAS,mBAAmB;AAC5B,yBAAW,qBAAqB;AAChC,uBAAW,qBAAqB;AAChC,gDAAoC,YAAY;IAClD;;8GAxG+B,UAA2B,EAAE,WAAe;IAfhD,oBAAc,OAAG,0CAAoB;IAClB,mBAAW;IAChB,0CAAoC;IACvC,iBAAW;IAChB,kCAA4B;IAC/C,eAAQ;IACjB,gBAAS;IACA,gBAAS;IAClB,iBAAU;IACD,eAAS;IAClB,gBAAU;IACV,gBAAO;IACR,eAAO;IACP,eAAO;IACQ,aAAK;AACuD,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;;;;;;;;;;;;;gHAyGkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;AAC7E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;IAC/E;;8GAtB+B,UAA2B,EAAE,WAAe;IAFhD,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACe,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;gHAuBkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;AASI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,QAAQ;IAC7E;;8GAvB+B,UAA2B,EAAE,WAAe;IADhD,sBAAc,OAAG,0CAAoB;AACe,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;gHAwBkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,2IAAqC;AAC1F,sBAAU,OAAG,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AACtD,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS,cAAc,KAAK;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,wBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,QAAQ;IAC7E;;AAIE,oBAAQ,mBAAmB;IAC7B;;8GA3C+B,UAA2B,EAAE,WAAe;IAJhD,sBAAc,OAAG,0CAAoB;IAClD,cAAQ;IACP,gBAAU;IACrB,gBAAO;AACoE,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;;gHA4CkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,aAAK;AACd,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,qBAAqB,AAAQ,sCAAU,6CAAgC,WAAM,QAAC;AACpF,UAAM,YAAY,kBAAkB,SAAS;AAC7C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACxF,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAgC,+CAAE,IAAI,SAAS,MAAM;AACxE,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC5C,uBAAO,GAAG,SAAS;;IAEvB;;8GAzB+B,UAA2B,EAAE,WAAe;IAHvE,gBAAO;IACP,eAAO;IACK,aAAK;AAC0D,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;gHA0BkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;MAEoB,gGAAmC;YAAG;;;;;;;AAQtD,0BAAW,OAAG,8FAA6B,CAAC,MAAM;AAClD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,yCAA6B,GAAI,UAAQ,qCAAS,IAC5C,AAAS,iCAAiB,6EAAS,yFAAwB,EAAE,kBACpD,8EAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,8CAEnN,8EAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAChN,0BAAW,OAAO,CAAC,mCAA6B,EAAE,mBAAc;AAChE,gBAAK,CAAC,WAAM;AACZ,iBAAO,8CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IACpE;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,2CAA6B,SAAS;;AAExC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;AAChC,yCAA6B,YAAY;IAC3C;;kHA5BmC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,mCAA6B;AACqB,6HAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;oHA+B3F,UAA2B,EAAE,WAAe;AAC9H,eAAO,mGAAkC,CAAC,UAAU,EAAE,WAAW;EACnE;;MAEI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAO,oCAAiB,CAAC,yFAAwB,EAAE,8FAAiC;AACpF,IAAM,mGAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,oCAAa;EACrB;;;;;;;;;IC/YiB;;;;;;IAEN;;;;;;IAEJ;;;;;;;AAMH,MAAK,WAAM,WAAS,CAAC,GAAG;IAC1B;eAGgB,QAAoB,EAAE,OAAmB;AACvD,iBAAK,CAAC,AAAY,yCAAE,QAAQ;AAC5B,8BAAiB,GAAG,QAAQ,IAAI;AAEhC,oCAAwB,CACtB,OAAO,WAAW,QAAC;IAEvB;;cAGsB,kCAA4B;;IAAU;+BAE9B,UAAiB;AAC7C,mBAAQ,GAAG,6DAAoB,CAAC,cAAM,MAAM,EAAE,UAAU;AAExD,UAAI,aAAQ,IAAI,MAAM;AACpB,sCAAuB;aAClB;AACL,sBAAM,SAAS,KAAC,gEAAqB;AACrC,mCAAoB,CAAC,UAAU;;IAEnC;4BAS0B,UAAiB;AACzC,UAAM,QAAQ,cAAM,MAAM,cAAc;AACxC,UAAM,YAAY,KAAK,eAAe,KAAI,yCAAa,QAAQ;AAE/D,WAAK,SAAS,EAAE;AACd;;AAGF,wCAA4B,GAAG,cAAM,SAAS,OAAO,CAAC,QAAC,KAAK;;AAC1D,cAAM,QAAQ,cAAM,MAAM,cAAc;AACxC,cAAM,qBACF,KAAK,eAAe,KAAI,yCAAa,QAAQ;AAEjD,cAAI,kBAAkB,EAAE;AACtB,0CAAwB,CAAC,UAAU;AACnC,8CAA4B,OAAO;AACnC,8CAA4B,GAAG;AAE/B,0CAAuB;;;;IAG7B;;YAGI,gBAAK,CAAC,cAAQ,KAAK,EAAE,cAAM,mBAAc,GAAG;IAAK;;AAGnD,oBAAI,wBAAiB,GAAE;AACrB,QAAK,WAAM,QAAQ,KAAK;AACxB;;AAGF,oBAAO,cAAc,CACnB,sBAAU,SAAS,MAAM,cAChB;IAEb;;4GAnFoD,QAAa;IAKxD,gBAAQ;IACZ,wBAAiB,GAAG;IACpB,qBAAc,GAAG;IACO,kCAA4B;IAR3B,cAAM;IAAO,cAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;MCchD,4FAA+B;YAAG,EAAS,qEAAM;;;;;;;AAWjE,YAAQ,WAAQ,qCAAS,IAAG,uEAAuE;IACrG;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,2IAAqC;AAC1F,sBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,sBAAS,KAAK,GAAI,IAAI,SAAS,IAAI;AACnC,sBAAQ,2BAA2B;IACrC;;AAIE,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,2GAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,2GAAgB,GAAI,MAAM,GAAI,2GAAgB,GAAG,6DAA8B,CAAC,4FAA+B,EAAE,6GAAkB;;AAEtI,0BAAe,GAAG,MAAM;IAC1B;;6GAtC8B,UAA2B,EAAE,WAAe;IAH5D,gBAAQ;IACjB,gBAAS;AAEgE,wHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,2GAAgB;;;;;;MA0CQ,+FAAkC;YAAG,gBAAM,kDAAgB,CAAC,oBAAoB,mKAAyC;;;;;AAEhL,YAAO,gGAAkC;IAC3C;;;;;;;;;;;;;;;;;;;AAuBI,UAAM,OAAO,QAAG;AAChB,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,yBAAW,OAAG,8HAA6C,CAAC,MAAM;AAClE,UAAM,QAAQ,mBAAW,OAAO;AAChC,mBAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,gDAAoC,OAAG,8GAAwC;AAC/E,yBAAW,QAAQ,CAAC,0CAAoC;AACxD,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,aAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,wBAAW,OAAG,mGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,kBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,wCAA4B,GAAI,UAAQ,qCAAS,IAC3C,AAAS,iCAAiB,kFAAU,8FAAuB,EAAE,kBACpD,mFAAgC,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,6CAExG,mFAAgC,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AACrG,wBAAW,QAAQ,CAAC,kCAA4B;AAChD,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,2IAAqC;AAC1F,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,uBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,iBAAS,EAAE,2IAAqC;AAC5F,wBAAU,OAAG,uCAAI,CAAC,iBAAS,EAAE,iBAAiB;AAC9C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,sBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,gBAAS,EAAE,2IAAqC;AAC5F,uBAAU,OAAG,uCAAI,CAAC,gBAAS,EAAE,iBAAiB;AAC9C,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,kDAAoC,SAAS,GAAG,SAAS;AACzD,uBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,kDAAoC,SAAS;;AAE/C,UAAI,UAAU,EAAE;AACd,0CAA4B,WAAW,GAAG;AAC1C,0CAA4B,YAAY,GAAG;;AAE7C,UAAM,YAAY,IAAI,SAAS;AAC/B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,SAAS,GAAG,SAAS;AACjD,uBAAO,GAAG,SAAS;;AAErB,uBAAS,KAAK,GAAI,IAAI,SAAS,UAAU,IAAI;AAC7C,wBAAU,KAAK,GAAG,IAAI,SAAS,WAAW;AAC1C,uBAAU,KAAK,GAAG,IAAI,SAAS,cAAc,WAAW;AACxD,sBAAQ,2BAA2B;AACnC,uBAAS,2BAA2B;AACpC,sBAAS,2BAA2B;AACpC,UAAM,YAAY,IAAI,eAAe;AACrC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,wBAAO,GAAG,SAAS;;AAErB,2BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,MAAM;AACzE,yBAAW,cAAc;AACzB,wBAAW,cAAc;IAC3B;;AAIE,sBAAQ,mBAAmB;AAC3B,uBAAS,mBAAmB;AAC5B,sBAAS,mBAAmB;AAC5B,yBAAW,qBAAqB;AAChC,wBAAW,qBAAqB;AAChC,gDAAoC,YAAY;IAClD;;8GAxG+B,UAA2B,EAAE,WAAe;IAfhD,qBAAc,OAAG,0CAAoB;IAClB,mBAAW;IAChB,0CAAoC;IACvC,kBAAW;IAChB,kCAA4B;IAC/C,gBAAQ;IACjB,iBAAS;IACA,iBAAS;IAClB,kBAAU;IACD,gBAAS;IAClB,iBAAU;IACV,gBAAO;IACR,eAAO;IACP,eAAO;IACQ,aAAK;AACuD,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;;;;;;;;;;;;;gHAyGkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;AAC7E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;IAC/E;;8GAtB+B,UAA2B,EAAE,WAAe;IAFhD,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACe,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;gHAuBkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;AASI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,QAAQ;IAC7E;;8GAvB+B,UAA2B,EAAE,WAAe;IADhD,sBAAc,OAAG,0CAAoB;AACe,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;gHAwBkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,2IAAqC;AAC1F,uBAAU,OAAG,yCAAc,CAAC,eAAQ,EAAE,gBAAgB;AACtD,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,SAAS,cAAc,KAAK;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,yBAAU,QAAQ,GAAG,SAAS;AAC9B,wBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,yBAAU,UAAU;;AAEtB,qBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,QAAQ;IAC7E;;AAIE,qBAAQ,mBAAmB;IAC7B;;8GA3C+B,UAA2B,EAAE,WAAe;IAJhD,sBAAc,OAAG,0CAAoB;IAClD,eAAQ;IACP,iBAAU;IACrB,gBAAO;AACoE,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;;gHA4CkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,aAAK;AACd,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,qBAAqB,AAAQ,sCAAU,6CAAgC,WAAM,QAAC;AACpF,UAAM,YAAY,kBAAkB,SAAS;AAC7C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACxF,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAgC,+CAAE,IAAI,SAAS,MAAM;AACxE,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC5C,uBAAO,GAAG,SAAS;;IAEvB;;8GAzB+B,UAA2B,EAAE,WAAe;IAHvE,gBAAO;IACP,eAAO;IACK,aAAK;AAC0D,yHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC1K,4BAAmB;EACrB;;;;;;;;;;;;gHA0BkD,UAA2B,EAAE,WAAe;AAC9F,eAAO,+FAA8B,CAAC,UAAU,EAAE,WAAW;EAC/D;;MAEoB,gGAAmC;YAAG;;;;;;;AAQtD,0BAAW,OAAG,8FAA6B,CAAC,MAAM;AAClD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,yCAA6B,GAAI,UAAQ,qCAAS,IAC5C,AAAS,iCAAiB,6EAAS,yFAAwB,EAAE,kBACpD,8EAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,8CAEnN,8EAAgC,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAChN,0BAAW,OAAO,CAAC,mCAA6B,EAAE,mBAAc;AAChE,gBAAK,CAAC,WAAM;AACZ,iBAAO,8CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,mCAA6B;IACpE;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,2CAA6B,SAAS;;AAExC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;AAChC,yCAA6B,YAAY;IAC3C;;kHA5BmC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,mCAA6B;AACqB,6HAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;oHA+B3F,UAA2B,EAAE,WAAe;AAC9H,eAAO,mGAAkC,CAAC,UAAU,EAAE,WAAW;EACnE;;MAEI,qEAAQ;YAAG;;;;;AAEb,kBAAI,qEAAQ,GAAE;AACZ;;AAEF,4EAAW;AAEX,IAAO,oCAAiB,CAAC,yFAAwB,EAAE,8FAAiC;AACpF,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,oCAAa;AACnB,IAAM,mGAAa;EACrB;;;;IC9YiB;;;;;;IAGT;;;;;;;YAGF,iEAAsB,UAAU,CAAC,cAAM;IAAC;;YAElB,iBAAW,IAAI,OACnC,cAAS,MAAM,GACf,sDAAqB,CAAC,cAAS,MAAM,EAAE,gBAAW;IAAC;oBAEpC,IAAS;AAC5B,6DAA0B;AAE1B,UAAM,QAAQ,uDAAoB,CAAC,cAAM,MAAM,EAAE,IAAI;AACrD,UAAM,MAAM,sBAAU,YAAY,MAAM,cAAa,yCACnD,WAAW,KAAK,GAAG,EACnB,UAAU,IAAI,GAAG;AAGnB,qBAAO,SAAS,CAAC,GAAG;IACtB;eAGgB,QAAoB,EAAE,CAAC;AACrC,gEAA6B,CAAC,QAAQ,EAAE,sBAAU,YAAY;AAC9D,oBAAM,SAAS,KAAC,8DAA2B;IAC7C;;iGA/BkD,QAAa;IAMzD,iBAAW;IANW,cAAM;IAAO,eAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;MCkB9C,iFAA6B;YAAG,EAAS,4DAAM;;;;;;;;;;;;;;;;;;;;;;;AAyB/D,YAAQ,WAAS,qCAAS,IAAG,8DAA8D;IAC7F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,yBAAW,OAAG,sGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,KAAK;AAC1C,yCAA6B,GAAI,UAAS,qCAAS,IAC7C,AAAS,iCAAiB,qFAAS,iGAAwB,EAAE,kBACpD,sFAAgC,0BAAC,eAAU,YAAY,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,gBAAQ,4CAEhH,sFAAgC,0BAAC,eAAU,YAAY,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,gBAAQ;AAC7G,yBAAW,QAAQ,CAAC,mCAA6B;AACjD,uBAAW,OAAG,iFAAkC,CAAC,MAAM;AACvD,UAAM,QAAQ,iBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,sCAA0B,OAAG,iEAA6B;AAC1D,uBAAW,QAAQ,CAAC,gCAA0B;AAC9C,uBAAW,OAAG,0FAAiC,CAAC,MAAM;AACtD,UAAM,QAAQ,iBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,qCAAyB,GAAI,UAAS,qCAAS,IACzC,AAAS,iCAAiB,yEAAU,qFAAoB,EAAE,kBACjD,0EAA6B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAErG,0EAA6B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAClG,UAAM,YAAY,AAAS,sCAAY;AACvC,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,gIAAmC;AACxF,sBAAU,OAAG,yCAAc,CAAC,cAAQ,EAAE,gBAAgB;AACtD,uBAAW,OAAO,CAAC,+BAAyB,EAAE,sBAC5C,6BAAC,cAAQ;AAEX,UAAM,iBAAiB,+BAAyB,oBAAoB,OAAO,CAAC,kBAAa,6BAAC,gDAA+B;AACzH,eAAI,CAAC,yDAAU,wCAAC,cAAc;IAChC;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,UAAU,MAAM,KAAK;AAC3C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAA0B,MAAM,GAAG,SAAS;AAC5C,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,aAAa;AAC7C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,wCAA0B,aAAa,GAAG,SAAS;AACnD,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,kBAAkB;AAClD,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,wCAA0B,gBAAgB,GAAG,SAAS;AACtD,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,MAAM,QAAQ;AACpC,oBAAI,AAAS,8CAAY,CAAC,cAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,aAAa,GAAG,SAAS;AAClD,sBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,OAAO;AACvC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,OAAO,GAAG,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,MAAM,KAAK;AACjC,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,sBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;AAC7E,yBAAW,cAAc;AACzB,uBAAW,cAAc;AACzB,uBAAW,cAAc;IAC3B;;AAIE,sBAAQ,mBAAmB;AAC3B,oBAAQ,mBAAmB;AAC3B,yBAAW,qBAAqB;AAChC,uBAAW,qBAAqB;AAChC,uBAAW,qBAAqB;AAChC,qCAAyB,YAAY;IACvC;sCAEqC,MAAM;AACzC,UAAM,OAAO,QAAG;AAChB,qBAAI,UAAU;IAChB;;AAIE,UAAI,SAAS,gGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,gGAAgB,GAAI,MAAM,GAAI,gGAAgB,GAAG,6DAA+B,CAAC,iFAA6B,EAAE,kGAAkB;;AAErI,0BAAe,GAAG,MAAM;IAC1B;;kGA7H4B,UAA2B,EAAE,WAAe;IAjB9C,sBAAc,OAAG,0CAAmB;IACxB,mBAAW;IACnC,gBAAQ;IACW,mCAA6B;IAC3B,iBAAW;IAChB,gCAA0B;IACtB,iBAAW;IACf,+BAAyB;IACzC,cAAQ;IACP,gBAAU;IACrB,gBAAO;IACP,eAAO;IACP,eAAO;IACN,cAAO;IACR,aAAO;IACP,aAAO;AAEiE,6GAAM,qCAAiB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,gGAAgB;;;;;;MAiIK,oFAAgC;YAAG,gBAAM,gDAAgB,CAAC,kBAAkB,sJAAuC;;;;;AAExK,YAAO,qFAAgC;IACzC;;;;;;;AAWI,0BAAW,OAAG,6FAAmC,CAAC,MAAM;AACxD,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,uCAA0B,GAAI,UAAS,qCAAS,IAC1C,AAAS,iCAAiB,4EAAU,wFAAqB,EAAE,kBAClD,6EAA8B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY,2CAE5H,6EAA8B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY;AACzH,0BAAW,QAAQ,CAAC,iCAA0B;AAC9C,WAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,oCAAiB;AAC/D,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,aAAa,AAAS,sCAAU,yBAAgB,WAAM,QAAC;AAC7D,UAAM,YAAY,UAAU;AAC5B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,yCAA0B,KAAK,GAAG,SAAS;AAC3C,wBAAO,GAAG,SAAS;;AAErB,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;0BAEuB,MAAM;AAC3B,UAAM,aAAa,AAAS,sCAAU,yBAAgB,WAAM,QAAC;AAC7D,UAAM,OAAO,QAAG;AAChB,UAAI,gBAAgB,CAAC,UAAU;IACjC;;mGAtC6B,UAA2B,EAAE,WAAe;IAHrC,oBAAW;IAChB,iCAA0B;IACrD,gBAAO;AACkE,8GAAM,qCAAiB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACzK,4BAAmB;EACrB;;;;;;;;;;;;;qGAuCgD,UAA2B,EAAE,WAAe;AAC5F,eAAO,oFAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEoB,qFAAiC;YAAG;;;;;;AAQpD,0BAAW,OAAG,mFAA2B,CAAC,MAAM;AAChD,iBAAM,GAAG,oBAAW,OAAO;AAC3B,uCAA2B,GAAI,UAAS,qCAAS,IAC3C,AAAS,iCAAiB,kEAAS,8EAAsB,EAAE,kBAClD,mEAA8B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,4CAEjN,mEAA8B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC9M,0BAAW,OAAO,CAAC,iCAA2B,EAAE,mBAAc;AAC9D,gBAAK,CAAC,WAAM;AACZ,iBAAO,4CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,iCAA2B;IAClE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;uGAvBiC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,iCAA2B;AACuB,kHAAM,qCAAiB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;yGA0B9F,UAA2B,EAAE,WAAe;AAC1H,eAAO,wFAAgC,CAAC,UAAU,EAAE,WAAW;EACjE;;MAEI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAO,oCAAiB,CAAC,8EAAsB,EAAE,mFAA+B;AAChF,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,4EAAa;AACnB,IAAM,kFAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,oCAAa;AACnB,IAAM,gEAAa;EACrB;;;;IClRiB;;;;;;;YAEa,cAAa,SAAS;;;YAG9C,gEAAqB,UAAU,CAAC,cAAM;IAAC;eAS3B,QAAoB,EAAE,OAAmB;AAGvD,gEAA6B,CAAC,QAAQ,EAAE,sBAAU,gBAAgB;IAKpE;wBAEyB,QAAiB;AACxC,6DAA0B;AAE1B,UAAM,MACF,sBAAU,gBAAgB,MAAM,cAAa,yCAAC,cAAc,QAAQ,GAAG;AAC3E,qBAAO,SAAS,CAAC,GAAG;IACtB;;8FAjCiD,QAAa;IAAnC,cAAM;IAAO,eAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;MCkB7C,8EAA4B;YAAG,EAAS,0DAAM;;;;;;;;;;;;;;;;AAkB9D,YAAQ,WAAS,qCAAS,IAAG,4DAA4D;IAC3F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,yBAAW,OAAG,0FAAiC,CAAC,MAAM;AACtD,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,qCAAyB,GAAI,UAAS,qCAAS,IACzC,AAAS,iCAAiB,yEAAS,qFAAoB,EAAE,kBAChD,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAEpG,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AACjG,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,oBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,cAAQ,EAAE,6HAAkC;AACvF,sBAAU,OAAG,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACrD,yBAAW,OAAO,CAAC,+BAAyB,EAAE,sBAC5C,uBAAC,KAAK;AAER,UAAM,iBAAiB,+BAAyB,oBAAoB,OAAO,CAAC,kBAAa,6BAAC,gDAA+B;AACzH,eAAI,CAAC,yDAAU,wCAAC,cAAc;IAChC;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,UAAU,SAAS,QAAQ;AACjD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,SAAS,mBAAmB;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,OAAO;AACvC,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,OAAO,GAAG,SAAS;AAC5C,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,SAAS,KAAK;AAC9C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,wBAAU,QAAQ,GAAG,SAAS;AAC9B,uBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,wBAAU,UAAU;;AAEtB,oBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,cAAc;AACxE,yBAAW,cAAc;IAC3B;;AAIE,oBAAQ,mBAAmB;AAC3B,yBAAW,qBAAqB;AAChC,qCAAyB,YAAY;IACvC;sCAEqC,MAAM;AACzC,UAAM,OAAO,QAAG;AAChB,qBAAI,UAAU;IAChB;;AAIE,UAAI,SAAS,6FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,6FAAgB,GAAI,MAAM,GAAI,6FAAgB,GAAG,6DAA8B,CAAC,8EAA4B,EAAE,+FAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;+FA/F2B,UAA2B,EAAE,WAAe;IAV7C,sBAAc,OAAG,0CAAmB;IAC5B,mBAAW;IAChB,+BAAyB;IACxC,cAAQ;IACR,gBAAU;IACnB,gBAAO;IACL,gBAAO;IACV,eAAO;IACP,eAAO;AAEgE,0GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;;MAJ+B,6FAAgB;;;;;;MAmGK,iFAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,kJAAsC;;;;;AAEpK,YAAO,kFAA+B;IACxC;;;;;;;AAWI,0BAAW,OAAG,mGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,yCAA4B,GAAI,UAAS,qCAAS,IAC5C,AAAS,iCAAiB,kFAAU,8FAAuB,EAAE,kBACpD,mFAAgC,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY,6CAE9H,mFAAgC,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY;AAC3H,0BAAW,QAAQ,CAAC,mCAA4B;AAChD,WAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,oCAAiB;AAC/D,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,iBAAiB,AAAS,sCAAU,iCAAoB,WAAM,QAAC;AACrE,UAAM,YAAY,cAAc;AAChC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,2CAA4B,SAAS,GAAG,SAAS;AACjD,wBAAO,GAAG,SAAS;;AAErB,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;0BAEuB,MAAM;AAC3B,UAAM,iBAAiB,AAAS,sCAAU,iCAAoB,WAAM,QAAC;AACrE,UAAM,OAAO,QAAG;AAChB,UAAI,oBAAoB,CAAC,cAAc;IACzC;;gGAtC4B,UAA2B,EAAE,WAAe;IAHlC,oBAAW;IAChB,mCAA4B;IACzD,gBAAO;AACiE,2GAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;kGAuC+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,iFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;MAEoB,kFAAgC;YAAG;;;;;;AAQnD,0BAAW,OAAG,gFAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,sCAA0B,GAAI,UAAS,qCAAS,IAC1C,AAAS,iCAAiB,+DAAS,2EAAqB,EAAE,kBACjD,gEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,2CAEhN,gEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC7M,0BAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;oGAvBgC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,gCAA0B;AACwB,+GAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;sGA0B9F,UAA2B,EAAE,WAAe;AACxH,eAAO,qFAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,oCAAiB,CAAC,2EAAqB,EAAE,gFAA8B;AAC9E,IAAM,qDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,oCAAa;EACrB;;;;ICrOiB;;;;;;;YAEa,cAAa,SAAS;;;YAG9C,gEAAqB,UAAU,CAAC,cAAM;IAAC;eAS3B,QAAoB,EAAE,OAAmB;AAGvD,gEAA6B,CAAC,QAAQ,EAAE,sBAAU,gBAAgB;IAKpE;wBAEyB,QAAiB;AACxC,6DAA0B;AAE1B,UAAM,MACF,sBAAU,gBAAgB,MAAM,cAAa,yCAAC,cAAc,QAAQ,GAAG;AAC3E,qBAAO,SAAS,CAAC,GAAG;IACtB;;8FAjCiD,QAAa;IAAnC,cAAM;IAAO,eAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;MCkB7C,8EAA4B;YAAG,EAAS,0DAAM;;;;;;;;;;;;;;;;AAkB9D,YAAQ,WAAS,qCAAS,IAAG,4DAA4D;IAC3F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,yBAAW,OAAG,0FAAiC,CAAC,MAAM;AACtD,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,sCAAyB,GAAI,UAAS,qCAAS,IACzC,AAAS,iCAAiB,yEAAS,qFAAoB,EAAE,kBAChD,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAEpG,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AACjG,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,6HAAkC;AACvF,uBAAU,OAAG,yCAAa,CAAC,eAAQ,EAAE,gBAAgB;AACrD,yBAAW,OAAO,CAAC,gCAAyB,EAAE,sBAC5C,uBAAC,KAAK;AAER,UAAM,iBAAiB,gCAAyB,oBAAoB,OAAO,CAAC,kBAAa,6BAAC,iDAA+B;AACzH,eAAI,CAAC,yDAAU,wCAAC,cAAc;IAChC;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,UAAU,SAAS,QAAQ;AACjD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,SAAS,mBAAmB;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,OAAO;AACvC,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,wCAAyB,OAAO,GAAG,SAAS;AAC5C,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,SAAS,KAAK;AAC9C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,yBAAU,QAAQ,GAAG,SAAS;AAC9B,uBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,yBAAU,UAAU;;AAEtB,qBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,cAAc;AACxE,yBAAW,cAAc;IAC3B;;AAIE,qBAAQ,mBAAmB;AAC3B,yBAAW,qBAAqB;AAChC,sCAAyB,YAAY;IACvC;uCAEqC,MAAM;AACzC,UAAM,OAAO,QAAG;AAChB,qBAAI,UAAU;IAChB;;AAIE,UAAI,SAAS,6FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,6FAAgB,GAAI,MAAM,GAAI,6FAAgB,GAAG,6DAA8B,CAAC,8EAA4B,EAAE,+FAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;+FA/F2B,UAA2B,EAAE,WAAe;IAV7C,sBAAc,OAAG,0CAAmB;IAC5B,mBAAW;IAChB,gCAAyB;IACxC,eAAQ;IACR,iBAAU;IACnB,gBAAO;IACL,gBAAO;IACV,eAAO;IACP,eAAO;AAEgE,0GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;;MAJ+B,6FAAgB;;;;;;MAmGK,iFAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,kJAAsC;;;;;AAEpK,YAAO,kFAA+B;IACxC;;;;;;;AAWI,0BAAW,OAAG,mGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,yCAA4B,GAAI,UAAS,qCAAS,IAC5C,AAAS,iCAAiB,kFAAU,8FAAuB,EAAE,kBACpD,mFAAgC,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY,6CAE9H,mFAAgC,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY;AAC3H,0BAAW,QAAQ,CAAC,mCAA4B;AAChD,WAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,oCAAiB;AAC/D,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,iBAAiB,AAAS,sCAAU,iCAAoB,WAAM,QAAC;AACrE,UAAM,YAAY,cAAc;AAChC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,2CAA4B,SAAS,GAAG,SAAS;AACjD,wBAAO,GAAG,SAAS;;AAErB,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;0BAEuB,MAAM;AAC3B,UAAM,iBAAiB,AAAS,sCAAU,iCAAoB,WAAM,QAAC;AACrE,UAAM,OAAO,QAAG;AAChB,UAAI,oBAAoB,CAAC,cAAc;IACzC;;gGAtC4B,UAA2B,EAAE,WAAe;IAHlC,oBAAW;IAChB,mCAA4B;IACzD,gBAAO;AACiE,2GAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;kGAuC+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,iFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;MAEoB,kFAAgC;YAAG;;;;;;AAQnD,0BAAW,OAAG,gFAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,sCAA0B,GAAI,UAAS,qCAAS,IAC1C,AAAS,iCAAiB,+DAAS,2EAAqB,EAAE,kBACjD,gEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,2CAEhN,gEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC7M,0BAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;oGAvBgC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,gCAA0B;AACwB,+GAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;sGA0B9F,UAA2B,EAAE,WAAe;AACxH,eAAO,qFAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,oCAAiB,CAAC,2EAAqB,EAAE,gFAA8B;AAC9E,IAAM,qDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,gFAAa;AACnB,IAAM,oCAAa;EACrB;;;;;ICnOiB;;;;;;;YAKX,4DAAmB,UAAU,CAAC,cAAM,EAAE,eAAS;IAAC;;YAEvB,gBAAS,KAAI,gCAAa,cAAc,GAC/D,aAAQ,cAAc,GACtB,aAAQ,WAAW;;;YAGrB,gBAAS,KAAI,gCAAa,WAAW;;eAGzB,QAAoB,EAAE,OAAmB;AACvD,qBAAS,2CAAG,OAAO,UAAU,eAAe;AAC5C,gEAA6B,CAAC,QAAQ,EAAE,sBAAU,aAAa;AAE/D,UAAI,eAAS,KAAI,gCAAa,WAAW,EAAE;AACzC,sBAAM,SAAS,KAAC,8EAAsC;;IAE1D;qBAEsB,KAAW;AAC/B,6DAA0B;AAE1B,UAAM,MACF,sBAAU,aAAa,MAAM,cAAa,yCAAC,WAAW,KAAK,GAAG;AAClE,qBAAO,SAAS,CAAC,GAAG;IACtB;;wFAjC+C,QAAa;IAK9C,eAAS;IALE,cAAM;IAAO,eAAO;IAAO,gBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;MCmB3C,wEAA0B;YAAG,EAAS,sDAAM;;;;;;;;;;;;;;;;;;;AAqB5D,YAAQ,WAAS,qCAAS,IAAG,wDAAwD;IACvF;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA2B,mBAAmB,iBAAY,CAAC,OAAO;AAClE,UAAM,MAAe,aAAQ;AAC7B,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACtD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,yBAAW,OAAG,sGAAqC,CAAC,MAAM;AAC1D,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,KAAK;AAC1C,0CAA6B,GAAI,UAAS,qCAAS,IAC7C,AAAS,iCAAiB,qFAAS,iGAAwB,EAAE,kBACpD,sFAAgC,0BAAC,eAAU,YAAY,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,gBAAQ,4CAEhH,sFAAgC,0BAAC,eAAU,YAAY,CAAU,+BAAK,EAAE,aAAQ,YAAY,IAAG,gBAAQ;AAC7G,yBAAW,QAAQ,CAAC,oCAA6B;AACjD,wBAAW,OAAG,0FAAiC,CAAC,MAAM;AACtD,UAAM,QAAQ,kBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,qCAAyB,GAAI,UAAS,qCAAS,IACzC,AAAS,iCAAiB,yEAAS,qFAAoB,EAAE,kBAChD,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAEpG,0EAA4B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AACjG,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,qBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,eAAQ,EAAE,uHAAgC;AACrF,uBAAU,OAAG,yCAAa,CAAC,eAAQ,EAAE,gBAAgB;AACrD,wBAAW,OAAO,CAAC,+BAAyB,EAAE,sBAC5C,uBAAC,KAAK;AAER,UAAM,iBAAiB,+BAAyB,oBAAoB,OAAO,CAAC,kBAAa,6BAAC,gDAA+B;AACzH,eAAI,CAAC,yDAAU,wCAAC,cAAc;IAChC;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,UAAU,OAAO,QAAQ;AAC/C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,SAAS,mBAAmB;AAClD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,OAAO;AACvC,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,OAAO,GAAG,SAAS;AAC5C,uBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,UAAU,OAAO,KAAK;AAC5C,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,yBAAU,QAAQ,GAAG,SAAS;AAC9B,uBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,yBAAU,UAAU;;AAEtB,sBAAQ,2BAA2B;AACnC,qBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,eAAe;AACzE,yBAAW,cAAc;AACzB,wBAAW,cAAc;IAC3B;;AAIE,sBAAQ,mBAAmB;AAC3B,qBAAQ,mBAAmB;AAC3B,yBAAW,qBAAqB;AAChC,wBAAW,qBAAqB;AAChC,qCAAyB,YAAY;IACvC;sCAEqC,MAAM;AACzC,UAAM,OAAO,QAAG;AAChB,qBAAI,UAAU;IAChB;;AAIE,UAAI,SAAS,uFAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,uFAAgB,GAAI,MAAM,GAAI,uFAAgB,GAAG,6DAA+B,CAAC,wEAA0B,EAAE,yFAAkB;;AAElI,0BAAe,GAAG,MAAM;IAC1B;;yFA9GyB,UAA2B,EAAE,WAAe;IAb3C,sBAAc,OAAG,0CAAmB;IACxB,mBAAW;IACnC,gBAAQ;IACW,oCAA6B;IAC5B,kBAAW;IAChB,+BAAyB;IACxC,eAAQ;IACR,iBAAU;IACnB,gBAAO;IACL,gBAAO;IACV,eAAO;IACP,eAAO;AAE8D,oGAAM,qCAAiB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;AACnB,eAAM,2BAAG,AAAS,aAAQ,gBAAc,CAAC;EAC3C;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,uFAAgB;;;;;;MAkHE,2EAA6B;YAAG,gBAAM,6CAAgB,CAAC,eAAe,0IAAoC;;;;;AAE5J,YAAO,4EAA6B;IACtC;;;;;;;AAYI,0BAAW,OAAG,0FAAkC,CAAC,MAAM;AACvD,UAAM,QAAQ,oBAAW,OAAO;AAChC,mBAAQ,CAAC,KAAK;AACd,sCAAyB,GAAI,UAAS,qCAAS,IACzC,AAAS,iCAAiB,yEAAU,qFAAoB,EAAE,kBACjD,0EAA6B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY,0CAE3H,0EAA6B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY;AACxH,0BAAW,QAAQ,CAAC,gCAAyB;AAC7C,WAAK,mBAAiB,CAAC,SAAS,kBAAa,yBAAC,oCAAiB;AAC/D,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,cAAc,AAAS,sCAAU,2BAAiB,WAAM,QAAC;AAC/D,UAAM,YAAY,WAAW;AAC7B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAAyB,MAAM,GAAG,SAAS;AAC3C,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,6BAA6B;AACnD,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAAyB,aAAa,GAAG,SAAS;AAClD,wBAAO,GAAG,SAAS;;AAErB,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;0BAEuB,MAAM;AAC3B,UAAM,cAAc,AAAS,sCAAU,2BAAiB,WAAM,QAAC;AAC/D,UAAM,OAAO,QAAG;AAChB,UAAI,iBAAiB,CAAC,WAAW;IACnC;;0FA5C0B,UAA2B,EAAE,WAAe;IAJnC,oBAAW;IAChB,gCAAyB;IACnD,gBAAO;IACN,gBAAO;AAC8D,qGAAM,qCAAiB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtK,4BAAmB;EACrB;;;;;;;;;;;;;;4FA6C6C,UAA2B,EAAE,WAAe;AACzF,eAAO,2EAAyB,CAAC,UAAU,EAAE,WAAW;EAC1D;;MAEoB,4EAA8B;YAAG;;;;;;AAQjD,0BAAW,OAAG,0EAAwB,CAAC,MAAM;AAC7C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,oCAAwB,GAAI,UAAS,qCAAS,IACxC,AAAS,iCAAiB,yDAAS,qEAAmB,EAAE,kBAC/C,0DAA2B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,yCAE9M,0DAA2B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC3M,0BAAW,OAAO,CAAC,8BAAwB,EAAE,mBAAc;AAC3D,gBAAK,CAAC,WAAM;AACZ,iBAAO,yCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,8BAAwB;IAC/D;;AAIE,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;IAClC;;8FAvB8B,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,8BAAwB;AAC0B,yGAAM,qCAAiB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;gGA0BjG,UAA2B,EAAE,WAAe;AACpH,eAAO,+EAA6B,CAAC,UAAU,EAAE,WAAW;EAC9D;;MAEI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,oCAAiB,CAAC,qEAAmB,EAAE,0EAA4B;AAC1E,IAAM,qDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,kFAAa;AACnB,IAAM,oCAAa;EACrB;;MC/QI,+BAAQ;YAAG;;;;;AAEb,kBAAI,+BAAQ,GAAE;AACZ;;AAEF,sCAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,+DAAa;EACrB;;;;;;;;;ICWiB;;;;;;IAET;;;;;;IACD;;;;;;IAEA;;;;;;;AAMH,MAAK,WAAM,WAAS,CAAC,GAAG;IAC1B;eAGgB,QAAoB,EAAE,OAAmB;AACvD,+BAAiB,GAAG,QAAQ,IAAI;AAEhC,iCAAqB,CACnB,OAAO,WAAW,QAAC,YACnB,OAAO,WAAW,QAAC;IAEvB;;cAGsB,+BAAyB;;IAAU;4BAE9B,OAAc,EAAE,MAAa;AACtD,gBAAK,GAAG,oDAAiB,CAAC,cAAM,MAAM,EAAE,OAAO;AAC/C,eAAI,GAAG,iDAAgB,CAAC,cAAM,MAAM,EAAE,MAAM;AAE5C,UAAI,SAAI,IAAI,MAAM;AAEhB,0BAAK;iCAAK,uDAAoB,CAAC,cAAM,MAAM,EAAE,SAAI;;AAGnD,UAAI,UAAK,IAAI,MAAM;AACjB,sBAAM,SAAS,KAAC,4DAAuB,CAAC,UAAK;AAC7C,uCAAuB;aAClB;AACL,sBAAM,SAAS,KAAC,wDAAmB,CAAC,gCAAa,cAAc;AAC/D,sBAAM,SAAS,KAAC,wDAAmB,CAAC,gCAAa,WAAW;AAC5D,oCAAoB,CAAC,OAAO,EAAE,MAAM;;IAExC;6BAS0B,OAAc,EAAE,MAAa;AACrD,UAAM,QAAQ,cAAM,MAAM,WAAW;AACrC,UAAM,YAAY,AAAmD,KAA9C,oBAAoB,KAAI,yCAAa,QAAQ,IAChE,KAAK,iBAAiB,KAAI,yCAAa,QAAQ;AAEnD,WAAK,SAAS,EAAE;AACd;;AAGF,qCAAyB,GAAG,cAAM,SAAS,OAAO,CAAC,QAAC,KAAK;;AACvD,cAAM,QAAQ,cAAM,MAAM,WAAW;AACrC,cAAM,qBACF,AAAmD,KAA9C,oBAAoB,KAAI,yCAAa,QAAQ,IAC9C,KAAK,iBAAiB,KAAI,yCAAa,QAAQ;AAEvD,cAAI,kBAAkB,EAAE;AACtB,uCAAqB,CAAC,OAAO,EAAE,MAAM;AACrC,2CAAyB,OAAO;AAChC,2CAAyB,GAAG;AAE5B,2CAAuB;;;;IAG7B;;YAGI,gBAAK,CAAC,cAAQ,KAAK,EAAE,cAAM,mBAAc,GAAG;IAAK;;YAElC,AAAK,YAAM,OAAK,CAAC,SAAI,IAAI,EAAE,0BAAe,SAAI,MAAM;IAAG;;AAGxE,oBAAI,yBAAiB,GAAE;AACrB,QAAK,WAAM,QAAQ,KAAK;AACxB;;AAGF,qBAAO,cAAc,CACnB,sBAAU,cAAc,MAAM,cACrB;IAEb;;mGAhGiD,QAAa;IAKxD,aAAK;IACN,YAAI;IACJ,yBAAiB,GAAG;IACpB,sBAAc,GAAG;IACO,+BAAyB;IAT3B,cAAM;IAAO,eAAO;IAAO,iBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCkB7C,mFAA4B;YAAG,EAAS,+DAAM;;;;;;;AAW9D,YAAQ,WAAQ,qCAAS,IAAG,iEAAiE;IAC/F;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,sBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,kIAAkC;AACvF,uBAAS,OAAG,uCAAI,CAAC,gBAAQ,EAAE,gBAAgB;AAC3C,gBAAK;IACP;;AAIE,UAAM,OAAO,QAAG;AAChB,uBAAS,KAAK,GAAI,IAAI,MAAM,IAAI;AAChC,sBAAQ,2BAA2B;IACrC;;AAIE,sBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,kGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,kGAAgB,GAAI,MAAM,GAAI,kGAAgB,GAAG,6DAA8B,CAAC,mFAA4B,EAAE,oGAAkB;;AAEnI,0BAAe,GAAG,MAAM;IAC1B;;oGAtC2B,UAA2B,EAAE,WAAe;IAHzD,gBAAQ;IACjB,iBAAS;AAE6D,+GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,kGAAgB;;;;;;MA0CK,sFAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,uJAAsC;;;;;AAEpK,YAAO,uFAA+B;IACxC;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BI,UAAM,OAAO,QAAG;AAChB,UAAM,MAAc,aAAQ;AAC5B,mBAAK,0BAAG,GAAG,gBAAc,CAAC;AAC1B,2BAAqB,CAAC,aAAK,EAAE;AAC7B,mBAAQ,CAAC,aAAK;AACd,yBAAW,OAAG,qHAA0C,CAAC,MAAM;AAC/D,UAAM,QAAQ,mBAAW,OAAO;AAChC,mBAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,6CAAiC,OAAG,qGAAqC;AACzE,yBAAW,QAAQ,CAAC,uCAAiC;AACrD,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,aAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,MAAS,sCAAY,CAAC,KAAK,EAAE,OAAO;AACpC,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,aAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,yBAAW,OAAG,0FAAkC,CAAC,MAAM;AACvD,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,qCAAyB,GAAI,UAAQ,qCAAS,IACxC,AAAS,iCAAiB,yEAAU,qFAAoB,EAAE,kBACjD,0EAA6B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY,0CAErG,0EAA6B,qCAAC,eAAU,YAAY,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAClG,yBAAW,QAAQ,CAAC,+BAAyB;AAC7C,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,qBAAe,QAAQ;AACpC,UAAM,WAAW,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC5C,UAAM,aAAa,AAAS,sCAAY,CAAC,KAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,kIAAkC;AACzF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,wBAAY,OAAG,gGAAoC,CAAC,MAAM;AAC1D,UAAM,SAAS,kBAAY,OAAO;AAClC,WAAK,SAAO,CAAC,MAAM;AACnB,MAAS,sCAAY,CAAC,MAAM,EAAE,QAAQ;AACtC,mBAAQ,CAAC,MAAM;AACf,wCAA4B,OAAG,gFAA+B;AAC9D,wBAAY,QAAQ,CAAC,kCAA4B;AACjD,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,kIAAkC;AACzF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,kIAAkC;AACzF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,kIAAkC;AACzF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,UAAM,aAAa,AAAS,sCAAY,CAAC,aAAK;AAC9C,qBAAS,OAAG,mDAAa,CAAC,IAAI,GAAG,MAAM,UAAU;AACjD,UAAY,wBAAoB,+CAAW,CAAC,eAAS,EAAE,kIAAkC;AACzF,sBAAU,OAAG,uCAAI,CAAC,eAAS,EAAE,iBAAiB;AAC9C,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,IAAI;AAClD,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,+CAAiC,MAAM,GAAG,SAAS;AACnD,wBAAO,GAAG,SAAS;;AAErB,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,+CAAiC,SAAS;;AAE5C,UAAI,UAAU,EAAE;AACd,uCAAyB,WAAW,GAAG;AACvC,uCAAyB,YAAY,GAAG;;AAE1C,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,eAAO,EAAE,SAAS,IAAG;AAC7C,uCAAyB,MAAM,GAAG,SAAS;AAC3C,uBAAO,GAAG,SAAS;;AAErB,sBAAU,KAAK,GAAI,IAAI,MAAM,SAAS,IAAI;AAC1C,UAAM,YAAY,IAAI,MAAM;AAC5B,oBAAI,AAAS,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC7C,0CAA4B,MAAM,GAAG,SAAS;AAC9C,qBAAO,GAAG,SAAS;;AAErB,sBAAU,KAAK,GAAI,IAAI,KAAK,IAAI;AAChC,sBAAU,KAAK,GAAG,IAAI,MAAM,YAAY;AACxC,sBAAU,KAAK,GAAG,IAAI,MAAM,OAAO,WAAW;AAC9C,sBAAU,KAAK,GAAG,IAAI,MAAM,cAAc,WAAW;AACrD,qBAAS,2BAA2B;AACpC,qBAAS,2BAA2B;AACpC,qBAAS,2BAA2B;AACpC,qBAAS,2BAA2B;AACpC,qBAAS,2BAA2B;AACpC,UAAM,YAAY,IAAI,eAAe;AACrC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,4CAAkB,CAAC,aAAK,EAAE,WAAW,SAAS;AACvD,wBAAO,GAAG,SAAS;;AAErB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,MAAM;AACtE,2BAAe,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,gBAAgB;AACjF,yBAAW,cAAc;AACzB,yBAAW,cAAc;AACzB,wBAAY,cAAc;IAC5B;;AAIE,qBAAS,mBAAmB;AAC5B,qBAAS,mBAAmB;AAC5B,qBAAS,mBAAmB;AAC5B,qBAAS,mBAAmB;AAC5B,qBAAS,mBAAmB;AAC5B,yBAAW,qBAAqB;AAChC,yBAAW,qBAAqB;AAChC,wBAAY,qBAAqB;AACjC,6CAAiC,YAAY;IAC/C;;qGA1I4B,UAA2B,EAAE,WAAe;IAvB7C,sBAAc,OAAG,0CAAoB;IACrC,qBAAe,OAAG,0CAAoB;IACtB,mBAAW;IAChB,uCAAiC;IACpC,mBAAW;IAChB,+BAAyB;IACzC,eAAS;IAClB,gBAAU;IACsB,kBAAY;IACjB,kCAA4B;IAC9C,eAAS;IAClB,gBAAU;IACD,eAAS;IAClB,gBAAU;IACD,eAAS;IAClB,gBAAU;IACD,eAAS;IAClB,gBAAU;IACV,gBAAO;IACR,gBAAO;IACP,eAAO;IACP,aAAO;IACQ,aAAK;AACoD,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uGA2I+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,UAAU,AAAS,oCAAU,CAAC,KAAK,EAAE;AAC3C,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,SAAS;AAC5E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,SAAS;IAC3E;;qGAtB4B,UAA2B,EAAE,WAAe;IAF7C,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACY,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;uGAuB+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,yBAAW,OAAG,6FAAmC,CAAC,MAAM;AACxD,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,MAAS,sCAAY,CAAC,KAAK,EAAE,gBAAgB;AAC7C,MAAS,sCAAY,CAAC,KAAK,EAAE,SAAS;AACtC,mBAAQ,CAAC,KAAK;AACd,sCAA0B,GAAI,UAAQ,qCAAS,IACzC,AAAS,iCAAiB,4EAAU,wFAAqB,EAAE,kBAClD,6EAA8B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY,2CAE5H,6EAA8B,qCAAC,eAAU,WAAW,YAAY,CAAU,2CAAQ,EAAE,eAAU,SAAS,YAAY;AACzH,yBAAW,QAAQ,CAAC,gCAA0B;AAC9C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,KAAK;AAC3B,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,wCAA0B,KAAK,GAAG,SAAS;AAC3C,wBAAO,GAAG,SAAS;;AAErB,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;qGAtC4B,UAA2B,EAAE,WAAe;IAHpC,mBAAW;IAChB,gCAA0B;IACrD,gBAAO;AACiE,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;uGAuC+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;;AAUI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,UAAU;AAC7E,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,MAAM,SAAS;IAC3E;;qGA3B4B,UAA2B,EAAE,WAAe;IAF7C,sBAAc,OAAG,0CAAoB;IACrC,sBAAc,OAAG,0CAAoB;AACY,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;uGA4B+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,yBAAW,OAAG,uGAAoC,CAAC,MAAM;AACzD,UAAM,QAAQ,mBAAW,OAAO;AAChC,WAAK,SAAO,CAAC,KAAK;AAClB,mBAAQ,CAAC,KAAK;AACd,uCAA2B,OAAG,uFAA+B;AAC7D,yBAAW,QAAQ,CAAC,iCAA2B;AAC/C,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM,OAAO,KAAK;AACxC,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,yCAA2B,OAAO,GAAG,SAAS;AAC9C,wBAAO,GAAG,SAAS;;AAErB,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,KAAK;AACxE,yBAAW,cAAc;IAC3B;;AAIE,yBAAW,qBAAqB;IAClC;;qGAvC4B,UAA2B,EAAE,WAAe;IAJ7C,sBAAc,OAAG,0CAAoB;IAC3B,mBAAW;IAChB,iCAA2B;IACvD,gBAAO;AACiE,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;uGAwC+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;;;AAYI,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,GAAG,gBAAc,CAAC;AAChC,2BAAqB,yBAAC,KAAK,GAAE;AAC7B,mBAAQ,yBAAC,KAAK;AACd,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAS,uCAAa,CAAC,GAAG,EAAE,KAAK,EAAE;AACjD,mBAAQ,CAAC,KAAK;AACd,WAAK,SAAO,CAAC,sBAAc,QAAQ;AACnC,UAAM,QAAQ,AAAS,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC3C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,YAAY,AAAS,sCAAY,CAAC,KAAK;AAC7C,sBAAQ,OAAG,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAC9C,UAAY,uBAAmB,+CAAW,CAAC,gBAAQ,EAAE,kIAAkC;AACvF,wBAAU,OAAG,yCAAc,CAAC,gBAAQ,EAAE,gBAAgB;AACtD,gBAAK,CAAC,KAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,MAAM,cAAc,KAAK;AAC/C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,0BAAU,QAAQ,GAAG,SAAS;AAC9B,wBAAO,GAAG,SAAS;;AAErB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,0BAAU,UAAU;;AAEtB,sBAAQ,2BAA2B;AACnC,4BAAc,WAAW,CAAC,AAAS,4CAAkB,CAAC,IAAI,SAAS,QAAQ;IAC7E;;AAIE,sBAAQ,mBAAmB;IAC7B;;qGA3C4B,UAA2B,EAAE,WAAe;IAJ7C,sBAAc,OAAG,0CAAoB;IAClD,gBAAQ;IACP,kBAAU;IACrB,gBAAO;AACiE,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;;uGA4C+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;;AAWI,UAAM,MAAc,aAAQ;AAC5B,mBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,aAAK;AACd,gBAAK,CAAC,aAAK;IACb;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,qBAAqB,AAAQ,sCAAU,kCAAwB,WAAM,QAAC;AAC5E,UAAM,YAAY,kBAAkB,SAAS;AAC7C,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,AAAS,8CAAY,UAAU,YAAY,CAAC,SAAS;AACxF,wBAAO,GAAG,SAAS;;AAErB,UAAM,YAAa,AAAgC,+CAAE,IAAI,MAAM,MAAM;AACrE,oBAAI,AAAS,8CAAY,CAAC,gBAAO,EAAE,SAAS,IAAG;AAC7C,QAAS,qCAAW,CAAC,aAAK,EAAE,OAAO,SAAS;AAC5C,wBAAO,GAAG,SAAS;;IAEvB;;qGAzB4B,UAA2B,EAAE,WAAe;IAHpE,gBAAO;IACP,gBAAO;IACK,aAAK;AACuD,gHAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,4BAAmB;EACrB;;;;;;;;;;;;uGA0B+C,UAA2B,EAAE,WAAe;AAC3F,eAAO,sFAA2B,CAAC,UAAU,EAAE,WAAW;EAC5D;;MAEoB,uFAAgC;YAAG;;;;;;;AAQnD,0BAAW,OAAG,qFAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,oBAAW,OAAO;AAC3B,sCAA0B,GAAI,UAAQ,qCAAS,IACzC,AAAS,iCAAiB,oEAAS,gFAAqB,EAAE,kBACjD,qEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY,2CAEhN,qEAA6B,0BAAC,gBAAgB,CAAU,+BAAK,EAAE,aAAQ,YAAY,sCAAG,gBAAgB,CAAU,yCAAM,EAAE,aAAQ,YAAY,wCAAG,gBAAgB,CAAU,2CAAQ,EAAE,aAAQ,YAAY;AAC7M,0BAAW,OAAO,CAAC,gCAA0B,EAAE,mBAAc;AAC7D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,wCAA0B,SAAS;;AAErC,0BAAW,cAAc;IAC3B;;AAIE,0BAAW,qBAAqB;AAChC,sCAA0B,YAAY;IACxC;;yGA5BgC,UAA2B,EAAE,WAAe;IAFjD,oBAAW;IACR,gCAA0B;AACwB,oHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;2GA+B9F,UAA2B,EAAE,WAAe;AACxH,eAAO,0FAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAO,oCAAiB,CAAC,gFAAqB,EAAE,qFAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,8EAAa;AACnB,IAAM,0EAAa;AACnB,IAAM,4EAAa;AACnB,IAAM,qFAAa;AACnB,IAAM,6FAAa;AACnB,IAAM,oCAAa;EACrB;;;ECphBA;;;MAhCe,+BAAQ;iBAAG,6BAAS,QACzB;;MAIK,sCAAe;iBAAG,6BAAS,QAAO;;MAGlC,+BAAQ;iBAAG,6BAAS,QACzB,2BACQ;;MAIH,sCAAe;iBAAG,6BAAS,QAAO;;MAGlC,oCAAa;iBAAG,6BAAS,QAC9B,6BACU,gCAAa,cAAc;;MAGhC,gCAAS;iBAAG,6BAAS,QAAO;;MAC5B,iCAAU;iBAAG,6BAAS,QAC3B,8BACU,gCAAa,WAAW;;MAG7B,mCAAY;iBAAG,6BAAS,QAAO;;MAC/B,kCAAW;iBAAG,6BAAS,QAAO;;;;;EAkE7C;;;MA5DqC,sBAAG;YAAG,gCAEvC,yCAAe,aACF,sBAAU,SAAS,aACL,gFAA8B,IAEzD,2CAAqB,aACR,sBAAU,gBAAgB,UAC7B,gDACC,uBAEE,wDAAC,QAAC,CAAC,IAAsB,8FAAiC,iGAGvE,yCAAe,aACF,sBAAU,SAAS,gBAChB,iBACW,gFAA8B,IAEzD,2CAAqB,aACR,sBAAU,gBAAgB,UAC7B,gDACC,uBAEE,wDAAC,QAAC,CAAC,IAAsB,8FAAiC,iGAGvE,yCAAe,aACF,sBAAU,cAAc,aACZ,0EAA4B,IAErD,yCAAe,aACF,sBAAU,WAAW,aACT,0EAA4B,IAErD,2CAAqB,aACR,sBAAU,UAAU,UACvB,gDACC,uBAEE,wDAAC,QAAC,CAAC,IAAoB,mFAA+B,+FAGnE,2CAAqB,aACR,sBAAU,aAAa,UAC1B,gDACC,uBAEE,wDAAC,QAAC,CAAC,IAAmB,qFAA8B,8FAGjE,2CAAqB,aACR,sBAAU,YAAY,UACzB,gDACC,uBAEE,wDAAC,QAAC,CAAC,IAAmB,qFAA8B;;;;IChGpD;;;;;;IAGV;;;;;;;2EAJW,QAAa;IAIxB,2BAAqB,GAAG;IAJR,iBAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wECRM,QAAuC;AAC3E,QAAI,cAAc;AAElB,UAAO,qBAAc,CAAC,qCAAM,kBAAQ,gBAAe,SAAM,QAAC,CAAC;AACzD,UAAM,MAAM,aAAQ,KAAK,sBAAsB,QAAM;AAErD,UAAQ,aAAJ,GAAG,iBAAG,WAAW,KAAQ,aAAJ,GAAG,IAAG,CAAC,KAAK;AACnC,gBAAQ,CAAC,0CAAe,GAAG;YACtB,KAAQ,aAAJ,GAAG,iBAAG,WAAW,GAAE;AAC5B,gBAAQ,CAAC,0CAAe,KAAK;;AAG/B,iBAAW,cAAG,GAAG;;EAErB;;;ICPiB;;;;;;IACO;;;;;;;uBAGK,eAAU,IAAG,KAAK;IAAI;IAGpC;;;;;;IAER;;;;;;;AAGH,qBAAU,GAAG,WAAC,eAAU;AAExB,oBAAI,eAAU,GAAE;AACd,uBAAK,CAAC,qCAAM,kBAAQ,gBAAe,SAAM,cAAM,gBAAW,MAAM;aAC3D;AACL,wBAAW,MAAM,GAAG;AACpB,8BAAiB,CAAC;;IAEtB;sBAEuB,QAAe;YAClC,WAAK,SAAS,KAAC,wDAAwB,CAAC,QAAQ;IAAE;;oFAxBnC,QAAa,EAAE,KAAU;IAQ/B,iBAAW;IAEnB,gBAAU,GAAG;IAVM,iBAAQ,GAAR,QAAQ;IAAO,YAAK,GAAL,KAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;ICU9B;;;;;;IACO;;;;;;;YAEI,AAAG,oBAAI,cAAc,IAAI;IAAI;;cAC/B,AAAG,mBAAI,cAAc;;IAAO;;cAC1B,AAAG,mBAAI,cAAc;;IAAa;;cACvB,AAAG,mBAAI,cAAc;;IAAU;IAG7D;;;;;;;AAIe;AACpB,mBAAK,CAAC;AACN,cAAM,AAAG,mBAAI,UAAU;AACvB,gCAAmB,GAAG;MACxB;;kBAGmC,WAAuB;AAExD,YAAO,KAAI,4BAAmB,CAAE,cAAM,WAAK,CAAC;IAC9C;kBAGmB,UAA4B,EAAE,WAAkB;AACjE,iBAAK,CAAC,8CAAmC,UAAU,WAAW,WAAW;AACzE,iBAAK,CAAC,oBAAS,UAAU,mBAAmB;AAG5C,YAAO;IACT;;AAKE,UAAI,eAAS,IAAI,MAAM;AACrB,YAAI,gBAAgB,WACN,4BAAqB,YAAY,UACnC,sBAAC,SAAS,kEAEd,SAAmC;AAE3C,YAAI,kBAAkB,WACR,8BAAuB,YAAY,oBAGzC;AAER,YAAI,iBAAiB,WACP,6BAAsB,YAAY;AAYhD,YAAI,YAAY,UACH,cAAM,WAAK,CAAC,kEACQ,eAAY,kCAAC,gCAAa,kBACxC,gCAAa;AAIhC,uBAAS,GAAG,mBACU,oBACH,CACb,aAAa,EACb,eAAe,EACf,cAAc,eAKJ,8BAEM,oBAAe,UACzB,wBACG,SAAS;;AAE1B,YAAO,gBAAS;IAClB;;sFAxFoB,QAAa,EAAE,KAAU;IAUtC,yBAAmB,GAAG;IAEpB,eAAS;IAZO,iBAAQ,GAAR,QAAQ;IAAO,aAAK,GAAL,KAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;IC2B/B;;;;;;IACO;;;;;;IAEjB;;;;;;;YAEoB,gBAAU;IAAE;IAEhC;;;;;;;AAGH,qBAAU,GAAG;IACf;IAIO;;;;;;;YAEmB,AAAG,oBAAI,cAAc,IAAI;IAAI;;AAEjC;AACpB,mBAAK,CAAC;AACN,cAAM,AAAG,mBAAI,UAAU;AACvB,gCAAmB,GAAG;MACxB;;;oFAxBmB,QAAa,EAAE,KAAU;IAIvC,qBAAe,GAAG;IAIlB,gBAAU,GAAG;IAQX,0BAAmB,GAAG;IAhBL,iBAAQ,GAAR,QAAQ;IAAO,aAAK,GAAL,KAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICrB9B;;;;;;;YAIW,eAAM,MAAM,aAAa,eAAe,KAAK;;IAGlE;;;;;;IAGA;;;;;;IAEA;;;;;;IACA;;;;;;;YAM8B,4BAAqB,OAAO;;;YAGjC,4BAAqB,IAAI,CAAC;IAAK;;AAI3D,4BAAgB;AAChB,wBAAY,GAAG,0DAA+B,CAAC,QAAC,YAAY;AAC1D,uBAAK,uBAAkB,gBAAK,2BAAsB,GAAE;AAClD,mBAAI,GAAG,YAAY,KAAI,0CAAe,KAAK;;;IAGjD;;AAIE,0BAAc,GAAG,eAAO,iBAAiB,OAAO,CAAC,QAAC,KAAK;AACrD,YAAM,OAAO,KAAK,UAAU,KAAK;AAGjC,+BAAkB,GAAG,AAEjB,IAFqB,IAAI,sBAAU,aAAa,KAAK,IACrD,IAAI,IAAI,sBAAU,YAAY,KAAK,IAAI,IAAI,IAAI,sBAAU,gBAAgB,KAAK,IAC3E,IAAI,IAAI,sBAAU,gBAAgB,KAAK;AAE9C,iBAAI,GAAG,uBAAkB;;IAE7B;;AAIE,iCAAqB,MAAM;AAC3B,0BAAc,OAAO;AACrB,wBAAY,OAAO;IACrB;;kEAvDgB,QAAa;IASxB,4BAAsB,GAAG;IAGzB,4BAAqB,GAAG;IAExB,UAAI,GAAG;IACP,wBAAkB,GAAG;IAEM,oBAAc;IACxC,kBAAY;IAIZ,2BAAqB,GAAG,0BAAgB;IAtBzB,iBAAQ,GAAR,QAAQ;IAAO,cAAM;IAAO,eAAO;EAAC","file":"app_bar_component.ddc.js"}');
  // Exports:
  return {
    src__common__content_rating__content_rating_component: src__common__content_rating__content_rating_component,
    src__common__event_poster__lazy_image_component: src__common__event_poster__lazy_image_component,
    src__common__event_poster__event_poster_component: src__common__event_poster__event_poster_component,
    src__common__showtime_item__showtime_item_component: src__common__showtime_item__showtime_item_component,
    src__event_details__actor_scroller__actor_image_component: src__event_details__actor_scroller__actor_image_component,
    src__event_details__actor_scroller__actor_scroller_component: src__event_details__actor_scroller__actor_scroller_component,
    src__event_details__landscape_image__event_landscape_image_component: src__event_details__landscape_image__event_landscape_image_component,
    src__common__content_rating__content_rating_component$46css$46shim: src__common__content_rating__content_rating_component$46css$46shim,
    src__common__content_rating__content_rating_component$46template: src__common__content_rating__content_rating_component$46template,
    src__common__event_poster__lazy_image_component$46css$46shim: src__common__event_poster__lazy_image_component$46css$46shim,
    src__common__event_poster__lazy_image_component$46template: src__common__event_poster__lazy_image_component$46template,
    src__common__event_poster__event_poster_component$46css$46shim: src__common__event_poster__event_poster_component$46css$46shim,
    src__common__event_poster__event_poster_component$46template: src__common__event_poster__event_poster_component$46template,
    src__common__showtime_item__showtime_item_component$46css$46shim: src__common__showtime_item__showtime_item_component$46css$46shim,
    src__common__showtime_item__showtime_item_component$46template: src__common__showtime_item__showtime_item_component$46template,
    src__event_details__actor_scroller__actor_image_component$46css$46shim: src__event_details__actor_scroller__actor_image_component$46css$46shim,
    src__event_details__actor_scroller__actor_image_component$46template: src__event_details__actor_scroller__actor_image_component$46template,
    src__event_details__actor_scroller__actor_scroller_component$46css$46shim: src__event_details__actor_scroller__actor_scroller_component$46css$46shim,
    src__event_details__actor_scroller__actor_scroller_component$46template: src__event_details__actor_scroller__actor_scroller_component$46template,
    src__event_details__landscape_image__event_landscape_image_component$46css$46shim: src__event_details__landscape_image__event_landscape_image_component$46css$46shim,
    src__event_details__landscape_image__event_landscape_image_component$46template: src__event_details__landscape_image__event_landscape_image_component$46template,
    src__common__loading_view__spinner_component: src__common__loading_view__spinner_component,
    src__common__loading_view__loading_view_component: src__common__loading_view__loading_view_component,
    src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim: src__common__theater_selector__theater_selector_dropdown_menu_component$46css$46shim,
    src__common__theater_selector__theater_dropdown_controller$46template: src__common__theater_selector__theater_dropdown_controller$46template,
    src__common__theater_selector__theater_selector_dropdown_menu_component: src__common__theater_selector__theater_selector_dropdown_menu_component,
    src__common__theater_selector__theater_selector_dropdown_menu_component$46template: src__common__theater_selector__theater_selector_dropdown_menu_component$46template,
    src__common__theater_selector__theater_dropdown_controller: src__common__theater_selector__theater_dropdown_controller,
    src__common__theater_selector__theater_selector_component: src__common__theater_selector__theater_selector_component,
    src__restore_scroll_position: src__restore_scroll_position,
    src__restore_scroll_position$46template: src__restore_scroll_position$46template,
    src__common__loading_view__spinner_component$46css$46shim: src__common__loading_view__spinner_component$46css$46shim,
    src__common__loading_view__spinner_component$46template: src__common__loading_view__spinner_component$46template,
    src__common__loading_view__loading_view_component$46css$46shim: src__common__loading_view__loading_view_component$46css$46shim,
    src__common__loading_view__loading_view_component$46template: src__common__loading_view__loading_view_component$46template,
    src__common__theater_selector__theater_selector_component$46css$46shim: src__common__theater_selector__theater_selector_component$46css$46shim,
    src__common__theater_selector__theater_selector_component$46template: src__common__theater_selector__theater_selector_component$46template,
    src__events__events_page_component$46css$46shim: src__events__events_page_component$46css$46shim,
    src__common__vegebook_poster__lazy_image_component: src__common__vegebook_poster__lazy_image_component,
    src__common__vegebook_poster__vegebook_poster_component: src__common__vegebook_poster__vegebook_poster_component,
    src__common__vegebook_poster__lazy_image_component$46css$46shim: src__common__vegebook_poster__lazy_image_component$46css$46shim,
    src__common__vegebook_poster__lazy_image_component$46template: src__common__vegebook_poster__lazy_image_component$46template,
    src__common__vegebook_poster__vegebook_poster_component$46css$46shim: src__common__vegebook_poster__vegebook_poster_component$46css$46shim,
    src__common__vegebook_poster__vegebook_poster_component$46template: src__common__vegebook_poster__vegebook_poster_component$46template,
    src__vegebook__vegebook_page_component$46css$46shim: src__vegebook__vegebook_page_component$46css$46shim,
    src__common__vegenews_poster__lazy_image_component: src__common__vegenews_poster__lazy_image_component,
    src__common__vegenews_poster__vegenews_poster_component: src__common__vegenews_poster__vegenews_poster_component,
    src__common__vegenews_poster__lazy_image_component$46css$46shim: src__common__vegenews_poster__lazy_image_component$46css$46shim,
    src__common__vegenews_poster__lazy_image_component$46template: src__common__vegenews_poster__lazy_image_component$46template,
    src__common__vegenews_poster__vegenews_poster_component$46css$46shim: src__common__vegenews_poster__vegenews_poster_component$46css$46shim,
    src__common__vegenews_poster__vegenews_poster_component$46template: src__common__vegenews_poster__vegenews_poster_component$46template,
    src__vegenews__vegenews_page_component$46css$46shim: src__vegenews__vegenews_page_component$46css$46shim,
    src__event_details__event_details_component$46css$46shim: src__event_details__event_details_component$46css$46shim,
    src__showtimes__date_selector_component: src__showtimes__date_selector_component,
    src__showtimes__date_selector_component$46css$46shim: src__showtimes__date_selector_component$46css$46shim,
    src__showtimes__date_selector_component$46template: src__showtimes__date_selector_component$46template,
    src__showtimes__showtimes_page_component$46css$46shim: src__showtimes__showtimes_page_component$46css$46shim,
    src__vegenews_details__landscape_image__vegenews_landscape_image_component: src__vegenews_details__landscape_image__vegenews_landscape_image_component,
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim: src__vegenews_details__landscape_image__vegenews_landscape_image_component$46css$46shim,
    src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template: src__vegenews_details__landscape_image__vegenews_landscape_image_component$46template,
    src__vegenews_details__vegenews_details_component$46css$46shim: src__vegenews_details__vegenews_details_component$46css$46shim,
    src__vegebook_details__landscape_image__vegebook_landscape_image_component: src__vegebook_details__landscape_image__vegebook_landscape_image_component,
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim: src__vegebook_details__landscape_image__vegebook_landscape_image_component$46css$46shim,
    src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template: src__vegebook_details__landscape_image__vegebook_landscape_image_component$46template,
    src__vegebook_details__vegebook_details_component$46css$46shim: src__vegebook_details__vegebook_details_component$46css$46shim,
    src__vegebook_details__vegebook_details_component: src__vegebook_details__vegebook_details_component,
    src__vegebook_details__vegebook_details_component$46template: src__vegebook_details__vegebook_details_component$46template,
    src__vegenews_details__vegenews_details_component: src__vegenews_details__vegenews_details_component,
    src__vegenews_details__vegenews_details_component$46template: src__vegenews_details__vegenews_details_component$46template,
    src__showtimes__showtimes_page_component: src__showtimes__showtimes_page_component,
    src__showtimes__showtimes_page_component$46template: src__showtimes__showtimes_page_component$46template,
    src__vegenews__vegenews_page_component: src__vegenews__vegenews_page_component,
    src__vegenews__vegenews_page_component$46template: src__vegenews__vegenews_page_component$46template,
    src__vegebook__vegebook_page_component: src__vegebook__vegebook_page_component,
    src__vegebook__vegebook_page_component$46template: src__vegebook__vegebook_page_component$46template,
    src__events__events_page_component: src__events__events_page_component,
    src__events__events_page_component$46template: src__events__events_page_component$46template,
    src__routes$46template: src__routes$46template,
    src__event_details__event_details_component: src__event_details__event_details_component,
    src__event_details__event_details_component$46template: src__event_details__event_details_component$46template,
    src__routes: src__routes,
    src__app_bar__nav_bar__nav_bar_component: src__app_bar__nav_bar__nav_bar_component,
    src__app_bar__scroll_utils: src__app_bar__scroll_utils,
    src__app_bar__search_bar__search_bar_component: src__app_bar__search_bar__search_bar_component,
    src__common__signin_page__signin_page_component: src__common__signin_page__signin_page_component,
    src__app_bar__signin_bar__signin_bar_component: src__app_bar__signin_bar__signin_bar_component,
    src__app_bar__app_bar_component: src__app_bar__app_bar_component
  };
});

//# sourceMappingURL=app_bar_component.ddc.js.map
