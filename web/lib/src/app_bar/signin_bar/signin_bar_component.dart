import 'dart:async';

import 'package:angular/angular.dart';
import 'package:core/core.dart';
import 'package:redux/redux.dart';

import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';

import 'package:web/src/common/signin_page/signin_page_component.dart';

import 'package:firebase/firebase.dart' as fb;


/// A styled container following the Material Spec for Dialogs.
///
/// __Supported Content:__
///
/// - `[header]` -- Header content for the dialog.
/// - `[footer]` -- Footer content for the dialog.
///
/// __Attributes:__
///
///  - `headered` -- Adds a gray background to the dialog header.
///  - `info` -- Styles the dialog as an info dialog.
///
@Component(
  selector: 'signin-bar',
  templateUrl: 'signin_bar_component.html',
  styleUrls: ['signin_bar_component.css'],
  directives: [
    AutoFocusDirective,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialDialogComponent,
    MaterialIconComponent,
    ModalComponent,
    SignInPageComponent,
    NgFor,
    NgIf,
  ],
  providers: [overlayBindings],
)
class SignInBarComponent {
  SignInBarComponent(this.messages, this.store);
  final Messages messages;
  final Store<AppState> store;
  
  bool showSignInDialog = false;
  bool showUserInfoDialog = false;

  bool getSignInOpen() => (signInOpen) ;

  bool signInOpen = false;

  void getSigninPage() {
    signInOpen = true;
  }


  // If the provider gave us an access token, we put it here.
  String providerAccessToken = "";

  bool isAuthenticated() => fb.auth().currentUser != null;
  String get userEmail => fb.auth().currentUser?.email;
  String get displayName => fb.auth().currentUser?.displayName;
  Map<String, dynamic> get userJson => fb.auth().currentUser?.toJson();

  Future<Null> logout() async {
    print("@@@@@@@@@@@@@@@@");
    await fb.auth().signOut();
    providerAccessToken = "";
  }
}
