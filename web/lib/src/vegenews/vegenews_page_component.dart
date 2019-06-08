import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.dart';
import 'package:web/src/common/loading_view/loading_view_component.dart';
import 'package:web/src/routes.dart';

import '../restore_scroll_position.dart';

@Component(
  selector: 'vegenews-page',
  styleUrls: ['vegenews_page_component.css'],
  templateUrl: 'vegenews_page_component.html',
  directives: [
    LoadingViewComponent,
    VegeNewsPosterComponent,
    NgFor,
  ],
)
class VegeNewsPageComponent implements OnActivate {
  VegeNewsPageComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  String get VegeNewsTitle => this.messages.vegeNews;

  VegeNewsPageViewModel get viewModel =>
      VegeNewsPageViewModel.fromStore(_store);

  // String get eventTypeTitle => _listType == EventListType.nowInTheaters
  //     ? messages.nowInTheaters
  //     : messages.comingSoon;

  //bool get isDisplayingComingSoonMovies => _listType == EventListType.comingSoon;

  @override
  void onActivate(RouterState previous, RouterState current) {
    //_listType = current.routePath.additionalData;
    
    restoreScrollPositionIfNeeded(previous, RoutePaths.eventDetails);

    // if (_listType == EventListType.comingSoon) {
    //   _store.dispatch(FetchComingSoonEventsIfNotLoadedAction());
    // }
  }

  void openEventDetails(VegeNews vegeNews) {
    storeCurrentScrollPosition();

    final url =
        RoutePaths.eventDetails.toUrl(parameters: {'eventId': vegeNews.id});
    _router.navigate(url);
  }
}
