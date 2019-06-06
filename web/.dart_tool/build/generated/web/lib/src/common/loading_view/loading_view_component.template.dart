// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'loading_view_component.dart';
export 'loading_view_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/loading_view/spinner_component.template.dart' as _ref1;
import 'package:web/src/common/loading_view/loading_view_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'loading_view_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'spinner_component.template.dart' as import13;
import 'spinner_component.dart' as import14;
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/text_binding.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:core/src/i18n/messages.dart' as import19;

final List<dynamic> styles$LoadingViewComponent = [import0.styles];

class ViewLoadingViewComponent0 extends AppView<import2.LoadingViewComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  static import5.ComponentStyles _componentStyles;
  ViewLoadingViewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('loading-view');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/common/loading_view/loading_view_component.dart' : null);
  }

  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import8.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_LoadingViewComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_LoadingViewComponent2);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import11.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_LoadingViewComponent3);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.loadingContentPresent;
    _NgIf_2_9.ngIf = _ctx.successContentPresent;
    _NgIf_3_9.ngIf = _ctx.errorContentPresent;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$LoadingViewComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.LoadingViewComponent> _LoadingViewComponentNgFactory = const ComponentFactory('loading-view', viewFactory_LoadingViewComponentHost0);
ComponentFactory<import2.LoadingViewComponent> get LoadingViewComponentNgFactory {
  return _LoadingViewComponentNgFactory;
}

class _ViewLoadingViewComponent1 extends AppView<import2.LoadingViewComponent> {
  import13.ViewSpinnerComponent0 _compView_1;
  import14.SpinnerComponent _SpinnerComponent_1_5;
  bool _expr_0;
  import8.DivElement _el_0;
  _ViewLoadingViewComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'loading-content');
    addShimC(_el_0);
    _compView_1 = import13.ViewSpinnerComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _SpinnerComponent_1_5 = import14.SpinnerComponent();
    _compView_1.create0(_SpinnerComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.loadingContentVisible;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_LoadingViewComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponent1(parentView, parentIndex);
}

class _ViewLoadingViewComponent2 extends AppView<import2.LoadingViewComponent> {
  bool _expr_0;
  import8.DivElement _el_0;
  _ViewLoadingViewComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'success-content');
    addShimC(_el_0);
    project(_el_0, 0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.successContentVisible;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_LoadingViewComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponent2(parentView, parentIndex);
}

class _ViewLoadingViewComponent3 extends AppView<import2.LoadingViewComponent> {
  final import16.TextBinding _textBinding_4 = import16.TextBinding();
  final import16.TextBinding _textBinding_6 = import16.TextBinding();
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  bool _expr_0;
  import8.DivElement _el_0;
  _ViewLoadingViewComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'error-content');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'icon');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'img');
    import11.setAttribute(_el_2, 'src', 'images/info.svg');
    addShimE(_el_2);
    final _el_3 = import11.appendElement(doc, _el_0, 'h2');
    this.updateChildClass(_el_3, 'title');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    final _el_5 = import11.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_5, 'message');
    addShimE(_el_5);
    _el_5.append(_textBinding_6.element);
    final _el_7 = import11.appendElement(doc, _el_5, 'br');
    addShimE(_el_7);
    final _text_8 = import11.appendText(_el_5, ' ');
    final _anchor_9 = import11.appendAnchor(_el_5);
    _appEl_9 = ViewContainer(9, 5, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_LoadingViewComponent4);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import11.appendAnchor(_el_0);
    _appEl_10 = ViewContainer(10, 0, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_LoadingViewComponent5);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_9_9.ngIf = (!_ctx.contentEmpty);
    _NgIf_10_9.ngIf = (!_ctx.contentEmpty);
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    final currVal_0 = _ctx.errorContentVisible;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_4.updateText(import17.interpolate0((_ctx.emptyTitle ?? (_ctx.errorTitle ?? _ctx.messages.oops))));
    _textBinding_6.updateText(import17.interpolate0((_ctx.emptyMessage ?? (_ctx.errorMessage ?? _ctx.messages.loadingMoviesError))));
  }

  @override
  void destroyInternal() {
    _appEl_9.destroyNestedViews();
    _appEl_10.destroyNestedViews();
  }
}

AppView<void> viewFactory_LoadingViewComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponent3(parentView, parentIndex);
}

class _ViewLoadingViewComponent4 extends AppView<import2.LoadingViewComponent> {
  _ViewLoadingViewComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('small');
    addShimE(_el_0);
    final _text_1 = import11.appendText(_el_0, '(this might be caused by your ad blocker)');
    init1(_el_0);
  }
}

AppView<void> viewFactory_LoadingViewComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponent4(parentView, parentIndex);
}

class _ViewLoadingViewComponent5 extends AppView<import2.LoadingViewComponent> {
  final import16.TextBinding _textBinding_1 = import16.TextBinding();
  _ViewLoadingViewComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('a');
    this.updateChildClass(_el_0, 'try-again');
    import11.setAttribute(_el_0, 'href', '#');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    _el_0.addEventListener('click', eventHandler1(_ctx.onTryAgainClicked));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import17.interpolateString0(_ctx.messages.tryAgain));
  }
}

AppView<void> viewFactory_LoadingViewComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponent5(parentView, parentIndex);
}

final List<dynamic> styles$LoadingViewComponentHost = const [];

class _ViewLoadingViewComponentHost0 extends AppView<import2.LoadingViewComponent> {
  ViewLoadingViewComponent0 _compView_0;
  import2.LoadingViewComponent _LoadingViewComponent_0_5;
  _ViewLoadingViewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.LoadingViewComponent> build() {
    _compView_0 = ViewLoadingViewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _LoadingViewComponent_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import2.LoadingViewComponent, () {
            return import2.LoadingViewComponent(this.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import2.LoadingViewComponent(this.injectorGet(import19.Messages, viewData.parentIndex)));
    _compView_0.create(_LoadingViewComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _LoadingViewComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _LoadingViewComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.LoadingViewComponent> viewFactory_LoadingViewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewLoadingViewComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(LoadingViewComponent, LoadingViewComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
