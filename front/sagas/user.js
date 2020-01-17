import {
    all,
    fork,
    takeEvery,
    takeLatest,
    put,
    take,
    delay
} from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";
const BYE_SAGA = "BYE_SAGA";

function loginAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        // yield call(loginAPI);
        yield delay(100);
        yield put({
            // put은 dispatch 동일
            type: LOG_IN_SUCCESS
        });
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        });
    }
}

function* hello() {
    yield delay(1000);
    yield put({
        type: BYE_SAGA
    });
}

function* watchHello() {
    yield takeLatest(HELLO_SAGA, hello);
}

function* watchLogin() {
    while (true) {
        yield take(LOG_IN);
        yield put({
            type: LOG_IN_SUCCESS
        });
    }
}

function watchSignUp() {}

export default function* userSaga() {
    yield all([watchHello(), watchLogin(), watchSignUp()]);
}
