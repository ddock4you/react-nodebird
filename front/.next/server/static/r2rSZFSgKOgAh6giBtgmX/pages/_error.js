module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/0+H":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"cDcd\"));\n\nconst amp_context_1 = __webpack_require__(/*! ./amp-context */ \"lwAK\");\n\nfunction isInAmpMode({\n  ampFirst = false,\n  hybrid = false,\n  hasQuery = false\n} = {}) {\n  return ampFirst || hybrid && hasQuery;\n}\n\nexports.isInAmpMode = isInAmpMode;\n\nfunction useAmp() {\n  // Don't assign the context value to a variable to save bytes\n  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));\n}\n\nexports.useAmp = useAmp;\n\n//# sourceURL=webpack:///./node_modules/next/dist/next-server/lib/amp.js?");

/***/ }),

/***/ "/a9y":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"KI45\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"cDcd\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ \"8Kt/\"));\n\nvar statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n/**\n* `Error` component used for handling errors.\n*/\n\nclass Error extends _react.default.Component {\n  static getInitialProps(_ref) {\n    var {\n      res,\n      err\n    } = _ref;\n    var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n      statusCode\n    };\n  }\n\n  render() {\n    var {\n      statusCode\n    } = this.props;\n    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return _react.default.createElement(\"div\", {\n      style: styles.error\n    }, _react.default.createElement(_head.default, null, _react.default.createElement(\"title\", null, statusCode, \": \", title)), _react.default.createElement(\"div\", null, _react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: 'body { margin: 0 }'\n      }\n    }), statusCode ? _react.default.createElement(\"h1\", {\n      style: styles.h1\n    }, statusCode) : null, _react.default.createElement(\"div\", {\n      style: styles.desc\n    }, _react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, title, \".\"))));\n  }\n\n}\n\nexports.default = Error;\nError.displayName = 'ErrorPage';\nvar styles = {\n  error: {\n    color: '#000',\n    background: '#fff',\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    borderRight: '1px solid rgba(0, 0, 0,.3)',\n    margin: 0,\n    marginRight: '20px',\n    padding: '10px 23px 10px 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: 'inherit',\n    margin: 0,\n    padding: 0\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/next/dist/pages/_error.js?");

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi private-next-pages/_error.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_error.js */\"Y0NT\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_error.js?");

/***/ }),

/***/ "8Kt/":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"cDcd\"));\n\nconst side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ \"Xuae\"));\n\nconst amp_context_1 = __webpack_require__(/*! ./amp-context */ \"lwAK\");\n\nconst head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ \"FYa8\");\n\nconst amp_1 = __webpack_require__(/*! ./amp */ \"/0+H\");\n\nfunction defaultHead(inAmpMode = false) {\n  const head = [react_1.default.createElement(\"meta\", {\n    charSet: \"utf-8\"\n  })];\n\n  if (!inAmpMode) {\n    head.push(react_1.default.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width,minimum-scale=1,initial-scale=1\"\n    }));\n  }\n\n  return head;\n}\n\nexports.defaultHead = defaultHead;\n\nfunction onlyReactElement(list, child) {\n  // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n  if (typeof child === 'string' || typeof child === 'number') {\n    return list;\n  } // Adds support for React.Fragment\n\n\n  if (child.type === react_1.default.Fragment) {\n    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {\n      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {\n        return fragmentList;\n      }\n\n      return fragmentList.concat(fragmentChild);\n    }, []));\n  }\n\n  return list.concat(child);\n}\n\nconst METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/\n\nfunction unique() {\n  const keys = new Set();\n  const tags = new Set();\n  const metaTypes = new Set();\n  const metaCategories = {};\n  return h => {\n    let unique = true;\n\n    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {\n      const key = h.key.slice(h.key.indexOf('$') + 1);\n\n      if (keys.has(key)) {\n        unique = false;\n      } else {\n        keys.add(key);\n      }\n    } // eslint-disable-next-line default-case\n\n\n    switch (h.type) {\n      case 'title':\n      case 'base':\n        if (tags.has(h.type)) {\n          unique = false;\n        } else {\n          tags.add(h.type);\n        }\n\n        break;\n\n      case 'meta':\n        for (let i = 0, len = METATYPES.length; i < len; i++) {\n          const metatype = METATYPES[i];\n          if (!h.props.hasOwnProperty(metatype)) continue;\n\n          if (metatype === 'charSet') {\n            if (metaTypes.has(metatype)) {\n              unique = false;\n            } else {\n              metaTypes.add(metatype);\n            }\n          } else {\n            const category = h.props[metatype];\n            const categories = metaCategories[metatype] || new Set();\n\n            if (categories.has(category)) {\n              unique = false;\n            } else {\n              categories.add(category);\n              metaCategories[metatype] = categories;\n            }\n          }\n        }\n\n        break;\n    }\n\n    return unique;\n  };\n}\n/**\n *\n * @param headElement List of multiple <Head> instances\n */\n\n\nfunction reduceComponents(headElements, props) {\n  return headElements.reduce((list, headElement) => {\n    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);\n    return list.concat(headElementChildren);\n  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {\n    const key = c.key || i;\n    return react_1.default.cloneElement(c, {\n      key\n    });\n  });\n}\n\nconst Effect = side_effect_1.default();\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */\n\nfunction Head({\n  children\n}) {\n  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {\n    reduceComponentsToState: reduceComponents,\n    handleStateChange: updateHead,\n    inAmpMode: amp_1.isInAmpMode(ampState)\n  }, children)));\n}\n\nHead.rewind = Effect.rewind;\nexports.default = Head;\n\n//# sourceURL=webpack:///./node_modules/next/dist/next-server/lib/head.js?");

/***/ }),

/***/ "FYa8":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst React = __importStar(__webpack_require__(/*! react */ \"cDcd\"));\n\nexports.HeadManagerContext = React.createContext(null);\n\n//# sourceURL=webpack:///./node_modules/next/dist/next-server/lib/head-manager-context.js?");

/***/ }),

/***/ "KI45":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "Xuae":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __webpack_require__(/*! react */ \"cDcd\");\n\nconst isServer = true;\n\nexports.default = () => {\n  const mountedInstances = new Set();\n  let state;\n\n  function emitChange(component) {\n    state = component.props.reduceComponentsToState([...mountedInstances], component.props);\n\n    if (component.props.handleStateChange) {\n      component.props.handleStateChange(state);\n    }\n  }\n\n  return class extends react_1.Component {\n    // Used when server rendering\n    static rewind() {\n      const recordedState = state;\n      state = undefined;\n      mountedInstances.clear();\n      return recordedState;\n    }\n\n    constructor(props) {\n      super(props);\n\n      if (isServer) {\n        mountedInstances.add(this);\n        emitChange(this);\n      }\n    }\n\n    componentDidMount() {\n      mountedInstances.add(this);\n      emitChange(this);\n    }\n\n    componentDidUpdate() {\n      emitChange(this);\n    }\n\n    componentWillUnmount() {\n      mountedInstances.delete(this);\n      emitChange(this);\n    }\n\n    render() {\n      return null;\n    }\n\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/next/dist/next-server/lib/side-effect.js?");

/***/ }),

/***/ "Y0NT":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/error */ \"eomm\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst MyError = ({\n  statusCode\n}) => {\n  return __jsx(\"div\", null, __jsx(\"h1\", null, statusCode, \" \\uC5D0\\uB7EC \\uBC1C\\uC0DD\"));\n};\n\nMyError.defaultprops = {\n  statusCode: 400\n};\n\nMyError.getInitialProps = async context => {\n  const statusCode = context.res ? context.res.statusCode : context.err ? next_error__WEBPACK_IMPORTED_MODULE_0___default.a.statusCode : null;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyError); // 페이지 없는 오류 페이지를 해당 페이지로 대체(404 에러)\n\n//# sourceURL=webpack:///./pages/_error.js?");

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "eomm":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_error */ \"/a9y\")\n\n\n//# sourceURL=webpack:///./node_modules/next/error.js?");

/***/ }),

/***/ "lwAK":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst React = __importStar(__webpack_require__(/*! react */ \"cDcd\"));\n\nexports.AmpStateContext = React.createContext({});\n\n//# sourceURL=webpack:///./node_modules/next/dist/next-server/lib/amp-context.js?");

/***/ })

/******/ });