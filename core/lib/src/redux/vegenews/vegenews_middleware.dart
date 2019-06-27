import 'dart:async';

import 'package:core/src/redux/_common/common_actions.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/vegenews/vegenews_actions.dart';
import 'package:firebase/firestore.dart';
import 'package:redux/redux.dart';
import 'package:core/src/parsers/vegenews_parser.dart';

class VegeNewsMiddleware extends MiddlewareClass<AppState> {
  VegeNewsMiddleware(this.fs);
  final Firestore fs;

  @override
  Future<void> call(
      Store<AppState> store, dynamic action, NextDispatcher next) async {
    next(action);
    //final theater = _determineTheater(action, store);
    if (action is InitCompleteAction) {
      await _fetchLatestVegeNews(next);
    } else if (action is RefreshVegeNewsAction) {
      await _refreshEvents(action, next);
    } 
  }

  Future<void> _fetchLatestVegeNews(NextDispatcher next) async {
      next(RequestingVegeNewsAction());
      try {

        QuerySnapshot latestVegeNews = (await fs.collection('vegenews').get()) ;

        next(ReceivedInTheatersVegeNewsAction(VegeNewsParser.parse(latestVegeNews)));
      } catch (e) {
        next(ErrorLoadingVegeNewsAction());
      }
  }

  Future<void> _refreshEvents( RefreshVegeNewsAction action, NextDispatcher next) {
    return _fetchLatestVegeNews(next);
  }
}
