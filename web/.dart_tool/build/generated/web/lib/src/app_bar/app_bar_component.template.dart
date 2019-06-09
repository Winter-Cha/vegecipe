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
import 'package:web/src/routes.template.dart' as _ref5;
import 'package:web/src/app_bar/app_bar_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_bar_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import4;
import 'nav_bar/nav_bar_component.template.dart' as import5;
import 'nav_bar/nav_bar_component.dart' as import6;
import 'search_bar/search_bar_component.template.dart' as import7;
import 'search_bar/search_bar_component.dart' as import8;
import 'dart:html' as import9;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import10;
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import 'package:angular_router/src/directives/router_link_directive.dart' as import17;
import 'package:angular_router/src/router/router.dart' as import18;
import 'package:angular_router/src/location/location.dart' as import19;
import 'package:core/src/i18n/messages.dart' as import20;
import 'package:redux/src/store.dart' as import21;
import '../routes.dart' as import22;
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;

final List<dynamic> styles$AppBarComponent = [import0.styles];

class ViewAppBarComponent0 extends AppView<import2.AppBarComponent> {
  final import3.TextBinding _textBinding_7 = import3.TextBinding();
  final import3.TextBinding _textBinding_9 = import3.TextBinding();
  import4.RouterLinkNgCd _RouterLink_3_5;
  import5.ViewNavBarComponent0 _compView_11;
  import6.NavBarComponent _NavBarComponent_11_5;
  import7.ViewSearchBarComponent0 _compView_14;
  import8.SearchBarComponent _SearchBarComponent_14_5;
  bool _expr_0;
  bool _expr_1;
  String _expr_2;
  bool _expr_3;
  bool _expr_4;
  import9.Element _el_0;
  import9.DivElement _el_3;
  import9.Element _el_13;
  static import10.ComponentStyles _componentStyles;
  ViewAppBarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import9.document.createElement('app-bar');
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:web/lib/src/app_bar/app_bar_component.dart' : null);
  }

  @override
  ComponentRef<import2.AppBarComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import9.document;
    _el_0 = import15.appendElement(doc, parentRenderNode, 'header');
    this.updateChildClass(_el_0, 'header');
    addShimE(_el_0);
    final _el_1 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'wrapper');
    addShimC(_el_1);
    final _el_2 = import15.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'left');
    addShimC(_el_2);
    _el_3 = import15.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'logo');
    addShimC(_el_3);
    _RouterLink_3_5 = import4.RouterLinkNgCd((import13.isDevMode
        ? import16.debugInjectorWrap(import17.RouterLink, () {
            return import17.RouterLink(parentView.injectorGet(import18.Router, viewData.parentIndex), parentView.injectorGet(import19.Location, viewData.parentIndex), null, _el_3);
          })
        : import17.RouterLink(parentView.injectorGet(import18.Router, viewData.parentIndex), parentView.injectorGet(import19.Location, viewData.parentIndex), null, _el_3)));
    final _el_4 = import15.appendElement(doc, _el_3, 'img');
    import15.setAttribute(_el_4, 'alt', 'The InKino logo.');
    import15.setAttribute(_el_4, 'src', 'images/logo.png');
    addShimE(_el_4);
    final _el_5 = import15.appendDiv(doc, _el_3);
    this.updateChildClass(_el_5, 'name-and-selected-theater');
    addShimC(_el_5);
    final _el_6 = import15.appendElement(doc, _el_5, 'h1');
    addShimE(_el_6);
    _el_6.append(_textBinding_7.element);
    final _el_8 = import15.appendElement(doc, _el_5, 'p');
    this.updateChildClass(_el_8, 'theater-name');
    addShimE(_el_8);
    _el_8.append(_textBinding_9.element);
    final _el_10 = import15.appendDiv(doc, _el_3);
    this.updateChildClass(_el_10, 'mobile-logo-focus-trap');
    addShimC(_el_10);
    _compView_11 = import5.ViewNavBarComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_2.append(_el_11);
    addShimC(_el_11);
    _NavBarComponent_11_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import6.NavBarComponent, () {
            return import6.NavBarComponent(parentView.injectorGet(import20.Messages, viewData.parentIndex));
          })
        : import6.NavBarComponent(parentView.injectorGet(import20.Messages, viewData.parentIndex)));
    _compView_11.create0(_NavBarComponent_11_5);
    final _el_12 = import15.appendDiv(doc, _el_1);
    this.updateChildClass(_el_12, 'right');
    addShimC(_el_12);
    _el_13 = import15.appendElement(doc, _el_12, 'img');
    import15.setAttribute(_el_13, 'alt', 'Change selected theater');
    this.updateChildClass(_el_13, 'app-bar-button select-theater');
    import15.setAttribute(_el_13, 'src', 'images/theaters.svg');
    addShimE(_el_13);
    _compView_14 = import7.ViewSearchBarComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_12.append(_el_14);
    addShimC(_el_14);
    _SearchBarComponent_14_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import8.SearchBarComponent, () {
            return import8.SearchBarComponent(parentView.injectorGet(import20.Messages, viewData.parentIndex), parentView.injectorGet(import21.Store, viewData.parentIndex));
          })
        : import8.SearchBarComponent(parentView.injectorGet(import20.Messages, viewData.parentIndex), parentView.injectorGet(import21.Store, viewData.parentIndex)));
    _compView_14.create0(_SearchBarComponent_14_5);
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    _el_10.addEventListener('click', eventHandler1(_handle_click_10_0));
    _el_13.addEventListener('click', eventHandler0(_ctx.openTheaterDropdown));
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_2 = import22.RoutePaths.vegeNews.toUrl();
    if (import23.checkBinding(_expr_2, currVal_2)) {
      _RouterLink_3_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.theaterDropdownActive;
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _NavBarComponent_11_5.theaterDropdownActive = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_0 = _ctx.theaterDropdownVisible;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import15.updateClassBinding(_el_0, 'scrolling-blocked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hide;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      import15.updateClassBinding(_el_0, 'hidden', currVal_1);
      _expr_1 = currVal_1;
    }
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    _textBinding_7.updateText(import24.interpolateString0(_ctx.messages.appName));
    _textBinding_9.updateText(import24.interpolateString0(_ctx.theaterName));
    final currVal_4 = _ctx.theaterDropdownVisible;
    if (import23.checkBinding(_expr_4, currVal_4)) {
      import15.updateClassBinding(_el_13, 'active', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_14.detectHostChanges(firstCheck);
    _compView_11.detectChanges();
    _compView_14.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_11.destroyInternalState();
    _compView_14.destroyInternalState();
    _RouterLink_3_5.instance.ngOnDestroy();
  }

  void _handle_click_10_0($event) {
    final _ctx = ctx;
    _ctx.openTheaterDropdown();
    $event.stopImmediatePropagation();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import10.ComponentStyles.scoped(styles$AppBarComponent, _debugComponentUrl))));
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
  _ViewAppBarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppBarComponent> build() {
    _compView_0 = ViewAppBarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppBarComponent_0_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import2.AppBarComponent, () {
            return import2.AppBarComponent(this.injectorGet(import20.Messages, viewData.parentIndex), this.injectorGet(import21.Store, viewData.parentIndex), this.injectorGet(import18.Router, viewData.parentIndex));
          })
        : import2.AppBarComponent(this.injectorGet(import20.Messages, viewData.parentIndex), this.injectorGet(import21.Store, viewData.parentIndex), this.injectorGet(import18.Router, viewData.parentIndex)));
    _compView_0.create(_AppBarComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _AppBarComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import23.AppViewUtils.throwOnChanges) && firstCheck)) {
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
}
