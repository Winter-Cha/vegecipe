// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'theater_selector_component.dart';
export 'theater_selector_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/theater_selector/theater_dropdown_controller.template.dart' as _ref1;
import 'package:web/src/common/theater_selector/theater_selector_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'theater_selector_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import 'package:redux/src/store.dart' as import16;

final List<dynamic> styles$TheaterSelectorComponent = [import0.styles];

class ViewTheaterSelectorComponent0 extends AppView<import2.TheaterSelectorComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  ViewContainer _appEl_8;
  TemplateRef _TemplateRef_8_8;
  bool _expr_0;
  import6.DivElement _el_7;
  static import7.ComponentStyles _componentStyles;
  ViewTheaterSelectorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('theater-selector');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:web/lib/src/common/theater_selector/theater_selector_component.dart' : null);
  }

  @override
  ComponentRef<import2.TheaterSelectorComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'button');
    addShimC(_el_0);
    final _el_1 = import12.appendElement(doc, _el_0, 'img');
    import12.setAttribute(_el_1, 'alt', 'A map pin.');
    this.updateChildClass(_el_1, 'leading');
    import12.setAttribute(_el_1, 'src', 'images/place.svg');
    addShimE(_el_1);
    final _text_2 = import12.appendText(_el_0, ' ');
    final _el_3 = import12.appendSpan(doc, _el_0);
    this.updateChildClass(_el_3, 'button-text');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    final _text_5 = import12.appendText(_el_0, ' ');
    final _el_6 = import12.appendElement(doc, _el_0, 'img');
    import12.setAttribute(_el_6, 'alt', 'Drop down arrow.');
    import12.setAttribute(_el_6, 'src', 'images/arrow_drop_down.svg');
    addShimE(_el_6);
    _el_7 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_7, 'menu');
    addShimC(_el_7);
    final _anchor_8 = import12.appendAnchor(_el_7);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_TheaterSelectorComponent1);
    _el_0.addEventListener('click', eventHandler0(_ctx.toggleMenu));
    _ctx.menuContainer = _appEl_8;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _appEl_8.detectChangesInNestedViews();
    _textBinding_4.updateText(import13.interpolateString0(_ctx.currentTheater.name));
    final currVal_0 = _ctx.theaterDropdownVisible;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBinding(_el_7, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$TheaterSelectorComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.TheaterSelectorComponent> _TheaterSelectorComponentNgFactory = const ComponentFactory('theater-selector', viewFactory_TheaterSelectorComponentHost0);
ComponentFactory<import2.TheaterSelectorComponent> get TheaterSelectorComponentNgFactory {
  return _TheaterSelectorComponentNgFactory;
}

class _ViewTheaterSelectorComponent1 extends AppView<import2.TheaterSelectorComponent> {
  _ViewTheaterSelectorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.TheaterSelectorComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_TheaterSelectorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTheaterSelectorComponent1(parentView, parentIndex);
}

final List<dynamic> styles$TheaterSelectorComponentHost = const [];

class _ViewTheaterSelectorComponentHost0 extends AppView<import2.TheaterSelectorComponent> {
  ViewTheaterSelectorComponent0 _compView_0;
  ViewContainer _appEl_0;
  import2.TheaterSelectorComponent _TheaterSelectorComponent_0_8;
  _ViewTheaterSelectorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.TheaterSelectorComponent> build() {
    _compView_0 = ViewTheaterSelectorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = ViewContainer(0, null, this, rootEl);
    _TheaterSelectorComponent_0_8 = (import10.isDevMode
        ? import15.debugInjectorWrap(import2.TheaterSelectorComponent, () {
            return import2.TheaterSelectorComponent(this.injectorGet(import16.Store, viewData.parentIndex), _appEl_0);
          })
        : import2.TheaterSelectorComponent(this.injectorGet(import16.Store, viewData.parentIndex), _appEl_0));
    _compView_0.create(_TheaterSelectorComponent_0_8, projectedNodes);
    init1(_appEl_0);
    return ComponentRef(0, this, rootEl, _TheaterSelectorComponent_0_8);
  }

  @override
  void detectChangesInternal() {
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
  }
}

AppView<import2.TheaterSelectorComponent> viewFactory_TheaterSelectorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTheaterSelectorComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TheaterSelectorComponent, TheaterSelectorComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
