define(['dart_sdk', 'packages/kt_dart/src/exception/exceptions'], function(dart_sdk, exceptions) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__exception__exceptions = exceptions.src__exception__exceptions;
  const src__collection__kt_set_mutable = Object.create(dart.library);
  const src__collection__impl__set_hash_linked = Object.create(dart.library);
  const src__collection__kt_set_linked = Object.create(dart.library);
  const src__collection__impl__set_mutable = Object.create(dart.library);
  const src__collection__impl__set_hash = Object.create(dart.library);
  const src__collection__kt_set_hash = Object.create(dart.library);
  const src__collection__impl__set_empty = Object.create(dart.library);
  const src__collection__impl__set = Object.create(dart.library);
  const src__collection__kt_set = Object.create(dart.library);
  const src__collection__kt_map_mutable = Object.create(dart.library);
  const src__collection__impl__map_linked = Object.create(dart.library);
  const src__collection__kt_map_linked = Object.create(dart.library);
  const src__collection__extension__map_mutable_extensions_mixin = Object.create(dart.library);
  const src__collection__impl__map_mutable = Object.create(dart.library);
  const src__collection__impl__map_hash = Object.create(dart.library);
  const src__collection__kt_map_hash = Object.create(dart.library);
  const src__collection__impl__map_empty = Object.create(dart.library);
  const src__collection__extension__map_extensions_mixin = Object.create(dart.library);
  const src__collection__impl__map = Object.create(dart.library);
  const src__collection__kt_map = Object.create(dart.library);
  const src__collection__extension__list_mutable_extension_mixin = Object.create(dart.library);
  const src__collection__extension__iterable_mutable_extension_mixin = Object.create(dart.library);
  const src__collection__extension__collection_mutable_extension_mixin = Object.create(dart.library);
  const src__collection__impl__list_mutable = Object.create(dart.library);
  const src__collection__kt_list_mutable = Object.create(dart.library);
  const src__collection__impl__list_empty = Object.create(dart.library);
  const src__collection__impl__iterator = Object.create(dart.library);
  const src__collection__extension__list_extension_mixin = Object.create(dart.library);
  const src__collection__extension__iterable_extension_mixin = Object.create(dart.library);
  const src__collection__extension__collection_extension_mixin = Object.create(dart.library);
  const src__collection__impl__list = Object.create(dart.library);
  const src__collection__kt_list = Object.create(dart.library);
  const src__collection__kt_iterator_mutable = Object.create(dart.library);
  const src__collection__kt_iterator = Object.create(dart.library);
  const src__collection__kt_iterable_mutable = Object.create(dart.library);
  const src__collection__kt_iterable = Object.create(dart.library);
  const src__collection__kt_collection_mutable = Object.create(dart.library);
  const src__collection__kt_collection = Object.create(dart.library);
  const kt = Object.create(dart.library);
  const src__collection__collections = Object.create(dart.library);
  const collection$ = Object.create(dart.library);
  const src__collection__comparisons = Object.create(dart.library);
  const src__util__errors = Object.create(dart.library);
  const src__util__hash = Object.create(dart.library);
  const src__collection__impl__dart_iterable = Object.create(dart.library);
  const src__util__arguments = Object.create(dart.library);
  const src__collection__tuples = Object.create(dart.library);
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  const $sort = dartx.sort;
  const $runtimeType = dartx.runtimeType;
  const $iterator = dartx.iterator;
  const $isNaN = dartx.isNaN;
  const $compareTo = dartx.compareTo;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  const $isEmpty = dartx.isEmpty;
  const $containsKey = dartx.containsKey;
  const $containsValue = dartx.containsValue;
  const $map = dartx.map;
  const $entries = dartx.entries;
  const $_get = dartx._get;
  const $keys = dartx.keys;
  const $length = dartx.length;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $rightShift = dartx['>>'];
  const $contains = dartx.contains;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $insertAll = dartx.insertAll;
  const $insert = dartx.insert;
  const $removeAt = dartx.removeAt;
  const $removeWhere = dartx.removeWhere;
  const $sublist = dartx.sublist;
  const $replaceRange = dartx.replaceRange;
  const $fold = dartx.fold;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let KtIterableOfnum = () => (KtIterableOfnum = dart.constFn(src__collection__kt_iterable.KtIterable$(core.num)))();
  let ComparableOfObject = () => (ComparableOfObject = dart.constFn(core.Comparable$(core.Object)))();
  let ComparableOfObjectAndComparableOfObjectToint = () => (ComparableOfObjectAndComparableOfObjectToint = dart.constFn(dart.fnType(core.int, [ComparableOfObject(), ComparableOfObject()])))();
  let const$;
  const _is_KtMutableSet_default = Symbol('_is_KtMutableSet_default');
  src__collection__kt_set_mutable.KtMutableSet$ = dart.generic(T => {
    let KtMutableSetOfT = () => (KtMutableSetOfT = dart.constFn(src__collection__kt_set_mutable.KtMutableSet$(T)))();
    let DartMutableSetOfT = () => (DartMutableSetOfT = dart.constFn(src__collection__impl__set_mutable.DartMutableSet$(T)))();
    let KtSetOfT = () => (KtSetOfT = dart.constFn(src__collection__kt_set.KtSet$(T)))();
    let KtMutableCollectionOfT = () => (KtMutableCollectionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollection$(T)))();
    class KtMutableSet extends core.Object {
      static empty() {
        return KtMutableSetOfT().from();
      }
      static from(elements) {
        if (elements === void 0) elements = const$ || (const$ = dart.constList([], core.Null));
        return new (DartMutableSetOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtMutableSetOfT().from(args);
      }
    }
    (KtMutableSet[dart.mixinNew] = function() {
    }).prototype = KtMutableSet.prototype;
    dart.addTypeTests(KtMutableSet);
    KtMutableSet.prototype[_is_KtMutableSet_default] = true;
    KtMutableSet[dart.implements] = () => [KtSetOfT(), KtMutableCollectionOfT()];
    dart.setLibraryUri(KtMutableSet, "package:kt_dart/src/collection/kt_set_mutable.dart");
    return KtMutableSet;
  });
  src__collection__kt_set_mutable.KtMutableSet = src__collection__kt_set_mutable.KtMutableSet$();
  dart.addTypeTests(src__collection__kt_set_mutable.KtMutableSet, _is_KtMutableSet_default);
  let const$0;
  let const$1;
  const _set = dart.privateName(src__collection__impl__set_mutable, "_set");
  const _is_KtIterableExtensionsMixin_default = Symbol('_is_KtIterableExtensionsMixin_default');
  src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$ = dart.generic(T => {
    let intToT = () => (intToT = dart.constFn(dart.fnType(T, [core.int])))();
    let KtMutableListOfT = () => (KtMutableListOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableList$(T)))();
    let KtMutableCollectionOfT = () => (KtMutableCollectionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollection$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    let VoidToKtMutableListOfT = () => (VoidToKtMutableListOfT = dart.constFn(dart.fnType(KtMutableListOfT(), [])))();
    let KtIterableOfT = () => (KtIterableOfT = dart.constFn(src__collection__kt_iterable.KtIterable$(T)))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let KtPairOfKtListOfT$KtListOfT = () => (KtPairOfKtListOfT$KtListOfT = dart.constFn(src__collection__tuples.KtPair$(KtListOfT(), KtListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let _MovingSubListOfT = () => (_MovingSubListOfT = dart.constFn(src__collection__extension__iterable_extension_mixin._MovingSubList$(T)))();
    let KtPairOfT$T = () => (KtPairOfT$T = dart.constFn(src__collection__tuples.KtPair$(T, T)))();
    let TAndTToKtPairOfT$T = () => (TAndTToKtPairOfT$T = dart.constFn(dart.fnType(KtPairOfT$T(), [T, T])))();
    let KtIterableExtensionOfT = () => (KtIterableExtensionOfT = dart.constFn(src__collection__kt_iterable.KtIterableExtension$(T)))();
    class KtIterableExtensionsMixin extends core.Object {
      all(predicate) {
        if (predicate === void 0) predicate = null;
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 11, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        if (src__collection__kt_collection.KtCollection.is(this) && dart.test(src__collection__kt_collection.KtCollection.as(this).isEmpty())) return true;
        for (let element of this.iter) {
          if (!dart.test(predicate(element))) {
            return false;
          }
        }
        return true;
      }
      any(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (src__collection__kt_collection.KtCollection.is(this)) return !dart.test(src__collection__kt_collection.KtCollection.as(this).isEmpty());
          return this.iterator().hasNext();
        }
        if (src__collection__kt_collection.KtCollection.is(this) && dart.test(src__collection__kt_collection.KtCollection.as(this).isEmpty())) return false;
        for (let element of this.iter) {
          if (dart.test(predicate(element))) return true;
        }
        return false;
      }
      asIterable() {
        return this;
      }
      associate(K, V, transform) {
        return this.associateTo(K, V, src__collection__kt_map_mutable.KtMutableMap$(K, V), src__collection__collections.linkedMapFrom(K, V), transform);
      }
      associateBy(K, keySelector) {
        return this.associateByTo(K, T, src__collection__kt_map_mutable.KtMutableMap$(K, T), src__collection__collections.linkedMapFrom(K, T), keySelector, null);
      }
      associateByTransform(K, V, keySelector, valueTransform) {
        return this.associateByTo(K, V, src__collection__kt_map_mutable.KtMutableMap$(K, V), src__collection__collections.linkedMapFrom(K, V), keySelector, valueTransform);
      }
      associateByTo(K, V, M, destination, keySelector, valueTransform) {
        if (valueTransform === void 0) valueTransform = null;
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (keySelector == null) dart.throw(new core.ArgumentError.new("keySelector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 61, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (keySelector == null) throw ArgumentError(\"keySelector can't be null\"); return true;}()");
        for (let element of this.iter) {
          let key = keySelector(element);
          let value = V._check(valueTransform == null ? element : valueTransform(element));
          destination.put(key, value);
        }
        return destination;
      }
      associateTo(K, V, M, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 78, 12, "() {if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        for (let element of this.iter) {
          let pair = transform(element);
          destination.put(pair.first, pair.second);
        }
        return destination;
      }
      associateWith(V, valueSelector) {
        let associated = this.associateWithTo(V, src__collection__kt_map_linked.KtLinkedMap$(T, V), src__collection__collections.linkedMapFrom(T, V), valueSelector);
        return associated;
      }
      associateWithTo(V, M, destination, valueSelector) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (valueSelector == null) dart.throw(new core.ArgumentError.new("valueSelector can't be null"));
          if (!src__collection__kt_map_mutable.KtMutableMap$(T, V).is(destination) && !M.is(src__collection__collections.mutableMapFrom(T, V))) dart.throw(new core.ArgumentError.new("associateWithTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<" + dart.str(dart.wrapType(T)) + ", " + dart.str(dart.wrapType(V)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") items aren't subtype of ") + (dart.str(this[$runtimeType]) + " items. Items can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 100, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (valueSelector == null) throw ArgumentError(\"valueSelector can't be null\"); if (destination is! KtMutableMap<T, V> && mutableMapFrom<T, V>() is! M) throw ArgumentError(\"associateWithTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<$T, $V>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) items aren't subtype of \" \"$runtimeType items. Items can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.iter) {
          destination.put(element, valueSelector(element));
        }
        return destination;
      }
      averageBy(selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 121, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let sum = 0.0;
        let count = 0;
        for (let element of this.iter) {
          sum = sum + dart.notNull(selector(element));
          ++count;
        }
        return count === 0 ? core.double.nan : sum / count;
      }
      chunked(size) {
        if (!dart.test(dart.fn(() => {
          if (size == null) dart.throw(new core.ArgumentError.new("size can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 136, 12, "() {if (size == null) throw ArgumentError(\"size can't be null\"); return true;}()");
        return this.windowed(size, {step: size, partialWindows: true});
      }
      chunkedTransform(R, size, transform) {
        if (!dart.test(dart.fn(() => {
          if (size == null) dart.throw(new core.ArgumentError.new("size can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 145, 12, "() {if (size == null) throw ArgumentError(\"size can't be null\"); return true;}()");
        return this.windowedTransform(R, size, transform, {step: size, partialWindows: true});
      }
      contains(element) {
        T._check(element);
        if (src__collection__kt_collection.KtCollection.is(this)) return src__collection__kt_collection.KtCollection.as(this).contains(element);
        return dart.notNull(this.indexOf(element)) >= 0;
      }
      count(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null && src__collection__kt_collection.KtCollection.is(this)) {
          return src__collection__kt_collection.KtCollection.as(this).size;
        }
        let count = 0;
        let i = this.iter[$iterator];
        while (dart.test(i.moveNext())) {
          if (predicate == null) {
            count++;
          } else {
            if (dart.test(predicate(i.current))) {
              count++;
            }
          }
        }
        return count;
      }
      distinct() {
        return this.toMutableSet().toList();
      }
      distinctBy(K, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 182, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let set = src__collection__collections.hashSetOf(K);
        let list = src__collection__collections.mutableListOf(T);
        for (let element of this.iter) {
          let key = selector(element);
          if (dart.test(set.add(key))) {
            list.add(element);
          }
        }
        return list;
      }
      drop(n) {
        if (!dart.test(dart.fn(() => {
          if (n == null) dart.throw(new core.ArgumentError.new("n can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 199, 12, "() {if (n == null) throw ArgumentError(\"n can't be null\"); return true;}()");
        let list = src__collection__collections.mutableListOf(T);
        let count = 0;
        for (let item of this.iter) {
          if (count++ >= dart.notNull(n)) {
            list.add(item);
          }
        }
        return list;
      }
      dropWhile(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 215, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        let yielding = false;
        let list = src__collection__collections.mutableListOf(T);
        for (let item of this.iter) {
          if (yielding) {
            list.add(item);
          } else {
            if (!dart.test(predicate(item))) {
              list.add(item);
              yielding = true;
            }
          }
        }
        return list;
      }
      elementAt(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 236, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        return this.elementAtOrElse(index, dart.fn(index => {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("Collection doesn't contain element at index: " + dart.str(index) + "."));
        }, intToNull()));
      }
      elementAtOrElse(index, defaultValue) {
        intToT()._check(defaultValue);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          if (defaultValue == null) dart.throw(new core.ArgumentError.new("defaultValue function can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 249, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); if (defaultValue == null) throw ArgumentError(\"defaultValue function can't be null\"); return true;}()");
        if (dart.notNull(index) < 0) {
          return defaultValue(index);
        }
        let i = this.iterator();
        let count = 0;
        while (dart.test(i.hasNext())) {
          let element = i.next();
          if (index === count++) {
            return element;
          }
        }
        return defaultValue(index);
      }
      elementAtOrNull(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 271, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        if (dart.notNull(index) < 0) {
          return null;
        }
        let i = this.iterator();
        let count = 0;
        while (dart.test(i.hasNext())) {
          let element = i.next();
          if (index === count++) {
            return element;
          }
        }
        return null;
      }
      filter(predicate) {
        let filtered = this.filterTo(KtMutableListOfT(), src__collection__collections.mutableListOf(T), predicate);
        return filtered;
      }
      filterIndexed(predicate) {
        let filtered = this.filterIndexedTo(KtMutableListOfT(), src__collection__collections.mutableListOf(T), predicate);
        return filtered;
      }
      filterIndexedTo(C, destination, predicate) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          if (!KtMutableCollectionOfT().is(destination) && !C.is(src__collection__collections.mutableListOf(T))) dart.throw(new core.ArgumentError.new("filterIndexedTo destination has wrong type parameters." + ("\nExpected: KtMutableCollection<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 308, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (predicate == null) throw ArgumentError(\"predicate can't be null\"); if (destination is! KtMutableCollection<T> && mutableListOf<T>() is! C) throw ArgumentError(\"filterIndexedTo destination has wrong type parameters.\" \"\\nExpected: KtMutableCollection<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        let i = 0;
        for (let element of this.iter) {
          if (dart.test(predicate(i++, element))) {
            destination.add(element);
          }
        }
        return destination;
      }
      filterIsInstance(R) {
        let destination = src__collection__collections.mutableListOf(R);
        for (let element of this.iter) {
          if (R.is(element)) {
            destination.add(element);
          }
        }
        return destination;
      }
      filterNot(predicate) {
        let list = this.filterNotTo(KtMutableListOfT(), src__collection__collections.mutableListOf(T), predicate);
        return list;
      }
      filterNotNull() {
        let list = this.filterNotNullTo(KtMutableListOfT(), src__collection__collections.mutableListOf(T));
        return list;
      }
      filterNotNullTo(C, destination) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (!KtMutableCollectionOfT().is(destination) && !C.is(src__collection__collections.mutableListOf(T))) dart.throw(new core.ArgumentError.new("filterNotNullTo destination has wrong type parameters." + ("\nExpected: KtMutableCollection<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 358, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (destination is! KtMutableCollection<T> && mutableListOf<T>() is! C) throw ArgumentError(\"filterNotNullTo destination has wrong type parameters.\" \"\\nExpected: KtMutableCollection<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.iter) {
          if (element != null) {
            destination.add(element);
          }
        }
        return destination;
      }
      filterNotTo(C, destination, predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (!KtMutableCollectionOfT().is(destination) && !C.is(src__collection__collections.mutableListOf(T))) dart.throw(new core.ArgumentError.new("filterNotTo destination has wrong type parameters." + ("\nExpected: KtMutableCollection<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 380, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); if (destination == null) throw ArgumentError(\"destination can't be null\"); if (destination is! KtMutableCollection<T> && mutableListOf<T>() is! C) throw ArgumentError(\"filterNotTo destination has wrong type parameters.\" \"\\nExpected: KtMutableCollection<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.iter) {
          if (!dart.test(predicate(element))) {
            destination.add(element);
          }
        }
        return destination;
      }
      filterTo(C, destination, predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (!KtMutableCollectionOfT().is(destination) && !C.is(src__collection__collections.mutableListOf(T))) dart.throw(new core.ArgumentError.new("filterTo destination has wrong type parameters." + ("\nExpected: KtMutableCollection<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 402, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); if (destination == null) throw ArgumentError(\"destination can't be null\"); if (destination is! KtMutableCollection<T> && mutableListOf<T>() is! C) throw ArgumentError(\"filterTo destination has wrong type parameters.\" \"\\nExpected: KtMutableCollection<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.iter) {
          if (dart.test(predicate(element))) {
            destination.add(element);
          }
        }
        return destination;
      }
      find(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 423, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        return this.firstOrNull(predicate);
      }
      findLast(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 432, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        return this.lastOrNull(predicate);
      }
      first(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          let i = this.iterator();
          if (!dart.test(i.hasNext())) {
            dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection is empty"));
          }
          return i.next();
        } else {
          for (let element of this.iter) {
            if (dart.test(predicate(element))) return element;
          }
          dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
        }
      }
      firstOrNull(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (src__collection__kt_list.KtList.is(this)) {
            let list = KtListOfT().as(this);
            if (dart.test(list.isEmpty())) {
              return null;
            } else {
              return list._get(0);
            }
          }
          let i = this.iterator();
          if (!dart.test(i.hasNext())) {
            return null;
          }
          return i.next();
        } else {
          for (let element of this.iter) {
            if (dart.test(predicate(element))) return element;
          }
          return null;
        }
      }
      flatMap(R, transform) {
        let list = this.flatMapTo(R, src__collection__kt_list_mutable.KtMutableList$(R), src__collection__collections.mutableListOf(R), transform);
        return list;
      }
      flatMapTo(R, C, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 491, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        for (let element of this.iter) {
          let list = transform(element);
          destination.addAll(list);
        }
        return destination;
      }
      fold(R, initial, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 505, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let accumulator = initial;
        for (let element of this.iter) {
          accumulator = operation(accumulator, element);
        }
        return accumulator;
      }
      foldIndexed(R, initial, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 518, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let index = 0;
        let accumulator = initial;
        for (let element of this.iter) {
          accumulator = operation(index++, accumulator, element);
        }
        return accumulator;
      }
      forEach(action) {
        if (!dart.test(dart.fn(() => {
          if (action == null) dart.throw(new core.ArgumentError.new("action can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 532, 12, "() {if (action == null) throw ArgumentError(\"action can't be null\"); return true;}()");
        let i = this.iterator();
        while (dart.test(i.hasNext())) {
          let element = i.next();
          action(element);
        }
      }
      forEachIndexed(action) {
        if (!dart.test(dart.fn(() => {
          if (action == null) dart.throw(new core.ArgumentError.new("action can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 545, 12, "() {if (action == null) throw ArgumentError(\"action can't be null\"); return true;}()");
        let index = 0;
        for (let item of this.iter) {
          action(index++, item);
        }
      }
      groupBy(K, keySelector) {
        let groups = this.groupByTo(K, src__collection__kt_map_linked.KtLinkedMap$(K, KtMutableListOfT()), src__collection__collections.linkedMapFrom(K, KtMutableListOfT()), keySelector);
        return groups;
      }
      groupByTransform(K, V, keySelector, valueTransform) {
        let groups = this.groupByToTransform(K, V, src__collection__kt_map_linked.KtLinkedMap$(K, src__collection__kt_list_mutable.KtMutableList$(V)), src__collection__collections.linkedMapFrom(K, src__collection__kt_list_mutable.KtMutableList$(V)), keySelector, valueTransform);
        return groups;
      }
      groupByTo(K, M, destination, keySelector) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (keySelector == null) dart.throw(new core.ArgumentError.new("keySelector can't be null"));
          if (!src__collection__kt_map_mutable.KtMutableMap$(K, KtMutableListOfT()).is(destination) && !M.is(src__collection__collections.mutableMapFrom(K, KtMutableListOfT()))) dart.throw(new core.ArgumentError.new("groupByTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<K, KtMutableList<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 572, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (keySelector == null) throw ArgumentError(\"keySelector can't be null\"); if (destination is! KtMutableMap<K, KtMutableList<T>> && mutableMapFrom<K, KtMutableList<T>>() is! M) throw ArgumentError(\"groupByTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<K, KtMutableList<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.iter) {
          let key = keySelector(element);
          let list = destination.getOrPut(key, dart.fn(() => src__collection__collections.mutableListOf(T), VoidToKtMutableListOfT()));
          list.add(element);
        }
        return destination;
      }
      groupByToTransform(K, V, M, destination, keySelector, valueTransform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (keySelector == null) dart.throw(new core.ArgumentError.new("keySelector can't be null"));
          if (valueTransform == null) dart.throw(new core.ArgumentError.new("valueTransform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 595, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (keySelector == null) throw ArgumentError(\"keySelector can't be null\"); if (valueTransform == null) throw ArgumentError(\"valueTransform can't be null\"); return true;}()");
        for (let element of this.iter) {
          let key = keySelector(element);
          let list = destination.getOrPut(key, dart.fn(() => src__collection__collections.mutableListOf(V), dart.fnType(src__collection__kt_list_mutable.KtMutableList$(V), [])));
          list.add(valueTransform(element));
        }
        return destination;
      }
      indexOf(element) {
        T._check(element);
        if (src__collection__kt_list.KtList.is(this)) return src__collection__kt_list.KtList.as(this).indexOf(element);
        let index = 0;
        for (let item of this.iter) {
          if (dart.equals(element, item)) return index;
          index++;
        }
        return -1;
      }
      indexOfFirst(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 623, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        let index = 0;
        for (let item of this.iter) {
          if (dart.test(predicate(item))) {
            return index;
          }
          index++;
        }
        return -1;
      }
      indexOfLast(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 639, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        let lastIndex = -1;
        let index = 0;
        for (let item of this.iter) {
          if (dart.test(predicate(item))) {
            lastIndex = index;
          }
          index++;
        }
        return lastIndex;
      }
      intersect(other) {
        KtIterableOfT()._check(other);
        let set = this.toMutableSet();
        set.retainAll(other);
        return set;
      }
      joinToString(opts) {
        let separator = opts && 'separator' in opts ? opts.separator : ", ";
        let prefix = opts && 'prefix' in opts ? opts.prefix : "";
        let postfix = opts && 'postfix' in opts ? opts.postfix : "";
        let limit = opts && 'limit' in opts ? opts.limit : -1;
        let truncated = opts && 'truncated' in opts ? opts.truncated : "...";
        let transform = opts && 'transform' in opts ? opts.transform : null;
        let buffer = new core.StringBuffer.new();
        buffer.write(prefix);
        let count = 0;
        for (let element of this.iter) {
          if (++count > 1) buffer.write(separator);
          if (dart.notNull(limit) >= 0 && count > dart.notNull(limit)) {
            break;
          } else {
            if (transform == null) {
              buffer.write(element);
            } else {
              buffer.write(transform(element));
            }
          }
        }
        if (dart.notNull(limit) >= 0 && count > dart.notNull(limit)) {
          buffer.write(truncated);
        }
        buffer.write(postfix);
        return buffer.toString();
      }
      last(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (src__collection__kt_list.KtList.is(this)) return KtListOfT().as(this).last();
          let i = this.iterator();
          if (!dart.test(i.hasNext())) {
            dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection is empty"));
          }
          let last = i.next();
          while (dart.test(i.hasNext())) {
            last = i.next();
          }
          return last;
        } else {
          let last = null;
          let found = false;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              last = element;
              found = true;
            }
          }
          if (!found) dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
          return last;
        }
      }
      lastIndexOf(element) {
        T._check(element);
        if (src__collection__kt_list.KtList.is(this)) return src__collection__kt_list.KtList.as(this).lastIndexOf(element);
        let lastIndex = -1;
        let index = 0;
        for (let item of this.iter) {
          if (dart.equals(element, item)) {
            lastIndex = index;
          }
          index++;
        }
        return lastIndex;
      }
      lastOrNull(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (src__collection__kt_list.KtList.is(this)) {
            let list = KtListOfT().as(this);
            return dart.test(list.isEmpty()) ? null : list.get(list.lastIndex);
          } else {
            let i = this.iterator();
            if (!dart.test(i.hasNext())) {
              return null;
            }
            let last = i.next();
            while (dart.test(i.hasNext())) {
              last = i.next();
            }
            return last;
          }
        } else {
          let last = null;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              last = element;
            }
          }
          return last;
        }
      }
      map(R, transform) {
        let list = src__collection__collections.mutableListOf(R);
        let mapped = this.mapTo(R, src__collection__kt_list_mutable.KtMutableList$(R), list, transform);
        return mapped;
      }
      mapIndexed(R, transform) {
        let mapped = this.mapIndexedTo(R, src__collection__kt_list_mutable.KtMutableList$(R), src__collection__collections.mutableListOf(R), transform);
        return mapped;
      }
      mapIndexedNotNull(R, transform) {
        let mapped = this.mapIndexedNotNullTo(R, src__collection__kt_list_mutable.KtMutableList$(R), src__collection__collections.mutableListOf(R), transform);
        return mapped;
      }
      mapIndexedNotNullTo(R, C, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 790, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        let index = 0;
        for (let item of this.iter) {
          let element = transform(index++, item);
          if (element != null) {
            destination.add(element);
          }
        }
        return destination;
      }
      mapIndexedTo(R, C, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 808, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        let index = 0;
        for (let item of this.iter) {
          destination.add(transform(index++, item));
        }
        return destination;
      }
      mapNotNull(R, transform) {
        let mapped = this.mapNotNullTo(R, src__collection__kt_list_mutable.KtMutableList$(R), src__collection__collections.mutableListOf(R), transform);
        return mapped;
      }
      mapNotNullTo(R, C, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 831, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        for (let item of this.iter) {
          let result = transform(item);
          if (result != null) {
            destination.add(result);
          }
        }
        return destination;
      }
      mapTo(R, C, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 848, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        for (let item of this.iter) {
          destination.add(transform(item));
        }
        return destination;
      }
      max() {
        if (!KtIterableOfnum().is(this)) {
          dart.throw(new core.ArgumentError.new("sum is only supported for type KtIterable<num>, not " + dart.str(this[$runtimeType])));
        }
        let i = this.iterator();
        if (!dart.test(this.iterator().hasNext())) return null;
        let max = core.num.as(i.next());
        if (max[$isNaN]) return max;
        while (dart.test(i.hasNext())) {
          let e = core.num.as(i.next());
          if (e[$isNaN]) return e;
          if (dart.notNull(max) < dart.notNull(e)) {
            max = e;
          }
        }
        return max;
      }
      maxBy(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 882, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(this.iterator().hasNext())) return null;
        let maxElement = i.next();
        let maxValue = selector(maxElement);
        while (dart.test(i.hasNext())) {
          let e = i.next();
          let v = selector(e);
          if (dart.notNull(maxValue[$compareTo](v)) < 0) {
            maxElement = e;
            maxValue = v;
          }
        }
        return maxElement;
      }
      maxWith(comparator) {
        if (!dart.test(dart.fn(() => {
          if (comparator == null) dart.throw(new core.ArgumentError.new("comparator can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 903, 12, "() {if (comparator == null) throw ArgumentError(\"comparator can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(i.hasNext())) return null;
        let max = i.next();
        while (dart.test(i.hasNext())) {
          let e = i.next();
          if (dart.notNull(comparator(max, e)) < 0) {
            max = e;
          }
        }
        return max;
      }
      min() {
        if (!KtIterableOfnum().is(this)) {
          dart.throw(new core.ArgumentError.new("sum is only supported for type KtIterable<num>, not " + dart.str(this[$runtimeType])));
        }
        let i = this.iterator();
        if (!dart.test(this.iterator().hasNext())) return null;
        let min = core.num.as(i.next());
        if (min[$isNaN]) return min;
        while (dart.test(i.hasNext())) {
          let e = core.num.as(i.next());
          if (e[$isNaN]) return e;
          if (dart.notNull(min) > dart.notNull(e)) {
            min = e;
          }
        }
        return min;
      }
      minus(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 942, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        if (src__collection__kt_collection.KtCollection.is(this) && dart.test(src__collection__kt_collection.KtCollection.as(this).isEmpty())) {
          return this.toList();
        }
        return this.filterNot(dart.fn(it => elements.contains(it), TTobool()));
      }
      ['-'](other) {
        KtIterableOfT()._check(other);
        return this.minus(other);
      }
      minusElement(element) {
        T._check(element);
        let result = src__collection__collections.mutableListOf(T);
        let removed = false;
        this.filterTo(KtMutableListOfT(), result, dart.fn(it => {
          if (!removed && dart.equals(it, element)) {
            removed = true;
            return false;
          } else {
            return true;
          }
        }, TTobool()));
        return result;
      }
      minBy(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 972, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(this.iterator().hasNext())) return null;
        let minElement = i.next();
        let minValue = selector(minElement);
        while (dart.test(i.hasNext())) {
          let e = i.next();
          let v = selector(e);
          if (dart.notNull(minValue[$compareTo](v)) > 0) {
            minElement = e;
            minValue = v;
          }
        }
        return minElement;
      }
      minWith(comparator) {
        if (!dart.test(dart.fn(() => {
          if (comparator == null) dart.throw(new core.ArgumentError.new("comparator can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 993, 12, "() {if (comparator == null) throw ArgumentError(\"comparator can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(i.hasNext())) return null;
        let min = i.next();
        while (dart.test(i.hasNext())) {
          let e = i.next();
          if (dart.notNull(comparator(min, e)) < 0) {
            min = e;
          }
        }
        return min;
      }
      none(predicate) {
        if (predicate === void 0) predicate = null;
        if (src__collection__kt_collection.KtCollection.is(this) && dart.test(src__collection__kt_collection.KtCollection.as(this).isEmpty())) return true;
        if (predicate == null) return !dart.test(this.iterator().hasNext());
        for (let element of this.iter) {
          if (dart.test(predicate(element))) {
            return false;
          }
        }
        return true;
      }
      onEach(action) {
        if (!dart.test(dart.fn(() => {
          if (action == null) dart.throw(new core.ArgumentError.new("action can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1023, 12, "() {if (action == null) throw ArgumentError(\"action can't be null\"); return true;}()");
        for (let element of this.iter) {
          action(element);
        }
      }
      partition(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1034, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        let first = src__collection__collections.mutableListOf(T);
        let second = src__collection__collections.mutableListOf(T);
        for (let element of this.iter) {
          if (dart.test(predicate(element))) {
            first.add(element);
          } else {
            second.add(element);
          }
        }
        return new (KtPairOfKtListOfT$KtListOfT()).new(first, second);
      }
      plus(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1052, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        let result = src__collection__collections.mutableListOf(T);
        result.addAll(this.asIterable());
        result.addAll(elements);
        return result;
      }
      ['+'](elements) {
        KtIterableOfT()._check(elements);
        return this.plus(elements);
      }
      plusElement(element) {
        T._check(element);
        let result = src__collection__collections.mutableListOf(T);
        result.addAll(this.asIterable());
        result.add(element);
        return result;
      }
      reduce(S, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1075, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(i.hasNext())) dart.throw(new core.UnsupportedError.new("Empty collection can't be reduced."));
        let accumulator = S.as(i.next());
        while (dart.test(i.hasNext())) {
          accumulator = operation(accumulator, i.next());
        }
        return accumulator;
      }
      reduceIndexed(S, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1091, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(i.hasNext())) dart.throw(new core.UnsupportedError.new("Empty collection can't be reduced."));
        let index = 1;
        let accumulator = S.as(i.next());
        while (dart.test(i.hasNext())) {
          accumulator = operation(index++, accumulator, i.next());
        }
        return accumulator;
      }
      requireNoNulls() {
        for (let element of this.iter) {
          if (element == null) {
            dart.throw(new core.ArgumentError.new("null element found in " + dart.str(this) + "."));
          }
        }
        return this;
      }
      reversed() {
        if (src__collection__kt_collection.KtCollection.is(this) && dart.notNull(src__collection__kt_collection.KtCollection.as(this).size) <= 1) return this.toList();
        let list = this.toMutableList();
        list.reverse();
        return list;
      }
      single(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          let i = this.iterator();
          if (!dart.test(i.hasNext())) {
            dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection is empty."));
          }
          let single = i.next();
          if (dart.test(i.hasNext())) {
            dart.throw(new core.ArgumentError.new("Collection has more than one element."));
          }
          return single;
        } else {
          let single = null;
          let found = false;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              if (found) dart.throw(new core.ArgumentError.new("Collection contains more than one matching element."));
              single = element;
              found = true;
            }
          }
          if (!found) dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
          return single;
        }
      }
      singleOrNull(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          let i = this.iterator();
          if (!dart.test(i.hasNext())) return null;
          let single = i.next();
          if (dart.test(i.hasNext())) {
            return null;
          }
          return single;
        } else {
          let single = null;
          let found = false;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              if (found) return null;
              single = element;
              found = true;
            }
          }
          if (!found) return null;
          return single;
        }
      }
      sorted() {
        return this.sortedWith(src__collection__comparisons.naturalOrder(T));
      }
      sortedBy(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1189, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        return this.sortedWith(src__collection__comparisons.compareBy(T, selector));
      }
      sortedByDescending(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1199, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        return this.sortedWith(src__collection__comparisons.compareByDescending(T, selector));
      }
      sortedDescending() {
        return this.sortedWith(src__collection__comparisons.reverseOrder(T));
      }
      sortedWith(comparator) {
        if (!dart.test(dart.fn(() => {
          if (comparator == null) dart.throw(new core.ArgumentError.new("comparator can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1211, 12, "() {if (comparator == null) throw ArgumentError(\"comparator can't be null\"); return true;}()");
        let mutableList = this.toMutableList();
        mutableList.list[$sort](comparator);
        return mutableList;
      }
      subtract(other) {
        KtIterableOfT()._check(other);
        if (!dart.test(dart.fn(() => {
          if (other == null) dart.throw(new core.ArgumentError.new("other can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1222, 12, "() {if (other == null) throw ArgumentError(\"other can't be null\"); return true;}()");
        let set = this.toMutableSet();
        set.removeAll(other);
        return set;
      }
      sum() {
        if (!KtIterableOfnum().is(this)) {
          dart.throw(new core.ArgumentError.new("sum is only supported for type KtIterable<num>, not " + dart.str(this[$runtimeType])));
        }
        let sum = 0;
        for (let element of this.iter) {
          sum = sum + dart.notNull(core.num.as(element));
        }
        return sum;
      }
      sumBy(selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1247, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let sum = 0;
        for (let element of this.iter) {
          sum = sum + dart.notNull(selector(element));
        }
        return sum;
      }
      sumByDouble(selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1260, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        let sum = 0.0;
        for (let element of this.iter) {
          sum = sum + dart.notNull(selector(element));
        }
        return sum;
      }
      take(n) {
        if (!dart.test(dart.fn(() => {
          if (n == null) dart.throw(new core.ArgumentError.new("n can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1273, 12, "() {if (n == null) throw ArgumentError(\"n can't be null\"); return true;}()");
        if (dart.notNull(n) < 0) {
          dart.throw(new core.ArgumentError.new("Requested element count " + dart.str(n) + " is less than zero."));
        }
        if (n === 0) return src__collection__collections.emptyList(T);
        if (src__collection__kt_collection.KtCollection.is(this)) {
          let collection = src__collection__kt_collection.KtCollection.as(this);
          if (dart.notNull(n) >= dart.notNull(collection.size)) return this.toList();
          if (n === 1) {
            return src__collection__collections.listFrom(T, JSArrayOfT().of([this.first()]));
          }
        }
        let count = 0;
        let list = src__collection__collections.mutableListOf(T);
        for (let item of this.iter) {
          if (count++ === n) {
            break;
          }
          list.add(item);
        }
        return list.toList();
      }
      toCollection(C, destination) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (!C.is(src__collection__collections.mutableListOf(T))) dart.throw(new core.ArgumentError.new("toCollection destination has wrong type parameters." + ("\nExpected: KtMutableCollection<" + dart.str(dart.wrapType(T)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1303, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (mutableListOf<T>() is! C) throw ArgumentError(\"toCollection destination has wrong type parameters.\" \"\\nExpected: KtMutableCollection<$T>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let item of this.iter) {
          destination.add(item);
        }
        return destination;
      }
      toHashSet() {
        return src__collection__collections.hashSetFrom(T, this.iter);
      }
      toList() {
        return src__collection__collections.listFrom(T, this.iter);
      }
      toMutableList() {
        return src__collection__collections.mutableListFrom(T, this.iter);
      }
      toMutableSet() {
        return src__collection__collections.linkedSetFrom(T, this.iter);
      }
      toSet() {
        return src__collection__collections.linkedSetFrom(T, this.iter);
      }
      union(other) {
        KtIterableOfT()._check(other);
        if (!dart.test(dart.fn(() => {
          if (other == null) dart.throw(new core.ArgumentError.new("other can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1337, 12, "() {if (other == null) throw ArgumentError(\"other can't be null\"); return true;}()");
        let set = this.toMutableSet();
        set.addAll(other);
        return set;
      }
      windowed(size, opts) {
        let step = opts && 'step' in opts ? opts.step : 1;
        let partialWindows = opts && 'partialWindows' in opts ? opts.partialWindows : false;
        if (!dart.test(dart.fn(() => {
          if (size == null) dart.throw(new core.ArgumentError.new("size can't be null"));
          if (step == null) dart.throw(new core.ArgumentError.new("step can't be null"));
          if (partialWindows == null) dart.throw(new core.ArgumentError.new("partialWindows can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1349, 12, "() {if (size == null) throw ArgumentError(\"size can't be null\"); if (step == null) throw ArgumentError(\"step can't be null\"); if (partialWindows == null) throw ArgumentError(\"partialWindows can't be null\"); return true;}()");
        let list = this.toList();
        let thisSize = list.size;
        let result = src__collection__collections.mutableListOf(KtListOfT());
        let window = new (_MovingSubListOfT()).new(list);
        let index = 0;
        while (index < dart.notNull(thisSize)) {
          window.move(index, math.min(core.int, thisSize, index + dart.notNull(size)));
          if (!dart.test(partialWindows) && dart.notNull(window.size) < dart.notNull(size)) break;
          result.add(window.snapshot());
          index = index + dart.notNull(step);
        }
        return result;
      }
      windowedTransform(R, size, transform, opts) {
        let step = opts && 'step' in opts ? opts.step : 1;
        let partialWindows = opts && 'partialWindows' in opts ? opts.partialWindows : false;
        if (!dart.test(dart.fn(() => {
          if (size == null) dart.throw(new core.ArgumentError.new("size can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          if (step == null) dart.throw(new core.ArgumentError.new("step can't be null"));
          if (partialWindows == null) dart.throw(new core.ArgumentError.new("partialWindows can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1373, 12, "() {if (size == null) throw ArgumentError(\"size can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); if (step == null) throw ArgumentError(\"step can't be null\"); if (partialWindows == null) throw ArgumentError(\"partialWindows can't be null\"); return true;}()");
        let list = this.toList();
        let thisSize = list.size;
        let result = src__collection__collections.mutableListOf(R);
        let window = new (_MovingSubListOfT()).new(list);
        let index = 0;
        while (index < dart.notNull(thisSize)) {
          window.move(index, math.min(core.int, thisSize, index + dart.notNull(size)));
          if (!dart.test(partialWindows) && dart.notNull(window.size) < dart.notNull(size)) break;
          result.add(transform(window.snapshot()));
          index = index + dart.notNull(step);
        }
        return result;
      }
      zip(R, other) {
        return this.zipTransform(R, src__collection__tuples.KtPair$(T, R), other, dart.fn((a, b) => new (src__collection__tuples.KtPair$(T, R)).new(a, b), dart.fnType(src__collection__tuples.KtPair$(T, R), [T, R])));
      }
      zipTransform(R, V, other, transform) {
        if (!dart.test(dart.fn(() => {
          if (other == null) dart.throw(new core.ArgumentError.new("other can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1402, 12, "() {if (other == null) throw ArgumentError(\"other can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        let first = this.iterator();
        let second = other.iterator();
        let list = src__collection__collections.mutableListOf(V);
        while (dart.test(first.hasNext()) && dart.test(second.hasNext())) {
          list.add(transform(first.next(), second.next()));
        }
        return list;
      }
      zipWithNext(R) {
        return this.zipWithNextTransform(KtPairOfT$T(), dart.fn((a, b) => new (KtPairOfT$T()).new(a, b), TAndTToKtPairOfT$T()));
      }
      zipWithNextTransform(R, transform) {
        if (!dart.test(dart.fn(() => {
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_extension_mixin.dart", 1422, 12, "() {if (transform == null) throw ArgumentError(\"transform can't be null\"); return true;}()");
        let i = this.iterator();
        if (!dart.test(i.hasNext())) {
          return src__collection__collections.emptyList(R);
        }
        let list = src__collection__collections.mutableListOf(R);
        let current = i.next();
        while (dart.test(i.hasNext())) {
          let next = i.next();
          list.add(transform(current, next));
          current = next;
        }
        return list;
      }
    }
    (KtIterableExtensionsMixin.new = function() {
    }).prototype = KtIterableExtensionsMixin.prototype;
    dart.addTypeTests(KtIterableExtensionsMixin);
    KtIterableExtensionsMixin.prototype[_is_KtIterableExtensionsMixin_default] = true;
    KtIterableExtensionsMixin[dart.implements] = () => [KtIterableExtensionOfT(), KtIterableOfT()];
    dart.setMethodSignature(KtIterableExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtIterableExtensionsMixin.__proto__),
      all: dart.fnType(core.bool, [], [dart.fnType(core.bool, [T])]),
      any: dart.fnType(core.bool, [], [dart.fnType(core.bool, [T])]),
      asIterable: dart.fnType(src__collection__kt_iterable.KtIterable$(T), []),
      associate: dart.gFnType((K, V) => [src__collection__kt_map.KtMap$(K, V), [dart.fnType(src__collection__tuples.KtPair$(K, V), [T])]]),
      associateBy: dart.gFnType(K => [src__collection__kt_map.KtMap$(K, T), [dart.fnType(K, [T])]]),
      associateByTransform: dart.gFnType((K, V) => [src__collection__kt_map.KtMap$(K, V), [dart.fnType(K, [T]), dart.fnType(V, [T])]]),
      associateByTo: dart.gFnType((K, V, M) => [M, [M, dart.fnType(K, [T])], [dart.fnType(V, [T])]], (K, V, M) => [dart.dynamic, dart.dynamic, src__collection__kt_map_mutable.KtMutableMap$(K, V)]),
      associateTo: dart.gFnType((K, V, M) => [M, [M, dart.fnType(src__collection__tuples.KtPair$(K, V), [T])]], (K, V, M) => [dart.dynamic, dart.dynamic, src__collection__kt_map_mutable.KtMutableMap$(K, V)]),
      associateWith: dart.gFnType(V => [src__collection__kt_map.KtMap$(T, V), [dart.fnType(V, [T])]]),
      associateWithTo: dart.gFnType((V, M) => [M, [M, dart.fnType(V, [T])]], (V, M) => [dart.dynamic, src__collection__kt_map_mutable.KtMutableMap]),
      averageBy: dart.fnType(core.double, [dart.fnType(core.num, [T])]),
      chunked: dart.fnType(src__collection__kt_list.KtList$(src__collection__kt_list.KtList$(T)), [core.int]),
      chunkedTransform: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [core.int, dart.fnType(R, [src__collection__kt_list.KtList$(T)])]]),
      contains: dart.fnType(core.bool, [core.Object]),
      count: dart.fnType(core.int, [], [dart.fnType(core.bool, [T])]),
      distinct: dart.fnType(src__collection__kt_list.KtList$(T), []),
      distinctBy: dart.gFnType(K => [src__collection__kt_list.KtList$(T), [dart.fnType(K, [T])]]),
      drop: dart.fnType(src__collection__kt_list.KtList$(T), [core.int]),
      dropWhile: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.bool, [T])]),
      elementAt: dart.fnType(T, [core.int]),
      elementAtOrElse: dart.fnType(T, [core.int, core.Object]),
      elementAtOrNull: dart.fnType(T, [core.int]),
      filter: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.bool, [T])]),
      filterIndexed: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.bool, [core.int, T])]),
      filterIndexedTo: dart.gFnType(C => [C, [C, dart.fnType(core.bool, [core.int, T])]], C => [src__collection__kt_collection_mutable.KtMutableCollection]),
      filterIsInstance: dart.gFnType(R => [src__collection__kt_list.KtList$(R), []]),
      filterNot: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.bool, [T])]),
      filterNotNull: dart.fnType(src__collection__kt_list.KtList$(T), []),
      filterNotNullTo: dart.gFnType(C => [C, [C]], C => [src__collection__kt_collection_mutable.KtMutableCollection]),
      filterNotTo: dart.gFnType(C => [C, [C, dart.fnType(core.bool, [T])]], C => [src__collection__kt_collection_mutable.KtMutableCollection]),
      filterTo: dart.gFnType(C => [C, [C, dart.fnType(core.bool, [T])]], C => [src__collection__kt_collection_mutable.KtMutableCollection]),
      find: dart.fnType(T, [dart.fnType(core.bool, [T])]),
      findLast: dart.fnType(T, [dart.fnType(core.bool, [T])]),
      first: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      firstOrNull: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      flatMap: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(src__collection__kt_iterable.KtIterable$(R), [T])]]),
      flatMapTo: dart.gFnType((R, C) => [C, [C, dart.fnType(src__collection__kt_iterable.KtIterable$(R), [T])]], (R, C) => [dart.dynamic, src__collection__kt_collection_mutable.KtMutableCollection$(R)]),
      fold: dart.gFnType(R => [R, [R, dart.fnType(R, [R, T])]]),
      foldIndexed: dart.gFnType(R => [R, [R, dart.fnType(R, [core.int, R, T])]]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      forEachIndexed: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int, T])]),
      groupBy: dart.gFnType(K => [src__collection__kt_map.KtMap$(K, src__collection__kt_list.KtList$(T)), [dart.fnType(K, [T])]]),
      groupByTransform: dart.gFnType((K, V) => [src__collection__kt_map.KtMap$(K, src__collection__kt_list.KtList$(V)), [dart.fnType(K, [T]), dart.fnType(V, [T])]]),
      groupByTo: dart.gFnType((K, M) => [M, [M, dart.fnType(K, [T])]], (K, M) => [dart.dynamic, src__collection__kt_map_mutable.KtMutableMap$(K, src__collection__kt_list_mutable.KtMutableList)]),
      groupByToTransform: dart.gFnType((K, V, M) => [M, [M, dart.fnType(K, [T]), dart.fnType(V, [T])]], (K, V, M) => [dart.dynamic, dart.dynamic, src__collection__kt_map_mutable.KtMutableMap$(K, src__collection__kt_list_mutable.KtMutableList$(V))]),
      indexOf: dart.fnType(core.int, [core.Object]),
      indexOfFirst: dart.fnType(core.int, [dart.fnType(core.bool, [T])]),
      indexOfLast: dart.fnType(core.int, [dart.fnType(core.bool, [T])]),
      intersect: dart.fnType(src__collection__kt_set.KtSet$(T), [core.Object]),
      joinToString: dart.fnType(core.String, [], {separator: core.String, prefix: core.String, postfix: core.String, limit: core.int, truncated: core.String, transform: dart.fnType(core.String, [T])}),
      last: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      lastIndexOf: dart.fnType(core.int, [core.Object]),
      lastOrNull: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      map: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(R, [T])]]),
      mapIndexed: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(R, [core.int, T])]]),
      mapIndexedNotNull: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(R, [core.int, T])]]),
      mapIndexedNotNullTo: dart.gFnType((R, C) => [C, [C, dart.fnType(R, [core.int, T])]], (R, C) => [dart.dynamic, src__collection__kt_collection_mutable.KtMutableCollection$(R)]),
      mapIndexedTo: dart.gFnType((R, C) => [C, [C, dart.fnType(R, [core.int, T])]], (R, C) => [dart.dynamic, src__collection__kt_collection_mutable.KtMutableCollection$(R)]),
      mapNotNull: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(R, [T])]]),
      mapNotNullTo: dart.gFnType((R, C) => [C, [C, dart.fnType(R, [T])]], (R, C) => [dart.dynamic, src__collection__kt_collection_mutable.KtMutableCollection$(R)]),
      mapTo: dart.gFnType((R, C) => [C, [C, dart.fnType(R, [T])]], (R, C) => [dart.dynamic, src__collection__kt_collection_mutable.KtMutableCollection$(R)]),
      max: dart.fnType(core.num, []),
      maxBy: dart.gFnType(R => [T, [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      maxWith: dart.fnType(T, [dart.fnType(core.int, [T, T])]),
      min: dart.fnType(core.num, []),
      minus: dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      '-': dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      minusElement: dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      minBy: dart.gFnType(R => [T, [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      minWith: dart.fnType(T, [dart.fnType(core.int, [T, T])]),
      none: dart.fnType(core.bool, [], [dart.fnType(core.bool, [T])]),
      onEach: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      partition: dart.fnType(src__collection__tuples.KtPair$(src__collection__kt_list.KtList$(T), src__collection__kt_list.KtList$(T)), [dart.fnType(core.bool, [T])]),
      plus: dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      '+': dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      plusElement: dart.fnType(src__collection__kt_list.KtList$(T), [core.Object]),
      reduce: dart.gFnType(S => [S, [dart.fnType(S, [S, T])]]),
      reduceIndexed: dart.gFnType(S => [S, [dart.fnType(S, [core.int, S, T])]]),
      requireNoNulls: dart.fnType(src__collection__kt_iterable.KtIterable$(T), []),
      reversed: dart.fnType(src__collection__kt_list.KtList$(T), []),
      single: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      singleOrNull: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      sorted: dart.fnType(src__collection__kt_list.KtList$(T), []),
      sortedBy: dart.gFnType(R => [src__collection__kt_list.KtList$(T), [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      sortedByDescending: dart.gFnType(R => [src__collection__kt_list.KtList$(T), [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      sortedDescending: dart.fnType(src__collection__kt_list.KtList$(T), []),
      sortedWith: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.int, [T, T])]),
      subtract: dart.fnType(src__collection__kt_set.KtSet$(T), [core.Object]),
      sum: dart.fnType(core.num, []),
      sumBy: dart.fnType(core.int, [dart.fnType(core.int, [T])]),
      sumByDouble: dart.fnType(core.double, [dart.fnType(core.double, [T])]),
      take: dart.fnType(src__collection__kt_list.KtList$(T), [core.int]),
      toCollection: dart.gFnType(C => [C, [C]], C => [src__collection__kt_collection_mutable.KtMutableCollection]),
      toHashSet: dart.fnType(src__collection__kt_set_mutable.KtMutableSet$(T), []),
      toList: dart.fnType(src__collection__kt_list.KtList$(T), []),
      toMutableList: dart.fnType(src__collection__kt_list_mutable.KtMutableList$(T), []),
      toMutableSet: dart.fnType(src__collection__kt_set_mutable.KtMutableSet$(T), []),
      toSet: dart.fnType(src__collection__kt_set.KtSet$(T), []),
      union: dart.fnType(src__collection__kt_set.KtSet$(T), [core.Object]),
      windowed: dart.fnType(src__collection__kt_list.KtList$(src__collection__kt_list.KtList$(T)), [core.int], {step: core.int, partialWindows: core.bool}),
      windowedTransform: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [core.int, dart.fnType(R, [src__collection__kt_list.KtList$(T)])], {step: core.int, partialWindows: core.bool}]),
      zip: dart.gFnType(R => [src__collection__kt_list.KtList$(src__collection__tuples.KtPair$(T, R)), [src__collection__kt_iterable.KtIterable$(R)]]),
      zipTransform: dart.gFnType((R, V) => [src__collection__kt_list.KtList$(V), [src__collection__kt_iterable.KtIterable$(R), dart.fnType(V, [T, R])]]),
      zipWithNext: dart.gFnType(R => [src__collection__kt_list.KtList$(src__collection__tuples.KtPair$(T, T)), []]),
      zipWithNextTransform: dart.gFnType(R => [src__collection__kt_list.KtList$(R), [dart.fnType(R, [T, T])]])
    }));
    dart.setLibraryUri(KtIterableExtensionsMixin, "package:kt_dart/src/collection/extension/iterable_extension_mixin.dart");
    return KtIterableExtensionsMixin;
  });
  src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin = src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin, _is_KtIterableExtensionsMixin_default);
  const _is_KtCollectionExtensionMixin_default = Symbol('_is_KtCollectionExtensionMixin_default');
  src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$ = dart.generic(T => {
    let KtMutableListOfT = () => (KtMutableListOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableList$(T)))();
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    let KCollectionExtensionOfT = () => (KCollectionExtensionOfT = dart.constFn(src__collection__kt_collection.KCollectionExtension$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    class KtCollectionExtensionMixin extends core.Object {
      toMutableList() {
        return KtMutableListOfT().from(this.iter);
      }
      isNotEmpty() {
        return dart.notNull(this.size) > 0;
      }
      random(random) {
        if (random === void 0) random = null;
        let r = random != null ? random : math.Random.new();
        return this.elementAt(r.nextInt(this.size));
      }
      toString() {
        return this.joinToString({separator: ", ", prefix: "[", postfix: "]", transform: dart.fn(it => it === this ? "(this Collection)" : dart.toString(it), TToString())});
      }
    }
    (KtCollectionExtensionMixin.new = function() {
    }).prototype = KtCollectionExtensionMixin.prototype;
    dart.addTypeTests(KtCollectionExtensionMixin);
    KtCollectionExtensionMixin.prototype[_is_KtCollectionExtensionMixin_default] = true;
    KtCollectionExtensionMixin[dart.implements] = () => [KCollectionExtensionOfT(), KtCollectionOfT()];
    dart.setMethodSignature(KtCollectionExtensionMixin, () => ({
      __proto__: dart.getMethods(KtCollectionExtensionMixin.__proto__),
      toMutableList: dart.fnType(src__collection__kt_list_mutable.KtMutableList$(T), []),
      isNotEmpty: dart.fnType(core.bool, []),
      random: dart.fnType(T, [], [math.Random]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setLibraryUri(KtCollectionExtensionMixin, "package:kt_dart/src/collection/extension/collection_extension_mixin.dart");
    dart.defineExtensionMethods(KtCollectionExtensionMixin, ['toString']);
    return KtCollectionExtensionMixin;
  });
  src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin = src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$();
  dart.addTypeTests(src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin, _is_KtCollectionExtensionMixin_default);
  const _filterInPlace = dart.privateName(src__collection__extension__iterable_mutable_extension_mixin, "_filterInPlace");
  const _is_KtMutableIterableExtensionsMixin_default = Symbol('_is_KtMutableIterableExtensionsMixin_default');
  src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin$ = dart.generic(T => {
    let KtMutableIterableExtensionOfT = () => (KtMutableIterableExtensionOfT = dart.constFn(src__collection__kt_iterable_mutable.KtMutableIterableExtension$(T)))();
    let KtMutableIterableOfT = () => (KtMutableIterableOfT = dart.constFn(src__collection__kt_iterable_mutable.KtMutableIterable$(T)))();
    class KtMutableIterableExtensionsMixin extends core.Object {
      removeAllWhere(predicate) {
        return this[_filterInPlace](predicate, true);
      }
      retainAllWhere(predicate) {
        return this[_filterInPlace](predicate, false);
      }
      [_filterInPlace](predicate, predicateResultToRemove) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/iterable_mutable_extension_mixin.dart", 15, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        let result = false;
        let i = this.iterator();
        while (dart.test(i.hasNext()))
          if (predicate(i.next()) == predicateResultToRemove) {
            i.remove();
            result = true;
          }
        return result;
      }
    }
    (KtMutableIterableExtensionsMixin.new = function() {
    }).prototype = KtMutableIterableExtensionsMixin.prototype;
    dart.addTypeTests(KtMutableIterableExtensionsMixin);
    KtMutableIterableExtensionsMixin.prototype[_is_KtMutableIterableExtensionsMixin_default] = true;
    KtMutableIterableExtensionsMixin[dart.implements] = () => [KtMutableIterableExtensionOfT(), KtMutableIterableOfT()];
    dart.setMethodSignature(KtMutableIterableExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtMutableIterableExtensionsMixin.__proto__),
      removeAllWhere: dart.fnType(core.bool, [dart.fnType(core.bool, [T])]),
      retainAllWhere: dart.fnType(core.bool, [dart.fnType(core.bool, [T])]),
      [_filterInPlace]: dart.fnType(core.bool, [dart.fnType(core.bool, [T]), core.bool])
    }));
    dart.setLibraryUri(KtMutableIterableExtensionsMixin, "package:kt_dart/src/collection/extension/iterable_mutable_extension_mixin.dart");
    return KtMutableIterableExtensionsMixin;
  });
  src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin = src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin, _is_KtMutableIterableExtensionsMixin_default);
  const _is_DartMutableSet_default = Symbol('_is_DartMutableSet_default');
  src__collection__impl__set_mutable.DartMutableSet$ = dart.generic(T => {
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let _MutableSetIteratorOfT = () => (_MutableSetIteratorOfT = dart.constFn(src__collection__impl__set_mutable._MutableSetIterator$(T)))();
    let TToint = () => (TToint = dart.constFn(dart.fnType(core.int, [T])))();
    let KtSetOfT = () => (KtSetOfT = dart.constFn(src__collection__kt_set.KtSet$(T)))();
    let KtIterableOfT = () => (KtIterableOfT = dart.constFn(src__collection__kt_iterable.KtIterable$(T)))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let KtMutableSetOfT = () => (KtMutableSetOfT = dart.constFn(src__collection__kt_set_mutable.KtMutableSet$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    const Object_KtMutableIterableExtensionsMixin$ = class Object_KtMutableIterableExtensionsMixin extends Object_KtCollectionExtensionMixin$ {};
    (Object_KtMutableIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtMutableIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMutableIterableExtensionsMixin$, src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin$(T));
    class DartMutableSet extends Object_KtMutableIterableExtensionsMixin$ {
      get iter() {
        return this[_set];
      }
      get set() {
        return this[_set];
      }
      contains(element) {
        T._check(element);
        return this[_set].contains(element);
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set_mutable.dart", 37, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.all(dart.bind(this[_set], 'contains'));
      }
      isEmpty() {
        return this[_set].isEmpty;
      }
      iterator() {
        return new (_MutableSetIteratorOfT()).new(this);
      }
      get size() {
        return this[_set].length;
      }
      get hashCode() {
        return src__util__hash.hashObjects(core.int, (() => {
          let _ = IterableOfint()._check(this[_set].map(core.int, dart.fn(e => dart.hashCode(e), TToint())))[$toList]({growable: false});
          _[$sort]();
          return _;
        })());
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_set.KtSet.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        if (KtSetOfT().is(other)) {
          return this.containsAll(other);
        } else {
          return src__collection__kt_set.KtSet.as(other).containsAll(this);
        }
      }
      add(element) {
        T._check(element);
        return this[_set].add(element);
      }
      addAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set_mutable.dart", 77, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        let oldSize = this.size;
        this[_set].addAll(elements.iter);
        return this.size != oldSize;
      }
      clear() {
        return this[_set].clear();
      }
      remove(element) {
        T._check(element);
        return this[_set].remove(element);
      }
      removeAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set_mutable.dart", 94, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        let oldSize = this.size;
        for (let value of elements.iter) {
          this[_set].remove(value);
        }
        return oldSize != this.size;
      }
      retainAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set_mutable.dart", 107, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        let oldSize = this.size;
        this[_set].removeWhere(dart.fn(it => !dart.test(elements.contains(it)), TTobool()));
        return oldSize != this.size;
      }
    }
    (DartMutableSet.new = function(iterable) {
      if (iterable === void 0) iterable = const$1 || (const$1 = dart.constList([], core.Null));
      this[_set] = SetOfT().from(iterable);
    }).prototype = DartMutableSet.prototype;
    (DartMutableSet.noCopy = function(set) {
      this[_set] = set;
    }).prototype = DartMutableSet.prototype;
    dart.addTypeTests(DartMutableSet);
    DartMutableSet.prototype[_is_DartMutableSet_default] = true;
    DartMutableSet[dart.implements] = () => [KtMutableSetOfT()];
    dart.setMethodSignature(DartMutableSet, () => ({
      __proto__: dart.getMethods(DartMutableSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator_mutable.KtMutableIterator$(T), []),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(core.bool, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(core.bool, [core.Object]),
      retainAll: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(DartMutableSet, () => ({
      __proto__: dart.getGetters(DartMutableSet.__proto__),
      iter: core.Iterable$(T),
      set: core.Set$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartMutableSet, "package:kt_dart/src/collection/impl/set_mutable.dart");
    dart.setFieldSignature(DartMutableSet, () => ({
      __proto__: dart.getFields(DartMutableSet.__proto__),
      [_set]: dart.finalFieldType(SetOfT())
    }));
    dart.defineExtensionMethods(DartMutableSet, ['_equals']);
    dart.defineExtensionAccessors(DartMutableSet, ['hashCode']);
    return DartMutableSet;
  });
  src__collection__impl__set_mutable.DartMutableSet = src__collection__impl__set_mutable.DartMutableSet$();
  dart.addTypeTests(src__collection__impl__set_mutable.DartMutableSet, _is_DartMutableSet_default);
  const _is_DartLinkedSet_default = Symbol('_is_DartLinkedSet_default');
  src__collection__impl__set_hash_linked.DartLinkedSet$ = dart.generic(T => {
    let LinkedHashSetOfT = () => (LinkedHashSetOfT = dart.constFn(collection.LinkedHashSet$(T)))();
    let KtLinkedSetOfT = () => (KtLinkedSetOfT = dart.constFn(src__collection__kt_set_linked.KtLinkedSet$(T)))();
    class DartLinkedSet extends src__collection__impl__set_mutable.DartMutableSet$(T) {}
    (DartLinkedSet.new = function(iterable) {
      if (iterable === void 0) iterable = const$0 || (const$0 = dart.constList([], core.Null));
      DartLinkedSet.__proto__.noCopy.call(this, LinkedHashSetOfT().from(iterable));
    }).prototype = DartLinkedSet.prototype;
    dart.addTypeTests(DartLinkedSet);
    DartLinkedSet.prototype[_is_DartLinkedSet_default] = true;
    DartLinkedSet[dart.implements] = () => [KtLinkedSetOfT()];
    dart.setLibraryUri(DartLinkedSet, "package:kt_dart/src/collection/impl/set_hash_linked.dart");
    return DartLinkedSet;
  });
  src__collection__impl__set_hash_linked.DartLinkedSet = src__collection__impl__set_hash_linked.DartLinkedSet$();
  dart.addTypeTests(src__collection__impl__set_hash_linked.DartLinkedSet, _is_DartLinkedSet_default);
  let const$2;
  const _is_KtLinkedSet_default = Symbol('_is_KtLinkedSet_default');
  src__collection__kt_set_linked.KtLinkedSet$ = dart.generic(T => {
    let KtLinkedSetOfT = () => (KtLinkedSetOfT = dart.constFn(src__collection__kt_set_linked.KtLinkedSet$(T)))();
    let DartLinkedSetOfT = () => (DartLinkedSetOfT = dart.constFn(src__collection__impl__set_hash_linked.DartLinkedSet$(T)))();
    let KtMutableSetOfT = () => (KtMutableSetOfT = dart.constFn(src__collection__kt_set_mutable.KtMutableSet$(T)))();
    class KtLinkedSet extends core.Object {
      static empty() {
        return KtLinkedSetOfT().from();
      }
      static from(elements) {
        if (elements === void 0) elements = const$2 || (const$2 = dart.constList([], core.Null));
        return new (DartLinkedSetOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtLinkedSetOfT().from(args);
      }
    }
    (KtLinkedSet[dart.mixinNew] = function() {
    }).prototype = KtLinkedSet.prototype;
    dart.addTypeTests(KtLinkedSet);
    KtLinkedSet.prototype[_is_KtLinkedSet_default] = true;
    KtLinkedSet[dart.implements] = () => [KtMutableSetOfT()];
    dart.setLibraryUri(KtLinkedSet, "package:kt_dart/src/collection/kt_set_linked.dart");
    return KtLinkedSet;
  });
  src__collection__kt_set_linked.KtLinkedSet = src__collection__kt_set_linked.KtLinkedSet$();
  dart.addTypeTests(src__collection__kt_set_linked.KtLinkedSet, _is_KtLinkedSet_default);
  const _iterator = dart.privateName(src__collection__impl__set_mutable, "_iterator");
  const _hasNext = dart.privateName(src__collection__impl__set_mutable, "_hasNext");
  const _is_KtMutableIterator_default = Symbol('_is_KtMutableIterator_default');
  src__collection__kt_iterator_mutable.KtMutableIterator$ = dart.generic(T => {
    let KtIteratorOfT = () => (KtIteratorOfT = dart.constFn(src__collection__kt_iterator.KtIterator$(T)))();
    class KtMutableIterator extends core.Object {}
    (KtMutableIterator.new = function() {
    }).prototype = KtMutableIterator.prototype;
    dart.addTypeTests(KtMutableIterator);
    KtMutableIterator.prototype[_is_KtMutableIterator_default] = true;
    KtMutableIterator[dart.implements] = () => [KtIteratorOfT()];
    dart.setLibraryUri(KtMutableIterator, "package:kt_dart/src/collection/kt_iterator_mutable.dart");
    return KtMutableIterator;
  });
  src__collection__kt_iterator_mutable.KtMutableIterator = src__collection__kt_iterator_mutable.KtMutableIterator$();
  dart.addTypeTests(src__collection__kt_iterator_mutable.KtMutableIterator, _is_KtMutableIterator_default);
  const _is__MutableSetIterator_default = Symbol('_is__MutableSetIterator_default');
  src__collection__impl__set_mutable._MutableSetIterator$ = dart.generic(T => {
    let KtMutableSetOfT = () => (KtMutableSetOfT = dart.constFn(src__collection__kt_set_mutable.KtMutableSet$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    class _MutableSetIterator extends src__collection__kt_iterator_mutable.KtMutableIterator$(T) {
      hasNext() {
        return this[_hasNext];
      }
      next() {
        if (!dart.test(this[_hasNext])) dart.throw(new src__exception__exceptions.NoSuchElementException.new());
        let e = this.nextValue;
        this[_hasNext] = this[_iterator].moveNext();
        this.nextValue = this[_iterator].current;
        this.lastReturned = e;
        return e;
      }
      remove() {
        dart.throw(new core.UnimplementedError.new("remove() in not yet implemented. Please vote for https://github.com/passsy/dart_kollection/issues/5 for prioritization"));
      }
    }
    (_MutableSetIterator.new = function(set) {
      this.nextValue = null;
      this.lastReturned = null;
      this[_hasNext] = false;
      this[_set] = set;
      this[_iterator] = set.iter[$iterator];
      this.lastReturned = null;
      this[_hasNext] = this[_iterator].moveNext();
      this.nextValue = this[_iterator].current;
    }).prototype = _MutableSetIterator.prototype;
    dart.addTypeTests(_MutableSetIterator);
    _MutableSetIterator.prototype[_is__MutableSetIterator_default] = true;
    dart.setMethodSignature(_MutableSetIterator, () => ({
      __proto__: dart.getMethods(_MutableSetIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      next: dart.fnType(T, []),
      remove: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_MutableSetIterator, "package:kt_dart/src/collection/impl/set_mutable.dart");
    dart.setFieldSignature(_MutableSetIterator, () => ({
      __proto__: dart.getFields(_MutableSetIterator.__proto__),
      [_set]: dart.fieldType(KtMutableSetOfT()),
      [_iterator]: dart.finalFieldType(IteratorOfT()),
      nextValue: dart.fieldType(T),
      lastReturned: dart.fieldType(T),
      [_hasNext]: dart.fieldType(core.bool)
    }));
    return _MutableSetIterator;
  });
  src__collection__impl__set_mutable._MutableSetIterator = src__collection__impl__set_mutable._MutableSetIterator$();
  dart.addTypeTests(src__collection__impl__set_mutable._MutableSetIterator, _is__MutableSetIterator_default);
  let const$3;
  const _is_DartHashSet_default = Symbol('_is_DartHashSet_default');
  src__collection__impl__set_hash.DartHashSet$ = dart.generic(T => {
    let HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    let KtHashSetOfT = () => (KtHashSetOfT = dart.constFn(src__collection__kt_set_hash.KtHashSet$(T)))();
    class DartHashSet extends src__collection__impl__set_mutable.DartMutableSet$(T) {}
    (DartHashSet.new = function(iterable) {
      if (iterable === void 0) iterable = const$3 || (const$3 = dart.constList([], core.Null));
      DartHashSet.__proto__.noCopy.call(this, HashSetOfT().from(iterable));
    }).prototype = DartHashSet.prototype;
    dart.addTypeTests(DartHashSet);
    DartHashSet.prototype[_is_DartHashSet_default] = true;
    DartHashSet[dart.implements] = () => [KtHashSetOfT()];
    dart.setLibraryUri(DartHashSet, "package:kt_dart/src/collection/impl/set_hash.dart");
    return DartHashSet;
  });
  src__collection__impl__set_hash.DartHashSet = src__collection__impl__set_hash.DartHashSet$();
  dart.addTypeTests(src__collection__impl__set_hash.DartHashSet, _is_DartHashSet_default);
  let const$4;
  const _is_KtHashSet_default = Symbol('_is_KtHashSet_default');
  src__collection__kt_set_hash.KtHashSet$ = dart.generic(T => {
    let KtHashSetOfT = () => (KtHashSetOfT = dart.constFn(src__collection__kt_set_hash.KtHashSet$(T)))();
    let DartHashSetOfT = () => (DartHashSetOfT = dart.constFn(src__collection__impl__set_hash.DartHashSet$(T)))();
    let KtMutableSetOfT = () => (KtMutableSetOfT = dart.constFn(src__collection__kt_set_mutable.KtMutableSet$(T)))();
    class KtHashSet extends core.Object {
      static empty() {
        return KtHashSetOfT().from();
      }
      static from(elements) {
        if (elements === void 0) elements = const$4 || (const$4 = dart.constList([], core.Null));
        return new (DartHashSetOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtHashSetOfT().from(args);
      }
    }
    (KtHashSet[dart.mixinNew] = function() {
    }).prototype = KtHashSet.prototype;
    dart.addTypeTests(KtHashSet);
    KtHashSet.prototype[_is_KtHashSet_default] = true;
    KtHashSet[dart.implements] = () => [KtMutableSetOfT()];
    dart.setLibraryUri(KtHashSet, "package:kt_dart/src/collection/kt_set_hash.dart");
    return KtHashSet;
  });
  src__collection__kt_set_hash.KtHashSet = src__collection__kt_set_hash.KtHashSet$();
  dart.addTypeTests(src__collection__kt_set_hash.KtHashSet, _is_KtHashSet_default);
  const _is_EmptySet_default = Symbol('_is_EmptySet_default');
  src__collection__impl__set_empty.EmptySet$ = dart.generic(T => {
    let _HashSetOfT = () => (_HashSetOfT = dart.constFn(collection._HashSet$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let _EmptyIteratorOfT = () => (_EmptyIteratorOfT = dart.constFn(src__collection__impl__set_empty._EmptyIterator$(T)))();
    let EmptyDartIterableOfT = () => (EmptyDartIterableOfT = dart.constFn(src__collection__impl__dart_iterable.EmptyDartIterable$(T)))();
    let KtSetOfT = () => (KtSetOfT = dart.constFn(src__collection__kt_set.KtSet$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    class EmptySet extends Object_KtCollectionExtensionMixin$ {
      get set() {
        return new (_HashSetOfT()).new();
      }
      contains(element) {
        T._check(element);
        return false;
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set_empty.dart", 17, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.isEmpty();
      }
      isEmpty() {
        return true;
      }
      iterator() {
        return new (_EmptyIteratorOfT()).new();
      }
      get size() {
        return 0;
      }
      _equals(other) {
        if (other == null) return false;
        return src__collection__kt_set.KtSet.is(other) && dart.test(other.isEmpty());
      }
      get hashCode() {
        return 0;
      }
      toString() {
        return "[]";
      }
      get iter() {
        return new (EmptyDartIterableOfT()).new();
      }
    }
    (EmptySet.new = function() {
    }).prototype = EmptySet.prototype;
    dart.addTypeTests(EmptySet);
    EmptySet.prototype[_is_EmptySet_default] = true;
    EmptySet[dart.implements] = () => [KtSetOfT()];
    dart.setMethodSignature(EmptySet, () => ({
      __proto__: dart.getMethods(EmptySet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator.KtIterator$(T), []),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(EmptySet, () => ({
      __proto__: dart.getGetters(EmptySet.__proto__),
      set: core.Set$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int,
      iter: core.Iterable$(T)
    }));
    dart.setLibraryUri(EmptySet, "package:kt_dart/src/collection/impl/set_empty.dart");
    dart.defineExtensionMethods(EmptySet, ['_equals', 'toString']);
    dart.defineExtensionAccessors(EmptySet, ['hashCode']);
    return EmptySet;
  });
  src__collection__impl__set_empty.EmptySet = src__collection__impl__set_empty.EmptySet$();
  dart.addTypeTests(src__collection__impl__set_empty.EmptySet, _is_EmptySet_default);
  const _is_KtIterator_default = Symbol('_is_KtIterator_default');
  src__collection__kt_iterator.KtIterator$ = dart.generic(T => {
    class KtIterator extends core.Object {}
    (KtIterator.new = function() {
    }).prototype = KtIterator.prototype;
    dart.addTypeTests(KtIterator);
    KtIterator.prototype[_is_KtIterator_default] = true;
    dart.setLibraryUri(KtIterator, "package:kt_dart/src/collection/kt_iterator.dart");
    return KtIterator;
  });
  src__collection__kt_iterator.KtIterator = src__collection__kt_iterator.KtIterator$();
  dart.addTypeTests(src__collection__kt_iterator.KtIterator, _is_KtIterator_default);
  const _is__EmptyIterator_default = Symbol('_is__EmptyIterator_default');
  src__collection__impl__set_empty._EmptyIterator$ = dart.generic(T => {
    class _EmptyIterator extends src__collection__kt_iterator.KtIterator$(T) {
      hasNext() {
        return false;
      }
      next() {
        dart.throw(new src__exception__exceptions.NoSuchElementException.new());
      }
    }
    (_EmptyIterator.new = function() {
    }).prototype = _EmptyIterator.prototype;
    dart.addTypeTests(_EmptyIterator);
    _EmptyIterator.prototype[_is__EmptyIterator_default] = true;
    dart.setMethodSignature(_EmptyIterator, () => ({
      __proto__: dart.getMethods(_EmptyIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      next: dart.fnType(T, [])
    }));
    dart.setLibraryUri(_EmptyIterator, "package:kt_dart/src/collection/impl/set_empty.dart");
    return _EmptyIterator;
  });
  src__collection__impl__set_empty._EmptyIterator = src__collection__impl__set_empty._EmptyIterator$();
  dart.addTypeTests(src__collection__impl__set_empty._EmptyIterator, _is__EmptyIterator_default);
  let const$5;
  const _set$ = dart.privateName(src__collection__impl__set, "_set");
  const _hashCode = dart.privateName(src__collection__impl__set, "_hashCode");
  const _is_DartSet_default = Symbol('_is_DartSet_default');
  src__collection__impl__set.DartSet$ = dart.generic(T => {
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let _DartToKIteratorOfT = () => (_DartToKIteratorOfT = dart.constFn(src__collection__impl__set._DartToKIterator$(T)))();
    let TToint = () => (TToint = dart.constFn(dart.fnType(core.int, [T])))();
    let KtSetOfT = () => (KtSetOfT = dart.constFn(src__collection__kt_set.KtSet$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    class DartSet extends Object_KtCollectionExtensionMixin$ {
      get iter() {
        return this[_set$];
      }
      get set() {
        return SetOfT().of(this[_set$]);
      }
      contains(element) {
        T._check(element);
        return this[_set$].contains(element);
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/set.dart", 31, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.all(dart.bind(this[_set$], 'contains'));
      }
      isEmpty() {
        return this[_set$].isEmpty;
      }
      iterator() {
        return new (_DartToKIteratorOfT()).new(this[_set$].iterator);
      }
      get size() {
        return this[_set$].length;
      }
      get hashCode() {
        let t = this[_hashCode];
        t == null ? this[_hashCode] = src__util__hash.hashObjects(core.int, (() => {
          let _ = IterableOfint()._check(this[_set$].map(core.int, dart.fn(e => dart.hashCode(e), TToint())))[$toList]({growable: false});
          _[$sort]();
          return _;
        })()) : t;
        return this[_hashCode];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_set.KtSet.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        if (KtSetOfT().is(other)) {
          return this.containsAll(other);
        } else {
          return src__collection__kt_set.KtSet.as(other).containsAll(this);
        }
      }
    }
    (DartSet.new = function(iterable) {
      if (iterable === void 0) iterable = const$5 || (const$5 = dart.constList([], core.Null));
      this[_hashCode] = null;
      this[_set$] = SetOfT().from(iterable);
    }).prototype = DartSet.prototype;
    dart.addTypeTests(DartSet);
    DartSet.prototype[_is_DartSet_default] = true;
    DartSet[dart.implements] = () => [KtSetOfT()];
    dart.setMethodSignature(DartSet, () => ({
      __proto__: dart.getMethods(DartSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator.KtIterator$(T), []),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(DartSet, () => ({
      __proto__: dart.getGetters(DartSet.__proto__),
      iter: core.Iterable$(T),
      set: core.Set$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartSet, "package:kt_dart/src/collection/impl/set.dart");
    dart.setFieldSignature(DartSet, () => ({
      __proto__: dart.getFields(DartSet.__proto__),
      [_set$]: dart.finalFieldType(SetOfT()),
      [_hashCode]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(DartSet, ['_equals']);
    dart.defineExtensionAccessors(DartSet, ['hashCode']);
    return DartSet;
  });
  src__collection__impl__set.DartSet = src__collection__impl__set.DartSet$();
  dart.addTypeTests(src__collection__impl__set.DartSet, _is_DartSet_default);
  const _hasNext$ = dart.privateName(src__collection__impl__set, "_hasNext");
  const _is__DartToKIterator_default = Symbol('_is__DartToKIterator_default');
  src__collection__impl__set._DartToKIterator$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    class _DartToKIterator extends src__collection__kt_iterator.KtIterator$(T) {
      hasNext() {
        return this[_hasNext$];
      }
      next() {
        if (!dart.test(this[_hasNext$])) dart.throw(new src__exception__exceptions.NoSuchElementException.new());
        let e = this.nextValue;
        this[_hasNext$] = this.iterator.moveNext();
        this.nextValue = this.iterator.current;
        this.lastReturned = e;
        return e;
      }
    }
    (_DartToKIterator.new = function(iterator) {
      this.nextValue = null;
      this.lastReturned = null;
      this[_hasNext$] = false;
      this.iterator = iterator;
      this.lastReturned = null;
      this[_hasNext$] = this.iterator.moveNext();
      this.nextValue = this.iterator.current;
    }).prototype = _DartToKIterator.prototype;
    dart.addTypeTests(_DartToKIterator);
    _DartToKIterator.prototype[_is__DartToKIterator_default] = true;
    dart.setMethodSignature(_DartToKIterator, () => ({
      __proto__: dart.getMethods(_DartToKIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      next: dart.fnType(T, [])
    }));
    dart.setLibraryUri(_DartToKIterator, "package:kt_dart/src/collection/impl/set.dart");
    dart.setFieldSignature(_DartToKIterator, () => ({
      __proto__: dart.getFields(_DartToKIterator.__proto__),
      iterator: dart.finalFieldType(IteratorOfT()),
      nextValue: dart.fieldType(T),
      lastReturned: dart.fieldType(T),
      [_hasNext$]: dart.fieldType(core.bool)
    }));
    return _DartToKIterator;
  });
  src__collection__impl__set._DartToKIterator = src__collection__impl__set._DartToKIterator$();
  dart.addTypeTests(src__collection__impl__set._DartToKIterator, _is__DartToKIterator_default);
  let const$6;
  const _is_KtSet_default = Symbol('_is_KtSet_default');
  src__collection__kt_set.KtSet$ = dart.generic(T => {
    let EmptySetOfT = () => (EmptySetOfT = dart.constFn(src__collection__impl__set_empty.EmptySet$(T)))();
    let DartSetOfT = () => (DartSetOfT = dart.constFn(src__collection__impl__set.DartSet$(T)))();
    let KtSetOfT = () => (KtSetOfT = dart.constFn(src__collection__kt_set.KtSet$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    class KtSet extends core.Object {
      static empty() {
        return new (EmptySetOfT()).new();
      }
      static from(elements) {
        if (elements === void 0) elements = const$6 || (const$6 = dart.constList([], core.Null));
        if (dart.test(elements[$isEmpty])) return new (EmptySetOfT()).new();
        return new (DartSetOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtSetOfT().from(args);
      }
    }
    (KtSet[dart.mixinNew] = function() {
    }).prototype = KtSet.prototype;
    dart.addTypeTests(KtSet);
    KtSet.prototype[_is_KtSet_default] = true;
    KtSet[dart.implements] = () => [KtCollectionOfT()];
    dart.setLibraryUri(KtSet, "package:kt_dart/src/collection/kt_set.dart");
    return KtSet;
  });
  src__collection__kt_set.KtSet = src__collection__kt_set.KtSet$();
  dart.addTypeTests(src__collection__kt_set.KtSet, _is_KtSet_default);
  let const$7;
  const _is_KtMutableMap_default = Symbol('_is_KtMutableMap_default');
  src__collection__kt_map_mutable.KtMutableMap$ = dart.generic((K, V) => {
    let DartMutableMapOfK$V = () => (DartMutableMapOfK$V = dart.constFn(src__collection__impl__map_mutable.DartMutableMap$(K, V)))();
    let KtMapOfK$V = () => (KtMapOfK$V = dart.constFn(src__collection__kt_map.KtMap$(K, V)))();
    let KtMutableMapExtensionOfK$V = () => (KtMutableMapExtensionOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMapExtension$(K, V)))();
    class KtMutableMap extends core.Object {
      static empty() {
        return new (DartMutableMapOfK$V()).new();
      }
      static from(map) {
        if (map === void 0) map = const$7 || (const$7 = dart.constMap(core.Null, core.Null, []));
        return new (DartMutableMapOfK$V()).new(map);
      }
    }
    (KtMutableMap[dart.mixinNew] = function() {
    }).prototype = KtMutableMap.prototype;
    dart.addTypeTests(KtMutableMap);
    KtMutableMap.prototype[_is_KtMutableMap_default] = true;
    KtMutableMap[dart.implements] = () => [KtMapOfK$V(), KtMutableMapExtensionOfK$V()];
    dart.setLibraryUri(KtMutableMap, "package:kt_dart/src/collection/kt_map_mutable.dart");
    return KtMutableMap;
  });
  src__collection__kt_map_mutable.KtMutableMap = src__collection__kt_map_mutable.KtMutableMap$();
  dart.addTypeTests(src__collection__kt_map_mutable.KtMutableMap, _is_KtMutableMap_default);
  const _is_KtMapEntry_default = Symbol('_is_KtMapEntry_default');
  src__collection__kt_map.KtMapEntry$ = dart.generic((K, V) => {
    class KtMapEntry extends core.Object {}
    (KtMapEntry.new = function() {
    }).prototype = KtMapEntry.prototype;
    dart.addTypeTests(KtMapEntry);
    KtMapEntry.prototype[_is_KtMapEntry_default] = true;
    dart.setLibraryUri(KtMapEntry, "package:kt_dart/src/collection/kt_map.dart");
    return KtMapEntry;
  });
  src__collection__kt_map.KtMapEntry = src__collection__kt_map.KtMapEntry$();
  dart.addTypeTests(src__collection__kt_map.KtMapEntry, _is_KtMapEntry_default);
  const _is_KtMutableMapEntry_default = Symbol('_is_KtMutableMapEntry_default');
  src__collection__kt_map_mutable.KtMutableMapEntry$ = dart.generic((K, V) => {
    class KtMutableMapEntry extends src__collection__kt_map.KtMapEntry$(K, V) {}
    (KtMutableMapEntry.new = function() {
    }).prototype = KtMutableMapEntry.prototype;
    dart.addTypeTests(KtMutableMapEntry);
    KtMutableMapEntry.prototype[_is_KtMutableMapEntry_default] = true;
    dart.setLibraryUri(KtMutableMapEntry, "package:kt_dart/src/collection/kt_map_mutable.dart");
    return KtMutableMapEntry;
  });
  src__collection__kt_map_mutable.KtMutableMapEntry = src__collection__kt_map_mutable.KtMutableMapEntry$();
  dart.addTypeTests(src__collection__kt_map_mutable.KtMutableMapEntry, _is_KtMutableMapEntry_default);
  const _is_KtMutableMapExtension_default = Symbol('_is_KtMutableMapExtension_default');
  src__collection__kt_map_mutable.KtMutableMapExtension$ = dart.generic((K, V) => {
    class KtMutableMapExtension extends core.Object {}
    (KtMutableMapExtension.new = function() {
    }).prototype = KtMutableMapExtension.prototype;
    dart.addTypeTests(KtMutableMapExtension);
    KtMutableMapExtension.prototype[_is_KtMutableMapExtension_default] = true;
    dart.setLibraryUri(KtMutableMapExtension, "package:kt_dart/src/collection/kt_map_mutable.dart");
    return KtMutableMapExtension;
  });
  src__collection__kt_map_mutable.KtMutableMapExtension = src__collection__kt_map_mutable.KtMutableMapExtension$();
  dart.addTypeTests(src__collection__kt_map_mutable.KtMutableMapExtension, _is_KtMutableMapExtension_default);
  let const$8;
  let const$9;
  const _map = dart.privateName(src__collection__impl__map_mutable, "_map");
  const _entryToString = dart.privateName(src__collection__extension__map_extensions_mixin, "_entryToString");
  const _toString = dart.privateName(src__collection__extension__map_extensions_mixin, "_toString");
  const _is_KtMapExtensionsMixin_default = Symbol('_is_KtMapExtensionsMixin_default');
  src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin$ = dart.generic((K, V) => {
    let KtLinkedMapOfK$V = () => (KtLinkedMapOfK$V = dart.constFn(src__collection__kt_map_linked.KtLinkedMap$(K, V)))();
    let KtMutableMapOfK$V = () => (KtMutableMapOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMap$(K, V)))();
    let KtMapOfK$V = () => (KtMapOfK$V = dart.constFn(src__collection__kt_map.KtMap$(K, V)))();
    let KtMapEntryOfK$V = () => (KtMapEntryOfK$V = dart.constFn(src__collection__kt_map.KtMapEntry$(K, V)))();
    let KtMapExtensionOfK$V = () => (KtMapExtensionOfK$V = dart.constFn(src__collection__kt_map.KtMapExtension$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    class KtMapExtensionsMixin extends core.Object {
      filter(predicate) {
        let filtered = this.filterTo(KtLinkedMapOfK$V(), src__collection__collections.linkedMapFrom(K, V), predicate);
        return filtered;
      }
      filterTo(M, destination, predicate) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          if (!KtMutableMapOfK$V().is(destination) && !M.is(src__collection__collections.mutableMapFrom(K, V))) dart.throw(new core.ArgumentError.new("filterTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<" + dart.str(dart.wrapType(K)) + ", " + dart.str(dart.wrapType(V)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 16, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (predicate == null) throw ArgumentError(\"predicate can't be null\"); if (destination is! KtMutableMap<K, V> && mutableMapFrom<K, V>() is! M) throw ArgumentError(\"filterTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<$K, $V>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.entries.iter) {
          if (dart.test(predicate(element))) {
            destination.put(element.key, element.value);
          }
        }
        return destination;
      }
      filterNot(predicate) {
        let filtered = this.filterNotTo(KtLinkedMapOfK$V(), src__collection__collections.linkedMapFrom(K, V), predicate);
        return filtered;
      }
      filterNotTo(M, destination, predicate) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          if (!KtMutableMapOfK$V().is(destination) && !M.is(src__collection__collections.mutableMapFrom(K, V))) dart.throw(new core.ArgumentError.new("filterNotTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<" + dart.str(dart.wrapType(K)) + ", " + dart.str(dart.wrapType(V)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\ndestination (" + dart.str(dart.runtimeType(destination)) + ") entries aren't subtype of ") + ("map (" + dart.str(this[$runtimeType]) + ") entries. Entries can't be copied to destination.") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 45, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (predicate == null) throw ArgumentError(\"predicate can't be null\"); if (destination is! KtMutableMap<K, V> && mutableMapFrom<K, V>() is! M) throw ArgumentError(\"filterNotTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<$K, $V>, Actual: ${destination.runtimeType}\" \"\\ndestination (${destination.runtimeType}) entries aren't subtype of \" \"map ($runtimeType) entries. Entries can't be copied to destination.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.entries.iter) {
          if (!dart.test(predicate(element))) {
            destination.put(element.key, element.value);
          }
        }
        return destination;
      }
      getOrElse(key, defaultValue) {
        K._check(key);
        VoidToV()._check(defaultValue);
        if (!dart.test(dart.fn(() => {
          if (defaultValue == null) dart.throw(new core.ArgumentError.new("defaultValue can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 66, 12, "() {if (defaultValue == null) throw ArgumentError(\"defaultValue can't be null\"); return true;}()");
        let l = this.get(key);
        return l != null ? l : defaultValue();
      }
      getValue(key) {
        K._check(key);
        let value = this.get(key);
        if (value == null) {
          dart.throw(new src__exception__exceptions.NoSuchElementException.new("Key " + dart.str(key) + " is missing in the map."));
        }
        return value;
      }
      iterator() {
        return this.entries.iterator();
      }
      isNotEmpty() {
        return !dart.test(this.isEmpty());
      }
      mapKeys(R, transform) {
        let mapped = this.mapKeysTo(R, src__collection__kt_map_linked.KtLinkedMap$(R, V), src__collection__collections.linkedMapFrom(R, V), transform);
        return mapped;
      }
      mapKeysTo(R, M, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          if (!src__collection__kt_map_mutable.KtMutableMap$(R, V).is(destination) && !M.is(src__collection__collections.mutableMapFrom(R, V))) dart.throw(new core.ArgumentError.new("mapKeysTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<" + dart.str(dart.wrapType(R)) + ", " + dart.str(dart.wrapType(V)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\nEntries after key transformation with " + dart.str(transform) + " have type KtMapEntry<" + dart.str(dart.wrapType(R)) + ", " + dart.str(dart.wrapType(V)) + "> ") + ("and can't be copied into destination of type " + dart.str(dart.runtimeType(destination)) + ".") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 98, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); if (destination is! KtMutableMap<R, V> && mutableMapFrom<R, V>() is! M) throw ArgumentError(\"mapKeysTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<$R, $V>, Actual: ${destination.runtimeType}\" \"\\nEntries after key transformation with $transform have type KtMapEntry<$R, $V> \" \"and can't be copied into destination of type ${destination.runtimeType}.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.entries.iter) {
          destination.put(transform(element), element.value);
        }
        return destination;
      }
      mapValues(R, transform) {
        let mapped = this.mapValuesTo(R, src__collection__kt_map_linked.KtLinkedMap$(K, R), src__collection__collections.linkedMapFrom(K, R), transform);
        return mapped;
      }
      mapValuesTo(R, M, destination, transform) {
        if (!dart.test(dart.fn(() => {
          if (destination == null) dart.throw(new core.ArgumentError.new("destination can't be null"));
          if (transform == null) dart.throw(new core.ArgumentError.new("transform can't be null"));
          if (!src__collection__kt_map_mutable.KtMutableMap$(K, R).is(destination) && !M.is(src__collection__collections.mutableMapFrom(K, R))) dart.throw(new core.ArgumentError.new("mapValuesTo destination has wrong type parameters." + ("\nExpected: KtMutableMap<" + dart.str(dart.wrapType(K)) + ", " + dart.str(dart.wrapType(R)) + ">, Actual: " + dart.str(dart.runtimeType(destination))) + ("\nEntries after key transformation with " + dart.str(transform) + " have type KtMapEntry<" + dart.str(dart.wrapType(K)) + ", " + dart.str(dart.wrapType(R)) + "> ") + ("and can't be copied into destination of type " + dart.str(dart.runtimeType(destination)) + ".") + ("\n\n" + "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n")));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 124, 12, "() {if (destination == null) throw ArgumentError(\"destination can't be null\"); if (transform == null) throw ArgumentError(\"transform can't be null\"); if (destination is! KtMutableMap<K, R> && mutableMapFrom<K, R>() is! M) throw ArgumentError(\"mapValuesTo destination has wrong type parameters.\" \"\\nExpected: KtMutableMap<$K, $R>, Actual: ${destination.runtimeType}\" \"\\nEntries after key transformation with $transform have type KtMapEntry<$K, $R> \" \"and can't be copied into destination of type ${destination.runtimeType}.\" \"\\n\\n$kBug35518GenericTypeError\"); return true;}()");
        for (let element of this.entries.iter) {
          destination.put(element.key, transform(element));
        }
        return destination;
      }
      minus(key) {
        K._check(key);
        let _ = this.toMutableMap();
        _.remove(key);
        return _;
      }
      ['-'](key) {
        K._check(key);
        return this.minus(key);
      }
      plus(map) {
        KtMapOfK$V()._check(map);
        if (!dart.test(dart.fn(() => {
          if (map == null) dart.throw(new core.ArgumentError.new("map can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_extensions_mixin.dart", 151, 12, "() {if (map == null) throw ArgumentError(\"map can't be null\"); return true;}()");
        let _ = this.toMutableMap();
        _.putAll(map);
        return _;
      }
      ['+'](map) {
        KtMapOfK$V()._check(map);
        return this.plus(map);
      }
      toMap() {
        if (this.size === 0) return src__collection__collections.emptyMap(K, V);
        return this.toMutableMap();
      }
      toMutableMap() {
        return src__collection__collections.mutableMapFrom(K, V, this.map);
      }
      toString() {
        return this.entries.joinToString({separator: ", ", prefix: "{", postfix: "}", transform: dart.bind(this, _entryToString)});
      }
      [_entryToString](entry) {
        KtMapEntryOfK$V()._check(entry);
        return dart.str(this[_toString](entry.key)) + "=" + dart.str(this[_toString](entry.value));
      }
      [_toString](o) {
        return o === this ? "(this Map)" : dart.toString(o);
      }
    }
    (KtMapExtensionsMixin.new = function() {
    }).prototype = KtMapExtensionsMixin.prototype;
    dart.addTypeTests(KtMapExtensionsMixin);
    KtMapExtensionsMixin.prototype[_is_KtMapExtensionsMixin_default] = true;
    KtMapExtensionsMixin[dart.implements] = () => [KtMapExtensionOfK$V(), KtMapOfK$V()];
    dart.setMethodSignature(KtMapExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtMapExtensionsMixin.__proto__),
      filter: dart.fnType(src__collection__kt_map.KtMap$(K, V), [dart.fnType(core.bool, [src__collection__kt_map.KtMapEntry$(K, V)])]),
      filterTo: dart.gFnType(M => [M, [M, dart.fnType(core.bool, [src__collection__kt_map.KtMapEntry$(K, V)])]], M => [src__collection__kt_map_mutable.KtMutableMap]),
      filterNot: dart.fnType(src__collection__kt_map.KtMap$(K, V), [dart.fnType(core.bool, [src__collection__kt_map.KtMapEntry$(K, V)])]),
      filterNotTo: dart.gFnType(M => [M, [M, dart.fnType(core.bool, [src__collection__kt_map.KtMapEntry$(K, V)])]], M => [src__collection__kt_map_mutable.KtMutableMap]),
      getOrElse: dart.fnType(V, [core.Object, core.Object]),
      getValue: dart.fnType(V, [core.Object]),
      iterator: dart.fnType(src__collection__kt_iterator.KtIterator$(src__collection__kt_map.KtMapEntry$(K, V)), []),
      isNotEmpty: dart.fnType(core.bool, []),
      mapKeys: dart.gFnType(R => [src__collection__kt_map.KtMap$(R, V), [dart.fnType(R, [src__collection__kt_map.KtMapEntry$(K, V)])]]),
      mapKeysTo: dart.gFnType((R, M) => [M, [M, dart.fnType(R, [src__collection__kt_map.KtMapEntry$(K, V)])]], (R, M) => [dart.dynamic, src__collection__kt_map_mutable.KtMutableMap]),
      mapValues: dart.gFnType(R => [src__collection__kt_map.KtMap$(K, R), [dart.fnType(R, [src__collection__kt_map.KtMapEntry$(K, V)])]]),
      mapValuesTo: dart.gFnType((R, M) => [M, [M, dart.fnType(R, [src__collection__kt_map.KtMapEntry$(K, V)])]], (R, M) => [dart.dynamic, src__collection__kt_map_mutable.KtMutableMap]),
      minus: dart.fnType(src__collection__kt_map.KtMap$(K, V), [core.Object]),
      '-': dart.fnType(src__collection__kt_map.KtMap$(K, V), [core.Object]),
      plus: dart.fnType(src__collection__kt_map.KtMap$(K, V), [core.Object]),
      '+': dart.fnType(src__collection__kt_map.KtMap$(K, V), [core.Object]),
      toMap: dart.fnType(src__collection__kt_map.KtMap$(K, V), []),
      toMutableMap: dart.fnType(src__collection__kt_map_mutable.KtMutableMap$(K, V), []),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_entryToString]: dart.fnType(core.String, [core.Object]),
      [_toString]: dart.fnType(core.String, [core.Object])
    }));
    dart.setLibraryUri(KtMapExtensionsMixin, "package:kt_dart/src/collection/extension/map_extensions_mixin.dart");
    dart.defineExtensionMethods(KtMapExtensionsMixin, ['toString']);
    return KtMapExtensionsMixin;
  });
  src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin = src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin, _is_KtMapExtensionsMixin_default);
  const _is_KtMutableMapExtensionsMixin_default = Symbol('_is_KtMutableMapExtensionsMixin_default');
  src__collection__extension__map_mutable_extensions_mixin.KtMutableMapExtensionsMixin$ = dart.generic((K, V) => {
    let KtPairOfK$V = () => (KtPairOfK$V = dart.constFn(src__collection__tuples.KtPair$(K, V)))();
    let KtIterableOfKtPairOfK$V = () => (KtIterableOfKtPairOfK$V = dart.constFn(src__collection__kt_iterable.KtIterable$(KtPairOfK$V())))();
    let KtMutableMapExtensionOfK$V = () => (KtMutableMapExtensionOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMapExtension$(K, V)))();
    let KtMutableMapOfK$V = () => (KtMutableMapOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMap$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    class KtMutableMapExtensionsMixin extends core.Object {
      getOrPut(key, defaultValue) {
        K._check(key);
        VoidToV()._check(defaultValue);
        if (!dart.test(dart.fn(() => {
          if (defaultValue == null) dart.throw(new core.ArgumentError.new("defaultValue can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_mutable_extensions_mixin.dart", 7, 12, "() {if (defaultValue == null) throw ArgumentError(\"defaultValue can't be null\"); return true;}()");
        let value = this.get(key);
        if (value != null) return value;
        let answer = defaultValue();
        this.put(key, answer);
        return answer;
      }
      iterator() {
        return this.entries.iterator();
      }
      putAllPairs(pairs) {
        KtIterableOfKtPairOfK$V()._check(pairs);
        if (!dart.test(dart.fn(() => {
          if (pairs == null) dart.throw(new core.ArgumentError.new("pairs can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/map_mutable_extensions_mixin.dart", 24, 12, "() {if (pairs == null) throw ArgumentError(\"pairs can't be null\"); return true;}()");
        for (let value of pairs.iter) {
          this.put(value.first, value.second);
        }
      }
      putIfAbsent(key, value) {
        K._check(key);
        V._check(value);
        let v = this.get(key);
        let t = v;
        t == null ? v = this.put(key, value) : t;
        return v;
      }
    }
    (KtMutableMapExtensionsMixin.new = function() {
    }).prototype = KtMutableMapExtensionsMixin.prototype;
    dart.addTypeTests(KtMutableMapExtensionsMixin);
    KtMutableMapExtensionsMixin.prototype[_is_KtMutableMapExtensionsMixin_default] = true;
    KtMutableMapExtensionsMixin[dart.implements] = () => [KtMutableMapExtensionOfK$V(), KtMutableMapOfK$V()];
    dart.setMethodSignature(KtMutableMapExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtMutableMapExtensionsMixin.__proto__),
      getOrPut: dart.fnType(V, [core.Object, core.Object]),
      iterator: dart.fnType(src__collection__kt_iterator_mutable.KtMutableIterator$(src__collection__kt_map_mutable.KtMutableMapEntry$(K, V)), []),
      putAllPairs: dart.fnType(dart.void, [core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object])
    }));
    dart.setLibraryUri(KtMutableMapExtensionsMixin, "package:kt_dart/src/collection/extension/map_mutable_extensions_mixin.dart");
    return KtMutableMapExtensionsMixin;
  });
  src__collection__extension__map_mutable_extensions_mixin.KtMutableMapExtensionsMixin = src__collection__extension__map_mutable_extensions_mixin.KtMutableMapExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__map_mutable_extensions_mixin.KtMutableMapExtensionsMixin, _is_KtMutableMapExtensionsMixin_default);
  const _is_DartMutableMap_default = Symbol('_is_DartMutableMap_default');
  src__collection__impl__map_mutable.DartMutableMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let _MutableEntryOfK$V = () => (_MutableEntryOfK$V = dart.constFn(src__collection__impl__map_mutable._MutableEntry$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let MapEntryOfK$VTo_MutableEntryOfK$V = () => (MapEntryOfK$VTo_MutableEntryOfK$V = dart.constFn(dart.fnType(_MutableEntryOfK$V(), [MapEntryOfK$V()])))();
    let KtMutableMapEntryOfK$V = () => (KtMutableMapEntryOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMapEntry$(K, V)))();
    let IterableOfKtMutableMapEntryOfK$V = () => (IterableOfKtMutableMapEntryOfK$V = dart.constFn(core.Iterable$(KtMutableMapEntryOfK$V())))();
    let KtMapOfK$V = () => (KtMapOfK$V = dart.constFn(src__collection__kt_map.KtMap$(K, V)))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core.int, [K])))();
    let KtMutableMapOfK$V = () => (KtMutableMapOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMap$(K, V)))();
    const Object_KtMapExtensionsMixin$ = class Object_KtMapExtensionsMixin extends core.Object {};
    (Object_KtMapExtensionsMixin$.new = function() {
    }).prototype = Object_KtMapExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMapExtensionsMixin$, src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin$(K, V));
    const Object_KtMutableMapExtensionsMixin$ = class Object_KtMutableMapExtensionsMixin extends Object_KtMapExtensionsMixin$ {};
    (Object_KtMutableMapExtensionsMixin$.new = function() {
    }).prototype = Object_KtMutableMapExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMutableMapExtensionsMixin$, src__collection__extension__map_mutable_extensions_mixin.KtMutableMapExtensionsMixin$(K, V));
    class DartMutableMap extends Object_KtMutableMapExtensionsMixin$ {
      get map() {
        return this[_map];
      }
      containsKey(key) {
        K._check(key);
        return this[_map][$containsKey](key);
      }
      containsValue(value) {
        V._check(value);
        return this[_map][$containsValue](value);
      }
      get entries() {
        return src__collection__collections.linkedSetFrom(KtMutableMapEntryOfK$V(), IterableOfKtMutableMapEntryOfK$V()._check(this[_map][$entries][$map](KtMutableMapEntryOfK$V(), dart.fn(entry => new (_MutableEntryOfK$V()).from(entry), MapEntryOfK$VTo_MutableEntryOfK$V()))));
      }
      get(key) {
        K._check(key);
        return this[_map][$_get](key);
      }
      _get(key) {
        K._check(key);
        return this.get(key);
      }
      getOrDefault(key, defaultValue) {
        K._check(key);
        V._check(defaultValue);
        let l = this[_map][$_get](key);
        return l != null ? l : defaultValue;
      }
      isEmpty() {
        return this[_map][$isEmpty];
      }
      get keys() {
        return src__collection__collections.linkedSetFrom(K, this[_map][$keys]);
      }
      get size() {
        return this[_map][$length];
      }
      get values() {
        return src__collection__collections.mutableListFrom(V, this[_map][$values]);
      }
      clear() {
        return this[_map][$clear]();
      }
      put(key, value) {
        K._check(key);
        V._check(value);
        let prev = this[_map][$_get](key);
        this[_map][$_set](key, value);
        return prev;
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        return this.put(key, value);
      }
      putAll(from) {
        KtMapOfK$V()._check(from);
        if (!dart.test(dart.fn(() => {
          if (from == null) dart.throw(new core.ArgumentError.new("from can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/map_mutable.dart", 73, 12, "() {if (from == null) throw ArgumentError(\"from can't be null\"); return true;}()");
        for (let entry of from.entries.iter) {
          this[_map][$_set](entry.key, entry.value);
        }
      }
      remove(key) {
        K._check(key);
        return this[_map][$remove](key);
      }
      removeMapping(key, value) {
        K._check(key);
        V._check(value);
        for (let entry of this[_map][$entries]) {
          if (dart.equals(entry.key, key) && dart.equals(entry.value, value)) {
            this[_map][$remove](key);
            return true;
          }
        }
        return false;
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_map.KtMap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys.iter) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      get hashCode() {
        return src__util__hash.hashObjects(core.int, (() => {
          let _ = IterableOfint()._check(this[_map][$keys][$map](core.int, dart.fn(key => src__util__hash.hash2(dart.hashCode(key), dart.hashCode(this[_map][$_get](key))), KToint())))[$toList]({growable: false});
          _[$sort]();
          return _;
        })());
      }
    }
    (DartMutableMap.new = function(map) {
      if (map === void 0) map = const$9 || (const$9 = dart.constMap(core.Null, core.Null, []));
      this[_map] = MapOfK$V().from(map);
    }).prototype = DartMutableMap.prototype;
    (DartMutableMap.noCopy = function(map) {
      this[_map] = map;
    }).prototype = DartMutableMap.prototype;
    dart.addTypeTests(DartMutableMap);
    DartMutableMap.prototype[_is_DartMutableMap_default] = true;
    DartMutableMap[dart.implements] = () => [KtMutableMapOfK$V()];
    dart.setMethodSignature(DartMutableMap, () => ({
      __proto__: dart.getMethods(DartMutableMap.__proto__),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(V, [core.Object]),
      _get: dart.fnType(V, [core.Object]),
      getOrDefault: dart.fnType(V, [core.Object, core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      clear: dart.fnType(dart.void, []),
      put: dart.fnType(V, [core.Object, core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      putAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(V, [core.Object]),
      removeMapping: dart.fnType(core.bool, [core.Object, core.Object]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(DartMutableMap, () => ({
      __proto__: dart.getGetters(DartMutableMap.__proto__),
      map: core.Map$(K, V),
      entries: src__collection__kt_set_mutable.KtMutableSet$(src__collection__kt_map_mutable.KtMutableMapEntry$(K, V)),
      keys: src__collection__kt_set_mutable.KtMutableSet$(K),
      size: core.int,
      values: src__collection__kt_collection_mutable.KtMutableCollection$(V),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartMutableMap, "package:kt_dart/src/collection/impl/map_mutable.dart");
    dart.setFieldSignature(DartMutableMap, () => ({
      __proto__: dart.getFields(DartMutableMap.__proto__),
      [_map]: dart.finalFieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(DartMutableMap, ['_equals']);
    dart.defineExtensionAccessors(DartMutableMap, ['hashCode']);
    return DartMutableMap;
  });
  src__collection__impl__map_mutable.DartMutableMap = src__collection__impl__map_mutable.DartMutableMap$();
  dart.addTypeTests(src__collection__impl__map_mutable.DartMutableMap, _is_DartMutableMap_default);
  const _is_DartLinkedHashMap_default = Symbol('_is_DartLinkedHashMap_default');
  src__collection__impl__map_linked.DartLinkedHashMap$ = dart.generic((K, V) => {
    let LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    let KtLinkedMapOfK$V = () => (KtLinkedMapOfK$V = dart.constFn(src__collection__kt_map_linked.KtLinkedMap$(K, V)))();
    class DartLinkedHashMap extends src__collection__impl__map_mutable.DartMutableMap$(K, V) {}
    (DartLinkedHashMap.new = function(map) {
      if (map === void 0) map = const$8 || (const$8 = dart.constMap(core.Null, core.Null, []));
      DartLinkedHashMap.__proto__.noCopy.call(this, LinkedHashMapOfK$V().from(map));
    }).prototype = DartLinkedHashMap.prototype;
    dart.addTypeTests(DartLinkedHashMap);
    DartLinkedHashMap.prototype[_is_DartLinkedHashMap_default] = true;
    DartLinkedHashMap[dart.implements] = () => [KtLinkedMapOfK$V()];
    dart.setLibraryUri(DartLinkedHashMap, "package:kt_dart/src/collection/impl/map_linked.dart");
    return DartLinkedHashMap;
  });
  src__collection__impl__map_linked.DartLinkedHashMap = src__collection__impl__map_linked.DartLinkedHashMap$();
  dart.addTypeTests(src__collection__impl__map_linked.DartLinkedHashMap, _is_DartLinkedHashMap_default);
  let const$10;
  const _is_KtLinkedMap_default = Symbol('_is_KtLinkedMap_default');
  src__collection__kt_map_linked.KtLinkedMap$ = dart.generic((K, V) => {
    let DartLinkedHashMapOfK$V = () => (DartLinkedHashMapOfK$V = dart.constFn(src__collection__impl__map_linked.DartLinkedHashMap$(K, V)))();
    let KtMutableMapOfK$V = () => (KtMutableMapOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMap$(K, V)))();
    class KtLinkedMap extends core.Object {
      static empty() {
        return new (DartLinkedHashMapOfK$V()).new();
      }
      static from(map) {
        if (map === void 0) map = const$10 || (const$10 = dart.constMap(core.Null, core.Null, []));
        return new (DartLinkedHashMapOfK$V()).new(map);
      }
    }
    (KtLinkedMap[dart.mixinNew] = function() {
    }).prototype = KtLinkedMap.prototype;
    dart.addTypeTests(KtLinkedMap);
    KtLinkedMap.prototype[_is_KtLinkedMap_default] = true;
    KtLinkedMap[dart.implements] = () => [KtMutableMapOfK$V()];
    dart.setLibraryUri(KtLinkedMap, "package:kt_dart/src/collection/kt_map_linked.dart");
    return KtLinkedMap;
  });
  src__collection__kt_map_linked.KtLinkedMap = src__collection__kt_map_linked.KtLinkedMap$();
  dart.addTypeTests(src__collection__kt_map_linked.KtLinkedMap, _is_KtLinkedMap_default);
  const _key = dart.privateName(src__collection__impl__map_mutable, "_key");
  const _value = dart.privateName(src__collection__impl__map_mutable, "_value");
  const _is__MutableEntry_default = Symbol('_is__MutableEntry_default');
  src__collection__impl__map_mutable._MutableEntry$ = dart.generic((K, V) => {
    let KtPairOfK$V = () => (KtPairOfK$V = dart.constFn(src__collection__tuples.KtPair$(K, V)))();
    let KtMutableMapEntryOfK$V = () => (KtMutableMapEntryOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMapEntry$(K, V)))();
    class _MutableEntry extends core.Object {
      get key() {
        return this[_key];
      }
      get value() {
        return this[_value];
      }
      setValue(newValue) {
        V._check(newValue);
        dart.throw(new core.UnimplementedError.new("setValue() in not yet implemented. Please vote for https://github.com/passsy/dart_kollection/issues/55 for prioritization"));
      }
      toPair() {
        return new (KtPairOfK$V()).new(this[_key], this[_value]);
      }
    }
    (_MutableEntry.new = function(key, value) {
      this[_key] = key;
      this[_value] = value;
    }).prototype = _MutableEntry.prototype;
    (_MutableEntry.from = function(entry) {
      this[_key] = entry.key;
      this[_value] = entry.value;
    }).prototype = _MutableEntry.prototype;
    dart.addTypeTests(_MutableEntry);
    _MutableEntry.prototype[_is__MutableEntry_default] = true;
    _MutableEntry[dart.implements] = () => [KtMutableMapEntryOfK$V()];
    dart.setMethodSignature(_MutableEntry, () => ({
      __proto__: dart.getMethods(_MutableEntry.__proto__),
      setValue: dart.fnType(V, [core.Object]),
      toPair: dart.fnType(src__collection__tuples.KtPair$(K, V), [])
    }));
    dart.setGetterSignature(_MutableEntry, () => ({
      __proto__: dart.getGetters(_MutableEntry.__proto__),
      key: K,
      value: V
    }));
    dart.setLibraryUri(_MutableEntry, "package:kt_dart/src/collection/impl/map_mutable.dart");
    dart.setFieldSignature(_MutableEntry, () => ({
      __proto__: dart.getFields(_MutableEntry.__proto__),
      [_key]: dart.fieldType(K),
      [_value]: dart.fieldType(V)
    }));
    return _MutableEntry;
  });
  src__collection__impl__map_mutable._MutableEntry = src__collection__impl__map_mutable._MutableEntry$();
  dart.addTypeTests(src__collection__impl__map_mutable._MutableEntry, _is__MutableEntry_default);
  let const$11;
  const _is_DartHashMap_default = Symbol('_is_DartHashMap_default');
  src__collection__impl__map_hash.DartHashMap$ = dart.generic((K, V) => {
    let HashMapOfK$V = () => (HashMapOfK$V = dart.constFn(collection.HashMap$(K, V)))();
    let KtHashMapOfK$V = () => (KtHashMapOfK$V = dart.constFn(src__collection__kt_map_hash.KtHashMap$(K, V)))();
    class DartHashMap extends src__collection__impl__map_mutable.DartMutableMap$(K, V) {}
    (DartHashMap.new = function(map) {
      if (map === void 0) map = const$11 || (const$11 = dart.constMap(core.Null, core.Null, []));
      DartHashMap.__proto__.noCopy.call(this, HashMapOfK$V().from(map));
    }).prototype = DartHashMap.prototype;
    dart.addTypeTests(DartHashMap);
    DartHashMap.prototype[_is_DartHashMap_default] = true;
    DartHashMap[dart.implements] = () => [KtHashMapOfK$V()];
    dart.setLibraryUri(DartHashMap, "package:kt_dart/src/collection/impl/map_hash.dart");
    return DartHashMap;
  });
  src__collection__impl__map_hash.DartHashMap = src__collection__impl__map_hash.DartHashMap$();
  dart.addTypeTests(src__collection__impl__map_hash.DartHashMap, _is_DartHashMap_default);
  let const$12;
  const _is_KtHashMap_default = Symbol('_is_KtHashMap_default');
  src__collection__kt_map_hash.KtHashMap$ = dart.generic((K, V) => {
    let DartHashMapOfK$V = () => (DartHashMapOfK$V = dart.constFn(src__collection__impl__map_hash.DartHashMap$(K, V)))();
    let KtMutableMapOfK$V = () => (KtMutableMapOfK$V = dart.constFn(src__collection__kt_map_mutable.KtMutableMap$(K, V)))();
    class KtHashMap extends core.Object {
      static empty() {
        return new (DartHashMapOfK$V()).new();
      }
      static from(map) {
        if (map === void 0) map = const$12 || (const$12 = dart.constMap(core.Null, core.Null, []));
        return new (DartHashMapOfK$V()).new(map);
      }
    }
    (KtHashMap[dart.mixinNew] = function() {
    }).prototype = KtHashMap.prototype;
    dart.addTypeTests(KtHashMap);
    KtHashMap.prototype[_is_KtHashMap_default] = true;
    KtHashMap[dart.implements] = () => [KtMutableMapOfK$V()];
    dart.setLibraryUri(KtHashMap, "package:kt_dart/src/collection/kt_map_hash.dart");
    return KtHashMap;
  });
  src__collection__kt_map_hash.KtHashMap = src__collection__kt_map_hash.KtHashMap$();
  dart.addTypeTests(src__collection__kt_map_hash.KtHashMap, _is_KtHashMap_default);
  const _is_EmptyMap_default = Symbol('_is_EmptyMap_default');
  src__collection__impl__map_empty.EmptyMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let KtMapEntryOfK$V = () => (KtMapEntryOfK$V = dart.constFn(src__collection__kt_map.KtMapEntry$(K, V)))();
    let KtMapOfK$V = () => (KtMapOfK$V = dart.constFn(src__collection__kt_map.KtMap$(K, V)))();
    const Object_KtMapExtensionsMixin$ = class Object_KtMapExtensionsMixin extends core.Object {};
    (Object_KtMapExtensionsMixin$.new = function() {
    }).prototype = Object_KtMapExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMapExtensionsMixin$, src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin$(K, V));
    class EmptyMap extends Object_KtMapExtensionsMixin$ {
      get map() {
        return new (LinkedMapOfK$V()).new();
      }
      _get(key) {
        K._check(key);
        return null;
      }
      containsKey(key) {
        K._check(key);
        return false;
      }
      containsValue(value) {
        V._check(value);
        return false;
      }
      get entries() {
        return src__collection__collections.emptySet(KtMapEntryOfK$V());
      }
      get(key) {
        K._check(key);
        return null;
      }
      getOrDefault(key, defaultValue) {
        K._check(key);
        V._check(defaultValue);
        return defaultValue;
      }
      isEmpty() {
        return true;
      }
      get keys() {
        return src__collection__collections.emptySet(K);
      }
      get size() {
        return 0;
      }
      get values() {
        return src__collection__collections.emptySet(V);
      }
      _equals(other) {
        if (other == null) return false;
        return src__collection__kt_map.KtMap.is(other) && dart.test(other.isEmpty());
      }
      get hashCode() {
        return 0;
      }
      toString() {
        return "{}";
      }
    }
    (EmptyMap.new = function() {
    }).prototype = EmptyMap.prototype;
    dart.addTypeTests(EmptyMap);
    EmptyMap.prototype[_is_EmptyMap_default] = true;
    EmptyMap[dart.implements] = () => [KtMapOfK$V()];
    dart.setMethodSignature(EmptyMap, () => ({
      __proto__: dart.getMethods(EmptyMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(V, [core.Object]),
      getOrDefault: dart.fnType(V, [core.Object, core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(EmptyMap, () => ({
      __proto__: dart.getGetters(EmptyMap.__proto__),
      map: core.Map$(K, V),
      entries: src__collection__kt_set.KtSet$(src__collection__kt_map.KtMapEntry$(K, V)),
      keys: src__collection__kt_set.KtSet$(K),
      size: core.int,
      values: src__collection__kt_collection.KtCollection$(V),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(EmptyMap, "package:kt_dart/src/collection/impl/map_empty.dart");
    dart.defineExtensionMethods(EmptyMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(EmptyMap, ['hashCode']);
    return EmptyMap;
  });
  src__collection__impl__map_empty.EmptyMap = src__collection__impl__map_empty.EmptyMap$();
  dart.addTypeTests(src__collection__impl__map_empty.EmptyMap, _is_EmptyMap_default);
  let const$13;
  const _map$ = dart.privateName(src__collection__impl__map, "_map");
  const _hashCode$ = dart.privateName(src__collection__impl__map, "_hashCode");
  const _is_DartMap_default = Symbol('_is_DartMap_default');
  src__collection__impl__map.DartMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let _EntryOfK$V = () => (_EntryOfK$V = dart.constFn(src__collection__impl__map._Entry$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let MapEntryOfK$VTo_EntryOfK$V = () => (MapEntryOfK$VTo_EntryOfK$V = dart.constFn(dart.fnType(_EntryOfK$V(), [MapEntryOfK$V()])))();
    let KtMapEntryOfK$V = () => (KtMapEntryOfK$V = dart.constFn(src__collection__kt_map.KtMapEntry$(K, V)))();
    let IterableOfKtMapEntryOfK$V = () => (IterableOfKtMapEntryOfK$V = dart.constFn(core.Iterable$(KtMapEntryOfK$V())))();
    let KToint = () => (KToint = dart.constFn(dart.fnType(core.int, [K])))();
    let KtMapOfK$V = () => (KtMapOfK$V = dart.constFn(src__collection__kt_map.KtMap$(K, V)))();
    const Object_KtMapExtensionsMixin$ = class Object_KtMapExtensionsMixin extends core.Object {};
    (Object_KtMapExtensionsMixin$.new = function() {
    }).prototype = Object_KtMapExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMapExtensionsMixin$, src__collection__extension__map_extensions_mixin.KtMapExtensionsMixin$(K, V));
    class DartMap extends Object_KtMapExtensionsMixin$ {
      get map() {
        return this[_map$];
      }
      containsKey(key) {
        K._check(key);
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        V._check(value);
        return this[_map$][$containsValue](value);
      }
      get entries() {
        return src__collection__collections.setFrom(KtMapEntryOfK$V(), IterableOfKtMapEntryOfK$V()._check(this[_map$][$entries][$map](KtMapEntryOfK$V(), dart.fn(entry => new (_EntryOfK$V()).from(entry), MapEntryOfK$VTo_EntryOfK$V()))));
      }
      get(key) {
        K._check(key);
        return this[_map$][$_get](key);
      }
      _get(key) {
        K._check(key);
        return this.get(key);
      }
      getOrDefault(key, defaultValue) {
        K._check(key);
        V._check(defaultValue);
        let l = this[_map$][$_get](key);
        return l != null ? l : defaultValue;
      }
      isEmpty() {
        return this[_map$][$isEmpty];
      }
      get keys() {
        return src__collection__collections.setFrom(K, this[_map$][$keys]);
      }
      get size() {
        return this[_map$][$length];
      }
      get values() {
        return src__collection__collections.listFrom(V, this[_map$][$values]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_map.KtMap.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let key of this.keys.iter) {
          if (!dart.equals(dart.dindex(other, key), this._get(key))) return false;
        }
        return true;
      }
      get hashCode() {
        let t = this[_hashCode$];
        return t == null ? this[_hashCode$] = src__util__hash.hashObjects(core.int, (() => {
          let _ = IterableOfint()._check(this[_map$][$keys][$map](core.int, dart.fn(key => src__util__hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$][$_get](key))), KToint())))[$toList]({growable: false});
          _[$sort]();
          return _;
        })()) : t;
      }
    }
    (DartMap.new = function(map) {
      if (map === void 0) map = const$13 || (const$13 = dart.constMap(core.Null, core.Null, []));
      this[_hashCode$] = null;
      this[_map$] = MapOfK$V().unmodifiable(map);
    }).prototype = DartMap.prototype;
    dart.addTypeTests(DartMap);
    DartMap.prototype[_is_DartMap_default] = true;
    DartMap[dart.implements] = () => [KtMapOfK$V()];
    dart.setMethodSignature(DartMap, () => ({
      __proto__: dart.getMethods(DartMap.__proto__),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(V, [core.Object]),
      _get: dart.fnType(V, [core.Object]),
      getOrDefault: dart.fnType(V, [core.Object, core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(DartMap, () => ({
      __proto__: dart.getGetters(DartMap.__proto__),
      map: core.Map$(K, V),
      entries: src__collection__kt_set.KtSet$(src__collection__kt_map.KtMapEntry$(K, V)),
      keys: src__collection__kt_set.KtSet$(K),
      size: core.int,
      values: src__collection__kt_collection.KtCollection$(V),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartMap, "package:kt_dart/src/collection/impl/map.dart");
    dart.setFieldSignature(DartMap, () => ({
      __proto__: dart.getFields(DartMap.__proto__),
      [_map$]: dart.finalFieldType(MapOfK$V()),
      [_hashCode$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(DartMap, ['_equals']);
    dart.defineExtensionAccessors(DartMap, ['hashCode']);
    return DartMap;
  });
  src__collection__impl__map.DartMap = src__collection__impl__map.DartMap$();
  dart.addTypeTests(src__collection__impl__map.DartMap, _is_DartMap_default);
  const _is__Entry_default = Symbol('_is__Entry_default');
  src__collection__impl__map._Entry$ = dart.generic((K, V) => {
    let KtPairOfK$V = () => (KtPairOfK$V = dart.constFn(src__collection__tuples.KtPair$(K, V)))();
    class _Entry extends src__collection__kt_map.KtMapEntry$(K, V) {
      toPair() {
        return new (KtPairOfK$V()).new(this.key, this.value);
      }
    }
    (_Entry.new = function(key, value) {
      this.key = key;
      this.value = value;
    }).prototype = _Entry.prototype;
    (_Entry.from = function(entry) {
      this.key = entry.key;
      this.value = entry.value;
    }).prototype = _Entry.prototype;
    dart.addTypeTests(_Entry);
    _Entry.prototype[_is__Entry_default] = true;
    dart.setMethodSignature(_Entry, () => ({
      __proto__: dart.getMethods(_Entry.__proto__),
      toPair: dart.fnType(src__collection__tuples.KtPair$(K, V), [])
    }));
    dart.setLibraryUri(_Entry, "package:kt_dart/src/collection/impl/map.dart");
    dart.setFieldSignature(_Entry, () => ({
      __proto__: dart.getFields(_Entry.__proto__),
      key: dart.finalFieldType(K),
      value: dart.finalFieldType(V)
    }));
    return _Entry;
  });
  src__collection__impl__map._Entry = src__collection__impl__map._Entry$();
  dart.addTypeTests(src__collection__impl__map._Entry, _is__Entry_default);
  let const$14;
  const _is_KtMap_default = Symbol('_is_KtMap_default');
  src__collection__kt_map.KtMap$ = dart.generic((K, V) => {
    let EmptyMapOfK$V = () => (EmptyMapOfK$V = dart.constFn(src__collection__impl__map_empty.EmptyMap$(K, V)))();
    let DartMapOfK$V = () => (DartMapOfK$V = dart.constFn(src__collection__impl__map.DartMap$(K, V)))();
    let KtMapExtensionOfK$V = () => (KtMapExtensionOfK$V = dart.constFn(src__collection__kt_map.KtMapExtension$(K, V)))();
    class KtMap extends core.Object {
      static empty() {
        return new (EmptyMapOfK$V()).new();
      }
      static from(map) {
        if (map === void 0) map = const$14 || (const$14 = dart.constMap(core.Null, core.Null, []));
        if (dart.test(map[$isEmpty])) return new (EmptyMapOfK$V()).new();
        return new (DartMapOfK$V()).new(map);
      }
    }
    (KtMap[dart.mixinNew] = function() {
    }).prototype = KtMap.prototype;
    dart.addTypeTests(KtMap);
    KtMap.prototype[_is_KtMap_default] = true;
    KtMap[dart.implements] = () => [KtMapExtensionOfK$V()];
    dart.setLibraryUri(KtMap, "package:kt_dart/src/collection/kt_map.dart");
    return KtMap;
  });
  src__collection__kt_map.KtMap = src__collection__kt_map.KtMap$();
  dart.addTypeTests(src__collection__kt_map.KtMap, _is_KtMap_default);
  const _is_KtMapExtension_default = Symbol('_is_KtMapExtension_default');
  src__collection__kt_map.KtMapExtension$ = dart.generic((K, V) => {
    class KtMapExtension extends core.Object {}
    (KtMapExtension.new = function() {
    }).prototype = KtMapExtension.prototype;
    dart.addTypeTests(KtMapExtension);
    KtMapExtension.prototype[_is_KtMapExtension_default] = true;
    dart.setLibraryUri(KtMapExtension, "package:kt_dart/src/collection/kt_map.dart");
    return KtMapExtension;
  });
  src__collection__kt_map.KtMapExtension = src__collection__kt_map.KtMapExtension$();
  dart.addTypeTests(src__collection__kt_map.KtMapExtension, _is_KtMapExtension_default);
  const _is_KtMutableListExtensionsMixin_default = Symbol('_is_KtMutableListExtensionsMixin_default');
  src__collection__extension__list_mutable_extension_mixin.KtMutableListExtensionsMixin$ = dart.generic(T => {
    let KtMutableListExtensionOfT = () => (KtMutableListExtensionOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableListExtension$(T)))();
    let KtMutableListOfT = () => (KtMutableListOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableList$(T)))();
    class KtMutableListExtensionsMixin extends core.Object {
      fill(value) {
        T._check(value);
        for (let i = 0; i < dart.notNull(this.size); i++) {
          this.set(i, value);
        }
      }
      reverse() {
        let mid = this.size[$rightShift](1);
        let i = 0;
        let j = dart.notNull(this.size) - 1;
        while (i < mid) {
          this.swap(i, j);
          i++;
          j--;
        }
      }
      sortBy(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_mutable_extension_mixin.dart", 27, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        if (dart.notNull(this.size) > 1) {
          this.sortWith(src__collection__comparisons.compareBy(T, selector));
        }
      }
      sortByDescending(R, selector) {
        if (!dart.test(dart.fn(() => {
          if (selector == null) dart.throw(new core.ArgumentError.new("selector can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_mutable_extension_mixin.dart", 38, 12, "() {if (selector == null) throw ArgumentError(\"selector can't be null\"); return true;}()");
        if (dart.notNull(this.size) > 1) {
          this.sortWith(src__collection__comparisons.compareByDescending(T, selector));
        }
      }
      sortWith(comparator) {
        if (!dart.test(dart.fn(() => {
          if (comparator == null) dart.throw(new core.ArgumentError.new("comparator can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_mutable_extension_mixin.dart", 49, 12, "() {if (comparator == null) throw ArgumentError(\"comparator can't be null\"); return true;}()");
        this.list[$sort](comparator);
      }
      swap(indexA, indexB) {
        let firstOld = this.get(indexA);
        let secondOld = this.set(indexB, firstOld);
        this.set(indexA, secondOld);
      }
    }
    (KtMutableListExtensionsMixin.new = function() {
    }).prototype = KtMutableListExtensionsMixin.prototype;
    dart.addTypeTests(KtMutableListExtensionsMixin);
    KtMutableListExtensionsMixin.prototype[_is_KtMutableListExtensionsMixin_default] = true;
    KtMutableListExtensionsMixin[dart.implements] = () => [KtMutableListExtensionOfT(), KtMutableListOfT()];
    dart.setMethodSignature(KtMutableListExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtMutableListExtensionsMixin.__proto__),
      fill: dart.fnType(dart.void, [core.Object]),
      reverse: dart.fnType(dart.void, []),
      sortBy: dart.gFnType(R => [dart.void, [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      sortByDescending: dart.gFnType(R => [dart.void, [dart.fnType(R, [T])]], R => [core.Comparable$(R)]),
      sortWith: dart.fnType(dart.void, [dart.fnType(core.int, [T, T])]),
      swap: dart.fnType(dart.void, [core.int, core.int])
    }));
    dart.setLibraryUri(KtMutableListExtensionsMixin, "package:kt_dart/src/collection/extension/list_mutable_extension_mixin.dart");
    return KtMutableListExtensionsMixin;
  });
  src__collection__extension__list_mutable_extension_mixin.KtMutableListExtensionsMixin = src__collection__extension__list_mutable_extension_mixin.KtMutableListExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__list_mutable_extension_mixin.KtMutableListExtensionsMixin, _is_KtMutableListExtensionsMixin_default);
  const _is_KtMutableCollectionExtensionMixin_default = Symbol('_is_KtMutableCollectionExtensionMixin_default');
  src__collection__extension__collection_mutable_extension_mixin.KtMutableCollectionExtensionMixin$ = dart.generic(T => {
    let KtMutableCollectionExtensionOfT = () => (KtMutableCollectionExtensionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollectionExtension$(T)))();
    let KtMutableCollectionOfT = () => (KtMutableCollectionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollection$(T)))();
    class KtMutableCollectionExtensionMixin extends core.Object {}
    (KtMutableCollectionExtensionMixin.new = function() {
    }).prototype = KtMutableCollectionExtensionMixin.prototype;
    dart.addTypeTests(KtMutableCollectionExtensionMixin);
    KtMutableCollectionExtensionMixin.prototype[_is_KtMutableCollectionExtensionMixin_default] = true;
    KtMutableCollectionExtensionMixin[dart.implements] = () => [KtMutableCollectionExtensionOfT(), KtMutableCollectionOfT()];
    dart.setLibraryUri(KtMutableCollectionExtensionMixin, "package:kt_dart/src/collection/extension/collection_mutable_extension_mixin.dart");
    return KtMutableCollectionExtensionMixin;
  });
  src__collection__extension__collection_mutable_extension_mixin.KtMutableCollectionExtensionMixin = src__collection__extension__collection_mutable_extension_mixin.KtMutableCollectionExtensionMixin$();
  dart.addTypeTests(src__collection__extension__collection_mutable_extension_mixin.KtMutableCollectionExtensionMixin, _is_KtMutableCollectionExtensionMixin_default);
  let const$15;
  const _list = dart.privateName(src__collection__impl__list_mutable, "_list");
  const _is_KtListExtensionsMixin_default = Symbol('_is_KtListExtensionsMixin_default');
  src__collection__extension__list_extension_mixin.KtListExtensionsMixin$ = dart.generic(T => {
    let intToT = () => (intToT = dart.constFn(dart.fnType(T, [core.int])))();
    let KtListExtensionOfT = () => (KtListExtensionOfT = dart.constFn(src__collection__kt_list.KtListExtension$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    class KtListExtensionsMixin extends core.Object {
      dropLast(n) {
        if (!dart.test(dart.fn(() => {
          if (n == null) dart.throw(new core.ArgumentError.new("n can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 7, 12, "() {if (n == null) throw ArgumentError(\"n can't be null\"); return true;}()");
        let count = dart.notNull(this.size) - dart.notNull(n);
        if (count < 0) {
          count = 0;
        }
        return this.take(count);
      }
      dropLastWhile(predicate) {
        if (!dart.test(dart.fn(() => {
          if (predicate == null) dart.throw(new core.ArgumentError.new("predicate can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 20, 12, "() {if (predicate == null) throw ArgumentError(\"predicate can't be null\"); return true;}()");
        if (!dart.test(this.isEmpty())) {
          let i = this.listIterator(this.size);
          while (dart.test(i.hasPrevious())) {
            if (!dart.test(predicate(i.previous()))) {
              return this.take(dart.notNull(i.nextIndex()) + 1);
            }
          }
        }
        return src__collection__collections.emptyList(T);
      }
      elementAt(index) {
        return this.get(index);
      }
      elementAtOrElse(index, defaultValue) {
        intToT()._check(defaultValue);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          if (defaultValue == null) dart.throw(new core.ArgumentError.new("defaultValue function can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 40, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); if (defaultValue == null) throw ArgumentError(\"defaultValue function can't be null\"); return true;}()");
        return dart.notNull(index) >= 0 && dart.notNull(index) <= dart.notNull(this.lastIndex) ? this.get(index) : defaultValue(index);
      }
      elementAtOrNull(index) {
        return this.getOrNull(index);
      }
      first(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (dart.test(this.isEmpty())) dart.throw(new src__exception__exceptions.NoSuchElementException.new("List is empty."));
          return this.get(0);
        } else {
          for (let element of this.iter) {
            if (dart.test(predicate(element))) return element;
          }
          dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
        }
      }
      foldRight(R, initial, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 68, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        if (dart.test(this.isEmpty())) return initial;
        let accumulator = initial;
        let i = this.listIterator(this.size);
        while (dart.test(i.hasPrevious())) {
          accumulator = operation(i.previous(), accumulator);
        }
        return accumulator;
      }
      foldRightIndexed(R, initial, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 84, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        if (dart.test(this.isEmpty())) return initial;
        let accumulator = initial;
        let i = this.listIterator(this.size);
        while (dart.test(i.hasPrevious())) {
          accumulator = operation(i.previousIndex(), i.previous(), accumulator);
        }
        return accumulator;
      }
      getOrElse(index, defaultValue) {
        intToT()._check(defaultValue);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          if (defaultValue == null) dart.throw(new core.ArgumentError.new("defaultValue function can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 100, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); if (defaultValue == null) throw ArgumentError(\"defaultValue function can't be null\"); return true;}()");
        return dart.notNull(index) >= 0 && dart.notNull(index) <= dart.notNull(this.lastIndex) ? this.get(index) : defaultValue(index);
      }
      getOrNull(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 113, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        return dart.notNull(index) >= 0 && dart.notNull(index) <= dart.notNull(this.lastIndex) ? this.get(index) : null;
      }
      last(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (dart.test(this.isEmpty())) dart.throw(new src__exception__exceptions.NoSuchElementException.new("List is empty."));
          return this.get(this.lastIndex);
        } else {
          let i = this.listIterator(this.size);
          if (!dart.test(i.hasPrevious())) {
            dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection is empty"));
          }
          while (dart.test(i.hasPrevious())) {
            let element = i.previous();
            if (dart.test(predicate(element))) {
              return element;
            }
          }
          dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
        }
      }
      get lastIndex() {
        return dart.notNull(this.size) - 1;
      }
      reduceRight(S, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 146, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let i = this.listIterator(this.size);
        if (!dart.test(i.hasPrevious())) {
          dart.throw(new core.UnimplementedError.new("Empty list can't be reduced."));
        }
        let accumulator = S.as(i.previous());
        while (dart.test(i.hasPrevious())) {
          accumulator = operation(i.previous(), accumulator);
        }
        return accumulator;
      }
      reduceRightIndexed(S, operation) {
        if (!dart.test(dart.fn(() => {
          if (operation == null) dart.throw(new core.ArgumentError.new("operation can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 163, 12, "() {if (operation == null) throw ArgumentError(\"operation can't be null\"); return true;}()");
        let i = this.listIterator(this.size);
        if (!dart.test(i.hasPrevious())) {
          dart.throw(new core.UnimplementedError.new("Empty list can't be reduced."));
        }
        let accumulator = S.as(i.previous());
        while (dart.test(i.hasPrevious())) {
          accumulator = operation(i.previousIndex(), i.previous(), accumulator);
        }
        return accumulator;
      }
      single(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          switch (this.size) {
            case 0:
            {
              dart.throw(new src__exception__exceptions.NoSuchElementException.new("List is empty"));
            }
            case 1:
            {
              return this.get(0);
            }
            default:
            {
              dart.throw(new core.ArgumentError.new("List has more than one element."));
            }
          }
        } else {
          let single = null;
          let found = false;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              if (found) dart.throw(new core.ArgumentError.new("Collection contains more than one matching element."));
              single = element;
              found = true;
            }
          }
          if (!found) {
            dart.throw(new src__exception__exceptions.NoSuchElementException.new("Collection contains no element matching the predicate."));
          }
          return single;
        }
      }
      singleOrNull(predicate) {
        if (predicate === void 0) predicate = null;
        if (predicate == null) {
          if (this.size === 1) {
            return this.get(0);
          } else {
            return null;
          }
        } else {
          let single = null;
          let found = false;
          for (let element of this.iter) {
            if (dart.test(predicate(element))) {
              if (found) return null;
              single = element;
              found = true;
            }
          }
          if (!found) return null;
          return single;
        }
      }
      slice(indices) {
        if (!dart.test(dart.fn(() => {
          if (indices == null) dart.throw(new core.ArgumentError.new("indices can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/extension/list_extension_mixin.dart", 234, 12, "() {if (indices == null) throw ArgumentError(\"indices can't be null\"); return true;}()");
        if (indices.count() === 0) {
          return src__collection__collections.emptyList(T);
        }
        let list = src__collection__collections.mutableListOf(T);
        for (let index of indices.iter) {
          list.add(this.get(index));
        }
        return list;
      }
    }
    (KtListExtensionsMixin.new = function() {
    }).prototype = KtListExtensionsMixin.prototype;
    dart.addTypeTests(KtListExtensionsMixin);
    KtListExtensionsMixin.prototype[_is_KtListExtensionsMixin_default] = true;
    KtListExtensionsMixin[dart.implements] = () => [KtListExtensionOfT(), KtListOfT()];
    dart.setMethodSignature(KtListExtensionsMixin, () => ({
      __proto__: dart.getMethods(KtListExtensionsMixin.__proto__),
      dropLast: dart.fnType(src__collection__kt_list.KtList$(T), [core.int]),
      dropLastWhile: dart.fnType(src__collection__kt_list.KtList$(T), [dart.fnType(core.bool, [T])]),
      elementAt: dart.fnType(T, [core.int]),
      elementAtOrElse: dart.fnType(T, [core.int, core.Object]),
      elementAtOrNull: dart.fnType(T, [core.int]),
      first: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      foldRight: dart.gFnType(R => [R, [R, dart.fnType(R, [T, R])]]),
      foldRightIndexed: dart.gFnType(R => [R, [R, dart.fnType(R, [core.int, T, R])]]),
      getOrElse: dart.fnType(T, [core.int, core.Object]),
      getOrNull: dart.fnType(T, [core.int]),
      last: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      reduceRight: dart.gFnType(S => [S, [dart.fnType(S, [T, S])]]),
      reduceRightIndexed: dart.gFnType(S => [S, [dart.fnType(S, [core.int, T, S])]]),
      single: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      singleOrNull: dart.fnType(T, [], [dart.fnType(core.bool, [T])]),
      slice: dart.fnType(src__collection__kt_list.KtList$(T), [src__collection__kt_iterable.KtIterable$(core.int)])
    }));
    dart.setGetterSignature(KtListExtensionsMixin, () => ({
      __proto__: dart.getGetters(KtListExtensionsMixin.__proto__),
      lastIndex: core.int
    }));
    dart.setLibraryUri(KtListExtensionsMixin, "package:kt_dart/src/collection/extension/list_extension_mixin.dart");
    return KtListExtensionsMixin;
  });
  src__collection__extension__list_extension_mixin.KtListExtensionsMixin = src__collection__extension__list_extension_mixin.KtListExtensionsMixin$();
  dart.addTypeTests(src__collection__extension__list_extension_mixin.KtListExtensionsMixin, _is_KtListExtensionsMixin_default);
  const _is_DartMutableList_default = Symbol('_is_DartMutableList_default');
  src__collection__impl__list_mutable.DartMutableList$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let InterOpKtListIteratorOfT = () => (InterOpKtListIteratorOfT = dart.constFn(src__collection__impl__iterator.InterOpKtListIterator$(T)))();
    let KtIterableOfT = () => (KtIterableOfT = dart.constFn(src__collection__kt_iterable.KtIterable$(T)))();
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    let DartMutableListOfT = () => (DartMutableListOfT = dart.constFn(src__collection__impl__list_mutable.DartMutableList$(T)))();
    let KtMutableListOfT = () => (KtMutableListOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableList$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    const Object_KtMutableIterableExtensionsMixin$ = class Object_KtMutableIterableExtensionsMixin extends Object_KtCollectionExtensionMixin$ {};
    (Object_KtMutableIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtMutableIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMutableIterableExtensionsMixin$, src__collection__extension__iterable_mutable_extension_mixin.KtMutableIterableExtensionsMixin$(T));
    const Object_KtMutableCollectionExtensionMixin$ = class Object_KtMutableCollectionExtensionMixin extends Object_KtMutableIterableExtensionsMixin$ {};
    (Object_KtMutableCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtMutableCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtMutableCollectionExtensionMixin$, src__collection__extension__collection_mutable_extension_mixin.KtMutableCollectionExtensionMixin$(T));
    const Object_KtListExtensionsMixin$ = class Object_KtListExtensionsMixin extends Object_KtMutableCollectionExtensionMixin$ {};
    (Object_KtListExtensionsMixin$.new = function() {
    }).prototype = Object_KtListExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtListExtensionsMixin$, src__collection__extension__list_extension_mixin.KtListExtensionsMixin$(T));
    const Object_KtMutableListExtensionsMixin$ = class Object_KtMutableListExtensionsMixin extends Object_KtListExtensionsMixin$ {};
    (Object_KtMutableListExtensionsMixin$.new = function() {
    }).prototype = Object_KtMutableListExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtMutableListExtensionsMixin$, src__collection__extension__list_mutable_extension_mixin.KtMutableListExtensionsMixin$(T));
    class DartMutableList extends Object_KtMutableListExtensionsMixin$ {
      get iter() {
        return this[_list];
      }
      get list() {
        return this[_list];
      }
      contains(element) {
        T._check(element);
        return this[_list][$contains](element);
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 42, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.all(dart.bind(this[_list], $contains));
      }
      get(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 51, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("List doesn't contain element at index: " + dart.str(index) + ", size: " + dart.str(this.size)));
        }
        return this[_list][$_get](index);
      }
      _get(index) {
        return this.get(index);
      }
      indexOf(element) {
        T._check(element);
        return this[_list][$indexOf](element);
      }
      isEmpty() {
        return this[_list][$isEmpty];
      }
      iterator() {
        return new (InterOpKtListIteratorOfT()).new(this[_list], 0);
      }
      lastIndexOf(element) {
        T._check(element);
        return this[_list][$lastIndexOf](element);
      }
      listIterator(index) {
        if (index === void 0) index = 0;
        if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
        return new (InterOpKtListIteratorOfT()).new(this[_list], index);
      }
      get size() {
        return this[_list][$length];
      }
      add(element) {
        T._check(element);
        this[_list][$add](element);
        return true;
      }
      addAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 94, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        this[_list][$addAll](elements.iter);
        return true;
      }
      addAllAt(index, elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 104, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        this[_list][$insertAll](index, elements.iter);
        return true;
      }
      addAt(index, element) {
        T._check(element);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 115, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        this[_list][$insert](index, element);
      }
      clear() {
        return this[_list][$clear]();
      }
      remove(element) {
        T._check(element);
        return this[_list][$remove](element);
      }
      removeAt(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 130, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("index: " + dart.str(index) + ", size: " + dart.str(this.size)));
        }
        return this[_list][$removeAt](index);
      }
      set(index, element) {
        T._check(element);
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 142, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        let old = this[_list][$_get](index);
        this[_list][$_set](index, element);
        return old;
      }
      _set(index, element) {
        T._check(element);
        return this.set(index, element);
      }
      removeAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 156, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        let changed = false;
        for (let value of elements.iter) {
          changed = !!(changed | dart.test(this[_list][$remove](value)));
        }
        return changed;
      }
      retainAll(elements) {
        KtIterableOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 169, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        this[_list][$removeWhere](dart.fn(it => !dart.test(elements.contains(it)), TTobool()));
        return true;
      }
      subList(fromIndex, toIndex) {
        if (!dart.test(dart.fn(() => {
          if (fromIndex == null) dart.throw(new core.ArgumentError.new("fromIndex can't be null"));
          if (toIndex == null) dart.throw(new core.ArgumentError.new("toIndex can't be null"));
          if (dart.notNull(fromIndex) > dart.notNull(toIndex)) {
            dart.throw(new core.ArgumentError.new("fromIndex: " + dart.str(fromIndex) + " > toIndex: " + dart.str(toIndex)));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_mutable.dart", 179, 12, "() {if (fromIndex == null) throw ArgumentError(\"fromIndex can't be null\"); if (toIndex == null) throw ArgumentError(\"toIndex can't be null\"); if (fromIndex > toIndex) {throw ArgumentError(\"fromIndex: $fromIndex > toIndex: $toIndex\");} return true;}()");
        if (dart.notNull(fromIndex) < 0 || dart.notNull(toIndex) > dart.notNull(this.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("fromIndex: " + dart.str(fromIndex) + ", toIndex: " + dart.str(toIndex) + ", size: " + dart.str(this.size)));
        }
        return new (DartMutableListOfT()).new(this[_list][$sublist](fromIndex, toIndex));
      }
      get hashCode() {
        return 1 + dart.notNull(src__util__hash.hashObjects(T, this[_list]));
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_list.KtList.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.size; ++i) {
          if (!dart.equals(dart.dindex(other, i), this._get(i))) return false;
        }
        return true;
      }
    }
    (DartMutableList.new = function(iterable) {
      if (iterable === void 0) iterable = const$15 || (const$15 = dart.constList([], core.Null));
      this[_list] = ListOfT().from(iterable, {growable: true});
    }).prototype = DartMutableList.prototype;
    dart.addTypeTests(DartMutableList);
    DartMutableList.prototype[_is_DartMutableList_default] = true;
    DartMutableList[dart.implements] = () => [KtMutableListOfT()];
    dart.setMethodSignature(DartMutableList, () => ({
      __proto__: dart.getMethods(DartMutableList.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(T, [core.int]),
      _get: dart.fnType(T, [core.int]),
      indexOf: dart.fnType(core.int, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator_mutable.KtMutableIterator$(T), []),
      lastIndexOf: dart.fnType(core.int, [core.Object]),
      listIterator: dart.fnType(src__collection__kt_iterator_mutable.KtMutableListIterator$(T), [], [core.int]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(core.bool, [core.Object]),
      addAllAt: dart.fnType(core.bool, [core.int, core.Object]),
      addAt: dart.fnType(dart.void, [core.int, core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(T, [core.int]),
      set: dart.fnType(T, [core.int, core.Object]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      removeAll: dart.fnType(core.bool, [core.Object]),
      retainAll: dart.fnType(core.bool, [core.Object]),
      subList: dart.fnType(src__collection__kt_list_mutable.KtMutableList$(T), [core.int, core.int]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(DartMutableList, () => ({
      __proto__: dart.getGetters(DartMutableList.__proto__),
      iter: core.Iterable$(T),
      list: core.List$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartMutableList, "package:kt_dart/src/collection/impl/list_mutable.dart");
    dart.setFieldSignature(DartMutableList, () => ({
      __proto__: dart.getFields(DartMutableList.__proto__),
      [_list]: dart.finalFieldType(ListOfT())
    }));
    dart.defineExtensionMethods(DartMutableList, ['_equals']);
    dart.defineExtensionAccessors(DartMutableList, ['hashCode']);
    return DartMutableList;
  });
  src__collection__impl__list_mutable.DartMutableList = src__collection__impl__list_mutable.DartMutableList$();
  dart.addTypeTests(src__collection__impl__list_mutable.DartMutableList, _is_DartMutableList_default);
  let const$16;
  const _is_KtMutableList_default = Symbol('_is_KtMutableList_default');
  src__collection__kt_list_mutable.KtMutableList$ = dart.generic(T => {
    let DartMutableListOfT = () => (DartMutableListOfT = dart.constFn(src__collection__impl__list_mutable.DartMutableList$(T)))();
    let KtMutableListOfT = () => (KtMutableListOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableList$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    let KtMutableCollectionOfT = () => (KtMutableCollectionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollection$(T)))();
    let KtMutableListExtensionOfT = () => (KtMutableListExtensionOfT = dart.constFn(src__collection__kt_list_mutable.KtMutableListExtension$(T)))();
    class KtMutableList extends core.Object {
      static empty() {
        return new (DartMutableListOfT()).new();
      }
      static from(elements) {
        if (elements === void 0) elements = const$16 || (const$16 = dart.constList([], core.Null));
        if (dart.test(elements[$isEmpty])) return new (DartMutableListOfT()).new();
        return new (DartMutableListOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtMutableListOfT().from(args);
      }
    }
    (KtMutableList[dart.mixinNew] = function() {
    }).prototype = KtMutableList.prototype;
    dart.addTypeTests(KtMutableList);
    KtMutableList.prototype[_is_KtMutableList_default] = true;
    KtMutableList[dart.implements] = () => [KtListOfT(), KtMutableCollectionOfT(), KtMutableListExtensionOfT()];
    dart.setLibraryUri(KtMutableList, "package:kt_dart/src/collection/kt_list_mutable.dart");
    return KtMutableList;
  });
  src__collection__kt_list_mutable.KtMutableList = src__collection__kt_list_mutable.KtMutableList$();
  dart.addTypeTests(src__collection__kt_list_mutable.KtMutableList, _is_KtMutableList_default);
  const _is_KtMutableListExtension_default = Symbol('_is_KtMutableListExtension_default');
  src__collection__kt_list_mutable.KtMutableListExtension$ = dart.generic(T => {
    class KtMutableListExtension extends core.Object {}
    (KtMutableListExtension.new = function() {
    }).prototype = KtMutableListExtension.prototype;
    dart.addTypeTests(KtMutableListExtension);
    KtMutableListExtension.prototype[_is_KtMutableListExtension_default] = true;
    dart.setLibraryUri(KtMutableListExtension, "package:kt_dart/src/collection/kt_list_mutable.dart");
    return KtMutableListExtension;
  });
  src__collection__kt_list_mutable.KtMutableListExtension = src__collection__kt_list_mutable.KtMutableListExtension$();
  dart.addTypeTests(src__collection__kt_list_mutable.KtMutableListExtension, _is_KtMutableListExtension_default);
  const _is_EmptyList_default = Symbol('_is_EmptyList_default');
  src__collection__impl__list_empty.EmptyList$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let _EmptyIteratorOfT = () => (_EmptyIteratorOfT = dart.constFn(src__collection__impl__list_empty._EmptyIterator$(T)))();
    let EmptyDartIterableOfT = () => (EmptyDartIterableOfT = dart.constFn(src__collection__impl__dart_iterable.EmptyDartIterable$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    const Object_KtListExtensionsMixin$ = class Object_KtListExtensionsMixin extends Object_KtCollectionExtensionMixin$ {};
    (Object_KtListExtensionsMixin$.new = function() {
    }).prototype = Object_KtListExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtListExtensionsMixin$, src__collection__extension__list_extension_mixin.KtListExtensionsMixin$(T));
    class EmptyList extends Object_KtListExtensionsMixin$ {
      get list() {
        return JSArrayOfT().of([]);
      }
      contains(element) {
        T._check(element);
        return false;
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_empty.dart", 21, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.isEmpty();
      }
      get(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_empty.dart", 30, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("Empty list doesn't contain element at index: " + dart.str(index) + "."));
      }
      _get(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_empty.dart", 40, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("Empty list doesn't contain element at index: " + dart.str(index) + "."));
      }
      indexOf(element) {
        T._check(element);
        return -1;
      }
      isEmpty() {
        return true;
      }
      iterator() {
        return new (_EmptyIteratorOfT()).new();
      }
      lastIndexOf(element) {
        T._check(element);
        return -1;
      }
      listIterator(index) {
        if (index === void 0) index = 0;
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_empty.dart", 62, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        return new (_EmptyIteratorOfT()).new();
      }
      get size() {
        return 0;
      }
      subList(fromIndex, toIndex) {
        if (!dart.test(dart.fn(() => {
          if (fromIndex == null) dart.throw(new core.ArgumentError.new("fromIndex can't be null"));
          if (toIndex == null) dart.throw(new core.ArgumentError.new("toIndex can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list_empty.dart", 74, 12, "() {if (fromIndex == null) throw ArgumentError(\"fromIndex can't be null\"); if (toIndex == null) throw ArgumentError(\"toIndex can't be null\"); return true;}()");
        if (fromIndex === 0 && toIndex === 0) return this;
        dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("fromIndex: " + dart.str(fromIndex) + ", toIndex: " + dart.str(toIndex) + ", size: " + dart.str(this.size)));
      }
      toString() {
        return "[]";
      }
      get hashCode() {
        return 1;
      }
      _equals(other) {
        if (other == null) return false;
        return src__collection__kt_list.KtList.is(other) && dart.test(other.isEmpty());
      }
      get iter() {
        return new (EmptyDartIterableOfT()).new();
      }
    }
    (EmptyList.new = function() {
    }).prototype = EmptyList.prototype;
    dart.addTypeTests(EmptyList);
    EmptyList.prototype[_is_EmptyList_default] = true;
    EmptyList[dart.implements] = () => [KtListOfT()];
    dart.setMethodSignature(EmptyList, () => ({
      __proto__: dart.getMethods(EmptyList.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(T, [core.int]),
      _get: dart.fnType(T, [core.int]),
      indexOf: dart.fnType(core.int, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator.KtIterator$(T), []),
      lastIndexOf: dart.fnType(core.int, [core.Object]),
      listIterator: dart.fnType(src__collection__kt_iterator.KtListIterator$(T), [], [core.int]),
      subList: dart.fnType(src__collection__kt_list.KtList$(T), [core.int, core.int]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(EmptyList, () => ({
      __proto__: dart.getGetters(EmptyList.__proto__),
      list: core.List$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int,
      iter: core.Iterable$(T)
    }));
    dart.setLibraryUri(EmptyList, "package:kt_dart/src/collection/impl/list_empty.dart");
    dart.defineExtensionMethods(EmptyList, ['toString', '_equals']);
    dart.defineExtensionAccessors(EmptyList, ['hashCode']);
    return EmptyList;
  });
  src__collection__impl__list_empty.EmptyList = src__collection__impl__list_empty.EmptyList$();
  dart.addTypeTests(src__collection__impl__list_empty.EmptyList, _is_EmptyList_default);
  const _is_KtListIterator_default = Symbol('_is_KtListIterator_default');
  src__collection__kt_iterator.KtListIterator$ = dart.generic(T => {
    let KtIteratorOfT = () => (KtIteratorOfT = dart.constFn(src__collection__kt_iterator.KtIterator$(T)))();
    class KtListIterator extends core.Object {}
    (KtListIterator.new = function() {
    }).prototype = KtListIterator.prototype;
    dart.addTypeTests(KtListIterator);
    KtListIterator.prototype[_is_KtListIterator_default] = true;
    KtListIterator[dart.implements] = () => [KtIteratorOfT()];
    dart.setLibraryUri(KtListIterator, "package:kt_dart/src/collection/kt_iterator.dart");
    return KtListIterator;
  });
  src__collection__kt_iterator.KtListIterator = src__collection__kt_iterator.KtListIterator$();
  dart.addTypeTests(src__collection__kt_iterator.KtListIterator, _is_KtListIterator_default);
  const _is__EmptyIterator_default$ = Symbol('_is__EmptyIterator_default');
  src__collection__impl__list_empty._EmptyIterator$ = dart.generic(T => {
    class _EmptyIterator extends src__collection__kt_iterator.KtListIterator$(T) {
      hasNext() {
        return false;
      }
      hasPrevious() {
        return false;
      }
      next() {
        dart.throw(new src__exception__exceptions.NoSuchElementException.new());
      }
      nextIndex() {
        return 0;
      }
      previous() {
        dart.throw(new src__exception__exceptions.NoSuchElementException.new());
      }
      previousIndex() {
        return -1;
      }
    }
    (_EmptyIterator.new = function() {
    }).prototype = _EmptyIterator.prototype;
    dart.addTypeTests(_EmptyIterator);
    _EmptyIterator.prototype[_is__EmptyIterator_default$] = true;
    dart.setMethodSignature(_EmptyIterator, () => ({
      __proto__: dart.getMethods(_EmptyIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      hasPrevious: dart.fnType(core.bool, []),
      next: dart.fnType(T, []),
      nextIndex: dart.fnType(core.int, []),
      previous: dart.fnType(T, []),
      previousIndex: dart.fnType(core.int, [])
    }));
    dart.setLibraryUri(_EmptyIterator, "package:kt_dart/src/collection/impl/list_empty.dart");
    return _EmptyIterator;
  });
  src__collection__impl__list_empty._EmptyIterator = src__collection__impl__list_empty._EmptyIterator$();
  dart.addTypeTests(src__collection__impl__list_empty._EmptyIterator, _is__EmptyIterator_default$);
  const _hasNext$0 = dart.privateName(src__collection__impl__iterator, "_hasNext");
  const _is_InterOpKIterator_default = Symbol('_is_InterOpKIterator_default');
  src__collection__impl__iterator.InterOpKIterator$ = dart.generic(T => {
    let KtIteratorOfT = () => (KtIteratorOfT = dart.constFn(src__collection__kt_iterator.KtIterator$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    class InterOpKIterator extends core.Object {
      get iterator() {
        return this[iterator$];
      }
      set iterator(value) {
        super.iterator = value;
      }
      get nextValue() {
        return this[nextValue];
      }
      set nextValue(value) {
        this[nextValue] = T._check(value);
      }
      get lastReturned() {
        return this[lastReturned];
      }
      set lastReturned(value) {
        this[lastReturned] = T._check(value);
      }
      hasNext() {
        return this[_hasNext$0];
      }
      next() {
        if (!dart.test(this[_hasNext$0])) dart.throw(new src__exception__exceptions.NoSuchElementException.new());
        let e = this.nextValue;
        this[_hasNext$0] = this.iterator.moveNext();
        this.nextValue = this.iterator.current;
        this.lastReturned = e;
        return e;
      }
    }
    (InterOpKIterator.new = function(iterator) {
      this[nextValue] = null;
      this[lastReturned] = null;
      this[_hasNext$0] = false;
      this[iterator$] = iterator;
      this.lastReturned = null;
      this[_hasNext$0] = this.iterator.moveNext();
      this.nextValue = this.iterator.current;
    }).prototype = InterOpKIterator.prototype;
    dart.addTypeTests(InterOpKIterator);
    InterOpKIterator.prototype[_is_InterOpKIterator_default] = true;
    const iterator$ = Symbol("InterOpKIterator.iterator");
    const nextValue = Symbol("InterOpKIterator.nextValue");
    const lastReturned = Symbol("InterOpKIterator.lastReturned");
    InterOpKIterator[dart.implements] = () => [KtIteratorOfT()];
    dart.setMethodSignature(InterOpKIterator, () => ({
      __proto__: dart.getMethods(InterOpKIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      next: dart.fnType(T, [])
    }));
    dart.setLibraryUri(InterOpKIterator, "package:kt_dart/src/collection/impl/iterator.dart");
    dart.setFieldSignature(InterOpKIterator, () => ({
      __proto__: dart.getFields(InterOpKIterator.__proto__),
      iterator: dart.finalFieldType(IteratorOfT()),
      nextValue: dart.fieldType(T),
      lastReturned: dart.fieldType(T),
      [_hasNext$0]: dart.fieldType(core.bool)
    }));
    return InterOpKIterator;
  });
  src__collection__impl__iterator.InterOpKIterator = src__collection__impl__iterator.InterOpKIterator$();
  dart.addTypeTests(src__collection__impl__iterator.InterOpKIterator, _is_InterOpKIterator_default);
  const _is_InterOpKtListIterator_default = Symbol('_is_InterOpKtListIterator_default');
  src__collection__impl__iterator.InterOpKtListIterator$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let KtListIteratorOfT = () => (KtListIteratorOfT = dart.constFn(src__collection__kt_iterator.KtListIterator$(T)))();
    let KtMutableListIteratorOfT = () => (KtMutableListIteratorOfT = dart.constFn(src__collection__kt_iterator_mutable.KtMutableListIterator$(T)))();
    class InterOpKtListIterator extends core.Object {
      get cursor() {
        return this[cursor];
      }
      set cursor(value) {
        this[cursor] = value;
      }
      get lastRet() {
        return this[lastRet];
      }
      set lastRet(value) {
        this[lastRet] = value;
      }
      get list() {
        return this[list$];
      }
      set list(value) {
        this[list$] = ListOfT()._check(value);
      }
      hasNext() {
        return this.cursor != this.list[$length];
      }
      next() {
        let i = this.cursor;
        if (dart.notNull(i) >= dart.notNull(this.list[$length])) dart.throw(new src__exception__exceptions.NoSuchElementException.new());
        this.cursor = dart.notNull(i) + 1;
        return this.list[$_get](this.lastRet = i);
      }
      remove() {
        dart.throw(new core.UnimplementedError.new("remove() in not yet implemented. Please vote for https://github.com/passsy/dart_kollection/issues/5 for prioritization"));
      }
      hasPrevious() {
        return this.cursor !== 0;
      }
      nextIndex() {
        return dart.notNull(this.cursor) + 1 > dart.notNull(this.list[$length]) ? this.list[$length] : dart.notNull(this.cursor) + 1;
      }
      previous() {
        if (!dart.test(this.hasPrevious())) dart.throw(new src__exception__exceptions.NoSuchElementException.new());
        return this.list[$_get](this.cursor = dart.notNull(this.cursor) - 1);
      }
      previousIndex() {
        return dart.notNull(this.cursor) - 1;
      }
      add(element) {
        T._check(element);
        let i = this.cursor;
        this.list[$insert](i, element);
        this.lastRet = -1;
        this.cursor = dart.notNull(i) + 1;
      }
      set(element) {
        T._check(element);
        if (dart.notNull(this.lastRet) < 0) dart.throw("illegal cursor state -1. next() or previous() not called");
        this.list[$replaceRange](this.lastRet, dart.notNull(this.lastRet) + 1, JSArrayOfT().of([element]));
      }
    }
    (InterOpKtListIterator.new = function(list, index) {
      this[lastRet] = -1;
      this[list$] = list;
      this[cursor] = index;
      if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.list[$length])) {
        dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("index: " + dart.str(index) + ", size: " + dart.str(this.list) + ".length"));
      }
    }).prototype = InterOpKtListIterator.prototype;
    dart.addTypeTests(InterOpKtListIterator);
    InterOpKtListIterator.prototype[_is_InterOpKtListIterator_default] = true;
    const cursor = Symbol("InterOpKtListIterator.cursor");
    const lastRet = Symbol("InterOpKtListIterator.lastRet");
    const list$ = Symbol("InterOpKtListIterator.list");
    InterOpKtListIterator[dart.implements] = () => [KtListIteratorOfT(), KtMutableListIteratorOfT()];
    dart.setMethodSignature(InterOpKtListIterator, () => ({
      __proto__: dart.getMethods(InterOpKtListIterator.__proto__),
      hasNext: dart.fnType(core.bool, []),
      next: dart.fnType(T, []),
      remove: dart.fnType(dart.void, []),
      hasPrevious: dart.fnType(core.bool, []),
      nextIndex: dart.fnType(core.int, []),
      previous: dart.fnType(T, []),
      previousIndex: dart.fnType(core.int, []),
      add: dart.fnType(dart.void, [core.Object]),
      set: dart.fnType(dart.void, [core.Object])
    }));
    dart.setLibraryUri(InterOpKtListIterator, "package:kt_dart/src/collection/impl/iterator.dart");
    dart.setFieldSignature(InterOpKtListIterator, () => ({
      __proto__: dart.getFields(InterOpKtListIterator.__proto__),
      cursor: dart.fieldType(core.int),
      lastRet: dart.fieldType(core.int),
      list: dart.fieldType(ListOfT())
    }));
    return InterOpKtListIterator;
  });
  src__collection__impl__iterator.InterOpKtListIterator = src__collection__impl__iterator.InterOpKtListIterator$();
  dart.addTypeTests(src__collection__impl__iterator.InterOpKtListIterator, _is_InterOpKtListIterator_default);
  const _fromIndex = dart.privateName(src__collection__extension__iterable_extension_mixin, "_fromIndex");
  const _size = dart.privateName(src__collection__extension__iterable_extension_mixin, "_size");
  const _is__MovingSubList_default = Symbol('_is__MovingSubList_default');
  src__collection__extension__iterable_extension_mixin._MovingSubList$ = dart.generic(T => {
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    class _MovingSubList extends core.Object {
      move(fromIndex, toIndex) {
        if (dart.notNull(fromIndex) < 0 || dart.notNull(toIndex) > dart.notNull(this.list.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("fromIndex: " + dart.str(fromIndex) + ", toIndex: " + dart.str(toIndex) + ", size: " + dart.str(this.list.size)));
        }
        if (dart.notNull(fromIndex) > dart.notNull(toIndex)) {
          dart.throw(new core.ArgumentError.new("fromIndex: " + dart.str(fromIndex) + " > toIndex: " + dart.str(toIndex)));
        }
        this[_fromIndex] = fromIndex;
        this[_size] = dart.notNull(toIndex) - dart.notNull(fromIndex);
      }
      snapshot() {
        return this.list.subList(this[_fromIndex], dart.notNull(this[_fromIndex]) + dart.notNull(this[_size]));
      }
      get size() {
        return this[_size];
      }
    }
    (_MovingSubList.new = function(list) {
      this[_fromIndex] = 0;
      this[_size] = 0;
      this.list = list;
    }).prototype = _MovingSubList.prototype;
    dart.addTypeTests(_MovingSubList);
    _MovingSubList.prototype[_is__MovingSubList_default] = true;
    dart.setMethodSignature(_MovingSubList, () => ({
      __proto__: dart.getMethods(_MovingSubList.__proto__),
      move: dart.fnType(dart.void, [core.int, core.int]),
      snapshot: dart.fnType(src__collection__kt_list.KtList$(T), [])
    }));
    dart.setGetterSignature(_MovingSubList, () => ({
      __proto__: dart.getGetters(_MovingSubList.__proto__),
      size: core.int
    }));
    dart.setLibraryUri(_MovingSubList, "package:kt_dart/src/collection/extension/iterable_extension_mixin.dart");
    dart.setFieldSignature(_MovingSubList, () => ({
      __proto__: dart.getFields(_MovingSubList.__proto__),
      list: dart.fieldType(KtListOfT()),
      [_fromIndex]: dart.fieldType(core.int),
      [_size]: dart.fieldType(core.int)
    }));
    return _MovingSubList;
  });
  src__collection__extension__iterable_extension_mixin._MovingSubList = src__collection__extension__iterable_extension_mixin._MovingSubList$();
  dart.addTypeTests(src__collection__extension__iterable_extension_mixin._MovingSubList, _is__MovingSubList_default);
  let const$17;
  const _list$ = dart.privateName(src__collection__impl__list, "_list");
  const _hashCode$0 = dart.privateName(src__collection__impl__list, "_hashCode");
  const _is_DartList_default = Symbol('_is_DartList_default');
  src__collection__impl__list.DartList$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let InterOpKIteratorOfT = () => (InterOpKIteratorOfT = dart.constFn(src__collection__impl__iterator.InterOpKIterator$(T)))();
    let InterOpKtListIteratorOfT = () => (InterOpKtListIteratorOfT = dart.constFn(src__collection__impl__iterator.InterOpKtListIterator$(T)))();
    let DartListOfT = () => (DartListOfT = dart.constFn(src__collection__impl__list.DartList$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    const Object_KtIterableExtensionsMixin$ = class Object_KtIterableExtensionsMixin extends core.Object {};
    (Object_KtIterableExtensionsMixin$.new = function() {
    }).prototype = Object_KtIterableExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtIterableExtensionsMixin$, src__collection__extension__iterable_extension_mixin.KtIterableExtensionsMixin$(T));
    const Object_KtCollectionExtensionMixin$ = class Object_KtCollectionExtensionMixin extends Object_KtIterableExtensionsMixin$ {};
    (Object_KtCollectionExtensionMixin$.new = function() {
    }).prototype = Object_KtCollectionExtensionMixin$.prototype;
    dart.applyMixin(Object_KtCollectionExtensionMixin$, src__collection__extension__collection_extension_mixin.KtCollectionExtensionMixin$(T));
    const Object_KtListExtensionsMixin$ = class Object_KtListExtensionsMixin extends Object_KtCollectionExtensionMixin$ {};
    (Object_KtListExtensionsMixin$.new = function() {
    }).prototype = Object_KtListExtensionsMixin$.prototype;
    dart.applyMixin(Object_KtListExtensionsMixin$, src__collection__extension__list_extension_mixin.KtListExtensionsMixin$(T));
    class DartList extends Object_KtListExtensionsMixin$ {
      get iter() {
        return this[_list$];
      }
      get list() {
        return this[_list$];
      }
      contains(element) {
        T._check(element);
        return this[_list$][$contains](element);
      }
      containsAll(elements) {
        KtCollectionOfT()._check(elements);
        if (!dart.test(dart.fn(() => {
          if (elements == null) dart.throw(new core.ArgumentError.new("elements can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list.dart", 36, 12, "() {if (elements == null) throw ArgumentError(\"elements can't be null\"); return true;}()");
        return elements.all(dart.bind(this[_list$], $contains));
      }
      get(index) {
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list.dart", 45, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("index: " + dart.str(index) + ", size: " + dart.str(this.size)));
        }
        return this[_list$][$_get](index);
      }
      _get(index) {
        return this.get(index);
      }
      indexOf(element) {
        T._check(element);
        return this[_list$][$indexOf](element);
      }
      isEmpty() {
        return this[_list$][$isEmpty];
      }
      iterator() {
        return new (InterOpKIteratorOfT()).new(this[_list$][$iterator]);
      }
      lastIndexOf(element) {
        T._check(element);
        return this[_list$][$lastIndexOf](element);
      }
      listIterator(index) {
        if (index === void 0) index = 0;
        if (!dart.test(dart.fn(() => {
          if (index == null) dart.throw(new core.ArgumentError.new("index can't be null"));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list.dart", 72, 12, "() {if (index == null) throw ArgumentError(\"index can't be null\"); return true;}()");
        return new (InterOpKtListIteratorOfT()).new(this[_list$], index);
      }
      get size() {
        return this[_list$][$length];
      }
      subList(fromIndex, toIndex) {
        if (!dart.test(dart.fn(() => {
          if (fromIndex == null) dart.throw(new core.ArgumentError.new("fromIndex can't be null"));
          if (toIndex == null) dart.throw(new core.ArgumentError.new("toIndex can't be null"));
          if (dart.notNull(fromIndex) > dart.notNull(toIndex)) dart.throw(new core.ArgumentError.new("fromIndex: " + dart.str(fromIndex) + " > toIndex: " + dart.str(toIndex)));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spacej3kyT1/packages/kt_dart/src/collection/impl/list.dart", 84, 12, "() {if (fromIndex == null) throw ArgumentError(\"fromIndex can't be null\"); if (toIndex == null) throw ArgumentError(\"toIndex can't be null\"); if (fromIndex > toIndex) throw ArgumentError(\"fromIndex: $fromIndex > toIndex: $toIndex\"); return true;}()");
        if (dart.notNull(fromIndex) < 0 || dart.notNull(toIndex) > dart.notNull(this.size)) {
          dart.throw(new src__exception__exceptions.IndexOutOfBoundsException.new("fromIndex: " + dart.str(fromIndex) + ", toIndex: " + dart.str(toIndex) + ", size: " + dart.str(this.size)));
        }
        return new (DartListOfT()).new(this[_list$][$sublist](fromIndex, toIndex));
      }
      get hashCode() {
        let t = this[_hashCode$0];
        t == null ? this[_hashCode$0] = 1 + dart.notNull(src__util__hash.hashObjects(T, this[_list$])) : t;
        return this[_hashCode$0];
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!src__collection__kt_list.KtList.is(other)) return false;
        if (!dart.equals(dart.dload(other, 'size'), this.size)) return false;
        if (dart.hashCode(other) != this.hashCode) return false;
        for (let i = 0; i !== this.size; ++i) {
          if (!dart.equals(dart.dindex(other, i), this._get(i))) return false;
        }
        return true;
      }
    }
    (DartList.new = function(iterable) {
      if (iterable === void 0) iterable = const$17 || (const$17 = dart.constList([], core.Null));
      this[_hashCode$0] = null;
      this[_list$] = ListOfT().from(iterable, {growable: false});
    }).prototype = DartList.prototype;
    dart.addTypeTests(DartList);
    DartList.prototype[_is_DartList_default] = true;
    DartList[dart.implements] = () => [KtListOfT()];
    dart.setMethodSignature(DartList, () => ({
      __proto__: dart.getMethods(DartList.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      containsAll: dart.fnType(core.bool, [core.Object]),
      get: dart.fnType(T, [core.int]),
      _get: dart.fnType(T, [core.int]),
      indexOf: dart.fnType(core.int, [core.Object]),
      isEmpty: dart.fnType(core.bool, []),
      iterator: dart.fnType(src__collection__kt_iterator.KtIterator$(T), []),
      lastIndexOf: dart.fnType(core.int, [core.Object]),
      listIterator: dart.fnType(src__collection__kt_iterator.KtListIterator$(T), [], [core.int]),
      subList: dart.fnType(src__collection__kt_list.KtList$(T), [core.int, core.int]),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(DartList, () => ({
      __proto__: dart.getGetters(DartList.__proto__),
      iter: core.Iterable$(T),
      list: core.List$(T),
      size: core.int,
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(DartList, "package:kt_dart/src/collection/impl/list.dart");
    dart.setFieldSignature(DartList, () => ({
      __proto__: dart.getFields(DartList.__proto__),
      [_list$]: dart.finalFieldType(ListOfT()),
      [_hashCode$0]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(DartList, ['_equals']);
    dart.defineExtensionAccessors(DartList, ['hashCode']);
    return DartList;
  });
  src__collection__impl__list.DartList = src__collection__impl__list.DartList$();
  dart.addTypeTests(src__collection__impl__list.DartList, _is_DartList_default);
  let const$18;
  const _is_KtList_default = Symbol('_is_KtList_default');
  src__collection__kt_list.KtList$ = dart.generic(T => {
    let EmptyListOfT = () => (EmptyListOfT = dart.constFn(src__collection__impl__list_empty.EmptyList$(T)))();
    let DartListOfT = () => (DartListOfT = dart.constFn(src__collection__impl__list.DartList$(T)))();
    let KtListOfT = () => (KtListOfT = dart.constFn(src__collection__kt_list.KtList$(T)))();
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let KtListExtensionOfT = () => (KtListExtensionOfT = dart.constFn(src__collection__kt_list.KtListExtension$(T)))();
    class KtList extends core.Object {
      static empty() {
        return new (EmptyListOfT()).new();
      }
      static from(elements) {
        if (elements === void 0) elements = const$18 || (const$18 = dart.constList([], core.Null));
        if (dart.test(elements[$isEmpty])) return new (EmptyListOfT()).new();
        return new (DartListOfT()).new(elements);
      }
      static of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        if (arg0 === void 0) arg0 = null;
        if (arg1 === void 0) arg1 = null;
        if (arg2 === void 0) arg2 = null;
        if (arg3 === void 0) arg3 = null;
        if (arg4 === void 0) arg4 = null;
        if (arg5 === void 0) arg5 = null;
        if (arg6 === void 0) arg6 = null;
        if (arg7 === void 0) arg7 = null;
        if (arg8 === void 0) arg8 = null;
        if (arg9 === void 0) arg9 = null;
        let args = src__util__arguments.argsToList(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        return KtListOfT().from(args);
      }
    }
    (KtList[dart.mixinNew] = function() {
    }).prototype = KtList.prototype;
    dart.addTypeTests(KtList);
    KtList.prototype[_is_KtList_default] = true;
    KtList[dart.implements] = () => [KtCollectionOfT(), KtListExtensionOfT()];
    dart.setLibraryUri(KtList, "package:kt_dart/src/collection/kt_list.dart");
    return KtList;
  });
  src__collection__kt_list.KtList = src__collection__kt_list.KtList$();
  dart.addTypeTests(src__collection__kt_list.KtList, _is_KtList_default);
  const _is_KtListExtension_default = Symbol('_is_KtListExtension_default');
  src__collection__kt_list.KtListExtension$ = dart.generic(T => {
    class KtListExtension extends core.Object {}
    (KtListExtension.new = function() {
    }).prototype = KtListExtension.prototype;
    dart.addTypeTests(KtListExtension);
    KtListExtension.prototype[_is_KtListExtension_default] = true;
    dart.setLibraryUri(KtListExtension, "package:kt_dart/src/collection/kt_list.dart");
    return KtListExtension;
  });
  src__collection__kt_list.KtListExtension = src__collection__kt_list.KtListExtension$();
  dart.addTypeTests(src__collection__kt_list.KtListExtension, _is_KtListExtension_default);
  const _is_KtMutableListIterator_default = Symbol('_is_KtMutableListIterator_default');
  src__collection__kt_iterator_mutable.KtMutableListIterator$ = dart.generic(T => {
    let KtListIteratorOfT = () => (KtListIteratorOfT = dart.constFn(src__collection__kt_iterator.KtListIterator$(T)))();
    let KtMutableIteratorOfT = () => (KtMutableIteratorOfT = dart.constFn(src__collection__kt_iterator_mutable.KtMutableIterator$(T)))();
    class KtMutableListIterator extends core.Object {}
    (KtMutableListIterator.new = function() {
    }).prototype = KtMutableListIterator.prototype;
    dart.addTypeTests(KtMutableListIterator);
    KtMutableListIterator.prototype[_is_KtMutableListIterator_default] = true;
    KtMutableListIterator[dart.implements] = () => [KtListIteratorOfT(), KtMutableIteratorOfT()];
    dart.setLibraryUri(KtMutableListIterator, "package:kt_dart/src/collection/kt_iterator_mutable.dart");
    return KtMutableListIterator;
  });
  src__collection__kt_iterator_mutable.KtMutableListIterator = src__collection__kt_iterator_mutable.KtMutableListIterator$();
  dart.addTypeTests(src__collection__kt_iterator_mutable.KtMutableListIterator, _is_KtMutableListIterator_default);
  const _is_KtMutableIterable_default = Symbol('_is_KtMutableIterable_default');
  src__collection__kt_iterable_mutable.KtMutableIterable$ = dart.generic(T => {
    let KtIterableOfT = () => (KtIterableOfT = dart.constFn(src__collection__kt_iterable.KtIterable$(T)))();
    let KtMutableIterableExtensionOfT = () => (KtMutableIterableExtensionOfT = dart.constFn(src__collection__kt_iterable_mutable.KtMutableIterableExtension$(T)))();
    class KtMutableIterable extends core.Object {}
    (KtMutableIterable.new = function() {
    }).prototype = KtMutableIterable.prototype;
    dart.addTypeTests(KtMutableIterable);
    KtMutableIterable.prototype[_is_KtMutableIterable_default] = true;
    KtMutableIterable[dart.implements] = () => [KtIterableOfT(), KtMutableIterableExtensionOfT()];
    dart.setLibraryUri(KtMutableIterable, "package:kt_dart/src/collection/kt_iterable_mutable.dart");
    return KtMutableIterable;
  });
  src__collection__kt_iterable_mutable.KtMutableIterable = src__collection__kt_iterable_mutable.KtMutableIterable$();
  dart.addTypeTests(src__collection__kt_iterable_mutable.KtMutableIterable, _is_KtMutableIterable_default);
  const _is_KtMutableIterableExtension_default = Symbol('_is_KtMutableIterableExtension_default');
  src__collection__kt_iterable_mutable.KtMutableIterableExtension$ = dart.generic(T => {
    class KtMutableIterableExtension extends core.Object {}
    (KtMutableIterableExtension.new = function() {
    }).prototype = KtMutableIterableExtension.prototype;
    dart.addTypeTests(KtMutableIterableExtension);
    KtMutableIterableExtension.prototype[_is_KtMutableIterableExtension_default] = true;
    dart.setLibraryUri(KtMutableIterableExtension, "package:kt_dart/src/collection/kt_iterable_mutable.dart");
    return KtMutableIterableExtension;
  });
  src__collection__kt_iterable_mutable.KtMutableIterableExtension = src__collection__kt_iterable_mutable.KtMutableIterableExtension$();
  dart.addTypeTests(src__collection__kt_iterable_mutable.KtMutableIterableExtension, _is_KtMutableIterableExtension_default);
  const _is_KtIterable_default = Symbol('_is_KtIterable_default');
  src__collection__kt_iterable.KtIterable$ = dart.generic(T => {
    let KtIterableExtensionOfT = () => (KtIterableExtensionOfT = dart.constFn(src__collection__kt_iterable.KtIterableExtension$(T)))();
    class KtIterable extends core.Object {}
    (KtIterable.new = function() {
    }).prototype = KtIterable.prototype;
    dart.addTypeTests(KtIterable);
    KtIterable.prototype[_is_KtIterable_default] = true;
    KtIterable[dart.implements] = () => [KtIterableExtensionOfT()];
    dart.setLibraryUri(KtIterable, "package:kt_dart/src/collection/kt_iterable.dart");
    return KtIterable;
  });
  src__collection__kt_iterable.KtIterable = src__collection__kt_iterable.KtIterable$();
  dart.addTypeTests(src__collection__kt_iterable.KtIterable, _is_KtIterable_default);
  const _is_KtIterableExtension_default = Symbol('_is_KtIterableExtension_default');
  src__collection__kt_iterable.KtIterableExtension$ = dart.generic(T => {
    class KtIterableExtension extends core.Object {}
    (KtIterableExtension.new = function() {
    }).prototype = KtIterableExtension.prototype;
    dart.addTypeTests(KtIterableExtension);
    KtIterableExtension.prototype[_is_KtIterableExtension_default] = true;
    dart.setLibraryUri(KtIterableExtension, "package:kt_dart/src/collection/kt_iterable.dart");
    return KtIterableExtension;
  });
  src__collection__kt_iterable.KtIterableExtension = src__collection__kt_iterable.KtIterableExtension$();
  dart.addTypeTests(src__collection__kt_iterable.KtIterableExtension, _is_KtIterableExtension_default);
  const _is_KtMutableCollection_default = Symbol('_is_KtMutableCollection_default');
  src__collection__kt_collection_mutable.KtMutableCollection$ = dart.generic(T => {
    let KtCollectionOfT = () => (KtCollectionOfT = dart.constFn(src__collection__kt_collection.KtCollection$(T)))();
    let KtMutableIterableOfT = () => (KtMutableIterableOfT = dart.constFn(src__collection__kt_iterable_mutable.KtMutableIterable$(T)))();
    let KtMutableCollectionExtensionOfT = () => (KtMutableCollectionExtensionOfT = dart.constFn(src__collection__kt_collection_mutable.KtMutableCollectionExtension$(T)))();
    class KtMutableCollection extends core.Object {}
    (KtMutableCollection.new = function() {
    }).prototype = KtMutableCollection.prototype;
    dart.addTypeTests(KtMutableCollection);
    KtMutableCollection.prototype[_is_KtMutableCollection_default] = true;
    KtMutableCollection[dart.implements] = () => [KtCollectionOfT(), KtMutableIterableOfT(), KtMutableCollectionExtensionOfT()];
    dart.setLibraryUri(KtMutableCollection, "package:kt_dart/src/collection/kt_collection_mutable.dart");
    return KtMutableCollection;
  });
  src__collection__kt_collection_mutable.KtMutableCollection = src__collection__kt_collection_mutable.KtMutableCollection$();
  dart.addTypeTests(src__collection__kt_collection_mutable.KtMutableCollection, _is_KtMutableCollection_default);
  const _is_KtMutableCollectionExtension_default = Symbol('_is_KtMutableCollectionExtension_default');
  src__collection__kt_collection_mutable.KtMutableCollectionExtension$ = dart.generic(T => {
    class KtMutableCollectionExtension extends core.Object {}
    (KtMutableCollectionExtension.new = function() {
    }).prototype = KtMutableCollectionExtension.prototype;
    dart.addTypeTests(KtMutableCollectionExtension);
    KtMutableCollectionExtension.prototype[_is_KtMutableCollectionExtension_default] = true;
    dart.setLibraryUri(KtMutableCollectionExtension, "package:kt_dart/src/collection/kt_collection_mutable.dart");
    return KtMutableCollectionExtension;
  });
  src__collection__kt_collection_mutable.KtMutableCollectionExtension = src__collection__kt_collection_mutable.KtMutableCollectionExtension$();
  dart.addTypeTests(src__collection__kt_collection_mutable.KtMutableCollectionExtension, _is_KtMutableCollectionExtension_default);
  const _is_KtCollection_default = Symbol('_is_KtCollection_default');
  src__collection__kt_collection.KtCollection$ = dart.generic(T => {
    let KtIterableOfT = () => (KtIterableOfT = dart.constFn(src__collection__kt_iterable.KtIterable$(T)))();
    let KCollectionExtensionOfT = () => (KCollectionExtensionOfT = dart.constFn(src__collection__kt_collection.KCollectionExtension$(T)))();
    class KtCollection extends core.Object {}
    (KtCollection.new = function() {
    }).prototype = KtCollection.prototype;
    dart.addTypeTests(KtCollection);
    KtCollection.prototype[_is_KtCollection_default] = true;
    KtCollection[dart.implements] = () => [KtIterableOfT(), KCollectionExtensionOfT()];
    dart.setLibraryUri(KtCollection, "package:kt_dart/src/collection/kt_collection.dart");
    return KtCollection;
  });
  src__collection__kt_collection.KtCollection = src__collection__kt_collection.KtCollection$();
  dart.addTypeTests(src__collection__kt_collection.KtCollection, _is_KtCollection_default);
  const _is_KCollectionExtension_default = Symbol('_is_KCollectionExtension_default');
  src__collection__kt_collection.KCollectionExtension$ = dart.generic(T => {
    class KCollectionExtension extends core.Object {}
    (KCollectionExtension.new = function() {
    }).prototype = KCollectionExtension.prototype;
    dart.addTypeTests(KCollectionExtension);
    KCollectionExtension.prototype[_is_KCollectionExtension_default] = true;
    dart.setLibraryUri(KCollectionExtension, "package:kt_dart/src/collection/kt_collection.dart");
    return KCollectionExtension;
  });
  src__collection__kt_collection.KCollectionExtension = src__collection__kt_collection.KCollectionExtension$();
  dart.addTypeTests(src__collection__kt_collection.KCollectionExtension, _is_KCollectionExtension_default);
  src__collection__collections.listOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_list.KtList$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$19;
  src__collection__collections.listFrom = function(T, elements) {
    if (elements === void 0) elements = const$19 || (const$19 = dart.constList([], core.Null));
    return src__collection__kt_list.KtList$(T).from(elements);
  };
  src__collection__collections.emptyList = function(T) {
    return src__collection__kt_list.KtList$(T).empty();
  };
  src__collection__collections.mutableListOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_list_mutable.KtMutableList$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$20;
  src__collection__collections.mutableListFrom = function(T, elements) {
    if (elements === void 0) elements = const$20 || (const$20 = dart.constList([], core.Null));
    return src__collection__kt_list_mutable.KtMutableList$(T).from(elements);
  };
  let const$21;
  src__collection__collections.mapFrom = function(K, V, map) {
    if (map === void 0) map = const$21 || (const$21 = dart.constMap(core.Null, core.Null, []));
    return src__collection__kt_map.KtMap$(K, V).from(map);
  };
  src__collection__collections.emptyMap = function(K, V) {
    return src__collection__kt_map.KtMap$(K, V).empty();
  };
  let const$22;
  src__collection__collections.mutableMapFrom = function(K, V, map) {
    if (map === void 0) map = const$22 || (const$22 = dart.constMap(core.Null, core.Null, []));
    return src__collection__kt_map_mutable.KtMutableMap$(K, V).from(map);
  };
  let const$23;
  src__collection__collections.hashMapFrom = function(K, V, map) {
    if (map === void 0) map = const$23 || (const$23 = dart.constMap(core.Null, core.Null, []));
    return src__collection__kt_map_hash.KtHashMap$(K, V).from(map);
  };
  let const$24;
  src__collection__collections.linkedMapFrom = function(K, V, map) {
    if (map === void 0) map = const$24 || (const$24 = dart.constMap(core.Null, core.Null, []));
    return src__collection__kt_map_linked.KtLinkedMap$(K, V).from(map);
  };
  src__collection__collections.setOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_set.KtSet$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$25;
  src__collection__collections.setFrom = function(T, elements) {
    if (elements === void 0) elements = const$25 || (const$25 = dart.constList([], core.Null));
    return src__collection__kt_set.KtSet$(T).from(elements);
  };
  src__collection__collections.emptySet = function(T) {
    return src__collection__kt_set.KtSet$(T).empty();
  };
  src__collection__collections.mutableSetOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_set_mutable.KtMutableSet$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$26;
  src__collection__collections.mutableSetFrom = function(T, elements) {
    if (elements === void 0) elements = const$26 || (const$26 = dart.constList([], core.Null));
    return src__collection__kt_set_mutable.KtMutableSet$(T).from(elements);
  };
  src__collection__collections.linkedSetOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_set_linked.KtLinkedSet$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$27;
  src__collection__collections.linkedSetFrom = function(T, elements) {
    if (elements === void 0) elements = const$27 || (const$27 = dart.constList([], core.Null));
    return src__collection__kt_set_linked.KtLinkedSet$(T).from(elements);
  };
  src__collection__collections.hashSetOf = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    return src__collection__kt_set_hash.KtHashSet$(T).of(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
  };
  let const$28;
  src__collection__collections.hashSetFrom = function(T, elements) {
    if (elements === void 0) elements = const$28 || (const$28 = dart.constList([], core.Null));
    return src__collection__kt_set_hash.KtHashSet$(T).from(elements);
  };
  src__collection__comparisons.naturalOrder = function(T) {
    return dart.fnType(core.int, [T, T]).as(dart.fn(src__collection__comparisons._naturalOrder, ComparableOfObjectAndComparableOfObjectToint()));
  };
  src__collection__comparisons._naturalOrder = function(a, b) {
    return a[$compareTo](b);
  };
  src__collection__comparisons.reverseOrder = function(T) {
    return dart.fnType(core.int, [T, T]).as(dart.fn(src__collection__comparisons._reverseOrder, ComparableOfObjectAndComparableOfObjectToint()));
  };
  src__collection__comparisons._reverseOrder = function(a, b) {
    return b[$compareTo](a);
  };
  src__collection__comparisons.reverse = function(T, comparator) {
    function compareTo(a, b) {
      return comparator(b, a);
    }
    dart.fn(compareTo, dart.fnType(core.int, [T, T]));
    return compareTo;
  };
  src__collection__comparisons.compareBy = function(T, selector) {
    function compareTo(a, b) {
      return selector(a)[$compareTo](selector(b));
    }
    dart.fn(compareTo, dart.fnType(core.int, [T, T]));
    return compareTo;
  };
  src__collection__comparisons.compareByDescending = function(T, selector) {
    function compareTo(a, b) {
      return selector(b)[$compareTo](selector(a));
    }
    dart.fn(compareTo, dart.fnType(core.int, [T, T]));
    return compareTo;
  };
  dart.defineLazy(src__util__errors, {
    /*src__util__errors.kBug35518GenericTypeError*/get kBug35518GenericTypeError() {
      return "This type error can't be caught at compile time due to a bug in the dart compiler.\nPlease upvote https://github.com/dart-lang/sdk/issues/35518 if you want this error to be cought earlier.\n";
    }
  });
  src__util__hash.hashObjects = function(T, objects) {
    return src__util__hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => src__util__hash._combine(h, dart.hashCode(i)), dart.fnType(core.int, [core.int, T]))));
  };
  src__util__hash.hash2 = function(a, b) {
    return src__util__hash._finish(src__util__hash._combine(src__util__hash._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  src__util__hash.hash3 = function(a, b, c) {
    return src__util__hash._finish(src__util__hash._combine(src__util__hash._combine(src__util__hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)));
  };
  src__util__hash.hash4 = function(a, b, c, d) {
    return src__util__hash._finish(src__util__hash._combine(src__util__hash._combine(src__util__hash._combine(src__util__hash._combine(0, dart.hashCode(a)), dart.hashCode(b)), dart.hashCode(c)), dart.hashCode(d)));
  };
  src__util__hash._combine = function(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  src__util__hash._finish = function(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  const _is_EmptyDartIterable_default = Symbol('_is_EmptyDartIterable_default');
  src__collection__impl__dart_iterable.EmptyDartIterable$ = dart.generic(T => {
    let EmptyDartIteratorOfT = () => (EmptyDartIteratorOfT = dart.constFn(src__collection__impl__dart_iterable.EmptyDartIterator$(T)))();
    class EmptyDartIterable extends core.Iterable$(T) {
      get iterator() {
        return new (EmptyDartIteratorOfT()).new();
      }
    }
    (EmptyDartIterable.new = function() {
      EmptyDartIterable.__proto__.new.call(this);
    }).prototype = EmptyDartIterable.prototype;
    dart.addTypeTests(EmptyDartIterable);
    EmptyDartIterable.prototype[_is_EmptyDartIterable_default] = true;
    dart.setGetterSignature(EmptyDartIterable, () => ({
      __proto__: dart.getGetters(EmptyDartIterable.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(EmptyDartIterable, "package:kt_dart/src/collection/impl/dart_iterable.dart");
    dart.defineExtensionAccessors(EmptyDartIterable, ['iterator']);
    return EmptyDartIterable;
  });
  src__collection__impl__dart_iterable.EmptyDartIterable = src__collection__impl__dart_iterable.EmptyDartIterable$();
  dart.addTypeTests(src__collection__impl__dart_iterable.EmptyDartIterable, _is_EmptyDartIterable_default);
  const _is_EmptyDartIterator_default = Symbol('_is_EmptyDartIterator_default');
  src__collection__impl__dart_iterable.EmptyDartIterator$ = dart.generic(T => {
    class EmptyDartIterator extends core.Iterator$(T) {
      get current() {
        return null;
      }
      moveNext() {
        return false;
      }
    }
    (EmptyDartIterator.new = function() {
    }).prototype = EmptyDartIterator.prototype;
    dart.addTypeTests(EmptyDartIterator);
    EmptyDartIterator.prototype[_is_EmptyDartIterator_default] = true;
    dart.setMethodSignature(EmptyDartIterator, () => ({
      __proto__: dart.getMethods(EmptyDartIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(EmptyDartIterator, () => ({
      __proto__: dart.getGetters(EmptyDartIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(EmptyDartIterator, "package:kt_dart/src/collection/impl/dart_iterable.dart");
    return EmptyDartIterator;
  });
  src__collection__impl__dart_iterable.EmptyDartIterator = src__collection__impl__dart_iterable.EmptyDartIterator$();
  dart.addTypeTests(src__collection__impl__dart_iterable.EmptyDartIterator, _is_EmptyDartIterator_default);
  src__util__arguments.argsToList = function(T, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    if (arg0 === void 0) arg0 = null;
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    if (arg7 === void 0) arg7 = null;
    if (arg8 === void 0) arg8 = null;
    if (arg9 === void 0) arg9 = null;
    let args = null;
    if (arg9 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9]);
    } else if (arg8 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8]);
    } else if (arg7 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7]);
    } else if (arg6 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4, arg5, arg6]);
    } else if (arg5 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4, arg5]);
    } else if (arg4 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3, arg4]);
    } else if (arg3 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2, arg3]);
    } else if (arg2 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1, arg2]);
    } else if (arg1 != null) {
      args = _interceptors.JSArray$(T).of([arg0, arg1]);
    } else if (arg0 != null) {
      return _interceptors.JSArray$(T).of([arg0]);
    } else {
      return _interceptors.JSArray$(T).of([]);
    }
    if (dart.test(args[$contains](null))) dart.throw(new core.ArgumentError.new("Element at position " + dart.str(args[$indexOf](null)) + " is null."));
    return args;
  };
  const _is_KtPair_default = Symbol('_is_KtPair_default');
  src__collection__tuples.KtPair$ = dart.generic((A, B) => {
    class KtPair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get second() {
        return this[second$];
      }
      set second(value) {
        super.second = value;
      }
      toString() {
        return "(" + dart.str(this.first) + ", " + dart.str(this.second) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || src__collection__tuples.KtPair.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.first, other.first) && dart.equals(this.second, other.second);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.second))) >>> 0;
      }
    }
    (KtPair.new = function(first, second) {
      this[first$] = first;
      this[second$] = second;
    }).prototype = KtPair.prototype;
    dart.addTypeTests(KtPair);
    KtPair.prototype[_is_KtPair_default] = true;
    const first$ = Symbol("KtPair.first");
    const second$ = Symbol("KtPair.second");
    dart.setMethodSignature(KtPair, () => ({
      __proto__: dart.getMethods(KtPair.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(KtPair, () => ({
      __proto__: dart.getGetters(KtPair.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(KtPair, "package:kt_dart/src/collection/tuples.dart");
    dart.setFieldSignature(KtPair, () => ({
      __proto__: dart.getFields(KtPair.__proto__),
      first: dart.finalFieldType(A),
      second: dart.finalFieldType(B)
    }));
    dart.defineExtensionMethods(KtPair, ['toString', '_equals']);
    dart.defineExtensionAccessors(KtPair, ['hashCode']);
    return KtPair;
  });
  src__collection__tuples.KtPair = src__collection__tuples.KtPair$();
  dart.addTypeTests(src__collection__tuples.KtPair, _is_KtPair_default);
  const _is_KtTriple_default = Symbol('_is_KtTriple_default');
  src__collection__tuples.KtTriple$ = dart.generic((A, B, C) => {
    class KtTriple extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get second() {
        return this[second$];
      }
      set second(value) {
        super.second = value;
      }
      get third() {
        return this[third$];
      }
      set third(value) {
        super.third = value;
      }
      toString() {
        return "(" + dart.str(this.first) + ", " + dart.str(this.second) + ", " + dart.str(this.third) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || src__collection__tuples.KtTriple.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.first, other.first) && dart.equals(this.second, other.second) && dart.equals(this.third, other.third);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.second)) ^ dart.notNull(dart.hashCode(this.third))) >>> 0;
      }
    }
    (KtTriple.new = function(first, second, third) {
      this[first$] = first;
      this[second$] = second;
      this[third$] = third;
    }).prototype = KtTriple.prototype;
    dart.addTypeTests(KtTriple);
    KtTriple.prototype[_is_KtTriple_default] = true;
    const first$ = Symbol("KtTriple.first");
    const second$ = Symbol("KtTriple.second");
    const third$ = Symbol("KtTriple.third");
    dart.setMethodSignature(KtTriple, () => ({
      __proto__: dart.getMethods(KtTriple.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(KtTriple, () => ({
      __proto__: dart.getGetters(KtTriple.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setLibraryUri(KtTriple, "package:kt_dart/src/collection/tuples.dart");
    dart.setFieldSignature(KtTriple, () => ({
      __proto__: dart.getFields(KtTriple.__proto__),
      first: dart.finalFieldType(A),
      second: dart.finalFieldType(B),
      third: dart.finalFieldType(C)
    }));
    dart.defineExtensionMethods(KtTriple, ['toString', '_equals']);
    dart.defineExtensionAccessors(KtTriple, ['hashCode']);
    return KtTriple;
  });
  src__collection__tuples.KtTriple = src__collection__tuples.KtTriple$();
  dart.addTypeTests(src__collection__tuples.KtTriple, _is_KtTriple_default);
  dart.trackLibraries("packages/kt_dart/collection.ddc", {
    "package:kt_dart/src/collection/kt_set_mutable.dart": src__collection__kt_set_mutable,
    "package:kt_dart/src/collection/impl/set_hash_linked.dart": src__collection__impl__set_hash_linked,
    "package:kt_dart/src/collection/kt_set_linked.dart": src__collection__kt_set_linked,
    "package:kt_dart/src/collection/impl/set_mutable.dart": src__collection__impl__set_mutable,
    "package:kt_dart/src/collection/impl/set_hash.dart": src__collection__impl__set_hash,
    "package:kt_dart/src/collection/kt_set_hash.dart": src__collection__kt_set_hash,
    "package:kt_dart/src/collection/impl/set_empty.dart": src__collection__impl__set_empty,
    "package:kt_dart/src/collection/impl/set.dart": src__collection__impl__set,
    "package:kt_dart/src/collection/kt_set.dart": src__collection__kt_set,
    "package:kt_dart/src/collection/kt_map_mutable.dart": src__collection__kt_map_mutable,
    "package:kt_dart/src/collection/impl/map_linked.dart": src__collection__impl__map_linked,
    "package:kt_dart/src/collection/kt_map_linked.dart": src__collection__kt_map_linked,
    "package:kt_dart/src/collection/extension/map_mutable_extensions_mixin.dart": src__collection__extension__map_mutable_extensions_mixin,
    "package:kt_dart/src/collection/impl/map_mutable.dart": src__collection__impl__map_mutable,
    "package:kt_dart/src/collection/impl/map_hash.dart": src__collection__impl__map_hash,
    "package:kt_dart/src/collection/kt_map_hash.dart": src__collection__kt_map_hash,
    "package:kt_dart/src/collection/impl/map_empty.dart": src__collection__impl__map_empty,
    "package:kt_dart/src/collection/extension/map_extensions_mixin.dart": src__collection__extension__map_extensions_mixin,
    "package:kt_dart/src/collection/impl/map.dart": src__collection__impl__map,
    "package:kt_dart/src/collection/kt_map.dart": src__collection__kt_map,
    "package:kt_dart/src/collection/extension/list_mutable_extension_mixin.dart": src__collection__extension__list_mutable_extension_mixin,
    "package:kt_dart/src/collection/extension/iterable_mutable_extension_mixin.dart": src__collection__extension__iterable_mutable_extension_mixin,
    "package:kt_dart/src/collection/extension/collection_mutable_extension_mixin.dart": src__collection__extension__collection_mutable_extension_mixin,
    "package:kt_dart/src/collection/impl/list_mutable.dart": src__collection__impl__list_mutable,
    "package:kt_dart/src/collection/kt_list_mutable.dart": src__collection__kt_list_mutable,
    "package:kt_dart/src/collection/impl/list_empty.dart": src__collection__impl__list_empty,
    "package:kt_dart/src/collection/impl/iterator.dart": src__collection__impl__iterator,
    "package:kt_dart/src/collection/extension/list_extension_mixin.dart": src__collection__extension__list_extension_mixin,
    "package:kt_dart/src/collection/extension/iterable_extension_mixin.dart": src__collection__extension__iterable_extension_mixin,
    "package:kt_dart/src/collection/extension/collection_extension_mixin.dart": src__collection__extension__collection_extension_mixin,
    "package:kt_dart/src/collection/impl/list.dart": src__collection__impl__list,
    "package:kt_dart/src/collection/kt_list.dart": src__collection__kt_list,
    "package:kt_dart/src/collection/kt_iterator_mutable.dart": src__collection__kt_iterator_mutable,
    "package:kt_dart/src/collection/kt_iterator.dart": src__collection__kt_iterator,
    "package:kt_dart/src/collection/kt_iterable_mutable.dart": src__collection__kt_iterable_mutable,
    "package:kt_dart/src/collection/kt_iterable.dart": src__collection__kt_iterable,
    "package:kt_dart/src/collection/kt_collection_mutable.dart": src__collection__kt_collection_mutable,
    "package:kt_dart/src/collection/kt_collection.dart": src__collection__kt_collection,
    "package:kt_dart/kt.dart": kt,
    "package:kt_dart/src/collection/collections.dart": src__collection__collections,
    "package:kt_dart/collection.dart": collection$,
    "package:kt_dart/src/collection/comparisons.dart": src__collection__comparisons,
    "package:kt_dart/src/util/errors.dart": src__util__errors,
    "package:kt_dart/src/util/hash.dart": src__util__hash,
    "package:kt_dart/src/collection/impl/dart_iterable.dart": src__collection__impl__dart_iterable,
    "package:kt_dart/src/util/arguments.dart": src__util__arguments,
    "package:kt_dart/src/collection/tuples.dart": src__collection__tuples
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/collection/kt_set_mutable.dart","src/collection/extension/iterable_extension_mixin.dart","src/collection/extension/collection_extension_mixin.dart","src/collection/extension/iterable_mutable_extension_mixin.dart","src/collection/impl/set_mutable.dart","src/collection/impl/set_hash_linked.dart","src/collection/kt_set_linked.dart","src/collection/kt_iterator_mutable.dart","src/collection/impl/set_hash.dart","src/collection/kt_set_hash.dart","src/collection/impl/set_empty.dart","src/collection/kt_iterator.dart","src/collection/impl/set.dart","src/collection/kt_set.dart","src/collection/kt_map_mutable.dart","src/collection/kt_map.dart","src/collection/extension/map_extensions_mixin.dart","src/collection/extension/map_mutable_extensions_mixin.dart","src/collection/impl/map_mutable.dart","src/collection/impl/map_linked.dart","src/collection/kt_map_linked.dart","src/collection/impl/map_hash.dart","src/collection/kt_map_hash.dart","src/collection/impl/map_empty.dart","src/collection/impl/map.dart","src/collection/extension/list_mutable_extension_mixin.dart","src/collection/extension/collection_mutable_extension_mixin.dart","src/collection/extension/list_extension_mixin.dart","src/collection/impl/list_mutable.dart","src/collection/kt_list_mutable.dart","src/collection/impl/list_empty.dart","src/collection/impl/iterator.dart","src/collection/impl/list.dart","src/collection/kt_list.dart","src/collection/kt_iterable_mutable.dart","src/collection/kt_iterable.dart","src/collection/kt_collection_mutable.dart","src/collection/kt_collection.dart","src/collection/collections.dart","src/collection/comparisons.dart","src/util/errors.dart","src/util/hash.dart","src/collection/impl/dart_iterable.dart","src/util/arguments.dart","src/collection/tuples.dart"],"names":[],"mappings":"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","file":"collection.ddc.js"}');
  // Exports:
  return {
    src__collection__kt_set_mutable: src__collection__kt_set_mutable,
    src__collection__impl__set_hash_linked: src__collection__impl__set_hash_linked,
    src__collection__kt_set_linked: src__collection__kt_set_linked,
    src__collection__impl__set_mutable: src__collection__impl__set_mutable,
    src__collection__impl__set_hash: src__collection__impl__set_hash,
    src__collection__kt_set_hash: src__collection__kt_set_hash,
    src__collection__impl__set_empty: src__collection__impl__set_empty,
    src__collection__impl__set: src__collection__impl__set,
    src__collection__kt_set: src__collection__kt_set,
    src__collection__kt_map_mutable: src__collection__kt_map_mutable,
    src__collection__impl__map_linked: src__collection__impl__map_linked,
    src__collection__kt_map_linked: src__collection__kt_map_linked,
    src__collection__extension__map_mutable_extensions_mixin: src__collection__extension__map_mutable_extensions_mixin,
    src__collection__impl__map_mutable: src__collection__impl__map_mutable,
    src__collection__impl__map_hash: src__collection__impl__map_hash,
    src__collection__kt_map_hash: src__collection__kt_map_hash,
    src__collection__impl__map_empty: src__collection__impl__map_empty,
    src__collection__extension__map_extensions_mixin: src__collection__extension__map_extensions_mixin,
    src__collection__impl__map: src__collection__impl__map,
    src__collection__kt_map: src__collection__kt_map,
    src__collection__extension__list_mutable_extension_mixin: src__collection__extension__list_mutable_extension_mixin,
    src__collection__extension__iterable_mutable_extension_mixin: src__collection__extension__iterable_mutable_extension_mixin,
    src__collection__extension__collection_mutable_extension_mixin: src__collection__extension__collection_mutable_extension_mixin,
    src__collection__impl__list_mutable: src__collection__impl__list_mutable,
    src__collection__kt_list_mutable: src__collection__kt_list_mutable,
    src__collection__impl__list_empty: src__collection__impl__list_empty,
    src__collection__impl__iterator: src__collection__impl__iterator,
    src__collection__extension__list_extension_mixin: src__collection__extension__list_extension_mixin,
    src__collection__extension__iterable_extension_mixin: src__collection__extension__iterable_extension_mixin,
    src__collection__extension__collection_extension_mixin: src__collection__extension__collection_extension_mixin,
    src__collection__impl__list: src__collection__impl__list,
    src__collection__kt_list: src__collection__kt_list,
    src__collection__kt_iterator_mutable: src__collection__kt_iterator_mutable,
    src__collection__kt_iterator: src__collection__kt_iterator,
    src__collection__kt_iterable_mutable: src__collection__kt_iterable_mutable,
    src__collection__kt_iterable: src__collection__kt_iterable,
    src__collection__kt_collection_mutable: src__collection__kt_collection_mutable,
    src__collection__kt_collection: src__collection__kt_collection,
    kt: kt,
    src__collection__collections: src__collection__collections,
    collection: collection$,
    src__collection__comparisons: src__collection__comparisons,
    src__util__errors: src__util__errors,
    src__util__hash: src__util__hash,
    src__collection__impl__dart_iterable: src__collection__impl__dart_iterable,
    src__util__arguments: src__util__arguments,
    src__collection__tuples: src__collection__tuples
  };
});

//# sourceMappingURL=collection.ddc.js.map
