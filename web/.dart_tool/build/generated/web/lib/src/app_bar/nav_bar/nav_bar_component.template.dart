// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'nav_bar_component.dart';
export 'nav_bar_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/routes.template.dart' as _ref2;
import 'package:web/src/app_bar/nav_bar/nav_bar_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'nav_bar_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import4;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import 'package:angular_router/src/directives/router_link_directive.dart' as import14;
import 'package:angular_router/src/router/router.dart' as import15;
import 'package:angular_router/src/location/location.dart' as import16;
import '../../routes.dart' as import17;
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/src/runtime/interpolate.dart' as import19;
import 'package:core/src/i18n/messages.dart' as import20;

final List<dynamic> styles$NavBarComponent = [import0.styles];

class ViewNavBarComponent0 extends AppView<import2.NavBarComponent> {
  final import3.TextBinding _textBinding_5 = import3.TextBinding();
  final import3.TextBinding _textBinding_11 = import3.TextBinding();
  final import3.TextBinding _textBinding_17 = import3.TextBinding();
  final import3.TextBinding _textBinding_23 = import3.TextBinding();
  import4.RouterLinkNgCd _RouterLink_1_5;
  import5.RouterLinkActive _RouterLinkActive_1_6;
  import4.RouterLinkNgCd _RouterLink_7_5;
  import5.RouterLinkActive _RouterLinkActive_7_6;
  import4.RouterLinkNgCd _RouterLink_13_5;
  import5.RouterLinkActive _RouterLinkActive_13_6;
  import4.RouterLinkNgCd _RouterLink_19_5;
  import5.RouterLinkActive _RouterLinkActive_19_6;
  bool _expr_0;
  String _expr_1;
  String _expr_3;
  String _expr_5;
  String _expr_7;
  import6.Element _el_0;
  import6.AnchorElement _el_1;
  import6.AnchorElement _el_7;
  import6.AnchorElement _el_13;
  import6.AnchorElement _el_19;
  static import7.ComponentStyles _componentStyles;
  ViewNavBarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('nav-bar');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:web/lib/src/app_bar/nav_bar/nav_bar_component.dart' : null);
  }

  @override
  ComponentRef<import2.NavBarComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    _el_0 = import12.appendElement(doc, parentRenderNode, 'nav');
    addShimE(_el_0);
    _el_1 = import12.appendElement(doc, _el_0, 'a');
    import12.setAttribute(_el_1, 'routerLinkActive', 'active-route');
    addShimC(_el_1);
    _RouterLink_1_5 = import4.RouterLinkNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.RouterLink, () {
            return import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_1);
          })
        : import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_1)));
    _RouterLinkActive_1_6 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.RouterLinkActive, () {
            return import5.RouterLinkActive(_el_1, parentView.injectorGet(import15.Router, viewData.parentIndex));
          })
        : import5.RouterLinkActive(_el_1, parentView.injectorGet(import15.Router, viewData.parentIndex)));
    final _el_2 = import12.appendElement(doc, _el_1, 'img');
    import12.setAttribute(_el_2, 'alt', 'Vegan Book');
    this.updateChildClass(_el_2, 'icon');
    import12.setAttribute(_el_2, 'src', 'images/now-in-theaters.svg');
    addShimE(_el_2);
    final _text_3 = import12.appendText(_el_1, ' ');
    final _el_4 = import12.appendSpan(doc, _el_1);
    addShimE(_el_4);
    _el_4.append(_textBinding_5.element);
    _RouterLinkActive_1_6.links = [_RouterLink_1_5.instance];
    final _text_6 = import12.appendText(_el_0, ' ');
    _el_7 = import12.appendElement(doc, _el_0, 'a');
    import12.setAttribute(_el_7, 'routerLinkActive', 'active-route');
    addShimC(_el_7);
    _RouterLink_7_5 = import4.RouterLinkNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.RouterLink, () {
            return import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_7);
          })
        : import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_7)));
    _RouterLinkActive_7_6 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.RouterLinkActive, () {
            return import5.RouterLinkActive(_el_7, parentView.injectorGet(import15.Router, viewData.parentIndex));
          })
        : import5.RouterLinkActive(_el_7, parentView.injectorGet(import15.Router, viewData.parentIndex)));
    final _el_8 = import12.appendElement(doc, _el_7, 'img');
    import12.setAttribute(_el_8, 'alt', 'Vegan News');
    this.updateChildClass(_el_8, 'icon');
    import12.setAttribute(_el_8, 'src', 'images/now-in-theaters.svg');
    addShimE(_el_8);
    final _text_9 = import12.appendText(_el_7, ' ');
    final _el_10 = import12.appendSpan(doc, _el_7);
    addShimE(_el_10);
    _el_10.append(_textBinding_11.element);
    _RouterLinkActive_7_6.links = [_RouterLink_7_5.instance];
    final _text_12 = import12.appendText(_el_0, ' ');
    _el_13 = import12.appendElement(doc, _el_0, 'a');
    import12.setAttribute(_el_13, 'routerLinkActive', 'active-route');
    addShimC(_el_13);
    _RouterLink_13_5 = import4.RouterLinkNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.RouterLink, () {
            return import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_13);
          })
        : import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_13)));
    _RouterLinkActive_13_6 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.RouterLinkActive, () {
            return import5.RouterLinkActive(_el_13, parentView.injectorGet(import15.Router, viewData.parentIndex));
          })
        : import5.RouterLinkActive(_el_13, parentView.injectorGet(import15.Router, viewData.parentIndex)));
    final _el_14 = import12.appendElement(doc, _el_13, 'img');
    import12.setAttribute(_el_14, 'alt', 'Now in theaters');
    this.updateChildClass(_el_14, 'icon');
    import12.setAttribute(_el_14, 'src', 'images/now-in-theaters.svg');
    addShimE(_el_14);
    final _text_15 = import12.appendText(_el_13, ' ');
    final _el_16 = import12.appendSpan(doc, _el_13);
    addShimE(_el_16);
    _el_16.append(_textBinding_17.element);
    _RouterLinkActive_13_6.links = [_RouterLink_13_5.instance];
    final _text_18 = import12.appendText(_el_0, ' ');
    _el_19 = import12.appendElement(doc, _el_0, 'a');
    import12.setAttribute(_el_19, 'routerLinkActive', 'active-route');
    addShimC(_el_19);
    _RouterLink_19_5 = import4.RouterLinkNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.RouterLink, () {
            return import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_19);
          })
        : import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_19)));
    _RouterLinkActive_19_6 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.RouterLinkActive, () {
            return import5.RouterLinkActive(_el_19, parentView.injectorGet(import15.Router, viewData.parentIndex));
          })
        : import5.RouterLinkActive(_el_19, parentView.injectorGet(import15.Router, viewData.parentIndex)));
    final _el_20 = import12.appendElement(doc, _el_19, 'img');
    import12.setAttribute(_el_20, 'alt', 'Showtimes');
    this.updateChildClass(_el_20, 'icon');
    import12.setAttribute(_el_20, 'src', 'images/showtimes.svg');
    addShimE(_el_20);
    final _text_21 = import12.appendText(_el_19, ' ');
    final _el_22 = import12.appendSpan(doc, _el_19);
    addShimE(_el_22);
    _el_22.append(_textBinding_23.element);
    _RouterLinkActive_19_6.links = [_RouterLink_19_5.instance];
    final _text_24 = import12.appendText(_el_0, ' ');
    _el_1.addEventListener('click', eventHandler1(_RouterLink_1_5.instance.onClick));
    _el_7.addEventListener('click', eventHandler1(_RouterLink_7_5.instance.onClick));
    _el_13.addEventListener('click', eventHandler1(_RouterLink_13_5.instance.onClick));
    _el_19.addEventListener('click', eventHandler1(_RouterLink_19_5.instance.onClick));
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = import17.RoutePaths.vegeBook.toUrl();
    if (import18.checkBinding(_expr_1, currVal_1)) {
      _RouterLink_1_5.instance.routerLink = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      (_RouterLinkActive_1_6.routerLinkActive = 'active-route');
    }
    final currVal_3 = import17.RoutePaths.vegeNews.toUrl();
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _RouterLink_7_5.instance.routerLink = currVal_3;
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      (_RouterLinkActive_7_6.routerLinkActive = 'active-route');
    }
    final currVal_5 = import17.RoutePaths.nowInTheaters.toUrl();
    if (import18.checkBinding(_expr_5, currVal_5)) {
      _RouterLink_13_5.instance.routerLink = currVal_5;
      _expr_5 = currVal_5;
    }
    if (firstCheck) {
      (_RouterLinkActive_13_6.routerLinkActive = 'active-route');
    }
    final currVal_7 = import17.RoutePaths.showtimes.toUrl();
    if (import18.checkBinding(_expr_7, currVal_7)) {
      _RouterLink_19_5.instance.routerLink = currVal_7;
      _expr_7 = currVal_7;
    }
    if (firstCheck) {
      (_RouterLinkActive_19_6.routerLinkActive = 'active-route');
    }
    final currVal_0 = _ctx.theaterDropdownActive;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBinding(_el_0, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
    _RouterLink_1_5.detectHostChanges(this, _el_1);
    _textBinding_5.updateText(import19.interpolateString0(_ctx.messages.vegeBook));
    _RouterLink_7_5.detectHostChanges(this, _el_7);
    _textBinding_11.updateText(import19.interpolateString0(_ctx.messages.vegeNews));
    _RouterLink_13_5.detectHostChanges(this, _el_13);
    _textBinding_17.updateText(import19.interpolateString0(_ctx.messages.nowInTheaters));
    _RouterLink_19_5.detectHostChanges(this, _el_19);
    _textBinding_23.updateText(import19.interpolateString0(_ctx.messages.showtimes));
    if ((!import18.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _RouterLinkActive_1_6.ngAfterViewInit();
        _RouterLinkActive_7_6.ngAfterViewInit();
        _RouterLinkActive_13_6.ngAfterViewInit();
        _RouterLinkActive_19_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _RouterLink_1_5.instance.ngOnDestroy();
    _RouterLinkActive_1_6.ngOnDestroy();
    _RouterLink_7_5.instance.ngOnDestroy();
    _RouterLinkActive_7_6.ngOnDestroy();
    _RouterLink_13_5.instance.ngOnDestroy();
    _RouterLinkActive_13_6.ngOnDestroy();
    _RouterLink_19_5.instance.ngOnDestroy();
    _RouterLinkActive_19_6.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$NavBarComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.NavBarComponent> _NavBarComponentNgFactory = const ComponentFactory('nav-bar', viewFactory_NavBarComponentHost0);
ComponentFactory<import2.NavBarComponent> get NavBarComponentNgFactory {
  return _NavBarComponentNgFactory;
}

final List<dynamic> styles$NavBarComponentHost = const [];

class _ViewNavBarComponentHost0 extends AppView<import2.NavBarComponent> {
  ViewNavBarComponent0 _compView_0;
  import2.NavBarComponent _NavBarComponent_0_5;
  _ViewNavBarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.NavBarComponent> build() {
    _compView_0 = ViewNavBarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NavBarComponent_0_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import2.NavBarComponent, () {
            return import2.NavBarComponent(this.injectorGet(import20.Messages, viewData.parentIndex));
          })
        : import2.NavBarComponent(this.injectorGet(import20.Messages, viewData.parentIndex)));
    _compView_0.create(_NavBarComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _NavBarComponent_0_5);
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

AppView<import2.NavBarComponent> viewFactory_NavBarComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewNavBarComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NavBarComponent, NavBarComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
