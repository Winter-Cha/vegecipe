import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/loading_view/loading_view_component.dart';
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.dart';
import 'package:web/src/routes.dart';

import '../restore_scroll_position.dart';

@Component(
  selector: 'vegebook-page',
  styleUrls: ['vegebook_page_component.css'],
  templateUrl: 'vegebook_page_component.html',
  directives: [
    LoadingViewComponent,
    VegeBookPosterComponent,
    NgFor,
  ],
)
class VegeBookPageComponent implements OnActivate {
  VegeBookPageComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  String get VegeBookTitle => this.messages.vegeBook;

  VegeBookPageViewModel get viewModel =>
      VegeBookPageViewModel.fromStore(_store);

  // String get eventTypeTitle => _listType == EventListType.nowInTheaters
  //     ? messages.nowInTheaters
  //     : messages.comingSoon;

  //bool get isDisplayingComingSoonMovies => _listType == EventListType.comingSoon;

  @override
  void onActivate(RouterState previous, RouterState current) {
    //_listType = current.routePath.additionalData;
    
    restoreScrollPositionIfNeeded(previous, RoutePaths.vegeBookDetails);

    // if (_listType == EventListType.comingSoon) {
    //   _store.dispatch(FetchComingSoonEventsIfNotLoadedAction());
    // }
  }

  void openVegeBookDetails(VegeBook vegeBook) {
    storeCurrentScrollPosition();

    final url =
        RoutePaths.vegeBookDetails.toUrl(parameters: {'vegeBookId': vegeBook.id});
    _router.navigate(url);
  }
}
