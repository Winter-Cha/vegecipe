// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'search_bar_component.dart';
export 'search_bar_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/app_bar/search_bar/search_bar_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'search_bar_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:core/src/i18n/messages.dart' as import12;
import 'package:redux/src/store.dart' as import13;

final List<dynamic> styles$SearchBarComponent = [import0.styles];

class ViewSearchBarComponent0 extends AppView<import2.SearchBarComponent> {
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  import3.InputElement _el_0;
  import3.Element _el_2;
  import3.Element _el_4;
  static import4.ComponentStyles _componentStyles;
  ViewSearchBarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('search-bar');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:web/lib/src/app_bar/search_bar/search_bar_component.dart' : null);
  }

  @override
  ComponentRef<import2.SearchBarComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import3.document;
    _el_0 = import9.appendElement(doc, parentRenderNode, 'input');
    import9.setAttribute(_el_0, 'type', 'text');
    addShimC(_el_0);
    final _el_1 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'buttons');
    addShimC(_el_1);
    _el_2 = import9.appendElement(doc, _el_1, 'img');
    import9.setAttribute(_el_2, 'alt', 'Search for movies');
    this.updateChildClass(_el_2, 'app-bar-button search');
    import9.setAttribute(_el_2, 'src', 'images/search.svg');
    addShimE(_el_2);
    final _text_3 = import9.appendText(_el_1, ' ');
    _el_4 = import9.appendElement(doc, _el_1, 'img');
    import9.setAttribute(_el_4, 'alt', 'Stop searching movies');
    this.updateChildClass(_el_4, 'app-bar-button close');
    import9.setAttribute(_el_4, 'src', 'images/close.svg');
    addShimE(_el_4);
    _el_0.addEventListener('input', eventHandler1(_handle_input_0_0));
    _el_1.addEventListener('click', eventHandler0(_ctx.toggleSearch));
    _ctx.searchField = _el_0;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.messages.searchHint;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.setProperty(_el_0, 'placeholder', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.searchOpen;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import9.updateClassBinding(_el_0, 'visible', currVal_1);
      _expr_1 = currVal_1;
    }
    final bool currVal_2 = (!_ctx.searchOpen);
    if (import10.checkBinding(_expr_2, currVal_2)) {
      import9.updateClassBinding(_el_2, 'visible', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.searchOpen;
    if (import10.checkBinding(_expr_3, currVal_3)) {
      import9.updateClassBinding(_el_4, 'visible', currVal_3);
      _expr_3 = currVal_3;
    }
  }

  void _handle_input_0_0($event) {
    final local_searchField = _el_0;
    final _ctx = ctx;
    _ctx.updateSearchQuery(local_searchField.value);
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_4 = _ctx.hostExpanded;
    if (import10.checkBinding(_expr_4, currVal_4)) {
      import9.updateAttribute(rootEl, 'expanded', currVal_4);
      _expr_4 = currVal_4;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$SearchBarComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SearchBarComponent> _SearchBarComponentNgFactory = const ComponentFactory('search-bar', viewFactory_SearchBarComponentHost0);
ComponentFactory<import2.SearchBarComponent> get SearchBarComponentNgFactory {
  return _SearchBarComponentNgFactory;
}

final List<dynamic> styles$SearchBarComponentHost = const [];

class _ViewSearchBarComponentHost0 extends AppView<import2.SearchBarComponent> {
  ViewSearchBarComponent0 _compView_0;
  import2.SearchBarComponent _SearchBarComponent_0_5;
  _ViewSearchBarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SearchBarComponent> build() {
    _compView_0 = ViewSearchBarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SearchBarComponent_0_5 = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.SearchBarComponent, () {
            return import2.SearchBarComponent(this.injectorGet(import12.Messages, viewData.parentIndex), this.injectorGet(import13.Store, viewData.parentIndex));
          })
        : import2.SearchBarComponent(this.injectorGet(import12.Messages, viewData.parentIndex), this.injectorGet(import13.Store, viewData.parentIndex)));
    _compView_0.create(_SearchBarComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SearchBarComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.SearchBarComponent> viewFactory_SearchBarComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSearchBarComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SearchBarComponent, SearchBarComponentNgFactory);
  _ref0.initReflector();
}
