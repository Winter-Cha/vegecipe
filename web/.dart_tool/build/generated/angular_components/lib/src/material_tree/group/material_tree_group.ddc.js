define(['dart_sdk', 'packages/angular_components/model/selection/select', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/selection/selection_model', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/mixins/material_dropdown_base', 'packages/intl/intl', 'packages/angular_components/material_input/material_input', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, select, selection_container, has_renderer, has_factory, selection_options, disposer, selectable, selection_model, modules, change_detection, async_update_scheduler, material_dropdown_base, intl, material_input, css, focus_interface, alignment, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__selection__select = select.model__selection__select;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__utils__async__disposable_future = async_update_scheduler.src__utils__async__disposable_future;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const intl$ = intl.intl;
  const material_input__material_input = material_input.material_input__material_input;
  const utils__angular__css__css = css.utils__angular__css__css;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__material_tree__material_tree_expand_state = Object.create(dart.library);
  const src__material_tree__material_tree_root = Object.create(dart.library);
  const src__material_tree__material_tree_node = Object.create(dart.library);
  const src__material_tree__group__material_tree_group = Object.create(dart.library);
  const src__material_tree__material_tree_filter = Object.create(dart.library);
  const src__material_tree__group__material_tree_group_flat = Object.create(dart.library);
  const src__material_tree__material_tree_rendering_options = Object.create(dart.library);
  const src__material_tree__material_tree_impl = Object.create(dart.library);
  const src__material_tree__material_tree_dropdown = Object.create(dart.library);
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  const $isNotEmpty = dartx.isNotEmpty;
  const $classes = dartx.classes;
  const $first = dartx.first;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let HasComponentRendererOfRendersValue$Object = () => (HasComponentRendererOfRendersValue$Object = dart.constFn(model__ui__has_renderer.HasComponentRenderer$(model__ui__has_renderer.RendersValue, core.Object)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let ListOfMaterialTreeGroupComponent = () => (ListOfMaterialTreeGroupComponent = dart.constFn(core.List$(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  const _pending = dart.privateName(src__material_tree__material_tree_expand_state, "_pending");
  const _expanded = dart.privateName(src__material_tree__material_tree_expand_state, "_expanded");
  const _expandEvents = dart.privateName(src__material_tree__material_tree_expand_state, "_expandEvents");
  src__material_tree__material_tree_expand_state.MaterialTreeExpandState = class MaterialTreeExpandState extends core.Object {
    get expanded() {
      return this[_expanded];
    }
    set expanded(expanded) {
      if (this[_expanded] == expanded) return;
      this[_expanded] = expanded;
      if (!dart.test(this[_pending])) {
        this[_pending] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_pending] = false;
          this[_expandEvents].add(this[_expanded]);
        }, VoidToNull()));
      }
    }
    get expandEvents() {
      return this[_expandEvents].stream.distinct();
    }
  };
  (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.new = function() {
    this[_pending] = false;
    this[_expanded] = false;
    this[_expandEvents] = StreamControllerOfbool().broadcast({sync: true});
  }).prototype = src__material_tree__material_tree_expand_state.MaterialTreeExpandState.prototype;
  dart.addTypeTests(src__material_tree__material_tree_expand_state.MaterialTreeExpandState);
  dart.setGetterSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: core.bool,
    expandEvents: async.Stream$(core.bool)
  }));
  dart.setSetterSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    expanded: core.bool
  }));
  dart.setFieldSignature(src__material_tree__material_tree_expand_state.MaterialTreeExpandState, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_expand_state.MaterialTreeExpandState.__proto__),
    [_pending]: dart.fieldType(core.bool),
    [_expanded]: dart.fieldType(core.bool),
    [_expandEvents]: dart.fieldType(StreamControllerOfbool())
  }));
  const _is_MaterialTreeRoot_default = Symbol('_is_MaterialTreeRoot_default');
  src__material_tree__material_tree_root.MaterialTreeRoot$ = dart.generic(T => {
    let SelectionContainerOfT = () => (SelectionContainerOfT = dart.constFn(model__selection__selection_container.SelectionContainer$(T)))();
    let HasFactoryRendererOfRendersValue$T = () => (HasFactoryRendererOfRendersValue$T = dart.constFn(model__ui__has_factory.HasFactoryRenderer$(model__ui__has_renderer.RendersValue, T)))();
    class MaterialTreeRoot extends core.Object {
      get isFiltered() {
        return this[isFiltered];
      }
      set isFiltered(value) {
        this[isFiltered] = value;
      }
      get optimizeForDropdown() {
        return false;
      }
      get supportsFiltering() {
        return model__selection__select.Filterable.is(this.options);
      }
      get supportsHierarchy() {
        return model__selection__select.Parent.is(this.options);
      }
      get allowParentSingleSelection() {
        return false;
      }
      get previouslyToggledNode() {
        return this[previouslyToggledNode];
      }
      set previouslyToggledNode(value) {
        this[previouslyToggledNode] = T._check(value);
      }
    }
    (MaterialTreeRoot.new = function() {
      this[isFiltered] = false;
      this[previouslyToggledNode] = null;
    }).prototype = MaterialTreeRoot.prototype;
    dart.addTypeTests(MaterialTreeRoot);
    MaterialTreeRoot.prototype[_is_MaterialTreeRoot_default] = true;
    const isFiltered = Symbol("MaterialTreeRoot.isFiltered");
    const previouslyToggledNode = Symbol("MaterialTreeRoot.previouslyToggledNode");
    MaterialTreeRoot[dart.implements] = () => [SelectionContainerOfT(), HasComponentRendererOfRendersValue$Object(), HasFactoryRendererOfRendersValue$T()];
    dart.setGetterSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getGetters(MaterialTreeRoot.__proto__),
      optimizeForDropdown: core.bool,
      supportsFiltering: core.bool,
      supportsHierarchy: core.bool,
      allowParentSingleSelection: core.bool
    }));
    dart.setFieldSignature(MaterialTreeRoot, () => ({
      __proto__: dart.getFields(MaterialTreeRoot.__proto__),
      isFiltered: dart.fieldType(core.bool),
      previouslyToggledNode: dart.fieldType(T)
    }));
    return MaterialTreeRoot;
  });
  src__material_tree__material_tree_root.MaterialTreeRoot = src__material_tree__material_tree_root.MaterialTreeRoot$();
  dart.addTypeTests(src__material_tree__material_tree_root.MaterialTreeRoot, _is_MaterialTreeRoot_default);
  const _root = dart.privateName(src__material_tree__material_tree_node, "_root");
  const _changeDetector = dart.privateName(src__material_tree__material_tree_node, "_changeDetector");
  const _EMPTY_OPTION_GROUP = dart.privateName(src__material_tree__material_tree_node, "_EMPTY_OPTION_GROUP");
  let const$;
  const _expandedNodes = dart.privateName(src__material_tree__material_tree_node, "_expandedNodes");
  const _disposer = dart.privateName(src__material_tree__material_tree_node, "_disposer");
  const _expandAll = dart.privateName(src__material_tree__material_tree_node, "_expandAll");
  const _group = dart.privateName(src__material_tree__material_tree_node, "_group");
  const _parent = dart.privateName(src__material_tree__material_tree_node, "_parent");
  const _isExpandable = dart.privateName(src__material_tree__material_tree_node, "_isExpandable");
  const _selectable = dart.privateName(src__material_tree__material_tree_node, "_selectable");
  let const$0;
  const _is_MaterialTreeNode_default = Symbol('_is_MaterialTreeNode_default');
  src__material_tree__material_tree_node.MaterialTreeNode$ = dart.generic(T => {
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    let IterableOfOptionGroupOfT = () => (IterableOfOptionGroupOfT = dart.constFn(core.Iterable$(OptionGroupOfT())))();
    let IdentityMapOfT$IterableOfOptionGroupOfT = () => (IdentityMapOfT$IterableOfOptionGroupOfT = dart.constFn(_js_helper.IdentityMap$(T, IterableOfOptionGroupOfT())))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let _NotAParentOfT$IterableOfOptionGroupOfT = () => (_NotAParentOfT$IterableOfOptionGroupOfT = dart.constFn(src__material_tree__material_tree_node._NotAParent$(T, IterableOfOptionGroupOfT())))();
    let ParentOfT$IterableOfOptionGroupOfT = () => (ParentOfT$IterableOfOptionGroupOfT = dart.constFn(model__selection__select.Parent$(T, IterableOfOptionGroupOfT())))();
    let SelectableOfT = () => (SelectableOfT = dart.constFn(src__model__selection__interfaces__selectable.Selectable$(T)))();
    let _AlwaysSelectableOfT = () => (_AlwaysSelectableOfT = dart.constFn(src__material_tree__material_tree_node._AlwaysSelectable$(T)))();
    let FutureOfIterableOfOptionGroupOfT = () => (FutureOfIterableOfOptionGroupOfT = dart.constFn(async.Future$(IterableOfOptionGroupOfT())))();
    let TToComponentFactory = () => (TToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [T])))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let MapOfT$IterableOfOptionGroupOfT = () => (MapOfT$IterableOfOptionGroupOfT = dart.constFn(core.Map$(T, IterableOfOptionGroupOfT())))();
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    class MaterialTreeNode extends core.Object {
      get expandAll() {
        return this[_expandAll];
      }
      set expandAll(expandAll) {
        if (expandAll == this[_expandAll]) return;
        this[_expandAll] = expandAll;
        dart.test(expandAll) ? this.expandAllOptions() : this.clearExpansions();
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      get group() {
        return this[_group];
      }
      set group(group) {
        OptionGroupOfT()._check(group);
        this[_disposer].dispose();
        this[_group] = group;
        if (!dart.test(this.expandAll)) {
          this[_expandedNodes][$clear]();
        }
        for (let key of group) {
          let manualExpand = false;
          if (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.is(key)) {
            manualExpand = key.expanded;
            this[_disposer].addStreamSubscription(core.bool, key.expandEvents.listen(dart.fn(newVal => {
              if (newVal == this[_expandedNodes][$containsKey](key)) return;
              if (dart.test(newVal)) {
                this.expandOption(key);
              } else {
                this.closeOption(key);
              }
            }, boolToNull())));
          }
          if (dart.test(this.expandAll) || dart.test(manualExpand)) {
            this.expandOption(key);
          }
        }
        this[_changeDetector].markForCheck();
      }
      clearExpansions() {
        this[_expandedNodes][$clear]();
        for (let option of this.group) {
          this.setExpandedState(option, false);
        }
        this[_changeDetector].markForCheck();
      }
      expandAllOptions() {
        for (let key of this.group) {
          this.expandOption(key);
        }
      }
      hasChildren(option) {
        T._check(option);
        return this[_parent].hasChildren(option);
      }
      isExpandable(option) {
        T._check(option);
        return this[_isExpandable](option);
      }
      isExpanded(option) {
        T._check(option);
        return this[_expandedNodes][$containsKey](option);
      }
      get isReadOnly() {
        return dart.equals(this[_root].selection, const$0 || (const$0 = dart.const(model__selection__selection_model.SelectionModel.empty())));
      }
      get isMultiSelect() {
        return model__selection__selection_model.MultiSelectionModel.is(this[_root].selection);
      }
      isSelectable(option) {
        T._check(option);
        return (dart.test(this.isMultiSelect) || dart.test(this.allowParentSingleSelection)) && this[_selectable].getSelectable(option) === src__model__selection__interfaces__selectable.SelectableOption.Selectable || !dart.test(this.isExpandable(option)) && this[_selectable].getSelectable(option) === src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
      showDisabledCheckbox(option) {
        return this[_selectable].getSelectable(T._check(option)) === src__model__selection__interfaces__selectable.SelectableOption.Disabled && !dart.test(this.hasChildren(T._check(option)));
      }
      isSelected(option) {
        T._check(option);
        return this[_root].selection.isSelected(option);
      }
      getChildGroups(option) {
        return this[_expandedNodes][$_get](option);
      }
      expandOption(option) {
        T._check(option);
        return async.async(IterableOfOptionGroupOfT(), (function* expandOption() {
          let childGroups = (yield this[_parent].childrenOf(option));
          this.setExpandedState(option, true);
          if (dart.test(this.expandAll) && childGroups != null) {
            for (let group of childGroups) {
              for (let option of group) {
                yield this.expandOption(option);
              }
            }
          }
          this[_changeDetector].markForCheck();
          return this[_expandedNodes][$_set](option, childGroups);
        }).bind(this));
      }
      closeOption(option) {
        T._check(option);
        let previousState = this[_expandedNodes][$remove](option);
        this.setExpandedState(option, false);
        this[_changeDetector].markForCheck();
        return previousState != null;
      }
      setExpandedState(option, state) {
        T._check(option);
        if (src__material_tree__material_tree_expand_state.MaterialTreeExpandState.is(option)) {
          option.expanded = state;
        }
      }
      toggleExpansion(option) {
        T._check(option);
        let didClose = this.closeOption(option);
        if (!dart.test(didClose)) {
          return this.expandOption(option);
        }
        return FutureOfIterableOfOptionGroupOfT().value();
      }
      setSelectionState(option, state) {
        T._check(option);
        if (this.isSelected(option) == state) return state;
        if (!dart.test(state)) {
          return !dart.test(this[_root].selection.deselect(option));
        } else {
          return this[_root].selection.select(option);
        }
      }
      toggleSelectionRangeInclusive(firstNode, lastNode, isSelection) {
        T._check(firstNode);
        T._check(lastNode);
        if (!dart.test(this.group.contains(firstNode)) || !dart.test(this.group.contains(lastNode))) return;
        let isCurrentlyToggling = false;
        for (let node of this.group) {
          if (!dart.equals(node, firstNode) && !dart.equals(node, lastNode) && !isCurrentlyToggling) {
            continue;
          }
          if (dart.test(isSelection)) {
            this[_root].selection.select(node);
          } else {
            this[_root].selection.deselect(node);
          }
          if (dart.equals(node, firstNode) || dart.equals(node, lastNode)) {
            if (!isCurrentlyToggling) {
              isCurrentlyToggling = true;
            } else {
              break;
            }
          }
        }
      }
      get useComponentRenderer() {
        return TToComponentFactory()._check(this[_root].factoryRenderer) != null || this[_root].componentRenderer != null;
      }
      get useItemRenderer() {
        return !dart.test(this.useComponentRenderer);
      }
      get showSelectionState() {
        return dart.test(this.isMultiSelect) || !dart.test(this[_root].optimizeForDropdown);
      }
      getComponentType(option) {
        return this[_root].componentRenderer != null ? this[_root].componentRenderer(option) : null;
      }
      getComponentFactory(option) {
        return TToComponentFactory()._check(this[_root].factoryRenderer) != null ? TToComponentFactory()._check(this[_root].factoryRenderer)(T._check(option)) : null;
      }
      getOptionAsText(option) {
        T._check(option);
        let l = TToString()._check(this[_root].itemRenderer);
        let itemRenderer = l != null ? l : dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
        return itemRenderer(option);
      }
      onDestroy() {
        this[_disposer].dispose();
        this[_disposer] = null;
      }
    }
    (MaterialTreeNode.new = function(root, changeDetector, opts) {
      let isExpandable = opts && 'isExpandable' in opts ? opts.isExpandable : null;
      this[_EMPTY_OPTION_GROUP] = new (OptionGroupOfT()).new(const$ || (const$ = dart.constList([], core.Null)));
      this[_expandedNodes] = new (IdentityMapOfT$IterableOfOptionGroupOfT()).new();
      this[_disposer] = new utils__disposer__disposer.Disposer.multi();
      this[_expandAll] = false;
      this[_group] = null;
      this[_parent] = null;
      this[_isExpandable] = null;
      this[_selectable] = null;
      this[allowParentSingleSelection] = false;
      this[_root] = root;
      this[_changeDetector] = changeDetector;
      this[_group] = this[_EMPTY_OPTION_GROUP];
      if (!dart.test(this[_root].supportsHierarchy)) {
        this[_isExpandable] = dart.fn(_ => false, TTobool());
        this[_parent] = new (_NotAParentOfT$IterableOfOptionGroupOfT()).new();
      } else {
        this[_isExpandable] = isExpandable != null ? isExpandable : dart.bind(this, 'hasChildren');
        this[_parent] = ParentOfT$IterableOfOptionGroupOfT().as(this[_root].options);
      }
      let options = this[_root].options;
      if (SelectableOfT().is(options)) {
        this[_selectable] = options;
      } else {
        this[_selectable] = new (_AlwaysSelectableOfT()).new();
      }
    }).prototype = MaterialTreeNode.prototype;
    dart.addTypeTests(MaterialTreeNode);
    MaterialTreeNode.prototype[_is_MaterialTreeNode_default] = true;
    const allowParentSingleSelection = Symbol("MaterialTreeNode.allowParentSingleSelection");
    dart.setMethodSignature(MaterialTreeNode, () => ({
      __proto__: dart.getMethods(MaterialTreeNode.__proto__),
      clearExpansions: dart.fnType(dart.void, []),
      expandAllOptions: dart.fnType(dart.void, []),
      hasChildren: dart.fnType(core.bool, [core.Object]),
      isExpandable: dart.fnType(core.bool, [core.Object]),
      isExpanded: dart.fnType(core.bool, [core.Object]),
      isSelectable: dart.fnType(core.bool, [core.Object]),
      showDisabledCheckbox: dart.fnType(core.bool, [dart.dynamic]),
      isSelected: dart.fnType(core.bool, [core.Object]),
      getChildGroups: dart.fnType(core.Iterable$(model__selection__selection_options.OptionGroup), [dart.dynamic]),
      expandOption: dart.fnType(async.Future$(core.Iterable$(model__selection__selection_options.OptionGroup$(T))), [core.Object]),
      closeOption: dart.fnType(core.bool, [core.Object]),
      setExpandedState: dart.fnType(dart.void, [core.Object, core.bool]),
      toggleExpansion: dart.fnType(async.Future$(core.Iterable$(model__selection__selection_options.OptionGroup$(T))), [core.Object]),
      setSelectionState: dart.fnType(core.bool, [core.Object, core.bool]),
      toggleSelectionRangeInclusive: dart.fnType(dart.void, [core.Object, core.Object, core.bool]),
      getComponentType: dart.fnType(core.Type, [dart.dynamic]),
      getComponentFactory: dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]),
      getOptionAsText: dart.fnType(core.String, [core.Object]),
      onDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getGetters(MaterialTreeNode.__proto__),
      expandAll: core.bool,
      group: model__selection__selection_options.OptionGroup$(T),
      isReadOnly: core.bool,
      isMultiSelect: core.bool,
      useComponentRenderer: core.bool,
      useItemRenderer: core.bool,
      showSelectionState: core.bool
    }));
    dart.setSetterSignature(MaterialTreeNode, () => ({
      __proto__: dart.getSetters(MaterialTreeNode.__proto__),
      expandAll: core.bool,
      group: model__selection__selection_options.OptionGroup$(T)
    }));
    dart.setFieldSignature(MaterialTreeNode, () => ({
      __proto__: dart.getFields(MaterialTreeNode.__proto__),
      [_EMPTY_OPTION_GROUP]: dart.finalFieldType(OptionGroupOfT()),
      [_expandedNodes]: dart.finalFieldType(MapOfT$IterableOfOptionGroupOfT()),
      [_disposer]: dart.fieldType(utils__disposer__disposer.Disposer),
      [_root]: dart.finalFieldType(MaterialTreeRootOfT()),
      [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
      [_expandAll]: dart.fieldType(core.bool),
      [_group]: dart.fieldType(OptionGroupOfT()),
      [_parent]: dart.fieldType(ParentOfT$IterableOfOptionGroupOfT()),
      [_isExpandable]: dart.fieldType(TTobool()),
      [_selectable]: dart.fieldType(SelectableOfT()),
      allowParentSingleSelection: dart.fieldType(core.bool)
    }));
    return MaterialTreeNode;
  });
  src__material_tree__material_tree_node.MaterialTreeNode = src__material_tree__material_tree_node.MaterialTreeNode$();
  dart.addTypeTests(src__material_tree__material_tree_node.MaterialTreeNode, _is_MaterialTreeNode_default);
  const _is__AlwaysSelectable_default = Symbol('_is__AlwaysSelectable_default');
  src__material_tree__material_tree_node._AlwaysSelectable$ = dart.generic(T => {
    let SelectableOfT = () => (SelectableOfT = dart.constFn(src__model__selection__interfaces__selectable.Selectable$(T)))();
    class _AlwaysSelectable extends core.Object {
      getSelectable(item) {
        T._check(item);
        return src__model__selection__interfaces__selectable.SelectableOption.Selectable;
      }
    }
    (_AlwaysSelectable.new = function() {
    }).prototype = _AlwaysSelectable.prototype;
    dart.addTypeTests(_AlwaysSelectable);
    _AlwaysSelectable.prototype[_is__AlwaysSelectable_default] = true;
    _AlwaysSelectable[dart.implements] = () => [SelectableOfT()];
    dart.setMethodSignature(_AlwaysSelectable, () => ({
      __proto__: dart.getMethods(_AlwaysSelectable.__proto__),
      getSelectable: dart.fnType(src__model__selection__interfaces__selectable.SelectableOption, [core.Object])
    }));
    return _AlwaysSelectable;
  });
  src__material_tree__material_tree_node._AlwaysSelectable = src__material_tree__material_tree_node._AlwaysSelectable$();
  dart.addTypeTests(src__material_tree__material_tree_node._AlwaysSelectable, _is__AlwaysSelectable_default);
  const _is__NotAParent_default = Symbol('_is__NotAParent_default');
  src__material_tree__material_tree_node._NotAParent$ = dart.generic((P, C) => {
    let ParentOfP$C = () => (ParentOfP$C = dart.constFn(model__selection__select.Parent$(P, C)))();
    class _NotAParent extends core.Object {
      hasChildren(item) {
        P._check(item);
        return false;
      }
      childrenOf(parent, filterQuery) {
        P._check(parent);
        if (filterQuery === void 0) filterQuery = null;
        dart.throw(new core.UnsupportedError.new("Does not support hierarchy"));
      }
    }
    (_NotAParent.new = function() {
    }).prototype = _NotAParent.prototype;
    dart.addTypeTests(_NotAParent);
    _NotAParent.prototype[_is__NotAParent_default] = true;
    _NotAParent[dart.implements] = () => [ParentOfP$C()];
    dart.setMethodSignature(_NotAParent, () => ({
      __proto__: dart.getMethods(_NotAParent.__proto__),
      hasChildren: dart.fnType(core.bool, [core.Object]),
      childrenOf: dart.fnType(src__utils__async__disposable_future.DisposableFuture$(C), [core.Object], [core.Object])
    }));
    return _NotAParent;
  });
  src__material_tree__material_tree_node._NotAParent = src__material_tree__material_tree_node._NotAParent$();
  dart.addTypeTests(src__material_tree__material_tree_node._NotAParent, _is__NotAParent_default);
  dart.defineLazy(src__material_tree__group__material_tree_group, {
    /*src__material_tree__group__material_tree_group.materialTreeLeftPaddingToken*/get materialTreeLeftPaddingToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("MaterialTreeGroupComponent_materialTreeLeftPaddingToken"));
    }
  });
  const _root$ = dart.privateName(src__material_tree__group__material_tree_group, "_root");
  const _dropdownHandle = dart.privateName(src__material_tree__group__material_tree_group, "_dropdownHandle");
  const _maxInitialOptionsShown = dart.privateName(src__material_tree__group__material_tree_group, "_maxInitialOptionsShown");
  const _visibleGroup = dart.privateName(src__material_tree__group__material_tree_group, "_visibleGroup");
  const _sliceOptionGroup = dart.privateName(src__material_tree__group__material_tree_group, "_sliceOptionGroup");
  const _is_MaterialTreeGroupComponent_default = Symbol('_is_MaterialTreeGroupComponent_default');
  src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$ = dart.generic(T => {
    let MaterialTreeRootOfT = () => (MaterialTreeRootOfT = dart.constFn(src__material_tree__material_tree_root.MaterialTreeRoot$(T)))();
    let OptionGroupOfT = () => (OptionGroupOfT = dart.constFn(model__selection__selection_options.OptionGroup$(T)))();
    class MaterialTreeGroupComponent extends src__material_tree__material_tree_node.MaterialTreeNode$(T) {
      get level() {
        return this[level];
      }
      set level(value) {
        this[level] = value;
      }
      get parentHasCheckbox() {
        return this[parentHasCheckbox];
      }
      set parentHasCheckbox(value) {
        this[parentHasCheckbox] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      get maxInitialOptionsShown() {
        return this[_maxInitialOptionsShown];
      }
      set maxInitialOptionsShown(value) {
        this[_maxInitialOptionsShown] = value;
        if (this[_maxInitialOptionsShown] != null) {
          this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
        }
      }
      get visibleGroup() {
        return this[_visibleGroup];
      }
      get fixedPadding() {
        return this[fixedPadding];
      }
      set fixedPadding(value) {
        super.fixedPadding = value;
      }
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
      showCheckbox(option) {
        return dart.test(this.showSelectionState) && (dart.test(this.isSelectable(T._check(option))) || dart.test(this.showDisabledCheckbox(option)));
      }
      getIndent(option) {
        let padding = 0;
        if (dart.notNull(this.level) > 0) {
          padding = padding + (dart.notNull(this.level) - 1) * dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.rowIndentationStep);
          if (!dart.test(this.showCheckbox(option)) || dart.test(this.parentHasCheckbox)) {
            padding = padding + dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.checkboxWidth);
          }
        }
        return dart.str(padding) + "px";
      }
      handleExpansion(e, option) {
        this.toggleExpansion(T._check(option));
        e.stopPropagation();
      }
      handleSelectionOrExpansion(e, option) {
        if (!dart.test(this.isExpandable(T._check(option))) && dart.test(this.isSelectable(T._check(option))) || dart.test(this.allowParentSingleSelection) && dart.test(this.isSelectable(T._check(option))) || dart.test(this.isMultiSelect) && dart.test(this.isSelectable(T._check(option)))) {
          let previouslyToggledNode = this[_root$].previouslyToggledNode;
          this[_root$].previouslyToggledNode = option;
          this.setSelectionState(T._check(option), !dart.test(this.isSelected(T._check(option))));
          if (dart.test(this.isMultiSelect) && previouslyToggledNode != null && html.MouseEvent.is(e) && dart.test(e.shiftKey)) {
            this.toggleSelectionRangeInclusive(T._check(previouslyToggledNode), T._check(option), this.isSelected(T._check(previouslyToggledNode)));
          }
          if (!dart.test(this.isMultiSelect) && !dart.test(this.allowParentSingleSelection)) {
            this[_dropdownHandle] == null ? null : this[_dropdownHandle].close();
          }
        } else {
          this.toggleExpansion(T._check(option));
        }
        e.stopPropagation();
      }
      [_sliceOptionGroup](end) {
        if (dart.notNull(end) < dart.notNull(this.group.length)) {
          this[_visibleGroup] = this.group.slicedOptionGroup(0, end);
        } else {
          this[_visibleGroup] = this.group;
        }
      }
      set group(_group) {
        super.group = OptionGroupOfT()._check(_group);
        if (this[_maxInitialOptionsShown] == null) {
          this[_visibleGroup] = this.group;
          return;
        }
        this[_sliceOptionGroup](this[_maxInitialOptionsShown]);
      }
      get group() {
        return super.group;
      }
      viewMoreOptions(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this[_visibleGroup] = this.group;
      }
      get viewMoreLinkVisible() {
        return this[_maxInitialOptionsShown] != null && !(this[_visibleGroup] == this.group);
      }
      ngOnDestroy() {
        this.onDestroy();
      }
    }
    (MaterialTreeGroupComponent.new = function(root, changeDetector, dropdownHandle, constantLeftPadding) {
      if (dropdownHandle === void 0) dropdownHandle = null;
      if (constantLeftPadding === void 0) constantLeftPadding = null;
      this[level] = 0;
      this[parentHasCheckbox] = false;
      this[allowParentSingleSelection] = false;
      this[_maxInitialOptionsShown] = null;
      this[_visibleGroup] = null;
      this[isMaterialTreeGroup] = true;
      this[_root$] = root;
      this[_dropdownHandle] = dropdownHandle;
      this[fixedPadding] = dart.str((() => {
        let l = constantLeftPadding;
        return l != null ? l : src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding;
      })()) + "px";
      MaterialTreeGroupComponent.__proto__.new.call(this, MaterialTreeRootOfT()._check(root), changeDetector);
    }).prototype = MaterialTreeGroupComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupComponent);
    MaterialTreeGroupComponent.prototype[_is_MaterialTreeGroupComponent_default] = true;
    const level = Symbol("MaterialTreeGroupComponent.level");
    const parentHasCheckbox = Symbol("MaterialTreeGroupComponent.parentHasCheckbox");
    const allowParentSingleSelection = Symbol("MaterialTreeGroupComponent.allowParentSingleSelection");
    const fixedPadding = Symbol("MaterialTreeGroupComponent.fixedPadding");
    const isMaterialTreeGroup = Symbol("MaterialTreeGroupComponent.isMaterialTreeGroup");
    MaterialTreeGroupComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
    dart.setMethodSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeGroupComponent.__proto__),
      showCheckbox: dart.fnType(core.bool, [dart.dynamic]),
      getIndent: dart.fnType(core.String, [dart.dynamic]),
      handleExpansion: dart.fnType(dart.void, [html.Event, core.Object]),
      handleSelectionOrExpansion: dart.fnType(dart.void, [html.Event, core.Object]),
      [_sliceOptionGroup]: dart.fnType(dart.void, [core.int]),
      viewMoreOptions: dart.fnType(dart.void, [html.Event]),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeGroupComponent.__proto__),
      maxInitialOptionsShown: core.int,
      visibleGroup: model__selection__selection_options.OptionGroup,
      viewMoreLinkVisible: core.bool
    }));
    dart.setSetterSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getSetters(MaterialTreeGroupComponent.__proto__),
      maxInitialOptionsShown: core.int,
      group: model__selection__selection_options.OptionGroup
    }));
    dart.setFieldSignature(MaterialTreeGroupComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupComponent.__proto__),
      [_dropdownHandle]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
      level: dart.fieldType(core.int),
      parentHasCheckbox: dart.fieldType(core.bool),
      allowParentSingleSelection: dart.fieldType(core.bool),
      [_root$]: dart.finalFieldType(src__material_tree__material_tree_root.MaterialTreeRoot),
      [_maxInitialOptionsShown]: dart.fieldType(core.int),
      [_visibleGroup]: dart.fieldType(model__selection__selection_options.OptionGroup),
      fixedPadding: dart.finalFieldType(core.String),
      isMaterialTreeGroup: dart.finalFieldType(core.bool)
    }));
    return MaterialTreeGroupComponent;
  });
  src__material_tree__group__material_tree_group.MaterialTreeGroupComponent = src__material_tree__group__material_tree_group.MaterialTreeGroupComponent$();
  dart.defineLazy(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, {
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.hostRole*/get hostRole() {
      return "group";
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.defaultConstantLeftPadding*/get defaultConstantLeftPadding() {
      return 24;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep*/get baseGridStep() {
      return 8;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.rowIndentationStep*/get rowIndentationStep() {
      return dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.checkboxWidth*/get checkboxWidth() {
      return dart.notNull(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.baseGridStep) * 5;
    },
    /*src__material_tree__group__material_tree_group.MaterialTreeGroupComponent.viewMoreMsg*/get viewMoreMsg() {
      return intl$.Intl.message("View more", {desc: "Label for a link that allows user to see the collapsed options."});
    }
  });
  dart.addTypeTests(src__material_tree__group__material_tree_group.MaterialTreeGroupComponent, _is_MaterialTreeGroupComponent_default);
  const _treeRoot = dart.privateName(src__material_tree__material_tree_filter, "_treeRoot");
  const _onFocusController = dart.privateName(src__material_tree__material_tree_filter, "_onFocusController");
  const _onFilteredController = dart.privateName(src__material_tree__material_tree_filter, "_onFilteredController");
  const _filterable = dart.privateName(src__material_tree__material_tree_filter, "_filterable");
  const _inputText = dart.privateName(src__material_tree__material_tree_filter, "_inputText");
  const _lastFilterFuture = dart.privateName(src__material_tree__material_tree_filter, "_lastFilterFuture");
  const _updateVisibleItems = dart.privateName(src__material_tree__material_tree_filter, "_updateVisibleItems");
  src__material_tree__material_tree_filter.MaterialTreeFilterComponent = class MaterialTreeFilterComponent extends core.Object {
    get materialInput() {
      return this[materialInput];
    }
    set materialInput(value) {
      this[materialInput] = value;
    }
    get inputText() {
      return this[_inputText];
    }
    set inputText(inputText) {
      if (this[_inputText] != inputText) {
        this[_inputText] = inputText;
        this[_updateVisibleItems]();
      }
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    set filterable(filterable) {
      if (!dart.equals(this[_filterable], filterable)) {
        this[_filterable] = filterable;
        let query = filterable.currentQuery;
        if (query != null) {
          this[_inputText] = dart.toString(query);
        }
        this[_updateVisibleItems]();
      }
    }
    get hasFilterable() {
      return this[_filterable] != null;
    }
    handleFocus() {
      this[_onFocusController].add(null);
    }
    focus() {
      this.materialInput.focus();
    }
    clear() {
      this.inputText = "";
    }
    get onFocus() {
      return this[_onFocusController].stream;
    }
    get onFiltered() {
      return this[_onFilteredController].stream;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    [_updateVisibleItems]() {
      let t = this[_lastFilterFuture];
      t == null ? null : t.dispose();
      this[_lastFilterFuture] = this[_filterable].filter(this[_inputText]);
      this[_treeRoot].isFiltered = this[_inputText][$isNotEmpty];
      this[_onFilteredController].add(null);
    }
  };
  (src__material_tree__material_tree_filter.MaterialTreeFilterComponent.new = function(treeRoot) {
    this[_onFocusController] = async.StreamController.broadcast({sync: true});
    this[_onFilteredController] = async.StreamController.broadcast({sync: true});
    this[materialInput] = null;
    this[_filterable] = null;
    this[_inputText] = "";
    this[_lastFilterFuture] = null;
    this[leadingGlyph] = null;
    this[placeholder] = null;
    this[_treeRoot] = treeRoot;
    if ((this[_treeRoot] == null ? null : this[_treeRoot].supportsFiltering) === true) {
      this.filterable = model__selection__select.Filterable.as(this[_treeRoot].options);
    }
  }).prototype = src__material_tree__material_tree_filter.MaterialTreeFilterComponent.prototype;
  dart.addTypeTests(src__material_tree__material_tree_filter.MaterialTreeFilterComponent);
  const materialInput = Symbol("MaterialTreeFilterComponent.materialInput");
  const leadingGlyph = Symbol("MaterialTreeFilterComponent.leadingGlyph");
  const placeholder = Symbol("MaterialTreeFilterComponent.placeholder");
  dart.setMethodSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getMethods(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    handleFocus: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, []),
    [_updateVisibleItems]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getGetters(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: core.String,
    hasFilterable: core.bool,
    onFocus: async.Stream,
    onFiltered: async.Stream
  }));
  dart.setSetterSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getSetters(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    inputText: core.String,
    filterable: model__selection__select.Filterable
  }));
  dart.setFieldSignature(src__material_tree__material_tree_filter.MaterialTreeFilterComponent, () => ({
    __proto__: dart.getFields(src__material_tree__material_tree_filter.MaterialTreeFilterComponent.__proto__),
    [_onFocusController]: dart.finalFieldType(async.StreamController),
    [_onFilteredController]: dart.finalFieldType(async.StreamController),
    [_treeRoot]: dart.finalFieldType(src__material_tree__material_tree_root.MaterialTreeRoot),
    materialInput: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_filterable]: dart.fieldType(model__selection__select.Filterable),
    [_inputText]: dart.fieldType(core.String),
    [_lastFilterFuture]: dart.fieldType(src__utils__async__disposable_future.DisposableFuture),
    leadingGlyph: dart.fieldType(core.String),
    placeholder: dart.fieldType(core.String)
  }));
  const _is_MaterialTreeGroupFlatListComponent_default = Symbol('_is_MaterialTreeGroupFlatListComponent_default');
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$ = dart.generic(T => {
    class MaterialTreeGroupFlatListComponent extends src__material_tree__material_tree_node.MaterialTreeNode$(T) {
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
    }
    (MaterialTreeGroupFlatListComponent.new = function(root, changeDetector) {
      this[isMaterialTreeGroup] = true;
      MaterialTreeGroupFlatListComponent.__proto__.new.call(this, root, changeDetector);
    }).prototype = MaterialTreeGroupFlatListComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatListComponent);
    MaterialTreeGroupFlatListComponent.prototype[_is_MaterialTreeGroupFlatListComponent_default] = true;
    const isMaterialTreeGroup = Symbol("MaterialTreeGroupFlatListComponent.isMaterialTreeGroup");
    dart.setFieldSignature(MaterialTreeGroupFlatListComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatListComponent.__proto__),
      isMaterialTreeGroup: dart.finalFieldType(core.bool)
    }));
    return MaterialTreeGroupFlatListComponent;
  });
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatListComponent, _is_MaterialTreeGroupFlatListComponent_default);
  const _dropdownHandle$ = dart.privateName(src__material_tree__group__material_tree_group_flat, "_dropdownHandle");
  const _is_MaterialTreeGroupFlatRadioComponent_default = Symbol('_is_MaterialTreeGroupFlatRadioComponent_default');
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$ = dart.generic(T => {
    class MaterialTreeGroupFlatRadioComponent extends src__material_tree__material_tree_node.MaterialTreeNode$(T) {
      get selectionModel() {
        return this[selectionModel];
      }
      set selectionModel(value) {
        super.selectionModel = value;
      }
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
      setSelectionState(option, state) {
        T._check(option);
        let retVal = super.setSelectionState(option, state);
        this[_dropdownHandle$] == null ? null : this[_dropdownHandle$].close();
        return retVal;
      }
    }
    (MaterialTreeGroupFlatRadioComponent.new = function(root, changeDetector, dropdownHandle) {
      if (dropdownHandle === void 0) dropdownHandle = null;
      this[isMaterialTreeGroup] = true;
      this[_dropdownHandle$] = dropdownHandle;
      this[selectionModel] = root.selection;
      MaterialTreeGroupFlatRadioComponent.__proto__.new.call(this, root, changeDetector);
    }).prototype = MaterialTreeGroupFlatRadioComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatRadioComponent);
    MaterialTreeGroupFlatRadioComponent.prototype[_is_MaterialTreeGroupFlatRadioComponent_default] = true;
    const selectionModel = Symbol("MaterialTreeGroupFlatRadioComponent.selectionModel");
    const isMaterialTreeGroup = Symbol("MaterialTreeGroupFlatRadioComponent.isMaterialTreeGroup");
    dart.setMethodSignature(MaterialTreeGroupFlatRadioComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeGroupFlatRadioComponent.__proto__),
      setSelectionState: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setFieldSignature(MaterialTreeGroupFlatRadioComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatRadioComponent.__proto__),
      [_dropdownHandle$]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
      selectionModel: dart.finalFieldType(model__selection__selection_model.SelectionModel),
      isMaterialTreeGroup: dart.finalFieldType(core.bool)
    }));
    return MaterialTreeGroupFlatRadioComponent;
  });
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatRadioComponent, _is_MaterialTreeGroupFlatRadioComponent_default);
  const _is_MaterialTreeGroupFlatCheckComponent_default = Symbol('_is_MaterialTreeGroupFlatCheckComponent_default');
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$ = dart.generic(T => {
    class MaterialTreeGroupFlatCheckComponent extends src__material_tree__material_tree_node.MaterialTreeNode$(T) {
      get isMaterialTreeGroup() {
        return this[isMaterialTreeGroup];
      }
      set isMaterialTreeGroup(value) {
        super.isMaterialTreeGroup = value;
      }
    }
    (MaterialTreeGroupFlatCheckComponent.new = function(root, changeDetector, dropdownHandle) {
      if (dropdownHandle === void 0) dropdownHandle = null;
      this[isMaterialTreeGroup] = true;
      this[_dropdownHandle$] = dropdownHandle;
      MaterialTreeGroupFlatCheckComponent.__proto__.new.call(this, root, changeDetector);
    }).prototype = MaterialTreeGroupFlatCheckComponent.prototype;
    dart.addTypeTests(MaterialTreeGroupFlatCheckComponent);
    MaterialTreeGroupFlatCheckComponent.prototype[_is_MaterialTreeGroupFlatCheckComponent_default] = true;
    const isMaterialTreeGroup = Symbol("MaterialTreeGroupFlatCheckComponent.isMaterialTreeGroup");
    dart.setFieldSignature(MaterialTreeGroupFlatCheckComponent, () => ({
      __proto__: dart.getFields(MaterialTreeGroupFlatCheckComponent.__proto__),
      [_dropdownHandle$]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle),
      isMaterialTreeGroup: dart.finalFieldType(core.bool)
    }));
    return MaterialTreeGroupFlatCheckComponent;
  });
  src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent = src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$();
  dart.addTypeTests(src__material_tree__group__material_tree_group_flat.MaterialTreeGroupFlatCheckComponent, _is_MaterialTreeGroupFlatCheckComponent_default);
  src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions = class MaterialTreeRenderingOptions extends core.Object {};
  (src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions.new = function() {
  }).prototype = src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions.prototype;
  dart.addTypeTests(src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions);
  const _is_MaterialTreeComponent_default = Symbol('_is_MaterialTreeComponent_default');
  src__material_tree__material_tree_impl.MaterialTreeComponent$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    const Object_MaterialTreeRoot$ = class Object_MaterialTreeRoot extends core.Object {};
    (Object_MaterialTreeRoot$.new = function() {
      src__material_tree__material_tree_root.MaterialTreeRoot$(T).new.call(this);
    }).prototype = Object_MaterialTreeRoot$.prototype;
    dart.applyMixin(Object_MaterialTreeRoot$, src__material_tree__material_tree_root.MaterialTreeRoot$(T));
    const Object_SelectionContainer$ = class Object_SelectionContainer extends Object_MaterialTreeRoot$ {};
    (Object_SelectionContainer$.new = function() {
      model__selection__selection_container.SelectionContainer$(T).new.call(this);
      Object_SelectionContainer$.__proto__.new.call(this);
    }).prototype = Object_SelectionContainer$.prototype;
    dart.applyMixin(Object_SelectionContainer$, model__selection__selection_container.SelectionContainer$(T));
    class MaterialTreeComponent extends Object_SelectionContainer$ {
      get optimizeForDropdown() {
        return this[optimizeForDropdown];
      }
      set optimizeForDropdown(value) {
        this[optimizeForDropdown] = value;
      }
      get renderingOptions() {
        return this[renderingOptions$];
      }
      set renderingOptions(value) {
        super.renderingOptions = value;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set options(value) {
        SelectionOptionsOfT()._check(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set selection(value) {
        SelectionModelOfT()._check(value);
        super.selection = value;
      }
      get selection() {
        return super.selection;
      }
      get expandAll() {
        return this[expandAll];
      }
      set expandAll(value) {
        this[expandAll] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      shouldExpand(group, index) {
        if (this.renderingOptions == null) return this.expandAll;
        return dart.test(this.expandAll) || dart.test(this.renderingOptions.shouldExpand(group, index));
      }
      maxInitialOptionsShown(group, index) {
        if (this.renderingOptions == null) return null;
        return this.renderingOptions.maxInitialOptionsShown(group, index);
      }
      get treeGroupNodes() {
        return this[treeGroupNodes];
      }
      set treeGroupNodes(value) {
        this[treeGroupNodes] = value;
      }
      collapseAllTreeGroups() {
        for (let tree of this.treeGroupNodes) {
          tree.clearExpansions();
        }
      }
      expandAllTreeGroups() {
        for (let tree of this.treeGroupNodes) {
          tree.expandAllOptions();
        }
      }
      get showFlatCheck() {
        return model__selection__selection_model.MultiSelectionModel.is(this.selection);
      }
      get showFlatList() {
        return model__selection__selection_model.NullSelectionModel.is(this.selection);
      }
      get showFlatRadio() {
        return !dart.test(this.showFlatList) && !dart.test(this.showFlatCheck);
      }
      get role() {
        if (dart.test(this.supportsHierarchy)) {
          return "tree";
        } else if (dart.test(this.showFlatCheck) || dart.test(this.showFlatRadio)) {
          return "listbox";
        } else {
          return "list";
        }
      }
      get hostMultiselectable() {
        return dart.str(this.showFlatCheck);
      }
      get hostReadonly() {
        return dart.str(this.showFlatList);
      }
    }
    (MaterialTreeComponent.new = function(parentTreeRoot, renderingOptions) {
      this[expandAll] = false;
      this[allowParentSingleSelection] = false;
      this[treeGroupNodes] = null;
      this[renderingOptions$] = renderingOptions;
      this[optimizeForDropdown] = (parentTreeRoot == null ? null : parentTreeRoot.optimizeForDropdown) === true;
      MaterialTreeComponent.__proto__.new.call(this);
      this.selection = SelectionModelOfT().empty();
    }).prototype = MaterialTreeComponent.prototype;
    dart.addTypeTests(MaterialTreeComponent);
    MaterialTreeComponent.prototype[_is_MaterialTreeComponent_default] = true;
    const optimizeForDropdown = Symbol("MaterialTreeComponent.optimizeForDropdown");
    const renderingOptions$ = Symbol("MaterialTreeComponent.renderingOptions");
    const expandAll = Symbol("MaterialTreeComponent.expandAll");
    const allowParentSingleSelection = Symbol("MaterialTreeComponent.allowParentSingleSelection");
    const treeGroupNodes = Symbol("MaterialTreeComponent.treeGroupNodes");
    dart.setMethodSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeComponent.__proto__),
      shouldExpand: dart.fnType(core.bool, [model__selection__selection_options.OptionGroup, core.int]),
      maxInitialOptionsShown: dart.fnType(core.int, [model__selection__selection_options.OptionGroup, core.int]),
      collapseAllTreeGroups: dart.fnType(dart.void, []),
      expandAllTreeGroups: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeComponent.__proto__),
      showFlatCheck: core.bool,
      showFlatList: core.bool,
      showFlatRadio: core.bool,
      role: core.String,
      hostMultiselectable: core.String,
      hostReadonly: core.String
    }));
    dart.setFieldSignature(MaterialTreeComponent, () => ({
      __proto__: dart.getFields(MaterialTreeComponent.__proto__),
      optimizeForDropdown: dart.fieldType(core.bool),
      renderingOptions: dart.finalFieldType(src__material_tree__material_tree_rendering_options.MaterialTreeRenderingOptions),
      expandAll: dart.fieldType(core.bool),
      allowParentSingleSelection: dart.fieldType(core.bool),
      treeGroupNodes: dart.fieldType(ListOfMaterialTreeGroupComponent())
    }));
    return MaterialTreeComponent;
  });
  src__material_tree__material_tree_impl.MaterialTreeComponent = src__material_tree__material_tree_impl.MaterialTreeComponent$();
  dart.addTypeTests(src__material_tree__material_tree_impl.MaterialTreeComponent, _is_MaterialTreeComponent_default);
  const _domService = dart.privateName(src__material_tree__material_tree_dropdown, "_domService");
  const _expandAll$ = dart.privateName(src__material_tree__material_tree_dropdown, "_expandAll");
  const _placeholder = dart.privateName(src__material_tree__material_tree_dropdown, "_placeholder");
  const _visible = dart.privateName(src__material_tree__material_tree_dropdown, "_visible");
  const _customPopupPositions = dart.privateName(src__material_tree__material_tree_dropdown, "_customPopupPositions");
  const _visibleStream = dart.privateName(src__material_tree__material_tree_dropdown, "_visibleStream");
  const _defaultPopupPositions = dart.privateName(src__material_tree__material_tree_dropdown, "_defaultPopupPositions");
  const _maybeFocusFilterComponent = dart.privateName(src__material_tree__material_tree_dropdown, "_maybeFocusFilterComponent");
  const _is_MaterialTreeDropdownComponent_default = Symbol('_is_MaterialTreeDropdownComponent_default');
  src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$ = dart.generic(T => {
    let SelectionModelOfT = () => (SelectionModelOfT = dart.constFn(model__selection__selection_model.SelectionModel$(T)))();
    let SelectionOptionsOfT = () => (SelectionOptionsOfT = dart.constFn(model__selection__selection_options.SelectionOptions$(T)))();
    const Object_DropdownHandle$ = class Object_DropdownHandle extends core.Object {};
    (Object_DropdownHandle$.new = function() {
      mixins__material_dropdown_base.DropdownHandle.new.call(this);
    }).prototype = Object_DropdownHandle$.prototype;
    dart.applyMixin(Object_DropdownHandle$, mixins__material_dropdown_base.DropdownHandle);
    const Object_MaterialTreeRoot$ = class Object_MaterialTreeRoot extends Object_DropdownHandle$ {};
    (Object_MaterialTreeRoot$.new = function() {
      src__material_tree__material_tree_root.MaterialTreeRoot$(T).new.call(this);
      Object_MaterialTreeRoot$.__proto__.new.call(this);
    }).prototype = Object_MaterialTreeRoot$.prototype;
    dart.applyMixin(Object_MaterialTreeRoot$, src__material_tree__material_tree_root.MaterialTreeRoot$(T));
    const Object_SelectionContainer$ = class Object_SelectionContainer extends Object_MaterialTreeRoot$ {};
    (Object_SelectionContainer$.new = function() {
      model__selection__selection_container.SelectionContainer$(T).new.call(this);
      Object_SelectionContainer$.__proto__.new.call(this);
    }).prototype = Object_SelectionContainer$.prototype;
    dart.applyMixin(Object_SelectionContainer$, model__selection__selection_container.SelectionContainer$(T));
    class MaterialTreeDropdownComponent extends Object_SelectionContainer$ {
      get materialTreeFilterComponent() {
        return this[materialTreeFilterComponent];
      }
      set materialTreeFilterComponent(value) {
        this[materialTreeFilterComponent] = value;
      }
      get visibleChange() {
        return this[_visibleStream].stream;
      }
      get popupClassName() {
        return this[popupClassName];
      }
      set popupClassName(value) {
        super.popupClassName = value;
      }
      set expandAll(value) {
        this[_expandAll$] = value;
      }
      get showFilterInsidePopup() {
        return this[showFilterInsidePopup];
      }
      set showFilterInsidePopup(value) {
        this[showFilterInsidePopup] = value;
      }
      get shouldExpandAllWhenFiltered() {
        return this[shouldExpandAllWhenFiltered];
      }
      set shouldExpandAllWhenFiltered(value) {
        this[shouldExpandAllWhenFiltered] = value;
      }
      get allowParentSingleSelection() {
        return this[allowParentSingleSelection];
      }
      set allowParentSingleSelection(value) {
        this[allowParentSingleSelection] = value;
      }
      get labelRenderer() {
        return this[labelRenderer];
      }
      set labelRenderer(value) {
        this[labelRenderer] = value;
      }
      get showFilterInsideButton() {
        return dart.test(this.supportsFiltering) && !dart.test(this.showFilterInsidePopup);
      }
      get filterableOptions() {
        return model__selection__select.Filterable.is(this.options) ? model__selection__select.Filterable.as(this.options) : dart.throw(new core.StateError.new("The SelectionOptions provided should implement Filterable"));
      }
      get expandAll() {
        return dart.test(this[_expandAll$]) || dart.test(this.isFiltered) && dart.test(this.shouldExpandAllWhenFiltered);
      }
      get placeholder() {
        if (!model__selection__selection_model.MultiSelectionModel.is(this.selection) && dart.test(this.selection.isNotEmpty)) {
          return (() => {
            let l = this.labelRenderer;
            return l != null ? l : (() => {
              let l = this.itemRenderer;
              return l != null ? l : dart.fn(model__ui__has_renderer.defaultItemRenderer, dynamicToString());
            })();
          })()(this.selection.selectedValues[$first]);
        }
        return this[_placeholder];
      }
      get optimizeForDropdown() {
        return this[optimizeForDropdown];
      }
      set optimizeForDropdown(value) {
        super.optimizeForDropdown = value;
      }
      set componentRenderer(value) {
        super.componentRenderer = value;
      }
      get componentRenderer() {
        return super.componentRenderer;
      }
      set factoryRenderer(value) {
        super.factoryRenderer = value;
      }
      get factoryRenderer() {
        return super.factoryRenderer;
      }
      set itemRenderer(value) {
        super.itemRenderer = value;
      }
      get itemRenderer() {
        return super.itemRenderer;
      }
      set options(value) {
        SelectionOptionsOfT()._check(value);
        super.options = value;
      }
      get options() {
        return super.options;
      }
      set selection(value) {
        SelectionModelOfT()._check(value);
        super.selection = value;
      }
      get selection() {
        return super.selection;
      }
      set placeholder(placeholder) {
        this[_placeholder] = placeholder != null ? placeholder : "Select";
      }
      set popupPositions(positions) {
        this[_customPopupPositions] = positions;
      }
      get popupPositions() {
        let l = this[_customPopupPositions];
        return l != null ? l : this[_defaultPopupPositions];
      }
      get [_defaultPopupPositions]() {
        return dart.test(this.showFilterInsideButton) ? src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset : src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline;
      }
      get visible() {
        return this[_visible];
      }
      set visible(val) {
        if (this[_visible] != val) {
          this[_visible] = val;
          this[_visibleStream].add(val);
          if (dart.test(this.showFilterInsidePopup) && !dart.test(this[_visible])) {
            let t = this.materialTreeFilterComponent;
            t == null ? null : t.clear();
          }
        }
      }
      open() {
        this.visible = true;
      }
      close() {
        this.visible = false;
      }
      toggle() {
        this.visible = !dart.test(this.visible);
      }
      ngOnInit() {
        this[_maybeFocusFilterComponent]();
      }
      focus() {
        this.open();
        this[_maybeFocusFilterComponent]();
      }
      [_maybeFocusFilterComponent]() {
        return async.async(dart.dynamic, (function* _maybeFocusFilterComponent() {
          if (dart.test(this.visible) && dart.test(this.supportsFiltering)) {
            yield this[_domService].nextFrame;
            let t = this.materialTreeFilterComponent;
            t == null ? null : t.focus();
          }
        }).bind(this));
      }
    }
    (MaterialTreeDropdownComponent.new = function(domService, popupClass, element) {
      this[_expandAll$] = false;
      this[_placeholder] = "Select";
      this[_visible] = false;
      this[_customPopupPositions] = null;
      this[materialTreeFilterComponent] = null;
      this[_visibleStream] = StreamControllerOfbool().broadcast({sync: true});
      this[showFilterInsidePopup] = false;
      this[shouldExpandAllWhenFiltered] = true;
      this[allowParentSingleSelection] = false;
      this[labelRenderer] = null;
      this[optimizeForDropdown] = true;
      this[_domService] = domService;
      this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(popupClass, element[$classes]);
      MaterialTreeDropdownComponent.__proto__.new.call(this);
      this.selection = SelectionModelOfT().empty();
    }).prototype = MaterialTreeDropdownComponent.prototype;
    dart.addTypeTests(MaterialTreeDropdownComponent);
    MaterialTreeDropdownComponent.prototype[_is_MaterialTreeDropdownComponent_default] = true;
    const materialTreeFilterComponent = Symbol("MaterialTreeDropdownComponent.materialTreeFilterComponent");
    const popupClassName = Symbol("MaterialTreeDropdownComponent.popupClassName");
    const showFilterInsidePopup = Symbol("MaterialTreeDropdownComponent.showFilterInsidePopup");
    const shouldExpandAllWhenFiltered = Symbol("MaterialTreeDropdownComponent.shouldExpandAllWhenFiltered");
    const allowParentSingleSelection = Symbol("MaterialTreeDropdownComponent.allowParentSingleSelection");
    const labelRenderer = Symbol("MaterialTreeDropdownComponent.labelRenderer");
    const optimizeForDropdown = Symbol("MaterialTreeDropdownComponent.optimizeForDropdown");
    MaterialTreeDropdownComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, focus__focus_interface.Focusable];
    dart.setMethodSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getMethods(MaterialTreeDropdownComponent.__proto__),
      open: dart.fnType(dart.void, []),
      close: dart.fnType(dart.void, []),
      toggle: dart.fnType(dart.void, []),
      ngOnInit: dart.fnType(dart.void, []),
      focus: dart.fnType(dart.void, []),
      [_maybeFocusFilterComponent]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getGetters(MaterialTreeDropdownComponent.__proto__),
      visibleChange: async.Stream$(core.bool),
      showFilterInsideButton: core.bool,
      filterableOptions: model__selection__select.Filterable,
      expandAll: core.bool,
      placeholder: core.String,
      popupPositions: core.List,
      [_defaultPopupPositions]: core.List,
      visible: core.bool
    }));
    dart.setSetterSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getSetters(MaterialTreeDropdownComponent.__proto__),
      expandAll: core.bool,
      placeholder: core.String,
      popupPositions: core.List$(laminate__enums__alignment.RelativePosition),
      visible: core.bool
    }));
    dart.setFieldSignature(MaterialTreeDropdownComponent, () => ({
      __proto__: dart.getFields(MaterialTreeDropdownComponent.__proto__),
      [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
      [_expandAll$]: dart.fieldType(core.bool),
      [_placeholder]: dart.fieldType(core.String),
      [_visible]: dart.fieldType(core.bool),
      [_customPopupPositions]: dart.fieldType(ListOfRelativePosition()),
      materialTreeFilterComponent: dart.fieldType(src__material_tree__material_tree_filter.MaterialTreeFilterComponent),
      [_visibleStream]: dart.finalFieldType(StreamControllerOfbool()),
      popupClassName: dart.finalFieldType(core.String),
      showFilterInsidePopup: dart.fieldType(core.bool),
      shouldExpandAllWhenFiltered: dart.fieldType(core.bool),
      allowParentSingleSelection: dart.fieldType(core.bool),
      labelRenderer: dart.fieldType(dynamicToString()),
      optimizeForDropdown: dart.finalFieldType(core.bool)
    }));
    return MaterialTreeDropdownComponent;
  });
  src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent = src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent$();
  dart.defineLazy(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, {
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsOffset*/get _popupPositionsOffset() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomEdge, laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopEdge], core.Object);
    },
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._popupPositionsInline*/get _popupPositionsInline() {
      return laminate__enums__alignment.RelativePosition.InlinePositions;
    },
    /*src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent._DEFAULT_PLACEHOLDER*/get _DEFAULT_PLACEHOLDER() {
      return "Select";
    }
  });
  dart.addTypeTests(src__material_tree__material_tree_dropdown.MaterialTreeDropdownComponent, _is_MaterialTreeDropdownComponent_default);
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.ddc", {
    "package:angular_components/src/material_tree/material_tree_expand_state.dart": src__material_tree__material_tree_expand_state,
    "package:angular_components/src/material_tree/material_tree_root.dart": src__material_tree__material_tree_root,
    "package:angular_components/src/material_tree/material_tree_node.dart": src__material_tree__material_tree_node,
    "package:angular_components/src/material_tree/group/material_tree_group.dart": src__material_tree__group__material_tree_group,
    "package:angular_components/src/material_tree/material_tree_filter.dart": src__material_tree__material_tree_filter,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.dart": src__material_tree__group__material_tree_group_flat,
    "package:angular_components/src/material_tree/material_tree_rendering_options.dart": src__material_tree__material_tree_rendering_options,
    "package:angular_components/src/material_tree/material_tree_impl.dart": src__material_tree__material_tree_impl,
    "package:angular_components/src/material_tree/material_tree_dropdown.dart": src__material_tree__material_tree_dropdown
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_expand_state.dart","../material_tree_root.dart","../material_tree_node.dart","material_tree_group.dart","../material_tree_filter.dart","material_tree_group_flat.dart","../material_tree_rendering_options.dart","../material_tree_impl.dart","../material_tree_dropdown.dart"],"names":[],"mappings":"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","file":"material_tree_group.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_expand_state: src__material_tree__material_tree_expand_state,
    src__material_tree__material_tree_root: src__material_tree__material_tree_root,
    src__material_tree__material_tree_node: src__material_tree__material_tree_node,
    src__material_tree__group__material_tree_group: src__material_tree__group__material_tree_group,
    src__material_tree__material_tree_filter: src__material_tree__material_tree_filter,
    src__material_tree__group__material_tree_group_flat: src__material_tree__group__material_tree_group_flat,
    src__material_tree__material_tree_rendering_options: src__material_tree__material_tree_rendering_options,
    src__material_tree__material_tree_impl: src__material_tree__material_tree_impl,
    src__material_tree__material_tree_dropdown: src__material_tree__material_tree_dropdown
  };
});

//# sourceMappingURL=material_tree_group.ddc.js.map
