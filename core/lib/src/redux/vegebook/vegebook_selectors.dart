import 'package:core/src/models/vegebook.dart';
//import 'package:core/src/models/show.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:kt_dart/collection.dart';
import 'package:reselect/reselect.dart';

final vegeBookSelector = createSelector2(
  (AppState state) => state.vegeBookState.vegeBookEvents,
  (AppState state) => state.searchQuery,
  _vegeBookOrVegeBookSearch,
);

KtList<VegeBook> _vegeBookOrVegeBookSearch(KtList<VegeBook> vegeBook, String searchQuery) {
  return searchQuery == null
      ? vegeBook
      : _vegeBookWithSearchQuery(vegeBook, searchQuery);
}

VegeBook vegeBookByIdSelector(AppState state, String id) {
  final predicate = (vegeBook) => vegeBook.id == id;
  return vegeBookSelector(state).firstOrNull(predicate);
}


KtList<VegeBook> _vegeBookWithSearchQuery(KtList<VegeBook> original, String searchQuery) {

  final searchQueryPattern = RegExp(searchQuery, caseSensitive: false);
  print("original" + original.toString());

  return original.filter((vegeBook) {
    return vegeBook.title.contains(searchQueryPattern);
  });
}
