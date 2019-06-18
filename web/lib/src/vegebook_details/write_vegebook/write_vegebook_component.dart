import 'dart:async';
import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_button/material_button_base.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/content_rating/content_rating_component.dart';
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.dart';
import 'package:web/src/routes.dart';
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart';


@Component(
  selector: 'write-vegebook',
  styleUrls: ['write_vegebook_component.css'],
  templateUrl: 'write_vegebook_component.html',
  directives: [
    ContentRatingComponent,
    VegeBookLandscapeImageComponent,
    VegeBookPosterComponent,
    MaterialButtonComponent,
    NgIf,
    NgFor,
  ],
  pipes: [DatePipe],
)
class WriteVegeBookComponent implements OnInit, OnActivate, OnDestroy {
  WriteVegeBookComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  VegeBook vegeBook = VegeBook(
    id: '',
    title: '',
    content: '',
    images: VegeBookImageData(
      landscapeBig: null,
      landscapeSmall: null,
      portraitSmall: null,
      portraitMedium: null,
      portraitLarge: null,
    ),
    writtenBy: '',
    writerPhotoUrl: '',
  );
  bool _navigatedFromApp = false;
  bool contentVisible = false;
  StreamSubscription<AppState> _vegeBookDetailsSubscription;

  @override
  void ngOnInit() {
    // Reset the scroll position in case this page was previously opened.
    html.window.scrollTo(0, 0);
  }

  @override
  void onActivate(RouterState previous, RouterState current) {
    print("@@@@@@@@@" + previous.toString());
    _navigatedFromApp = previous != null;
    _animateContentIntoView();
    // _populateVegeBookDetails(
    //   current.parameters['vegeBookId'],
    // );
  }

  @override
  void ngOnDestroy() => _vegeBookDetailsSubscription?.cancel();

  void _populateVegeBookDetails(String vegeBookId) {
    vegeBook = vegeBookByIdSelector(_store.state, vegeBookId);

    if (vegeBook != null) {
      _animateContentIntoView();
    } else {
      _store.dispatch(RefreshVegeBookAction());
      _waitForEventDetails(vegeBookId);
    }
  }

  /// The event details page was opened before loading data has finished.
  ///
  /// This happened because the user came to event details page by a link,
  /// for example [https://inkino.app/#event/302789].
  ///
  /// Since in this case, the event details page is the first entry point for
  /// inKino, we'll have to wait until the store is populated with all the events.
  void _waitForEventDetails(String vegeBookId) {
    final state = _store.state.vegeBookState;
    final isLoading = state.vegeBookStatus == LoadingStatus.loading;

    if (!isLoading) {
      return;
    }

    _vegeBookDetailsSubscription = _store.onChange.listen((state) {
      final state = _store.state.vegeBookState;
      final hasFinishedLoading =
          state.vegeBookStatus != LoadingStatus.loading;

      if (hasFinishedLoading) {
        _populateVegeBookDetails(vegeBookId);
        _vegeBookDetailsSubscription.cancel();
        _vegeBookDetailsSubscription = null;

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
      RoutePaths.vegeBook.toUrl(),
      replace: true,
    );
  }
}
