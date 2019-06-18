// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegebook_poster_component.dart';
export 'vegebook_poster_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:web/src/common/vegebook_poster/lazy_image_component.template.dart' as _ref2;
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegebook_poster_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_button/material_button.template.dart' as import5;
import 'package:angular_components/material_button/material_button.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import15;
import 'package:angular_components/theme/dark_theme.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import 'package:angular_components/button_decorator/button_decorator.dart' as import18;
import 'package:angular_components/interfaces/has_disabled.dart' as import19;
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;
import 'lazy_image_component.template.dart' as import21;
import 'lazy_image_component.dart' as import22;
import 'package:angular/src/runtime/text_binding.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import 'package:core/src/i18n/messages.dart' as import25;

final List<dynamic> styles$VegeBookPosterComponent = [import0.styles];

class ViewVegeBookPosterComponent0 extends AppView<import2.VegeBookPosterComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import5.ViewMaterialButtonComponent0 _compView_3;
  dynamic _AcxDarkTheme_3_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_3_6;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  import7.Element _el_1;
  static import8.ComponentStyles _componentStyles;
  ViewVegeBookPosterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('vegebook-poster');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:web/lib/src/common/vegebook_poster/vegebook_poster_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeBookPosterComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import7.document;
    final _el_0 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'fallback-icon');
    addShimC(_el_0);
    _el_1 = import13.appendElement(doc, _el_0, 'img');
    import13.setAttribute(_el_1, 'src', 'images/fallback-icon.svg');
    addShimE(_el_1);
    final _anchor_2 = import13.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_VegeBookPosterComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_3 = import5.ViewMaterialButtonComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    this.updateChildClassNonHtml(_el_3, 'blue vegebook-add-post-image');
    import13.setAttribute(_el_3, 'raised', '');
    addShimC(_el_3);
    _AcxDarkTheme_3_5 = (import11.isDevMode
        ? import15.debugInjectorWrap(import16.AcxDarkTheme, () {
            return import16.AcxDarkTheme(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import16.AcxDarkTheme(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_3_6 = import6.MaterialButtonComponent(_el_3, _AcxDarkTheme_3_5, _compView_3, null);
    final _text_4 = import13.createText('Add post image');
    _compView_3.create(_MaterialButtonComponent_3_6, [
      [_text_4]
    ]);
    final _anchor_5 = import13.appendAnchor(parentRenderNode);
    _appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_VegeBookPosterComponent2);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import13.appendAnchor(parentRenderNode);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_VegeBookPosterComponent3);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    init0();
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((3 <= nodeIndex) && (nodeIndex <= 4))) {
      if (identical(token, import16.AcxDarkTheme)) {
        return _AcxDarkTheme_3_5;
      }
      if (((identical(token, import6.MaterialButtonComponent) || identical(token, import18.ButtonDirective)) || identical(token, import19.HasDisabled))) {
        return _MaterialButtonComponent_3_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_9.ngIf = _ctx.vegeBook.hasMediumPortraitImage;
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_3_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_5_9.ngIf = _ctx.hasDetails;
    _NgIf_6_9.ngIf = _ctx.isComingSoon;
    _appEl_2.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = ('Fallback image for ' + _ctx.vegeBook.title);
    if (import20.checkBinding(_expr_0, currVal_0)) {
      import13.setProperty(_el_1, 'alt', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_3.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$VegeBookPosterComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeBookPosterComponent> _VegeBookPosterComponentNgFactory = const ComponentFactory('vegebook-poster', viewFactory_VegeBookPosterComponentHost0);
ComponentFactory<import2.VegeBookPosterComponent> get VegeBookPosterComponentNgFactory {
  return _VegeBookPosterComponentNgFactory;
}

class _ViewVegeBookPosterComponent1 extends AppView<import2.VegeBookPosterComponent> {
  import21.ViewLazyImageComponent0 _compView_0;
  import22.LazyImageComponent _LazyImageComponent_0_5;
  String _expr_0;
  String _expr_1;
  _ViewVegeBookPosterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPosterComponent> build() {
    _compView_0 = import21.ViewLazyImageComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _LazyImageComponent_0_5 = import22.LazyImageComponent(_el_0);
    _compView_0.create0(_LazyImageComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.vegeBook.images.portraitMedium;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _LazyImageComponent_0_5.src = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('Poster for ' + _ctx.vegeBook.title);
    if (import20.checkBinding(_expr_1, currVal_1)) {
      _LazyImageComponent_0_5.alt = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import20.AppViewUtils.throwOnChanges) && firstCheck)) {
      _LazyImageComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_VegeBookPosterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPosterComponent1(parentView, parentIndex);
}

class _ViewVegeBookPosterComponent2 extends AppView<import2.VegeBookPosterComponent> {
  final import23.TextBinding _textBinding_3 = import23.TextBinding();
  final import23.TextBinding _textBinding_5 = import23.TextBinding();
  _ViewVegeBookPosterComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPosterComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'vegebook-information');
    addShimC(_el_0);
    final _el_1 = import13.appendElement(doc, _el_0, 'p');
    addShimE(_el_1);
    final _el_2 = import13.appendElement(doc, _el_1, 'strong');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _el_4 = import13.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_4, 'writtenBy');
    addShimE(_el_4);
    _el_4.append(_textBinding_5.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import24.interpolateString0(_ctx.vegeBook.title));
    _textBinding_5.updateText(import24.interpolateString0(_ctx.vegeBook.writtenBy));
  }
}

AppView<void> viewFactory_VegeBookPosterComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPosterComponent2(parentView, parentIndex);
}

class _ViewVegeBookPosterComponent3 extends AppView<import2.VegeBookPosterComponent> {
  final import23.TextBinding _textBinding_2 = import23.TextBinding();
  final import23.TextBinding _textBinding_4 = import23.TextBinding();
  _ViewVegeBookPosterComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeBookPosterComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'release-date-information');
    addShimC(_el_0);
    final _el_1 = import13.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_1, 'label');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _el_3 = import13.appendElement(doc, _el_0, 'p');
    this.updateChildClass(_el_3, 'date');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import24.interpolateString0(_ctx.messages.releaseDate));
    _textBinding_4.updateText(import24.interpolateString0(_ctx.reportingDate));
  }
}

AppView<void> viewFactory_VegeBookPosterComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPosterComponent3(parentView, parentIndex);
}

final List<dynamic> styles$VegeBookPosterComponentHost = const [];

class _ViewVegeBookPosterComponentHost0 extends AppView<import2.VegeBookPosterComponent> {
  ViewVegeBookPosterComponent0 _compView_0;
  import2.VegeBookPosterComponent _VegeBookPosterComponent_0_5;
  _ViewVegeBookPosterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeBookPosterComponent> build() {
    _compView_0 = ViewVegeBookPosterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeBookPosterComponent_0_5 = (import11.isDevMode
        ? import15.debugInjectorWrap(import2.VegeBookPosterComponent, () {
            return import2.VegeBookPosterComponent(this.injectorGet(import25.Messages, viewData.parentIndex));
          })
        : import2.VegeBookPosterComponent(this.injectorGet(import25.Messages, viewData.parentIndex)));
    _compView_0.create(_VegeBookPosterComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _VegeBookPosterComponent_0_5);
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

AppView<import2.VegeBookPosterComponent> viewFactory_VegeBookPosterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeBookPosterComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VegeBookPosterComponent, VegeBookPosterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
