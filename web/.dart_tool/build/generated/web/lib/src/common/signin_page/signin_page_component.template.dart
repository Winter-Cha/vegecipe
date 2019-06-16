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
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/text_binding.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:core/src/i18n/messages.dart' as import19;
import 'package:redux/src/store.dart' as import20;

final List<dynamic> styles$SignInPageComponent = [import0.styles];

class ViewSignInPageComponent0 extends AppView<import2.SignInPageComponent> {
  import3.ViewFirebaseAuthUIComponent0 _compView_0;
  import4.FirebaseAuthUIComponent _FirebaseAuthUIComponent_0_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  static import7.ComponentStyles _componentStyles;
  ViewSignInPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import10.document.createElement('signin-page');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:web/lib/src/common/signin_page/signin_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.SignInPageComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewFirebaseAuthUIComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FirebaseAuthUIComponent_0_5 = import4.FirebaseAuthUIComponent();
    _compView_0.create0(_FirebaseAuthUIComponent_0_5);
    final doc = import10.document;
    final _el_1 = import13.appendElement(doc, parentRenderNode, 'br');
    addShimE(_el_1);
    final _anchor_2 = import13.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_SignInPageComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
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
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _FirebaseAuthUIComponent_0_5.uiConfig = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgIf_2_9.ngIf = _ctx.isAuthenticated();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$SignInPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SignInPageComponent> _SignInPageComponentNgFactory = const ComponentFactory('signin-page', viewFactory_SignInPageComponentHost0);
ComponentFactory<import2.SignInPageComponent> get SignInPageComponentNgFactory {
  return _SignInPageComponentNgFactory;
}

class _ViewSignInPageComponent1 extends AppView<import2.SignInPageComponent> {
  final import16.TextBinding _textBinding_4 = import16.TextBinding();
  final import16.TextBinding _textBinding_6 = import16.TextBinding();
  final import16.TextBinding _textBinding_9 = import16.TextBinding();
  final import16.TextBinding _textBinding_12 = import16.TextBinding();
  _ViewSignInPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SignInPageComponent> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, 'Authenticated!');
    final _el_2 = import13.appendElement(doc, _el_0, 'p');
    addShimE(_el_2);
    final _text_3 = import13.appendText(_el_2, 'User email: ');
    _el_2.append(_textBinding_4.element);
    final _text_5 = import13.appendText(_el_2, ' Display Name: ');
    _el_2.append(_textBinding_6.element);
    final _el_7 = import13.appendElement(doc, _el_0, 'p');
    addShimE(_el_7);
    final _text_8 = import13.appendText(_el_7, 'User Json: ');
    _el_7.append(_textBinding_9.element);
    final _el_10 = import13.appendElement(doc, _el_0, 'p');
    addShimE(_el_10);
    final _text_11 = import13.appendText(_el_10, 'Provider Access Token (may not be present unless session is new) : ');
    _el_10.append(_textBinding_12.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_4.updateText(import17.interpolateString0(_ctx.userEmail));
    _textBinding_6.updateText(import17.interpolateString0(_ctx.displayName));
    _textBinding_9.updateText(import17.interpolate0(_ctx.userJson));
    _textBinding_12.updateText(import17.interpolateString0(_ctx.providerAccessToken));
  }
}

AppView<void> viewFactory_SignInPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInPageComponent1(parentView, parentIndex);
}

final List<dynamic> styles$SignInPageComponentHost = const [];

class _ViewSignInPageComponentHost0 extends AppView<import2.SignInPageComponent> {
  ViewSignInPageComponent0 _compView_0;
  import2.SignInPageComponent _SignInPageComponent_0_5;
  _ViewSignInPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SignInPageComponent> build() {
    _compView_0 = ViewSignInPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SignInPageComponent_0_5 = (import11.isDevMode
        ? import18.debugInjectorWrap(import2.SignInPageComponent, () {
            return import2.SignInPageComponent(this.injectorGet(import19.Messages, viewData.parentIndex), this.injectorGet(import20.Store, viewData.parentIndex));
          })
        : import2.SignInPageComponent(this.injectorGet(import19.Messages, viewData.parentIndex), this.injectorGet(import20.Store, viewData.parentIndex)));
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
