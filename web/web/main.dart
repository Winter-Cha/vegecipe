import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:http/http.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';
import 'package:intl/intl_browser.dart';
import 'package:key_value_store_web/key_value_store_web.dart';
import 'package:pwa/client.dart' as pwa;
import 'package:redux/redux.dart';
import 'package:web/app_component.template.dart' as ng;

import 'main.template.dart' as self;

import 'package:firebase/firebase.dart' as fb;

final Store<AppState> _store = createStore(
  Client(),
  WebKeyValueStore(window.localStorage),
  fb.firestore(),
);
Store<AppState> storeFactory() => _store;

@GenerateInjector([
  const FactoryProvider(Store, storeFactory),
  const ClassProvider(Messages),
  routerProvidersHash,
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() async {
  pwa.Client();
  await _initializeFirebase();
  await _initializeTranslations();

  runApp(ng.AppComponentNgFactory, createInjector: rootInjector);
}

// firebase 설정
void _initializeFirebase() async{
  fb.initializeApp(
    apiKey: "AIzaSyCvMl1leOFg95dzmjb_LJPZQdKklbc71LU",
    authDomain: "vegecipeapp.firebaseapp.com",
    databaseURL: "https://vegecipeapp.firebaseio.com",
    projectId: "vegecipeapp",
    storageBucket: "vegecipeapp.appspot.com",
    messagingSenderId: "432274912386",
  );
  
  var lang = await findSystemLocale();
  fb.auth().languageCode = lang;
}

void _initializeTranslations() async {
  var locale = await findSystemLocale();
  final initializationSuccessful = await initializeMessages(locale);
  await initializeDateFormatting(locale);

  if (!initializationSuccessful) {
    // If we can't initialize messages for current locale, fall back on English.
    locale = 'en';
    await initializeMessages(locale);
    await initializeDateFormatting(locale);
  }

  FinnkinoApi.useFinnish = locale == 'fi';
  Intl.defaultLocale = locale;
}
