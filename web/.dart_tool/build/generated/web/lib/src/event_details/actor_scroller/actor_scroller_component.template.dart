// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'actor_scroller_component.dart';
export 'actor_scroller_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:web/src/event_details/actor_scroller/actor_image_component.template.dart' as _ref1;
import 'package:web/src/event_details/actor_scroller/actor_scroller_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'actor_scroller_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import 'actor_image_component.template.dart' as import15;
import 'actor_image_component.dart' as import16;
import 'package:core/src/models/actor.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;

final List<dynamic> styles$ActorScrollerComponent = [import0.styles];

class ViewActorScrollerComponent0 extends AppView<import2.ActorScrollerComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewActorScrollerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('actor-scroller');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:web/lib/src/event_details/actor_scroller/actor_scroller_component.dart' : null);
  }

  @override
  ComponentRef<import2.ActorScrollerComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ActorScrollerComponent1);
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.actors;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
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
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$ActorScrollerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ActorScrollerComponent> _ActorScrollerComponentNgFactory = const ComponentFactory('actor-scroller', viewFactory_ActorScrollerComponentHost0);
ComponentFactory<import2.ActorScrollerComponent> get ActorScrollerComponentNgFactory {
  return _ActorScrollerComponentNgFactory;
}

class _ViewActorScrollerComponent1 extends AppView<import2.ActorScrollerComponent> {
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  import15.ViewActorImageComponent0 _compView_1;
  import16.ActorImageComponent _ActorImageComponent_1_5;
  var _expr_0;
  String _expr_1;
  import8.Element _el_1;
  _ViewActorScrollerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ActorScrollerComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import15.ViewActorImageComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _ActorImageComponent_1_5 = import16.ActorImageComponent();
    _compView_1.create0(_ActorImageComponent_1_5);
    final _el_2 = import11.appendElement(doc, _el_0, 'p');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_actor = import9.unsafeCast<import17.Actor>(locals['\$implicit']);
    final currVal_1 = local_actor.avatarUrl;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _ActorImageComponent_1_5.src = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ActorImageComponent_1_5.ngOnInit();
    }
    final currVal_0 = ('Photo for ' + local_actor.name);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_1, 'alt', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_3.updateText(import18.interpolateString0(local_actor.name));
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_ActorScrollerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewActorScrollerComponent1(parentView, parentIndex);
}

final List<dynamic> styles$ActorScrollerComponentHost = const [];

class _ViewActorScrollerComponentHost0 extends AppView<import2.ActorScrollerComponent> {
  ViewActorScrollerComponent0 _compView_0;
  import2.ActorScrollerComponent _ActorScrollerComponent_0_5;
  _ViewActorScrollerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ActorScrollerComponent> build() {
    _compView_0 = ViewActorScrollerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ActorScrollerComponent_0_5 = import2.ActorScrollerComponent();
    _compView_0.create(_ActorScrollerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ActorScrollerComponent_0_5);
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

AppView<import2.ActorScrollerComponent> viewFactory_ActorScrollerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewActorScrollerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ActorScrollerComponent, ActorScrollerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
