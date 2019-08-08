import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:core/core.dart';
import 'package:dialog/dialog.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firebase/firestore.dart';
import 'package:redux/redux.dart';
import 'package:web/src/common/content_rating/content_rating_component.dart';
import 'package:web/src/common/loading_view/loading_whole_view_component.dart';
import 'package:web/src/common/medium_editor/medium_editor.dart';
import 'package:web/src/common/vegenews_poster/vegenews_poster_component.dart';
import 'package:web/src/routes.dart';
import 'package:web/src/vegenews_details/landscape_image/vegenews_landscape_image_component.dart';

import 'lazy_image_component.dart';

@Component(
  selector: 'write-vegenews',
  styleUrls: ['write_vegenews_component.css'],
  templateUrl: 'write_vegenews_component.html',
  directives: [
    formDirectives,
    LoadingWholeViewComponent,
    ContentRatingComponent,
    VegeNewsLandscapeImageComponent,
    VegeNewsPosterComponent,
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
class WriteVegeNewsComponent implements OnInit, OnActivate, OnDestroy {
  WriteVegeNewsComponent(this._store, this._router, this.messages);
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

  bool newsFormValid = false;
  bool loading;
  bool _navigatedFromApp = false;

  bool contentVisible = false; // show details
  bool editable = false; // create or modify details
  bool editMode = false;
  bool isMine = false;

  LoadingStatus saveStatus = LoadingStatus.idle;

  StreamSubscription<AppState> _vegeNewsDetailsSubscription;

  VegeNews vegeNews;
  VegeNews copyNews;

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
    if (current.parameters['vegeNewsId'] != null) {
      _populateVegeNewsDetails(
        current.parameters['vegeNewsId'],
      );
      return;
    }
    // else
    vegeNews = VegeNews();
    _populateVegeNewsEditor(vegeNews);
  }

  @override
  void ngOnDestroy() => _vegeNewsDetailsSubscription?.cancel();

  // initialize view mode
  void _populateVegeNewsDetails(String vegeNewsId) {
    this.vegeNews = vegeNewsByIdSelector(_store.state, vegeNewsId);

    if (vegeNews != null) {
      this.isMine = this.vegeNews.writerUid == fb.auth().currentUser?.uid;
      _animateContentIntoView();
    } else {
      _store.dispatch(RefreshVegeNewsAction());
      _waitForEventDetails(vegeNewsId);
    }
  }

  // initialize edit mode
  void _populateVegeNewsEditor(VegeNews vegeNews) {
    // create
    if (vegeNews != null) {
      _animateContentIntoEdit();
      this.vegeNews.writtenBy = fb.auth().currentUser?.displayName;
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
  void _waitForEventDetails(String vegeNewsId) {
    final state = _store.state.vegeNewsState;
    final isLoading = state.vegeNewsStatus == LoadingStatus.loading;

    if (!isLoading) {
      return;
    }

    _vegeNewsDetailsSubscription = _store.onChange.listen((state) {
      final state = _store.state.vegeNewsState;
      final hasFinishedLoading = state.vegeNewsStatus != LoadingStatus.loading;

      if (hasFinishedLoading) {
        _populateVegeNewsDetails(vegeNewsId);
        _vegeNewsDetailsSubscription.cancel();
        _vegeNewsDetailsSubscription = null;

        _animateContentIntoView();
      }
    });
  }

  void _creatMediumEditor() => Timer(Duration.zero, () {
        mediumEditor = new MediumEditor(document.querySelector('.editable'),
            options: new MediumEditorOptions(
              placeholder:
                  new PlaceHolderOptions(text: 'Edit me!', hideOnClick: true),
              toolbar: new Toolbar(buttons: [
                'bold',
                'italic',
                'underline',
                'anchor',
                'h1',
                'h2',
                'h3'
              ]),
            ));
        mediumEditor.subscribe('editableInput', (event, editable) {
          vegeNews.content = mediumEditor.getContent();
        });
      });

  void goBack() {
    if (_navigatedFromApp) {
      window.history.back();
      return;
    }

    _router.navigateByUrl(
      RoutePaths.vegeNews.toUrl(),
      replace: true,
    );
  }

  void onLandscapeImageFileSelected(dynamic event) {
    if (event.target.files != null && event.target.files[0] != null) {
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

  void onPosterImageFileSelected(dynamic event) {
    if (event.target.files != null && event.target.files[0] != null) {
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
    var myConfirm = await confirm("Confirmed?");
    if (!myConfirm) return;

    saveStatus = LoadingStatus.loading;

    if (editMode) {
      await _updateVegeNews();
    } else {
      await _createVegeNews();
    }
    _store.dispatch(RefreshVegeNewsAction());
    saveStatus = LoadingStatus.idle;
  }

  void _updateVegeNews() async {
    DocumentReference doc =
        fb.firestore().collection('vegenews').doc(this.copyNews.id);
    var vegeNewsMap = {
      //TODO : id field 만들기
      'id': doc.id,
      'content': mediumEditor.getContent(),
      'title': this.copyNews.title,
      'images': {
        'landscapeBig': this.copyNews.images.landscapeBig,
        'portraitMedium': this.copyNews.images.portraitMedium,
      },
      'writtenBy': this.copyNews.writtenBy,
      'writerUid': this.copyNews.writerUid,
      'writerPhotoUrl': this.copyNews.writerPhotoUrl,
      'reportingDate': this.copyNews.reportingDate,
      'lastModifiedDate': DateTime.now(),
    };
    await doc.set(vegeNewsMap).then((onValue) {
      if (this.copyNews != null) {
        this.vegeNews = VegeNews();
        this.vegeNews.id = this.copyNews.id;
        this.vegeNews.title = this.copyNews.title;
        this.vegeNews.writtenBy = this.copyNews.writtenBy;
        this.vegeNews.reportingDate = this.copyNews.reportingDate;
        this.vegeNews.content = this.copyNews.content;
        this.vegeNews.writerPhotoUrl = this.copyNews.writerPhotoUrl;
        this.vegeNews.images = VegeNewsImageData(
            landscapeBig: this.copyNews.images.landscapeBig,
            landscapeSmall: null,
            portraitLarge: null,
            portraitMedium: this.copyNews.images.portraitMedium,
            portraitSmall: null);
        _animateContentIntoView();
      }
    }).catchError((onError) {
      // TODO
    });
  }

  void _createVegeNews() async {
    fb.StorageReference stRef = fb.storage().ref("vegenews");
    var landscapeBig = '';
    var portraitMedium = '';
    try {
      File lImgFile = this.selectedLImage;
      var filePath =
          '${lImgFile.name}${DateTime.now().millisecondsSinceEpoch}.png';
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

      var filePath =
          '${pImgFile.name}${DateTime.now().millisecondsSinceEpoch}.png';
      var task = stRef.child(filePath).put(pImgFile);
      task.onStateChanged
          .listen((_) => loading = true, onDone: () => loading = false);

      var dowurl = await (await task.future).ref.getDownloadURL();
      portraitMedium = dowurl.toString();
      print(' url p ${dowurl.toString()}');
    } catch (e) {
      print("Error in uploading to storage: $e");
    }

    this.vegeNews.images = VegeNewsImageData(
      landscapeBig: landscapeBig,
      landscapeSmall: null,
      portraitSmall: null,
      portraitMedium: portraitMedium,
      portraitLarge: null,
    );
    this.vegeNews.writtenBy = fb.auth().currentUser?.displayName;
    this.vegeNews.writerPhotoUrl = fb.auth().currentUser?.photoURL;

    DocumentReference doc = fb.firestore().collection('vegenews').doc();
    this.vegeNews.id = doc.id;
    var vegeNewsMap = {
      //TODO : id field 만들기
      'id': doc.id,
      'images': {
        'landscapeBig': this.vegeNews.images.landscapeBig,
        'portraitMedium': this.vegeNews.images.portraitMedium,
      },
      'content': mediumEditor.getContent(),
      'title': this.vegeNews.title,
      'writtenBy': this.vegeNews.writtenBy,
      'writerPhotoUrl': this.vegeNews.writerPhotoUrl,
      'writerUid': fb.auth().currentUser?.uid,
      'reportingDate': DateTime.now(),
    };
    await doc.set(vegeNewsMap).then((onValue) {
      if (this.vegeNews != null) {
        print("save success!");
        this.isMine = true;
        _animateContentIntoView();
      }
    }).catchError((onError) {
      // TODO
    });
  }

  void goEdit() {
    // 제목이랑 글만 바꾸게 만들어 줍시다.
    // 사본을 만들어야 합니다.
    this.copyNews = VegeNews();
    this.copyNews.id = this.vegeNews.id;
    this.copyNews.title = this.vegeNews.title;
    this.copyNews.writtenBy = this.vegeNews.writtenBy;
    this.copyNews.reportingDate = this.vegeNews.reportingDate;
    this.copyNews.content = this.vegeNews.content;
    this.copyNews.writerPhotoUrl = this.vegeNews.writerPhotoUrl;
    this.copyNews.writerUid = this.vegeNews.writerUid;
    this.copyNews.images = VegeNewsImageData(
        landscapeBig: this.vegeNews.images.landscapeBig,
        landscapeSmall: null,
        portraitLarge: null,
        portraitMedium: this.vegeNews.images.portraitMedium,
        portraitSmall: null);

    this.editMode = true;
    _animateContentIntoEdit();
    _setEdit();
  }

  void _setEdit() => Timer(Duration.zero, () {
        mediumEditor = new MediumEditor(document.querySelector('.editable'),
            options: new MediumEditorOptions(
              placeholder:
                  new PlaceHolderOptions(text: 'Edit me!', hideOnClick: true),
              toolbar: new Toolbar(buttons: [
                'bold',
                'italic',
                'underline',
                'anchor',
                'h1',
                'h2',
                'h3'
              ]),
            ));
        mediumEditor.subscribe('editableInput', (event, editable) {
          copyNews.content = mediumEditor.getContent();
        });
        mediumEditor.setContent(this.copyNews.content);

        this.landscapeImageSrc = this.copyNews.images.landscapeBig;
        landscapeImageElement.classes.add('loaded');
        this.posterImageSrc = this.copyNews.images.portraitMedium;
        posterImageElement.classes.add('loaded');
      });

  void _animateContentIntoView() => Timer(Duration.zero, () {
        editable = false;
        contentVisible = true;
      });
  void _animateContentIntoEdit() => Timer(Duration.zero, () {
        editable = true;
        contentVisible = false;
      });

  void blur() {}

  void input() {}
}
