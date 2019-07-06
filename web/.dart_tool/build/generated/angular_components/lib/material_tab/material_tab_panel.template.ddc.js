define(['dart_sdk', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab', 'packages/angular/angular.template', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular_components/material_tab/tab_change_event.template'], function(dart_sdk, material_tab_panel$46scss$46css, modules, change_detection, material_tab_panel, fixed_material_tab_strip, fixed_material_tab_strip$, tab_change_event, material_tab, angular, material_tab$, tab_change_event$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab_panel$46scss$46css$46shim = material_tab_panel$46scss$46css.material_tab__material_tab_panel$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_tab__material_tab_panel = material_tab_panel.material_tab__material_tab_panel;
  const material_tab__fixed_material_tab_strip$46template = fixed_material_tab_strip.material_tab__fixed_material_tab_strip$46template;
  const material_tab__fixed_material_tab_strip = fixed_material_tab_strip$.material_tab__fixed_material_tab_strip;
  const material_tab__tab_change_event = tab_change_event.material_tab__tab_change_event;
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const angular$46template = angular.angular$46template;
  const material_tab__material_tab$46template = material_tab$.material_tab__material_tab$46template;
  const material_tab__tab_change_event$46template = tab_change_event$.material_tab__tab_change_event$46template;
  const material_tab__material_tab_panel$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let VoidToFixedMaterialTabStripComponent = () => (VoidToFixedMaterialTabStripComponent = dart.constFn(dart.fnType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, [])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let AppViewOfMaterialTabPanelComponent = () => (AppViewOfMaterialTabPanelComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let AppViewAndintToAppViewOfMaterialTabPanelComponent = () => (AppViewAndintToAppViewOfMaterialTabPanelComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabPanelComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTabPanelComponent = () => (ComponentFactoryOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  let JSArrayOfTab = () => (JSArrayOfTab = dart.constFn(_interceptors.JSArray$(material_tab__material_tab.Tab)))();
  let ComponentRefOfMaterialTabPanelComponent = () => (ComponentRefOfMaterialTabPanelComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent)))();
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return [material_tab__material_tab_panel$46scss$46css$46shim.styles];
    }
  });
  const _compView_0 = dart.privateName(material_tab__material_tab_panel$46template, "_compView_0");
  const _FixedMaterialTabStripComponent_0_5 = dart.privateName(material_tab__material_tab_panel$46template, "_FixedMaterialTabStripComponent_0_5");
  const _expr_0 = dart.privateName(material_tab__material_tab_panel$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_tab__material_tab_panel$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_tab__material_tab_panel$46template, "_expr_2");
  let const$;
  let const$0;
  let const$1;
  material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab_panel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent, dart.wrapType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent), dart.fn(() => new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.parentView.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex))), VoidToFixedMaterialTabStripComponent())) : new material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], core.bool._check(this.parentView.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("isRtl"))), this.viewData.parentIndex)));
      this[_compView_0].create0(this[_FixedMaterialTabStripComponent_0_5]);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(_ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(material_tab__tab_change_event.TabChangeEvent, material_tab__tab_change_event.TabChangeEvent, dart.bind(_ctx, 'onTabChange')));
      this.init(const$1 || (const$1 = dart.constList([], core.Object)), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    initComponentStyles() {
      let styles = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles;
      if (styles == null) {
        material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = styles = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponent, material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tab-panel"));
    this.updateChildClassNonHtml(this.rootEl, material_tab__material_tab_panel.MaterialTabPanelComponent.hostClass);
  }).prototype = material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, "package:angular_components/material_tab/material_tab_panel.template.dart");
  dart.setFieldSignature(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(material_tab__fixed_material_tab_strip.FixedMaterialTabStripComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template._MaterialTabPanelComponentNgFactory*/get _MaterialTabPanelComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabPanelComponent()).new("material-tab-panel", dart.fn(material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, AppViewAndintToAppViewOfMaterialTabPanelComponent())));
    }
  });
  dart.copyProperties(material_tab__material_tab_panel$46template, {
    get MaterialTabPanelComponentNgFactory() {
      return material_tab__material_tab_panel$46template._MaterialTabPanelComponentNgFactory;
    }
  });
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialTabPanelComponent_0_5 = dart.privateName(material_tab__material_tab_panel$46template, "_MaterialTabPanelComponent_0_5");
  material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__material_tab_panel.MaterialTabPanelComponent) {
    build() {
      this[_compView_0] = new material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabPanelComponent_0_5] = new material_tab__material_tab_panel.MaterialTabPanelComponent.new(this[_compView_0]);
      this[_MaterialTabPanelComponent_0_5].tabs = JSArrayOfTab().of([]);
      this[_compView_0].create(this[_MaterialTabPanelComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTabPanelComponent()).new(0, this, this.rootEl, this[_MaterialTabPanelComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTabPanelComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabPanelComponent_0_5] = null;
    material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setMethodSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab_panel.MaterialTabPanelComponent), [])
  }));
  dart.setLibraryUri(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, "package:angular_components/material_tab/material_tab_panel.template.dart");
  dart.setFieldSignature(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab_panel$46template.ViewMaterialTabPanelComponent0),
    [_MaterialTabPanelComponent_0_5]: dart.fieldType(material_tab__material_tab_panel.MaterialTabPanelComponent)
  }));
  material_tab__material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab_panel$46template, {
    /*material_tab__material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab_panel$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab_panel$46template._visited)) {
      return;
    }
    material_tab__material_tab_panel$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab_panel.MaterialTabPanelComponent), material_tab__material_tab_panel$46template.MaterialTabPanelComponentNgFactory);
    angular$46template.initReflector();
    material_tab__fixed_material_tab_strip$46template.initReflector();
    material_tab__material_tab$46template.initReflector();
    material_tab__tab_change_event$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template.ddc", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab__material_tab_panel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":"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","file":"material_tab_panel.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab__material_tab_panel$46template
  };
});

//# sourceMappingURL=material_tab_panel.template.ddc.js.map
