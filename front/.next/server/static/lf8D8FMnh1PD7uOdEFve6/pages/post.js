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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("p+NB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Post = ({
  id
}) => {
  const {
    singlePost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: `${singlePost.User.nickname}님의 글`,
    description: singlePost.content,
    meta: [{
      name: "description",
      content: singlePost.content
    }, {
      property: "og:title",
      content: `${singlePost.User.nickname}님의 게시글`
    }, {
      property: "og:description",
      content: singlePost.content
    }, {
      property: "og:image",
      content: singlePost.Images[0] && `http://localhost:3065/${singlePost.Images[0].src}`
    }, {
      property: "og:url",
      content: `http://localhost:3060/post/${id}`
    }]
  }), __jsx("div", null, singlePost.content), __jsx("div", null, singlePost.User.nickname), __jsx("div", null, singlePost.Images[0] && __jsx("img", {
    src: `http://localhost:3060/${singlePost.Images[0].src}`
  })));
};

Post.getInitialProps = async context => {
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* LOAD_POST_REQUEST */ "t"],
    data: context.query.id
  });
  return {
    id: parseInt(context.query.id, 10)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  // 화면에 보일 포스트들
  imagePaths: [],
  // 미리보기 이미지 경로
  addPostErrorReason: false,
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중
  postAdded: false,
  // 포스트 업로드 성공
  isAddingComment: false,
  addCommentErrorReason: "",
  commentAdded: false,
  singlePost: null
};
const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
/* harmony default export */ __webpack_exports__["L"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case UPLOAD_IMAGES_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          action.data.forEach(p => {
            draft.imagePaths.push(p);
          }); // draft 또다른 표현 방법
          // draft.imagePaths = draft.imagePaths.concat(action.data);

          break; // return {
          //     ...state,
          //     imagePaths: [...state.imagePaths, ...action.data]
          // };
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case REMOVE_IMAGE:
        {
          const index = draft.imagePaths.findIndex((v, i) => action.index);
          draft.imagePaths = splice(index, 1);
          break; // return {
          //     ...state,
          //     imagePaths: state.imagePaths.filter(
          //         (v, i) => i !== action.index
          //     )
          // };
        }

      case ADD_POST_REQUEST:
        {
          draft.isAddingPost = true, draft.addPostErrorReason = "", draft.Added = false;
          break; // return {
          //     ...state,
          //     isAddingPost: true,
          //     addPostErrorReason: "",
          //     postAdded: false
          // };
        }

      case ADD_POST_SUCCESS:
        {
          draft.isAddingPost = false;
          draft.mainPosts.unshift(action.data);
          draft.postAdded = true;
          draft.imagePaths = [];
          break; // return {
          //     ...state,
          //     isAddingPost: false,
          //     mainPosts: [action.data, ...state.mainPosts],
          //     postAdded: true,
          //     imagePaths: []
          // };
        }

      case ADD_POST_FAILURE:
        {
          draft.isAddingPost = false;
          draft.addPostErrorReason = action.error;
          break; // return {
          //     ...state,
          //     isAddingPost: false,
          //     addPostErrorReason: action.error
          // };
        }

      case ADD_COMMENT_REQUEST:
        {
          draft.isAddingComment = true;
          draft.addCommentErrorReason = "";
          draft.commentAdded = false;
          break; // return {
          //     ...state,
          //     isAddingComment: true,
          //     addCommentErrorReason: "",
          //     commentAdded: false
          // };
        }

      case ADD_COMMENT_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Comments.push(action.data.comment);
          draft.isAddingComment = false;
          draft.commentAdded = true;
          break; // const postIndex = state.mainPosts.findIndex(
          //     v => v.id === action.data.postId
          // );
          // const post = state.mainPosts[postIndex];
          // const Comments = [...post.Comments, action.data.comment];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = { ...post, Comments };
          // return {
          //     ...state,
          //     isAddingComment: false,
          //     mainPosts,
          //     commentAdded: true
          // };
        }

      case ADD_COMMENT_FAILURE:
        {
          draft.isAddingComment = false;
          draft.addCommentErrorReason = action.error; // return {
          //     ...state,
          //     isAddingComment: false,
          //     addCommentErrorReason: action.error
          // };
        }

      case LOAD_COMMENTS_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Comments = action.data.comments;
          break; // const postIndex = state.mainPosts.findIndex(
          //     v => v.id === action.data.postId
          // );
          // const post = state.mainPosts[postIndex];
          // const Comments = action.data.comments;
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = { ...post, Comments };
          // return {
          //     ...state,
          //     mainPosts
          // };
        }
      // a

      case LOAD_MAIN_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        {
          draft.mainPosts = !action.lastId ? [] : state.mainPosts;
          draft.hasMorePost = action.lastId ? state.hasMorePost : true;
          break; // return {
          //     ...state,
          //     // 페이지 처음 들어왔을 땐 초기화하고 기존 게시글 보고 있는
          //     // 상태에서 스크롤 내릴 땐 기존 게시글들 유지
          //     mainPosts: action.lastId === 0 ? [] : state.mainPosts,
          //     hasMorePost: action.lastId ? state.hasMorePost : true
          // };
        }

      case LOAD_MAIN_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.mainPosts.push(d);
          });
          draft.hasMorePost = action.data.length === 10;
          break; // return {
          //     ...state,
          //     mainPosts: state.mainPosts.concat(action.data),
          //     hasMorePost: action.data.length === 10 // 스크롤을 더 활성화할지 말지 결정
          // };
        }

      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
        {
          break;
        }

      case LIKE_POST_REQUEST:
        {
          break;
        }

      case LIKE_POST_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          draft.mainPosts[postIndex].Likers.unshift({
            id: action.data.userId
          });
          break; // const postIndex = state.mainPosts.findIndex(
          //     v => v.id === action.data.postId
          // );
          // const post = state.mainPosts[postIndex];
          // const Likers = [{ id: action.data.userId }, ...post.Likers];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = { ...post, Likers };
          // return {
          //     ...state,
          //     mainPosts
          // };
        }

      case LIKE_POST_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case UNLIKE_POST_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case UNLIKE_POST_SUCCESS:
        {
          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);
          draft.mainPosts[postIndex].Likers.splice(likeIndex, 1); // const postIndex = state.mainPosts.findIndex(
          //     v => v.id === action.data.postId
          // );
          // const post = state.mainPosts[postIndex];
          // const Likers = post.Likers.filter(
          //     v => v.id !== action.data.userId
          // );
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = { ...post, Likers };
          // return {
          //     ...state,
          //     mainPosts
          // };
        }

      case UNLIKE_POST_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case RETWEET_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case RETWEET_SUCCESS:
        {
          draft.mainPosts = draft.mainPosts.unshift(action.data);
          break; // return {
          //     ...state,
          //     mainPosts: [action.data, ...state.mainPosts]
          // };
        }

      case RETWEET_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case REMOVE_POST_REQUEST:
        {// return {
          //     ...state
          // };
        }

      case REMOVE_POST_SUCCESS:
        {
          const index = draft.mainPosts.findIndex(v => v.id === action.data);
          draft.mainPosts.splice(index, 1); // return {
          //     ...state,
          //     mainPosts: state.mainPosts.filter(v => v.id !== action.data)
          // };
        }

      case REMOVE_POST_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case LOAD_POST_SUCCESS:
        {
          draft.singlePost = action.data;
          break;
        }

      default:
        {
          break; // return {
          //     ...state
          // };
        }
    }
  });
}); // export default reducer;

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });