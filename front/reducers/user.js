// store, 초기값
const initialState = {
    isLoggedIn = false,
    user: {}
};

const LOG_IN = 'LOG_IN'; // 액션의 이름
const LOG_OUT = 'LOG_OUT';

// 실제 액션
const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '팥우유'
    }
}
const logoutAction = {
    type: LOG_OUT
}

// 리듀서 -> Action의 결과로 state를 어떻게 바꿀지 정의
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
    }
}