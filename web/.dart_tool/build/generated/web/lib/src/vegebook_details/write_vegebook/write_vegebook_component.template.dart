// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'write_vegebook_component.dart';
export 'write_vegebook_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button_base.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref4;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref5;
import 'package:web/src/routes.template.dart' as _ref6;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref7;
import 'package:web/src/vegebook_details/write_vegebook/write_vegebook_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'write_vegebook_component.dart' as import2;
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
import 'package:angular/src/runtime/text_binding.dart' as import13;
import '../landscape_image/vegebook_landscape_image_component.template.dart' as import14;
import '../landscape_image/vegebook_landscape_image_component.dart' as import15;
import 'package:angular_components/material_button/material_button.template.dart' as import16;
import 'package:angular_components/material_button/material_button.dart' as import17;
import '../../common/vegebook_poster/vegebook_poster_component.template.dart' as import18;
import '../../common/vegebook_poster/vegebook_poster_component.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_components/theme/dark_theme.dart' as import21;
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'package:core/src/i18n/messages.dart' as import23;
import 'package:angular_components/button_decorator/button_decorator.dart' as import24;
import 'package:angular_components/interfaces/has_disabled.dart' as import25;
import 'package:angular/src/core/linker/app_view_utils.dart' as import26;
import 'package:angular/src/runtime/interpolate.dart' as import27;
import 'package:redux/src/store.dart' as import28;
import 'package:angular_router/src/router/router.dart' as import29;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewWriteVegeBookComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('write-vegebook');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/vegebook_details/write_vegebook/write_vegebook_component.dart' : null);
  }

  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_WriteVegeBookComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.vegeBook != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$WriteVegeBookComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.WriteVegeBookComponent> _WriteVegeBookComponentNgFactory = const ComponentFactory('write-vegebook', viewFactory_WriteVegeBookComponentHost0);
ComponentFactory<import2.WriteVegeBookComponent> get WriteVegeBookComponentNgFactory {
  return _WriteVegeBookComponentNgFactory;
}

class _ViewWriteVegeBookComponent1 extends AppView<import2.WriteVegeBookComponent> {
  final import13.TextBinding _textBinding_11 = import13.TextBinding();
  import14.ViewVegeBookLandscapeImageComponent0 _compView_1;
  import15.VegeBookLandscapeImageComponent _VegeBookLandscapeImageComponent_1_5;
  import16.ViewMaterialButtonComponent0 _compView_3;
  dynamic _AcxDarkTheme_3_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_3_6;
  import16.ViewMaterialButtonComponent0 _compView_5;
  dynamic _AcxDarkTheme_5_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_5_6;
  import18.ViewVegeBookPosterComponent0 _compView_8;
  import19.VegeBookPosterComponent _VegeBookPosterComponent_8_5;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  bool _expr_0;
  var _expr_1;
  var _expr_4;
  import8.DivElement _el_0;
  _ViewWriteVegeBookComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    _compView_1 = import14.ViewVegeBookLandscapeImageComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _VegeBookLandscapeImageComponent_1_5 = import15.VegeBookLandscapeImageComponent();
    _compView_1.create0(_VegeBookLandscapeImageComponent_1_5);
    final _el_2 = import11.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_2, 'back');
    import11.setAttribute(_el_2, 'src', 'images/back.svg');
    addShimE(_el_2);
    _compView_3 = import16.ViewMaterialButtonComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    this.updateChildClassNonHtml(_el_3, 'blue add-post-image');
    import11.setAttribute(_el_3, 'raised', '');
    addShimC(_el_3);
    _AcxDarkTheme_3_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.injectorGetOptional(const import22.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import21.AcxDarkTheme(parentView.injectorGetOptional(const import22.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_3_6 = import17.MaterialButtonComponent(_el_3, _AcxDarkTheme_3_5, _compView_3, null);
    final _text_4 = import11.createText('Add post image');
    _compView_3.create(_MaterialButtonComponent_3_6, [
      [_text_4]
    ]);
    _compView_5 = import16.ViewMaterialButtonComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    this.updateChildClassNonHtml(_el_5, 'blue add-landscape-image');
    import11.setAttribute(_el_5, 'raised', '');
    addShimC(_el_5);
    _AcxDarkTheme_5_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.injectorGetOptional(const import22.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import21.AcxDarkTheme(parentView.injectorGetOptional(const import22.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_5_6 = import17.MaterialButtonComponent(_el_5, _AcxDarkTheme_5_5, _compView_5, null);
    final _text_6 = import11.createText('Add Landscape image');
    _compView_5.create(_MaterialButtonComponent_5_6, [
      [_text_6]
    ]);
    final _el_7 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_7, 'vegebook-header');
    addShimC(_el_7);
    _compView_8 = import18.ViewVegeBookPosterComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_7.append(_el_8);
    addShimC(_el_8);
    _VegeBookPosterComponent_8_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import19.VegeBookPosterComponent, () {
            return import19.VegeBookPosterComponent(parentView.injectorGet(import23.Messages, viewData.parentIndex));
          })
        : import19.VegeBookPosterComponent(parentView.injectorGet(import23.Messages, viewData.parentIndex)));
    _compView_8.create0(_VegeBookPosterComponent_8_5);
    final _el_9 = import11.appendDiv(doc, _el_7);
    this.updateChildClass(_el_9, 'vegebook-information');
    addShimC(_el_9);
    final _el_10 = import11.appendElement(doc, _el_9, 'h2');
    this.updateChildClass(_el_10, 'title');
    addShimE(_el_10);
    _el_10.append(_textBinding_11.element);
    final _el_12 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_12, 'body');
    addShimC(_el_12);
    final _anchor_13 = import11.appendAnchor(_el_12);
    _appEl_13 = ViewContainer(13, 12, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_WriteVegeBookComponent2);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _anchor_14 = import11.appendAnchor(_el_0);
    _appEl_14 = ViewContainer(14, 0, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_WriteVegeBookComponent3);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    _el_2.addEventListener('click', eventHandler0(_ctx.goBack));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((3 <= nodeIndex) && (nodeIndex <= 4))) {
      if (identical(token, import21.AcxDarkTheme)) {
        return _AcxDarkTheme_3_5;
      }
      if (((identical(token, import17.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled))) {
        return _MaterialButtonComponent_3_6;
      }
    }
    if (((5 <= nodeIndex) && (nodeIndex <= 6))) {
      if (identical(token, import21.AcxDarkTheme)) {
        return _AcxDarkTheme_5_5;
      }
      if (((identical(token, import17.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled))) {
        return _MaterialButtonComponent_5_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.vegeBook;
    if (import26.checkBinding(_expr_1, currVal_1)) {
      _VegeBookLandscapeImageComponent_1_5.vegeBook = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import26.AppViewUtils.throwOnChanges) && firstCheck)) {
      _VegeBookLandscapeImageComponent_1_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_3_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_5_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (firstCheck) {
      _VegeBookPosterComponent_8_5.hasDetails = false;
      _VegeBookPosterComponent_8_5.isTouchable = false;
    }
    final currVal_4 = _ctx.vegeBook;
    if (import26.checkBinding(_expr_4, currVal_4)) {
      _VegeBookPosterComponent_8_5.vegeBook = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgIf_13_9.ngIf = (_ctx.vegeBook.writtenBy != null);
    _NgIf_14_9.ngIf = _ctx.vegeBook.hasContent;
    _appEl_13.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    final currVal_0 = _ctx.contentVisible;
    if (import26.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_5.detectHostChanges(firstCheck);
    _textBinding_11.updateText(import27.interpolateString0(_ctx.vegeBook.title));
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    _compView_5.detectChanges();
    _compView_8.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_13.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_3.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_8.destroyInternalState();
    _VegeBookLandscapeImageComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent1(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent2 extends AppView<import2.WriteVegeBookComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  final import13.TextBinding _textBinding_4 = import13.TextBinding();
  _ViewWriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'writtenBy');
    addShimE(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'strong');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _text_3 = import11.appendText(_el_0, ': ');
    _el_0.append(_textBinding_4.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import27.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_4.updateText(import27.interpolateString0(_ctx.vegeBook.writtenBy));
  }
}

AppView<void> viewFactory_WriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent2(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent3 extends AppView<import2.WriteVegeBookComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  _ViewWriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'section');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'centered-content');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'p');
    this.updateChildClass(_el_2, 'content');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import27.interpolateString0(_ctx.vegeBook.content));
  }
}

AppView<void> viewFactory_WriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent3(parentView, parentIndex);
}

final List<dynamic> styles$WriteVegeBookComponentHost = const [];

class _ViewWriteVegeBookComponentHost0 extends AppView<import2.WriteVegeBookComponent> {
  ViewWriteVegeBookComponent0 _compView_0;
  import2.WriteVegeBookComponent _WriteVegeBookComponent_0_5;
  _ViewWriteVegeBookComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = ViewWriteVegeBookComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WriteVegeBookComponent_0_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import28.Store, viewData.parentIndex), this.injectorGet(import29.Router, viewData.parentIndex), this.injectorGet(import23.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import28.Store, viewData.parentIndex), this.injectorGet(import29.Router, viewData.parentIndex), this.injectorGet(import23.Messages, viewData.parentIndex)));
    _compView_0.create(_WriteVegeBookComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WriteVegeBookComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import26.AppViewUtils.throwOnChanges) && firstCheck)) {
      _WriteVegeBookComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _WriteVegeBookComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.WriteVegeBookComponent> viewFactory_WriteVegeBookComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WriteVegeBookComponent, WriteVegeBookComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
