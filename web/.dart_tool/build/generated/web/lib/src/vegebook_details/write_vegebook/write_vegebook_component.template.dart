// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'write_vegebook_component.dart';
export 'write_vegebook_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'medium_editor.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/material_button/material_button.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref6;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref7;
import 'package:web/src/routes.template.dart' as _ref8;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref9;
import 'package:web/src/vegebook_details/write_vegebook/write_vegebook_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'write_vegebook_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_forms/src/directives/ng_form.dart' as import4;
import 'package:angular_components/material_button/material_button.template.dart' as import5;
import 'package:angular_components/material_button/material_button.dart' as import6;
import 'package:angular_forms/src/directives/validators.dart' as import7;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import8;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import9;
import 'package:angular_forms/src/directives/ng_control_name.dart' as import10;
import 'package:angular_components/material_input/material_input.template.dart' as import11;
import 'package:angular_components/material_input/deferred_validator.dart' as import12;
import 'package:angular_components/material_input/material_input.dart' as import13;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import14;
import 'dart:html' as import15;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import16;
import 'package:angular/src/core/linker/view_type.dart' as import17;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import 'package:angular_components/theme/dark_theme.dart' as import23;
import 'package:angular/src/core/di/opaque_token.dart' as import24;
import 'package:angular/src/runtime/interpolate.dart' as import25;
import 'package:angular/src/core/linker/app_view_utils.dart' as import26;
import 'package:angular_components/button_decorator/button_decorator.dart' as import27;
import 'package:angular_components/interfaces/has_disabled.dart' as import28;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import29;
import 'package:angular_forms/src/directives/ng_control.dart' as import30;
import 'package:angular_components/material_input/base_material_input.dart' as import31;
import 'package:angular_components/utils/angular/reference/reference.dart' as import32;
import 'package:angular_components/focus/focus_interface.dart' as import33;
import 'package:angular_forms/src/directives/control_container.dart' as import34;
import 'package:redux/src/store.dart' as import35;
import 'package:angular_router/src/router/router.dart' as import36;
import 'package:core/src/i18n/messages.dart' as import37;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  final import3.TextBinding _textBinding_27 = import3.TextBinding();
  final import3.TextBinding _textBinding_29 = import3.TextBinding();
  import4.NgForm _NgForm_6_5;
  import5.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import7.RequiredValidator _RequiredValidator_9_5;
  List<dynamic> _NgValidators_9_6;
  import8.DefaultValueAccessor _DefaultValueAccessor_9_7;
  List<import9.ControlValueAccessor<dynamic>> _NgValueAccessor_9_8;
  import10.NgControlName _NgControlName_9_9;
  import5.ViewMaterialButtonComponent0 _compView_17;
  dynamic _AcxDarkTheme_17_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_17_6;
  import7.RequiredValidator _RequiredValidator_19_5;
  List<dynamic> _NgValidators_19_6;
  import8.DefaultValueAccessor _DefaultValueAccessor_19_7;
  List<import9.ControlValueAccessor<dynamic>> _NgValueAccessor_19_8;
  import10.NgControlName _NgControlName_19_9;
  import11.ViewMaterialInputComponent0 _compView_23;
  import12.DeferredValidator _DeferredValidator_23_5;
  import7.RequiredValidator _RequiredValidator_23_6;
  List<dynamic> _NgValidators_23_7;
  import10.NgControlName _NgControlName_23_8;
  import13.MaterialInputComponent _MaterialInputComponent_23_10;
  import14.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_23_12;
  import5.ViewMaterialButtonComponent0 _compView_30;
  dynamic _AcxDarkTheme_30_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_30_6;
  import7.RequiredValidator _RequiredValidator_34_5;
  List<dynamic> _NgValidators_34_6;
  import8.DefaultValueAccessor _DefaultValueAccessor_34_7;
  List<import9.ControlValueAccessor<dynamic>> _NgValueAccessor_34_8;
  import10.NgControlName _NgControlName_34_9;
  bool _expr_0;
  var _expr_1;
  var _expr_4;
  var _expr_7;
  var _expr_10;
  var _expr_13;
  bool _expr_19;
  var _expr_22;
  import15.DivElement _el_0;
  import15.Element _el_4;
  import15.Element _el_15;
  import15.Element _el_16;
  import15.InputElement _el_11;
  import15.InputElement _el_21;
  static import16.ComponentStyles _componentStyles;
  ViewWriteVegeBookComponent0(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import15.document.createElement('write-vegebook');
  }
  static String get _debugComponentUrl {
    return (import19.isDevMode ? 'asset:web/lib/src/vegebook_details/write_vegebook/write_vegebook_component.dart' : null);
  }

  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import15.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import15.document;
    _el_0 = import21.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    final _el_1 = import21.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'landscape-container');
    addShimC(_el_1);
    final _el_2 = import21.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'landscape-placeholder');
    addShimC(_el_2);
    final _el_3 = import21.appendElement(doc, _el_2, 'img');
    import21.setAttribute(_el_3, 'src', 'images/fallback-icon.svg');
    addShimE(_el_3);
    _el_4 = import21.appendElement(doc, _el_1, 'img');
    this.updateChildClass(_el_4, 'landscape-actual');
    addShimE(_el_4);
    final _el_5 = import21.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_5, 'back');
    import21.setAttribute(_el_5, 'src', 'images/back.svg');
    addShimE(_el_5);
    final _el_6 = import21.appendElement(doc, _el_0, 'form');
    addShimC(_el_6);
    _NgForm_6_5 = import4.NgForm(null);
    _compView_7 = import5.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    this.updateChildClassNonHtml(_el_7, 'blue add-landscape-image');
    import21.setAttribute(_el_7, 'raised', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import6.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    final _text_8 = import21.createText('Add Landscape image');
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_text_8]
    ]);
    final _el_9 = import21.appendElement(doc, _el_6, 'input');
    import21.setAttribute(_el_9, 'hidden', '');
    import21.setAttribute(_el_9, 'ngControl', 'lImage');
    import21.setAttribute(_el_9, 'required', '');
    import21.setAttribute(_el_9, 'type', 'text');
    addShimC(_el_9);
    _RequiredValidator_9_5 = import7.RequiredValidator();
    _NgValidators_9_6 = [_RequiredValidator_9_5];
    _DefaultValueAccessor_9_7 = import8.DefaultValueAccessor(_el_9);
    _NgValueAccessor_9_8 = [_DefaultValueAccessor_9_7];
    _NgControlName_9_9 = import10.NgControlName(_NgForm_6_5, _NgValidators_9_6, _NgValueAccessor_9_8);
    final _text_10 = import21.appendText(_el_6, ' ');
    _el_11 = import21.appendElement(doc, _el_6, 'input');
    import21.setAttribute(_el_11, 'accept', 'image/png, image/jpeg');
    import21.setAttribute(_el_11, 'hidden', '');
    import21.setAttribute(_el_11, 'required', '');
    import21.setAttribute(_el_11, 'type', 'file');
    addShimC(_el_11);
    final _el_12 = import21.appendDiv(doc, _el_6);
    this.updateChildClass(_el_12, 'vegebook-header');
    addShimC(_el_12);
    final _el_13 = import21.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'vegebook-poster');
    addShimC(_el_13);
    final _el_14 = import21.appendDiv(doc, _el_13);
    this.updateChildClass(_el_14, 'fallback-icon');
    addShimC(_el_14);
    _el_15 = import21.appendElement(doc, _el_14, 'img');
    import21.setAttribute(_el_15, 'src', 'images/fallback-icon.svg');
    addShimE(_el_15);
    _el_16 = import21.appendElement(doc, _el_13, 'img');
    this.updateChildClass(_el_16, 'poster-actual');
    addShimE(_el_16);
    _compView_17 = import5.ViewMaterialButtonComponent0(this, 17);
    final _el_17 = _compView_17.rootEl;
    _el_13.append(_el_17);
    this.updateChildClassNonHtml(_el_17, 'blue add-post-image');
    import21.setAttribute(_el_17, 'raised', '');
    addShimC(_el_17);
    _AcxDarkTheme_17_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_17_6 = import6.MaterialButtonComponent(_el_17, _AcxDarkTheme_17_5, _compView_17, null);
    final _text_18 = import21.createText('Add post');
    _compView_17.create(_MaterialButtonComponent_17_6, [
      [_text_18]
    ]);
    final _el_19 = import21.appendElement(doc, _el_13, 'input');
    import21.setAttribute(_el_19, 'hidden', '');
    import21.setAttribute(_el_19, 'ngControl', 'pImage');
    import21.setAttribute(_el_19, 'required', '');
    import21.setAttribute(_el_19, 'type', 'text');
    addShimC(_el_19);
    _RequiredValidator_19_5 = import7.RequiredValidator();
    _NgValidators_19_6 = [_RequiredValidator_19_5];
    _DefaultValueAccessor_19_7 = import8.DefaultValueAccessor(_el_19);
    _NgValueAccessor_19_8 = [_DefaultValueAccessor_19_7];
    _NgControlName_19_9 = import10.NgControlName(_NgForm_6_5, _NgValidators_19_6, _NgValueAccessor_19_8);
    final _text_20 = import21.appendText(_el_13, ' ');
    _el_21 = import21.appendElement(doc, _el_13, 'input');
    import21.setAttribute(_el_21, 'accept', 'image/png, image/jpeg');
    import21.setAttribute(_el_21, 'hidden', '');
    import21.setAttribute(_el_21, 'type', 'file');
    addShimC(_el_21);
    final _el_22 = import21.appendDiv(doc, _el_12);
    this.updateChildClass(_el_22, 'vegebook-information');
    addShimC(_el_22);
    _compView_23 = import11.ViewMaterialInputComponent0(this, 23);
    final _el_23 = _compView_23.rootEl;
    _el_22.append(_el_23);
    this.updateChildClassNonHtml(_el_23, import25.interpolateString2('', 'title', ' ', import13.MaterialInputComponent.hostClass, ''));
    import21.setAttribute(_el_23, 'floatingLabel', '');
    import21.setAttribute(_el_23, 'id', 'title');
    import21.setAttribute(_el_23, 'label', 'Type title [required]');
    import21.setAttribute(_el_23, 'ngControl', 'title');
    import21.setAttribute(_el_23, 'required', '');
    import21.setAttribute(_el_23, 'requiredErrorMsg', 'This input requires a value!');
    import21.setAttribute(_el_23, 'type', 'text');
    addShimC(_el_23);
    _DeferredValidator_23_5 = import12.DeferredValidator();
    _RequiredValidator_23_6 = import7.RequiredValidator();
    _NgValidators_23_7 = [_DeferredValidator_23_5, _RequiredValidator_23_6];
    _NgControlName_23_8 = import10.NgControlName(_NgForm_6_5, _NgValidators_23_7, null);
    _MaterialInputComponent_23_10 = import13.MaterialInputComponent('text', null, null, _NgControlName_23_8, _compView_23, _DeferredValidator_23_5);
    _MaterialInputDefaultValueAccessor_23_12 = import14.MaterialInputDefaultValueAccessor(_MaterialInputComponent_23_10, _NgControlName_23_8);
    _compView_23.create(_MaterialInputComponent_23_10, [const [], const []]);
    final _el_24 = import21.appendDiv(doc, _el_22);
    this.updateChildClass(_el_24, 'body');
    addShimC(_el_24);
    final _el_25 = import21.appendElement(doc, _el_24, 'p');
    this.updateChildClass(_el_25, 'writtenBy');
    addShimE(_el_25);
    final _el_26 = import21.appendElement(doc, _el_25, 'strong');
    addShimE(_el_26);
    _el_26.append(_textBinding_27.element);
    final _text_28 = import21.appendText(_el_25, ': ');
    _el_25.append(_textBinding_29.element);
    _compView_30 = import5.ViewMaterialButtonComponent0(this, 30);
    final _el_30 = _compView_30.rootEl;
    _el_22.append(_el_30);
    this.updateChildClassNonHtml(_el_30, 'red save-btn');
    import21.setAttribute(_el_30, 'raised', '');
    import21.setAttribute(_el_30, 'type', 'submit');
    addShimC(_el_30);
    _AcxDarkTheme_30_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_30_6 = import6.MaterialButtonComponent(_el_30, _AcxDarkTheme_30_5, _compView_30, null);
    final _text_31 = import21.createText('Save');
    _compView_30.create(_MaterialButtonComponent_30_6, [
      [_text_31]
    ]);
    final _el_32 = import21.appendDiv(doc, _el_6);
    this.updateChildClass(_el_32, 'section');
    addShimC(_el_32);
    final _el_33 = import21.appendDiv(doc, _el_32);
    this.updateChildClass(_el_33, 'centered-content');
    addShimC(_el_33);
    final _el_34 = import21.appendElement(doc, _el_33, 'input');
    import21.setAttribute(_el_34, 'hidden', '');
    import21.setAttribute(_el_34, 'id', 'editableInput');
    import21.setAttribute(_el_34, 'ngControl', 'content');
    import21.setAttribute(_el_34, 'required', '');
    import21.setAttribute(_el_34, 'type', 'text');
    addShimC(_el_34);
    _RequiredValidator_34_5 = import7.RequiredValidator();
    _NgValidators_34_6 = [_RequiredValidator_34_5];
    _DefaultValueAccessor_34_7 = import8.DefaultValueAccessor(_el_34);
    _NgValueAccessor_34_8 = [_DefaultValueAccessor_34_7];
    _NgControlName_34_9 = import10.NgControlName(_NgForm_6_5, _NgValidators_34_6, _NgValueAccessor_34_8);
    final _el_35 = import21.appendDiv(doc, _el_33);
    this.updateChildClass(_el_35, 'editable content');
    addShimC(_el_35);
    _el_5.addEventListener('click', eventHandler0(_ctx.goBack));
    import26.appViewUtils.eventManager.addEventListener(_el_6, 'submit', eventHandler1(_NgForm_6_5.onSubmit));
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
    _ctx.landscapeImageElement = _el_4;
    _ctx.posterImageElement = _el_16;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 35))) {
      if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
        if (identical(token, import23.AcxDarkTheme)) {
          return _AcxDarkTheme_7_5;
        }
        if (((identical(token, import6.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_7_6;
        }
      }
      if ((9 == nodeIndex)) {
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_9_6;
        }
        if (identical(token, const import24.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_9_8;
        }
        if (identical(token, import30.NgControl)) {
          return _NgControlName_9_9;
        }
      }
      if (((17 <= nodeIndex) && (nodeIndex <= 18))) {
        if (identical(token, import23.AcxDarkTheme)) {
          return _AcxDarkTheme_17_5;
        }
        if (((identical(token, import6.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_17_6;
        }
      }
      if ((19 == nodeIndex)) {
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_19_6;
        }
        if (identical(token, const import24.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_19_8;
        }
        if (identical(token, import30.NgControl)) {
          return _NgControlName_19_9;
        }
      }
      if ((23 == nodeIndex)) {
        if (identical(token, import12.DeferredValidator)) {
          return _DeferredValidator_23_5;
        }
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_23_7;
        }
        if (identical(token, import30.NgControl)) {
          return _NgControlName_23_8;
        }
        if (((((identical(token, import13.MaterialInputComponent) || identical(token, import31.BaseMaterialInput)) || identical(token, import32.ReferenceDirective)) || identical(token, import33.Focusable)) || identical(token, import28.HasDisabled))) {
          return _MaterialInputComponent_23_10;
        }
      }
      if (((30 <= nodeIndex) && (nodeIndex <= 31))) {
        if (identical(token, import23.AcxDarkTheme)) {
          return _AcxDarkTheme_30_5;
        }
        if (((identical(token, import6.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_30_6;
        }
      }
      if ((34 == nodeIndex)) {
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_34_6;
        }
        if (identical(token, const import24.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_34_8;
        }
        if (identical(token, import30.NgControl)) {
          return _NgControlName_34_9;
        }
      }
      if ((identical(token, import4.NgForm) || identical(token, import34.ControlContainer))) {
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
    final import4.NgForm local_bookForm = _NgForm_6_5;
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
    final currVal_4 = _ctx.landscapeImageSrc;
    if (import26.checkBinding(_expr_4, currVal_4)) {
      _NgControlName_9_9.model = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
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
    final currVal_10 = _ctx.posterImageSrc;
    if (import26.checkBinding(_expr_10, currVal_10)) {
      _NgControlName_19_9.model = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
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
    final currVal_13 = _ctx.vegeBook.title;
    if (import26.checkBinding(_expr_13, currVal_13)) {
      _NgControlName_23_8.model = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
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
    final bool currVal_19 = (!local_bookForm.form.valid);
    if (import26.checkBinding(_expr_19, currVal_19)) {
      _MaterialButtonComponent_30_6.disabled = currVal_19;
      changed = true;
      _expr_19 = currVal_19;
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
    final currVal_22 = _ctx.vegeBook.content;
    if (import26.checkBinding(_expr_22, currVal_22)) {
      _NgControlName_34_9.model = currVal_22;
      changed = true;
      _expr_22 = currVal_22;
    }
    if (changed) {
      _NgControlName_34_9.ngAfterChanges();
    }
    final currVal_0 = _ctx.contentVisible;
    if (import26.checkBinding(_expr_0, currVal_0)) {
      import21.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.landscapeImageSrc;
    if (import26.checkBinding(_expr_1, currVal_1)) {
      import21.setProperty(_el_4, 'src', import26.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
      _expr_1 = currVal_1;
    }
    _compView_7.detectHostChanges(firstCheck);
    if (firstCheck) {
      import21.setProperty(_el_15, 'alt', 'Fallback image');
    }
    final currVal_7 = _ctx.posterImageSrc;
    if (import26.checkBinding(_expr_7, currVal_7)) {
      import21.setProperty(_el_16, 'src', import26.appViewUtils.sanitizer.sanitizeUrl(currVal_7));
      _expr_7 = currVal_7;
    }
    _compView_17.detectHostChanges(firstCheck);
    _textBinding_27.updateText(import25.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_29.updateText(import25.interpolateString0(_ctx.vegeBook.writtenBy));
    _compView_30.detectHostChanges(firstCheck);
    _compView_7.detectChanges();
    _compView_17.detectChanges();
    _compView_23.detectChanges();
    _compView_30.detectChanges();
    if ((!import26.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_23_10.ngAfterViewInit();
      }
    }
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

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import16.ComponentStyles.scoped(styles$WriteVegeBookComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.WriteVegeBookComponent> _WriteVegeBookComponentNgFactory = const ComponentFactory('write-vegebook', viewFactory_WriteVegeBookComponentHost0);
ComponentFactory<import2.WriteVegeBookComponent> get WriteVegeBookComponentNgFactory {
  return _WriteVegeBookComponentNgFactory;
}

final List<dynamic> styles$WriteVegeBookComponentHost = const [];

class _ViewWriteVegeBookComponentHost0 extends AppView<import2.WriteVegeBookComponent> {
  ViewWriteVegeBookComponent0 _compView_0;
  import2.WriteVegeBookComponent _WriteVegeBookComponent_0_5;
  _ViewWriteVegeBookComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = ViewWriteVegeBookComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WriteVegeBookComponent_0_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import35.Store, viewData.parentIndex), this.injectorGet(import36.Router, viewData.parentIndex), this.injectorGet(import37.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import35.Store, viewData.parentIndex), this.injectorGet(import36.Router, viewData.parentIndex), this.injectorGet(import37.Messages, viewData.parentIndex)));
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
  _ref8.initReflector();
  _ref9.initReflector();
}
