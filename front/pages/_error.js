import Error from "next/error";
import React from "react";
import PropTypes from "prop-types";

const MyError = ({ statusCode }) => {
    return (
        <div>
            <h1>{statusCode} 에러 발생</h1>
            {/* <Error statusCode={statusCode} /> */}
        </div>
    );
};

MyError.propTypes = {
    statusCode: PropTypes.number
};

MyError.defaultprops = {
    statusCode: 400
};

MyError.getInitialProps = async context => {
    const statusCode = context.res
        ? context.res.statusCode
        : context.err
        ? Error.statusCode
        : null;
    return { statusCode };
};

export default MyError;

// 페이지 없는 오류 페이지를 해당 페이지로 대체(404 에러)
