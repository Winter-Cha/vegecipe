import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';
import 'package:web/src/app_bar/nav_bar/nav_bar_component.dart';
import 'package:web/src/app_bar/scroll_utils.dart';
import 'package:web/src/app_bar/search_bar/search_bar_component.dart';
import 'package:web/src/app_bar/signin_bar/signin_bar_component.dart';
import 'package:web/src/routes.dart';

@Component(
  selector: 'app-bar',
  templateUrl: 'app_bar_component.html',
  styleUrls: ['app_bar_component.css'],
  directives: [
    NavBarComponent,
    SearchBarComponent,
    SignInBarComponent,
    routerDirectives,
  ],
  exports: [RoutePaths],
)
class AppBarComponent implements OnInit, OnDestroy {
  AppBarComponent(this.messages, this._store, this._router);

  final Messages messages;
  final Store<AppState> _store;
  final Router _router;

  String get theaterName => _store.state.theaterState.currentTheater.name;

  @Input()
  bool theaterDropdownVisible = false;

  @Input()
  bool theaterDropdownActive = false;

  bool hide = false;
  bool isEventDetailsPage = false;

  StreamSubscription<RouterState> _routeListener;
  Timer _scrollTimer;

  @Output()
  Stream get theaterButtonClicked => _theaterButtonClicked.stream;
  final _theaterButtonClicked = StreamController();

  void openTheaterDropdown() => _theaterButtonClicked.add(null);

  @override
  void ngOnInit() {
    _listenForRoutes();
    _scrollTimer = listenForScrollDirectionChanges((newDirection) {
      if (!isEventDetailsPage && !theaterDropdownVisible) {
        hide = newDirection == ScrollDirection.down;
      }
    });
  }

  // 라우트 변경 Listenner
  void _listenForRoutes() {
    _routeListener = _router.onRouteActivated.listen((route) {
      final path = route.routePath.path;

      // 여기서 아래의 path로 이동시 app_bar를 숨긴다.
      isEventDetailsPage = path == RoutePaths.eventDetails.path ||
          path == RoutePaths.showDetails.path || path == RoutePaths.vegeNewsDetails.path
          || path == RoutePaths.vegeBookDetails.path || path == RoutePaths.writeNews.path
          || path == RoutePaths.writeBook.path;

      hide = isEventDetailsPage;
    });
  }

  @override
  void ngOnDestroy() {
    _theaterButtonClicked.close();
    _routeListener.cancel();
    _scrollTimer.cancel();
  }
}
