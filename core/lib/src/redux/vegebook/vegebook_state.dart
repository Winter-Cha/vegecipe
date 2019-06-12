import 'package:core/src/models/vegebook.dart';
import 'package:core/src/models/loading_status.dart';
import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';

@immutable
class VegeBookState {
  VegeBookState({
    @required this.vegeBookStatus,
    @required this.vegeBookEvents,
  });

  final LoadingStatus vegeBookStatus;
  final KtList<VegeBook> vegeBookEvents;

  factory VegeBookState.initial() {
    return VegeBookState(
      vegeBookStatus: LoadingStatus.idle,
      vegeBookEvents: emptyList(),
    );
  }

  VegeBookState copyWith({
    LoadingStatus vegeBookStatus,
    KtList<VegeBook> vegeBookEvents,
  }) {
    return VegeBookState(
      vegeBookStatus: vegeBookStatus ?? this.vegeBookStatus,
      vegeBookEvents: vegeBookEvents ?? this.vegeBookEvents,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeBookState &&
          runtimeType == other.runtimeType &&
          vegeBookStatus == other.vegeBookStatus &&
          vegeBookEvents == other.vegeBookEvents;

  @override
  int get hashCode =>
      vegeBookStatus.hashCode ^
      vegeBookEvents.hashCode;
}
