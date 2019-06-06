// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/app_bar/app_bar_component.template.dart' as _ref2;
import 'package:web/src/common/theater_selector/theater_dropdown_controller.template.dart' as _ref3;
import 'src/routes.template.dart' as _ref4;
import 'package:web/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'src/app_bar/app_bar_component.template.dart' as import3;
import 'src/app_bar/app_bar_component.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import6;
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import14;
import 'package:core/src/i18n/messages.dart' as import15;
import 'package:redux/src/store.dart' as import16;
import 'package:angular_router/src/router/router.dart' as import17;
import 'package:angular/src/runtime/dom_helpers.dart' as import18;
import 'package:angular_router/src/router/router_outlet_token.dart' as import19;
import 'package:angular_router/src/router_hook.dart' as import20;
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import 'src/routes.dart' as import22;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.ViewAppBarComponent0 _compView_0;
  import4.AppBarComponent _AppBarComponent_0_5;
  ViewContainer _appEl_2;
  import6.RouterOutlet _RouterOutlet_2_8;
  ViewContainer _appEl_4;
  TemplateRef _TemplateRef_4_8;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_4;
  import8.Element _el_1;
  import8.DivElement _el_3;
  static import9.ComponentStyles _componentStyles;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:web/lib/app_component.dart' : null);
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewAppBarComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _AppBarComponent_0_5 = (import12.isDevMode
        ? import14.debugInjectorWrap(import4.AppBarComponent, () {
            return import4.AppBarComponent(parentView.injectorGet(import15.Messages, viewData.parentIndex), parentView.injectorGet(import16.Store, viewData.parentIndex), parentView.injectorGet(import17.Router, viewData.parentIndex));
          })
        : import4.AppBarComponent(parentView.injectorGet(import15.Messages, viewData.parentIndex), parentView.injectorGet(import16.Store, viewData.parentIndex), parentView.injectorGet(import17.Router, viewData.parentIndex)));
    _compView_0.create0(_AppBarComponent_0_5);
    final doc = import8.document;
    _el_1 = import18.appendElement(doc, parentRenderNode, 'main');
    this.updateChildClass(_el_1, 'content');
    addShimE(_el_1);
    final _el_2 = import18.appendElement(doc, _el_1, 'router-outlet');
    addShimE(_el_2);
    _appEl_2 = ViewContainer(2, 1, this, _el_2);
    _RouterOutlet_2_8 = (import12.isDevMode
        ? import14.debugInjectorWrap(import6.RouterOutlet, () {
            return import6.RouterOutlet(parentView.injectorGetOptional(import19.RouterOutletToken, viewData.parentIndex), _appEl_2, parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGetOptional(import20.RouterHook, viewData.parentIndex));
          })
        : import6.RouterOutlet(parentView.injectorGetOptional(import19.RouterOutletToken, viewData.parentIndex), _appEl_2, parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGetOptional(import20.RouterHook, viewData.parentIndex)));
    _el_3 = import18.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'theater-container');
    addShimC(_el_3);
    final _anchor_4 = import18.appendAnchor(_el_3);
    _appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_AppComponent1);
    final subscription_0 = _AppBarComponent_0_5.theaterButtonClicked.listen(eventHandler0(_ctx.toggleTheaterDropdown));
    _ctx.theaterContainer = _appEl_4;
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.theaterDropdownVisible;
    if (import21.checkBinding(_expr_0, currVal_0)) {
      _AppBarComponent_0_5.theaterDropdownVisible = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.theaterDropdownActive;
    if (import21.checkBinding(_expr_1, currVal_1)) {
      _AppBarComponent_0_5.theaterDropdownActive = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import21.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AppBarComponent_0_5.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(import22.Routes.all, null)) {
        (_RouterOutlet_2_8.routes = import22.Routes.all);
      }
    }
    if (((!import21.AppViewUtils.throwOnChanges) && firstCheck)) {
      _RouterOutlet_2_8.ngOnInit();
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_2 = _ctx.theaterDropdownVisible;
    if (import21.checkBinding(_expr_2, currVal_2)) {
      import18.updateClassBinding(_el_1, 'scrolling-blocked', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_4 = _ctx.theaterDropdownActive;
    if (import21.checkBinding(_expr_4, currVal_4)) {
      import18.updateClassBinding(_el_3, 'visible', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _compView_0.destroyInternalState();
    _AppBarComponent_0_5.ngOnDestroy();
    _RouterOutlet_2_8.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent1(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  ViewContainer _appEl_0;
  import2.AppComponent _AppComponent_0_8;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = ViewContainer(0, null, this, rootEl);
    _AppComponent_0_8 = (import12.isDevMode
        ? import14.debugInjectorWrap(import2.AppComponent, () {
            return import2.AppComponent(this.injectorGet(import16.Store, viewData.parentIndex), _appEl_0);
          })
        : import2.AppComponent(this.injectorGet(import16.Store, viewData.parentIndex), _appEl_0));
    _compView_0.create(_AppComponent_0_8, projectedNodes);
    init1(_appEl_0);
    return ComponentRef(0, this, rootEl, _AppComponent_0_8);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import21.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AppComponent_0_8.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    if ((!import21.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _AppComponent_0_8.ngAfterContentInit();
      }
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
