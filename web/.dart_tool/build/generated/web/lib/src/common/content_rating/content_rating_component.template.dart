// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'content_rating_component.dart';
export 'content_rating_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/common/content_rating/content_rating_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'content_rating_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:core/src/models/content_descriptor.dart' as import14;

final List<dynamic> styles$ContentRatingComponent = [import0.styles];

class ViewContentRatingComponent0 extends AppView<import2.ContentRatingComponent> {
  ViewContainer _appEl_2;
  import4.NgFor _NgFor_2_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import5.Element _el_0;
  static import6.ComponentStyles _componentStyles;
  ViewContentRatingComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import5.document.createElement('content-rating');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/common/content_rating/content_rating_component.dart' : null);
  }

  @override
  ComponentRef<import2.ContentRatingComponent> build() {
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import5.document;
    _el_0 = import11.appendElement(doc, parentRenderNode, 'img');
    this.updateChildClass(_el_0, 'content-descriptor age');
    addShimE(_el_0);
    final _text_1 = import11.appendText(parentRenderNode, '\n');
    final _anchor_2 = import11.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_ContentRatingComponent1);
    _NgFor_2_9 = import4.NgFor(_appEl_2, _TemplateRef_2_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_2 = _ctx.contentDescriptors.iter;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _NgFor_2_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.ageRatingUrl;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = ('The age rating for this movie is' + _ctx.ageRating);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_0, 'alt', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$ContentRatingComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ContentRatingComponent> _ContentRatingComponentNgFactory = const ComponentFactory('content-rating', viewFactory_ContentRatingComponentHost0);
ComponentFactory<import2.ContentRatingComponent> get ContentRatingComponentNgFactory {
  return _ContentRatingComponentNgFactory;
}

class _ViewContentRatingComponent1 extends AppView<import2.ContentRatingComponent> {
  var _expr_0;
  var _expr_1;
  import5.Element _el_0;
  _ViewContentRatingComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ContentRatingComponent> build() {
    final doc = import5.document;
    _el_0 = doc.createElement('img');
    this.updateChildClass(_el_0, 'content-descriptor');
    addShimE(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_cd = import9.unsafeCast<import14.ContentDescriptor>(locals['\$implicit']);
    final currVal_0 = local_cd.name;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'alt', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_cd.imageUrl;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_0, 'src', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
      _expr_1 = currVal_1;
    }
  }
}

AppView<void> viewFactory_ContentRatingComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewContentRatingComponent1(parentView, parentIndex);
}

final List<dynamic> styles$ContentRatingComponentHost = const [];

class _ViewContentRatingComponentHost0 extends AppView<import2.ContentRatingComponent> {
  ViewContentRatingComponent0 _compView_0;
  import2.ContentRatingComponent _ContentRatingComponent_0_5;
  _ViewContentRatingComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ContentRatingComponent> build() {
    _compView_0 = ViewContentRatingComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ContentRatingComponent_0_5 = import2.ContentRatingComponent();
    _compView_0.create(_ContentRatingComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ContentRatingComponent_0_5);
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

AppView<import2.ContentRatingComponent> viewFactory_ContentRatingComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewContentRatingComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ContentRatingComponent, ContentRatingComponentNgFactory);
  _ref0.initReflector();
}
