define(['dart_sdk', 'packages/angular_components/material_chips/material_chips.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_chips/material_chip.template', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_chips$46scss$46css, modules, change_detection, material_chips, material_chip, material_chip$, has_renderer, angular, selection_model, has_renderer$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_chips__material_chips$46scss$46css$46shim = material_chips$46scss$46css.material_chips__material_chips$46scss$46css$46shim;
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
  const src__di__reflector = change_detection.src__di__reflector;
  const material_chips__material_chips = material_chips.material_chips__material_chips;
  const material_chips__material_chip$46template = material_chip.material_chips__material_chip$46template;
  const material_chips__material_chip = material_chip$.material_chips__material_chip;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_chips__material_chips$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $_get = dartx._get;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewOfObject = () => (AppViewOfObject = dart.constFn(src__core__linker__app_view.AppView$(core.Object)))();
  let AppViewOfObjectAndintToAppViewOfvoid = () => (AppViewOfObjectAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [AppViewOfObject(), core.int])))();
  let AppViewAndintToAppViewOfMaterialChipsComponentOfT = () => (AppViewAndintToAppViewOfMaterialChipsComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialChipsComponent = () => (ComponentFactoryOfMaterialChipsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_chips__material_chips.MaterialChipsComponent)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponent*/get styles$MaterialChipsComponent() {
      return [material_chips__material_chips$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = dart.privateName(material_chips__material_chips$46template, "_appEl_0");
  const _NgFor_0_9 = dart.privateName(material_chips__material_chips$46template, "_NgFor_0_9");
  const _expr_0 = dart.privateName(material_chips__material_chips$46template, "_expr_0");
  const _is_ViewMaterialChipsComponent0_default = Symbol('_is_ViewMaterialChipsComponent0_default');
  material_chips__material_chips$46template.ViewMaterialChipsComponent0$ = dart.generic(T => {
    class ViewMaterialChipsComponent0 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chips.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.project(parentRenderNode, 0);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.selectedItems;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
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
        let styles = material_chips__material_chips$46template.ViewMaterialChipsComponent0._componentStyles;
        if (styles == null) {
          material_chips__material_chips$46template.ViewMaterialChipsComponent0._componentStyles = styles = material_chips__material_chips$46template.ViewMaterialChipsComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_chips__material_chips$46template.styles$MaterialChipsComponent, material_chips__material_chips$46template.ViewMaterialChipsComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialChipsComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      ViewMaterialChipsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-chips"));
    }).prototype = ViewMaterialChipsComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipsComponent0);
    ViewMaterialChipsComponent0.prototype[_is_ViewMaterialChipsComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialChipsComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialChipsComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialChipsComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipsComponent0.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialChipsComponent0;
  });
  material_chips__material_chips$46template.ViewMaterialChipsComponent0 = material_chips__material_chips$46template.ViewMaterialChipsComponent0$();
  dart.defineLazy(material_chips__material_chips$46template.ViewMaterialChipsComponent0, {
    /*material_chips__material_chips$46template.ViewMaterialChipsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_chips__material_chips$46template.ViewMaterialChipsComponent0, _is_ViewMaterialChipsComponent0_default);
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template._MaterialChipsComponentNgFactory*/get _MaterialChipsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialChipsComponent()).new("material-chips", dart.gbind(dart.fn(material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0, AppViewAndintToAppViewOfMaterialChipsComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_chips__material_chips$46template, {
    get MaterialChipsComponentNgFactory() {
      return material_chips__material_chips$46template._MaterialChipsComponentNgFactory;
    }
  });
  const _compView_0 = dart.privateName(material_chips__material_chips$46template, "_compView_0");
  const _MaterialChipComponent_0_5 = dart.privateName(material_chips__material_chips$46template, "_MaterialChipComponent_0_5");
  const _expr_1 = dart.privateName(material_chips__material_chips$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_chips__material_chips$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_chips__material_chips$46template, "_expr_3");
  let const$;
  let const$0;
  const _is__ViewMaterialChipsComponent1_default = Symbol('_is__ViewMaterialChipsComponent1_default');
  material_chips__material_chips$46template._ViewMaterialChipsComponent1$ = dart.generic(T => {
    let ViewMaterialChipComponent0OfT = () => (ViewMaterialChipComponent0OfT = dart.constFn(material_chips__material_chip$46template.ViewMaterialChipComponent0$(T)))();
    let MaterialChipComponentOfT = () => (MaterialChipComponentOfT = dart.constFn(material_chips__material_chip.MaterialChipComponent$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialChipsComponent1 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialChipComponent0OfT()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_MaterialChipComponent_0_5] = new (MaterialChipComponentOfT()).new(_el_0);
        this[_compView_0].create(this[_MaterialChipComponent_0_5], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic)), const$0 || (const$0 = dart.constList([], dart.dynamic))]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
          return this[_MaterialChipComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_chip = src__runtime__optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.selectionModel;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialChipComponent_0_5].selectionModel = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.removable;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialChipComponent_0_5].removable = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialChipComponent_0_5].itemRenderer = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_chip;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialChipComponent_0_5].value = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialChipsComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      _ViewMaterialChipsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialChipsComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponent1);
    _ViewMaterialChipsComponent1.prototype[_is__ViewMaterialChipsComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialChipsComponent1.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialChipComponent0OfT()),
      [_MaterialChipComponent_0_5]: dart.fieldType(MaterialChipComponentOfT()),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(core.bool),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialChipsComponent1;
  });
  material_chips__material_chips$46template._ViewMaterialChipsComponent1 = material_chips__material_chips$46template._ViewMaterialChipsComponent1$();
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponent1, _is__ViewMaterialChipsComponent1_default);
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponent1 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chips$46template._ViewMaterialChipsComponent1$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template.styles$MaterialChipsComponentHost*/get styles$MaterialChipsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialChipsComponent_0_5 = dart.privateName(material_chips__material_chips$46template, "_MaterialChipsComponent_0_5");
  const _is__ViewMaterialChipsComponentHost0_default = Symbol('_is__ViewMaterialChipsComponentHost0_default');
  material_chips__material_chips$46template._ViewMaterialChipsComponentHost0$ = dart.generic(T => {
    let ViewMaterialChipsComponent0OfT = () => (ViewMaterialChipsComponent0OfT = dart.constFn(material_chips__material_chips$46template.ViewMaterialChipsComponent0$(T)))();
    let MaterialChipsComponentOfT = () => (MaterialChipsComponentOfT = dart.constFn(material_chips__material_chips.MaterialChipsComponent$(T)))();
    let ComponentRefOfMaterialChipsComponentOfT = () => (ComponentRefOfMaterialChipsComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialChipsComponentOfT())))();
    class _ViewMaterialChipsComponentHost0 extends src__core__linker__app_view.AppView$(material_chips__material_chips.MaterialChipsComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialChipsComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialChipsComponent_0_5] = new (MaterialChipsComponentOfT()).new(this[_compView_0]);
        this[_compView_0].create(this[_MaterialChipsComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialChipsComponentOfT()).new(0, this, this.rootEl, this[_MaterialChipsComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(model__ui__has_renderer.HasRenderer) && 0 === nodeIndex) {
          return this[_MaterialChipsComponent_0_5];
        }
        return notFoundResult;
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
        this[_MaterialChipsComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialChipsComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipsComponent_0_5] = null;
      _ViewMaterialChipsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialChipsComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponentHost0);
    _ViewMaterialChipsComponentHost0.prototype[_is__ViewMaterialChipsComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialChipsComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_chips__material_chips.MaterialChipsComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialChipsComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialChipsComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialChipsComponent0OfT()),
      [_MaterialChipsComponent_0_5]: dart.fieldType(MaterialChipsComponentOfT())
    }));
    return _ViewMaterialChipsComponentHost0;
  });
  material_chips__material_chips$46template._ViewMaterialChipsComponentHost0 = material_chips__material_chips$46template._ViewMaterialChipsComponentHost0$();
  dart.addTypeTests(material_chips__material_chips$46template._ViewMaterialChipsComponentHost0, _is__ViewMaterialChipsComponentHost0_default);
  material_chips__material_chips$46template.viewFactory_MaterialChipsComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_chips__material_chips$46template._ViewMaterialChipsComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_chips__material_chips$46template, {
    /*material_chips__material_chips$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_chips__material_chips$46template.initReflector = function() {
    if (dart.test(material_chips__material_chips$46template._visited)) {
      return;
    }
    material_chips__material_chips$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_chips__material_chips.MaterialChipsComponent), material_chips__material_chips$46template.MaterialChipsComponentNgFactory);
    angular$46template.initReflector();
    material_chips__material_chip$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.template.ddc", {
    "package:angular_components/material_chips/material_chips.template.dart": material_chips__material_chips$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.template.dart"],"names":[],"mappings":"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","file":"material_chips.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips$46template: material_chips__material_chips$46template
  };
});

//# sourceMappingURL=material_chips.template.ddc.js.map
