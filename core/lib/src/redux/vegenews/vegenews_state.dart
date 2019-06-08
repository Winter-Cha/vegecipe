import 'package:core/src/models/vegenews.dart';
import 'package:core/src/models/loading_status.dart';
import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';

@immutable
class VegeNewsState {
  VegeNewsState({
    @required this.vegeNewsStatus,
    @required this.vegeNewsEvents,
  });

  final LoadingStatus vegeNewsStatus;
  final KtList<VegeNews> vegeNewsEvents;

  factory VegeNewsState.initial() {
    return VegeNewsState(
      vegeNewsStatus: LoadingStatus.idle,
      vegeNewsEvents: emptyList(),
    );
  }

  VegeNewsState copyWith({
    LoadingStatus vegeNewsStatus,
    KtList<VegeNews> vegeNewsEvents,
  }) {
    return VegeNewsState(
      vegeNewsStatus: vegeNewsStatus ?? this.vegeNewsStatus,
      vegeNewsEvents: vegeNewsEvents ?? this.vegeNewsEvents,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeNewsState &&
          runtimeType == other.runtimeType &&
          vegeNewsStatus == other.vegeNewsStatus &&
          vegeNewsEvents == other.vegeNewsEvents;

  @override
  int get hashCode =>
      vegeNewsStatus.hashCode ^
      vegeNewsEvents.hashCode;
}
