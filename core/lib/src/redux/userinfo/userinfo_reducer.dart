import 'package:core/src/redux/userinfo/userinfo_actions.dart';
import 'package:core/src/redux/userinfo/userinfo_state.dart';


UserInfoState userInfoReducer(UserInfoState state, dynamic action) {
 if (action is SetUserInfoAction) {
    return state.copyWith(
      userUid: action.userUid,
    );
 }else if (action is SetUserAuthAction) {
    return state.copyWith(
      auth: action.auth,
    );
 }

  return state;
}
