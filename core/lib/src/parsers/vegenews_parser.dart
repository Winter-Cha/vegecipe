import 'package:core/src/models/vegenews.dart';
import 'package:firebase/firestore.dart';
import 'package:kt_dart/collection.dart';

class VegeNewsParser { 
  static KtList<VegeNews> parse(QuerySnapshot snapshot) {

    return listFrom(snapshot.docs).map((doc) {
      return VegeNews(
        id: doc.get('id'),
        title: doc.get('title'),
        content: doc.get('content'),
        images: VegeNewsImageDataParser.parse(doc.get('images')),
        galleryImages: VegeNewsGalleryParser.parse(doc.get('galleryImages')),
        writtenBy: doc.get('writtenBy'),
        writerPhotoUrl: doc.get('writerPhotoUrl'),
        reportingDate: doc.get('reportingDate'),
        lastModifiedDate: doc.get('lastModifiedDate'),
      );
    });
  }
}


class VegeNewsImageDataParser {
  static VegeNewsImageData parse(Map images) {
    if (images == null || images.isEmpty) {
      return VegeNewsImageData.empty();
    }

    return VegeNewsImageData(
      portraitSmall: images['portraitSmall'],
      portraitMedium: images['portraitMedium'],
      portraitLarge:  images['portraitLarge'],
      landscapeSmall: images['landscapeSmall'],
      landscapeBig: images['landscapeBig'],
    );
  }

}


class VegeNewsGalleryParser {
  static KtList<VegeNewsGalleryImage> parse(List galleryImage) {
    if (galleryImage == null || galleryImage.isEmpty) {
      return emptyList();
    }

    return listFrom(galleryImage).map((node) {
      return VegeNewsGalleryImage(
        location: node,
      );
    });
  }
}