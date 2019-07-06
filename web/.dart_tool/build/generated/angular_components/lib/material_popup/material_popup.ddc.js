define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/toggle', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/model/math/box', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/utils/id_generator/id_generator'], function(dart_sdk, disposer, popup_hierarchy, toggle, dom_popup_source, async_update_scheduler, visibility, focus_interface, alignment, deferred_content_aware, change_detection, material_dropdown_base, modules, overlay_ref, dom_service, box, zindexer, id_generator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__laminate__popup__popup_state = popup_hierarchy.src__laminate__popup__popup_state;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_interface = popup_hierarchy.src__laminate__popup__popup_interface;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const model__ui__toggle = toggle.model__ui__toggle;
  const src__laminate__popup__popup_source = dom_popup_source.src__laminate__popup__popup_source;
  const src__utils__async__throttle_stream = async_update_scheduler.src__utils__async__throttle_stream;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__core__zone__ng_zone = change_detection.src__core__zone__ng_zone;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const src__laminate__overlay__overlay_ref = overlay_ref.src__laminate__overlay__overlay_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const model__math__box = box.model__math__box;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const material_popup__material_popup = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $cancelAnimationFrame = dartx.cancelAnimationFrame;
  const $append = dartx.append;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $onResize = dartx.onResize;
  const $display = dartx.display;
  const $visibility = dartx.visibility;
  const $every = dartx.every;
  const $_get = dartx._get;
  const $document = dartx.document;
  const $round = dartx.round;
  const $left = dartx.left;
  const $top = dartx.top;
  const $width = dartx.width;
  const $height = dartx.height;
  const $requestAnimationFrame = dartx.requestAnimationFrame;
  const $transform = dartx.transform;
  const $topLeft = dartx.topLeft;
  const $first = dartx.first;
  const $bottomRight = dartx.bottomRight;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $right = dartx.right;
  const $bottom = dartx.bottom;
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let StreamControllerOfEvent = () => (StreamControllerOfEvent = dart.constFn(async.StreamController$(html.Event)))();
  let MutableRectangleOfnum = () => (MutableRectangleOfnum = dart.constFn(math.MutableRectangle$(core.num)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let voidTovoid = () => (voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let CompleterOfRectangleOfnum = () => (CompleterOfRectangleOfnum = dart.constFn(async.Completer$(RectangleOfnum())))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let JSArrayOfStreamOfRectangleOfnum = () => (JSArrayOfStreamOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(StreamOfRectangleOfnum())))();
  let RectangleOfnumTobool = () => (RectangleOfnumTobool = dart.constFn(dart.fnType(core.bool, [RectangleOfnum()])))();
  let ListOfRectangleOfnum = () => (ListOfRectangleOfnum = dart.constFn(core.List$(RectangleOfnum())))();
  let ListOfRectangleOfnumToNull = () => (ListOfRectangleOfnumToNull = dart.constFn(dart.fnType(core.Null, [ListOfRectangleOfnum()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core.List$(html.Element)))();
  const _hierarchy = dart.privateName(material_popup__material_popup, "_hierarchy");
  const _ngZone = dart.privateName(material_popup__material_popup, "_ngZone");
  const _overlayService = dart.privateName(material_popup__material_popup, "_overlayService");
  const _domService = dart.privateName(material_popup__material_popup, "_domService");
  const _zIndexer = dart.privateName(material_popup__material_popup, "_zIndexer");
  const _defaultPreferredPositions = dart.privateName(material_popup__material_popup, "_defaultPreferredPositions");
  const _useRepositionLoop = dart.privateName(material_popup__material_popup, "_useRepositionLoop");
  const _viewportBoundaries = dart.privateName(material_popup__material_popup, "_viewportBoundaries");
  const _popupSizeProvider = dart.privateName(material_popup__material_popup, "_popupSizeProvider");
  const _changeDetector = dart.privateName(material_popup__material_popup, "_changeDetector");
  const _viewContainer = dart.privateName(material_popup__material_popup, "_viewContainer");
  const _onOpened = dart.privateName(material_popup__material_popup, "_onOpened");
  const _onContentVisible = dart.privateName(material_popup__material_popup, "_onContentVisible");
  const _onAutoDismissed = dart.privateName(material_popup__material_popup, "_onAutoDismissed");
  const _disposer = dart.privateName(material_popup__material_popup, "_disposer");
  const _visibleDisposer = dart.privateName(material_popup__material_popup, "_visibleDisposer");
  const _alignmentPosition = dart.privateName(material_popup__material_popup, "_alignmentPosition");
  const _overlayRef = dart.privateName(material_popup__material_popup, "_overlayRef");
  const _uniqueId = dart.privateName(material_popup__material_popup, "_uniqueId");
  const _resolvedPopupRef = dart.privateName(material_popup__material_popup, "_resolvedPopupRef");
  const _viewInitialized = dart.privateName(material_popup__material_popup, "_viewInitialized");
  const _animationTimer = dart.privateName(material_popup__material_popup, "_animationTimer");
  const _viewportRect = dart.privateName(material_popup__material_popup, "_viewportRect");
  const _isOpening = dart.privateName(material_popup__material_popup, "_isOpening");
  const _initialSourceDimensions = dart.privateName(material_popup__material_popup, "_initialSourceDimensions");
  const _repositionOffsetX = dart.privateName(material_popup__material_popup, "_repositionOffsetX");
  const _repositionOffsetY = dart.privateName(material_popup__material_popup, "_repositionOffsetY");
  const _repositionLoopId = dart.privateName(material_popup__material_popup, "_repositionLoopId");
  const _autoDismissBlockers = dart.privateName(material_popup__material_popup, "_autoDismissBlockers");
  const _zIndex = dart.privateName(material_popup__material_popup, "_zIndex");
  const _slide = dart.privateName(material_popup__material_popup, "_slide");
  const _matchMinSourceWidth = dart.privateName(material_popup__material_popup, "_matchMinSourceWidth");
  const _isVisible = dart.privateName(material_popup__material_popup, "_isVisible");
  const _updateOverlayCssClass = dart.privateName(material_popup__material_popup, "_updateOverlayCssClass");
  const _initView = dart.privateName(material_popup__material_popup, "_initView");
  const _open = dart.privateName(material_popup__material_popup, "_open");
  const _close = dart.privateName(material_popup__material_popup, "_close");
  const _updateViewportSize = dart.privateName(material_popup__material_popup, "_updateViewportSize");
  const _updatePopupMinMaxSize = dart.privateName(material_popup__material_popup, "_updatePopupMinMaxSize");
  const _onPopupOpened = dart.privateName(material_popup__material_popup, "_onPopupOpened");
  const _schedulePositionUpdate = dart.privateName(material_popup__material_popup, "_schedulePositionUpdate");
  const _startRepositionLoop = dart.privateName(material_popup__material_popup, "_startRepositionLoop");
  const _stopRepositionLoop = dart.privateName(material_popup__material_popup, "_stopRepositionLoop");
  const _onPopupClosed = dart.privateName(material_popup__material_popup, "_onPopupClosed");
  const _sourceDimensions = dart.privateName(material_popup__material_popup, "_sourceDimensions");
  const _reposition = dart.privateName(material_popup__material_popup, "_reposition");
  const _preferredPositions = dart.privateName(material_popup__material_popup, "_preferredPositions");
  const _getBestPosition = dart.privateName(material_popup__material_popup, "_getBestPosition");
  const Object_PopupBase$ = class Object_PopupBase extends core.Object {};
  (Object_PopupBase$.new = function() {
  }).prototype = Object_PopupBase$.prototype;
  dart.applyMixin(Object_PopupBase$, src__laminate__popup__popup_interface.PopupBase);
  const Object_PopupEvents$ = class Object_PopupEvents extends Object_PopupBase$ {};
  (Object_PopupEvents$.new = function() {
    src__laminate__popup__popup_interface.PopupEvents.new.call(this);
  }).prototype = Object_PopupEvents$.prototype;
  dart.applyMixin(Object_PopupEvents$, src__laminate__popup__popup_interface.PopupEvents);
  const Object_PopupHierarchyElement$ = class Object_PopupHierarchyElement extends Object_PopupEvents$ {};
  (Object_PopupHierarchyElement$.new = function() {
    Object_PopupHierarchyElement$.__proto__.new.call(this);
  }).prototype = Object_PopupHierarchyElement$.prototype;
  dart.applyMixin(Object_PopupHierarchyElement$, src__laminate__popup__popup_hierarchy.PopupHierarchyElement);
  material_popup__material_popup.MaterialPopupComponent = class MaterialPopupComponent extends Object_PopupHierarchyElement$ {
    get onOpened() {
      return this[_onOpened].stream;
    }
    get onAutoDismissed() {
      return this[_onAutoDismissed].stream;
    }
    get elementRef() {
      return this[elementRef$];
    }
    set elementRef(value) {
      super.elementRef = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get autoDismiss() {
      return this.state.autoDismiss;
    }
    set autoDismiss(value) {
      super.autoDismiss = value;
    }
    get showPopup() {
      return this[showPopup];
    }
    set showPopup(value) {
      this[showPopup] = value;
    }
    get z() {
      return this[z];
    }
    set z(value) {
      this[z] = value;
    }
    get transformOrigin() {
      let t = this[_alignmentPosition];
      return t == null ? null : t.animationOrigin;
    }
    get zIndex() {
      return this[_zIndex];
    }
    get slide() {
      return this[_slide];
    }
    set slide(value) {
      this[_slide] = (() => {
        let l = value == null ? null : value[$isNotEmpty];
        return l != null ? l : false;
      })() ? value : null;
      if (!(this[_slide] == null || this.slide === "x" || this.slide === "y")) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/material_popup/material_popup.dart", 191, 12, "_slide == null || (slide == 'x' || slide == 'y')");
    }
    set popupSizeProvider(value) {
      this[_popupSizeProvider] = value;
    }
    get minHeight() {
      return this[minHeight];
    }
    set minHeight(value) {
      this[minHeight] = value;
    }
    get minWidth() {
      return this[minWidth];
    }
    set minWidth(value) {
      this[minWidth] = value;
    }
    get maxHeight() {
      return this[maxHeight];
    }
    set maxHeight(value) {
      this[maxHeight] = value;
    }
    get maxWidth() {
      return this[maxWidth];
    }
    set maxWidth(value) {
      this[maxWidth] = value;
    }
    get matchMinSourceWidth() {
      return this[_matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[_matchMinSourceWidth] = super.matchMinSourceWidth = value;
    }
    get inkBackground() {
      return this[inkBackground];
    }
    set inkBackground(value) {
      this[inkBackground] = value;
    }
    get hasBox() {
      return this[hasBox];
    }
    set hasBox(value) {
      this[hasBox] = value;
    }
    set autoDismissBlockers(elements) {
      this[_autoDismissBlockers] = elements;
    }
    get contentVisible() {
      return this[_onContentVisible].stream.distinct();
    }
    get hierarchy() {
      let l = this[_hierarchy];
      this[_hierarchy] = l != null ? l : new src__laminate__popup__popup_hierarchy.PopupHierarchy.new();
      return this[_hierarchy];
    }
    ngAfterViewInit() {
      this[_updateOverlayCssClass]();
    }
    [_updateOverlayCssClass]() {
      if (this[_overlayRef] == null) return;
      let hostClassName = dart.dload(this.elementRef.nativeElement, 'className');
      this[_overlayRef].overlayElement.className = dart.notNull(this[_overlayRef].overlayElement.className) + (" " + dart.str(hostClassName));
    }
    ngOnDestroy() {
      if (this[_repositionLoopId] != null) {
        html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      }
      this[_visibleDisposer].dispose();
      this[_disposer].dispose();
      let t = this[_animationTimer];
      t == null ? null : t.cancel();
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    get paneId() {
      let t = this[_overlayRef];
      return t == null ? null : t.uniqueId;
    }
    get uniqueId() {
      return this[_uniqueId];
    }
    get templateRef() {
      return this[templateRef];
    }
    set templateRef(value) {
      this[templateRef] = value;
    }
    [_initView]() {
      if (!(this[_viewInitialized] === false)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/material_popup/material_popup.dart", 318, 12, "_viewInitialized == false");
      this[_overlayRef] = this[_overlayService].createOverlayRefSync();
      this[_disposer].addFunction(dart.bind(this[_overlayRef], 'dispose'));
      this[_zIndex] = this[_zIndexer].pop();
      let view = this[_viewContainer].createEmbeddedView(this.templateRef);
      for (let node of view.rootNodes) {
        this[_overlayRef].overlayElement[$append](node);
      }
      this[_updateOverlayCssClass]();
      this[_viewInitialized] = true;
    }
    set visible(visible) {
      if (dart.test(visible)) {
        if (!dart.test(this[_viewInitialized])) {
          this[_initView]();
          async.scheduleMicrotask(dart.bind(this, _open));
        } else {
          this[_open]();
        }
      } else if (dart.test(this[_viewInitialized])) {
        this[_close]();
      }
    }
    get isVisible() {
      return this[_isVisible];
    }
    toggle() {
      this.visible = !dart.test(this.isVisible);
    }
    open() {
      this.visible = true;
    }
    close() {
      this.visible = false;
    }
    get container() {
      let t = this[_overlayRef];
      return t == null ? null : t.overlayElement;
    }
    set source(source) {
      super.source = source;
      source.popupId = this.uniqueId;
      if (model__ui__toggle.Toggler.is(source)) {
        model__ui__toggle.Toggler.as(source).toggleable = new material_popup__material_popup._DeferredToggleable.new(this);
      }
    }
    get autoDismissBlockers() {
      let sourceElement = src__laminate__popup__popup_source.ElementPopupSource.is(this.state.source) ? src__laminate__popup__popup_source.ElementPopupSource.as(this.state.source).sourceElement : null;
      return sourceElement != null ? (() => {
        let _ = this[_autoDismissBlockers][$toList]();
        _[$add](sourceElement);
        return _;
      })() : this[_autoDismissBlockers][$toList]();
    }
    onDismiss() {
      this.close();
    }
    onAutoDismiss(event) {
      this.close();
      this[_onAutoDismissed].add(event);
    }
    [_open]() {
      if (dart.test(this[_isOpening])) return async.Future.value();
      this[_isOpening] = true;
      let t = this[_animationTimer];
      t == null ? null : t.cancel();
      this.onOpenController.add(null);
      if (!dart.test(this[_isOpening])) return async.Future.value();
      if (!dart.test(this[_viewInitialized])) {
        dart.throw(new core.StateError.new("No content is attached."));
      } else if (this.state.source == null) {
        dart.throw(new core.StateError.new("Cannot open popup: no source set."));
      }
      this[_updateViewportSize]();
      this[_updatePopupMinMaxSize]();
      this[_visibleDisposer].addStreamSubscription(dart.dynamic, html.window[$onResize].transform(dart.dynamic, src__utils__async__throttle_stream.throttleStream(html.Event, dart.dynamic, material_popup__material_popup.MaterialPopupComponent._resizeThrottleDuration, {guaranteeLast: true})).listen(dart.fn(_ => {
        this[_updateViewportSize]();
        this[_updatePopupMinMaxSize]();
      }, dynamicToNull())));
      this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.Hidden;
      let _ = this[_overlayRef].overlayElement.style;
      _[$display] = "";
      _[$visibility] = "hidden";
      this[_onContentVisible].add(true);
      this[_changeDetector].markForCheck();
      let initialData = CompleterOfRectangleOfnum().new();
      let popupContentsLayoutStream = this[_overlayRef].measureSizeChanges().asBroadcastStream({onCancel: dart.gbind(dart.bind(this[_visibleDisposer], 'addStreamSubscription'), RectangleOfnum())});
      let popupSourceLayoutStream = this.state.source.onDimensionsChanged({track: this.state.trackLayoutChanges});
      if (!dart.test(this.state.trackLayoutChanges)) {
        popupContentsLayoutStream = popupContentsLayoutStream.take(1);
      }
      let mergedLayoutStream = material_popup__material_popup._mergeStreams(RectangleOfnum(), JSArrayOfStreamOfRectangleOfnum().of([popupContentsLayoutStream, popupSourceLayoutStream]));
      this[_visibleDisposer].addStreamSubscription(ListOfRectangleOfnum(), mergedLayoutStream.listen(dart.fn(layoutRects => {
        if (dart.test(layoutRects[$every](dart.fn(r => r != null, RectangleOfnumTobool())))) {
          if (!dart.test(initialData.isCompleted)) {
            this[_onPopupOpened]();
            initialData.complete(null);
          }
          this[_initialSourceDimensions] = null;
          this[_schedulePositionUpdate](layoutRects[$_get](0), layoutRects[$_get](1));
        }
      }, ListOfRectangleOfnumToNull())));
      return initialData.future;
    }
    [_onPopupOpened]() {
      if (!dart.test(this[_isOpening])) return;
      this.showPopup = true;
      this[_changeDetector].markForCheck();
      if (dart.test(this.state.trackLayoutChanges) && dart.test(this[_useRepositionLoop])) {
        this[_startRepositionLoop]();
      }
      this.attachToVisibleHierarchy();
      this.state.source.onOpen();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      } else {
        async.Timer.run(dart.fn(() => {
          if (!dart.test(this[_isOpening])) return;
          this[_isVisible] = true;
          this.onVisibleController.add(true);
          this[_onOpened].add(null);
        }, VoidToNull()));
      }
    }
    [_close]() {
      if (!dart.test(this[_isOpening])) return;
      this[_isOpening] = false;
      let t = this[_animationTimer];
      t == null ? null : t.cancel();
      this.onCloseController.add(null);
      if (dart.test(this[_isOpening])) return;
      this[_visibleDisposer].dispose();
      if (this[_repositionLoopId] != null) {
        this[_stopRepositionLoop]();
      }
      if (focus__focus_interface.Focusable.is(this.state.source) && dart.test(this.hierarchy.islastTriggerWithKeyboard)) {
        this[_domService].scheduleWrite(dart.fn(() => {
          if (dart.test(this[_overlayRef].overlayElement.contains(html.window[$document].activeElement))) {
            focus__focus_interface.Focusable.as(this.state.source).focus();
          }
        }, VoidToNull()));
      }
      this.detachFromVisibleHierarchy();
      this.showPopup = false;
      this[_changeDetector].markForCheck();
      this.state.source.onClose();
      if (dart.test(this.hasBox)) {
        this[_animationTimer] = async.Timer.new(material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
          this[_animationTimer] = null;
          this[_onPopupClosed]();
        }, VoidToNull()));
      } else {
        this[_onPopupClosed]();
      }
    }
    [_onPopupClosed]() {
      this[_onContentVisible].add(false);
      this[_changeDetector].markForCheck();
      this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.None;
      this[_overlayRef].overlayElement.style[$display] = "none";
      this[_isVisible] = false;
      this.onVisibleController.add(false);
    }
    get [_sourceDimensions]() {
      let t = this.state.source;
      let sourceDimensions = t == null ? null : t.dimensions;
      if (sourceDimensions == null) return null;
      let containerRect = this[_overlayRef].containerElement == null ? null : this[_overlayRef].containerElement.getBoundingClientRect();
      if (containerRect == null) return null;
      return new (RectangleOfnum()).new((dart.notNull(sourceDimensions[$left]) - dart.notNull(containerRect[$left]))[$round](), (dart.notNull(sourceDimensions[$top]) - dart.notNull(containerRect[$top]))[$round](), sourceDimensions[$width][$round](), sourceDimensions[$height][$round]());
    }
    [_startRepositionLoop]() {
      this[_ngZone].runOutsideAngular(core.Null, dart.fn(() => {
        this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      }, VoidToNull()));
    }
    [_stopRepositionLoop]() {
      html.window[$cancelAnimationFrame](this[_repositionLoopId]);
      this[_repositionLoopId] = null;
      if (this[_repositionOffsetX] !== 0 || this[_repositionOffsetY] !== 0) {
        this[_overlayRef].state.left = dart.notNull(this[_overlayRef].state.left) + dart.notNull(this[_repositionOffsetX]);
        this[_overlayRef].state.top = dart.notNull(this[_overlayRef].state.top) + dart.notNull(this[_repositionOffsetY]);
        this[_repositionOffsetX] = this[_repositionOffsetY] = 0;
      }
    }
    [_reposition](_) {
      this[_repositionLoopId] = html.window[$requestAnimationFrame](dart.bind(this, _reposition));
      let sourceDimensions = this[_sourceDimensions];
      if (sourceDimensions == null) return;
      let t = this[_initialSourceDimensions];
      t == null ? this[_initialSourceDimensions] = sourceDimensions : t;
      let newOffsetX = (dart.notNull(sourceDimensions[$left]) - dart.notNull(this[_initialSourceDimensions][$left]))[$round]();
      let newOffsetY = (dart.notNull(sourceDimensions[$top]) - dart.notNull(this[_initialSourceDimensions][$top]))[$round]();
      let scrollShiftX = newOffsetX - dart.notNull(this[_repositionOffsetX]);
      let scrollShiftY = newOffsetY - dart.notNull(this[_repositionOffsetY]);
      this[_repositionOffsetX] = newOffsetX;
      this[_repositionOffsetY] = newOffsetY;
      if (dart.test(this.state.constrainToViewport)) {
        let popupRect = this[_overlayRef].overlayElement.getBoundingClientRect();
        popupRect = material_popup__material_popup._shiftRectangle(popupRect, {left: scrollShiftX, top: scrollShiftY});
        let boundedViewportRect = material_popup__material_popup._boundRectangle(this[_viewportRect], this[_viewportBoundaries]);
        let viewportShift = material_popup__material_popup._shiftRectangleToFitWithin(popupRect, boundedViewportRect);
        this[_repositionOffsetX] = dart.notNull(this[_repositionOffsetX]) + dart.notNull(viewportShift[$left]);
        this[_repositionOffsetY] = dart.notNull(this[_repositionOffsetY]) + dart.notNull(viewportShift[$top]);
      }
      this[_overlayRef].overlayElement.style[$transform] = "translate(" + dart.str(this[_repositionOffsetX]) + "px, " + dart.str(this[_repositionOffsetY]) + "px)";
    }
    [_updateViewportSize]() {
      this[_viewportRect].width = html.window.innerWidth;
      this[_viewportRect].height = html.window.innerHeight;
    }
    [_updatePopupMinMaxSize]() {
      if (this[_popupSizeProvider] == null) return;
      let boundedViewportRect = material_popup__material_popup._boundRectangle(this[_viewportRect], this[_viewportBoundaries]);
      this.minHeight = this[_popupSizeProvider].getMinHeight((() => {
        let l = this[_overlayRef].state.top;
        return l != null ? l : 0;
      })(), boundedViewportRect[$height]);
      this.minWidth = this[_popupSizeProvider].getMinWidth((() => {
        let l = this[_overlayRef].state.left;
        return l != null ? l : 0;
      })(), boundedViewportRect[$width]);
      this.maxHeight = this[_popupSizeProvider].getMaxHeight((() => {
        let l = this[_overlayRef].state.top;
        return l != null ? l : 0;
      })(), boundedViewportRect[$height]);
      this.maxWidth = this[_popupSizeProvider].getMaxWidth((() => {
        let l = this[_overlayRef].state.left;
        return l != null ? l : 0;
      })(), boundedViewportRect[$width]);
    }
    get [_preferredPositions]() {
      return dart.test(material_popup__material_popup._flatten(this.state.preferredPositions)[$isNotEmpty]) ? this.state.preferredPositions : this[_defaultPreferredPositions];
    }
    [_getBestPosition](contentRect, sourceRect, containerRect) {
      if (!dart.test(this.state.enforceSpaceConstraints)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/material_popup/material_popup.dart", 699, 12, "state.enforceSpaceConstraints");
      let containerOffset = containerRect[$topLeft];
      let positions = material_popup__material_popup._flatten(this[_preferredPositions]);
      let bestPosition = positions[$first];
      let bestOverlap = 0.0;
      for (let position of positions) {
        if (this.state.source.isRtl === true) {
          position = dart.dsend(position, 'flipRelativePosition', []);
        }
        let containerPos = new (RectangleOfnum()).new(core.num._check(dart.dsend(dart.dload(position, 'originX'), 'calcLeft', [sourceRect, contentRect])), core.num._check(dart.dsend(dart.dload(position, 'originY'), 'calcTop', [sourceRect, contentRect])), contentRect[$width], contentRect[$height]);
        let screenPos = RectangleOfnum().fromPoints(containerPos[$topLeft]['+'](containerOffset), containerPos[$bottomRight]['+'](containerOffset));
        if (dart.test(this[_viewportRect].containsRectangle(screenPos))) {
          bestPosition = position;
          break;
        }
        let overlapRect = this[_viewportRect].intersection(screenPos);
        if (overlapRect == null) continue;
        let overlap = dart.notNull(overlapRect[$width]) * dart.notNull(overlapRect[$height]);
        if (overlap > dart.notNull(bestOverlap)) {
          bestOverlap = overlap;
          bestPosition = position;
        }
      }
      return laminate__enums__alignment.RelativePosition._check(bestPosition);
    }
    [_schedulePositionUpdate](contentClientRect, sourceClientRect) {
      return async.async(dart.dynamic, (function* _schedulePositionUpdate() {
        let position = null;
        let containerRect = (yield this[_overlayService].measureContainer());
        let isRtl = this.state.source.isRtl === true;
        this[_overlayRef].state.width = null;
        if (dart.test(this.state.matchMinSourceWidth)) {
          this[_overlayRef].state.minWidth = sourceClientRect[$width];
        }
        if (dart.test(this.state.matchMinSourceWidth)) {
          contentClientRect = material_popup__material_popup._resizeRectangle(contentClientRect, {width: math.max(core.num, sourceClientRect[$width], contentClientRect[$width])});
        }
        if (dart.test(this.state.enforceSpaceConstraints)) {
          position = this[_getBestPosition](contentClientRect, sourceClientRect, containerRect);
        }
        if (position == null) {
          position = new laminate__enums__alignment.RelativePosition.new({originX: this.state.source.alignOriginX, originY: this.state.source.alignOriginY});
          if (isRtl) {
            position = position.flipRelativePosition();
          }
        }
        let offsetX = isRtl ? dart.notNull(containerRect[$left]) - dart.notNull(this.state.offsetX) : dart.notNull(this.state.offsetX) - dart.notNull(containerRect[$left]);
        let offsetY = dart.notNull(this.state.offsetY) - dart.notNull(containerRect[$top]);
        this[_overlayRef].state.left = dart.notNull(position.originX.calcLeft(sourceClientRect, contentClientRect)) + offsetX;
        this[_overlayRef].state.top = dart.notNull(position.originY.calcTop(sourceClientRect, contentClientRect)) + offsetY;
        this[_overlayRef].state.visibility = laminate__enums__visibility.Visibility.Visible;
        let _ = this[_overlayRef].overlayElement.style;
        _[$visibility] = "visible";
        _[$display] = "";
        this[_alignmentPosition] = position;
        this[_updatePopupMinMaxSize]();
      }).bind(this));
    }
  };
  (material_popup__material_popup.MaterialPopupComponent.new = function(hierarchy, parentPopup, role, ngZone, overlayService, domService, zIndexer, defaultPreferredPositions, useRepositionLoop, viewportBoundaries, popupSizeProvider, changeDetector, viewContainer, elementRef) {
    this[_onOpened] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onContentVisible] = StreamControllerOfbool().broadcast({sync: true});
    this[_onAutoDismissed] = StreamControllerOfEvent().broadcast({sync: true});
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_visibleDisposer] = new utils__disposer__disposer.Disposer.multi();
    this[_alignmentPosition] = null;
    this[_overlayRef] = null;
    this[_uniqueId] = material_popup__material_popup.MaterialPopupComponent._idGenerator.nextId();
    this[_resolvedPopupRef] = null;
    this[_viewInitialized] = false;
    this[_animationTimer] = null;
    this[_viewportRect] = new (MutableRectangleOfnum()).new(0, 0, 0, 0);
    this[_isOpening] = false;
    this[_initialSourceDimensions] = null;
    this[_repositionOffsetX] = 0;
    this[_repositionOffsetY] = 0;
    this[_repositionLoopId] = null;
    this[_autoDismissBlockers] = JSArrayOfElement().of([]);
    this[showPopup] = false;
    this[z] = 2;
    this[_zIndex] = null;
    this[_slide] = null;
    this[minHeight] = null;
    this[minWidth] = null;
    this[maxHeight] = null;
    this[maxWidth] = null;
    this[_matchMinSourceWidth] = false;
    this[inkBackground] = false;
    this[hasBox] = true;
    this[state] = src__laminate__popup__popup_state.PopupState.new();
    this[templateRef] = null;
    this[_isVisible] = false;
    this[_hierarchy] = hierarchy;
    this[_ngZone] = ngZone;
    this[_overlayService] = overlayService;
    this[_domService] = domService;
    this[_zIndexer] = zIndexer;
    this[_defaultPreferredPositions] = defaultPreferredPositions;
    this[_useRepositionLoop] = useRepositionLoop;
    this[_viewportBoundaries] = viewportBoundaries;
    this[_popupSizeProvider] = popupSizeProvider;
    this[_changeDetector] = changeDetector;
    this[_viewContainer] = viewContainer;
    this[elementRef$] = elementRef;
    this[role$] = role != null ? role : "dialog";
    material_popup__material_popup.MaterialPopupComponent.__proto__.new.call(this);
    if (parentPopup != null) {
      this[_disposer].addStreamSubscription(dart.void, parentPopup.onClose.listen(dart.fn(_ => this.close(), voidTovoid())));
    }
    this[_resolvedPopupRef] = new material_popup__material_popup.MaterialPopupRef.new(this);
  }).prototype = material_popup__material_popup.MaterialPopupComponent.prototype;
  dart.addTypeTests(material_popup__material_popup.MaterialPopupComponent);
  const elementRef$ = Symbol("MaterialPopupComponent.elementRef");
  const role$ = Symbol("MaterialPopupComponent.role");
  const showPopup = Symbol("MaterialPopupComponent.showPopup");
  const z = Symbol("MaterialPopupComponent.z");
  const minHeight = Symbol("MaterialPopupComponent.minHeight");
  const minWidth = Symbol("MaterialPopupComponent.minWidth");
  const maxHeight = Symbol("MaterialPopupComponent.maxHeight");
  const maxWidth = Symbol("MaterialPopupComponent.maxWidth");
  const inkBackground = Symbol("MaterialPopupComponent.inkBackground");
  const hasBox = Symbol("MaterialPopupComponent.hasBox");
  const state = Symbol("MaterialPopupComponent.state");
  const templateRef = Symbol("MaterialPopupComponent.templateRef");
  material_popup__material_popup.MaterialPopupComponent[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface, content__deferred_content_aware.DeferredContentAware, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy, mixins__material_dropdown_base.DropdownHandle];
  dart.setMethodSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getMethods(material_popup__material_popup.MaterialPopupComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_updateOverlayCssClass]: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_initView]: dart.fnType(dart.void, []),
    toggle: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    [_open]: dart.fnType(async.Future, []),
    [_onPopupOpened]: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, []),
    [_onPopupClosed]: dart.fnType(dart.void, []),
    [_startRepositionLoop]: dart.fnType(dart.void, []),
    [_stopRepositionLoop]: dart.fnType(dart.void, []),
    [_reposition]: dart.fnType(dart.void, [dart.dynamic]),
    [_updateViewportSize]: dart.fnType(dart.void, []),
    [_updatePopupMinMaxSize]: dart.fnType(dart.void, []),
    [_getBestPosition]: dart.fnType(laminate__enums__alignment.RelativePosition, [math.Rectangle$(core.num), math.Rectangle$(core.num), math.Rectangle$(core.num)]),
    [_schedulePositionUpdate]: dart.fnType(async.Future, [math.Rectangle$(core.num), math.Rectangle$(core.num)])
  }));
  dart.setGetterSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getGetters(material_popup__material_popup.MaterialPopupComponent.__proto__),
    onOpened: async.Stream$(dart.void),
    onAutoDismissed: async.Stream$(html.Event),
    autoDismiss: core.bool,
    transformOrigin: core.String,
    zIndex: core.int,
    slide: core.String,
    matchMinSourceWidth: core.bool,
    contentVisible: async.Stream$(core.bool),
    hierarchy: src__laminate__popup__popup_hierarchy.PopupHierarchy,
    paneId: core.String,
    uniqueId: core.String,
    isVisible: core.bool,
    container: html.Element,
    autoDismissBlockers: core.List$(html.Element),
    [_sourceDimensions]: math.Rectangle$(core.num),
    [_preferredPositions]: core.Iterable
  }));
  dart.setSetterSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getSetters(material_popup__material_popup.MaterialPopupComponent.__proto__),
    slide: core.String,
    popupSizeProvider: src__laminate__popup__popup_size_provider.PopupSizeProvider,
    autoDismissBlockers: core.List$(html.Element),
    visible: core.bool
  }));
  dart.setLibraryUri(material_popup__material_popup.MaterialPopupComponent, "package:angular_components/material_popup/material_popup.dart");
  dart.setFieldSignature(material_popup__material_popup.MaterialPopupComponent, () => ({
    __proto__: dart.getFields(material_popup__material_popup.MaterialPopupComponent.__proto__),
    [_onOpened]: dart.finalFieldType(StreamControllerOfvoid()),
    [_onContentVisible]: dart.finalFieldType(StreamControllerOfbool()),
    [_onAutoDismissed]: dart.finalFieldType(StreamControllerOfEvent()),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_viewContainer]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_visibleDisposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_overlayService]: dart.finalFieldType(src__laminate__overlay__overlay_service.OverlayService),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_hierarchy]: dart.fieldType(src__laminate__popup__popup_hierarchy.PopupHierarchy),
    [_defaultPreferredPositions]: dart.finalFieldType(ListOfRelativePosition()),
    [_alignmentPosition]: dart.fieldType(laminate__enums__alignment.RelativePosition),
    [_overlayRef]: dart.fieldType(src__laminate__overlay__overlay_ref.OverlayRef),
    elementRef: dart.finalFieldType(src__core__linker__element_ref.ElementRef),
    role: dart.finalFieldType(core.String),
    [_uniqueId]: dart.finalFieldType(core.String),
    [_resolvedPopupRef]: dart.fieldType(src__laminate__popup__popup_ref.PopupRef),
    [_viewInitialized]: dart.fieldType(core.bool),
    [_animationTimer]: dart.fieldType(async.Timer),
    [_viewportRect]: dart.finalFieldType(MutableRectangleOfnum()),
    [_viewportBoundaries]: dart.finalFieldType(model__math__box.Box),
    [_isOpening]: dart.fieldType(core.bool),
    [_useRepositionLoop]: dart.finalFieldType(core.bool),
    [_initialSourceDimensions]: dart.fieldType(RectangleOfnum()),
    [_repositionOffsetX]: dart.fieldType(core.int),
    [_repositionOffsetY]: dart.fieldType(core.int),
    [_repositionLoopId]: dart.fieldType(core.int),
    [_autoDismissBlockers]: dart.fieldType(ListOfElement()),
    showPopup: dart.fieldType(core.bool),
    z: dart.fieldType(core.int),
    [_zIndex]: dart.fieldType(core.int),
    [_zIndexer]: dart.finalFieldType(laminate__overlay__zindexer.ZIndexer),
    [_slide]: dart.fieldType(core.String),
    [_popupSizeProvider]: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    minHeight: dart.fieldType(core.num),
    minWidth: dart.fieldType(core.num),
    maxHeight: dart.fieldType(core.num),
    maxWidth: dart.fieldType(core.num),
    [_matchMinSourceWidth]: dart.fieldType(core.bool),
    inkBackground: dart.fieldType(core.bool),
    hasBox: dart.fieldType(core.bool),
    state: dart.finalFieldType(src__laminate__popup__popup_state.PopupState),
    templateRef: dart.fieldType(src__core__linker__template_ref.TemplateRef),
    [_isVisible]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_popup__material_popup.MaterialPopupComponent, {
    /*material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY*/get SLIDE_DELAY() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*material_popup__material_popup.MaterialPopupComponent._idGenerator*/get _idGenerator() {
      return new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID();
    },
    /*material_popup__material_popup.MaterialPopupComponent._resizeThrottleDuration*/get _resizeThrottleDuration() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    }
  });
  material_popup__material_popup.getHierarchy = function(c) {
    return c.hierarchy;
  };
  material_popup__material_popup.getResolvedPopupRef = function(c) {
    return c[_resolvedPopupRef];
  };
  const _popupComponent = dart.privateName(material_popup__material_popup, "_popupComponent");
  material_popup__material_popup.MaterialPopupRef = class MaterialPopupRef extends core.Object {
    get isVisible() {
      return this[_popupComponent].isVisible;
    }
    get onVisibleChanged() {
      return this[_popupComponent].onVisible;
    }
  };
  (material_popup__material_popup.MaterialPopupRef.new = function(popupComponent) {
    this[_popupComponent] = popupComponent;
  }).prototype = material_popup__material_popup.MaterialPopupRef.prototype;
  dart.addTypeTests(material_popup__material_popup.MaterialPopupRef);
  material_popup__material_popup.MaterialPopupRef[dart.implements] = () => [src__laminate__popup__popup_ref.PopupRef];
  dart.setGetterSignature(material_popup__material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getGetters(material_popup__material_popup.MaterialPopupRef.__proto__),
    isVisible: core.bool,
    onVisibleChanged: async.Stream$(core.bool)
  }));
  dart.setLibraryUri(material_popup__material_popup.MaterialPopupRef, "package:angular_components/material_popup/material_popup.dart");
  dart.setFieldSignature(material_popup__material_popup.MaterialPopupRef, () => ({
    __proto__: dart.getFields(material_popup__material_popup.MaterialPopupRef.__proto__),
    [_popupComponent]: dart.finalFieldType(material_popup__material_popup.MaterialPopupComponent)
  }));
  material_popup__material_popup._DeferredToggleable = class _DeferredToggleable extends model__ui__toggle.Toggleable {
    get isOn() {
      return this[_popupComponent].isVisible;
    }
    set isOn(state) {
      this[_popupComponent].visible = state;
    }
  };
  (material_popup__material_popup._DeferredToggleable.new = function(popupComponent) {
    this[_popupComponent] = popupComponent;
    material_popup__material_popup._DeferredToggleable.__proto__.new.call(this);
  }).prototype = material_popup__material_popup._DeferredToggleable.prototype;
  dart.addTypeTests(material_popup__material_popup._DeferredToggleable);
  dart.setLibraryUri(material_popup__material_popup._DeferredToggleable, "package:angular_components/material_popup/material_popup.dart");
  dart.setFieldSignature(material_popup__material_popup._DeferredToggleable, () => ({
    __proto__: dart.getFields(material_popup__material_popup._DeferredToggleable.__proto__),
    [_popupComponent]: dart.finalFieldType(material_popup__material_popup.MaterialPopupComponent)
  }));
  material_popup__material_popup._mergeStreams = function(T, streams) {
    let streamSubscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
    let cachedResults = core.List$(T).new(streams[$length]);
    let streamController = null;
    streamController = async.StreamController$(core.List$(T)).broadcast({sync: true, onListen: dart.fn(() => {
        let i = 0;
        streams[$forEach](dart.fn(stream => {
          let n = i++;
          streamSubscriptions[$_set](n, stream.listen(dart.fn(result => {
            cachedResults[$_set](n, result);
            streamController.add(cachedResults);
          }, dart.fnType(core.Null, [T]))));
        }, dart.fnType(core.Null, [async.Stream$(T)])));
      }, VoidToNull()), onCancel: dart.fn(() => {
        for (let sub of streamSubscriptions) {
          sub.cancel();
        }
      }, VoidToNull())});
    return streamController.stream;
  };
  material_popup__material_popup._flatten = function(nested) {
    return new _js_helper.SyncIterable.new(function* _flatten() {
      for (let item of nested) {
        if (core.Iterable.is(item)) {
          yield* material_popup__material_popup._flatten(item);
        } else {
          yield item;
        }
      }
    });
  };
  material_popup__material_popup._resizeRectangle = function(rect, opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    return new (RectangleOfnum()).new(rect[$left], rect[$top], width != null ? width : rect[$width], height != null ? height : rect[$height]);
  };
  material_popup__material_popup._shiftRectangle = function(rect, opts) {
    let top = opts && 'top' in opts ? opts.top : 0;
    let left = opts && 'left' in opts ? opts.left : 0;
    return new (RectangleOfnum()).new(dart.notNull(rect[$left]) + dart.notNull(left), dart.notNull(rect[$top]) + dart.notNull(top), rect[$width], rect[$height]);
  };
  material_popup__material_popup._boundRectangle = function(rect, boundaries) {
    return new (RectangleOfnum()).new(dart.notNull(rect[$left]) + dart.notNull(boundaries.left), dart.notNull(rect[$top]) + dart.notNull(boundaries.top), dart.notNull(rect[$width]) - dart.notNull(boundaries.left) - dart.notNull(boundaries.right), dart.notNull(rect[$height]) - dart.notNull(boundaries.top) - dart.notNull(boundaries.bottom));
  };
  material_popup__material_popup._shiftRectangleToFitWithin = function(rect, container) {
    let x = 0;
    let y = 0;
    if (dart.notNull(rect[$left]) < dart.notNull(container[$left])) {
      x = dart.notNull(container[$left]) - dart.notNull(rect[$left]);
    } else if (dart.notNull(rect[$right]) > dart.notNull(container[$right])) {
      x = math.max(core.num, dart.notNull(container[$right]) - dart.notNull(rect[$right]), dart.notNull(container[$left]) - dart.notNull(rect[$left]));
    }
    if (dart.notNull(rect[$top]) < dart.notNull(container[$top])) {
      y = dart.notNull(container[$top]) - dart.notNull(rect[$top]);
    } else if (dart.notNull(rect[$bottom]) > dart.notNull(container[$bottom])) {
      y = math.max(core.num, dart.notNull(container[$bottom]) - dart.notNull(rect[$bottom]), dart.notNull(container[$top]) - dart.notNull(rect[$top]));
    }
    return new (RectangleOfnum()).new(x[$round](), y[$round](), 0, 0);
  };
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.ddc", {
    "package:angular_components/material_popup/material_popup.dart": material_popup__material_popup
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.dart"],"names":[],"mappings":"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","file":"material_popup.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup: material_popup__material_popup
  };
});

//# sourceMappingURL=material_popup.ddc.js.map
