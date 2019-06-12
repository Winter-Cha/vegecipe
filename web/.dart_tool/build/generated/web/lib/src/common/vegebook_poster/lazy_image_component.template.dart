// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'lazy_image_component.dart';
export 'lazy_image_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/vegebook_poster/lazy_image_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'lazy_image_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;

final List<dynamic> styles$LazyImageComponent = [import0.styles];

class ViewLazyImageComponent0 extends AppView<import2.LazyImageComponent> {
  var _expr_0;
  var _expr_1;
  import3.Element _el_0;
  static import4.ComponentStyles _componentStyles;
  ViewLazyImageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('lazy-img');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:web/lib/src/common/vegebook_poster/lazy_image_component.dart' : null);
  }

  @override
  ComponentRef<import2.LazyImageComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import3.document;
    _el_0 = import9.appendElement(doc, parentRenderNode, 'img');
    this.updateChildClass(_el_0, 'lazy');
    addShimE(_el_0);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.src;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.updateAttribute(_el_0, 'data-src', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.alt;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import9.setProperty(_el_0, 'alt', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$LazyImageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.LazyImageComponent> _LazyImageComponentNgFactory = const ComponentFactory('lazy-img', viewFactory_LazyImageComponentHost0);
ComponentFactory<import2.LazyImageComponent> get LazyImageComponentNgFactory {
  return _LazyImageComponentNgFactory;
}

final List<dynamic> styles$LazyImageComponentHost = const [];

class _ViewLazyImageComponentHost0 extends AppView<import2.LazyImageComponent> {
  ViewLazyImageComponent0 _compView_0;
  import2.LazyImageComponent _LazyImageComponent_0_5;
  _ViewLazyImageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.LazyImageComponent> build() {
    _compView_0 = ViewLazyImageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LazyImageComponent_0_5 = import2.LazyImageComponent(rootEl);
    _compView_0.create(_LazyImageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _LazyImageComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import10.AppViewUtils.throwOnChanges) && firstCheck)) {
      _LazyImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.LazyImageComponent> viewFactory_LazyImageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLazyImageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(LazyImageComponent, LazyImageComponentNgFactory);
  _ref0.initReflector();
}
