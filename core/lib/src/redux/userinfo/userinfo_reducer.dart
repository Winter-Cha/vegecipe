import 'package:core/src/redux/userinfo/userinfo_actions.dart';
import 'package:core/src/redux/userinfo/userinfo_state.dart';


UserInfoState userInfoReducer(UserInfoState state, dynamic action) {
 if (action is SetUserInfoAction) {
  print("reducer 1: " + action.userUid);
    return state.copyWith(
      userUid: action.userUid,
    );
 }else if (action is SetUserAuthAction) {
  print("reducer 2: " + action.auth);
    return state.copyWith(
      auth: action.auth,
    );
 }

  return state;
}
