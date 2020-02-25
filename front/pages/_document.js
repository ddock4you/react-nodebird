import React from "react";
import Helmet from "react-helmet";
import Document, { Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import PropTypes from "prop-types";

class MyDocument extends Document {
    static async getInitialProps(context) {
        // helmet 서버사이드 렌더링 시작
        // page 변수 추가하기 전까지는 홈페이지가 표시되지 않아서 아래initialProps를 사용하여 화면단 표시
        // const initialProps = await Document.getInitialProps(context);
        // App === _App.js
        // Document에서 App을 실행하여 렌더링 시켜줘야 함.
        const sheet = new ServerStyleSheet();
        const page = context.renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return {
            ...page,
            /*...initialProps,*/ helmet: Helmet.renderStatic(),
            styleTags
        };
    }

    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        // console.log(helmet);
        return (
            <html {...htmlAttrs}>
                <head>
                    {this.props.styleTags}
                    {Object.values(helmet).map(el => el.toComponent())}
                </head>
                <body {...bodyAttrs}>
                    <Main />
                    {process.env.NODE_ENV === "production" && (
                        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
                    )}
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.propTypes = {
    helmet: PropTypes.object.isRequired,
    styleTags: PropTypes.object.isRequired
};

export default MyDocument;
