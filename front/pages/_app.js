import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Proptypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
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
    const store = createStore(reducer, initialState);
    // 이 곳에 sotre 커스터마이징
    return store;
})(Nodebird);
