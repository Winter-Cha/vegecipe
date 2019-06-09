import 'dart:async';
import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/content_rating/content_rating_component.dart';
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.dart';
import 'package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.dart';
import 'package:web/src/routes.dart';

@Component(
  selector: 'vegenews-details',
  styleUrls: ['vegenews_details_component.css'],
  templateUrl: 'vegenews_details_component.html',
  directives: [
    VegeNewsLandscapeImageComponent,
    VegeNewsPosterComponent,
    ContentRatingComponent,
    NgIf,
    NgFor,
  ],
  pipes: [DatePipe],
)
class VegeNewsDetailsComponent implements OnInit, OnActivate, OnDestroy {
  VegeNewsDetailsComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  VegeNews vegeNews;
  bool _navigatedFromApp = false;
  bool contentVisible = false;
  StreamSubscription<AppState> _vegeNewsDetailsSubscription;

  @override
  void ngOnInit() {
    // Reset the scroll position in case this page was previously opened.
    html.window.scrollTo(0, 0);
  }

  @override
  void onActivate(RouterState previous, RouterState current) {
    print("@@@@@@@@@" + previous.toString());
    _navigatedFromApp = previous != null;

    _populateVegeNewsDetails(
      current.parameters['vegeNewsId'],
    );
  }

  @override
  void ngOnDestroy() => _vegeNewsDetailsSubscription?.cancel();

  void _populateVegeNewsDetails(String vegeNewsId) {
    vegeNews = vegeNewsByIdSelector(_store.state, vegeNewsId);

    if (vegeNews != null) {
      _animateContentIntoView();
    } else {
      _store.dispatch(RefreshVegeNewsAction());
      _waitForEventDetails(vegeNewsId);
    }
  }

  /// The event details page was opened before loading data has finished.
  ///
  /// This happened because the user came to event details page by a link,
  /// for example [https://inkino.app/#event/302789].
  ///
  /// Since in this case, the event details page is the first entry point for
  /// inKino, we'll have to wait until the store is populated with all the events.
  void _waitForEventDetails(String vegeNewsId) {
    final state = _store.state.vegeNewsState;
    final isLoading = state.vegeNewsStatus == LoadingStatus.loading;

    if (!isLoading) {
      return;
    }

    _vegeNewsDetailsSubscription = _store.onChange.listen((state) {
      final state = _store.state.vegeNewsState;
      final hasFinishedLoading =
          state.vegeNewsStatus != LoadingStatus.loading;

      if (hasFinishedLoading) {
        _populateVegeNewsDetails(vegeNewsId);
        _vegeNewsDetailsSubscription.cancel();
        _vegeNewsDetailsSubscription = null;

        _animateContentIntoView();
      }
    });
  }

  void _animateContentIntoView() =>
      Timer(Duration.zero, () => contentVisible = true);

  void goBack() {
    if (_navigatedFromApp) {
      html.window.history.back();
      return;
    }

    _router.navigateByUrl(
      RoutePaths.vegeNews.toUrl(),
      replace: true,
    );
  }
}
