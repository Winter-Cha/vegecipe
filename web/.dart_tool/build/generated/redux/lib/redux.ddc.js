define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const redux = Object.create(dart.library);
  const src__store = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const $add = dartx.add;
  const $last = dartx.last;
  const $reversed = dartx.reversed;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  let StoreOfObject = () => (StoreOfObject = dart.constFn(src__store.Store$(core.Object)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let StoreOfObjectAnddynamicAndFnTovoid = () => (StoreOfObjectAnddynamicAndFnTovoid = dart.constFn(dart.fnType(dart.void, [StoreOfObject(), dart.dynamic, dynamicTovoid()])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfdynamicTovoid = () => (JSArrayOfdynamicTovoid = dart.constFn(_interceptors.JSArray$(dynamicTovoid())))();
  let ListOfdynamicTovoid = () => (ListOfdynamicTovoid = dart.constFn(core.List$(dynamicTovoid())))();
  const _is_ReducerClass_default = Symbol('_is_ReducerClass_default');
  src__store.ReducerClass$ = dart.generic(State => {
    class ReducerClass extends core.Object {}
    (ReducerClass.new = function() {
    }).prototype = ReducerClass.prototype;
    dart.addTypeTests(ReducerClass);
    ReducerClass.prototype[_is_ReducerClass_default] = true;
    dart.setLibraryUri(ReducerClass, "package:redux/src/store.dart");
    return ReducerClass;
  });
  src__store.ReducerClass = src__store.ReducerClass$();
  dart.addTypeTests(src__store.ReducerClass, _is_ReducerClass_default);
  const _is_MiddlewareClass_default = Symbol('_is_MiddlewareClass_default');
  src__store.MiddlewareClass$ = dart.generic(State => {
    class MiddlewareClass extends core.Object {}
    (MiddlewareClass.new = function() {
    }).prototype = MiddlewareClass.prototype;
    dart.addTypeTests(MiddlewareClass);
    MiddlewareClass.prototype[_is_MiddlewareClass_default] = true;
    dart.setLibraryUri(MiddlewareClass, "package:redux/src/store.dart");
    return MiddlewareClass;
  });
  src__store.MiddlewareClass = src__store.MiddlewareClass$();
  dart.addTypeTests(src__store.MiddlewareClass, _is_MiddlewareClass_default);
  let const$;
  const _changeController = dart.privateName(src__store, "_changeController");
  const _state = dart.privateName(src__store, "_state");
  const _dispatchers = dart.privateName(src__store, "_dispatchers");
  const _createReduceAndNotify = dart.privateName(src__store, "_createReduceAndNotify");
  const _createDispatchers = dart.privateName(src__store, "_createDispatchers");
  const _is_Store_default = Symbol('_is_Store_default');
  src__store.Store$ = dart.generic(State => {
    let StreamControllerOfState = () => (StreamControllerOfState = dart.constFn(async.StreamController$(State)))();
    let StateAnddynamicToState = () => (StateAnddynamicToState = dart.constFn(dart.fnType(State, [State, dart.dynamic])))();
    class Store extends core.Object {
      get reducer() {
        return this[reducer$];
      }
      set reducer(value) {
        this[reducer$] = StateAnddynamicToState()._check(value);
      }
      get state() {
        return this[_state];
      }
      get onChange() {
        return this[_changeController].stream;
      }
      [_createReduceAndNotify](distinct) {
        return dart.fn(action => {
          let state = this.reducer(this[_state], action);
          if (dart.test(distinct) && dart.equals(state, this[_state])) return;
          this[_state] = state;
          this[_changeController].add(state);
        }, dynamicToNull());
      }
      [_createDispatchers](middleware, reduceAndNotify) {
        let dispatchers = JSArrayOfdynamicTovoid().of([]);
        dispatchers[$add](reduceAndNotify);
        for (let nextMiddleware of middleware[$reversed]) {
          let next = dispatchers[$last];
          dispatchers[$add](dart.fn(action => nextMiddleware(this, action, next), dynamicTovoid()));
        }
        return dispatchers[$reversed][$toList]();
      }
      dispatch(action) {
        this[_dispatchers][$_get](0)(action);
      }
      teardown() {
        return async.async(dart.dynamic, (function* teardown() {
          this[_state] = null;
          return this[_changeController].close();
        }).bind(this));
      }
    }
    (Store.new = function(reducer, opts) {
      let initialState = opts && 'initialState' in opts ? opts.initialState : null;
      let middleware = opts && 'middleware' in opts ? opts.middleware : const$ || (const$ = dart.constList([], StoreOfObjectAnddynamicAndFnTovoid()));
      let syncStream = opts && 'syncStream' in opts ? opts.syncStream : false;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      this[_state] = null;
      this[_dispatchers] = null;
      this[reducer$] = reducer;
      this[_changeController] = StreamControllerOfState().broadcast({sync: syncStream});
      this[_state] = initialState;
      this[_dispatchers] = this[_createDispatchers](middleware, this[_createReduceAndNotify](distinct));
    }).prototype = Store.prototype;
    dart.addTypeTests(Store);
    Store.prototype[_is_Store_default] = true;
    const reducer$ = Symbol("Store.reducer");
    dart.setMethodSignature(Store, () => ({
      __proto__: dart.getMethods(Store.__proto__),
      [_createReduceAndNotify]: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [core.bool]),
      [_createDispatchers]: dart.fnType(core.List$(dart.fnType(dart.void, [dart.dynamic])), [core.List$(dart.fnType(dart.void, [src__store.Store$(State), dart.dynamic, dart.fnType(dart.void, [dart.dynamic])])), dart.fnType(dart.void, [dart.dynamic])]),
      dispatch: dart.fnType(dart.void, [dart.dynamic]),
      teardown: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Store, () => ({
      __proto__: dart.getGetters(Store.__proto__),
      state: State,
      onChange: async.Stream$(State)
    }));
    dart.setLibraryUri(Store, "package:redux/src/store.dart");
    dart.setFieldSignature(Store, () => ({
      __proto__: dart.getFields(Store.__proto__),
      reducer: dart.fieldType(StateAnddynamicToState()),
      [_changeController]: dart.finalFieldType(StreamControllerOfState()),
      [_state]: dart.fieldType(State),
      [_dispatchers]: dart.fieldType(ListOfdynamicTovoid())
    }));
    return Store;
  });
  src__store.Store = src__store.Store$();
  dart.addTypeTests(src__store.Store, _is_Store_default);
  const _is_TypedReducer_default = Symbol('_is_TypedReducer_default');
  src__utils.TypedReducer$ = dart.generic((State, Action) => {
    let ReducerClassOfState = () => (ReducerClassOfState = dart.constFn(src__store.ReducerClass$(State)))();
    let StateAndActionToState = () => (StateAndActionToState = dart.constFn(dart.fnType(State, [State, Action])))();
    class TypedReducer extends core.Object {
      get reducer() {
        return this[reducer$];
      }
      set reducer(value) {
        super.reducer = value;
      }
      call(state, action) {
        State._check(state);
        if (Action.is(action)) {
          return this.reducer(state, action);
        }
        return state;
      }
    }
    (TypedReducer.new = function(reducer) {
      this[reducer$] = reducer;
    }).prototype = TypedReducer.prototype;
    dart.addTypeTests(TypedReducer);
    TypedReducer.prototype[_is_TypedReducer_default] = true;
    const reducer$ = Symbol("TypedReducer.reducer");
    TypedReducer[dart.implements] = () => [ReducerClassOfState()];
    dart.setMethodSignature(TypedReducer, () => ({
      __proto__: dart.getMethods(TypedReducer.__proto__),
      call: dart.fnType(State, [core.Object, dart.dynamic])
    }));
    dart.setLibraryUri(TypedReducer, "package:redux/src/utils.dart");
    dart.setFieldSignature(TypedReducer, () => ({
      __proto__: dart.getFields(TypedReducer.__proto__),
      reducer: dart.finalFieldType(StateAndActionToState())
    }));
    return TypedReducer;
  });
  src__utils.TypedReducer = src__utils.TypedReducer$();
  dart.addTypeTests(src__utils.TypedReducer, _is_TypedReducer_default);
  const _is_TypedMiddleware_default = Symbol('_is_TypedMiddleware_default');
  src__utils.TypedMiddleware$ = dart.generic((State, Action) => {
    let StoreOfState = () => (StoreOfState = dart.constFn(src__store.Store$(State)))();
    let MiddlewareClassOfState = () => (MiddlewareClassOfState = dart.constFn(src__store.MiddlewareClass$(State)))();
    let StoreOfStateAndActionAndFnTovoid = () => (StoreOfStateAndActionAndFnTovoid = dart.constFn(dart.fnType(dart.void, [StoreOfState(), Action, dynamicTovoid()])))();
    class TypedMiddleware extends core.Object {
      get middleware() {
        return this[middleware$];
      }
      set middleware(value) {
        super.middleware = value;
      }
      call(store, action, next) {
        StoreOfState()._check(store);
        if (Action.is(action)) {
          this.middleware(store, action, next);
        } else {
          next(action);
        }
      }
    }
    (TypedMiddleware.new = function(middleware) {
      this[middleware$] = middleware;
    }).prototype = TypedMiddleware.prototype;
    dart.addTypeTests(TypedMiddleware);
    TypedMiddleware.prototype[_is_TypedMiddleware_default] = true;
    const middleware$ = Symbol("TypedMiddleware.middleware");
    TypedMiddleware[dart.implements] = () => [MiddlewareClassOfState()];
    dart.setMethodSignature(TypedMiddleware, () => ({
      __proto__: dart.getMethods(TypedMiddleware.__proto__),
      call: dart.fnType(dart.void, [core.Object, dart.dynamic, dart.fnType(dart.void, [dart.dynamic])])
    }));
    dart.setLibraryUri(TypedMiddleware, "package:redux/src/utils.dart");
    dart.setFieldSignature(TypedMiddleware, () => ({
      __proto__: dart.getFields(TypedMiddleware.__proto__),
      middleware: dart.finalFieldType(StoreOfStateAndActionAndFnTovoid())
    }));
    return TypedMiddleware;
  });
  src__utils.TypedMiddleware = src__utils.TypedMiddleware$();
  dart.addTypeTests(src__utils.TypedMiddleware, _is_TypedMiddleware_default);
  src__utils.combineReducers = function(State, reducers) {
    return dart.fn((state, action) => {
      for (let reducer of reducers) {
        state = reducer(state, action);
      }
      return state;
    }, dart.fnType(State, [State, dart.dynamic]));
  };
  dart.trackLibraries("packages/redux/redux.ddc", {
    "package:redux/redux.dart": redux,
    "package:redux/src/store.dart": src__store,
    "package:redux/src/utils.dart": src__utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/store.dart","src/utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAgDA;;;;;;;;;;;;IAqDA;;;;;;;;;;;;;;;;;;;MAsDiB;;;;;;;cA6BI,aAAM;;;cAwBK,wBAAiB,OAAO;;+BAOhB,QAAa;AACjD,cAAO,SAAC,MAAc;AACpB,cAAM,QAAQ,YAAO,CAAC,YAAM,EAAE,MAAM;AAEpC,wBAAI,QAAQ,iBAAI,KAAK,EAAI,YAAM,GAAE;AAEjC,sBAAM,GAAG,KAAK;AACd,iCAAiB,IAAI,CAAC,KAAK;;MAE/B;2BAGE,UAAkC,EAClC,eAA8B;AAE9B,YAAM,cAAc;QAAd,kBAAsC,eAAe;AAG3D,iBAAS,iBAAkB,WAAU,WAAS,EAAE;AAC9C,cAAM,OAAO,WAAW,OAAK;AAE7B,qBAAW,MAAI,CACb,QAAC,MAAc,IAAK,cAAc,CAAC,MAAM,MAAM,EAAE,IAAI;;AAIzD,cAAO,YAAW,WAAS,SAAO;MACpC;eAMc,MAAc;AAC1B,0BAAY,QAAC,GAAG,MAAM;MACxB;;AAMkB;AAChB,sBAAM,GAAG;AACT,gBAAO,wBAAiB,MAAM;QAChC;;;0BAjGE,OAAY;UACN;UACkB,8DAAa;UAChC,8DAAY;UAQZ,wDAAU;MAfX,YAAM;MACS,kBAAY;MAG1B,cAAO,GAAP,OAAO;MAaR,uBAAiB,GAAG,AAAI,mCAA0B,QAAO,UAAU;AACvE,kBAAM,GAAG,YAAY;AACrB,wBAAY,GAAG,wBAAkB,CAC/B,UAAU,EACV,4BAAsB,CAAC,QAAQ;IAEnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCtFiD;;;;;;WAKtC,KAAW,EAAE,MAAc;qBAArB;AACf,sBAAI,MAAM,GAAY;AACpB,gBAAO,aAAO,CAAC,KAAK,EAAE,MAAM;;AAG9B,cAAO,MAAK;MACd;;iCATa,OAAY;MAAP,cAAO,GAAP,OAAO;IAAC;;;;;;;;;;;;;;;;;;;;;;;;MAiHxB;;;;;;WAKQ,KAAkB,EAAE,MAAc,EAAE,IAAmB;8BAA1C;AACrB,sBAAI,MAAM,GAAY;AACpB,yBAAU,CAAC,KAAK,EAAE,MAAM,EAAE,IAAI;eACzB;AACL,cAAI,CAAC,MAAM;;MAEf;;oCATgB,UAAe;MAAV,iBAAU,GAAV,UAAU;IAAC;;;;;;;;;;;;;;;;;;+CAgCI,QAAiC;AACrE,UAAO,UAAC,KAAW,EAAE,MAAc;AACjC,eAAW,UAAW,SAAQ,EAAE;AAC9B,aAAK,GAAG,OAAO,CAAC,KAAK,EAAE,MAAM;;AAE/B,YAAO,MAAK;;EAEhB","file":"redux.ddc.js"}');
  // Exports:
  return {
    redux: redux,
    src__store: src__store,
    src__utils: src__utils
  };
});

//# sourceMappingURL=redux.ddc.js.map
