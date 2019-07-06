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
import 'package:angular_components/material_input/material_input.template.dart' as import7;
import 'package:angular_components/material_input/deferred_validator.dart' as import8;
import 'package:angular_forms/src/directives/validators.dart' as import9;
import 'package:angular_forms/src/directives/ng_control_name.dart' as import10;
import 'package:angular_components/material_input/material_input.dart' as import11;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import13;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import14;
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
import 'package:angular_forms/src/directives/ng_control.dart' as import29;
import 'package:angular_components/material_input/base_material_input.dart' as import30;
import 'package:angular_components/utils/angular/reference/reference.dart' as import31;
import 'package:angular_components/focus/focus_interface.dart' as import32;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import33;
import 'package:angular_forms/src/directives/control_container.dart' as import34;
import 'package:redux/src/store.dart' as import35;
import 'package:angular_router/src/router/router.dart' as import36;
import 'package:core/src/i18n/messages.dart' as import37;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  final import3.TextBinding _textBinding_25 = import3.TextBinding();
  final import3.TextBinding _textBinding_27 = import3.TextBinding();
  import4.NgForm _NgForm_6_5;
  import5.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import5.ViewMaterialButtonComponent0 _compView_9;
  dynamic _AcxDarkTheme_9_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_9_6;
  import5.ViewMaterialButtonComponent0 _compView_17;
  dynamic _AcxDarkTheme_17_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_17_6;
  import7.ViewMaterialInputComponent0 _compView_21;
  import8.DeferredValidator _DeferredValidator_21_5;
  import9.RequiredValidator _RequiredValidator_21_6;
  List<dynamic> _NgValidators_21_7;
  import10.NgControlName _NgControlName_21_8;
  import11.MaterialInputComponent _MaterialInputComponent_21_10;
  import12.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_21_12;
  import9.RequiredValidator _RequiredValidator_30_5;
  List<dynamic> _NgValidators_30_6;
  import13.DefaultValueAccessor _DefaultValueAccessor_30_7;
  List<import14.ControlValueAccessor<dynamic>> _NgValueAccessor_30_8;
  import10.NgControlName _NgControlName_30_9;
  bool _expr_0;
  var _expr_1;
  bool _expr_3;
  var _expr_6;
  var _expr_9;
  var _expr_16;
  import15.DivElement _el_0;
  import15.Element _el_4;
  import15.Element _el_15;
  import15.Element _el_16;
  import15.InputElement _el_11;
  import15.InputElement _el_19;
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
    _compView_9 = import5.ViewMaterialButtonComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    _el_6.append(_el_9);
    this.updateChildClassNonHtml(_el_9, 'red save-btn');
    import21.setAttribute(_el_9, 'raised', '');
    import21.setAttribute(_el_9, 'type', 'submit');
    addShimC(_el_9);
    _AcxDarkTheme_9_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_9_6 = import6.MaterialButtonComponent(_el_9, _AcxDarkTheme_9_5, _compView_9, null);
    final _text_10 = import21.createText('Save');
    _compView_9.create(_MaterialButtonComponent_9_6, [
      [_text_10]
    ]);
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
    _el_19 = import21.appendElement(doc, _el_13, 'input');
    import21.setAttribute(_el_19, 'accept', 'image/png, image/jpeg');
    import21.setAttribute(_el_19, 'hidden', '');
    import21.setAttribute(_el_19, 'type', 'file');
    addShimC(_el_19);
    final _el_20 = import21.appendDiv(doc, _el_12);
    this.updateChildClass(_el_20, 'vegebook-information');
    addShimC(_el_20);
    _compView_21 = import7.ViewMaterialInputComponent0(this, 21);
    final _el_21 = _compView_21.rootEl;
    _el_20.append(_el_21);
    this.updateChildClassNonHtml(_el_21, import25.interpolateString2('', 'title', ' ', import11.MaterialInputComponent.hostClass, ''));
    import21.setAttribute(_el_21, 'floatingLabel', '');
    import21.setAttribute(_el_21, 'id', 'title');
    import21.setAttribute(_el_21, 'label', 'Type title [required]');
    import21.setAttribute(_el_21, 'ngControl', 'title');
    import21.setAttribute(_el_21, 'required', '');
    import21.setAttribute(_el_21, 'requiredErrorMsg', 'This input requires a value!');
    import21.setAttribute(_el_21, 'type', 'text');
    addShimC(_el_21);
    _DeferredValidator_21_5 = import8.DeferredValidator();
    _RequiredValidator_21_6 = import9.RequiredValidator();
    _NgValidators_21_7 = [_DeferredValidator_21_5, _RequiredValidator_21_6];
    _NgControlName_21_8 = import10.NgControlName(_NgForm_6_5, _NgValidators_21_7, null);
    _MaterialInputComponent_21_10 = import11.MaterialInputComponent('text', null, null, _NgControlName_21_8, _compView_21, _DeferredValidator_21_5);
    _MaterialInputDefaultValueAccessor_21_12 = import12.MaterialInputDefaultValueAccessor(_MaterialInputComponent_21_10, _NgControlName_21_8);
    _compView_21.create(_MaterialInputComponent_21_10, [const [], const []]);
    final _el_22 = import21.appendDiv(doc, _el_20);
    this.updateChildClass(_el_22, 'body');
    addShimC(_el_22);
    final _el_23 = import21.appendElement(doc, _el_22, 'p');
    this.updateChildClass(_el_23, 'writtenBy');
    addShimE(_el_23);
    final _el_24 = import21.appendElement(doc, _el_23, 'strong');
    addShimE(_el_24);
    _el_24.append(_textBinding_25.element);
    final _text_26 = import21.appendText(_el_23, ': ');
    _el_23.append(_textBinding_27.element);
    final _el_28 = import21.appendDiv(doc, _el_6);
    this.updateChildClass(_el_28, 'section');
    addShimC(_el_28);
    final _el_29 = import21.appendDiv(doc, _el_28);
    this.updateChildClass(_el_29, 'centered-content');
    addShimC(_el_29);
    final _el_30 = import21.appendElement(doc, _el_29, 'input');
    import21.setAttribute(_el_30, 'hidden', '');
    import21.setAttribute(_el_30, 'id', 'editableInput');
    import21.setAttribute(_el_30, 'ngControl', 'content');
    import21.setAttribute(_el_30, 'required', '');
    import21.setAttribute(_el_30, 'type', 'text');
    addShimC(_el_30);
    _RequiredValidator_30_5 = import9.RequiredValidator();
    _NgValidators_30_6 = [_RequiredValidator_30_5];
    _DefaultValueAccessor_30_7 = import13.DefaultValueAccessor(_el_30);
    _NgValueAccessor_30_8 = [_DefaultValueAccessor_30_7];
    _NgControlName_30_9 = import10.NgControlName(_NgForm_6_5, _NgValidators_30_6, _NgValueAccessor_30_8);
    final _el_31 = import21.appendDiv(doc, _el_29);
    this.updateChildClass(_el_31, 'editable content');
    addShimC(_el_31);
    _el_5.addEventListener('click', eventHandler0(_ctx.goBack));
    import26.appViewUtils.eventManager.addEventListener(_el_6, 'submit', eventHandler1(_NgForm_6_5.onSubmit));
    _el_6.addEventListener('reset', eventHandler1(_NgForm_6_5.onReset));
    final subscription_0 = _NgForm_6_5.ngSubmit.listen(eventHandler0(_ctx.onSubmit));
    _el_7.addEventListener('click', eventHandler1(_handle_click_7_0));
    _el_9.addEventListener('click', eventHandler0(_ctx.onSubmit));
    _el_11.addEventListener('change', eventHandler1(_ctx.onLandscapeImageFileSelected));
    _el_17.addEventListener('click', eventHandler1(_handle_click_17_0));
    _el_19.addEventListener('change', eventHandler1(_ctx.onPosterImageFileSelected));
    final subscription_1 = _NgControlName_21_8.update.listen(eventHandler1(_handle_ngModelChange_21_0));
    _el_30.addEventListener('blur', eventHandler0(_DefaultValueAccessor_30_7.touchHandler));
    _el_30.addEventListener('input', eventHandler1(_handle_input_30_2));
    final subscription_2 = _NgControlName_30_9.update.listen(eventHandler1(_handle_ngModelChange_30_0));
    _ctx.landscapeImageElement = _el_4;
    _ctx.posterImageElement = _el_16;
    init(const [], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 31))) {
      if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
        if (identical(token, import23.AcxDarkTheme)) {
          return _AcxDarkTheme_7_5;
        }
        if (((identical(token, import6.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_7_6;
        }
      }
      if (((9 <= nodeIndex) && (nodeIndex <= 10))) {
        if (identical(token, import23.AcxDarkTheme)) {
          return _AcxDarkTheme_9_5;
        }
        if (((identical(token, import6.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_9_6;
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
      if ((21 == nodeIndex)) {
        if (identical(token, import8.DeferredValidator)) {
          return _DeferredValidator_21_5;
        }
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_21_7;
        }
        if (identical(token, import29.NgControl)) {
          return _NgControlName_21_8;
        }
        if (((((identical(token, import11.MaterialInputComponent) || identical(token, import30.BaseMaterialInput)) || identical(token, import31.ReferenceDirective)) || identical(token, import32.Focusable)) || identical(token, import28.HasDisabled))) {
          return _MaterialInputComponent_21_10;
        }
      }
      if ((30 == nodeIndex)) {
        if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_30_6;
        }
        if (identical(token, const import24.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_30_8;
        }
        if (identical(token, import29.NgControl)) {
          return _NgControlName_30_9;
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
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_9_6.raised = true;
      changed = true;
    }
    final bool currVal_3 = (!local_bookForm.form.valid);
    if (import26.checkBinding(_expr_3, currVal_3)) {
      _MaterialButtonComponent_9_6.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
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
      (_RequiredValidator_21_6.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_21_8.name = 'title';
      changed = true;
    }
    final currVal_9 = _ctx.vegeBook.title;
    if (import26.checkBinding(_expr_9, currVal_9)) {
      _NgControlName_21_8.model = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _NgControlName_21_8.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_21_10.label = 'Type title [required]';
      changed = true;
      _MaterialInputComponent_21_10.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_21_10.requiredErrorMsg = 'This input requires a value!';
      changed = true;
      _MaterialInputComponent_21_10.required = true;
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    if (firstCheck) {
      (_RequiredValidator_30_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_30_9.name = 'content';
      changed = true;
    }
    final currVal_16 = _ctx.vegeBook.content;
    if (import26.checkBinding(_expr_16, currVal_16)) {
      _NgControlName_30_9.model = currVal_16;
      changed = true;
      _expr_16 = currVal_16;
    }
    if (changed) {
      _NgControlName_30_9.ngAfterChanges();
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
    _compView_9.detectHostChanges(firstCheck);
    if (firstCheck) {
      import21.setProperty(_el_15, 'alt', 'Fallback image');
    }
    final currVal_6 = _ctx.posterImageSrc;
    if (import26.checkBinding(_expr_6, currVal_6)) {
      import21.setProperty(_el_16, 'src', import26.appViewUtils.sanitizer.sanitizeUrl(currVal_6));
      _expr_6 = currVal_6;
    }
    _compView_17.detectHostChanges(firstCheck);
    _textBinding_25.updateText(import25.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_27.updateText(import25.interpolateString0(_ctx.writer));
    _compView_7.detectChanges();
    _compView_9.detectChanges();
    _compView_17.detectChanges();
    _compView_21.detectChanges();
    if ((!import26.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_21_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_7.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_17.destroyInternalState();
    _compView_21.destroyInternalState();
    _NgControlName_21_8.ngOnDestroy();
    _MaterialInputComponent_21_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_21_12.ngOnDestroy();
    _NgControlName_30_9.ngOnDestroy();
  }

  void _handle_click_7_0($event) {
    final local_landscapeImagefileInput = _el_11;
    local_landscapeImagefileInput.click();
  }

  void _handle_click_17_0($event) {
    final local_posterImagefileInput = _el_19;
    local_posterImagefileInput.click();
  }

  void _handle_ngModelChange_21_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.title = $event;
  }

  void _handle_ngModelChange_30_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.content = $event;
  }

  void _handle_input_30_2($event) {
    _DefaultValueAccessor_30_7.handleChange($event.target.value);
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
