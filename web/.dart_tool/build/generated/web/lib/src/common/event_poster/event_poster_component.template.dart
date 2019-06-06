// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'event_poster_component.dart';
export 'event_poster_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref1;
import 'package:web/src/common/event_poster/lazy_image_component.template.dart' as _ref2;
import 'package:web/src/common/event_poster/event_poster_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'event_poster_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'lazy_image_component.template.dart' as import14;
import 'lazy_image_component.dart' as import15;
import 'package:angular/src/runtime/text_binding.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import '../content_rating/content_rating_component.template.dart' as import18;
import '../content_rating/content_rating_component.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:core/src/i18n/messages.dart' as import21;

final List<dynamic> styles$EventPosterComponent = [import0.styles];

class ViewEventPosterComponent0 extends AppView<import2.EventPosterComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  import5.Element _el_1;
  static import6.ComponentStyles _componentStyles;
  ViewEventPosterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import5.document.createElement('event-poster');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/common/event_poster/event_poster_component.dart' : null);
  }

  @override
  ComponentRef<import2.EventPosterComponent> build() {
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import5.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'fallback-icon');
    addShimC(_el_0);
    _el_1 = import11.appendElement(doc, _el_0, 'img');
    import11.setAttribute(_el_1, 'src', 'images/fallback-icon.svg');
    addShimE(_el_1);
    final _anchor_2 = import11.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_EventPosterComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import11.appendAnchor(parentRenderNode);
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_EventPosterComponent2);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import11.appendAnchor(parentRenderNode);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_EventPosterComponent4);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_2_9.ngIf = _ctx.event.hasMediumPortraitImage;
    _NgIf_3_9.ngIf = _ctx.hasDetails;
    _NgIf_4_9.ngIf = _ctx.isComingSoon;
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = ('Fallback image for ' + _ctx.event.title);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_1, 'alt', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$EventPosterComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.EventPosterComponent> _EventPosterComponentNgFactory = const ComponentFactory('event-poster', viewFactory_EventPosterComponentHost0);
ComponentFactory<import2.EventPosterComponent> get EventPosterComponentNgFactory {
  return _EventPosterComponentNgFactory;
}

class _ViewEventPosterComponent1 extends AppView<import2.EventPosterComponent> {
  import14.ViewLazyImageComponent0 _compView_0;
  import15.LazyImageComponent _LazyImageComponent_0_5;
  String _expr_0;
  String _expr_1;
  _ViewEventPosterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventPosterComponent> build() {
    _compView_0 = import14.ViewLazyImageComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _LazyImageComponent_0_5 = import15.LazyImageComponent(_el_0);
    _compView_0.create0(_LazyImageComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.event.images.portraitMedium;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _LazyImageComponent_0_5.src = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('Poster for ' + _ctx.event.title);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _LazyImageComponent_0_5.alt = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _LazyImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_EventPosterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventPosterComponent1(parentView, parentIndex);
}

class _ViewEventPosterComponent2 extends AppView<import2.EventPosterComponent> {
  final import16.TextBinding _textBinding_4 = import16.TextBinding();
  final import16.TextBinding _textBinding_6 = import16.TextBinding();
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewEventPosterComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventPosterComponent> build() {
    final doc = import5.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'event-information');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_EventPosterComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _el_2 = import11.appendElement(doc, _el_0, 'p');
    addShimE(_el_2);
    final _el_3 = import11.appendElement(doc, _el_2, 'strong');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    final _el_5 = import11.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_5, 'genres');
    addShimE(_el_5);
    _el_5.append(_textBinding_6.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.event.contentDescriptors.isNotEmpty();
    _appEl_1.detectChangesInNestedViews();
    _textBinding_4.updateText(import17.interpolateString0(_ctx.event.title));
    _textBinding_6.updateText(import17.interpolateString0(_ctx.event.genres));
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_EventPosterComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventPosterComponent2(parentView, parentIndex);
}

class _ViewEventPosterComponent3 extends AppView<import2.EventPosterComponent> {
  import18.ViewContentRatingComponent0 _compView_0;
  import19.ContentRatingComponent _ContentRatingComponent_0_5;
  var _expr_0;
  _ViewEventPosterComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventPosterComponent> build() {
    _compView_0 = import18.ViewContentRatingComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'size', 'medium');
    addShimC(_el_0);
    _ContentRatingComponent_0_5 = import19.ContentRatingComponent();
    _compView_0.create0(_ContentRatingComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.event;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _ContentRatingComponent_0_5.event = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_EventPosterComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventPosterComponent3(parentView, parentIndex);
}

class _ViewEventPosterComponent4 extends AppView<import2.EventPosterComponent> {
  final import16.TextBinding _textBinding_2 = import16.TextBinding();
  final import16.TextBinding _textBinding_4 = import16.TextBinding();
  _ViewEventPosterComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventPosterComponent> build() {
    final doc = import5.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'release-date-information');
    addShimC(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_1, 'label');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _el_3 = import11.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_3, 'date');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import17.interpolateString0(_ctx.messages.releaseDate));
    _textBinding_4.updateText(import17.interpolateString0(_ctx.releaseDate));
  }
}

AppView<void> viewFactory_EventPosterComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventPosterComponent4(parentView, parentIndex);
}

final List<dynamic> styles$EventPosterComponentHost = const [];

class _ViewEventPosterComponentHost0 extends AppView<import2.EventPosterComponent> {
  ViewEventPosterComponent0 _compView_0;
  import2.EventPosterComponent _EventPosterComponent_0_5;
  _ViewEventPosterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.EventPosterComponent> build() {
    _compView_0 = ViewEventPosterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _EventPosterComponent_0_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import2.EventPosterComponent, () {
            return import2.EventPosterComponent(this.injectorGet(import21.Messages, viewData.parentIndex));
          })
        : import2.EventPosterComponent(this.injectorGet(import21.Messages, viewData.parentIndex)));
    _compView_0.create(_EventPosterComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _EventPosterComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.EventPosterComponent> viewFactory_EventPosterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventPosterComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(EventPosterComponent, EventPosterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
