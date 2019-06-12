
import 'package:core/src/models/vegebook.dart';
import 'package:core/src/models/loading_status.dart';
import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/vegebook/vegebook_actions.dart';
import 'package:core/src/redux/vegebook/vegebook_selectors.dart';
import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';
import 'package:redux/redux.dart';

class VegeBookPageViewModel {
  VegeBookPageViewModel({
    @required this.status,
    @required this.vegeBook,
    @required this.refreshVegeBook,
  });

  final LoadingStatus status;
  final KtList<VegeBook> vegeBook;
  final Function refreshVegeBook;

  static VegeBookPageViewModel fromStore(
    Store<AppState> store,
    //EventListType type,
  ) {
    return VegeBookPageViewModel(
      status: store.state.vegeBookState.vegeBookStatus,
      vegeBook: vegeBookSelector(store.state),
      refreshVegeBook: () => store.dispatch(RefreshVegeBookAction()),
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeBookPageViewModel &&
          runtimeType == other.runtimeType &&
          status == other.status &&
          vegeBook == other.vegeBook;

  @override
  int get hashCode => status.hashCode ^ vegeBook.hashCode;
}
