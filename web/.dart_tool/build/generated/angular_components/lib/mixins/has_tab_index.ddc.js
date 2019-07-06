define(['dart_sdk', 'packages/quiver/strings', 'packages/angular_components/utils/angular/properties/properties'], function(dart_sdk, strings, properties) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const strings$ = strings.strings;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const mixins__has_tab_index = Object.create(dart.library);
  const _tabIndex = dart.privateName(mixins__has_tab_index, "_tabIndex");
  const _computeTabIndex = dart.privateName(mixins__has_tab_index, "_computeTabIndex");
  mixins__has_tab_index.HasTabIndex = class HasTabIndex extends core.Object {
    get hostTabIndex() {
      return "0";
    }
    updateTabIndex() {
      this[_tabIndex] = this[_computeTabIndex]();
    }
    get tabIndex() {
      let l = this[_tabIndex];
      return l != null ? l : this[_computeTabIndex]();
    }
    [_computeTabIndex]() {
      if (dart.test(this.disabled)) {
        return "-1";
      } else if (this.hostTabIndex == null) {
        return null;
      } else if (!dart.test(strings$.isBlank(this.hostTabIndex))) {
        if (!(utils__angular__properties__properties.getInt(this.hostTabIndex) != null)) dart.assertFailed(null, "file:///private/var/folders/_q/d3_d45gx0clfh53k0fj1d8sw0000gn/T/scratch_spaceN42JPh/packages/angular_components/mixins/has_tab_index.dart", 35, 14, "getInt(hostTabIndex) != null");
        return this.hostTabIndex;
      }
      dart.throw("Host tabIndex should either be null or a value");
    }
  };
  (mixins__has_tab_index.HasTabIndex.new = function() {
    this[_tabIndex] = null;
  }).prototype = mixins__has_tab_index.HasTabIndex.prototype;
  dart.addTypeTests(mixins__has_tab_index.HasTabIndex);
  dart.setMethodSignature(mixins__has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getMethods(mixins__has_tab_index.HasTabIndex.__proto__),
    updateTabIndex: dart.fnType(dart.void, []),
    [_computeTabIndex]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(mixins__has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getGetters(mixins__has_tab_index.HasTabIndex.__proto__),
    hostTabIndex: core.String,
    tabIndex: core.String
  }));
  dart.setLibraryUri(mixins__has_tab_index.HasTabIndex, "package:angular_components/mixins/has_tab_index.dart");
  dart.setFieldSignature(mixins__has_tab_index.HasTabIndex, () => ({
    __proto__: dart.getFields(mixins__has_tab_index.HasTabIndex.__proto__),
    [_tabIndex]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_components/mixins/has_tab_index.ddc", {
    "package:angular_components/mixins/has_tab_index.dart": mixins__has_tab_index
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["has_tab_index.dart"],"names":[],"mappings":";;;;;;;;;;;;YAe6B;IAAG;;AAO5B,qBAAS,GAAG,sBAAgB;IAC9B;;cAGuB,eAAS;6BAAI,sBAAgB;IAAE;;AAGpD,oBAAI,aAAQ,GAAE;AACZ,cAAO;YACF,KAAI,iBAAY,IAAI,MAAM;AAC/B,cAAO;YACF,gBAAK,gBAAO,CAAC,iBAAY,IAAG;AACjC,cAAO,6CAAM,CAAC,iBAAY,KAAK;AAC/B,cAAO,kBAAY;;AAErB,iBAAM;IACR;;;IApBO,eAAS;EAqBlB","file":"has_tab_index.ddc.js"}');
  // Exports:
  return {
    mixins__has_tab_index: mixins__has_tab_index
  };
});

//# sourceMappingURL=has_tab_index.ddc.js.map
