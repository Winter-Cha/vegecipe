// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'spinner_component.dart';
export 'spinner_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/loading_view/spinner_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'spinner_component.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$SpinnerComponent = [import0.styles];

class ViewSpinnerComponent0 extends AppView<import2.SpinnerComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewSpinnerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('spinner');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:web/lib/src/common/loading_view/spinner_component.dart' : null);
  }

  @override
  ComponentRef<import2.SpinnerComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    final _el_1 = import9.appendDiv(doc, _el_0);
    addShimC(_el_1);
    final _el_2 = import9.appendDiv(doc, _el_0);
    addShimC(_el_2);
    final _el_3 = import9.appendDiv(doc, _el_0);
    addShimC(_el_3);
    final _el_4 = import9.appendDiv(doc, _el_0);
    addShimC(_el_4);
    final _el_5 = import9.appendDiv(doc, _el_0);
    addShimC(_el_5);
    final _el_6 = import9.appendDiv(doc, _el_0);
    addShimC(_el_6);
    final _el_7 = import9.appendDiv(doc, _el_0);
    addShimC(_el_7);
    final _el_8 = import9.appendDiv(doc, _el_0);
    addShimC(_el_8);
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$SpinnerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SpinnerComponent> _SpinnerComponentNgFactory = const ComponentFactory('spinner', viewFactory_SpinnerComponentHost0);
ComponentFactory<import2.SpinnerComponent> get SpinnerComponentNgFactory {
  return _SpinnerComponentNgFactory;
}

final List<dynamic> styles$SpinnerComponentHost = const [];

class _ViewSpinnerComponentHost0 extends AppView<import2.SpinnerComponent> {
  ViewSpinnerComponent0 _compView_0;
  import2.SpinnerComponent _SpinnerComponent_0_5;
  _ViewSpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SpinnerComponent> build() {
    _compView_0 = ViewSpinnerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SpinnerComponent_0_5 = import2.SpinnerComponent();
    _compView_0.create(_SpinnerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SpinnerComponent_0_5);
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

AppView<import2.SpinnerComponent> viewFactory_SpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSpinnerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SpinnerComponent, SpinnerComponentNgFactory);
  _ref0.initReflector();
}
