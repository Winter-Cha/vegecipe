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
import 'package:web/src/common/loading_view/loading_whole_view_component.template.dart' as _ref7;
import 'package:web/src/common/medium_editor/medium_editor.template.dart' as _ref8;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.template.dart' as _ref9;
import 'package:web/src/routes.template.dart' as _ref10;
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.template.dart' as _ref11;
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
import '../../common/loading_view/loading_whole_view_component.template.dart' as import16;
import '../../common/loading_view/loading_whole_view_component.dart' as import17;
import 'package:angular_forms/src/directives/ng_form.dart' as import18;
import 'package:angular_forms/src/directives/validators.dart' as import19;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import20;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import21;
import 'package:angular_forms/src/directives/ng_control_name.dart' as import22;
import 'package:angular/src/di/errors.dart' as import23;
import 'package:core/src/i18n/messages.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import26;
import 'package:angular_forms/src/directives/ng_control.dart' as import27;
import 'package:angular_forms/src/directives/control_container.dart' as import28;
import 'package:angular/src/runtime/interpolate.dart' as import29;
import 'package:angular_components/material_button/material_button.template.dart' as import30;
import 'package:angular_components/material_button/material_button.dart' as import31;
import 'package:angular_components/theme/dark_theme.dart' as import32;
import 'package:angular_components/button_decorator/button_decorator.dart' as import33;
import 'package:angular_components/interfaces/has_disabled.dart' as import34;
import 'package:angular_components/material_input/material_input.template.dart' as import35;
import 'package:angular_components/material_input/deferred_validator.dart' as import36;
import 'package:angular_components/material_input/material_input.dart' as import37;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import38;
import 'package:angular_components/material_input/base_material_input.dart' as import39;
import 'package:angular_components/utils/angular/reference/reference.dart' as import40;
import 'package:angular_components/focus/focus_interface.dart' as import41;
import '../landscape_image/vegebook_landscape_image_component.template.dart' as import42;
import '../landscape_image/vegebook_landscape_image_component.dart' as import43;
import 'lazy_image_component.template.dart' as import44;
import 'lazy_image_component.dart' as import45;
import 'package:redux/src/store.dart' as import46;
import 'package:angular_router/src/router/router.dart' as import47;

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
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_WriteVegeBookComponent6);
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
          return [nestedView._el_6];
        }));
        _query_landscapeImage_1_0_isDirty = false;
      }
      if (_query_posterImage_1_1_isDirty) {
        _ctx.posterImageElement = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewWriteVegeBookComponent1 nestedView) {
          return [nestedView._el_17];
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
  final import15.TextBinding _textBinding_29 = import15.TextBinding();
  final import15.TextBinding _textBinding_31 = import15.TextBinding();
  import16.ViewLoadingWholeViewComponent0 _compView_1;
  import17.LoadingWholeViewComponent _LoadingWholeViewComponent_1_5;
  import18.NgForm _NgForm_2_5;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  import19.RequiredValidator _RequiredValidator_10_5;
  List<dynamic> _NgValidators_10_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_10_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_10_8;
  import22.NgControlName _NgControlName_10_9;
  ViewContainer _appEl_18;
  NgIf _NgIf_18_9;
  import19.RequiredValidator _RequiredValidator_20_5;
  List<dynamic> _NgValidators_20_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_20_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_20_8;
  import22.NgControlName _NgControlName_20_9;
  ViewContainer _appEl_24;
  NgIf _NgIf_24_9;
  ViewContainer _appEl_25;
  NgIf _NgIf_25_9;
  import19.RequiredValidator _RequiredValidator_38_5;
  List<dynamic> _NgValidators_38_6;
  import20.DefaultValueAccessor _DefaultValueAccessor_38_7;
  List<import21.ControlValueAccessor<dynamic>> _NgValueAccessor_38_8;
  import22.NgControlName _NgControlName_38_9;
  var _expr_0;
  bool _expr_1;
  String _expr_2;
  var _expr_3;
  var _expr_4;
  import8.InputElement _el_12;
  var _expr_7;
  var _expr_10;
  import8.InputElement _el_22;
  var _expr_13;
  var _expr_17;
  var _expr_19;
  import8.Element _el_6;
  import8.Element _el_17;
  import8.DivElement _el_0;
  import8.Element _el_16;
  import8.ButtonElement _el_33;
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
    _compView_1 = import16.ViewLoadingWholeViewComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _LoadingWholeViewComponent_1_5 = (import9.isDevMode
        ? import23.debugInjectorWrap(import17.LoadingWholeViewComponent, () {
            return import17.LoadingWholeViewComponent(parentView.injectorGet(import24.Messages, viewData.parentIndex));
          })
        : import17.LoadingWholeViewComponent(parentView.injectorGet(import24.Messages, viewData.parentIndex)));
    _compView_1.create(_LoadingWholeViewComponent_1_5, [const []]);
    final _el_2 = import11.appendElement(doc, _el_0, 'form');
    addShimC(_el_2);
    _NgForm_2_5 = import18.NgForm(null);
    final _el_3 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'landscape-container');
    addShimC(_el_3);
    final _el_4 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_4, 'landscape-placeholder');
    addShimC(_el_4);
    final _el_5 = import11.appendElement(doc, _el_4, 'img');
    import11.setAttribute(_el_5, 'src', 'images/fallback-icon.svg');
    addShimE(_el_5);
    _el_6 = import11.appendElement(doc, _el_3, 'img');
    this.updateChildClass(_el_6, 'landscape-actual');
    addShimE(_el_6);
    final _el_7 = import11.appendElement(doc, _el_2, 'img');
    this.updateChildClass(_el_7, 'back');
    import11.setAttribute(_el_7, 'src', 'images/back.svg');
    addShimE(_el_7);
    final _anchor_8 = import11.appendAnchor(_el_2);
    _appEl_8 = ViewContainer(8, 2, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_WriteVegeBookComponent2);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    final _el_9 = import11.appendDiv(doc, _el_2);
    import11.setAttribute(_el_9, 'style', 'display: none;');
    addShimC(_el_9);
    final _el_10 = import11.appendElement(doc, _el_9, 'input');
    import11.setAttribute(_el_10, 'ngControl', 'lImage');
    import11.setAttribute(_el_10, 'required', '');
    import11.setAttribute(_el_10, 'type', 'text');
    addShimC(_el_10);
    _RequiredValidator_10_5 = import19.RequiredValidator();
    _NgValidators_10_6 = [_RequiredValidator_10_5];
    _DefaultValueAccessor_10_7 = import20.DefaultValueAccessor(_el_10);
    _NgValueAccessor_10_8 = [_DefaultValueAccessor_10_7];
    _NgControlName_10_9 = import22.NgControlName(_NgForm_2_5, _NgValidators_10_6, _NgValueAccessor_10_8);
    final _text_11 = import11.appendText(_el_9, ' ');
    _el_12 = import11.appendElement(doc, _el_9, 'input');
    import11.setAttribute(_el_12, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_12, 'required', '');
    import11.setAttribute(_el_12, 'type', 'file');
    addShimC(_el_12);
    final _el_13 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_13, 'vegebook-header');
    addShimC(_el_13);
    final _el_14 = import11.appendDiv(doc, _el_13);
    this.updateChildClass(_el_14, 'vegebook-poster');
    addShimC(_el_14);
    final _el_15 = import11.appendDiv(doc, _el_14);
    this.updateChildClass(_el_15, 'fallback-icon');
    addShimC(_el_15);
    _el_16 = import11.appendElement(doc, _el_15, 'img');
    import11.setAttribute(_el_16, 'src', 'images/fallback-icon.svg');
    addShimE(_el_16);
    _el_17 = import11.appendElement(doc, _el_14, 'img');
    this.updateChildClass(_el_17, 'poster-actual');
    addShimE(_el_17);
    final _anchor_18 = import11.appendAnchor(_el_14);
    _appEl_18 = ViewContainer(18, 14, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = TemplateRef(_appEl_18, viewFactory_WriteVegeBookComponent3);
    _NgIf_18_9 = NgIf(_appEl_18, _TemplateRef_18_8);
    final _el_19 = import11.appendDiv(doc, _el_14);
    import11.setAttribute(_el_19, 'style', 'display: none;');
    addShimC(_el_19);
    final _el_20 = import11.appendElement(doc, _el_19, 'input');
    import11.setAttribute(_el_20, 'ngControl', 'pImage');
    import11.setAttribute(_el_20, 'required', '');
    import11.setAttribute(_el_20, 'type', 'text');
    addShimC(_el_20);
    _RequiredValidator_20_5 = import19.RequiredValidator();
    _NgValidators_20_6 = [_RequiredValidator_20_5];
    _DefaultValueAccessor_20_7 = import20.DefaultValueAccessor(_el_20);
    _NgValueAccessor_20_8 = [_DefaultValueAccessor_20_7];
    _NgControlName_20_9 = import22.NgControlName(_NgForm_2_5, _NgValidators_20_6, _NgValueAccessor_20_8);
    final _text_21 = import11.appendText(_el_19, ' ');
    _el_22 = import11.appendElement(doc, _el_19, 'input');
    import11.setAttribute(_el_22, 'accept', 'image/png, image/jpeg');
    import11.setAttribute(_el_22, 'type', 'file');
    addShimC(_el_22);
    final _el_23 = import11.appendDiv(doc, _el_13);
    this.updateChildClass(_el_23, 'vegebook-information');
    addShimC(_el_23);
    final _anchor_24 = import11.appendAnchor(_el_23);
    _appEl_24 = ViewContainer(24, 23, this, _anchor_24);
    TemplateRef _TemplateRef_24_8 = TemplateRef(_appEl_24, viewFactory_WriteVegeBookComponent4);
    _NgIf_24_9 = NgIf(_appEl_24, _TemplateRef_24_8);
    final _anchor_25 = import11.appendAnchor(_el_23);
    _appEl_25 = ViewContainer(25, 23, this, _anchor_25);
    TemplateRef _TemplateRef_25_8 = TemplateRef(_appEl_25, viewFactory_WriteVegeBookComponent5);
    _NgIf_25_9 = NgIf(_appEl_25, _TemplateRef_25_8);
    final _el_26 = import11.appendDiv(doc, _el_23);
    this.updateChildClass(_el_26, 'body');
    addShimC(_el_26);
    final _el_27 = import11.appendElement(doc, _el_26, 'p');
    this.updateChildClass(_el_27, 'writtenBy');
    addShimE(_el_27);
    final _el_28 = import11.appendElement(doc, _el_27, 'strong');
    addShimE(_el_28);
    _el_28.append(_textBinding_29.element);
    final _text_30 = import11.appendText(_el_27, ': ');
    _el_27.append(_textBinding_31.element);
    final _text_32 = import11.appendText(_el_23, ' ');
    _el_33 = import11.appendElement(doc, _el_23, 'button');
    this.updateChildClass(_el_33, 'save-btn');
    import11.setAttribute(_el_33, 'type', 'button');
    addShimC(_el_33);
    final _text_34 = import11.appendText(_el_33, 'SUBMIT');
    final _el_35 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_35, 'section');
    addShimC(_el_35);
    final _el_36 = import11.appendDiv(doc, _el_35);
    this.updateChildClass(_el_36, 'centered-content');
    addShimC(_el_36);
    final _el_37 = import11.appendDiv(doc, _el_36);
    import11.setAttribute(_el_37, 'style', 'display: none;');
    addShimC(_el_37);
    final _el_38 = import11.appendElement(doc, _el_37, 'input');
    import11.setAttribute(_el_38, 'id', 'editableInput');
    import11.setAttribute(_el_38, 'ngControl', 'content');
    import11.setAttribute(_el_38, 'required', '');
    import11.setAttribute(_el_38, 'type', 'text');
    addShimC(_el_38);
    _RequiredValidator_38_5 = import19.RequiredValidator();
    _NgValidators_38_6 = [_RequiredValidator_38_5];
    _DefaultValueAccessor_38_7 = import20.DefaultValueAccessor(_el_38);
    _NgValueAccessor_38_8 = [_DefaultValueAccessor_38_7];
    _NgControlName_38_9 = import22.NgControlName(_NgForm_2_5, _NgValidators_38_6, _NgValueAccessor_38_8);
    final _el_39 = import11.appendDiv(doc, _el_36);
    this.updateChildClass(_el_39, 'editable content');
    addShimC(_el_39);
    final subscription_0 = _LoadingWholeViewComponent_1_5.actionButtonClicked.listen(eventHandler0(_ctx.onSubmit));
    import13.appViewUtils.eventManager.addEventListener(_el_2, 'submit', eventHandler1(_NgForm_2_5.onSubmit));
    _el_2.addEventListener('reset', eventHandler1(_NgForm_2_5.onReset));
    final subscription_1 = _NgForm_2_5.ngSubmit.listen(eventHandler0(_ctx.onSubmit));
    _el_7.addEventListener('click', eventHandler0(_ctx.goBack));
    _el_10.addEventListener('blur', eventHandler0(_DefaultValueAccessor_10_7.touchHandler));
    _el_10.addEventListener('input', eventHandler1(_handle_input_10_2));
    final subscription_2 = _NgControlName_10_9.update.listen(eventHandler1(_handle_ngModelChange_10_0));
    _el_12.addEventListener('change', eventHandler1(_ctx.onLandscapeImageFileSelected));
    _el_20.addEventListener('blur', eventHandler0(_DefaultValueAccessor_20_7.touchHandler));
    _el_20.addEventListener('input', eventHandler1(_handle_input_20_2));
    final subscription_3 = _NgControlName_20_9.update.listen(eventHandler1(_handle_ngModelChange_20_0));
    _el_22.addEventListener('change', eventHandler1(_ctx.onPosterImageFileSelected));
    _el_33.addEventListener('click', eventHandler0(_ctx.onSubmit));
    _el_38.addEventListener('blur', eventHandler0(_DefaultValueAccessor_38_7.touchHandler));
    _el_38.addEventListener('input', eventHandler1(_handle_input_38_2));
    final subscription_4 = _NgControlName_38_9.update.listen(eventHandler1(_handle_ngModelChange_38_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((2 <= nodeIndex) && (nodeIndex <= 39))) {
      if ((10 == nodeIndex)) {
        if (identical(token, const import25.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_10_6;
        }
        if (identical(token, const import25.MultiToken<import26.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_10_8;
        }
        if (identical(token, import27.NgControl)) {
          return _NgControlName_10_9;
        }
      }
      if ((20 == nodeIndex)) {
        if (identical(token, const import25.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_20_6;
        }
        if (identical(token, const import25.MultiToken<import26.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_20_8;
        }
        if (identical(token, import27.NgControl)) {
          return _NgControlName_20_9;
        }
      }
      if ((38 == nodeIndex)) {
        if (identical(token, const import25.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_38_6;
        }
        if (identical(token, const import25.MultiToken<import26.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return _NgValueAccessor_38_8;
        }
        if (identical(token, import27.NgControl)) {
          return _NgControlName_38_9;
        }
      }
      if ((identical(token, import18.NgForm) || identical(token, import28.ControlContainer))) {
        return _NgForm_2_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import18.NgForm local_bookForm = _NgForm_2_5;
    final currVal_2 = _ctx.messages.saveVegeBookError;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _LoadingWholeViewComponent_1_5.errorMessage = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.saveStatus;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _LoadingWholeViewComponent_1_5.status = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_8_9.ngIf = (!_ctx.editMode);
    if (firstCheck) {
      (_RequiredValidator_10_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_10_9.name = 'lImage';
      changed = true;
    }
    final currVal_7 = _ctx.landscapeImageSrc;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      _NgControlName_10_9.model = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _NgControlName_10_9.ngAfterChanges();
    }
    _NgIf_18_9.ngIf = (!_ctx.editMode);
    if (firstCheck) {
      (_RequiredValidator_20_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_20_9.name = 'pImage';
      changed = true;
    }
    final currVal_13 = _ctx.posterImageSrc;
    if (import13.checkBinding(_expr_13, currVal_13)) {
      _NgControlName_20_9.model = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _NgControlName_20_9.ngAfterChanges();
    }
    _NgIf_24_9.ngIf = (!_ctx.editMode);
    _NgIf_25_9.ngIf = _ctx.editMode;
    if (firstCheck) {
      (_RequiredValidator_38_5.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_38_9.name = 'content';
      changed = true;
    }
    final currVal_19 = _ctx.vegeBook.content;
    if (import13.checkBinding(_expr_19, currVal_19)) {
      _NgControlName_38_9.model = currVal_19;
      changed = true;
      _expr_19 = currVal_19;
    }
    if (changed) {
      _NgControlName_38_9.ngAfterChanges();
    }
    _appEl_8.detectChangesInNestedViews();
    _appEl_18.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    _appEl_25.detectChangesInNestedViews();
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
    final currVal_4 = _ctx.landscapeImageSrc;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      import11.setProperty(_el_6, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_4));
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      import11.setProperty(_el_16, 'alt', 'Fallback image');
    }
    final currVal_10 = _ctx.posterImageSrc;
    if (import13.checkBinding(_expr_10, currVal_10)) {
      import11.setProperty(_el_17, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_10));
      _expr_10 = currVal_10;
    }
    _textBinding_29.updateText(import29.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_31.updateText(import29.interpolateString0(_ctx.vegeBook.writtenBy));
    final bool currVal_17 = (!local_bookForm.form.valid);
    if (import13.checkBinding(_expr_17, currVal_17)) {
      import11.setProperty(_el_33, 'disabled', currVal_17);
      _expr_17 = currVal_17;
    }
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewWriteVegeBookComponent0>(parentView)._query_landscapeImage_1_0_isDirty = true;
    import9.unsafeCast<ViewWriteVegeBookComponent0>(parentView)._query_posterImage_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_18.destroyNestedViews();
    _appEl_24.destroyNestedViews();
    _appEl_25.destroyNestedViews();
    _compView_1.destroyInternalState();
    _LoadingWholeViewComponent_1_5.ngOnDestroy();
    _NgControlName_10_9.ngOnDestroy();
    _NgControlName_20_9.ngOnDestroy();
    _NgControlName_38_9.ngOnDestroy();
  }

  void _handle_ngModelChange_10_0($event) {
    final _ctx = ctx;
    _ctx.landscapeImageSrc = $event;
  }

  void _handle_input_10_2($event) {
    _DefaultValueAccessor_10_7.handleChange($event.target.value);
  }

  void _handle_ngModelChange_20_0($event) {
    final _ctx = ctx;
    _ctx.posterImageSrc = $event;
  }

  void _handle_input_20_2($event) {
    _DefaultValueAccessor_20_7.handleChange($event.target.value);
  }

  void _handle_ngModelChange_38_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.content = $event;
  }

  void _handle_input_38_2($event) {
    _DefaultValueAccessor_38_7.handleChange($event.target.value);
  }
}

AppView<void> viewFactory_WriteVegeBookComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent1(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent2 extends AppView<import2.WriteVegeBookComponent> {
  import30.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import31.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewWriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import30.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'blue add-landscape-image');
    import11.setAttribute(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import23.debugInjectorWrap(import32.AcxDarkTheme, () {
            return import32.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import32.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import31.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final _text_1 = import11.createText('Add Landscape image');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import32.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import31.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled))) {
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

  void _handle_click_0_0($event) {
    final local_landscapeImagefileInput = import9.unsafeCast<_ViewWriteVegeBookComponent1>(parentView)._el_12;
    local_landscapeImagefileInput.click();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent2(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent3 extends AppView<import2.WriteVegeBookComponent> {
  import30.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import31.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewWriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import30.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'blue add-post-image');
    import11.setAttribute(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import23.debugInjectorWrap(import32.AcxDarkTheme, () {
            return import32.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import32.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import31.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final _text_1 = import11.createText('Add post');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import32.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import31.MaterialButtonComponent) || identical(token, import33.ButtonDirective)) || identical(token, import34.HasDisabled))) {
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

  void _handle_click_0_0($event) {
    final local_posterImagefileInput = import9.unsafeCast<_ViewWriteVegeBookComponent1>(parentView)._el_22;
    local_posterImagefileInput.click();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent3(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent4 extends AppView<import2.WriteVegeBookComponent> {
  import35.ViewMaterialInputComponent0 _compView_0;
  import36.DeferredValidator _DeferredValidator_0_5;
  import19.RequiredValidator _RequiredValidator_0_6;
  List<dynamic> _NgValidators_0_7;
  import22.NgControlName _NgControlName_0_8;
  import37.MaterialInputComponent _MaterialInputComponent_0_10;
  import38.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_12;
  var _expr_1;
  _ViewWriteVegeBookComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import35.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import29.interpolateString2('', 'title', ' ', import37.MaterialInputComponent.hostClass, ''));
    import11.setAttribute(_el_0, 'floatingLabel', '');
    import11.setAttribute(_el_0, 'id', 'title');
    import11.setAttribute(_el_0, 'label', 'Type title [required]');
    import11.setAttribute(_el_0, 'ngControl', 'title');
    import11.setAttribute(_el_0, 'required', '');
    import11.setAttribute(_el_0, 'requiredErrorMsg', 'This input requires a value!');
    import11.setAttribute(_el_0, 'type', 'text');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import36.DeferredValidator();
    _RequiredValidator_0_6 = import19.RequiredValidator();
    _NgValidators_0_7 = [_DeferredValidator_0_5, _RequiredValidator_0_6];
    _NgControlName_0_8 = import22.NgControlName(import9.unsafeCast<_ViewWriteVegeBookComponent1>(parentView)._NgForm_2_5, _NgValidators_0_7, null);
    _MaterialInputComponent_0_10 = import37.MaterialInputComponent('text', null, null, _NgControlName_0_8, _compView_0, _DeferredValidator_0_5);
    _MaterialInputDefaultValueAccessor_0_12 = import38.MaterialInputDefaultValueAccessor(_MaterialInputComponent_0_10, _NgControlName_0_8);
    _compView_0.create(_MaterialInputComponent_0_10, [const [], const []]);
    final subscription_0 = _NgControlName_0_8.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import36.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (identical(token, const import25.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_7;
      }
      if (identical(token, import27.NgControl)) {
        return _NgControlName_0_8;
      }
      if (((((identical(token, import37.MaterialInputComponent) || identical(token, import39.BaseMaterialInput)) || identical(token, import40.ReferenceDirective)) || identical(token, import41.Focusable)) || identical(token, import34.HasDisabled))) {
        return _MaterialInputComponent_0_10;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_RequiredValidator_0_6.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_0_8.name = 'title';
      changed = true;
    }
    final currVal_1 = _ctx.vegeBook.title;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _NgControlName_0_8.model = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _NgControlName_0_8.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_10.label = 'Type title [required]';
      changed = true;
      _MaterialInputComponent_0_10.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_0_10.requiredErrorMsg = 'This input requires a value!';
      changed = true;
      _MaterialInputComponent_0_10.required = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _NgControlName_0_8.ngOnDestroy();
    _MaterialInputComponent_0_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_12.ngOnDestroy();
  }

  void _handle_ngModelChange_0_0($event) {
    final _ctx = ctx;
    _ctx.vegeBook.title = $event;
  }
}

AppView<void> viewFactory_WriteVegeBookComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent4(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent5 extends AppView<import2.WriteVegeBookComponent> {
  import35.ViewMaterialInputComponent0 _compView_0;
  import36.DeferredValidator _DeferredValidator_0_5;
  import19.RequiredValidator _RequiredValidator_0_6;
  List<dynamic> _NgValidators_0_7;
  import22.NgControlName _NgControlName_0_8;
  import37.MaterialInputComponent _MaterialInputComponent_0_10;
  import38.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_12;
  var _expr_1;
  _ViewWriteVegeBookComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import35.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import29.interpolateString2('', 'title', ' ', import37.MaterialInputComponent.hostClass, ''));
    import11.setAttribute(_el_0, 'floatingLabel', '');
    import11.setAttribute(_el_0, 'id', 'title');
    import11.setAttribute(_el_0, 'label', 'Type title [required]');
    import11.setAttribute(_el_0, 'ngControl', 'title');
    import11.setAttribute(_el_0, 'required', '');
    import11.setAttribute(_el_0, 'requiredErrorMsg', 'This input requires a value!');
    import11.setAttribute(_el_0, 'type', 'text');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import36.DeferredValidator();
    _RequiredValidator_0_6 = import19.RequiredValidator();
    _NgValidators_0_7 = [_DeferredValidator_0_5, _RequiredValidator_0_6];
    _NgControlName_0_8 = import22.NgControlName(import9.unsafeCast<_ViewWriteVegeBookComponent1>(parentView)._NgForm_2_5, _NgValidators_0_7, null);
    _MaterialInputComponent_0_10 = import37.MaterialInputComponent('text', null, null, _NgControlName_0_8, _compView_0, _DeferredValidator_0_5);
    _MaterialInputDefaultValueAccessor_0_12 = import38.MaterialInputDefaultValueAccessor(_MaterialInputComponent_0_10, _NgControlName_0_8);
    _compView_0.create(_MaterialInputComponent_0_10, [const [], const []]);
    final subscription_0 = _NgControlName_0_8.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import36.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (identical(token, const import25.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_7;
      }
      if (identical(token, import27.NgControl)) {
        return _NgControlName_0_8;
      }
      if (((((identical(token, import37.MaterialInputComponent) || identical(token, import39.BaseMaterialInput)) || identical(token, import40.ReferenceDirective)) || identical(token, import41.Focusable)) || identical(token, import34.HasDisabled))) {
        return _MaterialInputComponent_0_10;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_RequiredValidator_0_6.required = true);
    }
    changed = false;
    if (firstCheck) {
      _NgControlName_0_8.name = 'title';
      changed = true;
    }
    final currVal_1 = _ctx.copyBook.title;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _NgControlName_0_8.model = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _NgControlName_0_8.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_10.label = 'Type title [required]';
      changed = true;
      _MaterialInputComponent_0_10.floatingLabel = true;
      changed = true;
      _MaterialInputComponent_0_10.requiredErrorMsg = 'This input requires a value!';
      changed = true;
      _MaterialInputComponent_0_10.required = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _NgControlName_0_8.ngOnDestroy();
    _MaterialInputComponent_0_10.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_12.ngOnDestroy();
  }

  void _handle_ngModelChange_0_0($event) {
    final _ctx = ctx;
    _ctx.copyBook.title = $event;
  }
}

AppView<void> viewFactory_WriteVegeBookComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent5(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent6 extends AppView<import2.WriteVegeBookComponent> {
  final import15.TextBinding _textBinding_11 = import15.TextBinding();
  import42.ViewVegeBookLandscapeImageComponent0 _compView_2;
  import43.VegeBookLandscapeImageComponent _VegeBookLandscapeImageComponent_2_5;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  import8.DivElement _el_0;
  import8.Element _el_7;
  _ViewWriteVegeBookComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _compView_2 = import42.ViewVegeBookLandscapeImageComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    addShimC(_el_2);
    _VegeBookLandscapeImageComponent_2_5 = import43.VegeBookLandscapeImageComponent();
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
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_WriteVegeBookComponent7);
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
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_WriteVegeBookComponent8);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _anchor_14 = import11.appendAnchor(_el_9);
    _appEl_14 = ViewContainer(14, 9, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_WriteVegeBookComponent9);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    final _anchor_15 = import11.appendAnchor(_el_0);
    _appEl_15 = ViewContainer(15, 0, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_WriteVegeBookComponent10);
    _NgIf_15_9 = NgIf(_appEl_15, _TemplateRef_15_8);
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
    _NgIf_14_9.ngIf = _ctx.isMine;
    _NgIf_15_9.ngIf = _ctx.vegeBook.hasContent;
    _appEl_8.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
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
    _textBinding_11.updateText(import29.interpolateString0(_ctx.vegeBook.title));
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _compView_2.destroyInternalState();
    _VegeBookLandscapeImageComponent_2_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_WriteVegeBookComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent6(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent7 extends AppView<import2.WriteVegeBookComponent> {
  import44.ViewLazyImageComponent0 _compView_0;
  import45.LazyImageComponent _LazyImageComponent_0_5;
  String _expr_0;
  String _expr_1;
  _ViewWriteVegeBookComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    _compView_0 = import44.ViewLazyImageComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _LazyImageComponent_0_5 = import45.LazyImageComponent(_el_0);
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

AppView<void> viewFactory_WriteVegeBookComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent7(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent8 extends AppView<import2.WriteVegeBookComponent> {
  final import15.TextBinding _textBinding_2 = import15.TextBinding();
  final import15.TextBinding _textBinding_4 = import15.TextBinding();
  _ViewWriteVegeBookComponent8(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<void> viewFactory_WriteVegeBookComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent8(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent9 extends AppView<import2.WriteVegeBookComponent> {
  _ViewWriteVegeBookComponent9(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WriteVegeBookComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('button');
    this.updateChildClass(_el_0, 'save-btn');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, 'EDIT');
    _el_0.addEventListener('click', eventHandler0(_ctx.goEdit));
    init1(_el_0);
  }
}

AppView<void> viewFactory_WriteVegeBookComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent9(parentView, parentIndex);
}

class _ViewWriteVegeBookComponent10 extends AppView<import2.WriteVegeBookComponent> {
  var _expr_0;
  import8.Element _el_2;
  _ViewWriteVegeBookComponent10(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    this.updateChildClassNonHtml(_el_2, 'html-content');
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

AppView<void> viewFactory_WriteVegeBookComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWriteVegeBookComponent10(parentView, parentIndex);
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
        ? import23.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import46.Store, viewData.parentIndex), this.injectorGet(import47.Router, viewData.parentIndex), this.injectorGet(import24.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import46.Store, viewData.parentIndex), this.injectorGet(import47.Router, viewData.parentIndex), this.injectorGet(import24.Messages, viewData.parentIndex)));
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
  _ref11.initReflector();
}
