//import 'package:core/src/models/vegenews.dart';
import 'package:core/src/models/loading_status.dart';
//import 'package:core/src/redux/_common/common_actions.dart';
import 'package:core/src/redux/vegenews/vegenews_actions.dart';
import 'package:core/src/redux/vegenews/vegenews_state.dart';
//import 'package:kt_dart/collection.dart';

VegeNewsState vegeNewsReducer(VegeNewsState state, dynamic action) {
  if (action is RequestingVegeNewsAction) {
    return _requestingVegeNews(state);
  } else if (action is ReceivedInTheatersVegeNewsAction) {
    return state.copyWith(
      vegeNewsStatus: LoadingStatus.success,
      vegeNewsEvents: action.vegeNews,
    );
  } else if (action is ErrorLoadingVegeNewsAction) {
    return _errorLoadingVegeNews(state);
  } 
  return state;
}

VegeNewsState _requestingVegeNews(VegeNewsState state) {
  final status = LoadingStatus.loading;
  return state.copyWith(vegeNewsStatus: status);
}

VegeNewsState _errorLoadingVegeNews(VegeNewsState state) {
  final status = LoadingStatus.error;
  return state.copyWith(vegeNewsStatus: status);
}
