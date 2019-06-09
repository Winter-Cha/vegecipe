import 'package:angular/angular.dart';
import 'package:core/core.dart';
import 'package:intl/intl.dart';
import 'package:web/src/common/vegenews_poster/lazy_image_component.dart';

@Component(
  selector: 'vegenews-poster',
  styleUrls: ['vegenews_poster_component.css'],
  templateUrl: 'vegenews_poster_component.html',
  directives: [
    LazyImageComponent,
    NgIf,
    NgFor,
  ],
)
class VegeNewsPosterComponent {
  static final _releaseDateFormat = DateFormat('dd.MM.yyyy');

  VegeNewsPosterComponent(this.messages);
  final Messages messages;

  @Input()
  VegeNews vegeNews;

  @Input()
  bool isComingSoon = false;

  @Input()
  bool hasDetails = true;

  @Input()
  bool isTouchable = true;

  String get reportingDate => _releaseDateFormat.format(vegeNews.reportingDate);
}
