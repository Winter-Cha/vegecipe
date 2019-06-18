define(['dart_sdk', 'packages/intl/intl'], function(dart_sdk, intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const model__date__date_formatter = Object.create(dart.library);
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  dart.defineLazy(model__date__date_formatter, {
    /*model__date__date_formatter._dayFormat*/get _dayFormat() {
      return new intl$.DateFormat.d();
    },
    /*model__date__date_formatter._dateFormat*/get _dateFormat() {
      return new intl$.DateFormat.yMMMd();
    },
    /*model__date__date_formatter._yearFormat*/get _yearFormat() {
      return new intl$.DateFormat.y();
    },
    /*model__date__date_formatter._monthFormat*/get _monthFormat() {
      return new intl$.DateFormat.MMM();
    },
    /*model__date__date_formatter._ptBrEndpointFormat*/get _ptBrEndpointFormat() {
      return new intl$.DateFormat.new("d MMM y");
    }
  });
  model__date__date_formatter._rangeEndpointFormat = function(locale) {
    return locale === "pt_BR" ? model__date__date_formatter._ptBrEndpointFormat : model__date__date_formatter._dateFormat;
  };
  model__date__date_formatter.formatDate = function(date, format) {
    if (format === void 0) format = null;
    let l = date == null ? null : date.format(format != null ? format : model__date__date_formatter._dateFormat);
    return l != null ? l : "";
  };
  model__date__date_formatter.formatRange = function(range) {
    if (range == null) return "";
    if (range.start == null && range.end == null) return model__date__date_formatter._DateFormatterMessages._allTimeMsg;
    if (dart.equals(range.start, range.end)) return model__date__date_formatter.formatDate(range.start, model__date__date_formatter._dateFormat);
    if (range.start == null || range.end == null || range.start.year != range.end.year) {
      let format = model__date__date_formatter._rangeEndpointFormat(intl$.Intl.defaultLocale);
      return model__date__date_formatter._DateFormatterMessages._formatArbitraryRange(model__date__date_formatter.formatDate(range.start, format), model__date__date_formatter.formatDate(range.end, format));
    }
    if (range.start.month != range.end.month) {
      return model__date__date_formatter._DateFormatterMessages._formatSameYearRange(range.start.format(model__date__date_formatter._monthFormat), range.start.format(model__date__date_formatter._dayFormat), range.end.format(model__date__date_formatter._monthFormat), range.end.format(model__date__date_formatter._dayFormat), range.start.format(model__date__date_formatter._yearFormat));
    }
    return model__date__date_formatter._DateFormatterMessages._formatSameMonthRange(range.start.format(model__date__date_formatter._monthFormat), range.start.format(model__date__date_formatter._dayFormat), range.end.format(model__date__date_formatter._dayFormat), range.start.format(model__date__date_formatter._yearFormat));
  };
  let const$;
  let const$0;
  let const$1;
  model__date__date_formatter._DateFormatterMessages = class _DateFormatterMessages extends core.Object {
    static _formatSameYearRange(month1, day1, month2, day2, year) {
      return intl$.Intl.message(dart.str(month1) + " " + dart.str(day1) + " – " + dart.str(month2) + " " + dart.str(day2) + ", " + dart.str(year), {name: "_DateFormatterMessages__formatSameYearRange", desc: "Date range format when a range starts and ends in the same " + "year. Please reorder and adjust punctuation as appropriate for " + "the locale. Do not include time units such as 년 or 年.", args: JSArrayOfObject().of([month1, day1, month2, day2, year]), examples: const$ || (const$ = dart.constMap(core.String, core.Object, ["month1", "Jul", "day1", "25", "month2", "Aug", "day2", "3", "year", "2015"]))});
    }
    static _formatSameMonthRange(month, day1, day2, year) {
      return intl$.Intl.message(dart.str(month) + " " + dart.str(day1) + " – " + dart.str(day2) + ", " + dart.str(year), {name: "_DateFormatterMessages__formatSameMonthRange", desc: "Date range format when a range starts and ends in the same " + "month. Please reorder and adjust punctuation as appropriate " + "for the locale. Do not include time units such as 년 or 年.", args: JSArrayOfObject().of([month, day1, day2, year]), examples: const$0 || (const$0 = dart.constMap(core.String, core.Object, ["month", "Jul", "day1", "25", "day2", "29", "year", "2015"]))});
    }
    static _formatArbitraryRange(start, end) {
      return intl$.Intl.message(dart.str(start) + " – " + dart.str(end), {name: "_DateFormatterMessages__formatArbitraryRange", desc: "Date range containing two arbitrary dates which can fall in " + "different years. Please reorder and adjust punctuation as " + "appropriate for the locale, if necessary. Do not include " + "time units such as 년 or 年.", args: JSArrayOfObject().of([start, end]), examples: const$1 || (const$1 = dart.constMap(core.String, core.Object, ["start", "Jul 27, 2015", "end", "Aug 3, 2015"]))});
    }
  };
  (model__date__date_formatter._DateFormatterMessages.new = function() {
  }).prototype = model__date__date_formatter._DateFormatterMessages.prototype;
  dart.addTypeTests(model__date__date_formatter._DateFormatterMessages);
  dart.defineLazy(model__date__date_formatter._DateFormatterMessages, {
    /*model__date__date_formatter._DateFormatterMessages._allTimeMsg*/get _allTimeMsg() {
      return intl$.Intl.message("All time", {name: "_allTimeMsg", desc: "Indicates that the selected date range has no start or end"});
    }
  });
  dart.trackLibraries("packages/angular_components/model/date/date_formatter.ddc", {
    "package:angular_components/model/date/date_formatter.dart": model__date__date_formatter
  }, '{"version":3,"sourceRoot":"","sources":["date_formatter.dart"],"names":[],"mappings":";;;;;;;;;;MAOM,sCAAU;iBAAG,kBAAY;;MACzB,uCAAW;iBAAG,sBAAgB;;MAC9B,uCAAW;iBAAG,kBAAY;;MAC1B,wCAAY;iBAAG,oBAAc;;MAG7B,+CAAmB;iBAAG,oBAAU,CAAC;;;8DAEP,MAAa;UACzC,OAAM,KAAI,UAAU,+CAAmB,GAAG,uCAAW;;oDAGvC,IAAS,EAAG,MAAiB;2BAAN;YACrC,IAAI,kBAAJ,IAAI,OAAQ,CAAC,MAAM,WAAN,MAAM,GAAI,uCAAW;2BAAK;EAAE;qDAC1B,KAAe;AAChC,QAAI,KAAK,IAAI,MAAM,MAAO;AAC1B,QAAI,KAAK,MAAM,IAAI,QAAQ,KAAK,IAAI,IAAI,MACtC,MAAO,mDAAsB,YAAY;AAC3C,oBAAI,KAAK,MAAM,EAAI,KAAK,IAAI,GAAE,MAAO,uCAAU,CAAC,KAAK,MAAM,EAAE,uCAAW;AAExE,QAAI,KAAK,MAAM,IAAI,QACf,KAAK,IAAI,IAAI,QACb,KAAK,MAAM,KAAK,IAAI,KAAK,IAAI,KAAK,EAAE;AACtC,UAAM,SAAS,gDAAoB,CAAC,UAAI,cAAc;AACtD,YAAO,mDAAsB,sBAAsB,CAC/C,sCAAU,CAAC,KAAK,MAAM,EAAE,MAAM,GAAG,sCAAU,CAAC,KAAK,IAAI,EAAE,MAAM;;AAEnE,QAAI,KAAK,MAAM,MAAM,IAAI,KAAK,IAAI,MAAM,EAAE;AACxC,YAAO,mDAAsB,qBAAqB,CAC9C,KAAK,MAAM,OAAO,CAAC,wCAAY,GAC/B,KAAK,MAAM,OAAO,CAAC,sCAAU,GAC7B,KAAK,IAAI,OAAO,CAAC,wCAAY,GAC7B,KAAK,IAAI,OAAO,CAAC,sCAAU,GAC3B,KAAK,MAAM,OAAO,CAAC,uCAAW;;AAEpC,UAAO,mDAAsB,sBAAsB,CAC/C,KAAK,MAAM,OAAO,CAAC,wCAAY,GAC/B,KAAK,MAAM,OAAO,CAAC,sCAAU,GAC7B,KAAK,IAAI,OAAO,CAAC,sCAAU,GAC3B,KAAK,MAAM,OAAO,CAAC,uCAAW;EACpC;;;;;gCAUqC,MAAa,EAAE,IAAW,EAAE,MAAa,EACpE,IAAW,EAAE,IAAW;YAC5B,WAAI,QAAQ,CAAC,SAAE,MAAM,mBAAE,IAAI,qBAAI,MAAM,mBAAE,IAAI,oBAAG,IAAI,UACxC,qDACA,gEACF,oEACA,+DACE,sBACJ,MAAM,EACN,IAAI,EACJ,MAAM,EACN,IAAI,EACJ,IAAI,cAEI,6DACR,UAAU,OACV,QAAQ,MACR,UAAU,OACV,QAAQ,KACR,QAAQ;IACR;iCAGF,KAAY,EAAE,IAAW,EAAE,IAAW,EAAE,IAAW;YACvD,WAAI,QAAQ,CAAC,SAAE,KAAK,mBAAE,IAAI,qBAAI,IAAI,oBAAG,IAAI,UAC/B,sDACA,gEACF,iEACA,mEACE,sBACJ,KAAK,EACL,IAAI,EACJ,IAAI,EACJ,IAAI,cAEI,+DACR,SAAS,OACT,QAAQ,MACR,QAAQ,MACR,QAAQ;IACR;iCAE0B,KAAY,EAAE,GAAU;YACxD,WAAI,QAAQ,CAAC,SAAE,KAAK,qBAAI,GAAG,UACjB,sDACA,iEACF,+DACA,8DACA,oCACE,sBAAC,KAAK,EAAE,GAAG,cACP,+DAAO,SAAS,gBAAgB,OAAO;IAAe;;;EAC1E;;;MA1De,8DAAW;YAAG,WAAI,QAAQ,CAAC,mBAC9B,qBACA","file":"date_formatter.ddc.js"}');
  // Exports:
  return {
    model__date__date_formatter: model__date__date_formatter
  };
});

//# sourceMappingURL=date_formatter.ddc.js.map
