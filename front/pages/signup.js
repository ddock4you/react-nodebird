import React, { useState } from "react";
import Head from "next/head";
import { Button, Checkbox, Form, Input } from "antd";
import AppLayout from "../components/AppLayout";

const Signup = () => {
    const [id, setId] = useState("");
    const [nick, setNick] = useState("");
    const [password, setpassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [term, setTerm] = useState("");

    const onSubmit = () => {};

    const onChangeId = e => {
        setId(e.target.value);
    };

    const onChangeNick = e => {
        setNick(e.target.value);
    };

    const onChangePassword = e => {
        setpassword(e.target.value);
    };

    const onChangePasswordCheck = e => {
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = () => {};

    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <AppLayout>
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
                        <label htmlFor="user-password-check">
                            비밀번호체크
                        </label>
                        <br />
                        <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                    </div>
                    <div>
                        <Checkbox name="user-term" onChange={onChangeTerm}>
                            제로초 말을 잘 들을 것을 동의합니다.
                        </Checkbox>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">
                            가입하기
                        </Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;
