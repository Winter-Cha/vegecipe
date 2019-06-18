define(['dart_sdk', 'packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/content/deferred_content_aware.template'], function(dart_sdk, material_stackable_drawer$46scss$46css, modules, change_detection, material_stackable_drawer, deferred_content_aware, angular, material_temporary_drawer, deferred_content_aware$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_layout__material_stackable_drawer$46scss$46css$46shim = material_stackable_drawer$46scss$46css.app_layout__material_stackable_drawer$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const app_layout__material_stackable_drawer = material_stackable_drawer.app_layout__material_stackable_drawer;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const angular$46template = angular.angular$46template;
  const app_layout__material_temporary_drawer$46template = material_temporary_drawer.app_layout__material_temporary_drawer$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const app_layout__material_stackable_drawer$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfMaterialStackableDrawerComponent = () => (AppViewOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let AppViewAndintToAppViewOfMaterialStackableDrawerComponent = () => (AppViewAndintToAppViewOfMaterialStackableDrawerComponent = dart.constFn(dart.fnType(AppViewOfMaterialStackableDrawerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialStackableDrawerComponent = () => (ComponentFactoryOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  let VoidToMaterialStackableDrawerComponent = () => (VoidToMaterialStackableDrawerComponent = dart.constFn(dart.fnType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent, [])))();
  let ComponentRefOfMaterialStackableDrawerComponent = () => (ComponentRefOfMaterialStackableDrawerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)))();
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent*/get styles$MaterialStackableDrawerComponent() {
      return [app_layout__material_stackable_drawer$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = dart.privateName(app_layout__material_stackable_drawer$46template, "_expr_0");
  const _expr_1 = dart.privateName(app_layout__material_stackable_drawer$46template, "_expr_1");
  const _expr_2 = dart.privateName(app_layout__material_stackable_drawer$46template, "_expr_2");
  const _el_0 = dart.privateName(app_layout__material_stackable_drawer$46template, "_el_0");
  const _handle_click_0_0 = dart.privateName(app_layout__material_stackable_drawer$46template, "_handle_click_0_0");
  app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0 = class ViewMaterialStackableDrawerComponent0 extends src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_stackable_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "drawer-content");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggle')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "drawer-content-expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_click_0_0]($event) {
      dart.dsend($event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-collapsed", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hostMatDrawerExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-expanded", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles;
      if (styles == null) {
        app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = styles = app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent, app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-drawer"));
  }).prototype = app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.prototype;
  dart.addTypeTests(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.setMethodSignature(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getMethods(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getFields(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, {
    /*app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory*/get _MaterialStackableDrawerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialStackableDrawerComponent()).new("material-drawer[stackable]", dart.fn(app_layout__material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0, AppViewAndintToAppViewOfMaterialStackableDrawerComponent())));
    }
  });
  dart.copyProperties(app_layout__material_stackable_drawer$46template, {
    get MaterialStackableDrawerComponentNgFactory() {
      return app_layout__material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory;
    }
  });
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template.styles$MaterialStackableDrawerComponentHost*/get styles$MaterialStackableDrawerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(app_layout__material_stackable_drawer$46template, "_compView_0");
  const _MaterialStackableDrawerComponent_0_5 = dart.privateName(app_layout__material_stackable_drawer$46template, "_MaterialStackableDrawerComponent_0_5");
  app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0 = class _ViewMaterialStackableDrawerComponentHost0 extends src__core__linker__app_view.AppView$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) {
    build() {
      this[_compView_0] = new app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStackableDrawerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent, dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), dart.fn(() => new app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.new(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent._check(this.injectorGetOptional(dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), this.viewData.parentIndex))), VoidToMaterialStackableDrawerComponent())) : new app_layout__material_stackable_drawer.MaterialStackableDrawerComponent.new(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent._check(this.injectorGetOptional(dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialStackableDrawerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialStackableDrawerComponent()).new(0, this, this.rootEl, this[_MaterialStackableDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialStackableDrawerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialStackableDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStackableDrawerComponent_0_5] = null;
    app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.prototype;
  dart.addTypeTests(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.setMethodSignature(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getFields(app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_layout__material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0),
    [_MaterialStackableDrawerComponent_0_5]: dart.fieldType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent)
  }));
  app_layout__material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0 = function(parentView, parentIndex) {
    return new app_layout__material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_layout__material_stackable_drawer$46template, {
    /*app_layout__material_stackable_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_layout__material_stackable_drawer$46template.initReflector = function() {
    if (dart.test(app_layout__material_stackable_drawer$46template._visited)) {
      return;
    }
    app_layout__material_stackable_drawer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_layout__material_stackable_drawer.MaterialStackableDrawerComponent), app_layout__material_stackable_drawer$46template.MaterialStackableDrawerComponentNgFactory);
    angular$46template.initReflector();
    app_layout__material_temporary_drawer$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.template.ddc", {
    "package:angular_components/app_layout/material_stackable_drawer.template.dart": app_layout__material_stackable_drawer$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.template.dart"],"names":[],"mappings":"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","file":"material_stackable_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer$46template: app_layout__material_stackable_drawer$46template
  };
});

//# sourceMappingURL=material_stackable_drawer.template.ddc.js.map
