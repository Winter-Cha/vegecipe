// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegebook_page_component.dart';
export 'vegebook_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../restore_scroll_position.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:web/src/common/loading_view/loading_view_component.template.dart' as _ref4;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref5;
import 'package:web/src/routes.template.dart' as _ref6;
import 'package:web/src/vegebook/vegebook_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegebook_page_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../common/loading_view/loading_view_component.template.dart' as import6;
import '../common/loading_view/loading_view_component.dart' as import7;
import 'package:angular/src/common/directives/ng_for.dart' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import17;
import 'package:core/src/i18n/messages.dart' as import18;
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import 'package:angular_components/material_button/material_button.template.dart' as import21;
import 'package:angular_components/material_button/material_button.dart' as import22;
import 'package:angular_components/theme/dark_theme.dart' as import23;
import 'package:angular/src/core/di/opaque_token.dart' as import24;
import 'package:angular_components/button_decorator/button_decorator.dart' as import25;
import 'package:angular_components/interfaces/has_disabled.dart' as import26;
import '../common/vegebook_poster/vegebook_poster_component.template.dart' as import27;
import '../common/vegebook_poster/vegebook_poster_component.dart' as import28;
import 'package:core/src/models/vegebook.dart' as import29;
import 'package:redux/src/store.dart' as import30;
import 'package:angular_router/src/router/router.dart' as import31;

final List<dynamic> styles$VegeBookPageComponent = [import0.styles];

class ViewVegeBookPageComponent0 extends AppView<import2.VegeBookPageComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import6.ViewLoadingViewComponent0 _compView_5;
  import7.LoadingViewComponent _LoadingViewComponent_5_5;
  ViewContainer _appEl_7;
  import8.NgFor _NgFor_7_9;
  bool _expr_1;
  String _expr_2;
  var _expr_3;
  var _expr_4;
  static import9.ComponentStyles _componentStyles;
  ViewVegeBookPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import12.document.createElement('vegebook-page');
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:web/lib/src/vegebook/vegebook_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    final _rootEl = rootEl;
    final import12.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import12.document;
    final _el_0 = import15.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content-wrapper');
    addShimC(_el_0);
    final _el_1 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'page-title');
    addShimC(_el_1);
    final _el_2 = import15.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _anchor_4 = import15.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_VegeBookPageComponent1);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    _compView_5 = import6.ViewLoadingViewComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    addShimC(_el_5);
    _LoadingViewComponent_5_5 = (import13.isDevMode
        ? import17.debugInjectorWrap(import7.LoadingViewComponent, () {
            return import7.LoadingViewComponent(parentView.injectorGet(import18.Messages, viewData.parentIndex));
          })
        : import7.LoadingViewComponent(parentView.injectorGet(import18.Messages, viewData.parentIndex)));
    final _el_6 = doc.createElement('div');
    this.updateChildClass(_el_6, 'grid-container');
    addShimC(_el_6);
    final _anchor_7 = import15.appendAnchor(_el_6);
    _appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_VegeBookPageComponent2);
    _NgFor_7_9 = import8.NgFor(_appEl_7, _TemplateRef_7_8);
    _compView_5.create(_LoadingViewComponent_5_5, [
      [_el_6]
    ]);
    final subscription_0 = _LoadingViewComponent_5_5.actionButtonClicked.listen(eventHandler1(_handle_actionButtonClicked_5_0));
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_4_9.ngIf = (!_ctx.isAuthenticated());
    final currVal_1 = _ctx.viewModel.vegeBook.isEmpty();
    if (import19.checkBinding(_expr_1, currVal_1)) {
      _LoadingViewComponent_5_5.contentEmpty = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.messages.errorLoadingEvents;
    if (import19.checkBinding(_expr_2, currVal_2)) {
      _LoadingViewComponent_5_5.errorMessage = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.viewModel.status;
    if (import19.checkBinding(_expr_3, currVal_3)) {
      _LoadingViewComponent_5_5.status = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.viewModel.vegeBook.list;
    if (import19.checkBinding(_expr_4, currVal_4)) {
      _NgFor_7_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import19.AppViewUtils.throwOnChanges)) {
      _NgFor_7_9.ngDoCheck();
    }
    _appEl_4.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _textBinding_3.updateText(import20.interpolateString0(_ctx.VegeBookTitle));
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_5.destroyInternalState();
    _LoadingViewComponent_5_5.ngOnDestroy();
  }

  void _handle_actionButtonClicked_5_0($event) {
    final _ctx = ctx;
    _ctx.viewModel.refreshVegeBook();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$VegeBookPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeBookPageComponent> _VegeBookPageComponentNgFactory = const ComponentFactory('vegebook-page', viewFactory_VegeBookPageComponentHost0);
ComponentFactory<import2.VegeBookPageComponent> get VegeBookPageComponentNgFactory {
  return _VegeBookPageComponentNgFactory;
}

class _ViewVegeBookPageComponent1 extends AppView<import2.VegeBookPageComponent> {
  import21.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import22.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewVegeBookPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    final _ctx = ctx;
    _compView_0 = import21.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'blue');
    import15.setAttribute(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import13.isDevMode
        ? import17.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import22.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final _text_1 = import15.createText('Write book');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    _el_0.addEventListener('click', eventHandler0(_ctx.writeBook));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import23.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import22.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) || identical(token, import26.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_VegeBookPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPageComponent1(parentView, parentIndex);
}

class _ViewVegeBookPageComponent2 extends AppView<import2.VegeBookPageComponent> {
  import27.ViewVegeBookPosterComponent0 _compView_0;
  import28.VegeBookPosterComponent _VegeBookPosterComponent_0_5;
  var _expr_0;
  _ViewVegeBookPageComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    _compView_0 = import27.ViewVegeBookPosterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _VegeBookPosterComponent_0_5 = (import13.isDevMode
        ? import17.debugInjectorWrap(import28.VegeBookPosterComponent, () {
            return import28.VegeBookPosterComponent(parentView.parentView.injectorGet(import18.Messages, parentView.viewData.parentIndex));
          })
        : import28.VegeBookPosterComponent(parentView.parentView.injectorGet(import18.Messages, parentView.viewData.parentIndex)));
    _compView_0.create0(_VegeBookPosterComponent_0_5);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_vegeBook = import13.unsafeCast<import29.VegeBook>(locals['\$implicit']);
    final currVal_0 = local_vegeBook;
    if (import19.checkBinding(_expr_0, currVal_0)) {
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
    final local_vegeBook = import13.unsafeCast<import29.VegeBook>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.openVegeBookDetails(local_vegeBook);
  }
}

AppView<void> viewFactory_VegeBookPageComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPageComponent2(parentView, parentIndex);
}

final List<dynamic> styles$VegeBookPageComponentHost = const [];

class _ViewVegeBookPageComponentHost0 extends AppView<import2.VegeBookPageComponent> {
  ViewVegeBookPageComponent0 _compView_0;
  import2.VegeBookPageComponent _VegeBookPageComponent_0_5;
  _ViewVegeBookPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeBookPageComponent> build() {
    _compView_0 = ViewVegeBookPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeBookPageComponent_0_5 = (import13.isDevMode
        ? import17.debugInjectorWrap(import2.VegeBookPageComponent, () {
            return import2.VegeBookPageComponent(this.injectorGet(import30.Store, viewData.parentIndex), this.injectorGet(import31.Router, viewData.parentIndex), this.injectorGet(import18.Messages, viewData.parentIndex));
          })
        : import2.VegeBookPageComponent(this.injectorGet(import30.Store, viewData.parentIndex), this.injectorGet(import31.Router, viewData.parentIndex), this.injectorGet(import18.Messages, viewData.parentIndex)));
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
  _ref6.initReflector();
}
