define(['dart_sdk', 'packages/angular_components/material_tab/material_tab.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/material_tab', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_tab$46scss$46css, modules, change_detection, material_tab, id_generator, deferred_content_aware, angular, deferred_content_aware$, focus, id_generator$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_tab__material_tab$46scss$46css$46shim = material_tab$46scss$46css.material_tab__material_tab$46scss$46css$46shim;
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
  const material_tab__material_tab = material_tab.material_tab__material_tab;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const material_tab__material_tab$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialTabComponent = () => (AppViewOfMaterialTabComponent = dart.constFn(src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent)))();
  let AppViewAndintToAppViewOfMaterialTabComponent = () => (AppViewAndintToAppViewOfMaterialTabComponent = dart.constFn(dart.fnType(AppViewOfMaterialTabComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialTabComponent = () => (ComponentFactoryOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_tab__material_tab.MaterialTabComponent)))();
  let VoidToMaterialTabComponent = () => (VoidToMaterialTabComponent = dart.constFn(dart.fnType(material_tab__material_tab.MaterialTabComponent, [])))();
  let ComponentRefOfMaterialTabComponent = () => (ComponentRefOfMaterialTabComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent)))();
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponent*/get styles$MaterialTabComponent() {
      return [material_tab__material_tab$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = dart.privateName(material_tab__material_tab$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_tab__material_tab$46template, "_NgIf_0_9");
  const _expr_1 = dart.privateName(material_tab__material_tab$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_tab__material_tab$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_tab__material_tab$46template, "_expr_3");
  material_tab__material_tab$46template.ViewMaterialTabComponent0 = class ViewMaterialTabComponent0 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.active;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.active;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tab", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.panelId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
    initComponentStyles() {
      let styles = material_tab__material_tab$46template.ViewMaterialTabComponent0._componentStyles;
      if (styles == null) {
        material_tab__material_tab$46template.ViewMaterialTabComponent0._componentStyles = styles = material_tab__material_tab$46template.ViewMaterialTabComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_tab__material_tab$46template.styles$MaterialTabComponent, material_tab__material_tab$46template.ViewMaterialTabComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab__material_tab$46template.ViewMaterialTabComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tab"));
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", material_tab__material_tab.MaterialTabComponent.hostRole);
  }).prototype = material_tab__material_tab$46template.ViewMaterialTabComponent0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template.ViewMaterialTabComponent0);
  dart.setMethodSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template.ViewMaterialTabComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab__material_tab$46template.ViewMaterialTabComponent0, {
    /*material_tab__material_tab$46template.ViewMaterialTabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template._MaterialTabComponentNgFactory*/get _MaterialTabComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialTabComponent()).new("material-tab", dart.fn(material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0, AppViewAndintToAppViewOfMaterialTabComponent())));
    }
  });
  dart.copyProperties(material_tab__material_tab$46template, {
    get MaterialTabComponentNgFactory() {
      return material_tab__material_tab$46template._MaterialTabComponentNgFactory;
    }
  });
  material_tab__material_tab$46template._ViewMaterialTabComponent1 = class _ViewMaterialTabComponent1 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "tab-content");
      this.addShimC(html.HtmlElement._check(_el_0));
      this.project(_el_0, 0);
      this.init1(_el_0);
    }
  };
  (material_tab__material_tab$46template._ViewMaterialTabComponent1.new = function(parentView, parentIndex) {
    material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponent1.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponent1);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponent1, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), [])
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponent1 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template.styles$MaterialTabComponentHost*/get styles$MaterialTabComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_tab__material_tab$46template, "_compView_0");
  const _MaterialTabComponent_0_5 = dart.privateName(material_tab__material_tab$46template, "_MaterialTabComponent_0_5");
  material_tab__material_tab$46template._ViewMaterialTabComponentHost0 = class _ViewMaterialTabComponentHost0 extends src__core__linker__app_view.AppView$(material_tab__material_tab.MaterialTabComponent) {
    build() {
      this[_compView_0] = new material_tab__material_tab$46template.ViewMaterialTabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_tab__material_tab.MaterialTabComponent, dart.wrapType(material_tab__material_tab.MaterialTabComponent), dart.fn(() => new material_tab__material_tab.MaterialTabComponent.new(this.rootEl, utils__id_generator__id_generator.IdGenerator._check(this.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex))), VoidToMaterialTabComponent())) : new material_tab__material_tab.MaterialTabComponent.new(this.rootEl, utils__id_generator__id_generator.IdGenerator._check(this.injectorGetOptional(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTabComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTabComponent()).new(0, this, this.rootEl, this[_MaterialTabComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_tab__material_tab.Tab) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialTabComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabComponent_0_5] = null;
    material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_tab__material_tab$46template._ViewMaterialTabComponentHost0.prototype;
  dart.addTypeTests(material_tab__material_tab$46template._ViewMaterialTabComponentHost0);
  dart.setMethodSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_tab__material_tab.MaterialTabComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_tab__material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getFields(material_tab__material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_tab__material_tab$46template.ViewMaterialTabComponent0),
    [_MaterialTabComponent_0_5]: dart.fieldType(material_tab__material_tab.MaterialTabComponent)
  }));
  material_tab__material_tab$46template.viewFactory_MaterialTabComponentHost0 = function(parentView, parentIndex) {
    return new material_tab__material_tab$46template._ViewMaterialTabComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_tab__material_tab$46template, {
    /*material_tab__material_tab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_tab__material_tab$46template.initReflector = function() {
    if (dart.test(material_tab__material_tab$46template._visited)) {
      return;
    }
    material_tab__material_tab$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_tab__material_tab.MaterialTabComponent), material_tab__material_tab$46template.MaterialTabComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.template.ddc", {
    "package:angular_components/material_tab/material_tab.template.dart": material_tab__material_tab$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.template.dart"],"names":[],"mappings":"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","file":"material_tab.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab$46template: material_tab__material_tab$46template
  };
});

//# sourceMappingURL=material_tab.template.ddc.js.map
