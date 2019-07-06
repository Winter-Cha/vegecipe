define(['dart_sdk', 'packages/angular_components/material_list/material_list_item.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_list_item$46scss$46css, modules, change_detection, material_list_item, material_dropdown_base, has_disabled, angular, button_decorator, has_disabled$, material_dropdown_base$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_list__material_list_item$46scss$46css$46shim = material_list_item$46scss$46css.material_list__material_list_item$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_list__material_list_item = material_list_item.material_list__material_list_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_list__material_list_item$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfMaterialListItemComponent = () => (AppViewOfMaterialListItemComponent = dart.constFn(src__core__linker__app_view.AppView$(material_list__material_list_item.MaterialListItemComponent)))();
  let AppViewAndintToAppViewOfMaterialListItemComponent = () => (AppViewAndintToAppViewOfMaterialListItemComponent = dart.constFn(dart.fnType(AppViewOfMaterialListItemComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialListItemComponent = () => (ComponentFactoryOfMaterialListItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_list__material_list_item.MaterialListItemComponent)))();
  let VoidToMaterialListItemComponent = () => (VoidToMaterialListItemComponent = dart.constFn(dart.fnType(material_list__material_list_item.MaterialListItemComponent, [])))();
  let ComponentRefOfMaterialListItemComponent = () => (ComponentRefOfMaterialListItemComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_list__material_list_item.MaterialListItemComponent)))();
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template.styles$MaterialListItemComponent*/get styles$MaterialListItemComponent() {
      return [material_list__material_list_item$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = dart.privateName(material_list__material_list_item$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_list__material_list_item$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_list__material_list_item$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_list__material_list_item$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_list__material_list_item$46template, "_expr_4");
  material_list__material_list_item$46template.ViewMaterialListItemComponent0 = class ViewMaterialListItemComponent0 extends src__core__linker__app_view.AppView$(material_list__material_list_item.MaterialListItemComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list_item.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
    initComponentStyles() {
      let styles = material_list__material_list_item$46template.ViewMaterialListItemComponent0._componentStyles;
      if (styles == null) {
        material_list__material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = styles = material_list__material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_list__material_list_item$46template.styles$MaterialListItemComponent, material_list__material_list_item$46template.ViewMaterialListItemComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_list__material_list_item$46template.ViewMaterialListItemComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-list-item"));
    this.updateChildClassNonHtml(this.rootEl, material_list__material_list_item.MaterialListItemComponent.hostClass);
  }).prototype = material_list__material_list_item$46template.ViewMaterialListItemComponent0.prototype;
  dart.addTypeTests(material_list__material_list_item$46template.ViewMaterialListItemComponent0);
  dart.setMethodSignature(material_list__material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getMethods(material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list_item.MaterialListItemComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_list__material_list_item$46template.ViewMaterialListItemComponent0, "package:angular_components/material_list/material_list_item.template.dart");
  dart.setFieldSignature(material_list__material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getFields(material_list__material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_list__material_list_item$46template.ViewMaterialListItemComponent0, {
    /*material_list__material_list_item$46template.ViewMaterialListItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template._MaterialListItemComponentNgFactory*/get _MaterialListItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialListItemComponent()).new("material-list-item", dart.fn(material_list__material_list_item$46template.viewFactory_MaterialListItemComponentHost0, AppViewAndintToAppViewOfMaterialListItemComponent())));
    }
  });
  dart.copyProperties(material_list__material_list_item$46template, {
    get MaterialListItemComponentNgFactory() {
      return material_list__material_list_item$46template._MaterialListItemComponentNgFactory;
    }
  });
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template.styles$MaterialListItemComponentHost*/get styles$MaterialListItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_list__material_list_item$46template, "_compView_0");
  const _MaterialListItemComponent_0_5 = dart.privateName(material_list__material_list_item$46template, "_MaterialListItemComponent_0_5");
  material_list__material_list_item$46template._ViewMaterialListItemComponentHost0 = class _ViewMaterialListItemComponentHost0 extends src__core__linker__app_view.AppView$(material_list__material_list_item.MaterialListItemComponent) {
    build() {
      this[_compView_0] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_list__material_list_item.MaterialListItemComponent, dart.wrapType(material_list__material_list_item.MaterialListItemComponent), dart.fn(() => new material_list__material_list_item.MaterialListItemComponent.new(this.rootEl, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), null, null), VoidToMaterialListItemComponent())) : new material_list__material_list_item.MaterialListItemComponent.new(this.rootEl, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialListItemComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialListItemComponent()).new(0, this, this.rootEl, this[_MaterialListItemComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialListItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListItemComponent_0_5] = null;
    material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.prototype;
  dart.addTypeTests(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.setMethodSignature(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getMethods(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list_item.MaterialListItemComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0, "package:angular_components/material_list/material_list_item.template.dart");
  dart.setFieldSignature(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getFields(material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent)
  }));
  material_list__material_list_item$46template.viewFactory_MaterialListItemComponentHost0 = function(parentView, parentIndex) {
    return new material_list__material_list_item$46template._ViewMaterialListItemComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_list__material_list_item$46template, {
    /*material_list__material_list_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_list__material_list_item$46template.initReflector = function() {
    if (dart.test(material_list__material_list_item$46template._visited)) {
      return;
    }
    material_list__material_list_item$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_list__material_list_item.MaterialListItemComponent), material_list__material_list_item$46template.MaterialListItemComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.template.ddc", {
    "package:angular_components/material_list/material_list_item.template.dart": material_list__material_list_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.template.dart"],"names":[],"mappings":"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","file":"material_list_item.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item$46template: material_list__material_list_item$46template
  };
});

//# sourceMappingURL=material_list_item.template.ddc.js.map
