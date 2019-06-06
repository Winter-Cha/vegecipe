// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'event_landscape_image_component.dart';
export 'event_landscape_image_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/event_details/landscape_image/event_landscape_image_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'event_landscape_image_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;

final List<dynamic> styles$EventLandscapeImageComponent = [import0.styles];

class ViewEventLandscapeImageComponent0 extends AppView<import2.EventLandscapeImageComponent> {
  var _expr_0;
  import3.Element _el_3;
  static import4.ComponentStyles _componentStyles;
  ViewEventLandscapeImageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('event-landscape-image');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:web/lib/src/event_details/landscape_image/event_landscape_image_component.dart' : null);
  }

  @override
  ComponentRef<import2.EventLandscapeImageComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import3.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    final _el_1 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'placeholder');
    addShimC(_el_1);
    final _el_2 = import9.appendElement(doc, _el_1, 'img');
    import9.setAttribute(_el_2, 'src', 'images/fallback-icon.svg');
    addShimE(_el_2);
    _el_3 = import9.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_3, 'actual');
    addShimE(_el_3);
    _ctx.imageElement = _el_3;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.event.images.landscapeHd;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.setProperty(_el_3, 'src', import10.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$EventLandscapeImageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.EventLandscapeImageComponent> _EventLandscapeImageComponentNgFactory = const ComponentFactory('event-landscape-image', viewFactory_EventLandscapeImageComponentHost0);
ComponentFactory<import2.EventLandscapeImageComponent> get EventLandscapeImageComponentNgFactory {
  return _EventLandscapeImageComponentNgFactory;
}

final List<dynamic> styles$EventLandscapeImageComponentHost = const [];

class _ViewEventLandscapeImageComponentHost0 extends AppView<import2.EventLandscapeImageComponent> {
  ViewEventLandscapeImageComponent0 _compView_0;
  import2.EventLandscapeImageComponent _EventLandscapeImageComponent_0_5;
  _ViewEventLandscapeImageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.EventLandscapeImageComponent> build() {
    _compView_0 = ViewEventLandscapeImageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _EventLandscapeImageComponent_0_5 = import2.EventLandscapeImageComponent();
    _compView_0.create(_EventLandscapeImageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _EventLandscapeImageComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import10.AppViewUtils.throwOnChanges) && firstCheck)) {
      _EventLandscapeImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _EventLandscapeImageComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.EventLandscapeImageComponent> viewFactory_EventLandscapeImageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewEventLandscapeImageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(EventLandscapeImageComponent, EventLandscapeImageComponentNgFactory);
  _ref0.initReflector();
}
