define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/mixins/material_dropdown_base'], function(dart_sdk, disposer, has_renderer, properties, selection_model, button_decorator, change_detection, selection_container, has_factory, modules, activation_handler, material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__material_select_item = Object.create(dart.library);
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let HasComponentRendererOfRendersValue$dynamic = () => (HasComponentRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let HasFactoryRendererOfRendersValue$dynamic = () => (HasFactoryRendererOfRendersValue$dynamic = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, dart.dynamic)))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _dropdown = dart.privateName(material_select__material_select_item, "_dropdown");
  const _activationHandler = dart.privateName(material_select__material_select_item, "_activationHandler");
  const _cdRef = dart.privateName(material_select__material_select_item, "_cdRef");
  const _disposer = dart.privateName(material_select__material_select_item, "_disposer");
  const _selectionChangeStreamSub = dart.privateName(material_select__material_select_item, "_selectionChangeStreamSub");
  const _isHidden = dart.privateName(material_select__material_select_item, "_isHidden");
  const _value = dart.privateName(material_select__material_select_item, "_value");
  const _supportsMultiSelect = dart.privateName(material_select__material_select_item, "_supportsMultiSelect");
  const _hideCheckbox = dart.privateName(material_select__material_select_item, "_hideCheckbox");
  const _itemRenderer = dart.privateName(material_select__material_select_item, "_itemRenderer");
  const _useCheckMarks = dart.privateName(material_select__material_select_item, "_useCheckMarks");
  const _selectOnActivate = dart.privateName(material_select__material_select_item, "_selectOnActivate");
  const _deselectOnActivate = dart.privateName(material_select__material_select_item, "_deselectOnActivate");
  const _selection = dart.privateName(material_select__material_select_item, "_selection");
  const _selected = dart.privateName(material_select__material_select_item, "_selected");
  const _closeOnActivate = dart.privateName(material_select__material_select_item, "_closeOnActivate");
  const _isMarkedSelected = dart.privateName(material_select__material_select_item, "_isMarkedSelected");
  const _isSelectedInSelectionModel = dart.privateName(material_select__material_select_item, "_isSelectedInSelectionModel");
  const _is_MaterialSelectItemComponent_default = Symbol('_is_MaterialSelectItemComponent_default');
  material_select__material_select_item.MaterialSelectItemComponent$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let MultiSelectionModelOfT = () => (MultiSelectionModelOfT = dart.constFn(model__selection__selection_model.MultiSelectionModel$(T)))();
    let SelectionChangeRecordOfT = () => (SelectionChangeRecordOfT = dart.constFn(model__selection__selection_model.SelectionChangeRecord$(T)))();
    let ListOfSelectionChangeRecordOfT = () => (ListOfSelectionChangeRecordOfT = dart.constFn(core.List$(SelectionChangeRecordOfT())))();
    let ListOfSelectionChangeRecordOfTToNull = () => (ListOfSelectionChangeRecordOfTToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecordOfT()])))();
    let SelectionItemOfT = () => (SelectionItemOfT = dart.constFn(model__selection__selection_container.SelectionItem$(T)))();
    let HasRendererOfT = () => (HasRendererOfT = dart.constFn(model__ui__has_renderer.HasRenderer$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class MaterialSelectItemComponent extends button_decorator__button_decorator.ButtonDirective {
      get element() {
        return this[element$];
      }
      set element(value) {
        super.element = value;
      }
      get disabled() {
        return super.disabled;
      }
      set disabled(value) {
        super.disabled = value;
      }
      set isHidden(value) {
        this[_isHidden] = utils__angular__properties__properties.getBool(value);
      }
      get isHidden() {
        return this[_isHidden];
      }
      get value() {
        return this[_value];
      }
      set value(val) {
        T._check(val);
        this[_value] = val;
      }
      get supportsMultiSelect() {
        return this[_supportsMultiSelect];
      }
      get hideCheckbox() {
        return this[_hideCheckbox];
      }
      set hideCheckbox(value) {
        this[_hideCheckbox] = utils__angular__properties__properties.getBool(value);
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
      get useCheckMarks() {
        return this[_useCheckMarks];
      }
      set useCheckMarks(value) {
        this[_useCheckMarks] = utils__angular__properties__properties.getBool(value);
      }
      set selectOnActivate(value) {
        this[_selectOnActivate] = utils__angular__properties__properties.getBool(value);
      }
      set deselectOnActivate(value) {
        this[_deselectOnActivate] = utils__angular__properties__properties.getBool(value);
      }
      get valueHasLabel() {
        return this.valueLabel != null;
      }
      get valueLabel() {
        if (this[_value] == null) {
          return null;
        } else if (this.componentRenderer == null && this.factoryRenderer == null && !(this.itemRenderer === model__ui__has_renderer.nullRenderer)) {
          return this.itemRenderer(this[_value]);
        }
        return null;
      }
      get selection() {
        return this[_selection];
      }
      set selection(sel) {
        SelectionModelOfT()._check(sel);
        this[_selection] = sel;
        this[_supportsMultiSelect] = MultiSelectionModelOfT().is(sel);
        let t = this[_selectionChangeStreamSub];
        t == null ? null : t.cancel();
        this[_selectionChangeStreamSub] = sel.selectionChanges.listen(dart.fn(_ => {
          this[_cdRef].markForCheck();
        }, ListOfSelectionChangeRecordOfTToNull()));
      }
      get selected() {
        return this[_selected];
      }
      set selected(value) {
        this[_selected] = utils__angular__properties__properties.getBool(value);
      }
      get closeOnActivate() {
        return this[_closeOnActivate];
      }
      set closeOnActivate(value) {
        this[_closeOnActivate] = utils__angular__properties__properties.getBool(value);
      }
      get componentType() {
        return this.componentRenderer != null ? this.componentRenderer(this.value) : null;
      }
      get componentFactory() {
        return this.factoryRenderer != null ? this.factoryRenderer(this.value) : null;
      }
      get isAriaChecked() {
        return !dart.test(this.supportsMultiSelect) || dart.test(this.hideCheckbox) ? null : this.isSelected;
      }
      get isSelected() {
        return dart.test(this[_isMarkedSelected]) || dart.test(this[_isSelectedInSelectionModel]);
      }
      get [_isMarkedSelected]() {
        return this.selected != null && dart.test(this.selected);
      }
      get [_isSelectedInSelectionModel]() {
        return this.value != null && (() => {
          let t = this[_selection];
          let l = t == null ? null : t.isSelected(this.value);
          return l != null ? l : false;
        })();
      }
      handleActivate(e) {
        let hasCheckbox = dart.test(this.supportsMultiSelect) && !dart.test(this.hideCheckbox);
        if (this[_dropdown] != null && dart.test(this.closeOnActivate) && !hasCheckbox) {
          this[_dropdown].close();
          if (html.KeyboardEvent.is(e)) {
            e.stopPropagation();
          }
        }
        if ((() => {
          let l = this[_activationHandler] == null ? null : this[_activationHandler].handle(e, this.value);
          return l != null ? l : false;
        })()) return;
        if (dart.test(this[_selectOnActivate]) && this[_selection] != null && this.value != null) {
          if (!dart.test(this[_selection].isSelected(this.value))) {
            this[_selection].select(this.value);
          } else if (dart.test(this[_deselectOnActivate])) {
            this[_selection].deselect(this.value);
          }
        }
      }
      onLoadCustomComponent(ref) {}
      ngOnDestroy() {
        this[_disposer].dispose();
      }
    }
    (MaterialSelectItemComponent.new = function(element, dropdown, activationHandler, cdRef, role, opts) {
      let addTabIndexWhenNonTabbable = opts && 'addTabIndexWhenNonTabbable' in opts ? opts.addTabIndexWhenNonTabbable : false;
      this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
      this[_selectionChangeStreamSub] = null;
      this[_isHidden] = false;
      this[_value] = null;
      this[_supportsMultiSelect] = false;
      this[_hideCheckbox] = false;
      this[_itemRenderer] = model__ui__has_renderer.nullRenderer;
      this[componentRenderer] = null;
      this[factoryRenderer] = null;
      this[_useCheckMarks] = false;
      this[_selectOnActivate] = true;
      this[_deselectOnActivate] = true;
      this[_selection] = null;
      this[_selected] = false;
      this[_closeOnActivate] = true;
      this[element$] = element;
      this[_dropdown] = dropdown;
      this[_activationHandler] = activationHandler;
      this[_cdRef] = cdRef;
      MaterialSelectItemComponent.__proto__.new.call(this, element, role != null ? role : "option", {addTabIndexWhenNonTabbable: addTabIndexWhenNonTabbable});
      this[_disposer].addStreamSubscription(html.UIEvent, this.trigger.listen(dart.bind(this, 'handleActivate')));
      this[_disposer].addFunction(dart.fn(() => {
        let t = this[_selectionChangeStreamSub];
        return t == null ? null : t.cancel();
      }, VoidToFuture()));
    }).prototype = MaterialSelectItemComponent.prototype;
    dart.addTypeTests(MaterialSelectItemComponent);
    MaterialSelectItemComponent.prototype[_is_MaterialSelectItemComponent_default] = true;
    const element$ = Symbol("MaterialSelectItemComponent.element");
    const componentRenderer = Symbol("MaterialSelectItemComponent.componentRenderer");
    const factoryRenderer = Symbol("MaterialSelectItemComponent.factoryRenderer");
    MaterialSelectItemComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, SelectionItemOfT(), HasRendererOfT(), HasComponentRendererOfRendersValue$dynamic(), HasFactoryRendererOfRendersValue$dynamic()];
    dart.setMethodSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectItemComponent.__proto__),
      handleActivate: dart.fnType(dart.void, [html.UIEvent]),
      onLoadCustomComponent: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef]),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectItemComponent.__proto__),
      disabled: core.bool,
      isHidden: core.bool,
      value: T,
      supportsMultiSelect: core.bool,
      hideCheckbox: core.bool,
      itemRenderer: dart.fnType(core.String, [T]),
      useCheckMarks: core.bool,
      valueHasLabel: core.bool,
      valueLabel: core.String,
      selection: model__selection__selection_model.SelectionModel$(T),
      selected: core.bool,
      closeOnActivate: core.bool,
      componentType: core.Type,
      componentFactory: src__core__linker__component_factory.ComponentFactory,
      isAriaChecked: core.bool,
      isSelected: core.bool,
      [_isMarkedSelected]: core.bool,
      [_isSelectedInSelectionModel]: core.bool
    }));
    dart.setSetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectItemComponent.__proto__),
      isHidden: dart.dynamic,
      value: T,
      hideCheckbox: dart.dynamic,
      itemRenderer: dart.fnType(core.String, [T]),
      useCheckMarks: dart.dynamic,
      selectOnActivate: core.bool,
      deselectOnActivate: core.bool,
      selection: model__selection__selection_model.SelectionModel$(T),
      selected: dart.dynamic,
      closeOnActivate: dart.dynamic
    }));
    dart.setLibraryUri(MaterialSelectItemComponent, "package:angular_components/material_select/material_select_item.dart");
    dart.setFieldSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getFields(MaterialSelectItemComponent.__proto__),
      [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
      [_activationHandler]: dart.finalFieldType(material_select__activation_handler.ActivationHandler),
      [_cdRef]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
      [_dropdown]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
      element: dart.finalFieldType(html.HtmlElement),
      [_selectionChangeStreamSub]: dart.fieldType(async.StreamSubscription),
      [_isHidden]: dart.fieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_supportsMultiSelect]: dart.fieldType(core.bool),
      [_hideCheckbox]: dart.fieldType(core.bool),
      [_itemRenderer]: dart.fieldType(TToString()),
      componentRenderer: dart.fieldType(dynamicToType()),
      factoryRenderer: dart.fieldType(dynamicToComponentFactory()),
      [_useCheckMarks]: dart.fieldType(core.bool),
      [_selectOnActivate]: dart.fieldType(core.bool),
      [_deselectOnActivate]: dart.fieldType(core.bool),
      [_selection]: dart.fieldType(SelectionModelOfT()),
      [_selected]: dart.fieldType(core.bool),
      [_closeOnActivate]: dart.fieldType(core.bool)
    }));
    return MaterialSelectItemComponent;
  });
  material_select__material_select_item.MaterialSelectItemComponent = material_select__material_select_item.MaterialSelectItemComponent$();
  dart.defineLazy(material_select__material_select_item.MaterialSelectItemComponent, {
    /*material_select__material_select_item.MaterialSelectItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  });
  dart.addTypeTests(material_select__material_select_item.MaterialSelectItemComponent, _is_MaterialSelectItemComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_item.ddc", {
    "package:angular_components/material_select/material_select_item.dart": material_select__material_select_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_item.dart"],"names":[],"mappings":"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","file":"material_select_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_item: material_select__material_select_item
  };
});

//# sourceMappingURL=material_select_item.ddc.js.map
