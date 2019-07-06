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

import 'medium_editor.dart';

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
    coreDirectives,
    formDirectives,
  ],
  pipes: [DatePipe],
)
class WriteVegeBookComponent implements OnInit, OnActivate, OnDestroy {
  WriteVegeBookComponent(this._store, this._router, this.messages);
  final Store<AppState> _store;
  final Router _router;
  final Messages messages;

  Firestore fs;

  @ViewChild('landscapeImage')
  ImageElement landscapeImageElement;

  @ViewChild('posterImage')
  ImageElement posterImageElement;

  var mediumEditor = null;

  String title = "";
  String htmlStr = "";
  String writer = "";

  String landscapeImageSrc = "";
  Object selectedLImage = null;
  String posterImageSrc = "";
  Object selectedPImage = null;

  bool bookFormValid = false;
  bool loading;
  bool _navigatedFromApp = false;
  bool contentVisible = false;

  StreamSubscription<AppState> _vegeBookDetailsSubscription;

  VegeBook vegeBook = VegeBook();

  @override
  void onActivate(RouterState previous, RouterState current) {
    this.writer = fb.auth().currentUser?.displayName;
    _navigatedFromApp = previous != null;
    _animateContentIntoView();
    _creatMediumEditor();
  }

  @override
  void ngOnDestroy() => _vegeBookDetailsSubscription?.cancel();

  void _animateContentIntoView() =>
      Timer(Duration.zero, () => contentVisible = true);

  void _creatMediumEditor() =>
      Timer(Duration.zero, () {
          mediumEditor = new MediumEditor( 
            document.querySelector('.editable'),
            options: new MediumEditorOptions(
              placeholder: new PlaceHolderOptions(text: 'Edit me!', hideOnClick: true),
              toolbar: new Toolbar(buttons: ['bold', 'italic', 'underline', 'anchor','h1', 'h2', 'h3']),
            )
          );
          mediumEditor.subscribe('editableInput',  (event,editable) {
              print("여기서 버튼 세팅");
              vegeBook.content = mediumEditor.getContent();
            });
        });

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
  void onChangeContent(dynamic event){

    print("!111111");
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

  Future onSubmit() async {
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

    vegeBook = VegeBook(
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

  @override
  void ngOnInit() {
    
  }
}