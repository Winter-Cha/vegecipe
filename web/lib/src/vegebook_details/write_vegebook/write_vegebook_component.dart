import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_datepicker/proto/date.pb.dart';
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
  String writer = "";

  String landscapeImageSrc = "";
  Object selectedLImage = null;
  String posterImageSrc = "";
  Object selectedPImage = null;

  bool loading;
  bool _navigatedFromApp = false;
  bool contentVisible = false;

  StreamSubscription<AppState> _vegeBookDetailsSubscription;


  @override
  void onActivate(RouterState previous, RouterState current) {
    this.writer = fb.auth().currentUser?.displayName;
    _navigatedFromApp = previous != null;
    _animateContentIntoView();
  }

  @override
  void ngOnDestroy() => _vegeBookDetailsSubscription?.cancel();

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
    var landscapeBig = '';
    var portraitMedium = '';
    try {
      File lImgFile = this.selectedLImage;
      var filePath = '${lImgFile.name}${DateTime.now().millisecondsSinceEpoch}.png';
      var task = stRef.child(filePath).put(lImgFile);
       task.onStateChanged
           .listen((_) => loading = true, onDone: () => loading = false);

      var dowurl = await (await task.future).ref.getDownloadURL();
      landscapeBig = dowurl.toString();
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
      portraitMedium = dowurl.toString();
      print(' url p ${dowurl.toString()}');
    } catch (e) {
      print("Error in uploading to storage: $e");
    }


      VegeBook vegeBook = VegeBook(
        id: '',
        title: '',
        content: '',
        images: VegeBookImageData(
          landscapeBig: landscapeBig,
          landscapeSmall: null,
          portraitSmall: null,
          portraitMedium: portraitMedium,
          portraitLarge: null,
        ),
        writtenBy: fb.auth().currentUser?.displayName,
        writerPhotoUrl: fb.auth().currentUser?.photoURL,
      );

    DocumentReference doc = fb.firestore().collection('vegebook').doc();
    var vegeBookMap  = {
                  //TODO : id field 만들기
                  'id': doc.id,
                  'images': {
                    'landscapeBig': vegeBook.images.landscapeBig,
                    'portraitMedium': vegeBook.images.portraitMedium,
                  },
                  'content': this.htmlStr,
                  'title': this.title,
                  'writtenBy': vegeBook.writtenBy,
                  'writerPhotoUrl': vegeBook.writerPhotoUrl,
                  'reportingDate': DateTime.now(),
                };
    await doc.set(vegeBookMap).then((doc) => print(doc));

  }

  void blur(){

  }

  void input(){

  }
}