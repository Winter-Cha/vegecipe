import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.dart';
import 'package:web/src/common/loading_view/loading_view_component.dart';
import 'package:web/src/routes.dart';

import '../restore_scroll_position.dart';

import 'package:firebase/firebase.dart' as fb;

@Component(
  selector: 'vegenews-page',
  styleUrls: ['vegenews_page_component.css'],
  templateUrl: 'vegenews_page_component.html',
  directives: [
    LoadingViewComponent,
    VegeNewsPosterComponent,
    MaterialButtonComponent,
    NgIf,
    NgFor,
  ],
)
class VegeNewsPageComponent implements OnActivate {
  VegeNewsPageComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  bool isAuthenticated() => fb.auth().currentUser != null;
  bool isAdmin() => _store.state.userInfoState.auth == "admin";

  String get VegeNewsTitle => this.messages.vegeNews;

  void writeNews() {
    final url = RoutePaths.writeNews.toUrl();
    _router.navigate(url);
  }

  VegeNewsPageViewModel get viewModel =>
      VegeNewsPageViewModel.fromStore(_store);

  // String get eventTypeTitle => _listType == EventListType.nowInTheaters
  //     ? messages.nowInTheaters
  //     : messages.comingSoon;

  //bool get isDisplayingComingSoonMovies => _listType == EventListType.comingSoon;

  @override
  void onActivate(RouterState previous, RouterState current) {
    //_listType = current.routePath.additionalData;

    restoreScrollPositionIfNeeded(previous, RoutePaths.vegeNewsDetails);

    // if (_listType == EventListType.comingSoon) {
    //   _store.dispatch(FetchComingSoonEventsIfNotLoadedAction());
    // }
  }

  void openVegeNewsDetails(VegeNews vegeNews) {
    storeCurrentScrollPosition();

    final url = RoutePaths.vegeNewsDetails
        .toUrl(parameters: {'vegeNewsId': vegeNews.id});
    _router.navigate(url);
  }
}
