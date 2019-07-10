// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'write_vegebook_component.dart';
export 'write_vegebook_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'lazy_image_component.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref6;
import 'package:web/src/common/medium_editor/medium_editor.template.dart' as _ref7;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref8;
import 'package:web/src/routes.template.dart' as _ref9;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref10;
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
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'package:angular_forms/src/directives/ng_form.dart' as import16;
import 'package:angular_components/material_button/material_button.template.dart' as import17;
import 'package:angular_components/material_button/material_button.dart' as import18;
import 'package:angular_forms/src/directives/validators.dart' as import19;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import20;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import21;
import 'package:angular_forms/src/directives/ng_control_name.dart' as import22;
import 'package:angular_components/material_input/material_input.template.dart' as import23;
import 'package:angular_components/material_input/deferred_validator.dart' as import24;
import 'package:angular_components/material_input/material_input.dart' as import25;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import26;
import 'package:angular/src/di/errors.dart' as import27;
import 'package:angular_components/theme/dark_theme.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'package:angular/src/runtime/interpolate.dart' as import30;
import 'package:angular_components/button_decorator/button_decorator.dart' as import31;
import 'package:angular_components/interfaces/has_disabled.dart' as import32;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import33;
import 'package:angular_forms/src/directives/ng_control.dart' as import34;
import 'package:angular_components/material_input/base_material_input.dart' as import35;
import 'package:angular_components/utils/angular/reference/reference.dart' as import36;
import 'package:angular_components/focus/focus_interface.dart' as import37;
import 'package:angular_forms/src/directives/control_container.dart' as import38;
import '../landscape_image/vegebook_landscape_image_component.template.dart' as import39;
import '../landscape_image/vegebook_landscape_image_component.dart' as import40;
import 'lazy_image_component.template.dart' as import41;
import 'lazy_image_component.dart' as import42;
import 'package:redux/src/store.dart' as import43;
import 'package:angular_router/src/router/router.dart' as import44;
import 'package:core/src/i18n/messages.dart' as import45;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  bool _query_landscapeImage_1_0_isDirty = true;
  bool _query_posterImage_1_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
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
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_WriteVegeBookComponent2);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.editable && (_ctx.vegeBook != null));
    _NgIf_1_9.ngIf = (_ctx.contentVisible && (_ctx.vegeBook != null));
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_landscapeImage_1_0_isDirty) {
        _ctx.landscapeImageElement = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewWriteVegeBookComponent1 nestedView) {
          return [nestedView._el_4];
        }));
        _query_landscapeImage_1_0_isDirty = false;
      }
      if (_query_posterImage_1_1_isDirty) {
        _ctx.posterImageElement = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewWriteVegeBookComponent1 nestedView) {
          return [nestedView._el_16];
        }));
        _query_posterImage_1_1_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
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
  final import15.TextBinding _textBinding_27 = import15.TextBinding();
  final import15.TextBinding _textBinding_29 = import15.TextBinding();
  import16.NgForm _NgForm_6_5;
  import17.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import19.RequiredValidator _RequiredValidator_9_5;
  List<dynamic> _NgValidators_9_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_9_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_9_8;
  import22.NgControlName _NgControlName_9_9;
  import17.ViewMaterialButtonComponent0 _compView_17;
  dynamic _AcxDarkTheme_17_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_17_6;
  import19.RequiredValidator _RequiredValidator_19_5;
  List<dynamic> _NgValidators_19_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_19_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_19_8;
  import22.NgControlName _NgControlName_19_9;
  import23.ViewMaterialInputComponent0 _compView_23;
  import24.DeferredValidator _DeferredValidator_23_5;
  import19.RequiredValidator _RequiredValidator_23_6;
  List<dynamic> _NgValidators_23_7;
  import22.NgControlName _NgControlName_23_8;
  import25.MaterialInputComponent _MaterialInputComponent_23_10;
  import26.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_23_12;
  import17.ViewMaterialButtonComponent0 _compView_30;
  dynamic _AcxDarkTheme_30_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_30_6;
  import19.RequiredValidator _RequiredValidator_34_5;
  List<dynamic> _NgValidators_34_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_34_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_34_8;
  import22.NgControlName _NgControlName_34_9;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_5;
  var _expr_8;
  var _expr_11;
  var _expr_14;
  bool _expr_20;
  var _expr_23;
  import8.Element _el_4;
  import8.Element _el_16;
  import8.DivElement _el_0;
  import8.Element _el_15;
  import8.InputElement _el_11;
  import8.InputElement _el_21;
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
    final _el_6 = import11.appendElement(doc, _el_0, 'form');
    addShimC(_el_6);
    _NgForm_6_5 = import16.NgForm(null);
    _compView_7 = import17.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    this.updateChildClassNonHtml(_el_7, 'blue add-landscape-image');
    import11.setAttribute(_el_7, 'raised', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import9.isDevMode
        ? import27.debugInjectorWrap(import28.AcxDarkTheme, () {
            return import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import18.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    final _text_8 = import11.createText('Add Landscape image');
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_text_8]
    ]);
    final _el_9 = import11.appendElement(doc, _el_6, 'input');
    import11.setAttribute(_el_9, 'hidden', '');
    import11.setAttribute(_el_9, 'ngControl', 'lImage');
    import11.setAttribute(_el_9, 'required', '');
    import11.setAttribute(_el_9, 'type', 'text');
    addShimC(_el_9);
    _RequiredValidator_9_5 = import19.RequiredValidator();
    _NgValidators_9_6 = [_RequiredValidator_9_5];
    _DefaultValueAccessor_9_7 = import20.DefaultValueAccessor(_el_9);
    _NgValueAccessor_9_8 = [_DefaultValueAccessor_9_7];
    _NgControlName_9_9 = import22.NgControlName(_NgForm_6_5, _NgValidators_9_6, _NgValueAccessor_9_8);
    final _text_10 = import11.appendText(_el_6, ' ');
    _el_11 = import11.appendElement(doc, _el_6, 'input');
    import11.setAttribute(_el_11, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_11, 'hidden', '');
    import11.setAttribute(_el_11, 'required', '');
    import11.setAttribute(_el_11, 'type', 'file');
    addShimC(_el_11);
    final _el_12 = import11.appendDiv(doc, _el_6);
    this.updateChildClass(_el_12, 'vegebook-header');
    addShimC(_el_12);
    final _el_13 = import11.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'vegebook-poster');
    addShimC(_el_13);
    final _el_14 = import11.appendDiv(doc, _el_13);
    this.updateChildClass(_el_14, 'fallback-icon');
    addShimC(_el_14);
    _el_15 = import11.appendElement(doc, _el_14, 'img');
    import11.setAttribute(_el_15, 'src', 'images/fallback-icon.svg');
    addShimE(_el_15);
    _el_16 = import11.appendElement(doc, _el_13, 'img');
    this.updateChildClass(_el_16, 'poster-actual');
    addShimE(_el_16);
    _compView_17 = import17.ViewMaterialButtonComponent0(this, 17);
    final _el_17 = _compView_17.rootEl;
    _el_13.append(_el_17);
    this.updateChildClassNonHtml(_el_17, 'blue add-post-image');
    import11.setAttribute(_el_17, 'raised', '');
    addShimC(_el_17);
    _AcxDarkTheme_17_5 = (import9.isDevMode
        ? import27.debugInjectorWrap(import28.AcxDarkTheme, () {
            return import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_17_6 = import18.MaterialButtonComponent(_el_17, _AcxDarkTheme_17_5, _compView_17, null);
    final _text_18 = import11.createText('Add post');
    _compView_17.create(_MaterialButtonComponent_17_6, [
      [_text_18]
    ]);
    final _el_19 = import11.appendElement(doc, _el_13, 'input');
    import11.setAttribute(_el_19, 'hidden', '');
    import11.setAttribute(_el_19, 'ngControl', 'pImage');
    import11.setAttribute(_el_19, 'required', '');
    import11.setAttribute(_el_19, 'type', 'text');
    addShimC(_el_19);
    _RequiredValidator_19_5 = import19.RequiredValidator();
    _NgValidators_19_6 = [_RequiredValidator_19_5];
    _DefaultValueAccessor_19_7 = import20.DefaultValueAccessor(_el_19);
    _NgValueAccessor_19_8 = [_DefaultValueAccessor_19_7];
    _NgControlName_19_9 = import22.NgControlName(_NgForm_6_5, _NgValidators_19_6, _NgValueAccessor_19_8);
    final _text_20 = import11.appendText(_el_13, ' ');
    _el_21 = import11.appendElement(doc, _el_13, 'input');
    import11.setAttribute(_el_21, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_21, 'hidden', '');
    import11.setAttribute(_el_21, 'type', 'file');
    addShimC(_el_21);
    final _el_22 = import11.appendDiv(doc, _el_12);
    this.updateChildClass(_el_22, 'vegebook-information');
    addShimC(_el_22);
    _compView_23 = import23.ViewMaterialInputComponent0(this, 23);
    final _el_23 = _compView_23.rootEl;
    _el_22.append(_el_23);
    this.updateChildClassNonHtml(_el_23, import30.interpolateString2('', 'title', ' ', import25.MaterialInputComponent.hostClass, ''));
    import11.setAttribute(_el_23, 'floatingLabel', '');
    import11.setAttribute(_el_23, 'id', 'title');
    import11.setAttribute(_el_23, 'label', 'Type title [required]');
    import11.setAttribute(_el_23, 'ngControl', 'title');
    import11.setAttribute(_el_23, 'required', '');
    import11.setAttribute(_el_23, 'requiredErrorMsg', 'This input requires a value!');
    import11.setAttribute(_el_23, 'type', 'text');
    addShimC(_el_23);
    _DeferredValidator_23_5 = import24.DeferredValidator();
    _RequiredValidator_23_6 = import19.RequiredValidator();
    _NgValidators_23_7 = [_DeferredValidator_23_5, _RequiredValidator_23_6];
    _NgControlName_23_8 = import22.NgControlName(_NgForm_6_5, _NgValidators_23_7, null);
    _MaterialInputComponent_23_10 = import25.MaterialInputComponent('text', null, null, _NgControlName_23_8, _compView_23, _DeferredValidator_23_5);
    _MaterialInputDefaultValueAccessor_23_12 = import26.MaterialInputDefaultValueAccessor(_MaterialInputComponent_23_10, _NgControlName_23_8);
    _compView_23.create(_MaterialInputComponent_23_10, [const [], const []]);
    final _el_24 = import11.appendDiv(doc, _el_22);
    this.updateChildClass(_el_24, 'body');
    addShimC(_el_24);
    final _el_25 = import11.appendElement(doc, _el_24, 'p');
    this.updateChildClass(_el_25, 'writtenBy');
    addShimE(_el_25);
    final _el_26 = import11.appendElement(doc, _el_25, 'strong');
    addShimE(_el_26);
    _el_26.append(_textBinding_27.element);
    final _text_28 = import11.appendText(_el_25, ': ');
    _el_25.append(_textBinding_29.element);
    _compView_30 = import17.ViewMaterialButtonComponent0(this, 30);
    final _el_30 = _compView_30.rootEl;
    _el_22.append(_el_30);
    this.updateChildClassNonHtml(_el_30, 'red save-btn');
    import11.setAttribute(_el_30, 'raised', '');
    import11.setAttribute(_el_30, 'type', 'submit');
    addShimC(_el_30);
    _AcxDarkTheme_30_5 = (import9.isDevMode
        ? import27.debugInjectorWrap(import28.AcxDarkTheme, () {
            return import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import28.AcxDarkTheme(parentView.injectorGetOptional(const import29.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_30_6 = import18.MaterialButtonComponent(_el_30, _AcxDarkTheme_30_5, _compView_30, null);
    final _text_31 = import11.createText('Save');
    _compView_30.create(_MaterialButtonComponent_30_6, [
      [_text_31]
    ]);
    final _el_32 = import11.appendDiv(doc, _el_6);
    this.updateChildClass(_el_32, 'section');
    addShimC(_el_32);
    final _el_33 = import11.appendDiv(doc, _el_32);
    this.updateChildClass(_el_33, 'centered-content');
    addShimC(_el_33);
    final _el_34 = import11.appendElement(doc, _el_33, 'input');
    import11.setAttribute(_el_34, 'hidden', '');
    import11.setAttribute(_el_34, 'id', 'editableInput');
    import11.setAttribute(_el_34, 'ngControl', 'content');
    import11.setAttribute(_el_34, 'required', '');
    import11.setAttribute(_el_34, 'type', 'text');
    addShimC(_el_34);
    _RequiredValidator_34_5 = import19.RequiredValidator();
    _NgValidators_34_6 = [_RequiredValidator_34_5];
    _DefaultValueAccessor_34_7 = import20.DefaultValueAccessor(_el_34);
    _NgValueAccessor_34_8 = [_DefaultValueAccessor_34_7];
    _NgControlName_34_9 = import22.NgControlName(_NgForm_6_5, _NgValidators_34_6, _NgValueAccessor_34_8);
    final _el_35 = import11.appendDiv(doc, _el_33);
    this.updateChildClass(_el_35, 'editable content');
    addShimC(_el_35);
    _el_5.addEventListener('click', eventHandler0(_ctx.goBack));
    import13.appViewUtils.eventManager.addEventListener(_el_6, 'submit', eventHandler1(_NgForm_6_5.onSubmit));
    _el_6.addEventListener('reset', eventHandler1(_NgForm_6_5.onReset));
    final subscription_0 = _NgForm_6_5.ngSubmit.listen(eventHandler0(_ctx.onSubmit));
    _el_7.addEventListener('click', eventHandler1(_handle_click_7_0));
    _el_9.addEventListener('blur', eventHandler0(_DefaultValueAccessor_9_7.touchHandler));
    _el_9.addEventListener('input', eventHandler1(_handle_input_9_2));
    final subscription_1 = _NgControlName_9_9.update.listen(eventHandler1(_handle_ngModelChange_9_0));
    _el_11.addEventListener('change', eventHandler1(_ctx.onLandscapeImageFileSelected));
    _el_17.addEventListener('click', eventHandler1(_handle_click_17_0));
    _el_19.addEventListener('blur', eventHandler0(_DefaultValueAccessor_19_7.touchHandler));
    _el_19.addEventListener('input', eventHandler1(_handle_input_19_2));
    final subscription_2 = _NgControlName_19_9.update.listen(eventHandler1(_handle_ngModelChange_19_0));
    _el_21.addEventListener('change', eventHandler1(_ctx.onPosterImageFileSelected));
    final subscription_3 = _NgControlName_23_8.update.listen(eventHandler1(_handle_ngModelChange_23_0));
    _el_30.addEventListener('click', eventHandler0(_ctx.onSubmit));
    _el_34.addEventListener('blur', eventHandler0(_DefaultValueAccessor_34_7.touchHandler));
    _el_34.addEventListener('input', eventHandler1(_handle_input_34_2));
    final subscription_4 = _NgControlName_34_9.update.listen(eventHandler1(_handle_ngModelChange_34_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 35))) {
      if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
        if (identical(token, import28.AcxDarkTheme)) {
          return _AcxDarkTheme_7_5;
        }
        if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
          return _MaterialButtonComponent_7_6;
        }
      }
      if ((9 == nodeIndex)) {
        if (identical(token, const import29.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_9_6;
        }
        if (identical(token, const import29.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_9_8;
        }
        if (identical(token, import34.NgControl)) {
          return _NgControlName_9_9;
        }
      }
      if (((17 <= nodeIndex) && (nodeIndex <= 18))) {
        if (identical(token, import28.AcxDarkTheme)) {
          return _AcxDarkTheme_17_5;
        }
        if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
          return _MaterialButtonComponent_17_6;
        }
      }
      if ((19 == nodeIndex)) {
        if (identical(token, const import29.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_19_6;
        }
        if (identical(token, const import29.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_19_8;
        }
        if (identical(token, import34.NgControl)) {
          return _NgControlName_19_9;
        }
      }
      if ((23 == nodeIndex)) {
        if (identical(token, import24.DeferredValidator)) {
          return _DeferredValidator_23_5;
        }
        if (identical(token, const import29.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_23_7;
        }
        if (identical(token, import34.NgControl)) {
          return _NgControlName_23_8;
        }
        if (((((identical(token, import25.MaterialInputComponent) || identical(token, import35.BaseMaterialInput)) || identical(token, import36.ReferenceDirective)) || identical(token, import37.Focusable)) || identical(token, import32.HasDisabled))) {
          return _MaterialInputComponent_23_10;
        }
      }
      if (((30 <= nodeIndex) && (nodeIndex <= 31))) {
        if (identical(token, import28.AcxDarkTheme)) {
          return _AcxDarkTheme_30_5;
        }
        if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
          return _MaterialButtonComponent_30_6;
        }
      }
      if ((34 == nodeIndex)) {
        if (identical(token, const import29.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_34_6;
        }
        if (identical(token, const import29.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_34_8;
        }
        if (identical(token, import34.NgControl)) {
          return _NgControlName_34_9;
        }
      }
      if ((identical(token, import16.NgForm) || identical(token, import38.ControlContainer))) {
        return _NgForm_6_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import16.NgForm local_bookForm = _NgForm_6_5;
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_7_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    if (firstCheck) {
      (_RequiredValidator_9_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_9_9.name = 'lImage';
      changed = true;
    }
    final currVal_5 = _ctx.landscapeImageSrc;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _NgControlName_9_9.model = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _NgControlName_9_9.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_17_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_17.markAsCheckOnce();
    }
    if (firstCheck) {
      (_RequiredValidator_19_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_19_9.name = 'pImage';
      changed = true;
    }
    final currVal_11 = _ctx.posterImageSrc;
    if (import13.checkBinding(_expr_11, currVal_11)) {
      _NgControlName_19_9.model = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    if (changed) {
      _NgControlName_19_9.ngAfterChanges();
    }
    if (firstCheck) {
      (_RequiredValidator_23_6.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_23_8.name = 'title';
      changed = true;
    }
    final currVal_14 = _ctx.vegeBook.title;
    if (import13.checkBinding(_expr_14, currVal_14)) {
      _NgControlName_23_8.model = currVal_14;
      changed = true;
      _expr_14 = currVal_14;
    }
    if (changed) {
      _NgControlName_23_8.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_23_10.label = 'Type title [required]';
      changed = true;
      _MaterialInputComponent_23_10.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_23_10.requiredErrorMsg = 'This input requires a value!';
      changed = true;
      _MaterialInputComponent_23_10.required = true;
      changed = true;
    }
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_30_6.raised = true;
      changed = true;
    }
    final bool currVal_20 = (!local_bookForm.form.valid);
    if (import13.checkBinding(_expr_20, currVal_20)) {
      _MaterialButtonComponent_30_6.disabled = currVal_20;
      changed = true;
      _expr_20 = currVal_20;
    }
    if (changed) {
      _compView_30.markAsCheckOnce();
    }
    if (firstCheck) {
      (_RequiredValidator_34_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_34_9.name = 'content';
      changed = true;
    }
    final currVal_23 = _ctx.vegeBook.content;
    if (import13.checkBinding(_expr_23, currVal_23)) {
      _NgControlName_34_9.model = currVal_23;
      changed = true;
      _expr_23 = currVal_23;
    }
    if (changed) {
      _NgControlName_34_9.ngAfterChanges();
    }
    final bool currVal_0 = (!_ctx.editable);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.editable;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.landscapeImageSrc;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      import11.setProperty(_el_4, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_2));
      _expr_2 = currVal_2;
    }
    _compView_7.detectHostChanges(firstCheck);
    if (firstCheck) {
      import11.setProperty(_el_15, 'alt', 'Fallback image');
    }
    final currVal_8 = _ctx.posterImageSrc;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      import11.setProperty(_el_16, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_8));
      _expr_8 = currVal_8;
    }
    _compView_17.detectHostChanges(firstCheck);
    _textBinding_27.updateText(import30.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_29.updateText(import30.interpolateString0(_ctx.vegeBook.writtenBy));
    _compView_30.detectHostChanges(firstCheck);
    _compView_7.detectChanges();
    _compView_17.detectChanges();
    _compView_23.detectChanges();
    _compView_30.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_23_10.ngAfterViewInit();
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
    _compView_7.destroyInternalState();
    _compView_17.destroyInternalState();
    _compView_23.destroyInternalState();
    _compView_30.destroyInternalState();
    _NgControlName_9_9.ngOnDestroy();
    _NgControlName_19_9.ngOnDestroy();
    _NgControlName_23_8.ngOnDestroy();
    _MaterialInputComponent_23_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_23_12.ngOnDestroy();
    _NgControlName_34_9.ngOnDestroy();
  }

  void _handle_click_7_0($event) {
    final local_landscapeImagefileInput = _el_11;
    local_landscapeImagefileInput.click();
  }

  void _handle_ngModelChange_9_0($event) {
    final _ctx = ctx;
    _ctx.landscapeImageSrc = $event;
  }

  void _handle_input_9_2($event) {
    _DefaultValueAccessor_9_7.handleChange($event.target.value);
  }

  void _handle_click_17_0($event) {
    final local_posterImagefileInput = _el_21;
    local_posterImagefileInput.click();
  }

  void _handle_ngModelChange_19_0($event) {
    final _ctx = ctx;
    _ctx.posterImageSrc = $event;
  }

  void _handle_input_19_2($event) {
    _DefaultValueAccessor_19_7.handleChange($event.target.value);
  }

  void _handle_ngModelChange_23_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.title = $event;
  }

  void _handle_ngModelChange_34_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.content = $event;
  }

  void _handle_input_34_2($event) {
    _DefaultValueAccessor_34_7.handleChange($event.target.value);
  }
}

AppView<void> viewFactory_WriteVegeBookComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent1(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent2 extends AppView<import2.WriteVegeBookComponent> {
  final import15.TextBinding _textBinding_11 = import15.TextBinding();
  import39.ViewVegeBookLandscapeImageComponent0 _compView_2;
  import40.VegeBookLandscapeImageComponent _VegeBookLandscapeImageComponent_2_5;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  import8.DivElement _el_0;
  import8.Element _el_7;
  _ViewWriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _compView_2 = import39.ViewVegeBookLandscapeImageComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    addShimC(_el_2);
    _VegeBookLandscapeImageComponent_2_5 = import40.VegeBookLandscapeImageComponent();
    _compView_2.create0(_VegeBookLandscapeImageComponent_2_5);
    final _el_3 = import11.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_3, 'back');
    import11.setAttribute(_el_3, 'src', 'images/back.svg');
    addShimE(_el_3);
    final _el_4 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_4, 'vegebook-header');
    addShimC(_el_4);
    final _el_5 = import11.appendDiv(doc, _el_4);
    this.updateChildClass(_el_5, 'vegebook-poster');
    addShimC(_el_5);
    final _el_6 = import11.appendDiv(doc, _el_5);
    this.updateChildClass(_el_6, 'fallback-icon');
    addShimC(_el_6);
    _el_7 = import11.appendElement(doc, _el_6, 'img');
    import11.setAttribute(_el_7, 'src', 'images/fallback-icon.svg');
    addShimE(_el_7);
    final _anchor_8 = import11.appendAnchor(_el_5);
    _appEl_8 = ViewContainer(8, 5, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_WriteVegeBookComponent3);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    final _el_9 = import11.appendDiv(doc, _el_4);
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
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_WriteVegeBookComponent4);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _anchor_14 = import11.appendAnchor(_el_0);
    _appEl_14 = ViewContainer(14, 0, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_WriteVegeBookComponent5);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    _el_3.addEventListener('click', eventHandler0(_ctx.goBack));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_2 = _ctx.vegeBook;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _VegeBookLandscapeImageComponent_2_5.vegeBook = currVal_2;
      _expr_2 = currVal_2;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _VegeBookLandscapeImageComponent_2_5.ngOnInit();
    }
    _NgIf_8_9.ngIf = _ctx.vegeBook.hasMediumPortraitImage;
    _NgIf_13_9.ngIf = (_ctx.vegeBook.writtenBy != null);
    _NgIf_14_9.ngIf = _ctx.vegeBook.hasContent;
    _appEl_8.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    final bool currVal_0 = (!_ctx.contentVisible);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.contentVisible;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_3 = ('Fallback image for ' + _ctx.vegeBook.title);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      import11.setProperty(_el_7, 'alt', currVal_3);
      _expr_3 = currVal_3;
    }
    _textBinding_11.updateText(import30.interpolateString0(_ctx.vegeBook.title));
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _compView_2.destroyInternalState();
    _VegeBookLandscapeImageComponent_2_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent2(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent3 extends AppView<import2.WriteVegeBookComponent> {
  import41.ViewLazyImageComponent0 _compView_0;
  import42.LazyImageComponent _LazyImageComponent_0_5;
  String _expr_0;
  String _expr_1;
  _ViewWriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import41.ViewLazyImageComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _LazyImageComponent_0_5 = import42.LazyImageComponent(_el_0);
    _compView_0.create0(_LazyImageComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.vegeBook.images.portraitMedium;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _LazyImageComponent_0_5.src = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('Poster for ' + _ctx.vegeBook.title);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _LazyImageComponent_0_5.alt = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _LazyImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent3(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent4 extends AppView<import2.WriteVegeBookComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  final import15.TextBinding _textBinding_4 = import15.TextBinding();
  _ViewWriteVegeBookComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _textBinding_2.updateText(import30.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_4.updateText(import30.interpolateString0(_ctx.vegeBook.writtenBy));
  }
}

AppView<void> viewFactory_WriteVegeBookComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent4(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent5 extends AppView<import2.WriteVegeBookComponent> {
  var _expr_0;
  import8.Element _el_2;
  _ViewWriteVegeBookComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _el_2 = import11.appendElement(doc, _el_1, 'simple-html');
    addShimE(_el_2);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.vegeBook.content;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_2, 'innerHTML', import13.appViewUtils.sanitizer.sanitizeHtml(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_WriteVegeBookComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent5(parentView, parentIndex);
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
        ? import27.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import43.Store, viewData.parentIndex), this.injectorGet(import44.Router, viewData.parentIndex), this.injectorGet(import45.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import43.Store, viewData.parentIndex), this.injectorGet(import44.Router, viewData.parentIndex), this.injectorGet(import45.Messages, viewData.parentIndex)));
    _compView_0.create(_WriteVegeBookComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WriteVegeBookComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
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
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
}
