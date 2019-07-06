define(['dart_sdk', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template'], function(dart_sdk, reorder_list$46scss$46css, modules, change_detection, reorder_list, directive_change_detector, angular, reorder_events, disposer, keyboard) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reorder_list__reorder_list$46scss$46css$46shim = reorder_list$46scss$46css.reorder_list__reorder_list$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const reorder_list__reorder_list = reorder_list.reorder_list__reorder_list;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = angular.angular$46template;
  const reorder_list__reorder_events$46template = reorder_events.reorder_list__reorder_events$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__keyboard__keyboard$46template = keyboard.utils__keyboard__keyboard$46template;
  const reorder_list__reorder_list$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfReorderListComponent = () => (AppViewOfReorderListComponent = dart.constFn(src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent)))();
  let AppViewAndintToAppViewOfReorderListComponent = () => (AppViewAndintToAppViewOfReorderListComponent = dart.constFn(dart.fnType(AppViewOfReorderListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfReorderListComponent = () => (ComponentFactoryOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(reorder_list__reorder_list.ReorderListComponent)))();
  let VoidToReorderListComponent = () => (VoidToReorderListComponent = dart.constFn(dart.fnType(reorder_list__reorder_list.ReorderListComponent, [])))();
  let JSArrayOfReorderItemDirective = () => (JSArrayOfReorderItemDirective = dart.constFn(_interceptors.JSArray$(reorder_list__reorder_list.ReorderItemDirective)))();
  let ComponentRefOfReorderListComponent = () => (ComponentRefOfReorderListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent)))();
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return [reorder_list__reorder_list$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = dart.privateName(reorder_list__reorder_list$46template, "_expr_0");
  const _expr_1 = dart.privateName(reorder_list__reorder_list$46template, "_expr_1");
  const _expr_2 = dart.privateName(reorder_list__reorder_list$46template, "_expr_2");
  const _el_1 = dart.privateName(reorder_list__reorder_list$46template, "_el_1");
  reorder_list__reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/reorder_list/reorder_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_1] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "placeholder");
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 1);
      _ctx.placeholder = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.verticalItems;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.multiSelect;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "multiselect", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = reorder_list__reorder_list$46template.ViewReorderListComponent0._componentStyles;
      if (styles == null) {
        reorder_list__reorder_list$46template.ViewReorderListComponent0._componentStyles = styles = reorder_list__reorder_list$46template.ViewReorderListComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(reorder_list__reorder_list$46template.styles$ReorderListComponent, reorder_list__reorder_list$46template.ViewReorderListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (reorder_list__reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("reorder-list"));
    this.updateChildClassNonHtml(this.rootEl, reorder_list__reorder_list.ReorderListComponent.hostClass);
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", reorder_list__reorder_list.ReorderListComponent.hostRole);
  }).prototype = reorder_list__reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template.ViewReorderListComponent0);
  dart.setMethodSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(reorder_list__reorder_list$46template.ViewReorderListComponent0, "package:angular_components/reorder_list/reorder_list.template.dart");
  dart.setFieldSignature(reorder_list__reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(reorder_list__reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list__reorder_list$46template.ViewReorderListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template._ReorderListComponentNgFactory*/get _ReorderListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfReorderListComponent()).new("reorder-list", dart.fn(reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0, AppViewAndintToAppViewOfReorderListComponent())));
    }
  });
  dart.copyProperties(reorder_list__reorder_list$46template, {
    get ReorderListComponentNgFactory() {
      return reorder_list__reorder_list$46template._ReorderListComponentNgFactory;
    }
  });
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(reorder_list__reorder_list$46template, "_compView_0");
  const _ReorderListComponent_0_5 = dart.privateName(reorder_list__reorder_list$46template, "_ReorderListComponent_0_5");
  reorder_list__reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends src__core__linker__app_view.AppView$(reorder_list__reorder_list.ReorderListComponent) {
    build() {
      this[_compView_0] = new reorder_list__reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ReorderListComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(reorder_list__reorder_list.ReorderListComponent, dart.wrapType(reorder_list__reorder_list.ReorderListComponent), dart.fn(() => new reorder_list__reorder_list.ReorderListComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToReorderListComponent())) : new reorder_list__reorder_list.ReorderListComponent.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_ReorderListComponent_0_5].items = JSArrayOfReorderItemDirective().of([]);
      this[_compView_0].create(this[_ReorderListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfReorderListComponent()).new(0, this, this.rootEl, this[_ReorderListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(reorder_list__reorder_list.ReorderListComponent) && 0 === nodeIndex) {
        return this[_ReorderListComponent_0_5];
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
      this[_ReorderListComponent_0_5].ngOnDestroy();
    }
  };
  (reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ReorderListComponent_0_5] = null;
    reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = reorder_list__reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(reorder_list__reorder_list.ReorderListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, "package:angular_components/reorder_list/reorder_list.template.dart");
  dart.setFieldSignature(reorder_list__reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(reorder_list__reorder_list$46template.ViewReorderListComponent0),
    [_ReorderListComponent_0_5]: dart.fieldType(reorder_list__reorder_list.ReorderListComponent)
  }));
  reorder_list__reorder_list$46template.viewFactory_ReorderListComponentHost0 = function(parentView, parentIndex) {
    return new reorder_list__reorder_list$46template._ViewReorderListComponentHost0.new(parentView, parentIndex);
  };
  reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd = class ReorderItemDirectiveNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostDraggable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(el, "draggable", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.__proto__.new.call(this);
  }).prototype = reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.prototype;
  dart.addTypeTests(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd);
  const instance$ = Symbol("ReorderItemDirectiveNgCd.instance");
  dart.setMethodSignature(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd, "package:angular_components/reorder_list/reorder_list.template.dart");
  dart.setFieldSignature(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(reorder_list__reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(reorder_list__reorder_list.ReorderItemDirective),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(reorder_list__reorder_list$46template, {
    /*reorder_list__reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  reorder_list__reorder_list$46template.initReflector = function() {
    if (dart.test(reorder_list__reorder_list$46template._visited)) {
      return;
    }
    reorder_list__reorder_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(reorder_list__reorder_list.ReorderListComponent), reorder_list__reorder_list$46template.ReorderListComponentNgFactory);
    angular$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__keyboard__keyboard$46template.initReflector();
    reorder_list__reorder_events$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template.ddc", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list__reorder_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":"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","file":"reorder_list.template.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list__reorder_list$46template
  };
});

//# sourceMappingURL=reorder_list.template.ddc.js.map
