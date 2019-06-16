// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_bar_component.dart';
export 'app_bar_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/app_bar/nav_bar/nav_bar_component.template.dart' as _ref2;
import 'package:web/src/app_bar/scroll_utils.template.dart' as _ref3;
import 'package:web/src/app_bar/search_bar/search_bar_component.template.dart' as _ref4;
import 'package:web/src/app_bar/signin_bar/signin_bar_component.template.dart' as _ref5;
import 'package:web/src/routes.template.dart' as _ref6;
import 'package:web/src/app_bar/app_bar_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_bar_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import4;
import 'nav_bar/nav_bar_component.template.dart' as import5;
import 'nav_bar/nav_bar_component.dart' as import6;
import 'search_bar/search_bar_component.template.dart' as import7;
import 'search_bar/search_bar_component.dart' as import8;
import 'signin_bar/signin_bar_component.template.dart' as import9;
import 'signin_bar/signin_bar_component.dart' as import10;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import11;
import 'package:angular_components/model/math/box.dart' as import12;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import13;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import14;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import15;
import 'dart:html' as import16;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import17;
import 'package:angular/src/core/linker/view_type.dart' as import18;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import20;
import 'package:angular/src/runtime.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import23;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import24;
import 'package:angular_components/utils/disposer/disposer.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import27;
import 'package:angular/src/core/linker/component_loader.dart' as import28;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import29;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import30;
import 'package:angular/src/core/di/opaque_token.dart' as import31;
import 'package:angular_components/laminate/overlay/module.dart' as import32;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import33;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import35;
import 'package:angular_router/src/directives/router_link_directive.dart' as import36;
import 'package:angular_router/src/router/router.dart' as import37;
import 'package:angular_router/src/location/location.dart' as import38;
import 'package:core/src/i18n/messages.dart' as import39;
import 'package:redux/src/store.dart' as import40;
import '../routes.dart' as import41;
import 'package:angular/src/core/linker/app_view_utils.dart' as import42;
import 'package:angular/src/runtime/interpolate.dart' as import43;

final List<dynamic> styles$AppBarComponent = [import0.styles];

class ViewAppBarComponent0 extends AppView<import2.AppBarComponent> {
  final import3.TextBinding _textBinding_7 = import3.TextBinding();
  import4.RouterLinkNgCd _RouterLink_3_5;
  import5.ViewNavBarComponent0 _compView_9;
  import6.NavBarComponent _NavBarComponent_9_5;
  import7.ViewSearchBarComponent0 _compView_11;
  import8.SearchBarComponent _SearchBarComponent_11_5;
  import9.ViewSignInBarComponent0 _compView_12;
  import10.SignInBarComponent _SignInBarComponent_12_5;
  dynamic __Document_12_6;
  dynamic __HtmlDocument_12_7;
  dynamic __Window_12_8;
  dynamic __DomService_12_9;
  dynamic __AcxImperativeViewUtils_12_10;
  import11.DomRuler __DomRuler_12_11;
  dynamic __ManagedZone_12_12;
  dynamic __overlayContainerName_12_13;
  dynamic __overlayContainerParent_12_14;
  dynamic __overlayContainer_12_15;
  bool __overlaySyncDom_12_16;
  bool __overlayRepositionLoop_12_17;
  import12.Box __overlayViewportBoundaries_12_18;
  import13.OverlayStyleConfig __OverlayStyleConfig_12_19;
  import14.ZIndexer __ZIndexer_12_20;
  import15.OverlayDomRenderService __OverlayDomRenderService_12_21;
  dynamic __OverlayService_12_22;
  bool _expr_0;
  bool _expr_1;
  String _expr_2;
  bool _expr_3;
  import16.Element _el_0;
  import16.DivElement _el_3;
  static import17.ComponentStyles _componentStyles;
  ViewAppBarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import16.document.createElement('app-bar');
  }
  dynamic get _Document_12_6 {
    if ((__Document_12_6 == null)) {
      (__Document_12_6 = import20.getDocument());
    }
    return __Document_12_6;
  }

  dynamic get _HtmlDocument_12_7 {
    if ((__HtmlDocument_12_7 == null)) {
      (__HtmlDocument_12_7 = import20.getDocument());
    }
    return __HtmlDocument_12_7;
  }

  dynamic get _Window_12_8 {
    if ((__Window_12_8 == null)) {
      (__Window_12_8 = import20.getWindow());
    }
    return __Window_12_8;
  }

  dynamic get _DomService_12_9 {
    if ((__DomService_12_9 == null)) {
      (__DomService_12_9 = (import21.isDevMode
          ? import22.debugInjectorWrap(import23.DomService, () {
              return import24.createDomService(parentView.injectorGetOptional(import23.DomService, viewData.parentIndex), parentView.injectorGetOptional(import25.Disposer, viewData.parentIndex), parentView.injectorGet(import26.NgZone, viewData.parentIndex), _Window_12_8);
            })
          : import24.createDomService(parentView.injectorGetOptional(import23.DomService, viewData.parentIndex), parentView.injectorGetOptional(import25.Disposer, viewData.parentIndex), parentView.injectorGet(import26.NgZone, viewData.parentIndex), _Window_12_8)));
    }
    return __DomService_12_9;
  }

  dynamic get _AcxImperativeViewUtils_12_10 {
    if ((__AcxImperativeViewUtils_12_10 == null)) {
      (__AcxImperativeViewUtils_12_10 = (import21.isDevMode
          ? import22.debugInjectorWrap(import27.AcxImperativeViewUtils, () {
              return import27.AcxImperativeViewUtils(parentView.injectorGet(import28.ComponentLoader, viewData.parentIndex), _DomService_12_9);
            })
          : import27.AcxImperativeViewUtils(parentView.injectorGet(import28.ComponentLoader, viewData.parentIndex), _DomService_12_9)));
    }
    return __AcxImperativeViewUtils_12_10;
  }

  import11.DomRuler get _DomRuler_12_11 {
    if ((__DomRuler_12_11 == null)) {
      (__DomRuler_12_11 = import11.DomRuler(_Document_12_6, _DomService_12_9));
    }
    return __DomRuler_12_11;
  }

  dynamic get _ManagedZone_12_12 {
    if ((__ManagedZone_12_12 == null)) {
      (__ManagedZone_12_12 = (import21.isDevMode
          ? import22.debugInjectorWrap(import29.ManagedZone, () {
              return import30.Angular2ManagedZone(parentView.injectorGet(import26.NgZone, viewData.parentIndex));
            })
          : import30.Angular2ManagedZone(parentView.injectorGet(import26.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_12_12;
  }

  dynamic get _overlayContainerName_12_13 {
    if ((__overlayContainerName_12_13 == null)) {
      (__overlayContainerName_12_13 = (import21.isDevMode
          ? import22.debugInjectorWrap(const import31.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import32.getDefaultContainerName(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex));
            })
          : import32.getDefaultContainerName(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex))));
    }
    return __overlayContainerName_12_13;
  }

  dynamic get _overlayContainerParent_12_14 {
    if ((__overlayContainerParent_12_14 == null)) {
      (__overlayContainerParent_12_14 = (import21.isDevMode
          ? import22.debugInjectorWrap(const import31.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import32.getOverlayContainerParent(_Document_12_6, parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex));
            })
          : import32.getOverlayContainerParent(_Document_12_6, parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex))));
    }
    return __overlayContainerParent_12_14;
  }

  dynamic get _overlayContainer_12_15 {
    if ((__overlayContainer_12_15 == null)) {
      (__overlayContainer_12_15 = (import21.isDevMode
          ? import22.debugInjectorWrap(const import31.OpaqueToken<dynamic>('overlayContainer'), () {
              return import32.getDefaultContainer(_overlayContainerName_12_13, _overlayContainerParent_12_14, parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex));
            })
          : import32.getDefaultContainer(_overlayContainerName_12_13, _overlayContainerParent_12_14, parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex))));
    }
    return __overlayContainer_12_15;
  }

  bool get _overlaySyncDom_12_16 {
    if ((__overlaySyncDom_12_16 == null)) {
      (__overlaySyncDom_12_16 = true);
    }
    return __overlaySyncDom_12_16;
  }

  bool get _overlayRepositionLoop_12_17 {
    if ((__overlayRepositionLoop_12_17 == null)) {
      (__overlayRepositionLoop_12_17 = true);
    }
    return __overlayRepositionLoop_12_17;
  }

  import12.Box get _overlayViewportBoundaries_12_18 {
    if ((__overlayViewportBoundaries_12_18 == null)) {
      (__overlayViewportBoundaries_12_18 = const import12.Box());
    }
    return __overlayViewportBoundaries_12_18;
  }

  import13.OverlayStyleConfig get _OverlayStyleConfig_12_19 {
    if ((__OverlayStyleConfig_12_19 == null)) {
      (__OverlayStyleConfig_12_19 = import13.OverlayStyleConfig(_Document_12_6));
    }
    return __OverlayStyleConfig_12_19;
  }

  import14.ZIndexer get _ZIndexer_12_20 {
    if ((__ZIndexer_12_20 == null)) {
      (__ZIndexer_12_20 = import14.ZIndexer());
    }
    return __ZIndexer_12_20;
  }

  import15.OverlayDomRenderService get _OverlayDomRenderService_12_21 {
    if ((__OverlayDomRenderService_12_21 == null)) {
      (__OverlayDomRenderService_12_21 = import15.OverlayDomRenderService(_OverlayStyleConfig_12_19, _overlayContainer_12_15, _overlayContainerName_12_13, _DomRuler_12_11, _DomService_12_9, _AcxImperativeViewUtils_12_10, _overlaySyncDom_12_16, _overlayRepositionLoop_12_17, _ZIndexer_12_20));
    }
    return __OverlayDomRenderService_12_21;
  }

  dynamic get _OverlayService_12_22 {
    if ((__OverlayService_12_22 == null)) {
      (__OverlayService_12_22 = (import21.isDevMode
          ? import22.debugInjectorWrap(import33.OverlayService, () {
              return import33.OverlayService(parentView.injectorGet(import26.NgZone, viewData.parentIndex), _overlaySyncDom_12_16, _OverlayDomRenderService_12_21, parentView.injectorGetOptional(import33.OverlayService, viewData.parentIndex));
            })
          : import33.OverlayService(parentView.injectorGet(import26.NgZone, viewData.parentIndex), _overlaySyncDom_12_16, _OverlayDomRenderService_12_21, parentView.injectorGetOptional(import33.OverlayService, viewData.parentIndex))));
    }
    return __OverlayService_12_22;
  }

  static String get _debugComponentUrl {
    return (import21.isDevMode ? 'asset:web/lib/src/app_bar/app_bar_component.dart' : null);
  }

  @override
  ComponentRef<import2.AppBarComponent> build() {
    final _rootEl = rootEl;
    final import16.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import16.document;
    _el_0 = import35.appendElement(doc, parentRenderNode, 'header');
    this.updateChildClass(_el_0, 'header');
    addShimE(_el_0);
    final _el_1 = import35.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'wrapper');
    addShimC(_el_1);
    final _el_2 = import35.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'left');
    addShimC(_el_2);
    _el_3 = import35.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'logo');
    addShimC(_el_3);
    _RouterLink_3_5 = import4.RouterLinkNgCd((import21.isDevMode
        ? import22.debugInjectorWrap(import36.RouterLink, () {
            return import36.RouterLink(parentView.injectorGet(import37.Router, viewData.parentIndex), parentView.injectorGet(import38.Location, viewData.parentIndex), null, _el_3);
          })
        : import36.RouterLink(parentView.injectorGet(import37.Router, viewData.parentIndex), parentView.injectorGet(import38.Location, viewData.parentIndex), null, _el_3)));
    final _el_4 = import35.appendElement(doc, _el_3, 'img');
    import35.setAttribute(_el_4, 'alt', 'The InKino logo.');
    import35.setAttribute(_el_4, 'src', 'images/logo.png');
    addShimE(_el_4);
    final _el_5 = import35.appendDiv(doc, _el_3);
    this.updateChildClass(_el_5, 'name-and-selected-theater');
    addShimC(_el_5);
    final _el_6 = import35.appendElement(doc, _el_5, 'h1');
    addShimE(_el_6);
    _el_6.append(_textBinding_7.element);
    final _el_8 = import35.appendDiv(doc, _el_3);
    this.updateChildClass(_el_8, 'mobile-logo-focus-trap');
    addShimC(_el_8);
    _compView_9 = import5.ViewNavBarComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    addShimC(_el_9);
    _NavBarComponent_9_5 = (import21.isDevMode
        ? import22.debugInjectorWrap(import6.NavBarComponent, () {
            return import6.NavBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex));
          })
        : import6.NavBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex)));
    _compView_9.create0(_NavBarComponent_9_5);
    final _el_10 = import35.appendDiv(doc, _el_1);
    this.updateChildClass(_el_10, 'right');
    addShimC(_el_10);
    _compView_11 = import7.ViewSearchBarComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_10.append(_el_11);
    addShimC(_el_11);
    _SearchBarComponent_11_5 = (import21.isDevMode
        ? import22.debugInjectorWrap(import8.SearchBarComponent, () {
            return import8.SearchBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex), parentView.injectorGet(import40.Store, viewData.parentIndex));
          })
        : import8.SearchBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex), parentView.injectorGet(import40.Store, viewData.parentIndex)));
    _compView_11.create0(_SearchBarComponent_11_5);
    _compView_12 = import9.ViewSignInBarComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    _el_10.append(_el_12);
    addShimC(_el_12);
    _SignInBarComponent_12_5 = (import21.isDevMode
        ? import22.debugInjectorWrap(import10.SignInBarComponent, () {
            return import10.SignInBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex), parentView.injectorGet(import40.Store, viewData.parentIndex));
          })
        : import10.SignInBarComponent(parentView.injectorGet(import39.Messages, viewData.parentIndex), parentView.injectorGet(import40.Store, viewData.parentIndex)));
    _compView_12.create0(_SignInBarComponent_12_5);
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    init0();
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((12 == nodeIndex)) {
      if (identical(token, import16.Document)) {
        return _Document_12_6;
      }
      if (identical(token, import16.HtmlDocument)) {
        return _HtmlDocument_12_7;
      }
      if (identical(token, import16.Window)) {
        return _Window_12_8;
      }
      if (identical(token, import23.DomService)) {
        return _DomService_12_9;
      }
      if (identical(token, import27.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_12_10;
      }
      if (identical(token, import11.DomRuler)) {
        return _DomRuler_12_11;
      }
      if (identical(token, import29.ManagedZone)) {
        return _ManagedZone_12_12;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_12_13;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_12_14;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_12_15;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_12_16;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_12_17;
      }
      if (identical(token, const import31.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_12_18;
      }
      if (identical(token, import13.OverlayStyleConfig)) {
        return _OverlayStyleConfig_12_19;
      }
      if (identical(token, import14.ZIndexer)) {
        return _ZIndexer_12_20;
      }
      if (identical(token, import15.OverlayDomRenderService)) {
        return _OverlayDomRenderService_12_21;
      }
      if (identical(token, import33.OverlayService)) {
        return _OverlayService_12_22;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_2 = import41.RoutePaths.vegeBook.toUrl();
    if (import42.checkBinding(_expr_2, currVal_2)) {
      _RouterLink_3_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.theaterDropdownActive;
    if (import42.checkBinding(_expr_3, currVal_3)) {
      _NavBarComponent_9_5.theaterDropdownActive = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_0 = _ctx.theaterDropdownVisible;
    if (import42.checkBinding(_expr_0, currVal_0)) {
      import35.updateClassBinding(_el_0, 'scrolling-blocked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hide;
    if (import42.checkBinding(_expr_1, currVal_1)) {
      import35.updateClassBinding(_el_0, 'hidden', currVal_1);
      _expr_1 = currVal_1;
    }
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    _textBinding_7.updateText(import43.interpolateString0(_ctx.messages.appName));
    _compView_11.detectHostChanges(firstCheck);
    _compView_9.detectChanges();
    _compView_11.detectChanges();
    _compView_12.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_9.destroyInternalState();
    _compView_11.destroyInternalState();
    _compView_12.destroyInternalState();
    _RouterLink_3_5.instance.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import17.ComponentStyles.scoped(styles$AppBarComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.AppBarComponent> _AppBarComponentNgFactory = const ComponentFactory('app-bar', viewFactory_AppBarComponentHost0);
ComponentFactory<import2.AppBarComponent> get AppBarComponentNgFactory {
  return _AppBarComponentNgFactory;
}

final List<dynamic> styles$AppBarComponentHost = const [];

class _ViewAppBarComponentHost0 extends AppView<import2.AppBarComponent> {
  ViewAppBarComponent0 _compView_0;
  import2.AppBarComponent _AppBarComponent_0_5;
  _ViewAppBarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppBarComponent> build() {
    _compView_0 = ViewAppBarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppBarComponent_0_5 = (import21.isDevMode
        ? import22.debugInjectorWrap(import2.AppBarComponent, () {
            return import2.AppBarComponent(this.injectorGet(import39.Messages, viewData.parentIndex), this.injectorGet(import40.Store, viewData.parentIndex), this.injectorGet(import37.Router, viewData.parentIndex));
          })
        : import2.AppBarComponent(this.injectorGet(import39.Messages, viewData.parentIndex), this.injectorGet(import40.Store, viewData.parentIndex), this.injectorGet(import37.Router, viewData.parentIndex)));
    _compView_0.create(_AppBarComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _AppBarComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import42.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AppBarComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _AppBarComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.AppBarComponent> viewFactory_AppBarComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppBarComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppBarComponent, AppBarComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
