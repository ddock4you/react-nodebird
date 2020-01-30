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
    SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3065/api";

function loginAPI(loginData) {
    return axios.post("/user/login", loginData, {
        withCredentials: true
    });
}

function* login(action) {
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
    yield takeEvery(LOG_IN_REQUEST, login);
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

export default function* userSaga() {
    yield all([watchLogin(), watchSignUp()]);
}
