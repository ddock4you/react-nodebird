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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./pages/signup.js
var signup = __webpack_require__("vL9u");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./containers/LoginForm.js
var __jsx = external_react_default.a.createElement;







const loginForm = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [id, onChangeId] = Object(signup["useInput"])("");
  const [password, onChangePassword] = Object(signup["useInput"])("");
  const {
    isLoggingIn
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const onSubmitForm = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: user["r" /* LOG_IN_REQUEST */],
      data: {
        userId: id,
        password
      }
    });
  }, [id, password]);
  return __jsx(external_antd_["Form"], {
    onSubmit: onSubmitForm
  }, __jsx("div", null, __jsx("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), __jsx("br", null), __jsx(external_antd_["Input"], {
    name: "user-id",
    required: true,
    value: id,
    onChange: onChangeId
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx(external_antd_["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword
  })), __jsx("div", {
    style: {
      marginTop: "10px"
    }
  }, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isLoggingIn
  }, "\uB85C\uADF8\uC778"), __jsx(link_default.a, {
    href: "/signup"
  }, __jsx("a", null, __jsx(external_antd_["Button"], null, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ var LoginForm = (loginForm);
// CONCATENATED MODULE: ./containers/UserProfile.js
var UserProfile_jsx = external_react_default.a.createElement;






const UserProfile = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onLogout = Object(external_react_["useCallback"])(() => {
    //useCallback을 쓰는 이유는 자식 컴포넌트에 props를 전달하기 때문에
    dispatch({
      type: user["u" /* LOG_OUT_REQUEST */]
    });
  }, []);
  return UserProfile_jsx(external_antd_["Card"], {
    actions: [UserProfile_jsx(link_default.a, {
      href: "/profile",
      key: "twit"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", null, "\uC9F9\uC9F9", UserProfile_jsx("br", null), me.Posts.length))), UserProfile_jsx(link_default.a, {
      href: "/profile",
      key: "following"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", null, "\uD314\uB85C\uC789", UserProfile_jsx("br", null), me.Followings.length))), UserProfile_jsx(link_default.a, {
      href: "/profile",
      key: "follower"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", null, "\uD314\uB85C\uC6B0", UserProfile_jsx("br", null), me.Followers.length)))]
  }, UserProfile_jsx(external_antd_["Card"].Meta, {
    avatar: UserProfile_jsx(external_antd_["Avatar"], null, me.nickname[0]),
    title: me.nickname
  }), " ", UserProfile_jsx(external_antd_["Button"], {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ var containers_UserProfile = (UserProfile);
// CONCATENATED MODULE: ./components/AppLayout.js
var AppLayout_jsx = external_react_default.a.createElement;








const AppLayout = ({
  children
}) => {
  const {
    isLoggedIn,
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);

  const onSearch = value => {
    router_default.a.push({
      pathname: "/hashtag",
      query: {
        tag: value
      }
    }, `/hashtag/${value}`);
  };

  return AppLayout_jsx("div", null, AppLayout_jsx(external_antd_["Menu"], {
    mode: "horizontal"
  }, AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "home"
  }, AppLayout_jsx(link_default.a, {
    href: "/"
  }, AppLayout_jsx("a", null, "\uB178\uB4DC\uBC84\uB4DC"))), AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "profile"
  }, AppLayout_jsx(link_default.a, {
    href: "profile"
  }, AppLayout_jsx("a", null, "\uD504\uB85C\uD544"))), AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "mail"
  }, AppLayout_jsx(external_antd_["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: "middle"
    },
    onSearch: onSearch
  }))), AppLayout_jsx(link_default.a, {
    href: "/signup"
  }, AppLayout_jsx("a", null, AppLayout_jsx(external_antd_["Button"], null, "\uD68C\uC6D0\uAC00\uC785"))), AppLayout_jsx(external_antd_["Row"], {
    gutter: 8
  }, AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, me ? AppLayout_jsx(containers_UserProfile, null) : AppLayout_jsx(LoginForm, null)), AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 12
  }, children), AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, AppLayout_jsx("a", {
    href: "href=https://github.com/ddock4you"
  }, "\uC724\uC2B9\uD604"))));
};

/* harmony default export */ var components_AppLayout = (AppLayout);
// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js



const rootReducer = Object(external_redux_["combineReducers"])({
  user: user["G" /* default */],
  post: post["L" /* default */]
});
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./sagas/user.js




function loginAPI(loginData) {
  return external_axios_default.a.post("/user/login", loginData, {
    withCredentials: true
  });
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["s" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield Object(effects_["put"])({
      type: user["q" /* LOG_IN_FAILURE */]
    });
  }
}

function* watchLogin() {
  yield Object(effects_["takeEvery"])(user["r" /* LOG_IN_REQUEST */], logIn);
}

function signUpAPI(signUpdata) {
  return external_axios_default.a.post("/user", signUpdata);
}

function* signUp(action) {
  try {
    // yield fork(logger); logger는 내 기록을 로깅하는 함수
    // yield call(signUpAPI);
    yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["C" /* SIGN_UP_SUCCESS */]
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield Object(effects_["put"])({
      type: user["A" /* SIGN_UP_FAILURE */],
      error: e
    });
  }
}

function* watchSignUp() {
  yield Object(effects_["takeEvery"])(user["B" /* SIGN_UP_REQUEST */], signUp);
}

function logOutAPI() {
  return external_axios_default.a.post("/user/logout", {}, {
    withCredentials: true
  });
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["v" /* LOG_OUT_SUCCESS */]
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield Object(effects_["put"])({
      type: user["t" /* LOG_OUT_FAILURE */],
      error: e
    });
  }
}

function* watchLogOut() {
  yield Object(effects_["takeEvery"])(user["u" /* LOG_OUT_REQUEST */], logOut);
}

function loadUserAPI(userId) {
  return external_axios_default.a.get(userId ? `/user/${userId}` : "/user/", {
    withCredentials: true
  });
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data); // console.log("loadUser action data confirm", action.data);

    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["p" /* LOAD_USER_SUCCESS */],
      data: result.data,
      me: !action.data // userId가 없으면 내 정보를 불러옴

    });
  } catch (e) {
    // loginAPI 실패
    console.log("load user failure error", e);
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_USER_FAILURE */],
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeEvery"])(user["o" /* LOAD_USER_REQUEST */], loadUser);
}

function followAPI(userId) {
  return external_axios_default.a.post(`/user/${userId}/follow`, {}, {
    withCredentials: true
  });
}

function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["g" /* FOLLOW_USER_SUCCESS */],
      data: result.data,
      me: !action.data // userId가 없으면 내 정보를 불러옴

    });
  } catch (e) {
    // loginAPI 실패
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_USER_FAILURE */],
      error: e
    });
  }
}

function* watchFollow() {
  yield Object(effects_["takeEvery"])(user["f" /* FOLLOW_USER_REQUEST */], follow);
}

function unfollowAPI(userId) {
  return external_axios_default.a.delete(`/user/${userId}/follow`, {
    withCredentials: true
  });
}

function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["put"])({
      // put은 dispatch 동일
      type: user["F" /* UNFOLLOW_USER_SUCCESS */],
      data: result.data,
      me: !action.data // userId가 없으면 내 정보를 불러옴

    });
  } catch (e) {
    // loginAPI 실패
    yield Object(effects_["put"])({
      type: user["D" /* UNFOLLOW_USER_FAILURE */],
      error: e
    });
  }
}

function* watchUnfollow() {
  yield Object(effects_["takeEvery"])(user["E" /* UNFOLLOW_USER_REQUEST */], unfollow);
}

function loadFollowersAPI(userId, offset = 0, limit = 3) {
  return external_axios_default.a.get(`/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`, {
    withCredentials: true
  });
}

function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data, action.offset);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadFollowers() {
  yield Object(effects_["takeEvery"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function loadFollowingsAPI(userId, offset = 0, limit = 3) {
  return external_axios_default.a.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
    withCredentials: true
  });
}

function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data, action.offset);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadFollowings() {
  yield Object(effects_["takeEvery"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function removeFollowerAPI(userId) {
  return external_axios_default.a.delete(`/user/${userId}/follower`, {
    withCredentials: true
  });
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: user["y" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    yield Object(effects_["put"])({
      type: user["w" /* REMOVE_FOLLOWER_FAILURE */],
      error: e
    });
  }
}

function* watchRemoveFollower() {
  yield Object(effects_["takeEvery"])(user["x" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function editNicknameAPI(nickname) {
  return external_axios_default.a.patch(`/user/nickname`, {
    nickname
  }, {
    withCredentials: true
  });
}

function* editNickname(action) {
  try {
    const result = yield Object(effects_["call"])(editNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: user["d" /* EDIT_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["b" /* EDIT_NICKNAME_FAILURE */],
      error: e
    });
  }
}

function* watchEditNickname() {
  yield Object(effects_["takeEvery"])(user["c" /* EDIT_NICKNAME_REQUEST */], editNickname);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchEditNickname)]);
}
// CONCATENATED MODULE: ./sagas/post.js





function addPostAPI(postData) {
  return external_axios_default.a.post("/post", postData, {
    withCredentials: true
  });
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      //post reducer의 데이털르 수정
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      // userreduce의 데이터를 수정
      type: user["a" /* ADD_POST_TO_ME */]
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      data: result.data.id
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function loadMainPostsAPI(lastId = 0, limit = 10) {
  return external_axios_default.a.get(`/posts?lastId=${lastId}&limit=${limit}`);
}

function* loadMainPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadMainPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_MAIN_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_MAIN_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadMainPosts() {
  yield Object(effects_["throttle"])(2000, post["q" /* LOAD_MAIN_POSTS_REQUEST */], loadMainPosts);
}

function loadHashtagPostsAPI(tag, lastId, limit = 10) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(tag)}?lastId=${lastId}&limit=${limit}`);
}

function* loadHashtagPosts(action) {
  // console.log(action);
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(2000, post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function loadUserPostsAPI(id) {
  return external_axios_default.a.get(`/user/${id || 0}/posts`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["x" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["v" /* LOAD_USER_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(post["w" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, {
    content: data.content
  }, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: {
        postId: action.data.postId,
        comment: result.data
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: e
    });
  }
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function loadCommentsAPI(postId) {
  return external_axios_default.a.get(`/post/${postId}/comments`);
}

function* loadComments(action) {
  try {
    const result = yield Object(effects_["call"])(loadCommentsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_COMMENTS_SUCCESS */],
      data: {
        postId: action.data,
        comments: result.data
      }
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_COMMENTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadComments() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_COMMENTS_REQUEST */], loadComments);
}

function uploadImagesAPI(formData) {
  return external_axios_default.a.post(`/post/images`, formData, {
    withCredentials: true
  });
}

function* uploadImages(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    console.log("result iamge", result.data);
    yield Object(effects_["put"])({
      type: post["K" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: post["I" /* UPLOAD_IMAGES_FAILURE */],
      error: e
    });
  }
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["J" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function likePostAPI(postId) {
  return external_axios_default.a.post(`/post/${postId}/like`, {}, {
    withCredentials: true
  });
}

function* likePost(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: e
    });
  }
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function unlikePostAPI(postId) {
  return external_axios_default.a.delete(`/post/${postId}/like`, {
    withCredentials: true
  });
}

function* unlikePost(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UNLIKE_POST_SUCCESS */],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: post["F" /* UNLIKE_POST_FAILURE */],
      error: e
    });
  }
}

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["G" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function retweetAPI(postId) {
  return external_axios_default.a.post(`/post/${postId}/retweet`, {}, {
    withCredentials: true
  });
}

function* retweet(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.dir(e);
    yield Object(effects_["put"])({
      type: post["C" /* RETWEET_FAILURE */],
      error: e
    });
    alert(e.response.data);
  }
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["D" /* RETWEET_REQUEST */], retweet);
}

function removePostAPI(postId) {
  return external_axios_default.a.delete(`/post/${postId}`, {
    withCredentials: true
  });
}

function* removePost(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["B" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["z" /* REMOVE_POST_TO_ME */],
      data: result.data
    });
  } catch (e) {
    console.dir(e);
    yield Object(effects_["put"])({
      type: post["z" /* REMOVE_POST_FAILURE */],
      error: e
    });
    alert(e.response.data);
  }
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["A" /* REMOVE_POST_REQUEST */], removePost);
}

function loadPostAPI(postId) {
  return external_axios_default.a.get(`/post/${postId}`);
}

function* loadPost(action) {
  try {
    // console.log(action);
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_POST_FAILURE */],
      error: e
    });
  }
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["t" /* LOAD_POST_REQUEST */], loadPost);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadMainPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchLoadComments), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLoadPost)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = "http://localhost:3065/api";
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(userSaga), Object(effects_["call"])(postSaga)]);
}
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;








 // import App from 'next/app';






const Nodebird = ({
  Component,
  store,
  pageProps
}) => {
  // console.log(pageProps);
  return _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(external_react_helmet_default.a, {
    title: "NodeBird",
    htmlAttributes: {
      lang: "ko"
    },
    meta: [{
      charset: "UTF-8"
    }, {
      name: "viewport",
      content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
    }, {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge"
    }, {
      name: "description",
      content: "팥우유의 NodeBird SNS"
    }, {
      name: "og:title",
      content: "NodeBird"
    }, {
      name: "og:description",
      content: "팥우유의 NodeBird SNS"
    }, {
      property: "og:type",
      content: "website"
    }],
    link: [{
      rel: "shortcut icon",
      href: "/favicon.ico"
    }, {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"
    }, {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    }, {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    }]
  }), _app_jsx(components_AppLayout, null, _app_jsx(Component, pageProps)));
};

// getInitialProps
// next에서 지원하는 react의 라이프 사이클같은 기능
// 서버에서 받은 동적인 데이터를 프론트에서 사용할 수 있음.
// react componentDidMount보다 더 빨리 실행됨.
// 서버에서도 실행됨.
// 서버 사이드 렌더링 작업을 할 때 용이함.
Nodebird.getInitialProps = async context => {
  //context -> next에서 내려주는 것
  // console.log(context);
  const {
    ctx,
    Component
  } = context;
  let pageProps = {}; // store 안에 있는 로그인 정보를 getState 메서드를 통해 가져올 수 있음.

  const state = ctx.store.getState(); // 클라이언트 -> 백엔드 서버간 통신할 땐 브라우저가 쿠키를 챙겨주나
  // 서버와 서버간 통신일 땐 ex)프론트 서버(서버사이드 렌더링) - 백엔드 서버
  // 개발자가 직접 쿠키를 전달해줘야 한다.

  const cookie = ctx.isServer ? ctx.req.headers.cookie : ""; // console.log('쿠키', cookie);
  // axios를 통해 프론트 서버에서 백엔드 서버로 쿠키를 직접 전달
  //

  if (ctx.isServer && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }

  if (!state.user.me) {
    ctx.store.dispatch({
      type: user["o" /* LOAD_USER_REQUEST */]
    });
  }

  if (Component.getInitialProps) {
    // Component에 getInitialProps가 있을 경우 실행
    pageProps = (await Component.getInitialProps(ctx)) || {}; // Component 컴포넌트에 props 전달(실행)
  }

  return {
    pageProps
  };
};

const configStore = (initialState, options) => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, store => next => action => {
    // console.log(action);
    next(action);
  }];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, initialState, enhancer); // next에서 redux-saga를 이용해 서버사이드 렌더링을 가능하게 해주는 코드

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}; // next-redux-saga -> next 서버에서 redux-saga를 사용할 수 있게 해주는 플러그인
// next-redux-saga 설치 후 모든 프론트영역을 감싸는 코드영역의 export 코드를 감싸준다(고차 컴포넌트)
// 고차 컴포넌트


/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(configStore)(external_next_redux_saga_default()(Nodebird)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_IN_FAILURE; });
/* unused harmony export LOG_USER_REQUEST */
/* unused harmony export LOG_USER_SUCCESS */
/* unused harmony export LOG_USER_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_TO_ME; });
/* unused harmony export signUpRequestAction */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
 // store, 초기값

const initialState = {
  isLoggedIn: false,
  // 로그인 여부
  isLoggingOut: false,
  // 로그아웃 시도중
  logInErrorReason: "",
  // 로그인 실패 사유
  isSignedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: "",
  // 회원가입 실패 사유
  me: null,
  // 내 정보
  followingList: [],
  // 팔로잉 리스트
  followerList: [],
  // 팔로워 리스트
  userInfo: null,
  // 남의 정보
  isEditingNickname: false,
  // 이름 변경 중
  editNicknameErrorReason: "",
  // 이름 변경 실패 사유
  hasMoreFollower: false,
  hasMoreFollowing: false
}; //

const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_USER_REQUEST = "LOG_USER_REQUEST";
const LOG_USER_SUCCESS = "LOG_USER_SUCCESS";
const LOG_USER_FAILURE = "LOG_USER_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";
const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const EDIT_NICKNAME_REQUEST = "EDIT_NICKNAME_REQUEST";
const EDIT_NICKNAME_SUCCESS = "EDIT_NICKNAME_SUCCESS";
const EDIT_NICKNAME_FAILURE = "EDIT_NICKNAME_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_TO_ME = "REMOVE_POST_TO_ME"; // 실제 액션

const signUpRequestAction = data => {
  return {
    type: SIGN_UP_REQUEST,
    data
  };
}; // 리듀서 -> Action의 결과로 state를 어떻게 바꿀지 정의

/* harmony default export */ __webpack_exports__["G"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          draft.isLoggedIn = true;
          draft.logInErrorReason = "";
          break; // return {
          //     ...state,
          //     isLoggedIn: true,
          //     logInErrorReason: ""
          // };
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggedIn = false;
          draft.me = action.data;
          draft.isLoading = false;
          break; // return {
          //     ...state,
          //     isLoggedIn: false,
          //     me: action.data,
          //     isLoading: false
          // };
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggedIn = false;
          draft.logInErrorReason = action.error;
          draft.me = null;
          break; // return {
          //     ...state,
          //     isLoggedIn: false,
          //     logInErrorReason: action.error,
          //     me: null
          // };
        }

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          break; // return {
          //     ...state,
          //     isLoggingOut: true
          // };
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggingOut = false;
          draft.me = null;
          break; // return {
          //     ...state,
          //     isLoggingOut: false,
          //     me: null
          // };
        }

      case SIGN_UP_REQUEST:
        {
          draft.isSigningUp = true;
          draft.isSignUp = false;
          draft.signUpErrorReason = "";
          break; // return {
          //     ...state,
          //     isSigningUp: true,
          //     isSignedUp: false,
          //     signUpErrorReason: ""
          // };
        }

      case SIGN_UP_SUCCESS:
        {
          draft.isSigninUp = false;
          draft.isSigndUp = true;
          break; // return {
          //     ...state,
          //     isSigningUp: false,
          //     isSignedUp: true
          // };
        }

      case SIGN_UP_FAILURE:
        {
          draft.isSigningUp = false;
          draft.signUpErrorReason = action.error;
          break; // return {
          //     ...state,
          //     isSigningUp: false,
          //     signUpErrorReason: action.error
          // };
        }

      case LOAD_USER_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.me) {
            draft.me = action.data;
            break; // return {
            //     ...state,
            //     me: action.data
            // };
          }

          draft.userinfo = action.data;
          break; // return {
          //     ...state,
          //     userInfo: action.data
          // };
        }

      case LOAD_USER_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case FOLLOW_USER_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case FOLLOW_USER_SUCCESS:
        {
          draft.me.Followings.unshift({
            id: action.data
          });
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Followings: [
          //             { id: action.data },
          //             ...state.me.Followings
          //         ]
          //     }
          // };
        }

      case FOLLOW_USER_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case UNFOLLOW_USER_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case UNFOLLOW_USER_SUCCESS:
        {
          const index = draft.me.Followings.findIndex(v => v.id === action.data);
          draft.me.Followings.splice(index, 1);
          const index2 = draft.me.Followings.findIndex(v => v.id === action.data);
          draft.me.Followings.splice(index2, 1);
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Followings: state.me.Followings.filter(
          //             v => v.id !== action.data
          //         )
          //     },
          //     followingList: state.followingList.filter(
          //         v => v.id !== action.data
          //     )
          // };
        }

      case UNFOLLOW_USER_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case ADD_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Posts: [{ id: action.data }, ...state.me.Posts]
          //     }
          // };
        }

      case REMOVE_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Posts: state.me.Posts.filter(v => v.id !== action.data)
          //     }
          // };
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          draft.followerList = !action.offset ? [] : draft.followerList;
          draft.hasMoreFollower = action.offset ? state.hasMoreFollower : true;
          break; // return {
          //     ...state,
          //     // 처음 데이터를 가져올 때는 더보기 버튼을 true로
          //     hasMoreFollower: action.offset
          //         ? state.hasMoreFollower
          //         : true
          // };
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.followerList.push(d);
          });
          draft.hasMoreFollower = action.data.length === 3;
          break; // return {
          //     ...state,
          //     followerList: state.followerList.concat(action.data),
          //     hasMoreFollower: action.data.length === 3
          // };
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.followingList = !action.offset ? [] : draft.followingList;
          draft.hasMoreFollower = action.offset ? draft.hasMoreFollowing : true;
          break; // return {
          //     ...state,
          //     hasMoreFollowing: action.offset
          //         ? state.hasMoreFollowing
          //         : true
          // };
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.followingList.push(d);
          });
          draft.hasMoreFollowing = action.data.length === 3;
          break; // return {
          //     ...state,
          //     followingList: state.followingList.concat(action.data),
          //     hasMoreFollowing: action.data.length === 3
          // };
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          break; // return {
          //     ...state
          // };
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          const index = draft.me.Followers.findIndex(v => v.id === action.data);
          draft.me.Followers.splice(index, 1);
          const index2 = draft.me.FollowerList.findIndex(v => v.id === action.data);
          draft.me.FollowerList.splice(index2, 1);
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Followers: state.me.Followers.filter(
          //             v => v.id !== action.data
          //         )
          //     },
          //     followerList: state.followerList.filter(
          //         v => v.id !== action.data
          //     )
          // };
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          break; // return {
          //     ...state
          // };
        }

      case EDIT_NICKNAME_REQUEST:
        {
          draft.isEditingNickname = true;
          draft.editNicknameErrorReason = "";
          break; // return {
          //     ...state,
          //     isEditingNickname: true,
          //     editNicknameErrorReason: ""
          // };
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          draft.isEditingNickname = false;
          draft.me.nickname = action.data;
          break; // return {
          //     ...state,
          //     isEditingNickname: false,
          //     me: {
          //         ...state.me,
          //         nickname: action.data
          //     }
          // };
        }

      case EDIT_NICKNAME_FAILURE:
        {
          draft.isEditingNickname = false;
          draft.editNicknameErrorReason = action.error;
          break; // return {
          //     ...state,
          //     isEditingNickname: false,
          //     editNicknameErrorReason: action.error
          // };
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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

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

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LAVF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: nick,
    1: setNick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: password,
    1: setpassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    isSigningUp,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (me) {
      alert("로그인이 확인되어 메인 페이지로 이동합니다.");
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    }
  }, [me && me.id]); // custom hook

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
    dispatch({
      type: "SIGN_UP_REQUEST",
      data: {
        userId: id,
        nickname: nick,
        password,
        term
      }
    });
  }, [id, nick, password, passwordCheck, term]);
  const onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setId(e.target.value);
  }, []);
  const onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setNick(e.target.value);
  }, []);
  const onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setpassword(e.target.value);
  }, []);
  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  if (me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    }
  }, __jsx("div", null, __jsx("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-nick"
  }, "\uB2C9\uB124\uC784"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password-check"
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck
  }), passwordError && __jsx("div", {
    style: {
      color: "red"
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    name: "user-term",
    onChange: onChangeTerm
  }, "\uC81C\uB85C\uCD08 \uB9D0\uC744 \uC798 \uB4E4\uC744 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: "red"
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.")), __jsx("div", {
    style: {
      marginTop: 10
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp
  }, "\uAC00\uC785\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });