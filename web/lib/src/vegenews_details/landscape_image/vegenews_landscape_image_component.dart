import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:core/core.dart';

@Component(
  selector: 'vegenews-landscape-image',
  templateUrl: 'vegenews_landscape_image_component.html',
  styleUrls: ['vegenews_landscape_image_component.css'],
)
class VegeNewsLandscapeImageComponent implements OnInit, OnDestroy {
  @Input()
  VegeNews vegeNews;

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
    //imageElement.src = vegeNews.images.landsca;
    _triedWithSecondLandscapeUrl = true;
  }

  void _clearListeners() {
    imageElement.removeEventListener('load', _onLoad);
    imageElement.removeEventListener('error', _onError);
  }
}
