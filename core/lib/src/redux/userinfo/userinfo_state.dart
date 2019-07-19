import 'package:meta/meta.dart';

@immutable
class UserInfoState {
  UserInfoState({
    @required this.userUid,
    @required this.auth,
  });

  final String userUid;
  final String auth;

  factory UserInfoState.initial() {
    return UserInfoState(
      userUid: "",
      auth: "",
    );
  }

  UserInfoState copyWith({
    String userUid,
    String auth,
  }) {
    return UserInfoState(
      userUid: userUid ?? this.userUid,
      auth: auth ?? this.auth,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is UserInfoState &&
          runtimeType == other.runtimeType &&
          userUid == other.userUid &&
          auth == other.auth;

  @override
  int get hashCode => userUid.hashCode ^ auth.hashCode;
}
