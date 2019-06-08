
import 'package:core/src/models/vegenews.dart';
import 'package:core/src/models/loading_status.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/vegenews/vegenews_actions.dart';
import 'package:core/src/redux/vegenews/vegenews_selectors.dart';
import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';
import 'package:redux/redux.dart';

class VegeNewsPageViewModel {
  VegeNewsPageViewModel({
    @required this.status,
    @required this.vegeNews,
    @required this.refreshVegeNews,
  });

  final LoadingStatus status;
  final KtList<VegeNews> vegeNews;
  final Function refreshVegeNews;

  static VegeNewsPageViewModel fromStore(
    Store<AppState> store,
    //EventListType type,
  ) {
    return VegeNewsPageViewModel(
      status: store.state.vegeNewsState.vegeNewsStatus,
      vegeNews: vegeNewsSelector(store.state),
      refreshVegeNews: () => store.dispatch(RefreshVegeNewsAction()),
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeNewsPageViewModel &&
          runtimeType == other.runtimeType &&
          status == other.status &&
          vegeNews == other.vegeNews;

  @override
  int get hashCode => status.hashCode ^ vegeNews.hashCode;
}
