import 'package:core/src/models/vegenews.dart';
import 'package:firebase/firestore.dart';
import 'package:kt_dart/collection.dart';

class VegeNewsParser { 
  static KtList<VegeNews> parse(QuerySnapshot snapshot) {

    return listFrom(snapshot.docs).map((doc) {
      print(doc.get("id"));
      return VegeNews(
        id: doc.get("id"),
      );
    });
  }
}