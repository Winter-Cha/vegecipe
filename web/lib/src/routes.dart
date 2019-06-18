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
import 'package:web/src/vegenews_details/vegenews_details_component.template.dart'
    deferred as vegenews_details;
import 'package:web/src/vegebook/vegebook_page_component.template.dart'
    as vegebook_page;
import 'package:web/src/vegebook_details/vegebook_details_component.template.dart'
    deferred as vegebook_details;
import 'package:web/src/vegebook_details/write_vegebook/write_vegebook_component.template.dart'
    as write_vegebook;

class RoutePaths {

  // VegeNews
  static final vegeNews = RoutePath(
    path: '/vegenews',
    //additionalData: EventListType.vegeNews,
  );

  static final vegeNewsDetails = RoutePath(path: 'vegenews/:vegeNewsId');

   // VegeBook
  static final vegeBook = RoutePath(
    path: '/vegebook',
    useAsDefault: true,
    //additionalData: EventListType.vegeNews,
  );

  static final vegeBookDetails = RoutePath(path: 'vegebook/:vegeBookId');
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
        return vegenews_details
            .loadLibrary()
            .then((_) => vegenews_details.VegeNewsDetailsComponentNgFactory);
      },
    ),
    RouteDefinition(
      routePath: RoutePaths.vegeBook,
      useAsDefault: true,
      component: vegebook_page.VegeBookPageComponentNgFactory,
    ),
    RouteDefinition.defer(
      routePath: RoutePaths.vegeBookDetails,
      loader: () {
        return vegebook_details
            .loadLibrary()
            .then((_) => vegebook_details.VegeBookDetailsComponentNgFactory);
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
