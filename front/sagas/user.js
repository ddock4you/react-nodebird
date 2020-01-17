import { all, fork, takeLatest, put, take, delay } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

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

function* watchLogin() {
    yield takeLatest(LOG_IN, login);
}

function* helloSaga() {
    console.log("before saga");
    while (true) {
        yield take(HELLO_SAGA);
        console.log("hello saga");
    }
}

export default function* userSaga() {
    yield helloSaga();
}
