define(['dart_sdk', 'packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/affix/base_affix.template', 'packages/angular_components/model/menu/menu_item_affix.template'], function(dart_sdk, menu_item_affix_list$46scss$46css, modules, change_detection, menu_item_affix_list, has_disabled, angular, meta, dynamic_component, has_disabled$, base_affix, menu_item_affix) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_menu__menu_item_affix_list$46scss$46css$46shim = menu_item_affix_list$46scss$46css.material_menu__menu_item_affix_list$46scss$46css$46shim;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_menu__menu_item_affix_list = menu_item_affix_list.material_menu__menu_item_affix_list;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const dynamic_component__dynamic_component$46template = dynamic_component.dynamic_component__dynamic_component$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_menu__affix__base_affix$46template = base_affix.material_menu__affix__base_affix$46template;
  const model__menu__menu_item_affix$46template = menu_item_affix.model__menu__menu_item_affix$46template;
  const material_menu__menu_item_affix_list$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfMenuItemAffixListComponent = () => (AppViewOfMenuItemAffixListComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let AppViewAndintToAppViewOfMenuItemAffixListComponent = () => (AppViewAndintToAppViewOfMenuItemAffixListComponent = dart.constFn(dart.fnType(AppViewOfMenuItemAffixListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMenuItemAffixListComponent = () => (ComponentFactoryOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  let ComponentRefOfMenuItemAffixListComponent = () => (ComponentRefOfMenuItemAffixListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent)))();
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent*/get styles$MenuItemAffixListComponent() {
      return [material_menu__menu_item_affix_list$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = dart.privateName(material_menu__menu_item_affix_list$46template, "_appEl_0");
  const _TemplateRef_0_8 = dart.privateName(material_menu__menu_item_affix_list$46template, "_TemplateRef_0_8");
  material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0 = class ViewMenuItemAffixListComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_affix_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1, AppViewAndintToAppViewOfvoid()));
      _ctx.viewRef = this[_appEl_0];
      this.init0();
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles;
      if (styles == null) {
        material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = styles = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponent, material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("menu-item-affix-list"));
  }).prototype = material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_TemplateRef_0_8]: dart.fieldType(src__core__linker__template_ref.TemplateRef)
  }));
  dart.defineLazy(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, {
    /*material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory*/get _MenuItemAffixListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuItemAffixListComponent()).new("menu-item-affix-list", dart.fn(material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, AppViewAndintToAppViewOfMenuItemAffixListComponent())));
    }
  });
  dart.copyProperties(material_menu__menu_item_affix_list$46template, {
    get MenuItemAffixListComponentNgFactory() {
      return material_menu__menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory;
    }
  });
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1 = class _ViewMenuItemAffixListComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      this.init0();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new = function(parentView, parentIndex) {
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), [])
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template.styles$MenuItemAffixListComponentHost*/get styles$MenuItemAffixListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(material_menu__menu_item_affix_list$46template, "_compView_0");
  const _MenuItemAffixListComponent_0_5 = dart.privateName(material_menu__menu_item_affix_list$46template, "_MenuItemAffixListComponent_0_5");
  material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0 = class _ViewMenuItemAffixListComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_affix_list.MenuItemAffixListComponent) {
    build() {
      this[_compView_0] = new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MenuItemAffixListComponent_0_5] = new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_MenuItemAffixListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMenuItemAffixListComponent()).new(0, this, this.rootEl, this[_MenuItemAffixListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.setMethodSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_affix_list.MenuItemAffixListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(material_menu__menu_item_affix_list.MenuItemAffixListComponent)
  }));
  material_menu__menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_affix_list$46template, {
    /*material_menu__menu_item_affix_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_item_affix_list$46template.initReflector = function() {
    if (dart.test(material_menu__menu_item_affix_list$46template._visited)) {
      return;
    }
    material_menu__menu_item_affix_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent), material_menu__menu_item_affix_list$46template.MenuItemAffixListComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    dynamic_component__dynamic_component$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_menu__affix__base_affix$46template.initReflector();
    model__menu__menu_item_affix$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.template.ddc", {
    "package:angular_components/material_menu/menu_item_affix_list.template.dart": material_menu__menu_item_affix_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2BoB,gFAAiC;YAAG,EAAS,8DAAM;;;;;;;AAWnE,YAAQ,WAAQ,qCAAS,IAAG,yEAAyE;IACvG;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,YAAY,AAAS,sCAAY,CAAC,gBAAgB;AACxD,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,SAAS;AACjD,4BAAgB,OAAG,+CAAW,CAAC,cAAQ,EAAE,+HAAuC;AAChF,UAAI,QAAQ,GAAG,cAAQ;AACvB,gBAAK;IACP;;AAIE,oBAAQ,2BAA2B;IACrC;;AAIE,oBAAQ,mBAAmB;IAC7B;;AAIE,UAAI,SAAS,+FAAgB;AAC7B,UAAI,AAAU,MAAM,IAAE,MAAO;AAC3B,QAAC,+FAAgB,GAAI,MAAM,GAAI,+FAAgB,GAAG,6DAA8B,CAAC,gFAAiC,EAAE,iGAAkB;;AAExI,0BAAe,GAAG,MAAM;IAC1B;;iGArCgC,UAA2B,EAAE,WAAe;IAH9D,cAAQ;IACV,sBAAgB;AAEoD,4GAAM,qCAAgB,UAAU,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC1K,4BAAmB;AACnB,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;EAC1C;;;;;;;;;;;;;MAJ+B,+FAAgB;;;;;;MAyCU,mFAAoC;YAAG,gBAAM,oDAAgB,CAAC,wBAAwB,yJAA2C;;;;;AAE1L,YAAO,oFAAoC;IAC7C;;;;AAQI,gBAAK;IACP;;kGANiC,UAA2B,EAAE,WAAe;AAAI,6GAAM,qCAAgB,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC5K,4BAAmB;EACrB;;;;;;oGAOoD,UAA2B,EAAE,WAAe;AAChG,eAAO,mFAAgC,CAAC,UAAU,EAAE,WAAW;EACjE;;MAEoB,oFAAqC;YAAG;;;;;;;AAQxD,uBAAW,OAAG,kFAA+B,CAAC,MAAM;AACpD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,2CAA+B,OAAG,kEAAkC,CAAC,iBAAW;AAChF,uBAAW,OAAO,CAAC,qCAA+B,EAAE,mBAAc;AAClE,gBAAK,CAAC,WAAM;AACZ,iBAAO,gDAAY,CAAC,GAAG,MAAM,WAAM,EAAE,qCAA+B;IACtE;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,mDAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,sCAA+B;;AAExC,YAAO,eAAc;IACvB;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,qBAAqB;AAChC,2CAA+B,YAAY;IAC7C;;sGAhCqC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,qCAA+B;AACmB,iHAAM,qCAAgB,KAAK,EAAE,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;wGAmCzF,UAA2B,EAAE,WAAe;AAClI,eAAO,uFAAoC,CAAC,UAAU,EAAE,WAAW;EACrE;;MAEI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,oCAAiB,CAAC,6EAA0B,EAAE,kFAAmC;AACxF,IAAM,gCAAa;AACnB,IAAM,6BAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,qDAAa;EACrB","file":"menu_item_affix_list.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list$46template: material_menu__menu_item_affix_list$46template
  };
});

//# sourceMappingURL=menu_item_affix_list.template.ddc.js.map
