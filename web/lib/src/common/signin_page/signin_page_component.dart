import 'dart:async';
import 'dart:js';

import 'package:angular/angular.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';

import 'package:firebase/src/interop/firebase_interop.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firebase_dart_ui/firebase_dart_ui.dart';

@Component(
  selector: 'signin-page',
  templateUrl: 'signin_page_component.html',
  styleUrls: ['signin_page_component.css'],
  directives: [
    FirebaseAuthUIComponent,
    NgFor,
    NgIf,
  ],
)
class SignInPageComponent {
  SignInPageComponent(this.messages, this.store);
  final Messages messages;
  final Store<AppState> store;

  bool isAuthenticated() => fb.auth().currentUser != null;
  String get userEmail => fb.auth().currentUser?.email;
  String get displayName => fb.auth().currentUser?.displayName;
  Map<String, dynamic> get userJson => fb.auth().currentUser?.toJson();

  // If the provider gave us an access token, we put it here.
  String providerAccessToken = "";
  
  UIConfig _uiConfig;

  Future<Null> logout() async {
    print("@@@@@@@@@@@@@@@@");
    await fb.auth().signOut();
    providerAccessToken = "";
  }

  // todo: We need to create a nicer wrapper for the sign in callbacks.
  PromiseJsImpl<void>  signInFailure(AuthUIError authUiError) {
    // nothing to do;
    return new PromiseJsImpl<void>( () => print("SignIn Failure"));
  }

  // Example SignInSuccess callback handler
  bool signInSuccess(fb.UserCredential authResult, String redirectUrl) {
    print("sign in  success. ProviderID =  ${authResult.credential.providerId}");
    print("Info= ${authResult.additionalUserInfo}");

    // returning false gets rid of the double page load (no need to redirect to /)
    return false;
  }

  /// Your Application must provide the UI configuration for the
  /// AuthUi widget. This is where you configure the providers and options.
  UIConfig getUIConfig() {
    if (_uiConfig == null) {
      var googleOptions = new CustomSignInOptions(
          provider: fb.GoogleAuthProvider.PROVIDER_ID,
          scopes: ['email', 'https://www.googleapis.com/auth/plus.login'],
          customParameters:
              new GoogleCustomParameters(prompt: 'select_account'));

      var facebookOptions = new CustomSignInOptions(
          provider: fb.FacebookAuthProvider.PROVIDER_ID,
          //scopes: ['email', 'https://www.googleapis.com/auth/plus.login'],
          customParameters:
              new FacebookCustomParameters());

      var twitterOptions = new CustomSignInOptions(
          provider: fb.TwitterAuthProvider.PROVIDER_ID);
          //scopes: ['email', 'https://www.googleapis.com/auth/plus.login'],
          //customParameters:new FacebookCustomParameters());


      // var gitHub = new CustomSignInOptions(
      //     provider: fb.GithubAuthProvider.PROVIDER_ID,
      //     // sample below of asking for additional scopes.
      //     // See https://developer.github.com/apps/building-oauth-apps/scopes-for-oauth-apps/
      //     scopes: [/*'repo', 'gist' */]);


      var callbacks = new Callbacks(
          uiShown: () => print("UI shown callback"),
          signInSuccessWithAuthResult: allowInterop(signInSuccess),
          signInFailure: signInFailure
      );


      _uiConfig = new UIConfig(
          signInSuccessUrl: '/',
          signInOptions: [
            googleOptions,
            facebookOptions,
            twitterOptions,
            //fb.EmailAuthProvider.PROVIDER_ID,
            //fb.PhoneAuthProvider.PROVIDER_ID,
            //gitHub
          ],
          signInFlow: "redirect",
          //signInFlow: "popup",
          credentialHelper: ACCOUNT_CHOOSER,
          tosUrl: '/tos.html',
          callbacks: callbacks);
    }
    return _uiConfig;
  }

}
