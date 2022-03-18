define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","app/core/utils/datemath","app/plugins/sdk","lodash","moment","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./panel-triggers/module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getBorders.js":
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getBorders.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBorders; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) ? Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth) };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDecorations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getDecorations.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDecorations.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");













function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = Object(_getDecorations_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? clippingParent : Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element));
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0 };

  var offsets = {
    x: 0,
    y: 0 };


  if (!isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getDecorations.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getDecorations.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDecorations; });
/* harmony import */ var _getBorders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorders.js */ "../node_modules/@popperjs/core/lib/dom-utils/getBorders.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



 // Borders + scrollbars

function getDecorations(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var borders = Object(_getBorders_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isHTML = Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) === 'html';
  var winScrollBarX = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var x = element.clientWidth + borders.right;
  var y = element.clientHeight + borders.bottom; // HACK:
  // document.documentElement.clientHeight on iOS reports the height of the
  // viewport including the bottom bar, even if the bottom bar isn't visible.
  // If the difference between window innerHeight and html clientHeight is more
  // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
  // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
  //   is about 17px)
  // * The mobile bar is 114px tall

  if (isHTML && win.innerHeight - element.clientHeight > 50) {
    y = win.innerHeight - borders.bottom;
  }

  return {
    top: isHTML ? 0 : element.clientTop,
    right: // RTL scrollbar (scrolling containers only)
    element.clientLeft > borders.left ? borders.right : // LTR scrollbar
    isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
    bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
    left: isHTML ? winScrollBarX : element.clientLeft };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : element.document).documentElement;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCompositeRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");




function getDocumentRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var documentRect = Object(_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");






function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");


function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback
  );

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = win.innerWidth;
  var height = win.innerHeight; // We don't know which browsers have buggy or odd implementations of this, so
  // for now we're only applying it to iOS to fix the keyboard issue.
  // Investigation required

  if (visualViewport && /iPhone|iPod|iPad/.test(navigator.platform)) {
    width = visualViewport.width;
    height = visualViewport.height;
  }

  return {
    width: width,
    height: height,
    x: 0,
    y: 0 };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \******************************************************************/
/*! exports provided: isElement, isHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
                                          Element); */

function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
    HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}



/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
  overflow = _getComputedStyle.overflow,
  overflowX = _getComputedStyle.overflowX,
  overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");





function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) === 'body';
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/enums.js":
/*!***************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/enums.js ***!
  \***************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/index.js":
/*!***************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/index.js ***!
  \***************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, popperGenerator, createPopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "../node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "../node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "../node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "../node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "../node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_12__["modifierPhases"]; });















var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute' };


function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
  _generatorOptions$def = _generatorOptions.defaultModifiers,
  defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
  _generatorOptions$def2 = _generatorOptions.defaultOptions,
  defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper },

      attributes: {},
      styles: {} };

    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_11__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper) };
        // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_12__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
          marginTop = _getComputedStyle.marginTop,
          marginRight = _getComputedStyle.marginRight,
          marginBottom = _getComputedStyle.marginBottom,
          marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
        reference = _state$elements.reference,
        popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper) };
        // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
          fn = _state$orderedModifie.fn,
          _state$orderedModifie2 = _state$orderedModifie.options,
          _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
          name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance }) ||
            state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      } };


    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
        _ref3$options = _ref3.options,
        options = _ref3$options === void 0 ? {} : _ref3$options,
        effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options });


          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator();

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0' },

    arrow: {
      position: 'absolute' },

    reference: {} };

  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles'] });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!*************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
  name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
  options = _ref2.options,
  name = _ref2.name;
  var _options$element = options.element,
  arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
  _options$padding = options.padding,
  padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"])) };

} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'] });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \*********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto' };
// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
  y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0 };

}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
  popperRect = _ref2.popperRect,
  placement = _ref2.placement,
  offsets = _ref2.offsets,
  position = _ref2.position,
  gpuAcceleration = _ref2.gpuAcceleration,
  adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
  x = _roundOffsets.x,
  y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position },
  adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
  options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
  gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
  _options$adaptive = options.adaptive,
  adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration };


  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive })));

  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false })));

  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement });

} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {} });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true };


function effect(_ref) {
  var state = _ref.state,
  instance = _ref.instance,
  options = _ref.options;
  var _options$scroll = options.scroll,
  scroll = _options$scroll === void 0 ? true : _options$scroll,
  _options$resize = options.resize,
  resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {} });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "../node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
  options = _ref.options,
  name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
  checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
  _options$altAxis = options.altAxis,
  checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
  specifiedFallbackPlacements = options.fallbackPlacements,
  padding = options.padding,
  boundary = options.boundary,
  rootBoundary = options.rootBoundary,
  altBoundary = options.altBoundary,
  _options$flipVariatio = options.flipVariations,
  flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
  allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements }) :
    placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding });

    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false } });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0 };

  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x };

}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
  name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference' });

  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true });

  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped };

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped });

} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!**************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \**************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement })) :
  offset,
  skidding = _ref[0],
  distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding } :
  {
    x: skidding,
    y: distance };

}

function offset(_ref2) {
  var state = _ref2.state,
  options = _ref2.options,
  name = _ref2.name;
  var _options$offset = options.offset,
  offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
  x = _data$state$placement.x,
  y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "../node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
  name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement });

} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {} });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "../node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");











function preventOverflow(_ref) {
  var state = _ref.state,
  options = _ref.options,
  name = _ref.name;
  var _options$mainAxis = options.mainAxis,
  checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
  _options$altAxis = options.altAxis,
  checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
  boundary = options.boundary,
  rootBoundary = options.rootBoundary,
  altBoundary = options.altBoundary,
  padding = options.padding,
  _options$tether = options.tether,
  tether = _options$tether === void 0 ? true : _options$tether,
  _options$tetherOffset = options.tetherOffset,
  tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary });

  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement })) :
  tetherOffset;
  var data = {
    x: 0,
    y: 0 };


  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0 };

    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset'] });

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/popper.js":
/*!****************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/popper.js ***!
  \****************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../node_modules/@popperjs/core/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "../node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "../node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "../node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "../node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "../node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "../node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "../node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });












var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers });
// eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
  placement = _options.placement,
  boundary = _options.boundary,
  rootBoundary = _options.rootBoundary,
  padding = _options.padding,
  flipVariations = _options.flipVariations,
  _options$allowedAutoP = _options.allowedAutoPlacements,
  allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = (variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"]).filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  }); // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding })[
    Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
  element = _ref.element,
  placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height };

      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height };

      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY };

      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY };

      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y };}



  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:}

  }

  return offsets;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/debounce.js":
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "../node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
  _options$placement = _options.placement,
  placement = _options$placement === void 0 ? state.placement : _options$placement,
  _options$boundary = _options.boundary,
  boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
  _options$rootBoundary = _options.rootBoundary,
  rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
  _options$elementConte = _options.elementContext,
  elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
  _options$altBoundary = _options.altBoundary,
  altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
  _options$padding = _options.padding,
  padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement });

  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, {}, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right };

  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/format.js":
/*!**********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/format.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!**************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0 };

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom' };

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start' };

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!****************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!***************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
      options: Object.assign({}, existing.options, {}, current.options),
      data: Object.assign({}, existing.data, {}, current.data) }) :
    current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), {}, paddingObject);
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!******************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height });

}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "../node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");}


      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/utils/within.js":
/*!**********************************************************!*\
  !*** ../node_modules/@popperjs/core/lib/utils/within.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);} /*!
                                                                                                                                                                                                                                                                                                                                                                                 Copyright (c) 2017 Jed Watson.
                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the MIT License (MIT), see
                                                                                                                                                                                                                                                                                                                                                                                 http://jedwatson.github.io/classnames
                                                                                                                                                                                                                                                                                                                                                                               */
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !==
    'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
            (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
            'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');

            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
          (componentName || 'React class') + ': type specification of ' +
          location + ' `' + typeSpecName + '` is invalid; the type checker ' +
          'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' +
          'You may have forgotten to pass an argument to the type checker ' +
          'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
          'shape all require an argument).');

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
          'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));

        }
      }
    }
  }
}

/**
   * Resets warning cache when testing.
   *
   * @private
   */
checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}

var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker };


  /**
                                            * inlined Object.is polyfill to avoid requiring consumers ship their own
                                            * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
                                            */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
                                     * We use an Error-like object for backward compatibility as people may call
                                     * PropTypes directly and inspect their output. However, we don't use real
                                     * Errors anymore. We don't inspect their stack anyway, and creating them
                                     * is prohibitively expensive if they are created too often, such as what
                                     * happens in oneOfType() for any type before the one that matched.
                                     */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use `PropTypes.checkPropTypes()` to call them. ' +
          'Read more at http://fb.me/use-check-prop-types');

          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
          !manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3)
          {
            printWarning(
            'You are manually calling a React.PropTypes validation ' +
            'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
            'and will throw in the standalone `prop-types` package. ' +
            'You may be seeing this warning due to a third-party PropTypes ' +
            'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');

            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
          'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
          'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');

        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
        'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
        'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');

        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
          '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
          '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));

        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;}

  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;}

  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../node_modules/querystringify/index.js":
/*!***********************************************!*\
  !*** ../node_modules/querystringify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
undef;

/**
        * Decode a URI encoded string.
        *
        * @param {String} input The URI encoded string.
        * @returns {String|Null} The decoded string.
        * @api private
        */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
   * Attempts to encode a given input.
   *
   * @param {String} input The string that needs to be encoded.
   * @returns {String|Null} The encoded string.
   * @api private
   */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
   * Simple query string parser.
   *
   * @param {String} query The query string that needs to be parsed.
   * @returns {Object}
   * @api public
   */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
  result = {},
  part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
    value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
   * Transform a query string to an object.
   *
   * @param {Object} obj Object that should be transformed.
   * @param {String} prefix Optional prefix.
   * @returns {String}
   * @api public
   */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [],
  value,
  key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ "../node_modules/react-fast-compare/index.js":
/*!***************************************************!*\
  !*** ../node_modules/react-fast-compare/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);} /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;}
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;}
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;}
      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;}
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (a[i] !== b[i]) return false;}
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;}
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}



if (true) {
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;}}




          case REACT_PORTAL_TYPE:
            return $$typeof;}

      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/Manager.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/Manager.js ***!
  \*******************************************************/
/*! exports provided: ManagerReferenceNodeContext, ManagerReferenceNodeSetterContext, Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeContext", function() { return ManagerReferenceNodeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeSetterContext", function() { return ManagerReferenceNodeSetterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ManagerReferenceNodeContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();
var ManagerReferenceNodeSetterContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();
function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
  referenceNode = _React$useState[0],
  setReferenceNode = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      setReferenceNode(null);
    };
  }, [setReferenceNode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ManagerReferenceNodeContext.Provider, {
    value: referenceNode },
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
    value: setReferenceNode },
  children));
}

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/Popper.js":
/*!******************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/Popper.js ***!
  \******************************************************/
/*! exports provided: Popper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return Popper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "../node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/react-popper/lib/esm/utils.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePopper */ "../node_modules/react-popper/lib/esm/usePopper.js");





var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
  placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
  _ref$strategy = _ref.strategy,
  strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
  _ref$modifiers = _ref.modifiers,
  modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
  referenceElement = _ref.referenceElement,
  onFirstUpdate = _ref.onFirstUpdate,
  innerRef = _ref.innerRef,
  children = _ref.children;
  var referenceNode = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Manager__WEBPACK_IMPORTED_MODULE_1__["ManagerReferenceNodeContext"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
  popperElement = _React$useState[0],
  setPopperElement = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
  arrowElement = _React$useState2[0],
  setArrowElement = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setRef"])(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement } }]) };



  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_3__["usePopper"])(referenceElement || referenceNode, popperElement, options),
  state = _usePopper.state,
  styles = _usePopper.styles,
  forceUpdate = _usePopper.forceUpdate,
  update = _usePopper.update;

  var childrenProps = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement },

      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE };

  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["unwrapArray"])(children)(childrenProps);
}

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/Reference.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/Reference.js ***!
  \*********************************************************/
/*! exports provided: Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager */ "../node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-popper/lib/esm/utils.js");




function Reference(_ref) {
  var children = _ref.children,
  innerRef = _ref.innerRef;
  var setReferenceNode = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Manager__WEBPACK_IMPORTED_MODULE_2__["ManagerReferenceNodeSetterContext"]);
  var refHandler = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (node) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setRef"])(innerRef, node);
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["safeInvoke"])(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setRef"])(innerRef, null);
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["unwrapArray"])(children)({
    ref: refHandler });

}

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/index.js ***!
  \*****************************************************/
/*! exports provided: Popper, Manager, Reference, usePopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "../node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["Popper"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "../node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["Manager"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "../node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]; });

/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePopper */ "../node_modules/react-popper/lib/esm/usePopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopper", function() { return _usePopper__WEBPACK_IMPORTED_MODULE_3__["usePopper"]; });

// Public components




 // Public types

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/usePopper.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/usePopper.js ***!
  \*********************************************************/
/*! exports provided: usePopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopper", function() { return usePopper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "../node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ "../node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-popper/lib/esm/utils.js");




var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS };


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0' } },


    attributes: {} }),

  state = _React$useState[0],
  setState = _React$useState[1];

  var updateStateModifier = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        setState({
          styles: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fromEntries"])(elements.map(function (element) {
            return [element, state.styles[element] || {}];
          })),
          attributes: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fromEntries"])(elements.map(function (element) {
            return [element, state.attributes[element]];
          })) });

      },
      requires: ['computeStyles'] };

  }, []);
  var popperOptions = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false }]) };



    if (react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || _popperjs_core__WEBPACK_IMPORTED_MODULE_1__["createPopper"];
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null };

};

/***/ }),

/***/ "../node_modules/react-popper/lib/esm/utils.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/utils.js ***!
  \*****************************************************/
/*! exports provided: unwrapArray, safeInvoke, setRef, fromEntries, useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEntries", function() { return fromEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
                                 * Takes an argument and if it's an array, returns the first item in the array,
                                 * otherwise returns the argument. Used for Preact compatibility.
                                 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
    * Takes a maybe-undefined function and arbitrary args and invokes the function
    * only if it is defined.
    */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
    * Sets a ref using either a ref callback or a ref object
    */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
    * Simple ponyfill for Object.fromEntries
    */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
    value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
    * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
    */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "../node_modules/react-table-6/es/defaultProps.js":
/*!********************************************************!*\
  !*** ../node_modules/react-table-6/es/defaultProps.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/react-table-6/es/utils.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ "../node_modules/react-table-6/es/pagination.js");
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



//



var emptyObj = function emptyObj() {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // General
  data: [],
  resolveData: function resolveData(data) {
    return data;
  },
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPage: 0,
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: function defaultSortMethod(a, b, desc) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    Placeholder: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    minResizeWidth: 11,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined },


  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35 },


  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',
  pageJumpText: 'jump to page',
  rowsSelectorText: 'rows per page',

  // Components
  TableComponent: function TableComponent(_ref) {
    var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-table', className),
      role: 'grid'
      // tabIndex='0'
    }, rest),
    children);

  },
  TheadComponent: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].makeTemplateComponent('rt-thead', 'Thead'),
  TbodyComponent: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].makeTemplateComponent('rt-tbody', 'Tbody'),
  TrGroupComponent: function TrGroupComponent(_ref2) {
    var children = _ref2.children,
    className = _ref2.className,
    rest = _objectWithoutProperties(_ref2, ['children', 'className']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-tr-group', className), role: 'rowgroup' }, rest),
    children);

  },
  TrComponent: function TrComponent(_ref3) {
    var children = _ref3.children,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, ['children', 'className']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-tr', className), role: 'row' }, rest),
    children);

  },
  ThComponent: function ThComponent(_ref4) {
    var toggleSort = _ref4.toggleSort,
    className = _ref4.className,
    children = _ref4.children,
    rest = _objectWithoutProperties(_ref4, ['toggleSort', 'className', 'children']);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-th', className),
        onClick: function onClick(e) {
          return toggleSort && toggleSort(e);
        },
        role: 'columnheader',
        tabIndex: '-1' // Resolves eslint issues without implementing keyboard navigation incorrectly
      }, rest),
      children));


  },
  TdComponent: function TdComponent(_ref5) {
    var toggleSort = _ref5.toggleSort,
    className = _ref5.className,
    children = _ref5.children,
    rest = _objectWithoutProperties(_ref5, ['toggleSort', 'className', 'children']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-td', className), role: 'gridcell' }, rest),
    children);

  },
  TfootComponent: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].makeTemplateComponent('rt-tfoot', 'Tfoot'),
  FilterComponent: function FilterComponent(_ref6) {
    var filter = _ref6.filter,
    _onChange = _ref6.onChange,
    column = _ref6.column;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
      type: 'text',
      style: {
        width: '100%' },

      placeholder: column.Placeholder,
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      } });

  },
  ExpanderComponent: function ExpanderComponent(_ref7) {
    var isExpanded = _ref7.isExpanded;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rt-expander', isExpanded && '-open') },
    "\u2022");

  },
  PivotValueComponent: function PivotValueComponent(_ref8) {
    var subRows = _ref8.subRows,
    value = _ref8.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    null,
    value,
    ' ',
    subRows && '(' + subRows.length + ')');

  },
  AggregatedComponent: function AggregatedComponent(_ref9) {
    var subRows = _ref9.subRows,
    column = _ref9.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { key: i },
        row[column.id],
        i < subRows.length - 1 ? ', ' : ''));


    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    null,
    previewValues);

  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _pagination__WEBPACK_IMPORTED_MODULE_3__["default"],
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref10) {
    var className = _ref10.className,
    loading = _ref10.loading,
    loadingText = _ref10.loadingText,
    rest = _objectWithoutProperties(_ref10, ['className', 'loading', 'loadingText']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-loading', { '-active': loading }, className) }, rest),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: '-loading-inner' },
    loadingText));


  },
  NoDataComponent: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    null,
    '\xA0');

  } });

/***/ }),

/***/ "../node_modules/react-table-6/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/react-table-6/es/index.js ***!
  \*************************************************/
/*! exports provided: ReactTableDefaults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactTableDefaults", function() { return ReactTableDefaults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/react-table-6/es/utils.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle */ "../node_modules/react-table-6/es/lifecycle.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods */ "../node_modules/react-table-6/es/methods.js");
/* harmony import */ var _defaultProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultProps */ "../node_modules/react-table-6/es/defaultProps.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propTypes */ "../node_modules/react-table-6/es/propTypes.js");
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();

var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;}

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}



//






var ReactTableDefaults = _defaultProps__WEBPACK_IMPORTED_MODULE_5__["default"];

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: props.defaultPage,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false };

    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
      className = resolvedState.className,
      style = resolvedState.style,
      getProps = resolvedState.getProps,
      getTableProps = resolvedState.getTableProps,
      getTheadGroupProps = resolvedState.getTheadGroupProps,
      getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
      getTheadGroupThProps = resolvedState.getTheadGroupThProps,
      getTheadProps = resolvedState.getTheadProps,
      getTheadTrProps = resolvedState.getTheadTrProps,
      getTheadThProps = resolvedState.getTheadThProps,
      getTheadFilterProps = resolvedState.getTheadFilterProps,
      getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
      getTheadFilterThProps = resolvedState.getTheadFilterThProps,
      getTbodyProps = resolvedState.getTbodyProps,
      getTrGroupProps = resolvedState.getTrGroupProps,
      getTrProps = resolvedState.getTrProps,
      getTdProps = resolvedState.getTdProps,
      getTfootProps = resolvedState.getTfootProps,
      getTfootTrProps = resolvedState.getTfootTrProps,
      getTfootTdProps = resolvedState.getTfootTdProps,
      getPaginationProps = resolvedState.getPaginationProps,
      getLoadingProps = resolvedState.getLoadingProps,
      getNoDataProps = resolvedState.getNoDataProps,
      getResizerProps = resolvedState.getResizerProps,
      showPagination = resolvedState.showPagination,
      showPaginationTop = resolvedState.showPaginationTop,
      showPaginationBottom = resolvedState.showPaginationBottom,
      manual = resolvedState.manual,
      loadingText = resolvedState.loadingText,
      noDataText = resolvedState.noDataText,
      sortable = resolvedState.sortable,
      multiSort = resolvedState.multiSort,
      resizable = resolvedState.resizable,
      filterable = resolvedState.filterable,
      pivotIDKey = resolvedState.pivotIDKey,
      pivotValKey = resolvedState.pivotValKey,
      pivotBy = resolvedState.pivotBy,
      subRowsKey = resolvedState.subRowsKey,
      aggregatedKey = resolvedState.aggregatedKey,
      originalKey = resolvedState.originalKey,
      indexKey = resolvedState.indexKey,
      groupedByPivotKey = resolvedState.groupedByPivotKey,
      loading = resolvedState.loading,
      pageSize = resolvedState.pageSize,
      page = resolvedState.page,
      sorted = resolvedState.sorted,
      filtered = resolvedState.filtered,
      resized = resolvedState.resized,
      expanded = resolvedState.expanded,
      pages = resolvedState.pages,
      onExpandedChange = resolvedState.onExpandedChange,
      TableComponent = resolvedState.TableComponent,
      TheadComponent = resolvedState.TheadComponent,
      TbodyComponent = resolvedState.TbodyComponent,
      TrGroupComponent = resolvedState.TrGroupComponent,
      TrComponent = resolvedState.TrComponent,
      ThComponent = resolvedState.ThComponent,
      TdComponent = resolvedState.TdComponent,
      TfootComponent = resolvedState.TfootComponent,
      PaginationComponent = resolvedState.PaginationComponent,
      LoadingComponent = resolvedState.LoadingComponent,
      SubComponent = resolvedState.SubComponent,
      NoDataComponent = resolvedState.NoDataComponent,
      ResizerComponent = resolvedState.ResizerComponent,
      ExpanderComponent = resolvedState.ExpanderComponent,
      PivotValueComponent = resolvedState.PivotValueComponent,
      PivotComponent = resolvedState.PivotComponent,
      AggregatedComponent = resolvedState.AggregatedComponent,
      FilterComponent = resolvedState.FilterComponent,
      PadRowComponent = resolvedState.PadRowComponent,
      resolvedData = resolvedState.resolvedData,
      allVisibleColumns = resolvedState.allVisibleColumns,
      headerGroups = resolvedState.headerGroups,
      hasHeaderGroups = resolvedState.hasHeaderGroups,
      sortedData = resolvedState.sortedData,
      currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index });

          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils__WEBPACK_IMPORTED_MODULE_2__["default"].get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };

      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth });


      var rootProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].sum(column.columns.map(function (col) {
          return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].sum(column.columns.map(function (col) {
          return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
          maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) };


        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes),
          style: _extends({}, styles, flexStyles) },
        rest),
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(column.Header, {
          data: sortedData,
          column: column }));


      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-headerGroups', theadGroupProps.className),
          style: _extends({}, theadGroupProps.style, {
            minWidth: rowMinWidth + 'px' }) },

        theadGroupProps.rest),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        _extends({
          className: theadGroupTrProps.className,
          style: theadGroupTrProps.style },
        theadGroupTrProps.rest),
        headerGroups.map(makeHeaderGroup)));


      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          } },
        getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(column.sortable, sortable, false);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
          style: _extends({}, styles, {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) }),

          toggleSort: function toggleSort(e) {
            if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
          } },
        rest),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(isResizable && 'rt-resizable-header-content') },
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(column.Header, {
          data: sortedData,
          column: column })),


        resizer);

      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-header', theadProps.className),
          style: _extends({}, theadProps.style, {
            minWidth: rowMinWidth + 'px' }) },

        theadProps.rest),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        _extends({
          className: theadTrProps.className,
          style: theadTrProps.style },
        theadTrProps.rest),
        allVisibleColumns.map(makeHeader)));


      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(column.filterable, filterable, false);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        ThComponent,
        _extends({
          key: i + '-' + column.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes),
          style: _extends({}, styles, {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) }) },

        rest),
        isFilterable ? _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(ResolvedFilterComponent, {
          column: column,
          filter: filter,
          onChange: function onChange(value) {
            return _this2.filterColumn(column, value);
          } },
        _defaultProps__WEBPACK_IMPORTED_MODULE_5__["default"].column.Filter) : null);

      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TheadComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-filters', theadFilterProps.className),
          style: _extends({}, theadFilterProps.style, {
            minWidth: rowMinWidth + 'px' }) },

        theadFilterProps.rest),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        _extends({
          className: theadFilterTrProps.className,
          style: theadFilterTrProps.style },
        theadFilterTrProps.rest),
        allVisibleColumns.map(makeFilter)));


      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey] };

        var isExpanded = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrGroupComponent,
        _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
          style: trProps.style },
        trProps.rest),
        allVisibleColumns.map(function (column, i2) {
          var resizedCol = resized.find(function (x) {
            return x.id === column.id;
          }) || {};
          var show = typeof column.show === 'function' ? column.show() : column.show;
          var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
          var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
          var tdProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTdProps(finalState, rowInfo, column, _this2));
          var columnProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getProps(finalState, rowInfo, column, _this2));

          var classes = [tdProps.className, column.className, columnProps.className];

          var styles = _extends({}, tdProps.style, column.style, columnProps.style);

          var cellInfo = _extends({}, rowInfo, {
            isExpanded: isExpanded,
            column: _extends({}, column),
            value: rowInfo.row[column.id],
            pivoted: column.pivoted,
            expander: column.expander,
            resized: resized,
            show: show,
            width: width,
            maxWidth: maxWidth,
            tdProps: tdProps,
            columnProps: columnProps,
            classes: classes,
            styles: styles });


          var value = cellInfo.value;

          var useOnExpanderClick = void 0;
          var isBranch = void 0;
          var isPreview = void 0;

          var onExpanderClick = function onExpanderClick(e) {
            var newExpanded = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].clone(expanded);
            if (isExpanded) {
              newExpanded = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].set(newExpanded, cellInfo.nestingPath, false);
            } else {
              newExpanded = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].set(newExpanded, cellInfo.nestingPath, {});
            }

            return _this2.setStateWithData({
              expanded: newExpanded },
            function () {
              return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e, cellInfo);
            });
          };

          // Default to a standard cell
          var resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(column.Cell, cellInfo, value);

          // Resolve Renderers
          var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
          var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
          var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
          var DefaultResolvedPivotComponent = PivotComponent || function (props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedExpanderComponent, props),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResolvedPivotValueComponent, props));

          };
          var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

          // Is this cell expandable?
          if (cellInfo.pivoted || cellInfo.expander) {
            // Make it expandable by defualt
            cellInfo.expandable = true;
            useOnExpanderClick = true;
            // If pivoted, has no subRows, and does not have a subComponent,
            // do not make expandable
            if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
              cellInfo.expandable = false;
            }
          }

          if (cellInfo.pivoted) {
            // Is this column a branch?
            isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
            // Should this column be blank?
            isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
            // Pivot Cell Render Override
            if (isBranch) {
              // isPivot
              resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                value: row[pivotValKey] }),
              row[pivotValKey]);
            } else if (isPreview) {
              // Show the pivot preview
              resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
            } else {
              resolvedCell = null;
            }
          } else if (cellInfo.aggregated) {
            resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
          }

          if (cellInfo.expander) {
            resolvedCell = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
            if (pivotBy) {
              if (cellInfo.groupedByPivot) {
                resolvedCell = null;
              }
              if (!cellInfo.subRows && !SubComponent) {
                resolvedCell = null;
              }
            }
          }

          var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

          // If there are multiple onClick events, make sure they don't
          // override eachother. This should maybe be expanded to handle all
          // function attributes
          var interactionProps = {
            onClick: resolvedOnExpanderClick };


          if (tdProps.rest.onClick) {
            interactionProps.onClick = function (e) {
              tdProps.rest.onClick(e, function () {
                return resolvedOnExpanderClick(e);
              });
            };
          }

          if (columnProps.rest.onClick) {
            interactionProps.onClick = function (e) {
              columnProps.rest.onClick(e, function () {
                return resolvedOnExpanderClick(e);
              });
            };
          }

          // Return the cell
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TdComponent
          // eslint-disable-next-line react/no-array-index-key
          ,
          _extends({ key: i2 + '-' + column.id,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes, !cellInfo.expandable && !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
              maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) }) },

          tdProps.rest, columnProps.rest, interactionProps),
          resolvedCell);

        })),

        rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
          return makePageRow(d, i, rowInfo.nestingPath);
        }),
        SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo, function () {
          var newExpanded = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].clone(expanded);

          _utils__WEBPACK_IMPORTED_MODULE_2__["default"].set(newExpanded, rowInfo.nestingPath, false);
        }));

      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes, !show && 'hidden'),
          style: _extends({}, styles, {
            flex: flex + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) }) },

        tdProps.rest),
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(PadRowComponent));

      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrGroupComponent,
        _extends({ key: 'pad-' + i }, trGroupProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
          style: trProps.style || {} },

        allVisibleColumns.map(makePadColumn)));


      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTfootTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TdComponent,
        _extends({
          key: i + '-' + column.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes, !show && 'hidden'),
          style: _extends({}, styles, {
            flex: width + ' 0 auto',
            width: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(width),
            maxWidth: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].asPx(maxWidth) }) },

        columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(column.Footer, {
          data: sortedData,
          column: column }));


      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTfootProps(finalState, undefined, undefined, _this2));
        var tFootTrProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TfootComponent,
        _extends({
          className: tFootProps.className,
          style: _extends({}, tFootProps.style, {
            minWidth: rowMinWidth + 'px' }) },

        tFootProps.rest),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TrComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(tFootTrProps.className),
          style: tFootTrProps.style },
        tFootTrProps.rest),
        allVisibleColumns.map(makeColumnFooter)));


      };

      var makePagination = function makePagination(isTop) {
        var paginationProps = _utils__WEBPACK_IMPORTED_MODULE_2__["default"].splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style,
          isTop: isTop },
        paginationProps.rest));
      };

      var makeTable = function makeTable() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ReactTable', className, rootProps.className),
          style: _extends({}, style, rootProps.style) },
        rootProps.rest),
        showPagination && showPaginationTop ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'pagination-top' },
        makePagination(true)) :
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TableComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
          style: tableProps.style },
        tableProps.rest),
        hasHeaderGroups ? makeHeaderGroups() : null,
        makeHeaders(),
        hasFilters ? makeFilters() : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        TbodyComponent,
        _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(tBodyProps.className),
          style: _extends({}, tBodyProps.style, {
            minWidth: rowMinWidth + 'px' }) },

        tBodyProps.rest),
        pageRows.map(function (d, i) {
          return makePageRow(d, i);
        }),
        padRows.map(makePadRow)),

        hasColumnFooter ? makeColumnFooters() : null),

        showPagination && showPaginationBottom ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'pagination-bottom' },
        makePagination(false)) :
        null,
        !pageRows.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        NoDataComponent,
        noDataProps,
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].normalizeComponent(noDataText)),

        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingComponent, _extends({ loading: loading, loadingText: loadingText }, loadingProps)));

      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    } }]);


  return ReactTable;
}(Object(_methods__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_lifecycle__WEBPACK_IMPORTED_MODULE_3__["default"])(react__WEBPACK_IMPORTED_MODULE_0__["Component"])));

ReactTable.propTypes = _propTypes__WEBPACK_IMPORTED_MODULE_6__["default"];
ReactTable.defaultProps = _defaultProps__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ReactTable);

/***/ }),

/***/ "../node_modules/react-table-6/es/lifecycle.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-table-6/es/lifecycle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;}

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/* harmony default export */ __webpack_exports__["default"] = (function (Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'UNSAFE_componentWillMount',
      value: function UNSAFE_componentWillMount() {
        this.setStateWithData(this.getDataModel(this.getResolvedState(), true));
      } },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fireFetchData();
      } },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        var oldState = this.getResolvedState();
        var newState = this.getResolvedState(nextProps, nextState);

        // Do a deep compare of new and old `defaultOption` and
        // if they are different reset `option = defaultOption`
        var defaultableOptions = ['sorted', 'filtered', 'resized', 'expanded'];
        defaultableOptions.forEach(function (x) {
          var defaultName = 'default' + (x.charAt(0).toUpperCase() + x.slice(1));
          if (JSON.stringify(oldState[defaultName]) !== JSON.stringify(newState[defaultName])) {
            newState[x] = newState[defaultName];
          }
        });

        // If they change these table options, we need to reset defaults
        // or else we could get into a state where the user has changed the UI
        // and then disabled the ability to change it back.
        // e.g. If `filterable` has changed, set `filtered = defaultFiltered`
        var resettableOptions = ['sortable', 'filterable', 'resizable'];
        resettableOptions.forEach(function (x) {
          if (oldState[x] !== newState[x]) {
            var baseName = x.replace('able', '');
            var optionName = baseName + 'ed';
            var defaultName = 'default' + (optionName.charAt(0).toUpperCase() + optionName.slice(1));
            newState[optionName] = newState[defaultName];
          }
        });

        // Props that trigger a data update
        if (oldState.data !== newState.data || oldState.columns !== newState.columns || oldState.pivotBy !== newState.pivotBy || oldState.sorted !== newState.sorted || oldState.filtered !== newState.filtered) {
          this.setStateWithData(this.getDataModel(newState, oldState.data !== newState.data));
        }
      } },
    {
      key: 'setStateWithData',
      value: function setStateWithData(newState, cb) {
        var _this2 = this;

        var oldState = this.getResolvedState();
        var newResolvedState = this.getResolvedState({}, newState);
        var freezeWhenExpanded = newResolvedState.freezeWhenExpanded;

        // Default to unfrozen state

        newResolvedState.frozen = false;

        // If freezeWhenExpanded is set, check for frozen conditions
        if (freezeWhenExpanded) {
          // if any rows are expanded, freeze the existing data and sorting
          var keys = Object.keys(newResolvedState.expanded);
          for (var i = 0; i < keys.length; i += 1) {
            if (newResolvedState.expanded[keys[i]]) {
              newResolvedState.frozen = true;
              break;
            }
          }
        }

        // If the data isn't frozen and either the data or
        // sorting model has changed, update the data
        if (oldState.frozen && !newResolvedState.frozen || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData) {
          // Handle collapseOnsortedChange & collapseOnDataChange
          if (oldState.sorted !== newResolvedState.sorted && this.props.collapseOnSortingChange || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || oldState.sortedData && !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData && this.props.collapseOnDataChange) {
            newResolvedState.expanded = {};
          }

          Object.assign(newResolvedState, this.getSortedData(newResolvedState));
        }

        // Set page to 0 if filters change
        if (oldState.filtered !== newResolvedState.filtered) {
          newResolvedState.page = 0;
        }

        // Calculate pageSize all the time
        if (newResolvedState.sortedData) {
          newResolvedState.pages = newResolvedState.manual ? newResolvedState.pages : Math.ceil(newResolvedState.sortedData.length / newResolvedState.pageSize);
          newResolvedState.page = newResolvedState.manual ? newResolvedState.page : Math.max(newResolvedState.page >= newResolvedState.pages ? newResolvedState.pages - 1 : newResolvedState.page, 0);
        }

        return this.setState(newResolvedState, function () {
          if (cb) {
            cb();
          }
          if (oldState.page !== newResolvedState.page || oldState.pageSize !== newResolvedState.pageSize || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered) {
            _this2.fireFetchData();
          }
        });
      } }]);


    return _class;
  }(Base);
});

/***/ }),

/***/ "../node_modules/react-table-6/es/methods.js":
/*!***************************************************!*\
  !*** ../node_modules/react-table-6/es/methods.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-table-6/es/utils.js");
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();

var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;}

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}




/* harmony default export */ __webpack_exports__["default"] = (function (Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'getResolvedState',
      value: function getResolvedState(props, state) {
        var resolvedState = _extends({}, _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(this.state), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(this.props), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(state), _utils__WEBPACK_IMPORTED_MODULE_1__["default"].compactObject(props));
        return resolvedState;
      } },
    {
      key: 'getDataModel',
      value: function getDataModel(newState, dataChanged) {
        var _this2 = this;

        var columns = newState.columns,
        _newState$pivotBy = newState.pivotBy,
        pivotBy = _newState$pivotBy === undefined ? [] : _newState$pivotBy,
        data = newState.data,
        resolveData = newState.resolveData,
        pivotIDKey = newState.pivotIDKey,
        pivotValKey = newState.pivotValKey,
        subRowsKey = newState.subRowsKey,
        aggregatedKey = newState.aggregatedKey,
        nestingLevelKey = newState.nestingLevelKey,
        originalKey = newState.originalKey,
        indexKey = newState.indexKey,
        groupedByPivotKey = newState.groupedByPivotKey,
        SubComponent = newState.SubComponent;

        // Determine Header Groups

        var hasHeaderGroups = false;
        columns.forEach(function (column) {
          if (column.columns) {
            hasHeaderGroups = true;
          }
        });

        var columnsWithExpander = [].concat(_toConsumableArray(columns));

        var expanderColumn = columns.find(function (col) {
          return col.expander || col.columns && col.columns.some(function (col2) {
            return col2.expander;
          });
        });
        // The actual expander might be in the columns field of a group column
        if (expanderColumn && !expanderColumn.expander) {
          expanderColumn = expanderColumn.columns.find(function (col) {
            return col.expander;
          });
        }

        // If we have SubComponent's we need to make sure we have an expander column
        if (SubComponent && !expanderColumn) {
          expanderColumn = { expander: true };
          columnsWithExpander = [expanderColumn].concat(_toConsumableArray(columnsWithExpander));
        }

        var makeDecoratedColumn = function makeDecoratedColumn(column, parentColumn) {
          var dcol = void 0;
          if (column.expander) {
            dcol = _extends({}, _this2.props.column, _this2.props.expanderDefaults, column);
          } else {
            dcol = _extends({}, _this2.props.column, column);
          }

          // Ensure minWidth is not greater than maxWidth if set
          if (dcol.maxWidth < dcol.minWidth) {
            dcol.minWidth = dcol.maxWidth;
          }

          if (parentColumn) {
            dcol.parentColumn = parentColumn;
          }

          // First check for string accessor
          if (typeof dcol.accessor === 'string') {
            dcol.id = dcol.id || dcol.accessor;
            var accessorString = dcol.accessor;
            dcol.accessor = function (row) {
              return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].get(row, accessorString);
            };
            return dcol;
          }

          // Fall back to functional accessor (but require an ID)
          if (dcol.accessor && !dcol.id) {
            console.warn(dcol);
            throw new Error('A column id is required if using a non-string accessor for column above.');
          }

          // Fall back to an undefined accessor
          if (!dcol.accessor) {
            dcol.accessor = function () {
              return undefined;
            };
          }

          return dcol;
        };

        var allDecoratedColumns = [];

        // Decorate the columns
        var decorateAndAddToAll = function decorateAndAddToAll(column, parentColumn) {
          var decoratedColumn = makeDecoratedColumn(column, parentColumn);
          allDecoratedColumns.push(decoratedColumn);
          return decoratedColumn;
        };

        var decoratedColumns = columnsWithExpander.map(function (column) {
          if (column.columns) {
            return _extends({}, column, {
              columns: column.columns.map(function (d) {
                return decorateAndAddToAll(d, column);
              }) });

          }
          return decorateAndAddToAll(column);
        });

        // Build the visible columns, headers and flat column list
        var visibleColumns = decoratedColumns.slice();
        var allVisibleColumns = [];

        visibleColumns = visibleColumns.map(function (column) {
          if (column.columns) {
            var visibleSubColumns = column.columns.filter(function (d) {
              return pivotBy.indexOf(d.id) > -1 ? false : _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(d.show, true);
            });
            return _extends({}, column, {
              columns: visibleSubColumns });

          }
          return column;
        });

        visibleColumns = visibleColumns.filter(function (column) {
          return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(column.show, true);
        });

        // Find any custom pivot location
        var pivotIndex = visibleColumns.findIndex(function (col) {
          return col.pivot;
        });

        // Handle Pivot Columns
        if (pivotBy.length) {
          // Retrieve the pivot columns in the correct pivot order
          var pivotColumns = [];
          pivotBy.forEach(function (pivotID) {
            var found = allDecoratedColumns.find(function (d) {
              return d.id === pivotID;
            });
            if (found) {
              pivotColumns.push(found);
            }
          });

          var PivotParentColumn = pivotColumns.reduce(function (prev, current) {
            return prev && prev === current.parentColumn && current.parentColumn;
          }, pivotColumns[0].parentColumn);

          var PivotGroupHeader = hasHeaderGroups && PivotParentColumn.Header;
          PivotGroupHeader = PivotGroupHeader || function () {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'strong',
            null,
            'Pivoted');

          };

          var pivotColumnGroup = {
            Header: PivotGroupHeader,
            columns: pivotColumns.map(function (col) {
              return _extends({}, _this2.props.pivotDefaults, col, {
                pivoted: true });

            })

            // Place the pivotColumns back into the visibleColumns
          };if (pivotIndex >= 0) {
            pivotColumnGroup = _extends({}, visibleColumns[pivotIndex], pivotColumnGroup);
            visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
          } else {
            visibleColumns.unshift(pivotColumnGroup);
          }
        }

        // Build Header Groups
        var headerGroups = [];
        var currentSpan = [];

        // A convenience function to add a header and reset the currentSpan
        var addHeader = function addHeader(columns, column) {
          headerGroups.push(_extends({}, _this2.props.column, column, {
            columns: columns }));

          currentSpan = [];
        };

        // Build flast list of allVisibleColumns and HeaderGroups
        visibleColumns.forEach(function (column) {
          if (column.columns) {
            allVisibleColumns = allVisibleColumns.concat(column.columns);
            if (currentSpan.length > 0) {
              addHeader(currentSpan);
            }
            addHeader(column.columns, column);
            return;
          }
          allVisibleColumns.push(column);
          currentSpan.push(column);
        });
        if (hasHeaderGroups && currentSpan.length > 0) {
          addHeader(currentSpan);
        }

        // Access the data
        var accessRow = function accessRow(d, i) {
          var _row;

          var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          var row = (_row = {}, _defineProperty(_row, originalKey, d), _defineProperty(_row, indexKey, i), _defineProperty(_row, subRowsKey, d[subRowsKey]), _defineProperty(_row, nestingLevelKey, level), _row);
          allDecoratedColumns.forEach(function (column) {
            if (column.expander) return;
            row[column.id] = column.accessor(d);
          });
          if (row[subRowsKey]) {
            row[subRowsKey] = row[subRowsKey].map(function (d, i) {
              return accessRow(d, i, level + 1);
            });
          }
          return row;
        };

        // // If the data hasn't changed, just use the cached data
        var resolvedData = this.resolvedData;
        // If the data has changed, run the data resolver and cache the result
        if (!this.resolvedData || dataChanged) {
          resolvedData = resolveData(data);
          this.resolvedData = resolvedData;
        }
        // Use the resolved data
        resolvedData = resolvedData.map(function (d, i) {
          return accessRow(d, i);
        });

        // TODO: Make it possible to fabricate nested rows without pivoting
        var aggregatingColumns = allVisibleColumns.filter(function (d) {
          return !d.expander && d.aggregate;
        });

        // If pivoting, recursively group the data
        var aggregate = function aggregate(rows) {
          var aggregationValues = {};
          aggregatingColumns.forEach(function (column) {
            var values = rows.map(function (d) {
              return d[column.id];
            });
            aggregationValues[column.id] = column.aggregate(values, rows);
          });
          return aggregationValues;
        };
        if (pivotBy.length) {
          var groupRecursively = function groupRecursively(rows, keys) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            // This is the last level, just return the rows
            if (i === keys.length) {
              return rows;
            }
            // Group the rows together for this level
            var groupedRows = Object.entries(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].groupBy(rows, keys[i])).map(function (_ref) {
              var _ref3;

              var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

              return _ref3 = {}, _defineProperty(_ref3, pivotIDKey, keys[i]), _defineProperty(_ref3, pivotValKey, key), _defineProperty(_ref3, keys[i], key), _defineProperty(_ref3, subRowsKey, value), _defineProperty(_ref3, nestingLevelKey, i), _defineProperty(_ref3, groupedByPivotKey, true), _ref3;
            });
            // Recurse into the subRows
            groupedRows = groupedRows.map(function (rowGroup) {
              var _extends2;

              var subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
              return _extends({}, rowGroup, (_extends2 = {}, _defineProperty(_extends2, subRowsKey, subRows), _defineProperty(_extends2, aggregatedKey, true), _extends2), aggregate(subRows));
            });
            return groupedRows;
          };
          resolvedData = groupRecursively(resolvedData, pivotBy);
        }

        return _extends({}, newState, {
          resolvedData: resolvedData,
          allVisibleColumns: allVisibleColumns,
          headerGroups: headerGroups,
          allDecoratedColumns: allDecoratedColumns,
          hasHeaderGroups: hasHeaderGroups });

      } },
    {
      key: 'getSortedData',
      value: function getSortedData(resolvedState) {
        var manual = resolvedState.manual,
        sorted = resolvedState.sorted,
        filtered = resolvedState.filtered,
        defaultFilterMethod = resolvedState.defaultFilterMethod,
        resolvedData = resolvedState.resolvedData,
        allDecoratedColumns = resolvedState.allDecoratedColumns;


        var sortMethodsByColumnID = {};

        allDecoratedColumns.filter(function (col) {
          return col.sortMethod;
        }).forEach(function (col) {
          sortMethodsByColumnID[col.id] = col.sortMethod;
        });

        // Resolve the data from either manual data or sorted data
        return {
          sortedData: manual ? resolvedData : this.sortData(this.filterData(resolvedData, filtered, defaultFilterMethod, allDecoratedColumns), sorted, sortMethodsByColumnID) };

      } },
    {
      key: 'fireFetchData',
      value: function fireFetchData() {
        // determine the current state, preferring certain state values over props
        var currentState = _extends({}, this.getResolvedState(), {
          page: this.getStateOrProp('page'),
          pageSize: this.getStateOrProp('pageSize'),
          filtered: this.getStateOrProp('filtered') });


        this.props.onFetchData(currentState, this);
      } },
    {
      key: 'getPropOrState',
      value: function getPropOrState(key) {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(this.props[key], this.state[key]);
      } },
    {
      key: 'getStateOrProp',
      value: function getStateOrProp(key) {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(this.state[key], this.props[key]);
      } },
    {
      key: 'filterData',
      value: function filterData(data, filtered, defaultFilterMethod, allVisibleColumns) {
        var _this3 = this;

        var filteredData = data;

        if (filtered.length) {
          filteredData = filtered.reduce(function (filteredSoFar, nextFilter) {
            var column = allVisibleColumns.find(function (x) {
              return x.id === nextFilter.id;
            });

            // Don't filter hidden columns or columns that have had their filters disabled
            if (!column || column.filterable === false) {
              return filteredSoFar;
            }

            var filterMethod = column.filterMethod || defaultFilterMethod;

            // If 'filterAll' is set to true, pass the entire dataset to the filter method
            if (column.filterAll) {
              return filterMethod(nextFilter, filteredSoFar, column);
            }
            return filteredSoFar.filter(function (row) {
              return filterMethod(nextFilter, row, column);
            });
          }, filteredData);

          // Apply the filter to the subrows if we are pivoting, and then
          // filter any rows without subcolumns because it would be strange to show
          filteredData = filteredData.map(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return row;
            }
            return _extends({}, row, _defineProperty({}, _this3.props.subRowsKey, _this3.filterData(row[_this3.props.subRowsKey], filtered, defaultFilterMethod, allVisibleColumns)));
          }).filter(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return true;
            }
            return row[_this3.props.subRowsKey].length > 0;
          });
        }

        return filteredData;
      } },
    {
      key: 'sortData',
      value: function sortData(data, sorted) {
        var _this4 = this;

        var sortMethodsByColumnID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!sorted.length) {
          return data;
        }

        var sortedData = (this.props.orderByMethod || _utils__WEBPACK_IMPORTED_MODULE_1__["default"].orderBy)(data, sorted.map(function (sort) {
          // Support custom sorting methods for each column
          if (sortMethodsByColumnID[sort.id]) {
            return function (a, b) {
              return sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id], sort.desc);
            };
          }
          return function (a, b) {
            return _this4.props.defaultSortMethod(a[sort.id], b[sort.id], sort.desc);
          };
        }), sorted.map(function (d) {
          return !d.desc;
        }), this.props.indexKey);

        sortedData.forEach(function (row) {
          if (!row[_this4.props.subRowsKey]) {
            return;
          }
          row[_this4.props.subRowsKey] = _this4.sortData(row[_this4.props.subRowsKey], sorted, sortMethodsByColumnID);
        });

        return sortedData;
      } },
    {
      key: 'getMinRows',
      value: function getMinRows() {
        return _utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDefined(this.props.minRows, this.getStateOrProp('pageSize'));
      }

      // User actions
    },
    {
      key: 'onPageChange',
      value: function onPageChange(page) {
        var _props = this.props,
        onPageChange = _props.onPageChange,
        collapseOnPageChange = _props.collapseOnPageChange;


        var newState = { page: page };
        if (collapseOnPageChange) {
          newState.expanded = {};
        }
        this.setStateWithData(newState, function () {
          return onPageChange && onPageChange(page);
        });
      } },
    {
      key: 'onPageSizeChange',
      value: function onPageSizeChange(newPageSize) {
        var onPageSizeChange = this.props.onPageSizeChange;

        var _getResolvedState = this.getResolvedState(),
        pageSize = _getResolvedState.pageSize,
        page = _getResolvedState.page;

        // Normalize the page to display


        var currentRow = pageSize * page;
        var newPage = Math.floor(currentRow / newPageSize);

        this.setStateWithData({
          pageSize: newPageSize,
          page: newPage },
        function () {
          return onPageSizeChange && onPageSizeChange(newPageSize, newPage);
        });
      } },
    {
      key: 'sortColumn',
      value: function sortColumn(column, additive) {
        var _getResolvedState2 = this.getResolvedState(),
        sorted = _getResolvedState2.sorted,
        skipNextSort = _getResolvedState2.skipNextSort,
        defaultSortDesc = _getResolvedState2.defaultSortDesc;

        var firstSortDirection = Object.prototype.hasOwnProperty.call(column, 'defaultSortDesc') ? column.defaultSortDesc : defaultSortDesc;
        var secondSortDirection = !firstSortDirection;

        // we can't stop event propagation from the column resize move handlers
        // attached to the document because of react's synthetic events
        // so we have to prevent the sort function from actually sorting
        // if we click on the column resize element within a header.
        if (skipNextSort) {
          this.setStateWithData({
            skipNextSort: false });

          return;
        }

        var onSortedChange = this.props.onSortedChange;


        var newSorted = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].clone(sorted || []).map(function (d) {
          d.desc = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].isSortingDesc(d);
          return d;
        });
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(column)) {
          // Single-Sort
          var existingIndex = newSorted.findIndex(function (d) {
            return d.id === column.id;
          });
          if (existingIndex > -1) {
            var existing = newSorted[existingIndex];
            if (existing.desc === secondSortDirection) {
              if (additive) {
                newSorted.splice(existingIndex, 1);
              } else {
                existing.desc = firstSortDirection;
                newSorted = [existing];
              }
            } else {
              existing.desc = secondSortDirection;
              if (!additive) {
                newSorted = [existing];
              }
            }
          } else if (additive) {
            newSorted.push({
              id: column.id,
              desc: firstSortDirection });

          } else {
            newSorted = [{
              id: column.id,
              desc: firstSortDirection }];

          }
        } else {
          // Multi-Sort
          var _existingIndex = newSorted.findIndex(function (d) {
            return d.id === column[0].id;
          });
          // Existing Sorted Column
          if (_existingIndex > -1) {
            var _existing = newSorted[_existingIndex];
            if (_existing.desc === secondSortDirection) {
              if (additive) {
                newSorted.splice(_existingIndex, column.length);
              } else {
                column.forEach(function (d, i) {
                  newSorted[_existingIndex + i].desc = firstSortDirection;
                });
              }
            } else {
              column.forEach(function (d, i) {
                newSorted[_existingIndex + i].desc = secondSortDirection;
              });
            }
            if (!additive) {
              newSorted = newSorted.slice(_existingIndex, column.length);
            }
            // New Sort Column
          } else if (additive) {
            newSorted = newSorted.concat(column.map(function (d) {
              return {
                id: d.id,
                desc: firstSortDirection };

            }));
          } else {
            newSorted = column.map(function (d) {
              return {
                id: d.id,
                desc: firstSortDirection };

            });
          }
        }

        this.setStateWithData({
          page: !sorted.length && newSorted.length || !additive ? 0 : this.state.page,
          sorted: newSorted },
        function () {
          return onSortedChange && onSortedChange(newSorted, column, additive);
        });
      } },
    {
      key: 'filterColumn',
      value: function filterColumn(column, value) {
        var _getResolvedState3 = this.getResolvedState(),
        filtered = _getResolvedState3.filtered;

        var onFilteredChange = this.props.onFilteredChange;

        // Remove old filter first if it exists

        var newFiltering = (filtered || []).filter(function (x) {
          return x.id !== column.id;
        });

        if (value !== '') {
          newFiltering.push({
            id: column.id,
            value: value });

        }

        this.setStateWithData({
          filtered: newFiltering },
        function () {
          return onFilteredChange && onFilteredChange(newFiltering, column, value);
        });
      } },
    {
      key: 'resizeColumnStart',
      value: function resizeColumnStart(event, column, isTouch) {
        var _this5 = this;

        event.stopPropagation();
        var parentWidth = event.target.parentElement.getBoundingClientRect().width;

        var pageX = void 0;
        if (isTouch) {
          pageX = event.changedTouches[0].pageX;
        } else {
          pageX = event.pageX;
        }

        this.trapEvents = true;
        this.setStateWithData({
          currentlyResizing: {
            id: column.id,
            startX: pageX,
            parentWidth: parentWidth } },

        function () {
          if (isTouch) {
            document.addEventListener('touchmove', _this5.resizeColumnMoving);
            document.addEventListener('touchcancel', _this5.resizeColumnEnd);
            document.addEventListener('touchend', _this5.resizeColumnEnd);
          } else {
            document.addEventListener('mousemove', _this5.resizeColumnMoving);
            document.addEventListener('mouseup', _this5.resizeColumnEnd);
            document.addEventListener('mouseleave', _this5.resizeColumnEnd);
          }
        });
      } },
    {
      key: 'resizeColumnMoving',
      value: function resizeColumnMoving(event) {
        event.stopPropagation();
        var _props2 = this.props,
        onResizedChange = _props2.onResizedChange,
        column = _props2.column;

        var _getResolvedState4 = this.getResolvedState(),
        resized = _getResolvedState4.resized,
        currentlyResizing = _getResolvedState4.currentlyResizing,
        columns = _getResolvedState4.columns;

        var currentColumn = columns.find(function (c) {
          return c.accessor === currentlyResizing.id || c.id === currentlyResizing.id;
        });
        var minResizeWidth = currentColumn && currentColumn.minResizeWidth != null ? currentColumn.minResizeWidth : column.minResizeWidth;

        // Delete old value
        var newResized = resized.filter(function (x) {
          return x.id !== currentlyResizing.id;
        });

        var pageX = void 0;

        if (event.type === 'touchmove') {
          pageX = event.changedTouches[0].pageX;
        } else if (event.type === 'mousemove') {
          pageX = event.pageX;
        }

        var newWidth = Math.max(currentlyResizing.parentWidth + pageX - currentlyResizing.startX, minResizeWidth);

        newResized.push({
          id: currentlyResizing.id,
          value: newWidth });


        this.setStateWithData({
          resized: newResized },
        function () {
          return onResizedChange && onResizedChange(newResized, event);
        });
      } },
    {
      key: 'resizeColumnEnd',
      value: function resizeColumnEnd(event) {
        event.stopPropagation();
        var isTouch = event.type === 'touchend' || event.type === 'touchcancel';

        if (isTouch) {
          document.removeEventListener('touchmove', this.resizeColumnMoving);
          document.removeEventListener('touchcancel', this.resizeColumnEnd);
          document.removeEventListener('touchend', this.resizeColumnEnd);
        }

        // If its a touch event clear the mouse one's as well because sometimes
        // the mouseDown event gets called as well, but the mouseUp event doesn't
        document.removeEventListener('mousemove', this.resizeColumnMoving);
        document.removeEventListener('mouseup', this.resizeColumnEnd);
        document.removeEventListener('mouseleave', this.resizeColumnEnd);

        // The touch events don't propagate up to the sorting's onMouseDown event so
        // no need to prevent it from happening or else the first click after a touch
        // event resize will not sort the column.
        if (!isTouch) {
          this.setStateWithData({
            skipNextSort: true,
            currentlyResizing: false });

        }
      } }]);


    return _class;
  }(Base);
});

/***/ }),

/***/ "../node_modules/react-table-6/es/pagination.js":
/*!******************************************************!*\
  !*** ../node_modules/react-table-6/es/pagination.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();

var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;}

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}




var defaultButton = function defaultButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  'button',
  _extends({ type: 'button' }, props, { className: '-btn' }),
  props.children);

};

var ReactTablePagination = function (_Component) {
  _inherits(ReactTablePagination, _Component);

  function ReactTablePagination(props) {
    _classCallCheck(this, ReactTablePagination);

    var _this = _possibleConstructorReturn(this, (ReactTablePagination.__proto__ || Object.getPrototypeOf(ReactTablePagination)).call(this, props));

    _this.getSafePage = _this.getSafePage.bind(_this);
    _this.changePage = _this.changePage.bind(_this);
    _this.applyPage = _this.applyPage.bind(_this);

    _this.state = {
      page: props.page };

    return _this;
  }

  _createClass(ReactTablePagination, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.page !== nextProps.page) {
        this.setState({ page: nextProps.page });
      }
    } },
  {
    key: 'getSafePage',
    value: function getSafePage(page) {
      if (Number.isNaN(page)) {
        page = this.props.page;
      }
      return Math.min(Math.max(page, 0), this.props.pages - 1);
    } },
  {
    key: 'changePage',
    value: function changePage(page) {
      page = this.getSafePage(page);
      this.setState({ page: page });
      if (this.props.page !== page) {
        this.props.onPageChange(page);
      }
    } },
  {
    key: 'applyPage',
    value: function applyPage(e) {
      if (e) {
        e.preventDefault();
      }
      var page = this.state.page;
      this.changePage(page === '' ? this.props.page : page);
    } },
  {
    key: 'getPageJumpProperties',
    value: function getPageJumpProperties() {
      var _this2 = this;

      return {
        onKeyPress: function onKeyPress(e) {
          if (e.which === 13 || e.keyCode === 13) {
            _this2.applyPage();
          }
        },
        onBlur: this.applyPage,
        value: this.state.page === '' ? '' : this.state.page + 1,
        onChange: function onChange(e) {
          var val = e.target.value;
          var page = val - 1;
          if (val === '') {
            return _this2.setState({ page: val });
          }
          _this2.setState({ page: _this2.getSafePage(page) });
        },
        inputType: this.state.page === '' ? 'text' : 'number',
        pageJumpText: this.props.pageJumpText };

    } },
  {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
      pages = _props.pages,
      page = _props.page,
      showPageSizeOptions = _props.showPageSizeOptions,
      pageSizeOptions = _props.pageSizeOptions,
      pageSize = _props.pageSize,
      showPageJump = _props.showPageJump,
      canPrevious = _props.canPrevious,
      canNext = _props.canNext,
      onPageSizeChange = _props.onPageSizeChange,
      className = _props.className,
      PreviousComponent = _props.PreviousComponent,
      NextComponent = _props.NextComponent,
      renderPageJump = _props.renderPageJump,
      renderCurrentPage = _props.renderCurrentPage,
      renderTotalPagesCount = _props.renderTotalPagesCount,
      renderPageSizeOptions = _props.renderPageSizeOptions;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, '-pagination'), style: this.props.style },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: '-previous' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      PreviousComponent,
      {
        onClick: function onClick() {
          if (!canPrevious) return;
          _this3.changePage(page - 1);
        },
        disabled: !canPrevious },

      this.props.previousText)),


      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: '-center' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      { className: '-pageInfo' },
      this.props.pageText,
      ' ',
      showPageJump ? renderPageJump(this.getPageJumpProperties()) : renderCurrentPage(page),
      ' ',
      this.props.ofText,
      ' ',
      renderTotalPagesCount(pages)),

      showPageSizeOptions && renderPageSizeOptions({
        pageSize: pageSize,
        rowsSelectorText: this.props.rowsSelectorText,
        pageSizeOptions: pageSizeOptions,
        onPageSizeChange: onPageSizeChange,
        rowsText: this.props.rowsText })),


      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: '-next' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      NextComponent,
      {
        onClick: function onClick() {
          if (!canNext) return;
          _this3.changePage(page + 1);
        },
        disabled: !canNext },

      this.props.nextText)));



    } }]);


  return ReactTablePagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ReactTablePagination.defaultProps = {
  PreviousComponent: defaultButton,
  NextComponent: defaultButton,
  renderPageJump: function renderPageJump(_ref) {
    var onChange = _ref.onChange,
    value = _ref.value,
    onBlur = _ref.onBlur,
    onKeyPress = _ref.onKeyPress,
    inputType = _ref.inputType,
    pageJumpText = _ref.pageJumpText;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: '-pageJump' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
      'aria-label': pageJumpText,
      type: inputType,
      onChange: onChange,
      value: value,
      onBlur: onBlur,
      onKeyPress: onKeyPress }));


  },
  renderCurrentPage: function renderCurrentPage(page) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    { className: '-currentPage' },
    page + 1);

  },
  renderTotalPagesCount: function renderTotalPagesCount(pages) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    { className: '-totalPages' },
    pages || 1);

  },
  renderPageSizeOptions: function renderPageSizeOptions(_ref2) {
    var pageSize = _ref2.pageSize,
    pageSizeOptions = _ref2.pageSizeOptions,
    rowsSelectorText = _ref2.rowsSelectorText,
    onPageSizeChange = _ref2.onPageSizeChange,
    rowsText = _ref2.rowsText;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'span',
    { className: 'select-wrap -pageSizeOptions' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'select',
    {
      'aria-label': rowsSelectorText,
      onChange: function onChange(e) {
        return onPageSizeChange(Number(e.target.value));
      },
      value: pageSize },

    pageSizeOptions.map(function (option, i) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'option',
        { key: i, value: option },
        option + ' ' + rowsText));


    })));


  } };

/* harmony default export */ __webpack_exports__["default"] = (ReactTablePagination);

/***/ }),

/***/ "../node_modules/react-table-6/es/propTypes.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-table-6/es/propTypes.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // General
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPagination: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPaginationTop: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPaginationBottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showPageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  defaultPageSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  showPageJump: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  collapseOnSortingChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  collapseOnPageChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  collapseOnDataChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  freezeWhenExpanded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  sortable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  defaultSortDesc: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  defaultSorted: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  defaultFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  defaultResized: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  defaultExpanded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  defaultFilterMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  defaultSortMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  // Controlled State Callbacks
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPageSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSortedChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onFilteredChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onResizedChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onExpandedChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  // Pivoting
  pivotBy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  // Key Constants
  pivotValKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  pivotIDKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  subRowsKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  aggregatedKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  nestingLevelKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  originalKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  indexKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  groupedByPivotKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  // Server-side Callbacks
  onFetchData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  // Classes
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  // Component decorators
  getProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTableProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadGroupProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadGroupTrProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadGroupThProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadTrProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadThProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadFilterProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadFilterTrProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTheadFilterThProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTbodyProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTrGroupProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTrProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTdProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTfootProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTfootTrProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getTfootTdProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getPaginationProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getLoadingProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getNoDataProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getResizerProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  // Global Column Defaults
  columns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    // Renderers
    Cell: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Header: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Footer: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Aggregated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Pivot: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    PivotValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Expander: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
    Filter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),

    // All Columns
    sortable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, // use table default
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, // use table default
    filterable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, // use table default
    show: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    minWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    minResizeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

    // Cells only
    className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    getProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    // Pivot only
    aggregate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    // Headers only
    headerClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    headerStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    getHeaderProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    // Footers only
    footerClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    footerStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    getFooterProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    filterMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    filterAll: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    sortMethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func })),


  // Global Expander Column Defaults
  expanderDefaults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    sortable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    filterable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number }),


  pivotDefaults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  // Text
  previousText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  nextText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  noDataText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  pageText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  ofText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  rowsText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  pageJumpText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  rowsSelectorText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,

  // Components
  TableComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TheadComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TbodyComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TrGroupComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TrComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  ThComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TdComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  TfootComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  FilterComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  ExpanderComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  PivotValueComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  AggregatedComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  // this is a computed default generated using
  PivotComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  PreviousComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  NextComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  LoadingComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  NoDataComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  ResizerComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType,
  PadRowComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.elementType });

/***/ }),

/***/ "../node_modules/react-table-6/es/utils.js":
/*!*************************************************!*\
  !*** ../node_modules/react-table-6/es/utils.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



//
/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent,
  asPx: asPx });


function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i += 1) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (typeof (arguments.length <= i ? undefined : arguments[i]) !== 'undefined') {
      return arguments.length <= i ? undefined : arguments[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass, displayName) {
  if (!displayName) {
    throw new Error('No displayName found for template component:', compClass);
  }
  var cmp = function cmp(_ref) {
    var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(compClass, className) }, rest),
    children);

  };
  cmp.displayName = displayName;
  return cmp;
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function asPx(value) {
  value = Number(value);
  return Number.isNaN(value) ? null : value + 'px';
}

function isArray(a) {
  return Array.isArray(a);
}

// ########################################################################
// Non-exported Helpers
// ########################################################################

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function splitProps(_ref2) {
  var className = _ref2.className,
  style = _ref2.style,
  rest = _objectWithoutProperties(_ref2, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest || {} };

}

function compactObject(obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).map(function (key) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
        newObj[key] = obj[key];
      }
      return true;
    });
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp, props) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return isReactComponent(Comp) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props) : typeof Comp === 'function' ? Comp(props) : fallback;
}

function isClassComponent(component) {
  return typeof component === 'function' && !!Object.getPrototypeOf(component).isReactComponent;
}

function isFunctionComponent(component) {
  return typeof component === 'function' && String(component).includes('.createElement');
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

/***/ }),

/***/ "../node_modules/react-transition-group/esm/Transition.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-transition-group/esm/Transition.js ***!
  \****************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "../node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "../node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "../node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
                                 * The Transition component lets you describe a transition from one component
                                 * state to another _over time_ with a simple declarative API. Most commonly
                                 * it's used to animate the mounting and unmounting of a component, but can also
                                 * be used to describe in-place transition states as well.
                                 *
                                 * ---
                                 *
                                 * **Note**: `Transition` is a platform-agnostic base component. If you're using
                                 * transitions in CSS, you'll probably want to use
                                 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
                                 * instead. It inherits all the features of `Transition`, but contains
                                 * additional features necessary to play nice with CSS transitions (hence the
                                 * name of the component).
                                 *
                                 * ---
                                 *
                                 * By default the `Transition` component does not alter the behavior of the
                                 * component it renders, it only tracks "enter" and "exit" states for the
                                 * components. It's up to you to give meaning and effect to those states. For
                                 * example we can add styles to a component when it enters or exits:
                                 *
                                 * ```jsx
                                 * import { Transition } from 'react-transition-group';
                                 *
                                 * const duration = 300;
                                 *
                                 * const defaultStyle = {
                                 *   transition: `opacity ${duration}ms ease-in-out`,
                                 *   opacity: 0,
                                 * }
                                 *
                                 * const transitionStyles = {
                                 *   entering: { opacity: 1 },
                                 *   entered:  { opacity: 1 },
                                 *   exiting:  { opacity: 0 },
                                 *   exited:  { opacity: 0 },
                                 * };
                                 *
                                 * const Fade = ({ in: inProp }) => (
                                 *   <Transition in={inProp} timeout={duration}>
                                 *     {state => (
                                 *       <div style={{
                                 *         ...defaultStyle,
                                 *         ...transitionStyles[state]
                                 *       }}>
                                 *         I'm a fade Transition!
                                 *       </div>
                                 *     )}
                                 *   </Transition>
                                 * );
                                 * ```
                                 *
                                 * There are 4 main states a Transition can be in:
                                 *  - `'entering'`
                                 *  - `'entered'`
                                 *  - `'exiting'`
                                 *  - `'exited'`
                                 *
                                 * Transition state is toggled via the `in` prop. When `true` the component
                                 * begins the "Enter" stage. During this stage, the component will shift from
                                 * its current transition state, to `'entering'` for the duration of the
                                 * transition and then to the `'entered'` stage once it's complete. Let's take
                                 * the following example (we'll use the
                                 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
                                 *
                                 * ```jsx
                                 * function App() {
                                 *   const [inProp, setInProp] = useState(false);
                                 *   return (
                                 *     <div>
                                 *       <Transition in={inProp} timeout={500}>
                                 *         {state => (
                                 *           // ...
                                 *         )}
                                 *       </Transition>
                                 *       <button onClick={() => setInProp(true)}>
                                 *         Click to Enter
                                 *       </button>
                                 *     </div>
                                 *   );
                                 * }
                                 * ```
                                 *
                                 * When the button is clicked the component will shift to the `'entering'` state
                                 * and stay there for 500ms (the value of `timeout`) before it finally switches
                                 * to `'entered'`.
                                 *
                                 * When `in` is `false` the same thing happens except the state moves from
                                 * `'exiting'` to `'exited'`.
                                 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props["in"]) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref["in"];

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED };

    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props["in"]) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear };

  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED });

    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED },
      function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING },
    function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED },
        function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED },
      function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING },
    function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED },
        function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
    children = _this$props.children,
    childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps["in"];
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null },
      children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps)));

  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
                                                                  * A `function` child can be used instead of a React element. This function is
                                                                  * called with the current transition status (`'entering'`, `'entered'`,
                                                                  * `'exiting'`, `'exited'`), which can be used to apply context
                                                                  * specific props to a component.
                                                                  *
                                                                  * ```jsx
                                                                  * <Transition in={this.state.in} timeout={150}>
                                                                  *   {state => (
                                                                  *     <MyComponent className={`fade fade-${state}`} />
                                                                  *   )}
                                                                  * </Transition>
                                                                  * ```
                                                                  */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
                                                                                                        * Show the component; triggers the enter or exit states
                                                                                                        */
  "in": prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                         * By default the child component is mounted immediately along with
                         * the parent `Transition` component. If you want to "lazy mount" the component on the
                         * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
                         * mounted, even on "exited", unless you also specify `unmountOnExit`.
                         */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                                 * By default the child component stays mounted after it reaches the `'exited'` state.
                                 * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
                                 */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                                  * Normally a component is not transitioned if it is shown when the
                                  * `<Transition>` component mounts. If you want to transition on the first
                                  * mount set `appear` to `true`, and the component will transition in as soon
                                  * as the `<Transition>` mounts.
                                  *
                                  * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
                                  * > only adds an additional enter transition. However, in the
                                  * > `<CSSTransition>` component that first enter transition does result in
                                  * > additional `.appear-*` classes, that way you can choose to style it
                                  * > differently.
                                  */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                           * Enable or disable enter transitions.
                           */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                          * Enable or disable exit transitions.
                          */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
                         * The duration of the transition, in milliseconds.
                         * Required unless `addEndListener` is provided.
                         *
                         * You may specify a single timeout for all transitions:
                         *
                         * ```jsx
                         * timeout={500}
                         * ```
                         *
                         * or individually:
                         *
                         * ```jsx
                         * timeout={{
                         *  appear: 500,
                         *  enter: 300,
                         *  exit: 500,
                         * }}
                         * ```
                         *
                         * - `appear` defaults to the value of `enter`
                         * - `enter` defaults to `0`
                         * - `exit` defaults to `0`
                         *
                         * @type {number | { enter?: number, exit?: number, appear?: number }}
                         */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
      * Add a custom transition end trigger. Called with the transitioning
      * DOM node and a `done` callback. Allows for more fine grained transition end
      * logic. **Note:** Timeouts are still used as a fallback if provided.
      *
      * ```jsx
      * addEndListener={(node, done) => {
      *   // use the css transitionend event to mark the finish of a transition
      *   node.addEventListener('transitionend', done, false);
      * }}
      * ```
      */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                                   * Callback fired before the "entering" status is applied. An extra parameter
                                   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
                                   *
                                   * @type Function(node: HtmlElement, isAppearing: bool) -> void
                                   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                            * Callback fired after the "entering" status is applied. An extra parameter
                            * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
                            *
                            * @type Function(node: HtmlElement, isAppearing: bool)
                            */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                               * Callback fired after the "entered" status is applied. An extra parameter
                               * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
                               *
                               * @type Function(node: HtmlElement, isAppearing: bool) -> void
                               */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                              * Callback fired before the "exiting" status is applied.
                              *
                              * @type Function(node: HtmlElement) -> void
                              */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                           * Callback fired after the "exiting" status is applied.
                           *
                           * @type Function(node: HtmlElement) -> void
                           */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
                              * Callback fired after the "exited" status is applied.
                              *
                              * @type Function(node: HtmlElement) -> void
                              */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation
} :
undefined;

function noop() {}

Transition.defaultProps = {
  "in": false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop };

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "../node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "../node_modules/react-transition-group/esm/config.js":
/*!************************************************************!*\
  !*** ../node_modules/react-transition-group/esm/config.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false });

/***/ }),

/***/ "../node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \*********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number }).
isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string }),
prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string })]) :
undefined;

/***/ }),

/***/ "../node_modules/requires-port/index.js":
/*!**********************************************!*\
  !*** ../node_modules/requires-port/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Check if we're required to add a port number.
               *
               * @see https://url.spec.whatwg.org/#default-port
               * @param {Number|String} port Port number we need to check
               * @param {String} protocol Protocol we need to check against.
               * @returns {Boolean} Is it a default port for the given protocol
               * @api private
               */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;}


  return port !== 0;
};

/***/ }),

/***/ "../node_modules/url-parse/index.js":
/*!******************************************!*\
  !*** ../node_modules/url-parse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}

var required = __webpack_require__(/*! requires-port */ "../node_modules/requires-port/index.js"),
qs = __webpack_require__(/*! querystringify */ "../node_modules/querystringify/index.js"),
slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
windowsDriveLetter = /^[a-zA-Z]:/,
whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
left = new RegExp('^' + whitespace + '+');

/**
                                            * Trim a given string.
                                            *
                                            * @param {String} str String to trim.
                                            * @public
                                            */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
   * These are the parse rules for the URL parser, it informs the parser
   * about:
   *
   * 0. The char it Needs to parse, if it's a string it should be done using
   *    indexOf, RegExp using exec and NaN means set as current value.
   * 1. The property we should set when parsing this value.
   * 2. Indication if it's backwards or forward parsing, when set as number it's
   *    the value of extra chars that should be split off.
   * 3. Inherit from location if non existing in the parser.
   * 4. `toLowerCase` the resulting value.
   */
var rules = [
['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address, url) {// Sanitize what is left of the address
  return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
},
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
    * These properties should not be copied or inherited from. This is only needed
    * for all non blob URL's as a blob URL does not include a hash, only the
    * origin.
    *
    * @type {Object}
    * @private
    */
var ignore = { hash: 1, query: 1 };

/**
                                     * The location object differs when your code is loaded through a normal page,
                                     * Worker or through a worker using a blob. And with the blobble begins the
                                     * trouble as the location object will contain the URL of the blob, not the
                                     * location of the page where our code is loaded in. The actual origin is
                                     * encoded in the `pathname` so we can thankfully generate a good "default"
                                     * location from it so we can generate proper relative URL's again.
                                     *
                                     * @param {Object|String} loc Optional default location object.
                                     * @returns {Object} lolcation object.
                                     * @public
                                     */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;else
  if (typeof global !== 'undefined') globalVar = global;else
  if (typeof self !== 'undefined') globalVar = self;else
  globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
  type = _typeof(loc),
  key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) {delete finaldestination[key];}
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
   * Check whether a protocol scheme is special.
   *
   * @param {String} The protocol scheme of the URL
   * @return {Boolean} `true` if the protocol scheme is special, else `false`
   * @private
   */
function isSpecial(scheme) {
  return (
    scheme === 'file:' ||
    scheme === 'ftp:' ||
    scheme === 'http:' ||
    scheme === 'https:' ||
    scheme === 'ws:' ||
    scheme === 'wss:');

}

/**
   * @typedef ProtocolExtract
   * @type Object
   * @property {String} protocol Protocol matched in the URL, in lowercase.
   * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
   * @property {String} rest Rest of the URL that is not part of the protocol.
   */

/**
       * Extract protocol information from a URL with/without double slash ("//").
       *
       * @param {String} address URL we want to extract from.
       * @param {Object} location
       * @return {ProtocolExtract} Extracted information.
       * @private
       */
function extractProtocol(address, location) {
  address = trimLeft(address);
  location = location || {};

  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4];
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest };

}

/**
   * Resolve a relative URL pathname against a base URL pathname.
   *
   * @param {String} relative Pathname of the relative URL.
   * @param {String} base Pathname of the base URL.
   * @return {String} Resolved pathname.
   * @private
   */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
  i = path.length,
  last = path[i - 1],
  unshift = false,
  up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
   * The actual URL instance. Instead of returning an object we've opted-in to
   * create an actual constructor as it's much more memory efficient and
   * faster and it pleases my OCD.
   *
   * It is worth noting that we should not use `URL` as class name to prevent
   * clashes with the global URL instance that got introduced in browsers.
   *
   * @constructor
   * @param {String} address URL we want to parse.
   * @param {Object|String} [location] Location defaults for relative paths.
   * @param {Boolean|Function} [parser] Parser for the query string.
   * @private
   */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,extracted,parse,instruction,index,key,
  instructions = rules.slice(),
  type = _typeof(location),
  url = this,
  i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (
  extracted.protocol === 'file:' && (
  extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) ||
  !extracted.slashes && (
  extracted.protocol ||
  extracted.slashesCount < 2 ||
  !isSpecial(url.protocol)))
  {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
    relative && instruction[3] ? location[key] || '' : '');


    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
  relative &&
  location.slashes &&
  url.pathname.charAt(0) !== '/' && (
  url.pathname !== '' || location.pathname !== ''))
  {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0];
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ?
  url.protocol + '//' + url.host :
  'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
   * This is convenience method for changing properties in the URL instance to
   * insure that they all propagate correctly.
   *
   * @param {String} part          Property we need to adjust.
   * @param {Mixed} value          The newly assigned value.
   * @param {Boolean|Function} fn  When setting the query, it will be the function
   *                               used to parse the query.
   *                               When setting the protocol, double slash will be
   *                               removed from the final url if it is true.
   * @returns {URL} URL instance for chaining.
   * @public
   */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var _char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== _char ? _char + value : value;
      } else {
        url[part] = value;
      }
      break;

    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;

    case 'auth':
      var splits = value.split(':');
      url.username = splits[0];
      url.password = splits.length === 2 ? splits[1] : '';}


  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.auth = url.password ? url.username + ':' + url.password : url.username;

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ?
  url.protocol + '//' + url.host :
  'null';

  url.href = url.toString();

  return url;
}

/**
   * Transform the properties back in to a valid and full URL string.
   *
   * @param {Function} stringify Optional query stringify function.
   * @returns {String} Compiled version of the URL.
   * @public
   */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
  url = this,
  protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result =
  protocol + (
  url.protocol && url.slashes || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  } else if (url.password) {
    result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/***/ }),

/***/ "../node_modules/warning/warning.js":
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
               * Similar to invariant but only logs a warning if the condition is not met.
               * This can be used to log issues in development environments in critical
               * paths. Removing the logging code for production environments will keep the
               * same logic and follow the same code paths.
               */

var __DEV__ = "development" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
    format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
      '`warning(condition, format, ...args)` requires a warning ' +
      'message argument');

    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "../node_modules/webpack/buildin/amd-options.js":
/*!******************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./components/AckButton/AckButton.tsx":
/*!********************************************!*\
  !*** ./components/AckButton/AckButton.tsx ***!
  \********************************************/
/*! exports provided: AckButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckButton", function() { return AckButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "./components/ActionButton/ActionButton.tsx");


var AckButton = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], { className: className, icon: "reply-all", tooltip: "Acknowledge problem", onClick: onClick }));
};


/***/ }),

/***/ "./components/ActionButton/ActionButton.tsx":
/*!**************************************************!*\
  !*** ./components/ActionButton/ActionButton.tsx ***!
  \**************************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FAIcon/FAIcon */ "./components/FAIcon/FAIcon.tsx");
/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tooltip/Tooltip */ "./components/Tooltip/Tooltip.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};






var ActionButton = function (_a) {
    var icon = _a.icon, width = _a.width, tooltip = _a.tooltip, className = _a.className, children = _a.children, onClick = _a.onClick;
    var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
    var styles = getStyles(theme);
    var buttonClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('btn', styles.button, Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["width: ", "rem"], ["width: ", "rem"])), width || 3), className);
    var button = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: buttonClass, onClick: onClick },
        icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_4__["FAIcon"], { icon: icon, customClass: styles.icon }),
        children));
    if (tooltip) {
        button = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], { placement: "bottom", content: tooltip }, button));
    }
    return button;
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function (theme) {
    var actionBlue = theme.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__["GrafanaThemeType"].Light ? '#497dc0' : '#005f81';
    var hoverBlue = theme.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__["GrafanaThemeType"].Light ? '#456ba4' : '#354f77';
    return {
        button: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      height: 2rem;\n      background-image: none;\n      background-color: ", ";\n      border: 1px solid ", ";\n      border-radius: 1px;\n      color: ", ";\n\n      i {\n        vertical-align: middle;\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      height: 2rem;\n      background-image: none;\n      background-color: ", ";\n      border: 1px solid ", ";\n      border-radius: 1px;\n      color: ", ";\n\n      i {\n        vertical-align: middle;\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n    "])), actionBlue, theme.palette.gray1, theme.colors.text, hoverBlue),
        icon: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      i {\n        color: ", ";\n      }\n    "], ["\n      i {\n        color: ", ";\n      }\n    "])), theme.colors.text),
    };
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./components/ConfigProvider/ConfigProvider.tsx":
/*!******************************************************!*\
  !*** ./components/ConfigProvider/ConfigProvider.tsx ***!
  \******************************************************/
/*! exports provided: ConfigContext, ConfigConsumer, provideConfig, getCurrentThemeName, getCurrentTheme, ThemeProvider, provideTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigContext", function() { return ConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigConsumer", function() { return ConfigConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentThemeName", function() { return getCurrentThemeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideTheme", function() { return provideTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
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




var ConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["config"]);
var ConfigConsumer = ConfigContext.Consumer;
var provideConfig = function (component) {
    var ConfigProvider = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfigContext.Provider, { value: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["config"] }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, __assign({}, props)))); };
    return ConfigProvider;
};
var getCurrentThemeName = function () {
    return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["config"].bootData.user.lightTheme ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__["GrafanaThemeType"].Light : _grafana_data__WEBPACK_IMPORTED_MODULE_3__["GrafanaThemeType"].Dark;
};
var getCurrentTheme = function () { return Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["getTheme"])(getCurrentThemeName()); };
var ThemeProvider = function (_a) {
    var children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfigConsumer, null, function (config) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Provider, { value: getCurrentTheme() }, children);
    }));
};
var provideTheme = function (component) {
    return provideConfig(function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeProvider, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, __assign({}, props))); });
};


/***/ }),

/***/ "./components/ExecScriptButton/ExecScriptButton.tsx":
/*!**********************************************************!*\
  !*** ./components/ExecScriptButton/ExecScriptButton.tsx ***!
  \**********************************************************/
/*! exports provided: ExecScriptButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecScriptButton", function() { return ExecScriptButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "./components/ActionButton/ActionButton.tsx");


var ExecScriptButton = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_1__["ActionButton"], { className: className, icon: "terminal", tooltip: "Execute script", onClick: onClick }));
};


/***/ }),

/***/ "./components/ExploreButton/ExploreButton.tsx":
/*!****************************************************!*\
  !*** ./components/ExploreButton/ExploreButton.tsx ***!
  \****************************************************/
/*! exports provided: ExploreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreButton", function() { return ExploreButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datasource-zabbix/constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _panel_triggers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panel-triggers/utils */ "./panel-triggers/utils.ts");
/* harmony import */ var _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datasource-zabbix/utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "./components/ActionButton/ActionButton.tsx");






var ExploreButton = function (_a) {
    var problem = _a.problem, panelId = _a.panelId;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__["ActionButton"], { icon: "compass", width: 6, onClick: function () { return openInExplore(problem, panelId); } }, "Explore"));
};
var openInExplore = function (problem, panelId) {
    var _a, _b, _c;
    var query = {};
    if (((_a = problem.items) === null || _a === void 0 ? void 0 : _a.length) === 1 && ((_b = problem.hosts) === null || _b === void 0 ? void 0 : _b.length) === 1) {
        var item = problem.items[0];
        var host = problem.hosts[0];
        var itemName = Object(_datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_4__["expandItemName"])(item.name, item.key_);
        query = {
            queryType: _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["MODE_METRICS"],
            group: { filter: '/.*/' },
            application: { filter: '' },
            host: { filter: host.name },
            item: { filter: itemName },
        };
    }
    else {
        var itemids = (_c = problem.items) === null || _c === void 0 ? void 0 : _c.map(function (p) { return p.itemid; }).join(',');
        query = {
            queryType: _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["MODE_ITEMID"],
            itemids: itemids,
        };
    }
    var state = {
        datasource: problem.datasource,
        context: 'explore',
        originPanelId: panelId,
        queries: [query],
    };
    var exploreState = JSON.stringify(state);
    var url = Object(_panel_triggers_utils__WEBPACK_IMPORTED_MODULE_3__["renderUrl"])('/explore', { left: exploreState });
    Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getLocationSrv"])().update({ path: url, query: {} });
};


/***/ }),

/***/ "./components/FAIcon/FAIcon.tsx":
/*!**************************************!*\
  !*** ./components/FAIcon/FAIcon.tsx ***!
  \**************************************/
/*! exports provided: FAIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAIcon", function() { return FAIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);


var FAIcon = function (_a) {
    var icon = _a.icon, customClass = _a.customClass;
    var wrapperClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(customClass, 'fa-icon-container');
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: wrapperClass },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-" + icon })));
};
/* harmony default export */ __webpack_exports__["default"] = (FAIcon);


/***/ }),

/***/ "./components/GFHeartIcon/GFHeartIcon.tsx":
/*!************************************************!*\
  !*** ./components/GFHeartIcon/GFHeartIcon.tsx ***!
  \************************************************/
/*! exports provided: GFHeartIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GFHeartIcon", function() { return GFHeartIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);


var GFHeartIcon = function (_a) {
    var status = _a.status, className = _a.className;
    var iconClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(className, 'icon-gf', { "icon-gf-critical": status === 'critical' || status === 'problem' || status === 'warning' }, { "icon-gf-online": status === 'online' || status === 'ok' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: iconClass }));
};
/* harmony default export */ __webpack_exports__["default"] = (GFHeartIcon);


/***/ }),

/***/ "./components/Modal/ModalController.tsx":
/*!**********************************************!*\
  !*** ./components/Modal/ModalController.tsx ***!
  \**********************************************/
/*! exports provided: ModalController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalController", function() { return ModalController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfigProvider_ConfigProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConfigProvider/ConfigProvider */ "./components/ConfigProvider/ConfigProvider.tsx");
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



var ModalController = /** @class */ (function (_super) {
    __extends(ModalController, _super);
    function ModalController(props) {
        var _this = _super.call(this, props) || this;
        _this.modalRoot = document.body;
        _this.modalNode = document.createElement('div');
        _this.showModal = function (component, props) {
            _this.setState({
                component: component,
                props: props
            });
        };
        _this.hideModal = function () {
            _this.modalRoot.removeChild(_this.modalNode);
            _this.setState({
                component: null,
                props: {},
            });
        };
        _this.state = {
            component: null,
            props: {},
        };
        return _this;
    }
    ModalController.prototype.renderModal = function () {
        var _a = this.state, component = _a.component, props = _a.props;
        if (!component) {
            return null;
        }
        this.modalRoot.appendChild(this.modalNode);
        var modal = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Object(_ConfigProvider_ConfigProvider__WEBPACK_IMPORTED_MODULE_2__["provideTheme"])(component), props);
        return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(modal, this.modalNode);
    };
    ModalController.prototype.render = function () {
        var children = this.props.children;
        var ChildrenComponent = children;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildrenComponent, { showModal: this.showModal, hideModal: this.hideModal }),
            this.renderModal()));
    };
    return ModalController;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));



/***/ }),

/***/ "./components/Tooltip/Popper.tsx":
/*!***************************************!*\
  !*** ./components/Tooltip/Popper.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-popper */ "../node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group/Transition */ "../node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portal */ "./components/Tooltip/Portal.tsx");
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






var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function () { return ({
    defaultTransitionStyles: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transition: opacity 200ms linear;\n    opacity: 0;\n  "], ["\n    transition: opacity 200ms linear;\n    opacity: 0;\n  "]))),
    tooltipContent: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    overflow-wrap: break-word;\n  "], ["\n    overflow-wrap: break-word;\n  "]))),
}); });
var transitionStyles = {
    exited: { opacity: 0 },
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
};
var Popper = function (_a) {
    var show = _a.show, placement = _a.placement, popperClassName = _a.popperClassName, refClassName = _a.refClassName, content = _a.content, children = _a.children, renderContent = _a.renderContent;
    var refClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('popper_ref', refClassName);
    var styles = getStyles();
    var popperClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('popper', popperClassName, styles.defaultTransitionStyles);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__["Manager"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__["Reference"], null, function (_a) {
            var ref = _a.ref;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: refClass, ref: ref }, children));
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], { in: show, timeout: 100, mountOnEnter: true, unmountOnExit: true }, function (transitionState) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_2__["Popper"], { placement: placement }, function (_a) {
                var ref = _a.ref, style = _a.style, placement = _a.placement, arrowProps = _a.arrowProps;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, style: __assign(__assign({}, style), transitionStyles[transitionState]), "data-placement": placement, className: popperClass },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "popper__background" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.tooltipContent }, renderContent(content)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: arrowProps.ref, "data-placement": placement, className: "popper__arrow" }))));
            }))); })));
};
/* harmony default export */ __webpack_exports__["default"] = (Popper);
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./components/Tooltip/Portal.tsx":
/*!***************************************!*\
  !*** ./components/Tooltip/Portal.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
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


var BodyPortal = /** @class */ (function (_super) {
    __extends(BodyPortal, _super);
    function BodyPortal(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, className = _a.className, _b = _a.root, root = _b === void 0 ? document.body : _b;
        _this.node = document.createElement('div');
        if (className) {
            _this.node.classList.add(className);
        }
        _this.portalRoot = root;
        _this.portalRoot.appendChild(_this.node);
        return _this;
    }
    BodyPortal.prototype.componentWillUnmount = function () {
        this.portalRoot.removeChild(this.node);
    };
    BodyPortal.prototype.render = function () {
        return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this.node);
    };
    return BodyPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (BodyPortal);


/***/ }),

/***/ "./components/Tooltip/Tooltip.tsx":
/*!****************************************!*\
  !*** ./components/Tooltip/Tooltip.tsx ***!
  \****************************************/
/*! exports provided: Tooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popper */ "./components/Tooltip/Popper.tsx");
/* harmony import */ var _withPopper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withPopper */ "./components/Tooltip/withPopper.tsx");
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



var TooltipWrapper = function (_a) {
    var hidePopper = _a.hidePopper, showPopper = _a.showPopper, className = _a.className, children = _a.children, restProps = __rest(_a, ["hidePopper", "showPopper", "className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "popper__manager " + className, onMouseEnter: showPopper, onMouseLeave: hidePopper },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popper__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, restProps), children)));
};
var Tooltip = Object(_withPopper__WEBPACK_IMPORTED_MODULE_2__["default"])(TooltipWrapper);
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ }),

/***/ "./components/Tooltip/withPopper.tsx":
/*!*******************************************!*\
  !*** ./components/Tooltip/withPopper.tsx ***!
  \*******************************************/
/*! exports provided: withPopper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPopper", function() { return withPopper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var withPopper = function (WrappedComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.showPopper = function () {
                    _this.setState({ show: true });
                };
                _this.hidePopper = function () {
                    _this.setState({ show: false });
                };
                _this.state = {
                    show: false,
                };
                return _this;
            }
            class_1.prototype.renderContent = function (content) {
                if (typeof content === 'function') {
                    // If it's a function we assume it's a React component
                    var ReactComponent = content;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactComponent, null);
                }
                return content;
            };
            class_1.prototype.render = function () {
                var show = this.state.show;
                var _a = this.props, placement = _a.placement, className = _a.className;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, this.props, { showPopper: this.showPopper, hidePopper: this.hidePopper, renderContent: this.renderContent, placement: placement, className: className, show: show })));
            };
            return class_1;
        }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)),
        _a.defaultProps = {
            placement: 'auto',
        },
        _a;
};
/* harmony default export */ __webpack_exports__["default"] = (withPopper);


/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: GFHeartIcon, FAIcon, AckButton, ExploreButton, ExecScriptButton, Tooltip, ModalController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GFHeartIcon_GFHeartIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GFHeartIcon/GFHeartIcon */ "./components/GFHeartIcon/GFHeartIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GFHeartIcon", function() { return _GFHeartIcon_GFHeartIcon__WEBPACK_IMPORTED_MODULE_0__["GFHeartIcon"]; });

/* harmony import */ var _FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FAIcon/FAIcon */ "./components/FAIcon/FAIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAIcon", function() { return _FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_1__["FAIcon"]; });

/* harmony import */ var _AckButton_AckButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AckButton/AckButton */ "./components/AckButton/AckButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AckButton", function() { return _AckButton_AckButton__WEBPACK_IMPORTED_MODULE_2__["AckButton"]; });

/* harmony import */ var _ExploreButton_ExploreButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExploreButton/ExploreButton */ "./components/ExploreButton/ExploreButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreButton", function() { return _ExploreButton_ExploreButton__WEBPACK_IMPORTED_MODULE_3__["ExploreButton"]; });

/* harmony import */ var _ExecScriptButton_ExecScriptButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExecScriptButton/ExecScriptButton */ "./components/ExecScriptButton/ExecScriptButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecScriptButton", function() { return _ExecScriptButton_ExecScriptButton__WEBPACK_IMPORTED_MODULE_4__["ExecScriptButton"]; });

/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip/Tooltip */ "./components/Tooltip/Tooltip.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__["Tooltip"]; });

/* harmony import */ var _Modal_ModalController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal/ModalController */ "./components/Modal/ModalController.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalController", function() { return _Modal_ModalController__WEBPACK_IMPORTED_MODULE_6__["ModalController"]; });










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
/*! exports provided: variableRegex, expandItemName, expandItems, containsMacro, replaceMacro, parseLegacyVariableQuery, splitTemplateQuery, regexPattern, isRegex, isTemplateVariable, getRangeScopedVars, buildRegex, escapeRegex, parseItemInterval, normalizeZabbixInterval, parseInterval, parseTimeShiftInterval, formatAcknowledges, convertToZabbixAPIUrl, callOnce, sequence, isValidVersion, parseVersion, compactQuery, getArrayDepth, isNumeric, parseTags, mustArray, convertZabbixUnit, getValueMapping, isProblemsDataFrame */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseItemInterval", function() { return parseItemInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeZabbixInterval", function() { return normalizeZabbixInterval; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertZabbixUnit", function() { return convertZabbixUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueMapping", function() { return getValueMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProblemsDataFrame", function() { return isProblemsDataFrame; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./datasource-zabbix/types.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_4__);





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
function replaceMacro(item, macros, isTriggerItem, parentHosts) {
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
                        // Check for parent templates hostid and macros
                        var parentHost = parentHosts.find(function (pHost) { return pHost.hostid === h.hostid; }) || {};
                        var isTemplateMacro = parentHost.parentTemplates.findIndex(function (tmpl) { return tmpl.templateid === m.hostid && m.value; }) > -1;
                        // Check if host already has that same macro, host is overruling
                        var hostHasMacro = macros.findIndex(function (aMacro) { return aMacro.hostid === h.hostid && aMacro.value && aMacro.macro === m.macro; }) > -1;
                        // Check if macro's hostid is same as hosts or parent templates hostid
                        if ((h.hostid === m.hostid && m.value) || (isTemplateMacro && !hostHasMacro)) {
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
            queryType = _types__WEBPACK_IMPORTED_MODULE_3__["VariableQueryTypes"].Group;
            break;
        case 2:
            queryType = _types__WEBPACK_IMPORTED_MODULE_3__["VariableQueryTypes"].Host;
            break;
        case 3:
            queryType = _types__WEBPACK_IMPORTED_MODULE_3__["VariableQueryTypes"].Application;
            break;
        case 4:
            queryType = _types__WEBPACK_IMPORTED_MODULE_3__["VariableQueryTypes"].Item;
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
    var regularRange = _grafana_data__WEBPACK_IMPORTED_MODULE_4__["rangeUtil"].secondsToHms(msRange / 1000);
    return {
        __range_ms: { text: msRange, value: msRange },
        __range_s: { text: sRange, value: sRange },
        __range: { text: regularRange, value: regularRange },
        __range_series: { text: _constants__WEBPACK_IMPORTED_MODULE_2__["RANGE_VARIABLE_VALUE"], value: _constants__WEBPACK_IMPORTED_MODULE_2__["RANGE_VARIABLE_VALUE"] },
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
/**
 * Parses Zabbix item update interval. Returns 0 in case of custom intervals.
 */
function parseItemInterval(interval) {
    var normalizedInterval = normalizeZabbixInterval(interval);
    if (normalizedInterval) {
        return parseInterval(normalizedInterval);
    }
    return 0;
}
function normalizeZabbixInterval(interval) {
    var intervalPattern = /(^[\d]+)(y|M|w|d|h|m|s)?/g;
    var parsedInterval = intervalPattern.exec(interval);
    if (!parsedInterval || !interval || (parsedInterval.length > 2 && !parsedInterval[2])) {
        return '';
    }
    return parsedInterval[1] + (parsedInterval.length > 2 ? parsedInterval[2] : 's');
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
var getUnitsMap = function () { return ({
    '%': 'percent',
    'b': 'decbits',
    'bps': 'bps',
    'B': 'bytes',
    'Bps': 'binBps',
    // 'unixtime': 'dateTimeAsSystem',
    'uptime': 'dtdhms',
    'qps': 'qps',
    'iops': 'iops',
    'Hz': 'hertz',
    'V': 'volt',
    'C': 'celsius',
    'RPM': 'rotrpm',
    'dBm': 'dBm',
}); };
var getKnownGrafanaUnits = function () {
    var units = {};
    var categories = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_4__["getValueFormats"])();
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        for (var _a = 0, _b = category.submenu; _a < _b.length; _a++) {
            var unitDesc = _b[_a];
            var unit = unitDesc.value;
            units[unit] = unit;
        }
    }
    return units;
};
var unitsMap = getUnitsMap();
var knownGrafanaUnits = getKnownGrafanaUnits();
function convertZabbixUnit(zabbixUnit) {
    var unit = unitsMap[zabbixUnit];
    if (!unit) {
        unit = knownGrafanaUnits[zabbixUnit];
    }
    return unit;
}
function getValueMapping(item, valueMappings) {
    var valuemapid = item.valuemapid;
    var mapping = valueMappings === null || valueMappings === void 0 ? void 0 : valueMappings.find(function (m) { return m.valuemapid === valuemapid; });
    if (!mapping) {
        return null;
    }
    return mapping.mappings.map(function (m, i) {
        var valueMapping = {
            id: i,
            type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__["MappingType"].ValueToText,
            value: m.value,
            text: m.newvalue,
        };
        return valueMapping;
    });
}
function isProblemsDataFrame(data) {
    return data.fields.length && data.fields[0].type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__["FieldType"].other && data.fields[0].config.custom['type'] === 'problems';
}


/***/ }),

/***/ "./panel-triggers/components/AckModal.tsx":
/*!************************************************!*\
  !*** ./panel-triggers/components/AckModal.tsx ***!
  \************************************************/
/*! exports provided: AckModalUnthemed, AckModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModalUnthemed", function() { return AckModalUnthemed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModal", function() { return AckModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datasource-zabbix/constants */ "./datasource-zabbix/constants.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../triggers_panel_ctrl */ "./panel-triggers/triggers_panel_ctrl.ts");
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
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};






var KEYBOARD_ENTER_KEY = 13;
var KEYBOARD_ESCAPE_KEY = 27;
var severityOptions = [
    { value: 0, label: 'Not classified' },
    { value: 1, label: 'Information' },
    { value: 2, label: 'Warning' },
    { value: 3, label: 'Average' },
    { value: 4, label: 'High' },
    { value: 5, label: 'Disaster' }
];
var AckModalUnthemed = /** @class */ (function (_super) {
    __extends(AckModalUnthemed, _super);
    function AckModalUnthemed(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            _this.setState({ value: event.target.value, error: false });
        };
        _this.handleKeyPress = function (event) {
            if (event.which === KEYBOARD_ENTER_KEY || event.key === 'Enter') {
                // this.submit();
            }
            else if (event.which === KEYBOARD_ESCAPE_KEY || event.key === 'Escape') {
                _this.dismiss();
            }
        };
        _this.handleBackdropClick = function () {
            _this.dismiss();
        };
        _this.onAcknowledgeToggle = function () {
            _this.setState({ acknowledge: !_this.state.acknowledge, error: false });
        };
        _this.onChangeSeverityToggle = function () {
            _this.setState({ changeSeverity: !_this.state.changeSeverity, error: false });
        };
        _this.onCloseProblemToggle = function () {
            _this.setState({ closeProblem: !_this.state.closeProblem, error: false });
        };
        _this.onChangeSelectedSeverity = function (v) {
            _this.setState({ selectedSeverity: v });
        };
        _this.dismiss = function () {
            _this.setState({ value: '', error: false, errorMessage: '', ackError: '', loading: false });
            _this.props.onDismiss();
        };
        _this.submit = function () {
            var _a = _this.state, acknowledge = _a.acknowledge, changeSeverity = _a.changeSeverity, closeProblem = _a.closeProblem;
            var actionSelected = acknowledge || changeSeverity || closeProblem;
            if (!_this.state.value && !actionSelected) {
                return _this.setState({
                    error: true,
                    errorMessage: 'Enter message text or select an action'
                });
            }
            _this.setState({ ackError: '', loading: true });
            var ackData = {
                message: _this.state.value,
            };
            var action = _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["ZBX_ACK_ACTION_ADD_MESSAGE"];
            if (_this.state.acknowledge) {
                action += _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["ZBX_ACK_ACTION_ACK"];
            }
            if (_this.state.changeSeverity) {
                action += _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["ZBX_ACK_ACTION_CHANGE_SEVERITY"];
                ackData.severity = _this.state.selectedSeverity;
            }
            if (_this.state.closeProblem) {
                action += _datasource_zabbix_constants__WEBPACK_IMPORTED_MODULE_2__["ZBX_ACK_ACTION_CLOSE"];
            }
            ackData.action = action;
            _this.props.onSubmit(ackData).then(function () {
                _this.dismiss();
            }).catch(function (err) {
                var _a, _b;
                var errorMessage = ((_a = err.data) === null || _a === void 0 ? void 0 : _a.message) || ((_b = err.data) === null || _b === void 0 ? void 0 : _b.error) || err.data || err.statusText || '';
                _this.setState({
                    ackError: errorMessage,
                    loading: false,
                });
            });
        };
        _this.state = {
            value: '',
            error: false,
            errorMessage: '',
            ackError: '',
            acknowledge: false,
            closeProblem: false,
            changeSeverity: false,
            selectedSeverity: props.severity || 0,
            loading: false,
        };
        return _this;
    }
    AckModalUnthemed.prototype.renderActions = function () {
        var _a = this.props, canClose = _a.canClose, texts = _a.texts;
        var actions = [
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { key: "ack", label: texts.acknowledge, value: this.state.acknowledge, onChange: this.onAcknowledgeToggle }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { key: "change-severity", label: texts.changeSeverity, description: "", value: this.state.changeSeverity, onChange: this.onChangeSeverityToggle }),
            this.state.changeSeverity &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["RadioButtonGroup"], { key: "severity", size: "sm", options: Object(_triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_5__["getSeverityOptions"])(texts), value: this.state.selectedSeverity, onChange: this.onChangeSelectedSeverity }),
            canClose &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { key: "close", label: texts.closeProblem, disabled: !canClose, value: this.state.closeProblem, onChange: this.onCloseProblemToggle }),
        ];
        // <VerticalGroup /> doesn't handle empty elements properly, so don't return it
        return actions.filter(function (e) { return e; });
    };
    AckModalUnthemed.prototype.render = function () {
        var _a = this.props, theme = _a.theme, texts = _a.texts;
        var styles = getStyles(theme);
        var modalClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styles.modal);
        var modalTitleClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styles.modalHeaderTitle);
        var inputGroupClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form', styles.inputGroup);
        var inputClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(this.state.error && styles.input);
        var inputHintClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form-hint-text', styles.inputHint);
        var inputErrorClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form-hint-text', styles.inputError);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Modal"], { isOpen: true, onDismiss: this.dismiss, className: modalClass, title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: modalTitleClass },
                this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { size: 18 }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["FAIcon"], { icon: "reply-all" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "p-l-1" }, texts.acknowledgeProblem)) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: inputGroupClass },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "gf-form-hint" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["TextArea"], { className: inputClass, type: "text", name: "message", placeholder: texts.message, autoComplete: "off", autoFocus: true, value: this.state.value, onChange: this.handleChange, onKeyDown: this.handleKeyPress }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", { className: inputHintClass }, texts.pressEnterToSubmit),
                    this.state.error &&
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", { className: inputErrorClass }, this.state.errorMessage))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["VerticalGroup"], null, this.renderActions())),
            this.state.ackError &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form ack-request-error" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: styles.ackError }, this.state.ackError)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-button-row text-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "primary", onClick: this.submit }, texts.update),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "secondary", onClick: this.dismiss }, texts.cancel))));
    };
    AckModalUnthemed.defaultProps = {
        withBackdrop: true,
    };
    return AckModalUnthemed;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function (theme) {
    var red = theme.palette.red;
    return {
        modal: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: 500px;\n    "], ["\n      width: 500px;\n    "]))),
        modalHeaderTitle: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-size: ", ";\n      padding-top: ", ";\n      margin: 0 ", ";\n      display: flex;\n    "], ["\n      font-size: ", ";\n      padding-top: ", ";\n      margin: 0 ", ";\n      display: flex;\n    "])), theme.typography.heading.h3, theme.spacing.sm, theme.spacing.md),
        inputGroup: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin-bottom: 16px;\n    "], ["\n      margin-bottom: 16px;\n    "]))),
        input: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-color: ", ";\n      border-radius: 2px;\n      outline-offset: 2px;\n      box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";\n    "], ["\n      border-color: ", ";\n      border-radius: 2px;\n      outline-offset: 2px;\n      box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";\n    "])), red, theme.colors.bg1, red),
        inputHint: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      display: inherit;\n      float: right;\n      color: ", ";\n    "], ["\n      display: inherit;\n      float: right;\n      color: ", ";\n    "])), theme.colors.textWeak),
        inputError: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      float: left;\n      color: ", ";\n    "], ["\n      float: left;\n      color: ", ";\n    "])), red),
        ackError: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), red),
    };
});
var AckModal = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(AckModalUnthemed);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./panel-triggers/components/AlertList/AlertAcknowledges.tsx":
/*!*******************************************************************!*\
  !*** ./panel-triggers/components/AlertList/AlertAcknowledges.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var AlertAcknowledges = /** @class */ (function (_super) {
    __extends(AlertAcknowledges, _super);
    function AlertAcknowledges() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.props.onClick(event);
        };
        return _this;
    }
    AlertAcknowledges.prototype.render = function () {
        var _a = this.props, problem = _a.problem, texts = _a.texts;
        var ackRows = problem.acknowledges && problem.acknowledges.map(function (ack) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: ack.acknowledgeid },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ack.time),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ack.user),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ack.message)));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ack-tooltip" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "ack-time" }, texts.time),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "ack-user" }, texts.user),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "ack-comments" }, texts.comments))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ackRows)),
            problem.showAckButton &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ack-add-button" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { id: "add-acknowledge-btn", className: "btn btn-mini btn-inverse gf-form-button", onClick: this.handleClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-plus" })))));
    };
    return AlertAcknowledges;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (AlertAcknowledges);


/***/ }),

/***/ "./panel-triggers/components/AlertList/AlertCard.tsx":
/*!***********************************************************!*\
  !*** ./panel-triggers/components/AlertList/AlertCard.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./panel-triggers/utils.ts");
/* harmony import */ var _AckModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AckModal */ "./panel-triggers/components/AckModal.tsx");
/* harmony import */ var _EventTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EventTag */ "./panel-triggers/components/EventTag.tsx");
/* harmony import */ var _AlertAcknowledges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AlertAcknowledges */ "./panel-triggers/components/AlertList/AlertAcknowledges.tsx");
/* harmony import */ var _AlertIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlertIcon */ "./panel-triggers/components/AlertList/AlertIcon.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/* harmony import */ var _AlertModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AlertModal */ "./panel-triggers/components/AlertList/AlertModal.tsx");
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











var Url = __webpack_require__(/*! url-parse */ "../node_modules/url-parse/index.js");
var AlertCard = /** @class */ (function (_super) {
    __extends(AlertCard, _super);
    function AlertCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTagClick = function (tag, ctrlKey, shiftKey) {
            if (_this.props.onTagClick) {
                _this.props.onTagClick(tag, _this.props.problem.datasource, ctrlKey, shiftKey);
            }
        };
        _this.ackProblem = function (data) {
            var problem = _this.props.problem;
            return _this.props.onProblemAck(problem, data);
        };
        _this.onAlertItemClick = function (showModal, hideModal, priority, startTime, age) {
            var _a = _this.props, texts = _a.texts, problem = _a.problem;
            showModal(_AlertModal__WEBPACK_IMPORTED_MODULE_10__["AlertModal"], { onSubmit: hideModal, onDismiss: hideModal, problem: problem, texts: texts, priority: priority, startTime: startTime, age: age });
        };
        _this.onLinkIconClick = function (event, url) {
            event.stopPropagation();
            // Add 'foldTabRow' query param so that Grafana tab row panel keeps folded
            var urlObj = new Url(url, true);
            urlObj.query['foldTabRow'] = 'all';
            window.top.location.href = urlObj.toString();
        };
        _this.getLinkIconElement = function (problem) {
            var texts = _this.props.texts;
            // Compare link url and current page url; no need to show icon if urls are the same
            var url1 = new Url(problem.url, true);
            var url2 = new Url(window.top.location.href, true);
            if (problem.url && (url1.origin + url1.pathname !== url2.origin + url2.pathname ||
                !url1.query.dashboard ||
                !url1.query.orgId ||
                url1.query.dashboard !== url2.query.dashboard ||
                url1.query.orgId !== url2.query.orgId)) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], { placement: "bottom", content: texts.urlInfo },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { onClick: function (event) { return _this.onLinkIconClick(event, problem.url); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-external-link" }))));
            }
            return null;
        };
        return _this;
    }
    AlertCard.prototype.render = function () {
        var _this = this;
        var _a = this.props, problem = _a.problem, panelOptions = _a.panelOptions, texts = _a.texts;
        var showDatasourceName = panelOptions.targets && panelOptions.targets.length > 1;
        var isTestAlert = problem.tags.find(function (tagItem) { return tagItem.tag === 'test'; });
        var cardClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('alert-rule-item', 'zbx-trigger-card', { 'zbx-trigger-highlighted': panelOptions.highlightBackground, 'iiris-active-test-incident': isTestAlert });
        var descriptionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('alert-rule-item__text', { 'zbx-description--newline': panelOptions.descriptionAtNewLine });
        var problemSeverity = Number(problem.severity);
        var severityDesc;
        severityDesc = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(panelOptions.triggerSeverity, function (s) { return s.priority === problemSeverity; });
        if (problem.severity) {
            severityDesc = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(panelOptions.triggerSeverity, function (s) { return s.priority === problemSeverity; });
        }
        var lastchange = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatLastChange"])(problem.timestamp, panelOptions.customLastChangeFormat && panelOptions.lastChangeFormat);
        var storedLanguage = localStorage.getItem('iiris_language') || 'fi';
        var age = moment__WEBPACK_IMPORTED_MODULE_3___default.a.unix(problem.timestamp).locale(storedLanguage).fromNow(true);
        var startTime = moment__WEBPACK_IMPORTED_MODULE_3___default.a.unix(problem.timestamp).format('DD.MM.YYYY HH:mm:ss');
        var newProblem = false;
        if (panelOptions.highlightNewerThan) {
            newProblem = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isNewProblem"])(problem, panelOptions.highlightNewerThan);
        }
        var blink = panelOptions.highlightNewEvents && newProblem;
        var problemColor;
        if (problem.value === '0') {
            problemColor = panelOptions.okEventColor;
        }
        else if (panelOptions.markAckEvents && problem.acknowledged === "1") {
            problemColor = panelOptions.ackEventColor;
        }
        else {
            problemColor = severityDesc.color;
        }
        var cardStyle = {};
        if (panelOptions.highlightBackground) {
            cardStyle.backgroundColor = problemColor;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["ModalController"], null, function (_a) {
            var showModal = _a.showModal, hideModal = _a.hideModal;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: cardClass, style: cardStyle, onClick: function () { return _this.onAlertItemClick(showModal, hideModal, severityDesc.severity, startTime, age); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertIcon__WEBPACK_IMPORTED_MODULE_8__["default"], { problem: problem, color: problemColor, highlightBackground: panelOptions.highlightBackground, blink: blink }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__name" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "zabbix-trigger-name" }, problem.description),
                            (panelOptions.hostField || panelOptions.hostTechNameField) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertHost, { problem: problem, panelOptions: panelOptions })),
                            panelOptions.hostGroups && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertGroup, { problem: problem, panelOptions: panelOptions }),
                            panelOptions.showTags && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "zbx-trigger-tags" }, problem.tags && problem.tags.map(function (tag) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventTag__WEBPACK_IMPORTED_MODULE_6__["default"], { key: tag.tag + tag.value, tag: tag, highlight: tag.tag === problem.correlation_tag, onClick: _this.handleTagClick });
                            })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: descriptionClass },
                            panelOptions.statusField && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertStatus, { problem: problem, blink: blink }),
                            panelOptions.severityField && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertSeverity, { severityDesc: severityDesc, blink: blink, testAlert: isTestAlert ? texts.testIncident : '', highlightBackground: panelOptions.highlightBackground })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "alert-rule-item__time" }, panelOptions.ageField && texts.lastedFor + ' ' + age),
                            panelOptions.descriptionField && !panelOptions.descriptionAtNewLine && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "zbx-description", dangerouslySetInnerHTML: { __html: problem.comments } }))),
                        panelOptions.descriptionField && panelOptions.descriptionAtNewLine && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__text zbx-description--newline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "alert-rule-item__info zbx-description", dangerouslySetInnerHTML: { __html: problem.comments } }))))),
                showDatasourceName && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__time zabbix-trigger-source" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-database" }),
                        problem.datasource))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "alert-rule-item__time zbx-trigger-lastchange" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, startTime || "last change unknown"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "trigger-info-block zbx-status-icons" },
                        _this.getLinkIconElement(problem),
                        problem.state === '1' && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], { placement: "bottom", content: problem.error },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-question-circle" })))),
                        problem.eventid && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertAcknowledgesButton, { problem: problem, onClick: function (event) {
                                event.stopPropagation();
                                showModal(_AckModal__WEBPACK_IMPORTED_MODULE_5__["AckModal"], {
                                    canClose: problem.manual_close === '1',
                                    severity: problemSeverity,
                                    onSubmit: _this.ackProblem,
                                    onDismiss: hideModal,
                                    texts: texts
                                });
                            }, texts: texts }))))));
        }));
    };
    return AlertCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (AlertCard);
function AlertHost(props) {
    var problem = props.problem;
    var panel = props.panelOptions;
    var host = "";
    if (panel.hostField && panel.hostTechNameField) {
        host = problem.host + " (" + problem.hostTechName + ")";
    }
    else if (panel.hostField || panel.hostTechNameField) {
        host = panel.hostField ? problem.host : problem.hostTechName;
    }
    if (panel.hostProxy && problem.proxy) {
        host = problem.proxy + ": " + host;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "zabbix-hostname" },
        problem.maintenance && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-wrench zbx-maintenance-icon" }),
        host));
}
function AlertGroup(props) {
    var problem = props.problem;
    var panel = props.panelOptions;
    var groupNames = "";
    if (panel.hostGroups) {
        var groups = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(problem.groups, 'name').join(', ');
        groupNames += "[ " + groups + " ]";
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "zabbix-hostname" }, groupNames));
}
var DEFAULT_OK_COLOR = 'rgb(56, 189, 113)';
var DEFAULT_PROBLEM_COLOR = 'rgb(215, 0, 0)';
function AlertStatus(props) {
    var problem = props.problem, okColor = props.okColor, problemColor = props.problemColor, blink = props.blink;
    var status = problem.value === '0' ? 'RESOLVED' : 'PROBLEM';
    var color = problem.value === '0' ? okColor || DEFAULT_OK_COLOR : problemColor || DEFAULT_PROBLEM_COLOR;
    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('zbx-trigger-state', { 'alert-state-critical': problem.value === '1' }, { 'alert-state-ok': problem.value === '0' }, { 'zabbix-trigger--blinked': blink });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: className }, status));
}
function AlertSeverity(props) {
    var severityDesc = props.severityDesc, highlightBackground = props.highlightBackground, blink = props.blink, testAlert = props.testAlert;
    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('zbx-trigger-severity', { 'zabbix-trigger--blinked': blink });
    var style = {};
    if (!highlightBackground) {
        style.color = severityDesc.color;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: className, style: style }, severityDesc.severity + (testAlert ? ' ' + testAlert : '')));
}
var AlertAcknowledgesButton = /** @class */ (function (_super) {
    __extends(AlertAcknowledgesButton, _super);
    function AlertAcknowledgesButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.props.onClick(event);
        };
        _this.renderTooltipContent = function () {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertAcknowledges__WEBPACK_IMPORTED_MODULE_7__["default"], { problem: _this.props.problem, onClick: _this.handleClick, texts: _this.props.texts });
        };
        return _this;
    }
    AlertAcknowledgesButton.prototype.render = function () {
        var _a = this.props, problem = _a.problem, texts = _a.texts;
        var content = null;
        if (problem.acknowledges && problem.acknowledges.length) {
            content = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], { placement: "bottom", popperClassName: "ack-tooltip", content: this.renderTooltipContent },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { role: "button", onClick: this.handleClick },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-comments" }))));
        }
        else if (problem.showAckButton) {
            content = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], { placement: "bottom", content: texts.acknowledgeProblem },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { role: "button", onClick: this.handleClick },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-comments-o" }))));
        }
        return content;
    };
    return AlertAcknowledgesButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));


/***/ }),

/***/ "./panel-triggers/components/AlertList/AlertIcon.tsx":
/*!***********************************************************!*\
  !*** ./panel-triggers/components/AlertList/AlertIcon.tsx ***!
  \***********************************************************/
/*! exports provided: AlertIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertIcon", function() { return AlertIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./components/index.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var AlertIcon = function (_a) {
    var problem = _a.problem, color = _a.color, blink = _a.blink, highlightBackground = _a.highlightBackground;
    var severity = Number(problem.severity);
    var status = problem.value === '1' && severity >= 2 ? 'critical' : 'online';
    var iconClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('icon-gf', blink && 'zabbix-trigger--blinked');
    var wrapperClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('alert-rule-item__icon', !highlightBackground && Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["color: ", ""], ["color: ", ""])), color));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: wrapperClass },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["GFHeartIcon"], { status: status, className: iconClass })));
};
/* harmony default export */ __webpack_exports__["default"] = (AlertIcon);
var templateObject_1;


/***/ }),

/***/ "./panel-triggers/components/AlertList/AlertList.tsx":
/*!***********************************************************!*\
  !*** ./panel-triggers/components/AlertList/AlertList.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AlertCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertCard */ "./panel-triggers/components/AlertList/AlertCard.tsx");
/* harmony import */ var _triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../triggers_panel_ctrl */ "./panel-triggers/triggers_panel_ctrl.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
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





var AlertList = /** @class */ (function (_super) {
    __extends(AlertList, _super);
    function AlertList(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePageChange = function (newPage) {
            var items = _this.getCurrentProblems(newPage);
            _this.setState({
                page: newPage,
                currentProblems: items,
            });
        };
        _this.handleTagClick = function (tag, datasource, ctrlKey, shiftKey) {
            if (_this.props.onTagClick) {
                _this.props.onTagClick(tag, datasource, ctrlKey, shiftKey);
            }
        };
        _this.handleProblemAck = function (problem, data) {
            return _this.props.onProblemAck(problem, data);
        };
        _this.getFilteredProblems = function (textFilter, priorityFilter, categoryFilter) {
            var filteredProblems = _this.props.problems.filter(function (problem) {
                return ((problem.comments.toLowerCase().indexOf(textFilter.toLowerCase()) > -1 ||
                    problem.description.toLowerCase().indexOf(textFilter.toLowerCase()) > -1) &&
                    (priorityFilter === -1 || problem.severity === priorityFilter.toString()) &&
                    (categoryFilter === 'all' || problem.opdata === categoryFilter));
            });
            return filteredProblems;
        };
        _this.filterByText = function (event) {
            var textFilter = event.target.value;
            var filteredProblems = _this.getFilteredProblems(textFilter, _this.state.priorityFilter, _this.state.categoryFilter);
            _this.setState({ textFilter: textFilter, filteredProblems: filteredProblems, page: 0 });
        };
        _this.filterByPriority = function (event) {
            var priorityFilter = parseInt(event.target.value, 10);
            var filteredProblems = _this.getFilteredProblems(_this.state.textFilter, priorityFilter, _this.state.categoryFilter);
            _this.setState({ priorityFilter: priorityFilter, filteredProblems: filteredProblems, page: 0 });
        };
        _this.filterByCategory = function (event) {
            var categoryFilter = event.target.value;
            var filteredProblems = _this.getFilteredProblems(_this.state.textFilter, _this.state.priorityFilter, categoryFilter);
            _this.setState({ categoryFilter: categoryFilter, filteredProblems: filteredProblems, page: 0 });
        };
        _this.state = {
            page: 0,
            currentProblems: [],
            filteredProblems: [],
            textFilter: '',
            priorityFilter: -1,
            categoryFilter: 'all',
        };
        return _this;
    }
    AlertList.prototype.componentDidMount = function () {
        var _a = this.state, textFilter = _a.textFilter, priorityFilter = _a.priorityFilter, categoryFilter = _a.categoryFilter;
        if (this.props.problems) {
            this.setState({ filteredProblems: this.getFilteredProblems(textFilter, priorityFilter, categoryFilter) });
        }
    };
    AlertList.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _a = this.state, textFilter = _a.textFilter, priorityFilter = _a.priorityFilter, categoryFilter = _a.categoryFilter;
        if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEqual(this.props.problems, prevProps.problems) && this.props.problems) {
            this.setState({ filteredProblems: this.getFilteredProblems(textFilter, priorityFilter, categoryFilter) });
        }
    };
    AlertList.prototype.getCurrentProblems = function (page) {
        var pageSize = this.props.pageSize;
        var filteredProblems = this.state.filteredProblems;
        var start = pageSize * page;
        var end = Math.min(pageSize * (page + 1), filteredProblems.length);
        return filteredProblems.slice(start, end);
    };
    AlertList.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, problems = _b.problems, panelOptions = _b.panelOptions, texts = _b.texts;
        var filteredProblems = this.state.filteredProblems;
        var currentProblems = this.getCurrentProblems(this.state.page);
        var fontSize = parseInt(panelOptions.fontSize.slice(0, panelOptions.fontSize.length - 1), 10);
        fontSize = fontSize && fontSize !== 100 ? fontSize : null;
        var alertListClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('alert-rule-list', (_a = {}, _a["font-size--" + fontSize] = fontSize, _a));
        var severityOptions = Object(_triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__["getSeverityOptions"])(texts);
        severityOptions.unshift({ value: -1, label: texts.selectPriority });
        var categoryOptions = [{ value: 'all', label: texts.selectCategory }];
        problems.forEach(function (problem) {
            if (categoryOptions.findIndex(function (category) { return category.value === problem.opdata; }) === -1 && problem.opdata) {
                categoryOptions.push({ value: problem.opdata, label: problem.opdata });
            }
        });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "triggers-panel-container", key: "alertListContainer" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "triggers-panel-filters" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", onChange: function (event) { return _this.filterByText(event); }, placeholder: texts.search }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { onChange: function (event) { return _this.filterByPriority(event); } }, severityOptions.map(function (option) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: option.value }, option.label); })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { onChange: function (event) { return _this.filterByCategory(event); } }, categoryOptions.map(function (option) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: option.value }, option.label); }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "card-section card-list-layout-list" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", { className: alertListClass }, currentProblems.map(function (problem) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertCard__WEBPACK_IMPORTED_MODULE_2__["default"], { key: problem.triggerid + "-" + problem.eventid + "-" + problem.datasource, problem: problem, panelOptions: panelOptions, onTagClick: _this.handleTagClick, onProblemAck: _this.handleProblemAck, texts: texts });
                }))),
            (currentProblems.length === 0
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "no-data-container" }, texts.noActiveAlerts)
                : null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "triggers-panel-footer", key: "alertListFooter" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationControl, { itemsLength: filteredProblems.length, pageSize: this.props.pageSize, pageIndex: this.state.page, onPageChange: this.handlePageChange }))));
    };
    return AlertList;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (AlertList);
var PaginationControl = /** @class */ (function (_super) {
    __extends(PaginationControl, _super);
    function PaginationControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlePageChange = function (index) { return function () {
            _this.props.onPageChange(index);
        }; };
        return _this;
    }
    PaginationControl.prototype.render = function () {
        var _a = this.props, itemsLength = _a.itemsLength, pageIndex = _a.pageIndex, pageSize = _a.pageSize;
        var pageCount = Math.ceil(itemsLength / pageSize);
        if (pageCount === 1) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null);
        }
        var startPage = Math.max(pageIndex - 3, 0);
        var endPage = Math.min(pageCount, startPage + 9);
        var pageLinks = [];
        for (var i = startPage; i < endPage; i++) {
            var pageLinkClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('triggers-panel-page-link', 'pointer', { 'active': i === pageIndex });
            var value = i + 1;
            var pageLinkElem = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: value.toString() },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: pageLinkClass, onClick: this.handlePageChange(i) }, value)));
            pageLinks.push(pageLinkElem);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, pageLinks));
    };
    return PaginationControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));


/***/ }),

/***/ "./panel-triggers/components/AlertList/AlertModal.tsx":
/*!************************************************************!*\
  !*** ./panel-triggers/components/AlertList/AlertModal.tsx ***!
  \************************************************************/
/*! exports provided: AlertModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModal", function() { return AlertModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



var AlertModal = /** @class */ (function (_super) {
    __extends(AlertModal, _super);
    function AlertModal(props) {
        var _this = _super.call(this, props) || this;
        _this.onDismiss = function () {
            _this.props.onDismiss();
        };
        return _this;
    }
    AlertModal.prototype.renderTitle = function (texts) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "iiris-modal-title-text" }, texts.information);
    };
    AlertModal.prototype.getDescriptionArray = function (eventObj) {
        var descriptionArray = [];
        if (eventObj.comments) {
            var description = eventObj.comments;
            var urlId = new RegExp('https?://');
            var startIndex = description.search(urlId);
            var endIndex = -1;
            while (startIndex > -1) {
                endIndex = description.slice(startIndex).search('\\s');
                endIndex = endIndex >= 0 ? startIndex + endIndex : description.length;
                var pairArray = [];
                pairArray.push(description.substring(0, startIndex));
                pairArray.push(description.substring(startIndex, endIndex));
                descriptionArray.push(pairArray);
                description = description.substring(endIndex);
                startIndex = description.search(urlId);
            }
            if (description) {
                descriptionArray.push([description, '']);
            }
        }
        return descriptionArray;
    };
    AlertModal.prototype.render = function () {
        var _a = this.props, problem = _a.problem, texts = _a.texts, priority = _a.priority, startTime = _a.startTime, age = _a.age;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Modal"], { isOpen: true, title: this.renderTitle(texts), onDismiss: this.onDismiss, className: "iiris-modal-box" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "iiris-modal-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "iiris-event-table full-width-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.priority),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, priority)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.startTime),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, startTime)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.duration),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, age)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.title),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, problem.name)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.description),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.getDescriptionArray(problem).map(function (pairArray) {
                                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pairArray[0]),
                                    pairArray[1] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: pairArray[1], target: "_blank" }, pairArray[1])));
                            }))),
                        problem.url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.dashboard),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: problem.url, target: "_top" }, problem.url))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.eventId),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, problem.eventid)),
                        problem.acknowledges.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap" }, texts.acknowledgements),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "iiris-inner-table" }, problem.acknowledges.map(function (acknowledge) {
                                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(acknowledge.clock).format('DD.MM.YYYY HH:mm:ss')),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, acknowledge.message)));
                                })))))))));
    };
    return AlertModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));



/***/ }),

/***/ "./panel-triggers/components/EventTag.tsx":
/*!************************************************!*\
  !*** ./panel-triggers/components/EventTag.tsx ***!
  \************************************************/
/*! exports provided: getTagColorsFromName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagColorsFromName", function() { return getTagColorsFromName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tooltip/Tooltip */ "./components/Tooltip/Tooltip.tsx");
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


var TAG_COLORS = [
    '#E24D42',
    '#1F78C1',
    '#BA43A9',
    '#705DA0',
    '#466803',
    '#508642',
    '#447EBC',
    '#C15C17',
    '#890F02',
    '#757575',
    '#0A437C',
    '#6D1F62',
    '#584477',
    '#629E51',
    '#2F4F4F',
    '#BF1B00',
    '#806EB7',
    '#8a2eb8',
    '#699e00',
    '#000000',
    '#3F6833',
    '#2F575E',
    '#99440A',
    '#E0752D',
    '#0E4AB4',
    '#58140C',
    '#052B51',
    '#511749',
    '#3F2B5B',
];
var TAG_BORDER_COLORS = [
    '#FF7368',
    '#459EE7',
    '#E069CF',
    '#9683C6',
    '#6C8E29',
    '#76AC68',
    '#6AA4E2',
    '#E7823D',
    '#AF3528',
    '#9B9B9B',
    '#3069A2',
    '#934588',
    '#7E6A9D',
    '#88C477',
    '#557575',
    '#E54126',
    '#A694DD',
    '#B054DE',
    '#8FC426',
    '#262626',
    '#658E59',
    '#557D84',
    '#BF6A30',
    '#FF9B53',
    '#3470DA',
    '#7E3A32',
    '#2B5177',
    '#773D6F',
    '#655181',
];
/**
 * Returns tag badge background and border colors based on hashed tag name.
 * @param name tag name
 */
function getTagColorsFromName(name) {
    var hash = djb2(name.toLowerCase());
    var color = TAG_COLORS[Math.abs(hash % TAG_COLORS.length)];
    var borderColor = TAG_BORDER_COLORS[Math.abs(hash % TAG_BORDER_COLORS.length)];
    return { color: color, borderColor: borderColor };
}
function djb2(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        hash = (hash << 5) + hash + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}
var EventTag = /** @class */ (function (_super) {
    __extends(EventTag, _super);
    function EventTag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.tag, event.ctrlKey, event.shiftKey);
            }
        };
        return _this;
    }
    EventTag.prototype.render = function () {
        var _a = this.props, tag = _a.tag, highlight = _a.highlight;
        var tagColor = getTagColorsFromName(tag.tag);
        var style = {
            background: tagColor.color,
            borderColor: tagColor.borderColor,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], { placement: "bottom", content: "Click to add tag filter or Ctrl/Shift+click to remove" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "label label-tag zbx-tag " + (highlight ? 'highlighted' : ''), style: style, onClick: this.handleClick }, tag.value ?
                tag.tag + ": " + tag.value :
                "" + tag.tag)));
    };
    return EventTag;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (EventTag);


/***/ }),

/***/ "./panel-triggers/components/ExecScriptModal.tsx":
/*!*******************************************************!*\
  !*** ./panel-triggers/components/ExecScriptModal.tsx ***!
  \*******************************************************/
/*! exports provided: ExecScriptModalUnthemed, ExecScriptModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecScriptModalUnthemed", function() { return ExecScriptModalUnthemed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecScriptModal", function() { return ExecScriptModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
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
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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




var ExecScriptModalUnthemed = /** @class */ (function (_super) {
    __extends(ExecScriptModalUnthemed, _super);
    function ExecScriptModalUnthemed(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeSelectedScript = function (v) {
            var script = _this.scripts.find(function (s) { return v.value === s.scriptid; });
            _this.setState({ selectedScript: v, script: script, errorMessage: '', loading: false, result: '' });
        };
        _this.dismiss = function () {
            _this.setState({ selectedScript: null, error: false, errorMessage: '', selectError: '', loading: false });
            _this.props.onDismiss();
        };
        _this.submit = function () {
            var selectedScript = _this.state.selectedScript;
            if (!selectedScript) {
                return _this.setState({
                    selectError: 'Select a script to execute.'
                });
            }
            _this.setState({ errorMessage: '', loading: true, result: '' });
            var data = {
                scriptid: selectedScript.value,
            };
            _this.props.onSubmit(data).then(function (result) {
                var message = _this.formatResult((result === null || result === void 0 ? void 0 : result.value) || '');
                if ((result === null || result === void 0 ? void 0 : result.response) === 'success') {
                    _this.setState({ result: message, loading: false });
                }
                else {
                    _this.setState({ error: true, errorMessage: message, loading: false });
                }
            }).catch(function (err) {
                var _a, _b;
                var errorMessage = ((_a = err.data) === null || _a === void 0 ? void 0 : _a.message) || ((_b = err.data) === null || _b === void 0 ? void 0 : _b.error) || err.data || err.statusText || '';
                errorMessage = _this.formatResult(errorMessage);
                _this.setState({
                    error: true,
                    loading: false,
                    errorMessage: errorMessage,
                });
            });
        };
        _this.formatResult = function (result) {
            var formatted = result.split('\n').map(function (p, i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { key: i }, p);
            });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, formatted);
        };
        _this.state = {
            error: false,
            errorMessage: '',
            selectError: '',
            selectedScript: null,
            result: '',
            loading: false,
            scriptOptions: [],
            script: null,
        };
        return _this;
    }
    ExecScriptModalUnthemed.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scripts, scriptOptions, selectedScript, script;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.getScripts()];
                    case 1:
                        scripts = _a.sent();
                        this.scripts = scripts;
                        scriptOptions = scripts.map(function (s) {
                            return {
                                value: s.scriptid,
                                label: s.name,
                                description: s.description || s.command,
                            };
                        });
                        selectedScript = (scriptOptions === null || scriptOptions === void 0 ? void 0 : scriptOptions.length) ? scriptOptions[0] : null;
                        script = scripts.find(function (s) { return selectedScript.value === s.scriptid; });
                        this.setState({ scriptOptions: scriptOptions, selectedScript: selectedScript, script: script });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExecScriptModalUnthemed.prototype.render = function () {
        var theme = this.props.theme;
        var _a = this.state, scriptOptions = _a.scriptOptions, selectedScript = _a.selectedScript, script = _a.script, result = _a.result, selectError = _a.selectError, errorMessage = _a.errorMessage, error = _a.error;
        var styles = getStyles(theme);
        var modalClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styles.modal);
        var modalTitleClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styles.modalHeaderTitle);
        var selectErrorClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form-hint-text', styles.inputError);
        var scriptCommandContainerClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form', styles.scriptCommandContainer);
        var scriptCommandClass = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])('gf-form-hint-text', styles.scriptCommand);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Modal"], { isOpen: true, onDismiss: this.dismiss, className: modalClass, title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: modalTitleClass },
                this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Spinner"], { size: 18 }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FAIcon"], { icon: "terminal" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "p-l-1" }, "Execute script")) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "gf-form-hint" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], { options: scriptOptions, value: selectedScript, onChange: this.onChangeSelectedScript }),
                    selectError &&
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", { className: selectErrorClass }, selectError))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: scriptCommandContainerClass }, script && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", { className: scriptCommandClass }, script.command)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: styles.resultContainer },
                result &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: styles.execResult }, result),
                error &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: styles.execError }, errorMessage)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-button-row text-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "primary", onClick: this.submit }, "Execute"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "secondary", onClick: this.dismiss }, "Cancel"))));
    };
    return ExecScriptModalUnthemed;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function (theme) {
    var red = theme.palette.red;
    return {
        modal: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: 600px;\n    "], ["\n      width: 600px;\n    "]))),
        modalHeaderTitle: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-size: ", ";\n      padding-top: ", ";\n      margin: 0 ", ";\n      display: flex;\n    "], ["\n      font-size: ", ";\n      padding-top: ", ";\n      margin: 0 ", ";\n      display: flex;\n    "])), theme.typography.heading.h3, theme.spacing.sm, theme.spacing.md),
        input: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-color: ", ";\n      border-radius: 2px;\n      outline-offset: 2px;\n      box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";\n    "], ["\n      border-color: ", ";\n      border-radius: 2px;\n      outline-offset: 2px;\n      box-shadow: 0 0 0 2px ", ", 0 0 0px 4px ", ";\n    "])), red, theme.colors.bg1, red),
        scriptCommandContainer: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      margin-bottom: ", ";\n    "], ["\n      margin-bottom: ", ";\n    "])), theme.spacing.md),
        scriptCommand: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n      text-align: left;\n      font-family: ", ";\n    "], ["\n      color: ", ";\n      text-align: left;\n      font-family: ", ";\n    "])), theme.colors.textWeak, theme.typography.fontFamily.monospace),
        inputHint: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      display: inherit;\n      float: right;\n      color: ", ";\n    "], ["\n      display: inherit;\n      float: right;\n      color: ", ";\n    "])), theme.colors.textWeak),
        inputError: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      float: left;\n      color: ", ";\n    "], ["\n      float: left;\n      color: ", ";\n    "])), red),
        resultContainer: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      min-height: 50px;\n      font-family: ", ";\n      font-size: ", ";\n      p {\n        font-size: ", ";\n        margin-bottom: 0px;\n      }\n    "], ["\n      min-height: 50px;\n      font-family: ", ";\n      font-size: ", ";\n      p {\n        font-size: ", ";\n        margin-bottom: 0px;\n      }\n    "])), theme.typography.fontFamily.monospace, theme.typography.size.sm, theme.typography.size.sm),
        execResult: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    "], ["\n    "]))),
        execError: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), red),
    };
});
var ExecScriptModal = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(ExecScriptModalUnthemed);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./panel-triggers/components/Problems/AckCell.tsx":
/*!********************************************************!*\
  !*** ./panel-triggers/components/Problems/AckCell.tsx ***!
  \********************************************************/
/*! exports provided: AckCell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckCell", function() { return AckCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function (theme) {
    return {
        countLabel: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), theme.typography.size.sm),
    };
});
var AckCell = function (props) {
    var _a, _b;
    var problem = props.original;
    var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
    var styles = getStyles(theme);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, ((_a = problem.acknowledges) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["FAIcon"], { icon: "comments" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: styles.countLabel },
                " (", (_b = problem.acknowledges) === null || _b === void 0 ? void 0 :
                _b.length,
                ")"))));
};
/* harmony default export */ __webpack_exports__["default"] = (AckCell);
var templateObject_1;


/***/ }),

/***/ "./panel-triggers/components/Problems/AcknowledgesList.tsx":
/*!*****************************************************************!*\
  !*** ./panel-triggers/components/Problems/AcknowledgesList.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AcknowledgesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AcknowledgesList(props) {
    var acknowledges = props.acknowledges;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-list" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-col problem-ack-time" }, acknowledges.map(function (ack) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: ack.acknowledgeid, className: "problem-ack-time" }, ack.time); })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-col problem-ack-user" }, acknowledges.map(function (ack) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: ack.acknowledgeid, className: "problem-ack-user" }, ack.user); })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-col problem-ack-message" }, acknowledges.map(function (ack) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: ack.acknowledgeid, className: "problem-ack-message" }, ack.message); }))));
}


/***/ }),

/***/ "./panel-triggers/components/Problems/ProblemDetails.tsx":
/*!***************************************************************!*\
  !*** ./panel-triggers/components/Problems/ProblemDetails.tsx ***!
  \***************************************************************/
/*! exports provided: ProblemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetails", function() { return ProblemDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../datasource-zabbix/utils */ "./datasource-zabbix/utils.ts");
/* harmony import */ var _AckModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AckModal */ "./panel-triggers/components/AckModal.tsx");
/* harmony import */ var _EventTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EventTag */ "./panel-triggers/components/EventTag.tsx");
/* harmony import */ var _ProblemStatusBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProblemStatusBar */ "./panel-triggers/components/Problems/ProblemStatusBar.tsx");
/* harmony import */ var _AcknowledgesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AcknowledgesList */ "./panel-triggers/components/Problems/AcknowledgesList.tsx");
/* harmony import */ var _ProblemTimeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProblemTimeline */ "./panel-triggers/components/Problems/ProblemTimeline.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/* harmony import */ var _ExecScriptModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ExecScriptModal */ "./panel-triggers/components/ExecScriptModal.tsx");
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










var ProblemDetails = /** @class */ (function (_super) {
    __extends(ProblemDetails, _super);
    function ProblemDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTagClick = function (tag, ctrlKey, shiftKey) {
            if (_this.props.onTagClick) {
                _this.props.onTagClick(tag, _this.props.original.datasource, ctrlKey, shiftKey);
            }
        };
        _this.ackProblem = function (data) {
            var problem = _this.props.original;
            return _this.props.onProblemAck(problem, data);
        };
        _this.getScripts = function () {
            var problem = _this.props.original;
            return _this.props.getScripts(problem);
        };
        _this.onExecuteScript = function (data) {
            var problem = _this.props.original;
            return _this.props.onExecuteScript(problem, data.scriptid);
        };
        _this.state = {
            events: [],
            alerts: [],
            show: false,
        };
        return _this;
    }
    ProblemDetails.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.showTimeline) {
            this.fetchProblemEvents();
        }
        this.fetchProblemAlerts();
        requestAnimationFrame(function () {
            _this.setState({ show: true });
        });
    };
    ProblemDetails.prototype.fetchProblemEvents = function () {
        var _this = this;
        var problem = this.props.original;
        this.props.getProblemEvents(problem)
            .then(function (events) {
            _this.setState({ events: events });
        });
    };
    ProblemDetails.prototype.fetchProblemAlerts = function () {
        var _this = this;
        var problem = this.props.original;
        this.props.getProblemAlerts(problem)
            .then(function (alerts) {
            _this.setState({ alerts: alerts });
        });
    };
    ProblemDetails.prototype.render = function () {
        var _this = this;
        var problem = this.props.original;
        var alerts = this.state.alerts;
        var rootWidth = this.props.rootWidth;
        var displayClass = this.state.show ? 'show' : '';
        var wideLayout = rootWidth > 1200;
        var compactStatusBar = rootWidth < 800 || problem.acknowledges && wideLayout && rootWidth < 1400;
        var age = moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(problem.timestamp).fromNow(true);
        var showAcknowledges = problem.acknowledges && problem.acknowledges.length !== 0;
        var problemSeverity = Number(problem.severity);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-container " + displayClass },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-value-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-age" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "clock-o" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, age)),
                        problem.items && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemItems, { items: problem.items })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-actions-left" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["ExploreButton"], { problem: problem, panelId: this.props.panelId })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProblemStatusBar__WEBPACK_IMPORTED_MODULE_5__["default"], { problem: problem, alerts: alerts, className: compactStatusBar && 'compact' }),
                    problem.showAckButton &&
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-actions" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["ModalController"], null, function (_a) {
                                var showModal = _a.showModal, hideModal = _a.hideModal;
                                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["ExecScriptButton"], { className: "navbar-button navbar-button--settings", onClick: function () {
                                        showModal(_ExecScriptModal__WEBPACK_IMPORTED_MODULE_9__["ExecScriptModal"], {
                                            getScripts: _this.getScripts,
                                            onSubmit: _this.onExecuteScript,
                                            onDismiss: hideModal,
                                        });
                                    } }));
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["ModalController"], null, function (_a) {
                                var showModal = _a.showModal, hideModal = _a.hideModal;
                                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["AckButton"], { className: "navbar-button navbar-button--settings", onClick: function () {
                                        showModal(_AckModal__WEBPACK_IMPORTED_MODULE_3__["AckModal"], {
                                            canClose: problem.manual_close === '1',
                                            severity: problemSeverity,
                                            onSubmit: _this.ackProblem,
                                            onDismiss: hideModal,
                                        });
                                    } }));
                            }))),
                problem.comments &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-description-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-description" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], { placement: "right", content: problem.comments },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "description-label" }, "Description:\u00A0")),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, problem.comments))),
                problem.tags && problem.tags.length > 0 &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-tags" }, problem.tags && problem.tags.map(function (tag) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventTag__WEBPACK_IMPORTED_MODULE_4__["default"], { key: tag.tag + tag.value, tag: tag, highlight: tag.tag === problem.correlation_tag, onClick: _this.handleTagClick });
                    })),
                this.props.showTimeline && this.state.events.length > 0 &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProblemTimeline__WEBPACK_IMPORTED_MODULE_7__["default"], { events: this.state.events, timeRange: this.props.timeRange }),
                showAcknowledges && !wideLayout &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "reply-all" }),
                            " Acknowledges"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AcknowledgesList__WEBPACK_IMPORTED_MODULE_6__["default"], { acknowledges: problem.acknowledges }))),
            showAcknowledges && wideLayout &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-middle" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-ack-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "reply-all" }),
                            " Acknowledges"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AcknowledgesList__WEBPACK_IMPORTED_MODULE_6__["default"], { acknowledges: problem.acknowledges }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-right" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-right-item" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "database" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, problem.datasource)),
                problem.proxy &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-details-right-item" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "cloud" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, problem.proxy)),
                problem.groups && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemGroups, { groups: problem.groups, className: "problem-details-right-item" }),
                problem.hosts && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemHosts, { hosts: problem.hosts, className: "problem-details-right-item" }))));
    };
    return ProblemDetails;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

function ProblemItem(props) {
    var item = props.item, showName = props.showName;
    var itemName = _datasource_zabbix_utils__WEBPACK_IMPORTED_MODULE_2__["expandItemName"](item.name, item.key_);
    var tooltipContent = function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        itemName,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
        item.lastvalue); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "thermometer-three-quarters" }),
        showName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "problem-item-name" },
            item.name,
            ": "),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], { placement: "top-start", content: tooltipContent },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "problem-item-value" }, item.lastvalue))));
}
var ProblemItems = function (_a) {
    var items = _a.items;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-items-row" }, items.length > 1 ?
        items.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemItem, { item: item, key: item.itemid, showName: true }); }) :
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemItem, { item: items[0] })));
};
var ProblemGroups = /** @class */ (function (_super) {
    __extends(ProblemGroups, _super);
    function ProblemGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProblemGroups.prototype.render = function () {
        var _this = this;
        return this.props.groups.map(function (g) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _this.props.className || '', key: g.groupid },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "folder" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, g.name))); });
    };
    return ProblemGroups;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var ProblemHosts = /** @class */ (function (_super) {
    __extends(ProblemHosts, _super);
    function ProblemHosts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProblemHosts.prototype.render = function () {
        var _this = this;
        return this.props.hosts.map(function (h) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _this.props.className || '', key: h.hostid },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { icon: "server" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, h.name))); });
    };
    return ProblemHosts;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));


/***/ }),

/***/ "./panel-triggers/components/Problems/ProblemStatusBar.tsx":
/*!*****************************************************************!*\
  !*** ./panel-triggers/components/Problems/ProblemStatusBar.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProblemStatusBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/FAIcon/FAIcon */ "./components/FAIcon/FAIcon.tsx");
/* harmony import */ var _components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Tooltip/Tooltip */ "./components/Tooltip/Tooltip.tsx");



function ProblemStatusBar(props) {
    var problem = props.problem, alerts = props.alerts, className = props.className;
    var multiEvent = problem.type === '1';
    var link = problem.url && problem.url !== '';
    var maintenance = problem.maintenance;
    var manualClose = problem.manual_close === '1';
    var error = problem.error && problem.error !== '';
    var stateUnknown = problem.state === '1';
    var closeByTag = problem.correlation_mode === '1';
    var actions = alerts && alerts.length !== 0;
    var actionMessage = actions ? alerts[0].message : '';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-statusbar " + (className || '') },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "wrench", fired: maintenance, tooltip: "Host maintenance" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "globe", fired: link, link: link && problem.url, tooltip: "External link" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "bullhorn", fired: multiEvent, tooltip: "Trigger generates multiple problem events" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "tag", fired: closeByTag, tooltip: "OK event closes problems matched to tag: " + problem.correlation_tag }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "circle-o-notch", fired: actions, tooltip: actionMessage }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "question-circle", fired: stateUnknown, tooltip: "Current trigger state is unknown" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "warning", fired: error, tooltip: problem.error }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProblemStatusBarItem, { icon: "window-close-o", fired: manualClose, tooltip: "Manual close problem" })));
}
function ProblemStatusBarItem(props) {
    var fired = props.fired, icon = props.icon, link = props.link, tooltip = props.tooltip;
    var item = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "problem-statusbar-item " + (fired ? 'fired' : 'muted') },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FAIcon_FAIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { icon: icon })));
    if (tooltip && fired) {
        item = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], { placement: "bottom", content: tooltip }, item));
    }
    return link ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: link, target: "_blank" }, item) : item;
}


/***/ }),

/***/ "./panel-triggers/components/Problems/ProblemTimeline.tsx":
/*!****************************************************************!*\
  !*** ./panel-triggers/components/Problems/ProblemTimeline.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



var DEFAULT_OK_COLOR = 'rgb(56, 189, 113)';
var DEFAULT_PROBLEM_COLOR = 'rgb(215, 0, 0)';
var EVENT_POINT_SIZE = 16;
var INNER_POINT_SIZE = 0.6;
var HIGHLIGHTED_POINT_SIZE = 1.1;
var EVENT_REGION_HEIGHT = Math.round(EVENT_POINT_SIZE * 0.6);
var ProblemTimeline = /** @class */ (function (_super) {
    __extends(ProblemTimeline, _super);
    function ProblemTimeline(props) {
        var _this = _super.call(this, props) || this;
        _this.setRootRef = function (ref) {
            _this.rootRef = ref;
            var width = ref && ref.clientWidth || 0;
            _this.setState({ width: width });
        };
        _this.handlePointHighlight = function (index, secondIndex) {
            var event = _this.sortedEvents[index];
            var regionToHighlight = _this.getRegionToHighlight(index);
            var duration;
            if (secondIndex !== undefined) {
                duration = _this.getEventDuration(index, secondIndex);
            }
            _this.setState({
                highlightedEvent: event,
                showEventInfo: true,
                highlightedRegion: regionToHighlight,
                eventInfo: {
                    duration: duration
                }
            });
            // this.showEventInfo(event);
        };
        _this.handlePointUnHighlight = function () {
            _this.setState({ showEventInfo: false, highlightedRegion: null });
        };
        _this.handleAckHighlight = function (ack, index) {
            _this.setState({
                showEventInfo: true,
                eventInfo: {
                    timestamp: Number(ack.clock),
                    message: ack.message,
                }
            });
        };
        _this.handleAckUnHighlight = function () {
            _this.setState({ showEventInfo: false });
        };
        _this.showEventInfo = function (event) {
            _this.setState({ highlightedEvent: event, showEventInfo: true });
        };
        _this.hideEventInfo = function () {
            _this.setState({ showEventInfo: false });
        };
        _this.getRegionToHighlight = function (index) {
            var event = _this.sortedEvents[index];
            var regionToHighlight = event.value === '1' ? index + 1 : index;
            return regionToHighlight;
        };
        _this.state = {
            width: 0,
            highlightedEvent: null,
            highlightedRegion: null,
            showEventInfo: false,
            eventInfo: {}
        };
        return _this;
    }
    ProblemTimeline.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.rootRef && prevState.width !== this.rootRef.clientWidth) {
            var width = this.rootRef.clientWidth;
            this.setState({ width: width });
        }
    };
    ProblemTimeline.prototype.getEventDuration = function (firstIndex, secondIndex) {
        return Math.abs(Number(this.sortedEvents[firstIndex].clock) - Number(this.sortedEvents[secondIndex].clock)) * 1000;
    };
    ProblemTimeline.prototype.sortEvents = function () {
        var events = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(this.props.events, function (e) { return Number(e.clock); });
        this.sortedEvents = events;
        return events;
    };
    ProblemTimeline.prototype.getEventAcks = function (events) {
        var acks = [];
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            if (event_1.acknowledges) {
                for (var _a = 0, _b = event_1.acknowledges; _a < _b.length; _a++) {
                    var ack = _b[_a];
                    acks.push(ack);
                }
            }
        }
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(acks, function (ack) { return Number(ack.clock); });
    };
    ProblemTimeline.prototype.render = function () {
        if (!this.rootRef) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "event-timeline", ref: this.setRootRef });
        }
        var _a = this.props, timeRange = _a.timeRange, eventPointSize = _a.eventPointSize, eventRegionHeight = _a.eventRegionHeight;
        var events = this.sortEvents();
        var acknowledges = this.getEventAcks(events);
        var boxWidth = this.state.width + eventPointSize;
        var boxHeight = Math.round(eventPointSize * 2.5);
        var width = boxWidth - eventPointSize;
        var padding = Math.round(eventPointSize / 2);
        var pointsYpos = eventRegionHeight / 2;
        var timelineYpos = Math.round(boxHeight / 2 - eventPointSize / 2);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "event-timeline", ref: this.setRootRef, style: { transform: "translate(" + -padding + "px, 0)" } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineInfoContainer, { className: "timeline-info-container", event: this.state.highlightedEvent, eventInfo: this.state.eventInfo, show: this.state.showEventInfo, left: padding }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { className: "event-timeline-canvas", viewBox: "0 0 " + boxWidth + " " + boxHeight },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineSVGFilters, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "event-timeline-group", transform: "translate(" + padding + ", " + timelineYpos + ")" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "event-timeline-regions", filter: "url(#boxShadow)" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineRegions, { events: events, timeRange: timeRange, width: width, height: eventRegionHeight, highlightedRegion: this.state.highlightedRegion })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "timeline-acknowledges", transform: "translate(0, " + pointsYpos + ")" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineAcks, { acknowledges: acknowledges, timeRange: timeRange, width: width, size: eventPointSize, onHighlight: this.handleAckHighlight, onUnHighlight: this.handleAckUnHighlight })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "timeline-points", transform: "translate(0, " + pointsYpos + ")" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelinePoints, { events: events, timeRange: timeRange, width: width, pointSize: eventPointSize, onPointHighlight: this.handlePointHighlight, onPointUnHighlight: this.handlePointUnHighlight }))))));
    };
    ProblemTimeline.defaultProps = {
        okColor: DEFAULT_OK_COLOR,
        problemColor: DEFAULT_PROBLEM_COLOR,
        eventRegionHeight: EVENT_REGION_HEIGHT,
        eventPointSize: EVENT_POINT_SIZE,
    };
    return ProblemTimeline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (ProblemTimeline);
function TimelineSVGFilters() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", { id: "dropShadow", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", { dx: "1", dy: "1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", { in: "SourceGraphic" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", { id: "boxShadow", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComponentTransfer", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFuncA", { type: "linear", slope: "0.7" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", { dx: "1", dy: "1" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", { in: "SourceGraphic" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", { id: "glowShadow", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", { in: "SourceGraphic" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", { id: "timelinePointBlur", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2", result: "blurOut" }))));
}
var TimelineInfoContainer = /** @class */ (function (_super) {
    __extends(TimelineInfoContainer, _super);
    function TimelineInfoContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineInfoContainer.prototype.render = function () {
        var _a = this.props, event = _a.event, eventInfo = _a.eventInfo, show = _a.show, className = _a.className, left = _a.left;
        var infoItems, durationItem;
        if (event) {
            var ts = moment__WEBPACK_IMPORTED_MODULE_2___default()(Number(event.clock) * 1000);
            var tsFormatted = ts.format('HH:mm:ss');
            infoItems = [
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: "ts", className: "event-timestamp" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-label" }, "Time:\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-value" }, tsFormatted))
            ];
        }
        if (eventInfo && eventInfo.duration) {
            var duration = eventInfo.duration;
            var durationFormatted = moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(duration).format('HH:mm:ss');
            durationItem = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: "duration", className: "event-timestamp" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-label" }, "Duration:\u00A0"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-value" }, durationFormatted)));
        }
        if (eventInfo && eventInfo.timestamp) {
            var ts = moment__WEBPACK_IMPORTED_MODULE_2___default()(eventInfo.timestamp * 1000);
            var tsFormatted = ts.format('HH:mm:ss');
            infoItems = [
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: "ts", className: "event-timestamp" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-label" }, "Time:\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-value" }, tsFormatted))
            ];
        }
        var containerStyle = { left: left };
        if (!show) {
            containerStyle.opacity = 0;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className, style: containerStyle },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, infoItems),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, durationItem),
            eventInfo && eventInfo.message &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { key: "duration", className: "event-timestamp" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-label" }, "Message:\u00A0"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "event-timestamp-value" }, eventInfo.message)))));
    };
    TimelineInfoContainer.defaultProps = {
        left: 0,
        className: '',
        show: false,
    };
    return TimelineInfoContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var TimelineRegions = /** @class */ (function (_super) {
    __extends(TimelineRegions, _super);
    function TimelineRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineRegions.prototype.render = function () {
        var _a = this.props, events = _a.events, timeRange = _a.timeRange, width = _a.width, height = _a.height, highlightedRegion = _a.highlightedRegion;
        var timeFrom = timeRange.timeFrom, timeTo = timeRange.timeTo;
        var range = timeTo - timeFrom;
        var firstItem;
        if (events.length) {
            var firstTs = events.length ? Number(events[0].clock) : timeTo;
            var duration = (firstTs - timeFrom) / range;
            var regionWidth = Math.round(duration * width);
            var highlighted = highlightedRegion === 0;
            var valueClass = "problem-event--" + (events[0].value !== '1' ? 'problem' : 'ok');
            var className = "problem-event-region " + valueClass + " " + (highlighted ? 'highlighted' : '');
            var firstEventAttributes = {
                x: 0,
                y: 0,
                width: regionWidth,
                height: height,
            };
            firstItem = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", __assign({ key: '0', className: className }, firstEventAttributes)));
        }
        var eventsIntervalItems = events.map(function (event, index) {
            var ts = Number(event.clock);
            var nextTs = index < events.length - 1 ? Number(events[index + 1].clock) : timeTo;
            var duration = (nextTs - ts) / range;
            var regionWidth = Math.round(duration * width);
            var posLeft = Math.round((ts - timeFrom) / range * width);
            var highlighted = highlightedRegion && highlightedRegion - 1 === index;
            var valueClass = "problem-event--" + (event.value === '1' ? 'problem' : 'ok');
            var className = "problem-event-region " + valueClass + " " + (highlighted ? 'highlighted' : '');
            var attributes = {
                x: posLeft,
                y: 0,
                width: regionWidth,
                height: height,
            };
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", __assign({ key: event.eventid + "-" + index, className: className }, attributes)));
        });
        return [
            firstItem,
            eventsIntervalItems
        ];
    };
    TimelineRegions.defaultProps = {
        highlightedRegion: null,
    };
    return TimelineRegions;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var TimelinePoints = /** @class */ (function (_super) {
    __extends(TimelinePoints, _super);
    function TimelinePoints(props) {
        var _this = _super.call(this, props) || this;
        _this.bringToFront = function (indexes, highlight) {
            if (highlight === void 0) { highlight = false; }
            var events = _this.props.events;
            var order = events.map(function (v, i) { return i; });
            order = moveToEnd(order, indexes);
            var highlighted = highlight ? indexes : null;
            _this.setState({ order: order, highlighted: highlighted });
        };
        _this.highlightPoint = function (index) { return function () {
            var pointsToHighlight = [index];
            if (_this.props.onPointHighlight) {
                if (_this.props.highlightRegion) {
                    pointsToHighlight = _this.getRegionEvents(index);
                    var secondIndex = pointsToHighlight.length === 2 ? pointsToHighlight[1] : undefined;
                    _this.props.onPointHighlight(index, secondIndex);
                }
                else {
                    _this.props.onPointHighlight(index);
                }
            }
            _this.bringToFront(pointsToHighlight, true);
        }; };
        _this.unHighlightPoint = function (index) { return function () {
            if (_this.props.onPointUnHighlight) {
                _this.props.onPointUnHighlight();
            }
            var order = _this.props.events.map(function (v, i) { return i; });
            _this.setState({ order: order, highlighted: [] });
        }; };
        _this.state = { order: [], highlighted: [] };
        return _this;
    }
    TimelinePoints.prototype.getRegionEvents = function (index) {
        var events = this.props.events;
        var event = events[index];
        if (event.value === '1' && index < events.length) {
            // Problem event
            for (var i = index; i < events.length; i++) {
                if (events[i].value === '0') {
                    var okEventIndex = i;
                    return [index, okEventIndex];
                }
            }
        }
        else if (event.value === '0' && index > 0) {
            // OK event
            var lastProblemIndex = null;
            for (var i = index - 1; i >= 0; i--) {
                if (events[i].value === '1') {
                    lastProblemIndex = i;
                }
                else {
                    break;
                }
            }
            if (lastProblemIndex !== null) {
                return [index, lastProblemIndex];
            }
        }
        return [index];
    };
    TimelinePoints.prototype.render = function () {
        var _this = this;
        var _a = this.props, events = _a.events, timeRange = _a.timeRange, width = _a.width, pointSize = _a.pointSize;
        var timeFrom = timeRange.timeFrom, timeTo = timeRange.timeTo;
        var range = timeTo - timeFrom;
        var pointR = pointSize / 2;
        var eventsItems = events.map(function (event, i) {
            var ts = Number(event.clock);
            var posLeft = Math.round((ts - timeFrom) / range * width - pointR);
            var className = "problem-event-item problem-event--" + (event.value === '1' ? 'problem' : 'ok');
            var highlighted = _this.state.highlighted.indexOf(i) !== -1;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelinePoint, { key: event.eventid + "-" + i, className: className, x: posLeft, r: pointR, highlighted: highlighted, onPointHighlight: _this.highlightPoint(i), onPointUnHighlight: _this.unHighlightPoint(i) }));
        });
        if (this.state.order.length) {
            return this.state.order.map(function (i) { return eventsItems[i]; });
        }
        return eventsItems;
    };
    TimelinePoints.defaultProps = {
        highlightRegion: true,
    };
    return TimelinePoints;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var TimelinePoint = /** @class */ (function (_super) {
    __extends(TimelinePoint, _super);
    function TimelinePoint(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseOver = function () {
            if (_this.props.onPointHighlight) {
                _this.props.onPointHighlight();
            }
        };
        _this.handleMouseLeave = function () {
            if (_this.props.onPointUnHighlight) {
                _this.props.onPointUnHighlight();
            }
        };
        _this.state = { highlighted: false };
        return _this;
    }
    TimelinePoint.prototype.componentDidUpdate = function (prevProps) {
        // Update component after reordering to make animation working
        if (prevProps.highlighted !== this.props.highlighted) {
            this.setState({ highlighted: this.props.highlighted });
        }
    };
    TimelinePoint.prototype.render = function () {
        var x = this.props.x;
        var r = this.state.highlighted ? Math.round(this.props.r * HIGHLIGHTED_POINT_SIZE) : this.props.r;
        var cx = x + this.props.r;
        var rInner = Math.round(r * INNER_POINT_SIZE);
        var className = (this.props.className || '') + " " + (this.state.highlighted ? 'highlighted' : '');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: className, transform: "translate(" + cx + ", 0)", filter: "url(#dropShadow)", onMouseOver: this.handleMouseOver, onMouseLeave: this.handleMouseLeave },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: 0, cy: 0, r: r, className: "point-border" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: 0, cy: 0, r: rInner, className: "point-core" })));
    };
    return TimelinePoint;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var TimelineAcks = /** @class */ (function (_super) {
    __extends(TimelineAcks, _super);
    function TimelineAcks(props) {
        var _this = _super.call(this, props) || this;
        _this.handleHighlight = function (index) { return function () {
            if (_this.props.onHighlight) {
                var ack = _this.props.acknowledges[index];
                _this.props.onHighlight(ack, index);
            }
            _this.bringToFront(index, true);
        }; };
        _this.handleUnHighlight = function () {
            if (_this.props.onUnHighlight) {
                _this.props.onUnHighlight();
            }
            var order = _this.props.acknowledges.map(function (v, i) { return i; });
            _this.setState({ order: order, highlighted: null });
        };
        _this.bringToFront = function (index, highlight) {
            if (highlight === void 0) { highlight = false; }
            var acknowledges = _this.props.acknowledges;
            var order = acknowledges.map(function (v, i) { return i; });
            order = moveToEnd(order, [index]);
            var highlighted = highlight ? index : null;
            _this.setState({ order: order, highlighted: highlighted });
        };
        _this.state = { order: [], highlighted: null };
        return _this;
    }
    TimelineAcks.prototype.render = function () {
        var _this = this;
        var _a = this.props, acknowledges = _a.acknowledges, timeRange = _a.timeRange, width = _a.width, size = _a.size;
        var timeFrom = timeRange.timeFrom, timeTo = timeRange.timeTo;
        var range = timeTo - timeFrom;
        var pointR = size / 2;
        var eventsItems = acknowledges.map(function (ack, i) {
            var ts = Number(ack.clock);
            var posLeft = Math.round((ts - timeFrom) / range * width - pointR);
            var highlighted = _this.state.highlighted === i;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineAck, { key: ack.eventid + "-" + i, x: posLeft, r: pointR, highlighted: highlighted, onHighlight: _this.handleHighlight(i), onUnHighlight: _this.handleUnHighlight }));
        });
        if (this.state.order.length) {
            return this.state.order.map(function (i) { return eventsItems[i]; });
        }
        return eventsItems;
    };
    return TimelineAcks;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var TimelineAck = /** @class */ (function (_super) {
    __extends(TimelineAck, _super);
    function TimelineAck(props) {
        var _this = _super.call(this, props) || this;
        _this.handleHighlight = function () {
            if (_this.props.onHighlight) {
                _this.props.onHighlight();
            }
        };
        _this.handleUnHighlight = function () {
            if (_this.props.onUnHighlight) {
                _this.props.onUnHighlight();
            }
        };
        _this.state = { highlighted: false };
        return _this;
    }
    TimelineAck.prototype.componentDidUpdate = function (prevProps) {
        // Update component after reordering to make animation working
        if (prevProps.highlighted !== this.props.highlighted) {
            this.setState({ highlighted: this.props.highlighted });
        }
    };
    TimelineAck.prototype.render = function () {
        var x = this.props.x;
        var r = this.state.highlighted ? Math.round(this.props.r * HIGHLIGHTED_POINT_SIZE) : this.props.r;
        var cx = x + this.props.r;
        var rInner = Math.round(r * INNER_POINT_SIZE);
        var className = "problem-event-ack " + (this.state.highlighted ? 'highlighted' : '');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: className, transform: "translate(" + cx + ", 0)", filter: "url(#dropShadow)", onMouseOver: this.handleHighlight, onMouseLeave: this.handleUnHighlight },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: 0, cy: 0, r: r, className: "point-border" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: 0, cy: 0, r: rInner, className: "point-core" })));
    };
    return TimelineAck;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
function moveToEnd(array, itemsToMove) {
    var removed = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.pullAt(array, itemsToMove);
    removed.reverse();
    array.push.apply(array, removed);
    return array;
}


/***/ }),

/***/ "./panel-triggers/components/Problems/Problems.tsx":
/*!*********************************************************!*\
  !*** ./panel-triggers/components/Problems/Problems.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_table_6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table-6 */ "../node_modules/react-table-6/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./panel-triggers/utils.ts");
/* harmony import */ var _EventTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EventTag */ "./panel-triggers/components/EventTag.tsx");
/* harmony import */ var _ProblemDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProblemDetails */ "./panel-triggers/components/Problems/ProblemDetails.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/* harmony import */ var _AckCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AckCell */ "./panel-triggers/components/Problems/AckCell.tsx");
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










var ProblemList = /** @class */ (function (_super) {
    __extends(ProblemList, _super);
    function ProblemList(props) {
        var _this = _super.call(this, props) || this;
        _this.setRootRef = function (ref) {
            _this.rootRef = ref;
        };
        _this.handleProblemAck = function (problem, data) {
            return _this.props.onProblemAck(problem, data);
        };
        _this.onExecuteScript = function (problem, data) {
        };
        _this.handlePageSizeChange = function (pageSize, pageIndex) {
            if (_this.props.onPageSizeChange) {
                _this.props.onPageSizeChange(pageSize, pageIndex);
            }
        };
        _this.handleResizedChange = function (newResized, event) {
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize(newResized);
            }
        };
        _this.handleExpandedChange = function (expanded, event) {
            var _a = _this.props, problems = _a.problems, pageSize = _a.pageSize;
            var page = _this.state.page;
            var expandedProblems = {};
            for (var row in expanded) {
                var rowId = Number(row);
                var problemIndex = pageSize * page + rowId;
                if (expanded[row] && problemIndex < problems.length) {
                    var expandedProblem = problems[problemIndex].eventid;
                    if (expandedProblem) {
                        expandedProblems[expandedProblem] = true;
                    }
                }
            }
            var nextExpanded = __assign({}, _this.state.expanded);
            nextExpanded[page] = expanded;
            var nextExpandedProblems = __assign({}, _this.state.expandedProblems);
            nextExpandedProblems[page] = expandedProblems;
            _this.setState({
                expanded: nextExpanded,
                expandedProblems: nextExpandedProblems,
            });
        };
        _this.handleTagClick = function (tag, datasource, ctrlKey, shiftKey) {
            if (_this.props.onTagClick) {
                _this.props.onTagClick(tag, datasource, ctrlKey, shiftKey);
            }
        };
        _this.getExpandedPage = function (page) {
            var _a = _this.props, problems = _a.problems, pageSize = _a.pageSize;
            var expandedProblems = _this.state.expandedProblems;
            var expandedProblemsPage = expandedProblems[page] || {};
            var expandedPage = {};
            // Go through the page and search for expanded problems
            var startIndex = pageSize * page;
            var endIndex = Math.min(startIndex + pageSize, problems.length);
            for (var i = startIndex; i < endIndex; i++) {
                var problem = problems[i];
                if (expandedProblemsPage[problem.eventid]) {
                    expandedPage[i - startIndex] = {};
                }
            }
            return expandedPage;
        };
        _this.state = {
            expanded: {},
            expandedProblems: {},
            page: 0,
        };
        return _this;
    }
    ProblemList.prototype.buildColumns = function () {
        var _this = this;
        var result = [];
        var options = this.props.panelOptions;
        var highlightNewerThan = options.highlightNewEvents && options.highlightNewerThan;
        var statusCell = function (props) { return StatusCell(props, highlightNewerThan); };
        var statusIconCell = function (props) { return StatusIconCell(props, highlightNewerThan); };
        var hostNameCell = function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HostCell, { name: props.original.host, maintenance: props.original.maintenance }); };
        var hostTechNameCell = function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HostCell, { name: props.original.hostTechName, maintenance: props.original.maintenance }); };
        var columns = [
            { Header: 'Host', id: 'host', show: options.hostField, Cell: hostNameCell },
            { Header: 'Host (Technical Name)', id: 'hostTechName', show: options.hostTechNameField, Cell: hostTechNameCell },
            { Header: 'Host Groups', accessor: 'groups', show: options.hostGroups, Cell: GroupCell },
            { Header: 'Proxy', accessor: 'proxy', show: options.hostProxy },
            {
                Header: 'Severity', show: options.severityField, className: 'problem-severity', width: 120,
                accessor: function (problem) { return problem.priority; },
                id: 'severity',
                Cell: function (props) { return SeverityCell(props, options.triggerSeverity, options.markAckEvents, options.ackEventColor, options.okEventColor); },
            },
            {
                Header: '', id: 'statusIcon', show: options.statusIcon, className: 'problem-status-icon', width: 50,
                accessor: 'value',
                Cell: statusIconCell,
            },
            { Header: 'Status', accessor: 'value', show: options.statusField, width: 100, Cell: statusCell },
            { Header: 'Problem', accessor: 'description', minWidth: 200, Cell: ProblemCell },
            {
                Header: 'Ack', id: 'ack', show: options.ackField, width: 70,
                Cell: function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AckCell__WEBPACK_IMPORTED_MODULE_9__["AckCell"], __assign({}, props)); }
            },
            {
                Header: 'Tags', accessor: 'tags', show: options.showTags, className: 'problem-tags',
                Cell: function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagCell, __assign({}, props, { onTagClick: _this.handleTagClick })); }
            },
            {
                Header: 'Age', className: 'problem-age', width: 100, show: options.ageField, accessor: 'timestamp',
                id: 'age',
                Cell: AgeCell,
            },
            {
                Header: 'Time', className: 'last-change', width: 150, accessor: 'timestamp',
                id: 'lastchange',
                Cell: function (props) { return LastChangeCell(props, options.customLastChangeFormat && options.lastChangeFormat); },
            },
            { Header: '', className: 'custom-expander', width: 60, expander: true, Expander: CustomExpander },
        ];
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (column.show || column.show === undefined) {
                delete column.show;
                result.push(column);
            }
        }
        return result;
    };
    ProblemList.prototype.render = function () {
        var _a;
        var _this = this;
        var columns = this.buildColumns();
        this.rootWidth = this.rootRef && this.rootRef.clientWidth;
        var _b = this.props, pageSize = _b.pageSize, fontSize = _b.fontSize, panelOptions = _b.panelOptions;
        var panelClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('panel-problems', (_a = {}, _a["font-size--" + fontSize] = fontSize, _a));
        var pageSizeOptions = [5, 10, 20, 25, 50, 100];
        if (pageSize) {
            pageSizeOptions.push(pageSize);
            pageSizeOptions = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.sortBy(pageSizeOptions));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: panelClass, ref: this.setRootRef },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table_6__WEBPACK_IMPORTED_MODULE_1__["default"], { data: this.props.problems, columns: columns, defaultPageSize: 10, pageSize: pageSize, pageSizeOptions: pageSizeOptions, resized: panelOptions.resizedColumns, minRows: 0, loading: this.props.loading, noDataText: "No problems found", SubComponent: function (props) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProblemDetails__WEBPACK_IMPORTED_MODULE_7__["ProblemDetails"], __assign({}, props, { rootWidth: _this.rootWidth, timeRange: _this.props.timeRange, showTimeline: panelOptions.problemTimeline, panelId: _this.props.panelId, getProblemEvents: _this.props.getProblemEvents, getProblemAlerts: _this.props.getProblemAlerts, getScripts: _this.props.getScripts, onProblemAck: _this.handleProblemAck, onExecuteScript: _this.props.onExecuteScript, onTagClick: _this.handleTagClick, subRows: false }));
                }, expanded: this.getExpandedPage(this.state.page), onExpandedChange: this.handleExpandedChange, onPageChange: function (page) { return _this.setState({ page: page }); }, onPageSizeChange: this.handlePageSizeChange, onResizedChange: this.handleResizedChange })));
    };
    return ProblemList;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (ProblemList);
var HostCell = function (_a) {
    var name = _a.name, maintenance = _a.maintenance;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { paddingRight: '0.4rem' } }, name),
        maintenance && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["FAIcon"], { customClass: "fired", icon: "wrench" })));
};
function SeverityCell(props, problemSeverityDesc, markAckEvents, ackEventColor, okColor) {
    if (okColor === void 0) { okColor = DEFAULT_OK_COLOR; }
    var problem = props.original;
    var color;
    var severityDesc;
    var severity = Number(problem.severity);
    severityDesc = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(problemSeverityDesc, function (s) { return s.priority === severity; });
    if (problem.severity && problem.value === '1') {
        severityDesc = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(problemSeverityDesc, function (s) { return s.priority === severity; });
    }
    color = problem.value === '0' ? okColor : severityDesc.color;
    // Mark acknowledged triggers with different color
    if (markAckEvents && problem.acknowledged === "1") {
        color = ackEventColor;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'severity-cell', style: { background: color } }, severityDesc.severity));
}
var DEFAULT_OK_COLOR = 'rgb(56, 189, 113)';
var DEFAULT_PROBLEM_COLOR = 'rgb(215, 0, 0)';
function StatusCell(props, highlightNewerThan) {
    var status = props.value === '0' ? 'RESOLVED' : 'PROBLEM';
    var color = props.value === '0' ? DEFAULT_OK_COLOR : DEFAULT_PROBLEM_COLOR;
    var newProblem = false;
    if (highlightNewerThan) {
        newProblem = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isNewProblem"])(props.original, highlightNewerThan);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: newProblem ? 'problem-status--new' : '', style: { color: color } }, status));
}
function StatusIconCell(props, highlightNewerThan) {
    var status = props.value === '0' ? 'ok' : 'problem';
    var newProblem = false;
    if (highlightNewerThan) {
        newProblem = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isNewProblem"])(props.original, highlightNewerThan);
    }
    var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('zbx-problem-status-icon', { 'problem-status--new': newProblem }, { 'zbx-problem': props.value === '1' }, { 'zbx-ok': props.value === '0' });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["GFHeartIcon"], { status: status, className: className });
}
function GroupCell(props) {
    var groups = "";
    if (props.value && props.value.length) {
        groups = props.value.map(function (g) { return g.name; }).join(', ');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, groups));
}
function ProblemCell(props) {
    var comments = props.original.comments;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "problem-description" }, props.value)));
}
function AgeCell(props) {
    var problem = props.original;
    var timestamp = moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(problem.timestamp);
    var age = timestamp.fromNow(true);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, age);
}
function LastChangeCell(props, customFormat) {
    var DEFAULT_TIME_FORMAT = "DD MMM YYYY HH:mm:ss";
    var problem = props.original;
    var timestamp = moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(problem.timestamp);
    var format = customFormat || DEFAULT_TIME_FORMAT;
    var lastchange = timestamp.format(format);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, lastchange);
}
var TagCell = /** @class */ (function (_super) {
    __extends(TagCell, _super);
    function TagCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTagClick = function (tag, ctrlKey, shiftKey) {
            if (_this.props.onTagClick) {
                _this.props.onTagClick(tag, _this.props.original.datasource, ctrlKey, shiftKey);
            }
        };
        return _this;
    }
    TagCell.prototype.render = function () {
        var _this = this;
        var tags = this.props.value || [];
        return [
            tags.map(function (tag) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventTag__WEBPACK_IMPORTED_MODULE_6__["default"], { key: tag.tag + tag.value, tag: tag, onClick: _this.handleTagClick }); })
        ];
    };
    return TagCell;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
function CustomExpander(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: props.isExpanded ? "expanded" : "" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-info-circle" })));
}


/***/ }),

/***/ "./panel-triggers/localization.ts":
/*!****************************************!*\
  !*** ./panel-triggers/localization.ts ***!
  \****************************************/
/*! exports provided: texts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "texts", function() { return texts; });
var texts = {
    fi: {
        critical: 'Kriittinen',
        major: 'Vakava',
        average: 'Keskitaso',
        minor: 'Matala',
        info: 'Informatiivinen',
        unknown: 'Tuntematon',
        noActiveAlerts: 'Ei aktiivisia häiriöitä',
        acknowledgeProblem: 'Kommentoi',
        time: 'Aika',
        user: 'Käyttäjä',
        comments: 'Kommentit',
        message: 'Viesti',
        pressEnterToSubmit: 'Paina Enter lähettääksesi',
        update: 'Päivitä',
        cancel: 'Peruuta',
        changeSeverity: 'Muuta prioriteettia',
        acknowledge: 'Merkitse käsitellyksi',
        closeProblem: 'Sulje häiriö',
        lastedFor: 'kestänyt',
        information: 'Tietoja',
        title: 'Otsikko',
        description: 'Kuvaus',
        priority: 'Prioriteetti',
        eventId: 'Häiriön ID',
        startTime: 'Aloitusaika',
        endTime: 'Päätösaika',
        duration: 'Kesto',
        acknowledgements: 'Kommentit',
        dashboard: 'Tilannekuvanäkymä',
        urlInfo: 'Siirry määriteltyyn tilannekuvaan',
        search: 'Haku',
        selectCategory: 'Valitse kategoria',
        selectPriority: 'Valitse prioriteetti',
        testIncident: 'Testihäiriö'
    },
    en: {
        critical: 'Critical',
        major: 'Major',
        average: 'Average',
        minor: 'Minor',
        info: 'Informative',
        unknown: 'Unknown',
        noActiveAlerts: 'No active alerts',
        acknowledgeProblem: 'Acknowledge Problem',
        time: 'Time',
        user: 'User',
        comments: 'Comments',
        message: 'Message',
        pressEnterToSubmit: 'Press Enter to submit',
        update: 'Update',
        cancel: 'Cancel',
        changeSeverity: 'Change severity',
        acknowledge: 'Acknowledge',
        closeProblem: 'Close problem',
        lastedFor: 'lasted for',
        information: 'Information',
        title: 'Title',
        description: 'Description',
        priority: 'Priority',
        eventId: 'Event ID',
        startTime: 'Start time',
        endTime: 'End time',
        duration: 'Duration',
        acknowledgements: 'Acknowledgements',
        dashboard: 'Dashboard',
        urlInfo: 'Open defined dashboard',
        search: 'Search',
        selectCategory: 'Select category',
        selectPriority: 'Select priority',
        testIncident: 'Test Incident'
    },
};


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

/***/ "./panel-triggers/module.js":
/*!**********************************!*\
  !*** ./panel-triggers/module.js ***!
  \**********************************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers_panel_ctrl */ "./panel-triggers/triggers_panel_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return _triggers_panel_ctrl__WEBPACK_IMPORTED_MODULE_0__["TriggerPanelCtrl"]; });

/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Grafana-Zabbix
 * Zabbix plugin for Grafana.
 * http://github.com/alexanderzobnin/grafana-zabbix
 *
 * Trigger panel.
 * This feature sponsored by CORE IT
 * http://www.coreit.fr
 *
 * Copyright 2015 Alexander Zobnin alexanderzobnin@gmail.com
 * Licensed under the Apache License, Version 2.0
 */




Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["loadPluginCss"])({
  dark: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.dark.css',
  light: 'plugins/iiris-zabbix-triggers-panel/css/grafana-zabbix.light.css' });




/***/ }),

/***/ "./panel-triggers/options_tab.js":
/*!***************************************!*\
  !*** ./panel-triggers/options_tab.js ***!
  \***************************************/
/*! exports provided: triggerPanelOptionsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerPanelOptionsTab", function() { return triggerPanelOptionsTab; });
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /**
                                                                                                                                                       * Grafana-Zabbix
                                                                                                                                                       * Zabbix plugin for Grafana.
                                                                                                                                                       * http://github.com/alexanderzobnin/grafana-zabbix
                                                                                                                                                       *
                                                                                                                                                       * Trigger panel.
                                                                                                                                                       * This feature sponsored by CORE IT
                                                                                                                                                       * http://www.coreit.fr
                                                                                                                                                       *
                                                                                                                                                       * Copyright 2015 Alexander Zobnin alexanderzobnin@gmail.com
                                                                                                                                                       * Licensed under the Apache License, Version 2.0
                                                                                                                                                       */var

TriggerPanelOptionsCtrl =

/** @ngInject */
function TriggerPanelOptionsCtrl($scope) {_classCallCheck(this, TriggerPanelOptionsCtrl);
  $scope.editor = this;
  this.panelCtrl = $scope.ctrl;
  this.panel = this.panelCtrl.panel;

  this.layouts = [
  { text: 'Table', value: 'table' },
  { text: 'List', value: 'list' }];

  this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
  this.ackFilters = [
  'all triggers',
  'unacknowledged',
  'acknowledged'];


  this.sortingOptions = [
  { text: 'Default', value: 'default' },
  { text: 'Last change', value: 'lastchange' },
  { text: 'Severity', value: 'priority' }];


  this.showEventsFields = [
  { text: 'All', value: [0, 1] },
  { text: 'OK', value: [0] },
  { text: 'Problems', value: 1 }];

};


function triggerPanelOptionsTab() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/plugins/iiris-zabbix-triggers-panel/panel-triggers/partials/options_tab.html',
    controller: TriggerPanelOptionsCtrl };

}

/***/ }),

/***/ "./panel-triggers/triggers_panel_ctrl.ts":
/*!***********************************************!*\
  !*** ./panel-triggers/triggers_panel_ctrl.ts ***!
  \***********************************************/
/*! exports provided: DEFAULT_TARGET, DEFAULT_SEVERITY, getDefaultSeverity, PANEL_DEFAULTS, getSeverityOptions, TriggerPanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TARGET", function() { return DEFAULT_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEVERITY", function() { return DEFAULT_SEVERITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSeverity", function() { return getDefaultSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANEL_DEFAULTS", function() { return PANEL_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeverityOptions", function() { return getSeverityOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerPanelCtrl", function() { return TriggerPanelCtrl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grafana/app/core/utils/datemath */ "grafana/app/core/utils/datemath");
/* harmony import */ var grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _options_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options_tab */ "./panel-triggers/options_tab.js");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./migrations */ "./panel-triggers/migrations.ts");
/* harmony import */ var _components_Problems_Problems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Problems/Problems */ "./panel-triggers/components/Problems/Problems.tsx");
/* harmony import */ var _components_AlertList_AlertList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AlertList/AlertList */ "./panel-triggers/components/AlertList/AlertList.tsx");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./localization */ "./panel-triggers/localization.ts");
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












var PROBLEM_EVENTS_LIMIT = 100;
var DEFAULT_TARGET = {
    group: { filter: "" },
    host: { filter: "" },
    application: { filter: "" },
    trigger: { filter: "" },
    tags: { filter: "" },
    proxy: { filter: "" },
    showProblems: 'problems',
};
var DEFAULT_SEVERITY = [
    { priority: 0, severity: 'Tuntematon', color: 'rgb(108, 108, 108)', show: false },
    { priority: 1, severity: 'Informatiivinen', color: 'rgb(120, 158, 183)', show: true },
    { priority: 2, severity: 'Matala', color: 'rgb(175, 180, 36)', show: true },
    { priority: 3, severity: 'Keskitaso', color: 'rgb(255, 137, 30)', show: true },
    { priority: 4, severity: 'Vakava', color: 'rgb(255, 101, 72)', show: true },
    { priority: 5, severity: 'Kriittinen', color: 'rgb(215, 0, 0)', show: true },
];
var getDefaultSeverity = function () { return DEFAULT_SEVERITY; };
var DEFAULT_TIME_FORMAT = "DD MMM YYYY HH:mm:ss";
var PANEL_DEFAULTS = {
    schemaVersion: _migrations__WEBPACK_IMPORTED_MODULE_8__["CURRENT_SCHEMA_VERSION"],
    targets: [{}],
    // Fields
    hostField: false,
    hostTechNameField: false,
    hostProxy: false,
    hostGroups: false,
    showTags: false,
    statusField: false,
    statusIcon: false,
    severityField: true,
    ackField: true,
    ageField: true,
    descriptionField: true,
    descriptionAtNewLine: true,
    // Options
    sortProblems: 'priority',
    limit: 10,
    // View options
    layout: 'list',
    fontSize: '100%',
    pageSize: 5,
    problemTimeline: true,
    highlightBackground: true,
    highlightNewEvents: true,
    highlightNewerThan: '1h',
    customLastChangeFormat: false,
    lastChangeFormat: "",
    resizedColumns: [],
    // Triggers severity and colors
    triggerSeverity: getDefaultSeverity(),
    okEventColor: 'rgb(56, 189, 113)',
    ackEventColor: 'rgb(56, 219, 156)',
    markAckEvents: false,
};
var triggerStatusMap = {
    '0': 'OK',
    '1': 'PROBLEM'
};
function getSeverityOptions(texts) {
    return [
        { value: 0, label: texts.unknown },
        { value: 1, label: texts.info },
        { value: 2, label: texts.minor },
        { value: 3, label: texts.average },
        { value: 4, label: texts.major },
        { value: 5, label: texts.critical }
    ];
}
;
var TriggerPanelCtrl = /** @class */ (function (_super) {
    __extends(TriggerPanelCtrl, _super);
    /** @ngInject */
    function TriggerPanelCtrl($scope, $injector, $timeout) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.scope = $scope;
        _this.$timeout = $timeout;
        // Tell Grafana do not convert data frames to table or series
        _this.useDataFrames = true;
        _this.triggerStatusMap = triggerStatusMap;
        _this.defaultTimeFormat = DEFAULT_TIME_FORMAT;
        _this.pageIndex = 0;
        _this.range = {};
        _this.renderData = [];
        _this.panel = Object(_migrations__WEBPACK_IMPORTED_MODULE_8__["migratePanelSchema"])(_this.panel);
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaultsDeep(_this.panel, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(PANEL_DEFAULTS));
        // this.events.on(PanelEvents.render, this.onRender.bind(this));
        _this.events.on('data-frames-received', _this.onDataFramesReceived.bind(_this));
        _this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_4__["PanelEvents"].dataSnapshotLoad, _this.onDataSnapshotLoad.bind(_this));
        _this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_4__["PanelEvents"].editModeInitialized, _this.onInitEditMode.bind(_this));
        // Check for Iiris language
        _this.storedLanguage = localStorage.getItem('iiris_language') || 'fi';
        PANEL_DEFAULTS.triggerSeverity[0].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].unknown;
        PANEL_DEFAULTS.triggerSeverity[1].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].info;
        PANEL_DEFAULTS.triggerSeverity[2].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].minor;
        PANEL_DEFAULTS.triggerSeverity[3].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].average;
        PANEL_DEFAULTS.triggerSeverity[4].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].major;
        PANEL_DEFAULTS.triggerSeverity[5].severity = _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][_this.storedLanguage].critical;
        return _this;
    }
    TriggerPanelCtrl.prototype.onInitEditMode = function () {
        // Update schema version to prevent migration on up-to-date targets
        this.panel.schemaVersion = _migrations__WEBPACK_IMPORTED_MODULE_8__["CURRENT_SCHEMA_VERSION"];
        this.addEditorTab('Options', _options_tab__WEBPACK_IMPORTED_MODULE_7__["triggerPanelOptionsTab"]);
    };
    TriggerPanelCtrl.prototype.onDataFramesReceived = function (data) {
        this.range = this.timeSrv.timeRange();
        var problems = [];
        if (data && data.length) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var dataFrame = data_1[_i];
                try {
                    var values = dataFrame.fields[0].values;
                    if (values.toArray) {
                        problems.push(values.toArray());
                    }
                    else if (values.length > 0) {
                        // On snapshot mode values is a plain Array, not ArrayVector
                        problems.push(values);
                    }
                }
                catch (error) {
                    console.log(error);
                    return Promise.reject(error);
                }
            }
        }
        this.loading = false;
        problems = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.flatten(problems);
        this.problems = problems;
        return this.renderProblems(problems);
    };
    TriggerPanelCtrl.prototype.onDataSnapshotLoad = function (snapshotData) {
        return this.onDataFramesReceived(snapshotData);
    };
    TriggerPanelCtrl.prototype.reRenderProblems = function () {
        if (this.problems) {
            this.renderProblems(this.problems);
        }
    };
    TriggerPanelCtrl.prototype.setPanelError = function (err, defaultError) {
        if (defaultError === void 0) { defaultError = "Request Error"; }
        this.inspector = { error: err };
        this.error = err.message || defaultError;
        if (err.data) {
            if (err.data.message) {
                this.error = err.data.message;
            }
            if (err.data.error) {
                this.error = err.data.error;
            }
        }
        // this.events.emit(PanelEvents.dataError, err);
        console.log('Panel data error:', err);
    };
    TriggerPanelCtrl.prototype.renderProblems = function (problems) {
        var _this = this;
        var triggers = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(problems);
        triggers = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(triggers, this.formatTrigger.bind(this));
        triggers = this.filterProblems(triggers);
        triggers = this.sortTriggers(triggers);
        this.renderData = triggers;
        return this.$timeout(function () {
            return _super.prototype.render.call(_this, triggers);
        });
    };
    TriggerPanelCtrl.prototype.filterProblems = function (problems) {
        var _this = this;
        var problemsList = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(problems);
        // Filter acknowledged triggers
        if (this.panel.showTriggers === 'unacknowledged') {
            problemsList = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(problemsList, function (trigger) {
                return !(trigger.acknowledges && trigger.acknowledges.length);
            });
        }
        else if (this.panel.showTriggers === 'acknowledged') {
            problemsList = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(problemsList, function (trigger) {
                return trigger.acknowledges && trigger.acknowledges.length;
            });
        }
        // Filter triggers by severity
        problemsList = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(problemsList, function (problem) {
            if (problem.severity) {
                return _this.panel.triggerSeverity[problem.severity].show;
            }
            else {
                return _this.panel.triggerSeverity[problem.priority].show;
            }
        });
        return problemsList;
    };
    TriggerPanelCtrl.prototype.sortTriggers = function (problems) {
        if (this.panel.sortProblems === 'priority') {
            problems = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(problems, ['severity', 'timestamp', 'eventid'], ['desc', 'desc', 'desc']);
        }
        else if (this.panel.sortProblems === 'lastchange') {
            problems = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(problems, ['timestamp', 'severity', 'eventid'], ['desc', 'desc', 'desc']);
        }
        return problems;
    };
    TriggerPanelCtrl.prototype.formatTrigger = function (zabbixTrigger) {
        var trigger = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(zabbixTrigger);
        // Set host and proxy that the trigger belongs
        if (trigger.hosts && trigger.hosts.length) {
            var host = trigger.hosts[0];
            trigger.host = host.name;
            trigger.hostTechName = host.host;
            if (host.proxy) {
                trigger.proxy = host.proxy;
            }
        }
        // Set tags if present
        if (trigger.tags && trigger.tags.length === 0) {
            trigger.tags = null;
        }
        // Handle multi-line description
        /* if (trigger.comments) {
          trigger.comments = trigger.comments.replace('\n', '<br>');
        } */
        trigger.lastchangeUnix = Number(trigger.lastchange);
        return trigger;
    };
    TriggerPanelCtrl.prototype.parseTags = function (tagStr) {
        if (!tagStr) {
            return [];
        }
        var tags = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(tagStr.split(','), function (tag) { return tag.trim(); });
        tags = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(tags, function (tag) {
            var tagParts = tag.split(':');
            return { tag: tagParts[0].trim(), value: tagParts[1].trim() };
        });
        return tags;
    };
    TriggerPanelCtrl.prototype.tagsToString = function (tags) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(tags, function (tag) { return tag.tag + ":" + tag.value; }).join(', ');
    };
    TriggerPanelCtrl.prototype.addTagFilter = function (tag, datasource) {
        for (var _i = 0, _a = this.panel.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            if (target.datasource === datasource || this.panel.datasource === datasource) {
                var tagFilter = target.tags.filter;
                var targetTags = this.parseTags(tagFilter);
                var newTag = { tag: tag.tag, value: tag.value };
                targetTags.push(newTag);
                targetTags = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniqWith(targetTags, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual);
                var newFilter = this.tagsToString(targetTags);
                target.tags.filter = newFilter;
            }
        }
        this.refresh();
    };
    TriggerPanelCtrl.prototype.removeTagFilter = function (tag, datasource) {
        var matchTag = function (t) { return t.tag === tag.tag && t.value === tag.value; };
        for (var _i = 0, _a = this.panel.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            if (target.datasource === datasource || this.panel.datasource === datasource) {
                var tagFilter = target.tags.filter;
                var targetTags = this.parseTags(tagFilter);
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.remove(targetTags, matchTag);
                targetTags = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniqWith(targetTags, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual);
                var newFilter = this.tagsToString(targetTags);
                target.tags.filter = newFilter;
            }
        }
        this.refresh();
    };
    TriggerPanelCtrl.prototype.getProblemEvents = function (problem) {
        var triggerids = [problem.triggerid];
        var timeFrom = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__["parse"](this.range.from) / 1000);
        var timeTo = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__["parse"](this.range.to) / 1000);
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getDataSourceSrv"])().get(problem.datasource)
            .then(function (datasource) {
            return datasource.zabbix.getEvents(triggerids, timeFrom, timeTo, [0, 1], PROBLEM_EVENTS_LIMIT);
        });
    };
    TriggerPanelCtrl.prototype.getProblemAlerts = function (problem) {
        if (!problem.eventid) {
            return Promise.resolve([]);
        }
        var eventids = [problem.eventid];
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getDataSourceSrv"])().get(problem.datasource)
            .then(function (datasource) {
            return datasource.zabbix.getEventAlerts(eventids);
        });
    };
    TriggerPanelCtrl.prototype.getProblemScripts = function (problem) {
        var _a;
        var hostid = ((_a = problem.hosts) === null || _a === void 0 ? void 0 : _a.length) ? problem.hosts[0].hostid : null;
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getDataSourceSrv"])().get(problem.datasource)
            .then(function (datasource) {
            return datasource.zabbix.getScripts([hostid]);
        });
    };
    TriggerPanelCtrl.prototype.getAlertIconClassBySeverity = function (triggerSeverity) {
        var iconClass = 'icon-gf-online';
        if (triggerSeverity.priority >= 2) {
            iconClass = 'icon-gf-critical';
        }
        return iconClass;
    };
    TriggerPanelCtrl.prototype.resetResizedColumns = function () {
        this.panel.resizedColumns = [];
        this.render();
    };
    TriggerPanelCtrl.prototype.acknowledgeProblem = function (problem, message, action, severity) {
        var _this = this;
        var eventid = problem.eventid;
        var grafana_user = this.contextSrv.user.name;
        var ack_message = grafana_user + ' (Grafana): ' + message;
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getDataSourceSrv"])().get(problem.datasource)
            .then(function (datasource) {
            var userIsEditor = _this.contextSrv.isEditor || _this.contextSrv.isGrafanaAdmin;
            if (datasource.disableReadOnlyUsersAck && !userIsEditor) {
                return Promise.reject({ message: 'You have no permissions to acknowledge events.' });
            }
            if (eventid) {
                return datasource.zabbix.acknowledgeEvent(eventid, ack_message, action, severity);
            }
            else {
                return Promise.reject({ message: 'Trigger has no events. Nothing to acknowledge.' });
            }
        })
            .then(this.refresh.bind(this))
            .catch(function (err) {
            _this.setPanelError(err);
            return Promise.reject(err);
        });
    };
    TriggerPanelCtrl.prototype.executeScript = function (problem, scriptid) {
        var _a;
        var hostid = ((_a = problem.hosts) === null || _a === void 0 ? void 0 : _a.length) ? problem.hosts[0].hostid : null;
        return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getDataSourceSrv"])().get(problem.datasource)
            .then(function (datasource) {
            return datasource.zabbix.executeScript(hostid, scriptid);
        });
    };
    TriggerPanelCtrl.prototype.handlePageSizeChange = function (pageSize, pageIndex) {
        var _this = this;
        this.panel.pageSize = pageSize;
        this.pageIndex = pageIndex;
        this.scope.$apply(function () {
            _this.render();
        });
    };
    TriggerPanelCtrl.prototype.handleColumnResize = function (newResized) {
        var _this = this;
        this.panel.resizedColumns = newResized;
        this.scope.$apply(function () {
            _this.render();
        });
    };
    TriggerPanelCtrl.prototype.link = function (scope, elem, attrs, ctrl) {
        var _this = this;
        var panel = ctrl.panel;
        ctrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_4__["PanelEvents"].render, function (renderData) {
            renderData = renderData || _this.renderData;
            renderPanel(renderData);
            ctrl.renderingCompleted();
        });
        function renderPanel(problems) {
            var timeFrom = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__["parse"](ctrl.range.from) / 1000);
            var timeTo = Math.ceil(grafana_app_core_utils_datemath__WEBPACK_IMPORTED_MODULE_5__["parse"](ctrl.range.to) / 1000);
            var fontSize = parseInt(panel.fontSize.slice(0, panel.fontSize.length - 1), 10);
            var fontSizeProp = fontSize && fontSize !== 100 ? fontSize : null;
            var pageSize = panel.pageSize || 10;
            var loading = ctrl.loading && (!problems || !problems.length);
            var panelOptions = {};
            for (var prop in PANEL_DEFAULTS) {
                panelOptions[prop] = ctrl.panel[prop];
            }
            panelOptions['triggerSeverity'] = PANEL_DEFAULTS.triggerSeverity;
            var problemsListProps = {
                problems: problems,
                panelOptions: panelOptions,
                timeRange: { timeFrom: timeFrom, timeTo: timeTo },
                loading: loading,
                pageSize: pageSize,
                fontSize: fontSizeProp,
                panelId: ctrl.panel.id,
                getProblemEvents: ctrl.getProblemEvents.bind(ctrl),
                getProblemAlerts: ctrl.getProblemAlerts.bind(ctrl),
                getScripts: ctrl.getProblemScripts.bind(ctrl),
                onPageSizeChange: ctrl.handlePageSizeChange.bind(ctrl),
                onColumnResize: ctrl.handleColumnResize.bind(ctrl),
                onProblemAck: function (trigger, data) {
                    var message = data.message, action = data.action, severity = data.severity;
                    return ctrl.acknowledgeProblem(trigger, message, action, severity);
                },
                onExecuteScript: ctrl.executeScript.bind(ctrl),
                onTagClick: function (tag, datasource, ctrlKey, shiftKey) {
                    if (ctrlKey || shiftKey) {
                        ctrl.removeTagFilter(tag, datasource);
                    }
                    else {
                        ctrl.addTagFilter(tag, datasource);
                    }
                },
                texts: _localization__WEBPACK_IMPORTED_MODULE_11__["texts"][ctrl.storedLanguage]
            };
            var problemsReactElem;
            if (panel.layout === 'list') {
                problemsReactElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AlertList_AlertList__WEBPACK_IMPORTED_MODULE_10__["default"], problemsListProps);
            }
            else {
                problemsReactElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Problems_Problems__WEBPACK_IMPORTED_MODULE_9__["default"], problemsListProps);
            }
            var panelContainerElem = elem.find('.panel-content');
            if (panelContainerElem && panelContainerElem.length) {
                react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(problemsReactElem, panelContainerElem[0]);
            }
            else {
                react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(problemsReactElem, elem[0]);
            }
        }
    };
    return TriggerPanelCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_6__["MetricsPanelCtrl"]));

TriggerPanelCtrl.templateUrl = 'public/plugins/iiris-zabbix-triggers-panel/panel-triggers/partials/module.html';


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

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "grafana/app/core/utils/datemath":
/*!******************************************!*\
  !*** external "app/core/utils/datemath" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_datemath__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

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

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map