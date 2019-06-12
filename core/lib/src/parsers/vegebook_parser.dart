import 'package:core/src/models/vegebook.dart';
import 'package:firebase/firestore.dart';
import 'package:kt_dart/collection.dart';

class VegeBookParser { 
  static KtList<VegeBook> parse(QuerySnapshot snapshot) {

    return listFrom(snapshot.docs).map((doc) {
      print(doc.get('id'));
      return VegeBook(
        id: doc.get('id'),
        title: doc.get('title'),
        content: doc.get('content'),
        images: VegeBookImageDataParser.parse(doc.get('images')),
        galleryImages: VegeBookGalleryParser.parse(doc.get('galleryImages')),
        writtenBy: doc.get('writtenBy'),
        writerPhotoUrl: doc.get('writerPhotoUrl'),
        reportingDate: doc.get('reportingDate'),
        lastModifiedDate: doc.get('lastModifiedDate'),
      );
    });
  }
}


class VegeBookImageDataParser {
  static VegeBookImageData parse(Map images) {
    if (images == null || images.isEmpty) {
      return VegeBookImageData.empty();
    }

    return VegeBookImageData(
      portraitSmall: images['portraitSmall'],
      portraitMedium: images['portraitMedium'],
      portraitLarge:  images['portraitLarge'],
      landscapeSmall: images['landscapeSmall'],
      landscapeBig: images['landscapeBig'],
    );
  }

}


class VegeBookGalleryParser {
  static KtList<VegeBookGalleryImage> parse(List galleryImage) {
    if (galleryImage == null || galleryImage.isEmpty) {
      return emptyList();
    }

    return listFrom(galleryImage).map((node) {
      print(node);
      return VegeBookGalleryImage(
        location: node,
      );
    });
  }
}