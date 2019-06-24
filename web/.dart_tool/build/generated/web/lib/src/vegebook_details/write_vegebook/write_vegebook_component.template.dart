// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'write_vegebook_component.dart';
export 'write_vegebook_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:angular_forms/angular_forms.template.dart' as _ref3;
import 'package:angular_quill/angular_quill.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref6;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref7;
import 'package:web/src/routes.template.dart' as _ref8;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref9;
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
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/queries.dart' as import14;
import 'package:angular_components/material_button/material_button.template.dart' as import15;
import 'package:angular_components/material_button/material_button.dart' as import16;
import 'package:angular_components/material_input/material_input.template.dart' as import17;
import 'package:angular_components/material_input/deferred_validator.dart' as import18;
import 'package:angular_forms/src/directives/validators.dart' as import19;
import 'package:angular_forms/src/directives/ng_model.dart' as import20;
import 'package:angular_components/material_input/material_input.dart' as import21;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import22;
import 'package:angular_quill/src/quill/quill_component.template.dart' as import23;
import 'package:angular_quill/src/quill/quill_component.dart' as import24;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import25;
import 'package:angular/src/di/errors.dart' as import26;
import 'package:angular_components/theme/dark_theme.dart' as import27;
import 'package:angular/src/core/di/opaque_token.dart' as import28;
import 'package:angular/src/runtime/interpolate.dart' as import29;
import 'package:angular_components/button_decorator/button_decorator.dart' as import30;
import 'package:angular_components/interfaces/has_disabled.dart' as import31;
import 'package:angular_forms/src/directives/ng_control.dart' as import32;
import 'package:angular_components/material_input/base_material_input.dart' as import33;
import 'package:angular_components/utils/angular/reference/reference.dart' as import34;
import 'package:angular_components/focus/focus_interface.dart' as import35;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import36;
import 'package:angular/src/runtime/text_binding.dart' as import37;
import 'package:redux/src/store.dart' as import38;
import 'package:angular_router/src/router/router.dart' as import39;
import 'package:core/src/i18n/messages.dart' as import40;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  bool _query_landscapeImage_1_0_isDirty = true;
  bool _query_posterImage_1_1_isDirty = true;
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
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_landscapeImage_1_0_isDirty) {
        _ctx.landscapeImageElement = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewWriteVegeBookComponent1 nestedView) {
          return [nestedView._el_4];
        }));
        _query_landscapeImage_1_0_isDirty = false;
      }
      if (_query_posterImage_1_1_isDirty) {
        _ctx.posterImageElement = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewWriteVegeBookComponent1 nestedView) {
          return [nestedView._el_15];
        }));
        _query_posterImage_1_1_isDirty = false;
      }
    }
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
  import15.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import16.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import15.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import16.MaterialButtonComponent _MaterialButtonComponent_8_6;
  import15.ViewMaterialButtonComponent0 _compView_16;
  dynamic _AcxDarkTheme_16_5;
  import16.MaterialButtonComponent _MaterialButtonComponent_16_6;
  import17.ViewMaterialInputComponent0 _compView_20;
  import18.DeferredValidator _DeferredValidator_20_5;
  import19.RequiredValidator _RequiredValidator_20_6;
  List<dynamic> _NgValidators_20_7;
  import20.NgModel _NgModel_20_8;
  import21.MaterialInputComponent _MaterialInputComponent_20_10;
  import22.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_20_12;
  ViewContainer _appEl_22;
  NgIf _NgIf_22_9;
  import23.ViewQuillComponent0 _compView_25;
  import24.QuillComponent _QuillComponent_25_5;
  import24.QuillValueAccessor _QuillValueAccessor_25_6;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_25_7;
  import20.NgModel _NgModel_25_8;
  bool _expr_0;
  var _expr_1;
  var _expr_5;
  import8.Element _el_4;
  import8.Element _el_15;
  import8.DivElement _el_0;
  import8.Element _el_14;
  import8.InputElement _el_10;
  import8.InputElement _el_18;
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
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'landscape-container');
    addShimC(_el_1);
    final _el_2 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'landscape-placeholder');
    addShimC(_el_2);
    final _el_3 = import11.appendElement(doc, _el_2, 'img');
    import11.setAttribute(_el_3, 'src', 'images/fallback-icon.svg');
    addShimE(_el_3);
    _el_4 = import11.appendElement(doc, _el_1, 'img');
    this.updateChildClass(_el_4, 'landscape-actual');
    addShimE(_el_4);
    final _el_5 = import11.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_5, 'back');
    import11.setAttribute(_el_5, 'src', 'images/back.svg');
    addShimE(_el_5);
    _compView_6 = import15.ViewMaterialButtonComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_0.append(_el_6);
    this.updateChildClassNonHtml(_el_6, 'blue add-landscape-image');
    import11.setAttribute(_el_6, 'raised', '');
    import11.setAttribute(_el_6, 'type', 'file');
    addShimC(_el_6);
    _AcxDarkTheme_6_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_6_6 = import16.MaterialButtonComponent(_el_6, _AcxDarkTheme_6_5, _compView_6, null);
    final _text_7 = import11.createText('Add Landscape image');
    _compView_6.create(_MaterialButtonComponent_6_6, [
      [_text_7]
    ]);
    _compView_8 = import15.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_0.append(_el_8);
    this.updateChildClassNonHtml(_el_8, 'red save-btn');
    import11.setAttribute(_el_8, 'raised', '');
    import11.setAttribute(_el_8, 'type', 'file');
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_8_6 = import16.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8, null);
    final _text_9 = import11.createText('Save');
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_text_9]
    ]);
    _el_10 = import11.appendElement(doc, _el_0, 'input');
    import11.setAttribute(_el_10, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_10, 'hidden', '');
    import11.setAttribute(_el_10, 'type', 'file');
    addShimC(_el_10);
    final _el_11 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_11, 'vegebook-header');
    addShimC(_el_11);
    final _el_12 = import11.appendDiv(doc, _el_11);
    this.updateChildClass(_el_12, 'vegebook-poster');
    addShimC(_el_12);
    final _el_13 = import11.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'fallback-icon');
    addShimC(_el_13);
    _el_14 = import11.appendElement(doc, _el_13, 'img');
    import11.setAttribute(_el_14, 'src', 'images/fallback-icon.svg');
    addShimE(_el_14);
    _el_15 = import11.appendElement(doc, _el_12, 'img');
    this.updateChildClass(_el_15, 'poster-actual');
    addShimE(_el_15);
    _compView_16 = import15.ViewMaterialButtonComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    _el_12.append(_el_16);
    this.updateChildClassNonHtml(_el_16, 'blue add-post-image');
    import11.setAttribute(_el_16, 'raised', '');
    addShimC(_el_16);
    _AcxDarkTheme_16_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import27.AcxDarkTheme, () {
            return import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import27.AcxDarkTheme(parentView.injectorGetOptional(const import28.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_16_6 = import16.MaterialButtonComponent(_el_16, _AcxDarkTheme_16_5, _compView_16, null);
    final _text_17 = import11.createText('Add post');
    _compView_16.create(_MaterialButtonComponent_16_6, [
      [_text_17]
    ]);
    _el_18 = import11.appendElement(doc, _el_12, 'input');
    import11.setAttribute(_el_18, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_18, 'hidden', '');
    import11.setAttribute(_el_18, 'type', 'file');
    addShimC(_el_18);
    final _el_19 = import11.appendDiv(doc, _el_11);
    this.updateChildClass(_el_19, 'vegebook-information');
    addShimC(_el_19);
    _compView_20 = import17.ViewMaterialInputComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_19.append(_el_20);
    this.updateChildClassNonHtml(_el_20, import29.interpolateString2('', 'title', ' ', import21.MaterialInputComponent.hostClass, ''));
    import11.setAttribute(_el_20, 'floatingLabel', '');
    import11.setAttribute(_el_20, 'label', 'Type title [required]');
    import11.setAttribute(_el_20, 'required', '');
    import11.setAttribute(_el_20, 'requiredErrorMsg', 'This input requires a value!');
    import11.setAttribute(_el_20, 'type', 'text');
    addShimC(_el_20);
    _DeferredValidator_20_5 = import18.DeferredValidator();
    _RequiredValidator_20_6 = import19.RequiredValidator();
    _NgValidators_20_7 = [_DeferredValidator_20_5, _RequiredValidator_20_6];
    _NgModel_20_8 = import20.NgModel(_NgValidators_20_7, null);
    _MaterialInputComponent_20_10 = import21.MaterialInputComponent('text', null, null, _NgModel_20_8, _compView_20, _DeferredValidator_20_5);
    _MaterialInputDefaultValueAccessor_20_12 = import22.MaterialInputDefaultValueAccessor(_MaterialInputComponent_20_10, _NgModel_20_8);
    _compView_20.create(_MaterialInputComponent_20_10, [const [], const []]);
    final _el_21 = import11.appendDiv(doc, _el_19);
    this.updateChildClass(_el_21, 'body');
    addShimC(_el_21);
    final _anchor_22 = import11.appendAnchor(_el_21);
    _appEl_22 = ViewContainer(22, 21, this, _anchor_22);
    TemplateRef _TemplateRef_22_8 = TemplateRef(_appEl_22, viewFactory_WriteVegeBookComponent2);
    _NgIf_22_9 = NgIf(_appEl_22, _TemplateRef_22_8);
    final _el_23 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_23, 'section');
    addShimC(_el_23);
    final _el_24 = import11.appendDiv(doc, _el_23);
    this.updateChildClass(_el_24, 'centered-content');
    addShimC(_el_24);
    _compView_25 = import23.ViewQuillComponent0(this, 25);
    final _el_25 = _compView_25.rootEl;
    _el_24.append(_el_25);
    this.updateChildClassNonHtml(_el_25, 'quill_pad');
    import11.setAttribute(_el_25, 'placeholder', 'Write something...');
    addShimC(_el_25);
    _QuillComponent_25_5 = import24.QuillComponent();
    _QuillValueAccessor_25_6 = import24.QuillValueAccessor(_QuillComponent_25_5);
    _NgValueAccessor_25_7 = [_QuillValueAccessor_25_6];
    _NgModel_25_8 = import20.NgModel(null, _NgValueAccessor_25_7);
    _compView_25.create0(_QuillComponent_25_5);
    _el_5.addEventListener('click', eventHandler0(_ctx.goBack));
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    _el_8.addEventListener('click', eventHandler0(_ctx.submit));
    _el_10.addEventListener('change', eventHandler1(_ctx.onLandscapeImageFileSelected));
    _el_16.addEventListener('click', eventHandler1(_handle_click_16_0));
    _el_18.addEventListener('change', eventHandler1(_ctx.onPosterImageFileSelected));
    final subscription_0 = _NgModel_20_8.update.listen(eventHandler1(_handle_ngModelChange_20_0));
    final subscription_1 = _QuillComponent_25_5.blur.listen(eventHandler0(_ctx.blur));
    final subscription_2 = _QuillComponent_25_5.input.listen(eventHandler0(_ctx.input));
    final subscription_3 = _NgModel_25_8.update.listen(eventHandler1(_handle_ngModelChange_25_2));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 7))) {
      if (identical(token, import27.AcxDarkTheme)) {
        return _AcxDarkTheme_6_5;
      }
      if (((identical(token, import16.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import31.HasDisabled))) {
        return _MaterialButtonComponent_6_6;
      }
    }
    if (((8 <= nodeIndex) && (nodeIndex <= 9))) {
      if (identical(token, import27.AcxDarkTheme)) {
        return _AcxDarkTheme_8_5;
      }
      if (((identical(token, import16.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import31.HasDisabled))) {
        return _MaterialButtonComponent_8_6;
      }
    }
    if (((16 <= nodeIndex) && (nodeIndex <= 17))) {
      if (identical(token, import27.AcxDarkTheme)) {
        return _AcxDarkTheme_16_5;
      }
      if (((identical(token, import16.MaterialButtonComponent) || identical(token, import30.ButtonDirective)) || identical(token, import31.HasDisabled))) {
        return _MaterialButtonComponent_16_6;
      }
    }
    if ((20 == nodeIndex)) {
      if (identical(token, import18.DeferredValidator)) {
        return _DeferredValidator_20_5;
      }
      if (identical(token, const import28.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_20_7;
      }
      if ((identical(token, import20.NgModel) || identical(token, import32.NgControl))) {
        return _NgModel_20_8;
      }
      if (((((identical(token, import21.MaterialInputComponent) || identical(token, import33.BaseMaterialInput)) || identical(token, import34.ReferenceDirective)) || identical(token, import35.Focusable)) || identical(token, import31.HasDisabled))) {
        return _MaterialInputComponent_20_10;
      }
    }
    if ((25 == nodeIndex)) {
      if (identical(token, const import28.MultiToken<import36.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_25_7;
      }
      if ((identical(token, import20.NgModel) || identical(token, import32.NgControl))) {
        return _NgModel_25_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_6_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_8_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_16_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    if (firstCheck) {
      (_RequiredValidator_20_6.required = true);
    }
    changed = false;
    _NgModel_20_8.model = _ctx.title;
    _NgModel_20_8.ngAfterChanges();
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_20_8.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_20_10.label = 'Type title [required]';
      changed = true;
      _MaterialInputComponent_20_10.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_20_10.requiredErrorMsg = 'This input requires a value!';
      changed = true;
      _MaterialInputComponent_20_10.required = true;
      changed = true;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    _NgIf_22_9.ngIf = (_ctx.vegeBook.writtenBy != null);
    if (firstCheck) {
      (_QuillComponent_25_5.placeholder = 'Write something...');
    }
    changed = false;
    _NgModel_25_8.model = _ctx.htmlStr;
    _NgModel_25_8.ngAfterChanges();
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_25_8.ngOnInit();
    }
    _appEl_22.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _QuillComponent_25_5.ngAfterContentInit();
      }
    }
    final currVal_0 = _ctx.contentVisible;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.landscapeImageSrc;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_4, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
      _expr_1 = currVal_1;
    }
    _compView_6.detectHostChanges(firstCheck);
    _compView_8.detectHostChanges(firstCheck);
    if (firstCheck) {
      import11.setProperty(_el_14, 'alt', 'Fallback image');
    }
    final currVal_5 = _ctx.posterImageSrc;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      import11.setProperty(_el_15, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_5));
      _expr_5 = currVal_5;
    }
    _compView_16.detectHostChanges(firstCheck);
    _compView_6.detectChanges();
    _compView_8.detectChanges();
    _compView_16.detectChanges();
    _compView_20.detectChanges();
    _compView_25.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_20_10.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewWriteVegeBookComponent0>(parentView)._query_landscapeImage_1_0_isDirty = true;
    import9.unsafeCast<ViewWriteVegeBookComponent0>(parentView)._query_posterImage_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_22.destroyNestedViews();
    _compView_6.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_16.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_25.destroyInternalState();
    _MaterialInputComponent_20_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_20_12.ngOnDestroy();
    _QuillComponent_25_5.ngOnDestroy();
    _QuillValueAccessor_25_6.ngOnDestroy();
  }

  void _handle_click_6_0($event) {
    final local_landscapeImagefileInput = _el_10;
    local_landscapeImagefileInput.click();
  }

  void _handle_click_16_0($event) {
    final local_posterImagefileInput = _el_18;
    local_posterImagefileInput.click();
  }

  void _handle_ngModelChange_20_0($event) {
    final _ctx = ctx;
    _ctx.title = $event;
  }

  void _handle_ngModelChange_25_2($event) {
    final _ctx = ctx;
    _ctx.htmlStr = $event;
  }
}

AppView<void> viewFactory_WriteVegeBookComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent1(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent2 extends AppView<import2.WriteVegeBookComponent> {
  final import37.TextBinding _textBinding_2 = import37.TextBinding();
  final import37.TextBinding _textBinding_4 = import37.TextBinding();
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
    _textBinding_2.updateText(import29.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_4.updateText(import29.interpolateString0(_ctx.vegeBook.writtenBy));
  }
}

AppView<void> viewFactory_WriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent2(parentView, parentIndex);
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
        ? import26.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import38.Store, viewData.parentIndex), this.injectorGet(import39.Router, viewData.parentIndex), this.injectorGet(import40.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import38.Store, viewData.parentIndex), this.injectorGet(import39.Router, viewData.parentIndex), this.injectorGet(import40.Messages, viewData.parentIndex)));
    _compView_0.create(_WriteVegeBookComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WriteVegeBookComponent_0_5);
  }

  @override
  void detectChangesInternal() {
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
  _ref8.initReflector();
  _ref9.initReflector();
}
