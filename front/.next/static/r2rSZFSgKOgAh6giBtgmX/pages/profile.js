(window.webpackJsonp=window.webpackJsonp||[]).push([["static\\r2rSZFSgKOgAh6giBtgmX\\pages\\profile.js"],{"W+IF":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "ln6h");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "gdfu");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "/MKj");\n/* harmony import */ var _containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/NicknameEditForm */ "ypkt");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "LAVF");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "p+NB");\n/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/PostCard */ "uor+");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Profile = function Profile() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.user;\n  }),\n      followerList = _useSelector.followerList,\n      followingList = _useSelector.followingList,\n      hasMoreFollowing = _useSelector.hasMoreFollowing,\n      hasMoreFollower = _useSelector.hasMoreFollower;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts;\n\n  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_USER_REQUEST"],\n        data: userId\n      });\n    };\n  }, []);\n  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],\n        data: userId\n      });\n    };\n  }, []);\n  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWINGS_REQUEST"],\n      offset: followingList.length\n    });\n  }, [followingList.length]);\n  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWERS_REQUEST"],\n      offset: followerList.length\n    });\n  }, [followerList.length]);\n  return __jsx("div", null, __jsx(_containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {\n    style: {\n      marginBottom: "20px"\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: "small",\n    header: __jsx("div", null, "\\uD314\\uB85C\\uC789 \\uBAA9\\uB85D"),\n    loadMore: hasMoreFollowing && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {\n      style: {\n        width: "100%"\n      },\n      onClick: loadMoreFollowings\n    }, "\\uB354\\uBCF4\\uAE30"),\n    bordered: true,\n    dataSource: followingList,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {\n        style: {\n          marginTop: "20px"\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {\n          key: "stop",\n          type: "stop",\n          onClick: onUnfollow(item.id)\n        })]\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {\n        description: item.nickname\n      })));\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {\n    style: {\n      marginBottom: "20px"\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: "small",\n    header: __jsx("div", null, "\\uD314\\uB85C\\uC6CC \\uBAA9\\uB85D"),\n    loadMore: hasMoreFollower && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {\n      style: {\n        width: "100%"\n      },\n      onClick: loadMoreFollowers\n    }, "\\uB354\\uBCF4\\uAE30"),\n    bordered: true,\n    dataSource: followerList,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {\n        style: {\n          marginTop: "20px"\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {\n          key: "stop",\n          type: "stop",\n          onClick: onRemoveFollower(item.id)\n        })]\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {\n        description: item.nickname\n      })));\n    }\n  }), __jsx("div", null, mainPosts.map(function (c) {\n    return __jsx(_containers_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {\n      key: +c.id,\n      post: c\n    });\n  })));\n};\n\nProfile.getInitialProps = function _callee(context) {\n  var state;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          state = context.store.getState();\n          context.store.dispatch({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWERS_REQUEST"],\n            data: state.user.me && state.user.me.id\n          });\n          context.store.dispatch({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWINGS_REQUEST"],\n            data: state.user.me && state.user.me.id\n          });\n          context.store.dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_POSTS_REQUEST"],\n            data: state.user.me && state.user.me.id\n          });\n\n        case 4:\n        case "end":\n          return _context.stop();\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Profile);\n\n//# sourceURL=webpack:///./pages/profile.js?')},u1GD:function(module,exports,__webpack_require__){eval('\n    (window.__NEXT_P=window.__NEXT_P||[]).push(["/profile", function() {\n      var mod = __webpack_require__(/*! private-next-pages/profile.js */ "W+IF")\n      if(false) {}\n      return mod\n    }]);\n  \n\n//# sourceURL=webpack:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?')},ypkt:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "gdfu");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "/MKj");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "LAVF");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      editedName = _useState[0],\n      setEditedName = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      isEditingNickname = _useSelector.isEditingNickname;\n\n  var onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setEditedName(e.target.value);\n  }, []);\n  var onEditNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    e.preventDefault();\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["EDIT_NICKNAME_REQUEST"],\n      data: editedName\n    });\n  }, [editedName]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {\n    style: {\n      marginBottom: "20px",\n      border: "1px solid #d9d9d9",\n      padding: "20px"\n    },\n    onSubmit: onEditNickname\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {\n    addonBefore: "\\uB2C9\\uB124\\uC784",\n    value: editedName || me && me.nickname,\n    onChange: onChangeNickname\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {\n    type: "primary",\n    htmlType: "submit",\n    loading: isEditingNickname\n  }, "\\uC218\\uC815"));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);\n\n//# sourceURL=webpack:///./containers/NicknameEditForm.js?')}},[["u1GD","static/runtime/webpack.js","framework","aec7d165","commons","92e9d834d4e2803ad400ac329dbb3a217999426a","38993b654796d8ab6a2076055a82d6da4739f1ba","71a112ce4086df6c75fe393c55142c1df35991c9","b136f7b6f4816925c93c718804ff2f73c603bd3b","e690bd6b39befd74028d8aefc99de3cd804837c0","b80a0a4b359f345aed754be0aca54ef394f4356b"]]]);