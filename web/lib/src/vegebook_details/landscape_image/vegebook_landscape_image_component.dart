import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:core/core.dart';

@Component(
  selector: 'vegebook-landscape-image',
  templateUrl: 'vegebook_landscape_image_component.html',
  styleUrls: ['vegebook_landscape_image_component.css'],
)
class VegeBookLandscapeImageComponent implements OnInit, OnDestroy {
  @Input()
  VegeBook vegeBook;

  @ViewChild('actualImage')
  html.ImageElement imageElement;

  bool _triedWithSecondLandscapeUrl = false;

  @override
  void ngOnInit() {
    imageElement.addEventListener('load', _onLoad);
    imageElement.addEventListener('error', _onError);
  }

  @override
  void ngOnDestroy() => _clearListeners();

  void _onLoad(html.Event _) {
    imageElement.classes.add('loaded');
    _clearListeners();
  }

  void _onError(html.Event _) {
    if (_triedWithSecondLandscapeUrl) {
      _clearListeners();
      return;
    }
    // 비상용 이미지가 없으니 그냥 통과 시킴
    //imageElement.src = vegeBook.images.landsca;
    _triedWithSecondLandscapeUrl = true;
  }

  void _clearListeners() {
    imageElement.removeEventListener('load', _onLoad);
    imageElement.removeEventListener('error', _onError);
  }
}
