import 'dart:async';
import 'dart:html';


import 'package:firebase/firebase.dart';
import 'package:test/test.dart';

import 'package:firebase/firebase.dart' as fb;
import 'package:firebase/firestore.dart' as fs;

Future main() async {

  await _initializeFirebase();

  group('ImgixUrlRewriter', () {
    test('now in theaters', () async {

       fs.Firestore store = firestore();
       fs.CollectionReference ref = store.collection("post");


      expect(fb.database().ref("post"), ref);
    });
  });
}

// firebase 설정
void _initializeFirebase() async{
  initializeApp(
    apiKey: "AIzaSyCvMl1leOFg95dzmjb_LJPZQdKklbc71LU",
    authDomain: "vegecipeapp.firebaseapp.com",
    databaseURL: "https://vegecipeapp.firebaseio.com",
    projectId: "vegecipeapp",
    storageBucket: "vegecipeapp.appspot.com",
    messagingSenderId: "432274912386",
  );
}
