// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'showtimes_page_component.dart';
export 'showtimes_page_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:web/src/common/loading_view/loading_view_component.template.dart' as _ref2;
import 'package:web/src/common/showtime_item/showtime_item_component.template.dart' as _ref3;
import 'package:web/src/common/theater_selector/theater_selector_component.template.dart' as _ref4;
import 'package:web/src/restore_scroll_position.template.dart' as _ref5;
import 'package:web/src/routes.template.dart' as _ref6;
import 'package:web/src/showtimes/date_selector_component.template.dart' as _ref7;
import 'package:web/src/showtimes/showtimes_page_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'showtimes_page_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../common/theater_selector/theater_selector_component.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import '../common/theater_selector/theater_selector_component.dart' as import6;
import 'date_selector_component.template.dart' as import7;
import 'date_selector_component.dart' as import8;
import '../common/loading_view/loading_view_component.template.dart' as import9;
import '../common/loading_view/loading_view_component.dart' as import10;
import 'package:angular/src/common/directives/ng_for.dart' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:redux/src/store.dart' as import20;
import 'package:core/src/i18n/messages.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import '../common/showtime_item/showtime_item_component.template.dart' as import25;
import '../common/showtime_item/showtime_item_component.dart' as import26;
import 'package:core/src/models/show.dart' as import27;
import 'package:angular_router/src/router/router.dart' as import28;

final List<dynamic> styles$ShowtimesPageComponent = [import0.styles];

class ViewShowtimesPageComponent0 extends AppView<import2.ShowtimesPageComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  import4.ViewTheaterSelectorComponent0 _compView_4;
  ViewContainer _appEl_4;
  import6.TheaterSelectorComponent _TheaterSelectorComponent_4_8;
  import7.ViewDateSelectorComponent0 _compView_5;
  import8.DateSelectorComponent _DateSelectorComponent_5_5;
  import9.ViewLoadingViewComponent0 _compView_6;
  import10.LoadingViewComponent _LoadingViewComponent_6_5;
  ViewContainer _appEl_7;
  import11.NgFor _NgFor_7_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  static import12.ComponentStyles _componentStyles;
  ViewShowtimesPageComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import15.document.createElement('showtimes-page');
  }
  static String get _debugComponentUrl {
    return (import16.isDevMode ? 'asset:web/lib/src/showtimes/showtimes_page_component.dart' : null);
  }

  @override
  ComponentRef<import2.ShowtimesPageComponent> build() {
    final _rootEl = rootEl;
    final import15.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import15.document;
    final _el_0 = import18.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content-wrapper');
    addShimC(_el_0);
    final _el_1 = import18.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'page-title');
    addShimC(_el_1);
    final _el_2 = import18.appendElement(doc, _el_1, 'h3');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _compView_4 = import4.ViewTheaterSelectorComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    addShimC(_el_4);
    _appEl_4 = ViewContainer(4, 1, this, _el_4);
    _TheaterSelectorComponent_4_8 = (import16.isDevMode
        ? import19.debugInjectorWrap(import6.TheaterSelectorComponent, () {
            return import6.TheaterSelectorComponent(parentView.injectorGet(import20.Store, viewData.parentIndex), _appEl_4);
          })
        : import6.TheaterSelectorComponent(parentView.injectorGet(import20.Store, viewData.parentIndex), _appEl_4));
    _compView_4.create0(_TheaterSelectorComponent_4_8);
    _compView_5 = import7.ViewDateSelectorComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    addShimC(_el_5);
    _DateSelectorComponent_5_5 = import8.DateSelectorComponent();
    _compView_5.create0(_DateSelectorComponent_5_5);
    _compView_6 = import9.ViewLoadingViewComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_0.append(_el_6);
    addShimC(_el_6);
    _LoadingViewComponent_6_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import10.LoadingViewComponent, () {
            return import10.LoadingViewComponent(parentView.injectorGet(import21.Messages, viewData.parentIndex));
          })
        : import10.LoadingViewComponent(parentView.injectorGet(import21.Messages, viewData.parentIndex)));
    final _anchor_7 = import18.createAnchor();
    _appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_ShowtimesPageComponent1);
    _NgFor_7_9 = import11.NgFor(_appEl_7, _TemplateRef_7_8);
    _compView_6.create(_LoadingViewComponent_6_5, [
      [_appEl_7]
    ]);
    final subscription_0 = _LoadingViewComponent_6_5.actionButtonClicked.listen(eventHandler1(_handle_actionButtonClicked_6_0));
    init(const [], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.viewModel.dates.list;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _DateSelectorComponent_5_5.dates = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.viewModel.selectedDate;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      _DateSelectorComponent_5_5.selectedDate = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.viewModel.changeCurrentDate;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      _DateSelectorComponent_5_5.newDateSelected = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shows.isEmpty();
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _LoadingViewComponent_6_5.contentEmpty = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.viewModel.status;
    if (import23.checkBinding(_expr_4, currVal_4)) {
      _LoadingViewComponent_6_5.status = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.shows.list;
    if (import23.checkBinding(_expr_5, currVal_5)) {
      _NgFor_7_9.ngForOf = currVal_5;
      _expr_5 = currVal_5;
    }
    if ((!import23.AppViewUtils.throwOnChanges)) {
      _NgFor_7_9.ngDoCheck();
    }
    _appEl_4.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _textBinding_3.updateText(import24.interpolateString0(_ctx.messages.showtimes));
    _compView_4.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_6.destroyInternalState();
    _LoadingViewComponent_6_5.ngOnDestroy();
  }

  void _handle_actionButtonClicked_6_0($event) {
    final _ctx = ctx;
    _ctx.viewModel.refreshShowtimes();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import12.ComponentStyles.scoped(styles$ShowtimesPageComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ShowtimesPageComponent> _ShowtimesPageComponentNgFactory = const ComponentFactory('showtimes-page', viewFactory_ShowtimesPageComponentHost0);
ComponentFactory<import2.ShowtimesPageComponent> get ShowtimesPageComponentNgFactory {
  return _ShowtimesPageComponentNgFactory;
}

class _ViewShowtimesPageComponent1 extends AppView<import2.ShowtimesPageComponent> {
  import25.ViewShowtimeItemComponent0 _compView_0;
  import26.ShowtimeItemComponent _ShowtimeItemComponent_0_5;
  var _expr_0;
  _ViewShowtimesPageComponent1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShowtimesPageComponent> build() {
    _compView_0 = import25.ViewShowtimeItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _ShowtimeItemComponent_0_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import26.ShowtimeItemComponent, () {
            return import26.ShowtimeItemComponent(parentView.parentView.injectorGet(import21.Messages, parentView.viewData.parentIndex));
          })
        : import26.ShowtimeItemComponent(parentView.parentView.injectorGet(import21.Messages, parentView.viewData.parentIndex)));
    _compView_0.create0(_ShowtimeItemComponent_0_5);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_show = import16.unsafeCast<import27.Show>(locals['\$implicit']);
    final currVal_0 = local_show;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _ShowtimeItemComponent_0_5.show = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_0($event) {
    final local_show = import16.unsafeCast<import27.Show>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.openShowDetails(local_show);
  }
}

AppView<void> viewFactory_ShowtimesPageComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShowtimesPageComponent1(parentView, parentIndex);
}

final List<dynamic> styles$ShowtimesPageComponentHost = const [];

class _ViewShowtimesPageComponentHost0 extends AppView<import2.ShowtimesPageComponent> {
  ViewShowtimesPageComponent0 _compView_0;
  import2.ShowtimesPageComponent _ShowtimesPageComponent_0_5;
  _ViewShowtimesPageComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ShowtimesPageComponent> build() {
    _compView_0 = ViewShowtimesPageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ShowtimesPageComponent_0_5 = (import16.isDevMode
        ? import19.debugInjectorWrap(import2.ShowtimesPageComponent, () {
            return import2.ShowtimesPageComponent(this.injectorGet(import20.Store, viewData.parentIndex), this.injectorGet(import28.Router, viewData.parentIndex), this.injectorGet(import21.Messages, viewData.parentIndex));
          })
        : import2.ShowtimesPageComponent(this.injectorGet(import20.Store, viewData.parentIndex), this.injectorGet(import28.Router, viewData.parentIndex), this.injectorGet(import21.Messages, viewData.parentIndex)));
    _compView_0.create(_ShowtimesPageComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ShowtimesPageComponent_0_5);
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

AppView<import2.ShowtimesPageComponent> viewFactory_ShowtimesPageComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShowtimesPageComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ShowtimesPageComponent, ShowtimesPageComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
