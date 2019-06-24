import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:firebase/firestore.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/content_rating/content_rating_component.dart';
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.dart';
import 'package:web/src/routes.dart';
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart';

import 'package:firebase/firebase.dart' as fb;

import 'package:angular_quill/angular_quill.dart';

@Component(
  selector: 'write-vegebook',
  styleUrls: ['write_vegebook_component.css'],
  templateUrl: 'write_vegebook_component.html',
  directives: [
    formDirectives,
    ContentRatingComponent,
    VegeBookLandscapeImageComponent,
    VegeBookPosterComponent,
    MaterialButtonComponent,
    MaterialInputComponent,
    materialInputDirectives,
    NgIf,
    NgFor,
    NgModel,
    COMMON_DIRECTIVES,
    quillDirectives,
  ],
  pipes: [DatePipe],
)
class WriteVegeBookComponent implements OnActivate, OnDestroy {
  WriteVegeBookComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  Firestore fs;

  @ViewChild('landscapeImage')
  ImageElement landscapeImageElement;

  @ViewChild('posterImage')
  ImageElement posterImageElement;

  String title = "";
  String htmlStr = "";

  String landscapeImageSrc = "";
  Object selectedLImage = null;
  String posterImageSrc = "";
  Object selectedPImage = null;

  bool loading;


  VegeBook vegeBook = VegeBook(
    id: '',
    title: '',
    content: '',
    images: VegeBookImageData(
      landscapeBig: null,
      landscapeSmall: null,
      portraitSmall: null,
      portraitMedium: null,
      portraitLarge: null,
    ),
    writtenBy: fb.auth().currentUser?.displayName,
    writerPhotoUrl: fb.auth().currentUser?.photoURL,
  );

  bool _navigatedFromApp = false;
  bool contentVisible = false;
  StreamSubscription<AppState> _vegeBookDetailsSubscription;


  @override
  void onActivate(RouterState previous, RouterState current) {
    print("@@@@@@@@@" + previous.toString());
    _navigatedFromApp = previous != null;
    _animateContentIntoView();
    // _populateVegeBookDetails(
    //   current.parameters['vegeBookId'],
    // );
  }

  @override
  void ngOnDestroy() => _vegeBookDetailsSubscription?.cancel();

  void _populateVegeBookDetails(vegeBookId) {
    vegeBook = vegeBookByIdSelector(_store.state, vegeBookId);

    if (vegeBook != null) {
      _animateContentIntoView();
    } else {
      _store.dispatch(RefreshVegeBookAction());
      _waitForEventDetails(vegeBookId);
    }
  }

  /// The event details page was opened before loading data has finished.
  ///
  /// This happened because the user came to event details page by a link,
  /// for example [https://inkino.app/#event/302789].
  ///
  /// Since in this case, the event details page is the first entry point for
  /// inKino, we'll have to wait until the store is populated with all the events.
  void _waitForEventDetails(String vegeBookId) {
    final state = _store.state.vegeBookState;
    final isLoading = state.vegeBookStatus == LoadingStatus.loading;

    if (!isLoading) {
      return;
    }

    _vegeBookDetailsSubscription = _store.onChange.listen((state) {
      final state = _store.state.vegeBookState;
      final hasFinishedLoading =
          state.vegeBookStatus != LoadingStatus.loading;

      if (hasFinishedLoading) {
        _populateVegeBookDetails(vegeBookId);
        _vegeBookDetailsSubscription.cancel();
        _vegeBookDetailsSubscription = null;

        _animateContentIntoView();
      }
    });
  }

  void _animateContentIntoView() =>
      Timer(Duration.zero, () => contentVisible = true);

  void goBack() {
    if (_navigatedFromApp) {
      window.history.back();
      return;
    }

    _router.navigateByUrl(
      RoutePaths.vegeBook.toUrl(),
      replace: true,
    );
  }

  void onLandscapeImageFileSelected(dynamic event){
    if(event.target.files != null && event.target.files[0] != null ){
      // create FileReader listener
      FileReader reader = new FileReader();
      reader.onLoad.listen((fileEvent) {
          this.landscapeImageSrc = reader.result;
          this.selectedLImage = event.target.files[0];
          landscapeImageElement.classes.add('loaded');
      });
      reader.onError.listen((itWentWrongEvent) {
          this.landscapeImageSrc = "";
          this.selectedLImage = null;
          landscapeImageElement.classes.remove('loaded');
      });
      
      reader.readAsDataUrl(event.target.files[0]);
    }
  }

  void onPosterImageFileSelected(dynamic event){
    if(event.target.files != null && event.target.files[0] != null ){
      // create FileReader listener
      FileReader reader = new FileReader();
      reader.onLoad.listen((fileEvent) {
          this.posterImageSrc = reader.result;
          this.selectedPImage = event.target.files[0];
          posterImageElement.classes.add('loaded');
      });
      reader.onError.listen((itWentWrongEvent) {
          this.posterImageSrc = "";
          this.selectedPImage = null;
          posterImageElement.classes.remove('loaded');
      });
      
      reader.readAsDataUrl(event.target.files[0]);
    }
  }

  Future submit() async {
    fb.StorageReference stRef = fb.storage().ref("vegebook");
    
    try {
      File lImgFile = this.selectedLImage;
      var filePath = '${lImgFile.name}${DateTime.now().millisecondsSinceEpoch}.png';
      var task = stRef.child(filePath).put(lImgFile);
       task.onStateChanged
           .listen((_) => loading = true, onDone: () => loading = false);

      var dowurl = await (await task.future).ref.getDownloadURL();
      vegeBook.images.landscapeBig = dowurl.toString();
      print(' url l ${dowurl.toString()}');
    } catch (e) {
      print("Error in uploading to storage: $e");
    }
    try {
      File pImgFile = this.selectedPImage;

      var filePath = '${pImgFile.name}${DateTime.now().millisecondsSinceEpoch}.png';
      var task = stRef.child(filePath).put(pImgFile);
      task.onStateChanged
          .listen((_) => loading = true, onDone: () => loading = false);

      var dowurl = await (await task.future).ref.getDownloadURL();
      vegeBook.images.portraitMedium = dowurl.toString();
      print(' url p ${dowurl.toString()}');
    } catch (e) {
      print("Error in uploading to storage: $e");
    }
    await fb.firestore().collection('vegebook').add(
                {
                  //TODO : id field 만들기
                  'image': {
                    'landscapeBig': vegeBook.images.landscapeBig,
                    'portraitMedium': vegeBook.images.portraitMedium,
                  },
                  'contents': this.htmlStr,
                  'title': this.title,
                  'writtenBy': vegeBook.writtenBy,
                  'writerPhotoUrl': vegeBook.writerPhotoUrl,
                  'reportingDate': DateTime.now(),
                }).then((docRef) => print(docRef.id));

  }

  void blur(){

  }

  void input(){

  }
}