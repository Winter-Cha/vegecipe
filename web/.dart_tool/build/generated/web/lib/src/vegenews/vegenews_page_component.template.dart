// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegenews_page_component.dart';
export 'vegenews_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../restore_scroll_position.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:web/src/common/loading_view/loading_view_component.template.dart' as _ref3;
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.template.dart' as _ref4;
import 'package:web/src/routes.template.dart' as _ref5;
import 'package:web/src/vegenews/vegenews_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegenews_page_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../common/loading_view/loading_view_component.template.dart' as import4;
import '../common/loading_view/loading_view_component.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import 'package:core/src/i18n/messages.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/src/runtime/interpolate.dart' as import19;
import '../common/vegenews_poster/vegenews_poster_component.template.dart' as import20;
import '../common/vegenews_poster/vegenews_poster_component.dart' as import21;
import 'package:core/src/models/vegenews.dart' as import22;
import 'package:redux/src/store.dart' as import23;
import 'package:angular_router/src/router/router.dart' as import24;

final List<dynamic> styles$VegeNewsPageComponent = [import0.styles];

class ViewVegeNewsPageComponent0 extends AppView<import2.VegeNewsPageComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  import4.ViewLoadingViewComponent0 _compView_4;
  import5.LoadingViewComponent _LoadingViewComponent_4_5;
  ViewContainer _appEl_6;
  import7.NgFor _NgFor_6_9;
  bool _expr_0;
  String _expr_1;
  var _expr_2;
  var _expr_3;
  static import8.ComponentStyles _componentStyles;
  ViewVegeNewsPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import11.document.createElement('vegenews-page');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:web/lib/src/vegenews/vegenews_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeNewsPageComponent> build() {
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import11.document;
    final _el_0 = import14.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content-wrapper');
    addShimC(_el_0);
    final _el_1 = import14.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'page-title');
    addShimC(_el_1);
    final _el_2 = import14.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _compView_4 = import4.ViewLoadingViewComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    addShimC(_el_4);
    _LoadingViewComponent_4_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import5.LoadingViewComponent, () {
            return import5.LoadingViewComponent(parentView.injectorGet(import16.Messages, viewData.parentIndex));
          })
        : import5.LoadingViewComponent(parentView.injectorGet(import16.Messages, viewData.parentIndex)));
    final _el_5 = doc.createElement('div');
    this.updateChildClass(_el_5, 'grid-container');
    addShimC(_el_5);
    final _anchor_6 = import14.appendAnchor(_el_5);
    _appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_VegeNewsPageComponent1);
    _NgFor_6_9 = import7.NgFor(_appEl_6, _TemplateRef_6_8);
    _compView_4.create(_LoadingViewComponent_4_5, [
      [_el_5]
    ]);
    final subscription_0 = _LoadingViewComponent_4_5.actionButtonClicked.listen(eventHandler1(_handle_actionButtonClicked_4_0));
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.viewModel.vegeNews.isEmpty();
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _LoadingViewComponent_4_5.contentEmpty = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.messages.errorLoadingEvents;
    if (import18.checkBinding(_expr_1, currVal_1)) {
      _LoadingViewComponent_4_5.errorMessage = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.viewModel.status;
    if (import18.checkBinding(_expr_2, currVal_2)) {
      _LoadingViewComponent_4_5.status = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.viewModel.vegeNews.list;
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _NgFor_6_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if ((!import18.AppViewUtils.throwOnChanges)) {
      _NgFor_6_9.ngDoCheck();
    }
    _appEl_6.detectChangesInNestedViews();
    _textBinding_3.updateText(import19.interpolateString0(_ctx.VegeNewsTitle));
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_6.destroyNestedViews();
    _compView_4.destroyInternalState();
    _LoadingViewComponent_4_5.ngOnDestroy();
  }

  void _handle_actionButtonClicked_4_0($event) {
    final _ctx = ctx;
    _ctx.viewModel.refreshVegeNews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$VegeNewsPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeNewsPageComponent> _VegeNewsPageComponentNgFactory = const ComponentFactory('vegenews-page', viewFactory_VegeNewsPageComponentHost0);
ComponentFactory<import2.VegeNewsPageComponent> get VegeNewsPageComponentNgFactory {
  return _VegeNewsPageComponentNgFactory;
}

class _ViewVegeNewsPageComponent1 extends AppView<import2.VegeNewsPageComponent> {
  import20.ViewVegeNewsPosterComponent0 _compView_0;
  import21.VegeNewsPosterComponent _VegeNewsPosterComponent_0_5;
  var _expr_0;
  _ViewVegeNewsPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsPageComponent> build() {
    _compView_0 = import20.ViewVegeNewsPosterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _VegeNewsPosterComponent_0_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import21.VegeNewsPosterComponent, () {
            return import21.VegeNewsPosterComponent(parentView.parentView.injectorGet(import16.Messages, parentView.viewData.parentIndex));
          })
        : import21.VegeNewsPosterComponent(parentView.parentView.injectorGet(import16.Messages, parentView.viewData.parentIndex)));
    _compView_0.create0(_VegeNewsPosterComponent_0_5);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_vegeNews = import12.unsafeCast<import22.VegeNews>(locals['\$implicit']);
    final currVal_0 = local_vegeNews;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _VegeNewsPosterComponent_0_5.vegeNews = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_0($event) {
    final local_vegeNews = import12.unsafeCast<import22.VegeNews>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.openEventDetails(local_vegeNews);
  }
}

AppView<void> viewFactory_VegeNewsPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsPageComponent1(parentView, parentIndex);
}

final List<dynamic> styles$VegeNewsPageComponentHost = const [];

class _ViewVegeNewsPageComponentHost0 extends AppView<import2.VegeNewsPageComponent> {
  ViewVegeNewsPageComponent0 _compView_0;
  import2.VegeNewsPageComponent _VegeNewsPageComponent_0_5;
  _ViewVegeNewsPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeNewsPageComponent> build() {
    _compView_0 = ViewVegeNewsPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeNewsPageComponent_0_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import2.VegeNewsPageComponent, () {
            return import2.VegeNewsPageComponent(this.injectorGet(import23.Store, viewData.parentIndex), this.injectorGet(import24.Router, viewData.parentIndex), this.injectorGet(import16.Messages, viewData.parentIndex));
          })
        : import2.VegeNewsPageComponent(this.injectorGet(import23.Store, viewData.parentIndex), this.injectorGet(import24.Router, viewData.parentIndex), this.injectorGet(import16.Messages, viewData.parentIndex)));
    _compView_0.create(_VegeNewsPageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _VegeNewsPageComponent_0_5);
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

AppView<import2.VegeNewsPageComponent> viewFactory_VegeNewsPageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsPageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VegeNewsPageComponent, VegeNewsPageComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
