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
import 'package:web/src/common/loading_view/loading_whole_view_component.dart';
import 'package:web/src/common/vegebook_poster/vegebook_poster_component.dart';
import 'package:web/src/routes.dart';
import 'package:web/src/vegebook_details/landscape_image/vegebook_landscape_image_component.dart';
import 'lazy_image_component.dart';
import 'package:dialog/dialog.dart';

import 'package:firebase/firebase.dart' as fb;

import 'package:web/src/common/medium_editor/medium_editor.dart';

@Component(
  selector: 'write-vegebook',
  styleUrls: ['write_vegebook_component.css'],
  templateUrl: 'write_vegebook_component.html',
  directives: [
    formDirectives,
    LoadingWholeViewComponent,
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
    LazyImageComponent,
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
  String htmlStr = "";

  String landscapeImageSrc = "";
  Object selectedLImage = null;
  String posterImageSrc = "";
  Object selectedPImage = null;

  bool bookFormValid = false;
  bool loading;
  bool _navigatedFromApp = false;

  bool contentVisible = false;    // show details 
  bool editable = false;          // create or modify details
  bool editMode = false;    
  bool isMine = false;        

  LoadingStatus saveStatus = LoadingStatus.idle;

  StreamSubscription<AppState> _vegeBookDetailsSubscription;

  VegeBook vegeBook;
  VegeBook copyBook;

  @override
  void ngOnInit() {
    // Reset the scroll position in case this page was previously opened.
    window.scrollTo(0, 0);

    // Timer(
    //   const Duration(milliseconds: 3000),
    //   () => saveStatus = LoadingStatus.error,
    // );
  }

  @override
  void onActivate(RouterState previous, RouterState current) {

    _navigatedFromApp = previous != null;

    // view
    if(current.parameters['vegeBookId'] != null){
      _populateVegeBookDetails(
        current.parameters['vegeBookId'],
      );
      return;
    }
    // else
    vegeBook = VegeBook();
    _populateVegeBookEditor(vegeBook);
    
  }

  @override
  void ngOnDestroy() => _vegeBookDetailsSubscription?.cancel();

  // initialize view mode
  void _populateVegeBookDetails(String vegeBookId) {
    this.vegeBook = vegeBookByIdSelector(_store.state, vegeBookId);

    if (vegeBook != null) {
      this.isMine = this.vegeBook.writerUid == fb.auth().currentUser?.uid;
      _animateContentIntoView();
    } else {
      _store.dispatch(RefreshVegeBookAction());
      _waitForEventDetails(vegeBookId);
    }
  }

  // initialize edit mode
  void _populateVegeBookEditor( VegeBook vegeBook){
    // create
    if (vegeBook != null) {
      _animateContentIntoEdit();
      this.vegeBook.writtenBy = fb.auth().currentUser?.displayName;
      _creatMediumEditor();
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
  void onSubmit() => _saveSubmit();

  void _saveSubmit() async {

    var myConfirm = await confirm("Confirmed?!");
    if(!myConfirm) return;

    saveStatus = LoadingStatus.loading;

    if (editMode) {
      await _updateVegeBook();
    }else{
      await _createVegeBook();
    }
    _store.dispatch(RefreshVegeBookAction());
    saveStatus = LoadingStatus.idle;

  }

  void _updateVegeBook() async{
    DocumentReference doc = fb.firestore().collection('vegebook').doc(this.copyBook.id);
    var vegeBookMap  = {
                  //TODO : id field 만들기
                  'id': doc.id,
                  'content': mediumEditor.getContent(),
                  'title': this.copyBook.title,
                  'images': {
                    'landscapeBig': this.copyBook.images.landscapeBig,
                    'portraitMedium': this.copyBook.images.portraitMedium,
                  },
                  'writtenBy': this.copyBook.writtenBy,
                  'writerUid': this.copyBook.writerUid,
                  'writerPhotoUrl': this.copyBook.writerPhotoUrl,
                  'reportingDate': this.copyBook.reportingDate,
                  'lastModifiedDate': DateTime.now(),
                };
    await doc.set(vegeBookMap).then((onValue){
      if (this.copyBook != null) {
        this.vegeBook = VegeBook();
        this.vegeBook.id = this.copyBook.id;
        this.vegeBook.title = this.copyBook.title;
        this.vegeBook.writtenBy = this.copyBook.writtenBy;
        this.vegeBook.reportingDate = this.copyBook.reportingDate;
        this.vegeBook.content = this.copyBook.content;
        this.vegeBook.writerPhotoUrl = this.copyBook.writerPhotoUrl;
        this.vegeBook.images = VegeBookImageData(
          landscapeBig: this.copyBook.images.landscapeBig, 
          landscapeSmall: null, 
          portraitLarge: null, 
          portraitMedium: this.copyBook.images.portraitMedium, 
          portraitSmall: null);
        _animateContentIntoView();
      }
    })
    .catchError((onError){
      // TODO
    });

  }

  void _createVegeBook() async {
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

    this.vegeBook.images = VegeBookImageData(
      landscapeBig: landscapeBig,
      landscapeSmall: null,
      portraitSmall: null,
      portraitMedium: portraitMedium,
      portraitLarge: null,
    );
    this.vegeBook.writtenBy = fb.auth().currentUser?.displayName;
    this.vegeBook.writerPhotoUrl = fb.auth().currentUser?.photoURL;

    DocumentReference doc = fb.firestore().collection('vegebook').doc();
    this.vegeBook.id = doc.id;
    var vegeBookMap  = {
                  //TODO : id field 만들기
                  'id': doc.id,
                  'images': {
                    'landscapeBig': this.vegeBook.images.landscapeBig,
                    'portraitMedium': this.vegeBook.images.portraitMedium,
                  },
                  'content': mediumEditor.getContent(),
                  'title': this.vegeBook.title,
                  'writtenBy': this.vegeBook.writtenBy,
                  'writerPhotoUrl': this.vegeBook.writerPhotoUrl,
                  'writerUid': fb.auth().currentUser?.uid,
                  'reportingDate': DateTime.now(),
                };
    await doc.set(vegeBookMap).then((onValue){
      if (this.vegeBook != null) {
        print("save success!");
        this.isMine = true;
        _animateContentIntoView();
      }
    })
    .catchError((onError){
      // TODO
    });
    
  }


  void goEdit () {
    // 제목이랑 글만 바꾸게 만들어 줍시다.
    // 사본을 만들어야 합니다.
    this.copyBook = VegeBook();
    this.copyBook.id = this.vegeBook.id;
    this.copyBook.title = this.vegeBook.title;
    this.copyBook.writtenBy = this.vegeBook.writtenBy;
    this.copyBook.reportingDate = this.vegeBook.reportingDate;
    this.copyBook.content = this.vegeBook.content;
    this.copyBook.writerPhotoUrl = this.vegeBook.writerPhotoUrl;
    this.copyBook.writerUid = this.vegeBook.writerUid;
    this.copyBook.images = VegeBookImageData(
          landscapeBig: this.vegeBook.images.landscapeBig, 
          landscapeSmall: null, 
          portraitLarge: null, 
          portraitMedium: this.vegeBook.images.portraitMedium, 
          portraitSmall: null);

    this.editMode = true;
    _animateContentIntoEdit();
    _setEdit();
  }

  void _setEdit() =>
      Timer(Duration.zero, () {
          mediumEditor = new MediumEditor( 
            document.querySelector('.editable'),
            options: new MediumEditorOptions(
              placeholder: new PlaceHolderOptions(text: 'Edit me!', hideOnClick: true),
              toolbar: new Toolbar(buttons: ['bold', 'italic', 'underline', 'anchor','h1', 'h2', 'h3']),
            )
          );
          mediumEditor.subscribe('editableInput',  (event,editable) {
              copyBook.content = mediumEditor.getContent();
            });
          mediumEditor.setContent(this.copyBook.content);

          this.landscapeImageSrc = this.copyBook.images.landscapeBig;
          landscapeImageElement.classes.add('loaded');
          this.posterImageSrc = this.copyBook.images.portraitMedium;
          posterImageElement.classes.add('loaded');


        });


  void _animateContentIntoView() => Timer(Duration.zero, () { editable = false; contentVisible = true;});
  void _animateContentIntoEdit() => Timer(Duration.zero, () { editable = true; contentVisible = false;});

  void blur(){

  }

  void input(){

  }


}