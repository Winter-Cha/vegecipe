import 'package:core/src/models/vegenews.dart';
//import 'package:core/src/models/show.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:kt_dart/collection.dart';
import 'package:reselect/reselect.dart';

final vegeNewsSelector = createSelector2(
  (AppState state) => state.vegeNewsState.vegeNewsEvents,
  (AppState state) => state.searchQuery,
  _vegeNewsOrVegeNewsSearch,
);

KtList<VegeNews> _vegeNewsOrVegeNewsSearch(KtList<VegeNews> vegeNews, String searchQuery) {
  return searchQuery == null
      ? _uniqueVegeNews(vegeNews)
      : _vegeNewsWithSearchQuery(vegeNews, searchQuery);
}


/// Since Finnkino XML API considers "The Grinch" and "The Grinch 2D" to be two
/// completely different events, we might get a lot of duplication. We have to
/// do this hack because it is quite boring to display four movie posters that
/// are exactly the same.
KtList<VegeNews> _uniqueVegeNews(KtList<VegeNews> original) {
  return original
      // reverse because last unique key wins
      .reversed()
      .associateBy((vegeNews) => vegeNews.originalTitle)
      .values
      .reversed();
}

KtList<VegeNews> _vegeNewsWithSearchQuery(KtList<VegeNews> original, String searchQuery) {

  final searchQueryPattern = RegExp(searchQuery, caseSensitive: false);
  print("original" + original.toString());

  return original.filter((vegeNews) {
    return vegeNews.title.contains(searchQueryPattern) ||
        vegeNews.originalTitle.contains(searchQueryPattern);
  });
}
