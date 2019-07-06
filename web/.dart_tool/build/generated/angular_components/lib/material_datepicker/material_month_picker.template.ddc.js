define(['dart_sdk', 'packages/angular_components/material_datepicker/material_month_picker.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/quiver/time', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template'], function(dart_sdk, material_month_picker$46scss$46css, modules, change_detection, material_month_picker, time, calendar_listener, angular, calendar, module, date, observable) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_month_picker$46scss$46css$46shim = material_month_picker$46scss$46css.material_datepicker__material_month_picker$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const time$ = time.time;
  const src__material_datepicker__calendar_listener$46template = calendar_listener.src__material_datepicker__calendar_listener$46template;
  const src__material_datepicker__enum_parsing$46template = calendar_listener.src__material_datepicker__enum_parsing$46template;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const material_datepicker__material_month_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfMaterialMonthPickerComponent = () => (AppViewOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let AppViewAndintToAppViewOfMaterialMonthPickerComponent = () => (AppViewAndintToAppViewOfMaterialMonthPickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialMonthPickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialMonthPickerComponent = () => (ComponentFactoryOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  let VoidToMaterialMonthPickerComponent = () => (VoidToMaterialMonthPickerComponent = dart.constFn(dart.fnType(material_datepicker__material_month_picker.MaterialMonthPickerComponent, [])))();
  let ComponentRefOfMaterialMonthPickerComponent = () => (ComponentRefOfMaterialMonthPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_month_picker.MaterialMonthPickerComponent)))();
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponent*/get styles$MaterialMonthPickerComponent() {
      return [material_datepicker__material_month_picker$46scss$46css$46shim.styles];
    }
  });
  material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0 = class ViewMaterialMonthPickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_month_picker.MaterialMonthPickerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_month_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "scroll-container");
      this.addShimC(_el_0);
      let _el_1 = src__runtime__dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "calendar-container");
      this.addShimC(_el_1);
      _ctx.container = _el_1;
      this.init0();
    }
    initComponentStyles() {
      let styles = material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = styles = material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponent, material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new = function(parentView, parentIndex) {
    material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-month-picker"));
  }).prototype = material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.setMethodSignature(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_month_picker.MaterialMonthPickerComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, "package:angular_components/material_datepicker/material_month_picker.template.dart");
  dart.defineLazy(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0, {
    /*material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template._MaterialMonthPickerComponentNgFactory*/get _MaterialMonthPickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialMonthPickerComponent()).new("material-month-picker", dart.fn(material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, AppViewAndintToAppViewOfMaterialMonthPickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_month_picker$46template, {
    get MaterialMonthPickerComponentNgFactory() {
      return material_datepicker__material_month_picker$46template._MaterialMonthPickerComponentNgFactory;
    }
  });
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template.styles$MaterialMonthPickerComponentHost*/get styles$MaterialMonthPickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_datepicker__material_month_picker$46template, "_compView_0");
  const _MaterialMonthPickerComponent_0_5 = dart.privateName(material_datepicker__material_month_picker$46template, "_MaterialMonthPickerComponent_0_5");
  let const$;
  let const$0;
  material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0 = class _ViewMaterialMonthPickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_month_picker.MaterialMonthPickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialMonthPickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_month_picker.MaterialMonthPickerComponent, dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent), dart.fn(() => new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), null), VoidToMaterialMonthPickerComponent())) : new material_datepicker__material_month_picker.MaterialMonthPickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialMonthPickerComponent()).new(0, this, this.rootEl, this[_MaterialMonthPickerComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_month_picker.MaterialMonthPickerComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, "package:angular_components/material_datepicker/material_month_picker.template.dart");
  dart.setFieldSignature(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_month_picker$46template.ViewMaterialMonthPickerComponent0),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent)
  }));
  material_datepicker__material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_month_picker$46template, {
    /*material_datepicker__material_month_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_month_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_month_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_month_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_month_picker.MaterialMonthPickerComponent), material_datepicker__material_month_picker$46template.MaterialMonthPickerComponentNgFactory);
    src__material_datepicker__calendar_listener$46template.initReflector();
    src__material_datepicker__enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_month_picker.template.dart": material_datepicker__material_month_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4BoB,yFAAmC;YAAG,EAAS,qEAAM;;;;;AASrE,YAAQ,WAAQ,qCAAS,IAAG,gFAAgF;IAC9G;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,MAAc,aAAQ;AAC5B,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,gBAAgB;AACrD,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,AAAQ,mCAAS,CAAC,GAAG,EAAE,KAAK;AAC1C,2BAAqB,CAAC,KAAK,EAAE;AAC7B,mBAAQ,CAAC,KAAK;AACd,UAAI,UAAU,GAAG,KAAK;AACtB,gBAAK;IACP;;AAIE,UAAI,SAAS,wGAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,wGAAgB,GAAI,MAAM,GAAI,wGAAgB,GAAG,6DAA8B,CAAC,yFAAmC,EAAE,0GAAkB;;AAE1I,0BAAe,GAAG,MAAM;IAC1B;;0GA/BkC,UAA2B,EAAE,WAAe;AAAI,qHAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC5K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;MAJ+B,wGAAgB;;;;;;MAmCY,4FAAsC;YAAG,gBAAM,sDAAgB,CAAC,yBAAyB,oKAA6C;;;;;AAEjM,YAAO,6FAAsC;IAC/C;;;MAEoB,6FAAuC;YAAG;;;;;;;;;AAQ1D,uBAAW,OAAG,2FAAiC,CAAC,MAAM;AACtD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,6CAAiC,GAAI,UAAQ,qCAAS,IAChD,AAAS,iCAAiB,0EAAS,sFAA4B,EAAE,kBACxD,2EAAoC,oBAAC,wBAAwB,CAAC,mCAAM,2CAA6B,CAAC,mEAAiE,aAAQ,YAAY,IAAG,oDAEnM,2EAAoC,oBAAC,wBAAwB,CAAC,qCAAM,2CAA6B,CAAC,mEAAiE,aAAQ,YAAY,IAAG;AAChM,uBAAW,OAAO,CAAC,uCAAiC,EAAE,mBAAc;AACpE,gBAAK,CAAC,WAAM;AACZ,iBAAO,kDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,uCAAiC;IACxE;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,qBAAO,8CAAqB,eAAe,KAAK,UAAU,EAAG;AAC3D,+CAAiC,SAAS;;AAE5C,uBAAW,cAAc;AACzB,qBAAM,8CAAqB,eAAe,GAAG;AAC3C,YAAI,UAAU,EAAE;AACd,iDAAiC,gBAAgB;;;IAGvD;;AAIE,uBAAW,qBAAqB;AAChC,6CAAiC,YAAY;IAC/C;;+GArCuC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,uCAAiC;AACiB,0HAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;iHAwCvF,UAA2B,EAAE,WAAe;AACtI,eAAO,gGAAsC,CAAC,UAAU,EAAE,WAAW;EACvE;;MAEI,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAO,oCAAiB,CAAC,sFAA4B,EAAE,2FAAqC;AAC5F,IAAM,oEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,sDAAa;EACrB","file":"material_month_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker$46template: material_datepicker__material_month_picker$46template
  };
});

//# sourceMappingURL=material_month_picker.template.ddc.js.map
