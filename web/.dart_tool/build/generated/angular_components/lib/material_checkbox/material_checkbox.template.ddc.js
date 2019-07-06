define(['dart_sdk', 'packages/angular_components/material_checkbox/material_checkbox.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, material_checkbox$46scss$46css, text_binding, modules, change_detection, material_checkbox, material_icon, material_icon$, interpolate, material_ripple, material_ripple$, has_disabled, angular, meta, focus, has_disabled$, icon, events, id_generator, angular_forms) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_checkbox__material_checkbox$46scss$46css$46shim = material_checkbox$46scss$46css.material_checkbox__material_checkbox$46scss$46css$46shim;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
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
  const src__di__reflector = change_detection.src__di__reflector;
  const material_checkbox__material_checkbox = material_checkbox.material_checkbox__material_checkbox;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const material_checkbox__material_checkbox$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $setProperty = dartx.setProperty;
  const $toString = dartx.toString;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialCheckboxComponent = () => (AppViewOfMaterialCheckboxComponent = dart.constFn(src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  let AppViewAndintToAppViewOfMaterialCheckboxComponent = () => (AppViewAndintToAppViewOfMaterialCheckboxComponent = dart.constFn(dart.fnType(AppViewOfMaterialCheckboxComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialCheckboxComponent = () => (ComponentFactoryOfMaterialCheckboxComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  let ComponentRefOfMaterialCheckboxComponent = () => (ComponentRefOfMaterialCheckboxComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent)))();
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponent*/get styles$MaterialCheckboxComponent() {
      return [material_checkbox__material_checkbox$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_4 = dart.privateName(material_checkbox__material_checkbox$46template, "_textBinding_4");
  const _compView_1 = dart.privateName(material_checkbox__material_checkbox$46template, "_compView_1");
  const _MaterialIconComponent_1_5 = dart.privateName(material_checkbox__material_checkbox$46template, "_MaterialIconComponent_1_5");
  const _appEl_2 = dart.privateName(material_checkbox__material_checkbox$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_checkbox__material_checkbox$46template, "_NgIf_2_9");
  const _expr_0 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_3");
  const _expr_6 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_6");
  const _expr_8 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_8");
  const _expr_9 = dart.privateName(material_checkbox__material_checkbox$46template, "_expr_9");
  const _el_0 = dart.privateName(material_checkbox__material_checkbox$46template, "_el_0");
  const _el_1 = dart.privateName(material_checkbox__material_checkbox$46template, "_el_1");
  const _el_3 = dart.privateName(material_checkbox__material_checkbox$46template, "_el_3");
  material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0 = class ViewMaterialCheckboxComponent0 extends src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_checkbox/material_checkbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      src__runtime__dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClassNonHtml(this[_el_1], "icon");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "content");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      let _text_5 = src__runtime__dom_helpers.appendText(this[_el_3], " ");
      this.project(this[_el_3], 0);
      this.init0();
      _rootEl[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleMouseDown')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'handleFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'handleBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.themeColor;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_el_1].style[$setProperty]("color", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.checked) || dart.test(_ctx.indeterminate);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this[_el_1], "filled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        if (!(_ctx.contentId == null)) {
          src__runtime__dom_helpers.setProperty(this[_el_3], "id", _ctx.contentId);
        }
      }
      this[_textBinding_4].updateText(src__runtime__interpolate.interpolateString0(_ctx.label));
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (!(_ctx.role == null)) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", _ctx.role);
        }
        if (!(_ctx.contentId == null)) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", _ctx.contentId);
        }
      }
      let currVal_6 = _ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_9 == null ? null : dart.toString(currVal_9));
        this[_expr_9] = currVal_9;
      }
    }
    initComponentStyles() {
      let styles = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles;
      if (styles == null) {
        material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = styles = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponent, material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-checkbox"));
    this.updateChildClassNonHtml(this.rootEl, material_checkbox__material_checkbox.MaterialCheckboxComponent.hostClass);
  }).prototype = material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, "package:angular_components/material_checkbox/material_checkbox.template.dart");
  dart.setFieldSignature(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  dart.defineLazy(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0, {
    /*material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template._MaterialCheckboxComponentNgFactory*/get _MaterialCheckboxComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialCheckboxComponent()).new("material-checkbox", dart.fn(material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0, AppViewAndintToAppViewOfMaterialCheckboxComponent())));
    }
  });
  dart.copyProperties(material_checkbox__material_checkbox$46template, {
    get MaterialCheckboxComponentNgFactory() {
      return material_checkbox__material_checkbox$46template._MaterialCheckboxComponentNgFactory;
    }
  });
  const _compView_0 = dart.privateName(material_checkbox__material_checkbox$46template, "_compView_0");
  const _MaterialRippleComponent_0_5 = dart.privateName(material_checkbox__material_checkbox$46template, "_MaterialRippleComponent_0_5");
  material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1 = class _ViewMaterialCheckboxComponent1 extends src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "ripple");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(html.HtmlElement._check(this[_el_0]));
      this[_compView_0].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.rippleColor;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_0].style[$setProperty]("color", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent), [])
  }));
  dart.setLibraryUri(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1, "package:angular_components/material_checkbox/material_checkbox.template.dart");
  dart.setFieldSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponent1 = function(parentView, parentIndex) {
    return new material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template.styles$MaterialCheckboxComponentHost*/get styles$MaterialCheckboxComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialCheckboxComponent_0_5 = dart.privateName(material_checkbox__material_checkbox$46template, "_MaterialCheckboxComponent_0_5");
  material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0 = class _ViewMaterialCheckboxComponentHost0 extends src__core__linker__app_view.AppView$(material_checkbox__material_checkbox.MaterialCheckboxComponent) {
    build() {
      this[_compView_0] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(this.rootEl, this[_compView_0], null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialCheckboxComponent()).new(0, this, this.rootEl, this[_MaterialCheckboxComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialCheckboxComponent_0_5];
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
      this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.prototype;
  dart.addTypeTests(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.setMethodSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_checkbox__material_checkbox.MaterialCheckboxComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0, "package:angular_components/material_checkbox/material_checkbox.template.dart");
  dart.setFieldSignature(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getFields(material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent)
  }));
  material_checkbox__material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0 = function(parentView, parentIndex) {
    return new material_checkbox__material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_checkbox__material_checkbox$46template, {
    /*material_checkbox__material_checkbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_checkbox__material_checkbox$46template.initReflector = function() {
    if (dart.test(material_checkbox__material_checkbox$46template._visited)) {
      return;
    }
    material_checkbox__material_checkbox$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_checkbox__material_checkbox.MaterialCheckboxComponent), material_checkbox__material_checkbox$46template.MaterialCheckboxComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    model__ui__icon$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.template.ddc", {
    "package:angular_components/material_checkbox/material_checkbox.template.dart": material_checkbox__material_checkbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.template.dart"],"names":[],"mappings":"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","file":"material_checkbox.template.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox$46template: material_checkbox__material_checkbox$46template
  };
});

//# sourceMappingURL=material_checkbox.template.ddc.js.map
