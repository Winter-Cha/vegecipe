// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'write_vegebook_component.dart';
export 'write_vegebook_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/proto/date.pb.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_quill/angular_quill.template.dart' as _ref5;
import 'package:angular_router/angular_router.template.dart' as _ref6;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref7;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref8;
import 'package:web/src/routes.template.dart' as _ref9;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref10;
import 'package:web/src/vegebook_details/write_vegebook/write_vegebook_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'write_vegebook_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_components/material_button/material_button.template.dart' as import4;
import 'package:angular_components/material_button/material_button.dart' as import5;
import 'package:angular_components/material_input/material_input.template.dart' as import6;
import 'package:angular_components/material_input/deferred_validator.dart' as import7;
import 'package:angular_forms/src/directives/validators.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import 'package:angular_components/material_input/material_input.dart' as import10;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import11;
import 'package:angular_quill/src/quill/quill_component.template.dart' as import12;
import 'package:angular_quill/src/quill/quill_component.dart' as import13;
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
import 'package:angular_components/button_decorator/button_decorator.dart' as import26;
import 'package:angular_components/interfaces/has_disabled.dart' as import27;
import 'package:angular_forms/src/directives/ng_control.dart' as import28;
import 'package:angular_components/material_input/base_material_input.dart' as import29;
import 'package:angular_components/utils/angular/reference/reference.dart' as import30;
import 'package:angular_components/focus/focus_interface.dart' as import31;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import32;
import 'package:angular/src/core/linker/app_view_utils.dart' as import33;
import 'package:redux/src/store.dart' as import34;
import 'package:angular_router/src/router/router.dart' as import35;
import 'package:core/src/i18n/messages.dart' as import36;

final List<dynamic> styles$WriteVegeBookComponent = [import0.styles];

class ViewWriteVegeBookComponent0 extends AppView<import2.WriteVegeBookComponent> {
  final import3.TextBinding _textBinding_24 = import3.TextBinding();
  final import3.TextBinding _textBinding_26 = import3.TextBinding();
  import4.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import4.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_8_6;
  import4.ViewMaterialButtonComponent0 _compView_16;
  dynamic _AcxDarkTheme_16_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_16_6;
  import6.ViewMaterialInputComponent0 _compView_20;
  import7.DeferredValidator _DeferredValidator_20_5;
  import8.RequiredValidator _RequiredValidator_20_6;
  List<dynamic> _NgValidators_20_7;
  import9.NgModel _NgModel_20_8;
  import10.MaterialInputComponent _MaterialInputComponent_20_10;
  import11.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_20_12;
  import12.ViewQuillComponent0 _compView_29;
  import13.QuillComponent _QuillComponent_29_5;
  import13.QuillValueAccessor _QuillValueAccessor_29_6;
  List<import14.ControlValueAccessor<dynamic>> _NgValueAccessor_29_7;
  import9.NgModel _NgModel_29_8;
  bool _expr_0;
  var _expr_1;
  var _expr_5;
  import15.DivElement _el_0;
  import15.Element _el_4;
  import15.Element _el_14;
  import15.Element _el_15;
  import15.InputElement _el_10;
  import15.InputElement _el_18;
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
    _compView_6 = import4.ViewMaterialButtonComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_0.append(_el_6);
    this.updateChildClassNonHtml(_el_6, 'blue add-landscape-image');
    import21.setAttribute(_el_6, 'raised', '');
    import21.setAttribute(_el_6, 'type', 'file');
    addShimC(_el_6);
    _AcxDarkTheme_6_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_6_6 = import5.MaterialButtonComponent(_el_6, _AcxDarkTheme_6_5, _compView_6, null);
    final _text_7 = import21.createText('Add Landscape image');
    _compView_6.create(_MaterialButtonComponent_6_6, [
      [_text_7]
    ]);
    _compView_8 = import4.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_0.append(_el_8);
    this.updateChildClassNonHtml(_el_8, 'red save-btn');
    import21.setAttribute(_el_8, 'raised', '');
    import21.setAttribute(_el_8, 'type', 'file');
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_8_6 = import5.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8, null);
    final _text_9 = import21.createText('Save');
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_text_9]
    ]);
    _el_10 = import21.appendElement(doc, _el_0, 'input');
    import21.setAttribute(_el_10, 'accept', 'image/png, image/jpeg');
    import21.setAttribute(_el_10, 'hidden', '');
    import21.setAttribute(_el_10, 'type', 'file');
    addShimC(_el_10);
    final _el_11 = import21.appendDiv(doc, _el_0);
    this.updateChildClass(_el_11, 'vegebook-header');
    addShimC(_el_11);
    final _el_12 = import21.appendDiv(doc, _el_11);
    this.updateChildClass(_el_12, 'vegebook-poster');
    addShimC(_el_12);
    final _el_13 = import21.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'fallback-icon');
    addShimC(_el_13);
    _el_14 = import21.appendElement(doc, _el_13, 'img');
    import21.setAttribute(_el_14, 'src', 'images/fallback-icon.svg');
    addShimE(_el_14);
    _el_15 = import21.appendElement(doc, _el_12, 'img');
    this.updateChildClass(_el_15, 'poster-actual');
    addShimE(_el_15);
    _compView_16 = import4.ViewMaterialButtonComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    _el_12.append(_el_16);
    this.updateChildClassNonHtml(_el_16, 'blue add-post-image');
    import21.setAttribute(_el_16, 'raised', '');
    addShimC(_el_16);
    _AcxDarkTheme_16_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import23.AcxDarkTheme, () {
            return import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import23.AcxDarkTheme(parentView.injectorGetOptional(const import24.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_16_6 = import5.MaterialButtonComponent(_el_16, _AcxDarkTheme_16_5, _compView_16, null);
    final _text_17 = import21.createText('Add post');
    _compView_16.create(_MaterialButtonComponent_16_6, [
      [_text_17]
    ]);
    _el_18 = import21.appendElement(doc, _el_12, 'input');
    import21.setAttribute(_el_18, 'accept', 'image/png, image/jpeg');
    import21.setAttribute(_el_18, 'hidden', '');
    import21.setAttribute(_el_18, 'type', 'file');
    addShimC(_el_18);
    final _el_19 = import21.appendDiv(doc, _el_11);
    this.updateChildClass(_el_19, 'vegebook-information');
    addShimC(_el_19);
    _compView_20 = import6.ViewMaterialInputComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_19.append(_el_20);
    this.updateChildClassNonHtml(_el_20, import25.interpolateString2('', 'title', ' ', import10.MaterialInputComponent.hostClass, ''));
    import21.setAttribute(_el_20, 'floatingLabel', '');
    import21.setAttribute(_el_20, 'label', 'Type title [required]');
    import21.setAttribute(_el_20, 'required', '');
    import21.setAttribute(_el_20, 'requiredErrorMsg', 'This input requires a value!');
    import21.setAttribute(_el_20, 'type', 'text');
    addShimC(_el_20);
    _DeferredValidator_20_5 = import7.DeferredValidator();
    _RequiredValidator_20_6 = import8.RequiredValidator();
    _NgValidators_20_7 = [_DeferredValidator_20_5, _RequiredValidator_20_6];
    _NgModel_20_8 = import9.NgModel(_NgValidators_20_7, null);
    _MaterialInputComponent_20_10 = import10.MaterialInputComponent('text', null, null, _NgModel_20_8, _compView_20, _DeferredValidator_20_5);
    _MaterialInputDefaultValueAccessor_20_12 = import11.MaterialInputDefaultValueAccessor(_MaterialInputComponent_20_10, _NgModel_20_8);
    _compView_20.create(_MaterialInputComponent_20_10, [const [], const []]);
    final _el_21 = import21.appendDiv(doc, _el_19);
    this.updateChildClass(_el_21, 'body');
    addShimC(_el_21);
    final _el_22 = import21.appendElement(doc, _el_21, 'p');
    this.updateChildClass(_el_22, 'writtenBy');
    addShimE(_el_22);
    final _el_23 = import21.appendElement(doc, _el_22, 'strong');
    addShimE(_el_23);
    _el_23.append(_textBinding_24.element);
    final _text_25 = import21.appendText(_el_22, ': ');
    _el_22.append(_textBinding_26.element);
    final _el_27 = import21.appendDiv(doc, _el_0);
    this.updateChildClass(_el_27, 'section');
    addShimC(_el_27);
    final _el_28 = import21.appendDiv(doc, _el_27);
    this.updateChildClass(_el_28, 'centered-content');
    addShimC(_el_28);
    _compView_29 = import12.ViewQuillComponent0(this, 29);
    final _el_29 = _compView_29.rootEl;
    _el_28.append(_el_29);
    this.updateChildClassNonHtml(_el_29, 'quill_pad');
    import21.setAttribute(_el_29, 'placeholder', 'Write something...');
    addShimC(_el_29);
    _QuillComponent_29_5 = import13.QuillComponent();
    _QuillValueAccessor_29_6 = import13.QuillValueAccessor(_QuillComponent_29_5);
    _NgValueAccessor_29_7 = [_QuillValueAccessor_29_6];
    _NgModel_29_8 = import9.NgModel(null, _NgValueAccessor_29_7);
    _compView_29.create0(_QuillComponent_29_5);
    _el_5.addEventListener('click', eventHandler0(_ctx.goBack));
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    _el_8.addEventListener('click', eventHandler0(_ctx.submit));
    _el_10.addEventListener('change', eventHandler1(_ctx.onLandscapeImageFileSelected));
    _el_16.addEventListener('click', eventHandler1(_handle_click_16_0));
    _el_18.addEventListener('change', eventHandler1(_ctx.onPosterImageFileSelected));
    final subscription_0 = _NgModel_20_8.update.listen(eventHandler1(_handle_ngModelChange_20_0));
    final subscription_1 = _QuillComponent_29_5.blur.listen(eventHandler0(_ctx.blur));
    final subscription_2 = _QuillComponent_29_5.input.listen(eventHandler0(_ctx.input));
    final subscription_3 = _NgModel_29_8.update.listen(eventHandler1(_handle_ngModelChange_29_2));
    _ctx.landscapeImageElement = _el_4;
    _ctx.posterImageElement = _el_15;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 7))) {
      if (identical(token, import23.AcxDarkTheme)) {
        return _AcxDarkTheme_6_5;
      }
      if (((identical(token, import5.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_6_6;
      }
    }
    if (((8 <= nodeIndex) && (nodeIndex <= 9))) {
      if (identical(token, import23.AcxDarkTheme)) {
        return _AcxDarkTheme_8_5;
      }
      if (((identical(token, import5.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_8_6;
      }
    }
    if (((16 <= nodeIndex) && (nodeIndex <= 17))) {
      if (identical(token, import23.AcxDarkTheme)) {
        return _AcxDarkTheme_16_5;
      }
      if (((identical(token, import5.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_16_6;
      }
    }
    if ((20 == nodeIndex)) {
      if (identical(token, import7.DeferredValidator)) {
        return _DeferredValidator_20_5;
      }
      if (identical(token, const import24.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_20_7;
      }
      if ((identical(token, import9.NgModel) || identical(token, import28.NgControl))) {
        return _NgModel_20_8;
      }
      if (((((identical(token, import10.MaterialInputComponent) || identical(token, import29.BaseMaterialInput)) || identical(token, import30.ReferenceDirective)) || identical(token, import31.Focusable)) || identical(token, import27.HasDisabled))) {
        return _MaterialInputComponent_20_10;
      }
    }
    if ((29 == nodeIndex)) {
      if (identical(token, const import24.MultiToken<import32.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_29_7;
      }
      if ((identical(token, import9.NgModel) || identical(token, import28.NgControl))) {
        return _NgModel_29_8;
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
    if (((!import33.AppViewUtils.throwOnChanges) && firstCheck)) {
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
    if (firstCheck) {
      (_QuillComponent_29_5.placeholder = 'Write something...');
    }
    changed = false;
    _NgModel_29_8.model = _ctx.htmlStr;
    _NgModel_29_8.ngAfterChanges();
    if (((!import33.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_29_8.ngOnInit();
    }
    if ((!import33.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _QuillComponent_29_5.ngAfterContentInit();
      }
    }
    final currVal_0 = _ctx.contentVisible;
    if (import33.checkBinding(_expr_0, currVal_0)) {
      import21.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.landscapeImageSrc;
    if (import33.checkBinding(_expr_1, currVal_1)) {
      import21.setProperty(_el_4, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
      _expr_1 = currVal_1;
    }
    _compView_6.detectHostChanges(firstCheck);
    _compView_8.detectHostChanges(firstCheck);
    if (firstCheck) {
      import21.setProperty(_el_14, 'alt', 'Fallback image');
    }
    final currVal_5 = _ctx.posterImageSrc;
    if (import33.checkBinding(_expr_5, currVal_5)) {
      import21.setProperty(_el_15, 'src', import33.appViewUtils.sanitizer.sanitizeUrl(currVal_5));
      _expr_5 = currVal_5;
    }
    _compView_16.detectHostChanges(firstCheck);
    _textBinding_24.updateText(import25.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_26.updateText(import25.interpolateString0(_ctx.writer));
    _compView_6.detectChanges();
    _compView_8.detectChanges();
    _compView_16.detectChanges();
    _compView_20.detectChanges();
    _compView_29.detectChanges();
    if ((!import33.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_20_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_6.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_16.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_29.destroyInternalState();
    _MaterialInputComponent_20_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_20_12.ngOnDestroy();
    _QuillComponent_29_5.ngOnDestroy();
    _QuillValueAccessor_29_6.ngOnDestroy();
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

  void _handle_ngModelChange_29_2($event) {
    final _ctx = ctx;
    _ctx.htmlStr = $event;
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
            return import2.WriteVegeBookComponent(this.injectorGet(import34.Store, viewData.parentIndex), this.injectorGet(import35.Router, viewData.parentIndex), this.injectorGet(import36.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import34.Store, viewData.parentIndex), this.injectorGet(import35.Router, viewData.parentIndex), this.injectorGet(import36.Messages, viewData.parentIndex)));
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
  _ref10.initReflector();
}
