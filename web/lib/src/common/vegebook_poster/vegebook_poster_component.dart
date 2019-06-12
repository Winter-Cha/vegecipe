import 'package:angular/angular.dart';
import 'package:core/core.dart';
import 'package:intl/intl.dart';
import 'package:web/src/common/vegebook_poster/lazy_image_component.dart';

@Component(
  selector: 'vegebook-poster',
  styleUrls: ['vegebook_poster_component.css'],
  templateUrl: 'vegebook_poster_component.html',
  directives: [
    LazyImageComponent,
    NgIf,
    NgFor,
  ],
)
class VegeBookPosterComponent {
  static final _releaseDateFormat = DateFormat('dd.MM.yyyy');

  VegeBookPosterComponent(this.messages);
  final Messages messages;

  @Input()
  VegeBook vegeBook;

  @Input()
  bool isComingSoon = false;

  @Input()
  bool hasDetails = true;

  @Input()
  bool isTouchable = true;

  String get reportingDate => _releaseDateFormat.format(vegeBook.reportingDate);
}
