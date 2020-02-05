import {
    all,
    fork,
    takeEvery,
    takeLatest,
    put,
    take,
    delay,
    call
} from "redux-saga/effects";
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE
} from "../reducers/user";
import axios from "axios";

function loginAPI(loginData) {
    return axios.post("/user/login", loginData, {
        withCredentials: true
    });
}

function* logIn(action) {
    try {
        const result = yield call(loginAPI, action.data);
        yield put({
            // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
            data: result.data
        });
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
}

function signUpAPI(signUpdata) {
    return axios.post("/user", signUpdata);
}

function* signUp(action) {
    try {
        // yield fork(logger); logger는 내 기록을 로깅하는 함수
        // yield call(signUpAPI);
        yield call(signUpAPI, action.data);
        yield put({
            // put은 dispatch 동일
            type: SIGN_UP_SUCCESS
        });
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function logOutAPI() {
    return axios.post(
        "/user/logout",
        {},
        {
            withCredentials: true
        }
    );
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            // put은 dispatch 동일
            type: LOG_OUT_SUCCESS
        });
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e
        });
    }
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI(userId) {
    return axios.get(userId ? `/user/${userId}` : "/user/", {
        withCredentials: true
    });
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        // console.log("loadUser action data confirm", action.data);
        yield put({
            // put은 dispatch 동일
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data // userId가 없으면 내 정보를 불러옴
        });
    } catch (e) {
        // loginAPI 실패
        console.log("load user failure error", e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
    yield all([watchLogin(), watchSignUp(), watchLogOut(), watchLoadUser()]);
}
