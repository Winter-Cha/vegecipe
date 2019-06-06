// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'theater_selector_dropdown_menu_component.dart';
export 'theater_selector_dropdown_menu_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/theater_selector/theater_dropdown_controller.template.dart' as _ref1;
import 'package:web/src/common/theater_selector/theater_selector_dropdown_menu_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'theater_selector_dropdown_menu_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import 'package:core/src/models/theater.dart' as import15;
import 'package:angular/src/runtime/interpolate.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'package:redux/src/store.dart' as import18;

final List<dynamic> styles$TheaterSelectorDropdownMenuComponent = [import0.styles];

class ViewTheaterSelectorDropdownMenuComponent0 extends AppView<import2.TheaterSelectorDropdownMenuComponent> {
  ViewContainer _appEl_2;
  import4.NgFor _NgFor_2_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  import5.DivElement _el_0;
  import5.DivElement _el_1;
  static import6.ComponentStyles _componentStyles;
  ViewTheaterSelectorDropdownMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import5.document.createElement('theater-selector-dropdown-menu');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/common/theater_selector/theater_selector_dropdown_menu_component.dart' : null);
  }

  @override
  ComponentRef<import2.TheaterSelectorDropdownMenuComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import5.document;
    _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'focus-trap');
    addShimC(_el_0);
    _el_1 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'menu');
    addShimC(_el_1);
    final _anchor_2 = import11.appendAnchor(_el_1);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_TheaterSelectorDropdownMenuComponent1);
    _NgFor_2_9 = import4.NgFor(_appEl_2, _TemplateRef_2_8);
    _el_0.addEventListener('click', eventHandler0(_ctx.hideAndDestroy));
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_3 = _ctx.theaters;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _NgFor_2_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.focusTrapVisible;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isOpen;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBinding(_el_1, 'opened', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.background;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _el_1.style.setProperty('background', currVal_2);
      _expr_2 = currVal_2;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$TheaterSelectorDropdownMenuComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.TheaterSelectorDropdownMenuComponent> _TheaterSelectorDropdownMenuComponentNgFactory = const ComponentFactory('theater-selector-dropdown-menu', viewFactory_TheaterSelectorDropdownMenuComponentHost0);
ComponentFactory<import2.TheaterSelectorDropdownMenuComponent> get TheaterSelectorDropdownMenuComponentNgFactory {
  return _TheaterSelectorDropdownMenuComponentNgFactory;
}

class _ViewTheaterSelectorDropdownMenuComponent1 extends AppView<import2.TheaterSelectorDropdownMenuComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  bool _expr_0;
  import5.DivElement _el_0;
  _ViewTheaterSelectorDropdownMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.TheaterSelectorDropdownMenuComponent> build() {
    final doc = import5.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'item');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_theater = import9.unsafeCast<import15.Theater>(locals['\$implicit']);
    final currVal_0 = (local_theater == _ctx.selectedTheater);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import16.interpolateString0(local_theater.name));
  }

  void _handle_click_0_0($event) {
    final local_theater = import9.unsafeCast<import15.Theater>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.onTheaterClicked(local_theater);
  }
}

AppView<void> viewFactory_TheaterSelectorDropdownMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTheaterSelectorDropdownMenuComponent1(parentView, parentIndex);
}

final List<dynamic> styles$TheaterSelectorDropdownMenuComponentHost = const [];

class _ViewTheaterSelectorDropdownMenuComponentHost0 extends AppView<import2.TheaterSelectorDropdownMenuComponent> {
  ViewTheaterSelectorDropdownMenuComponent0 _compView_0;
  import2.TheaterSelectorDropdownMenuComponent _TheaterSelectorDropdownMenuComponent_0_5;
  _ViewTheaterSelectorDropdownMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.TheaterSelectorDropdownMenuComponent> build() {
    _compView_0 = ViewTheaterSelectorDropdownMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TheaterSelectorDropdownMenuComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.TheaterSelectorDropdownMenuComponent, () {
            return import2.TheaterSelectorDropdownMenuComponent(this.injectorGet(import18.Store, viewData.parentIndex));
          })
        : import2.TheaterSelectorDropdownMenuComponent(this.injectorGet(import18.Store, viewData.parentIndex)));
    _compView_0.create(_TheaterSelectorDropdownMenuComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _TheaterSelectorDropdownMenuComponent_0_5);
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

AppView<import2.TheaterSelectorDropdownMenuComponent> viewFactory_TheaterSelectorDropdownMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTheaterSelectorDropdownMenuComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TheaterSelectorDropdownMenuComponent, TheaterSelectorDropdownMenuComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
