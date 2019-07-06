define(['dart_sdk', 'packages/angular_components/material_popup/material_popup.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/math/box.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template'], function(dart_sdk, material_popup$46scss$46css, modules, change_detection, material_popup, interpolate, popup_hierarchy, overlay_ref, dom_service, zindexer, alignment, box, deferred_content_aware, material_dropdown_base, angular, deferred_content_aware$, focus_interface, alignment$, visibility, module, overlay, zindexer$, module$, popup, material_dropdown_base$, box$, toggle, async, angular_2, disposer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_popup__material_popup$46scss$46css$46shim = material_popup$46scss$46css.material_popup__material_popup$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__math__box = box.model__math__box;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus_interface$46template = focus_interface.focus__focus_interface$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const laminate__overlay__module$46template = module.laminate__overlay__module$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const laminate__overlay__zindexer$46template = zindexer$.laminate__overlay__zindexer$46template;
  const laminate__popup__module$46template = module$.laminate__popup__module$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__math__box$46template = box$.model__math__box$46template;
  const model__ui__toggle$46template = toggle.model__ui__toggle$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2.utils__browser__dom_service__angular_2$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const utils__id_generator__id_generator$46template = id_generator.utils__id_generator__id_generator$46template;
  const material_popup__material_popup$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialPopupComponent = () => (AppViewOfMaterialPopupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent)))();
  let AppViewAndintToAppViewOfMaterialPopupComponent = () => (AppViewAndintToAppViewOfMaterialPopupComponent = dart.constFn(dart.fnType(AppViewOfMaterialPopupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialPopupComponent = () => (ComponentFactoryOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_popup__material_popup.MaterialPopupComponent)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let ComponentRefOfMaterialPopupComponent = () => (ComponentRefOfMaterialPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent)))();
  let MaterialPopupComponentToPopupHierarchy = () => (MaterialPopupComponentToPopupHierarchy = dart.constFn(dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, [material_popup__material_popup.MaterialPopupComponent])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let MaterialPopupComponentToPopupRef = () => (MaterialPopupComponentToPopupRef = dart.constFn(dart.fnType(src__laminate__popup__popup_ref.PopupRef, [material_popup__material_popup.MaterialPopupComponent])))();
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponent*/get styles$MaterialPopupComponent() {
      return [material_popup__material_popup$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(material_popup__material_popup$46template, "_appEl_1");
  const _TemplateRef_1_7 = dart.privateName(material_popup__material_popup$46template, "_TemplateRef_1_7");
  const _expr_0 = dart.privateName(material_popup__material_popup$46template, "_expr_0");
  material_popup__material_popup$46template.ViewMaterialPopupComponent0 = class ViewMaterialPopupComponent0 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_popup/material_popup.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      this[_TemplateRef_1_7] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1, AppViewAndintToAppViewOfvoid()));
      let _text_2 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      _ctx.templateRef = this[_TemplateRef_1_7];
      this.init0();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.paneId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "pane-id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = material_popup__material_popup$46template.ViewMaterialPopupComponent0._componentStyles;
      if (styles == null) {
        material_popup__material_popup$46template.ViewMaterialPopupComponent0._componentStyles = styles = material_popup__material_popup$46template.ViewMaterialPopupComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_popup__material_popup$46template.styles$MaterialPopupComponent, material_popup__material_popup$46template.ViewMaterialPopupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_popup__material_popup$46template.ViewMaterialPopupComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_TemplateRef_1_7] = null;
    this[_expr_0] = null;
    material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-popup"));
  }).prototype = material_popup__material_popup$46template.ViewMaterialPopupComponent0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template.ViewMaterialPopupComponent0);
  dart.setMethodSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_popup__material_popup$46template.ViewMaterialPopupComponent0, "package:angular_components/material_popup/material_popup.template.dart");
  dart.setFieldSignature(material_popup__material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_1_7]: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_popup__material_popup$46template.ViewMaterialPopupComponent0, {
    /*material_popup__material_popup$46template.ViewMaterialPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template._MaterialPopupComponentNgFactory*/get _MaterialPopupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialPopupComponent()).new("material-popup", dart.fn(material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0, AppViewAndintToAppViewOfMaterialPopupComponent())));
    }
  });
  dart.copyProperties(material_popup__material_popup$46template, {
    get MaterialPopupComponentNgFactory() {
      return material_popup__material_popup$46template._MaterialPopupComponentNgFactory;
    }
  });
  const _expr_1 = dart.privateName(material_popup__material_popup$46template, "_expr_1");
  const _expr_2 = dart.privateName(material_popup__material_popup$46template, "_expr_2");
  const _expr_3 = dart.privateName(material_popup__material_popup$46template, "_expr_3");
  const _expr_4 = dart.privateName(material_popup__material_popup$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_popup__material_popup$46template, "_expr_5");
  const _expr_6 = dart.privateName(material_popup__material_popup$46template, "_expr_6");
  const _expr_7 = dart.privateName(material_popup__material_popup$46template, "_expr_7");
  const _expr_8 = dart.privateName(material_popup__material_popup$46template, "_expr_8");
  const _expr_10 = dart.privateName(material_popup__material_popup$46template, "_expr_10");
  const _expr_11 = dart.privateName(material_popup__material_popup$46template, "_expr_11");
  const _expr_12 = dart.privateName(material_popup__material_popup$46template, "_expr_12");
  const _expr_13 = dart.privateName(material_popup__material_popup$46template, "_expr_13");
  const _el_1 = dart.privateName(material_popup__material_popup$46template, "_el_1");
  const _el_3 = dart.privateName(material_popup__material_popup$46template, "_el_3");
  const _handle_focus_6_0 = dart.privateName(material_popup__material_popup$46template, "_handle_focus_6_0");
  const _handle_focus_24_0 = dart.privateName(material_popup__material_popup$46template, "_handle_focus_24_0");
  material_popup__material_popup$46template._ViewMaterialPopupComponent1 = class _ViewMaterialPopupComponent1 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    build() {
      let _text_0 = src__runtime__dom_helpers.createText("\n  ");
      let doc = html.document;
      this[_el_1] = html.DivElement._check(doc[$createElement]("div"));
      this.updateChildClass(this[_el_1], "popup-wrapper mixin");
      this.addShimC(this[_el_1]);
      let _text_2 = src__runtime__dom_helpers.appendText(this[_el_1], "\n      ");
      this[_el_3] = src__runtime__dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(this[_el_3], "popup");
      this.addShimC(this[_el_3]);
      let _text_4 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_5 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_6 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_6, "focusable-placeholder");
      _el_6.tabIndex = 0;
      this.addShimC(_el_6);
      let _text_7 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_8 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_8, "material-popup-content content");
      this.addShimC(_el_8);
      let _text_9 = src__runtime__dom_helpers.appendText(_el_8, "\n              ");
      let _el_10 = src__runtime__dom_helpers.appendElement(doc, _el_8, "header");
      this.addShimE(_el_10);
      let _text_11 = src__runtime__dom_helpers.appendText(_el_10, "\n                  ");
      this.project(_el_10, 0);
      let _text_12 = src__runtime__dom_helpers.appendText(_el_10, "\n              ");
      let _text_13 = src__runtime__dom_helpers.appendText(_el_8, "\n              ");
      let _el_14 = src__runtime__dom_helpers.appendDiv(doc, _el_8);
      this.updateChildClass(_el_14, "main");
      this.addShimC(_el_14);
      let _text_15 = src__runtime__dom_helpers.appendText(_el_14, "\n                  ");
      this.project(_el_14, 1);
      let _text_16 = src__runtime__dom_helpers.appendText(_el_14, "\n              ");
      let _text_17 = src__runtime__dom_helpers.appendText(_el_8, "\n              ");
      let _el_18 = src__runtime__dom_helpers.appendElement(doc, _el_8, "footer");
      this.addShimE(_el_18);
      let _text_19 = src__runtime__dom_helpers.appendText(_el_18, "\n                  ");
      this.project(_el_18, 2);
      let _text_20 = src__runtime__dom_helpers.appendText(_el_18, "\n              ");
      let _text_21 = src__runtime__dom_helpers.appendText(_el_8, "\n          ");
      let _text_22 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_23 = src__runtime__dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_24 = src__runtime__dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_24, "focusable-placeholder");
      _el_24.tabIndex = 0;
      this.addShimC(_el_24);
      let _text_25 = src__runtime__dom_helpers.appendText(this[_el_3], "\n      ");
      let _text_26 = src__runtime__dom_helpers.appendText(this[_el_1], "\n  ");
      let _text_27 = src__runtime__dom_helpers.createText("\n");
      _el_6[$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_6_0)));
      _el_24[$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_focus_24_0)));
      this.init(JSArrayOfObject().of([_text_0, this[_el_1], _text_27]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        src__runtime__dom_helpers.setAttribute(this[_el_1], "role", src__runtime__interpolate.interpolateString0(_ctx.role));
      }
      let currVal_0 = _ctx.z;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "elevation", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasBox;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "shadow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.matchMinSourceWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "full-width", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.inkBackground;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "ink", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.slide;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "slide", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.zIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        src__runtime__dom_helpers.updateAttribute(this[_el_1], "z-index", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.transformOrigin;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_el_1].style[$setProperty]("transform-origin", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showPopup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        src__runtime__dom_helpers.updateClassBinding(this[_el_1], "visible", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = src__runtime__interpolate.interpolateString0(_ctx.uniqueId);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        src__runtime__dom_helpers.setProperty(this[_el_1], "id", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_10 = _ctx.minHeight;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_el_3].style[$setProperty]("min-height", currVal_10 == null ? null : dart.toString(currVal_10) + "px");
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_el_3].style[$setProperty]("min-width", currVal_11 == null ? null : dart.toString(currVal_11) + "px");
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxHeight;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_el_3].style[$setProperty]("max-height", currVal_12 == null ? null : dart.toString(currVal_12) + "px");
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxWidth;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_el_3].style[$setProperty]("max-width", currVal_13 == null ? null : dart.toString(currVal_13) + "px");
        this[_expr_13] = currVal_13;
      }
    }
    [_handle_focus_6_0]($event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
    [_handle_focus_24_0]($event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponent1.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponent1);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    [_handle_focus_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_24_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_popup__material_popup$46template._ViewMaterialPopupComponent1, "package:angular_components/material_popup/material_popup.template.dart");
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.DivElement)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponent1 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template.styles$MaterialPopupComponentHost*/get styles$MaterialPopupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_popup__material_popup$46template, "_compView_0");
  const _appEl_0 = dart.privateName(material_popup__material_popup$46template, "_appEl_0");
  const _MaterialPopupComponent_0_8 = dart.privateName(material_popup__material_popup$46template, "_MaterialPopupComponent_0_8");
  const __PopupHierarchy_0_11 = dart.privateName(material_popup__material_popup$46template, "__PopupHierarchy_0_11");
  const __PopupRef_0_12 = dart.privateName(material_popup__material_popup$46template, "__PopupRef_0_12");
  const _PopupHierarchy_0_11 = dart.privateName(material_popup__material_popup$46template, "_PopupHierarchy_0_11");
  const _PopupRef_0_12 = dart.privateName(material_popup__material_popup$46template, "_PopupRef_0_12");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  material_popup__material_popup$46template._ViewMaterialPopupComponentHost0 = class _ViewMaterialPopupComponentHost0 extends src__core__linker__app_view.AppView$(material_popup__material_popup.MaterialPopupComponent) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_MaterialPopupComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.injectorGet(const$ || (const$ = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this.rootEl)), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex)), material_popup__material_popup.MaterialPopupComponent._check(this.injectorGetOptional(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex)), null, src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), model__math__box.Box._check(this.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayViewportBoundaries"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.injectorGetOptional(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this.rootEl));
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0]);
      return new (ComponentRefOfMaterialPopupComponent()).new(0, this, this.rootEl, this[_MaterialPopupComponent_0_8]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy)) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef)) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.prototype;
  dart.addTypeTests(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.setMethodSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_popup__material_popup.MaterialPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setGetterSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getGetters(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, "package:angular_components/material_popup/material_popup.template.dart");
  dart.setFieldSignature(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic)
  }));
  material_popup__material_popup$46template.viewFactory_MaterialPopupComponentHost0 = function(parentView, parentIndex) {
    return new material_popup__material_popup$46template._ViewMaterialPopupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_popup__material_popup$46template, {
    /*material_popup__material_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  material_popup__material_popup$46template.initReflector = function() {
    if (dart.test(material_popup__material_popup$46template._visited)) {
      return;
    }
    material_popup__material_popup$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), material_popup__material_popup$46template.MaterialPopupComponentNgFactory);
    src__di__reflector.registerDependencies(dart.fn(material_popup__material_popup.getHierarchy, MaterialPopupComponentToPopupHierarchy()), const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(material_popup__material_popup.getResolvedPopupRef, MaterialPopupComponentToPopupRef()), const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.constList([dart.wrapType(material_popup__material_popup.MaterialPopupComponent)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus_interface$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__popup__module$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__math__box$46template.initReflector();
    model__ui__toggle$46template.initReflector();
    utils__async__async$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.template.ddc", {
    "package:angular_components/material_popup/material_popup.template.dart": material_popup__material_popup$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.template.dart"],"names":[],"mappings":"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","file":"material_popup.template.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup$46template: material_popup__material_popup$46template
  };
});

//# sourceMappingURL=material_popup.template.ddc.js.map
