define(['dart_sdk', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/model/ui/highlighted_text_model.template'], function(dart_sdk, highlighted_text$46scss$46css, modules, change_detection, highlighted_text, text_binding, highlighted_text_model, interpolate, angular, highlighted_text_model$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const highlighted_text__highlighted_text$46scss$46css$46shim = highlighted_text$46scss$46css.highlighted_text__highlighted_text$46scss$46css$46shim;
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
  const src__di__reflector = change_detection.src__di__reflector;
  const highlighted_text__highlighted_text = highlighted_text.highlighted_text__highlighted_text;
  const src__runtime__text_binding = text_binding.src__runtime__text_binding;
  const model__ui__highlighted_text_model = highlighted_text_model.model__ui__highlighted_text_model;
  const src__runtime__interpolate = interpolate.src__runtime__interpolate;
  const angular$46template = angular.angular$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model$.model__ui__highlighted_text_model$46template;
  const highlighted_text__highlighted_text$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfHighlightedTextComponent = () => (AppViewOfHighlightedTextComponent = dart.constFn(src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let AppViewAndintToAppViewOfHighlightedTextComponent = () => (AppViewAndintToAppViewOfHighlightedTextComponent = dart.constFn(dart.fnType(AppViewOfHighlightedTextComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHighlightedTextComponent = () => (ComponentFactoryOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  let ComponentRefOfHighlightedTextComponent = () => (ComponentRefOfHighlightedTextComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent)))();
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent*/get styles$HighlightedTextComponent() {
      return [highlighted_text__highlighted_text$46scss$46css$46shim.styles];
    }
  });
  const _appEl_1 = dart.privateName(highlighted_text__highlighted_text$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(highlighted_text__highlighted_text$46template, "_NgFor_1_9");
  const _expr_0 = dart.privateName(highlighted_text__highlighted_text$46template, "_expr_0");
  highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0 = class ViewHighlightedTextComponent0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_text.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1, AppViewAndintToAppViewOfvoid()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
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
    initComponentStyles() {
      let styles = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles;
      if (styles == null) {
        highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = styles = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.scoped(highlighted_text__highlighted_text$46template.styles$HighlightedTextComponent, highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("highlighted-text"));
  }).prototype = highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), []),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, "package:angular_components/highlighted_text/highlighted_text.template.dart");
  dart.setFieldSignature(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0, {
    /*highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template._HighlightedTextComponentNgFactory*/get _HighlightedTextComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHighlightedTextComponent()).new("highlighted-text", dart.fn(highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, AppViewAndintToAppViewOfHighlightedTextComponent())));
    }
  });
  dart.copyProperties(highlighted_text__highlighted_text$46template, {
    get HighlightedTextComponentNgFactory() {
      return highlighted_text__highlighted_text$46template._HighlightedTextComponentNgFactory;
    }
  });
  const _textBinding_1 = dart.privateName(highlighted_text__highlighted_text$46template, "_textBinding_1");
  const _el_0 = dart.privateName(highlighted_text__highlighted_text$46template, "_el_0");
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1 = class _ViewHighlightedTextComponent1 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(html.HtmlElement._check(this[_el_0]), "text-segment");
      this.addShimE(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let local_segment = src__runtime__optimizations.unsafeCast(model__ui__highlighted_text_model.HighlightedTextSegment, this.locals[$_get]("$implicit"));
      let currVal_0 = local_segment.isHighlighted;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        src__runtime__dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0]), "segment-highlight", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(src__runtime__interpolate.interpolateString0(local_segment.text));
    }
  };
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new src__runtime__text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), [])
  }));
  dart.setLibraryUri(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, "package:angular_components/highlighted_text/highlighted_text.template.dart");
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(src__runtime__text_binding.TextBinding),
    [_expr_0]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponent1 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template.styles$HighlightedTextComponentHost*/get styles$HighlightedTextComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(highlighted_text__highlighted_text$46template, "_compView_0");
  const _HighlightedTextComponent_0_5 = dart.privateName(highlighted_text__highlighted_text$46template, "_HighlightedTextComponent_0_5");
  highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0 = class _ViewHighlightedTextComponentHost0 extends src__core__linker__app_view.AppView$(highlighted_text__highlighted_text.HighlightedTextComponent) {
    build() {
      this[_compView_0] = new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedTextComponent_0_5] = new highlighted_text__highlighted_text.HighlightedTextComponent.new();
      this[_compView_0].create(this[_HighlightedTextComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHighlightedTextComponent()).new(0, this, this.rootEl, this[_HighlightedTextComponent_0_5]);
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
    }
  };
  (highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedTextComponent_0_5] = null;
    highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.prototype;
  dart.addTypeTests(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.setMethodSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getMethods(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(highlighted_text__highlighted_text.HighlightedTextComponent), [])
  }));
  dart.setLibraryUri(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, "package:angular_components/highlighted_text/highlighted_text.template.dart");
  dart.setFieldSignature(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_0_5]: dart.fieldType(highlighted_text__highlighted_text.HighlightedTextComponent)
  }));
  highlighted_text__highlighted_text$46template.viewFactory_HighlightedTextComponentHost0 = function(parentView, parentIndex) {
    return new highlighted_text__highlighted_text$46template._ViewHighlightedTextComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(highlighted_text__highlighted_text$46template, {
    /*highlighted_text__highlighted_text$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  highlighted_text__highlighted_text$46template.initReflector = function() {
    if (dart.test(highlighted_text__highlighted_text$46template._visited)) {
      return;
    }
    highlighted_text__highlighted_text$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(highlighted_text__highlighted_text.HighlightedTextComponent), highlighted_text__highlighted_text$46template.HighlightedTextComponentNgFactory);
    angular$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.template.ddc", {
    "package:angular_components/highlighted_text/highlighted_text.template.dart": highlighted_text__highlighted_text$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.template.dart"],"names":[],"mappings":"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","file":"highlighted_text.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text$46template: highlighted_text__highlighted_text$46template
  };
});

//# sourceMappingURL=highlighted_text.template.ddc.js.map
