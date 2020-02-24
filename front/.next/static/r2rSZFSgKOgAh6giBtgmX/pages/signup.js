(window.webpackJsonp=window.webpackJsonp||[]).push([["static\\r2rSZFSgKOgAh6giBtgmX\\pages\\signup.js"],{OUKs:function(module,exports,__webpack_require__){eval('\n    (window.__NEXT_P=window.__NEXT_P||[]).push(["/signup", function() {\n      var mod = __webpack_require__(/*! private-next-pages/signup.js */ "vL9u")\n      if(false) {}\n      return mod\n    }]);\n  \n\n//# sourceURL=webpack:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?')},vL9u:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "gdfu");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "/MKj");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "nOHt");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "LAVF");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useInput = function useInput() {\n  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue),\n      value = _useState[0],\n      setter = _useState[1];\n\n  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n};\n\nvar Signup = function Signup() {\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      id = _useState2[0],\n      setId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      nick = _useState3[0],\n      setNick = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      password = _useState4[0],\n      setpassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      passwordCheck = _useState5[0],\n      setPasswordCheck = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      term = _useState6[0],\n      setTerm = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      passwordError = _useState7[0],\n      setPasswordError = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),\n      termError = _useState8[0],\n      setTermError = _useState8[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {\n    return state.user;\n  }),\n      isSigningUp = _useSelector.isSigningUp,\n      me = _useSelector.me;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    if (me) {\n      alert("\ub85c\uadf8\uc778\uc774 \ud655\uc778\ub418\uc5b4 \uba54\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.");\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");\n    }\n  }, [me && me.id]); // custom hook\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!term) {\n      return setTermError(true);\n    }\n\n    console.log({\n      id: id,\n      nick: nick,\n      password: password,\n      passwordCheck: passwordCheck,\n      term: term\n    });\n    dispatch({\n      type: "SIGN_UP_REQUEST",\n      data: {\n        userId: id,\n        nickname: nick,\n        password: password,\n        term: term\n      }\n    });\n  }, [id, nick, password, passwordCheck, term]);\n  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setId(e.target.value);\n  }, []);\n  var onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setNick(e.target.value);\n  }, []);\n  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setpassword(e.target.value);\n  }, []);\n  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {\n    setTermError(false);\n    setTerm(e.target.checked);\n  }, []);\n\n  if (me) {\n    return null;\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {\n    onSubmit: onSubmit,\n    style: {\n      padding: 10\n    }\n  }, __jsx("div", null, __jsx("label", {\n    htmlFor: "user-id"\n  }, "\\uC544\\uC774\\uB514"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {\n    name: "user-id",\n    value: id,\n    required: true,\n    onChange: onChangeId\n  })), __jsx("div", null, __jsx("label", {\n    htmlFor: "user-nick"\n  }, "\\uB2C9\\uB124\\uC784"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {\n    name: "user-nick",\n    value: nick,\n    required: true,\n    onChange: onChangeNick\n  })), __jsx("div", null, __jsx("label", {\n    htmlFor: "user-password"\n  }, "\\uBE44\\uBC00\\uBC88\\uD638"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {\n    name: "user-password",\n    type: "password",\n    value: password,\n    required: true,\n    onChange: onChangePassword\n  })), __jsx("div", null, __jsx("label", {\n    htmlFor: "user-password-check"\n  }, "\\uBE44\\uBC00\\uBC88\\uD638\\uCCB4\\uD06C"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {\n    name: "user-password-check",\n    type: "password",\n    value: passwordCheck,\n    required: true,\n    onChange: onChangePasswordCheck\n  }), passwordError && __jsx("div", {\n    style: {\n      color: "red"\n    }\n  }, "\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4.")), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {\n    name: "user-term",\n    onChange: onChangeTerm\n  }, "\\uC81C\\uB85C\\uCD08 \\uB9D0\\uC744 \\uC798 \\uB4E4\\uC744 \\uAC83\\uC744 \\uB3D9\\uC758\\uD569\\uB2C8\\uB2E4."), termError && __jsx("div", {\n    style: {\n      color: "red"\n    }\n  }, "\\uC57D\\uAD00\\uC5D0 \\uB3D9\\uC758\\uD574\\uC8FC\\uC138\\uC694.")), __jsx("div", {\n    style: {\n      marginTop: 10\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {\n    type: "primary",\n    htmlType: "submit",\n    loading: isSigningUp\n  }, "\\uAC00\\uC785\\uD558\\uAE30"))));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Signup);\n\n//# sourceURL=webpack:///./pages/signup.js?')}},[["OUKs","static/runtime/webpack.js","framework","aec7d165","commons","92e9d834d4e2803ad400ac329dbb3a217999426a","38993b654796d8ab6a2076055a82d6da4739f1ba","71a112ce4086df6c75fe393c55142c1df35991c9","b136f7b6f4816925c93c718804ff2f73c603bd3b"]]]);