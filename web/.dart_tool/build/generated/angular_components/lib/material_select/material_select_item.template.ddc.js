define(['dart_sdk', 'packages/angular_components/material_select/material_select_item.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_select_item$46scss$46css, modules, change_detection, material_select_item, material_checkbox, material_checkbox$, has_disabled, glyph, glyph$, text_binding, interpolate, dynamic_component, dynamic_component$, material_dropdown_base, activation_handler, selection_container, has_renderer, angular, meta, button_decorator, has_disabled$, activation_handler$, material_dropdown_base$, selection_container$, selection_model, has_factory, properties, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select_item$46scss$46css$46shim = material_select_item$46scss$46css.material_select__material_select_item$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_select_item = material_select_item.material_select__material_select_item;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const glyph__glyph$46template = glyph.glyph__glyph$46template;
  const glyph__glyph = glyph$.glyph__glyph;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const dynamic_component__dynamic_component = dynamic_component$.dynamic_component__dynamic_component;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const button_decorator__button_decorator$46template = button_decorator.button_decorator__button_decorator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_select__activation_handler$46template = activation_handler$.material_select__activation_handler$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const material_select__material_select_item$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $append = dartx.append;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewOfObject = () => (AppViewOfObject = dart.constFn(src__core__linker__app_view.AppView$(core.Object)))();
  let AppViewOfObjectAndintToAppViewOfvoid = () => (AppViewOfObjectAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [AppViewOfObject(), core.int])))();
  let AppViewAndintToAppViewOfMaterialSelectItemComponentOfT = () => (AppViewAndintToAppViewOfMaterialSelectItemComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialSelectItemComponent = () => (ComponentFactoryOfMaterialSelectItemComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select_item.MaterialSelectItemComponent)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToDynamicComponent = () => (VoidToDynamicComponent = dart.constFn(dart.fnType(dynamic_component__dynamic_component.DynamicComponent, [])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  dart.defineLazy(material_select__material_select_item$46template, {
    /*material_select__material_select_item$46template.styles$MaterialSelectItemComponent*/get styles$MaterialSelectItemComponent() {
      return [material_select__material_select_item$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = dart.privateName(material_select__material_select_item$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_select__material_select_item$46template, "_NgIf_0_9");
  const _appEl_2 = dart.privateName(material_select__material_select_item$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_select__material_select_item$46template, "_NgIf_2_9");
  const _appEl_4 = dart.privateName(material_select__material_select_item$46template, "_appEl_4");
  const _NgIf_4_9 = dart.privateName(material_select__material_select_item$46template, "_NgIf_4_9");
  const _appEl_6 = dart.privateName(material_select__material_select_item$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_select__material_select_item$46template, "_NgIf_6_9");
  const _expr_4 = dart.privateName(material_select__material_select_item$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_select__material_select_item$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_select__material_select_item$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_select__material_select_item$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_select__material_select_item$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_select__material_select_item$46template, "_expr_9");
  const _expr_10 = dart.privateName(material_select__material_select_item$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_select__material_select_item$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_select__material_select_item$46template, "_expr_12");
  const _is_ViewMaterialSelectItemComponent0_default = Symbol('_is_ViewMaterialSelectItemComponent0_default');
  material_select__material_select_item$46template.ViewMaterialSelectItemComponent0$ = dart.generic(T => {
    class ViewMaterialSelectItemComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_item.dart" : null;
      }
      build() {
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = src__runtime__dom_helpers.appendText(parentRenderNode, " ");
        let _anchor_2 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _text_3 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n \n");
        let _anchor_4 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent6(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        let _text_5 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n ");
        let _anchor_6 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
        let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent7(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        this.project(parentRenderNode, 0);
        this.init0();
        _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
        _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.supportsMultiSelect) && dart.test(_ctx.isSelected);
        this[_NgIf_2_9].ngIf = dart.test(_ctx.supportsMultiSelect) && !dart.test(_ctx.hideCheckbox);
        this[_NgIf_4_9].ngIf = _ctx.valueHasLabel;
        this[_NgIf_6_9].ngIf = _ctx.componentType != null || _ctx.componentFactory != null;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        let currVal_4 = _ctx.tabIndex;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.ariaRole;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", currVal_5);
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.disabledStr;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_6);
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_7);
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.isHidden;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "hidden", currVal_9);
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.supportsMultiSelect;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "multiselect", currVal_10);
          this[_expr_10] = currVal_10;
        }
        let currVal_11 = _ctx.isAriaChecked;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-checked", currVal_11 == null ? null : dart.toString(currVal_11));
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = _ctx.isSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "selected", currVal_12);
          this[_expr_12] = currVal_12;
        }
      }
      initComponentStyles() {
        let styles = material_select__material_select_item$46template.ViewMaterialSelectItemComponent0._componentStyles;
        if (styles == null) {
          material_select__material_select_item$46template.ViewMaterialSelectItemComponent0._componentStyles = styles = material_select__material_select_item$46template.ViewMaterialSelectItemComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_select__material_select_item$46template.styles$MaterialSelectItemComponent, material_select__material_select_item$46template.ViewMaterialSelectItemComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectItemComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_expr_11] = null;
      this[_expr_12] = null;
      ViewMaterialSelectItemComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select-item"));
      this.updateChildClassNonHtml(this.rootEl, material_select__material_select_item.MaterialSelectItemComponent.hostClass);
    }).prototype = ViewMaterialSelectItemComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectItemComponent0);
    ViewMaterialSelectItemComponent0.prototype[_is_ViewMaterialSelectItemComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialSelectItemComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectItemComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ViewMaterialSelectItemComponent0, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(ViewMaterialSelectItemComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectItemComponent0.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(core.bool),
      [_expr_8]: dart.fieldType(core.bool),
      [_expr_9]: dart.fieldType(core.bool),
      [_expr_10]: dart.fieldType(core.bool),
      [_expr_11]: dart.fieldType(dart.dynamic),
      [_expr_12]: dart.fieldType(core.bool)
    }));
    return ViewMaterialSelectItemComponent0;
  });
  material_select__material_select_item$46template.ViewMaterialSelectItemComponent0 = material_select__material_select_item$46template.ViewMaterialSelectItemComponent0$();
  dart.defineLazy(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0, {
    /*material_select__material_select_item$46template.ViewMaterialSelectItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0, _is_ViewMaterialSelectItemComponent0_default);
  dart.defineLazy(material_select__material_select_item$46template, {
    /*material_select__material_select_item$46template._MaterialSelectItemComponentNgFactory*/get _MaterialSelectItemComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectItemComponent()).new("material-select-item", dart.gbind(dart.fn(material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponentHost0, AppViewAndintToAppViewOfMaterialSelectItemComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_select__material_select_item$46template, {
    get MaterialSelectItemComponentNgFactory() {
      return material_select__material_select_item$46template._MaterialSelectItemComponentNgFactory;
    }
  });
  const _is__ViewMaterialSelectItemComponent1_default = Symbol('_is__ViewMaterialSelectItemComponent1_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent1$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(html.HtmlElement._check(_el_0), "selected-accent mixin");
        this.addShimC(html.HtmlElement._check(_el_0));
        this.init1(_el_0);
      }
    }
    (_ViewMaterialSelectItemComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialSelectItemComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent1);
    _ViewMaterialSelectItemComponent1.prototype[_is__ViewMaterialSelectItemComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent1, "package:angular_components/material_select/material_select_item.template.dart");
    return _ViewMaterialSelectItemComponent1;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent1 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent1$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent1, _is__ViewMaterialSelectItemComponent1_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent1 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent1$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialSelectItemComponent2_default = Symbol('_is__ViewMaterialSelectItemComponent2_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent2$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = src__runtime__dom_helpers.createText("  ");
        let _anchor_2 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent4(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.init(JSArrayOfObject().of([this[_appEl_0], _text_1, this[_appEl_2]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.useCheckMarks);
        this[_NgIf_2_9].ngIf = _ctx.useCheckMarks;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectItemComponent2.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      _ViewMaterialSelectItemComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent2);
    _ViewMaterialSelectItemComponent2.prototype[_is__ViewMaterialSelectItemComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent2, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent2.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialSelectItemComponent2;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent2 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent2$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent2, _is__ViewMaterialSelectItemComponent2_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent2 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent2$(T)).new(parentView, parentIndex);
  };
  const _compView_0 = dart.privateName(material_select__material_select_item$46template, "_compView_0");
  const _MaterialCheckboxComponent_0_5 = dart.privateName(material_select__material_select_item$46template, "_MaterialCheckboxComponent_0_5");
  const _expr_0 = dart.privateName(material_select__material_select_item$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_select__material_select_item$46template, "_expr_1");
  let const$;
  const _is__ViewMaterialSelectItemComponent3_default = Symbol('_is__ViewMaterialSelectItemComponent3_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent3$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        _el_0.tabIndex = -1;
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0], null, "-1", null);
        this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic))]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        let currVal_0 = _ctx.disabled;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelected;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectItemComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectItemComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent3);
    _ViewMaterialSelectItemComponent3.prototype[_is__ViewMaterialSelectItemComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent3, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent3.__proto__),
      [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(core.bool)
    }));
    return _ViewMaterialSelectItemComponent3;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent3 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent3$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent3, _is__ViewMaterialSelectItemComponent3_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent3 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent3$(T)).new(parentView, parentIndex);
  };
  const _appEl_1 = dart.privateName(material_select__material_select_item$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_select__material_select_item$46template, "_NgIf_1_9");
  const _is__ViewMaterialSelectItemComponent4_default = Symbol('_is__ViewMaterialSelectItemComponent4_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent4$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "check-container");
        this.addShimE(_el_0);
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent5(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9].ngIf = _ctx.isSelected;
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectItemComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      _ViewMaterialSelectItemComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent4);
    _ViewMaterialSelectItemComponent4.prototype[_is__ViewMaterialSelectItemComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent4, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent4.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
    }));
    return _ViewMaterialSelectItemComponent4;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent4 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent4$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent4, _is__ViewMaterialSelectItemComponent4_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent4 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent4$(T)).new(parentView, parentIndex);
  };
  const _GlyphComponent_0_5 = dart.privateName(material_select__material_select_item$46template, "_GlyphComponent_0_5");
  const _is__ViewMaterialSelectItemComponent5_default = Symbol('_is__ViewMaterialSelectItemComponent5_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent5$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        this[_compView_0] = new glyph__glyph$46template.ViewGlyphComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        src__runtime__dom_helpers.setAttribute(_el_0, "baseline", "");
        this.updateChildClassNonHtml(_el_0, "check");
        src__runtime__dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_GlyphComponent_0_5] = new glyph__glyph.GlyphComponent.new(_el_0);
        this[_compView_0].create0(this[_GlyphComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_GlyphComponent_0_5].icon = "check";
          changed = true;
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
    (_ViewMaterialSelectItemComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_GlyphComponent_0_5] = null;
      _ViewMaterialSelectItemComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent5);
    _ViewMaterialSelectItemComponent5.prototype[_is__ViewMaterialSelectItemComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent5, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent5.__proto__),
      [_compView_0]: dart.fieldType(glyph__glyph$46template.ViewGlyphComponent0),
      [_GlyphComponent_0_5]: dart.fieldType(glyph__glyph.GlyphComponent)
    }));
    return _ViewMaterialSelectItemComponent5;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent5 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent5$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent5, _is__ViewMaterialSelectItemComponent5_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent5 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent5$(T)).new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(material_select__material_select_item$46template, "_textBinding_1");
  const _is__ViewMaterialSelectItemComponent6_default = Symbol('_is__ViewMaterialSelectItemComponent6_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent6$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent6 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(html.HtmlElement._check(_el_0), "label");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(_ctx.valueLabel));
      }
    }
    (_ViewMaterialSelectItemComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialSelectItemComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent6.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent6);
    _ViewMaterialSelectItemComponent6.prototype[_is__ViewMaterialSelectItemComponent6_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent6, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent6.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent6, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialSelectItemComponent6;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent6 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent6$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent6, _is__ViewMaterialSelectItemComponent6_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent6 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent6$(T)).new(parentView, parentIndex);
  };
  const _DynamicComponent_0_8 = dart.privateName(material_select__material_select_item$46template, "_DynamicComponent_0_8");
  const _expr_2 = dart.privateName(material_select__material_select_item$46template, "_expr_2");
  const _is__ViewMaterialSelectItemComponent7_default = Symbol('_is__ViewMaterialSelectItemComponent7_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent7$ = dart.generic(T => {
    class _ViewMaterialSelectItemComponent7 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new dynamic_component__dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "dynamic-item");
        this.addShimC(_el_0);
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(dynamic_component__dynamic_component.DynamicComponent, dart.wrapType(dynamic_component__dynamic_component.DynamicComponent), dart.fn(() => new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponent())) : new dynamic_component__dynamic_component.DynamicComponent.new(src__core__linker__dynamic_component_loader.SlowComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
        this[_compView_0].create0(this[_DynamicComponent_0_8]);
        let subscription_0 = this[_DynamicComponent_0_8].onLoad.listen(this.eventHandler1(src__core__linker__component_factory.ComponentRef, src__core__linker__component_factory.ComponentRef, dart.bind(_ctx, 'onLoadCustomComponent')));
        this.init(JSArrayOfObject().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        changed = false;
        let currVal_0 = _ctx.componentType;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentFactory;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.value;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectItemComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialSelectItemComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectItemComponent7.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponent7);
    _ViewMaterialSelectItemComponent7.prototype[_is__ViewMaterialSelectItemComponent7_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponent7.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponent7, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponent7.__proto__),
      [_compView_0]: dart.fieldType(dynamic_component__dynamic_component$46template.ViewDynamicComponent0),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_DynamicComponent_0_8]: dart.fieldType(dynamic_component__dynamic_component.DynamicComponent),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectItemComponent7;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponent7 = material_select__material_select_item$46template._ViewMaterialSelectItemComponent7$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponent7, _is__ViewMaterialSelectItemComponent7_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponent7 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponent7$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select_item$46template, {
    /*material_select__material_select_item$46template.styles$MaterialSelectItemComponentHost*/get styles$MaterialSelectItemComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectItemComponent_0_5 = dart.privateName(material_select__material_select_item$46template, "_MaterialSelectItemComponent_0_5");
  const _is__ViewMaterialSelectItemComponentHost0_default = Symbol('_is__ViewMaterialSelectItemComponentHost0_default');
  material_select__material_select_item$46template._ViewMaterialSelectItemComponentHost0$ = dart.generic(T => {
    let ViewMaterialSelectItemComponent0OfT = () => (ViewMaterialSelectItemComponent0OfT = dart.constFn(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0$(T)))();
    let MaterialSelectItemComponentOfT = () => (MaterialSelectItemComponentOfT = dart.constFn(material_select__material_select_item.MaterialSelectItemComponent$(T)))();
    let VoidToMaterialSelectItemComponentOfT = () => (VoidToMaterialSelectItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectItemComponentOfT(), [])))();
    let ComponentRefOfMaterialSelectItemComponentOfT = () => (ComponentRefOfMaterialSelectItemComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialSelectItemComponentOfT())))();
    class _ViewMaterialSelectItemComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select_item.MaterialSelectItemComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectItemComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectItemComponentOfT(), dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new (MaterialSelectItemComponentOfT()).new(this.rootEl, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentOfT())) : new (MaterialSelectItemComponentOfT()).new(this.rootEl, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.viewData.parentIndex)), this[_compView_0], null);
        this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialSelectItemComponentOfT()).new(0, this, this.rootEl, this[_MaterialSelectItemComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 0 === nodeIndex) {
          return this[_MaterialSelectItemComponent_0_5];
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
        this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectItemComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectItemComponent_0_5] = null;
      _ViewMaterialSelectItemComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialSelectItemComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectItemComponentHost0);
    _ViewMaterialSelectItemComponentHost0.prototype[_is__ViewMaterialSelectItemComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectItemComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectItemComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select_item.MaterialSelectItemComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ViewMaterialSelectItemComponentHost0, "package:angular_components/material_select/material_select_item.template.dart");
    dart.setFieldSignature(_ViewMaterialSelectItemComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectItemComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialSelectItemComponent0OfT()),
      [_MaterialSelectItemComponent_0_5]: dart.fieldType(MaterialSelectItemComponentOfT())
    }));
    return _ViewMaterialSelectItemComponentHost0;
  });
  material_select__material_select_item$46template._ViewMaterialSelectItemComponentHost0 = material_select__material_select_item$46template._ViewMaterialSelectItemComponentHost0$();
  dart.addTypeTests(material_select__material_select_item$46template._ViewMaterialSelectItemComponentHost0, _is__ViewMaterialSelectItemComponentHost0_default);
  material_select__material_select_item$46template.viewFactory_MaterialSelectItemComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select_item$46template._ViewMaterialSelectItemComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select_item$46template, {
    /*material_select__material_select_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select_item$46template.initReflector = function() {
    if (dart.test(material_select__material_select_item$46template._visited)) {
      return;
    }
    material_select__material_select_item$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), material_select__material_select_item$46template.MaterialSelectItemComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    glyph__glyph$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_checkbox__material_checkbox$46template.initReflector();
    material_select__activation_handler$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select_item.template.ddc", {
    "package:angular_components/material_select/material_select_item.template.dart": material_select__material_select_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_item.template.dart"],"names":[],"mappings":"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","file":"material_select_item.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_item$46template: material_select__material_select_item$46template
  };
});

//# sourceMappingURL=material_select_item.template.ddc.js.map
