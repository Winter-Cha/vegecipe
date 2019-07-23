import 'package:kt_dart/collection.dart';
import 'package:meta/meta.dart';

class VegeNews {
  VegeNews({
    this.id,
    this.title,
    this.content,
    this.images,
    this.galleryImages,
    this.writtenBy,
    this.writerUid,
    this.writerPhotoUrl,
    this.reportingDate,
    this.lastModifiedDate,
  });

  String id;
  String title;
  String content;
  VegeNewsImageData images;
  KtList<VegeNewsGalleryImage> galleryImages;
  String writtenBy;
  String writerUid;
  String writerPhotoUrl;
  DateTime reportingDate;
  DateTime lastModifiedDate;


  bool get hasContent => (content != null && content.isNotEmpty) ;

  // 썸네일에 쓸 이미지 컬럼명이 변경 될수 있어
  bool get hasMediumPortraitImage => images.portraitMedium != null;


  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeNews &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          title == other.title &&
          content == other.content &&
          images == other.images &&
          galleryImages == other.galleryImages &&
          writtenBy == other.writtenBy &&
          writerUid == other.writerUid &&
          writerPhotoUrl == other.writerPhotoUrl &&
          reportingDate == other.reportingDate &&
          lastModifiedDate == other.lastModifiedDate;

  @override
  int get hashCode =>
      id.hashCode ^
      title.hashCode ^
      content.hashCode ^
      images.hashCode ^
      galleryImages.hashCode ^
      writtenBy.hashCode ^
      writerUid.hashCode ^
      writerPhotoUrl.hashCode ^
      reportingDate.hashCode ^
      lastModifiedDate.hashCode;
}

class VegeNewsGalleryImage {
  VegeNewsGalleryImage({
    this.location,
    this.thumbnailLocation,
  });

  String location;
  String thumbnailLocation;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeNewsGalleryImage &&
          runtimeType == other.runtimeType &&
          location == other.location &&
          thumbnailLocation == other.thumbnailLocation;

  @override
  int get hashCode => location.hashCode ^ thumbnailLocation.hashCode;
}

class VegeNewsImageData {
  VegeNewsImageData({
    @required this.portraitSmall,
    @required this.portraitMedium,
    @required this.portraitLarge,
    @required this.landscapeSmall,
    @required this.landscapeBig,
  });

  String portraitSmall;
  String portraitMedium;
  String portraitLarge;
  String landscapeSmall;
  String landscapeBig;

  String get anyAvailableImage =>
      portraitSmall ??
      portraitMedium ??
      portraitLarge ??
      landscapeSmall ??
      landscapeBig;

  VegeNewsImageData.empty()
      : portraitSmall = null,
        portraitMedium = null,
        portraitLarge = null,
        landscapeSmall = null,
        landscapeBig = null;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is VegeNewsImageData &&
          runtimeType == other.runtimeType &&
          portraitSmall == other.portraitSmall &&
          portraitMedium == other.portraitMedium &&
          portraitLarge == other.portraitLarge &&
          landscapeSmall == other.landscapeSmall &&
          landscapeBig == other.landscapeBig;

  @override
  int get hashCode =>
      portraitSmall.hashCode ^
      portraitMedium.hashCode ^
      portraitLarge.hashCode ^
      landscapeSmall.hashCode ^
      landscapeBig.hashCode ;
}
