import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Proptypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";

const Nodebird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"
                ></link>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

Nodebird.propTypes = {
    Component: Proptypes.elementType,
    store: Proptypes.object
};

// 고차 컴포넌트
export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(
        // middleware끼리 합성
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" // chrome redux devtools 사용 코드
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    );
    const store = createStore(reducer, initialState, enhancer);

    return store;
})(Nodebird);
