import React from "react";
import Head from "next/head";
import Proptypes from "prop-types";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import Helmet from "react-helmet";
// import App from 'next/app';

import AppLayout from "../components/AppLayout";
import reducer from "../reducers";
import rootSaga from "../sagas";
import { LOAD_USER_REQUEST } from "../reducers/user";

const Nodebird = ({ Component, store, pageProps }) => {
    // console.log(pageProps);
    return (
        <Provider store={store}>
            <Helmet
                title="NodeBird"
                htmlAttributes={{ lang: "ko" }}
                meta={[
                    {
                        charset: "UTF-8"
                    },
                    {
                        name: "viewport",
                        content:
                            "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
                    },
                    {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    },
                    {
                        name: "description",
                        content: "팥우유의 NodeBird SNS"
                    },
                    {
                        name: "og:title",
                        content: "NodeBird"
                    },
                    {
                        name: "og:description",
                        content: "팥우유의 NodeBird SNS"
                    },
                    {
                        property: "og:type",
                        content: "website"
                    }
                ]}
                link={[
                    {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    },
                    {
                        rel: "stylesheet",
                        href:
                            "https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"
                    },
                    {
                        rel: "stylesheet",
                        href:
                            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    },
                    {
                        rel: "stylesheet",
                        href:
                            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    }
                ]}
            />

            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    );
};

Nodebird.propTypes = {
    Component: Proptypes.elementType.isRequired,
    store: Proptypes.object.isRequired,
    pageProps: Proptypes.object.isRequired
};
// getInitialProps
// next에서 지원하는 react의 라이프 사이클같은 기능
// 서버에서 받은 동적인 데이터를 프론트에서 사용할 수 있음.
// react componentDidMount보다 더 빨리 실행됨.
// 서버에서도 실행됨.
// 서버 사이드 렌더링 작업을 할 때 용이함.
Nodebird.getInitialProps = async context => {
    //context -> next에서 내려주는 것
    // console.log(context);
    const { ctx, Component } = context;
    let pageProps = {};
    // store 안에 있는 로그인 정보를 getState 메서드를 통해 가져올 수 있음.
    const state = ctx.store.getState();
    // 클라이언트 -> 백엔드 서버간 통신할 땐 브라우저가 쿠키를 챙겨주나
    // 서버와 서버간 통신일 땐 ex)프론트 서버(서버사이드 렌더링) - 백엔드 서버
    // 개발자가 직접 쿠키를 전달해줘야 한다.
    const cookie = ctx.isServer ? ctx.req.headers.cookie : "";
    // console.log('쿠키', cookie);
    // axios를 통해 프론트 서버에서 백엔드 서버로 쿠키를 직접 전달
    //
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    if (!state.user.me) {
        ctx.store.dispatch({
            type: LOAD_USER_REQUEST
        });
    }
    if (Component.getInitialProps) {
        // Component에 getInitialProps가 있을 경우 실행
        pageProps = (await Component.getInitialProps(ctx)) || {}; // Component 컴포넌트에 props 전달(실행)
    }
    return { pageProps };
};

const configStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        sagaMiddleware,
        store => next => action => {
            console.log(action);
            next(action);
        }
    ];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares))
            : compose(
                  // middleware끼리 합성
                  applyMiddleware(...middlewares),
                  !options.isServer &&
                      window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" // chrome redux devtools 사용 코드
                      ? window.__REDUX_DEVTOOLS_EXTENSION__()
                      : f => f
              );
    const store = createStore(reducer, initialState, enhancer);
    // next에서 redux-saga를 이용해 서버사이드 렌더링을 가능하게 해주는 코드
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

// next-redux-saga -> next 서버에서 redux-saga를 사용할 수 있게 해주는 플러그인
// next-redux-saga 설치 후 모든 프론트영역을 감싸는 코드영역의 export 코드를 감싸준다(고차 컴포넌트)

// 고차 컴포넌트
export default withRedux(configStore)(withReduxSaga(Nodebird));
