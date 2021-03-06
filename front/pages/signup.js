import React, { useState, useCallback, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { SIGN_UP_REQUEST } from "../reducers/user";
import styled from "styled-components";

const SignupError = styled.div`
    color: red;
`;

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback(e => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Signup = () => {
    const [id, setId] = useState("");
    const [nick, setNick] = useState("");
    const [password, setpassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [term, setTerm] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [termError, setTermError] = useState("");
    const { isSigningUp, me } = useSelector(state => state.user);

    useEffect(() => {
        if (me) {
            alert("로그인이 확인되어 메인 페이지로 이동합니다.");
            Router.push("/");
        }
    }, [me && me.id]);

    // custom hook
    const dispatch = useDispatch();
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            if (!term) {
                return setTermError(true);
            }
            console.log({
                id,
                nick,
                password,
                passwordCheck,
                term
            });
            dispatch({
                type: "SIGN_UP_REQUEST",
                data: {
                    userId: id,
                    nickname: nick,
                    password,
                    term
                }
            });
        },
        [id, nick, password, passwordCheck, term]
    );

    const onChangeId = useCallback(e => {
        setId(e.target.value);
    }, []);

    const onChangeNick = useCallback(e => {
        setNick(e.target.value);
    }, []);

    const onChangePassword = useCallback(e => {
        setpassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback(
        e => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );

    const onChangeTerm = useCallback(e => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    if (me) {
        return null;
    }

    return (
        <>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        required
                        onChange={onChangeId}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nick}
                        required
                        onChange={onChangeNick}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && (
                        <SignupError style={{ color: "red" }}>
                            비밀번호가 일치하지 않습니다.
                        </SignupError>
                    )}
                </div>
                <div>
                    <Checkbox name="user-term" onChange={onChangeTerm}>
                        제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {termError && (
                        <SignupError style={{ color: "red" }}>
                            약관에 동의해주세요.
                        </SignupError>
                    )}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSigningUp}
                    >
                        가입하기
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;
