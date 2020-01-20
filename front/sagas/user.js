import {
    all,
    fork,
    takeEvery,
    takeLatest,
    put,
    take,
    delay
} from "redux-saga/effects";
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from "../reducers/user";

function loginAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        // yield fork(logger); logger는 내 기록을 로깅하는 함수
        yield put({
            // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
            isSigningUp: true
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

function signUpAPI() {
    // 서버에 요청을 보내는 부분
}

function* signUp() {
    try {
        // yield fork(logger); logger는 내 기록을 로깅하는 함수
        // yield call(signUpAPI);
        yield delay(2000);
        throw new Error("에러러러러러");
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
