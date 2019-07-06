define(['dart_sdk', 'packages/angular_components/material_dialog/material_dialog.scss.css.shim', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_dialog$46scss$46css, text_binding, modules, change_detection, material_dialog, focus_trap, focus_trap$, interpolate, dom_service, modal, angular, modal$, keyboard_handler_mixin, dom_service$, disposer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dialog__material_dialog$46scss$46css$46shim = material_dialog$46scss$46css.material_dialog__material_dialog$46scss$46css$46shim;
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
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_dialog__material_dialog = material_dialog.material_dialog__material_dialog;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const angular$46template = angular.angular$46template;
  const laminate__components__modal__modal$46template = modal$.laminate__components__modal__modal$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const material_dialog__material_dialog$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let AppViewOfMaterialDialogComponent = () => (AppViewOfMaterialDialogComponent = dart.constFn(src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let AppViewAndintToAppViewOfMaterialDialogComponent = () => (AppViewAndintToAppViewOfMaterialDialogComponent = dart.constFn(dart.fnType(AppViewOfMaterialDialogComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialDialogComponent = () => (ComponentFactoryOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let VoidToMaterialDialogComponent = () => (VoidToMaterialDialogComponent = dart.constFn(dart.fnType(material_dialog__material_dialog.MaterialDialogComponent, [])))();
  let ComponentRefOfMaterialDialogComponent = () => (ComponentRefOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent)))();
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponent*/get styles$MaterialDialogComponent() {
      return [material_dialog__material_dialog$46scss$46css$46shim.styles];
    }
  });
  const _textBinding_4 = dart.privateName(material_dialog__material_dialog$46template, "_textBinding_4");
  const _compView_0 = dart.privateName(material_dialog__material_dialog$46template, "_compView_0");
  const _FocusTrapComponent_0_5 = dart.privateName(material_dialog__material_dialog$46template, "_FocusTrapComponent_0_5");
  const _appEl_2 = dart.privateName(material_dialog__material_dialog$46template, "_appEl_2");
  const _NgIf_2_9 = dart.privateName(material_dialog__material_dialog$46template, "_NgIf_2_9");
  const _appEl_6 = dart.privateName(material_dialog__material_dialog$46template, "_appEl_6");
  const _NgIf_6_9 = dart.privateName(material_dialog__material_dialog$46template, "_NgIf_6_9");
  const _expr_1 = dart.privateName(material_dialog__material_dialog$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_dialog__material_dialog$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_dialog__material_dialog$46template, "_expr_3");
  const _expr_5 = dart.privateName(material_dialog__material_dialog$46template, "_expr_5");
  const _el_3 = dart.privateName(material_dialog__material_dialog$46template, "_el_3");
  const _el_5 = dart.privateName(material_dialog__material_dialog$46template, "_el_5");
  material_dialog__material_dialog$46template.ViewMaterialDialogComponent0 = class ViewMaterialDialogComponent0 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_dialog/material_dialog.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_1), "wrapper");
      this.addShimC(html.HtmlElement._check(_el_1));
      let _anchor_2 = src__runtime__dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "error");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this[_el_5] = src__runtime__dom_helpers.appendElement(doc, _el_1, "main");
      src__runtime__dom_helpers.setAttribute(this[_el_5], "role", "presentation");
      this.addShimE(this[_el_5]);
      this.project(this[_el_5], 1);
      let _anchor_6 = src__runtime__dom_helpers.appendAnchor(_el_1);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 1, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2, AppViewAndintToAppViewOfvoid()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], JSArrayOfObject().of([JSArrayOfElement().of([_el_1])]));
      _el_0[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'onKeyUp')));
      _ctx.main = html.HtmlElement._check(this[_el_5]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.shouldShowHeader;
      this[_NgIf_6_9].ngIf = _ctx.shouldShowFooter;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_1 = _ctx.error != null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_3], "expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_4].updateText(src__runtime__interpolate.interpolateString0(_ctx.error));
      let currVal_2 = _ctx.shouldShowTopScrollStroke;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_5]), "top-scroll-stroke", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldShowBottomScrollStroke;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_5]), "bottom-scroll-stroke", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_5 = _ctx.headerId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
    initComponentStyles() {
      let styles = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._componentStyles;
      if (styles == null) {
        material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = styles = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_dialog__material_dialog$46template.styles$MaterialDialogComponent, material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new src__runtime__text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-dialog"));
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", material_dialog__material_dialog.MaterialDialogComponent.hostRole);
    src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-modal", material_dialog__material_dialog.MaterialDialogComponent.ariaModel);
  }).prototype = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0);
  dart.setMethodSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, "package:angular_components/material_dialog/material_dialog.template.dart");
  dart.setFieldSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, {
    /*material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template._MaterialDialogComponentNgFactory*/get _MaterialDialogComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDialogComponent()).new("material-dialog", dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0, AppViewAndintToAppViewOfMaterialDialogComponent())));
    }
  });
  dart.copyProperties(material_dialog__material_dialog$46template, {
    get MaterialDialogComponentNgFactory() {
      return material_dialog__material_dialog$46template._MaterialDialogComponentNgFactory;
    }
  });
  const _expr_0 = dart.privateName(material_dialog__material_dialog$46template, "_expr_0");
  const _el_0 = dart.privateName(material_dialog__material_dialog$46template, "_el_0");
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent1 = class _ViewMaterialDialogComponent1 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("header");
      src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "presentation");
      this.addShimE(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.headerId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_el_0] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  dart.setLibraryUri(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, "package:angular_components/material_dialog/material_dialog.template.dart");
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.Element)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new(parentView, parentIndex);
  };
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent2 = class _ViewMaterialDialogComponent2 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("footer");
      src__runtime__dom_helpers.setAttribute(_el_0, "role", "presentation");
      this.addShimE(_el_0);
      this.project(_el_0, 2);
      this.init1(_el_0);
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new = function(parentView, parentIndex) {
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  dart.setLibraryUri(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2, "package:angular_components/material_dialog/material_dialog.template.dart");
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponentHost*/get styles$MaterialDialogComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDialogComponent_0_5 = dart.privateName(material_dialog__material_dialog$46template, "_MaterialDialogComponent_0_5");
  material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0 = class _ViewMaterialDialogComponentHost0 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      this[_compView_0] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDialogComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0], laminate__components__modal__modal.ModalComponent._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex))), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0], laminate__components__modal__modal.ModalComponent._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDialogComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDialogComponent()).new(0, this, this.rootEl, this[_MaterialDialogComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_0_5].ngAfterContentChecked();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialDialogComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDialogComponent_0_5] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  dart.setLibraryUri(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, "package:angular_components/material_dialog/material_dialog.template.dart");
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_MaterialDialogComponent_0_5]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_dialog__material_dialog$46template.initReflector = function() {
    if (dart.test(material_dialog__material_dialog$46template._visited)) {
      return;
    }
    material_dialog__material_dialog$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), material_dialog__material_dialog$46template.MaterialDialogComponentNgFactory);
    angular$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.template.ddc", {
    "package:angular_components/material_dialog/material_dialog.template.dart": material_dialog__material_dialog$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.template.dart"],"names":[],"mappings":"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","file":"material_dialog.template.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog$46template: material_dialog__material_dialog$46template
  };
});

//# sourceMappingURL=material_dialog.template.ddc.js.map
