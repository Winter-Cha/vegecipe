//import 'package:core/src/models/vegebook.dart';
import 'package:core/src/models/loading_status.dart';
//import 'package:core/src/redux/_common/common_actions.dart';
import 'package:core/src/redux/vegebook/vegebook_actions.dart';
import 'package:core/src/redux/vegebook/vegebook_state.dart';
//import 'package:kt_dart/collection.dart';

VegeBookState vegeBookReducer(VegeBookState state, dynamic action) {
  if (action is RequestingVegeBookAction) {
    return _requestingVegeBook(state);
  } else if (action is ReceivedInTheatersVegeBookAction) {
    return state.copyWith(
      vegeBookStatus: LoadingStatus.success,
      vegeBookEvents: action.vegeBook,
    );
  } else if (action is ErrorLoadingVegeBookAction) {
    return _errorLoadingVegeBook(state);
  } 
  return state;
}

VegeBookState _requestingVegeBook(VegeBookState state) {
  final status = LoadingStatus.loading;
  return state.copyWith(vegeBookStatus: status);
}

VegeBookState _errorLoadingVegeBook(VegeBookState state) {
  final status = LoadingStatus.error;
  return state.copyWith(vegeBookStatus: status);
}
