define(['dart_sdk', 'packages/core/core', 'packages/web/src/app_bar/app_bar_component', 'packages/angular/src/core/change_detection/change_detection', 'packages/redux/redux', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, core, app_bar_component, change_detection, redux, modules) {
  'use strict';
  const core$ = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__redux___common__common_actions = core.src__redux___common__common_actions;
  const src__redux__app__app_state = core.src__redux__app__app_state;
  const src__common__theater_selector__theater_dropdown_controller = app_bar_component.src__common__theater_selector__theater_dropdown_controller;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__store = redux.src__store;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const app_component = Object.create(dart.library);
  const $classes = dartx.classes;
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(src__store.Store$(src__redux__app__app_state.AppState)))();
  const _store = dart.privateName(app_component, "_store");
  const _loader = dart.privateName(app_component, "_loader");
  const _theaterController = dart.privateName(app_component, "_theaterController");
  app_component.AppComponent = class AppComponent extends core$.Object {
    get theaterContainer() {
      return this[theaterContainer];
    }
    set theaterContainer(value) {
      this[theaterContainer] = value;
    }
    get theaterDropdownVisible() {
      return (() => {
        let t = this[_theaterController];
        return t == null ? null : t.visible;
      })() === true;
    }
    get theaterDropdownActive() {
      return (() => {
        let t = this[_theaterController];
        return t == null ? null : t.isDestroyed;
      })() === false;
    }
    ngOnInit() {
      return this[_store].dispatch(new src__redux___common__common_actions.InitAction.new());
    }
    ngAfterContentInit() {
      return html.document.body[$classes].add("loaded");
    }
    toggleTheaterDropdown() {
      return async.async(dart.dynamic, (function* toggleTheaterDropdown() {
        if (!dart.test(this.theaterDropdownActive)) {
          this[_theaterController] = (yield src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController.loadAndShow(this[_loader], this.theaterContainer, {background: "#152451"}));
        } else {
          this[_theaterController].hideAndDestroy();
        }
      }).bind(this));
    }
  };
  (app_component.AppComponent.new = function(store, loader) {
    this[theaterContainer] = null;
    this[_theaterController] = null;
    this[_store] = store;
    this[_loader] = loader;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const theaterContainer = Symbol("AppComponent.theaterContainer");
  app_component.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterContentInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterContentInit: dart.fnType(dart.void, []),
    toggleTheaterDropdown: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    theaterDropdownVisible: core$.bool,
    theaterDropdownActive: core$.bool
  }));
  dart.setLibraryUri(app_component.AppComponent, "package:web/app_component.dart");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    [_store]: dart.finalFieldType(StoreOfAppState()),
    [_loader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    theaterContainer: dart.fieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_theaterController]: dart.fieldType(src__common__theater_selector__theater_dropdown_controller.TheaterDropdownController)
  }));
  dart.trackLibraries("packages/web/app_component.ddc", {
    "package:web/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IA2BmB;;;;;;;;gBAGkB,wBAAkB;;eAAa;IAAI;;;gBACpC,wBAAkB;;eAAiB;IAAK;;YAGvD,aAAM,SAAS,KAAC,kDAAU;IAAG;;YAGnB,cAAQ,KAAK,UAAQ,IAAI,CAAC;IAAS;;AAEnC;AAC3B,uBAAK,0BAAqB,GAAE;AAC1B,kCAAkB,IAAG,MAAM,oFAAyB,YAAY,CAC9D,aAAO,EACP,qBAAgB,eACJ;eAET;AACL,kCAAkB,eAAe;;MAErC;;;;IAtBiB,sBAAgB;IAEP,wBAAkB;IAP1B,YAAM;IAAO,aAAO;EAAC","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
