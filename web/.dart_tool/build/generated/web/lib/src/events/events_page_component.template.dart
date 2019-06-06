// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'events_page_component.dart';
export 'events_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../restore_scroll_position.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:web/src/common/event_poster/event_poster_component.template.dart' as _ref3;
import 'package:web/src/common/loading_view/loading_view_component.template.dart' as _ref4;
import 'package:web/src/common/theater_selector/theater_selector_component.template.dart' as _ref5;
import 'package:web/src/routes.template.dart' as _ref6;
import 'package:web/src/events/events_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'events_page_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../common/theater_selector/theater_selector_component.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import '../common/theater_selector/theater_selector_component.dart' as import6;
import '../common/loading_view/loading_view_component.template.dart' as import7;
import '../common/loading_view/loading_view_component.dart' as import8;
import 'package:angular/src/common/directives/ng_for.dart' as import9;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import10;
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'package:redux/src/store.dart' as import18;
import 'package:core/src/i18n/messages.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import 'package:angular/src/runtime/interpolate.dart' as import22;
import '../common/event_poster/event_poster_component.template.dart' as import23;
import '../common/event_poster/event_poster_component.dart' as import24;
import 'package:core/src/models/event.dart' as import25;
import 'package:angular_router/src/router/router.dart' as import26;

final List<dynamic> styles$EventsPageComponent = [import0.styles];

class ViewEventsPageComponent0 extends AppView<import2.EventsPageComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  import4.ViewTheaterSelectorComponent0 _compView_4;
  ViewContainer _appEl_4;
  import6.TheaterSelectorComponent _TheaterSelectorComponent_4_8;
  import7.ViewLoadingViewComponent0 _compView_5;
  import8.LoadingViewComponent _LoadingViewComponent_5_5;
  ViewContainer _appEl_7;
  import9.NgFor _NgFor_7_9;
  bool _expr_0;
  String _expr_1;
  var _expr_2;
  var _expr_3;
  static import10.ComponentStyles _componentStyles;
  ViewEventsPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import13.document.createElement('events-page');
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:web/lib/src/events/events_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.EventsPageComponent> build() {
    final _rootEl = rootEl;
    final import13.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import13.document;
    final _el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content-wrapper');
    addShimC(_el_0);
    final _el_1 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'page-title');
    addShimC(_el_1);
    final _el_2 = import16.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _compView_4 = import4.ViewTheaterSelectorComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    addShimC(_el_4);
    _appEl_4 = ViewContainer(4, 1, this, _el_4);
    _TheaterSelectorComponent_4_8 = (import14.isDevMode
        ? import17.debugInjectorWrap(import6.TheaterSelectorComponent, () {
            return import6.TheaterSelectorComponent(parentView.injectorGet(import18.Store, viewData.parentIndex), _appEl_4);
          })
        : import6.TheaterSelectorComponent(parentView.injectorGet(import18.Store, viewData.parentIndex), _appEl_4));
    _compView_4.create0(_TheaterSelectorComponent_4_8);
    _compView_5 = import7.ViewLoadingViewComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    addShimC(_el_5);
    _LoadingViewComponent_5_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import8.LoadingViewComponent, () {
            return import8.LoadingViewComponent(parentView.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import8.LoadingViewComponent(parentView.injectorGet(import19.Messages, viewData.parentIndex)));
    final _el_6 = doc.createElement('div');
    this.updateChildClass(_el_6, 'grid-container');
    addShimC(_el_6);
    final _anchor_7 = import16.appendAnchor(_el_6);
    _appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_EventsPageComponent1);
    _NgFor_7_9 = import9.NgFor(_appEl_7, _TemplateRef_7_8);
    _compView_5.create(_LoadingViewComponent_5_5, [
      [_el_6]
    ]);
    final subscription_0 = _LoadingViewComponent_5_5.actionButtonClicked.listen(eventHandler1(_handle_actionButtonClicked_5_0));
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.viewModel.events.isEmpty();
    if (import21.checkBinding(_expr_0, currVal_0)) {
      _LoadingViewComponent_5_5.contentEmpty = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.messages.errorLoadingEvents;
    if (import21.checkBinding(_expr_1, currVal_1)) {
      _LoadingViewComponent_5_5.errorMessage = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.viewModel.status;
    if (import21.checkBinding(_expr_2, currVal_2)) {
      _LoadingViewComponent_5_5.status = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.viewModel.events.list;
    if (import21.checkBinding(_expr_3, currVal_3)) {
      _NgFor_7_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if ((!import21.AppViewUtils.throwOnChanges)) {
      _NgFor_7_9.ngDoCheck();
    }
    _appEl_4.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _textBinding_3.updateText(import22.interpolateString0(_ctx.eventTypeTitle));
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
    _LoadingViewComponent_5_5.ngOnDestroy();
  }

  void _handle_actionButtonClicked_5_0($event) {
    final _ctx = ctx;
    _ctx.viewModel.refreshEvents();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import10.ComponentStyles.scoped(styles$EventsPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.EventsPageComponent> _EventsPageComponentNgFactory = const ComponentFactory('events-page', viewFactory_EventsPageComponentHost0);
ComponentFactory<import2.EventsPageComponent> get EventsPageComponentNgFactory {
  return _EventsPageComponentNgFactory;
}

class _ViewEventsPageComponent1 extends AppView<import2.EventsPageComponent> {
  import23.ViewEventPosterComponent0 _compView_0;
  import24.EventPosterComponent _EventPosterComponent_0_5;
  var _expr_0;
  bool _expr_1;
  _ViewEventsPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.EventsPageComponent> build() {
    _compView_0 = import23.ViewEventPosterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _EventPosterComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import24.EventPosterComponent, () {
            return import24.EventPosterComponent(parentView.parentView.injectorGet(import19.Messages, parentView.viewData.parentIndex));
          })
        : import24.EventPosterComponent(parentView.parentView.injectorGet(import19.Messages, parentView.viewData.parentIndex)));
    _compView_0.create0(_EventPosterComponent_0_5);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_event = import14.unsafeCast<import25.Event>(locals['\$implicit']);
    final currVal_0 = local_event;
    if (import21.checkBinding(_expr_0, currVal_0)) {
      _EventPosterComponent_0_5.event = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isDisplayingComingSoonMovies;
    if (import21.checkBinding(_expr_1, currVal_1)) {
      _EventPosterComponent_0_5.isComingSoon = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_0($event) {
    final local_event = import14.unsafeCast<import25.Event>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.openEventDetails(local_event);
  }
}

AppView<void> viewFactory_EventsPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventsPageComponent1(parentView, parentIndex);
}

final List<dynamic> styles$EventsPageComponentHost = const [];

class _ViewEventsPageComponentHost0 extends AppView<import2.EventsPageComponent> {
  ViewEventsPageComponent0 _compView_0;
  import2.EventsPageComponent _EventsPageComponent_0_5;
  _ViewEventsPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.EventsPageComponent> build() {
    _compView_0 = ViewEventsPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _EventsPageComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import2.EventsPageComponent, () {
            return import2.EventsPageComponent(this.injectorGet(import18.Store, viewData.parentIndex), this.injectorGet(import26.Router, viewData.parentIndex), this.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import2.EventsPageComponent(this.injectorGet(import18.Store, viewData.parentIndex), this.injectorGet(import26.Router, viewData.parentIndex), this.injectorGet(import19.Messages, viewData.parentIndex)));
    _compView_0.create(_EventsPageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _EventsPageComponent_0_5);
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

AppView<import2.EventsPageComponent> viewFactory_EventsPageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventsPageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(EventsPageComponent, EventsPageComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
