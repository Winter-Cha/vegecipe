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
    this.writerPhotoUrl,
    this.reportingDate,
    this.lastModifiedDate,
  });

  final String id;
  final String title;
  final String content;
  final VegeNewsImageData images;
  final KtList<VegeNewsGalleryImage> galleryImages;
  final String writtenBy;
  final String writerPhotoUrl;
  final DateTime reportingDate;
  final DateTime lastModifiedDate;

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
      writerPhotoUrl.hashCode ^
      reportingDate.hashCode ^
      lastModifiedDate.hashCode;
}

class VegeNewsGalleryImage {
  VegeNewsGalleryImage({
    this.location,
    this.thumbnailLocation,
  });

  final String location;
  final String thumbnailLocation;

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

  final String portraitSmall;
  final String portraitMedium;
  final String portraitLarge;
  final String landscapeSmall;
  final String landscapeBig;

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
