import 'package:core/src/models/vegebook.dart';
import 'package:kt_dart/collection.dart';

// 새로고침 
class RefreshVegeBookAction {
  RefreshVegeBookAction();
}

class RequestingVegeBookAction {
  RequestingVegeBookAction();
}

class ReceivedInTheatersVegeBookAction {
  ReceivedInTheatersVegeBookAction(this.vegeBook);
  final KtList<VegeBook> vegeBook;
}

// 에러 로딩
class ErrorLoadingVegeBookAction {
  ErrorLoadingVegeBookAction();
}
