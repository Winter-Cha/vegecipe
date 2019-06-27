import 'dart:async';

import 'package:core/src/redux/_common/common_actions.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/vegebook/vegebook_actions.dart';
import 'package:firebase/firestore.dart';
import 'package:redux/redux.dart';
import 'package:core/src/parsers/vegebook_parser.dart';

class VegeBookMiddleware extends MiddlewareClass<AppState> {
  VegeBookMiddleware(this.fs);
  final Firestore fs;

  @override
  Future<void> call(
      Store<AppState> store, dynamic action, NextDispatcher next) async {
    next(action);
    //final theater = _determineTheater(action, store);
    if (action is InitCompleteAction) {
      await _fetchLatestVegeBook(next);
    } else if (action is RefreshVegeBookAction) {
      await _refreshEvents(action, next);
    } 
  }

  Future<void> _fetchLatestVegeBook(NextDispatcher next) async {
      next(RequestingVegeBookAction());
      try {

        QuerySnapshot latestVegeBook = (await fs.collection('vegebook').get()) ;
        next(ReceivedInTheatersVegeBookAction(VegeBookParser.parse(latestVegeBook)));
      } catch (e) {
        next(ErrorLoadingVegeBookAction());
      }
  }

  Future<void> _refreshEvents( RefreshVegeBookAction action, NextDispatcher next) {
    return _fetchLatestVegeBook(next);
  }
}
