import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:web/src/event_details/event_details_component.template.dart'
    deferred as event_details;
import 'package:web/src/events/events_page_component.template.dart'
    as events_page;
import 'package:web/src/showtimes/showtimes_page_component.template.dart'
    deferred as showtimes_page;

import 'package:web/src/vegenews/vegenews_page_component.template.dart'
    as vegenews_page;
import 'package:web/src/vegenews_details/write_vegenews/write_vegenews_component.template.dart'
    deferred as write_vegenews;
import 'package:web/src/vegebook/vegebook_page_component.template.dart'
    as vegebook_page;
import 'package:web/src/vegebook_details/write_vegebook/write_vegebook_component.template.dart'
    deferred as write_vegebook;

class RoutePaths {

  // VegeNews
  static final vegeNews = RoutePath(
    path: '/vegenews',
    //additionalData: EventListType.vegeNews,
  );

  static final vegeNewsDetails = RoutePath(path: 'writenews/:vegeNewsId');
  static final writeNews = RoutePath(path: 'writenews');

   // VegeBook
  static final vegeBook = RoutePath(
    path: '/vegebook',
    useAsDefault: true,
    //additionalData: EventListType.vegeNews,
  );

  static final vegeBookDetails = RoutePath(path: 'writebook/:vegeBookId');
  static final writeBook = RoutePath(path: 'writebook');

  // now in theaters <<
  static final nowInTheaters = RoutePath(
    path: '/theaters',
    additionalData: EventListType.nowInTheaters,
  );

  static final showtimes = RoutePath(path: 'showtimes');
  static final comingSoon = RoutePath(
    path: 'comingSoon',
    additionalData: EventListType.comingSoon,
  );

  static final eventDetails = RoutePath(path: 'event/:eventId');
  static final showDetails = RoutePath(path: 'show/:eventId/:showId');

  
}

class Routes {
  static final List<RouteDefinition> all = [

    RouteDefinition(
      routePath: RoutePaths.vegeNews,
      component: vegenews_page.VegeNewsPageComponentNgFactory,
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.vegeNewsDetails,
      loader: () {
        return write_vegenews
            .loadLibrary()
            .then((_) => write_vegenews.WriteVegeNewsComponentNgFactory);
      },
    ),
    RouteDefinition(
      routePath: RoutePaths.writeNews,
      component: write_vegenews.WriteVegeNewsComponentNgFactory,
    ),
    RouteDefinition(
      routePath: RoutePaths.vegeBook,
      useAsDefault: true,
      component: vegebook_page.VegeBookPageComponentNgFactory,
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.vegeBookDetails,
      loader: () {
        return write_vegebook
            .loadLibrary()
            .then((_) => write_vegebook.WriteVegeBookComponentNgFactory);
      },
    ),
    RouteDefinition(
      routePath: RoutePaths.writeBook,
      component: write_vegebook.WriteVegeBookComponentNgFactory,
    ),
    RouteDefinition(
      routePath: RoutePaths.nowInTheaters,
      component: events_page.EventsPageComponentNgFactory,
    ),
    RouteDefinition(
      routePath: RoutePaths.comingSoon,
      component: events_page.EventsPageComponentNgFactory,
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.showtimes,
      loader: () {
        return showtimes_page
            .loadLibrary()
            .then((_) => showtimes_page.ShowtimesPageComponentNgFactory);
      },
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.eventDetails,
      loader: () {
        return event_details
            .loadLibrary()
            .then((_) => event_details.EventDetailsComponentNgFactory);
      },
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.showDetails,
      loader: () {
        return event_details
            .loadLibrary()
            .then((_) => event_details.EventDetailsComponentNgFactory);
      },
    ),
  ];
}
