define(["@grafana/data","@grafana/runtime","@grafana/ui","angular","emotion","app/core/config","app/core/core","app/core/core_module","app/core/table_model","app/core/utils/datemath","app/core/utils/kbn","app/plugins/sdk","jquery","lodash","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_angular__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_config__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core_module__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_table_model__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./datasource-zabbix/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/semver/classes/comparator.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/classes/comparator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
var Comparator = /*#__PURE__*/function () {_createClass(Comparator, null, [{ key: "ANY", get: function get()
    {
      return ANY;
    } }]);
  function Comparator(comp, options) {_classCallCheck(this, Comparator);
    if (!options || _typeof(options) !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false };

    }

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }

    debug('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);

    if (this.semver === ANY) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }

    debug('comp', this);
  }_createClass(Comparator, [{ key: "parse", value: function parse(

    comp) {
      var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      var m = comp.match(r);

      if (!m) {
        throw new TypeError("Invalid comparator: ".concat(comp));
      }

      this.operator = m[1] !== undefined ? m[1] : '';
      if (this.operator === '=') {
        this.operator = '';
      }

      // if it literally is just '>' or '' then allow anything.
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    } }, { key: "toString", value: function toString()

    {
      return this.value;
    } }, { key: "test", value: function test(

    version) {
      debug('Comparator.test', version, this.options.loose);

      if (this.semver === ANY || version === ANY) {
        return true;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      return cmp(version, this.operator, this.semver, this.options);
    } }, { key: "intersects", value: function intersects(

    comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError('a Comparator is required');
      }

      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false };

      }

      if (this.operator === '') {
        if (this.value === '') {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === '') {
        if (comp.value === '') {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }

      var sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') && (
      comp.operator === '>=' || comp.operator === '>');
      var sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') && (
      comp.operator === '<=' || comp.operator === '<');
      var sameSemVer = this.semver.version === comp.semver.version;
      var differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') && (
      comp.operator === '>=' || comp.operator === '<=');
      var oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) && (
      this.operator === '>=' || this.operator === '>') && (
      comp.operator === '<=' || comp.operator === '<');
      var oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) && (
      this.operator === '<=' || this.operator === '<') && (
      comp.operator === '>=' || comp.operator === '>');

      return (
        sameDirectionIncreasing ||
        sameDirectionDecreasing ||
        sameSemVer && differentDirectionsInclusive ||
        oppositeDirectionsLessThan ||
        oppositeDirectionsGreaterThan);

    } }]);return Comparator;}();


module.exports = Comparator;var _require =

__webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js"),re = _require.re,t = _require.t;
var cmp = __webpack_require__(/*! ../functions/cmp */ "../node_modules/semver/functions/cmp.js");
var debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js");
var SemVer = __webpack_require__(/*! ./semver */ "../node_modules/semver/classes/semver.js");
var Range = __webpack_require__(/*! ./range */ "../node_modules/semver/classes/range.js");

/***/ }),

/***/ "../node_modules/semver/classes/range.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/classes/range.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // hoisted class for cyclic dependency
var Range = /*#__PURE__*/function () {
  function Range(range, options) {var _this = this;_classCallCheck(this, Range);
    if (!options || _typeof(options) !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false };

    }

    if (range instanceof Range) {
      if (
      range.loose === !!options.loose &&
      range.includePrerelease === !!options.includePrerelease)
      {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this;
    }

    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;

    // First, split based on boolean or ||
    this.raw = range;
    this.set = range.
    split(/\s*\|\|\s*/)
    // map the range to a 2d array of comparators
    .map(function (range) {return _this.parseRange(range.trim());})
    // throw out any comparator lists that are empty
    // this generally means that it was not a valid range, which is allowed
    // in loose mode, but will still throw if the WHOLE range is invalid.
    .filter(function (c) {return c.length;});

    if (!this.set.length) {
      throw new TypeError("Invalid SemVer Range: ".concat(range));
    }

    this.format();
  }_createClass(Range, [{ key: "format", value: function format()

    {
      this.range = this.set.
      map(function (comps) {
        return comps.join(' ').trim();
      }).
      join('||').
      trim();
      return this.range;
    } }, { key: "toString", value: function toString()

    {
      return this.range;
    } }, { key: "parseRange", value: function parseRange(

    range) {var _this2 = this;
      var loose = this.options.loose;
      range = range.trim();
      // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
      var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug('hyphen replace', range);
      // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
      range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
      debug('comparator trim', range, re[t.COMPARATORTRIM]);

      // `~ 1.2.3` => `~1.2.3`
      range = range.replace(re[t.TILDETRIM], tildeTrimReplace);

      // `^ 1.2.3` => `^1.2.3`
      range = range.replace(re[t.CARETTRIM], caretTrimReplace);

      // normalize spaces
      range = range.split(/\s+/).join(' ');

      // At this point, the range is completely trimmed and
      // ready to be split into comparators.

      var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      return range.
      split(' ').
      map(function (comp) {return parseComparator(comp, _this2.options);}).
      join(' ').
      split(/\s+/).
      map(function (comp) {return replaceGTE0(comp, _this2.options);})
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? function (comp) {return !!comp.match(compRe);} : function () {return true;}).
      map(function (comp) {return new Comparator(comp, _this2.options);});
    } }, { key: "intersects", value: function intersects(

    range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError('a Range is required');
      }

      return this.set.some(function (thisComparators) {
        return (
          isSatisfiable(thisComparators, options) &&
          range.set.some(function (rangeComparators) {
            return (
              isSatisfiable(rangeComparators, options) &&
              thisComparators.every(function (thisComparator) {
                return rangeComparators.every(function (rangeComparator) {
                  return thisComparator.intersects(rangeComparator, options);
                });
              }));

          }));

      });
    }

    // if ANY of the sets match ALL of its comparators, then pass
  }, { key: "test", value: function test(version) {
      if (!version) {
        return false;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      for (var i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    } }]);return Range;}();

module.exports = Range;

var Comparator = __webpack_require__(/*! ./comparator */ "../node_modules/semver/classes/comparator.js");
var debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js");
var SemVer = __webpack_require__(/*! ./semver */ "../node_modules/semver/classes/semver.js");var _require =






__webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js"),re = _require.re,t = _require.t,comparatorTrimReplace = _require.comparatorTrimReplace,tildeTrimReplace = _require.tildeTrimReplace,caretTrimReplace = _require.caretTrimReplace;

// take a set of comparators and determine whether there
// exists a version which can satisfy it
var isSatisfiable = function isSatisfiable(comparators, options) {
  var result = true;
  var remainingComparators = comparators.slice();
  var testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options);
    });

    testComparator = remainingComparators.pop();
  }

  return result;
};

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
var parseComparator = function parseComparator(comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp;
};

var isX = function isX(id) {return !id || id.toLowerCase() === 'x' || id === '*';};

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
var replaceTildes = function replaceTildes(comp, options) {return (
    comp.trim().split(/\s+/).map(function (comp) {
      return replaceTilde(comp, options);
    }).join(' '));};

var replaceTilde = function replaceTilde(comp, options) {
  var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
    } else if (pr) {
      debug('replaceTilde pr', pr);
      ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(
      M, ".").concat(+m + 1, ".0-0");
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(
      M, ".").concat(+m + 1, ".0-0");
    }

    debug('tilde return', ret);
    return ret;
  });
};

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
var replaceCarets = function replaceCarets(comp, options) {return (
    comp.trim().split(/\s+/).map(function (comp) {
      return replaceCaret(comp, options);
    }).join(' '));};

var replaceCaret = function replaceCaret(comp, options) {
  debug('caret', comp, options);
  var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
  var z = options.includePrerelease ? '-0' : '';
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
    } else if (isX(p)) {
      if (M === '0') {
        ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
      } else {
        ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
      }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (M === '0') {
        if (m === '0') {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(
          M, ".").concat(m, ".").concat(+p + 1, "-0");
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(
          M, ".").concat(+m + 1, ".0-0");
        }
      } else {
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(
        +M + 1, ".0.0-0");
      }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0') {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(
          z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(
          z, " <").concat(M, ".").concat(+m + 1, ".0-0");
        }
      } else {
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(
        +M + 1, ".0.0-0");
      }
    }

    debug('caret return', ret);
    return ret;
  });
};

var replaceXRanges = function replaceXRanges(comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options);
  }).join(' ');
};

var replaceXRange = function replaceXRange(comp, options) {
  comp = comp.trim();
  var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }
      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      if (gtlt === '<')
      pr = '-0';

      ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
    } else if (xm) {
      ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
    } else if (xp) {
      ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(
      M, ".").concat(+m + 1, ".0-0");
    }

    debug('xRange return', ret);

    return ret;
  });
};

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
var replaceStars = function replaceStars(comp, options) {
  debug('replaceStars', comp, options);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '');
};

var replaceGTE0 = function replaceGTE0(comp, options) {
  debug('replaceGTE0', comp, options);
  return comp.trim().
  replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
var hyphenReplace = function hyphenReplace(incPr) {return function ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = '';
    } else if (isX(fm)) {
      from = ">=".concat(fM, ".0.0").concat(incPr ? '-0' : '');
    } else if (isX(fp)) {
      from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? '-0' : '');
    } else if (fpr) {
      from = ">=".concat(from);
    } else {
      from = ">=".concat(from).concat(incPr ? '-0' : '');
    }

    if (isX(tM)) {
      to = '';
    } else if (isX(tm)) {
      to = "<".concat(+tM + 1, ".0.0-0");
    } else if (isX(tp)) {
      to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
    } else if (tpr) {
      to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
    } else if (incPr) {
      to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
    } else {
      to = "<=".concat(to);
    }

    return "".concat(from, " ").concat(to).trim();
  };};

var testSet = function testSet(set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var _i = 0; _i < set.length; _i++) {
      debug(set[_i].semver);
      if (set[_i].semver === Comparator.ANY) {
        continue;
      }

      if (set[_i].semver.prerelease.length > 0) {
        var allowed = set[_i].semver;
        if (allowed.major === version.major &&
        allowed.minor === version.minor &&
        allowed.patch === version.patch) {
          return true;
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
};

/***/ }),

/***/ "../node_modules/semver/classes/semver.js":
/*!************************************************!*\
  !*** ../node_modules/semver/classes/semver.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js");var _require =
__webpack_require__(/*! ../internal/constants */ "../node_modules/semver/internal/constants.js"),MAX_LENGTH = _require.MAX_LENGTH,MAX_SAFE_INTEGER = _require.MAX_SAFE_INTEGER;var _require2 =
__webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js"),re = _require2.re,t = _require2.t;var _require3 =

__webpack_require__(/*! ../internal/identifiers */ "../node_modules/semver/internal/identifiers.js"),compareIdentifiers = _require3.compareIdentifiers;var
SemVer = /*#__PURE__*/function () {
  function SemVer(version, options) {_classCallCheck(this, SemVer);
    if (!options || _typeof(options) !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false };

    }
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
      version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError("Invalid Version: ".concat(version));
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError("version is longer than ".concat(
      MAX_LENGTH, " characters"));

    }

    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease;

    var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

    if (!m) {
      throw new TypeError("Invalid Version: ".concat(version));
    }

    this.raw = version;

    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version');
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(function (id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }_createClass(SemVer, [{ key: "format", value: function format()

    {
      this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
      if (this.prerelease.length) {
        this.version += "-".concat(this.prerelease.join('.'));
      }
      return this.version;
    } }, { key: "toString", value: function toString()

    {
      return this.version;
    } }, { key: "compare", value: function compare(

    other) {
      debug('SemVer.compare', this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === 'string' && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }

      if (other.version === this.version) {
        return 0;
      }

      return this.compareMain(other) || this.comparePre(other);
    } }, { key: "compareMain", value: function compareMain(

    other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      return (
        compareIdentifiers(this.major, other.major) ||
        compareIdentifiers(this.minor, other.minor) ||
        compareIdentifiers(this.patch, other.patch));

    } }, { key: "comparePre", value: function comparePre(

    other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      // NOT having a prerelease is > having one
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }

      var i = 0;
      do {
        var a = this.prerelease[i];
        var b = other.prerelease[i];
        debug('prerelease compare', i, a, b);
        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    } }, { key: "compareBuild", value: function compareBuild(

    other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      var i = 0;
      do {
        var a = this.build[i];
        var b = other.build[i];
        debug('prerelease compare', i, a, b);
        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }

    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
  }, { key: "inc", value: function inc(release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc('pre', identifier);
          break;
        case 'preminor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc('pre', identifier);
          break;
        case 'prepatch':
          // If this is already a prerelease, it will bump to the next version
          // drop any prereleases that might already exist, since they are not
          // relevant at this point.
          this.prerelease.length = 0;
          this.inc('patch', identifier);
          this.inc('pre', identifier);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier);
          }
          this.inc('pre', identifier);
          break;

        case 'major':
          // If this is a pre-major version, bump up to the same major version.
          // Otherwise increment major.
          // 1.0.0-5 bumps to 1.0.0
          // 1.1.0 bumps to 2.0.0
          if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0)
          {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case 'minor':
          // If this is a pre-minor version, bump up to the same minor version.
          // Otherwise increment minor.
          // 1.2.0-5 bumps to 1.2.0
          // 1.2.1 bumps to 1.3.0
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case 'patch':
          // If this is not a pre-release version, it will increment the patch.
          // If it is a pre-release it will bump up to the same patch version.
          // 1.2.0-5 patches to 1.2.0
          // 1.2.0 patches to 1.2.1
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            var i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === 'number') {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              // didn't increment anything
              this.prerelease.push(0);
            }
          }
          if (identifier) {
            // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
            // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
            if (this.prerelease[0] === identifier) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0];
              }
            } else {
              this.prerelease = [identifier, 0];
            }
          }
          break;

        default:
          throw new Error("invalid increment argument: ".concat(release));}

      this.format();
      this.raw = this.version;
      return this;
    } }]);return SemVer;}();


module.exports = SemVer;

/***/ }),

/***/ "../node_modules/semver/functions/clean.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/clean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js");
var clean = function clean(version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
};
module.exports = clean;

/***/ }),

/***/ "../node_modules/semver/functions/cmp.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/cmp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var eq = __webpack_require__(/*! ./eq */ "../node_modules/semver/functions/eq.js");
var neq = __webpack_require__(/*! ./neq */ "../node_modules/semver/functions/neq.js");
var gt = __webpack_require__(/*! ./gt */ "../node_modules/semver/functions/gt.js");
var gte = __webpack_require__(/*! ./gte */ "../node_modules/semver/functions/gte.js");
var lt = __webpack_require__(/*! ./lt */ "../node_modules/semver/functions/lt.js");
var lte = __webpack_require__(/*! ./lte */ "../node_modules/semver/functions/lte.js");

var cmp = function cmp(a, op, b, loose) {
  switch (op) {
    case '===':
      if (_typeof(a) === 'object')
      a = a.version;
      if (_typeof(b) === 'object')
      b = b.version;
      return a === b;

    case '!==':
      if (_typeof(a) === 'object')
      a = a.version;
      if (_typeof(b) === 'object')
      b = b.version;
      return a !== b;

    case '':
    case '=':
    case '==':
      return eq(a, b, loose);

    case '!=':
      return neq(a, b, loose);

    case '>':
      return gt(a, b, loose);

    case '>=':
      return gte(a, b, loose);

    case '<':
      return lt(a, b, loose);

    case '<=':
      return lte(a, b, loose);

    default:
      throw new TypeError("Invalid operator: ".concat(op));}

};
module.exports = cmp;

/***/ }),

/***/ "../node_modules/semver/functions/coerce.js":
/*!**************************************************!*\
  !*** ../node_modules/semver/functions/coerce.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js");var _require =
__webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js"),re = _require.re,t = _require.t;

var coerce = function coerce(version, options) {
  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null;
  }

  options = options || {};

  var match = null;
  if (!options.rtl) {
    match = version.match(re[t.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    var next;
    while ((next = re[t.COERCERTL].exec(version)) && (
    !match || match.index + match[0].length !== version.length))
    {
      if (!match ||
      next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1;
  }

  if (match === null)
  return null;

  return parse("".concat(match[2], ".").concat(match[3] || '0', ".").concat(match[4] || '0'), options);
};
module.exports = coerce;

/***/ }),

/***/ "../node_modules/semver/functions/compare-build.js":
/*!*********************************************************!*\
  !*** ../node_modules/semver/functions/compare-build.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var compareBuild = function compareBuild(a, b, loose) {
  var versionA = new SemVer(a, loose);
  var versionB = new SemVer(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;

/***/ }),

/***/ "../node_modules/semver/functions/compare-loose.js":
/*!*********************************************************!*\
  !*** ../node_modules/semver/functions/compare-loose.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var compareLoose = function compareLoose(a, b) {return compare(a, b, true);};
module.exports = compareLoose;

/***/ }),

/***/ "../node_modules/semver/functions/compare.js":
/*!***************************************************!*\
  !*** ../node_modules/semver/functions/compare.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var compare = function compare(a, b, loose) {return (
    new SemVer(a, loose).compare(new SemVer(b, loose)));};

module.exports = compare;

/***/ }),

/***/ "../node_modules/semver/functions/diff.js":
/*!************************************************!*\
  !*** ../node_modules/semver/functions/diff.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js");
var eq = __webpack_require__(/*! ./eq */ "../node_modules/semver/functions/eq.js");

var diff = function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    var hasPre = v1.prerelease.length || v2.prerelease.length;
    var prefix = hasPre ? 'pre' : '';
    var defaultResult = hasPre ? 'prerelease' : '';
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }
    return defaultResult; // may be undefined
  }
};
module.exports = diff;

/***/ }),

/***/ "../node_modules/semver/functions/eq.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/eq.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var eq = function eq(a, b, loose) {return compare(a, b, loose) === 0;};
module.exports = eq;

/***/ }),

/***/ "../node_modules/semver/functions/gt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/gt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var gt = function gt(a, b, loose) {return compare(a, b, loose) > 0;};
module.exports = gt;

/***/ }),

/***/ "../node_modules/semver/functions/gte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/gte.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var gte = function gte(a, b, loose) {return compare(a, b, loose) >= 0;};
module.exports = gte;

/***/ }),

/***/ "../node_modules/semver/functions/inc.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/inc.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");

var inc = function inc(version, release, options, identifier) {
  if (typeof options === 'string') {
    identifier = options;
    options = undefined;
  }

  try {
    return new SemVer(version, options).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
};
module.exports = inc;

/***/ }),

/***/ "../node_modules/semver/functions/lt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/lt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var lt = function lt(a, b, loose) {return compare(a, b, loose) < 0;};
module.exports = lt;

/***/ }),

/***/ "../node_modules/semver/functions/lte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/lte.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var lte = function lte(a, b, loose) {return compare(a, b, loose) <= 0;};
module.exports = lte;

/***/ }),

/***/ "../node_modules/semver/functions/major.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/major.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var major = function major(a, loose) {return new SemVer(a, loose).major;};
module.exports = major;

/***/ }),

/***/ "../node_modules/semver/functions/minor.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/minor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var minor = function minor(a, loose) {return new SemVer(a, loose).minor;};
module.exports = minor;

/***/ }),

/***/ "../node_modules/semver/functions/neq.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/neq.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var neq = function neq(a, b, loose) {return compare(a, b, loose) !== 0;};
module.exports = neq;

/***/ }),

/***/ "../node_modules/semver/functions/parse.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/parse.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var _require = __webpack_require__(/*! ../internal/constants */ "../node_modules/semver/internal/constants.js"),MAX_LENGTH = _require.MAX_LENGTH;var _require2 =
__webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js"),re = _require2.re,t = _require2.t;
var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");

var parse = function parse(version, options) {
  if (!options || _typeof(options) !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false };

  }

  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH) {
    return null;
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL];
  if (!r.test(version)) {
    return null;
  }

  try {
    return new SemVer(version, options);
  } catch (er) {
    return null;
  }
};

module.exports = parse;

/***/ }),

/***/ "../node_modules/semver/functions/patch.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/patch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var patch = function patch(a, loose) {return new SemVer(a, loose).patch;};
module.exports = patch;

/***/ }),

/***/ "../node_modules/semver/functions/prerelease.js":
/*!******************************************************!*\
  !*** ../node_modules/semver/functions/prerelease.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js");
var prerelease = function prerelease(version, options) {
  var parsed = parse(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;

/***/ }),

/***/ "../node_modules/semver/functions/rcompare.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/functions/rcompare.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js");
var rcompare = function rcompare(a, b, loose) {return compare(b, a, loose);};
module.exports = rcompare;

/***/ }),

/***/ "../node_modules/semver/functions/rsort.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/rsort.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareBuild = __webpack_require__(/*! ./compare-build */ "../node_modules/semver/functions/compare-build.js");
var rsort = function rsort(list, loose) {return list.sort(function (a, b) {return compareBuild(b, a, loose);});};
module.exports = rsort;

/***/ }),

/***/ "../node_modules/semver/functions/satisfies.js":
/*!*****************************************************!*\
  !*** ../node_modules/semver/functions/satisfies.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var satisfies = function satisfies(version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }
  return range.test(version);
};
module.exports = satisfies;

/***/ }),

/***/ "../node_modules/semver/functions/sort.js":
/*!************************************************!*\
  !*** ../node_modules/semver/functions/sort.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareBuild = __webpack_require__(/*! ./compare-build */ "../node_modules/semver/functions/compare-build.js");
var sort = function sort(list, loose) {return list.sort(function (a, b) {return compareBuild(a, b, loose);});};
module.exports = sort;

/***/ }),

/***/ "../node_modules/semver/functions/valid.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/functions/valid.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ./parse */ "../node_modules/semver/functions/parse.js");
var valid = function valid(version, options) {
  var v = parse(version, options);
  return v ? v.version : null;
};
module.exports = valid;

/***/ }),

/***/ "../node_modules/semver/index.js":
/*!***************************************!*\
  !*** ../node_modules/semver/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// just pre-load all the stuff that index.js lazily exports
var internalRe = __webpack_require__(/*! ./internal/re */ "../node_modules/semver/internal/re.js");
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: __webpack_require__(/*! ./internal/constants */ "../node_modules/semver/internal/constants.js").SEMVER_SPEC_VERSION,
  SemVer: __webpack_require__(/*! ./classes/semver */ "../node_modules/semver/classes/semver.js"),
  compareIdentifiers: __webpack_require__(/*! ./internal/identifiers */ "../node_modules/semver/internal/identifiers.js").compareIdentifiers,
  rcompareIdentifiers: __webpack_require__(/*! ./internal/identifiers */ "../node_modules/semver/internal/identifiers.js").rcompareIdentifiers,
  parse: __webpack_require__(/*! ./functions/parse */ "../node_modules/semver/functions/parse.js"),
  valid: __webpack_require__(/*! ./functions/valid */ "../node_modules/semver/functions/valid.js"),
  clean: __webpack_require__(/*! ./functions/clean */ "../node_modules/semver/functions/clean.js"),
  inc: __webpack_require__(/*! ./functions/inc */ "../node_modules/semver/functions/inc.js"),
  diff: __webpack_require__(/*! ./functions/diff */ "../node_modules/semver/functions/diff.js"),
  major: __webpack_require__(/*! ./functions/major */ "../node_modules/semver/functions/major.js"),
  minor: __webpack_require__(/*! ./functions/minor */ "../node_modules/semver/functions/minor.js"),
  patch: __webpack_require__(/*! ./functions/patch */ "../node_modules/semver/functions/patch.js"),
  prerelease: __webpack_require__(/*! ./functions/prerelease */ "../node_modules/semver/functions/prerelease.js"),
  compare: __webpack_require__(/*! ./functions/compare */ "../node_modules/semver/functions/compare.js"),
  rcompare: __webpack_require__(/*! ./functions/rcompare */ "../node_modules/semver/functions/rcompare.js"),
  compareLoose: __webpack_require__(/*! ./functions/compare-loose */ "../node_modules/semver/functions/compare-loose.js"),
  compareBuild: __webpack_require__(/*! ./functions/compare-build */ "../node_modules/semver/functions/compare-build.js"),
  sort: __webpack_require__(/*! ./functions/sort */ "../node_modules/semver/functions/sort.js"),
  rsort: __webpack_require__(/*! ./functions/rsort */ "../node_modules/semver/functions/rsort.js"),
  gt: __webpack_require__(/*! ./functions/gt */ "../node_modules/semver/functions/gt.js"),
  lt: __webpack_require__(/*! ./functions/lt */ "../node_modules/semver/functions/lt.js"),
  eq: __webpack_require__(/*! ./functions/eq */ "../node_modules/semver/functions/eq.js"),
  neq: __webpack_require__(/*! ./functions/neq */ "../node_modules/semver/functions/neq.js"),
  gte: __webpack_require__(/*! ./functions/gte */ "../node_modules/semver/functions/gte.js"),
  lte: __webpack_require__(/*! ./functions/lte */ "../node_modules/semver/functions/lte.js"),
  cmp: __webpack_require__(/*! ./functions/cmp */ "../node_modules/semver/functions/cmp.js"),
  coerce: __webpack_require__(/*! ./functions/coerce */ "../node_modules/semver/functions/coerce.js"),
  Comparator: __webpack_require__(/*! ./classes/comparator */ "../node_modules/semver/classes/comparator.js"),
  Range: __webpack_require__(/*! ./classes/range */ "../node_modules/semver/classes/range.js"),
  satisfies: __webpack_require__(/*! ./functions/satisfies */ "../node_modules/semver/functions/satisfies.js"),
  toComparators: __webpack_require__(/*! ./ranges/to-comparators */ "../node_modules/semver/ranges/to-comparators.js"),
  maxSatisfying: __webpack_require__(/*! ./ranges/max-satisfying */ "../node_modules/semver/ranges/max-satisfying.js"),
  minSatisfying: __webpack_require__(/*! ./ranges/min-satisfying */ "../node_modules/semver/ranges/min-satisfying.js"),
  minVersion: __webpack_require__(/*! ./ranges/min-version */ "../node_modules/semver/ranges/min-version.js"),
  validRange: __webpack_require__(/*! ./ranges/valid */ "../node_modules/semver/ranges/valid.js"),
  outside: __webpack_require__(/*! ./ranges/outside */ "../node_modules/semver/ranges/outside.js"),
  gtr: __webpack_require__(/*! ./ranges/gtr */ "../node_modules/semver/ranges/gtr.js"),
  ltr: __webpack_require__(/*! ./ranges/ltr */ "../node_modules/semver/ranges/ltr.js"),
  intersects: __webpack_require__(/*! ./ranges/intersects */ "../node_modules/semver/ranges/intersects.js"),
  simplifyRange: __webpack_require__(/*! ./ranges/simplify */ "../node_modules/semver/ranges/simplify.js"),
  subset: __webpack_require__(/*! ./ranges/subset */ "../node_modules/semver/ranges/subset.js") };

/***/ }),

/***/ "../node_modules/semver/internal/constants.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/internal/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
var SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

module.exports = {
  SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH };

/***/ }),

/***/ "../node_modules/semver/internal/debug.js":
/*!************************************************!*\
  !*** ../node_modules/semver/internal/debug.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var debug =
(typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' &&
process.env &&
process.env.NODE_DEBUG &&
/\bsemver\b/i.test(process.env.NODE_DEBUG) ?
function () {var _console;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return (_console = console).error.apply(_console, ['SEMVER'].concat(args));} :
function () {};

module.exports = debug;

/***/ }),

/***/ "../node_modules/semver/internal/identifiers.js":
/*!******************************************************!*\
  !*** ../node_modules/semver/internal/identifiers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var numeric = /^[0-9]+$/;
var compareIdentifiers = function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 :
  anum && !bnum ? -1 :
  bnum && !anum ? 1 :
  a < b ? -1 :
  1;
};

var rcompareIdentifiers = function rcompareIdentifiers(a, b) {return compareIdentifiers(b, a);};

module.exports = {
  compareIdentifiers: compareIdentifiers,
  rcompareIdentifiers: rcompareIdentifiers };

/***/ }),

/***/ "../node_modules/semver/internal/re.js":
/*!*********************************************!*\
  !*** ../node_modules/semver/internal/re.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./constants */ "../node_modules/semver/internal/constants.js"),MAX_SAFE_COMPONENT_LENGTH = _require.MAX_SAFE_COMPONENT_LENGTH;
var debug = __webpack_require__(/*! ./debug */ "../node_modules/semver/internal/debug.js");
exports = module.exports = {};

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var t = exports.t = {};
var R = 0;

var createToken = function createToken(name, value, isGlobal) {
  var index = R++;
  debug(index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
};

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(
src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(
src[t.NUMERICIDENTIFIER], ")"));

createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(
src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(
src[t.NUMERICIDENTIFIERLOOSE], ")"));

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(
src[t.NONNUMERICIDENTIFIER], ")"));

createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(
src[t.NONNUMERICIDENTIFIER], ")"));

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(
src[t.PRERELEASEIDENTIFIER], ")*))"));

createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(
src[t.PRERELEASEIDENTIFIERLOOSE], ")*))"));

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(
src[t.BUILDIDENTIFIER], ")*))"));

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(
src[t.PRERELEASE], "?").concat(
src[t.BUILD], "?"));

createToken('FULL', "^".concat(src[t.FULLPLAIN], "$"));

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(
src[t.PRERELEASELOOSE], "?").concat(
src[t.BUILD], "?"));

createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));

createToken('GTLT', '((?:<|>)?=?)');

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));

createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(
src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(
src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(
src[t.PRERELEASE], ")?").concat(
src[t.BUILD], "?") + ")?)?");


createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(
src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(
src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(
src[t.PRERELEASELOOSE], ")?").concat(
src[t.BUILD], "?") + ")?)?");


createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$"));

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', "".concat('(^|[^\\d])' +
'(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(
MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(
MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:$|[^\\d])");

createToken('COERCERTL', src[t.COERCE], true);

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');

createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
exports.tildeTrimReplace = '$1~';

createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$"));

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');

createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
exports.caretTrimReplace = '$1^';

createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$"));

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$"));

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(
src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
exports.comparatorTrimReplace = '$1$2$3';

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(

src[t.XRANGEPLAIN], ")") + "\\s*$");


createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(

src[t.XRANGEPLAINLOOSE], ")") + "\\s*$");


// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');

/***/ }),

/***/ "../node_modules/semver/ranges/gtr.js":
/*!********************************************!*\
  !*** ../node_modules/semver/ranges/gtr.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Determine if version is greater than all the versions possible in the range.
var outside = __webpack_require__(/*! ./outside */ "../node_modules/semver/ranges/outside.js");
var gtr = function gtr(version, range, options) {return outside(version, range, '>', options);};
module.exports = gtr;

/***/ }),

/***/ "../node_modules/semver/ranges/intersects.js":
/*!***************************************************!*\
  !*** ../node_modules/semver/ranges/intersects.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var intersects = function intersects(r1, r2, options) {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2);
};
module.exports = intersects;

/***/ }),

/***/ "../node_modules/semver/ranges/ltr.js":
/*!********************************************!*\
  !*** ../node_modules/semver/ranges/ltr.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var outside = __webpack_require__(/*! ./outside */ "../node_modules/semver/ranges/outside.js");
// Determine if version is less than all the versions possible in the range
var ltr = function ltr(version, range, options) {return outside(version, range, '<', options);};
module.exports = ltr;

/***/ }),

/***/ "../node_modules/semver/ranges/max-satisfying.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/max-satisfying.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");

var maxSatisfying = function maxSatisfying(versions, range, options) {
  var max = null;
  var maxSV = null;
  var rangeObj = null;
  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  });
  return max;
};
module.exports = maxSatisfying;

/***/ }),

/***/ "../node_modules/semver/ranges/min-satisfying.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/min-satisfying.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var minSatisfying = function minSatisfying(versions, range, options) {
  var min = null;
  var minSV = null;
  var rangeObj = null;
  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  });
  return min;
};
module.exports = minSatisfying;

/***/ }),

/***/ "../node_modules/semver/ranges/min-version.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/ranges/min-version.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var gt = __webpack_require__(/*! ../functions/gt */ "../node_modules/semver/functions/gt.js");

var minVersion = function minVersion(range, loose) {
  range = new Range(range, loose);

  var minver = new SemVer('0.0.0');
  if (range.test(minver)) {
    return minver;
  }

  minver = new SemVer('0.0.0-0');
  if (range.test(minver)) {
    return minver;
  }

  minver = null;
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version);
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver;
          }
          break;
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;
        /* istanbul ignore next */
        default:
          throw new Error("Unexpected operation: ".concat(comparator.operator));}

    });
  }

  if (minver && range.test(minver)) {
    return minver;
  }

  return null;
};
module.exports = minVersion;

/***/ }),

/***/ "../node_modules/semver/ranges/outside.js":
/*!************************************************!*\
  !*** ../node_modules/semver/ranges/outside.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js");
var Comparator = __webpack_require__(/*! ../classes/comparator */ "../node_modules/semver/classes/comparator.js");var
ANY = Comparator.ANY;
var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var satisfies = __webpack_require__(/*! ../functions/satisfies */ "../node_modules/semver/functions/satisfies.js");
var gt = __webpack_require__(/*! ../functions/gt */ "../node_modules/semver/functions/gt.js");
var lt = __webpack_require__(/*! ../functions/lt */ "../node_modules/semver/functions/lt.js");
var lte = __webpack_require__(/*! ../functions/lte */ "../node_modules/semver/functions/lte.js");
var gte = __webpack_require__(/*! ../functions/gte */ "../node_modules/semver/functions/gte.js");

var outside = function outside(version, range, hilo, options) {
  version = new SemVer(version, options);
  range = new Range(range, options);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');}


  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.
  var _loop = function _loop(
  i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return { v: false };
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
    ltefn(version, low.semver)) {
      return { v: false };
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return { v: false };
    }};for (var i = 0; i < range.set.length; ++i) {var _ret = _loop(i);if (_typeof(_ret) === "object") return _ret.v;
  }
  return true;
};

module.exports = outside;

/***/ }),

/***/ "../node_modules/semver/ranges/simplify.js":
/*!*************************************************!*\
  !*** ../node_modules/semver/ranges/simplify.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} // given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
var satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../node_modules/semver/functions/satisfies.js");
var compare = __webpack_require__(/*! ../functions/compare.js */ "../node_modules/semver/functions/compare.js");
module.exports = function (versions, range, options) {
  var set = [];
  var min = null;
  var prev = null;
  var v = versions.sort(function (a, b) {return compare(a, b, options);});var _iterator = _createForOfIteratorHelper(
  v),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var version = _step.value;
      var included = satisfies(version, range, options);
      if (included) {
        prev = version;
        if (!min)
        min = version;
      } else {
        if (prev) {
          set.push([min, prev]);
        }
        prev = null;
        min = null;
      }
    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
  if (min)
  set.push([min, null]);

  var ranges = [];
  for (var _i = 0, _set = set; _i < _set.length; _i++) {var _set$_i = _slicedToArray(_set[_i], 2),_min = _set$_i[0],max = _set$_i[1];
    if (_min === max)
    ranges.push(_min);else
    if (!max && _min === v[0])
    ranges.push('*');else
    if (!max)
    ranges.push(">=".concat(_min));else
    if (_min === v[0])
    ranges.push("<=".concat(max));else

    ranges.push("".concat(_min, " - ").concat(max));
  }
  var simplified = ranges.join(' || ');
  var original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};

/***/ }),

/***/ "../node_modules/semver/ranges/subset.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/ranges/subset.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var Range = __webpack_require__(/*! ../classes/range.js */ "../node_modules/semver/classes/range.js");var _require =
__webpack_require__(/*! ../classes/comparator.js */ "../node_modules/semver/classes/comparator.js"),ANY = _require.ANY;
var satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../node_modules/semver/functions/satisfies.js");
var compare = __webpack_require__(/*! ../functions/compare.js */ "../node_modules/semver/functions/compare.js");

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a subset of some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else return false
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
// - If LT
//   - If LT.semver is greater than that of any > comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
// - If any C is a = range, and GT or LT are set, return false
// - Else return true

var subset = function subset(sub, dom, options) {
  sub = new Range(sub, options);
  dom = new Range(dom, options);
  var sawNonNull = false;var _iterator = _createForOfIteratorHelper(

  sub.set),_step;try {OUTER: for (_iterator.s(); !(_step = _iterator.n()).done;) {var simpleSub = _step.value;var _iterator2 = _createForOfIteratorHelper(
      dom.set),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var simpleDom = _step2.value;
          var isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub)
          continue OUTER;
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
      } catch (err) {_iterator2.e(err);} finally {_iterator2.f();}if (sawNonNull)
      return false;
    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
  return true;
};

var simpleSubset = function simpleSubset(sub, dom, options) {
  if (sub.length === 1 && sub[0].semver === ANY)
  return dom.length === 1 && dom[0].semver === ANY;

  var eqSet = new Set();
  var gt, lt;var _iterator3 = _createForOfIteratorHelper(
  sub),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var c = _step3.value;
      if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options);else
      if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options);else

      eqSet.add(c.semver);
    }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

  if (eqSet.size > 1)
  return null;

  var gtltComp;
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options);
    if (gtltComp > 0)
    return null;else
    if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
    return null;
  }

  // will iterate one or zero times
  var _iterator4 = _createForOfIteratorHelper(eqSet),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var eq = _step4.value;
      if (gt && !satisfies(eq, String(gt), options))
      return null;

      if (lt && !satisfies(eq, String(lt), options))
      return null;var _iterator6 = _createForOfIteratorHelper(

      dom),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _c = _step6.value;
          if (!satisfies(eq, String(_c), options))
          return false;
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
      return true;
    }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

  var higher, lower;
  var hasDomLT, hasDomGT;var _iterator5 = _createForOfIteratorHelper(
  dom),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _c2 = _step5.value;
      hasDomGT = hasDomGT || _c2.operator === '>' || _c2.operator === '>=';
      hasDomLT = hasDomLT || _c2.operator === '<' || _c2.operator === '<=';
      if (gt) {
        if (_c2.operator === '>' || _c2.operator === '>=') {
          higher = higherGT(gt, _c2, options);
          if (higher === _c2)
          return false;
        } else if (gt.operator === '>=' && !satisfies(gt.semver, String(_c2), options))
        return false;
      }
      if (lt) {
        if (_c2.operator === '<' || _c2.operator === '<=') {
          lower = lowerLT(lt, _c2, options);
          if (lower === _c2)
          return false;
        } else if (lt.operator === '<=' && !satisfies(lt.semver, String(_c2), options))
        return false;
      }
      if (!_c2.operator && (lt || gt) && gtltComp !== 0)
      return false;
    }

    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  } catch (err) {_iterator5.e(err);} finally {_iterator5.f();}if (gt && hasDomLT && !lt && gtltComp !== 0)
  return false;

  if (lt && hasDomGT && !gt && gtltComp !== 0)
  return false;

  return true;
};

// >=1.2.3 is lower than >1.2.3
var higherGT = function higherGT(a, b, options) {
  if (!a)
  return b;
  var comp = compare(a.semver, b.semver, options);
  return comp > 0 ? a :
  comp < 0 ? b :
  b.operator === '>' && a.operator === '>=' ? b :
  a;
};

// <=1.2.3 is higher than <1.2.3
var lowerLT = function lowerLT(a, b, options) {
  if (!a)
  return b;
  var comp = compare(a.semver, b.semver, options);
  return comp < 0 ? a :
  comp > 0 ? b :
  b.operator === '<' && a.operator === '<=' ? b :
  a;
};

module.exports = subset;

/***/ }),

/***/ "../node_modules/semver/ranges/to-comparators.js":
/*!*******************************************************!*\
  !*** ../node_modules/semver/ranges/to-comparators.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");

// Mostly just for testing and legacy API reasons
var toComparators = function toComparators(range, options) {return (
    new Range(range, options).set.
    map(function (comp) {return comp.map(function (c) {return c.value;}).join(' ').trim().split(' ');}));};

module.exports = toComparators;

/***/ }),

/***/ "../node_modules/semver/ranges/valid.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/ranges/valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Range = __webpack_require__(/*! ../classes/range */ "../node_modules/semver/classes/range.js");
var validRange = function validRange(range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*';
  } catch (er) {
    return null;
  }
};
module.exports = validRange;

/***/ }),

/***/ "./datasource-zabbix/add-metric-function.directive.js":
/*!************************************************************!*\
  !*** ./datasource-zabbix/add-metric-function.directive.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metricFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metricFunctions */ "./datasource-zabbix/metricFunctions.ts");





angular__WEBPACK_IMPORTED_MODULE_0___default.a.
module('grafana.directives').
directive('addMetricFunction',

/** @ngInject */
function ($compile) {
  var inputTemplate = '<input type="text"' +
  ' class="gf-form-input"' +
  ' spellcheck="false" style="display:none"></input>';

  var buttonTemplate = '<a  class="gf-form-label tight-form-func dropdown-toggle query-part"' +
  ' tabindex="1" gf-dropdown="functionMenu" data-toggle="dropdown">' +
  '<i class="fa fa-plus"></i></a>';

  return {
    link: function link($scope, elem) {
      var categories = _metricFunctions__WEBPACK_IMPORTED_MODULE_3__["getCategories"]();
      var allFunctions = getAllFunctionNames(categories);

      $scope.functionMenu = createFunctionDropDownMenu(categories);

      var $input = jquery__WEBPACK_IMPORTED_MODULE_2___default()(inputTemplate);
      var $button = jquery__WEBPACK_IMPORTED_MODULE_2___default()(buttonTemplate);
      $input.appendTo(elem);
      $button.appendTo(elem);

      $input.attr('data-provide', 'typeahead');
      $input.typeahead({
        source: allFunctions,
        minLength: 1,
        items: 10,
        updater: function updater(value) {
          var funcDef = _metricFunctions__WEBPACK_IMPORTED_MODULE_3__["getFuncDef"](value);
          if (!funcDef) {
            // try find close match
            value = value.toLowerCase();
            funcDef = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(allFunctions, function (funcName) {
              return funcName.toLowerCase().indexOf(value) === 0;
            });

            if (!funcDef) {return;}
          }

          $scope.$apply(function () {
            $scope.ctrl.addFunction(funcDef);
          });

          $input.trigger('blur');
          return '';
        } });


      $button.click(function () {
        $button.hide();
        $input.show();
        $input.focus();
      });

      $input.keyup(function () {
        elem.toggleClass('open', $input.val() === '');
      });

      $input.blur(function () {
        // clicking the function dropdown menu won't
        // work if you remove class at once
        setTimeout(function () {
          $input.val('');
          $input.hide();
          $button.show();
          elem.removeClass('open');
        }, 200);
      });

      $compile(elem.contents())($scope);
    } };

});

function getAllFunctionNames(categories) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(categories, function (list, category) {
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(category, function (func) {
      list.push(func.name);
    });
    return list;
  }, []);
}

function createFunctionDropDownMenu(categories) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(categories, function (list, category) {
    return {
      text: category,
      submenu: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(list, function (value) {
        return {
          text: value.name,
          click: "ctrl.addFunction('" + value.name + "')" };

      }) };

  });
}

/***/ }),

/***/ "./datasource-zabbix/components/ConfigEditor.tsx":
/*!*******************************************************!*\
  !*** ./datasource-zabbix/components/ConfigEditor.tsx ***!
  \*******************************************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var FormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].FormField, Switch = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Switch;
var SUPPORTED_SQL_DS = ['mysql', 'postgres', 'influxdb'];
var ConfigEditor = function (props) {
    var _a, _b;
    var options = props.options, onOptionsChange = props.onOptionsChange;
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), selectedDBDatasource = _c[0], setSelectedDBDatasource = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), currentDSType = _d[0], setCurrentDSType = _d[1];
    // Apply some defaults on initial render
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var jsonData = options.jsonData, secureJsonFields = options.secureJsonFields;
        // Set secureJsonFields.password to password and then remove it from config
        var password = jsonData.password, restJsonData = __rest(jsonData, ["password"]);
        if (!(secureJsonFields === null || secureJsonFields === void 0 ? void 0 : secureJsonFields.password)) {
            if (!options.secureJsonData) {
                options.secureJsonData = {};
            }
            options.secureJsonData.password = password;
        }
        onOptionsChange(__assign(__assign({}, options), { jsonData: __assign({ trends: true, trendsFrom: '', trendsRange: '', cacheTTL: '', timeout: '' }, restJsonData) }));
        if (options.jsonData.dbConnectionEnable) {
            if (!options.jsonData.dbConnectionDatasourceId) {
                var dsName = options.jsonData.dbConnectionDatasourceName;
                Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().get(dsName)
                    .then(function (ds) {
                    if (ds) {
                        var selectedDs = getDirectDBDatasources().find(function (dsOption) { return dsOption.id === ds.id; });
                        setSelectedDBDatasource({ label: selectedDs.name, value: selectedDs.id });
                        setCurrentDSType(selectedDs.type);
                        onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { dbConnectionDatasourceId: ds.id }) }));
                    }
                });
            }
            else {
                var selectedDs = getDirectDBDatasources().find(function (dsOption) { return dsOption.id === options.jsonData.dbConnectionDatasourceId; });
                setSelectedDBDatasource({ label: selectedDs.name, value: selectedDs.id });
                setCurrentDSType(selectedDs.type);
            }
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], { defaultUrl: 'http://localhost/zabbix/api_jsonrpc.php', dataSourceConfig: options, showAccessOptions: true, onChange: onOptionsChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-heading" }, "Zabbix API details"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-25" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 15, label: "Username", value: options.jsonData.username || '', onChange: jsonDataChangeHandler('username', options, onOptionsChange), required: true })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-25" }, ((_a = options.secureJsonFields) === null || _a === void 0 ? void 0 : _a.password) ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 15, label: "Password", disabled: true, value: "", placeholder: "Configured" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: resetSecureJsonField('password', options, onOptionsChange) }, "Reset")) :
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 15, label: "Password", type: "password", value: ((_b = options.secureJsonData) === null || _b === void 0 ? void 0 : _b.password) || options.jsonData.password || '', onChange: secureJsonDataChangeHandler('password', options, onOptionsChange), required: true })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, { label: "Trends", labelClass: "width-7", checked: options.jsonData.trends, onChange: jsonDataSwitchHandler('trends', options, onOptionsChange) }),
            options.jsonData.trends &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 4, label: "After", value: options.jsonData.trendsFrom || '', placeholder: "7d", onChange: jsonDataChangeHandler('trendsFrom', options, onOptionsChange), tooltip: "Time after which trends will be used.\n                  Best practice is to set this value to your history storage period (7d, 30d, etc)." })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 4, label: "Range", value: options.jsonData.trendsRange || '', placeholder: "4d", onChange: jsonDataChangeHandler('trendsRange', options, onOptionsChange), tooltip: "Time range width after which trends will be used instead of history.\n                  It's better to set this value in range of 4 to 7 days to prevent loading large amount of history data." }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 4, label: "Cache TTL", value: options.jsonData.cacheTTL || '', placeholder: "1h", onChange: jsonDataChangeHandler('cacheTTL', options, onOptionsChange), tooltip: "Zabbix data source caches metric names in memory. Specify how often data will be updated." })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 7, inputWidth: 4, label: "Timeout", value: options.jsonData.timeout || '', placeholder: "30", onChange: jsonDataChangeHandler('timeout', options, onOptionsChange), tooltip: "Zabbix API connection timeout in seconds. Default is 30." }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-heading" }, "Direct DB Connection"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, { label: "Enable", labelClass: "width-9", checked: options.jsonData.dbConnectionEnable, onChange: jsonDataSwitchHandler('dbConnectionEnable', options, onOptionsChange) }),
            options.jsonData.dbConnectionEnable &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], { width: 9 }, "Data Source"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], { width: 32, options: getDirectDBDSOptions(), value: selectedDBDatasource, onChange: directDBDatasourceChanegeHandler(options, onOptionsChange, setSelectedDBDatasource, setCurrentDSType) })),
                    currentDSType === 'influxdb' &&
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormField, { labelWidth: 9, inputWidth: 16, label: "Retention Policy", value: options.jsonData.dbConnectionRetentionPolicy || '', placeholder: "Retention policy name", onChange: jsonDataChangeHandler('dbConnectionRetentionPolicy', options, onOptionsChange), tooltip: "Specify retention policy name for fetching long-term stored data (optional).\n                    Leave it blank if only default retention policy used." })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-group" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-heading" }, "Other"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, { label: "Disable acknowledges for read-only users", labelClass: "width-20", checked: options.jsonData.disableReadOnlyUsersAck, onChange: jsonDataSwitchHandler('disableReadOnlyUsersAck', options, onOptionsChange) }))));
};
var jsonDataChangeHandler = function (key, value, onChange) { return function (event) {
    var _a;
    onChange(__assign(__assign({}, value), { jsonData: __assign(__assign({}, value.jsonData), (_a = {}, _a[key] = event.currentTarget.value, _a)) }));
}; };
var jsonDataSwitchHandler = function (key, value, onChange) { return function (event) {
    var _a;
    onChange(__assign(__assign({}, value), { jsonData: __assign(__assign({}, value.jsonData), (_a = {}, _a[key] = event.target.checked, _a)) }));
}; };
var secureJsonDataChangeHandler = function (key, value, onChange) { return function (event) {
    var _a;
    onChange(__assign(__assign({}, value), { secureJsonData: __assign(__assign({}, value.secureJsonData), (_a = {}, _a[key] = event.currentTarget.value, _a)) }));
}; };
var resetSecureJsonField = function (key, value, onChange) { return function (event) {
    var _a;
    onChange(__assign(__assign({}, value), { secureJsonFields: __assign(__assign({}, value.secureJsonFields), (_a = {}, _a[key] = false, _a)) }));
}; };
var directDBDatasourceChanegeHandler = function (options, onChange, setSelectedDS, setSelectedDSType) { return function (value) {
    var selectedDs = getDirectDBDatasources().find(function (dsOption) { return dsOption.id === value.value; });
    setSelectedDS({ label: selectedDs.name, value: selectedDs.id });
    setSelectedDSType(selectedDs.type);
    onChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { dbConnectionDatasourceId: value.value }) }));
}; };
var getDirectDBDatasources = function () {
    var dsList = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().getAll();
    dsList = dsList.filter(function (ds) { return SUPPORTED_SQL_DS.includes(ds.type); });
    return dsList;
};
var getDirectDBDSOptions = function () {
    var dsList = getDirectDBDatasources();
    var dsOpts = dsList.map(function (ds) { return ({ label: ds.name, value: ds.id, description: ds.type }); });
    return dsOpts;
};


/***/ }),

/***/ "./datasource-zabbix/components/FunctionEditor.tsx":
/*!*********************************************************!*\
  !*** ./datasource-zabbix/components/FunctionEditor.tsx ***!
  \*********************************************************/
/*! exports provided: FunctionEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionEditor", function() { return FunctionEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FunctionEditorControls */ "./datasource-zabbix/components/FunctionEditorControls.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// import rst2html from 'rst2html';

// @ts-ignore

var FunctionEditor = /** @class */ (function (_super) {
    __extends(FunctionEditor, _super);
    function FunctionEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.triggerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this.renderContent = function (_a) {
            var updatePopperPosition = _a.updatePopperPosition;
            var _b = _this.props, onMoveLeft = _b.onMoveLeft, onMoveRight = _b.onMoveRight, _c = _b.func.def, name = _c.name, description = _c.description;
            var showingDescription = _this.state.showingDescription;
            if (showingDescription) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { overflow: 'auto', maxHeight: '30rem', textAlign: 'left', fontWeight: 'normal' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { style: { color: 'white' } },
                        " ",
                        name,
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, description)));
            }
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FunctionEditorControls__WEBPACK_IMPORTED_MODULE_1__["FunctionEditorControls"], __assign({}, _this.props, { onMoveLeft: function () {
                    onMoveLeft(_this.props.func);
                    updatePopperPosition();
                }, onMoveRight: function () {
                    onMoveRight(_this.props.func);
                    updatePopperPosition();
                }, onDescriptionShow: function () {
                    _this.setState({ showingDescription: true }, function () {
                        updatePopperPosition();
                    });
                } })));
        };
        _this.state = {
            showingDescription: false,
        };
        return _this;
    }
    FunctionEditor.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], { content: this.renderContent, placement: "top", hideAfter: 300 }, function (showPopper, hidePopper, popperProps) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                _this.triggerRef && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Popover"], __assign({}, popperProps, { referenceElement: _this.triggerRef.current, wrapperClassName: "popper", className: "popper__background", onMouseLeave: function () {
                        _this.setState({ showingDescription: false });
                        hidePopper();
                    }, onMouseEnter: showPopper, renderArrow: function (_a) {
                        var arrowProps = _a.arrowProps, placement = _a.placement;
                        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({ className: "popper__arrow", "data-placement": placement }, arrowProps)));
                    } }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { ref: _this.triggerRef, onClick: popperProps.show ? hidePopper : showPopper, onMouseLeave: function () {
                        hidePopper();
                        _this.setState({ showingDescription: false });
                    }, style: { cursor: 'pointer' } }, _this.props.func.def.name)));
        }));
    };
    return FunctionEditor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent));



/***/ }),

/***/ "./datasource-zabbix/components/FunctionEditorControls.tsx":
/*!*****************************************************************!*\
  !*** ./datasource-zabbix/components/FunctionEditorControls.tsx ***!
  \*****************************************************************/
/*! exports provided: FunctionEditorControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionEditorControls", function() { return FunctionEditorControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DOCS_FUNC_REF_URL = 'https://alexanderzobnin.github.io/grafana-zabbix/reference/functions/';
var FunctionHelpButton = function (props) {
    if (props.description) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "pointer fa fa-question-circle", onClick: props.onDescriptionShow });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "pointer fa fa-question-circle", onClick: function () {
            window.open(DOCS_FUNC_REF_URL + '#' + props.name, '_blank');
        } }));
};
var FunctionEditorControls = function (props) {
    var func = props.func, onMoveLeft = props.onMoveLeft, onMoveRight = props.onMoveRight, onRemove = props.onRemove, onDescriptionShow = props.onDescriptionShow;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
            display: 'flex',
            width: '60px',
            justifyContent: 'space-between',
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "pointer fa fa-arrow-left", onClick: function () { return onMoveLeft(func); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FunctionHelpButton, { name: func.def.name, description: func.def.description, onDescriptionShow: onDescriptionShow }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "pointer fa fa-remove", onClick: function () { return onRemove(func); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "pointer fa fa-arrow-right", onClick: function () { return onMoveRight(func); } })));
};


/***/ }),

/***/ "./datasource-zabbix/components/VariableQueryEditor.tsx":
/*!**************************************************************!*\
  !*** ./datasource-zabbix/components/VariableQueryEditor.tsx ***!
  \**************************************************************/
/*! exports provided: ZabbixVariableQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixVariableQueryEditor", function() { return ZabbixVariableQueryEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./datasource-zabbix/types.ts");
/* harmony import */ var _ZabbixInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZabbixInput */ "./datasource-zabbix/components/ZabbixInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var ZabbixVariableQueryEditor = /** @class */ (function (_super) {
    __extends(ZabbixVariableQueryEditor, _super);
    function ZabbixVariableQueryEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.queryTypes = [
            { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Group, label: 'Group' },
            { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Host, label: 'Host' },
            { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Application, label: 'Application' },
            { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Item, label: 'Item' },
            { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].ItemValues, label: 'Item values' },
        ];
        _this.defaults = {
            selectedQueryType: { value: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Group, label: 'Group' },
            queryType: _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Group,
            group: '/.*/',
            host: '',
            application: '',
            item: '',
        };
        _this.handleQueryUpdate = function (evt, prop) {
            var value = evt.currentTarget.value;
            _this.setState(function (prevState) {
                var newQuery = __assign({}, prevState);
                newQuery[prop] = value;
                return __assign({}, newQuery);
            });
        };
        _this.handleQueryChange = function () {
            var _a = _this.state, queryType = _a.queryType, group = _a.group, host = _a.host, application = _a.application, item = _a.item;
            var queryModel = { queryType: queryType, group: group, host: host, application: application, item: item };
            _this.props.onChange(queryModel, "Zabbix - " + queryType);
        };
        _this.handleQueryTypeChange = function (selectedItem) {
            _this.setState(__assign(__assign({}, _this.state), { selectedQueryType: selectedItem, queryType: selectedItem.value }));
            var _a = _this.state, group = _a.group, host = _a.host, application = _a.application, item = _a.item;
            var queryType = selectedItem.value;
            var queryModel = { queryType: queryType, group: group, host: host, application: application, item: item };
            _this.props.onChange(queryModel, "Zabbix - " + queryType);
        };
        if (_this.props.query && typeof _this.props.query === 'string') {
            // Backward compatibility
            var query = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseLegacyVariableQuery"])(_this.props.query);
            var selectedQueryType = _this.getSelectedQueryType(query.queryType);
            _this.state = __assign({ selectedQueryType: selectedQueryType, legacyQuery: _this.props.query }, query);
        }
        else if (_this.props.query) {
            var query = _this.props.query;
            var selectedQueryType = _this.getSelectedQueryType(query.queryType);
            _this.state = __assign(__assign(__assign({}, _this.defaults), query), { selectedQueryType: selectedQueryType });
        }
        else {
            _this.state = _this.defaults;
        }
        return _this;
    }
    ZabbixVariableQueryEditor.prototype.getSelectedQueryType = function (queryType) {
        return this.queryTypes.find(function (q) { return q.value === queryType; });
    };
    ZabbixVariableQueryEditor.prototype.render = function () {
        var _this = this;
        var _a = this.state, selectedQueryType = _a.selectedQueryType, legacyQuery = _a.legacyQuery, group = _a.group, host = _a.host, application = _a.application, item = _a.item;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-21" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10 }, "Query Type"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], { width: 11, value: selectedQueryType, options: this.queryTypes, onChange: this.handleQueryTypeChange })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-30" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10 }, "Group"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZabbixInput__WEBPACK_IMPORTED_MODULE_3__["ZabbixInput"], { value: group, onChange: function (evt) { return _this.handleQueryUpdate(evt, 'group'); }, onBlur: this.handleQueryChange })),
                selectedQueryType.value !== _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Group &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-30" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10 }, "Host"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZabbixInput__WEBPACK_IMPORTED_MODULE_3__["ZabbixInput"], { value: host, onChange: function (evt) { return _this.handleQueryUpdate(evt, 'host'); }, onBlur: this.handleQueryChange }))),
            (selectedQueryType.value === _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Application ||
                selectedQueryType.value === _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Item ||
                selectedQueryType.value === _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].ItemValues) &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-inline" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-30" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10 }, "Application"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZabbixInput__WEBPACK_IMPORTED_MODULE_3__["ZabbixInput"], { value: application, onChange: function (evt) { return _this.handleQueryUpdate(evt, 'application'); }, onBlur: this.handleQueryChange })),
                    (selectedQueryType.value === _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].Item ||
                        selectedQueryType.value === _types__WEBPACK_IMPORTED_MODULE_2__["VariableQueryTypes"].ItemValues) &&
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-30" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10 }, "Item"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZabbixInput__WEBPACK_IMPORTED_MODULE_3__["ZabbixInput"], { value: item, onChange: function (evt) { return _this.handleQueryUpdate(evt, 'item'); }, onBlur: this.handleQueryChange }))),
            legacyQuery &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["InlineFormLabel"], { width: 10, tooltip: "Original query string, read-only" }, "Legacy Query"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Input"], { value: legacyQuery, readOnly: true }))));
    };
    return ZabbixVariableQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));



/***/ }),

/***/ "./datasource-zabbix/components/ZabbixInput.tsx":
/*!******************************************************!*\
  !*** ./datasource-zabbix/components/ZabbixInput.tsx ***!
  \******************************************************/
/*! exports provided: ZabbixInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixInput", function() { return ZabbixInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./datasource-zabbix/utils.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
var _b;





var Input = ((_b = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"]) === null || _b === void 0 ? void 0 : _b.Input) || _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"];
var variablePattern = RegExp("^" + _utils__WEBPACK_IMPORTED_MODULE_3__["variableRegex"].source);
var getStyles = function (theme) { return ({
    inputRegex: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", "\n  "], ["\n    color: ", "\n  "])), theme.palette.orange),
    inputVariable: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", "\n  "], ["\n    color: ", "\n  "])), theme.colors.textBlue),
}); };
var zabbixInputValidationEvents = (_a = {},
    _a[_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["EventsWithValidation"].onBlur] = [
        {
            rule: function (value) {
                if (!value) {
                    return true;
                }
                if (value.length > 1 && value[0] === '/') {
                    if (value[value.length - 1] !== '/') {
                        return false;
                    }
                }
                return true;
            },
            errorMessage: 'Not a valid regex',
        },
        {
            rule: function (value) {
                if (value === '*') {
                    return false;
                }
                return true;
            },
            errorMessage: 'Wildcards not supported. Use /.*/ instead',
        },
    ],
    _a);
var ZabbixInput = function (_a) {
    var value = _a.value, ref = _a.ref, validationEvents = _a.validationEvents, restProps = __rest(_a, ["value", "ref", "validationEvents"]);
    var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
    var styles = getStyles(theme);
    var inputClass = styles.inputRegex;
    if (variablePattern.test(value)) {
        inputClass = styles.inputVariable;
    }
    else if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isRegex"])(value)) {
        inputClass = styles.inputRegex;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, __assign({ className: inputClass, value: value, validationEvents: zabbixInputValidationEvents }, restProps)));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./datasource-zabbix/constants.ts":
/*!****************************************!*\
  !*** ./datasource-zabbix/constants.ts ***!
  \****************************************/
/*! exports provided: ZABBIX_PROBLEMS_PANEL_ID, ZABBIX_DS_ID, DATAPOINT_VALUE, DATAPOINT_TS, MODE_METRICS, MODE_ITSERVICE, MODE_TEXT, MODE_ITEMID, MODE_TRIGGERS, MODE_PROBLEMS, SEV_NOT_CLASSIFIED, SEV_INFORMATION, SEV_WARNING, SEV_AVERAGE, SEV_HIGH, SEV_DISASTER, SHOW_ALL_TRIGGERS, SHOW_ALL_EVENTS, SHOW_OK_EVENTS, ZBX_ACK_ACTION_NONE, ZBX_ACK_ACTION_CLOSE, ZBX_ACK_ACTION_ACK, ZBX_ACK_ACTION_ADD_MESSAGE, ZBX_ACK_ACTION_CHANGE_SEVERITY, TRIGGER_SEVERITY, MIN_SLA_INTERVAL, RANGE_VARIABLE_VALUE, DEFAULT_ZABBIX_PROBLEMS_LIMIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZABBIX_PROBLEMS_PANEL_ID", function() { return ZABBIX_PROBLEMS_PANEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZABBIX_DS_ID", function() { return ZABBIX_DS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAPOINT_VALUE", function() { return DATAPOINT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAPOINT_TS", function() { return DATAPOINT_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_METRICS", function() { return MODE_METRICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_ITSERVICE", function() { return MODE_ITSERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_TEXT", function() { return MODE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_ITEMID", function() { return MODE_ITEMID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_TRIGGERS", function() { return MODE_TRIGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_PROBLEMS", function() { return MODE_PROBLEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_NOT_CLASSIFIED", function() { return SEV_NOT_CLASSIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_INFORMATION", function() { return SEV_INFORMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_WARNING", function() { return SEV_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_AVERAGE", function() { return SEV_AVERAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_HIGH", function() { return SEV_HIGH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEV_DISASTER", function() { return SEV_DISASTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL_TRIGGERS", function() { return SHOW_ALL_TRIGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL_EVENTS", function() { return SHOW_ALL_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_OK_EVENTS", function() { return SHOW_OK_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZBX_ACK_ACTION_NONE", function() { return ZBX_ACK_ACTION_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZBX_ACK_ACTION_CLOSE", function() { return ZBX_ACK_ACTION_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZBX_ACK_ACTION_ACK", function() { return ZBX_ACK_ACTION_ACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZBX_ACK_ACTION_ADD_MESSAGE", function() { return ZBX_ACK_ACTION_ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZBX_ACK_ACTION_CHANGE_SEVERITY", function() { return ZBX_ACK_ACTION_CHANGE_SEVERITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_SEVERITY", function() { return TRIGGER_SEVERITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SLA_INTERVAL", function() { return MIN_SLA_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANGE_VARIABLE_VALUE", function() { return RANGE_VARIABLE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ZABBIX_PROBLEMS_LIMIT", function() { return DEFAULT_ZABBIX_PROBLEMS_LIMIT; });
// Plugin IDs
var ZABBIX_PROBLEMS_PANEL_ID = 'iiris-zabbix-problems-panel';
var ZABBIX_DS_ID = 'iiris-zabbix-datasource';
// Data point
var DATAPOINT_VALUE = 0;
var DATAPOINT_TS = 1;
// Editor modes
var MODE_METRICS = 0;
var MODE_ITSERVICE = 1;
var MODE_TEXT = 2;
var MODE_ITEMID = 3;
var MODE_TRIGGERS = 4;
var MODE_PROBLEMS = 5;
// Triggers severity
var SEV_NOT_CLASSIFIED = 0;
var SEV_INFORMATION = 1;
var SEV_WARNING = 2;
var SEV_AVERAGE = 3;
var SEV_HIGH = 4;
var SEV_DISASTER = 5;
var SHOW_ALL_TRIGGERS = [0, 1];
var SHOW_ALL_EVENTS = [0, 1];
var SHOW_OK_EVENTS = 1;
// Acknowledge
var ZBX_ACK_ACTION_NONE = 0;
var ZBX_ACK_ACTION_CLOSE = 1;
var ZBX_ACK_ACTION_ACK = 2;
var ZBX_ACK_ACTION_ADD_MESSAGE = 4;
var ZBX_ACK_ACTION_CHANGE_SEVERITY = 8;
var TRIGGER_SEVERITY = [
    { val: 0, text: 'Not classified' },
    { val: 1, text: 'Information' },
    { val: 2, text: 'Warning' },
    { val: 3, text: 'Average' },
    { val: 4, text: 'High' },
    { val: 5, text: 'Disaster' }
];
/** Minimum interval for SLA over time (1 hour) */
var MIN_SLA_INTERVAL = 3600;
var RANGE_VARIABLE_VALUE = 'range_series';
var DEFAULT_ZABBIX_PROBLEMS_LIMIT = 1001;


/***/ }),

/***/ "./datasource-zabbix/dataProcessor.ts":
/*!********************************************!*\
  !*** ./datasource-zabbix/dataProcessor.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _timeseries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeseries */ "./datasource-zabbix/timeseries.ts");

// Available in 7.0
// import { getTemplateSrv } from '@grafana/runtime';


var SUM = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].SUM;
var COUNT = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].COUNT;
var AVERAGE = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].AVERAGE;
var MIN = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].MIN;
var MAX = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].MAX;
var MEDIAN = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].MEDIAN;
var PERCENTILE = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].PERCENTILE;
var downsampleSeries = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].downsample;
var groupBy_exported = function (interval, groupFunc, datapoints) { return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(datapoints, interval, groupFunc); };
var sumSeries = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].sumSeries;
var delta = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].delta;
var rate = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].rate;
var scale = function (factor, datapoints) { return _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].scale_perf(datapoints, factor); };
var offset = function (delta, datapoints) { return _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].offset(datapoints, delta); };
var simpleMovingAverage = function (n, datapoints) { return _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].simpleMovingAverage(datapoints, n); };
var expMovingAverage = function (a, datapoints) { return _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].expMovingAverage(datapoints, a); };
var percentile = function (interval, n, datapoints) { return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(datapoints, interval, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(PERCENTILE, n)); };
function limit(order, n, orderByFunc, timeseries) {
    var orderByCallback = aggregationFunctions[orderByFunc];
    var sortByIteratee = function (ts) {
        var values = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(ts.datapoints, function (point) {
            return point[0];
        });
        return orderByCallback(values);
    };
    var sortedTimeseries = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(timeseries, sortByIteratee);
    if (order === 'bottom') {
        return sortedTimeseries.slice(0, n);
    }
    else {
        return sortedTimeseries.slice(-n);
    }
}
function removeAboveValue(n, datapoints) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(datapoints, function (point) {
        return [
            (point[0] > n) ? null : point[0],
            point[1]
        ];
    });
}
function removeBelowValue(n, datapoints) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(datapoints, function (point) {
        return [
            (point[0] < n) ? null : point[0],
            point[1]
        ];
    });
}
function transformNull(n, datapoints) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(datapoints, function (point) {
        return [
            (point[0] !== null) ? point[0] : n,
            point[1]
        ];
    });
}
function sortSeries(direction, timeseries) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(timeseries, [function (ts) {
            return ts.target.toLowerCase();
        }], direction);
}
function setAlias(alias, timeseries) {
    // TODO: use getTemplateSrv() when available (since 7.0)
    if (this.templateSrv && timeseries && timeseries.scopedVars) {
        alias = this.templateSrv.replace(alias, timeseries.scopedVars);
    }
    timeseries.target = alias;
    return timeseries;
}
function replaceAlias(regexp, newAlias, timeseries) {
    var pattern;
    if (_utils__WEBPACK_IMPORTED_MODULE_1__["isRegex"](regexp)) {
        pattern = _utils__WEBPACK_IMPORTED_MODULE_1__["buildRegex"](regexp);
    }
    else {
        pattern = regexp;
    }
    var alias = timeseries.target.replace(pattern, newAlias);
    // TODO: use getTemplateSrv() when available (since 7.0)
    if (this.templateSrv && timeseries && timeseries.scopedVars) {
        alias = this.templateSrv.replace(alias, timeseries.scopedVars);
    }
    timeseries.target = alias;
    return timeseries;
}
function setAliasByRegex(alias, timeseries) {
    timeseries.target = extractText(timeseries.target, alias);
    return timeseries;
}
function extractText(str, pattern) {
    var extractPattern = new RegExp(pattern);
    var extractedValue = extractPattern.exec(str);
    return extractedValue[0];
}
function groupByWrapper(interval, groupFunc, datapoints) {
    var groupByCallback = aggregationFunctions[groupFunc];
    return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(datapoints, interval, groupByCallback);
}
function aggregateByWrapper(interval, aggregateFunc, datapoints) {
    // Flatten all points in frame and then just use groupBy()
    var flattenedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].flattenDatapoints(datapoints);
    // groupBy_perf works with sorted series only
    var sortedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTime(flattenedPoints);
    var groupByCallback = aggregationFunctions[aggregateFunc];
    return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(sortedPoints, interval, groupByCallback);
}
function aggregateWrapper(groupByCallback, interval, datapoints) {
    var flattenedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].flattenDatapoints(datapoints);
    // groupBy_perf works with sorted series only
    var sortedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTime(flattenedPoints);
    return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(sortedPoints, interval, groupByCallback);
}
function percentileAgg(interval, n, datapoints) {
    var flattenedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].flattenDatapoints(datapoints);
    // groupBy_perf works with sorted series only
    var sortedPoints = _timeseries__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTime(flattenedPoints);
    var groupByCallback = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(PERCENTILE, n);
    return Object(_timeseries__WEBPACK_IMPORTED_MODULE_2__["groupBy_perf"])(sortedPoints, interval, groupByCallback);
}
function timeShift(interval, range) {
    var shift = _utils__WEBPACK_IMPORTED_MODULE_1__["parseTimeShiftInterval"](interval) / 1000;
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(range, function (time) {
        return time - shift;
    });
}
function unShiftTimeSeries(interval, datapoints) {
    var unshift = _utils__WEBPACK_IMPORTED_MODULE_1__["parseTimeShiftInterval"](interval);
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(datapoints, function (dp) {
        return [
            dp[0],
            dp[1] + unshift
        ];
    });
}
var metricFunctions = {
    groupBy: groupByWrapper,
    scale: scale,
    offset: offset,
    delta: delta,
    rate: rate,
    movingAverage: simpleMovingAverage,
    exponentialMovingAverage: expMovingAverage,
    percentile: percentile,
    transformNull: transformNull,
    aggregateBy: aggregateByWrapper,
    // Predefined aggs
    percentileAgg: percentileAgg,
    average: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, AVERAGE),
    min: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, MIN),
    max: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, MAX),
    median: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, MEDIAN),
    sum: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, SUM),
    count: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(aggregateWrapper, COUNT),
    sumSeries: sumSeries,
    removeAboveValue: removeAboveValue,
    removeBelowValue: removeBelowValue,
    top: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(limit, 'top'),
    bottom: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(limit, 'bottom'),
    sortSeries: sortSeries,
    timeShift: timeShift,
    setAlias: setAlias,
    setAliasByRegex: setAliasByRegex,
    replaceAlias: replaceAlias
};
var aggregationFunctions = {
    avg: AVERAGE,
    min: MIN,
    max: MAX,
    median: MEDIAN,
    sum: SUM,
    count: COUNT
};
/* harmony default export */ __webpack_exports__["default"] = ({
    downsampleSeries: downsampleSeries,
    groupBy: groupBy_exported,
    AVERAGE: AVERAGE,
    MIN: MIN,
    MAX: MAX,
    MEDIAN: MEDIAN,
    SUM: SUM,
    COUNT: COUNT,
    unShiftTimeSeries: unShiftTimeSeries,
    get aggregationFunctions() {
        return aggregationFunctions;
    },
    get metricFunctions() {
        return metricFunctions;
    }
});


/***/ }),

/***/ "./datasource-zabbix/datasource.ts":
/*!*****************************************!*\
  !*** ./datasource-zabbix/datasource.ts ***!
  \*****************************************/
/*! exports provided: ZabbixDatasource, zabbixTemplateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixDatasource", function() { return ZabbixDatasource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zabbixTemplateFormat", function() { return zabbixTemplateFormat; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grafana_app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/core/config */ "grafana/app/core/config");
/* harmony import */ var grafana_app_core_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/core/core */ "grafana/app/core/core");
/* harmony import */ var grafana_app_core_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/core/utils/datemath */ "grafana/app/core/utils/datemath");
/* harmony import */ var grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migrations */ "./datasource-zabbix/migrations.ts");
/* harmony import */ var _metricFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metricFunctions */ "./datasource-zabbix/metricFunctions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _dataProcessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataProcessor */ "./datasource-zabbix/dataProcessor.ts");
/* harmony import */ var _responseHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./responseHandler */ "./datasource-zabbix/responseHandler.ts");
/* harmony import */ var _problemsHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./problemsHandler */ "./datasource-zabbix/problemsHandler.ts");
/* harmony import */ var _zabbix_zabbix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zabbix/zabbix */ "./datasource-zabbix/zabbix/zabbix.ts");
/* harmony import */ var _zabbix_connectors_zabbix_api_zabbixAPIConnector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zabbix/connectors/zabbix_api/zabbixAPIConnector */ "./datasource-zabbix/zabbix/connectors/zabbix_api/zabbixAPIConnector.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./datasource-zabbix/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_15__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var ZabbixDatasource = /** @class */ (function (_super) {
    __extends(ZabbixDatasource, _super);
    /** @ngInject */
    function ZabbixDatasource(instanceSettings, templateSrv) {
        var _this = _super.call(this, instanceSettings) || this;
        _this.templateSrv = templateSrv;
        _this.templateSrv = templateSrv;
        _this.enableDebugLog = grafana_app_core_config__WEBPACK_IMPORTED_MODULE_1___default.a.buildInfo.env === 'development';
        // Use custom format for template variables
        _this.replaceTemplateVars = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(replaceTemplateVars, _this.templateSrv);
        // General data source settings
        _this.datasourceId = instanceSettings.id;
        _this.name = instanceSettings.name;
        _this.basicAuth = instanceSettings.basicAuth;
        _this.withCredentials = instanceSettings.withCredentials;
        var jsonData = _migrations__WEBPACK_IMPORTED_MODULE_5__["migrateDSConfig"](instanceSettings.jsonData);
        // Use trends instead history since specified time
        _this.trends = jsonData.trends;
        _this.trendsFrom = jsonData.trendsFrom || '7d';
        _this.trendsRange = jsonData.trendsRange || '4d';
        // Set cache update interval
        var ttl = jsonData.cacheTTL || '1h';
        _this.cacheTTL = _utils__WEBPACK_IMPORTED_MODULE_4__["parseInterval"](ttl);
        // Other options
        _this.disableReadOnlyUsersAck = jsonData.disableReadOnlyUsersAck;
        // Direct DB Connection options
        _this.enableDirectDBConnection = jsonData.dbConnectionEnable || false;
        _this.dbConnectionDatasourceId = jsonData.dbConnectionDatasourceId;
        _this.dbConnectionDatasourceName = jsonData.dbConnectionDatasourceName;
        _this.dbConnectionRetentionPolicy = jsonData.dbConnectionRetentionPolicy;
        var zabbixOptions = {
            basicAuth: _this.basicAuth,
            withCredentials: _this.withCredentials,
            cacheTTL: _this.cacheTTL,
            enableDirectDBConnection: _this.enableDirectDBConnection,
            dbConnectionDatasourceId: _this.dbConnectionDatasourceId,
            dbConnectionDatasourceName: _this.dbConnectionDatasourceName,
            dbConnectionRetentionPolicy: _this.dbConnectionRetentionPolicy,
            datasourceId: _this.datasourceId,
        };
        _this.zabbix = new _zabbix_zabbix__WEBPACK_IMPORTED_MODULE_11__["Zabbix"](zabbixOptions);
        return _this;
    }
    ////////////////////////
    // Datasource methods //
    ////////////////////////
    /**
     * Query panel data. Calls for each panel in dashboard.
     * @param  {Object} options   Contains time range, targets and other info.
     * @return {Object} Grafana metrics object with timeseries data for each target.
     */
    ZabbixDatasource.prototype.query = function (options) {
        var _this = this;
        // Create request for each target
        var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(options.targets, function (t) {
            // Don't request for hidden targets
            if (t.hide) {
                return [];
            }
            var timeFrom = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__["parse"](options.range.from) / 1000);
            var timeTo = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__["parse"](options.range.to) / 1000);
            // Add range variables
            options.scopedVars = Object.assign({}, options.scopedVars, _utils__WEBPACK_IMPORTED_MODULE_4__["getRangeScopedVars"](options.range));
            // Prevent changes of original object
            var target = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(t);
            // Migrate old targets
            target = _migrations__WEBPACK_IMPORTED_MODULE_5__["migrate"](target);
            _this.replaceTargetVariables(target, options);
            // Apply Time-related functions (timeShift(), etc)
            var timeFunctions = bindFunctionDefs(target.functions, 'Time');
            if (timeFunctions.length) {
                var _a = _utils__WEBPACK_IMPORTED_MODULE_4__["sequence"](timeFunctions)([timeFrom, timeTo]), time_from = _a[0], time_to = _a[1];
                timeFrom = time_from;
                timeTo = time_to;
            }
            var timeRange = [timeFrom, timeTo];
            var useTrends = _this.isUseTrends(timeRange);
            // Metrics or Text query
            if (!target.queryType || target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_METRICS"] || target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_TEXT"]) {
                // Don't request undefined targets
                if (!target.group || !target.host || !target.item) {
                    return [];
                }
                if (!target.queryType || target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_METRICS"]) {
                    return _this.queryNumericData(target, timeRange, useTrends, options);
                }
                else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_TEXT"]) {
                    return _this.queryTextData(target, timeRange);
                }
                else {
                    return [];
                }
            }
            else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_ITEMID"]) {
                // Item ID query
                if (!target.itemids) {
                    return [];
                }
                return _this.queryItemIdData(target, timeRange, useTrends, options);
            }
            else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_ITSERVICE"]) {
                // IT services query
                return _this.queryITServiceData(target, timeRange, options);
            }
            else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_TRIGGERS"]) {
                // Triggers query
                return _this.queryTriggersData(target, timeRange);
            }
            else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_7__["MODE_PROBLEMS"]) {
                // Problems query
                return _this.queryProblems(target, timeRange, options);
            }
            else {
                return [];
            }
        });
        // Data for panel (all targets)
        return Promise.all(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(promises))
            .then(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten)
            .then(function (data) {
            return { data: data };
        });
    };
    ZabbixDatasource.prototype.doTsdbRequest = function (options) {
        var _this = this;
        var tsdbRequestData = {
            queries: options.targets.map(function (target) {
                target.datasourceId = _this.datasourceId;
                target.queryType = 'zabbixAPI';
                return target;
            }),
        };
        if (options.range) {
            tsdbRequestData.from = options.range.from.valueOf().toString();
            tsdbRequestData.to = options.range.to.valueOf().toString();
        }
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__["getBackendSrv"])().post('/api/tsdb/query', tsdbRequestData);
    };
    /**
     * @returns {Promise<TSDBResponse>}
     */
    ZabbixDatasource.prototype.doTSDBConnectionTest = function () {
        /**
         * @type {{ queries: ZabbixConnectionTestQuery[] }}
         */
        var tsdbRequestData = {
            queries: [
                {
                    datasourceId: this.datasourceId,
                    queryType: 'connectionTest'
                }
            ]
        };
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__["getBackendSrv"])().post('/api/tsdb/query', tsdbRequestData);
    };
    /**
     * Query target data for Metrics
     */
    ZabbixDatasource.prototype.queryNumericData = function (target, timeRange, useTrends, options) {
        var _this = this;
        var queryStart, queryEnd;
        var getItemOptions = {
            itemtype: 'num'
        };
        return this.zabbix.getItemsFromTarget(target, getItemOptions)
            .then(function (items) {
            queryStart = new Date().getTime();
            return _this.queryNumericDataForItems(items, target, timeRange, useTrends, options);
        }).then(function (result) {
            queryEnd = new Date().getTime();
            if (_this.enableDebugLog) {
                console.log("Datasource::Performance Query Time (" + _this.name + "): " + (queryEnd - queryStart));
            }
            return result;
        });
    };
    /**
     * Query history for numeric items
     */
    ZabbixDatasource.prototype.queryNumericDataForItems = function (items, target, timeRange, useTrends, options) {
        var _this = this;
        var getHistoryPromise;
        options.valueType = this.getTrendValueType(target);
        options.consolidateBy = getConsolidateBy(target) || options.valueType;
        if (useTrends) {
            getHistoryPromise = this.zabbix.getTrends(items, timeRange, options);
        }
        else {
            getHistoryPromise = this.zabbix.getHistoryTS(items, timeRange, options);
        }
        return getHistoryPromise
            .then(function (timeseries) { return _this.applyDataProcessingFunctions(timeseries, target); })
            .then(function (timeseries) { return downsampleSeries(timeseries, options); });
    };
    ZabbixDatasource.prototype.getTrendValueType = function (target) {
        // Find trendValue() function and get specified trend value
        var trendFunctions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(_metricFunctions__WEBPACK_IMPORTED_MODULE_6__["getCategories"]()['Trends'], 'name');
        var trendValueFunc = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(target.functions, function (func) {
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(trendFunctions, func.def.name);
        });
        return trendValueFunc ? trendValueFunc.params[0] : "avg";
    };
    ZabbixDatasource.prototype.applyDataProcessingFunctions = function (timeseries_data, target) {
        var transformFunctions = bindFunctionDefs(target.functions, 'Transform');
        var aggregationFunctions = bindFunctionDefs(target.functions, 'Aggregate');
        var filterFunctions = bindFunctionDefs(target.functions, 'Filter');
        var aliasFunctions = bindFunctionDefs(target.functions, 'Alias');
        // Apply transformation functions
        timeseries_data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(timeseries_data, function (timeseries) {
            timeseries.datapoints = _utils__WEBPACK_IMPORTED_MODULE_4__["sequence"](transformFunctions)(timeseries.datapoints);
            return timeseries;
        }));
        // Apply filter functions
        if (filterFunctions.length) {
            timeseries_data = _utils__WEBPACK_IMPORTED_MODULE_4__["sequence"](filterFunctions)(timeseries_data);
        }
        // Apply aggregations
        if (aggregationFunctions.length) {
            var dp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(timeseries_data, 'datapoints');
            dp = _utils__WEBPACK_IMPORTED_MODULE_4__["sequence"](aggregationFunctions)(dp);
            var aggFuncNames_1 = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(_metricFunctions__WEBPACK_IMPORTED_MODULE_6__["getCategories"]()['Aggregate'], 'name');
            var lastAgg = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findLast(target.functions, function (func) {
                return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(aggFuncNames_1, func.def.name);
            });
            timeseries_data = [{
                    target: lastAgg.text,
                    datapoints: dp
                }];
        }
        // Apply alias functions
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(timeseries_data, _utils__WEBPACK_IMPORTED_MODULE_4__["sequence"](aliasFunctions).bind(this));
        // Apply Time-related functions (timeShift(), etc)
        // Find timeShift() function and get specified trend value
        this.applyTimeShiftFunction(timeseries_data, target);
        return timeseries_data;
    };
    ZabbixDatasource.prototype.applyTimeShiftFunction = function (timeseries_data, target) {
        // Find timeShift() function and get specified interval
        var timeShiftFunc = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(target.functions, function (func) {
            return func.def.name === 'timeShift';
        });
        if (timeShiftFunc) {
            var shift_1 = timeShiftFunc.params[0];
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(timeseries_data, function (series) {
                series.datapoints = _dataProcessor__WEBPACK_IMPORTED_MODULE_8__["default"].unShiftTimeSeries(shift_1, series.datapoints);
            });
        }
    };
    /**
     * Query target data for Text
     */
    ZabbixDatasource.prototype.queryTextData = function (target, timeRange) {
        var _this = this;
        var options = {
            itemtype: 'text'
        };
        return this.zabbix.getItemsFromTarget(target, options)
            .then(function (items) {
            return _this.zabbix.getHistoryText(items, timeRange, target);
        });
    };
    /**
     * Query target data for Item ID
     */
    ZabbixDatasource.prototype.queryItemIdData = function (target, timeRange, useTrends, options) {
        var _this = this;
        var itemids = target.itemids;
        itemids = this.templateSrv.replace(itemids, options.scopedVars, zabbixItemIdsTemplateFormat);
        itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(itemids.split(','), function (itemid) { return itemid.trim(); });
        if (!itemids) {
            return [];
        }
        return this.zabbix.getItemsByIDs(itemids)
            .then(function (items) {
            return _this.queryNumericDataForItems(items, target, timeRange, useTrends, options);
        });
    };
    /**
     * Query target data for IT Services
     */
    ZabbixDatasource.prototype.queryITServiceData = function (target, timeRange, options) {
        var _this = this;
        // Don't show undefined and hidden targets
        if (target.hide || (!target.itservice && !target.itServiceFilter) || !target.slaProperty) {
            return [];
        }
        var itServiceFilter;
        options.isOldVersion = target.itservice && !target.itServiceFilter;
        if (options.isOldVersion) {
            // Backward compatibility
            itServiceFilter = '/.*/';
        }
        else {
            itServiceFilter = this.replaceTemplateVars(target.itServiceFilter, options.scopedVars);
        }
        options.slaInterval = target.slaInterval;
        return this.zabbix.getITServices(itServiceFilter)
            .then(function (itservices) {
            var _a;
            if (options.isOldVersion) {
                itservices = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(itservices, { 'serviceid': (_a = target.itservice) === null || _a === void 0 ? void 0 : _a.serviceid });
            }
            return _this.zabbix.getSLA(itservices, timeRange, target, options);
        })
            .then(function (itservicesdp) { return _this.applyDataProcessingFunctions(itservicesdp, target); });
    };
    ZabbixDatasource.prototype.queryTriggersData = function (target, timeRange) {
        var _this = this;
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        return this.zabbix.getHostsFromTarget(target)
            .then(function (results) {
            var hosts = results[0], apps = results[1];
            if (hosts.length) {
                var hostids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(hosts, 'hostid');
                var appids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(apps, 'applicationid');
                var options = {
                    minSeverity: target.triggers.minSeverity,
                    acknowledged: target.triggers.acknowledged,
                    count: target.triggers.count,
                    timeFrom: timeFrom,
                    timeTo: timeTo
                };
                var groupFilter = target.group.filter;
                return Promise.all([
                    _this.zabbix.getHostAlerts(hostids, appids, options),
                    _this.zabbix.getGroups(groupFilter)
                ])
                    .then(function (_a) {
                    var triggers = _a[0], groups = _a[1];
                    return _responseHandler__WEBPACK_IMPORTED_MODULE_9__["default"].handleTriggersResponse(triggers, groups, timeRange);
                });
            }
            else {
                return Promise.resolve([]);
            }
        });
    };
    ZabbixDatasource.prototype.queryProblems = function (target, timeRange, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        var userIsEditor = grafana_app_core_core__WEBPACK_IMPORTED_MODULE_2__["contextSrv"].isEditor || grafana_app_core_core__WEBPACK_IMPORTED_MODULE_2__["contextSrv"].isGrafanaAdmin;
        var proxies;
        var showAckButton = true;
        var showProblems = target.showProblems || _types__WEBPACK_IMPORTED_MODULE_13__["ShowProblemTypes"].Problems;
        var showProxy = target.options.hostProxy;
        var getProxiesPromise = showProxy ? this.zabbix.getProxies() : function () { return []; };
        showAckButton = !this.disableReadOnlyUsersAck || userIsEditor;
        // Replace template variables
        var groupFilter = this.replaceTemplateVars((_a = target.group) === null || _a === void 0 ? void 0 : _a.filter, options.scopedVars);
        var hostFilter = this.replaceTemplateVars((_b = target.host) === null || _b === void 0 ? void 0 : _b.filter, options.scopedVars);
        var appFilter = this.replaceTemplateVars((_c = target.application) === null || _c === void 0 ? void 0 : _c.filter, options.scopedVars);
        var proxyFilter = this.replaceTemplateVars((_d = target.proxy) === null || _d === void 0 ? void 0 : _d.filter, options.scopedVars);
        var triggerFilter = this.replaceTemplateVars((_e = target.trigger) === null || _e === void 0 ? void 0 : _e.filter, options.scopedVars);
        var tagsFilter = this.replaceTemplateVars((_f = target.tags) === null || _f === void 0 ? void 0 : _f.filter, options.scopedVars);
        var replacedTarget = __assign(__assign({}, target), { trigger: { filter: triggerFilter }, tags: { filter: tagsFilter } });
        // replaceTemplateVars() builds regex-like string, so we should trim it.
        var tagsFilterStr = tagsFilter.replace('/^', '').replace('$/', '');
        var tags = _utils__WEBPACK_IMPORTED_MODULE_4__["parseTags"](tagsFilterStr);
        tags.forEach(function (tag) {
            // Zabbix uses {"tag": "<tag>", "value": "<value>", "operator": "<operator>"} format, where 1 means Equal
            tag.operator = 1;
        });
        var problemsOptions = {
            recent: showProblems === _types__WEBPACK_IMPORTED_MODULE_13__["ShowProblemTypes"].Recent,
            minSeverity: (_g = target.options) === null || _g === void 0 ? void 0 : _g.minSeverity,
            limit: (_h = target.options) === null || _h === void 0 ? void 0 : _h.limit,
        };
        if (tags && tags.length) {
            problemsOptions.tags = tags;
        }
        if (((_j = target.options) === null || _j === void 0 ? void 0 : _j.acknowledged) === 0 || ((_k = target.options) === null || _k === void 0 ? void 0 : _k.acknowledged) === 1) {
            problemsOptions.acknowledged = ((_l = target.options) === null || _l === void 0 ? void 0 : _l.acknowledged) ? true : false;
        }
        if ((_m = target.options) === null || _m === void 0 ? void 0 : _m.minSeverity) {
            var severities = [0, 1, 2, 3, 4, 5].filter(function (v) { var _a; return v >= ((_a = target.options) === null || _a === void 0 ? void 0 : _a.minSeverity); });
            if ((_o = target.options) === null || _o === void 0 ? void 0 : _o.severities) {
                severities = severities.filter(function (v) { var _a; return (_a = target.options) === null || _a === void 0 ? void 0 : _a.severities.includes(v); });
            }
            problemsOptions.severities = severities;
        }
        var getProblemsPromise;
        if (showProblems === _types__WEBPACK_IMPORTED_MODULE_13__["ShowProblemTypes"].History) {
            problemsOptions.timeFrom = timeFrom;
            problemsOptions.timeTo = timeTo;
            getProblemsPromise = this.zabbix.getProblemsHistory(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions);
        }
        else {
            getProblemsPromise = this.zabbix.getProblems(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions);
        }
        var problemsPromises = Promise.all([
            getProblemsPromise,
            getProxiesPromise
        ])
            .then(function (_a) {
            var problems = _a[0], sourceProxies = _a[1];
            proxies = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keyBy(sourceProxies, 'proxyid');
            return problems;
        })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].setMaintenanceStatus(problems); })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].setAckButtonStatus(problems, showAckButton); })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].filterTriggersPre(problems, replacedTarget); })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].sortProblems(problems, target); })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].addTriggerDataSource(problems, target); })
            .then(function (problems) { return _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].addTriggerHostProxy(problems, proxies); });
        return problemsPromises.then(function (problems) {
            var problemsDataFrame = _problemsHandler__WEBPACK_IMPORTED_MODULE_10__["default"].toDataFrame(problems);
            return problemsDataFrame;
        });
    };
    /**
     * Test connection to Zabbix API and external history DB.
     */
    ZabbixDatasource.prototype.testDatasource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, zabbixVersion, dbConnectorStatus, message, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.zabbix.testDataSource()];
                    case 1:
                        _a = _b.sent(), zabbixVersion = _a.zabbixVersion, dbConnectorStatus = _a.dbConnectorStatus;
                        message = "Zabbix API version: " + zabbixVersion;
                        if (dbConnectorStatus) {
                            message += ", DB connector type: " + dbConnectorStatus.dsType;
                        }
                        return [2 /*return*/, {
                                status: "success",
                                title: "Success",
                                message: message
                            }];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1 instanceof _zabbix_connectors_zabbix_api_zabbixAPIConnector__WEBPACK_IMPORTED_MODULE_12__["ZabbixAPIError"]) {
                            return [2 /*return*/, {
                                    status: "error",
                                    title: error_1.message,
                                    message: error_1.message
                                }];
                        }
                        else if (error_1.data && error_1.data.message) {
                            return [2 /*return*/, {
                                    status: "error",
                                    title: "Zabbix Client Error",
                                    message: error_1.data.message
                                }];
                        }
                        else if (typeof (error_1) === 'string') {
                            return [2 /*return*/, {
                                    status: "error",
                                    title: "Unknown Error",
                                    message: error_1
                                }];
                        }
                        else {
                            console.log(error_1);
                            return [2 /*return*/, {
                                    status: "error",
                                    title: "Connection failed",
                                    message: "Could not connect to given url"
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ////////////////
    // Templating //
    ////////////////
    /**
     * Find metrics from templated request.
     *
     * @param  {string} query Query from Templating
     * @return {string}       Metric name - group, host, app or item or list
     *                        of metrics in "{metric1,metcic2,...,metricN}" format.
     */
    ZabbixDatasource.prototype.metricFindQuery = function (query, options) {
        var resultPromise;
        var queryModel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(query);
        if (!query) {
            return Promise.resolve([]);
        }
        if (typeof query === 'string') {
            // Backward compatibility
            queryModel = _utils__WEBPACK_IMPORTED_MODULE_4__["parseLegacyVariableQuery"](query);
        }
        for (var _i = 0, _a = ['group', 'host', 'application', 'item']; _i < _a.length; _i++) {
            var prop = _a[_i];
            queryModel[prop] = this.replaceTemplateVars(queryModel[prop], {});
        }
        var group = queryModel.group, host = queryModel.host, application = queryModel.application, item = queryModel.item;
        switch (queryModel.queryType) {
            case _types__WEBPACK_IMPORTED_MODULE_13__["VariableQueryTypes"].Group:
                resultPromise = this.zabbix.getGroups(queryModel.group);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_13__["VariableQueryTypes"].Host:
                resultPromise = this.zabbix.getHosts(queryModel.group, queryModel.host);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_13__["VariableQueryTypes"].Application:
                resultPromise = this.zabbix.getApps(queryModel.group, queryModel.host, queryModel.application);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_13__["VariableQueryTypes"].Item:
                resultPromise = this.zabbix.getItems(queryModel.group, queryModel.host, queryModel.application, queryModel.item);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_13__["VariableQueryTypes"].ItemValues:
                var range = options === null || options === void 0 ? void 0 : options.range;
                resultPromise = this.zabbix.getItemValues(group, host, application, item, { range: range });
                break;
            default:
                resultPromise = Promise.resolve([]);
                break;
        }
        return resultPromise.then(function (metrics) {
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(metrics, formatMetric);
        });
    };
    /////////////////
    // Annotations //
    /////////////////
    ZabbixDatasource.prototype.annotationQuery = function (options) {
        var _this = this;
        var timeRange = options.range || options.rangeRaw;
        var timeFrom = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__["parse"](timeRange.from) / 1000);
        var timeTo = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__["parse"](timeRange.to) / 1000);
        var annotation = options.annotation;
        // Show all triggers
        var problemsOptions = {
            value: annotation.showOkEvents ? ['0', '1'] : '1',
            valueFromEvent: true,
            timeFrom: timeFrom,
            timeTo: timeTo,
        };
        if (annotation.minseverity) {
            var severities = [0, 1, 2, 3, 4, 5].filter(function (v) { return v >= Number(annotation.minseverity); });
            problemsOptions.severities = severities;
        }
        var groupFilter = this.replaceTemplateVars(annotation.group, {});
        var hostFilter = this.replaceTemplateVars(annotation.host, {});
        var appFilter = this.replaceTemplateVars(annotation.application, {});
        var proxyFilter = undefined;
        return this.zabbix.getProblemsHistory(groupFilter, hostFilter, appFilter, proxyFilter, problemsOptions)
            .then(function (problems) {
            // Filter triggers by description
            var problemName = _this.replaceTemplateVars(annotation.trigger, {});
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["isRegex"](problemName)) {
                problems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(problems, function (p) {
                    return _utils__WEBPACK_IMPORTED_MODULE_4__["buildRegex"](problemName).test(p.description);
                });
            }
            else if (problemName) {
                problems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(problems, function (p) {
                    return p.description === problemName;
                });
            }
            // Hide acknowledged events if option enabled
            if (annotation.hideAcknowledged) {
                problems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(problems, function (p) {
                    var _a;
                    return !((_a = p.acknowledges) === null || _a === void 0 ? void 0 : _a.length);
                });
            }
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(problems, function (p) {
                var formattedAcknowledges = _utils__WEBPACK_IMPORTED_MODULE_4__["formatAcknowledges"](p.acknowledges);
                var annotationTags = [];
                if (annotation.showHostname) {
                    annotationTags = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(p.hosts, 'name');
                }
                return {
                    title: p.value === '1' ? 'Problem' : 'OK',
                    time: p.timestamp * 1000,
                    annotation: annotation,
                    text: p.name + formattedAcknowledges,
                    tags: annotationTags,
                };
            });
        });
    };
    // Replace template variables
    ZabbixDatasource.prototype.replaceTargetVariables = function (target, options) {
        var _this = this;
        var parts = ['group', 'host', 'application', 'item'];
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(parts, function (p) {
            if (target[p] && target[p].filter) {
                target[p].filter = _this.replaceTemplateVars(target[p].filter, options.scopedVars);
            }
        });
        target.textFilter = this.replaceTemplateVars(target.textFilter, options.scopedVars);
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(target.functions, function (func) {
            func.params = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(func.params, function (param) {
                if (typeof param === 'number') {
                    return +_this.templateSrv.replace(param.toString(), options.scopedVars);
                }
                else {
                    return _this.templateSrv.replace(param, options.scopedVars);
                }
            });
        });
    };
    ZabbixDatasource.prototype.isUseTrends = function (timeRange) {
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        var useTrendsFrom = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_3__["parse"]('now-' + this.trendsFrom) / 1000);
        var useTrendsRange = Math.ceil(_utils__WEBPACK_IMPORTED_MODULE_4__["parseInterval"](this.trendsRange) / 1000);
        var useTrends = this.trends && ((timeFrom < useTrendsFrom) ||
            (timeTo - timeFrom > useTrendsRange));
        return useTrends;
    };
    return ZabbixDatasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_15__["DataSourceApi"]));

function bindFunctionDefs(functionDefs, category) {
    var aggregationFunctions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(_metricFunctions__WEBPACK_IMPORTED_MODULE_6__["getCategories"]()[category], 'name');
    var aggFuncDefs = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(functionDefs, function (func) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(aggregationFunctions, func.def.name);
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(aggFuncDefs, function (func) {
        var funcInstance = _metricFunctions__WEBPACK_IMPORTED_MODULE_6__["createFuncInstance"](func.def, func.params);
        return funcInstance.bindFunction(_dataProcessor__WEBPACK_IMPORTED_MODULE_8__["default"].metricFunctions);
    });
}
function getConsolidateBy(target) {
    var consolidateBy;
    var funcDef = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(target.functions, function (func) {
        return func.def.name === 'consolidateBy';
    });
    if (funcDef && funcDef.params && funcDef.params.length) {
        consolidateBy = funcDef.params[0];
    }
    return consolidateBy;
}
function downsampleSeries(timeseries_data, options) {
    var defaultAgg = _dataProcessor__WEBPACK_IMPORTED_MODULE_8__["default"].aggregationFunctions['avg'];
    var consolidateByFunc = _dataProcessor__WEBPACK_IMPORTED_MODULE_8__["default"].aggregationFunctions[options.consolidateBy] || defaultAgg;
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(timeseries_data, function (timeseries) {
        if (timeseries.datapoints.length > options.maxDataPoints) {
            timeseries.datapoints = _dataProcessor__WEBPACK_IMPORTED_MODULE_8__["default"]
                .groupBy(options.interval, consolidateByFunc, timeseries.datapoints);
        }
        return timeseries;
    });
}
function formatMetric(metricObj) {
    return {
        text: metricObj.name,
        expandable: false
    };
}
/**
 * Custom formatter for template variables.
 * Default Grafana "regex" formatter returns
 * value1|value2
 * This formatter returns
 * (value1|value2)
 * This format needed for using in complex regex with
 * template variables, for example
 * /CPU $cpu_item.*time/ where $cpu_item is system,user,iowait
 */
function zabbixTemplateFormat(value) {
    if (typeof value === 'string') {
        return _utils__WEBPACK_IMPORTED_MODULE_4__["escapeRegex"](value);
    }
    var escapedValues = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(value, _utils__WEBPACK_IMPORTED_MODULE_4__["escapeRegex"]);
    return '(' + escapedValues.join('|') + ')';
}
function zabbixItemIdsTemplateFormat(value) {
    if (typeof value === 'string') {
        return value;
    }
    return value.join(',');
}
/**
 * If template variables are used in request, replace it using regex format
 * and wrap with '/' for proper multi-value work. Example:
 * $variable selected as a, b, c
 * We use filter $variable
 * $variable    -> a|b|c    -> /a|b|c/
 * /$variable/  -> /a|b|c/  -> /a|b|c/
 */
function replaceTemplateVars(templateSrv, target, scopedVars) {
    var replacedTarget = templateSrv.replace(target, scopedVars, zabbixTemplateFormat);
    if (target && target !== replacedTarget && !_utils__WEBPACK_IMPORTED_MODULE_4__["isRegex"](replacedTarget)) {
        replacedTarget = '/^' + replacedTarget + '$/';
    }
    return replacedTarget;
}
function filterEnabledTargets(targets) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(targets, function (target) {
        return !(target.hide || !target.group || !target.host || !target.item);
    });
}


/***/ }),

/***/ "./datasource-zabbix/metric-function-editor.directive.ts":
/*!***************************************************************!*\
  !*** ./datasource-zabbix/metric-function-editor.directive.ts ***!
  \***************************************************************/
/*! exports provided: zabbixFunctionEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zabbixFunctionEditor", function() { return zabbixFunctionEditor; });
/* harmony import */ var grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana/app/core/core_module */ "grafana/app/core/core_module");
/* harmony import */ var grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react2angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./react2angular */ "./datasource-zabbix/react2angular.ts");
/* harmony import */ var _components_FunctionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FunctionEditor */ "./datasource-zabbix/components/FunctionEditor.tsx");





/** @ngInject */
function zabbixFunctionEditor($compile, templateSrv) {
    var funcSpanTemplate = "\n    <zbx-function-editor\n      func=\"func\"\n      onRemove=\"ctrl.handleRemoveFunction\"\n      onMoveLeft=\"ctrl.handleMoveLeft\"\n      onMoveRight=\"ctrl.handleMoveRight\">\n    </zbx-function-editor>\n    <span>(</span>\n  ";
    var paramTemplate = '<input type="text" style="display:none"' + ' class="input-small tight-form-func-param"></input>';
    return {
        restrict: 'A',
        link: function postLink($scope, elem) {
            var $funcLink = jquery__WEBPACK_IMPORTED_MODULE_2___default()(funcSpanTemplate);
            var ctrl = $scope.ctrl;
            var func = $scope.func;
            var scheduledRelink = false;
            var paramCountAtLink = 0;
            var cancelBlur = null;
            ctrl.handleRemoveFunction = function (func) {
                ctrl.removeFunction(func);
            };
            ctrl.handleMoveLeft = function (func) {
                ctrl.moveFunction(func, -1);
            };
            ctrl.handleMoveRight = function (func) {
                ctrl.moveFunction(func, 1);
            };
            function clickFuncParam(paramIndex) {
                /*jshint validthis:true */
                var $link = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this);
                var $comma = $link.prev('.comma');
                var $input = $link.next();
                $input.val(func.params[paramIndex]);
                $comma.removeClass('query-part__last');
                $link.hide();
                $input.show();
                $input.focus();
                $input.select();
                var typeahead = $input.data('typeahead');
                if (typeahead) {
                    $input.val('');
                    typeahead.lookup();
                }
            }
            function scheduledRelinkIfNeeded() {
                if (paramCountAtLink === func.params.length) {
                    return;
                }
                if (!scheduledRelink) {
                    scheduledRelink = true;
                    setTimeout(function () {
                        relink();
                        scheduledRelink = false;
                    }, 200);
                }
            }
            function paramDef(index) {
                if (index < func.def.params.length) {
                    return func.def.params[index];
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(func.def.params).multiple) {
                    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.assign({}, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(func.def.params), { optional: true });
                }
                return {};
            }
            function switchToLink(inputElem, paramIndex) {
                /*jshint validthis:true */
                var $input = jquery__WEBPACK_IMPORTED_MODULE_2___default()(inputElem);
                clearTimeout(cancelBlur);
                cancelBlur = null;
                var $link = $input.prev();
                var $comma = $link.prev('.comma');
                var newValue = $input.val();
                // remove optional empty params
                if (newValue !== '' || paramDef(paramIndex).optional) {
                    func.updateParam(newValue, paramIndex);
                    $link.html(newValue ? templateSrv.highlightVariablesAsHtml(newValue) : '&nbsp;');
                }
                scheduledRelinkIfNeeded();
                $scope.$apply(function () {
                    ctrl.targetChanged();
                });
                if ($link.hasClass('query-part__last') && newValue === '') {
                    $comma.addClass('query-part__last');
                }
                else {
                    $link.removeClass('query-part__last');
                }
                $input.hide();
                $link.show();
            }
            // this = input element
            function inputBlur(paramIndex) {
                /*jshint validthis:true */
                var inputElem = this;
                // happens long before the click event on the typeahead options
                // need to have long delay because the blur
                cancelBlur = setTimeout(function () {
                    switchToLink(inputElem, paramIndex);
                }, 200);
            }
            function inputKeyPress(paramIndex, e) {
                /*jshint validthis:true */
                if (e.which === 13) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).blur();
                }
            }
            function inputKeyDown() {
                /*jshint validthis:true */
                this.style.width = (3 + this.value.length) * 8 + 'px';
            }
            function addTypeahead($input, paramIndex) {
                $input.attr('data-provide', 'typeahead');
                var options = paramDef(paramIndex).options;
                if (paramDef(paramIndex).type === 'int' || paramDef(paramIndex).type === 'float') {
                    options = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(options, function (val) {
                        return val.toString();
                    });
                }
                $input.typeahead({
                    source: options,
                    minLength: 0,
                    items: 20,
                    updater: function (value) {
                        $input.val(value);
                        switchToLink($input[0], paramIndex);
                        return value;
                    },
                });
                var typeahead = $input.data('typeahead');
                typeahead.lookup = function () {
                    this.query = this.$element.val() || '';
                    return this.process(this.source);
                };
            }
            function addElementsAndCompile() {
                $funcLink.appendTo(elem);
                var defParams = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.clone(func.def.params);
                var lastParam = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(func.def.params);
                while (func.params.length >= defParams.length && lastParam && lastParam.multiple) {
                    defParams.push(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.assign({}, lastParam, { optional: true }));
                }
                lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(defParams, function (param, index) {
                    if (param.optional && func.params.length < index) {
                        return false;
                    }
                    var paramValue = templateSrv.highlightVariablesAsHtml(func.params[index]);
                    var hasValue = paramValue !== null && paramValue !== undefined;
                    var last = index >= func.params.length - 1 && param.optional && !hasValue;
                    if (last && param.multiple) {
                        paramValue = '+';
                    }
                    if (index > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_2___default()('<span class="comma' + (last ? ' query-part__last' : '') + '">,&nbsp; </span>').appendTo(elem);
                    }
                    var $paramLink = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<a ng-click="" class="graphite-func-param-link' +
                        (last ? ' query-part__last' : '') +
                        '">' +
                        (hasValue ? paramValue : '&nbsp;') +
                        '</a>');
                    var $input = jquery__WEBPACK_IMPORTED_MODULE_2___default()(paramTemplate);
                    $input.attr('placeholder', param.name);
                    paramCountAtLink++;
                    $paramLink.appendTo(elem);
                    $input.appendTo(elem);
                    $input.blur(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.partial(inputBlur, index));
                    $input.keyup(inputKeyDown);
                    $input.keypress(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.partial(inputKeyPress, index));
                    $paramLink.click(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.partial(clickFuncParam, index));
                    if (param.options) {
                        addTypeahead($input, index);
                    }
                    return true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('<span>)</span>').appendTo(elem);
                $compile(elem.contents())($scope);
            }
            function ifJustAddedFocusFirstParam() {
                if ($scope.func.added) {
                    $scope.func.added = false;
                    setTimeout(function () {
                        elem
                            .find('.graphite-func-param-link')
                            .first()
                            .click();
                    }, 10);
                }
            }
            function relink() {
                elem.children().remove();
                addElementsAndCompile();
                ifJustAddedFocusFirstParam();
            }
            relink();
        },
    };
}
grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0___default.a.directive('zabbixFunctionEditor', zabbixFunctionEditor);
Object(_react2angular__WEBPACK_IMPORTED_MODULE_3__["react2AngularDirective"])('zbxFunctionEditor', _components_FunctionEditor__WEBPACK_IMPORTED_MODULE_4__["FunctionEditor"], ['func', 'onRemove', 'onMoveLeft', 'onMoveRight']);


/***/ }),

/***/ "./datasource-zabbix/metricFunctions.ts":
/*!**********************************************!*\
  !*** ./datasource-zabbix/metricFunctions.ts ***!
  \**********************************************/
/*! exports provided: createFuncInstance, getFuncDef, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFuncInstance", function() { return createFuncInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFuncDef", function() { return getFuncDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./datasource-zabbix/utils.ts");


var index = [];
var categories = {
    Transform: [],
    Aggregate: [],
    Filter: [],
    Trends: [],
    Time: [],
    Alias: [],
    Special: []
};
function addFuncDef(funcDef) {
    funcDef.params = funcDef.params || [];
    funcDef.defaultParams = funcDef.defaultParams || [];
    if (funcDef.category) {
        categories[funcDef.category].push(funcDef);
    }
    index[funcDef.name] = funcDef;
    index[funcDef.shortName || funcDef.name] = funcDef;
}
// Transform
addFuncDef({
    name: 'groupBy',
    category: 'Transform',
    params: [
        { name: 'interval', type: 'string' },
        { name: 'function', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count', 'median'] }
    ],
    defaultParams: ['1m', 'avg'],
});
addFuncDef({
    name: 'scale',
    category: 'Transform',
    params: [
        { name: 'factor', type: 'float', options: [100, 0.01, 10, -1] }
    ],
    defaultParams: [100],
});
addFuncDef({
    name: 'offset',
    category: 'Transform',
    params: [
        { name: 'delta', type: 'float', options: [-100, 100] }
    ],
    defaultParams: [100],
});
addFuncDef({
    name: 'delta',
    category: 'Transform',
    params: [],
    defaultParams: [],
});
addFuncDef({
    name: 'rate',
    category: 'Transform',
    params: [],
    defaultParams: [],
});
addFuncDef({
    name: 'movingAverage',
    category: 'Transform',
    params: [
        { name: 'factor', type: 'int', options: [6, 10, 60, 100, 600] }
    ],
    defaultParams: [10],
});
addFuncDef({
    name: 'exponentialMovingAverage',
    category: 'Transform',
    params: [
        { name: 'smoothing', type: 'float', options: [6, 10, 60, 100, 600] }
    ],
    defaultParams: [0.2],
});
addFuncDef({
    name: 'percentile',
    category: 'Transform',
    params: [
        { name: 'interval', type: 'string' },
        { name: 'percent', type: 'float', options: [25, 50, 75, 90, 95, 99, 99.9] }
    ],
    defaultParams: ['1m', 95],
});
addFuncDef({
    name: 'removeAboveValue',
    category: 'Transform',
    params: [
        { name: 'number', type: 'float' },
    ],
    defaultParams: [0],
});
addFuncDef({
    name: 'removeBelowValue',
    category: 'Transform',
    params: [
        { name: 'number', type: 'float' },
    ],
    defaultParams: [0],
});
addFuncDef({
    name: 'transformNull',
    category: 'Transform',
    params: [
        { name: 'number', type: 'float' }
    ],
    defaultParams: [0],
});
// Aggregate
addFuncDef({
    name: 'sumSeries',
    category: 'Aggregate',
    params: [],
    defaultParams: [],
});
addFuncDef({
    name: 'median',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'average',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'percentileAgg',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' },
        { name: 'percent', type: 'float', options: [25, 50, 75, 90, 95, 99, 99.9] }
    ],
    defaultParams: ['1m', 95],
});
addFuncDef({
    name: 'min',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'max',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'sum',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'count',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' }
    ],
    defaultParams: ['1m'],
});
addFuncDef({
    name: 'aggregateBy',
    category: 'Aggregate',
    params: [
        { name: 'interval', type: 'string' },
        { name: 'function', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count', 'median'] }
    ],
    defaultParams: ['1m', 'avg'],
});
// Filter
addFuncDef({
    name: 'top',
    category: 'Filter',
    params: [
        { name: 'number', type: 'int' },
        { name: 'value', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count', 'median'] }
    ],
    defaultParams: [5, 'avg'],
});
addFuncDef({
    name: 'bottom',
    category: 'Filter',
    params: [
        { name: 'number', type: 'int' },
        { name: 'value', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count', 'median'] }
    ],
    defaultParams: [5, 'avg'],
});
addFuncDef({
    name: 'sortSeries',
    category: 'Filter',
    params: [
        { name: 'direction', type: 'string', options: ['asc', 'desc'] }
    ],
    defaultParams: ['asc']
});
// Trends
addFuncDef({
    name: 'trendValue',
    category: 'Trends',
    params: [
        { name: 'type', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count'] }
    ],
    defaultParams: ['avg'],
});
// Time
addFuncDef({
    name: 'timeShift',
    category: 'Time',
    params: [
        { name: 'interval', type: 'string', options: ['24h', '7d', '1M', '+24h', '-24h'] }
    ],
    defaultParams: ['24h'],
});
//Alias
addFuncDef({
    name: 'setAlias',
    category: 'Alias',
    params: [
        { name: 'alias', type: 'string' }
    ],
    defaultParams: []
});
addFuncDef({
    name: 'setAliasByRegex',
    category: 'Alias',
    params: [
        { name: 'aliasByRegex', type: 'string' }
    ],
    defaultParams: []
});
addFuncDef({
    name: 'replaceAlias',
    category: 'Alias',
    params: [
        { name: 'regexp', type: 'string' },
        { name: 'newAlias', type: 'string' }
    ],
    defaultParams: ['/(.*)/', '$1']
});
// Special
addFuncDef({
    name: 'consolidateBy',
    category: 'Special',
    params: [
        { name: 'type', type: 'string', options: ['avg', 'min', 'max', 'sum', 'count'] }
    ],
    defaultParams: ['avg'],
});
lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(categories, function (funcList, catName) {
    categories[catName] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(funcList, 'name');
});
var FuncInstance = /** @class */ (function () {
    function FuncInstance(funcDef, params) {
        this.def = funcDef;
        if (params) {
            this.params = params;
        }
        else {
            // Create with default params
            this.params = [];
            this.params = funcDef.defaultParams.slice(0);
        }
        this.updateText();
    }
    FuncInstance.prototype.bindFunction = function (metricFunctions) {
        var func = metricFunctions[this.def.name];
        if (func) {
            // Bind function arguments
            var bindedFunc = func;
            var param = void 0;
            for (var i = 0; i < this.params.length; i++) {
                param = this.params[i];
                // Convert numeric params
                if (this.def.params[i].type === 'int' ||
                    this.def.params[i].type === 'float') {
                    param = Number(param);
                }
                bindedFunc = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(bindedFunc, param);
            }
            return bindedFunc;
        }
        else {
            throw { message: 'Method not found ' + this.def.name };
        }
    };
    FuncInstance.prototype.render = function (metricExp) {
        var _this = this;
        var str = this.def.name + '(';
        var parameters = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.params, function (value, index) {
            var paramType = _this.def.params[index].type;
            if (paramType === 'int' ||
                paramType === 'float' ||
                paramType === 'value_or_series' ||
                paramType === 'boolean') {
                return value;
            }
            else if (paramType === 'int_or_interval' && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumeric"])(value)) {
                return value;
            }
            return "'" + value + "'";
        });
        if (metricExp) {
            parameters.unshift(metricExp);
        }
        return str + parameters.join(', ') + ')';
    };
    FuncInstance.prototype._hasMultipleParamsInString = function (strValue, index) {
        if (strValue.indexOf(',') === -1) {
            return false;
        }
        return this.def.params[index + 1] && this.def.params[index + 1].optional;
    };
    FuncInstance.prototype.updateParam = function (strValue, index) {
        var _this = this;
        // handle optional parameters
        // if string contains ',' and next param is optional, split and update both
        if (this._hasMultipleParamsInString(strValue, index)) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(strValue.split(','), function (partVal, idx) {
                _this.updateParam(partVal.trim(), idx);
            });
            return;
        }
        if (strValue === '' && this.def.params[index].optional) {
            this.params.splice(index, 1);
        }
        else {
            this.params[index] = strValue;
        }
        this.updateText();
    };
    FuncInstance.prototype.updateText = function () {
        if (this.params.length === 0) {
            this.text = this.def.name + '()';
            return;
        }
        var text = this.def.name + '(';
        text += this.params.join(', ');
        text += ')';
        this.text = text;
    };
    return FuncInstance;
}());
function createFuncInstance(funcDef, params) {
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(funcDef)) {
        if (!index[funcDef]) {
            throw { message: 'Method not found ' + name };
        }
        funcDef = index[funcDef];
    }
    return new FuncInstance(funcDef, params);
}
function getFuncDef(name) {
    return index[name];
}
function getCategories() {
    return categories;
}


/***/ }),

/***/ "./datasource-zabbix/migrations.ts":
/*!*****************************************!*\
  !*** ./datasource-zabbix/migrations.ts ***!
  \*****************************************/
/*! exports provided: isGrafana2target, migrateFrom2To3version, migrate, DS_CONFIG_SCHEMA, migrateDSConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGrafana2target", function() { return isGrafana2target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateFrom2To3version", function() { return migrateFrom2To3version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrate", function() { return migrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DS_CONFIG_SCHEMA", function() { return DS_CONFIG_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateDSConfig", function() { return migrateDSConfig; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");


/**
 * Query format migration.
 * This module can detect query format version and make migration.
 */
function isGrafana2target(target) {
    if (!target.mode || target.mode === 0 || target.mode === 2) {
        if ((target.hostFilter || target.itemFilter || target.downsampleFunction ||
            (target.host && target.host.host)) &&
            (target.item.filter === undefined && target.host.filter === undefined)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function migrateFrom2To3version(target) {
    target.group.filter = target.group.name === "*" ? "/.*/" : target.group.name;
    target.host.filter = target.host.name === "*" ? convertToRegex(target.hostFilter) : target.host.name;
    target.application.filter = target.application.name === "*" ? "" : target.application.name;
    target.item.filter = target.item.name === "All" ? convertToRegex(target.itemFilter) : target.item.name;
    return target;
}
function migratePercentileAgg(target) {
    if (target.functions) {
        for (var _i = 0, _a = target.functions; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.def && f.def.name === 'percentil') {
                f.def.name = 'percentile';
            }
        }
    }
}
function migrateQueryType(target) {
    if (target.queryType === undefined) {
        if (target.mode === 'Metrics') {
            // Explore mode
            target.queryType = _constants__WEBPACK_IMPORTED_MODULE_1__["MODE_METRICS"];
        }
        else if (target.mode !== undefined) {
            target.queryType = target.mode;
            delete target.mode;
        }
    }
}
function migrateSLA(target) {
    if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_1__["MODE_ITSERVICE"] && !target.slaInterval) {
        target.slaInterval = 'none';
    }
}
function migrateProblemSort(target) {
    var _a;
    if (((_a = target.options) === null || _a === void 0 ? void 0 : _a.sortProblems) === 'priority') {
        target.options.sortProblems = 'severity';
    }
}
function migrate(target) {
    target.resultFormat = target.resultFormat || 'time_series';
    target = fixTargetGroup(target);
    if (isGrafana2target(target)) {
        return migrateFrom2To3version(target);
    }
    migratePercentileAgg(target);
    migrateQueryType(target);
    migrateSLA(target);
    migrateProblemSort(target);
    return target;
}
function fixTargetGroup(target) {
    if (target.group && Array.isArray(target.group)) {
        target.group = { 'filter': "" };
    }
    return target;
}
function convertToRegex(str) {
    if (str) {
        return '/' + str + '/';
    }
    else {
        return '/.*/';
    }
}
var DS_CONFIG_SCHEMA = 2;
function migrateDSConfig(jsonData) {
    if (!jsonData) {
        jsonData = {};
    }
    if (!shouldMigrateDSConfig(jsonData)) {
        return jsonData;
    }
    var oldVersion = jsonData.schema || 1;
    jsonData.schema = DS_CONFIG_SCHEMA;
    if (oldVersion < 2) {
        var dbConnectionOptions = jsonData.dbConnection || {};
        jsonData.dbConnectionEnable = dbConnectionOptions.enable || false;
        jsonData.dbConnectionDatasourceId = dbConnectionOptions.datasourceId || null;
        delete jsonData.dbConnection;
    }
    return jsonData;
}
function shouldMigrateDSConfig(jsonData) {
    if (jsonData.dbConnection && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(jsonData.dbConnection)) {
        return true;
    }
    if (jsonData.schema && jsonData.schema !== DS_CONFIG_SCHEMA) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./datasource-zabbix/module.ts":
/*!*************************************!*\
  !*** ./datasource-zabbix/module.ts ***!
  \*************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource */ "./datasource-zabbix/datasource.ts");
/* harmony import */ var _query_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query.controller */ "./datasource-zabbix/query.controller.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/VariableQueryEditor */ "./datasource-zabbix/components/VariableQueryEditor.tsx");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ConfigEditor */ "./datasource-zabbix/components/ConfigEditor.tsx");
/* harmony import */ var _add_metric_function_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-metric-function.directive */ "./datasource-zabbix/add-metric-function.directive.js");
/* harmony import */ var _metric_function_editor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metric-function-editor.directive */ "./datasource-zabbix/metric-function-editor.directive.ts");








var ZabbixAnnotationsQueryController = /** @class */ (function () {
    function ZabbixAnnotationsQueryController() {
    }
    ZabbixAnnotationsQueryController.templateUrl = 'datasource-zabbix/partials/annotations.editor.html';
    return ZabbixAnnotationsQueryController;
}());
_query_controller__WEBPACK_IMPORTED_MODULE_3__["ZabbixQueryController"].templateUrl = 'datasource-zabbix/partials/query.editor.html';
Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["loadPluginCss"])({
    dark: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.dark.css',
    light: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.light.css'
});
var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_2__["ZabbixDatasource"])
    .setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_5__["ConfigEditor"])
    .setQueryCtrl(_query_controller__WEBPACK_IMPORTED_MODULE_3__["ZabbixQueryController"])
    .setAnnotationQueryCtrl(ZabbixAnnotationsQueryController)
    .setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__["ZabbixVariableQueryEditor"]);


/***/ }),

/***/ "./datasource-zabbix/problemsHandler.ts":
/*!**********************************************!*\
  !*** ./datasource-zabbix/problemsHandler.ts ***!
  \**********************************************/
/*! exports provided: joinTriggersWithProblems, joinTriggersWithEvents, setMaintenanceStatus, setAckButtonStatus, addTriggerDataSource, addTriggerHostProxy, filterTriggersPre, sortProblems, toDataFrame, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinTriggersWithProblems", function() { return joinTriggersWithProblems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinTriggersWithEvents", function() { return joinTriggersWithEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaintenanceStatus", function() { return setMaintenanceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAckButtonStatus", function() { return setAckButtonStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTriggerDataSource", function() { return addTriggerDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTriggerHostProxy", function() { return addTriggerHostProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTriggersPre", function() { return filterTriggersPre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortProblems", function() { return sortProblems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDataFrame", function() { return toDataFrame; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datasource-zabbix/utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);



function joinTriggersWithProblems(problems, triggers) {
    var problemDTOList = [];
    for (var i = 0; i < problems.length; i++) {
        var p = problems[i];
        var triggerId = Number(p.objectid);
        var t = triggers[triggerId];
        if (t) {
            var problemDTO = {
                timestamp: Number(p.clock),
                triggerid: p.objectid,
                eventid: p.eventid,
                name: p.name,
                severity: p.severity,
                acknowledged: p.acknowledged,
                acknowledges: p.acknowledges,
                tags: p.tags,
                suppressed: p.suppressed,
                suppression_data: p.suppression_data,
                description: t.description,
                comments: t.comments,
                value: t.value,
                groups: t.groups,
                hosts: t.hosts,
                items: t.items,
                alerts: t.alerts,
                url: t.url,
                expression: t.expression,
                correlation_mode: t.correlation_mode,
                correlation_tag: t.correlation_tag,
                manual_close: t.manual_close,
                state: t.state,
                error: t.error,
            };
            problemDTOList.push(problemDTO);
        }
    }
    return problemDTOList;
}
function joinTriggersWithEvents(events, triggers, options) {
    var valueFromEvent = options.valueFromEvent;
    var problemDTOList = [];
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        var triggerId = Number(e.objectid);
        var t = triggers[triggerId];
        if (t) {
            var problemDTO = {
                value: valueFromEvent ? e.value : t.value,
                timestamp: Number(e.clock),
                triggerid: e.objectid,
                eventid: e.eventid,
                name: e.name,
                severity: e.severity,
                acknowledged: e.acknowledged,
                acknowledges: e.acknowledges,
                tags: e.tags,
                suppressed: e.suppressed,
                description: t.description,
                comments: t.comments,
                groups: t.groups,
                hosts: t.hosts,
                items: t.items,
                alerts: t.alerts,
                url: t.url,
                expression: t.expression,
                correlation_mode: t.correlation_mode,
                correlation_tag: t.correlation_tag,
                manual_close: t.manual_close,
                state: t.state,
                error: t.error,
            };
            problemDTOList.push(problemDTO);
        }
    }
    return problemDTOList;
}
function setMaintenanceStatus(triggers) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(triggers, function (trigger) {
        var maintenance_status = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.some(trigger.hosts, function (host) { return host.maintenance_status === '1'; });
        trigger.maintenance = maintenance_status;
    });
    return triggers;
}
function setAckButtonStatus(triggers, showAckButton) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(triggers, function (trigger) {
        trigger.showAckButton = showAckButton;
    });
    return triggers;
}
function addTriggerDataSource(triggers, target) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(triggers, function (trigger) {
        trigger.datasource = target.datasource;
    });
    return triggers;
}
function addTriggerHostProxy(triggers, proxies) {
    triggers.forEach(function (trigger) {
        if (trigger.hosts && trigger.hosts.length) {
            var host = trigger.hosts[0];
            if (host.proxy_hostid !== '0') {
                var hostProxy = proxies[host.proxy_hostid];
                host.proxy = hostProxy ? hostProxy.host : '';
            }
        }
    });
    return triggers;
}
function filterTriggersPre(triggerList, replacedTarget) {
    // Filter triggers by description
    var triggerFilter = replacedTarget.trigger.filter;
    if (triggerFilter) {
        triggerList = filterTriggers(triggerList, triggerFilter);
    }
    // Filter by maintenance status
    if (!replacedTarget.options.hostsInMaintenance) {
        triggerList = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(triggerList, function (trigger) { return !trigger.maintenance; });
    }
    return triggerList;
}
function filterTriggers(triggers, triggerFilter) {
    if (_datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_1__["isRegex"](triggerFilter)) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(triggers, function (trigger) {
            return _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_1__["buildRegex"](triggerFilter).test(trigger.description);
        });
    }
    else {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(triggers, function (trigger) {
            return trigger.description === triggerFilter;
        });
    }
}
function sortProblems(problems, target) {
    var _a, _b;
    if (((_a = target.options) === null || _a === void 0 ? void 0 : _a.sortProblems) === 'severity') {
        problems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(problems, ['severity', 'eventid'], ['desc', 'desc']);
    }
    else if (((_b = target.options) === null || _b === void 0 ? void 0 : _b.sortProblems) === 'lastchange') {
        problems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(problems, ['timestamp', 'eventid'], ['desc', 'desc']);
    }
    return problems;
}
function toDataFrame(problems) {
    var problemsField = {
        name: 'Problems',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].other,
        values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__["ArrayVector"](problems),
        config: {},
    };
    var response = {
        name: 'problems',
        fields: [problemsField],
        length: problems.length,
    };
    return response;
}
var problemsHandler = {
    addTriggerDataSource: addTriggerDataSource,
    addTriggerHostProxy: addTriggerHostProxy,
    setMaintenanceStatus: setMaintenanceStatus,
    setAckButtonStatus: setAckButtonStatus,
    filterTriggersPre: filterTriggersPre,
    sortProblems: sortProblems,
    toDataFrame: toDataFrame,
    joinTriggersWithProblems: joinTriggersWithProblems,
    joinTriggersWithEvents: joinTriggersWithEvents,
};
/* harmony default export */ __webpack_exports__["default"] = (problemsHandler);


/***/ }),

/***/ "./datasource-zabbix/query.controller.ts":
/*!***********************************************!*\
  !*** ./datasource-zabbix/query.controller.ts ***!
  \***********************************************/
/*! exports provided: ZabbixQueryController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixQueryController", function() { return ZabbixQueryController; });
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _metricFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metricFunctions */ "./datasource-zabbix/metricFunctions.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migrations */ "./datasource-zabbix/migrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./datasource-zabbix/types.ts");
/* harmony import */ var _panel_triggers_migrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel-triggers/migrations */ "./panel-triggers/migrations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function getTargetDefaults() {
    return {
        queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"],
        group: { 'filter': "" },
        host: { 'filter': "" },
        application: { 'filter': "" },
        item: { 'filter': "" },
        functions: [],
        triggers: {
            'count': true,
            'minSeverity': 3,
            'acknowledged': 2
        },
        trigger: { filter: "" },
        tags: { filter: "" },
        proxy: { filter: "" },
        options: {
            showDisabledItems: false,
            skipEmptyValues: false,
        },
        table: {
            'skipEmptyValues': false
        },
    };
}
function getSLATargetDefaults() {
    return {
        slaProperty: { name: "SLA", property: "sla" },
        slaInterval: 'none',
    };
}
function getProblemsTargetDefaults() {
    return {
        showProblems: _types__WEBPACK_IMPORTED_MODULE_6__["ShowProblemTypes"].Problems,
        options: {
            minSeverity: 0,
            sortProblems: 'default',
            acknowledged: 2,
            hostsInMaintenance: false,
            hostProxy: false,
            limit: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ZABBIX_PROBLEMS_LIMIT"],
        },
    };
}
function getSeverityOptions() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["TRIGGER_SEVERITY"];
}
function mapSeverityOptionsFromPanel(severityOptions) {
    if (!severityOptions) {
        return [0, 1, 2, 3, 4, 5];
    }
    var severities = [];
    for (var _i = 0, severityOptions_1 = severityOptions; _i < severityOptions_1.length; _i++) {
        var sevOption = severityOptions_1[_i];
        if (sevOption.show) {
            severities.push(sevOption.priority);
        }
    }
    return severities;
}
var ZabbixQueryController = /** @class */ (function (_super) {
    __extends(ZabbixQueryController, _super);
    /** @ngInject */
    function ZabbixQueryController($scope, $injector, $rootScope, $sce, templateSrv) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.zabbix = _this.datasource.zabbix;
        // Use custom format for template variables
        _this.replaceTemplateVars = _this.datasource.replaceTemplateVars;
        _this.templateSrv = templateSrv;
        _this.editorModes = [
            { value: 'num', text: 'Metrics', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"] },
            { value: 'text', text: 'Text', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TEXT"] },
            { value: 'itservice', text: 'IT Services', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITSERVICE"] },
            { value: 'itemid', text: 'Item ID', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITEMID"] },
            { value: 'triggers', text: 'Triggers', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TRIGGERS"] },
            { value: 'problems', text: 'Problems', queryType: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"] },
        ];
        _this.$scope.editorMode = {
            METRICS: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"],
            TEXT: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TEXT"],
            ITSERVICE: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITSERVICE"],
            ITEMID: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITEMID"],
            TRIGGERS: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TRIGGERS"],
            PROBLEMS: _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"],
        };
        _this.slaPropertyList = [
            { name: "Status", property: "status" },
            { name: "SLA", property: "sla" },
            { name: "OK time", property: "okTime" },
            { name: "Problem time", property: "problemTime" },
            { name: "Down time", property: "downtimeTime" }
        ];
        _this.slaIntervals = [
            { text: 'No interval', value: 'none' },
            { text: 'Auto', value: 'auto' },
            { text: '1 hour', value: '1h' },
            { text: '12 hours', value: '12h' },
            { text: '24 hours', value: '1d' },
            { text: '1 week', value: '1w' },
            { text: '1 month', value: '1M' },
        ];
        _this.ackFilters = [
            { text: 'all triggers', value: 2 },
            { text: 'unacknowledged', value: 0 },
            { text: 'acknowledged', value: 1 },
        ];
        _this.problemAckFilters = [
            'all triggers',
            'unacknowledged',
            'acknowledged'
        ];
        _this.sortByFields = [
            { text: 'Default', value: 'default' },
            { text: 'Last change', value: 'lastchange' },
            { text: 'Severity', value: 'severity' },
        ];
        _this.showEventsFields = [
            { text: 'All', value: [0, 1] },
            { text: 'OK', value: [0] },
            { text: 'Problems', value: 1 }
        ];
        _this.showProblemsOptions = [
            { text: 'Problems', value: 'problems' },
            { text: 'Recent problems', value: 'recent' },
            { text: 'History', value: 'history' },
        ];
        _this.resultFormats = [{ text: 'Time series', value: 'time_series' }, { text: 'Table', value: 'table' }];
        _this.severityOptions = getSeverityOptions();
        // Map functions for bs-typeahead
        _this.getGroupNames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'groupList');
        _this.getHostNames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'hostList', true);
        _this.getApplicationNames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'appList');
        _this.getItemNames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'itemList');
        _this.getITServices = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'itServiceList');
        _this.getProxyNames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getMetricNames, _this, 'proxyList');
        _this.getVariables = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_this.getTemplateVariables, _this);
        // Update metric suggestion when template variable was changed
        $rootScope.$on('template-variable-value-updated', function () { return _this.onVariableChange(); });
        // Update metrics when item selected from dropdown
        $scope.$on('typeahead-updated', function () {
            _this.onTargetBlur();
        });
        _this.init = function () {
            var target = this.target;
            // Migrate old targets
            target = _migrations__WEBPACK_IMPORTED_MODULE_5__["migrate"](target);
            var scopeDefaults = {
                metric: {},
                oldTarget: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.target),
                queryOptionsText: this.renderQueryOptionsText()
            };
            lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(this, scopeDefaults);
            // Load default values
            var targetDefaults = getTargetDefaults();
            lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep(target, targetDefaults);
            if (this.panel.type === _constants__WEBPACK_IMPORTED_MODULE_2__["ZABBIX_PROBLEMS_PANEL_ID"]) {
                target.queryType = _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"];
                target.options.severities = mapSeverityOptionsFromPanel(this.panel.triggerSeverity);
            }
            // Create function instances from saved JSON
            target.functions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(target.functions, function (func) {
                return _metricFunctions__WEBPACK_IMPORTED_MODULE_4__["createFuncInstance"](func.def, func.params);
            });
            if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITSERVICE"]) {
                lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep(target, getSLATargetDefaults());
            }
            if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"]) {
                lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep(target, getProblemsTargetDefaults());
            }
            if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"] ||
                target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TEXT"] ||
                target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TRIGGERS"] ||
                target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"]) {
                this.initFilters();
            }
            else if (target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITSERVICE"]) {
                this.suggestITServices();
            }
        };
        // Update panel schema version to prevent unnecessary migrations
        if (_this.panel.type === _constants__WEBPACK_IMPORTED_MODULE_2__["ZABBIX_PROBLEMS_PANEL_ID"]) {
            _this.panel.schemaVersion = _panel_triggers_migrations__WEBPACK_IMPORTED_MODULE_7__["CURRENT_SCHEMA_VERSION"];
        }
        _this.init();
        _this.queryOptionsText = _this.renderQueryOptionsText();
        return _this;
    }
    ZabbixQueryController.prototype.initFilters = function () {
        var mode = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.editorModes, { 'queryType': this.target.queryType });
        var itemtype = mode ? mode.value : null;
        var promises = [
            this.suggestGroups(),
            this.suggestHosts(),
            this.suggestApps(),
        ];
        if (this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"] || this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TEXT"]) {
            promises.push(this.suggestItems(itemtype));
        }
        if (this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"]) {
            promises.push(this.suggestProxies());
        }
        return Promise.all(promises);
    };
    // Get list of metric names for bs-typeahead directive
    ZabbixQueryController.prototype.getMetricNames = function (metricList, addAllValue) {
        var metrics = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(this.metric[metricList], 'name'));
        // Add template variables
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(this.templateSrv.variables, function (variable) {
            metrics.unshift('$' + variable.name);
        });
        if (addAllValue) {
            metrics.unshift('/.*/');
        }
        return metrics;
    };
    ZabbixQueryController.prototype.getTemplateVariables = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(this.templateSrv.variables, function (variable) {
            return '$' + variable.name;
        });
    };
    ZabbixQueryController.prototype.suggestGroups = function () {
        var _this = this;
        return this.zabbix.getAllGroups()
            .then(function (groups) {
            _this.metric.groupList = groups;
            return groups;
        });
    };
    ZabbixQueryController.prototype.suggestHosts = function () {
        var _this = this;
        var groupFilter = this.replaceTemplateVars(this.target.group.filter);
        return this.zabbix.getAllHosts(groupFilter)
            .then(function (hosts) {
            _this.metric.hostList = hosts;
            return hosts;
        });
    };
    ZabbixQueryController.prototype.suggestApps = function () {
        var _this = this;
        var groupFilter = this.replaceTemplateVars(this.target.group.filter);
        var hostFilter = this.replaceTemplateVars(this.target.host.filter);
        return this.zabbix.getAllApps(groupFilter, hostFilter)
            .then(function (apps) {
            _this.metric.appList = apps;
            return apps;
        });
    };
    ZabbixQueryController.prototype.suggestItems = function (itemtype) {
        var _this = this;
        if (itemtype === void 0) { itemtype = 'num'; }
        var groupFilter = this.replaceTemplateVars(this.target.group.filter);
        var hostFilter = this.replaceTemplateVars(this.target.host.filter);
        var appFilter = this.replaceTemplateVars(this.target.application.filter);
        var options = {
            itemtype: itemtype,
            showDisabledItems: this.target.options.showDisabledItems
        };
        return this.zabbix
            .getAllItems(groupFilter, hostFilter, appFilter, options)
            .then(function (items) {
            _this.metric.itemList = items;
            return items;
        });
    };
    ZabbixQueryController.prototype.suggestITServices = function () {
        var _this = this;
        return this.zabbix.getITService()
            .then(function (itservices) {
            _this.metric.itServiceList = itservices;
            return itservices;
        });
    };
    ZabbixQueryController.prototype.suggestProxies = function () {
        var _this = this;
        return this.zabbix.getProxies()
            .then(function (response) {
            var proxies = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(response, 'host');
            _this.metric.proxyList = proxies;
            return proxies;
        });
    };
    ZabbixQueryController.prototype.isRegex = function (str) {
        return _utils__WEBPACK_IMPORTED_MODULE_3__["isRegex"](str);
    };
    ZabbixQueryController.prototype.isVariable = function (str) {
        return _utils__WEBPACK_IMPORTED_MODULE_3__["isTemplateVariable"](str, this.templateSrv.variables);
    };
    ZabbixQueryController.prototype.onTargetBlur = function () {
        var newTarget = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.target);
        if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(this.oldTarget, this.target)) {
            this.oldTarget = newTarget;
            this.targetChanged();
        }
    };
    ZabbixQueryController.prototype.oldTarget = function (oldTarget, target) {
        throw new Error("Method not implemented.");
    };
    ZabbixQueryController.prototype.onVariableChange = function () {
        if (this.isContainsVariables()) {
            this.targetChanged();
        }
    };
    /**
     * Check query for template variables
     */
    ZabbixQueryController.prototype.isContainsVariables = function () {
        var _this = this;
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.some(['group', 'host', 'application'], function (field) {
            if (_this.target[field] && _this.target[field].filter) {
                return _utils__WEBPACK_IMPORTED_MODULE_3__["isTemplateVariable"](_this.target[field].filter, _this.templateSrv.variables);
            }
            else {
                return false;
            }
        });
    };
    ZabbixQueryController.prototype.parseTarget = function () {
        // Parse target
    };
    // Validate target and set validation info
    ZabbixQueryController.prototype.validateTarget = function () {
        // validate
    };
    ZabbixQueryController.prototype.targetChanged = function () {
        this.initFilters();
        this.parseTarget();
        this.panelCtrl.refresh();
    };
    ZabbixQueryController.prototype.addFunction = function (funcDef) {
        var newFunc = _metricFunctions__WEBPACK_IMPORTED_MODULE_4__["createFuncInstance"](funcDef);
        newFunc.added = true;
        this.target.functions.push(newFunc);
        this.moveAliasFuncLast();
        if (newFunc.params.length && newFunc.added ||
            newFunc.def.params.length === 0) {
            this.targetChanged();
        }
    };
    ZabbixQueryController.prototype.removeFunction = function (func) {
        this.target.functions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.without(this.target.functions, func);
        this.targetChanged();
    };
    ZabbixQueryController.prototype.moveFunction = function (func, offset) {
        var index = this.target.functions.indexOf(func);
        // @ts-ignore
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.move(this.target.functions, index, index + offset);
        this.targetChanged();
    };
    ZabbixQueryController.prototype.moveAliasFuncLast = function () {
        var aliasFunc = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.target.functions, function (func) {
            return func.def.category === 'Alias';
        });
        if (aliasFunc) {
            this.target.functions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.without(this.target.functions, aliasFunc);
            this.target.functions.push(aliasFunc);
        }
    };
    ZabbixQueryController.prototype.toggleQueryOptions = function () {
        this.showQueryOptions = !this.showQueryOptions;
    };
    ZabbixQueryController.prototype.onQueryOptionChange = function () {
        this.queryOptionsText = this.renderQueryOptionsText();
        this.onTargetBlur();
    };
    ZabbixQueryController.prototype.renderQueryOptionsText = function () {
        var metricOptionsMap = {
            showDisabledItems: "Show disabled items",
        };
        var problemsOptionsMap = {
            sortProblems: "Sort problems",
            acknowledged: "Acknowledged",
            skipEmptyValues: "Skip empty values",
            hostsInMaintenance: "Show hosts in maintenance",
            limit: "Limit problems",
            hostProxy: "Show proxy",
        };
        var optionsMap = {};
        if (this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"]) {
            optionsMap = metricOptionsMap;
        }
        else if (this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_PROBLEMS"] || this.target.queryType === _constants__WEBPACK_IMPORTED_MODULE_2__["MODE_TRIGGERS"]) {
            optionsMap = problemsOptionsMap;
        }
        var options = [];
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forOwn(this.target.options, function (value, key) {
            if (value && optionsMap[key]) {
                if (value === true) {
                    // Show only option name (if enabled) for boolean options
                    options.push(optionsMap[key]);
                }
                else {
                    // Show "option = value" for another options
                    var optionValue = value;
                    if (value && value.text) {
                        optionValue = value.text;
                    }
                    else if (value && value.value) {
                        optionValue = value.value;
                    }
                    options.push(optionsMap[key] + " = " + optionValue);
                }
            }
        });
        return "Options: " + options.join(', ');
    };
    /**
     * Switch query editor to specified mode.
     * Modes:
     *  0 - items
     *  1 - IT services
     *  2 - Text metrics
     */
    ZabbixQueryController.prototype.switchEditorMode = function (mode) {
        this.target.queryType = mode;
        this.queryOptionsText = this.renderQueryOptionsText();
        this.init();
        this.targetChanged();
    };
    return ZabbixQueryController;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_0__["QueryCtrl"]));



/***/ }),

/***/ "./datasource-zabbix/react2angular.ts":
/*!********************************************!*\
  !*** ./datasource-zabbix/react2angular.ts ***!
  \********************************************/
/*! exports provided: react2AngularDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "react2AngularDirective", function() { return react2AngularDirective; });
/* harmony import */ var grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana/app/core/core_module */ "grafana/app/core/core_module");
/* harmony import */ var grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0__);

function react2AngularDirective(name, component, options) {
    grafana_app_core_core_module__WEBPACK_IMPORTED_MODULE_0___default.a.directive(name, [
        'reactDirective',
        function (reactDirective) {
            return reactDirective(component, options);
        },
    ]);
}


/***/ }),

/***/ "./datasource-zabbix/responseHandler.ts":
/*!**********************************************!*\
  !*** ./datasource-zabbix/responseHandler.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grafana_app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/core/table_model */ "grafana/app/core/table_model");
/* harmony import */ var grafana_app_core_table_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_table_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



/**
 * Convert Zabbix API history.get response to Grafana format
 *
 * @return {Array}            Array of timeseries in Grafana format
 *                            {
 *                               target: "Metric name",
 *                               datapoints: [[<value>, <unixtime>], ...]
 *                            }
 */
function convertHistory(history, items, addHostName, convertPointCallback) {
    /**
     * Response should be in the format:
     * data: [
     *          {
     *             target: "Metric name",
     *             datapoints: [[<value>, <unixtime>], ...]
     *          }, ...
     *       ]
     */
    // Group history by itemid
    var grouped_history = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(history, 'itemid');
    var hosts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'hosts')), 'hostid'); //uniqBy is needed to deduplicate
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_history, function (hist, itemid) {
        var item = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(items, { 'itemid': itemid });
        var alias = item.name;
        // Add scopedVars for using in alias functions
        var scopedVars = {
            '__zbx_item': { value: item.name },
            '__zbx_item_name': { value: item.name },
            '__zbx_item_key': { value: item.key_ },
        };
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(hosts).length > 0) {
            var host = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(hosts, { 'hostid': item.hostid });
            scopedVars['__zbx_host'] = { value: host.host };
            scopedVars['__zbx_host_name'] = { value: host.name };
            // Only add host when multiple hosts selected
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(hosts).length > 1 && addHostName) {
                alias = host.name + ": " + alias;
            }
        }
        return {
            target: alias,
            datapoints: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(hist, convertPointCallback),
            scopedVars: scopedVars,
        };
    });
}
function sortTimeseries(timeseries) {
    // Sort trend data, issue #202
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(timeseries, function (series) {
        series.datapoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(series.datapoints, function (point) { return point[_constants__WEBPACK_IMPORTED_MODULE_2__["DATAPOINT_TS"]]; });
    });
    return timeseries;
}
function handleHistory(history, items, addHostName) {
    if (addHostName === void 0) { addHostName = true; }
    return convertHistory(history, items, addHostName, convertHistoryPoint);
}
function handleTrends(history, items, valueType, addHostName) {
    if (addHostName === void 0) { addHostName = true; }
    var convertPointCallback = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(convertTrendPoint, valueType);
    return convertHistory(history, items, addHostName, convertPointCallback);
}
function handleText(history, items, target, addHostName) {
    if (addHostName === void 0) { addHostName = true; }
    var convertTextCallback = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(convertText, target);
    return convertHistory(history, items, addHostName, convertTextCallback);
}
function handleHistoryAsTable(history, items, target) {
    var table = new grafana_app_core_table_model__WEBPACK_IMPORTED_MODULE_1___default.a();
    table.addColumn({ text: 'Host' });
    table.addColumn({ text: 'Item' });
    table.addColumn({ text: 'Key' });
    table.addColumn({ text: 'Last value' });
    var grouped_history = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(history, 'itemid');
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(items, function (item) {
        var itemHistory = grouped_history[item.itemid] || [];
        var lastPoint = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.last(itemHistory);
        var lastValue = lastPoint ? lastPoint.value : null;
        if (target.options.skipEmptyValues && (!lastValue || lastValue === '')) {
            return;
        }
        // Regex-based extractor
        if (target.textFilter) {
            lastValue = extractText(lastValue, target.textFilter, target.useCaptureGroups);
        }
        var host = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.first(item.hosts);
        host = host ? host.name : "";
        table.rows.push([
            host, item.name, item.key_, lastValue
        ]);
    });
    return table;
}
function convertText(target, point) {
    var value = point.value;
    // Regex-based extractor
    if (target.textFilter) {
        value = extractText(point.value, target.textFilter, target.useCaptureGroups);
    }
    return [
        value,
        point.clock * 1000 + Math.round(point.ns / 1000000)
    ];
}
function extractText(str, pattern, useCaptureGroups) {
    var extractPattern = new RegExp(pattern);
    var extractedValue = extractPattern.exec(str);
    if (extractedValue) {
        if (useCaptureGroups) {
            return extractedValue[1];
        }
        else {
            return extractedValue[0];
        }
    }
    return "";
}
function handleSLAResponse(itservice, slaProperty, slaObject) {
    var targetSLA = slaObject[itservice.serviceid].sla;
    if (slaProperty.property === 'status') {
        var targetStatus = parseInt(slaObject[itservice.serviceid].status, 10);
        return {
            target: itservice.name + ' ' + slaProperty.name,
            datapoints: [
                [targetStatus, targetSLA[0].to * 1000]
            ]
        };
    }
    else {
        var i = void 0;
        var slaArr = [];
        for (i = 0; i < targetSLA.length; i++) {
            if (i === 0) {
                slaArr.push([targetSLA[i][slaProperty.property], targetSLA[i].from * 1000]);
            }
            slaArr.push([targetSLA[i][slaProperty.property], targetSLA[i].to * 1000]);
        }
        return {
            target: itservice.name + ' ' + slaProperty.name,
            datapoints: slaArr
        };
    }
}
function handleTriggersResponse(triggers, groups, timeRange) {
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(triggers)) {
        var triggersCount = null;
        try {
            triggersCount = Number(triggers);
        }
        catch (err) {
            console.log("Error when handling triggers count: ", err);
        }
        return {
            target: "triggers count",
            datapoints: [
                [triggersCount, timeRange[1] * 1000]
            ]
        };
    }
    else {
        var stats = getTriggerStats(triggers);
        var groupNames_1 = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(groups, 'name');
        var table_1 = new grafana_app_core_table_model__WEBPACK_IMPORTED_MODULE_1___default.a();
        table_1.addColumn({ text: 'Host group' });
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(_constants__WEBPACK_IMPORTED_MODULE_2__["TRIGGER_SEVERITY"], ['val'], ['desc']), function (severity) {
            table_1.addColumn({ text: severity.text });
        });
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(stats, function (severity_stats, group) {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(groupNames_1, group)) {
                var row = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toPairs(severity_stats), function (s) { return s[0]; }, ['desc']), function (s) { return s[1]; });
                row = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat.apply(lodash__WEBPACK_IMPORTED_MODULE_0___default.a, __spreadArrays([[group]], row));
                table_1.rows.push(row);
            }
        });
        return table_1;
    }
}
function getTriggerStats(triggers) {
    var groups = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flattenDeep(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(triggers, function (trigger) { return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(trigger.groups, 'name'); })));
    // let severity = _.map(c.TRIGGER_SEVERITY, 'text');
    var stats = {};
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(groups, function (group) {
        stats[group] = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }; // severity:count
    });
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(triggers, function (trigger) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(trigger.groups, function (group) {
            stats[group.name][trigger.priority]++;
        });
    });
    return stats;
}
function convertHistoryPoint(point) {
    // Value must be a number for properly work
    return [
        Number(point.value),
        point.clock * 1000 + Math.round(point.ns / 1000000)
    ];
}
function convertTrendPoint(valueType, point) {
    var value;
    switch (valueType) {
        case "min":
            value = point.value_min;
            break;
        case "max":
            value = point.value_max;
            break;
        case "avg":
            value = point.value_avg;
            break;
        case "sum":
            value = point.value_sum;
            break;
        case "count":
            value = point.value_count;
            break;
        default:
            value = point.value_avg;
    }
    return [
        Number(value),
        point.clock * 1000
    ];
}
/* harmony default export */ __webpack_exports__["default"] = ({
    handleHistory: handleHistory,
    convertHistory: convertHistory,
    handleTrends: handleTrends,
    handleText: handleText,
    handleHistoryAsTable: handleHistoryAsTable,
    handleSLAResponse: handleSLAResponse,
    handleTriggersResponse: handleTriggersResponse,
    sortTimeseries: sortTimeseries
});


/***/ }),

/***/ "./datasource-zabbix/timeseries.ts":
/*!*****************************************!*\
  !*** ./datasource-zabbix/timeseries.ts ***!
  \*****************************************/
/*! exports provided: groupBy_perf, groupByRange, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy_perf", function() { return groupBy_perf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupByRange", function() { return groupByRange; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
/**
 * timeseries.js
 *
 * This module contains functions for working with time series.
 *
 * datapoints - array of points where point is [value, timestamp]. In almost all cases (if other wasn't
 * explicitly said) we assume datapoints are sorted by timestamp. Timestamp is the number of milliseconds
 * since 1 January 1970 00:00:00 UTC.
 *
 */



var POINT_VALUE = 0;
var POINT_TIMESTAMP = 1;
/**
 * Downsample time series by using given function (avg, min, max).
 */
function downsample(datapoints, time_to, ms_interval, func) {
    var downsampledSeries = [];
    var timeWindow = {
        from: time_to * 1000 - ms_interval,
        to: time_to * 1000
    };
    var points_sum = 0;
    var points_num = 0;
    var value_avg = 0;
    var frame = [];
    for (var i = datapoints.length - 1; i >= 0; i -= 1) {
        if (timeWindow.from < datapoints[i][1] && datapoints[i][1] <= timeWindow.to) {
            points_sum += datapoints[i][0];
            points_num++;
            frame.push(datapoints[i][0]);
        }
        else {
            value_avg = points_num ? points_sum / points_num : 0;
            if (func === "max") {
                downsampledSeries.push([lodash__WEBPACK_IMPORTED_MODULE_0___default.a.max(frame), timeWindow.to]);
            }
            else if (func === "min") {
                downsampledSeries.push([lodash__WEBPACK_IMPORTED_MODULE_0___default.a.min(frame), timeWindow.to]);
            }
            else {
                downsampledSeries.push([value_avg, timeWindow.to]);
            }
            // Shift time window
            timeWindow.to = timeWindow.from;
            timeWindow.from -= ms_interval;
            points_sum = 0;
            points_num = 0;
            frame = [];
            // Process point again
            i++;
        }
    }
    return downsampledSeries.reverse();
}
/**
 * Group points by given time interval
 * datapoints: [[<value>, <unixtime>], ...]
 */
function groupBy(datapoints, interval, groupByCallback) {
    var ms_interval = _utils__WEBPACK_IMPORTED_MODULE_1__["parseInterval"](interval);
    // Calculate frame timestamps
    var frames = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(datapoints, function (point) {
        // Calculate time for group of points
        return Math.floor(point[1] / ms_interval) * ms_interval;
    });
    // frame: { '<unixtime>': [[<value>, <unixtime>], ...] }
    // return [{ '<unixtime>': <value> }, { '<unixtime>': <value> }, ...]
    var grouped = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapValues(frames, function (frame) {
        var points = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(frame, function (point) {
            return point[0];
        });
        return groupByCallback(points);
    });
    // Convert points to Grafana format
    return sortByTime(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped, function (value, timestamp) {
        return [Number(value), Number(timestamp)];
    }));
}
function groupBy_perf(datapoints, interval, groupByCallback) {
    if (datapoints.length === 0) {
        return [];
    }
    if (interval === _constants__WEBPACK_IMPORTED_MODULE_2__["RANGE_VARIABLE_VALUE"]) {
        return groupByRange(datapoints, groupByCallback);
    }
    var ms_interval = _utils__WEBPACK_IMPORTED_MODULE_1__["parseInterval"](interval);
    var grouped_series = [];
    var frame_values = [];
    var frame_value;
    var frame_ts = datapoints.length ? getPointTimeFrame(datapoints[0][POINT_TIMESTAMP], ms_interval) : 0;
    var point_frame_ts = frame_ts;
    var point;
    for (var i = 0; i < datapoints.length; i++) {
        point = datapoints[i];
        point_frame_ts = getPointTimeFrame(point[POINT_TIMESTAMP], ms_interval);
        if (point_frame_ts === frame_ts) {
            frame_values.push(point[POINT_VALUE]);
        }
        else if (point_frame_ts > frame_ts) {
            frame_value = groupByCallback(frame_values);
            grouped_series.push([frame_value, frame_ts]);
            // Move frame window to next non-empty interval and fill empty by null
            frame_ts += ms_interval;
            while (frame_ts < point_frame_ts) {
                grouped_series.push([null, frame_ts]);
                frame_ts += ms_interval;
            }
            frame_values = [point[POINT_VALUE]];
        }
    }
    frame_value = groupByCallback(frame_values);
    grouped_series.push([frame_value, frame_ts]);
    return grouped_series;
}
function groupByRange(datapoints, groupByCallback) {
    var frame_values = [];
    var frame_start = datapoints[0][POINT_TIMESTAMP];
    var frame_end = datapoints[datapoints.length - 1][POINT_TIMESTAMP];
    var point;
    for (var i = 0; i < datapoints.length; i++) {
        point = datapoints[i];
        frame_values.push(point[POINT_VALUE]);
    }
    var frame_value = groupByCallback(frame_values);
    return [[frame_value, frame_start], [frame_value, frame_end]];
}
/**
 * Summarize set of time series into one.
 * @param {datapoints[]} timeseries array of time series
 */
function sumSeries(timeseries) {
    // Calculate new points for interpolation
    var new_timestamps = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(timeseries), function (point) {
        return point[1];
    }));
    new_timestamps = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(new_timestamps);
    var interpolated_timeseries = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(timeseries, function (series) {
        series = fillZeroes(series, new_timestamps);
        var timestamps = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(series, function (point) {
            return point[1];
        });
        var new_points = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.difference(new_timestamps, timestamps), function (timestamp) {
            return [null, timestamp];
        });
        var new_series = series.concat(new_points);
        return sortByTime(new_series);
    });
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(interpolated_timeseries, interpolateSeries);
    var new_timeseries = [];
    var sum;
    for (var i = new_timestamps.length - 1; i >= 0; i--) {
        sum = 0;
        for (var j = interpolated_timeseries.length - 1; j >= 0; j--) {
            sum += interpolated_timeseries[j][i][0];
        }
        new_timeseries.push([sum, new_timestamps[i]]);
    }
    return sortByTime(new_timeseries);
}
function scale(datapoints, factor) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(datapoints, function (point) {
        return [
            point[0] * factor,
            point[1]
        ];
    });
}
function scale_perf(datapoints, factor) {
    for (var i = 0; i < datapoints.length; i++) {
        datapoints[i] = [
            datapoints[i][POINT_VALUE] * factor,
            datapoints[i][POINT_TIMESTAMP]
        ];
    }
    return datapoints;
}
function offset(datapoints, delta) {
    for (var i = 0; i < datapoints.length; i++) {
        datapoints[i] = [
            datapoints[i][POINT_VALUE] + delta,
            datapoints[i][POINT_TIMESTAMP]
        ];
    }
    return datapoints;
}
/**
 * Simple delta. Calculate value delta between points.
 * @param {*} datapoints
 */
function delta(datapoints) {
    var newSeries = [];
    var deltaValue;
    for (var i = 1; i < datapoints.length; i++) {
        deltaValue = datapoints[i][0] - datapoints[i - 1][0];
        newSeries.push([deltaValue, datapoints[i][1]]);
    }
    return newSeries;
}
/**
 * Calculates rate per second. Resistant to counter reset.
 * @param {*} datapoints
 */
function rate(datapoints) {
    var newSeries = [];
    var point, point_prev;
    var valueDelta = 0;
    var timeDelta = 0;
    for (var i = 1; i < datapoints.length; i++) {
        point = datapoints[i];
        point_prev = datapoints[i - 1];
        // Convert ms to seconds
        timeDelta = (point[POINT_TIMESTAMP] - point_prev[POINT_TIMESTAMP]) / 1000;
        // Handle counter reset - use previous value
        if (point[POINT_VALUE] >= point_prev[POINT_VALUE]) {
            valueDelta = (point[POINT_VALUE] - point_prev[POINT_VALUE]) / timeDelta;
        }
        newSeries.push([valueDelta, point[POINT_TIMESTAMP]]);
    }
    return newSeries;
}
function simpleMovingAverage(datapoints, n) {
    var sma = [];
    var w_sum;
    var w_avg = null;
    var w_count = 0;
    // Initial window
    for (var j = n; j > 0; j--) {
        if (datapoints[n - j][POINT_VALUE] !== null) {
            w_avg += datapoints[n - j][POINT_VALUE];
            w_count++;
        }
    }
    if (w_count > 0) {
        w_avg = w_avg / w_count;
    }
    else {
        w_avg = null;
    }
    sma.push([w_avg, datapoints[n - 1][POINT_TIMESTAMP]]);
    for (var i = n; i < datapoints.length; i++) {
        // Insert next value
        if (datapoints[i][POINT_VALUE] !== null) {
            w_sum = w_avg * w_count;
            w_avg = (w_sum + datapoints[i][POINT_VALUE]) / (w_count + 1);
            w_count++;
        }
        // Remove left side point
        if (datapoints[i - n][POINT_VALUE] !== null) {
            w_sum = w_avg * w_count;
            if (w_count > 1) {
                w_avg = (w_sum - datapoints[i - n][POINT_VALUE]) / (w_count - 1);
                w_count--;
            }
            else {
                w_avg = null;
                w_count = 0;
            }
        }
        sma.push([w_avg, datapoints[i][POINT_TIMESTAMP]]);
    }
    return sma;
}
function expMovingAverage(datapoints, n) {
    var ema = [datapoints[0]];
    var ema_prev = datapoints[0][POINT_VALUE];
    var ema_cur;
    var a;
    if (n > 1) {
        // Calculate a from window size
        a = 2 / (n + 1);
        // Initial window, use simple moving average
        var w_avg = null;
        var w_count = 0;
        for (var j = n; j > 0; j--) {
            if (datapoints[n - j][POINT_VALUE] !== null) {
                w_avg += datapoints[n - j][POINT_VALUE];
                w_count++;
            }
        }
        if (w_count > 0) {
            w_avg = w_avg / w_count;
            // Actually, we should set timestamp from datapoints[n-1] and start calculation of EMA from n.
            // But in order to start EMA from first point (not from Nth) we should expand time range and request N additional
            // points outside left side of range. We can't do that, so this trick is used for pretty view of first N points.
            // We calculate AVG for first N points, but then start from 2nd point, not from Nth. In general, it means we
            // assume that previous N values (0-N, 0-(N-1), ..., 0-1) have the same average value as a first N values.
            ema = [[w_avg, datapoints[0][POINT_TIMESTAMP]]];
            ema_prev = w_avg;
            n = 1;
        }
    }
    else {
        // Use predefined a and start from 1st point (use it as initial EMA value)
        a = n;
        n = 1;
    }
    for (var i = n; i < datapoints.length; i++) {
        if (datapoints[i][POINT_VALUE] !== null) {
            ema_cur = a * datapoints[i][POINT_VALUE] + (1 - a) * ema_prev;
            ema_prev = ema_cur;
            ema.push([ema_cur, datapoints[i][POINT_TIMESTAMP]]);
        }
        else {
            ema.push([null, datapoints[i][POINT_TIMESTAMP]]);
        }
    }
    return ema;
}
function PERCENTILE(n, values) {
    var sorted = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(values);
    return sorted[Math.floor(sorted.length * n / 100)];
}
function COUNT(values) {
    return values.length;
}
function SUM(values) {
    var sum = null;
    for (var i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            sum += values[i];
        }
    }
    return sum;
}
function AVERAGE(values) {
    var values_non_null = getNonNullValues(values);
    if (values_non_null.length === 0) {
        return null;
    }
    return SUM(values_non_null) / values_non_null.length;
}
function getNonNullValues(values) {
    var values_non_null = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            values_non_null.push(values[i]);
        }
    }
    return values_non_null;
}
function MIN(values) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.min(values);
}
function MAX(values) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.max(values);
}
function MEDIAN(values) {
    var sorted = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(values);
    return sorted[Math.floor(sorted.length / 2)];
}
///////////////////////
// Utility functions //
///////////////////////
/**
 * For given point calculate corresponding time frame.
 *
 * |__*_|_*__|___*| -> |*___|*___|*___|
 *
 * @param {*} timestamp
 * @param {*} ms_interval
 */
function getPointTimeFrame(timestamp, ms_interval) {
    return Math.floor(timestamp / ms_interval) * ms_interval;
}
function sortByTime(series) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(series, function (point) {
        return point[1];
    });
}
/**
 * Fill empty front and end of series by zeroes.
 *
 * |   ***   |    |   ***   |
 * |___   ___| -> |***   ***|
 * @param {*} series
 * @param {*} timestamps
 */
function fillZeroes(series, timestamps) {
    var prepend = [];
    var append = [];
    var new_point;
    for (var i = 0; i < timestamps.length; i++) {
        if (timestamps[i] < series[0][POINT_TIMESTAMP]) {
            new_point = [0, timestamps[i]];
            prepend.push(new_point);
        }
        else if (timestamps[i] > series[series.length - 1][POINT_TIMESTAMP]) {
            new_point = [0, timestamps[i]];
            append.push(new_point);
        }
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat(prepend, series), append);
}
/**
 * Interpolate series with gaps
 */
function interpolateSeries(series) {
    var left, right;
    // Interpolate series
    for (var i = series.length - 1; i >= 0; i--) {
        if (!series[i][0]) {
            left = findNearestLeft(series, i);
            right = findNearestRight(series, i);
            if (!left) {
                left = right;
            }
            if (!right) {
                right = left;
            }
            series[i][0] = linearInterpolation(series[i][1], left, right);
        }
    }
    return series;
}
function linearInterpolation(timestamp, left, right) {
    if (left[1] === right[1]) {
        return (left[0] + right[0]) / 2;
    }
    else {
        return (left[0] + (right[0] - left[0]) / (right[1] - left[1]) * (timestamp - left[1]));
    }
}
function findNearestRight(series, pointIndex) {
    for (var i = pointIndex; i < series.length; i++) {
        if (series[i][0] !== null) {
            return series[i];
        }
    }
    return null;
}
function findNearestLeft(series, pointIndex) {
    for (var i = pointIndex; i > 0; i--) {
        if (series[i][0] !== null) {
            return series[i];
        }
    }
    return null;
}
function flattenDatapoints(datapoints) {
    var depth = _utils__WEBPACK_IMPORTED_MODULE_1__["getArrayDepth"](datapoints);
    if (depth <= 2) {
        // Don't process if datapoints already flattened
        return datapoints;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(datapoints);
}
////////////
// Export //
////////////
var exportedFunctions = {
    downsample: downsample,
    groupBy: groupBy,
    groupBy_perf: groupBy_perf,
    groupByRange: groupByRange,
    sumSeries: sumSeries,
    scale: scale,
    offset: offset,
    scale_perf: scale_perf,
    delta: delta,
    rate: rate,
    simpleMovingAverage: simpleMovingAverage,
    expMovingAverage: expMovingAverage,
    SUM: SUM,
    COUNT: COUNT,
    AVERAGE: AVERAGE,
    MIN: MIN,
    MAX: MAX,
    MEDIAN: MEDIAN,
    PERCENTILE: PERCENTILE,
    sortByTime: sortByTime,
    flattenDatapoints: flattenDatapoints,
};
/* harmony default export */ __webpack_exports__["default"] = (exportedFunctions);


/***/ }),

/***/ "./datasource-zabbix/types.ts":
/*!************************************!*\
  !*** ./datasource-zabbix/types.ts ***!
  \************************************/
/*! exports provided: VariableQueryTypes, ShowProblemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableQueryTypes", function() { return VariableQueryTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProblemTypes", function() { return ShowProblemTypes; });
var VariableQueryTypes;
(function (VariableQueryTypes) {
    VariableQueryTypes["Group"] = "group";
    VariableQueryTypes["Host"] = "host";
    VariableQueryTypes["Application"] = "application";
    VariableQueryTypes["Item"] = "item";
    VariableQueryTypes["ItemValues"] = "itemValues";
})(VariableQueryTypes || (VariableQueryTypes = {}));
var ShowProblemTypes;
(function (ShowProblemTypes) {
    ShowProblemTypes["Problems"] = "problems";
    ShowProblemTypes["Recent"] = "recent";
    ShowProblemTypes["History"] = "history";
})(ShowProblemTypes || (ShowProblemTypes = {}));


/***/ }),

/***/ "./datasource-zabbix/utils.ts":
/*!************************************!*\
  !*** ./datasource-zabbix/utils.ts ***!
  \************************************/
/*! exports provided: variableRegex, expandItemName, expandItems, containsMacro, replaceMacro, parseLegacyVariableQuery, splitTemplateQuery, regexPattern, isRegex, isTemplateVariable, getRangeScopedVars, buildRegex, escapeRegex, parseInterval, parseTimeShiftInterval, formatAcknowledges, convertToZabbixAPIUrl, callOnce, sequence, isValidVersion, parseVersion, compactQuery, getArrayDepth, isNumeric, parseTags, mustArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableRegex", function() { return variableRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandItemName", function() { return expandItemName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandItems", function() { return expandItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsMacro", function() { return containsMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceMacro", function() { return replaceMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLegacyVariableQuery", function() { return parseLegacyVariableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitTemplateQuery", function() { return splitTemplateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexPattern", function() { return regexPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegex", function() { return isRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplateVariable", function() { return isTemplateVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeScopedVars", function() { return getRangeScopedVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRegex", function() { return buildRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegex", function() { return escapeRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInterval", function() { return parseInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeShiftInterval", function() { return parseTimeShiftInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAcknowledges", function() { return formatAcknowledges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToZabbixAPIUrl", function() { return convertToZabbixAPIUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callOnce", function() { return callOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidVersion", function() { return isValidVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseVersion", function() { return parseVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactQuery", function() { return compactQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayDepth", function() { return getArrayDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTags", function() { return parseTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustArray", function() { return mustArray; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/core/utils/kbn */ "grafana/app/core/utils/kbn");
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./datasource-zabbix/types.ts");





/*
 * This regex matches 3 types of variable reference with an optional format specifier
 * \$(\w+)                          $var1
 * \[\[([\s\S]+?)(?::(\w+))?\]\]    [[var2]] or [[var2:fmt2]]
 * \${(\w+)(?::(\w+))?}             ${var3} or ${var3:fmt3}
 */
var variableRegex = /\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::(\w+))?}/g;
/**
 * Expand Zabbix item name
 *
 * @param  {string} name item name, ie "CPU $2 time"
 * @param  {string} key  item key, ie system.cpu.util[,system,avg1]
 * @return {string}      expanded name, ie "CPU system time"
 */
function expandItemName(name, key) {
    // extract params from key:
    // "system.cpu.util[,system,avg1]" --> ["", "system", "avg1"]
    var key_params_str = key.substring(key.indexOf('[') + 1, key.lastIndexOf(']'));
    var key_params = splitKeyParams(key_params_str);
    // replace item parameters
    for (var i = key_params.length; i >= 1; i--) {
        name = name.replace('$' + i, key_params[i - 1]);
    }
    return name;
}
function expandItems(items) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(items, function (item) {
        item.item = item.name;
        item.name = expandItemName(item.item, item.key_);
        return item;
    });
    return items;
}
function splitKeyParams(paramStr) {
    var params = [];
    var quoted = false;
    var in_array = false;
    var split_symbol = ',';
    var param = '';
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(paramStr, function (symbol) {
        if (symbol === '"' && in_array) {
            param += symbol;
        }
        else if (symbol === '"' && quoted) {
            quoted = false;
        }
        else if (symbol === '"' && !quoted) {
            quoted = true;
        }
        else if (symbol === '[' && !quoted) {
            in_array = true;
        }
        else if (symbol === ']' && !quoted) {
            in_array = false;
        }
        else if (symbol === split_symbol && !quoted && !in_array) {
            params.push(param);
            param = '';
        }
        else {
            param += symbol;
        }
    });
    params.push(param);
    return params;
}
var MACRO_PATTERN = /{\$[A-Z0-9_\.]+}/g;
function containsMacro(itemName) {
    return MACRO_PATTERN.test(itemName);
}
function replaceMacro(item, macros, isTriggerItem) {
    var itemName = isTriggerItem ? item.url : item.name;
    var item_macros = itemName.match(MACRO_PATTERN);
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(item_macros, function (macro) {
        var host_macros = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(macros, function (m) {
            if (m.hostid) {
                if (isTriggerItem) {
                    // Trigger item can have multiple hosts
                    // Check all trigger host ids against macro host id
                    var hostIdFound_1 = false;
                    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(item.hosts, function (h) {
                        if (h.hostid === m.hostid) {
                            hostIdFound_1 = true;
                        }
                    });
                    return hostIdFound_1;
                }
                else {
                    // Check app host id against macro host id
                    return m.hostid === item.hostid;
                }
            }
            else {
                // Add global macros
                return true;
            }
        });
        var macro_def = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(host_macros, { macro: macro });
        if (macro_def && macro_def.value) {
            var macro_value = macro_def.value;
            var macro_regex = new RegExp(escapeMacro(macro));
            itemName = itemName.replace(macro_regex, macro_value);
        }
    });
    return itemName;
}
function escapeMacro(macro) {
    macro = macro.replace(/\$/, '\\\$');
    return macro;
}
function parseLegacyVariableQuery(query) {
    var queryType;
    var parts = [];
    // Split query. Query structure: group.host.app.item
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(splitTemplateQuery(query), function (part) {
        // Replace wildcard to regex
        if (part === '*') {
            part = '/.*/';
        }
        parts.push(part);
    });
    var template = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.zipObject(['group', 'host', 'app', 'item'], parts);
    if (parts.length === 4 && template.app === '/.*/') {
        // Search for all items, even it's not belong to any application
        template.app = '';
    }
    switch (parts.length) {
        case 1:
            queryType = _types__WEBPACK_IMPORTED_MODULE_4__["VariableQueryTypes"].Group;
            break;
        case 2:
            queryType = _types__WEBPACK_IMPORTED_MODULE_4__["VariableQueryTypes"].Host;
            break;
        case 3:
            queryType = _types__WEBPACK_IMPORTED_MODULE_4__["VariableQueryTypes"].Application;
            break;
        case 4:
            queryType = _types__WEBPACK_IMPORTED_MODULE_4__["VariableQueryTypes"].Item;
            break;
    }
    var variableQuery = {
        queryType: queryType,
        group: template.group || '',
        host: template.host || '',
        application: template.app || '',
        item: template.item || '',
    };
    return variableQuery;
}
/**
 * Split template query to parts of zabbix entities
 * group.host.app.item -> [group, host, app, item]
 * {group}{host.com} -> [group, host.com]
 */
function splitTemplateQuery(query) {
    var splitPattern = /\{[^\{\}]*\}|\{\/.*\/\}/g;
    var split;
    if (isContainsBraces(query)) {
        var result = query.match(splitPattern);
        split = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(result, function (part) {
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(part, '{}');
        });
    }
    else {
        split = query.split('.');
    }
    return split;
}
function isContainsBraces(query) {
    var bracesPattern = /^\{.+\}$/;
    return bracesPattern.test(query);
}
// Pattern for testing regex
var regexPattern = /^\/(.*)\/([gmi]*)$/m;
function isRegex(str) {
    return regexPattern.test(str);
}
function isTemplateVariable(str, templateVariables) {
    var variablePattern = /^\$\w+/;
    if (variablePattern.test(str)) {
        var variables = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(templateVariables, function (variable) {
            return '$' + variable.name;
        });
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(variables, str);
    }
    else {
        return false;
    }
}
function getRangeScopedVars(range) {
    var msRange = range.to.diff(range.from);
    var sRange = Math.round(msRange / 1000);
    var regularRange = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default.a.secondsToHms(msRange / 1000);
    return {
        __range_ms: { text: msRange, value: msRange },
        __range_s: { text: sRange, value: sRange },
        __range: { text: regularRange, value: regularRange },
        __range_series: { text: _constants__WEBPACK_IMPORTED_MODULE_3__["RANGE_VARIABLE_VALUE"], value: _constants__WEBPACK_IMPORTED_MODULE_3__["RANGE_VARIABLE_VALUE"] },
    };
}
function buildRegex(str) {
    var matches = str.match(regexPattern);
    var pattern = matches[1];
    var flags = matches[2] !== "" ? matches[2] : undefined;
    return new RegExp(pattern, flags);
}
// Need for template variables replace
// From Grafana's templateSrv.js
function escapeRegex(value) {
    return value.replace(/[\\^$*+?.()|[\]{}\/]/g, '\\$&');
}
function parseInterval(interval) {
    var intervalPattern = /(^[\d]+)(y|M|w|d|h|m|s)/g;
    var momentInterval = intervalPattern.exec(interval);
    var duration = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(Number(momentInterval[1]), momentInterval[2]);
    return duration.valueOf();
}
function parseTimeShiftInterval(interval) {
    var intervalPattern = /^([\+\-]*)([\d]+)(y|M|w|d|h|m|s)/g;
    var momentInterval = intervalPattern.exec(interval);
    var duration = 0;
    if (momentInterval[1] === '+') {
        duration = 0 - moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(Number(momentInterval[2]), momentInterval[3]).valueOf();
    }
    else {
        duration = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(Number(momentInterval[2]), momentInterval[3]).valueOf();
    }
    return duration;
}
/**
 * Format acknowledges.
 *
 * @param  {array} acknowledges array of Zabbix acknowledge objects
 * @return {string} HTML-formatted table
 */
function formatAcknowledges(acknowledges) {
    if (acknowledges.length) {
        var formatted_acknowledges_1 = '<br><br>Acknowledges:<br><table><tr><td><b>Time</b></td>'
            + '<td><b>User</b></td><td><b>Comments</b></td></tr>';
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(acknowledges, function (ack) {
            var timestamp = moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(ack.clock);
            return '<tr><td><i>' + timestamp.format("DD MMM YYYY HH:mm:ss") + '</i></td><td>' + ack.alias
                + ' (' + ack.name + ' ' + ack.surname + ')' + '</td><td>' + ack.message + '</td></tr>';
        }), function (ack) {
            formatted_acknowledges_1 = formatted_acknowledges_1.concat(ack);
        });
        formatted_acknowledges_1 = formatted_acknowledges_1.concat('</table>');
        return formatted_acknowledges_1;
    }
    else {
        return '';
    }
}
function convertToZabbixAPIUrl(url) {
    var zabbixAPIUrlPattern = /.*api_jsonrpc.php$/;
    var trimSlashPattern = /(.*?)[\/]*$/;
    if (url.match(zabbixAPIUrlPattern)) {
        return url;
    }
    else {
        return url.replace(trimSlashPattern, "$1");
    }
}
/**
 * Wrap function to prevent multiple calls
 * when waiting for result.
 */
function callOnce(func, promiseKeeper) {
    return function () {
        if (!promiseKeeper) {
            promiseKeeper = Promise.resolve(func.apply(this, arguments)
                .then(function (result) {
                promiseKeeper = null;
                return result;
            }).catch(function (err) {
                promiseKeeper = null;
                throw err;
            }));
        }
        return promiseKeeper;
    };
}
/**
 * Apply function one by one: `sequence([a(), b(), c()]) = c(b(a()))`
 * @param {*} funcsArray functions to apply
 */
function sequence(funcsArray) {
    return function (result) {
        for (var i = 0; i < funcsArray.length; i++) {
            result = funcsArray[i].call(this, result);
        }
        return result;
    };
}
var versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
function isValidVersion(version) {
    return versionPattern.exec(version);
}
function parseVersion(version) {
    var match = versionPattern.exec(version);
    if (!match) {
        return null;
    }
    var major = Number(match[1]);
    var minor = Number(match[2] || 0);
    var patch = Number(match[3] || 0);
    var meta = match[4];
    return { major: major, minor: minor, patch: patch, meta: meta };
}
/**
 * Replaces any space-like symbols (tabs, new lines, spaces) by single whitespace.
 */
function compactQuery(query) {
    return query.replace(/\s+/g, ' ').trim();
}
function getArrayDepth(a, level) {
    if (level === void 0) { level = 0; }
    if (a.length === 0) {
        return 1;
    }
    var elem = a[0];
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(elem)) {
        return getArrayDepth(elem, level + 1);
    }
    return level + 1;
}
/**
 * Checks whether its argument represents a numeric value.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Parses tags string into array of {tag: value} objects
 */
function parseTags(tagStr) {
    if (!tagStr) {
        return [];
    }
    var tags = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(tagStr.split(','), function (tag) { return tag.trim(); });
    tags = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(tags, function (tag) {
        var tagParts = tag.split(':');
        return { tag: tagParts[0].trim(), value: tagParts[1].trim() };
    });
    return tags;
}
function mustArray(result) {
    return result || [];
}


/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/dbConnector.js":
/*!************************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/dbConnector.js ***!
  \************************************************************/
/*! exports provided: DEFAULT_QUERY_LIMIT, HISTORY_TO_TABLE_MAP, TREND_TO_TABLE_MAP, consolidateByFunc, consolidateByTrendColumns, DBConnector, ZabbixNotImplemented, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUERY_LIMIT", function() { return DEFAULT_QUERY_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_TO_TABLE_MAP", function() { return HISTORY_TO_TABLE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREND_TO_TABLE_MAP", function() { return TREND_TO_TABLE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolidateByFunc", function() { return consolidateByFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolidateByTrendColumns", function() { return consolidateByTrendColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBConnector", function() { return DBConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixNotImplemented", function() { return ZabbixNotImplemented; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}


var DEFAULT_QUERY_LIMIT = 10000;
var HISTORY_TO_TABLE_MAP = {
  '0': 'history',
  '1': 'history_str',
  '2': 'history_log',
  '3': 'history_uint',
  '4': 'history_text' };


var TREND_TO_TABLE_MAP = {
  '0': 'trends',
  '3': 'trends_uint' };


var consolidateByFunc = {
  'avg': 'AVG',
  'min': 'MIN',
  'max': 'MAX',
  'sum': 'SUM',
  'count': 'COUNT' };


var consolidateByTrendColumns = {
  'avg': 'value_avg',
  'min': 'value_min',
  'max': 'value_max',
  'sum': 'num*value_avg' // sum of sums inside the one-hour trend period
};

/**
    * Base class for external history database connectors. Subclasses should implement `getHistory()`, `getTrends()` and
    * `testDataSource()` methods, which describe how to fetch data from source other than Zabbix API.
    */
var DBConnector = /*#__PURE__*/function () {
  function DBConnector(options) {_classCallCheck(this, DBConnector);
    this.datasourceId = options.datasourceId;
    this.datasourceName = options.datasourceName;
    this.datasourceTypeId = null;
    this.datasourceTypeName = null;
  }_createClass(DBConnector, [{ key: "loadDBDataSource", value: function loadDBDataSource()
















    {var _this = this;
      return DBConnector.loadDatasource(this.datasourceId, this.datasourceName).
      then(function (ds) {
        _this.datasourceTypeId = ds.meta.id;
        _this.datasourceTypeName = ds.meta.name;
        if (!_this.datasourceName) {
          _this.datasourceName = ds.name;
        }
        if (!_this.datasourceId) {
          _this.datasourceId = ds.id;
        }
        return ds;
      });
    }

    /**
       * Send test request to datasource in order to ensure it's working.
       */ }, { key: "testDataSource", value: function testDataSource()
    {
      throw new ZabbixNotImplemented('testDataSource()');
    }

    /**
       * Get history data from external sources.
       */ }, { key: "getHistory", value: function getHistory()
    {
      throw new ZabbixNotImplemented('getHistory()');
    }

    /**
       * Get trends data from external sources.
       */ }, { key: "getTrends", value: function getTrends()
    {
      throw new ZabbixNotImplemented('getTrends()');
    } }, { key: "handleGrafanaTSResponse", value: function handleGrafanaTSResponse(

    history, items) {var addHostName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return convertGrafanaTSResponse(history, items, addHostName);
    } }], [{ key: "loadDatasource", value: function loadDatasource(dsId, dsName) {if (!dsName && dsId !== undefined) {var ds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().getAll(), { 'id': dsId });if (!ds) {return Promise.reject("Data Source with ID ".concat(dsId, " not found"));}dsName = ds.name;}if (dsName) {return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(dsName);} else {return Promise.reject("Data Source name should be specified");}} }]);return DBConnector;}();


// Define Zabbix DB Connector exception type for non-implemented methods
var ZabbixNotImplemented = /*#__PURE__*/function () {
  function ZabbixNotImplemented(methodName) {_classCallCheck(this, ZabbixNotImplemented);
    this.code = null;
    this.name = 'ZabbixNotImplemented';
    this.message = "Zabbix DB Connector Error: method ".concat(methodName || '', " should be implemented in subclass of DBConnector");
  }_createClass(ZabbixNotImplemented, [{ key: "toString", value: function toString()

    {
      return this.message;
    } }]);return ZabbixNotImplemented;}();


/**
                                            * Converts time series returned by the data source into format that Grafana expects
                                            * time_series is Array of series:
                                            * ```
                                            * [{
                                            *     name: string,
                                            *     points: Array<[value: number, timestamp: number]>
                                            * }]
                                            * ```
                                            */
function convertGrafanaTSResponse(time_series, items, addHostName) {
  //uniqBy is needed to deduplicate
  var hosts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'hosts')), 'hostid');
  var grafanaSeries = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(time_series), function (series) {
    var itemid = series.name;
    var item = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(items, { 'itemid': itemid });
    var alias = item.name;

    // Add scopedVars for using in alias functions
    var scopedVars = {
      '__zbx_item': { value: item.name },
      '__zbx_item_name': { value: item.name },
      '__zbx_item_key': { value: item.key_ } };


    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(hosts).length > 0) {
      var host = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(hosts, { 'hostid': item.hostid });
      scopedVars['__zbx_host'] = { value: host.host };
      scopedVars['__zbx_host_name'] = { value: host.name };

      // Only add host when multiple hosts selected
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(hosts).length > 1 && addHostName) {
        alias = host.name + ": " + alias;
      }
    }
    // CachingProxy deduplicates requests and returns one time series for equal queries.
    // Clone is needed to prevent changing of series object shared between all targets.
    var datapoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(series.points);
    return {
      target: alias,
      datapoints: datapoints,
      scopedVars: scopedVars };

  });

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(grafanaSeries, 'target');
}

var defaults = {
  DBConnector: DBConnector,
  DEFAULT_QUERY_LIMIT: DEFAULT_QUERY_LIMIT,
  HISTORY_TO_TABLE_MAP: HISTORY_TO_TABLE_MAP,
  TREND_TO_TABLE_MAP: TREND_TO_TABLE_MAP,
  consolidateByFunc: consolidateByFunc,
  consolidateByTrendColumns: consolidateByTrendColumns };


/* harmony default export */ __webpack_exports__["default"] = (defaults);

/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/influxdb/influxdbConnector.js":
/*!***************************************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/influxdb/influxdbConnector.js ***!
  \***************************************************************************/
/*! exports provided: InfluxDBConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxDBConnector", function() { return InfluxDBConnector; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _dbConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbConnector */ "./datasource-zabbix/zabbix/connectors/dbConnector.js");
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _get(target, property, receiver) {if (typeof Reflect !== "undefined" && Reflect.get) {_get = Reflect.get;} else {_get = function _get(target, property, receiver) {var base = _superPropBase(target, property);if (!base) return;var desc = Object.getOwnPropertyDescriptor(base, property);if (desc.get) {return desc.get.call(receiver);}return desc.value;};}return _get(target, property, receiver || target);}function _superPropBase(object, property) {while (!Object.prototype.hasOwnProperty.call(object, property)) {object = _getPrototypeOf(object);if (object === null) break;}return object;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}



var consolidateByFunc = {
  'avg': 'MEAN',
  'min': 'MIN',
  'max': 'MAX',
  'sum': 'SUM',
  'count': 'COUNT' };


var InfluxDBConnector = /*#__PURE__*/function (_DBConnector) {_inherits(InfluxDBConnector, _DBConnector);var _super = _createSuper(InfluxDBConnector);
  function InfluxDBConnector(options) {var _thisSuper, _this;_classCallCheck(this, InfluxDBConnector);
    _this = _super.call(this, options);
    _this.retentionPolicy = options.retentionPolicy;
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(InfluxDBConnector.prototype)), "loadDBDataSource", _thisSuper).call(_thisSuper).then(function (ds) {
      _this.influxDS = ds;
      return ds;
    });return _this;
  }

  /**
     * Try to invoke test query for one of Zabbix database tables.
     */_createClass(InfluxDBConnector, [{ key: "testDataSource", value: function testDataSource()
    {
      return this.influxDS.testDatasource().then(function (result) {
        if (result.status && result.status === 'error') {
          return Promise.reject({ data: {
              message: "InfluxDB connection error: ".concat(result.message) } });

        }
        return result;
      });
    } }, { key: "getHistory", value: function getHistory(

    items, timeFrom, timeTill, options) {var _this2 = this;var
      intervalMs = options.intervalMs,consolidateBy = options.consolidateBy,retentionPolicy = options.retentionPolicy;
      var intervalSec = Math.ceil(intervalMs / 1000);

      var range = { timeFrom: timeFrom, timeTill: timeTill };
      consolidateBy = consolidateBy || 'avg';

      // Group items by value type and perform request for each value type
      var grouped_items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(items, 'value_type');
      var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_items, function (items, value_type) {
        var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid');
        var table = _dbConnector__WEBPACK_IMPORTED_MODULE_2__["HISTORY_TO_TABLE_MAP"][value_type];
        var query = _this2.buildHistoryQuery(itemids, table, range, intervalSec, consolidateBy, retentionPolicy);
        return _this2.invokeInfluxDBQuery(query);
      });

      return Promise.all(promises).
      then(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten).
      then(function (results) {
        return handleInfluxHistoryResponse(results);
      });
    } }, { key: "getTrends", value: function getTrends(

    items, timeFrom, timeTill, options) {
      options.retentionPolicy = this.retentionPolicy;
      return this.getHistory(items, timeFrom, timeTill, options);
    } }, { key: "buildHistoryQuery", value: function buildHistoryQuery(

    itemids, table, range, intervalSec, aggFunction, retentionPolicy) {var
      timeFrom = range.timeFrom,timeTill = range.timeTill;
      var measurement = retentionPolicy ? "\"".concat(retentionPolicy, "\".\"").concat(table, "\"") : "\"".concat(table, "\"");
      var value = 'value';
      if (retentionPolicy) {
        value = _dbConnector__WEBPACK_IMPORTED_MODULE_2__["consolidateByTrendColumns"][aggFunction] || 'value_avg';
      }
      var aggregation = consolidateByFunc[aggFunction] || aggFunction;
      var where_clause = this.buildWhereClause(itemids);
      var query = "SELECT ".concat(aggregation, "(\"").concat(value, "\") FROM ").concat(measurement, "\n      WHERE ").concat(
      where_clause, " AND \"time\" >= ").concat(timeFrom, "s AND \"time\" <= ").concat(timeTill, "s\n      GROUP BY time(").concat(
      intervalSec, "s), \"itemid\" fill(none)");
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["compactQuery"])(query);
    } }, { key: "buildWhereClause", value: function buildWhereClause(

    itemids) {
      var itemidsWhere = itemids.map(function (itemid) {return "\"itemid\" = '".concat(itemid, "'");}).join(' OR ');
      return "(".concat(itemidsWhere, ")");
    } }, { key: "invokeInfluxDBQuery", value: function invokeInfluxDBQuery(

    query) {
      return this.influxDS._seriesQuery(query).
      then(function (data) {return data && data.results ? data.results : [];});
    } }]);return InfluxDBConnector;}(_dbConnector__WEBPACK_IMPORTED_MODULE_2__["DBConnector"]);


///////////////////////////////////////////////////////////////////////////////

function handleInfluxHistoryResponse(results) {
  if (!results) {
    return [];
  }

  var seriesList = [];
  for (var i = 0; i < results.length; i++) {
    var result = results[i];

    if (result.error) {
      var error = "InfluxDB error: ".concat(result.error);
      return Promise.reject(new Error(error));
    }

    if (!result || !result.series) {
      continue;
    }

    var influxSeriesList = results[i].series;

    for (var y = 0; y < influxSeriesList.length; y++) {
      var influxSeries = influxSeriesList[y];
      var datapoints = [];
      if (influxSeries.values) {
        for (i = 0; i < influxSeries.values.length; i++) {
          datapoints[i] = [influxSeries.values[i][1], influxSeries.values[i][0]];
        }
      }
      var timeSeries = {
        name: influxSeries.tags.itemid,
        points: datapoints };

      seriesList.push(timeSeries);
    }
  }

  return seriesList;
}

/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/sql/mysql.js":
/*!**********************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/sql/mysql.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MySQL queries
 */

function historyQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction) {
  var query = "\n    SELECT CAST(itemid AS CHAR) AS metric, MIN(clock) AS time_sec, ".concat(
  aggFunction, "(value) AS value\n    FROM ").concat(
  table, "\n    WHERE itemid IN (").concat(
  itemids, ")\n      AND clock > ").concat(
  timeFrom, " AND clock < ").concat(timeTill, "\n    GROUP BY (clock-").concat(
  timeFrom, ") DIV ").concat(intervalSec, ", metric\n    ORDER BY time_sec ASC\n  ");


  return query;
}

function trendsQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction, valueColumn) {
  var query = "\n    SELECT CAST(itemid AS CHAR) AS metric, MIN(clock) AS time_sec, ".concat(
  aggFunction, "(").concat(valueColumn, ") AS value\n    FROM ").concat(
  table, "\n    WHERE itemid IN (").concat(
  itemids, ")\n      AND clock > ").concat(
  timeFrom, " AND clock < ").concat(timeTill, "\n    GROUP BY (clock-").concat(
  timeFrom, ") DIV ").concat(intervalSec, ", metric\n    ORDER BY time_sec ASC\n  ");


  return query;
}

var TEST_QUERY = "SELECT CAST(itemid AS CHAR) AS metric, clock AS time_sec, value_avg AS value FROM trends_uint LIMIT 1";

function testQuery() {
  return TEST_QUERY;
}

var mysql = {
  historyQuery: historyQuery,
  trendsQuery: trendsQuery,
  testQuery: testQuery };


/* harmony default export */ __webpack_exports__["default"] = (mysql);

/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/sql/postgres.js":
/*!*************************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/sql/postgres.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Postgres queries
 */

var ITEMID_FORMAT = 'FM99999999999999999999';

function historyQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction) {
  var time_expression = "clock / ".concat(intervalSec, " * ").concat(intervalSec);
  var query = "\n    SELECT to_char(itemid, '".concat(
  ITEMID_FORMAT, "') AS metric, ").concat(time_expression, " AS time, ").concat(aggFunction, "(value) AS value\n    FROM ").concat(
  table, "\n    WHERE itemid IN (").concat(
  itemids, ")\n      AND clock > ").concat(
  timeFrom, " AND clock < ").concat(timeTill, "\n    GROUP BY 1, 2\n    ORDER BY time ASC\n  ");



  return query;
}

function trendsQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction, valueColumn) {
  var time_expression = "clock / ".concat(intervalSec, " * ").concat(intervalSec);
  var query = "\n    SELECT to_char(itemid, '".concat(
  ITEMID_FORMAT, "') AS metric, ").concat(time_expression, " AS time, ").concat(aggFunction, "(").concat(valueColumn, ") AS value\n    FROM ").concat(
  table, "\n    WHERE itemid IN (").concat(
  itemids, ")\n      AND clock > ").concat(
  timeFrom, " AND clock < ").concat(timeTill, "\n    GROUP BY 1, 2\n    ORDER BY time ASC\n  ");



  return query;
}

var TEST_QUERY = "\n  SELECT to_char(itemid, '".concat(
ITEMID_FORMAT, "') AS metric, clock AS time, value_avg AS value\n  FROM trends_uint LIMIT 1\n");



function testQuery() {
  return TEST_QUERY;
}

var postgres = {
  historyQuery: historyQuery,
  trendsQuery: trendsQuery,
  testQuery: testQuery };


/* harmony default export */ __webpack_exports__["default"] = (postgres);

/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/sql/sqlConnector.js":
/*!*****************************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/sql/sqlConnector.js ***!
  \*****************************************************************/
/*! exports provided: SQLConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLConnector", function() { return SQLConnector; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mysql */ "./datasource-zabbix/zabbix/connectors/sql/mysql.js");
/* harmony import */ var _postgres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postgres */ "./datasource-zabbix/zabbix/connectors/sql/postgres.js");
/* harmony import */ var _dbConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dbConnector */ "./datasource-zabbix/zabbix/connectors/dbConnector.js");
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _get(target, property, receiver) {if (typeof Reflect !== "undefined" && Reflect.get) {_get = Reflect.get;} else {_get = function _get(target, property, receiver) {var base = _superPropBase(target, property);if (!base) return;var desc = Object.getOwnPropertyDescriptor(base, property);if (desc.get) {return desc.get.call(receiver);}return desc.value;};}return _get(target, property, receiver || target);}function _superPropBase(object, property) {while (!Object.prototype.hasOwnProperty.call(object, property)) {object = _getPrototypeOf(object);if (object === null) break;}return object;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}






var supportedDatabases = {
  mysql: 'mysql',
  postgres: 'postgres' };


var SQLConnector = /*#__PURE__*/function (_DBConnector) {_inherits(SQLConnector, _DBConnector);var _super = _createSuper(SQLConnector);
  function SQLConnector(options) {var _thisSuper, _this;_classCallCheck(this, SQLConnector);
    _this = _super.call(this, options);

    _this.limit = options.limit || _dbConnector__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_QUERY_LIMIT"];
    _this.sqlDialect = null;

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(SQLConnector.prototype)), "loadDBDataSource", _thisSuper).call(_thisSuper).
    then(function () {
      _this.loadSQLDialect();
    });return _this;
  }_createClass(SQLConnector, [{ key: "loadSQLDialect", value: function loadSQLDialect()

    {
      if (this.datasourceTypeId === supportedDatabases.postgres) {
        this.sqlDialect = _postgres__WEBPACK_IMPORTED_MODULE_4__["default"];
      } else {
        this.sqlDialect = _mysql__WEBPACK_IMPORTED_MODULE_3__["default"];
      }
    }

    /**
       * Try to invoke test query for one of Zabbix database tables.
       */ }, { key: "testDataSource", value: function testDataSource()
    {
      var testQuery = this.sqlDialect.testQuery();
      return this.invokeSQLQuery(testQuery);
    } }, { key: "getHistory", value: function getHistory(

    items, timeFrom, timeTill, options) {var _this2 = this;var
      intervalMs = options.intervalMs,consolidateBy = options.consolidateBy;
      var intervalSec = Math.ceil(intervalMs / 1000);

      // The interval must match the time range exactly n times, otherwise
      // the resulting first and last data points will yield invalid values in the
      // calculated average value in downsampleSeries - when using consolidateBy(avg)
      var numOfIntervals = Math.ceil((timeTill - timeFrom) / intervalSec);
      intervalSec = (timeTill - timeFrom) / numOfIntervals;

      consolidateBy = consolidateBy || 'avg';
      var aggFunction = _dbConnector__WEBPACK_IMPORTED_MODULE_5__["default"].consolidateByFunc[consolidateBy];

      // Group items by value type and perform request for each value type
      var grouped_items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(items, 'value_type');
      var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_items, function (items, value_type) {
        var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid').join(', ');
        var table = _dbConnector__WEBPACK_IMPORTED_MODULE_5__["HISTORY_TO_TABLE_MAP"][value_type];
        var query = _this2.sqlDialect.historyQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction);

        query = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["compactQuery"])(query);
        return _this2.invokeSQLQuery(query);
      });

      return Promise.all(promises).then(function (results) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(results);
      });
    } }, { key: "getTrends", value: function getTrends(

    items, timeFrom, timeTill, options) {var _this3 = this;var
      intervalMs = options.intervalMs,consolidateBy = options.consolidateBy;
      var intervalSec = Math.ceil(intervalMs / 1000);

      // The interval must match the time range exactly n times, otherwise
      // the resulting first and last data points will yield invalid values in the
      // calculated average value in downsampleSeries - when using consolidateBy(avg)
      var numOfIntervals = Math.ceil((timeTill - timeFrom) / intervalSec);
      intervalSec = (timeTill - timeFrom) / numOfIntervals;

      consolidateBy = consolidateBy || 'avg';
      var aggFunction = _dbConnector__WEBPACK_IMPORTED_MODULE_5__["default"].consolidateByFunc[consolidateBy];

      // Group items by value type and perform request for each value type
      var grouped_items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(items, 'value_type');
      var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_items, function (items, value_type) {
        var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid').join(', ');
        var table = _dbConnector__WEBPACK_IMPORTED_MODULE_5__["TREND_TO_TABLE_MAP"][value_type];
        var valueColumn = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(['avg', 'min', 'max', 'sum'], consolidateBy) ? consolidateBy : 'avg';
        valueColumn = _dbConnector__WEBPACK_IMPORTED_MODULE_5__["default"].consolidateByTrendColumns[valueColumn];
        var query = _this3.sqlDialect.trendsQuery(itemids, table, timeFrom, timeTill, intervalSec, aggFunction, valueColumn);

        query = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["compactQuery"])(query);
        return _this3.invokeSQLQuery(query);
      });

      return Promise.all(promises).then(function (results) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(results);
      });
    } }, { key: "invokeSQLQuery", value: function invokeSQLQuery(

    query) {
      var queryDef = {
        refId: 'A',
        format: 'time_series',
        datasourceId: this.datasourceId,
        rawSql: query,
        maxDataPoints: this.limit };


      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().datasourceRequest({
        url: '/api/tsdb/query',
        method: 'POST',
        data: {
          queries: [queryDef] } }).


      then(function (response) {
        var results = response.data.results;
        if (results['A']) {
          return results['A'].series;
        } else {
          return null;
        }
      });
    } }]);return SQLConnector;}(_dbConnector__WEBPACK_IMPORTED_MODULE_5__["DBConnector"]);

/***/ }),

/***/ "./datasource-zabbix/zabbix/connectors/zabbix_api/zabbixAPIConnector.ts":
/*!******************************************************************************!*\
  !*** ./datasource-zabbix/zabbix/connectors/zabbix_api/zabbixAPIConnector.ts ***!
  \******************************************************************************/
/*! exports provided: ZabbixAPIConnector, ZabbixAPIError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixAPIConnector", function() { return ZabbixAPIConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZabbixAPIError", function() { return ZabbixAPIError; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver */ "../node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/core/utils/kbn */ "grafana/app/core/utils/kbn");
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types */ "./datasource-zabbix/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__);







var DEFAULT_ZABBIX_VERSION = '3.0.0';
/**
 * Zabbix API Wrapper.
 * Creates Zabbix API instance with given parameters (url, credentials and other).
 * Wraps API calls and provides high-level methods.
 */
var ZabbixAPIConnector = /** @class */ (function () {
    function ZabbixAPIConnector(basicAuth, withCredentials, datasourceId) {
        this.datasourceId = datasourceId;
        this.backendAPIUrl = "/api/datasources/" + this.datasourceId + "/resources/zabbix-api";
        this.requestOptions = {
            basicAuth: basicAuth,
            withCredentials: withCredentials
        };
        this.getTrend = this.getTrend_ZBXNEXT1193;
        //getTrend = getTrend_30;
        this.initVersion();
    }
    //////////////////////////
    // Core method wrappers //
    //////////////////////////
    ZabbixAPIConnector.prototype.request = function (method, params) {
        return this.backendAPIRequest(method, params).then(function (response) {
            var _a;
            return (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result;
        });
    };
    ZabbixAPIConnector.prototype.backendAPIRequest = function (method, params) {
        if (params === void 0) { params = {}; }
        var requestOptions = {
            url: this.backendAPIUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                datasourceId: this.datasourceId,
                method: method,
                params: params,
            },
        };
        // Set request options for basic auth
        if (this.requestOptions.basicAuth || this.requestOptions.withCredentials) {
            requestOptions.withCredentials = true;
        }
        if (this.requestOptions.basicAuth) {
            requestOptions.headers.Authorization = this.requestOptions.basicAuth;
        }
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__["getBackendSrv"])().datasourceRequest(requestOptions);
    };
    /**
     * Get Zabbix API version
     */
    ZabbixAPIConnector.prototype.getVersion = function () {
        return this.request('apiinfo.version');
    };
    ZabbixAPIConnector.prototype.initVersion = function () {
        var _this = this;
        if (!this.getVersionPromise) {
            this.getVersionPromise = Promise.resolve(this.getVersion().then(function (version) {
                if (version) {
                    console.log("Zabbix version detected: " + version);
                }
                else {
                    console.log("Failed to detect Zabbix version, use default " + DEFAULT_ZABBIX_VERSION);
                }
                _this.version = version || DEFAULT_ZABBIX_VERSION;
                _this.getVersionPromise = null;
                return version;
            }));
        }
        return this.getVersionPromise;
    };
    ////////////////////////////////
    // Zabbix API method wrappers //
    ////////////////////////////////
    ZabbixAPIConnector.prototype.acknowledgeEvent = function (eventid, message, action, severity) {
        if (!action) {
            action = semver__WEBPACK_IMPORTED_MODULE_1___default.a.gte(this.version, '4.0.0') ? _constants__WEBPACK_IMPORTED_MODULE_4__["ZBX_ACK_ACTION_ADD_MESSAGE"] : _constants__WEBPACK_IMPORTED_MODULE_4__["ZBX_ACK_ACTION_NONE"];
        }
        var params = {
            eventids: eventid,
            message: message,
            action: action
        };
        if (severity) {
            params.severity = severity;
        }
        return this.request('event.acknowledge', params);
    };
    ZabbixAPIConnector.prototype.getGroups = function () {
        var params = {
            output: ['name'],
            sortfield: 'name',
            real_hosts: true
        };
        return this.request('hostgroup.get', params);
    };
    ZabbixAPIConnector.prototype.getHosts = function (groupids) {
        var params = {
            output: ['name', 'host'],
            sortfield: 'name'
        };
        if (groupids) {
            params.groupids = groupids;
        }
        return this.request('host.get', params);
    };
    ZabbixAPIConnector.prototype.getApps = function (hostids) {
        var params = {
            output: 'extend',
            hostids: hostids
        };
        return this.request('application.get', params);
    };
    /**
     * Get Zabbix items
     * @param  {[type]} hostids  host ids
     * @param  {[type]} appids   application ids
     * @param  {String} itemtype 'num' or 'text'
     * @return {[type]}          array of items
     */
    ZabbixAPIConnector.prototype.getItems = function (hostids, appids, itemtype) {
        var params = {
            output: [
                'name', 'key_',
                'value_type',
                'hostid',
                'status',
                'state'
            ],
            sortfield: 'name',
            webitems: true,
            filter: {},
            selectHosts: ['hostid', 'name', 'host']
        };
        if (hostids) {
            params.hostids = hostids;
        }
        if (appids) {
            params.applicationids = appids;
        }
        if (itemtype === 'num') {
            // Return only numeric metrics
            params.filter.value_type = [0, 3];
        }
        if (itemtype === 'text') {
            // Return only text metrics
            params.filter.value_type = [1, 2, 4];
        }
        return this.request('item.get', params)
            .then(_utils__WEBPACK_IMPORTED_MODULE_3__["expandItems"]);
    };
    ZabbixAPIConnector.prototype.getItemsByIDs = function (itemids) {
        var params = {
            itemids: itemids,
            output: [
                'name', 'key_',
                'value_type',
                'hostid',
                'status',
                'state'
            ],
            webitems: true,
            selectHosts: ['hostid', 'name']
        };
        return this.request('item.get', params)
            .then(function (items) { return _utils__WEBPACK_IMPORTED_MODULE_3__["expandItems"](items); });
    };
    ZabbixAPIConnector.prototype.getMacros = function (hostids) {
        var params = {
            output: 'extend',
            hostids: hostids
        };
        return this.request('usermacro.get', params);
    };
    ZabbixAPIConnector.prototype.getGlobalMacros = function () {
        var params = {
            output: 'extend',
            globalmacro: true
        };
        return this.request('usermacro.get', params);
    };
    ZabbixAPIConnector.prototype.getLastValue = function (itemid) {
        var params = {
            output: ['lastvalue'],
            itemids: itemid
        };
        return this.request('item.get', params)
            .then(function (items) { return items.length ? items[0].lastvalue : null; });
    };
    /**
     * Perform history query from Zabbix API
     *
     * @param  {Array}  items       Array of Zabbix item objects
     * @param  {Number} timeFrom   Time in seconds
     * @param  {Number} timeTill   Time in seconds
     * @return {Array}  Array of Zabbix history objects
     */
    ZabbixAPIConnector.prototype.getHistory = function (items, timeFrom, timeTill) {
        var _this = this;
        // Group items by value type and perform request for each value type
        var grouped_items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(items, 'value_type');
        var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_items, function (items, value_type) {
            var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid');
            var params = {
                output: 'extend',
                history: value_type,
                itemids: itemids,
                sortfield: 'clock',
                sortorder: 'ASC',
                time_from: timeFrom
            };
            // Relative queries (e.g. last hour) don't include an end time
            if (timeTill) {
                params.time_till = timeTill;
            }
            return _this.request('history.get', params);
        });
        return Promise.all(promises).then(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten);
    };
    /**
     * Perform trends query from Zabbix API
     * Use trends api extension from ZBXNEXT-1193 patch.
     *
     * @param  {Array}  items       Array of Zabbix item objects
     * @param  {Number} time_from   Time in seconds
     * @param  {Number} time_till   Time in seconds
     * @return {Array}  Array of Zabbix trend objects
     */
    ZabbixAPIConnector.prototype.getTrend_ZBXNEXT1193 = function (items, timeFrom, timeTill) {
        var _this = this;
        // Group items by value type and perform request for each value type
        var grouped_items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.groupBy(items, 'value_type');
        var promises = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(grouped_items, function (items, value_type) {
            var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid');
            var params = {
                output: 'extend',
                trend: value_type,
                itemids: itemids,
                sortfield: 'clock',
                sortorder: 'ASC',
                time_from: timeFrom
            };
            // Relative queries (e.g. last hour) don't include an end time
            if (timeTill) {
                params.time_till = timeTill;
            }
            return _this.request('trend.get', params);
        });
        return Promise.all(promises).then(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten);
    };
    ZabbixAPIConnector.prototype.getTrend_30 = function (items, time_from, time_till, value_type) {
        var self = this;
        var itemids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, 'itemid');
        var params = {
            output: ["itemid",
                "clock",
                value_type
            ],
            itemids: itemids,
            time_from: time_from
        };
        // Relative queries (e.g. last hour) don't include an end time
        if (time_till) {
            params.time_till = time_till;
        }
        return self.request('trend.get', params);
    };
    ZabbixAPIConnector.prototype.getITService = function (serviceids) {
        var params = {
            output: 'extend',
            serviceids: serviceids
        };
        return this.request('service.get', params);
    };
    ZabbixAPIConnector.prototype.getSLA = function (serviceids, timeRange, options) {
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        var intervals = [{ from: timeFrom, to: timeTo }];
        if (options.slaInterval === 'auto') {
            var interval = getSLAInterval(options.intervalMs);
            intervals = buildSLAIntervals(timeRange, interval);
        }
        else if (options.slaInterval !== 'none') {
            var interval = _utils__WEBPACK_IMPORTED_MODULE_3__["parseInterval"](options.slaInterval) / 1000;
            intervals = buildSLAIntervals(timeRange, interval);
        }
        var params = {
            serviceids: serviceids,
            intervals: intervals
        };
        return this.request('service.getsla', params);
    };
    ZabbixAPIConnector.prototype.getProblems = function (groupids, hostids, applicationids, options) {
        var timeFrom = options.timeFrom, timeTo = options.timeTo, recent = options.recent, severities = options.severities, limit = options.limit, acknowledged = options.acknowledged, tags = options.tags;
        var params = {
            output: 'extend',
            selectAcknowledges: 'extend',
            selectSuppressionData: 'extend',
            selectTags: 'extend',
            source: '0',
            object: '0',
            sortfield: ['eventid'],
            sortorder: 'DESC',
            evaltype: '0',
            // preservekeys: '1',
            groupids: groupids,
            hostids: hostids,
            applicationids: applicationids,
            recent: recent,
        };
        if (severities) {
            params.severities = severities;
        }
        if (acknowledged !== undefined) {
            params.acknowledged = acknowledged;
        }
        if (tags) {
            params.tags = tags;
        }
        if (limit) {
            params.limit = limit;
        }
        if (timeFrom || timeTo) {
            params.time_from = timeFrom;
            params.time_till = timeTo;
        }
        return this.request('problem.get', params).then(_utils__WEBPACK_IMPORTED_MODULE_3__["mustArray"]);
    };
    ZabbixAPIConnector.prototype.getTriggersByIds = function (triggerids) {
        var params = {
            output: 'extend',
            triggerids: triggerids,
            expandDescription: true,
            expandData: true,
            expandComment: true,
            monitored: true,
            // skipDependent: true,
            selectGroups: ['name'],
            selectHosts: ['name', 'host', 'maintenance_status', 'proxy_hostid'],
            selectItems: ['name', 'key_', 'lastvalue'],
            // selectLastEvent: 'extend',
            // selectTags: 'extend',
            preservekeys: '1',
        };
        return this.request('trigger.get', params).then(_utils__WEBPACK_IMPORTED_MODULE_3__["mustArray"]);
    };
    ZabbixAPIConnector.prototype.getTriggers = function (groupids, hostids, applicationids, options) {
        var showTriggers = options.showTriggers, maintenance = options.maintenance, timeFrom = options.timeFrom, timeTo = options.timeTo;
        var params = {
            output: 'extend',
            groupids: groupids,
            hostids: hostids,
            applicationids: applicationids,
            expandDescription: true,
            expandData: true,
            expandComment: true,
            monitored: true,
            skipDependent: true,
            //only_true: true,
            filter: {
                value: 1
            },
            selectGroups: ['name'],
            selectHosts: ['name', 'host', 'maintenance_status', 'proxy_hostid'],
            selectItems: ['name', 'key_', 'lastvalue'],
            selectLastEvent: 'extend',
            selectTags: 'extend'
        };
        if (showTriggers === _types__WEBPACK_IMPORTED_MODULE_5__["ShowProblemTypes"].Problems) {
            params.filter.value = 1;
        }
        else if (showTriggers === _types__WEBPACK_IMPORTED_MODULE_5__["ShowProblemTypes"].Recent || showTriggers === _types__WEBPACK_IMPORTED_MODULE_5__["ShowProblemTypes"].History) {
            params.filter.value = [0, 1];
        }
        if (maintenance) {
            params.maintenance = true;
        }
        if (timeFrom || timeTo) {
            params.lastChangeSince = timeFrom;
            params.lastChangeTill = timeTo;
        }
        return this.request('trigger.get', params);
    };
    ZabbixAPIConnector.prototype.getEvents = function (objectids, timeFrom, timeTo, showEvents, limit) {
        var params = {
            output: 'extend',
            time_from: timeFrom,
            time_till: timeTo,
            objectids: objectids,
            select_acknowledges: 'extend',
            selectHosts: 'extend',
            value: showEvents,
        };
        if (limit) {
            params.limit = limit;
            params.sortfield = 'clock';
            params.sortorder = 'DESC';
        }
        return this.request('event.get', params).then(_utils__WEBPACK_IMPORTED_MODULE_3__["mustArray"]);
    };
    ZabbixAPIConnector.prototype.getEventsHistory = function (groupids, hostids, applicationids, options) {
        var timeFrom = options.timeFrom, timeTo = options.timeTo, severities = options.severities, limit = options.limit, value = options.value;
        var params = {
            output: 'extend',
            time_from: timeFrom,
            time_till: timeTo,
            value: '1',
            source: '0',
            object: '0',
            evaltype: '0',
            sortfield: ['eventid'],
            sortorder: 'DESC',
            select_acknowledges: 'extend',
            selectTags: 'extend',
            selectSuppressionData: ['maintenanceid', 'suppress_until'],
            groupids: groupids,
            hostids: hostids,
            applicationids: applicationids,
        };
        if (limit) {
            params.limit = limit;
        }
        if (severities) {
            params.severities = severities;
        }
        if (value) {
            params.value = value;
        }
        return this.request('event.get', params).then(_utils__WEBPACK_IMPORTED_MODULE_3__["mustArray"]);
    };
    ZabbixAPIConnector.prototype.getExtendedEventData = function (eventids) {
        var params = {
            output: 'extend',
            eventids: eventids,
            preservekeys: true,
            select_acknowledges: 'extend',
            selectTags: 'extend',
            sortfield: 'clock',
            sortorder: 'DESC'
        };
        return this.request('event.get', params);
    };
    ZabbixAPIConnector.prototype.getEventAlerts = function (eventids) {
        var params = {
            eventids: eventids,
            output: [
                'eventid',
                'message',
                'clock',
                'error'
            ],
            selectUsers: true,
        };
        return this.request('alert.get', params);
    };
    ZabbixAPIConnector.prototype.getAcknowledges = function (eventids) {
        var params = {
            output: 'extend',
            eventids: eventids,
            preservekeys: true,
            select_acknowledges: 'extend',
            sortfield: 'clock',
            sortorder: 'DESC'
        };
        return this.request('event.get', params)
            .then(function (events) {
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(events, function (event) { return event.acknowledges.length; });
        });
    };
    ZabbixAPIConnector.prototype.getAlerts = function (itemids, timeFrom, timeTo) {
        var params = {
            output: 'extend',
            itemids: itemids,
            expandDescription: true,
            expandData: true,
            expandComment: true,
            monitored: true,
            skipDependent: true,
            //only_true: true,
            // filter: {
            //   value: 1
            // },
            selectLastEvent: 'extend'
        };
        if (timeFrom || timeTo) {
            params.lastChangeSince = timeFrom;
            params.lastChangeTill = timeTo;
        }
        return this.request('trigger.get', params);
    };
    ZabbixAPIConnector.prototype.getHostAlerts = function (hostids, applicationids, options) {
        var minSeverity = options.minSeverity, acknowledged = options.acknowledged, count = options.count, timeFrom = options.timeFrom, timeTo = options.timeTo;
        var params = {
            output: 'extend',
            hostids: hostids,
            min_severity: minSeverity,
            filter: { value: 1 },
            expandDescription: true,
            expandData: true,
            expandComment: true,
            monitored: true,
            skipDependent: true,
            selectLastEvent: 'extend',
            selectGroups: 'extend',
            selectHosts: ['host', 'name']
        };
        if (count && acknowledged !== 0 && acknowledged !== 1) {
            params.countOutput = true;
        }
        if (applicationids && applicationids.length) {
            params.applicationids = applicationids;
        }
        if (timeFrom || timeTo) {
            params.lastChangeSince = timeFrom;
            params.lastChangeTill = timeTo;
        }
        return this.request('trigger.get', params)
            .then(function (triggers) {
            if (!count || acknowledged === 0 || acknowledged === 1) {
                triggers = filterTriggersByAcknowledge(triggers, acknowledged);
                if (count) {
                    triggers = triggers.length;
                }
            }
            return triggers;
        });
    };
    ZabbixAPIConnector.prototype.getProxies = function () {
        var params = {
            output: ['proxyid', 'host'],
        };
        return this.request('proxy.get', params);
    };
    ZabbixAPIConnector.prototype.getScripts = function (hostids, options) {
        var params = {
            output: 'extend',
            hostids: hostids,
        };
        return this.request('script.get', params).then(_utils__WEBPACK_IMPORTED_MODULE_3__["mustArray"]);
    };
    ZabbixAPIConnector.prototype.executeScript = function (hostid, scriptid) {
        var params = {
            hostid: hostid,
            scriptid: scriptid,
        };
        return this.request('script.execute', params);
    };
    return ZabbixAPIConnector;
}());

function filterTriggersByAcknowledge(triggers, acknowledged) {
    if (acknowledged === 0) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(triggers, function (trigger) { return trigger.lastEvent.acknowledged === "0"; });
    }
    else if (acknowledged === 1) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(triggers, function (trigger) { return trigger.lastEvent.acknowledged === "1"; });
    }
    else {
        return triggers;
    }
}
function getSLAInterval(intervalMs) {
    // Too many intervals may cause significant load on the database, so decrease number of resulting points
    var resolutionRatio = 100;
    var interval = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default.a.round_interval(intervalMs * resolutionRatio) / 1000;
    return Math.max(interval, _constants__WEBPACK_IMPORTED_MODULE_4__["MIN_SLA_INTERVAL"]);
}
function buildSLAIntervals(timeRange, interval) {
    var timeFrom = timeRange[0], timeTo = timeRange[1];
    var intervals = [];
    // Align time range with calculated interval
    timeFrom = Math.floor(timeFrom / interval) * interval;
    timeTo = Math.ceil(timeTo / interval) * interval;
    for (var i = timeFrom; i <= timeTo - interval; i += interval) {
        intervals.push({
            from: i,
            to: (i + interval)
        });
    }
    return intervals;
}
// Define zabbix API exception type
var ZabbixAPIError = /** @class */ (function () {
    function ZabbixAPIError(error) {
        this.code = error.code || null;
        this.name = error.message || "";
        this.data = error.data || "";
        this.message = "Zabbix API Error: " + this.name + " " + this.data;
    }
    ZabbixAPIError.prototype.toString = function () {
        return this.name + " " + this.data;
    };
    return ZabbixAPIError;
}());



/***/ }),

/***/ "./datasource-zabbix/zabbix/proxy/cachingProxy.ts":
/*!********************************************************!*\
  !*** ./datasource-zabbix/zabbix/proxy/cachingProxy.ts ***!
  \********************************************************/
/*! exports provided: CachingProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingProxy", function() { return CachingProxy; });
/**
 * This module allows to deduplicate function calls with the same params and
 * cache result of function call.
 */
var CachingProxy = /** @class */ (function () {
    function CachingProxy(cacheOptions) {
        this.cacheEnabled = cacheOptions.enabled;
        this.ttl = cacheOptions.ttl || 600000; // 10 minutes by default
        // Internal objects for data storing
        this.cache = {};
        this.promises = {};
    }
    /**
     * Check that result is present in the cache and is up to date or send request otherwise.
     */
    CachingProxy.prototype.cacheRequest = function (func, funcName, funcScope) {
        return cacheRequest(func, funcName, funcScope, this);
    };
    /**
     * Wrap request to prevent multiple calls with same params when request is waiting for response.
     */
    CachingProxy.prototype.proxify = function (func, funcName, funcScope) {
        if (!this.promises[funcName]) {
            this.promises[funcName] = {};
        }
        var promiseKeeper = this.promises[funcName];
        return callOnce(func, promiseKeeper, funcScope);
    };
    CachingProxy.prototype.proxifyWithCache = function (func, funcName, funcScope) {
        var proxified = this.proxify(func, funcName, funcScope);
        return this.cacheRequest(proxified, funcName, funcScope);
    };
    CachingProxy.prototype._isExpired = function (cacheObject) {
        if (cacheObject) {
            var object_age = Date.now() - cacheObject.timestamp;
            return !(cacheObject.timestamp && object_age < this.ttl);
        }
        else {
            return true;
        }
    };
    return CachingProxy;
}());

/**
 * Wrap request to prevent multiple calls
 * with same params when waiting for result.
 */
function callOnce(func, promiseKeeper, funcScope) {
    // tslint:disable-next-line: only-arrow-functions
    return function () {
        var hash = getRequestHash(arguments);
        if (!promiseKeeper[hash]) {
            promiseKeeper[hash] = Promise.resolve(func.apply(funcScope, arguments)
                .then(function (result) {
                promiseKeeper[hash] = null;
                return result;
            }).catch(function (err) {
                promiseKeeper[hash] = null;
                throw err;
            }));
        }
        return promiseKeeper[hash];
    };
}
function cacheRequest(func, funcName, funcScope, self) {
    // tslint:disable-next-line: only-arrow-functions
    return function () {
        if (!self.cache[funcName]) {
            self.cache[funcName] = {};
        }
        var cacheObject = self.cache[funcName];
        var hash = getRequestHash(arguments);
        if (self.cacheEnabled && !self._isExpired(cacheObject[hash])) {
            return Promise.resolve(cacheObject[hash].value);
        }
        else {
            return func.apply(funcScope, arguments)
                .then(function (result) {
                if (result !== undefined) {
                    cacheObject[hash] = {
                        value: result,
                        timestamp: Date.now()
                    };
                }
                return result;
            });
        }
    };
}
function getRequestHash(args) {
    var argsJson = JSON.stringify(args);
    return getHash(argsJson);
}
function getHash(str) {
    var hash = 0, i, chr, len;
    if (str.length !== 0) {
        for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
    }
    return hash;
}


/***/ }),

/***/ "./datasource-zabbix/zabbix/zabbix.ts":
/*!********************************************!*\
  !*** ./datasource-zabbix/zabbix/zabbix.ts ***!
  \********************************************/
/*! exports provided: Zabbix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zabbix", function() { return Zabbix; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _responseHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responseHandler */ "./datasource-zabbix/responseHandler.ts");
/* harmony import */ var _proxy_cachingProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy/cachingProxy */ "./datasource-zabbix/zabbix/proxy/cachingProxy.ts");
/* harmony import */ var _connectors_dbConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connectors/dbConnector */ "./datasource-zabbix/zabbix/connectors/dbConnector.js");
/* harmony import */ var _connectors_zabbix_api_zabbixAPIConnector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectors/zabbix_api/zabbixAPIConnector */ "./datasource-zabbix/zabbix/connectors/zabbix_api/zabbixAPIConnector.ts");
/* harmony import */ var _connectors_sql_sqlConnector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connectors/sql/sqlConnector */ "./datasource-zabbix/zabbix/connectors/sql/sqlConnector.js");
/* harmony import */ var _connectors_influxdb_influxdbConnector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connectors/influxdb/influxdbConnector */ "./datasource-zabbix/zabbix/connectors/influxdb/influxdbConnector.js");
/* harmony import */ var _problemsHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../problemsHandler */ "./datasource-zabbix/problemsHandler.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





// import { ZabbixNotImplemented } from './connectors/dbConnector';





var REQUESTS_TO_PROXYFY = [
    'getHistory', 'getTrend', 'getGroups', 'getHosts', 'getApps', 'getItems', 'getMacros', 'getItemsByIDs',
    'getEvents', 'getAlerts', 'getHostAlerts', 'getAcknowledges', 'getITService', 'getSLA', 'getVersion', 'getProxies',
    'getEventAlerts', 'getExtendedEventData', 'getProblems', 'getEventsHistory', 'getTriggersByIds', 'getScripts',
    'getGlobalMacros'
];
var REQUESTS_TO_CACHE = [
    'getGroups', 'getHosts', 'getApps', 'getItems', 'getMacros', 'getItemsByIDs', 'getITService', 'getProxies',
    'getGlobalMacros'
];
var REQUESTS_TO_BIND = [
    'getHistory', 'getTrend', 'getMacros', 'getItemsByIDs', 'getEvents', 'getAlerts', 'getHostAlerts',
    'getAcknowledges', 'getITService', 'getVersion', 'acknowledgeEvent', 'getProxies', 'getEventAlerts',
    'getExtendedEventData', 'getScripts', 'executeScript', 'getGlobalMacros'
];
var Zabbix = /** @class */ (function () {
    function Zabbix(options) {
        var _this = this;
        var basicAuth = options.basicAuth, withCredentials = options.withCredentials, cacheTTL = options.cacheTTL, enableDirectDBConnection = options.enableDirectDBConnection, dbConnectionDatasourceId = options.dbConnectionDatasourceId, dbConnectionDatasourceName = options.dbConnectionDatasourceName, dbConnectionRetentionPolicy = options.dbConnectionRetentionPolicy, datasourceId = options.datasourceId;
        this.enableDirectDBConnection = enableDirectDBConnection;
        // Initialize caching proxy for requests
        var cacheOptions = {
            enabled: true,
            ttl: cacheTTL
        };
        this.cachingProxy = new _proxy_cachingProxy__WEBPACK_IMPORTED_MODULE_4__["CachingProxy"](cacheOptions);
        this.zabbixAPI = new _connectors_zabbix_api_zabbixAPIConnector__WEBPACK_IMPORTED_MODULE_6__["ZabbixAPIConnector"](basicAuth, withCredentials, datasourceId);
        this.proxifyRequests();
        this.cacheRequests();
        this.bindRequests();
        if (enableDirectDBConnection) {
            var connectorOptions = { dbConnectionRetentionPolicy: dbConnectionRetentionPolicy };
            this.initDBConnector(dbConnectionDatasourceId, dbConnectionDatasourceName, connectorOptions)
                .then(function () {
                _this.getHistoryDB = _this.cachingProxy.proxifyWithCache(_this.dbConnector.getHistory, 'getHistory', _this.dbConnector);
                _this.getTrendsDB = _this.cachingProxy.proxifyWithCache(_this.dbConnector.getTrends, 'getTrends', _this.dbConnector);
            });
        }
    }
    Zabbix.prototype.initDBConnector = function (datasourceId, datasourceName, options) {
        var _this = this;
        return _connectors_dbConnector__WEBPACK_IMPORTED_MODULE_5__["DBConnector"].loadDatasource(datasourceId, datasourceName)
            .then(function (ds) {
            var connectorOptions = { datasourceId: datasourceId, datasourceName: datasourceName };
            if (ds.type === 'influxdb') {
                connectorOptions.retentionPolicy = options.dbConnectionRetentionPolicy;
                _this.dbConnector = new _connectors_influxdb_influxdbConnector__WEBPACK_IMPORTED_MODULE_8__["InfluxDBConnector"](connectorOptions);
            }
            else {
                _this.dbConnector = new _connectors_sql_sqlConnector__WEBPACK_IMPORTED_MODULE_7__["SQLConnector"](connectorOptions);
            }
            return _this.dbConnector;
        });
    };
    Zabbix.prototype.proxifyRequests = function () {
        for (var _i = 0, REQUESTS_TO_PROXYFY_1 = REQUESTS_TO_PROXYFY; _i < REQUESTS_TO_PROXYFY_1.length; _i++) {
            var request = REQUESTS_TO_PROXYFY_1[_i];
            this.zabbixAPI[request] = this.cachingProxy.proxify(this.zabbixAPI[request], request, this.zabbixAPI);
        }
    };
    Zabbix.prototype.cacheRequests = function () {
        for (var _i = 0, REQUESTS_TO_CACHE_1 = REQUESTS_TO_CACHE; _i < REQUESTS_TO_CACHE_1.length; _i++) {
            var request = REQUESTS_TO_CACHE_1[_i];
            this.zabbixAPI[request] = this.cachingProxy.cacheRequest(this.zabbixAPI[request], request, this.zabbixAPI);
        }
    };
    Zabbix.prototype.bindRequests = function () {
        for (var _i = 0, REQUESTS_TO_BIND_1 = REQUESTS_TO_BIND; _i < REQUESTS_TO_BIND_1.length; _i++) {
            var request = REQUESTS_TO_BIND_1[_i];
            this[request] = this.zabbixAPI[request].bind(this.zabbixAPI);
        }
    };
    /**
     * Perform test query for Zabbix API and external history DB.
     * @return {object} test result object:
     * ```
     *    {
     *      zabbixVersion,
     *      dbConnectorStatus: {
     *        dsType,
     *        dsName
     *      }
     *    }
     * ```
     */
    Zabbix.prototype.testDataSource = function () {
        var _this = this;
        var zabbixVersion;
        var dbConnectorStatus;
        return this.getVersion()
            .then(function (version) {
            zabbixVersion = version;
            return _this.getAllGroups();
        })
            .then(function () {
            if (_this.enableDirectDBConnection) {
                return _this.dbConnector.testDataSource();
            }
            else {
                return Promise.resolve();
            }
        })
            .catch(function (error) {
            return Promise.reject(error);
        })
            .then(function (testResult) {
            if (testResult) {
                dbConnectorStatus = {
                    dsType: _this.dbConnector.datasourceTypeName,
                    dsName: _this.dbConnector.datasourceName
                };
            }
            return { zabbixVersion: zabbixVersion, dbConnectorStatus: dbConnectorStatus };
        });
    };
    Zabbix.prototype.getItemsFromTarget = function (target, options) {
        var parts = ['group', 'host', 'application', 'item'];
        var filters = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(parts, function (p) { return target[p].filter; });
        return this.getItems.apply(this, __spreadArrays(filters, [options]));
    };
    Zabbix.prototype.getHostsFromTarget = function (target) {
        var parts = ['group', 'host', 'application'];
        var filters = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(parts, function (p) { return target[p].filter; });
        return Promise.all([
            this.getHosts.apply(this, filters),
            this.getApps.apply(this, filters),
        ]).then(function (results) {
            var hosts = results[0];
            var apps = results[1];
            if (apps.appFilterEmpty) {
                apps = [];
            }
            return [hosts, apps];
        });
    };
    Zabbix.prototype.getAllGroups = function () {
        return this.zabbixAPI.getGroups();
    };
    Zabbix.prototype.getGroups = function (groupFilter) {
        return this.getAllGroups()
            .then(function (groups) { return findByFilter(groups, groupFilter); });
    };
    /**
     * Get list of host belonging to given groups.
     */
    Zabbix.prototype.getAllHosts = function (groupFilter) {
        var _this = this;
        return this.getGroups(groupFilter)
            .then(function (groups) {
            var groupids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(groups, 'groupid');
            return _this.zabbixAPI.getHosts(groupids);
        });
    };
    Zabbix.prototype.getHosts = function (groupFilter, hostFilter) {
        return this.getAllHosts(groupFilter)
            .then(function (hosts) { return findByFilter(hosts, hostFilter); });
    };
    /**
     * Get list of applications belonging to given groups and hosts.
     */
    Zabbix.prototype.getAllApps = function (groupFilter, hostFilter) {
        var _this = this;
        return this.getHosts(groupFilter, hostFilter)
            .then(function (hosts) {
            var hostids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(hosts, 'hostid');
            return _this.zabbixAPI.getApps(hostids);
        });
    };
    Zabbix.prototype.getApps = function (groupFilter, hostFilter, appFilter) {
        var _this = this;
        return this.getHosts(groupFilter, hostFilter)
            .then(function (hosts) {
            var hostids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(hosts, 'hostid');
            if (appFilter) {
                return _this.zabbixAPI.getApps(hostids)
                    .then(function (apps) { return filterByQuery(apps, appFilter); });
            }
            else {
                var appsResponse = hostids;
                appsResponse.hostids = hostids;
                appsResponse.appFilterEmpty = true;
                return Promise.resolve(appsResponse);
            }
        });
    };
    Zabbix.prototype.getAllItems = function (groupFilter, hostFilter, appFilter, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this.getApps(groupFilter, hostFilter, appFilter)
            .then(function (apps) {
            if (apps.appFilterEmpty) {
                return _this.zabbixAPI.getItems(apps.hostids, undefined, options.itemtype);
            }
            else {
                var appids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(apps, 'applicationid');
                return _this.zabbixAPI.getItems(undefined, appids, options.itemtype);
            }
        })
            .then(function (items) {
            if (!options.showDisabledItems) {
                items = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(items, { 'status': '0' });
            }
            return items;
        })
            .then(this.expandUserMacro.bind(this));
    };
    Zabbix.prototype.expandUserMacro = function (items, isTriggerItem) {
        var _this = this;
        var hostids = getHostIds(items);
        return this.getMacros(hostids)
            .then(function (macros) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(items, function (item) {
                if (_utils__WEBPACK_IMPORTED_MODULE_2__["containsMacro"](isTriggerItem ? item.url : item.name)) {
                    if (isTriggerItem) {
                        item.url = _utils__WEBPACK_IMPORTED_MODULE_2__["replaceMacro"](item, macros, isTriggerItem);
                    }
                    else {
                        item.name = _utils__WEBPACK_IMPORTED_MODULE_2__["replaceMacro"](item, macros);
                    }
                }
            });
            _this.getGlobalMacros().then(function (globalMacros) {
                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(items, function (item) {
                    if (_utils__WEBPACK_IMPORTED_MODULE_2__["containsMacro"](isTriggerItem ? item.url : item.name)) {
                        if (isTriggerItem) {
                            item.url = _utils__WEBPACK_IMPORTED_MODULE_2__["replaceMacro"](item, globalMacros, isTriggerItem);
                        }
                        else {
                            item.name = _utils__WEBPACK_IMPORTED_MODULE_2__["replaceMacro"](item, globalMacros);
                        }
                    }
                });
                return items;
            });
        });
    };
    Zabbix.prototype.getItems = function (groupFilter, hostFilter, appFilter, itemFilter, options) {
        if (options === void 0) { options = {}; }
        return this.getAllItems(groupFilter, hostFilter, appFilter, options)
            .then(function (items) { return filterByQuery(items, itemFilter); });
    };
    Zabbix.prototype.getItemValues = function (groupFilter, hostFilter, appFilter, itemFilter, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this.getItems(groupFilter, hostFilter, appFilter, itemFilter, options).then(function (items) {
            var timeRange = [moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'h').unix(), moment__WEBPACK_IMPORTED_MODULE_1___default()().unix()];
            if (options.range) {
                timeRange = [options.range.from.unix(), options.range.to.unix()];
            }
            var timeFrom = timeRange[0], timeTo = timeRange[1];
            return _this.zabbixAPI.getHistory(items, timeFrom, timeTo).then(function (history) {
                if (history) {
                    var values = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(history.map(function (v) { return v.value; }));
                    return values.map(function (value) { return ({ name: value }); });
                }
                else {
                    return [];
                }
            });
        });
    };
    Zabbix.prototype.getITServices = function (itServiceFilter) {
        return this.zabbixAPI.getITService()
            .then(function (itServices) { return findByFilter(itServices, itServiceFilter); });
    };
    Zabbix.prototype.getProblems = function (groupFilter, hostFilter, appFilter, proxyFilter, options) {
        var _this = this;
        var promises = [
            this.getGroups(groupFilter),
            this.getHosts(groupFilter, hostFilter),
            this.getApps(groupFilter, hostFilter, appFilter)
        ];
        return Promise.all(promises)
            .then(function (results) {
            var filteredGroups = results[0], filteredHosts = results[1], filteredApps = results[2];
            var query = {};
            if (appFilter) {
                query.applicationids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredApps, 'applicationid'));
            }
            if (hostFilter && hostFilter !== '/.*/') {
                query.hostids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredHosts, 'hostid');
            }
            if (groupFilter) {
                query.groupids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredGroups, 'groupid');
            }
            return query;
        })
            .then(function (query) { return _this.zabbixAPI.getProblems(query.groupids, query.hostids, query.applicationids, options); })
            .then(function (problems) {
            var triggerids = problems === null || problems === void 0 ? void 0 : problems.map(function (problem) { return problem.objectid; });
            return Promise.all([
                Promise.resolve(problems),
                _this.zabbixAPI.getTriggersByIds(triggerids)
            ]);
        })
            .then(function (_a) {
            var problems = _a[0], triggers = _a[1];
            return Object(_problemsHandler__WEBPACK_IMPORTED_MODULE_9__["joinTriggersWithProblems"])(problems, triggers);
        })
            .then(function (triggers) { return _this.filterTriggersByProxy(triggers, proxyFilter); })
            .then(function (triggers) { return _this.expandUserMacro.bind(_this)(triggers, true); });
    };
    Zabbix.prototype.getProblemsHistory = function (groupFilter, hostFilter, appFilter, proxyFilter, options) {
        var _this = this;
        var valueFromEvent = options.valueFromEvent;
        var promises = [
            this.getGroups(groupFilter),
            this.getHosts(groupFilter, hostFilter),
            this.getApps(groupFilter, hostFilter, appFilter)
        ];
        return Promise.all(promises)
            .then(function (results) {
            var filteredGroups = results[0], filteredHosts = results[1], filteredApps = results[2];
            var query = {};
            if (appFilter) {
                query.applicationids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredApps, 'applicationid'));
            }
            if (hostFilter) {
                query.hostids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredHosts, 'hostid');
            }
            if (groupFilter) {
                query.groupids = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filteredGroups, 'groupid');
            }
            return query;
        })
            .then(function (query) { return _this.zabbixAPI.getEventsHistory(query.groupids, query.hostids, query.applicationids, options); })
            .then(function (problems) {
            var triggerids = problems === null || problems === void 0 ? void 0 : problems.map(function (problem) { return problem.objectid; });
            return Promise.all([Promise.resolve(problems), _this.zabbixAPI.getTriggersByIds(triggerids)]);
        })
            .then(function (_a) {
            var problems = _a[0], triggers = _a[1];
            return Object(_problemsHandler__WEBPACK_IMPORTED_MODULE_9__["joinTriggersWithEvents"])(problems, triggers, { valueFromEvent: valueFromEvent });
        })
            .then(function (triggers) { return _this.filterTriggersByProxy(triggers, proxyFilter); })
            .then(function (triggers) { return _this.expandUserMacro.bind(_this)(triggers, true); });
    };
    Zabbix.prototype.filterTriggersByProxy = function (triggers, proxyFilter) {
        return this.getFilteredProxies(proxyFilter)
            .then(function (proxies) {
            if (proxyFilter && proxyFilter !== '/.*/' && triggers) {
                var proxy_ids_1 = proxies.map(function (proxy) { return proxy.proxyid; });
                triggers = triggers.filter(function (trigger) {
                    for (var i = 0; i < trigger.hosts.length; i++) {
                        var host = trigger.hosts[i];
                        if (proxy_ids_1.includes(host.proxy_hostid)) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            return triggers;
        });
    };
    Zabbix.prototype.getFilteredProxies = function (proxyFilter) {
        return this.zabbixAPI.getProxies()
            .then(function (proxies) {
            proxies.forEach(function (proxy) { return proxy.name = proxy.host; });
            return findByFilter(proxies, proxyFilter);
        });
    };
    Zabbix.prototype.getHistoryTS = function (items, timeRange, options) {
        var _this = this;
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        if (this.enableDirectDBConnection) {
            return this.getHistoryDB(items, timeFrom, timeTo, options)
                .then(function (history) { return _this.dbConnector.handleGrafanaTSResponse(history, items); });
        }
        else {
            return this.zabbixAPI.getHistory(items, timeFrom, timeTo)
                .then(function (history) { return _responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handleHistory(history, items); });
        }
    };
    Zabbix.prototype.getTrends = function (items, timeRange, options) {
        var _this = this;
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        if (this.enableDirectDBConnection) {
            return this.getTrendsDB(items, timeFrom, timeTo, options)
                .then(function (history) { return _this.dbConnector.handleGrafanaTSResponse(history, items); });
        }
        else {
            var valueType_1 = options.consolidateBy || options.valueType;
            return this.zabbixAPI.getTrend(items, timeFrom, timeTo)
                .then(function (history) { return _responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handleTrends(history, items, valueType_1); })
                .then(_responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].sortTimeseries); // Sort trend data, issue #202
        }
    };
    Zabbix.prototype.getHistoryText = function (items, timeRange, target) {
        var timeFrom = timeRange[0], timeTo = timeRange[1];
        if (items.length) {
            return this.zabbixAPI.getHistory(items, timeFrom, timeTo)
                .then(function (history) {
                if (target.resultFormat === 'table') {
                    return _responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handleHistoryAsTable(history, items, target);
                }
                else {
                    return _responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handleText(history, items, target);
                }
            });
        }
        else {
            return Promise.resolve([]);
        }
    };
    Zabbix.prototype.getSLA = function (itservices, timeRange, target, options) {
        var itServiceIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(itservices, 'serviceid');
        return this.zabbixAPI.getSLA(itServiceIds, timeRange, options)
            .then(function (slaResponse) {
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(itServiceIds, function (serviceid) {
                var itservice = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(itservices, { 'serviceid': serviceid });
                return _responseHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handleSLAResponse(itservice, target.slaProperty, slaResponse);
            });
        });
    };
    return Zabbix;
}());

///////////////////////////////////////////////////////////////////////////////
/**
 * Find group, host, app or item by given name.
 * @param  list list of groups, apps or other
 * @param  name visible name
 * @return      array with finded element or empty array
 */
function findByName(list, name) {
    var finded = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(list, { 'name': name });
    if (finded) {
        return [finded];
    }
    else {
        return [];
    }
}
/**
 * Different hosts can contains applications and items with same name.
 * For this reason use _.filter, which return all elements instead _.find,
 * which return only first finded.
 * @param  {[type]} list list of elements
 * @param  {[type]} name app name
 * @return {[type]}      array with finded element or empty array
 */
function filterByName(list, name) {
    var finded = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(list, { 'name': name });
    if (finded) {
        return finded;
    }
    else {
        return [];
    }
}
function filterByRegex(list, regex) {
    var filterPattern = _utils__WEBPACK_IMPORTED_MODULE_2__["buildRegex"](regex);
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(list, function (zbx_obj) {
        return filterPattern.test(zbx_obj.name);
    });
}
function findByFilter(list, filter) {
    if (_utils__WEBPACK_IMPORTED_MODULE_2__["isRegex"](filter)) {
        return filterByRegex(list, filter);
    }
    else {
        return findByName(list, filter);
    }
}
function filterByQuery(list, filter) {
    if (_utils__WEBPACK_IMPORTED_MODULE_2__["isRegex"](filter)) {
        return filterByRegex(list, filter);
    }
    else {
        return filterByName(list, filter);
    }
}
function getHostIds(items) {
    var hostIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(items, function (item) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(item.hosts, 'hostid');
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(hostIds));
}


/***/ }),

/***/ "./panel-triggers/migrations.ts":
/*!**************************************!*\
  !*** ./panel-triggers/migrations.ts ***!
  \**************************************/
/*! exports provided: CURRENT_SCHEMA_VERSION, getDefaultTarget, getDefaultTargetOptions, migratePanelSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_SCHEMA_VERSION", function() { return CURRENT_SCHEMA_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTarget", function() { return getDefaultTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTargetOptions", function() { return getDefaultTargetOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migratePanelSchema", function() { return migratePanelSchema; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./panel-triggers/utils.ts");
/* harmony import */ var _datasource_zabbix_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasource-zabbix/types */ "./datasource-zabbix/types.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// Actual schema version
var CURRENT_SCHEMA_VERSION = 8;
var getDefaultTarget = function (targets) {
    return {
        group: { filter: "" },
        host: { filter: "" },
        application: { filter: "" },
        trigger: { filter: "" },
        tags: { filter: "" },
        proxy: { filter: "" },
        refId: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNextRefIdChar"])(targets),
    };
};
function getDefaultTargetOptions() {
    return {
        hostsInMaintenance: true,
    };
}
function migratePanelSchema(panel) {
    var _a;
    if (isDefaultPanel(panel)) {
        return panel;
    }
    if (isEmptyPanel(panel)) {
        delete panel.targets;
        return panel;
    }
    var schemaVersion = getSchemaVersion(panel);
    // panel.schemaVersion = CURRENT_SCHEMA_VERSION;
    if (schemaVersion < 2) {
        panel.datasources = [panel.datasource];
        panel.targets = {};
        panel.targets[panel.datasources[0]] = panel.triggers;
        // delete old props
        delete panel.triggers;
        delete panel.datasource;
    }
    if (schemaVersion < 3) {
        // delete old props
        delete panel.lastChangeField;
        delete panel.infoField;
        delete panel.scroll;
        delete panel.hideHostsInMaintenance;
    }
    if (schemaVersion < 5) {
        if (panel.targets && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(panel.targets)) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(panel.targets, function (target) {
                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultsDeep(target, getDefaultTarget());
            });
        }
    }
    if (schemaVersion < 6) {
        if (panel.showEvents && panel.showEvents.value === '1') {
            panel.showEvents.value = 1;
        }
    }
    if (schemaVersion < 7) {
        var updatedTargets = [];
        for (var targetKey in panel.targets) {
            var target = panel.targets[targetKey];
            if (!isEmptyTarget(target) && !isInvalidTarget(target, targetKey)) {
                updatedTargets.push(__assign(__assign({}, target), { datasource: targetKey }));
            }
        }
        for (var _i = 0, updatedTargets_1 = updatedTargets; _i < updatedTargets_1.length; _i++) {
            var target = updatedTargets_1[_i];
            if (!target.refId) {
                target.refId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNextRefIdChar"])(updatedTargets);
            }
        }
        panel.targets = updatedTargets;
        delete panel.datasources;
    }
    if (schemaVersion < 8) {
        if (panel.targets.length === 1) {
            if (panel.targets[0].datasource) {
                panel.datasource = panel.targets[0].datasource;
                delete panel.targets[0].datasource;
            }
        }
        else if (panel.targets.length > 1) {
            // Mixed data sources
            panel.datasource = '-- Mixed --';
        }
        for (var _b = 0, _c = panel.targets; _b < _c.length; _b++) {
            var target = _c[_b];
            // set queryType to PROBLEMS
            target.queryType = 5;
            target.showProblems = migrateShowEvents(panel);
            target.options = migrateOptions(panel);
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(target.options, getDefaultTargetOptions());
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(target, { tags: { filter: "" } });
        }
        panel.sortProblems = ((_a = panel.sortTriggersBy) === null || _a === void 0 ? void 0 : _a.value) === 'priority' ? 'priority' : 'lastchange';
        delete panel.showEvents;
        delete panel.showTriggers;
        delete panel.hostsInMaintenance;
        delete panel.sortTriggersBy;
    }
    return panel;
}
function migrateOptions(panel) {
    var _a;
    var acknowledged = 2;
    if (panel.showTriggers === 'acknowledged') {
        acknowledged = 1;
    }
    else if (panel.showTriggers === 'unacknowledged') {
        acknowledged = 0;
    }
    // Default limit in Zabbix
    var limit = 1001;
    if (panel.limit && panel.limit !== 100) {
        limit = panel.limit;
    }
    return {
        hostsInMaintenance: panel.hostsInMaintenance,
        sortProblems: ((_a = panel.sortTriggersBy) === null || _a === void 0 ? void 0 : _a.value) === 'priority' ? 'priority' : 'default',
        minSeverity: 0,
        acknowledged: acknowledged,
        limit: limit,
    };
}
function migrateShowEvents(panel) {
    var _a, _b, _c, _d;
    if (((_a = panel.showEvents) === null || _a === void 0 ? void 0 : _a.value) === 1) {
        return _datasource_zabbix_types__WEBPACK_IMPORTED_MODULE_2__["ShowProblemTypes"].Problems;
    }
    else if (((_b = panel.showEvents) === null || _b === void 0 ? void 0 : _b.value) === 0 || ((_d = (_c = panel.showEvents) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length) > 1) {
        return _datasource_zabbix_types__WEBPACK_IMPORTED_MODULE_2__["ShowProblemTypes"].History;
    }
    else {
        return _datasource_zabbix_types__WEBPACK_IMPORTED_MODULE_2__["ShowProblemTypes"].Problems;
    }
}
function getSchemaVersion(panel) {
    return panel.schemaVersion || 1;
}
function isEmptyPanel(panel) {
    return !panel.datasource && !panel.datasources && !panel.triggers && isEmptyTargets(panel.targets);
}
function isEmptyTargets(targets) {
    return !targets || (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(targets) && (targets.length === 0 || targets.length === 1 && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(targets[0])));
}
function isDefaultPanel(panel) {
    return panel.targets && panel.targets.length === 1 && isDefaultTarget(panel.targets[0]);
}
function isDefaultTarget(target) {
    var _a, _b, _c, _d;
    return !((_a = target.group) === null || _a === void 0 ? void 0 : _a.filter) && !((_b = target.host) === null || _b === void 0 ? void 0 : _b.filter) && !((_c = target.application) === null || _c === void 0 ? void 0 : _c.filter) && !((_d = target.trigger) === null || _d === void 0 ? void 0 : _d.filter) && !target.queryType;
}
function isEmptyTarget(target) {
    return !target || !(target.group && target.host && target.application && target.trigger);
}
function isInvalidTarget(target, targetKey) {
    return target && target.refId === 'A' && targetKey === '0';
}


/***/ }),

/***/ "./panel-triggers/utils.ts":
/*!*********************************!*\
  !*** ./panel-triggers/utils.ts ***!
  \*********************************/
/*! exports provided: isNewProblem, formatLastChange, getNextRefIdChar, renderUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewProblem", function() { return isNewProblem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLastChange", function() { return formatLastChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextRefIdChar", function() { return getNextRefIdChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderUrl", function() { return renderUrl; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasource-zabbix/utils */ "./datasource-zabbix/utils.ts");



function isNewProblem(problem, highlightNewerThan) {
    try {
        var highlightIntervalMs = _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_2__["parseInterval"](highlightNewerThan);
        var durationSec = (Date.now() - problem.timestamp * 1000);
        return durationSec < highlightIntervalMs;
    }
    catch (e) {
        return false;
    }
}
var DEFAULT_TIME_FORMAT = "DD MMM YYYY HH:mm:ss";
function formatLastChange(lastchangeUnix, customFormat) {
    var timestamp = moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(lastchangeUnix);
    var format = customFormat || DEFAULT_TIME_FORMAT;
    var lastchange = timestamp.format(format);
    return lastchange;
}
var getNextRefIdChar = function (queries) {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(letters, function (refId) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.every(queries, function (other) {
            return other.refId !== refId;
        });
    });
};
function renderUrl(path, query) {
    if (query && Object.keys(query).length > 0) {
        path += '?' + toUrlParams(query);
    }
    return path;
}
function encodeURIComponentAsAngularJS(val, pctEncodeSpaces) {
    return encodeURIComponent(val)
        .replace(/%25/gi, '%2525') // Double-encode % symbol to make it properly decoded in Explore
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
}
function toUrlParams(a) {
    var s = [];
    var rbracket = /\[\]$/;
    var isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    var add = function (k, v) {
        v = typeof v === 'function' ? v() : v === null ? '' : v === undefined ? '' : v;
        if (typeof v !== 'boolean') {
            s[s.length] = encodeURIComponentAsAngularJS(k, true) + '=' + encodeURIComponentAsAngularJS(v, true);
        }
        else {
            s[s.length] = encodeURIComponentAsAngularJS(k, true);
        }
    };
    var buildParams = function (prefix, obj) {
        var i, len, key;
        if (prefix) {
            if (isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    if (rbracket.test(prefix)) {
                        add(prefix, obj[i]);
                    }
                    else {
                        buildParams(prefix, obj[i]);
                    }
                }
            }
            else if (obj && String(obj) === '[object Object]') {
                for (key in obj) {
                    buildParams(prefix + '[' + key + ']', obj[key]);
                }
            }
            else {
                add(prefix, obj);
            }
        }
        else if (isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                add(obj[i].name, obj[i].value);
            }
        }
        else {
            for (key in obj) {
                buildParams(key, obj[key]);
            }
        }
        return s;
    };
    return buildParams('', a).join('&');
}


/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "grafana/app/core/config":
/*!**********************************!*\
  !*** external "app/core/config" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_config__;

/***/ }),

/***/ "grafana/app/core/core":
/*!********************************!*\
  !*** external "app/core/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core__;

/***/ }),

/***/ "grafana/app/core/core_module":
/*!***************************************!*\
  !*** external "app/core/core_module" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_core_module__;

/***/ }),

/***/ "grafana/app/core/table_model":
/*!***************************************!*\
  !*** external "app/core/table_model" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_table_model__;

/***/ }),

/***/ "grafana/app/core/utils/datemath":
/*!******************************************!*\
  !*** external "app/core/utils/datemath" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__;

/***/ }),

/***/ "grafana/app/core/utils/kbn":
/*!*************************************!*\
  !*** external "app/core/utils/kbn" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map