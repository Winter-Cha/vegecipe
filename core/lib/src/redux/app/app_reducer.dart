
import 'package:core/src/redux/_common/search.dart';
import 'package:core/src/redux/actor/actor_reducer.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/event/event_reducer.dart';
import 'package:core/src/redux/show/show_reducer.dart';
import 'package:core/src/redux/theater/theater_reducer.dart';
import 'package:core/src/redux/vegenews/vegenews_reducer.dart';
import 'package:core/src/redux/vegebook/vegebook_reducer.dart';
import 'package:core/src/redux/userinfo/userinfo_reducer.dart';

AppState appReducer(AppState state, dynamic action) {
  return new AppState(
    searchQuery: searchQueryReducer(state.searchQuery, action),
    actorsByName: actorReducer(state.actorsByName, action),
    theaterState: theaterReducer(state.theaterState, action),
    showState: showReducer(state.showState, action),
    eventState: eventReducer(state.eventState, action),
    vegeNewsState: vegeNewsReducer(state.vegeNewsState, action),
    vegeBookState: vegeBookReducer(state.vegeBookState, action),
    userInfoState: userInfoReducer(state.userInfoState, action),
  );
}