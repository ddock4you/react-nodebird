import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Proptypes from "prop-types";

// next.js 에서 넣어주는 props
const Nodebird = ({ Component }) => {
    return (
        <>
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
        </>
    );
};

Nodebird.propTypes = {
    Component: Proptypes.elementType
};

export default Nodebird;
