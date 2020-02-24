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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");\n\n//# sourceURL=webpack:///external_%22next/router%22?");

/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** multi private-next-pages/signup.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/signup.js */\"vL9u\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/signup.js?");

/***/ }),

/***/ "Exp3":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "LAVF":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_USER_REQUEST, LOG_USER_SUCCESS, LOG_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_TO_ME, signUpRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_USER_REQUEST\", function() { return LOG_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_USER_SUCCESS\", function() { return LOG_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_USER_FAILURE\", function() { return LOG_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_TO_ME\", function() { return REMOVE_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpRequestAction\", function() { return signUpRequestAction; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"T5ka\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n // store, 초기값\n\nconst initialState = {\n  isLoggedIn: false,\n  // 로그인 여부\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  logInErrorReason: \"\",\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSigningUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: \"\",\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [],\n  // 팔로워 리스트\n  userInfo: null,\n  // 남의 정보\n  isEditingNickname: false,\n  // 이름 변경 중\n  editNicknameErrorReason: \"\",\n  // 이름 변경 실패 사유\n  hasMoreFollower: false,\n  hasMoreFollowing: false\n}; //\n\nconst SIGN_UP_REQUEST = \"SIGN_UP_REQUEST\";\nconst SIGN_UP_SUCCESS = \"SIGN_UP_SUCCESS\";\nconst SIGN_UP_FAILURE = \"SIGN_UP_FAILURE\";\nconst LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nconst LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nconst LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nconst LOG_USER_REQUEST = \"LOG_USER_REQUEST\";\nconst LOG_USER_SUCCESS = \"LOG_USER_SUCCESS\";\nconst LOG_USER_FAILURE = \"LOG_USER_FAILURE\";\nconst LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nconst LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nconst LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\";\nconst LOAD_USER_REQUEST = \"LOAD_USER_REQUEST\";\nconst LOAD_USER_SUCCESS = \"LOAD_USER_SUCCESS\";\nconst LOAD_USER_FAILURE = \"LOAD_USER_FAILURE\";\nconst LOAD_FOLLOWERS_REQUEST = \"LOAD_FOLLOWERS_REQUEST\";\nconst LOAD_FOLLOWERS_SUCCESS = \"LOAD_FOLLOWERS_SUCCESS\";\nconst LOAD_FOLLOWERS_FAILURE = \"LOAD_FOLLOWERS_FAILURE\";\nconst LOAD_FOLLOWINGS_REQUEST = \"LOAD_FOLLOWINGS_REQUEST\";\nconst LOAD_FOLLOWINGS_SUCCESS = \"LOAD_FOLLOWINGS_SUCCESS\";\nconst LOAD_FOLLOWINGS_FAILURE = \"LOAD_FOLLOWINGS_FAILURE\";\nconst FOLLOW_USER_REQUEST = \"FOLLOW_USER_REQUEST\";\nconst FOLLOW_USER_SUCCESS = \"FOLLOW_USER_SUCCESS\";\nconst FOLLOW_USER_FAILURE = \"FOLLOW_USER_FAILURE\";\nconst UNFOLLOW_USER_REQUEST = \"UNFOLLOW_USER_REQUEST\";\nconst UNFOLLOW_USER_SUCCESS = \"UNFOLLOW_USER_SUCCESS\";\nconst UNFOLLOW_USER_FAILURE = \"UNFOLLOW_USER_FAILURE\";\nconst REMOVE_FOLLOWER_REQUEST = \"REMOVE_FOLLOWER_REQUEST\";\nconst REMOVE_FOLLOWER_SUCCESS = \"REMOVE_FOLLOWER_SUCCESS\";\nconst REMOVE_FOLLOWER_FAILURE = \"REMOVE_FOLLOWER_FAILURE\";\nconst EDIT_NICKNAME_REQUEST = \"EDIT_NICKNAME_REQUEST\";\nconst EDIT_NICKNAME_SUCCESS = \"EDIT_NICKNAME_SUCCESS\";\nconst EDIT_NICKNAME_FAILURE = \"EDIT_NICKNAME_FAILURE\";\nconst ADD_POST_TO_ME = \"ADD_POST_TO_ME\";\nconst REMOVE_POST_TO_ME = \"REMOVE_POST_TO_ME\"; // 실제 액션\n\nconst signUpRequestAction = data => {\n  return {\n    type: SIGN_UP_REQUEST,\n    data\n  };\n}; // 리듀서 -> Action의 결과로 state를 어떻게 바꿀지 정의\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case LOG_IN_REQUEST:\n        {\n          draft.isLoggedIn = true;\n          draft.logInErrorReason = \"\";\n          break; // return {\n          //     ...state,\n          //     isLoggedIn: true,\n          //     logInErrorReason: \"\"\n          // };\n        }\n\n      case LOG_IN_SUCCESS:\n        {\n          draft.isLoggedIn = false;\n          draft.me = action.data;\n          draft.isLoading = false;\n          break; // return {\n          //     ...state,\n          //     isLoggedIn: false,\n          //     me: action.data,\n          //     isLoading: false\n          // };\n        }\n\n      case LOG_IN_FAILURE:\n        {\n          draft.isLoggedIn = false;\n          draft.logInErrorReason = action.error;\n          draft.me = null;\n          break; // return {\n          //     ...state,\n          //     isLoggedIn: false,\n          //     logInErrorReason: action.error,\n          //     me: null\n          // };\n        }\n\n      case LOG_OUT_REQUEST:\n        {\n          draft.isLoggingOut = true;\n          break; // return {\n          //     ...state,\n          //     isLoggingOut: true\n          // };\n        }\n\n      case LOG_OUT_SUCCESS:\n        {\n          draft.isLoggingOut = false;\n          draft.me = null;\n          break; // return {\n          //     ...state,\n          //     isLoggingOut: false,\n          //     me: null\n          // };\n        }\n\n      case SIGN_UP_REQUEST:\n        {\n          draft.isSigningUp = true;\n          draft.isSignUp = false;\n          draft.signUpErrorReason = \"\";\n          break; // return {\n          //     ...state,\n          //     isSigningUp: true,\n          //     isSignedUp: false,\n          //     signUpErrorReason: \"\"\n          // };\n        }\n\n      case SIGN_UP_SUCCESS:\n        {\n          draft.isSigninUp = false;\n          draft.isSigndUp = true;\n          break; // return {\n          //     ...state,\n          //     isSigningUp: false,\n          //     isSignedUp: true\n          // };\n        }\n\n      case SIGN_UP_FAILURE:\n        {\n          draft.isSigningUp = false;\n          draft.signUpErrorReason = action.error;\n          break; // return {\n          //     ...state,\n          //     isSigningUp: false,\n          //     signUpErrorReason: action.error\n          // };\n        }\n\n      case LOAD_USER_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case LOAD_USER_SUCCESS:\n        {\n          if (action.me) {\n            draft.me = action.data;\n            break; // return {\n            //     ...state,\n            //     me: action.data\n            // };\n          }\n\n          draft.userinfo = action.data;\n          break; // return {\n          //     ...state,\n          //     userInfo: action.data\n          // };\n        }\n\n      case LOAD_USER_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case FOLLOW_USER_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case FOLLOW_USER_SUCCESS:\n        {\n          draft.me.Followings.unshift({\n            id: action.data\n          });\n          break; // return {\n          //     ...state,\n          //     me: {\n          //         ...state.me,\n          //         Followings: [\n          //             { id: action.data },\n          //             ...state.me.Followings\n          //         ]\n          //     }\n          // };\n        }\n\n      case FOLLOW_USER_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case UNFOLLOW_USER_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case UNFOLLOW_USER_SUCCESS:\n        {\n          const index = draft.me.Followings.findIndex(v => v.id === action.data);\n          draft.me.Followings.splice(index, 1);\n          const index2 = draft.me.Followings.findIndex(v => v.id === action.data);\n          draft.me.Followings.splice(index2, 1);\n          break; // return {\n          //     ...state,\n          //     me: {\n          //         ...state.me,\n          //         Followings: state.me.Followings.filter(\n          //             v => v.id !== action.data\n          //         )\n          //     },\n          //     followingList: state.followingList.filter(\n          //         v => v.id !== action.data\n          //     )\n          // };\n        }\n\n      case UNFOLLOW_USER_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case ADD_POST_TO_ME:\n        {\n          draft.me.Posts.unshift({\n            id: action.data\n          });\n          break; // return {\n          //     ...state,\n          //     me: {\n          //         ...state.me,\n          //         Posts: [{ id: action.data }, ...state.me.Posts]\n          //     }\n          // };\n        }\n\n      case REMOVE_POST_TO_ME:\n        {\n          draft.me.Posts.unshift({\n            id: action.data\n          });\n          break; // return {\n          //     ...state,\n          //     me: {\n          //         ...state.me,\n          //         Posts: state.me.Posts.filter(v => v.id !== action.data)\n          //     }\n          // };\n        }\n\n      case LOAD_FOLLOWERS_REQUEST:\n        {\n          draft.followerList = !action.offset ? [] : draft.followerList;\n          draft.hasMoreFollower = action.offset ? state.hasMoreFollower : true;\n          break; // return {\n          //     ...state,\n          //     // 처음 데이터를 가져올 때는 더보기 버튼을 true로\n          //     hasMoreFollower: action.offset\n          //         ? state.hasMoreFollower\n          //         : true\n          // };\n        }\n\n      case LOAD_FOLLOWERS_SUCCESS:\n        {\n          action.data.forEach(d => {\n            draft.followerList.push(d);\n          });\n          draft.hasMoreFollower = action.data.length === 3;\n          break; // return {\n          //     ...state,\n          //     followerList: state.followerList.concat(action.data),\n          //     hasMoreFollower: action.data.length === 3\n          // };\n        }\n\n      case LOAD_FOLLOWERS_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case LOAD_FOLLOWINGS_REQUEST:\n        {\n          draft.followingList = !action.offset ? [] : draft.followingList;\n          draft.hasMoreFollower = action.offset ? draft.hasMoreFollowing : true;\n          break; // return {\n          //     ...state,\n          //     hasMoreFollowing: action.offset\n          //         ? state.hasMoreFollowing\n          //         : true\n          // };\n        }\n\n      case LOAD_FOLLOWINGS_SUCCESS:\n        {\n          action.data.forEach(d => {\n            draft.followingList.push(d);\n          });\n          draft.hasMoreFollowing = action.data.length === 3;\n          break; // return {\n          //     ...state,\n          //     followingList: state.followingList.concat(action.data),\n          //     hasMoreFollowing: action.data.length === 3\n          // };\n        }\n\n      case LOAD_FOLLOWINGS_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case REMOVE_FOLLOWER_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case REMOVE_FOLLOWER_SUCCESS:\n        {\n          const index = draft.me.Followers.findIndex(v => v.id === action.data);\n          draft.me.Followers.splice(index, 1);\n          const index2 = draft.me.FollowerList.findIndex(v => v.id === action.data);\n          draft.me.FollowerList.splice(index2, 1);\n          break; // return {\n          //     ...state,\n          //     me: {\n          //         ...state.me,\n          //         Followers: state.me.Followers.filter(\n          //             v => v.id !== action.data\n          //         )\n          //     },\n          //     followerList: state.followerList.filter(\n          //         v => v.id !== action.data\n          //     )\n          // };\n        }\n\n      case REMOVE_FOLLOWER_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case EDIT_NICKNAME_REQUEST:\n        {\n          draft.isEditingNickname = true;\n          draft.editNicknameErrorReason = \"\";\n          break; // return {\n          //     ...state,\n          //     isEditingNickname: true,\n          //     editNicknameErrorReason: \"\"\n          // };\n        }\n\n      case EDIT_NICKNAME_SUCCESS:\n        {\n          draft.isEditingNickname = false;\n          draft.me.nickname = action.data;\n          break; // return {\n          //     ...state,\n          //     isEditingNickname: false,\n          //     me: {\n          //         ...state.me,\n          //         nickname: action.data\n          //     }\n          // };\n        }\n\n      case EDIT_NICKNAME_FAILURE:\n        {\n          draft.isEditingNickname = false;\n          draft.editNicknameErrorReason = action.error;\n          break; // return {\n          //     ...state,\n          //     isEditingNickname: false,\n          //     editNicknameErrorReason: action.error\n          // };\n        }\n\n      default:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n    }\n  });\n}); // export default reducer;\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ "T5ka":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "h74D":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "vL9u":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInput\", function() { return useInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"Exp3\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"h74D\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"4Q3z\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"LAVF\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useInput = (initValue = null) => {\n  const {\n    0: value,\n    1: setter\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initValue);\n  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n};\n\nconst Signup = () => {\n  const {\n    0: id,\n    1: setId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: nick,\n    1: setNick\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setpassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: passwordCheck,\n    1: setPasswordCheck\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: term,\n    1: setTerm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: passwordError,\n    1: setPasswordError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: termError,\n    1: setTermError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    isSigningUp,\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.user);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (me) {\n      alert(\"로그인이 확인되어 메인 페이지로 이동합니다.\");\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/\");\n    }\n  }, [me && me.id]); // custom hook\n\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!term) {\n      return setTermError(true);\n    }\n\n    console.log({\n      id,\n      nick,\n      password,\n      passwordCheck,\n      term\n    });\n    dispatch({\n      type: \"SIGN_UP_REQUEST\",\n      data: {\n        userId: id,\n        nickname: nick,\n        password,\n        term\n      }\n    });\n  }, [id, nick, password, passwordCheck, term]);\n  const onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setId(e.target.value);\n  }, []);\n  const onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setNick(e.target.value);\n  }, []);\n  const onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setpassword(e.target.value);\n  }, []);\n  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setTermError(false);\n    setTerm(e.target.checked);\n  }, []);\n\n  if (me) {\n    return null;\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: onSubmit,\n    style: {\n      padding: 10\n    }\n  }, __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"\\uC544\\uC774\\uB514\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    required: true,\n    onChange: onChangeId\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-nick\"\n  }, \"\\uB2C9\\uB124\\uC784\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-nick\",\n    value: nick,\n    required: true,\n    onChange: onChangeNick\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-password\",\n    type: \"password\",\n    value: password,\n    required: true,\n    onChange: onChangePassword\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-password-check\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\\uCCB4\\uD06C\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-password-check\",\n    type: \"password\",\n    value: passwordCheck,\n    required: true,\n    onChange: onChangePasswordCheck\n  }), passwordError && __jsx(\"div\", {\n    style: {\n      color: \"red\"\n    }\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4.\")), __jsx(\"div\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n    name: \"user-term\",\n    onChange: onChangeTerm\n  }, \"\\uC81C\\uB85C\\uCD08 \\uB9D0\\uC744 \\uC798 \\uB4E4\\uC744 \\uAC83\\uC744 \\uB3D9\\uC758\\uD569\\uB2C8\\uB2E4.\"), termError && __jsx(\"div\", {\n    style: {\n      color: \"red\"\n    }\n  }, \"\\uC57D\\uAD00\\uC5D0 \\uB3D9\\uC758\\uD574\\uC8FC\\uC138\\uC694.\")), __jsx(\"div\", {\n    style: {\n      marginTop: 10\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isSigningUp\n  }, \"\\uAC00\\uC785\\uD558\\uAE30\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./pages/signup.js?");

/***/ })

/******/ });