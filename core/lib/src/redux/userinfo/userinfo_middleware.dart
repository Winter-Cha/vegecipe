import 'dart:async';

import 'package:core/src/redux/app/app_state.dart';
import 'package:core/src/redux/userinfo/userinfo_actions.dart';
import 'package:firebase/firestore.dart';
import 'package:redux/redux.dart';



class UserInfoMiddleware extends MiddlewareClass<AppState> {
  UserInfoMiddleware(this.fs);
  final Firestore fs;

  @override
  Future<void> call(
      Store<AppState> store, dynamic action, NextDispatcher next) async {
    //next(action);
    //final theater = _determineTheater(action, store);
    if (action is SetUserInfoAction) {
      await _fetchUserAuth(action.userUid, next);
      next(action);
    } else {
      next(action);
    }
    
  }

  Future<void> _fetchUserAuth(String userUid, NextDispatcher next) async {
      // print("_fetchUserAuth : " );
      try {

        String _auth = "";
        if(userUid == null){
          return false;
        }
        await fs.collection("poweruser").where('userUid', '==', userUid ).get()
        .then( (snapshot) {
          if (snapshot.empty) {
              // print('No matching documents.');
          }
          snapshot.forEach((doc) {
              // print("_setAuth : " + doc.get("auth").toString().trim());
              _auth = doc.get("auth").toString().trim();
          });
        })
        .catchError((onError) {
            print('Error getting documents.');
        });
        next(SetUserAuthAction(_auth));
      } catch (e) {
        //next(ErrorLoadingVegeBookAction());
      }
      
  }

}
