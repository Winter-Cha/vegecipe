define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button', 'packages/quiver/core', 'packages/angular_components/model/menu/menu', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/menu/selectable_menu', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/laminate/popup/dom_popup_source'], function(dart_sdk, disposer, css, focus_interface, focusable_mixin, keyboard_handler_mixin, menu_popup_wrapper, change_detection, has_disabled, material_button, core, menu, highlighted_text_model, delayed_action, properties, id_generator, selectable_menu, selectable, menu_item_affix, selection_model, alignment, active_item, focus_activable_item, menu_root, material_dropdown_base, dom_popup_source) {
  'use strict';
  const core$ = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__angular__css__css = css.utils__angular__css__css;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const mixins__focusable_mixin = focusable_mixin.mixins__focusable_mixin;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const material_menu__menu_popup_wrapper = menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_button__material_button = material_button.material_button__material_button;
  const core$0 = core.core;
  const model__menu__menu = menu.model__menu__menu;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const model__action__delayed_action = delayed_action.model__action__delayed_action;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__menu__selectable_menu = selectable_menu.model__menu__selectable_menu;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const focus__focus_activable_item = focus_activable_item.focus__focus_activable_item;
  const material_menu__common__menu_root = menu_root.material_menu__common__menu_root;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__laminate__popup__popup_source = dom_popup_source.src__laminate__popup__popup_source;
  const material_menu__material_menu = Object.create(dart.library);
  const material_menu__menu_item_groups = Object.create(dart.library);
  const material_menu__menu_popup = Object.create(dart.library);
  const $classes = dartx.classes;
  const $isNotEmpty = dartx.isNotEmpty;
  const $forEach = dartx.forEach;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $target = dartx.target;
  const $attributes = dartx.attributes;
  const $parent = dartx.parent;
  const $toList = dartx.toList;
  const $any = dartx.any;
  const $isEmpty = dartx.isEmpty;
  const $toString = dartx.toString;
  const $every = dartx.every;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core$.Null, [core$.bool])))();
  let OptionalOfString = () => (OptionalOfString = dart.constFn(core$0.Optional$(core$.String)))();
  let StreamControllerOfMenuItem = () => (StreamControllerOfMenuItem = dart.constFn(async.StreamController$(model__menu__menu.MenuItem)))();
  let ListOfHighlightedTextSegment = () => (ListOfHighlightedTextSegment = dart.constFn(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment)))();
  let IdentityMapOfString$ListOfHighlightedTextSegment = () => (IdentityMapOfString$ListOfHighlightedTextSegment = dart.constFn(_js_helper.IdentityMap$(core$.String, ListOfHighlightedTextSegment())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core$.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core$.bool, [core$.String])))();
  let OptionalOfbool = () => (OptionalOfbool = dart.constFn(core$0.Optional$(core$.bool)))();
  let MenuItemAffixTobool = () => (MenuItemAffixTobool = dart.constFn(dart.fnType(core$.bool, [model__menu__menu_item_affix.MenuItemAffix])))();
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core$.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core$.Null, [ListOfSelectionChangeRecord()])))();
  let SelectableMenuItemTobool = () => (SelectableMenuItemTobool = dart.constFn(dart.fnType(core$.bool, [model__menu__selectable_menu.SelectableMenuItem])))();
  let MenuItemGroupTobool = () => (MenuItemGroupTobool = dart.constFn(dart.fnType(core$.bool, [model__menu__menu.MenuItemGroup])))();
  let ListOfFocusableActivateItem = () => (ListOfFocusableActivateItem = dart.constFn(core$.List$(focus__focus_activable_item.FocusableActivateItem)))();
  let MapOfString$ListOfHighlightedTextSegment = () => (MapOfString$ListOfHighlightedTextSegment = dart.constFn(core$.Map$(core$.String, ListOfHighlightedTextSegment())))();
  const _root = dart.privateName(material_menu__material_menu, "_root");
  const _disposer = dart.privateName(material_menu__material_menu, "_disposer");
  const _popupClass = dart.privateName(material_menu__material_menu, "_popupClass");
  const _button = dart.privateName(material_menu__material_menu, "_button");
  const _menuPopup = dart.privateName(material_menu__material_menu, "_menuPopup");
  const _focusTarget = dart.privateName(material_menu__material_menu, "_focusTarget");
  const Object_FocusableMixin$ = class Object_FocusableMixin extends core$.Object {};
  (Object_FocusableMixin$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$.prototype;
  dart.applyMixin(Object_FocusableMixin$, mixins__focusable_mixin.FocusableMixin);
  const Object_KeyboardHandlerMixin$ = class Object_KeyboardHandlerMixin extends Object_FocusableMixin$ {};
  (Object_KeyboardHandlerMixin$.new = function() {
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    Object_KeyboardHandlerMixin$.__proto__.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const Object_MenuPopupWrapper$ = class Object_MenuPopupWrapper extends Object_KeyboardHandlerMixin$ {};
  (Object_MenuPopupWrapper$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$, material_menu__menu_popup_wrapper.MenuPopupWrapper);
  const Object_MenuPopupTrigger$ = class Object_MenuPopupTrigger extends Object_MenuPopupWrapper$ {};
  (Object_MenuPopupTrigger$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupTrigger.new.call(this);
    Object_MenuPopupTrigger$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupTrigger$.prototype;
  dart.applyMixin(Object_MenuPopupTrigger$, material_menu__menu_popup_wrapper.MenuPopupTrigger);
  material_menu__material_menu.MaterialMenuComponent = class MaterialMenuComponent extends Object_MenuPopupTrigger$ {
    get popupClass() {
      return this[_popupClass];
    }
    set popupClass(className) {
      this[_popupClass] = utils__angular__css__css.constructEncapsulatedCss(className, this[_root][$classes]);
    }
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      this[ariaLabel] = value;
    }
    get tooltipText() {
      let t = this.menu;
      return t == null ? null : t.tooltipText;
    }
    get hasTooltip() {
      let t = this.menu;
      let l = t == null ? null : t.hasTooltip;
      return l != null ? l : false;
    }
    get hasSubmenu() {
      let t = this.menu;
      let t$ = t == null ? null : t.itemGroups;
      let l = t$ == null ? null : t$[$isNotEmpty];
      return l != null ? l : false;
    }
    get hasIcon() {
      return (() => {
        let t = this.menu;
        return t == null ? null : t.uiIcon;
      })() != null ? "true" : null;
    }
    set button(b) {
      this[_button] = b;
    }
    set menuPopup(m) {
      this[_menuPopup] = m;
    }
    get [_focusTarget]() {
      return focus__focus_interface.Focusable._check(dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this[_menuPopup] : this[_button]);
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
      this[_disposer].addStreamSubscription(core$.bool, this.isExpandedChange.listen(dart.fn(_ => {
        this.focusable = this[_focusTarget];
      }, boolToNull())));
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_menu__material_menu.MaterialMenuComponent.new = function(root) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_popupClass] = null;
    this[buttonText] = null;
    this[disabled] = false;
    this[tabbable] = true;
    this[ariaLabel] = null;
    this[_button] = null;
    this[_menuPopup] = null;
    this[_root] = root;
    material_menu__material_menu.MaterialMenuComponent.__proto__.new.call(this);
  }).prototype = material_menu__material_menu.MaterialMenuComponent.prototype;
  dart.addTypeTests(material_menu__material_menu.MaterialMenuComponent);
  const buttonText = Symbol("MaterialMenuComponent.buttonText");
  const disabled = Symbol("MaterialMenuComponent.disabled");
  const tabbable = Symbol("MaterialMenuComponent.tabbable");
  const ariaLabel = Symbol("MaterialMenuComponent.ariaLabel");
  material_menu__material_menu.MaterialMenuComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, interfaces__has_disabled.HasDisabled, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu__material_menu.MaterialMenuComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu__material_menu.MaterialMenuComponent.__proto__),
    popupClass: core$.String,
    tooltipText: core$.String,
    hasTooltip: core$.bool,
    hasSubmenu: core$.bool,
    hasIcon: core$.String,
    [_focusTarget]: focus__focus_interface.Focusable
  }));
  dart.setSetterSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu__material_menu.MaterialMenuComponent.__proto__),
    popupClass: core$.String,
    button: material_button__material_button.MaterialButtonComponent,
    menuPopup: material_menu__menu_popup.MenuPopupComponent
  }));
  dart.setLibraryUri(material_menu__material_menu.MaterialMenuComponent, "package:angular_components/material_menu/material_menu.dart");
  dart.setFieldSignature(material_menu__material_menu.MaterialMenuComponent, () => ({
    __proto__: dart.getFields(material_menu__material_menu.MaterialMenuComponent.__proto__),
    [_root]: dart.finalFieldType(html.HtmlElement),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_popupClass]: dart.fieldType(core$.String),
    buttonText: dart.fieldType(core$.String),
    disabled: dart.fieldType(core$.bool),
    tabbable: dart.fieldType(core$.bool),
    ariaLabel: dart.fieldType(core$.String),
    [_button]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_menuPopup]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  const _dropdownHandle = dart.privateName(material_menu__menu_item_groups, "_dropdownHandle");
  const _menuRoot = dart.privateName(material_menu__menu_item_groups, "_menuRoot");
  const _changeDetector = dart.privateName(material_menu__menu_item_groups, "_changeDetector");
  const _idGenerator = dart.privateName(material_menu__menu_item_groups, "_idGenerator");
  const _disposer$ = dart.privateName(material_menu__menu_item_groups, "_disposer");
  const _menu = dart.privateName(material_menu__menu_item_groups, "_menu");
  const _closeOnPressLeft = dart.privateName(material_menu__menu_item_groups, "_closeOnPressLeft");
  const _isMouseDriven = dart.privateName(material_menu__menu_item_groups, "_isMouseDriven");
  const _activeModel = dart.privateName(material_menu__menu_item_groups, "_activeModel");
  const _activeModelChange = dart.privateName(material_menu__menu_item_groups, "_activeModelChange");
  const _subMenuOpener = dart.privateName(material_menu__menu_item_groups, "_subMenuOpener");
  const _hoveredItem = dart.privateName(material_menu__menu_item_groups, "_hoveredItem");
  const _submenuParent = dart.privateName(material_menu__menu_item_groups, "_submenuParent");
  const _autoFocusItemId = dart.privateName(material_menu__menu_item_groups, "_autoFocusItemId");
  let const$;
  const _selected = dart.privateName(material_menu__menu_item_groups, "_selected");
  const _highlight = dart.privateName(material_menu__menu_item_groups, "_highlight");
  const _highlightCache = dart.privateName(material_menu__menu_item_groups, "_highlightCache");
  const _openSubMenuOnHover = dart.privateName(material_menu__menu_item_groups, "_openSubMenuOnHover");
  const _updateItemsAriaCheckedState = dart.privateName(material_menu__menu_item_groups, "_updateItemsAriaCheckedState");
  const _listenForSelectionChanges = dart.privateName(material_menu__menu_item_groups, "_listenForSelectionChanges");
  const _itemForTarget = dart.privateName(material_menu__menu_item_groups, "_itemForTarget");
  const _activeHoveredItemIfNone = dart.privateName(material_menu__menu_item_groups, "_activeHoveredItemIfNone");
  const _focusActiveItem = dart.privateName(material_menu__menu_item_groups, "_focusActiveItem");
  const _openSubMenu = dart.privateName(material_menu__menu_item_groups, "_openSubMenu");
  const _triggerAffixShortcutActions = dart.privateName(material_menu__menu_item_groups, "_triggerAffixShortcutActions");
  const _createActiveMenuModelIfNone = dart.privateName(material_menu__menu_item_groups, "_createActiveMenuModelIfNone");
  const _autoFocusActiveItem = dart.privateName(material_menu__menu_item_groups, "_autoFocusActiveItem");
  const _isSelected = dart.privateName(material_menu__menu_item_groups, "_isSelected");
  const _anyChildrenSelected = dart.privateName(material_menu__menu_item_groups, "_anyChildrenSelected");
  const _everyChildrenSelected = dart.privateName(material_menu__menu_item_groups, "_everyChildrenSelected");
  material_menu__menu_item_groups.MenuItemGroupsComponent = class MenuItemGroupsComponent extends core$.Object {
    set menu(menu) {
      this[_menu] = menu;
      this[_updateItemsAriaCheckedState](menu);
      let t = menu == null ? null : menu.itemGroups;
      t == null ? null : t[$forEach](dart.bind(this, _listenForSelectionChanges));
    }
    get menu() {
      return this[_menu];
    }
    get focusableItems() {
      return this[focusableItems];
    }
    set focusableItems(value) {
      this[focusableItems] = value;
    }
    get preferredSubMenuPositions() {
      return material_menu__menu_item_groups._preferredSubMenuPositions;
    }
    get tooltipPositions() {
      return material_menu__menu_item_groups._tooltipPositions;
    }
    get width() {
      let t = this.menu;
      let l = t == null ? null : t.width;
      return l != null ? l : 0;
    }
    set preventCloseOnPressLeft(value) {
      this[_closeOnPressLeft] = !dart.test(utils__angular__properties__properties.getBool(value));
    }
    get isMouseDriven() {
      return this[_isMouseDriven];
    }
    set activeModel(v) {
      this[_activeModel] = v;
      let t = this[_activeModelChange];
      t == null ? null : t.cancel();
      this[_activeModelChange] = v.modelChanged.listen(dart.fn(_ => {
        this[_changeDetector].markForCheck();
      }, dynamicToNull()));
    }
    get activeModel() {
      return this[_activeModel];
    }
    get activateFirstItemOnInit() {
      return this[activateFirstItemOnInit];
    }
    set activateFirstItemOnInit(value) {
      this[activateFirstItemOnInit] = value;
    }
    get activateLastItemOnInit() {
      return this[activateLastItemOnInit];
    }
    set activateLastItemOnInit(value) {
      this[activateLastItemOnInit] = value;
    }
    get isKeyboardOpenedSubmenu() {
      return this[isKeyboardOpenedSubmenu];
    }
    set isKeyboardOpenedSubmenu(value) {
      this[isKeyboardOpenedSubmenu] = value;
    }
    get selected() {
      return this[_selected].stream;
    }
    get highlighter() {
      return this[highlighter];
    }
    set highlighter(value) {
      this[highlighter] = value;
    }
    set highlight(value) {
      this[_highlight] = value;
      this[_highlightCache] = new (IdentityMapOfString$ListOfHighlightedTextSegment()).new();
    }
    get popupClass() {
      return this[popupClass];
    }
    set popupClass(value) {
      this[popupClass] = value;
    }
    get hasHighlight() {
      let t = this[_highlight];
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    static new(menuRoot, changeDetector, dropdownHandle, idGenerator) {
      return new material_menu__menu_item_groups.MenuItemGroupsComponent.__(dropdownHandle, menuRoot, changeDetector, idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID());
    }
    highlighted(input) {
      if (dart.test(this[_highlightCache][$containsKey](input))) return this[_highlightCache][$_get](input);
      return this[_highlightCache][$_set](input, this.highlighter.highlight(input, JSArrayOfString().of([this[_highlight]])));
    }
    onMouseOver(event) {
      if (!dart.test(this[_isMouseDriven])) return;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      this.activeModel.activate(null);
      this[_hoveredItem] = item;
      this[_subMenuOpener].start();
    }
    onMouseOut(event) {
      if (!dart.test(this[_isMouseDriven])) return;
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      if (dart.equals(item, this[_hoveredItem])) {
        this[_hoveredItem] = null;
      }
      this[_subMenuOpener].cancel();
    }
    onMouseMove(_) {
      this[_isMouseDriven] = true;
    }
    onSubMenuItemSelected(item) {
      this[_selected].add(item);
    }
    select(item, group) {
      dart.dsend(item, 'nullAwareActionHandler', []);
      this[_selected].add(item);
      if (!model__menu__selectable_menu.MenuItemGroupWithSelection.is(group) || dart.test(model__menu__selectable_menu.MenuItemGroupWithSelection.as(group).shouldCloseMenuOnSelection)) {
        this[_menuRoot] == null ? null : this[_menuRoot].closeHierarchy();
      }
    }
    handleKeydown(event, opts) {
      let shouldPreventDefault = opts && 'shouldPreventDefault' in opts ? opts.shouldPreventDefault : true;
      this[_isMouseDriven] = false;
      if (event.keyCode === html.KeyCode.TAB) return;
      let keyCode = event.keyCode;
      let activeMenuItem = model__menu__menu.MenuItem.as(this.activeModel.activeItem);
      switch (keyCode) {
        case html.KeyCode.UP:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activatePrevious();
          this[_focusActiveItem]();
          break;
        }
        case html.KeyCode.DOWN:
        {
          this[_activeHoveredItemIfNone]();
          this.activeModel.activateNext();
          this[_focusActiveItem]();
          break;
        }
        case html.KeyCode.RIGHT:
        {
          if ((activeMenuItem == null ? null : activeMenuItem.hasSubMenu) === true) {
            this[_openSubMenu](model__menu__menu.MenuItem.as(this.activeModel.activeItem), {isOpenedByKeyboard: true});
          }
          break;
        }
        case html.KeyCode.LEFT:
        {
          if (dart.test(this[_closeOnPressLeft])) {
            this[_dropdownHandle].close();
          }
          break;
        }
        default:
        {
          if (!dart.test(this[_triggerAffixShortcutActions](activeMenuItem, keyCode))) {
            shouldPreventDefault = false;
          }
          break;
        }
      }
      if (dart.test(shouldPreventDefault)) event.preventDefault();
    }
    [_openSubMenu](item, opts) {
      let isOpenedByKeyboard = opts && 'isOpenedByKeyboard' in opts ? opts.isOpenedByKeyboard : false;
      if (!dart.test(item.enabled)) return;
      if (!dart.test(this.activeModel.isActive(item))) {
        this.activeModel.activate(item);
      }
      this.isKeyboardOpenedSubmenu = isOpenedByKeyboard;
      this[_submenuParent] = dart.test(item.hasSubMenu) ? item : null;
    }
    [_itemForTarget](target) {
      if (!html.Element.is(target)) return null;
      let element = html.Element.as(target);
      while (element != null) {
        if (element[$attributes][$_get]("role") === "menuitem") {
          let group = this.menu.itemGroups[$_get](core$.int.parse(element[$attributes][$_get]("data-group-index")));
          let item = model__menu__menu.MenuItem._check(group._get(core$.int.parse(element[$attributes][$_get]("data-item-index"))));
          return item;
        }
        element = element[$parent];
      }
      return null;
    }
    onFocus(event) {
      let item = this[_itemForTarget](event[$target]);
      if (item == null) return;
      let t = this.activeModel;
      t == null ? null : t.activate(item);
    }
    handleSelectItemTrigger(item, group, event) {
      if (item == null || !dart.test(item.enabled)) return;
      if (dart.test(item.hasSubMenu)) {
        this[_openSubMenu](item, {isOpenedByKeyboard: html.KeyboardEvent.is(event)});
      } else {
        this.select(item, group);
      }
    }
    onSubMenuVisibilityChanged(item, visible) {
      if (!dart.test(visible) && dart.equals(item, this[_submenuParent])) {
        this[_submenuParent] = null;
        if (dart.test(this[_isMouseDriven])) return;
        if (dart.test(this[_menuRoot].visible)) {
          this[_focusActiveItem]();
        }
      }
    }
    toggleExpansionIfCollapsible(group) {
      if (dart.test(group.isCollapsible)) {
        group.isExpanded = !dart.test(group.isExpanded);
      }
    }
    ngOnInit() {
      this[_createActiveMenuModelIfNone]();
    }
    ngAfterViewInit() {
      if (dart.test(this.activateFirstItemOnInit) || dart.test(this.activateLastItemOnInit)) this[_focusActiveItem]();
    }
    ngOnDestroy() {
      let t = this[_activeModelChange];
      t == null ? null : t.cancel();
      this[_activeModelChange] = null;
      this[_disposer$].dispose();
    }
    getSelectionModel(group) {
      return model__menu__selectable_menu.MenuItemGroupWithSelection.is(group) ? group.selectionModel : null;
    }
    itemAriaChecked(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) ? item.ariaChecked : null;
    }
    getItemValue(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) ? item.value : null;
    }
    shouldSelectItemOnClick(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) && dart.test(item.shouldSelectOnItemClick);
    }
    isItemVisible(item) {
      return model__menu__selectable_menu.SelectableMenuItem.is(item) ? item.selectableState !== src__model__selection__interfaces__selectable.SelectableOption.Hidden : true;
    }
    isItemActive(item) {
      return dart.equals((() => {
        let t = this.activeModel;
        return t == null ? null : t.activeItem;
      })(), item);
    }
    hasAutoFocus(itemId) {
      return OptionalOfbool()._check(this[_autoFocusItemId].transform(core$.bool, dart.fn(id => id == itemId, StringTobool()))).or(false);
    }
    isSubMenuVisible(item) {
      return dart.equals(item, this[_submenuParent]);
    }
    [_activeHoveredItemIfNone]() {
      if (this.activeModel.activeItem == null && this[_hoveredItem] != null) {
        this.activeModel.activate(this[_hoveredItem]);
      }
    }
    [_triggerAffixShortcutActions](item, keyCode) {
      if (item == null || !dart.test(item.enabled)) return false;
      let matching = item.itemSuffixes.where(dart.fn(suffix => suffix.hasShortcutKeyCode(keyCode), MenuItemAffixTobool()))[$toList]();
      for (let suffix of matching)
        suffix.triggerShortcutAction();
      if (dart.test(matching[$any](dart.fn(suffix => suffix.shouldCloseMenuOnTrigger, MenuItemAffixTobool())))) {
        this[_menuRoot].closeHierarchy();
      }
      return matching[$isNotEmpty];
    }
    [_createActiveMenuModelIfNone]() {
      if (this.menu != null && this.activeModel == null) {
        this.activeModel = new model__menu__menu.ActiveMenuItemModel.new(this[_idGenerator], {menu: this.menu, filterOutUnselectableItems: true});
        if (dart.test(this.activateLastItemOnInit)) {
          this.activeModel.activateLast();
          this[_autoFocusActiveItem]();
        } else if (dart.test(this.activateFirstItemOnInit)) {
          this[_autoFocusActiveItem]();
        } else {
          this.activeModel.activate(null);
        }
      }
    }
    [_autoFocusActiveItem]() {
      this[_autoFocusItemId] = new (OptionalOfString()).of(this.activeModel.id(this.activeModel.activeItem));
    }
    [_focusActiveItem]() {
      if (this.activeModel.activeItem == null) return;
      for (let item of this.focusableItems) {
        if (item.key == this.activeModel.activeId) {
          item.focus();
          break;
        }
      }
      for (let group of this.menu.itemGroups) {
        if (dart.test(group.contains(this.activeModel.activeItem)) && dart.test(group.isCollapsible)) {
          group.isExpanded = true;
          break;
        }
      }
    }
    [_isSelected](selectionModel, item) {
      let itemValue = this.getItemValue(item);
      return itemValue != null && (() => {
        let l = selectionModel == null ? null : selectionModel.isSelected(itemValue);
        return l != null ? l : false;
      })();
    }
    focus() {
      this[_focusActiveItem]();
    }
    [_openSubMenuOnHover]() {
      this[_openSubMenu](this[_hoveredItem]);
      this[_changeDetector].markForCheck();
    }
    [_listenForSelectionChanges](group) {
      if (model__menu__selectable_menu.MenuItemGroupWithSelection.is(group)) {
        this[_disposer$].addStreamSubscription(ListOfSelectionChangeRecord(), (() => {
          let t = group.selectionModel == null ? null : group.selectionModel.selectionChanges;
          return t == null ? null : t.listen(dart.fn(_ => {
            this[_updateItemsAriaCheckedState](this[_menu]);
          }, ListOfSelectionChangeRecordToNull()));
        })());
      }
    }
    [_updateItemsAriaCheckedState](menu) {
      if ((() => {
        let t = menu == null ? null : menu.itemGroups;
        let l = t == null ? null : t[$isEmpty];
        return l != null ? l : true;
      })()) return;
      for (let group of menu.itemGroups) {
        if (model__menu__selectable_menu.MenuItemGroupWithSelection.is(group)) {
          for (let item of group) {
            if (dart.test(item.hasSubMenu)) {
              this[_updateItemsAriaCheckedState](item.subMenu);
            }
            let isSelected = this[_isSelected](group.selectionModel, item);
            if (!dart.test(item.hasSubMenu)) {
              item.ariaChecked = dart.toString(isSelected);
            } else if (dart.test(group.selectionModel.isSingleSelect)) {
              item.ariaChecked = (dart.test(isSelected) || dart.test(this[_anyChildrenSelected](group, item)))[$toString]();
            } else {
              if (dart.test(this[_anyChildrenSelected](group, item))) {
                item.ariaChecked = dart.test(this[_everyChildrenSelected](group, item)) ? "true" : "mixed";
              } else {
                item.ariaChecked = dart.toString(isSelected);
              }
            }
          }
        }
      }
    }
    [_anyChildrenSelected](group, item) {
      return item.subMenu.itemGroups[$any](dart.fn(g => model__menu__selectable_menu.MenuItemGroupWithSelection.is(g) && dart.test(g.any(dart.fn(i => this[_isSelected](g.selectionModel, i), SelectableMenuItemTobool()))), MenuItemGroupTobool()));
    }
    [_everyChildrenSelected](group, item) {
      return item.subMenu.itemGroups[$every](dart.fn(g => model__menu__selectable_menu.MenuItemGroupWithSelection.is(g) && dart.test(g.every(dart.fn(i => this[_isSelected](g.selectionModel, i), SelectableMenuItemTobool()))), MenuItemGroupTobool()));
    }
  };
  (material_menu__menu_item_groups.MenuItemGroupsComponent.__ = function(dropdownHandle, menuRoot, changeDetector, idGenerator) {
    this[_disposer$] = new utils__disposer__disposer.Disposer.oneShot();
    this[_menu] = null;
    this[focusableItems] = null;
    this[_closeOnPressLeft] = true;
    this[_isMouseDriven] = false;
    this[_activeModel] = null;
    this[_activeModelChange] = null;
    this[activateFirstItemOnInit] = false;
    this[activateLastItemOnInit] = false;
    this[_subMenuOpener] = null;
    this[_hoveredItem] = null;
    this[_submenuParent] = null;
    this[_autoFocusItemId] = const$ || (const$ = dart.const(new (OptionalOfString()).absent()));
    this[isKeyboardOpenedSubmenu] = false;
    this[_selected] = StreamControllerOfMenuItem().broadcast();
    this[highlighter] = null;
    this[_highlight] = null;
    this[popupClass] = null;
    this[_highlightCache] = new (IdentityMapOfString$ListOfHighlightedTextSegment()).new();
    this[_dropdownHandle] = dropdownHandle;
    this[_menuRoot] = menuRoot;
    this[_changeDetector] = changeDetector;
    this[_idGenerator] = idGenerator;
    this[_subMenuOpener] = new model__action__delayed_action.DelayedAction.new(material_menu__menu_item_groups.MenuItemGroupsComponent._menuDelay, dart.bind(this, _openSubMenuOnHover));
  }).prototype = material_menu__menu_item_groups.MenuItemGroupsComponent.prototype;
  dart.addTypeTests(material_menu__menu_item_groups.MenuItemGroupsComponent);
  const focusableItems = Symbol("MenuItemGroupsComponent.focusableItems");
  const activateFirstItemOnInit = Symbol("MenuItemGroupsComponent.activateFirstItemOnInit");
  const activateLastItemOnInit = Symbol("MenuItemGroupsComponent.activateLastItemOnInit");
  const isKeyboardOpenedSubmenu = Symbol("MenuItemGroupsComponent.isKeyboardOpenedSubmenu");
  const highlighter = Symbol("MenuItemGroupsComponent.highlighter");
  const popupClass = Symbol("MenuItemGroupsComponent.popupClass");
  material_menu__menu_item_groups.MenuItemGroupsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, focus__focus_interface.Focusable, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    highlighted: dart.fnType(core$.List$(model__ui__highlighted_text_model.HighlightedTextSegment), [core$.String]),
    onMouseOver: dart.fnType(dart.void, [html.MouseEvent]),
    onMouseOut: dart.fnType(dart.void, [html.MouseEvent]),
    onMouseMove: dart.fnType(dart.void, [html.MouseEvent]),
    onSubMenuItemSelected: dart.fnType(dart.void, [model__menu__menu.MenuItem]),
    select: dart.fnType(dart.void, [model__menu__menu.MenuItem, model__menu__menu.MenuItemGroup]),
    handleKeydown: dart.fnType(dart.void, [html.KeyboardEvent], {shouldPreventDefault: core$.bool}),
    [_openSubMenu]: dart.fnType(dart.void, [model__menu__menu.MenuItem], {isOpenedByKeyboard: core$.bool}),
    [_itemForTarget]: dart.fnType(model__menu__menu.MenuItem, [html.EventTarget]),
    onFocus: dart.fnType(dart.void, [html.FocusEvent]),
    handleSelectItemTrigger: dart.fnType(dart.void, [model__menu__menu.MenuItem, model__menu__menu.MenuItemGroup, html.UIEvent]),
    onSubMenuVisibilityChanged: dart.fnType(dart.void, [model__menu__menu.MenuItem, core$.bool]),
    toggleExpansionIfCollapsible: dart.fnType(dart.void, [model__menu__menu.MenuItemGroup]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    getSelectionModel: dart.fnType(model__selection__selection_model.SelectionModel, [model__menu__menu.MenuItemGroup]),
    itemAriaChecked: dart.fnType(core$.String, [model__menu__menu.MenuItem]),
    getItemValue: dart.fnType(dart.dynamic, [model__menu__menu.MenuItem]),
    shouldSelectItemOnClick: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    isItemVisible: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    isItemActive: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    hasAutoFocus: dart.fnType(core$.bool, [core$.String]),
    isSubMenuVisible: dart.fnType(core$.bool, [model__menu__menu.MenuItem]),
    [_activeHoveredItemIfNone]: dart.fnType(dart.void, []),
    [_triggerAffixShortcutActions]: dart.fnType(core$.bool, [model__menu__menu.MenuItem, core$.int]),
    [_createActiveMenuModelIfNone]: dart.fnType(dart.void, []),
    [_autoFocusActiveItem]: dart.fnType(dart.void, []),
    [_focusActiveItem]: dart.fnType(dart.void, []),
    [_isSelected]: dart.fnType(core$.bool, [model__selection__selection_model.SelectionModel, model__menu__menu.MenuItem]),
    focus: dart.fnType(dart.void, []),
    [_openSubMenuOnHover]: dart.fnType(dart.void, []),
    [_listenForSelectionChanges]: dart.fnType(dart.void, [model__menu__menu.MenuItemGroup]),
    [_updateItemsAriaCheckedState]: dart.fnType(dart.void, [model__menu__menu.MenuModel]),
    [_anyChildrenSelected]: dart.fnType(core$.bool, [model__menu__menu.MenuItemGroup, model__menu__menu.MenuItem]),
    [_everyChildrenSelected]: dart.fnType(core$.bool, [model__menu__menu.MenuItemGroup, model__menu__menu.MenuItem])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    menu: model__menu__menu.MenuModel,
    preferredSubMenuPositions: core$.List$(laminate__enums__alignment.RelativePosition),
    tooltipPositions: core$.List$(laminate__enums__alignment.RelativePosition),
    width: core$.int,
    isMouseDriven: core$.bool,
    activeModel: model__a11y__active_item.ActiveItemModel,
    selected: async.Stream$(model__menu__menu.MenuItem),
    hasHighlight: core$.bool
  }));
  dart.setSetterSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    menu: model__menu__menu.MenuModel,
    preventCloseOnPressLeft: dart.dynamic,
    activeModel: model__a11y__active_item.ActiveItemModel,
    highlight: core$.String
  }));
  dart.setLibraryUri(material_menu__menu_item_groups.MenuItemGroupsComponent, "package:angular_components/material_menu/menu_item_groups.dart");
  dart.setFieldSignature(material_menu__menu_item_groups.MenuItemGroupsComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups.MenuItemGroupsComponent.__proto__),
    [_idGenerator]: dart.finalFieldType(utils__id_generator__id_generator.IdGenerator),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_disposer$]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_menu]: dart.fieldType(model__menu__menu.MenuModel),
    focusableItems: dart.fieldType(ListOfFocusableActivateItem()),
    [_closeOnPressLeft]: dart.fieldType(core$.bool),
    [_isMouseDriven]: dart.fieldType(core$.bool),
    [_activeModel]: dart.fieldType(model__a11y__active_item.ActiveItemModel),
    [_activeModelChange]: dart.fieldType(async.StreamSubscription),
    activateFirstItemOnInit: dart.fieldType(core$.bool),
    activateLastItemOnInit: dart.fieldType(core$.bool),
    [_menuRoot]: dart.finalFieldType(material_menu__common__menu_root.MenuRoot),
    [_dropdownHandle]: dart.fieldType(mixins__material_dropdown_base.DropdownHandle),
    [_subMenuOpener]: dart.fieldType(model__action__delayed_action.DelayedAction),
    [_hoveredItem]: dart.fieldType(model__menu__menu.MenuItem),
    [_submenuParent]: dart.fieldType(model__menu__menu.MenuItem),
    [_autoFocusItemId]: dart.fieldType(OptionalOfString()),
    isKeyboardOpenedSubmenu: dart.fieldType(core$.bool),
    [_selected]: dart.finalFieldType(StreamControllerOfMenuItem()),
    highlighter: dart.fieldType(model__ui__highlighted_text_model.TextHighlighter),
    [_highlight]: dart.fieldType(core$.String),
    popupClass: dart.fieldType(core$.String),
    [_highlightCache]: dart.fieldType(MapOfString$ListOfHighlightedTextSegment())
  }));
  dart.defineLazy(material_menu__menu_item_groups.MenuItemGroupsComponent, {
    /*material_menu__menu_item_groups.MenuItemGroupsComponent._menuDelay*/get _menuDelay() {
      return dart.const(new core$.Duration.new({milliseconds: 400}));
    }
  });
  dart.defineLazy(material_menu__menu_item_groups, {
    /*material_menu__menu_item_groups._preferredSubMenuPositions*/get _preferredSubMenuPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRightTop, laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentRightBottom, laminate__enums__alignment.RelativePosition.AdjacentLeftTop, laminate__enums__alignment.RelativePosition.AdjacentLeft, laminate__enums__alignment.RelativePosition.AdjacentLeftBottom], laminate__enums__alignment.RelativePosition);
    },
    /*material_menu__menu_item_groups._tooltipPositions*/get _tooltipPositions() {
      return dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentLeft], laminate__enums__alignment.RelativePosition);
    }
  });
  const Object_FocusableMixin$$ = class Object_FocusableMixin extends core$.Object {};
  (Object_FocusableMixin$$.new = function() {
    mixins__focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$$.prototype;
  dart.applyMixin(Object_FocusableMixin$$, mixins__focusable_mixin.FocusableMixin);
  const Object_MenuPopupWrapper$$ = class Object_MenuPopupWrapper extends Object_FocusableMixin$$ {};
  (Object_MenuPopupWrapper$$.new = function() {
    material_menu__menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$$.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$$.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$$, material_menu__menu_popup_wrapper.MenuPopupWrapper);
  material_menu__menu_popup.MenuPopupComponent = class MenuPopupComponent extends Object_MenuPopupWrapper$$ {
    get popupSource() {
      return this[popupSource];
    }
    set popupSource(value) {
      this[popupSource] = value;
    }
    get popupClass() {
      return this[popupClass$];
    }
    set popupClass(value) {
      this[popupClass$] = value;
    }
    set menuItemGroups(groups) {
      this.focusable = groups;
    }
  };
  (material_menu__menu_popup.MenuPopupComponent.new = function() {
    this[popupSource] = null;
    this[popupClass$] = null;
    material_menu__menu_popup.MenuPopupComponent.__proto__.new.call(this);
  }).prototype = material_menu__menu_popup.MenuPopupComponent.prototype;
  dart.addTypeTests(material_menu__menu_popup.MenuPopupComponent);
  const popupSource = Symbol("MenuPopupComponent.popupSource");
  const popupClass$ = Symbol("MenuPopupComponent.popupClass");
  dart.setSetterSignature(material_menu__menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getSetters(material_menu__menu_popup.MenuPopupComponent.__proto__),
    menuItemGroups: material_menu__menu_item_groups.MenuItemGroupsComponent
  }));
  dart.setLibraryUri(material_menu__menu_popup.MenuPopupComponent, "package:angular_components/material_menu/menu_popup.dart");
  dart.setFieldSignature(material_menu__menu_popup.MenuPopupComponent, () => ({
    __proto__: dart.getFields(material_menu__menu_popup.MenuPopupComponent.__proto__),
    popupSource: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    popupClass: dart.fieldType(core$.String)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.ddc", {
    "package:angular_components/material_menu/material_menu.dart": material_menu__material_menu,
    "package:angular_components/material_menu/menu_item_groups.dart": material_menu__menu_item_groups,
    "package:angular_components/material_menu/menu_popup.dart": material_menu__menu_popup
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_menu.dart","menu_item_groups.dart","menu_popup.dart"],"names":[],"mappings":"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","file":"material_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__material_menu: material_menu__material_menu,
    material_menu__menu_item_groups: material_menu__menu_item_groups,
    material_menu__menu_popup: material_menu__menu_popup
  };
});

//# sourceMappingURL=material_menu.ddc.js.map
