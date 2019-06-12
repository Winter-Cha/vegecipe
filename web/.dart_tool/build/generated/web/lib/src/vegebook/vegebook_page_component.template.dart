// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegebook_page_component.dart';
export 'vegebook_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../restore_scroll_position.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:web/src/common/loading_view/loading_view_component.template.dart' as _ref3;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref4;
import 'package:web/src/routes.template.dart' as _ref5;
import 'package:web/src/vegebook/vegebook_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegebook_page_component.dart' as import2;
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
import '../common/vegebook_poster/vegebook_poster_component.template.dart' as import20;
import '../common/vegebook_poster/vegebook_poster_component.dart' as import21;
import 'package:core/src/models/vegebook.dart' as import22;
import 'package:redux/src/store.dart' as import23;
import 'package:angular_router/src/router/router.dart' as import24;

final List<dynamic> styles$VegeBookPageComponent = [import0.styles];

class ViewVegeBookPageComponent0 extends AppView<import2.VegeBookPageComponent> {
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
  ViewVegeBookPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import11.document.createElement('vegebook-page');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:web/lib/src/vegebook/vegebook_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
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
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_VegeBookPageComponent1);
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
    final currVal_0 = _ctx.viewModel.vegeBook.isEmpty();
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
    final currVal_3 = _ctx.viewModel.vegeBook.list;
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _NgFor_6_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if ((!import18.AppViewUtils.throwOnChanges)) {
      _NgFor_6_9.ngDoCheck();
    }
    _appEl_6.detectChangesInNestedViews();
    _textBinding_3.updateText(import19.interpolateString0(_ctx.VegeBookTitle));
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
    _ctx.viewModel.refreshVegeBook();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$VegeBookPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeBookPageComponent> _VegeBookPageComponentNgFactory = const ComponentFactory('vegebook-page', viewFactory_VegeBookPageComponentHost0);
ComponentFactory<import2.VegeBookPageComponent> get VegeBookPageComponentNgFactory {
  return _VegeBookPageComponentNgFactory;
}

class _ViewVegeBookPageComponent1 extends AppView<import2.VegeBookPageComponent> {
  import20.ViewVegeBookPosterComponent0 _compView_0;
  import21.VegeBookPosterComponent _VegeBookPosterComponent_0_5;
  var _expr_0;
  _ViewVegeBookPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    _compView_0 = import20.ViewVegeBookPosterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _VegeBookPosterComponent_0_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import21.VegeBookPosterComponent, () {
            return import21.VegeBookPosterComponent(parentView.parentView.injectorGet(import16.Messages, parentView.viewData.parentIndex));
          })
        : import21.VegeBookPosterComponent(parentView.parentView.injectorGet(import16.Messages, parentView.viewData.parentIndex)));
    _compView_0.create0(_VegeBookPosterComponent_0_5);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_vegeBook = import12.unsafeCast<import22.VegeBook>(locals['\$implicit']);
    final currVal_0 = local_vegeBook;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _VegeBookPosterComponent_0_5.vegeBook = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_0($event) {
    final local_vegeBook = import12.unsafeCast<import22.VegeBook>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.openVegeBookDetails(local_vegeBook);
  }
}

AppView<void> viewFactory_VegeBookPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPageComponent1(parentView, parentIndex);
}

final List<dynamic> styles$VegeBookPageComponentHost = const [];

class _ViewVegeBookPageComponentHost0 extends AppView<import2.VegeBookPageComponent> {
  ViewVegeBookPageComponent0 _compView_0;
  import2.VegeBookPageComponent _VegeBookPageComponent_0_5;
  _ViewVegeBookPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    _compView_0 = ViewVegeBookPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeBookPageComponent_0_5 = (import12.isDevMode
        ? import15.debugInjectorWrap(import2.VegeBookPageComponent, () {
            return import2.VegeBookPageComponent(this.injectorGet(import23.Store, viewData.parentIndex), this.injectorGet(import24.Router, viewData.parentIndex), this.injectorGet(import16.Messages, viewData.parentIndex));
          })
        : import2.VegeBookPageComponent(this.injectorGet(import23.Store, viewData.parentIndex), this.injectorGet(import24.Router, viewData.parentIndex), this.injectorGet(import16.Messages, viewData.parentIndex)));
    _compView_0.create(_VegeBookPageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _VegeBookPageComponent_0_5);
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

AppView<import2.VegeBookPageComponent> viewFactory_VegeBookPageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VegeBookPageComponent, VegeBookPageComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
