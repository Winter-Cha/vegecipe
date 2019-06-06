// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'date_selector_component.dart';
export 'date_selector_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/showtimes/date_selector_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'date_selector_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/pipes/date_pipe.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'dart:core';
import 'package:angular/src/runtime/proxies.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;

final List<dynamic> styles$DateSelectorComponent = [import0.styles];

class ViewDateSelectorComponent0 extends AppView<import2.DateSelectorComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  import5.DatePipe _pipe_date_0;
  static import6.ComponentStyles _componentStyles;
  ViewDateSelectorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import9.document.createElement('date-selector');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:web/lib/src/showtimes/date_selector_component.dart' : null);
  }

  @override
  ComponentRef<import2.DateSelectorComponent> build() {
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import12.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_DateSelectorComponent1);
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    _pipe_date_0 = import5.DatePipe();
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.dates;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
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
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$DateSelectorComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DateSelectorComponent> _DateSelectorComponentNgFactory = const ComponentFactory('date-selector', viewFactory_DateSelectorComponentHost0);
ComponentFactory<import2.DateSelectorComponent> get DateSelectorComponentNgFactory {
  return _DateSelectorComponentNgFactory;
}

class _ViewDateSelectorComponent1 extends AppView<import2.DateSelectorComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  final import15.TextBinding _textBinding_4 = import15.TextBinding();
  bool _expr_0;
  String Function(dynamic, String) _pipe_date_0_0;
  String Function(dynamic, String) _pipe_date_0_1;
  import9.DivElement _el_0;
  _ViewDateSelectorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateSelectorComponent> build() {
    final doc = import9.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'date-item');
    addShimC(_el_0);
    final _el_1 = import12.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_1, 'dayname');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _el_3 = import12.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_3, 'day');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _pipe_date_0_0 = import17.pureProxy2(import10.unsafeCast<ViewDateSelectorComponent0>(parentView)._pipe_date_0.transform);
    _pipe_date_0_1 = import17.pureProxy2(import10.unsafeCast<ViewDateSelectorComponent0>(parentView)._pipe_date_0.transform);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_date = import10.unsafeCast<DateTime>(locals['\$implicit']);
    final currVal_0 = (local_date == _ctx.selectedDate);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBinding(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_2.updateText(import18.interpolate0(_pipe_date_0_0(local_date, 'E')));
    _textBinding_4.updateText(import18.interpolate0(_pipe_date_0_1(local_date, 'd')));
  }

  void _handle_click_0_0($event) {
    final local_date = import10.unsafeCast<DateTime>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.newDateSelected(local_date);
  }
}

AppView<void> viewFactory_DateSelectorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateSelectorComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DateSelectorComponentHost = const [];

class _ViewDateSelectorComponentHost0 extends AppView<import2.DateSelectorComponent> {
  ViewDateSelectorComponent0 _compView_0;
  import2.DateSelectorComponent _DateSelectorComponent_0_5;
  _ViewDateSelectorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DateSelectorComponent> build() {
    _compView_0 = ViewDateSelectorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DateSelectorComponent_0_5 = import2.DateSelectorComponent();
    _compView_0.create(_DateSelectorComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DateSelectorComponent_0_5);
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

AppView<import2.DateSelectorComponent> viewFactory_DateSelectorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateSelectorComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateSelectorComponent, DateSelectorComponentNgFactory);
  _ref0.initReflector();
}
