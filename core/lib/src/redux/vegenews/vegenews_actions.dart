import 'package:core/src/models/vegenews.dart';
import 'package:kt_dart/collection.dart';

// 새로고침 
class RefreshVegeNewsAction {
  RefreshVegeNewsAction();
}

class RequestingVegeNewsAction {
  RequestingVegeNewsAction();
}

class ReceivedInTheatersVegeNewsAction {
  ReceivedInTheatersVegeNewsAction(this.vegeNews);
  final KtList<VegeNews> vegeNews;
}

// 에러 로딩
class ErrorLoadingVegeNewsAction {
  ErrorLoadingVegeNewsAction();
}
