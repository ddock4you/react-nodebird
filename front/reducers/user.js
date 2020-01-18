// store, 초기값

const dummyUser = {
    nickname: "팥우유",
    Post: [],
    Followings: [],
    Followers: [],
    signUpData: []
};

export const initialState = {
    isLoggedIn: false,
    user: null
};
//
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const INCREMENT_NUMBER = "INCREMENT_NUMBER"; // 동기 요청

// 실제 액션
export const signUpAction = data => {
    return {
        type: SIGN_UP_REQUEST,
        data
    };
};

export const loginAction = {
    type: LOG_IN_REQUEST
};
export const logoutAction = {
    type: LOG_OUT_REQUEST
};

// 리듀서 -> Action의 결과로 state를 어떻게 바꿀지 정의
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                lodingData: action.data,
                isLoading: true
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                isLoding: false
            };
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                signUpdata: action.data
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
};

export default reducer;
