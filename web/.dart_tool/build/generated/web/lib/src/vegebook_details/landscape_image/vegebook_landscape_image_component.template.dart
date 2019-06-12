// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegebook_landscape_image_component.dart';
export 'vegebook_landscape_image_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegebook_landscape_image_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;

final List<dynamic> styles$VegeBookLandscapeImageComponent = [import0.styles];

class ViewVegeBookLandscapeImageComponent0 extends AppView<import2.VegeBookLandscapeImageComponent> {
  var _expr_0;
  import3.Element _el_3;
  static import4.ComponentStyles _componentStyles;
  ViewVegeBookLandscapeImageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('vegebook-landscape-image');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:web/lib/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeBookLandscapeImageComponent> build() {
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
    final currVal_0 = _ctx.vegeBook.images.landscapeBig;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.setProperty(_el_3, 'src', import10.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$VegeBookLandscapeImageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeBookLandscapeImageComponent> _VegeBookLandscapeImageComponentNgFactory = const ComponentFactory('vegebook-landscape-image', viewFactory_VegeBookLandscapeImageComponentHost0);
ComponentFactory<import2.VegeBookLandscapeImageComponent> get VegeBookLandscapeImageComponentNgFactory {
  return _VegeBookLandscapeImageComponentNgFactory;
}

final List<dynamic> styles$VegeBookLandscapeImageComponentHost = const [];

class _ViewVegeBookLandscapeImageComponentHost0 extends AppView<import2.VegeBookLandscapeImageComponent> {
  ViewVegeBookLandscapeImageComponent0 _compView_0;
  import2.VegeBookLandscapeImageComponent _VegeBookLandscapeImageComponent_0_5;
  _ViewVegeBookLandscapeImageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeBookLandscapeImageComponent> build() {
    _compView_0 = ViewVegeBookLandscapeImageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeBookLandscapeImageComponent_0_5 = import2.VegeBookLandscapeImageComponent();
    _compView_0.create(_VegeBookLandscapeImageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _VegeBookLandscapeImageComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import10.AppViewUtils.throwOnChanges) && firstCheck)) {
      _VegeBookLandscapeImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _VegeBookLandscapeImageComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.VegeBookLandscapeImageComponent> viewFactory_VegeBookLandscapeImageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookLandscapeImageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VegeBookLandscapeImageComponent, VegeBookLandscapeImageComponentNgFactory);
  _ref0.initReflector();
}
