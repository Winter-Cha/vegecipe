define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, modules, change_detection, modal_controller_directive, modal, overlay_ref, dom_service, deferred_content_aware, angular, deferred_content_aware$, overlay, async_action, modal_controller_directive$, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = modules.src__core__linker__view_type;
  const src__runtime__dom_helpers = modules.src__runtime__dom_helpers;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__style_encapsulation = modules.src__core__linker__style_encapsulation;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__laminate__components__modal__modal_controller_directive = modal_controller_directive.src__laminate__components__modal__modal_controller_directive;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const angular$46template = angular.angular$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const laminate__overlay__overlay$46template = overlay.laminate__overlay__overlay$46template;
  const model__action__async_action$46template = async_action.model__action__async_action$46template;
  const src__laminate__components__modal__modal_controller_directive$46template = modal_controller_directive$.src__laminate__components__modal__modal_controller_directive$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const laminate__components__modal__modal$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [src__core__linker__app_view.AppView, core.int])))();
  let AppViewOfModalComponent = () => (AppViewOfModalComponent = dart.constFn(src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent)))();
  let AppViewAndintToAppViewOfModalComponent = () => (AppViewAndintToAppViewOfModalComponent = dart.constFn(dart.fnType(AppViewOfModalComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfModalComponent = () => (ComponentFactoryOfModalComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(laminate__components__modal__modal.ModalComponent)))();
  let VoidToModalComponent = () => (VoidToModalComponent = dart.constFn(dart.fnType(laminate__components__modal__modal.ModalComponent, [])))();
  let ComponentRefOfModalComponent = () => (ComponentRefOfModalComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent)))();
  let VoidToGlobalModalStack = () => (VoidToGlobalModalStack = dart.constFn(dart.fnType(laminate__components__modal__modal.GlobalModalStack, [])))();
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template.styles$ModalComponent*/get styles$ModalComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_1 = dart.privateName(laminate__components__modal__modal$46template, "_appEl_1");
  const _ModalControllerDirective_1_9 = dart.privateName(laminate__components__modal__modal$46template, "_ModalControllerDirective_1_9");
  const _expr_0 = dart.privateName(laminate__components__modal__modal$46template, "_expr_0");
  const _expr_1 = dart.privateName(laminate__components__modal__modal$46template, "_expr_1");
  laminate__components__modal__modal$46template.ViewModalComponent0 = class ViewModalComponent0 extends src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent) {
    static get _debugComponentUrl() {
      return dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/laminate/components/modal/modal.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = src__runtime__dom_helpers.appendText(parentRenderNode, "    ");
      let _anchor_1 = src__runtime__dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(laminate__components__modal__modal$46template.viewFactory_ModalComponent1, AppViewAndintToAppViewOfvoid()));
      this[_ModalControllerDirective_1_9] = new src__laminate__components__modal__modal_controller_directive.ModalControllerDirective.new(_TemplateRef_1_8, this[_appEl_1]);
      let _text_2 = src__runtime__dom_helpers.appendText(parentRenderNode, "\n  ");
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.resolvedOverlayRef;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ModalControllerDirective_1_9].overlay = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_ModalControllerDirective_1_9].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.uniquePaneId;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        src__runtime__dom_helpers.updateAttribute(this.rootEl, "pane-id", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = laminate__components__modal__modal$46template.ViewModalComponent0._componentStyles;
      if (styles == null) {
        laminate__components__modal__modal$46template.ViewModalComponent0._componentStyles = styles = laminate__components__modal__modal$46template.ViewModalComponent0._componentStyles = src__core__linker__style_encapsulation.ComponentStyles.unscoped(laminate__components__modal__modal$46template.styles$ModalComponent, laminate__components__modal__modal$46template.ViewModalComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (laminate__components__modal__modal$46template.ViewModalComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_ModalControllerDirective_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    laminate__components__modal__modal$46template.ViewModalComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("modal"));
  }).prototype = laminate__components__modal__modal$46template.ViewModalComponent0.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template.ViewModalComponent0);
  dart.setMethodSignature(laminate__components__modal__modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template.ViewModalComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(laminate__components__modal__modal$46template.ViewModalComponent0, "package:angular_components/laminate/components/modal/modal.template.dart");
  dart.setFieldSignature(laminate__components__modal__modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal$46template.ViewModalComponent0.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_ModalControllerDirective_1_9]: dart.fieldType(src__laminate__components__modal__modal_controller_directive.ModalControllerDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(laminate__components__modal__modal$46template.ViewModalComponent0, {
    /*laminate__components__modal__modal$46template.ViewModalComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template._ModalComponentNgFactory*/get _ModalComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfModalComponent()).new("modal", dart.fn(laminate__components__modal__modal$46template.viewFactory_ModalComponentHost0, AppViewAndintToAppViewOfModalComponent())));
    }
  });
  dart.copyProperties(laminate__components__modal__modal$46template, {
    get ModalComponentNgFactory() {
      return laminate__components__modal__modal$46template._ModalComponentNgFactory;
    }
  });
  laminate__components__modal__modal$46template._ViewModalComponent1 = class _ViewModalComponent1 extends src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent) {
    build() {
      let _text_0 = src__runtime__dom_helpers.createText("\n      ");
      let _text_1 = src__runtime__dom_helpers.createText("\n    ");
      this.init((() => {
        let _ = [_text_0];
        _[$addAll](core.Iterable._check(this.projectedNodes[$_get](0)));
        _[$addAll]([_text_1]);
        return _;
      })(), null);
    }
  };
  (laminate__components__modal__modal$46template._ViewModalComponent1.new = function(parentView, parentIndex) {
    laminate__components__modal__modal$46template._ViewModalComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.initComponentStyles();
  }).prototype = laminate__components__modal__modal$46template._ViewModalComponent1.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template._ViewModalComponent1);
  dart.setMethodSignature(laminate__components__modal__modal$46template._ViewModalComponent1, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template._ViewModalComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent), [])
  }));
  dart.setLibraryUri(laminate__components__modal__modal$46template._ViewModalComponent1, "package:angular_components/laminate/components/modal/modal.template.dart");
  laminate__components__modal__modal$46template.viewFactory_ModalComponent1 = function(parentView, parentIndex) {
    return new laminate__components__modal__modal$46template._ViewModalComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template.styles$ModalComponentHost*/get styles$ModalComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = dart.privateName(laminate__components__modal__modal$46template, "_compView_0");
  const _ModalComponent_0_5 = dart.privateName(laminate__components__modal__modal$46template, "_ModalComponent_0_5");
  laminate__components__modal__modal$46template._ViewModalComponentHost0 = class _ViewModalComponentHost0 extends src__core__linker__app_view.AppView$(laminate__components__modal__modal.ModalComponent) {
    build() {
      this[_compView_0] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ModalComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex)), laminate__components__modal__modal.GlobalModalStack._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex)), laminate__components__modal__modal.GlobalModalStack._check(this.injectorGetOptional(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ModalComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfModalComponent()).new(0, this, this.rootEl, this[_ModalComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 0 === nodeIndex) {
        return this[_ModalComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ModalComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_ModalComponent_0_5].ngOnDestroy();
    }
  };
  (laminate__components__modal__modal$46template._ViewModalComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ModalComponent_0_5] = null;
    laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = laminate__components__modal__modal$46template._ViewModalComponentHost0.prototype;
  dart.addTypeTests(laminate__components__modal__modal$46template._ViewModalComponentHost0);
  dart.setMethodSignature(laminate__components__modal__modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(laminate__components__modal__modal.ModalComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(laminate__components__modal__modal$46template._ViewModalComponentHost0, "package:angular_components/laminate/components/modal/modal.template.dart");
  dart.setFieldSignature(laminate__components__modal__modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal$46template._ViewModalComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_0_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent)
  }));
  laminate__components__modal__modal$46template.viewFactory_ModalComponentHost0 = function(parentView, parentIndex) {
    return new laminate__components__modal__modal$46template._ViewModalComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(laminate__components__modal__modal$46template, {
    /*laminate__components__modal__modal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__components__modal__modal$46template.initReflector = function() {
    if (dart.test(laminate__components__modal__modal$46template._visited)) {
      return;
    }
    laminate__components__modal__modal$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), dart.fn(() => new laminate__components__modal__modal.GlobalModalStack.new(), VoidToGlobalModalStack()));
    src__di__reflector.registerComponent(dart.wrapType(laminate__components__modal__modal.ModalComponent), laminate__components__modal__modal$46template.ModalComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    laminate__overlay__overlay$46template.initReflector();
    model__action__async_action$46template.initReflector();
    src__laminate__components__modal__modal_controller_directive$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal.template.ddc", {
    "package:angular_components/laminate/components/modal/modal.template.dart": laminate__components__modal__modal$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.template.dart"],"names":[],"mappings":"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","file":"modal.template.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal$46template: laminate__components__modal__modal$46template
  };
});

//# sourceMappingURL=modal.template.ddc.js.map
