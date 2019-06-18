define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/observable/observable', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/bootstrap/modules', 'packages/intl/intl', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, disposer, observable, async_action, focus, focus_interface, modules, intl, deferred_content_aware, has_disabled, change_detection, button_decorator, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const model__observable__observable = observable.model__observable__observable;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const src__model__action__async_action_controller = async_action.src__model__action__async_action_controller;
  const focus__focus = focus.focus__focus;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const intl$ = intl.intl;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_expansionpanel__material_expansionpanel = Object.create(dart.library);
  const $height = dartx.height;
  const $onTransitionEnd = dartx.onTransitionEnd;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $scrollHeight = dartx.scrollHeight;
  const $add = dartx.add;
  const $getComputedStyle = dartx.getComputedStyle;
  const $contains = dartx.contains;
  const $transition = dartx.transition;
  const $marginTop = dartx.marginTop;
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let JSArrayOfCompleterOfString = () => (JSArrayOfCompleterOfString = dart.constFn(_interceptors.JSArray$(CompleterOfString())))();
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let StreamControllerOfAsyncActionOfbool = () => (StreamControllerOfAsyncActionOfbool = dart.constFn(async.StreamController$(AsyncActionOfbool())))();
  let StreamControllerOfFocusMoveEvent = () => (StreamControllerOfFocusMoveEvent = dart.constFn(async.StreamController$(focus__focus.FocusMoveEvent)))();
  let TransitionEventToNull = () => (TransitionEventToNull = dart.constFn(dart.fnType(core.Null, [html.TransitionEvent])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [dart.void])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let AsyncActionControllerOfbool = () => (AsyncActionControllerOfbool = dart.constFn(src__model__action__async_action_controller.AsyncActionController$(core.bool)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let numToString = () => (numToString = dart.constFn(dart.fnType(core.String, [core.num])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let ListOfCompleterOfString = () => (ListOfCompleterOfString = dart.constFn(core.List$(CompleterOfString())))();
  const _ngZone = dart.privateName(material_expansionpanel__material_expansionpanel, "_ngZone");
  const _changeDetector = dart.privateName(material_expansionpanel__material_expansionpanel, "_changeDetector");
  const _domService = dart.privateName(material_expansionpanel__material_expansionpanel, "_domService");
  const _disposer = dart.privateName(material_expansionpanel__material_expansionpanel, "_disposer");
  const _defaultExpandIcon = dart.privateName(material_expansionpanel__material_expansionpanel, "_defaultExpandIcon");
  const _pendingExpandedPanelHeightReads = dart.privateName(material_expansionpanel__material_expansionpanel, "_pendingExpandedPanelHeightReads");
  const _focusableItem = dart.privateName(material_expansionpanel__material_expansionpanel, "_focusableItem");
  const _mainPanel = dart.privateName(material_expansionpanel__material_expansionpanel, "_mainPanel");
  const _headerPanel = dart.privateName(material_expansionpanel__material_expansionpanel, "_headerPanel");
  const _mainContent = dart.privateName(material_expansionpanel__material_expansionpanel, "_mainContent");
  const _headerContent = dart.privateName(material_expansionpanel__material_expansionpanel, "_headerContent");
  const _actionContent = dart.privateName(material_expansionpanel__material_expansionpanel, "_actionContent");
  const _contentWrapper = dart.privateName(material_expansionpanel__material_expansionpanel, "_contentWrapper");
  const _isExpanded = dart.privateName(material_expansionpanel__material_expansionpanel, "_isExpanded");
  const _isExpandedChangeByUserAction = dart.privateName(material_expansionpanel__material_expansionpanel, "_isExpandedChangeByUserAction");
  const _anotherExpanded = dart.privateName(material_expansionpanel__material_expansionpanel, "_anotherExpanded");
  const _disabled = dart.privateName(material_expansionpanel__material_expansionpanel, "_disabled");
  const _activeSaveCancelAction = dart.privateName(material_expansionpanel__material_expansionpanel, "_activeSaveCancelAction");
  const _groupAriaLabel = dart.privateName(material_expansionpanel__material_expansionpanel, "_groupAriaLabel");
  const _expandIcon = dart.privateName(material_expansionpanel__material_expansionpanel, "_expandIcon");
  const _openController = dart.privateName(material_expansionpanel__material_expansionpanel, "_openController");
  const _closeController = dart.privateName(material_expansionpanel__material_expansionpanel, "_closeController");
  const _saveController = dart.privateName(material_expansionpanel__material_expansionpanel, "_saveController");
  const _cancelController = dart.privateName(material_expansionpanel__material_expansionpanel, "_cancelController");
  const _expandCollapseButton = dart.privateName(material_expansionpanel__material_expansionpanel, "_expandCollapseButton");
  const _focusMoveCtrl = dart.privateName(material_expansionpanel__material_expansionpanel, "_focusMoveCtrl");
  const _completeExpandedPanelHeightReadsIfPossible = dart.privateName(material_expansionpanel__material_expansionpanel, "_completeExpandedPanelHeightReadsIfPossible");
  const _readMainContentHeight = dart.privateName(material_expansionpanel__material_expansionpanel, "_readMainContentHeight");
  const _namedPanelMsg = dart.privateName(material_expansionpanel__material_expansionpanel, "_namedPanelMsg");
  let const$;
  const _transitionHeightChange = dart.privateName(material_expansionpanel__material_expansionpanel, "_transitionHeightChange");
  const _readExpandedPanelHeight = dart.privateName(material_expansionpanel__material_expansionpanel, "_readExpandedPanelHeight");
  const _readExpandedHeaderHeight = dart.privateName(material_expansionpanel__material_expansionpanel, "_readExpandedHeaderHeight");
  material_expansionpanel__material_expansionpanel.MaterialExpansionPanel = class MaterialExpansionPanel extends core.Object {
    get shouldExpandOnLeft() {
      return this[shouldExpandOnLeft];
    }
    set shouldExpandOnLeft(value) {
      super.shouldExpandOnLeft = value;
    }
    get forceContentWhenClosed() {
      return this[forceContentWhenClosed];
    }
    set forceContentWhenClosed(value) {
      super.forceContentWhenClosed = value;
    }
    get initialized() {
      return this[initialized];
    }
    set initialized(value) {
      this[initialized] = value;
    }
    set autoFocusChild(focus) {
      this[_focusableItem] = focus;
    }
    set focusElement(element) {
      if (focus__focus_interface.Focusable.is(element)) {
        this[_focusableItem] = element;
      } else if (src__core__linker__element_ref.ElementRef.is(element)) {
        this[_focusableItem] = new focus__focus.RootFocusable.new(html.Element._check(element.nativeElement));
      } else {
        if (!(element == null)) dart.assertFailed("Warning expansion panel content has a #focus" + "child which is not an Element, or Focusable");
      }
    }
    set mainPanel(mainPanel) {
      this[_mainPanel] = mainPanel;
      this[_disposer].addStreamSubscription(html.TransitionEvent, this[_mainPanel][$onTransitionEnd].listen(dart.fn(_ => {
        this[_mainPanel].style[$height] = "";
      }, TransitionEventToNull())));
    }
    set headerPanel(headerPanel) {
      this[_headerPanel] = headerPanel;
      this[_disposer].addStreamSubscription(html.TransitionEvent, this[_headerPanel][$onTransitionEnd].listen(dart.fn(_ => {
        this[_headerPanel].style[$height] = "";
      }, TransitionEventToNull())));
    }
    set mainContent(mainContent) {
      this[_mainContent] = mainContent;
      if (this[_mainContent] == null) return;
      this[_completeExpandedPanelHeightReadsIfPossible]();
    }
    [_completeExpandedPanelHeightReadsIfPossible]() {
      if (this[_mainContent] == null || this[_contentWrapper] == null) return;
      if (dart.test(this[_pendingExpandedPanelHeightReads][$isNotEmpty])) {
        let height = this[_readMainContentHeight]();
        for (let completer of this[_pendingExpandedPanelHeightReads]) {
          completer.complete(height);
        }
        this[_pendingExpandedPanelHeightReads][$clear]();
      }
    }
    set headerContent(headerContent) {
      return this[_headerContent] = headerContent;
    }
    set actionContent(headerContent) {
      return this[_actionContent] = headerContent;
    }
    set contentWrapper(contentWrapper) {
      this[_contentWrapper] = contentWrapper;
      this[_completeExpandedPanelHeightReadsIfPossible]();
    }
    get closeOnSave() {
      return this[closeOnSave];
    }
    set closeOnSave(value) {
      this[closeOnSave] = value;
    }
    get isExpanded() {
      return this[_isExpanded].value;
    }
    set isExpanded(value) {
      if (value == this.isExpanded) return;
      if (dart.test(value)) {
        this.expand({byUserAction: false});
      } else {
        this.collapse({byUserAction: false});
      }
    }
    get isExpandedChange() {
      return this[_isExpanded].stream;
    }
    get isExpandedChangeByUserAction() {
      return this[_isExpandedChangeByUserAction].stream;
    }
    get contentVisible() {
      return this.isExpandedChange;
    }
    get anotherExpanded() {
      return this[_anotherExpanded];
    }
    set anotherExpanded(anotherExpanded) {
      this[_anotherExpanded] = anotherExpanded;
      this[_changeDetector].markForCheck();
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(value) {
      this[_disabled] = value;
      this[_changeDetector].markForCheck();
    }
    get saveDisabled() {
      return this[saveDisabled];
    }
    set saveDisabled(value) {
      this[saveDisabled] = value;
    }
    get activeSaveCancelAction() {
      return this[_activeSaveCancelAction];
    }
    get hideExpandedHeader() {
      return this[hideExpandedHeader];
    }
    set hideExpandedHeader(value) {
      this[hideExpandedHeader] = value;
    }
    get disableHeaderExpansion() {
      return this[disableHeaderExpansion];
    }
    set disableHeaderExpansion(value) {
      this[disableHeaderExpansion] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get secondaryText() {
      return this[secondaryText];
    }
    set secondaryText(value) {
      this[secondaryText] = value;
    }
    set groupAriaLabel(groupAriaLabel) {
      this[_groupAriaLabel] = groupAriaLabel;
    }
    get groupAriaLabel() {
      return this[_groupAriaLabel] == null ? this.name : this[_groupAriaLabel];
    }
    set expandIcon(expandIcon) {
      return this[_expandIcon] = expandIcon;
    }
    get expandIcon() {
      let l = this[_expandIcon];
      return l != null ? l : this[_defaultExpandIcon];
    }
    get alwaysShowExpandIcon() {
      return this[alwaysShowExpandIcon];
    }
    set alwaysShowExpandIcon(value) {
      this[alwaysShowExpandIcon] = value;
    }
    get alwaysHideExpandIcon() {
      return this[alwaysHideExpandIcon];
    }
    set alwaysHideExpandIcon(value) {
      this[alwaysHideExpandIcon] = value;
    }
    get hasCustomExpandIcon() {
      return this.expandIcon != this[_defaultExpandIcon];
    }
    get shouldShowExpandIcon() {
      if (dart.test(this.alwaysHideExpandIcon)) return false;
      return dart.test(this.hasCustomExpandIcon) && dart.test(this.isExpanded) ? this.alwaysShowExpandIcon : !dart.test(this.disabled);
    }
    get shouldFlipExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) ? false : !dart.test(this.isExpanded);
    }
    get shouldShowHiddenHeaderExpandIcon() {
      return dart.test(this.hasCustomExpandIcon) || dart.test(this.alwaysHideExpandIcon) ? false : dart.test(this.hideExpandedHeader) && !dart.test(this.disabled);
    }
    get showSaveCancel() {
      return this[showSaveCancel];
    }
    set showSaveCancel(value) {
      this[showSaveCancel] = value;
    }
    get cancelDisplayed() {
      return this[cancelDisplayed];
    }
    set cancelDisplayed(value) {
      this[cancelDisplayed] = value;
    }
    get enterAccepts() {
      return this[enterAccepts];
    }
    set enterAccepts(value) {
      this[enterAccepts] = value;
    }
    get saveText() {
      return this[saveText];
    }
    set saveText(value) {
      this[saveText] = value;
    }
    get cancelText() {
      return this[cancelText];
    }
    set cancelText(value) {
      this[cancelText] = value;
    }
    get closePanelMsg() {
      return this.groupAriaLabel == null && this.name == null ? material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._closePanelMsg : this[_namedPanelMsg](this.groupAriaLabel);
    }
    get openPanelMsg() {
      return this.groupAriaLabel == null && this.name == null ? material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._openPanelMsg : this[_namedPanelMsg](this.groupAriaLabel);
    }
    get headerMsg() {
      if (dart.test(this.disabled)) {
        return this.groupAriaLabel;
      } else {
        return dart.test(this.isExpanded) ? this.closePanelMsg : this.openPanelMsg;
      }
    }
    [_namedPanelMsg](panelName) {
      return intl$.Intl.message(dart.str(panelName) + " panel", {name: "_namedPanelMsg", args: JSArrayOfObject().of([panelName]), desc: "ARIA label for a button that shows or hides the panel.", examples: const$ || (const$ = dart.constMap(core.String, core.Object, ["panelName", "Conversions"]))});
    }
    get close() {
      return this[_closeController].stream;
    }
    get open() {
      return this[_openController].stream;
    }
    get save() {
      return this[_saveController].stream;
    }
    get cancel() {
      return this[_cancelController].stream;
    }
    handleHeaderClick() {
      if (!dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    handleExpandIconClick() {
      if (dart.test(this.disableHeaderExpansion)) dart.test(this.isExpanded) ? this.collapse() : this.expand();
    }
    ngOnInit() {
      this[_disposer].addStreamSubscription(core.bool, this.isExpandedChangeByUserAction.listen(dart.fn(_ => {
        FutureOfNull()._check(this[_ngZone].onEventDone.first.then(core.Null, dart.fn(_ => {
          if (_ === void 0) _ = null;
          let t = this[_expandCollapseButton];
          t == null ? null : t.focus();
        }, __ToNull())));
      }, boolToNull())));
      this.initialized = true;
    }
    set expandCollapse(button) {
      this[_expandCollapseButton] = button;
    }
    focus() {
      let t = this[_expandCollapseButton];
      t == null ? null : t.focus();
    }
    get focusmove() {
      return this[_focusMoveCtrl].stream;
    }
    keydown(event) {
      let focusEvent = focus__focus.FocusMoveEvent.fromKeyboardEvent(this, event);
      if (focusEvent != null) {
        this[_focusMoveCtrl].add(focusEvent);
      }
    }
    set tabbable(value) {}
    expand(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfbool().value(false);
      return this.changeState(true, byUserAction, this[_openController]);
    }
    collapse(opts) {
      let byUserAction = opts && 'byUserAction' in opts ? opts.byUserAction : true;
      if (dart.test(this.disabled) && dart.test(byUserAction)) return FutureOfbool().value(false);
      return this.changeState(false, byUserAction, this[_closeController]);
    }
    doSave() {
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      this[_saveController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        if (dart.test(this.closeOnSave)) {
          this[_isExpanded].value = false;
          this[_isExpandedChangeByUserAction].add(false);
          this[_changeDetector].markForCheck();
          if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        }
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return FutureOfbool()._check(actionCtrl.action.onDone.then(core.bool, dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector].markForCheck();
        return result;
      }, boolTobool())));
    }
    doCancel() {
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      this[_cancelController].add(actionCtrl.action);
      this[_activeSaveCancelAction] = true;
      this[_changeDetector].markForCheck();
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded].value = false;
        this[_isExpandedChangeByUserAction].add(false);
        this[_changeDetector].markForCheck();
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](false);
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return FutureOfbool()._check(actionCtrl.action.onDone.then(core.bool, dart.fn(result => {
        this[_activeSaveCancelAction] = false;
        this[_changeDetector].markForCheck();
        return result;
      }, boolTobool())));
    }
    changeState(expand, byUserAction, stream) {
      if (this.isExpanded == expand) {
        return FutureOfbool().value(true);
      }
      let actionCtrl = new (AsyncActionControllerOfbool()).new();
      stream.add(actionCtrl.action);
      let stateWasInitialized = this.initialized;
      actionCtrl.execute(dart.fn(() => {
        this[_isExpanded].value = expand;
        if (dart.test(byUserAction)) this[_isExpandedChangeByUserAction].add(expand);
        this[_changeDetector].markForCheck();
        if (dart.test(expand) && this[_focusableItem] != null) {
          this[_domService].scheduleWrite(dart.fn(() => {
            this[_focusableItem].focus();
          }, VoidToNull()));
        }
        if (dart.test(stateWasInitialized)) this[_transitionHeightChange](expand);
        return true;
      }, VoidTobool()), {valueOnCancel: false});
      return actionCtrl.action.onDone;
    }
    get headerHidden() {
      return dart.test(this.isExpanded) && dart.test(this.hideExpandedHeader);
    }
    [_transitionHeightChange](expand) {
      this[_mainPanel].style[$height] = dart.str(this[_mainPanel][$scrollHeight]) + "px";
      if (dart.test(expand)) {
        FutureOfNull()._check(this[_readExpandedPanelHeight]().then(core.Null, dart.fn(expandedPanelHeight => {
          this[_mainPanel].style[$height] = expandedPanelHeight;
        }, StringToNull())));
      } else {
        FutureOfString()._check(this[_domService].nextFrame.then(core.String, dart.fn(_ => this[_mainPanel].style[$height] = "", numToString())));
      }
      if (dart.test(this.hideExpandedHeader)) {
        this[_headerPanel].style[$height] = dart.str(this[_headerPanel][$scrollHeight]) + "px";
        if (dart.test(expand)) {
          FutureOfNull()._check(this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
            this[_headerPanel].style[$height] = "";
          }, numToNull())));
        } else {
          FutureOfNull()._check(this[_readExpandedHeaderHeight]().then(core.Null, dart.fn(expandedHeaderHeight => {
            this[_headerPanel].style[$height] = expandedHeaderHeight;
          }, StringToNull())));
        }
      }
    }
    [_readExpandedPanelHeight]() {
      let completeExpandedHeight = CompleterOfString().new();
      this[_domService].scheduleRead(dart.fn(() => {
        if (this[_mainContent] != null && this[_contentWrapper] != null) {
          completeExpandedHeight.complete(this[_readMainContentHeight]());
        } else {
          this[_pendingExpandedPanelHeightReads][$add](completeExpandedHeight);
        }
      }, VoidToNull()));
      return completeExpandedHeight.future;
    }
    [_readMainContentHeight]() {
      let contentHeight = this[_mainContent][$scrollHeight];
      let expandedPanelHeight = "";
      let mainPanelStyle = this[_mainPanel][$getComputedStyle]();
      let hasHeightTransition = dart.notNull(contentHeight) > 0 && mainPanelStyle[$transition][$contains]("height");
      if (hasHeightTransition) {
        let topMargin = this[_contentWrapper][$getComputedStyle]()[$marginTop];
        expandedPanelHeight = "calc(" + dart.str(contentHeight) + "px + " + dart.str(topMargin) + ")";
      }
      return expandedPanelHeight;
    }
    [_readExpandedHeaderHeight]() {
      let completeExpandedHeight = CompleterOfString().new();
      this[_domService].scheduleRead(dart.fn(() => {
        let contentHeight = math.max(core.int, this[_headerContent][$scrollHeight], (() => {
          let t = this[_actionContent];
          let l = t == null ? null : t[$scrollHeight];
          return l != null ? l : 0;
        })());
        let expandedHeaderHeight = "";
        let headerPanelStyle = this[_headerPanel][$getComputedStyle]();
        let hasHeightTransition = contentHeight > 0 && headerPanelStyle[$transition][$contains]("height");
        if (hasHeightTransition) expandedHeaderHeight = dart.str(contentHeight) + "px";
        completeExpandedHeight.complete(expandedHeaderHeight);
      }, VoidToNull()));
      return completeExpandedHeight.future;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new = function(ngZone, changeDetector, domService, expandOnLeft, forceContent) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_defaultExpandIcon] = "expand_less";
    this[_pendingExpandedPanelHeightReads] = JSArrayOfCompleterOfString().of([]);
    this[initialized] = false;
    this[_focusableItem] = null;
    this[_mainPanel] = null;
    this[_headerPanel] = null;
    this[_mainContent] = null;
    this[_headerContent] = null;
    this[_actionContent] = null;
    this[_contentWrapper] = null;
    this[closeOnSave] = true;
    this[_isExpanded] = new (ObservableReferenceOfbool()).new(false);
    this[_isExpandedChangeByUserAction] = StreamControllerOfbool().broadcast({sync: true});
    this[_anotherExpanded] = false;
    this[_disabled] = false;
    this[saveDisabled] = false;
    this[_activeSaveCancelAction] = false;
    this[hideExpandedHeader] = false;
    this[disableHeaderExpansion] = false;
    this[name] = null;
    this[secondaryText] = null;
    this[_groupAriaLabel] = null;
    this[_expandIcon] = null;
    this[alwaysShowExpandIcon] = false;
    this[alwaysHideExpandIcon] = false;
    this[showSaveCancel] = true;
    this[cancelDisplayed] = true;
    this[enterAccepts] = false;
    this[saveText] = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgSave;
    this[cancelText] = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgCancel;
    this[_openController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_closeController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_saveController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_cancelController] = StreamControllerOfAsyncActionOfbool().broadcast({sync: true});
    this[_expandCollapseButton] = null;
    this[_focusMoveCtrl] = StreamControllerOfFocusMoveEvent().broadcast({sync: true});
    this[_ngZone] = ngZone;
    this[_changeDetector] = changeDetector;
    this[_domService] = domService;
    this[shouldExpandOnLeft] = expandOnLeft != null;
    this[forceContentWhenClosed] = forceContent != null;
  }).prototype = material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.prototype;
  dart.addTypeTests(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel);
  const shouldExpandOnLeft = Symbol("MaterialExpansionPanel.shouldExpandOnLeft");
  const forceContentWhenClosed = Symbol("MaterialExpansionPanel.forceContentWhenClosed");
  const initialized = Symbol("MaterialExpansionPanel.initialized");
  const closeOnSave = Symbol("MaterialExpansionPanel.closeOnSave");
  const saveDisabled = Symbol("MaterialExpansionPanel.saveDisabled");
  const hideExpandedHeader = Symbol("MaterialExpansionPanel.hideExpandedHeader");
  const disableHeaderExpansion = Symbol("MaterialExpansionPanel.disableHeaderExpansion");
  const name = Symbol("MaterialExpansionPanel.name");
  const secondaryText = Symbol("MaterialExpansionPanel.secondaryText");
  const alwaysShowExpandIcon = Symbol("MaterialExpansionPanel.alwaysShowExpandIcon");
  const alwaysHideExpandIcon = Symbol("MaterialExpansionPanel.alwaysHideExpandIcon");
  const showSaveCancel = Symbol("MaterialExpansionPanel.showSaveCancel");
  const cancelDisplayed = Symbol("MaterialExpansionPanel.cancelDisplayed");
  const enterAccepts = Symbol("MaterialExpansionPanel.enterAccepts");
  const saveText = Symbol("MaterialExpansionPanel.saveText");
  const cancelText = Symbol("MaterialExpansionPanel.cancelText");
  material_expansionpanel__material_expansionpanel.MaterialExpansionPanel[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, interfaces__has_disabled.HasDisabled, src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy, focus__focus.FocusableItem];
  dart.setMethodSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getMethods(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_completeExpandedPanelHeightReadsIfPossible]: dart.fnType(dart.void, []),
    [_namedPanelMsg]: dart.fnType(core.String, [core.String]),
    handleHeaderClick: dart.fnType(dart.void, []),
    handleExpandIconClick: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    keydown: dart.fnType(dart.void, [html.KeyboardEvent]),
    expand: dart.fnType(async.Future$(core.bool), [], {byUserAction: core.bool}),
    collapse: dart.fnType(async.Future$(core.bool), [], {byUserAction: core.bool}),
    doSave: dart.fnType(async.Future$(core.bool), []),
    doCancel: dart.fnType(async.Future$(core.bool), []),
    changeState: dart.fnType(async.Future$(core.bool), [core.bool, core.bool, async.StreamController]),
    [_transitionHeightChange]: dart.fnType(dart.void, [core.bool]),
    [_readExpandedPanelHeight]: dart.fnType(async.Future$(core.String), []),
    [_readMainContentHeight]: dart.fnType(core.String, []),
    [_readExpandedHeaderHeight]: dart.fnType(async.Future$(core.String), []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getGetters(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    isExpanded: core.bool,
    isExpandedChange: async.Stream$(core.bool),
    isExpandedChangeByUserAction: async.Stream$(core.bool),
    contentVisible: async.Stream$(core.bool),
    anotherExpanded: core.bool,
    disabled: core.bool,
    activeSaveCancelAction: core.bool,
    groupAriaLabel: core.String,
    expandIcon: core.String,
    hasCustomExpandIcon: core.bool,
    shouldShowExpandIcon: core.bool,
    shouldFlipExpandIcon: core.bool,
    shouldShowHiddenHeaderExpandIcon: core.bool,
    closePanelMsg: core.String,
    openPanelMsg: core.String,
    headerMsg: core.String,
    close: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    open: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    save: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    cancel: async.Stream$(src__model__action__async_action.AsyncAction$(core.bool)),
    focusmove: async.Stream$(focus__focus.FocusMoveEvent),
    headerHidden: core.bool
  }));
  dart.setSetterSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getSetters(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    autoFocusChild: focus__focus.AutoFocusDirective,
    focusElement: dart.dynamic,
    mainPanel: html.HtmlElement,
    headerPanel: html.HtmlElement,
    mainContent: html.HtmlElement,
    headerContent: html.HtmlElement,
    actionContent: html.HtmlElement,
    contentWrapper: html.HtmlElement,
    isExpanded: core.bool,
    anotherExpanded: core.bool,
    disabled: core.bool,
    groupAriaLabel: core.String,
    expandIcon: core.String,
    expandCollapse: button_decorator__button_decorator.ButtonDirective,
    tabbable: core.bool
  }));
  dart.setFieldSignature(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, () => ({
    __proto__: dart.getFields(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_defaultExpandIcon]: dart.finalFieldType(core.String),
    shouldExpandOnLeft: dart.finalFieldType(core.bool),
    forceContentWhenClosed: dart.finalFieldType(core.bool),
    [_pendingExpandedPanelHeightReads]: dart.finalFieldType(ListOfCompleterOfString()),
    initialized: dart.fieldType(core.bool),
    [_focusableItem]: dart.fieldType(focus__focus_interface.Focusable),
    [_mainPanel]: dart.fieldType(html.HtmlElement),
    [_headerPanel]: dart.fieldType(html.HtmlElement),
    [_mainContent]: dart.fieldType(html.HtmlElement),
    [_headerContent]: dart.fieldType(html.HtmlElement),
    [_actionContent]: dart.fieldType(html.HtmlElement),
    [_contentWrapper]: dart.fieldType(html.HtmlElement),
    closeOnSave: dart.fieldType(core.bool),
    [_isExpanded]: dart.fieldType(ObservableReferenceOfbool()),
    [_isExpandedChangeByUserAction]: dart.finalFieldType(StreamControllerOfbool()),
    [_anotherExpanded]: dart.fieldType(core.bool),
    [_disabled]: dart.fieldType(core.bool),
    saveDisabled: dart.fieldType(core.bool),
    [_activeSaveCancelAction]: dart.fieldType(core.bool),
    hideExpandedHeader: dart.fieldType(core.bool),
    disableHeaderExpansion: dart.fieldType(core.bool),
    name: dart.fieldType(core.String),
    secondaryText: dart.fieldType(core.String),
    [_groupAriaLabel]: dart.fieldType(core.String),
    [_expandIcon]: dart.fieldType(core.String),
    alwaysShowExpandIcon: dart.fieldType(core.bool),
    alwaysHideExpandIcon: dart.fieldType(core.bool),
    showSaveCancel: dart.fieldType(core.bool),
    cancelDisplayed: dart.fieldType(core.bool),
    enterAccepts: dart.fieldType(core.bool),
    saveText: dart.fieldType(core.String),
    cancelText: dart.fieldType(core.String),
    [_openController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_closeController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_saveController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_cancelController]: dart.finalFieldType(StreamControllerOfAsyncActionOfbool()),
    [_expandCollapseButton]: dart.fieldType(button_decorator__button_decorator.ButtonDirective),
    [_focusMoveCtrl]: dart.finalFieldType(StreamControllerOfFocusMoveEvent())
  }));
  dart.defineLazy(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, {
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._closePanelMsg*/get _closePanelMsg() {
      return intl$.Intl.message("Hide panel", {name: "_closePanelMsg", desc: "ARIA label for a button that hides the panel."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._openPanelMsg*/get _openPanelMsg() {
      return intl$.Intl.message("Show panel", {name: "_openPanelMsg", desc: "ARIA label for a button that shows the panel."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.expandAriaMsg*/get expandAriaMsg() {
      return intl$.Intl.message("Expand", {desc: "Aria label used for the button used to expand the panel."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgSave*/get _msgSave() {
      return intl$.Intl.message("Save", {name: "_msgSave", desc: "Text on save button.", meaning: "Text on save button."});
    },
    /*material_expansionpanel__material_expansionpanel.MaterialExpansionPanel._msgCancel*/get _msgCancel() {
      return intl$.Intl.message("Cancel", {name: "_msgCancel", desc: "Text on cancel button.", meaning: "Text on cancel button."});
    }
  });
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.ddc", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.dart": material_expansionpanel__material_expansionpanel
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel: material_expansionpanel__material_expansionpanel
  };
});

//# sourceMappingURL=material_expansionpanel.ddc.js.map
