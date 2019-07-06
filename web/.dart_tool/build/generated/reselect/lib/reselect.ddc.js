define(['dart_sdk', 'packages/memoize/memoize'], function(dart_sdk, memoize) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const memoize$ = memoize.memoize;
  const reselect = Object.create(dart.library);
  let FnToFn = () => (FnToFn = dart.constFn(dart.gFnType((A, R) => [dart.fnType(R, [A]), [dart.fnType(R, [A])]])))();
  let FnToFn$ = () => (FnToFn$ = dart.constFn(dart.gFnType((A, B, R) => [dart.fnType(R, [A, B]), [dart.fnType(R, [A, B])]])))();
  let FnToFn$0 = () => (FnToFn$0 = dart.constFn(dart.gFnType((A, B, C, R) => [dart.fnType(R, [A, B, C]), [dart.fnType(R, [A, B, C])]])))();
  let FnToFn$1 = () => (FnToFn$1 = dart.constFn(dart.gFnType((A, B, C, D, R) => [dart.fnType(R, [A, B, C, D]), [dart.fnType(R, [A, B, C, D])]])))();
  let FnToFn$2 = () => (FnToFn$2 = dart.constFn(dart.gFnType((A, B, C, D, E, R) => [dart.fnType(R, [A, B, C, D, E]), [dart.fnType(R, [A, B, C, D, E])]])))();
  let FnToFn$3 = () => (FnToFn$3 = dart.constFn(dart.gFnType((A, B, C, D, E, F, R) => [dart.fnType(R, [A, B, C, D, E, F]), [dart.fnType(R, [A, B, C, D, E, F])]])))();
  let FnToFn$4 = () => (FnToFn$4 = dart.constFn(dart.gFnType((A, B, C, D, E, F, G, R) => [dart.fnType(R, [A, B, C, D, E, F, G]), [dart.fnType(R, [A, B, C, D, E, F, G])]])))();
  let FnToFn$5 = () => (FnToFn$5 = dart.constFn(dart.gFnType((A, B, C, D, E, F, G, H, R) => [dart.fnType(R, [A, B, C, D, E, F, G, H]), [dart.fnType(R, [A, B, C, D, E, F, G, H])]])))();
  let FnToFn$6 = () => (FnToFn$6 = dart.constFn(dart.gFnType((A, B, C, D, E, F, G, H, I, R) => [dart.fnType(R, [A, B, C, D, E, F, G, H, I]), [dart.fnType(R, [A, B, C, D, E, F, G, H, I])]])))();
  let FnToFn$7 = () => (FnToFn$7 = dart.constFn(dart.gFnType((A, B, C, D, E, F, G, H, I, J, R) => [dart.fnType(R, [A, B, C, D, E, F, G, H, I, J]), [dart.fnType(R, [A, B, C, D, E, F, G, H, I, J])]])))();
  reselect.createSelector1 = function(S, R1, T, selector, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo1, FnToFn()), R1, T))(combiner);
    return dart.fn(state => memoized(selector(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector2 = function(S, R1, R2, T, selector1, selector2, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo2, FnToFn$()), R1, R2, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector3 = function(S, R1, R2, R3, T, selector1, selector2, selector3, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo3, FnToFn$0()), R1, R2, R3, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector4 = function(S, R1, R2, R3, R4, T, selector1, selector2, selector3, selector4, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo4, FnToFn$1()), R1, R2, R3, R4, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector5 = function(S, R1, R2, R3, R4, R5, T, selector1, selector2, selector3, selector4, selector5, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo5, FnToFn$2()), R1, R2, R3, R4, R5, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector6 = function(S, R1, R2, R3, R4, R5, R6, T, selector1, selector2, selector3, selector4, selector5, selector6, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo6, FnToFn$3()), R1, R2, R3, R4, R5, R6, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state), selector6(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector7 = function(S, R1, R2, R3, R4, R5, R6, R7, T, selector1, selector2, selector3, selector4, selector5, selector6, selector7, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo7, FnToFn$4()), R1, R2, R3, R4, R5, R6, R7, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state), selector6(state), selector7(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector8 = function(S, R1, R2, R3, R4, R5, R6, R7, R8, T, selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo8, FnToFn$5()), R1, R2, R3, R4, R5, R6, R7, R8, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state), selector6(state), selector7(state), selector8(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector9 = function(S, R1, R2, R3, R4, R5, R6, R7, R8, R9, T, selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, selector9, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo9, FnToFn$6()), R1, R2, R3, R4, R5, R6, R7, R8, R9, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state), selector6(state), selector7(state), selector8(state), selector9(state)), dart.fnType(T, [S]));
  };
  reselect.createSelector10 = function(S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T, selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, selector9, selector10, combiner, opts) {
    let memoize = opts && 'memoize' in opts ? opts.memoize : null;
    let memoized = (memoize != null ? memoize : dart.gbind(dart.fn(memoize$.memo10, FnToFn$7()), R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T))(combiner);
    return dart.fn(state => memoized(selector1(state), selector2(state), selector3(state), selector4(state), selector5(state), selector6(state), selector7(state), selector8(state), selector9(state), selector10(state)), dart.fnType(T, [S]));
  };
  dart.trackLibraries("packages/reselect/reselect.ddc", {
    "package:reselect/reselect.dart": reselect
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reselect.dart"],"names":[],"mappings":"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","file":"reselect.ddc.js"}');
  // Exports:
  return {
    reselect: reselect
  };
});

//# sourceMappingURL=reselect.ddc.js.map
