define(['dart_sdk', 'packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/quiver/time', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template'], function(dart_sdk, material_calendar_picker$46scss$46css, modules, change_detection, material_calendar_picker, text_binding, interpolate, time, calendar_listener, angular, calendar, module, date, observable, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__material_calendar_picker$46scss$46css$46shim = material_calendar_picker$46scss$46css.material_datepicker__material_calendar_picker$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const time$ = time.time;
  const src__material_datepicker__calendar_listener$46template = calendar_listener.src__material_datepicker__calendar_listener$46template;
  const src__material_datepicker__enum_parsing$46template = calendar_listener.src__material_datepicker__enum_parsing$46template;
  const angular$46template = angular.angular$46template;
  const material_datepicker__calendar$46template = calendar.material_datepicker__calendar$46template;
  const material_datepicker__module$46template = module.material_datepicker__module$46template;
  const model__date__date$46template = date.model__date__date$46template;
  const model__observable__observable$46template = observable.model__observable__observable$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const material_datepicker__material_calendar_picker$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMaterialCalendarPickerComponent = () => (AppViewOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let AppViewAndintToAppViewOfMaterialCalendarPickerComponent = () => (AppViewAndintToAppViewOfMaterialCalendarPickerComponent = dart.constFn(dart.fnType(AppViewOfMaterialCalendarPickerComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialCalendarPickerComponent = () => (ComponentFactoryOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  let VoidToMaterialCalendarPickerComponent = () => (VoidToMaterialCalendarPickerComponent = dart.constFn(dart.fnType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, [])))();
  let ComponentRefOfMaterialCalendarPickerComponent = () => (ComponentRefOfMaterialCalendarPickerComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)))();
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent*/get styles$MaterialCalendarPickerComponent() {
      return [material_datepicker__material_calendar_picker$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_NgFor_1_9");
  const _expr_0 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_expr_0");
  const _expr_1 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_expr_1");
  material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0 = class ViewMaterialCalendarPickerComponent0 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_calendar_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__runtime__dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(html.HtmlElement._check(_el_0), "header");
      this.addShimE(_el_0);
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__runtime__dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_2, "scroll-container");
      this.addShimC(_el_2);
      let _el_3 = src__runtime__dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "calendar-container");
      this.addShimC(_el_3);
      _ctx.container = _el_3;
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dayNames;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.compact;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = styles = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponent, material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-calendar-picker"));
  }).prototype = material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, {
    /*material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory*/get _MaterialCalendarPickerComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialCalendarPickerComponent()).new("material-calendar-picker", dart.fn(material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, AppViewAndintToAppViewOfMaterialCalendarPickerComponent())));
    }
  });
  dart.copyProperties(material_datepicker__material_calendar_picker$46template, {
    get MaterialCalendarPickerComponentNgFactory() {
      return material_datepicker__material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_textBinding_1");
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1 = class _ViewMaterialCalendarPickerComponent1 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "header-day");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_name = src__runtime__optimizations.unsafeCast(core.String, this.locals[$_get]("$implicit"));
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_name));
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template.styles$MaterialCalendarPickerComponentHost*/get styles$MaterialCalendarPickerComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_compView_0");
  const _MaterialCalendarPickerComponent_0_5 = dart.privateName(material_datepicker__material_calendar_picker$46template, "_MaterialCalendarPickerComponent_0_5");
  let const$;
  let const$0;
  material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0 = class _ViewMaterialCalendarPickerComponentHost0 extends src__core__linker__app_view.AppView$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent) {
    build() {
      this[_compView_0] = new material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent, dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), dart.fn(() => new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), null), VoidToMaterialCalendarPickerComponent())) : new material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent.new(time$.Clock._check(this.injectorGetOptional(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))), this.viewData.parentIndex)), time$.Clock._check(this.injectorGet(dart.wrapType(time$.Clock), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialCalendarPickerComponent()).new(0, this, this.rootEl, this[_MaterialCalendarPickerComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.setMethodSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), [])
  }));
  dart.setLibraryUri(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, "package:angular_components/material_datepicker/material_calendar_picker.template.dart");
  dart.setFieldSignature(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_datepicker__material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent)
  }));
  material_datepicker__material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0 = function(parentView, parentIndex) {
    return new material_datepicker__material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_datepicker__material_calendar_picker$46template, {
    /*material_datepicker__material_calendar_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_datepicker__material_calendar_picker$46template.initReflector = function() {
    if (dart.test(material_datepicker__material_calendar_picker$46template._visited)) {
      return;
    }
    material_datepicker__material_calendar_picker$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent), material_datepicker__material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory);
    src__material_datepicker__calendar_listener$46template.initReflector();
    src__material_datepicker__enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    material_datepicker__calendar$46template.initReflector();
    material_datepicker__module$46template.initReflector();
    model__date__date$46template.initReflector();
    model__observable__observable$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.template.ddc", {
    "package:angular_components/material_datepicker/material_calendar_picker.template.dart": material_datepicker__material_calendar_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.template.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker$46template: material_datepicker__material_calendar_picker$46template
  };
});

//# sourceMappingURL=material_calendar_picker.template.ddc.js.map
