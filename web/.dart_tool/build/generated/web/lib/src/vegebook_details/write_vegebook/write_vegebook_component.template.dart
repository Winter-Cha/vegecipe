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
import 'package:angular/src/runtime/text_binding.dart' as import13;
import '../landscape_image/vegebook_landscape_image_component.template.dart' as import14;
import '../landscape_image/vegebook_landscape_image_component.dart' as import15;
import 'package:angular_components/material_button/material_button.template.dart' as import16;
import 'package:angular_components/material_button/material_button.dart' as import17;
import '../../common/vegebook_poster/vegebook_poster_component.template.dart' as import18;
import '../../common/vegebook_poster/vegebook_poster_component.dart' as import19;
import 'package:angular_quill/src/quill/quill_component.template.dart' as import20;
import 'package:angular_quill/src/quill/quill_component.dart' as import21;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import22;
import 'package:angular_forms/src/directives/ng_model.dart' as import23;
import 'package:angular/src/di/errors.dart' as import24;
import 'package:angular_components/theme/dark_theme.dart' as import25;
import 'package:angular/src/core/di/opaque_token.dart' as import26;
import 'package:core/src/i18n/messages.dart' as import27;
import 'package:angular_components/button_decorator/button_decorator.dart' as import28;
import 'package:angular_components/interfaces/has_disabled.dart' as import29;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import30;
import 'package:angular_forms/src/directives/ng_control.dart' as import31;
import 'package:angular/src/core/linker/app_view_utils.dart' as import32;
import 'package:angular/src/runtime/interpolate.dart' as import33;
import 'package:redux/src/store.dart' as import34;
import 'package:angular_router/src/router/router.dart' as import35;

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
  final import13.TextBinding _textBinding_9 = import13.TextBinding();
  import14.ViewVegeBookLandscapeImageComponent0 _compView_1;
  import15.VegeBookLandscapeImageComponent _VegeBookLandscapeImageComponent_1_5;
  import16.ViewMaterialButtonComponent0 _compView_3;
  dynamic _AcxDarkTheme_3_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_3_6;
  import18.ViewVegeBookPosterComponent0 _compView_6;
  import19.VegeBookPosterComponent _VegeBookPosterComponent_6_5;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  import20.ViewQuillComponent0 _compView_14;
  import21.QuillComponent _QuillComponent_14_5;
  import21.QuillValueAccessor _QuillValueAccessor_14_6;
  List<import22.ControlValueAccessor<dynamic>> _NgValueAccessor_14_7;
  import23.NgModel _NgModel_14_8;
  bool _expr_0;
  var _expr_1;
  var _expr_3;
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
    this.updateChildClassNonHtml(_el_3, 'blue add-landscape-image');
    import11.setAttribute(_el_3, 'raised', '');
    addShimC(_el_3);
    _AcxDarkTheme_3_5 = (import9.isDevMode
        ? import24.debugInjectorWrap(import25.AcxDarkTheme, () {
            return import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_3_6 = import17.MaterialButtonComponent(_el_3, _AcxDarkTheme_3_5, _compView_3, null);
    final _text_4 = import11.createText('Add Landscape image');
    _compView_3.create(_MaterialButtonComponent_3_6, [
      [_text_4]
    ]);
    final _el_5 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_5, 'vegebook-header');
    addShimC(_el_5);
    _compView_6 = import18.ViewVegeBookPosterComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_5.append(_el_6);
    addShimC(_el_6);
    _VegeBookPosterComponent_6_5 = (import9.isDevMode
        ? import24.debugInjectorWrap(import19.VegeBookPosterComponent, () {
            return import19.VegeBookPosterComponent(parentView.injectorGet(import27.Messages, viewData.parentIndex));
          })
        : import19.VegeBookPosterComponent(parentView.injectorGet(import27.Messages, viewData.parentIndex)));
    _compView_6.create0(_VegeBookPosterComponent_6_5);
    final _el_7 = import11.appendDiv(doc, _el_5);
    this.updateChildClass(_el_7, 'vegebook-information');
    addShimC(_el_7);
    final _el_8 = import11.appendElement(doc, _el_7, 'h2');
    this.updateChildClass(_el_8, 'title');
    addShimE(_el_8);
    _el_8.append(_textBinding_9.element);
    final _el_10 = import11.appendDiv(doc, _el_7);
    this.updateChildClass(_el_10, 'body');
    addShimC(_el_10);
    final _anchor_11 = import11.appendAnchor(_el_10);
    _appEl_11 = ViewContainer(11, 10, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_WriteVegeBookComponent2);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final _el_12 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'section');
    addShimC(_el_12);
    final _el_13 = import11.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'centered-content');
    addShimC(_el_13);
    _compView_14 = import20.ViewQuillComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_13.append(_el_14);
    import11.setAttribute(_el_14, 'placeholder', 'Write something...');
    addShimC(_el_14);
    _QuillComponent_14_5 = import21.QuillComponent();
    _QuillValueAccessor_14_6 = import21.QuillValueAccessor(_QuillComponent_14_5);
    _NgValueAccessor_14_7 = [_QuillValueAccessor_14_6];
    _NgModel_14_8 = import23.NgModel(null, _NgValueAccessor_14_7);
    _compView_14.create0(_QuillComponent_14_5);
    _el_2.addEventListener('click', eventHandler0(_ctx.goBack));
    final subscription_0 = _QuillComponent_14_5.blur.listen(eventHandler0(_ctx.blur));
    final subscription_1 = _QuillComponent_14_5.input.listen(eventHandler0(_ctx.input));
    final subscription_2 = _NgModel_14_8.update.listen(eventHandler1(_handle_ngModelChange_14_2));
    init([_el_0], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((3 <= nodeIndex) && (nodeIndex <= 4))) {
      if (identical(token, import25.AcxDarkTheme)) {
        return _AcxDarkTheme_3_5;
      }
      if (((identical(token, import17.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled))) {
        return _MaterialButtonComponent_3_6;
      }
    }
    if ((14 == nodeIndex)) {
      if (identical(token, const import26.MultiToken<import30.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_14_7;
      }
      if ((identical(token, import23.NgModel) || identical(token, import31.NgControl))) {
        return _NgModel_14_8;
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
    if (import32.checkBinding(_expr_1, currVal_1)) {
      _VegeBookLandscapeImageComponent_1_5.vegeBook = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import32.AppViewUtils.throwOnChanges) && firstCheck)) {
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
    if (firstCheck) {
      _VegeBookPosterComponent_6_5.hasDetails = false;
      _VegeBookPosterComponent_6_5.isTouchable = false;
    }
    final currVal_3 = _ctx.vegeBook;
    if (import32.checkBinding(_expr_3, currVal_3)) {
      _VegeBookPosterComponent_6_5.vegeBook = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_11_9.ngIf = (_ctx.vegeBook.writtenBy != null);
    if (firstCheck) {
      (_QuillComponent_14_5.placeholder = 'Write something...');
    }
    changed = false;
    _NgModel_14_8.model = _ctx.htmlStr;
    _NgModel_14_8.ngAfterChanges();
    if (((!import32.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_14_8.ngOnInit();
    }
    _appEl_11.detectChangesInNestedViews();
    if ((!import32.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _QuillComponent_14_5.ngAfterContentInit();
      }
    }
    final currVal_0 = _ctx.contentVisible;
    if (import32.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_3.detectHostChanges(firstCheck);
    _textBinding_9.updateText(import33.interpolateString0(_ctx.vegeBook.title));
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    _compView_6.detectChanges();
    _compView_14.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_11.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_3.destroyInternalState();
    _compView_6.destroyInternalState();
    _compView_14.destroyInternalState();
    _VegeBookLandscapeImageComponent_1_5.ngOnDestroy();
    _QuillComponent_14_5.ngOnDestroy();
    _QuillValueAccessor_14_6.ngOnDestroy();
  }

  void _handle_ngModelChange_14_2($event) {
    final _ctx = ctx;
    _ctx.htmlStr = $event;
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
    _textBinding_2.updateText(import33.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_4.updateText(import33.interpolateString0(_ctx.vegeBook.writtenBy));
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
        ? import24.debugInjectorWrap(import2.WriteVegeBookComponent, () {
            return import2.WriteVegeBookComponent(this.injectorGet(import34.Store, viewData.parentIndex), this.injectorGet(import35.Router, viewData.parentIndex), this.injectorGet(import27.Messages, viewData.parentIndex));
          })
        : import2.WriteVegeBookComponent(this.injectorGet(import34.Store, viewData.parentIndex), this.injectorGet(import35.Router, viewData.parentIndex), this.injectorGet(import27.Messages, viewData.parentIndex)));
    _compView_0.create(_WriteVegeBookComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WriteVegeBookComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import32.AppViewUtils.throwOnChanges) && firstCheck)) {
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
