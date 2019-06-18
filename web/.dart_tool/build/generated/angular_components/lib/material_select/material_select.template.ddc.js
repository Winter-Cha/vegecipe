define(['dart_sdk', 'packages/angular_components/material_select/material_select.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/focus/focus', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_select$46scss$46css, modules, change_detection, material_select, material_list, focus_list, focus_list$, material_list$, focus, selection_options, text_binding, interpolate, material_select_item, focus_item, focus_item$, material_select_item$, material_dropdown_base, activation_handler, selection_container, has_disabled, has_renderer, material_select_base, angular, has_disabled$, select, selection_container$, selection_model, selection_options$, has_factory, has_renderer$, template_support, properties) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_select__material_select$46scss$46css$46shim = material_select$46scss$46css.material_select__material_select$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_select__material_select = material_select.material_select__material_select;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const focus__focus_list = focus_list.focus__focus_list;
  const focus__focus_list$46template = focus_list$.focus__focus_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const focus__focus = focus.focus__focus;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const focus__focus_item = focus_item.focus__focus_item;
  const focus__focus_item$46template = focus_item$.focus__focus_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const material_select__material_select_base$46template = material_select_base.material_select__material_select_base$46template;
  const angular$46template = angular.angular$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_container$46template = selection_container$.model__selection__selection_container$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__selection__selection_options$46template = selection_options$.model__selection__selection_options$46template;
  const model__ui__has_factory$46template = has_factory.model__ui__has_factory$46template;
  const model__ui__has_renderer$46template = has_renderer$.model__ui__has_renderer$46template;
  const model__ui__template_support$46template = template_support.model__ui__template_support$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const material_select__material_select$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toString = dartx.toString;
  const $addEventListener = dartx.addEventListener;
  let VoidToFocusListDirective = () => (VoidToFocusListDirective = dart.constFn(dart.fnType(focus__focus_list.FocusListDirective, [])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewOfObject = () => (AppViewOfObject = dart.constFn(src__core__linker__app_view.AppView$(core.Object)))();
  let AppViewOfObjectAndintToAppViewOfvoid = () => (AppViewOfObjectAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [AppViewOfObject(), core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfFocusableItem = () => (JSArrayOfFocusableItem = dart.constFn(_interceptors.JSArray$(focus__focus.FocusableItem)))();
  let ListOfFocusableItem = () => (ListOfFocusableItem = dart.constFn(core.List$(focus__focus.FocusableItem)))();
  let _ViewMaterialSelectComponent5ToListOfFocusableItem = () => (_ViewMaterialSelectComponent5ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select__material_select$46template._ViewMaterialSelectComponent5])))();
  let _ViewMaterialSelectComponent3ToListOfFocusableItem = () => (_ViewMaterialSelectComponent3ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select__material_select$46template._ViewMaterialSelectComponent3])))();
  let _ViewMaterialSelectComponent2ToListOfFocusableItem = () => (_ViewMaterialSelectComponent2ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select__material_select$46template._ViewMaterialSelectComponent2])))();
  let _ViewMaterialSelectComponent1ToListOfFocusableItem = () => (_ViewMaterialSelectComponent1ToListOfFocusableItem = dart.constFn(dart.fnType(ListOfFocusableItem(), [material_select__material_select$46template._ViewMaterialSelectComponent1])))();
  let AppViewAndintToAppViewOfMaterialSelectComponentOfT = () => (AppViewAndintToAppViewOfMaterialSelectComponentOfT = dart.constFn(dart.gFnType(T => [src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)), [src__core__linker__app_view.AppView, core.int]])))();
  let ComponentFactoryOfMaterialSelectComponent = () => (ComponentFactoryOfMaterialSelectComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_select__material_select.MaterialSelectComponent)))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select__material_select$46scss$46css$46shim.styles];
    }
  });
  const _query_FocusableItem_0_0_isDirty = dart.privateName(material_select__material_select$46template, "_query_FocusableItem_0_0_isDirty");
  const _compView_0 = dart.privateName(material_select__material_select$46template, "_compView_0");
  const _FocusListDirective_0_5 = dart.privateName(material_select__material_select$46template, "_FocusListDirective_0_5");
  const _MaterialListComponent_0_6 = dart.privateName(material_select__material_select$46template, "_MaterialListComponent_0_6");
  const _appEl_1 = dart.privateName(material_select__material_select$46template, "_appEl_1");
  const _NgIf_1_9 = dart.privateName(material_select__material_select$46template, "_NgIf_1_9");
  const _expr_0 = dart.privateName(material_select__material_select$46template, "_expr_0");
  const _expr_2 = dart.privateName(material_select__material_select$46template, "_expr_2");
  const _expr_4 = dart.privateName(material_select__material_select$46template, "_expr_4");
  const _expr_5 = dart.privateName(material_select__material_select$46template, "_expr_5");
  const _el_0 = dart.privateName(material_select__material_select$46template, "_el_0");
  const _FocusItemDirective_0_5 = dart.privateName(material_select__material_select$46template, "_FocusItemDirective_0_5");
  const _is_ViewMaterialSelectComponent0_default = Symbol('_is_ViewMaterialSelectComponent0_default');
  material_select__material_select$46template.ViewMaterialSelectComponent0$ = dart.generic(T => {
    class ViewMaterialSelectComponent0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      static get _debugComponentUrl() {
        return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        parentRenderNode[$append](this[_el_0]);
        src__runtime__dom_helpers.setAttribute(this[_el_0], "focusList", "");
        src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "none");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_FocusListDirective_0_5] = new focus__focus_list$46template.FocusListDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus_list.FocusListDirective, dart.wrapType(focus__focus_list.FocusListDirective), dart.fn(() => new focus__focus_list.FocusListDirective.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), "none"), VoidToFocusListDirective())) : new focus__focus_list.FocusListDirective.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), "none"));
        this[_MaterialListComponent_0_6] = new material_list__material_list.MaterialListComponent.new();
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent1(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].create(this[_MaterialListComponent_0_6], JSArrayOfObject().of([(() => {
            let _ = [this.projectedNodes[$_get](0)];
            _[$addAll]([this[_appEl_1]]);
            return _;
          })()]));
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.autoFocusIndex;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_FocusListDirective_0_5].instance.autoFocusIndex = currVal_0;
          this[_expr_0] = currVal_0;
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialListComponent_0_6].role = "none";
          changed = true;
        }
        let currVal_2 = _ctx.width;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialListComponent_0_6].width = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_1_9].ngIf = _ctx.options != null;
        this[_appEl_1].detectChangesInNestedViews();
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
            this[_FocusListDirective_0_5].instance.listItems = this[_appEl_1].mapNestedViews(focus__focus.FocusableItem, material_select__material_select$46template._ViewMaterialSelectComponent1, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus__focus.FocusableItem, material_select__material_select$46template._ViewMaterialSelectComponent2, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus__focus.FocusableItem, material_select__material_select$46template._ViewMaterialSelectComponent3, dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(focus__focus.FocusableItem, material_select__material_select$46template._ViewMaterialSelectComponent5, dart.fn(nestedView => JSArrayOfFocusableItem().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewMaterialSelectComponent5ToListOfFocusableItem())), _ViewMaterialSelectComponent3ToListOfFocusableItem())), _ViewMaterialSelectComponent2ToListOfFocusableItem())), _ViewMaterialSelectComponent1ToListOfFocusableItem()));
            this[_query_FocusableItem_0_0_isDirty] = false;
          }
        }
        this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_FocusListDirective_0_5].instance.ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        let currVal_4 = _ctx.isMultiSelect;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-multiselectable", currVal_4 == null ? null : dart.toString(currVal_4));
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.disabledStr;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          src__runtime__dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_5);
          this[_expr_5] = currVal_5;
        }
      }
      initComponentStyles() {
        let styles = material_select__material_select$46template.ViewMaterialSelectComponent0._componentStyles;
        if (styles == null) {
          material_select__material_select$46template.ViewMaterialSelectComponent0._componentStyles = styles = material_select__material_select$46template.ViewMaterialSelectComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_select__material_select$46template.styles$MaterialSelectComponent, material_select__material_select$46template.ViewMaterialSelectComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
      this[_query_FocusableItem_0_0_isDirty] = true;
      this[_compView_0] = null;
      this[_FocusListDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      ViewMaterialSelectComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
      this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-select"));
      src__runtime__dom_helpers.updateAttribute(this.rootEl, "role", material_select__material_select.MaterialSelectComponent.hostRole);
    }).prototype = ViewMaterialSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectComponent0);
    ViewMaterialSelectComponent0.prototype[_is_ViewMaterialSelectComponent0_default] = true;
    dart.setMethodSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialSelectComponent0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      initComponentStyles: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectComponent0.__proto__),
      [_query_FocusableItem_0_0_isDirty]: dart.fieldType(core.bool),
      [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
      [_FocusListDirective_0_5]: dart.fieldType(focus__focus_list$46template.FocusListDirectiveNgCd),
      [_MaterialListComponent_0_6]: dart.fieldType(material_list__material_list.MaterialListComponent),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.int),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return ViewMaterialSelectComponent0;
  });
  material_select__material_select$46template.ViewMaterialSelectComponent0 = material_select__material_select$46template.ViewMaterialSelectComponent0$();
  dart.defineLazy(material_select__material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select__material_select$46template.ViewMaterialSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.addTypeTests(material_select__material_select$46template.ViewMaterialSelectComponent0, _is_ViewMaterialSelectComponent0_default);
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialSelectComponent()).new("material-select", dart.gbind(dart.fn(material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0, AppViewAndintToAppViewOfMaterialSelectComponentOfT()), dart.dynamic)));
    }
  });
  dart.copyProperties(material_select__material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select__material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  const _NgFor_1_9 = dart.privateName(material_select__material_select$46template, "_NgFor_1_9");
  const _expr_1 = dart.privateName(material_select__material_select$46template, "_expr_1");
  const _is__ViewMaterialSelectComponent1_default = Symbol('_is__ViewMaterialSelectComponent1_default');
  material_select__material_select$46template._ViewMaterialSelectComponent1$ = dart.generic(T => {
    class _ViewMaterialSelectComponent1 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        this.updateChildClass(this[_el_0], "options-wrapper");
        src__runtime__dom_helpers.setAttribute(this[_el_0], "role", "group");
        this.addShimC(this[_el_0]);
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent2(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (firstCheck) {
          if (!(_ctx.trackByIndexFn == null)) {
            this[_NgFor_1_9].ngForTrackBy = intAnddynamicToObject()._check(_ctx.trackByIndexFn);
          }
        }
        let currVal_2 = _ctx.options.optionGroups;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_NgFor_1_9].ngForOf = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = _ctx.ariaLabelledBy;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.ariaDescribedBy;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          src__runtime__dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent1);
    _ViewMaterialSelectComponent1.prototype[_is__ViewMaterialSelectComponent1_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent1.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent1.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialSelectComponent1;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent1 = material_select__material_select$46template._ViewMaterialSelectComponent1$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent1, _is__ViewMaterialSelectComponent1_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent1 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent1$(T)).new(parentView, parentIndex);
  };
  const _is__ViewMaterialSelectComponent2_default = Symbol('_is__ViewMaterialSelectComponent2_default');
  material_select__material_select$46template._ViewMaterialSelectComponent2$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent2 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
        src__runtime__dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = src__runtime__dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent3(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = local_group.isEmpty;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          src__runtime__dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent2);
    _ViewMaterialSelectComponent2.prototype[_is__ViewMaterialSelectComponent2_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent2.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_expr_0]: dart.fieldType(core.bool),
      [_el_0]: dart.fieldType(html.DivElement)
    }));
    return _ViewMaterialSelectComponent2;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent2 = material_select__material_select$46template._ViewMaterialSelectComponent2$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent2, _is__ViewMaterialSelectComponent2_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent2 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent2$(T)).new(parentView, parentIndex);
  };
  const _appEl_0 = dart.privateName(material_select__material_select$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(material_select__material_select$46template, "_NgIf_0_9");
  const _is__ViewMaterialSelectComponent3_default = Symbol('_is__ViewMaterialSelectComponent3_default');
  material_select__material_select$46template._ViewMaterialSelectComponent3$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent3 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let _anchor_0 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent4(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = src__runtime__dom_helpers.createAnchor();
        this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select__material_select$46template.viewFactory_MaterialSelectComponent5(T, parentView, parentIndex), AppViewOfObjectAndintToAppViewOfvoid()));
        this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init(JSArrayOfObject().of([this[_appEl_0], this[_appEl_1]]), null);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = local_group.hasLabel;
        let currVal_1 = local_group;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_NgFor_1_9].ngForOf = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent3);
    _ViewMaterialSelectComponent3.prototype[_is__ViewMaterialSelectComponent3_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent3.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent3.__proto__),
      [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
      [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent3;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent3 = material_select__material_select$46template._ViewMaterialSelectComponent3$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent3, _is__ViewMaterialSelectComponent3_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent3 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent3$(T)).new(parentView, parentIndex);
  };
  const _textBinding_1 = dart.privateName(material_select__material_select$46template, "_textBinding_1");
  const _is__ViewMaterialSelectComponent4_default = Symbol('_is__ViewMaterialSelectComponent4_default');
  material_select__material_select$46template._ViewMaterialSelectComponent4$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class _ViewMaterialSelectComponent4 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        src__runtime__dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let local_group = src__runtime__optimizations.unsafeCast(OptionGroupOfT(), this.parentView.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
      _ViewMaterialSelectComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent4);
    _ViewMaterialSelectComponent4.prototype[_is__ViewMaterialSelectComponent4_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent4.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      detectChangesInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent4.__proto__),
      [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
    }));
    return _ViewMaterialSelectComponent4;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent4 = material_select__material_select$46template._ViewMaterialSelectComponent4$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent4, _is__ViewMaterialSelectComponent4_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent4 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent4$(T)).new(parentView, parentIndex);
  };
  const _MaterialSelectItemComponent_0_6 = dart.privateName(material_select__material_select$46template, "_MaterialSelectItemComponent_0_6");
  const _expr_3 = dart.privateName(material_select__material_select$46template, "_expr_3");
  let const$;
  const _is__ViewMaterialSelectComponent5_default = Symbol('_is__ViewMaterialSelectComponent5_default');
  material_select__material_select$46template._ViewMaterialSelectComponent5$ = dart.generic(T => {
    let ViewMaterialSelectItemComponent0OfT = () => (ViewMaterialSelectItemComponent0OfT = dart.constFn(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0$(T)))();
    let MaterialSelectItemComponentOfT = () => (MaterialSelectItemComponentOfT = dart.constFn(material_select__material_select_item.MaterialSelectItemComponent$(T)))();
    let VoidToMaterialSelectItemComponentOfT = () => (VoidToMaterialSelectItemComponentOfT = dart.constFn(dart.fnType(MaterialSelectItemComponentOfT(), [])))();
    let TToComponentFactory = () => (TToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [T])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class _ViewMaterialSelectComponent5 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfT()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        src__runtime__dom_helpers.setAttribute(this[_el_0], "focusItem", "");
        this.addShimC(html.HtmlElement._check(this[_el_0]));
        this[_FocusItemDirective_0_5] = new focus__focus_item$46template.FocusItemDirectiveNgCd.new(new focus__focus_item.FocusItemDirective.new(html.HtmlElement._check(this[_el_0]), null));
        this[_MaterialSelectItemComponent_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(MaterialSelectItemComponentOfT(), dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentOfT())) : new (MaterialSelectItemComponentOfT()).new(html.HtmlElement._check(this[_el_0]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null);
        this[_compView_0].create(this[_MaterialSelectItemComponent_0_6], JSArrayOfObject().of([const$ || (const$ = dart.constList([], dart.dynamic))]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
        this.init1(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(focus__focus.FocusableItem)) {
            return this[_FocusItemDirective_0_5].instance;
          }
          if (token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) {
            return this[_MaterialSelectItemComponent_0_6];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_item = src__runtime__optimizations.unsafeCast(T, this.locals[$_get]("$implicit"));
        let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialSelectItemComponent_0_6].disabled = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentRenderer;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectItemComponent_0_6].componentRenderer = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TToComponentFactory()._check(_ctx.factoryRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectItemComponent_0_6].factoryRenderer = dynamicToComponentFactory()._check(currVal_2);
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_item;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectItemComponent_0_6].value = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TToString()._check(_ctx.itemRenderer);
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectItemComponent_0_6].itemRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectItemComponent_0_6].selection = currVal_5;
          this[_expr_5] = currVal_5;
        }
        this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        src__runtime__optimizations.unsafeCast(material_select__material_select$46template.ViewMaterialSelectComponent0, this.parentView.parentView.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_FocusItemDirective_0_5] = null;
      this[_MaterialSelectItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent5);
    _ViewMaterialSelectComponent5.prototype[_is__ViewMaterialSelectComponent5_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent5.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent5.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialSelectItemComponent0OfT()),
      [_FocusItemDirective_0_5]: dart.fieldType(focus__focus_item$46template.FocusItemDirectiveNgCd),
      [_MaterialSelectItemComponent_0_6]: dart.fieldType(MaterialSelectItemComponentOfT()),
      [_expr_0]: dart.fieldType(core.bool),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(html.Element)
    }));
    return _ViewMaterialSelectComponent5;
  });
  material_select__material_select$46template._ViewMaterialSelectComponent5 = material_select__material_select$46template._ViewMaterialSelectComponent5$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponent5, _is__ViewMaterialSelectComponent5_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponent5 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponent5$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialSelectComponent_0_5 = dart.privateName(material_select__material_select$46template, "_MaterialSelectComponent_0_5");
  const _is__ViewMaterialSelectComponentHost0_default = Symbol('_is__ViewMaterialSelectComponentHost0_default');
  material_select__material_select$46template._ViewMaterialSelectComponentHost0$ = dart.generic(T => {
    let ViewMaterialSelectComponent0OfT = () => (ViewMaterialSelectComponent0OfT = dart.constFn(material_select__material_select$46template.ViewMaterialSelectComponent0$(T)))();
    let MaterialSelectComponentOfT = () => (MaterialSelectComponentOfT = dart.constFn(material_select__material_select.MaterialSelectComponent$(T)))();
    let SelectionItemOfT = () => (SelectionItemOfT = dart.constFn(model__selection__selection_container.SelectionItem$(T)))();
    let JSArrayOfSelectionItemOfT = () => (JSArrayOfSelectionItemOfT = dart.constFn(_interceptors.JSArray$(SelectionItemOfT())))();
    let ComponentRefOfMaterialSelectComponentOfT = () => (ComponentRefOfMaterialSelectComponentOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(MaterialSelectComponentOfT())))();
    class _ViewMaterialSelectComponentHost0 extends src__core__linker__app_view.AppView$(material_select__material_select.MaterialSelectComponent$(T)) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectComponent0OfT()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectComponent_0_5] = new (MaterialSelectComponentOfT()).new();
        this[_MaterialSelectComponent_0_5].selectItems = JSArrayOfSelectionItemOfT().of([]);
        this[_compView_0].create(this[_MaterialSelectComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialSelectComponentOfT()).new(0, this, this.rootEl, this[_MaterialSelectComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer)) && 0 === nodeIndex) {
          return this[_MaterialSelectComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialSelectComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectComponent_0_5] = null;
      _ViewMaterialSelectComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    }).prototype = _ViewMaterialSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponentHost0);
    _ViewMaterialSelectComponentHost0.prototype[_is__ViewMaterialSelectComponentHost0_default] = true;
    dart.setMethodSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponentHost0.__proto__),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_select__material_select.MaterialSelectComponent$(T)), []),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      detectChangesInternal: dart.fnType(dart.void, []),
      destroyInternal: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(ViewMaterialSelectComponent0OfT()),
      [_MaterialSelectComponent_0_5]: dart.fieldType(MaterialSelectComponentOfT())
    }));
    return _ViewMaterialSelectComponentHost0;
  });
  material_select__material_select$46template._ViewMaterialSelectComponentHost0 = material_select__material_select$46template._ViewMaterialSelectComponentHost0$();
  dart.addTypeTests(material_select__material_select$46template._ViewMaterialSelectComponentHost0, _is__ViewMaterialSelectComponentHost0_default);
  material_select__material_select$46template.viewFactory_MaterialSelectComponentHost0 = function(T, parentView, parentIndex) {
    return new (material_select__material_select$46template._ViewMaterialSelectComponentHost0$(T)).new(parentView, parentIndex);
  };
  dart.defineLazy(material_select__material_select$46template, {
    /*material_select__material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_select__material_select$46template.initReflector = function() {
    if (dart.test(material_select__material_select$46template._visited)) {
      return;
    }
    material_select__material_select$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_select__material_select.MaterialSelectComponent), material_select__material_select$46template.MaterialSelectComponentNgFactory);
    material_select__material_select_base$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    angular$46template.initReflector();
    focus__focus_item$46template.initReflector();
    focus__focus_list$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_list__material_list$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_container$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__selection__selection_options$46template.initReflector();
    model__ui__has_factory$46template.initReflector();
    model__ui__has_renderer$46template.initReflector();
    model__ui__template_support$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_select/material_select.template.ddc", {
    "package:angular_components/material_select/material_select.template.dart": material_select__material_select$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":"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","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select__material_select$46template
  };
});

//# sourceMappingURL=material_select.template.ddc.js.map
