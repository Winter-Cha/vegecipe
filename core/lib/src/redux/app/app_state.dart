import 'package:core/src/models/actor.dart';
import 'package:core/src/redux/event/event_state.dart';
import 'package:core/src/redux/show/show_state.dart';
import 'package:core/src/redux/theater/theater_state.dart';
import 'package:core/src/redux/vegenews/vegenews_state.dart';
import 'package:core/src/redux/vegebook/vegebook_state.dart';
import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';

@immutable
class AppState {
  AppState({
    @required this.searchQuery,
    @required this.actorsByName,
    @required this.theaterState,
    @required this.showState,
    @required this.eventState,
    @required this.vegeNewsState,
    @required this.vegeBookState,
  });

  final String searchQuery;
  final KtMap<String, Actor> actorsByName;
  final TheaterState theaterState;
  final ShowState showState;
  final EventState eventState;
  final VegeNewsState vegeNewsState;
  final VegeBookState vegeBookState;

  factory AppState.initial() {
    return AppState(
      searchQuery: null,
      actorsByName: emptyMap(),
      theaterState: TheaterState.initial(),
      showState: ShowState.initial(),
      eventState: EventState.initial(),
      vegeNewsState: VegeNewsState.initial(),
      vegeBookState: VegeBookState.initial(),
    );
  }

  AppState copyWith({
    String searchQuery,
    KtMap<String, Actor> actorsByName,
    TheaterState theaterState,
    ShowState showState,
    EventState eventState,
    VegeNewsState vegeNewsState,
    VegeBookState vegeBookState,
  }) {
    return AppState(
      searchQuery: searchQuery ?? this.searchQuery,
      actorsByName: actorsByName ?? this.actorsByName,
      theaterState: theaterState ?? this.theaterState,
      showState: showState ?? this.showState,
      eventState: eventState ?? this.eventState,
      vegeNewsState: vegeNewsState ?? this.vegeNewsState,
      vegeBookState: vegeBookState ?? this.vegeBookState,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AppState &&
          runtimeType == other.runtimeType &&
          searchQuery == other.searchQuery &&
          actorsByName == other.actorsByName &&
          theaterState == other.theaterState &&
          showState == other.showState &&
          eventState == other.eventState &&
          vegeNewsState == other.vegeNewsState &&
          vegeBookState == other.vegeBookState;

  @override
  int get hashCode =>
      searchQuery.hashCode ^
      actorsByName.hashCode ^
      theaterState.hashCode ^
      showState.hashCode ^
      eventState.hashCode ^
      vegeNewsState.hashCode ^
      vegeBookState.hashCode;
}
