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
      ? vegeNews
      : _vegeNewsWithSearchQuery(vegeNews, searchQuery);
}

VegeNews vegeNewsByIdSelector(AppState state, String id) {
  final predicate = (vegeNews) => vegeNews.id == id;
  return vegeNewsSelector(state).firstOrNull(predicate);
}


KtList<VegeNews> _vegeNewsWithSearchQuery(KtList<VegeNews> original, String searchQuery) {
  final searchQueryPattern = RegExp(searchQuery, caseSensitive: false);
  return original.filter((vegeNews) {
    return vegeNews.title.contains(searchQueryPattern);
  });
}
