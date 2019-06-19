// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'signin_page_component.dart';
export 'signin_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:firebase_dart_ui/firebase_dart_ui.template.dart' as _ref1;
import 'package:web/src/common/signin_page/signin_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'signin_page_component.dart' as import2;
import 'package:firebase_dart_ui/src/firebase_auth_ui_component.template.dart' as import3;
import 'package:firebase_dart_ui/src/firebase_auth_ui_component.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/di/errors.dart' as import12;
import 'package:core/src/i18n/messages.dart' as import13;
import 'package:redux/src/store.dart' as import14;

final List<dynamic> styles$SignInPageComponent = [import0.styles];

class ViewSignInPageComponent0 extends AppView<import2.SignInPageComponent> {
  import3.ViewFirebaseAuthUIComponent0 _compView_0;
  import4.FirebaseAuthUIComponent _FirebaseAuthUIComponent_0_5;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewSignInPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('signin-page');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/common/signin_page/signin_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.SignInPageComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewFirebaseAuthUIComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FirebaseAuthUIComponent_0_5 = import4.FirebaseAuthUIComponent();
    _compView_0.create0(_FirebaseAuthUIComponent_0_5);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_FirebaseAuthUIComponent_0_5.disableAutoSignIn = true);
    }
    final currVal_0 = _ctx.getUIConfig();
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _FirebaseAuthUIComponent_0_5.uiConfig = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$SignInPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SignInPageComponent> _SignInPageComponentNgFactory = const ComponentFactory('signin-page', viewFactory_SignInPageComponentHost0);
ComponentFactory<import2.SignInPageComponent> get SignInPageComponentNgFactory {
  return _SignInPageComponentNgFactory;
}

final List<dynamic> styles$SignInPageComponentHost = const [];

class _ViewSignInPageComponentHost0 extends AppView<import2.SignInPageComponent> {
  ViewSignInPageComponent0 _compView_0;
  import2.SignInPageComponent _SignInPageComponent_0_5;
  _ViewSignInPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SignInPageComponent> build() {
    _compView_0 = ViewSignInPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SignInPageComponent_0_5 = (import9.isDevMode
        ? import12.debugInjectorWrap(import2.SignInPageComponent, () {
            return import2.SignInPageComponent(this.injectorGet(import13.Messages, viewData.parentIndex), this.injectorGet(import14.Store, viewData.parentIndex));
          })
        : import2.SignInPageComponent(this.injectorGet(import13.Messages, viewData.parentIndex), this.injectorGet(import14.Store, viewData.parentIndex)));
    _compView_0.create(_SignInPageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SignInPageComponent_0_5);
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

AppView<import2.SignInPageComponent> viewFactory_SignInPageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInPageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SignInPageComponent, SignInPageComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
