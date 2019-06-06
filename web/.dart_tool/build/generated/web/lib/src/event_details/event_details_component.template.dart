// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'event_details_component.dart';
export 'event_details_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref2;
import 'package:web/src/common/event_poster/event_poster_component.template.dart' as _ref3;
import 'package:web/src/common/showtime_item/showtime_item_component.template.dart' as _ref4;
import 'package:web/src/event_details/actor_scroller/actor_scroller_component.template.dart' as _ref5;
import 'package:web/src/event_details/landscape_image/event_landscape_image_component.template.dart' as _ref6;
import 'package:web/src/routes.template.dart' as _ref7;
import 'package:web/src/event_details/event_details_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'event_details_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/text_binding.dart' as import13;
import 'landscape_image/event_landscape_image_component.template.dart' as import14;
import 'landscape_image/event_landscape_image_component.dart' as import15;
import '../common/event_poster/event_poster_component.template.dart' as import16;
import '../common/event_poster/event_poster_component.dart' as import17;
import '../common/content_rating/content_rating_component.template.dart' as import18;
import '../common/content_rating/content_rating_component.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:core/src/i18n/messages.dart' as import21;
import 'package:angular/src/core/linker/app_view_utils.dart' as import22;
import 'package:angular/src/runtime/interpolate.dart' as import23;
import '../common/showtime_item/showtime_item_component.template.dart' as import24;
import '../common/showtime_item/showtime_item_component.dart' as import25;
import 'actor_scroller/actor_scroller_component.template.dart' as import26;
import 'actor_scroller/actor_scroller_component.dart' as import27;
import 'package:angular/src/common/directives/ng_for.dart' as import28;
import 'package:core/src/models/event.dart' as import29;
import 'package:redux/src/store.dart' as import30;
import 'package:angular_router/src/router/router.dart' as import31;

final List<dynamic> styles$EventDetailsComponent = [import0.styles];

class ViewEventDetailsComponent0 extends AppView<import2.EventDetailsComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewEventDetailsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('event-details');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/event_details/event_details_component.dart' : null);
  }

  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_EventDetailsComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.event != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$EventDetailsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.EventDetailsComponent> _EventDetailsComponentNgFactory = const ComponentFactory('event-details', viewFactory_EventDetailsComponentHost0);
ComponentFactory<import2.EventDetailsComponent> get EventDetailsComponentNgFactory {
  return _EventDetailsComponentNgFactory;
}

class _ViewEventDetailsComponent1 extends AppView<import2.EventDetailsComponent> {
  final import13.TextBinding _textBinding_7 = import13.TextBinding();
  final import13.TextBinding _textBinding_10 = import13.TextBinding();
  import14.ViewEventLandscapeImageComponent0 _compView_1;
  import15.EventLandscapeImageComponent _EventLandscapeImageComponent_1_5;
  import16.ViewEventPosterComponent0 _compView_4;
  import17.EventPosterComponent _EventPosterComponent_4_5;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  import18.ViewContentRatingComponent0 _compView_13;
  import19.ContentRatingComponent _ContentRatingComponent_13_5;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  ViewContainer _appEl_17;
  NgIf _NgIf_17_9;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_6;
  import8.DivElement _el_0;
  _ViewEventDetailsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    _compView_1 = import14.ViewEventLandscapeImageComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _EventLandscapeImageComponent_1_5 = import15.EventLandscapeImageComponent();
    _compView_1.create0(_EventLandscapeImageComponent_1_5);
    final _el_2 = import11.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_2, 'back');
    import11.setAttribute(_el_2, 'src', 'images/back.svg');
    addShimE(_el_2);
    final _el_3 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'event-header');
    addShimC(_el_3);
    _compView_4 = import16.ViewEventPosterComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    addShimC(_el_4);
    _EventPosterComponent_4_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import17.EventPosterComponent, () {
            return import17.EventPosterComponent(parentView.injectorGet(import21.Messages, viewData.parentIndex));
          })
        : import17.EventPosterComponent(parentView.injectorGet(import21.Messages, viewData.parentIndex)));
    _compView_4.create0(_EventPosterComponent_4_5);
    final _el_5 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_5, 'event-information');
    addShimC(_el_5);
    final _el_6 = import11.appendElement(doc, _el_5, 'h2');
    this.updateChildClass(_el_6, 'title');
    addShimE(_el_6);
    _el_6.append(_textBinding_7.element);
    final _el_8 = import11.appendDiv(doc, _el_5);
    this.updateChildClass(_el_8, 'body');
    addShimC(_el_8);
    final _el_9 = import11.appendElement(doc, _el_8, 'p');
    this.updateChildClass(_el_9, 'length');
    addShimE(_el_9);
    _el_9.append(_textBinding_10.element);
    final _text_11 = import11.appendText(_el_9, ' min');
    final _anchor_12 = import11.appendAnchor(_el_8);
    _appEl_12 = ViewContainer(12, 8, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_EventDetailsComponent2);
    _NgIf_12_9 = NgIf(_appEl_12, _TemplateRef_12_8);
    _compView_13 = import18.ViewContentRatingComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_5.append(_el_13);
    import11.setAttribute(_el_13, 'size', 'medium');
    addShimC(_el_13);
    _ContentRatingComponent_13_5 = import19.ContentRatingComponent();
    _compView_13.create0(_ContentRatingComponent_13_5);
    final _anchor_14 = import11.appendAnchor(_el_0);
    _appEl_14 = ViewContainer(14, 0, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_EventDetailsComponent3);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    final _anchor_15 = import11.appendAnchor(_el_0);
    _appEl_15 = ViewContainer(15, 0, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_EventDetailsComponent4);
    _NgIf_15_9 = NgIf(_appEl_15, _TemplateRef_15_8);
    final _anchor_16 = import11.appendAnchor(_el_0);
    _appEl_16 = ViewContainer(16, 0, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_EventDetailsComponent5);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    final _anchor_17 = import11.appendAnchor(_el_0);
    _appEl_17 = ViewContainer(17, 0, this, _anchor_17);
    TemplateRef _TemplateRef_17_8 = TemplateRef(_appEl_17, viewFactory_EventDetailsComponent6);
    _NgIf_17_9 = NgIf(_appEl_17, _TemplateRef_17_8);
    _el_2.addEventListener('click', eventHandler0(_ctx.goBack));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.event;
    if (import22.checkBinding(_expr_1, currVal_1)) {
      _EventLandscapeImageComponent_1_5.event = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import22.AppViewUtils.throwOnChanges) && firstCheck)) {
      _EventLandscapeImageComponent_1_5.ngOnInit();
    }
    if (firstCheck) {
      _EventPosterComponent_4_5.hasDetails = false;
      _EventPosterComponent_4_5.isTouchable = false;
    }
    final currVal_2 = _ctx.event;
    if (import22.checkBinding(_expr_2, currVal_2)) {
      _EventPosterComponent_4_5.event = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgIf_12_9.ngIf = (_ctx.event.director != null);
    final currVal_6 = _ctx.event;
    if (import22.checkBinding(_expr_6, currVal_6)) {
      _ContentRatingComponent_13_5.event = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgIf_14_9.ngIf = (_ctx.show != null);
    _NgIf_15_9.ngIf = _ctx.event.hasSynopsis;
    _NgIf_16_9.ngIf = _ctx.event.actors.isNotEmpty();
    _NgIf_17_9.ngIf = _ctx.event.galleryImages.isNotEmpty();
    _appEl_12.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_17.detectChangesInNestedViews();
    final currVal_0 = _ctx.contentVisible;
    if (import22.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_7.updateText(import23.interpolateString0(_ctx.event.title));
    _textBinding_10.updateText(import23.interpolateString0(_ctx.event.lengthInMinutes));
    _compView_1.detectChanges();
    _compView_4.detectChanges();
    _compView_13.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_12.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _appEl_16.destroyNestedViews();
    _appEl_17.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_4.destroyInternalState();
    _compView_13.destroyInternalState();
    _EventLandscapeImageComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_EventDetailsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent1(parentView, parentIndex);
}

class _ViewEventDetailsComponent2 extends AppView<import2.EventDetailsComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  final import13.TextBinding _textBinding_4 = import13.TextBinding();
  _ViewEventDetailsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'director');
    addShimE(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'strong');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _text_3 = import11.appendText(_el_0, ': ');
    _el_0.append(_textBinding_4.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import23.interpolateString0(_ctx.messages.director));
    _textBinding_4.updateText(import23.interpolateString0(_ctx.event.director));
  }
}

AppView<void> viewFactory_EventDetailsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent2(parentView, parentIndex);
}

class _ViewEventDetailsComponent3 extends AppView<import2.EventDetailsComponent> {
  import24.ViewShowtimeItemComponent0 _compView_1;
  import25.ShowtimeItemComponent _ShowtimeItemComponent_1_5;
  var _expr_0;
  _ViewEventDetailsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'centered-content');
    addShimC(_el_0);
    _compView_1 = import24.ViewShowtimeItemComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    import11.setAttribute(_el_1, 'full-opacity', '');
    import11.setAttribute(_el_1, 'style', 'margin-top: 45px');
    addShimC(_el_1);
    _ShowtimeItemComponent_1_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import25.ShowtimeItemComponent, () {
            return import25.ShowtimeItemComponent(parentView.parentView.injectorGet(import21.Messages, parentView.viewData.parentIndex));
          })
        : import25.ShowtimeItemComponent(parentView.parentView.injectorGet(import21.Messages, parentView.viewData.parentIndex)));
    _compView_1.create0(_ShowtimeItemComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.show;
    if (import22.checkBinding(_expr_0, currVal_0)) {
      _ShowtimeItemComponent_1_5.show = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_EventDetailsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent3(parentView, parentIndex);
}

class _ViewEventDetailsComponent4 extends AppView<import2.EventDetailsComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  final import13.TextBinding _textBinding_5 = import13.TextBinding();
  _ViewEventDetailsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'section');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'centered-content');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _el_4 = import11.appendElement(doc, _el_1, 'p');
    this.updateChildClass(_el_4, 'synopsis');
    addShimE(_el_4);
    _el_4.append(_textBinding_5.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import23.interpolateString0(_ctx.messages.storyline));
    _textBinding_5.updateText(import23.interpolateString0(_ctx.event.synopsis));
  }
}

AppView<void> viewFactory_EventDetailsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent4(parentView, parentIndex);
}

class _ViewEventDetailsComponent5 extends AppView<import2.EventDetailsComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  import26.ViewActorScrollerComponent0 _compView_4;
  import27.ActorScrollerComponent _ActorScrollerComponent_4_5;
  var _expr_0;
  _ViewEventDetailsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'section white top-shadow actor-section');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'centered-content');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _compView_4 = import26.ViewActorScrollerComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    addShimC(_el_4);
    _ActorScrollerComponent_4_5 = import27.ActorScrollerComponent();
    _compView_4.create0(_ActorScrollerComponent_4_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.event.actors.list;
    if (import22.checkBinding(_expr_0, currVal_0)) {
      _ActorScrollerComponent_4_5.actors = currVal_0;
      _expr_0 = currVal_0;
    }
    _textBinding_3.updateText(import23.interpolateString0(_ctx.messages.cast));
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_4.destroyInternalState();
  }
}

AppView<void> viewFactory_EventDetailsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent5(parentView, parentIndex);
}

class _ViewEventDetailsComponent6 extends AppView<import2.EventDetailsComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  ViewContainer _appEl_5;
  import28.NgFor _NgFor_5_9;
  var _expr_0;
  _ViewEventDetailsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'section footer');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'centered-content');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _el_4 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_4, 'gallery');
    addShimC(_el_4);
    final _anchor_5 = import11.appendAnchor(_el_4);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_EventDetailsComponent7);
    _NgFor_5_9 = import28.NgFor(_appEl_5, _TemplateRef_5_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.event.galleryImages.list;
    if (import22.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import22.AppViewUtils.throwOnChanges)) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _textBinding_3.updateText(import23.interpolateString0(_ctx.messages.gallery));
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
  }
}

AppView<void> viewFactory_EventDetailsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent6(parentView, parentIndex);
}

class _ViewEventDetailsComponent7 extends AppView<import2.EventDetailsComponent> {
  var _expr_0;
  var _expr_1;
  import8.Element _el_0;
  _ViewEventDetailsComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('img');
    addShimE(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_galleryImage = import9.unsafeCast<import29.GalleryImage>(locals['\$implicit']);
    final currVal_0 = local_galleryImage.location;
    if (import22.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'src', import22.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('A still frame from the movie ' + _ctx.event.title);
    if (import22.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_0, 'alt', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<void> viewFactory_EventDetailsComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponent7(parentView, parentIndex);
}

final List<dynamic> styles$EventDetailsComponentHost = const [];

class _ViewEventDetailsComponentHost0 extends AppView<import2.EventDetailsComponent> {
  ViewEventDetailsComponent0 _compView_0;
  import2.EventDetailsComponent _EventDetailsComponent_0_5;
  _ViewEventDetailsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.EventDetailsComponent> build() {
    _compView_0 = ViewEventDetailsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _EventDetailsComponent_0_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import2.EventDetailsComponent, () {
            return import2.EventDetailsComponent(this.injectorGet(import30.Store, viewData.parentIndex), this.injectorGet(import31.Router, viewData.parentIndex), this.injectorGet(import21.Messages, viewData.parentIndex));
          })
        : import2.EventDetailsComponent(this.injectorGet(import30.Store, viewData.parentIndex), this.injectorGet(import31.Router, viewData.parentIndex), this.injectorGet(import21.Messages, viewData.parentIndex)));
    _compView_0.create(_EventDetailsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _EventDetailsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import22.AppViewUtils.throwOnChanges) && firstCheck)) {
      _EventDetailsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _EventDetailsComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.EventDetailsComponent> viewFactory_EventDetailsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventDetailsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(EventDetailsComponent, EventDetailsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
