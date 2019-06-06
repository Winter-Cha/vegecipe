define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const memoize = Object.create(dart.library);
  memoize.memo0 = function(R, func) {
    let prevResult = null;
    let isInitial = true;
    return dart.fn(() => {
      if (!isInitial) {
        return prevResult;
      } else {
        prevResult = func();
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, []));
  };
  memoize.memo1 = function(A, R, func) {
    let prevArg = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn(arg => {
      if (!isInitial && dart.equals(arg, prevArg)) {
        return prevResult;
      } else {
        prevArg = arg;
        prevResult = func(arg);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A]));
  };
  memoize.memo2 = function(A, B, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevResult = func(argA, argB);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B]));
  };
  memoize.memo3 = function(A, B, C, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevResult = func(argA, argB, argC);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C]));
  };
  memoize.memo4 = function(A, B, C, D, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevResult = func(argA, argB, argC, argD);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D]));
  };
  memoize.memo5 = function(A, B, C, D, E, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevResult = func(argA, argB, argC, argD, argE);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E]));
  };
  memoize.memo6 = function(A, B, C, D, E, F, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevResult = func(argA, argB, argC, argD, argE, argF);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F]));
  };
  memoize.memo7 = function(A, B, C, D, E, F, G, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G]));
  };
  memoize.memo8 = function(A, B, C, D, E, F, G, H, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H]));
  };
  memoize.memo9 = function(A, B, C, D, E, F, G, H, I, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH) && dart.equals(argI, prevArgI)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H, I]));
  };
  memoize.memo10 = function(A, B, C, D, E, F, G, H, I, J, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevArgJ = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ) => {
      if (!isInitial && dart.equals(argA, prevArgA) && dart.equals(argB, prevArgB) && dart.equals(argC, prevArgC) && dart.equals(argD, prevArgD) && dart.equals(argE, prevArgE) && dart.equals(argF, prevArgF) && dart.equals(argG, prevArgG) && dart.equals(argH, prevArgH) && dart.equals(argI, prevArgI) && dart.equals(argJ, prevArgJ)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevArgJ = argJ;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H, I, J]));
  };
  memoize.imemo1 = function(A, R, func) {
    let prevArg = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn(arg => {
      if (!isInitial && core.identical(arg, prevArg)) {
        return prevResult;
      } else {
        prevArg = arg;
        prevResult = func(arg);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A]));
  };
  memoize.imemo2 = function(A, B, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevResult = func(argA, argB);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B]));
  };
  memoize.imemo3 = function(A, B, C, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevResult = func(argA, argB, argC);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C]));
  };
  memoize.imemo4 = function(A, B, C, D, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevResult = func(argA, argB, argC, argD);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D]));
  };
  memoize.imemo5 = function(A, B, C, D, E, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevResult = func(argA, argB, argC, argD, argE);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E]));
  };
  memoize.imemo6 = function(A, B, C, D, E, F, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevResult = func(argA, argB, argC, argD, argE, argF);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F]));
  };
  memoize.imemo7 = function(A, B, C, D, E, F, G, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G]));
  };
  memoize.imemo8 = function(A, B, C, D, E, F, G, H, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H]));
  };
  memoize.imemo9 = function(A, B, C, D, E, F, G, H, I, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH) && core.identical(argI, prevArgI)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H, I]));
  };
  memoize.imemo10 = function(A, B, C, D, E, F, G, H, I, J, R, func) {
    let prevArgA = null;
    let prevArgB = null;
    let prevArgC = null;
    let prevArgD = null;
    let prevArgE = null;
    let prevArgF = null;
    let prevArgG = null;
    let prevArgH = null;
    let prevArgI = null;
    let prevArgJ = null;
    let prevResult = null;
    let isInitial = true;
    return dart.fn((argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ) => {
      if (!isInitial && core.identical(argA, prevArgA) && core.identical(argB, prevArgB) && core.identical(argC, prevArgC) && core.identical(argD, prevArgD) && core.identical(argE, prevArgE) && core.identical(argF, prevArgF) && core.identical(argG, prevArgG) && core.identical(argH, prevArgH) && core.identical(argI, prevArgI) && core.identical(argJ, prevArgJ)) {
        return prevResult;
      } else {
        prevArgA = argA;
        prevArgB = argB;
        prevArgC = argC;
        prevArgD = argD;
        prevArgE = argE;
        prevArgF = argF;
        prevArgG = argG;
        prevArgH = argH;
        prevArgI = argI;
        prevArgJ = argJ;
        prevResult = func(argA, argB, argC, argD, argE, argF, argG, argH, argI, argJ);
        isInitial = false;
        return prevResult;
      }
    }, dart.fnType(R, [A, B, C, D, E, F, G, H, I, J]));
  };
  dart.trackLibraries("packages/memoize/memoize.ddc", {
    "package:memoize/memoize.dart": memoize
  }, '{"version":3,"sourceRoot":"","sources":["memoize.dart"],"names":[],"mappings":"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","file":"memoize.ddc.js"}');
  // Exports:
  return {
    memoize: memoize
  };
});

//# sourceMappingURL=memoize.ddc.js.map
