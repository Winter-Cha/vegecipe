// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'signin_bar_component.dart';
export 'signin_bar_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref3;
import 'package:angular_components/material_button/material_button.template.dart' as _ref4;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as _ref5;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref6;
import 'package:web/src/common/signin_page/signin_page_component.template.dart' as _ref7;
import 'package:web/src/app_bar/signin_bar/signin_bar_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'signin_bar_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import5;
import 'package:angular_components/laminate/components/modal/modal.dart' as import6;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import7;
import 'package:angular_components/material_dialog/material_dialog.dart' as import8;
import '../../common/signin_page/signin_page_component.template.dart' as import9;
import '../../common/signin_page/signin_page_component.dart' as import10;
import 'package:angular_components/material_button/material_button.template.dart' as import11;
import 'package:angular_components/focus/focus.dart' as import12;
import 'package:angular_components/material_button/material_button.dart' as import13;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import14;
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import17;
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import22;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import23;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import24;
import 'package:core/src/i18n/messages.dart' as import25;
import 'package:redux/src/store.dart' as import26;
import 'package:angular_components/src/laminate/popup/popup_ref.dart' as import27;
import 'package:angular_components/theme/dark_theme.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'package:angular_components/button_decorator/button_decorator.dart' as import30;
import 'package:angular_components/interfaces/has_disabled.dart' as import31;
import 'package:angular_components/content/deferred_content_aware.dart' as import32;
import 'package:angular/src/core/linker/app_view_utils.dart' as import33;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import34;
import 'package:angular_components/model/math/box.dart' as import35;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import36;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import37;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import38;
import 'package:angular_components/utils/browser/window/module.dart' as import39;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import40;
import 'package:angular_components/utils/disposer/disposer.dart' as import41;
import 'package:angular/src/core/zone/ng_zone.dart' as import42;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import43;
import 'package:angular/src/core/linker/component_loader.dart' as import44;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import45;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import46;
import 'package:angular_components/laminate/overlay/module.dart' as import47;

final List<dynamic> styles$SignInBarComponent = [import0.styles];

class ViewSignInBarComponent0 extends AppView<import2.SignInBarComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import5.ViewModalComponent0 _compView_8;
  import6.ModalComponent _ModalComponent_8_5;
  import7.ViewMaterialDialogComponent0 _compView_9;
  import8.MaterialDialogComponent _MaterialDialogComponent_9_5;
  import9.ViewSignInPageComponent0 _compView_12;
  import10.SignInPageComponent _SignInPageComponent_12_5;
  import11.ViewMaterialButtonComponent0 _compView_14;
  import12.AutoFocusDirective _AutoFocusDirective_14_5;
  dynamic _AcxDarkTheme_14_6;
  import13.MaterialButtonComponent _MaterialButtonComponent_14_7;
  bool _expr_3;
  static import14.ComponentStyles _componentStyles;
  ViewSignInBarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import17.document.createElement('signin-bar');
  }
  static String get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:web/lib/src/app_bar/signin_bar/signin_bar_component.dart' : null);
  }

  @override
  ComponentRef<import2.SignInBarComponent> build() {
    final _rootEl = rootEl;
    final import17.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import17.document;
    final _el_0 = import20.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'signin-button-group');
    addShimC(_el_0);
    final _anchor_1 = import20.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SignInBarComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import20.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_SignInBarComponent2);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import20.appendText(_el_0, ' ');
    final _text_4 = import20.appendText(_el_0, ' ');
    final _text_5 = import20.appendText(_el_0, ' ');
    final _text_6 = import20.appendText(_el_0, ' ');
    final _anchor_7 = import20.appendAnchor(_el_0);
    _appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_SignInBarComponent3);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    _compView_8 = import5.ViewModalComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    parentRenderNode.append(_el_8);
    addShimC(_el_8);
    _ModalComponent_8_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import6.ModalComponent, () {
            return import6.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_8, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGetOptional(import6.Modal, viewData.parentIndex), parentView.injectorGetOptional(import6.GlobalModalStack, viewData.parentIndex));
          })
        : import6.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_8, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGetOptional(import6.Modal, viewData.parentIndex), parentView.injectorGetOptional(import6.GlobalModalStack, viewData.parentIndex)));
    _compView_9 = import7.ViewMaterialDialogComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    this.updateChildClassNonHtml(_el_9, 'basic-dialog');
    addShimC(_el_9);
    _MaterialDialogComponent_9_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_9, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_9, _ModalComponent_8_5);
          })
        : import8.MaterialDialogComponent(_el_9, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_9, _ModalComponent_8_5));
    final _el_10 = doc.createElement('h1');
    import20.setAttribute(_el_10, 'header', '');
    addShimE(_el_10);
    final _text_11 = import20.appendText(_el_10, 'Sign in');
    _compView_12 = import9.ViewSignInPageComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    addShimC(_el_12);
    _SignInPageComponent_12_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import10.SignInPageComponent, () {
            return import10.SignInPageComponent(parentView.injectorGet(import25.Messages, viewData.parentIndex), parentView.injectorGet(import26.Store, viewData.parentIndex));
          })
        : import10.SignInPageComponent(parentView.injectorGet(import25.Messages, viewData.parentIndex), parentView.injectorGet(import26.Store, viewData.parentIndex)));
    _compView_12.create0(_SignInPageComponent_12_5);
    final _el_13 = doc.createElement('div');
    import20.setAttribute(_el_13, 'footer', '');
    addShimC(_el_13);
    _compView_14 = import11.ViewMaterialButtonComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_13.append(_el_14);
    import20.setAttribute(_el_14, 'autoFocus', '');
    import20.setAttribute(_el_14, 'clear-size', '');
    addShimC(_el_14);
    _AutoFocusDirective_14_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import12.AutoFocusDirective, () {
            return import12.AutoFocusDirective(_el_14, parentView.injectorGet(import24.DomService, viewData.parentIndex), null, _ModalComponent_8_5, parentView.injectorGetOptional(import27.PopupRef, viewData.parentIndex));
          })
        : import12.AutoFocusDirective(_el_14, parentView.injectorGet(import24.DomService, viewData.parentIndex), null, _ModalComponent_8_5, parentView.injectorGetOptional(import27.PopupRef, viewData.parentIndex)));
    _AcxDarkTheme_14_6 = (import18.isDevMode
        ? import22.debugInjectorWrap(import28.AcxDarkTheme, () {
            return import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_14_7 = import13.MaterialButtonComponent(_el_14, _AcxDarkTheme_14_6, _compView_14, null);
    final _text_15 = import20.createText('Close');
    _compView_14.create(_MaterialButtonComponent_14_7, [
      [_text_15]
    ]);
    _compView_9.create(_MaterialDialogComponent_9_5, [
      [_el_10],
      [_el_12],
      [_el_13]
    ]);
    _compView_8.create(_ModalComponent_8_5, [
      [_el_9]
    ]);
    final subscription_0 = _ModalComponent_8_5.onVisibleChanged.listen(eventHandler1(_handle_visibleChange_8_0));
    final subscription_1 = _MaterialButtonComponent_14_7.trigger.listen(eventHandler1(_handle_trigger_14_0));
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((8 <= nodeIndex) && (nodeIndex <= 15))) {
      if ((14 <= nodeIndex)) {
        if (identical(token, import28.AcxDarkTheme)) {
          return _AcxDarkTheme_14_6;
        }
        if (((identical(token, import13.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import31.HasDisabled))) {
          return _MaterialButtonComponent_14_7;
        }
      }
      if (((identical(token, import6.ModalComponent) || identical(token, import32.DeferredContentAware)) || identical(token, import6.Modal))) {
        return _ModalComponent_8_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = (!_ctx.isAuthenticated());
    _NgIf_2_9.ngIf = _ctx.isAuthenticated();
    _NgIf_7_9.ngIf = _ctx.isAuthenticated();
    changed = false;
    final currVal_3 = _ctx.showSignInDialog;
    if (import33.checkBinding(_expr_3, currVal_3)) {
      _ModalComponent_8_5.visible = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_14_5.autoFocus = true);
    }
    if (((!import33.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_14_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_14.markAsCheckOnce();
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    if ((!import33.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_9_5.ngAfterContentChecked();
    }
    _compView_8.detectHostChanges(firstCheck);
    _compView_9.detectHostChanges(firstCheck);
    _compView_14.detectHostChanges(firstCheck);
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    _compView_12.detectChanges();
    _compView_14.detectChanges();
    if ((!import33.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ModalComponent_8_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_8.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_12.destroyInternalState();
    _compView_14.destroyInternalState();
    _AutoFocusDirective_14_5.ngOnDestroy();
    _MaterialDialogComponent_9_5.ngOnDestroy();
    _ModalComponent_8_5.ngOnDestroy();
  }

  void _handle_visibleChange_8_0($event) {
    final _ctx = ctx;
    _ctx.showSignInDialog = $event;
  }

  void _handle_trigger_14_0($event) {
    final _ctx = ctx;
    _ctx.showSignInDialog = false;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import14.ComponentStyles.scoped(styles$SignInBarComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SignInBarComponent> _SignInBarComponentNgFactory = const ComponentFactory('signin-bar', viewFactory_SignInBarComponentHost0);
ComponentFactory<import2.SignInBarComponent> get SignInBarComponentNgFactory {
  return _SignInBarComponentNgFactory;
}

class _ViewSignInBarComponent1 extends AppView<import2.SignInBarComponent> {
  import11.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import13.MaterialButtonComponent _MaterialButtonComponent_0_6;
  bool _expr_0;
  _ViewSignInBarComponent1(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SignInBarComponent> build() {
    final _ctx = ctx;
    _compView_0 = import11.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'green');
    import20.setAttribute(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import28.AcxDarkTheme, () {
            return import28.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import28.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import13.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final _text_1 = import20.createText('Sign in');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    _el_0.addEventListener('click', eventHandler0(_ctx.getSigninPage));
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import28.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import13.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import31.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    final currVal_0 = _ctx.showSignInDialog;
    if (import33.checkBinding(_expr_0, currVal_0)) {
      _MaterialButtonComponent_0_6.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final _ctx = ctx;
    _ctx.showSignInDialog = true;
  }
}

AppView<void> viewFactory_SignInBarComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInBarComponent1(parentView, parentIndex);
}

class _ViewSignInBarComponent2 extends AppView<import2.SignInBarComponent> {
  var _expr_0;
  import17.Element _el_0;
  _ViewSignInBarComponent2(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SignInBarComponent> build() {
    final doc = import17.document;
    _el_0 = doc.createElement('img');
    this.updateChildClass(_el_0, 'signin-user-photo');
    addShimE(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.userPhoto;
    if (import33.checkBinding(_expr_0, currVal_0)) {
      import20.setProperty(_el_0, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_SignInBarComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInBarComponent2(parentView, parentIndex);
}

class _ViewSignInBarComponent3 extends AppView<import2.SignInBarComponent> {
  _ViewSignInBarComponent3(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SignInBarComponent> build() {
    final _ctx = ctx;
    final doc = import17.document;
    final _el_0 = doc.createElement('img');
    this.updateChildClass(_el_0, 'signin-out');
    import20.setAttribute(_el_0, 'src', '/images/icon/outline-exit_to_app-24px.svg');
    addShimE(_el_0);
    _el_0.addEventListener('click', eventHandler0(_ctx.logout));
    init1(_el_0);
  }
}

AppView<void> viewFactory_SignInBarComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInBarComponent3(parentView, parentIndex);
}

final List<dynamic> styles$SignInBarComponentHost = const [];

class _ViewSignInBarComponentHost0 extends AppView<import2.SignInBarComponent> {
  ViewSignInBarComponent0 _compView_0;
  import2.SignInBarComponent _SignInBarComponent_0_5;
  dynamic __Document_0_6;
  dynamic __HtmlDocument_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  dynamic __AcxImperativeViewUtils_0_10;
  import34.DomRuler __DomRuler_0_11;
  dynamic __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import35.Box __overlayViewportBoundaries_0_18;
  import36.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import37.ZIndexer __ZIndexer_0_20;
  import38.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  _ViewSignInBarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import39.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _HtmlDocument_0_7 {
    if ((__HtmlDocument_0_7 == null)) {
      (__HtmlDocument_0_7 = import39.getDocument());
    }
    return __HtmlDocument_0_7;
  }

  dynamic get _Window_0_8 {
    if ((__Window_0_8 == null)) {
      (__Window_0_8 = import39.getWindow());
    }
    return __Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((__DomService_0_9 == null)) {
      (__DomService_0_9 = (import18.isDevMode
          ? import22.debugInjectorWrap(import24.DomService, () {
              return import40.createDomService(this.injectorGetOptional(import24.DomService, viewData.parentIndex), this.injectorGetOptional(import41.Disposer, viewData.parentIndex), this.injectorGet(import42.NgZone, viewData.parentIndex), _Window_0_8);
            })
          : import40.createDomService(this.injectorGetOptional(import24.DomService, viewData.parentIndex), this.injectorGetOptional(import41.Disposer, viewData.parentIndex), this.injectorGet(import42.NgZone, viewData.parentIndex), _Window_0_8)));
    }
    return __DomService_0_9;
  }

  dynamic get _AcxImperativeViewUtils_0_10 {
    if ((__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = (import18.isDevMode
          ? import22.debugInjectorWrap(import43.AcxImperativeViewUtils, () {
              return import43.AcxImperativeViewUtils(this.injectorGet(import44.ComponentLoader, viewData.parentIndex), _DomService_0_9);
            })
          : import43.AcxImperativeViewUtils(this.injectorGet(import44.ComponentLoader, viewData.parentIndex), _DomService_0_9)));
    }
    return __AcxImperativeViewUtils_0_10;
  }

  import34.DomRuler get _DomRuler_0_11 {
    if ((__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = import34.DomRuler(_Document_0_6, _DomService_0_9));
    }
    return __DomRuler_0_11;
  }

  dynamic get _ManagedZone_0_12 {
    if ((__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = (import18.isDevMode
          ? import22.debugInjectorWrap(import45.ManagedZone, () {
              return import46.Angular2ManagedZone(this.injectorGet(import42.NgZone, viewData.parentIndex));
            })
          : import46.Angular2ManagedZone(this.injectorGet(import42.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = (import18.isDevMode
          ? import22.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import47.getDefaultContainerName(this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex));
            })
          : import47.getDefaultContainerName(this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex))));
    }
    return __overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = (import18.isDevMode
          ? import22.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import47.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex));
            })
          : import47.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex))));
    }
    return __overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = (import18.isDevMode
          ? import22.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainer'), () {
              return import47.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex));
            })
          : import47.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import29.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex))));
    }
    return __overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return __overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return __overlayRepositionLoop_0_17;
  }

  import35.Box get _overlayViewportBoundaries_0_18 {
    if ((__overlayViewportBoundaries_0_18 == null)) {
      (__overlayViewportBoundaries_0_18 = const import35.Box());
    }
    return __overlayViewportBoundaries_0_18;
  }

  import36.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import36.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_19;
  }

  import37.ZIndexer get _ZIndexer_0_20 {
    if ((__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import37.ZIndexer());
    }
    return __ZIndexer_0_20;
  }

  import38.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import38.OverlayDomRenderService(_OverlayStyleConfig_0_19, _overlayContainer_0_15, _overlayContainerName_0_13, _DomRuler_0_11, _DomService_0_9, _AcxImperativeViewUtils_0_10, _overlaySyncDom_0_16, _overlayRepositionLoop_0_17, _ZIndexer_0_20));
    }
    return __OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import18.isDevMode
          ? import22.debugInjectorWrap(import23.OverlayService, () {
              return import23.OverlayService(this.injectorGet(import42.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import23.OverlayService, viewData.parentIndex));
            })
          : import23.OverlayService(this.injectorGet(import42.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import23.OverlayService, viewData.parentIndex))));
    }
    return __OverlayService_0_22;
  }

  @override
  ComponentRef<import2.SignInBarComponent> build() {
    _compView_0 = ViewSignInBarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SignInBarComponent_0_5 = (import18.isDevMode
        ? import22.debugInjectorWrap(import2.SignInBarComponent, () {
            return import2.SignInBarComponent(this.injectorGet(import25.Messages, viewData.parentIndex), this.injectorGet(import26.Store, viewData.parentIndex));
          })
        : import2.SignInBarComponent(this.injectorGet(import25.Messages, viewData.parentIndex), this.injectorGet(import26.Store, viewData.parentIndex)));
    _compView_0.create(_SignInBarComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SignInBarComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import17.Document)) {
        return _Document_0_6;
      }
      if (identical(token, import17.HtmlDocument)) {
        return _HtmlDocument_0_7;
      }
      if (identical(token, import17.Window)) {
        return _Window_0_8;
      }
      if (identical(token, import24.DomService)) {
        return _DomService_0_9;
      }
      if (identical(token, import43.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_0_10;
      }
      if (identical(token, import34.DomRuler)) {
        return _DomRuler_0_11;
      }
      if (identical(token, import45.ManagedZone)) {
        return _ManagedZone_0_12;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_0_13;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_0_14;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_0_15;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_0_16;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_0_17;
      }
      if (identical(token, const import29.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_0_18;
      }
      if (identical(token, import36.OverlayStyleConfig)) {
        return _OverlayStyleConfig_0_19;
      }
      if (identical(token, import37.ZIndexer)) {
        return _ZIndexer_0_20;
      }
      if (identical(token, import38.OverlayDomRenderService)) {
        return _OverlayDomRenderService_0_21;
      }
      if (identical(token, import23.OverlayService)) {
        return _OverlayService_0_22;
      }
    }
    return notFoundResult;
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

AppView<import2.SignInBarComponent> viewFactory_SignInBarComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignInBarComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SignInBarComponent, SignInBarComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
