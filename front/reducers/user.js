// store, 초기값

const dummyUser = {
    nickname: "팥우유",
    Post: [],
    Followings: [],
    Followers: []
};

export const initialState = {
    isLoggedIn: false,
    user: null
};

export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_OUT = "LOG_OUT";

// 실제 액션
export const loginAction = {
    type: LOG_IN
};
export const logoutAction = {
    type: LOG_OUT
};

// 리듀서 -> Action의 결과로 state를 어떻게 바꿀지 정의
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
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
