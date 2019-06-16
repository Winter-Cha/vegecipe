// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'firebase_auth_ui_component.dart';
export 'firebase_auth_ui_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'auth_ui_js.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'firebase_auth_ui_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import6;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;

final List<dynamic> styles$FirebaseAuthUIComponent = const [];

class ViewFirebaseAuthUIComponent0 extends AppView<import1.FirebaseAuthUIComponent> {
  var _expr_0;
  import2.DivElement _el_1;
  static import3.ComponentStyles _componentStyles;
  ViewFirebaseAuthUIComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import2.document.createElement('firebase-auth-ui');
  }
  static String get _debugComponentUrl {
    return (import6.isDevMode ? 'asset:firebase_dart_ui/lib/src/firebase_auth_ui_component.dart' : null);
  }

  @override
  ComponentRef<import1.FirebaseAuthUIComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.appendText(parentRenderNode, '\n');
    final doc = import2.document;
    _el_1 = import8.appendDiv(doc, parentRenderNode);
    import8.setAttribute(_el_1, 'id', 'firebaseui-auth-container');
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.displayStyle();
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _el_1.style.setProperty('display', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.unscoped(styles$FirebaseAuthUIComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.FirebaseAuthUIComponent> _FirebaseAuthUIComponentNgFactory = const ComponentFactory('firebase-auth-ui', viewFactory_FirebaseAuthUIComponentHost0);
ComponentFactory<import1.FirebaseAuthUIComponent> get FirebaseAuthUIComponentNgFactory {
  return _FirebaseAuthUIComponentNgFactory;
}

final List<dynamic> styles$FirebaseAuthUIComponentHost = const [];

class _ViewFirebaseAuthUIComponentHost0 extends AppView<import1.FirebaseAuthUIComponent> {
  ViewFirebaseAuthUIComponent0 _compView_0;
  import1.FirebaseAuthUIComponent _FirebaseAuthUIComponent_0_5;
  _ViewFirebaseAuthUIComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.FirebaseAuthUIComponent> build() {
    _compView_0 = ViewFirebaseAuthUIComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FirebaseAuthUIComponent_0_5 = import1.FirebaseAuthUIComponent();
    _compView_0.create(_FirebaseAuthUIComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _FirebaseAuthUIComponent_0_5);
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

AppView<import1.FirebaseAuthUIComponent> viewFactory_FirebaseAuthUIComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFirebaseAuthUIComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FirebaseAuthUIComponent, FirebaseAuthUIComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
