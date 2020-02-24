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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/*!****************************************!*\
  !*** multi private-next-pages/post.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/post.js */\"EhLH\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/post.js?");

/***/ }),

/***/ "EhLH":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"cDcd\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"h74D\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"zIXN\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"p+NB\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Post = ({\n  id\n}) => {\n  const {\n    singlePost\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.post);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    title: `${singlePost.User.nickname}님의 글`,\n    description: singlePost.content,\n    meta: [{\n      name: \"description\",\n      content: singlePost.content\n    }, {\n      property: \"og:title\",\n      content: `${singlePost.User.nickname}님의 게시글`\n    }, {\n      property: \"og:description\",\n      content: singlePost.content\n    }, {\n      property: \"og:image\",\n      content: singlePost.Images[0] && `http://localhost:3065/${singlePost.Images[0].src}`\n    }, {\n      property: \"og:url\",\n      content: `http://localhost:3060/post/${id}`\n    }]\n  }), __jsx(\"div\", null, singlePost.content), __jsx(\"div\", null, singlePost.User.nickname), __jsx(\"div\", null, singlePost.Images[0] && __jsx(\"img\", {\n    src: `http://localhost:3060/${singlePost.Images[0].src}`\n  })));\n};\n\nPost.getInitialProps = async context => {\n  context.store.dispatch({\n    type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POST_REQUEST\"],\n    data: context.query.id\n  });\n  return {\n    id: parseInt(context.query.id, 10)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./pages/post.js?");

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

/***/ "p+NB":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_REQUEST\", function() { return LOAD_MAIN_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_SUCCESS\", function() { return LOAD_MAIN_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_FAILURE\", function() { return LOAD_MAIN_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_REQUEST\", function() { return LOAD_USER_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_SUCCESS\", function() { return LOAD_USER_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_FAILURE\", function() { return LOAD_USER_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_REQUEST\", function() { return UPLOAD_IMAGES_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_SUCCESS\", function() { return UPLOAD_IMAGES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_FAILURE\", function() { return UPLOAD_IMAGES_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_REQUEST\", function() { return LOAD_COMMENTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_SUCCESS\", function() { return LOAD_COMMENTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_FAILURE\", function() { return LOAD_COMMENTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"T5ka\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  mainPosts: [],\n  // 화면에 보일 포스트들\n  imagePaths: [],\n  // 미리보기 이미지 경로\n  addPostErrorReason: false,\n  // 포스트 업로드 실패 사유\n  isAddingPost: false,\n  // 포스트 업로드 중\n  postAdded: false,\n  // 포스트 업로드 성공\n  isAddingComment: false,\n  addCommentErrorReason: \"\",\n  commentAdded: false,\n  singlePost: null\n};\nconst LOAD_MAIN_POSTS_REQUEST = \"LOAD_MAIN_POSTS_REQUEST\";\nconst LOAD_MAIN_POSTS_SUCCESS = \"LOAD_MAIN_POSTS_SUCCESS\";\nconst LOAD_MAIN_POSTS_FAILURE = \"LOAD_MAIN_POSTS_FAILURE\";\nconst LOAD_HASHTAG_POSTS_REQUEST = \"LOAD_HASHTAG_POSTS_REQUEST\";\nconst LOAD_HASHTAG_POSTS_SUCCESS = \"LOAD_HASHTAG_POSTS_SUCCESS\";\nconst LOAD_HASHTAG_POSTS_FAILURE = \"LOAD_HASHTAG_POSTS_FAILURE\";\nconst LOAD_USER_POSTS_REQUEST = \"LOAD_USER_POSTS_REQUEST\";\nconst LOAD_USER_POSTS_SUCCESS = \"LOAD_USER_POSTS_SUCCESS\";\nconst LOAD_USER_POSTS_FAILURE = \"LOAD_USER_POSTS_FAILURE\";\nconst UPLOAD_IMAGES_REQUEST = \"UPLOAD_IMAGES_REQUEST\";\nconst UPLOAD_IMAGES_SUCCESS = \"UPLOAD_IMAGES_SUCCESS\";\nconst UPLOAD_IMAGES_FAILURE = \"UPLOAD_IMAGES_FAILURE\";\nconst REMOVE_IMAGE = \"REMOVE_IMAGE\";\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nconst LIKE_POST_REQUEST = \"LIKE_POST_REQUEST\";\nconst LIKE_POST_SUCCESS = \"LIKE_POST_SUCCESS\";\nconst LIKE_POST_FAILURE = \"LIKE_POST_FAILURE\";\nconst UNLIKE_POST_REQUEST = \"UNLIKE_POST_REQUEST\";\nconst UNLIKE_POST_SUCCESS = \"UNLIKE_POST_SUCCESS\";\nconst UNLIKE_POST_FAILURE = \"UNLIKE_POST_FAILURE\";\nconst ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nconst ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nconst ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nconst LOAD_COMMENTS_REQUEST = \"LOAD_COMMENTS_REQUEST\";\nconst LOAD_COMMENTS_SUCCESS = \"LOAD_COMMENTS_SUCCESS\";\nconst LOAD_COMMENTS_FAILURE = \"LOAD_COMMENTS_FAILURE\";\nconst RETWEET_REQUEST = \"RETWEET_REQUEST\";\nconst RETWEET_SUCCESS = \"RETWEET_SUCCESS\";\nconst RETWEET_FAILURE = \"RETWEET_FAILURE\";\nconst REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nconst REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nconst REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nconst LOAD_POST_REQUEST = \"LOAD_POST_REQUEST\";\nconst LOAD_POST_SUCCESS = \"LOAD_POST_SUCCESS\";\nconst LOAD_POST_FAILURE = \"LOAD_POST_FAILURE\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case UPLOAD_IMAGES_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case UPLOAD_IMAGES_SUCCESS:\n        {\n          action.data.forEach(p => {\n            draft.imagePaths.push(p);\n          }); // draft 또다른 표현 방법\n          // draft.imagePaths = draft.imagePaths.concat(action.data);\n\n          break; // return {\n          //     ...state,\n          //     imagePaths: [...state.imagePaths, ...action.data]\n          // };\n        }\n\n      case UPLOAD_IMAGES_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case REMOVE_IMAGE:\n        {\n          const index = draft.imagePaths.findIndex((v, i) => action.index);\n          draft.imagePaths = splice(index, 1);\n          break; // return {\n          //     ...state,\n          //     imagePaths: state.imagePaths.filter(\n          //         (v, i) => i !== action.index\n          //     )\n          // };\n        }\n\n      case ADD_POST_REQUEST:\n        {\n          draft.isAddingPost = true, draft.addPostErrorReason = \"\", draft.Added = false;\n          break; // return {\n          //     ...state,\n          //     isAddingPost: true,\n          //     addPostErrorReason: \"\",\n          //     postAdded: false\n          // };\n        }\n\n      case ADD_POST_SUCCESS:\n        {\n          draft.isAddingPost = false;\n          draft.mainPosts.unshift(action.data);\n          draft.postAdded = true;\n          draft.imagePaths = [];\n          break; // return {\n          //     ...state,\n          //     isAddingPost: false,\n          //     mainPosts: [action.data, ...state.mainPosts],\n          //     postAdded: true,\n          //     imagePaths: []\n          // };\n        }\n\n      case ADD_POST_FAILURE:\n        {\n          draft.isAddingPost = false;\n          draft.addPostErrorReason = action.error;\n          break; // return {\n          //     ...state,\n          //     isAddingPost: false,\n          //     addPostErrorReason: action.error\n          // };\n        }\n\n      case ADD_COMMENT_REQUEST:\n        {\n          draft.isAddingComment = true;\n          draft.addCommentErrorReason = \"\";\n          draft.commentAdded = false;\n          break; // return {\n          //     ...state,\n          //     isAddingComment: true,\n          //     addCommentErrorReason: \"\",\n          //     commentAdded: false\n          // };\n        }\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Comments.push(action.data.comment);\n          draft.isAddingComment = false;\n          draft.commentAdded = true;\n          break; // const postIndex = state.mainPosts.findIndex(\n          //     v => v.id === action.data.postId\n          // );\n          // const post = state.mainPosts[postIndex];\n          // const Comments = [...post.Comments, action.data.comment];\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = { ...post, Comments };\n          // return {\n          //     ...state,\n          //     isAddingComment: false,\n          //     mainPosts,\n          //     commentAdded: true\n          // };\n        }\n\n      case ADD_COMMENT_FAILURE:\n        {\n          draft.isAddingComment = false;\n          draft.addCommentErrorReason = action.error; // return {\n          //     ...state,\n          //     isAddingComment: false,\n          //     addCommentErrorReason: action.error\n          // };\n        }\n\n      case LOAD_COMMENTS_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Comments = action.data.comments;\n          break; // const postIndex = state.mainPosts.findIndex(\n          //     v => v.id === action.data.postId\n          // );\n          // const post = state.mainPosts[postIndex];\n          // const Comments = action.data.comments;\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = { ...post, Comments };\n          // return {\n          //     ...state,\n          //     mainPosts\n          // };\n        }\n      // a\n\n      case LOAD_MAIN_POSTS_REQUEST:\n      case LOAD_HASHTAG_POSTS_REQUEST:\n      case LOAD_USER_POSTS_REQUEST:\n        {\n          draft.mainPosts = !action.lastId ? [] : state.mainPosts;\n          draft.hasMorePost = action.lastId ? state.hasMorePost : true;\n          break; // return {\n          //     ...state,\n          //     // 페이지 처음 들어왔을 땐 초기화하고 기존 게시글 보고 있는\n          //     // 상태에서 스크롤 내릴 땐 기존 게시글들 유지\n          //     mainPosts: action.lastId === 0 ? [] : state.mainPosts,\n          //     hasMorePost: action.lastId ? state.hasMorePost : true\n          // };\n        }\n\n      case LOAD_MAIN_POSTS_SUCCESS:\n      case LOAD_HASHTAG_POSTS_SUCCESS:\n      case LOAD_USER_POSTS_SUCCESS:\n        {\n          action.data.forEach(d => {\n            draft.mainPosts.push(d);\n          });\n          draft.hasMorePost = action.data.length === 10;\n          break; // return {\n          //     ...state,\n          //     mainPosts: state.mainPosts.concat(action.data),\n          //     hasMorePost: action.data.length === 10 // 스크롤을 더 활성화할지 말지 결정\n          // };\n        }\n\n      case LOAD_MAIN_POSTS_FAILURE:\n      case LOAD_HASHTAG_POSTS_FAILURE:\n      case LOAD_USER_POSTS_FAILURE:\n        {\n          break;\n        }\n\n      case LIKE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case LIKE_POST_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Likers.unshift({\n            id: action.data.userId\n          });\n          break; // const postIndex = state.mainPosts.findIndex(\n          //     v => v.id === action.data.postId\n          // );\n          // const post = state.mainPosts[postIndex];\n          // const Likers = [{ id: action.data.userId }, ...post.Likers];\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = { ...post, Likers };\n          // return {\n          //     ...state,\n          //     mainPosts\n          // };\n        }\n\n      case LIKE_POST_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case UNLIKE_POST_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case UNLIKE_POST_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);\n          draft.mainPosts[postIndex].Likers.splice(likeIndex, 1); // const postIndex = state.mainPosts.findIndex(\n          //     v => v.id === action.data.postId\n          // );\n          // const post = state.mainPosts[postIndex];\n          // const Likers = post.Likers.filter(\n          //     v => v.id !== action.data.userId\n          // );\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = { ...post, Likers };\n          // return {\n          //     ...state,\n          //     mainPosts\n          // };\n        }\n\n      case UNLIKE_POST_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case RETWEET_REQUEST:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case RETWEET_SUCCESS:\n        {\n          draft.mainPosts = draft.mainPosts.unshift(action.data);\n          break; // return {\n          //     ...state,\n          //     mainPosts: [action.data, ...state.mainPosts]\n          // };\n        }\n\n      case RETWEET_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case REMOVE_POST_REQUEST:\n        {// return {\n          //     ...state\n          // };\n        }\n\n      case REMOVE_POST_SUCCESS:\n        {\n          const index = draft.mainPosts.findIndex(v => v.id === action.data);\n          draft.mainPosts.splice(index, 1); // return {\n          //     ...state,\n          //     mainPosts: state.mainPosts.filter(v => v.id !== action.data)\n          // };\n        }\n\n      case REMOVE_POST_FAILURE:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n\n      case LOAD_POST_SUCCESS:\n        {\n          draft.singlePost = action.data;\n          break;\n        }\n\n      default:\n        {\n          break; // return {\n          //     ...state\n          // };\n        }\n    }\n  });\n}); // export default reducer;\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "zIXN":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ })

/******/ });