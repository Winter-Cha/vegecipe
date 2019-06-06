// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'showtime_item_component.dart';
export 'showtime_item_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref1;
import 'package:web/src/common/showtime_item/showtime_item_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'showtime_item_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../content_rating/content_rating_component.template.dart' as import4;
import '../content_rating/content_rating_component.dart' as import5;
import 'package:angular/src/common/pipes/date_pipe.dart' as import6;
import 'dart:core';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular/src/runtime/proxies.dart' as import15;
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:core/src/i18n/messages.dart' as import19;

final List<dynamic> styles$ShowtimeItemComponent = [import0.styles];

class ViewShowtimeItemComponent0 extends AppView<import2.ShowtimeItemComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  final import3.TextBinding _textBinding_5 = import3.TextBinding();
  final import3.TextBinding _textBinding_8 = import3.TextBinding();
  final import3.TextBinding _textBinding_11 = import3.TextBinding();
  final import3.TextBinding _textBinding_14 = import3.TextBinding();
  import4.ViewContentRatingComponent0 _compView_15;
  import5.ContentRatingComponent _ContentRatingComponent_15_5;
  var _expr_0;
  import6.DatePipe _pipe_date_0;
  String Function(dynamic, String) _pipe_date_0_0;
  String Function(dynamic, String) _pipe_date_0_1;
  static import8.ComponentStyles _componentStyles;
  ViewShowtimeItemComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import11.document.createElement('showtime-item');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:web/lib/src/common/showtime_item/showtime_item_component.dart' : null);
  }

  @override
  ComponentRef<import2.ShowtimeItemComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import11.document;
    final _el_0 = import14.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'left');
    addShimC(_el_0);
    final _el_1 = import14.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'show-time');
    addShimC(_el_1);
    final _el_2 = import14.appendElement(doc, _el_1, 'p');
    this.updateChildClass(_el_2, 'start');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _el_4 = import14.appendElement(doc, _el_1, 'p');
    this.updateChildClass(_el_4, 'end');
    addShimE(_el_4);
    _el_4.append(_textBinding_5.element);
    final _el_6 = import14.appendDiv(doc, _el_0);
    this.updateChildClass(_el_6, 'show-info');
    addShimC(_el_6);
    final _el_7 = import14.appendElement(doc, _el_6, 'p');
    this.updateChildClass(_el_7, 'title');
    addShimE(_el_7);
    _el_7.append(_textBinding_8.element);
    final _el_9 = import14.appendDiv(doc, _el_6);
    this.updateChildClass(_el_9, 'details');
    addShimC(_el_9);
    final _el_10 = import14.appendElement(doc, _el_9, 'p');
    this.updateChildClass(_el_10, 'theater-and-auditorium');
    addShimE(_el_10);
    _el_10.append(_textBinding_11.element);
    final _el_12 = import14.appendElement(doc, _el_9, 'p');
    this.updateChildClass(_el_12, 'presentation-info');
    addShimE(_el_12);
    final _el_13 = import14.appendSpan(doc, _el_12);
    this.updateChildClass(_el_13, 'presentation-method');
    addShimE(_el_13);
    _el_13.append(_textBinding_14.element);
    _compView_15 = import4.ViewContentRatingComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    addShimC(_el_15);
    _ContentRatingComponent_15_5 = import5.ContentRatingComponent();
    _compView_15.create0(_ContentRatingComponent_15_5);
    final _el_16 = import14.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_16, 'buy-tickets-button');
    addShimC(_el_16);
    final _el_17 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_16.append(_el_17);
    import14.setAttribute(_el_17, 'height', '24');
    import14.setAttribute(_el_17, 'viewBox', '0 0 24 24');
    import14.setAttribute(_el_17, 'width', '24');
    import14.setAttribute(_el_17, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_17);
    final _el_18 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_17.append(_el_18);
    import14.setAttribute(_el_18, 'd', 'M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z');
    import14.setAttribute(_el_18, 'fill', '#FFAD32');
    addShimE(_el_18);
    final _el_19 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_17.append(_el_19);
    import14.setAttribute(_el_19, 'd', 'M0 0h24v24H0z');
    import14.setAttribute(_el_19, 'fill', 'none');
    addShimE(_el_19);
    _el_16.addEventListener('click', eventHandler1(_ctx.openTickets));
    _pipe_date_0 = import6.DatePipe();
    _pipe_date_0_0 = import15.pureProxy2(_pipe_date_0.transform);
    _pipe_date_0_1 = import15.pureProxy2(_pipe_date_0.transform);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.show;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _ContentRatingComponent_15_5.show = currVal_0;
      _expr_0 = currVal_0;
    }
    _textBinding_3.updateText(import17.interpolate0(_pipe_date_0_0(_ctx.show.start, 'HH:mm')));
    _textBinding_5.updateText(import17.interpolate0(_pipe_date_0_1(_ctx.show.end, 'HH:mm')));
    _textBinding_8.updateText(import17.interpolateString0(_ctx.show.title));
    _textBinding_11.updateText(import17.interpolateString0(_ctx.show.theaterAndAuditorium));
    _textBinding_14.updateText(import17.interpolateString0(_ctx.show.presentationMethod));
    _compView_15.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_15.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$ShowtimeItemComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ShowtimeItemComponent> _ShowtimeItemComponentNgFactory = const ComponentFactory('showtime-item', viewFactory_ShowtimeItemComponentHost0);
ComponentFactory<import2.ShowtimeItemComponent> get ShowtimeItemComponentNgFactory {
  return _ShowtimeItemComponentNgFactory;
}

final List<dynamic> styles$ShowtimeItemComponentHost = const [];

class _ViewShowtimeItemComponentHost0 extends AppView<import2.ShowtimeItemComponent> {
  ViewShowtimeItemComponent0 _compView_0;
  import2.ShowtimeItemComponent _ShowtimeItemComponent_0_5;
  _ViewShowtimeItemComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ShowtimeItemComponent> build() {
    _compView_0 = ViewShowtimeItemComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ShowtimeItemComponent_0_5 = (import12.isDevMode
        ? import18.debugInjectorWrap(import2.ShowtimeItemComponent, () {
            return import2.ShowtimeItemComponent(this.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import2.ShowtimeItemComponent(this.injectorGet(import19.Messages, viewData.parentIndex)));
    _compView_0.create(_ShowtimeItemComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ShowtimeItemComponent_0_5);
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

AppView<import2.ShowtimeItemComponent> viewFactory_ShowtimeItemComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShowtimeItemComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ShowtimeItemComponent, ShowtimeItemComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
