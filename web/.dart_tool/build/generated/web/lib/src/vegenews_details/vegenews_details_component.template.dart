// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'vegenews_details_component.dart';
export 'vegenews_details_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/common/content_rating/content_rating_component.template.dart' as _ref2;
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.template.dart' as _ref3;
import 'package:web/src/routes.template.dart' as _ref4;
import 'package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.template.dart' as _ref5;
import 'package:web/src/vegenews_details/vegenews_details_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'vegenews_details_component.dart' as import2;
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
import 'landscape_image/vegenews_landscape_image_component.template.dart' as import14;
import 'landscape_image/vegenews_landscape_image_component.dart' as import15;
import '../common/vegenews_poster/vegenews_poster_component.template.dart' as import16;
import '../common/vegenews_poster/vegenews_poster_component.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:core/src/i18n/messages.dart' as import19;
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import 'package:angular/src/common/directives/ng_for.dart' as import22;
import 'package:core/src/models/vegenews.dart' as import23;
import 'package:redux/src/store.dart' as import24;
import 'package:angular_router/src/router/router.dart' as import25;

final List<dynamic> styles$VegeNewsDetailsComponent = [import0.styles];

class ViewVegeNewsDetailsComponent0 extends AppView<import2.VegeNewsDetailsComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewVegeNewsDetailsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('vegenews-details');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/vegenews_details/vegenews_details_component.dart' : null);
  }

  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_VegeNewsDetailsComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.vegeNews != null);
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
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$VegeNewsDetailsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.VegeNewsDetailsComponent> _VegeNewsDetailsComponentNgFactory = const ComponentFactory('vegenews-details', viewFactory_VegeNewsDetailsComponentHost0);
ComponentFactory<import2.VegeNewsDetailsComponent> get VegeNewsDetailsComponentNgFactory {
  return _VegeNewsDetailsComponentNgFactory;
}

class _ViewVegeNewsDetailsComponent1 extends AppView<import2.VegeNewsDetailsComponent> {
  final import13.TextBinding _textBinding_7 = import13.TextBinding();
  import14.ViewVegeNewsLandscapeImageComponent0 _compView_1;
  import15.VegeNewsLandscapeImageComponent _VegeNewsLandscapeImageComponent_1_5;
  import16.ViewVegeNewsPosterComponent0 _compView_4;
  import17.VegeNewsPosterComponent _VegeNewsPosterComponent_4_5;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  import8.DivElement _el_0;
  _ViewVegeNewsDetailsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'container');
    addShimC(_el_0);
    _compView_1 = import14.ViewVegeNewsLandscapeImageComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _VegeNewsLandscapeImageComponent_1_5 = import15.VegeNewsLandscapeImageComponent();
    _compView_1.create0(_VegeNewsLandscapeImageComponent_1_5);
    final _el_2 = import11.appendElement(doc, _el_0, 'img');
    this.updateChildClass(_el_2, 'back');
    import11.setAttribute(_el_2, 'src', 'images/back.svg');
    addShimE(_el_2);
    final _el_3 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'vegenews-header');
    addShimC(_el_3);
    _compView_4 = import16.ViewVegeNewsPosterComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    addShimC(_el_4);
    _VegeNewsPosterComponent_4_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import17.VegeNewsPosterComponent, () {
            return import17.VegeNewsPosterComponent(parentView.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import17.VegeNewsPosterComponent(parentView.injectorGet(import19.Messages, viewData.parentIndex)));
    _compView_4.create0(_VegeNewsPosterComponent_4_5);
    final _el_5 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_5, 'vegenews-information');
    addShimC(_el_5);
    final _el_6 = import11.appendElement(doc, _el_5, 'h2');
    this.updateChildClass(_el_6, 'title');
    addShimE(_el_6);
    _el_6.append(_textBinding_7.element);
    final _el_8 = import11.appendDiv(doc, _el_5);
    this.updateChildClass(_el_8, 'body');
    addShimC(_el_8);
    final _anchor_9 = import11.appendAnchor(_el_8);
    _appEl_9 = ViewContainer(9, 8, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_VegeNewsDetailsComponent2);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import11.appendAnchor(_el_0);
    _appEl_10 = ViewContainer(10, 0, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_VegeNewsDetailsComponent3);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _anchor_11 = import11.appendAnchor(_el_0);
    _appEl_11 = ViewContainer(11, 0, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_VegeNewsDetailsComponent4);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    _el_2.addEventListener('click', eventHandler0(_ctx.goBack));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.vegeNews;
    if (import20.checkBinding(_expr_1, currVal_1)) {
      _VegeNewsLandscapeImageComponent_1_5.vegeNews = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import20.AppViewUtils.throwOnChanges) && firstCheck)) {
      _VegeNewsLandscapeImageComponent_1_5.ngOnInit();
    }
    if (firstCheck) {
      _VegeNewsPosterComponent_4_5.hasDetails = false;
      _VegeNewsPosterComponent_4_5.isTouchable = false;
    }
    final currVal_2 = _ctx.vegeNews;
    if (import20.checkBinding(_expr_2, currVal_2)) {
      _VegeNewsPosterComponent_4_5.vegeNews = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgIf_9_9.ngIf = (_ctx.vegeNews.writtenBy != null);
    _NgIf_10_9.ngIf = _ctx.vegeNews.hasContent;
    _NgIf_11_9.ngIf = _ctx.vegeNews.galleryImages.isNotEmpty();
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    final currVal_0 = _ctx.contentVisible;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_7.updateText(import21.interpolateString0(_ctx.vegeNews.title));
    _compView_1.detectChanges();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_9.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_4.destroyInternalState();
    _VegeNewsLandscapeImageComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_VegeNewsDetailsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponent1(parentView, parentIndex);
}

class _ViewVegeNewsDetailsComponent2 extends AppView<import2.VegeNewsDetailsComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  final import13.TextBinding _textBinding_4 = import13.TextBinding();
  _ViewVegeNewsDetailsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
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
    _textBinding_2.updateText(import21.interpolateString0(_ctx.messages.writtenBy));
    _textBinding_4.updateText(import21.interpolateString0(_ctx.vegeNews.writtenBy));
  }
}

AppView<void> viewFactory_VegeNewsDetailsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponent2(parentView, parentIndex);
}

class _ViewVegeNewsDetailsComponent3 extends AppView<import2.VegeNewsDetailsComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  _ViewVegeNewsDetailsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
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
    _textBinding_3.updateText(import21.interpolateString0(_ctx.vegeNews.content));
  }
}

AppView<void> viewFactory_VegeNewsDetailsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponent3(parentView, parentIndex);
}

class _ViewVegeNewsDetailsComponent4 extends AppView<import2.VegeNewsDetailsComponent> {
  final import13.TextBinding _textBinding_3 = import13.TextBinding();
  ViewContainer _appEl_5;
  import22.NgFor _NgFor_5_9;
  var _expr_0;
  _ViewVegeNewsDetailsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'section footer');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'centered-content');
    addShimC(_el_1);
    final _el_2 = import11.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    final _el_4 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_4, 'gallery');
    addShimC(_el_4);
    final _anchor_5 = import11.appendAnchor(_el_4);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_VegeNewsDetailsComponent5);
    _NgFor_5_9 = import22.NgFor(_appEl_5, _TemplateRef_5_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.vegeNews.galleryImages.list;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import20.AppViewUtils.throwOnChanges)) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _textBinding_3.updateText(import21.interpolateString0(_ctx.messages.gallery));
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
  }
}

AppView<void> viewFactory_VegeNewsDetailsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponent4(parentView, parentIndex);
}

class _ViewVegeNewsDetailsComponent5 extends AppView<import2.VegeNewsDetailsComponent> {
  var _expr_0;
  var _expr_1;
  import8.Element _el_0;
  _ViewVegeNewsDetailsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('img');
    addShimE(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_galleryImage = import9.unsafeCast<import23.VegeNewsGalleryImage>(locals['\$implicit']);
    final currVal_0 = local_galleryImage.location;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'src', import20.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('A still frame from the movie ' + _ctx.vegeNews.title);
    if (import20.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_0, 'alt', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<void> viewFactory_VegeNewsDetailsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponent5(parentView, parentIndex);
}

final List<dynamic> styles$VegeNewsDetailsComponentHost = const [];

class _ViewVegeNewsDetailsComponentHost0 extends AppView<import2.VegeNewsDetailsComponent> {
  ViewVegeNewsDetailsComponent0 _compView_0;
  import2.VegeNewsDetailsComponent _VegeNewsDetailsComponent_0_5;
  _ViewVegeNewsDetailsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.VegeNewsDetailsComponent> build() {
    _compView_0 = ViewVegeNewsDetailsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VegeNewsDetailsComponent_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import2.VegeNewsDetailsComponent, () {
            return import2.VegeNewsDetailsComponent(this.injectorGet(import24.Store, viewData.parentIndex), this.injectorGet(import25.Router, viewData.parentIndex), this.injectorGet(import19.Messages, viewData.parentIndex));
          })
        : import2.VegeNewsDetailsComponent(this.injectorGet(import24.Store, viewData.parentIndex), this.injectorGet(import25.Router, viewData.parentIndex), this.injectorGet(import19.Messages, viewData.parentIndex)));
    _compView_0.create(_VegeNewsDetailsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _VegeNewsDetailsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import20.AppViewUtils.throwOnChanges) && firstCheck)) {
      _VegeNewsDetailsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _VegeNewsDetailsComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.VegeNewsDetailsComponent> viewFactory_VegeNewsDetailsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewVegeNewsDetailsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VegeNewsDetailsComponent, VegeNewsDetailsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
